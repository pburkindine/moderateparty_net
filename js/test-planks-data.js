// Tests for js/planks-data.js — the card deck's content integrity.
// Run: node js/test-planks-data.js   (Node 18+, no dependencies)

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

process.chdir(path.join(__dirname, '..'));

global.window = {};
require('./planks-data.js');
const PLANKS = global.window.PLANKS;
const SECTIONS = global.window.PLANK_SECTIONS;

// Anchors that existed in various-issues.html before the card rebuild.
// Twenty years of inbound links never break (todo/README.md, principle 5).
const LEGACY_ANCHORS = (
  'slogans opening gravity jerk politics capitalism taxes ' +
  'instantrunoffvoting rankedchoice irv marijuana pot ganja thegreen weed grass ' +
  'education jobs k-jobs teachers obamacare aca affordable-care-act healthcare medicine ' +
  'theunions unions sustainability environmentalism environment nature pollution ' +
  'animals farmanimals animalrights classyfarming ' +
  'guncontrollers guns defense immigration ' +
  'oneworldgovernment one-world-government unitednations ' +
  'tariffs internalizedeconomies insourcing goldstandard ' +
  'faith religion family parenting world-peace israel palestine ' +
  'cultures diversity closing-remarks'
).split(/\s+/);

test('planks exist and have all required fields', () => {
  assert.ok(PLANKS.length >= 20, `expected 20+ planks, got ${PLANKS.length}`);
  for (const p of PLANKS) {
    for (const f of ['id', 'section', 'emoji', 'title', 'tag', 'body']) {
      assert.ok(p[f], `plank ${p.id || '?'} missing field: ${f}`);
    }
    assert.ok(Array.isArray(p.anchors), `plank ${p.id} anchors must be an array`);
  }
});

test('ids are unique', () => {
  const seen = new Set();
  for (const p of PLANKS) {
    assert.ok(!seen.has(p.id), `duplicate plank id: ${p.id}`);
    seen.add(p.id);
  }
});

test('every section is defined in PLANK_SECTIONS', () => {
  for (const p of PLANKS) {
    assert.ok(SECTIONS[p.section], `plank ${p.id} has unknown section: ${p.section}`);
  }
});

test('anchor aliases never collide across planks', () => {
  const owner = {};
  for (const p of PLANKS) {
    for (const a of p.anchors) {
      if (!a) continue;
      assert.ok(!owner[a] || owner[a] === p.id,
        `alias "${a}" claimed by both ${owner[a]} and ${p.id}`);
      owner[a] = p.id;
    }
  }
});

test('every legacy anchor from the 2007 scroll resolves to a card', () => {
  const known = new Set();
  for (const p of PLANKS) {
    known.add(p.id);
    p.anchors.forEach((a) => a && known.add(a));
  }
  const unmapped = LEGACY_ANCHORS.filter((a) => !known.has(a));
  assert.deepStrictEqual(unmapped, [], `legacy anchors unmapped: ${unmapped.join(', ')}`);
});

test('all local media files referenced actually exist on disk', () => {
  const missing = [];
  for (const p of PLANKS) {
    for (const m of p.media || []) {
      const src = m.img || m.v;
      if (src && !/^https?:/.test(src) && !fs.existsSync(src)) {
        missing.push(`${p.id}: ${src}`);
      }
    }
    const re = /src="(img\/[^"]+)"/g;
    let mm;
    while ((mm = re.exec(p.body))) {
      if (!fs.existsSync(mm[1])) missing.push(`${p.id} body: ${mm[1]}`);
    }
  }
  assert.deepStrictEqual(missing, [], `missing media files:\n${missing.join('\n')}`);
});

test('body text keeps the load-bearing lines verbatim', () => {
  const all = PLANKS.map((p) => p.body).join('\n');
  for (const line of [
    'Society is maybe a canvas, not a battlefield',
    'your vote goes to your second and third',
    'Obamacare is what works',
    'right to armed bears',
    'Share the joint and stay different',
  ]) {
    assert.ok(all.includes(line), `load-bearing line missing: "${line}"`);
  }
});
