# MP-101 — Rebuild various-issues.html as a card-based planks library

- **ID**: MP-101
- **Track**: 1 — The Artifact
- **Status**: todo
- **Priority**: P0 — first mover; everything downstream lands on this
- **Depends-on**: nothing

## Why

various-issues.html is a ~1,200-line long scroll written in 2007-8. It's the
substantive heart of the site (the planks) presented in the least navigable form.
A card library turns it from an endurance read into a browsable reference — and
into the raw material for MP-102's shareable units.

## What

1. Each plank becomes a **card**: title, one-line position summary, expand/collapse
   for the full original text. The original prose is preserved verbatim — cards are
   packaging, not rewrites.
2. **Filtering / grouping** that mirrors the site's own taxonomy: the "In General"
   section, "Secret Liberal" planks, "Red-Pilled Gun Nut" planks, "World Peace Today"
   — plus an all-planks view.
3. Sticky TOC becomes real card navigation (click → scroll/open that card).
4. **Every legacy `<a name>` anchor is preserved** — all ~40+, including the alias
   swarms (`#pot` `#ganja` `#weed` `#grass` `#thegreen`, `#obamacare` `#aca`
   `#affordable-care-act` `#healthcare`, etc.). An inbound 2009 link must land on
   the right card, opened.
5. `facts/` citations surface as footnotes on relevant cards (integration point
   for the MASTER_FACTS work).
6. **Zero dependencies**: vanilla HTML/CSS/JS per the 1000-year doctrine. No card
   framework, no build step.
7. Ship as a **preview page alongside the current one** (e.g. `planks-preview.html`)
   until Pete blesses it; then it replaces various-issues.html at the same URL.

## Acceptance

- [ ] All plank text present, verbatim, expandable
- [ ] All legacy anchors resolve to the correct opened card (spot-check the alias swarms)
- [ ] Works with JS disabled (cards degrade to the readable long scroll)
- [ ] Mobile usable at 320px; desktop pleasant at 1440px
- [ ] No external dependencies added
- [ ] Pete has clicked around the preview and said some version of "yes"
