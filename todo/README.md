# todo/ — The Hatching Plan

Story tracker for the moderateparty.net modernization program ("the egg was granted to be hatched").
Plan authored 2026-08-07 by Pete + Claude.

## Numbering convention

Stories are numbered **MP-XYY**:

- **MP** — moderate Party
- **X** (hundreds digit) — the track:
  - **1xx — The Artifact**: modernize the site itself
  - **2xx — Distribution**: reach people without a platform's permission
  - **3xx — Collaboration**: structure that makes collaborators safe
- **YY** — sequence within the track, in rough priority/dependency order

One story per file: `MP-XYY-short-slug.md`. Each story carries a header block:

```
ID / Title / Track / Status / Priority / Depends-on
```

**Status values**: `todo` → `in-progress` → `done` (or `blocked`, `cancelled`).
Update the status line in the story file itself; this README's index is a convenience
and may lag. New stories take the next free number in their track — numbers are
never reused, cancelled stories keep theirs.

## Index

### Track 1 — The Artifact
- [MP-101](MP-101-planks-card-rebuild.md) — Rebuild various-issues.html as a card-based planks library
- [MP-102](MP-102-shareable-plank-units.md) — Per-plank shareable units (OG images + deep-link unfurls)
- [MP-103](MP-103-seo-and-bones.md) — SEO, performance, mobile, accessibility pass
- [MP-104](MP-104-rearm-super-gramma.md) — Re-enable Super Gramma chat, grounded on MASTER_FACTS

### Track 2 — Distribution
- [MP-201](MP-201-meta-ads-appeal.md) — Meta political-ads authorization appeal
- [MP-202](MP-202-email-list.md) — Owned audience: "Letters from the moderate Party" email list
- [MP-203](MP-203-x-content-engine.md) — X content engine + cheap Bluesky/Threads mirrors
- [MP-204](MP-204-reddit-participation.md) — Genuine-participation Reddit presence
- [MP-205](MP-205-rcv-wave.md) — Be linkable when the Ranked Choice Voting wave comes looking

### Track 3 — Collaboration
- [MP-301](MP-301-keys-inventory.md) — Keys inventory & lockdown (Pete holds all keys, forever)
- [MP-302](MP-302-trust-tier-zero.md) — Trust-tier-zero contributor structure
- [MP-303](MP-303-copyleft-license.md) — Copyleft licensing decision (make the egg unstealable by freeing it)

## Standing principles

1. **The egg is the domain, the name, the voice, and Pete.** None of that is in the repo; none of it can be forked.
2. **1000-year website doctrine**: no frameworks, no build step, vanilla HTML/CSS/JS, zero dependencies that can rot.
3. **index.html keeps its 2005 soul.** We modernize the reference pages, not the vibe.
4. **Never depend on a platform's mercy.** Owned channels (domain, email) are load-bearing; rented ones (X, Meta) are amplifiers.
5. **Twenty years of inbound links never break.** Every legacy anchor is preserved in every rebuild.

## Related legacy files

- `../TODO-2025-10-18.md` — earlier TOC/anchor punch list (mostly done; superseded by MP-101)
- `../TODO_FACTS.md` — facts research tracker (feeds MP-104)
