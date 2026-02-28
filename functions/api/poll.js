// Cloudflare Pages Function for the SUDDEN QUESTION poll
// Every vote is a git commit. This is a 1000-year website.

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

async function fetchPollFile(env) {
  const repo = env.GITHUB_REPO;
  const branch = env.GITHUB_BRANCH || 'main';
  const path = env.POLL_FILE_PATH || 'moderateparty_net/poll-votes.json';

  const res = await fetch(
    `https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`,
    {
      headers: {
        Authorization: `token ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'moderateparty-poll',
      },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub fetch failed: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  const content = JSON.parse(atob(data.content));
  return { content, sha: data.sha };
}

async function commitPollFile(env, content, sha) {
  const repo = env.GITHUB_REPO;
  const branch = env.GITHUB_BRANCH || 'main';
  const path = env.POLL_FILE_PATH || 'moderateparty_net/poll-votes.json';
  const total = content.yes + content.no + content.ahh;

  const res = await fetch(
    `https://api.github.com/repos/${repo}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `token ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'moderateparty-poll',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `poll: vote #${total} recorded`,
        content: btoa(JSON.stringify(content, null, 2) + '\n'),
        sha,
        branch,
      }),
    }
  );

  if (!res.ok) {
    const body = await res.text();
    if (res.status === 409 || body.includes('does not match')) {
      throw new Error('SHA_MISMATCH');
    }
    throw new Error(`GitHub commit failed: ${res.status} ${body}`);
  }

  return await res.json();
}

export async function onRequest(context) {
  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // GET — return current counts
    if (context.request.method === 'GET') {
      const { content } = await fetchPollFile(context.env);
      return new Response(JSON.stringify(content), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // POST — cast a vote
    if (context.request.method === 'POST') {
      const { vote } = await context.request.json();

      if (!['yes', 'no', 'ahh'].includes(vote)) {
        return new Response(
          JSON.stringify({ error: 'Invalid vote. Try yes, no, or ahh.' }),
          { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
      }

      // Retry up to 3 times on SHA mismatch (race condition)
      let lastError;
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          const { content, sha } = await fetchPollFile(context.env);
          content[vote]++;
          await commitPollFile(context.env, content, sha);
          return new Response(JSON.stringify(content), {
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        } catch (err) {
          if (err.message === 'SHA_MISMATCH' && attempt < 2) {
            lastError = err;
            continue;
          }
          throw err;
        }
      }
      throw lastError;
    }

    return new Response('Method not allowed', {
      status: 405,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Poll error:', error);
    return new Response(
      JSON.stringify({
        error: 'The poll has encountered a crisis of confidence. Try again.',
        details: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
}
