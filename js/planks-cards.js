// planks-cards.js — deck engine: swipe, flip, zoom, microlearning progress
// (hatchery branch / MP-101). Vanilla JS, zero dependencies, 1000-year doctrine.

(function () {
  'use strict';

  var PLANKS = window.PLANKS;
  var SECTIONS = window.PLANK_SECTIONS;
  var SEEN_KEY = 'mp_planks_seen_v1';

  var deckEl = document.getElementById('deck');
  var chipsEl = document.getElementById('chips');
  var progressEl = document.getElementById('progress');
  var fillEl = document.getElementById('progress-fill');

  var filter = 'all';
  var visible = [];      // planks currently in the deck
  var current = 0;       // index into visible
  var seen = loadSeen();

  // anchor alias → plank id (legacy #weed, #aca, … keep working)
  var aliasMap = {};
  PLANKS.forEach(function (p) {
    aliasMap[p.id] = p.id;
    p.anchors.forEach(function (a) { if (a) aliasMap[a] = p.id; });
  });

  function loadSeen() {
    try { return new Set(JSON.parse(localStorage.getItem(SEEN_KEY) || '[]')); }
    catch (e) { return new Set(); }
  }
  function saveSeen() {
    try { localStorage.setItem(SEEN_KEY, JSON.stringify(Array.from(seen))); }
    catch (e) { /* private mode etc. — progress just doesn't persist */ }
  }

  // ——— build ———

  function buildChips() {
    var defs = [{ key: 'all', label: 'All planks', color: '#2c2a26' }].concat(
      Object.keys(SECTIONS).map(function (k) {
        return { key: k, label: SECTIONS[k].label, color: SECTIONS[k].color };
      })
    );
    defs.forEach(function (d) {
      var b = document.createElement('button');
      b.className = 'chip' + (d.key === filter ? ' active' : '');
      b.textContent = d.label;
      b.style.setProperty('--chip-color', d.color);
      b.addEventListener('click', function () {
        filter = d.key;
        Array.prototype.forEach.call(chipsEl.children, function (c) {
          c.classList.remove('active');
        });
        b.classList.add('active');
        buildDeck();
        go(0, true);
      });
      chipsEl.appendChild(b);
    });
  }

  function cardHTML(p) {
    var color = SECTIONS[p.section].color;
    return (
      '<div class="card' + (seen.has(p.id) ? ' seen' : '') + '" data-id="' + p.id + '" style="--accent-color:' + color + '">' +
        '<div class="face front">' +
          '<span class="seen-check">✓ seen</span>' +
          '<div class="section-label">' + SECTIONS[p.section].label + '</div>' +
          '<div class="emoji">' + p.emoji + '</div>' +
          '<h2>' + p.title + '</h2>' +
          '<div class="tag">' + p.tag + '</div>' +
          '<div class="hint-flip">tap to flip</div>' +
        '</div>' +
        '<div class="face back">' +
          '<div class="back-head">' +
            '<button class="iconbtn btn-unflip" title="Flip back" aria-label="Flip back">↩</button>' +
            '<h3>' + p.emoji + ' ' + p.title + '</h3>' +
            '<button class="iconbtn btn-zoom" title="Zoom" aria-label="Zoom">⤢</button>' +
          '</div>' +
          '<div class="back-body">' + p.body + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function buildDeck() {
    visible = PLANKS.filter(function (p) {
      return filter === 'all' || p.section === filter;
    });
    deckEl.innerHTML = visible.map(function (p) {
      return '<div class="slot">' + cardHTML(p) + '</div>';
    }).join('');
    updateProgress();
  }

  // ——— navigation ———

  function go(i, instant) {
    current = Math.max(0, Math.min(i, visible.length - 1));
    var slot = deckEl.children[current];
    if (slot) {
      deckEl.scrollTo({
        left: slot.offsetLeft - deckEl.offsetLeft,
        behavior: instant ? 'auto' : 'smooth'
      });
    }
    updateProgress();
    if (visible[current]) {
      history.replaceState(null, '', '#' + visible[current].id);
    }
  }

  // keep `current` in sync with finger swipes
  var scrollTimer = null;
  deckEl.addEventListener('scroll', function () {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      var w = deckEl.clientWidth;
      var i = Math.round(deckEl.scrollLeft / (w + 14));
      if (i !== current && visible[i]) {
        current = i;
        updateProgress();
        history.replaceState(null, '', '#' + visible[current].id);
      }
    }, 80);
  });

  function updateProgress() {
    var learned = visible.filter(function (p) { return seen.has(p.id); }).length;
    progressEl.textContent =
      (visible.length ? current + 1 : 0) + '/' + visible.length +
      ' · ✓' + learned;
    fillEl.style.width = visible.length
      ? Math.round((learned / visible.length) * 100) + '%'
      : '0%';
  }

  // ——— flip & zoom (event delegation) ———

  function cardOf(el) {
    while (el && el !== deckEl && !el.classList.contains('card')) el = el.parentNode;
    return el === deckEl ? null : el;
  }

  function markSeen(card) {
    var id = card.getAttribute('data-id');
    if (!seen.has(id)) {
      seen.add(id);
      saveSeen();
      card.classList.add('seen');
      updateProgress();
    }
  }

  function flip(card) {
    card.classList.add('flipped');
    markSeen(card);
  }
  function unflip(card) {
    if (card.classList.contains('zoomed')) unzoom(card);
    card.classList.remove('flipped');
  }
  function zoom(card) {
    card.classList.add('zoomed', 'flipped');
    document.body.classList.add('zoomed');
    markSeen(card);
  }
  function unzoom(card) {
    card.classList.remove('zoomed');
    document.body.classList.remove('zoomed');
  }

  deckEl.addEventListener('click', function (e) {
    var card = cardOf(e.target);
    if (!card) return;

    if (e.target.closest && e.target.closest('a')) {
      var a = e.target.closest('a');
      var href = a.getAttribute('href') || '';
      if (href.charAt(0) === '#') {          // in-deck jump (e.g. "service tiles?")
        e.preventDefault();
        openById(aliasMap[href.slice(1)]);
      }
      return;                                 // real links behave normally
    }
    if (e.target.closest && e.target.closest('.btn-unflip')) { unflip(card); return; }
    if (e.target.closest && e.target.closest('.btn-zoom')) {
      card.classList.contains('zoomed') ? unzoom(card) : zoom(card);
      return;
    }
    if (!card.classList.contains('flipped')) flip(card);
  });

  function openById(id, instant) {
    if (!id) return;
    // an off-filter target needs the filter widened
    var inVisible = visible.some(function (p) { return p.id === id; });
    if (!inVisible) {
      filter = 'all';
      Array.prototype.forEach.call(chipsEl.children, function (c, idx) {
        c.classList.toggle('active', idx === 0);
      });
      buildDeck();
    }
    var i = visible.findIndex(function (p) { return p.id === id; });
    if (i < 0) return;
    go(i, instant);
    var card = deckEl.children[i] && deckEl.children[i].querySelector('.card');
    if (card) setTimeout(function () { flip(card); }, instant ? 150 : 450);
  }

  // ——— keyboard ———

  document.addEventListener('keydown', function (e) {
    var card = deckEl.children[current] && deckEl.children[current].querySelector('.card');
    if (e.key === 'Escape' && card) {
      card.classList.contains('zoomed') ? unzoom(card) : unflip(card);
    } else if (e.key === 'ArrowRight') { go(current + 1); }
    else if (e.key === 'ArrowLeft') { go(current - 1); }
    else if ((e.key === ' ' || e.key === 'Enter') && card &&
             !/BUTTON|A|INPUT/.test(document.activeElement.tagName)) {
      e.preventDefault();
      card.classList.contains('flipped') ? unflip(card) : flip(card);
    } else if ((e.key === 'z' || e.key === 'Z') && card) {
      card.classList.contains('zoomed') ? unzoom(card) : zoom(card);
    }
  });

  document.getElementById('btn-prev').addEventListener('click', function () { go(current - 1); });
  document.getElementById('btn-next').addEventListener('click', function () { go(current + 1); });
  document.getElementById('btn-shuffle').addEventListener('click', function () {
    // Fisher–Yates on the underlying order, then rebuild
    for (var i = PLANKS.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = PLANKS[i]; PLANKS[i] = PLANKS[j]; PLANKS[j] = t;
    }
    buildDeck();
    go(0, true);
  });

  // ——— init ———

  buildChips();
  buildDeck();

  var hash = location.hash.replace('#', '');
  if (hash && aliasMap[hash]) {
    openById(aliasMap[hash], true);
  } else {
    updateProgress();
  }
})();
