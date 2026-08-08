# MP-104 — Re-enable Super Gramma chat, grounded on MASTER_FACTS

- **ID**: MP-104
- **Track**: 1 — The Artifact
- **Status**: todo
- **Priority**: P1 — a feature nobody else on the political internet has
- **Depends-on**: nothing hard; pairs well with MP-101 footnotes

## Why

An AI gramma who explains ranked choice voting warmly and cites her sources is a
genuine differentiator, and she's sitting in the repo disabled
(`functions/api/chat.js` + `js/super-gramma-chat.js`).

## What

1. **Ground the system prompt in `facts/MASTER_FACTS.md`** (pending Pete's review
   of that file — see `TODO_FACTS.md`): claims come with citations, and Gramma
   says "I don't know, honey" instead of inventing.
2. **Model/provider refresh**: chat.js currently calls GPT-4o-mini; evaluate
   current options for cost/quality (consult the claude-api skill before picking
   an Anthropic model). Keep the key server-side in Cloudflare env vars as today.
3. **Abuse/cost guardrails**: rate limiting per IP, max tokens per reply,
   monthly budget alarm — so re-arming her can't run up a bill or become a
   free API for randos.
4. **Re-enable the widget** on index (and maybe the planks page), with the
   existing tests (`js/test-super-gramma-chat.js`) updated and passing.
5. Log nothing personal; this site wants nothing from its visitors.

## Acceptance

- [ ] Pete has reviewed/blessed MASTER_FACTS content going into the prompt
- [ ] Gramma answers plank questions with quotes + links to the site
- [ ] Rate limiting verified; cost ceiling documented here
- [ ] `node js/test-super-gramma-chat.js` passes
- [ ] Widget live on index.html without wrecking page load
