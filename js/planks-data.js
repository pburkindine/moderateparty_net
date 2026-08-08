// planks-data.js — the planks as card data (hatchery branch / MP-101)
// Body text is Pete's original prose from various-issues.html, verbatim.
// Cards are packaging, not rewrites. Every legacy anchor alias maps to a card.

window.PLANKS = [
  {
    id: 'start-here',
    anchors: ['top', 'opening'],
    section: 'general',
    emoji: '👋',
    title: 'Start Here',
    tag: 'Whatsa whatsa moderate party....',
    body: `
      <p><u>Q: What are your qualifications?</u>: Nothin' :D<br/>
      <u>Q: What do you know about global economics?</u>: Nothin' :D</p>
      <p><u>Q: Are you in politics? What's your deal, bub?!</u>: No, I just found this
      website and filled it in as a "hobby for God" in 2005 🙂 I'm Pete, I'm a dad, a gamer,
      and an amateur musician. I just do what I'm told 'round here :D</p>
      <p>It's not centrism; we take sides. We just don't start from knowing who's right,
      let us think about it for a minute, SHEESH.</p>
      <p>"I have fences on both sides of my house," so to speak.</p>
      <p><a href="faq.html" target="_blank">More FAQ</a></p>
      <p class="hint">Swipe for the planks. Tap a card to flip it. ⤢ zooms.</p>`
  },
  {
    id: 'slogans',
    anchors: ['slogans'],
    section: 'general',
    emoji: '📣',
    title: 'The Slogans Part',
    tag: '"We should thank our lucky stars we have people of all stripes."',
    body: `
      <ul>
        <li>"We should thank our lucky stars we have people of all stripes."</li>
        <li>Or, "We're a genius"</li>
        <li>Or like, "It's all just cooked right in to that big pasketti-casserole-dish in the sky."</li>
        <li>Or um, "Society is the Product"</li>
        <li>Or, <span class="smallcaps">"Think Inter-Planetary"</span></li>
        <li>Or uh, "Like a car rally, not a car race"?</li>
        <li>Or, "Oh, he's a character, all right."</li>
      </ul>`
  },
  {
    id: 'gravity',
    anchors: ['gravity'],
    section: 'general',
    emoji: '🌀',
    title: 'Windmilling & "Gravity is Up"',
    tag: 'Every issue really has two sides with merit.',
    body: `
      <p><u>Windmilling</u></p>
      <p>Sometimes the other fellow will freak out and windmill at you. People hate arguing.</p>
      <p><u>"Gravity is Up"</u></p>
      <p>No! <a href="not-complicated.html" target="_blank">Gravity is down.</a>
      That's what everyone thinks, on every side. So not just every issue really has two
      sides with merit, if you see what I mean.</p>
      <p>See the <a href="faq.html" target="_blank">FAQ</a></p>`
  },
  {
    id: 'jerk',
    anchors: ['jerk'],
    section: 'general',
    emoji: '🍪',
    title: "Arguin' Like a Jerk",
    tag: '(or, Learn to Teach instead) — "You gotta bring cookies."',
    body: `
      <p>(Freaking out about how nobody is even listening to you, for seriously)</p>
      <p>Does anyone else find it hard to get other people to listen unless you get all
      bent out of shape?</p>
      <p>Well, I do. But I always regret it; I'm a peaceful fella at heart. 🙂✝️❤️🕊️
      It always makes it worse, really.</p>
      <p>The only thing that ever works is to start with some compliments, to show you're
      there to learn. "You gotta bring cookies." Teach, learn, break bread.</p>
      <p>"<a href="https://en.wikipedia.org/wiki/Straw_man" target="_blank">Straw Men</a>
      Burn Bridges" — Learn the
      "<a href="steel-man.html" target="_blank">Steel Man" argument</a> instead 😊</p>`
  },
  {
    id: 'politics',
    anchors: ['politics'],
    section: 'general',
    emoji: '🎻',
    title: 'Politics in General',
    tag: 'Society is maybe a canvas, not a battlefield.',
    body: `
      <p>We're all such <i>good</i> people at heart, in my experience. Most folks are just
      plain nice, they just workin' for a livin'.</p>
      <p>Kinda we're all the bad guy at times, ain't it? Hot-headed, proud, confused?
      Maybe 'cancel politics,' a little, you know? Make room for each other. We gotta share
      the joint and have a good time at some point, right?</p>
      <p>Let's stop doing it this way. No fun, no funk, no heart ❤️ War war war forever.
      "Ya reap what ya sow."</p>
      <p>Let's treat it like a group art project, like a symphony!</p>
      <p>Society is maybe a canvas, not a battlefield.</p>
      <p>What it all needs is FUN! How about "Congress on the Lawn" on Fridays? Congress
      with marshmallows in your mouth. :D</p>`
  },
  {
    id: 'capitalism',
    anchors: ['capitalism'],
    section: 'general',
    emoji: '🏪',
    title: 'Moderate Capitalism',
    tag: "Capitalism is what works, but it only works when it's in check.",
    body: `
      <p>Capitalism is what works, but it only works when it's in check. Like, some people
      are jerks. Dump sewage in the water and so on.</p>
      <p>But it has all the coolest stuff, this Capitalis-mo. Free society, great products
      at low low prices, a productive life working for
      <u>The Enormously Large Company Whom We All Love So Dearly®</u> — sure, it ain't
      perfect, but it's really pretty awesome.</p>
      <p>Communism failed, capitalism fails without feeling it all the time. Look in
      between, see what is like [police, fire, school, army, health] service and what is
      just business. <a href="#healthcare" class="jump">Which are the service tiles?</a>
      (The folk will argue.)</p>`
  },
  {
    id: 'taxes',
    anchors: ['taxes'],
    section: 'general',
    emoji: '🎢',
    title: 'Taxes — "The Admission Fee"',
    tag: 'The admission fee to an amusement park.',
    body: `
      <p>I think of taxes as the admission fee to an amusement park. If you don't like the
      prices, or the way they're being spent, hey, say something. Vote! But there's going
      to be a fee.</p>`
  },
  {
    id: 'govsize',
    anchors: ['govsize'],
    section: 'general',
    emoji: '📏',
    title: 'The Size of the Government',
    tag: 'Somewhere in between. Whatever works. Real life.',
    body: `
      <p>Gigantic. Just gigantic, way huge. A personal assistant/super-cop for every man,
      woman and child. Just one guy, namely you, has to work 20 hours a day while everyone
      else laughs at you. Megagovernance.</p>
      <p>No, tiny, total anarchy. The powerful using the weak as serfs; armed robbery in
      the open streets.</p>
      <p>No, somewhere in between. Whatever works. Real life.</p>
      <p>"Not much guidance there," I guess, but the extremes are pretty useless too.</p>
      <p>The Constitution favors limited government, states' rights; sandboxed,
      experimental government. That appeals to the engineer in me.
      <a href="#healthcare" class="jump">Which are the service tiles?</a></p>`
  },
  {
    id: 'rcv',
    anchors: ['instantrunoffvoting', 'rankedchoice', 'irv'],
    section: 'general',
    emoji: '🗳️',
    title: 'Ranked Choice Voting',
    tag: "Your vote always goes to someone you picked.",
    body: `
      <p>Ranked Choice (Instant Run-off) Voting is a voting system where you rank the
      candidates, and if your first choice loses, your vote goes to your second and third
      choice and so on until there's a winner.</p>
      <p>So your vote always goes to someone you picked, and you don't have to worry about
      "throwing your vote away" on a third-party candidate. Without Ranked Choice, we're
      kinda stuck with Hard Left vs Hard Right forever. Third parties just die off as
      spoilers after splitting the vote.</p>
      <p>(See also <a href="ranked-choice.html" target="_blank">the "real vs. fake" page</a>)</p>
      <p>They're already using Ranked Choice successfully in Australia for the Parliament,
      in various states around the world, etc.</p>
      <p>See also <a href="http://www.instantrunoff.com/" target="_blank">instantrunoff.com</a>
      and <a href="http://www.fairvote.org/" target="_blank">fairvote.org</a></p>`
  },
  {
    id: 'pot',
    anchors: ['marijuana', 'pot', 'ganja', 'thegreen', 'weed', 'grass'],
    section: 'general',
    emoji: '🌿',
    title: 'Pro-Pot',
    tag: "'Bout as strong as a beer? A lot of people in jail for chillaxin'.",
    body: `
      <p>Weed's great. Ain't it? It is. No, we checked. It's fine ;D</p>
      <p>We have a right to throw awesome music parties; it's in the Constitution to enjoy
      awesome music parties.</p>
      <p>'Bout as strong as a beer 🍺? Good with music and cheese puffs? A lot of people in
      jail for chillaxin'.</p>
      <p>That said, gotta keep the engine clean, know what I mean? You don't drink 14
      gallons of milk a day, do ya? Pour milk on your head?</p>`
  },

  // ——— The "This Guy's a Secret Liberal!" Section ———
  {
    id: 'education',
    anchors: ['education', 'jobs', 'k-jobs', 'teachers'],
    section: 'liberal',
    emoji: '🎓',
    title: 'K-Jobs Education',
    tag: 'Educate the kids into work!',
    body: `
      <p>Yeah — 100%! K-Jobs! Educate the kids into work! Don't just teach them to read and
      write and send 'em off, then complain about welfare. Train a welder or a teacher or a
      nurse, train a software engineer.</p>
      <p>The kids want to succeed! And making sure they can is our one main job, I'd say.</p>`
  },
  {
    id: 'healthcare',
    anchors: ['obamacare', 'aca', 'affordable-care-act', 'healthcare', 'medicine'],
    section: 'liberal',
    emoji: '🏥',
    title: 'Pro-Obamacare',
    tag: "A required service tile, like police or fire, see?",
    body: `
      <p>So, for-profit healthcare is never going to be there for the working poor. It just
      ain't.</p>
      <p>People who work their whole lives don't deserve to live in fear, we believe that.</p>
      <p>And state-run healthcare, despite eliminating a middleman, is known for long wait
      times, etc.</p>
      <p>So neither idea is getting us anywhere, and instead we now have Obamacare, the ACA.
      It's been the law for over a decade, and it doesn't seem to have sunk the insurers or
      ruined anything. It's given folks at the bottom some peace of mind. I had Obamacare
      when I was younger after many years uninsured, and I'm grateful.</p>
      <p>So we're going all-in, Obamacare is what works. A real, honest American compromise
      for the best.</p>
      <p>On the other hand, should we all pay for your vices? Is that fair, folks? How about
      a vice surcharge?</p>
      <p><img src="img/sim-city-2000-hospital.gif" alt="SimCity 2000 Hospital"/><br/>
      It's a required service tile, like police or fire, see?</p>`
  },
  {
    id: 'unions',
    anchors: ['theunions', 'unions'],
    section: 'liberal',
    emoji: '🛠️',
    title: 'The Unions',
    tag: 'The unions made life livable in this country.',
    body: `
      <p>Thank goodness for the unions. The unions made life livable in this country.
      "Some people are greedy," and working people need to stand up for themselves.</p>`
  },
  {
    id: 'sustainability',
    anchors: ['sustainability', 'environmentalism', 'environment', 'nature', 'pollution', 'enviro'],
    section: 'liberal',
    emoji: '⚡',
    title: 'Sustainability — Systems That Last',
    tag: 'A machine we could sell to aliens.',
    body: `
      <p>We're all about systems that are set up to last. Well-engineered, sustainable,
      adult square-cornered plans. We need an environment that works, ya'll know it's true.
      We'll <a href="https://worldometers.info/oil/" target="_blank">run out of oil in
      &lt;150 years</a>, so it's no real plan, you know? Natch.</p>
      <p>I think it's obvious, we <i>have to</i> become self-sustaining, to run on the
      <b>green ⚡ nuclear ⚡ fusion</b> jam. A machine we could sell to aliens.</p>
      <p>So let's not argue about having a healthy environment, of all things! Get a little
      of that "team fire" in your belly. "God's children" ✝️❤️🕊️</p>
      <p>Another name for "a natural correction" is "a huge natural disaster." Not cool!</p>
      <p>It doesn't matter what caused it; it matters how we're going to fix it.</p>
      <p>[UPDATE]: In 2022, at the U.S. National Ignition Facility, fusion science produced
      more energy than it consumed. HUGE!</p>`
  },
  {
    id: 'animals',
    anchors: ['animals', 'farmanimals', 'animalrights', 'classyfarming'],
    section: 'liberal',
    emoji: '🐄',
    title: 'Farm Animals',
    tag: `"SKRAWK! It's a living!", as the bird said.`,
    body: `
      <p>Farm animals' rights belong in the picture of a better society. We believe in
      stewardship and "<a href="https://www.classyfarming.com" target="_blank">classy
      farming</a>."</p>
      <p>One idea we had was "feedlot radio," play them some nice music that they like.
      <a href="outlink_arch/index.html" target="_blank">The research shows</a> it's good for
      them and they like it. Healthier for everyone, right?</p>
      <p>"SKRAWK! It's a living!", as the bird said. :D</p>`
  },

  // ——— The "This Guy's a Red-Pilled Gun Nut!" Section ———
  {
    id: 'guns',
    anchors: ['guncontrollers', 'guns', 'defense'],
    section: 'gunnut',
    emoji: '🐻',
    title: 'The 2nd Amendment',
    tag: 'We have a right to armed bears.',
    body: `
      <p>Seriously, we have a right to armed bears, it's in the Bill of Rights. It's a
      serious statement: We will protect ourselves and our families however we can!</p>
      <p><img src="img/bear_arms.jpeg" alt="The right to bear arms?"/><br/>
      <span class="caption">Bear Arms, Bro.</span></p>
      <p>It's my stuff, and my family, and I'm apt to have a gun to protect it. "If you
      outlaw guns, only guns will have guns..." Wait, that's not it. Without that right the
      others don't hold much water, just like the First.</p>
      <p>We support, you know, background checks, metal detectors, school cops, waiting
      periods, mental health screening. Like, guns are dangerous. Whatever works, whatever
      helps. Maybe those fingerprint things?</p>
      <p>While we're in the neighborhood: the arms industry has a vested interest in
      cultivating war. Well, they do. Uh-huh. Do to.</p>`
  },
  {
    id: 'immigration',
    anchors: ['immigration'],
    section: 'gunnut',
    emoji: '🚧',
    title: 'Immigration',
    tag: 'Strict borders, human rights at the center.',
    body: `
      <p>This country was built by immigrants, and we
      <a href="#diversity" class="jump">love and value diversity</a>. "We should thank our
      lucky stars we have people of all stripes."</p>
      <p>People from many nations and many walks of life make this country great every day.</p>
      <p>That said, every country has borders for the same sane reason I have a fence around
      my yard. We don't have unlimited resources, and we just can't take everyone even
      though we'd probably like to.</p>
      <p>We have programs in place for students and needed workers of all kinds to live and
      work here legally, and that's great for the country! And how all other countries
      handle their immigration, right?</p>
      <p>So, yeah, strict borders, rapid deportation. Professional and humane immigration
      cops. Such a thing, for our nation to be great, must have human rights at the center,
      you know? Due process and compassion matter the most when it's not easy.</p>`
  },
  {
    id: 'owg',
    anchors: ['oneworldgovernment', 'one-world-government', 'unitednations'],
    section: 'gunnut',
    emoji: '🌐',
    title: 'Some Kind of One-World Government',
    tag: "Naw, we're freedom lovers and Americans!",
    body: `
      <p>Naw, we're freedom lovers and Americans! We like states' rights, sandboxed local
      government.</p>
      <p>That whole Big Brother, communist, one-world bureaucratic overlord thing is the
      wrong direction — a failed, top-heavy, over-idealistic 20th-century tragedy of an
      experiment.</p>
      <p>Less is more, it seems.</p>
      <p>We do have global concerns and crises, and we need conferences and alliances, etc.
      But we fear centralized, corrupt power and the loss of autonomy.</p>
      <p>The Constitution favors limited government, states' rights; sandboxed, experimental
      government. That appeals to the engineer in me!</p>`
  },
  {
    id: 'insourcing',
    anchors: ['tariffs', 'internalizedeconomies', 'insourcing'],
    section: 'gunnut',
    emoji: '🇺🇸',
    title: '"Insourcing" — Internalized Economies',
    tag: 'Each country can make its own stuff, bring jobs home.',
    body: `
      <p>We believe in internalized economies, less trade, less robots. Standing up to
      globalism. Each country can make its own stuff, bring jobs home. Buy
      <a href="https://en.wikipedia.org/wiki/Made_in_USA" target="_blank">Made in the USA</a>!</p>
      <p><img src="img/made-in-the-usa.jpg" alt="Made in the USA"/></p>`
  },
  {
    id: 'goldstandard',
    anchors: ['goldstandard'],
    section: 'gunnut',
    emoji: '🪙',
    title: 'The Gold Standard',
    tag: 'Fiat currency and bottomless inflation go hand in hand.',
    body: `
      <p>U.S. currency today is "fiat," it has no collateral. Fiat currency and a central
      bank and bottomless inflation go hand in hand, even to the fall of a nation over its
      worthless dollar. So, people into economics will insist that the gold standard (tying
      the value of the dollar to the price of gold) is important.</p>
      <p><a href="https://pub-c91f85c61c284c85878c5ed593bb74f2.r2.dev/ron-paul-gold-standard.mp4"
      target="_blank">▶ Former congressman Ron Paul on the Gold Standard</a></p>`
  },

  // ——— The World Peace Today Section ———
  {
    id: 'faith',
    anchors: ['faith', 'religion', 'family', 'parenting', 'world-peace'],
    section: 'peace',
    emoji: '🕊️',
    title: 'Faith and Family',
    tag: "Faith'll change your life. But WHOA — not by LAW!",
    body: `
      <p>There's this simple, gentle heartbeat about faith and family in every culture on
      every continent. And it's a wonderful thing! Faith'll change your life. 🙂</p>
      <p>(Myself, I'm a <a href="http://www.surfchristian.net" target="_blank">hippy
      Christian</a> 🙂 ✝️❤️🕊️ And yoga and meditation keep me young! 🙂)</p>
      <p>What's all this fighting been about, which children God loves? Well, are you a
      parent? Why God loves the little children, of course. :D</p>
      <p>All this old stuff of God's can just fit together, all our great cultures and all
      these stories, like a tapestry.</p>
      <p>✝️☪️✡️🕉️</p>
      <p>But also, WHOA WHOA WHOA! — Not by LAW! Religion by LAW?!?!?!?! Yeesh! 😐
      Mr. Yelling! 😐</p>
      <p>I think we're a <a href="complementary.html" target="_blank">"matched set"</a>,
      us folks. God's children. ✝️❤️🕊️</p>
      <p class="egg"><a href="https://www.surfchristian.net/poems.html" target="_blank">a poem I wroted…</a></p>`
  },
  {
    id: 'israel',
    anchors: ['israel', 'palestine'],
    section: 'peace',
    emoji: '🤝',
    title: 'Israel and Palestine',
    tag: "Everyone has a claim. They're all from there.",
    body: `
      <p>It's going to have to be a two-state solution, of course. Israel and Palestine.
      Everyone has a claim. They're all from there.</p>
      <p>Please, no more blood shed on holy ground! Worship God there instead!</p>`
  },
  {
    id: 'diversity',
    anchors: ['cultures', 'diversity'],
    section: 'peace',
    emoji: '🌎',
    title: 'Diversity',
    tag: '"We should thank our lucky stars we have people of all stripes."',
    body: `
      <p>Look... Why do you want to have everyone in the world look and act just like you?
      Doesn't that sound, I don't know, boring?</p>
      <p>Swords to plowshares somehow, world peace somehow, you know? Let's leave each
      other be.</p>
      <p>I believe in diversity, I believe our country is a melting pot of great stories
      and talents and colors and it's beautiful! "A city on a hill of many people."</p>
      <p>Just like don't be a jerk, you know? :D We gotta learn to leave each other be.
      Share the joint and stay different.</p>`
  },
  {
    id: 'closing',
    anchors: ['closing-remarks'],
    section: 'peace',
    emoji: '🌍',
    title: 'Closing Remarks',
    tag: "Let's not self-destruct now! We got this!",
    body: `
      <p>Let's not self-destruct now! We got this!</p>
      <p>I think like we're trying to sell this planet to some aliens, take this show on
      the road.</p>
      <p><img src="img/earthrise.jpg" alt="Earthrise"/></p>
      <p><a href="various-issues.html" target="_blank">Read the classic long-scroll
      version</a> — same planks, 2007 packaging.</p>`
  }
];

window.PLANK_SECTIONS = {
  general: { label: 'In General…', color: '#5b7c99' },
  liberal: { label: 'Secret Liberal!', color: '#3d6fb4' },
  gunnut: { label: 'Red-Pilled Gun Nut!', color: '#b44a3d' },
  peace: { label: 'World Peace Today', color: '#3f8f5f' }
};
