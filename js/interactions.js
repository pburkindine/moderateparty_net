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

  function initializeBonsaiAnimation() {
    // Bonsai pulse and fade on click
    var bonsai = document.querySelector('img[src*="bonsai"]');
    if (bonsai) {
      bonsai.style.cursor = 'pointer';
      bonsai.addEventListener('click', function () {
        bonsai.classList.remove('bonsai-pulse');
        void bonsai.offsetWidth;
        bonsai.classList.add('bonsai-pulse');
      });
    }
  }

  // Initialize animations when DOM is ready
  ready(function () {
    initializeSuperGrammaAnimations();
    initializeMegazordAnimation();
    initializeBonsaiAnimation();
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

  // Mobile: Set body padding for fixed header and collapse planks on scroll
  function initializeMobileHeader() {
    // Only on mobile
    if (window.innerWidth > 768) {
      // Desktop: reset
      document.body.style.paddingTop = '';
      const main = document.querySelector('main') || document.querySelector('.main');
      if (main) main.style.paddingTop = '';
      const planks = document.getElementById('planks');
      if (planks) {
        planks.style.marginTop = '';
        planks.style.transition = '';
        planks.style.opacity = '';
      }
      return;
    }

    const header = document.querySelector('header');
    const planks = document.getElementById('planks');

    if (!header || !planks) {
      // Try again if elements not loaded yet (header loads via AJAX)
      setTimeout(initializeMobileHeader, 200);
      return;
    }


    // Store initial planks height for animation
    let planksInitialHeight = planks.offsetHeight;
    const separator = document.getElementById('planks-separator');
    let separatorHeight = 0;
    let separatorInitialPaddingTop = '8px'; // Default from inline style
    let separatorInitialPaddingBottom = '8px';
    if (separator) {
      separatorHeight = separator.offsetHeight;
      // Get initial padding from computed style (reads from inline style or CSS)
      const computedStyle = window.getComputedStyle(separator);
      separatorInitialPaddingTop = computedStyle.paddingTop || '8px';
      separatorInitialPaddingBottom = computedStyle.paddingBottom || '8px';
    }

    // Set up planks container for zip-up animation - ensure initial state is expanded
    planks.style.overflow = 'hidden';
    planks.style.maxHeight = `${planksInitialHeight}px`;
    planks.style.height = 'auto';
    planks.style.opacity = '1';
    // Don't override CSS transition - let CSS handle it
    planks.style.transition = '';

    // Set up separator - it stays visible always (shows collapsed state)
    if (separator) {
      separator.style.opacity = '1';
      separator.style.visibility = 'visible';
      separator.style.display = '';
      // Don't set overflow hidden - separator should always be visible
    }

    // Detect if we're on index page or various-issues page
    const pathname = window.location.pathname;
    const isIndexPage = pathname === '/' || pathname.endsWith('/index.html') || pathname.endsWith('/');
    const isVariousIssuesPage = pathname.includes('/various-issues');

    // Hide planks entirely on various-issues page (has its own TOC)
    if (isVariousIssuesPage) {
      planks.style.setProperty('display', 'none', 'important');
      if (separator) separator.style.setProperty('display', 'none', 'important');
      document.body.setAttribute('data-page', 'various-issues');

      // Set static top padding for header (no planks, so smaller padding needed)
      document.body.style.setProperty('padding-top', '250px', 'important');

      // Remove loading overlay
      const loadingOverlay = document.getElementById('header-loading-overlay');
      if (loadingOverlay) {
        loadingOverlay.style.opacity = '0';
        loadingOverlay.style.transition = 'opacity 0.2s ease';
        setTimeout(() => loadingOverlay.remove(), 200);
      }

      return; // Exit early - no need to set up animations
    }

    // Start collapsed on non-index pages, expanded on index
    let isCollapsed = !isIndexPage;
    let hasUserScrolled = false; // Track if user has actually scrolled (not just loaded scrolled)
    let isInitializing = true; // Prevent state changes during initialization

    // Create simple placeholder element (no wrapper - preserve flex layout)
    let placeholder = null;

    function setupPlaceholder() {
      // Remove any existing placeholders first
      const existingPlaceholders = planks.querySelectorAll('.planks-placeholder');
      existingPlaceholders.forEach(el => el.remove());

      // Create single placeholder - positioned absolutely to center across full width
      placeholder = document.createElement('div');
      placeholder.className = 'planks-placeholder';
      placeholder.textContent = '...';
      placeholder.style.cssText = 'display: none; position: absolute; top: 50%; left: 0; right: 0; transform: translateY(-50%); text-align: center; font-size: 20px; color: #999; z-index: 10;';
      planks.appendChild(placeholder);
    }

    // Set up placeholder once
    setupPlaceholder();

    // If starting collapsed (non-index pages), set initial collapsed state
    if (isCollapsed) {
      // Hide links, show placeholder
      const links = planks.querySelectorAll('.header-link');
      links.forEach(link => {
        link.style.setProperty('display', 'none', 'important');
      });
      if (placeholder) {
        placeholder.style.setProperty('display', 'block', 'important');
      }

      // Set collapsed visual state
      planks.style.maxHeight = '0';
      planks.style.height = '0';
      planks.style.overflow = 'hidden';
      planks.style.position = 'relative';
      planks.style.setProperty('padding-top', '0', 'important');
      planks.style.setProperty('padding-bottom', '0', 'important');
      planks.style.setProperty('padding-left', '0', 'important');
      planks.style.setProperty('padding-right', '0', 'important');
      planks.classList.add('planks-collapsed');
      header.classList.add('header-planks-collapsed');
      header.style.setProperty('min-height', '0', 'important');

      // Separator collapsed state
      if (separator) {
        separator.classList.add('separator-collapsed');
        separator.style.setProperty('padding-top', '4px', 'important');
        separator.style.setProperty('padding-bottom', '4px', 'important');
      }
    }

    // Set body/main padding to account for fixed header
    // Use getBoundingClientRect for accurate measurement including all children
    function setHeaderPadding() {
      // Fixed values: 475px when expanded, 320px when collapsed
      const totalHeight = isCollapsed ? 320 : 475;

      // Use setProperty with !important to override any CSS rules - only on body
      document.body.style.setProperty('padding-top', `${totalHeight}px`, 'important');
    }

    // Set initial body padding to account for full header (header + planks + separator)
    setHeaderPadding();

    function checkScroll() {
      // Don't process scroll events during initialization
      if (isInitializing) {
        return;
      }

      if (window.innerWidth > 768) {
        // Desktop: reset
        planks.style.maxHeight = '';
        planks.style.opacity = '';
        planks.style.overflow = '';
        planks.style.transition = '';
        planks.style.paddingTop = '';
        planks.style.paddingBottom = '';
        planks.style.marginTop = '';
        planks.style.marginBottom = '';
        if (separator) {
          separator.style.maxHeight = '';
          separator.style.opacity = '';
          separator.style.overflow = '';
          separator.style.transition = '';
          separator.style.paddingTop = '';
          separator.style.paddingBottom = '';
          separator.style.marginTop = '';
          separator.style.marginBottom = '';
        }
        return;
      }

      const scrollY = window.scrollY || window.pageYOffset;

      // On index page: collapse when scroll down > 50px
      // On other pages: expand ONLY when scrolled to exactly top (scrollY = 0)
      let shouldCollapse;
      if (isIndexPage) {
        // Index: collapse on scroll down (normal behavior)
        shouldCollapse = scrollY > 50 && hasUserScrolled;
      } else {
        // Other pages: stay collapsed unless scrolled to exact top
        // If user hasn't scrolled yet, keep initial collapsed state
        if (!hasUserScrolled) {
          shouldCollapse = true; // Keep collapsed on load
        } else {
          shouldCollapse = scrollY !== 0; // Expand ONLY at scrollY === 0
        }
      }

      if (shouldCollapse !== isCollapsed) {
        isCollapsed = shouldCollapse;

        if (isCollapsed) {
          // User started scrolling - zip planks upward like blinds/tongue retracting!

          // Get current height BEFORE collapsing (needed for smooth animation)
          const currentHeight = planks.offsetHeight;

          // Keep background color - just collapse vertically, don't change color
          // Remove box-shadow when collapsed though
          planks.style.setProperty('box-shadow', 'none', 'important');

          // CRITICAL: Set explicit height FIRST (from current), then transition, then animate to 0
          // This ensures browser knows the starting point for smooth animation
          planks.style.height = `${currentHeight}px`;
          planks.style.maxHeight = `${currentHeight}px`;

          // Force reflow to register current height
          void planks.offsetHeight;

          // NOW set transition - browser knows start and end points
          // Set transition BEFORE adding classes (so CSS !important doesn't override transition)
          // NO opacity transition - just animate height, let overflow:hidden clip the content
          // NO padding/margin animation - keep them constant so links don't shift position
          // Override CSS transition with inline style (CSS has !important)
          planks.style.setProperty('transition', 'max-height 0.8s ease-in-out, height 0.8s ease-in-out, background-color 0.7s ease-in-out, border-radius 0.8s ease-in-out', 'important');

          const transitionAfter = window.getComputedStyle(planks).transition;

          // Force another reflow to ensure transition is registered
          void planks.offsetHeight;

          // Add classes AFTER transition is set (so CSS !important doesn't override transition)
          planks.classList.add('planks-collapsed');
          // Also add class to header to collapse its padding
          header.classList.add('header-planks-collapsed');

          // Hide all links, show placeholder
          const links = planks.querySelectorAll('.header-link');
          links.forEach(link => {
            link.style.setProperty('display', 'none', 'important');
          });
          planks.style.position = 'relative'; // For absolute positioned placeholder
          // Show placeholder immediately on collapse
          if (placeholder) {
            placeholder.style.setProperty('display', 'block', 'important');
          }

          // Also remove grid gap
          planks.style.gap = '0';
          planks.style.minHeight = '0';

          // Set padding to 0 INSTANTLY (no animation) - prevents jumping
          planks.style.setProperty('padding-top', '0', 'important');
          planks.style.setProperty('padding-bottom', '0', 'important');
          planks.style.setProperty('padding-left', '0', 'important');
          planks.style.setProperty('padding-right', '0', 'important');
          planks.style.pointerEvents = 'none';

          // Set transition for height only (no padding animation) - faster expand
          planks.style.setProperty('transition', 'max-height 0.5s ease-in-out, height 0.5s ease-in-out, background-color 0.4s ease-in-out, border-radius 0.5s ease-in-out', 'important');

          // Force reflow to register transition
          void planks.offsetHeight;

          // Now animate ONLY height to 0
          planks.style.maxHeight = '0';
          planks.style.height = '0';
          planks.style.minHeight = '0';
          planks.style.opacity = '1';
          planks.style.overflow = 'hidden';
          // Force grid to collapse (if using grid layout)
          planks.style.gridTemplateRows = '0fr';
          // DON'T set visibility:hidden yet - let height animation work first
          // Visibility will be set to hidden AFTER animation completes


          // Force header to allow shrinking - override any min-height
          header.style.setProperty('min-height', '0', 'important');
          header.style.setProperty('height', 'auto', 'important');

          // Animate header padding-bottom to 0 (don't use !important so transition works)
          // Store initial padding-bottom first
          const headerComputedStyle = window.getComputedStyle(header);
          const initialPaddingBottom = headerComputedStyle.paddingBottom || '10px';
          header.style.paddingBottom = initialPaddingBottom; // Set to current value first
          void header.offsetHeight; // Force reflow
          // Now animate to 0 (transition will work)
          header.style.paddingBottom = '0';

          // Log after setting values

          // Animate separator padding AND margin to hug arrows (remove all whitespace)
          if (separator) {
            separator.classList.add('separator-collapsed');
            // Get current values
            const computedStyle = window.getComputedStyle(separator);

            // Set transition for padding AND margin
            separator.style.transition = 'padding-top 0.8s ease-in-out, padding-bottom 0.8s ease-in-out, margin-top 0.8s ease-in-out, margin-bottom 0.8s ease-in-out, height 0.8s ease-in-out, line-height 0.8s ease-in-out';

            // Collapse padding and margin to minimal - keep small padding for arrow visibility
            separator.style.setProperty('padding-top', '4px', 'important');
            separator.style.setProperty('padding-bottom', '4px', 'important');
            separator.style.setProperty('padding-left', '0', 'important');
            separator.style.setProperty('padding-right', '0', 'important');
            separator.style.setProperty('margin-top', '0', 'important');
            separator.style.setProperty('margin-bottom', '0', 'important');
            separator.style.setProperty('line-height', '1', 'important');
            separator.style.setProperty('height', 'auto', 'important');
          }

          // Update body/main padding smoothly during animation - match actual header height
          // Use getBoundingClientRect for more accurate measurement
          const startRect = header.getBoundingClientRect();
          const startPadding = startRect.height;
          const duration = 500; // ms - faster animation
          const startTime = Date.now();

          function animatePadding() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Animate from 475px to 320px during collapse
            const currentPadding = 475 - (progress * 155); // 475 -> 320
            isAnimatingPadding = true;
            document.body.style.setProperty('padding-top', `${currentPadding}px`, 'important');


            if (progress < 1) {
              requestAnimationFrame(animatePadding);
            } else {
              setHeaderPadding(); // Final update
              isAnimatingPadding = false;
            }
          }
          requestAnimationFrame(animatePadding);

          // Lock in collapsed state after animation completes
          setTimeout(() => {
            if (isCollapsed) {
              // Lock in collapsed state with !important after animation
              planks.style.setProperty('max-height', '0', 'important');
              planks.style.setProperty('height', '0', 'important');
              planks.style.setProperty('min-height', '0', 'important');
              // Padding already at 0, just lock it
              planks.style.setProperty('padding-top', '0', 'important');
              planks.style.setProperty('padding-bottom', '0', 'important');
              planks.style.setProperty('padding-left', '0', 'important');
              planks.style.setProperty('padding-right', '0', 'important');
              // Keep overflow:hidden so content stays clipped
              planks.style.overflow = 'hidden';
              // Remove margin/border
              planks.style.setProperty('margin-top', '0', 'important');
              planks.style.setProperty('margin-bottom', '0', 'important');
              planks.style.setProperty('margin-left', '0', 'important');
              planks.style.setProperty('margin-right', '0', 'important');
              planks.style.setProperty('border-radius', '0', 'important');
              planks.style.setProperty('border', 'none', 'important');
              planks.style.setProperty('border-width', '0', 'important');
              // Hide placeholder, show all links
              if (placeholder) placeholder.style.display = 'none';
              const links = planks.querySelectorAll('.header-link');
              links.forEach(link => link.style.display = '');
              // Header padding-bottom should stay at 0 (transition already animated it)
              header.style.paddingBottom = '0';
            }
          }, 550); // Match faster 0.5s animation duration
        } else {
          // User scrolled back to top - reveal planks
          // Remove collapsed classes
          planks.classList.remove('planks-collapsed');
          header.classList.remove('header-planks-collapsed');
          if (separator) {
            separator.classList.remove('separator-collapsed');
          }

          // Restore header padding-bottom (remove inline override)
          header.style.removeProperty('padding-bottom');
          header.style.paddingBottom = ''; // Also clear regular style
          // Remove !important override by setting to empty string
          header.style.setProperty('padding-bottom', '', 'important');

          // First, restore display and reset collapsed styles
          // Remove all !important inline styles first
          planks.style.removeProperty('max-height');
          planks.style.removeProperty('height');
          planks.style.removeProperty('min-height');
          planks.style.removeProperty('opacity');
          // Remove !important padding/margin overrides and restore CSS defaults
          // CSS has padding: 12px !important, so explicitly restore it
          planks.style.setProperty('padding-top', '', 'important');
          planks.style.setProperty('padding-bottom', '', 'important');
          planks.style.setProperty('padding-left', '', 'important');
          planks.style.setProperty('padding-right', '', 'important');
          // CSS has margin: 10px auto !important, restore it
          planks.style.setProperty('margin-top', '', 'important');
          planks.style.setProperty('margin-bottom', '', 'important');
          planks.style.setProperty('margin-left', '', 'important');
          planks.style.setProperty('margin-right', '', 'important');
          planks.style.setProperty('border-radius', '', 'important');
          planks.style.setProperty('border', '', 'important');
          planks.style.setProperty('border-width', '', 'important');

          // Always explicitly restore padding (CSS has padding: 12px, padding-bottom: 18px)
          // Don't rely on CSS applying - set it directly to ensure consistency
          planks.style.setProperty('padding-top', '12px', 'important');
          planks.style.setProperty('padding-bottom', '18px', 'important'); // Extra bottom padding
          planks.style.setProperty('padding-left', '12px', 'important');
          planks.style.setProperty('padding-right', '12px', 'important');

          // Force reflow
          void planks.offsetHeight;

          // DON'T set display - element is already in normal flow (wasn't display:none)
          // Just ensure visibility and reset to 0 height for animation
          planks.style.visibility = 'visible';
          planks.style.transition = 'none'; // No transition during setup
          planks.style.maxHeight = '0';
          planks.style.height = '0';
          planks.style.minHeight = '';
          planks.style.opacity = '1'; // Keep opacity at 1 - height animation will clip content
          planks.style.gap = ''; // Restore grid gap
          planks.style.pointerEvents = 'auto';
          planks.style.overflow = 'hidden'; // Keep hidden during animation - this clips the content
          // Restore grid template rows for measurement
          planks.style.gridTemplateRows = '';
          void planks.offsetHeight; // Force reflow

          // Always remeasure height when expanding (height was 0, so stored height might be stale)
          // Temporarily position absolutely off-screen to measure without affecting layout
          const originalPosition = planks.style.position;
          planks.style.position = 'absolute';
          planks.style.left = '-9999px';
          planks.style.height = 'auto';
          planks.style.maxHeight = 'none';
          planks.style.overflow = 'visible'; // Visible for accurate measurement
          // Ensure padding is set for measurement
          planks.style.setProperty('padding-top', '12px', 'important');
          planks.style.setProperty('padding-bottom', '18px', 'important'); // Extra bottom padding
          planks.style.setProperty('padding-left', '12px', 'important');
          planks.style.setProperty('padding-right', '12px', 'important');

          // Force a reflow to ensure accurate measurement
          void planks.offsetHeight;
          const currentHeight = planks.offsetHeight;
          // Use measured height directly - it should include all padding
          if (currentHeight > 0) {
            planksInitialHeight = currentHeight;
          }

          // Restore position and reset to 0 for animation start
          planks.style.position = originalPosition || '';
          planks.style.left = '';

          // Hide all links first
          const links = planks.querySelectorAll('.header-link');
          links.forEach(link => {
            link.style.setProperty('display', 'none', 'important');
          });

          // Set height AND padding to 0 FIRST
          planks.style.maxHeight = '0';
          planks.style.height = '0';
          planks.style.overflow = 'hidden';
          planks.style.position = 'relative'; // For absolute positioned placeholder

          // Show placeholder only AFTER container has grown enough (delay ~150ms for faster animation)
          setTimeout(() => {
            if (!isCollapsed && placeholder) {
              placeholder.style.setProperty('display', 'block', 'important');
            }
          }, 150);
          planks.style.opacity = '1';
          planks.style.setProperty('padding-top', '0', 'important');
          planks.style.setProperty('padding-bottom', '0', 'important');
          planks.style.setProperty('padding-left', '0', 'important');
          planks.style.setProperty('padding-right', '0', 'important');

          // Force reflow to ensure height:0 and padding:0 are applied
          void planks.offsetHeight;

          // Explicitly set height to 0 again to ensure browser recognizes the "from" state
          planks.style.maxHeight = '0';
          planks.style.height = '0';
          void planks.offsetHeight; // Force another reflow

          // Restore margin (CSS has margin: 10px auto !important)
          planks.style.setProperty('margin-top', '', 'important');
          planks.style.setProperty('margin-bottom', '', 'important');
          planks.style.setProperty('margin-left', '', 'important');
          planks.style.setProperty('margin-right', '', 'important');
          planks.style.setProperty('border-radius', '', 'important');
          planks.style.setProperty('border', '', 'important');
          planks.style.setProperty('border-width', '', 'important');

          // Set transition inline BEFORE changing height values
          // NO padding animation - set it instantly after animation completes - faster expand
          planks.style.setProperty('transition', 'max-height 0.5s ease-in-out, height 0.5s ease-in-out, background-color 0.4s ease-in-out, border-radius 0.5s ease-in-out', 'important');

          // Set separator transition BEFORE changing values (include margin) - faster expand
          if (separator) {
            separator.style.transition = 'padding-top 0.5s ease-in-out, padding-bottom 0.5s ease-in-out, margin-top 0.5s ease-in-out, margin-bottom 0.5s ease-in-out';
          }

          // Force reflow to ensure transition is registered
          void planks.offsetHeight;

          // Now trigger animation - set height synchronously after transition is registered
          planks.style.maxHeight = `${planksInitialHeight}px`;
          planks.style.height = `${planksInitialHeight}px`; // Fixed height for animation
          planks.style.overflow = 'hidden'; // This clips content as height animates
          planks.style.opacity = '1'; // Keep opacity at 1 - no fade

          // Padding stays at 0 - will be set after animation completes

          // After animation completes, restore padding, show links, hide placeholder
          setTimeout(() => {
            if (!isCollapsed) {
              // Hide placeholder, show all links
              if (placeholder) placeholder.style.display = 'none';
              const links = planks.querySelectorAll('.header-link');
              links.forEach(link => link.style.display = '');

              // NOW set padding INSTANTLY (no animation) - height animation is complete
              planks.style.setProperty('padding-top', '12px', 'important');
              planks.style.setProperty('padding-bottom', '18px', 'important'); // Extra bottom padding
              planks.style.setProperty('padding-left', '12px', 'important');
              planks.style.setProperty('padding-right', '12px', 'important');

              // Force reflow after setting padding
              void planks.offsetHeight;

              // Switch to auto height and visible overflow after padding is set
              planks.style.height = 'auto';
              planks.style.maxHeight = 'none';
              planks.style.overflow = 'visible'; // Now allow overflow for full text visibility
            }
          }, 550); // Match faster 0.5s animation duration

          // Restore separator padding and margin (transition handles animation)
          if (separator) {
            separator.style.paddingTop = separatorInitialPaddingTop;
            separator.style.paddingBottom = separatorInitialPaddingBottom;
            separator.style.paddingLeft = '';
            separator.style.paddingRight = '';
            separator.style.marginTop = '';
            separator.style.marginBottom = '';
          }

          // Update padding smoothly during animation - match actual header height
          // Use getBoundingClientRect for more accurate measurement
          const startRect = header.getBoundingClientRect();
          const startPadding = startRect.height;
          const duration = 500; // ms - faster expand
          const startTime = Date.now();

          function animatePadding() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Animate from 320px to 475px during expand
            const currentPadding = 320 + (progress * 155); // 320 -> 475
            isAnimatingPadding = true;
            document.body.style.setProperty('padding-top', `${currentPadding}px`, 'important');

            if (progress < 1) {
              requestAnimationFrame(animatePadding);
            } else {
              setHeaderPadding(); // Final update using offsetHeight
              isAnimatingPadding = false;
            }
          }
          requestAnimationFrame(animatePadding);
        }
      }
    }

    // Ensure initial state is expanded (not collapsed)
    planks.style.display = '';
    if (separator) separator.style.display = '';

    // Set initial padding
    setHeaderPadding();

    // Add click handler to separator to toggle planks
    if (separator) {
      separator.style.cursor = 'pointer';
      separator.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        // Toggle collapsed state
        togglePlanks(!isCollapsed);
      });
    }

    // Check on scroll - with flag to detect real user scrolling vs programmatic
    let isAnimatingPadding = false;
    function handleScroll() {
      if (window.innerWidth > 768) return;

      // Don't mark as user scrolled if we're animating padding (that causes scroll events)
      if (!isAnimatingPadding) {
        hasUserScrolled = true;
      }

      checkScroll();
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mark initialization complete after a short delay to prevent jumping
    setTimeout(() => {
      isInitializing = false;

      // Remove loading overlay
      const loadingOverlay = document.getElementById('header-loading-overlay');
      if (loadingOverlay) {
        loadingOverlay.style.opacity = '0';
        loadingOverlay.style.transition = 'opacity 0.2s ease';
        setTimeout(() => loadingOverlay.remove(), 200);
      }
    }, 100);

    // Also check on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth <= 768) {
          // Recalculate heights on resize
          planksInitialHeight = planks.offsetHeight;
          if (separator) separatorHeight = separator.offsetHeight;
          setHeaderPadding();
          if (!isInitializing) checkScroll();
        } else {
          document.body.style.paddingTop = '';
          const main = document.querySelector('main') || document.querySelector('.main');
          if (main) main.style.paddingTop = '';
          planks.style.maxHeight = '';
          planks.style.height = '';
          planks.style.opacity = '';
          planks.style.overflow = '';
          planks.style.transition = '';
          planks.style.paddingTop = '';
          planks.style.paddingBottom = '';
          planks.style.paddingLeft = '';
          planks.style.paddingRight = '';
          planks.style.marginTop = '';
          planks.style.marginBottom = '';
          planks.style.marginLeft = '';
          planks.style.marginRight = '';
          if (separator) {
            separator.style.maxHeight = '';
            separator.style.height = '';
            separator.style.opacity = '';
            separator.style.overflow = '';
            separator.style.transition = '';
            separator.style.paddingTop = '';
            separator.style.paddingBottom = '';
            separator.style.paddingLeft = '';
            separator.style.paddingRight = '';
            separator.style.marginTop = '';
            separator.style.marginBottom = '';
            separator.style.marginLeft = '';
            separator.style.marginRight = '';
            separator.style.lineHeight = '';
          }
        }
      }, 100);
    });

    // Initial check after a brief delay to ensure layout is settled
    // Only force expanded state on index page
    setTimeout(() => {
      if (isIndexPage) {
        const scrollY = window.scrollY || window.pageYOffset;
        if (scrollY <= 30) {
          // Force expanded state at top (index only)
          isCollapsed = false;
          planks.style.maxHeight = `${planksInitialHeight}px`;
          planks.style.height = 'auto';
          planks.style.opacity = '1';
          if (separator) {
            separator.style.maxHeight = `${separatorHeight}px`;
            separator.style.height = 'auto';
            separator.style.opacity = '1';
          }
          setHeaderPadding();
        }
      }
      // Don't check scroll during initialization
      if (!isInitializing) checkScroll();
    }, 100);
  }

  // Rename for backwards compatibility
  function initializePlanksCollapse() {
    initializeMobileHeader();
  }

  // Initialize mobile header features
  ready(function () {
    initializeSuperGrammaAnimations();
    initializeMegazordAnimation();
    initializeBonsaiAnimation();
    // Initialize mobile header after a delay to ensure header is loaded
    setTimeout(initializeMobileHeader, 300);
  });

  // Also try after header loads (AJAX) - header loads via jQuery .load()
  setTimeout(initializeMobileHeader, 800);

  // Expose for manual initialization after header loads
  window.initializePlanksCollapse = initializePlanksCollapse;
  window.initializeMobileHeader = initializeMobileHeader;

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
