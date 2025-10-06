// Interaction handlers for ModerateParty header & fun images
(function () {
  function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }

  function initializeSuperGrammaAnimations() {
    // Super Gramma spin on click
    document.querySelectorAll('.super-gramma').forEach(function (img) {
      // Skip if already initialized
      if (img.dataset.animationInitialized) {
        return;
      }

      // Mark as initialized
      img.dataset.animationInitialized = 'true';

      // Make sure it shows as clickable
      img.style.cursor = 'pointer';

      img.addEventListener('click', function () {

        // For main logo, use a simple approach
        if (img.classList.contains('main-super-gramma-center')) {

          // Simple transition-based animation
          img.style.transition = 'transform 0.3s ease-in-out';
          img.style.transform = 'rotate(-5deg) scale(1.2) translateX(-30px)';

          setTimeout(function() {
            img.style.transform = 'rotate(10deg) scale(0.9) translateX(30px)';
          }, 150);

          setTimeout(function() {
            img.style.transform = 'rotate(3deg) scale(1) translateX(0px)';
          }, 300);

          setTimeout(function() {
            img.style.transition = '';
          }, 600);
        } else {
          // For other Super Grammas, use class-based animation
          img.classList.remove('spin');
          void img.offsetWidth;
          img.classList.add('spin');

          setTimeout(function() {
            img.classList.remove('spin');
          }, 1300);
        }
      });
    });
  }

  function initializeMegazordAnimation() {
    // Megazord subtle pulse
    var mz = document.querySelector('img[src*="megazord"]');
    if (mz) {
      mz.style.cursor = 'pointer';
      mz.addEventListener('click', function () {
        mz.classList.remove('mz-animate');
        void mz.offsetWidth;
        mz.classList.add('mz-animate');
      });
    }
  }

  // Initialize animations when DOM is ready
  ready(function () {
    initializeSuperGrammaAnimations();
    initializeMegazordAnimation();
  });

  // Mobile menu toggle function
  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.querySelector('.hamburger-btn');

    if (menu && btn) {
      menu.classList.toggle('active');
      btn.classList.toggle('active');
    }
  }

  // Expose functions globally for pages that load header dynamically
  window.initializeSuperGrammaAnimations = initializeSuperGrammaAnimations;
  window.toggleMobileMenu = toggleMobileMenu;
})();

// // Planks collapsible: mobile-only, default collapsed on non-index
// (function(){
//   function initPlankToggle(){
//     var planks = document.getElementById('planks');
//     var btn = document.querySelector('.planks-toggle');
//     if(!planks || !btn) {
//       // Try again in a moment if elements not found (header may be loading)
//       setTimeout(initPlankToggle, 100);
//       return;
//     }

//     function setExpanded(expanded){
//       if(expanded){
//         planks.classList.remove('collapsed');
//         btn.setAttribute('aria-expanded','true');
//       } else {
//         planks.classList.add('collapsed');
//         btn.setAttribute('aria-expanded','false');
//       }
//     }

//     function applyInitial(){
//       if(window.innerWidth >= 768){
//         // Desktop: always expanded
//         planks.classList.remove('collapsed');
//         return;
//       }
//       // Mobile: check if we're on index page
//       var pathname = window.location.pathname;
//       var isIndex = pathname === '/' || pathname.endsWith('/index.html') || pathname.endsWith('/');
//       setExpanded(isIndex);
//     }

//     if(!btn.dataset.bound){
//       btn.addEventListener('click', function(){
//         var expanded = btn.getAttribute('aria-expanded') === 'true';
//         setExpanded(!expanded);
//       });
//       btn.dataset.bound = '1';
//     }

//     applyInitial();
//     window.addEventListener('resize', applyInitial);
//   }

//   if(document.readyState === 'loading'){
//     document.addEventListener('DOMContentLoaded', initPlankToggle);
//   } else {
//     initPlankToggle();
//   }

//   // Also try after a delay for dynamically loaded headers
//   setTimeout(initPlankToggle, 500);
// })();
