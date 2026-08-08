# MP-302 — Trust-tier-zero contributor structure

- **ID**: MP-302
- **Track**: 3 — Collaboration
- **Status**: todo
- **Priority**: P2 — build the container before the collaborators arrive
- **Depends-on**: MP-301 (keys locked first)

## Why

"Very scared of collabs" is rational when collaboration means handing over
keys. So define roles where collaborators get **zero keys**: they propose,
Pete disposes. Then saying yes to help costs nothing and risks nothing —
the fear was about the structure, and the structure is now safe.

## What

1. **Trust tiers, written down** (CONTRIBUTING.md in the repo root):
   - **Tier 0** (anyone): PRs Pete merges, meme drafts, fact-checking, copy
     suggestions. No keys, no accounts, no direct pushes.
   - **Tier 1** (earned, months of tier 0): triage/labels, maybe a social
     posting queue that Pete approves before it fires.
   - **Tier ∞** (nobody but Pete): domains, registrar, Cloudflare, merge
     rights, account credentials. Not earnable. Written down so it never has
     to be awkwardly negotiated.
2. **Repo protections that enforce it**: branch protection on main
   (PRs-only for outside contributors), no collaborator write access —
   fork-and-PR is the only path in.
3. A short "who we're looking for" note in the site's voice — steel-manners,
   meme-makers, fact-checkers — so eligible strangers can self-identify
   without Pete having to go recruiting.
4. Claude's standing role noted: tireless tier-0-with-context labor;
   Pete merges.

## Acceptance

- [ ] CONTRIBUTING.md exists, tiers explicit, tier-∞ explicit
- [ ] Branch protection verified (test with a dummy fork PR)
- [ ] First outside contribution handled entirely through the structure,
      Pete's keys untouched, Pete's blood pressure unchanged
