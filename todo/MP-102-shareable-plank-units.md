# MP-102 — Per-plank shareable units (OG images + deep-link unfurls)

- **ID**: MP-102
- **Track**: 1 — The Artifact
- **Status**: todo
- **Priority**: P0 — the single biggest distribution unlock, pure tech work
- **Depends-on**: MP-101 (cards define the units)

## Why

Today the whole site shares as one blob (one OG image, one description). After
this story it shares as ~15 different things: each plank unfurls as its own
card on X, iMessage, Reddit, everywhere. Distribution ammunition that no
platform can revoke.

## What

1. A **per-plank landing route** — either lightweight per-plank pages
   (`/planks/healthcare.html`) or fragment-aware share pages — each with its own
   `og:title`, `og:description`, `og:image`, and Twitter Card tags. (Crawlers
   ignore `#fragments`, so real per-plank URLs are required for unfurls; those
   pages redirect/canonicalize humans into the MP-101 card view.)
2. **OG image per plank**, on-brand: the site's voice, not corporate-slick.
   Static PNGs generated once and committed (1000-year doctrine — no image
   service dependency).
3. Short-link scheme worth saying out loud: `moderateparty.net/planks/pot` etc.
4. Legacy anchor URLs keep working and canonical-tag to the new units.

## Acceptance

- [ ] Pasting a plank URL into X, iMessage, and Discord unfurls that plank's own card
- [ ] Every plank has a distinct OG image committed to the repo
- [ ] Canonical tags prevent SEO duplication between card view and share pages
- [ ] No external image-generation or redirect service in the serving path
