// worker.js — Cloudflare Worker entry for moderateparty.net
// Migration from Cloudflare Pages (whose asset-upload API broke ~Aug 2026)
// to Workers static assets. Same repo, same $0/mo, same 1000-year doctrine.
//
// The existing Pages Functions in functions/api/ are reused as-is via a thin
// adapter: Workers get fetch(request, env, ctx); Pages Functions expect a
// context object. Everything that isn't /api/* falls through to static assets.

import { onRequest as pollHandler } from './functions/api/poll.js';
import { onRequest as chatHandler } from './functions/api/chat.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/poll') {
      return pollHandler({ request, env, waitUntil: ctx.waitUntil.bind(ctx) });
    }
    if (url.pathname === '/api/chat') {
      return chatHandler({ request, env, waitUntil: ctx.waitUntil.bind(ctx) });
    }

    return env.ASSETS.fetch(request);
  },
};
