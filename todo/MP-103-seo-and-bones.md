# MP-103 — SEO, performance, mobile, accessibility pass

- **ID**: MP-103
- **Track**: 1 — The Artifact
- **Status**: todo
- **Priority**: P1
- **Depends-on**: MP-101 (do the bones pass on the new pages, not the old scroll)

## Why

moderateparty.net has ranked since ~2005 — real domain authority sitting idle.
"Ranked choice voting explained," "steel man technique," "moderate party" are
winnable searches with modern pages. Organic search doesn't ban you and doesn't
charge you.

## What

1. **Structured data**: schema.org (WebSite, Article/FAQPage where honest),
   proper titles/descriptions per page (several pages currently share the
   homepage's meta or have none).
2. **Sitemap refresh** (sitemap.xml is stale) + robots sanity check.
3. **Performance**: image sizing/compression in img/ (100+ files, some huge —
   android-chrome-512 is 383KB), lazy-loading below the fold, defer non-critical
   scripts. Keep the jQuery header-load pattern but stop it causing layout shift.
4. **Accessibility**: alt text everywhere, heading hierarchy, contrast on the
   neon links, keyboard-navigable cards (feeds back into MP-101).
5. **Mobile**: the reference pages usable one-handed at 320px.
6. Measure before/after with Lighthouse; keep scores in this file.

## Acceptance

- [ ] Lighthouse: meaningful lift in all four categories on index + planks (record numbers here)
- [ ] Every page has distinct, honest title/description/OG tags
- [ ] sitemap.xml reflects reality; Search Console shows pages indexed
- [ ] No vibe casualties — Pete confirms the soul survived the optimization
