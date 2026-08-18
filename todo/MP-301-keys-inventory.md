# MP-301 — Keys inventory & lockdown (Pete holds all keys, forever)

- **ID**: MP-301
- **Track**: 3 — Collaboration
- **Status**: todo
- **Priority**: P1 — the precondition that makes every future collaboration safe
- **Depends-on**: nothing

## Why

The paranoia is solved by structure, not trust. If every key is inventoried,
Pete-held, and recoverable, then no collaborator — human or otherwise — can
take or break anything that matters. The egg (domains, name, accounts, voice)
was never in the repo; this story proves it and locks it.

## What

1. **Inventory every key** (list lives OFF-repo — a private note, not this file;
   this file only tracks that it exists and is current):
   domains/registrar (moderateparty.com/.net, surfchristian.net,
   hippychristian.net, the rest), Cloudflare (Pages, R2, env secrets), GitHub,
   the GITHUB_TOKEN used by the poll function, OpenAI key, Google (GTM/Ads/
   Search Console), Meta, X, email accounts behind all of the above.
2. **Lockdown pass**: 2FA everywhere, recovery codes stored physically,
   registrar lock on the domains, auto-renew + payment method verified (the
   most common way a 20-year domain dies is a lapsed card).
3. **Token hygiene**: the poll's GITHUB_TOKEN scoped to the single repo
   (fine-grained PAT), rotation date noted; OpenAI key spending cap.
4. **Succession note**: a sealed where-everything-is document so the 1000-year
   website can outlive any single laptop.

## Live findings from the Aug 2026 deploy outage (do these first)

- [ ] **Mint a new GitHub fine-grained PAT** for the poll (expired ~spring 2026;
      poll writes are down). Scope: repo `moderateparty_net` only, permission:
      Contents read/write. github.com → Settings → Developer settings →
      Fine-grained tokens.
- [ ] **Store it as an encrypted secret, not plaintext**: the old PAT sat as a
      plain env var readable via API. Set the new one with
      `npx wrangler pages secret put GITHUB_TOKEN --project-name=moderateparty-net`
      then delete the plaintext env var. Rotate/revoke the old PAT on GitHub.
- [ ] **Recover the Cloudflare dashboard login** — "email not found" on the
      address tried. Clues: whichever inbox received Pages build-failure emails
      Aug 7-18; or the forgot-email flow with domain moderateparty.net.
- [ ] The Terraform API token (infra repo tfvars) lacks Workers permissions —
      fine for now (Pages healed), but add Workers Scripts:Edit when minting
      its successor if the worker.js escape pod ever needs launching.

## Acceptance

- [ ] Off-repo inventory exists and Pete knows where it is
- [ ] 2FA + recovery codes on every account
- [ ] Domains registrar-locked with verified auto-renew
- [ ] Tokens minimally scoped, caps set
- [ ] Succession note written and stored
