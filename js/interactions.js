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
      console.log('Mobile header: Waiting for header/planks to load...', { header: !!header, planks: !!planks });
      // Try again if elements not loaded yet (header loads via AJAX)
      setTimeout(initializeMobileHeader, 200);
      return;
    }

    console.log('Mobile header: Initialized', { headerHeight: header.offsetHeight, planksFound: !!planks });

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

    let isCollapsed = false;
    let hasUserScrolled = false; // Track if user has actually scrolled (not just loaded scrolled)

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

    // Set initial body padding to account for full header (header + planks + separator)
    // Must be after isCollapsed is defined
    console.log('🚀 Initial setup:', {
      planksInitialHeight,
      separatorHeight,
      headerInitialHeight: header.offsetHeight,
      headerRectHeight: header.getBoundingClientRect().height,
      planksHeight: planks.offsetHeight,
      separatorHeight: separator ? separator.offsetHeight : 0
    });
    setHeaderPadding();

    // Set body/main padding to account for fixed header
    // Use getBoundingClientRect for accurate measurement including all children
    function setHeaderPadding() {
      // Use getBoundingClientRect for more accurate height measurement
      const rect = header.getBoundingClientRect();
      let totalHeight = rect.height;

      // CRITICAL: Always use offsetHeight for initial setup to ensure we get the full height
      // getBoundingClientRect can sometimes be inaccurate during transitions
      const headerOffsetHeight = header.offsetHeight;

      // Use the larger of the two measurements to ensure content isn't hidden
      if (headerOffsetHeight > totalHeight) {
        totalHeight = headerOffsetHeight;
      }

      // If planks are expanded, make absolutely sure we account for them
      if (planks && planksInitialHeight > 0 && !isCollapsed) {
        const planksCurrentHeight = planks.offsetHeight;
        // If planks are visible, add them to the header height if not already included
        if (planksCurrentHeight > 0) {
          // Calculate: header without planks + planks + separator
          const headerWithoutPlanks = totalHeight - planksCurrentHeight - (separator ? separator.offsetHeight : 0);
          const fullHeight = headerWithoutPlanks + planksInitialHeight + (separator ? separatorHeight : 0);
          if (fullHeight > totalHeight) {
            totalHeight = fullHeight;
          }
        }
      }

      const planksRect = planks ? planks.getBoundingClientRect() : null;
      const separatorRect = separator ? separator.getBoundingClientRect() : null;

      document.body.style.paddingTop = `${totalHeight}px`;
      const main = document.querySelector('main') || document.querySelector('.main');
      if (main) main.style.paddingTop = `${totalHeight}px`;

      console.log('📏 setHeaderPadding called:', {
        headerHeight: totalHeight,
        headerOffsetHeight: header.offsetHeight,
        headerRectHeight: rect.height,
        planksHeight: planksRect ? planksRect.height : 'N/A',
        planksOffsetHeight: planks ? planks.offsetHeight : 'N/A',
        planksInitialHeight: planksInitialHeight,
        separatorHeight: separatorRect ? separatorRect.height : 'N/A',
        bodyPadding: totalHeight,
        isCollapsed: isCollapsed,
        hasUserScrolled: hasUserScrolled
      });
    }

    function checkScroll() {
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
      // Lazy collapse - wait for 100px scroll before zipping up (feels more relaxed)
      // BUT: Only collapse if user has actually scrolled (not just loaded scrolled)
      const shouldCollapse = scrollY > 200 && hasUserScrolled;

      if (shouldCollapse !== isCollapsed) {
        isCollapsed = shouldCollapse;
        console.log('Planks collapse: State changed', { isCollapsed, scrollY, hasUserScrolled });

        if (isCollapsed) {
          // User started scrolling - zip planks upward like blinds/tongue retracting!

          // Get current height BEFORE collapsing (needed for smooth animation)
          const currentHeight = planks.offsetHeight;
          const headerHeightBefore = header.getBoundingClientRect().height;
          const bodyPaddingBefore = parseFloat(document.body.style.paddingTop) || 0;

          console.log('🔵 COLLAPSE START:', {
            planksHeight: currentHeight,
            headerHeight: headerHeightBefore,
            bodyPadding: bodyPaddingBefore,
            planksComputedHeight: window.getComputedStyle(planks).height,
            planksComputedMaxHeight: window.getComputedStyle(planks).maxHeight
          });

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
          console.log('🔵 Transition set:', transitionAfter);

          // Force another reflow to ensure transition is registered
          void planks.offsetHeight;

          // Add classes AFTER transition is set (so CSS !important doesn't override transition)
          planks.classList.add('planks-collapsed');
          // Also add class to header to collapse its padding
          header.classList.add('header-planks-collapsed');

          console.log('🔵 Classes added:', {
            planksHasClass: planks.classList.contains('planks-collapsed'),
            headerHasClass: header.classList.contains('header-planks-collapsed'),
            headerPaddingBottom: window.getComputedStyle(header).paddingBottom
          });

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

          // Set transition for height only (no padding animation)
          planks.style.setProperty('transition', 'max-height 0.8s ease-in-out, height 0.8s ease-in-out, background-color 0.7s ease-in-out, border-radius 0.8s ease-in-out', 'important');

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

          // Log to verify height is actually 0
          setTimeout(() => {
            console.log('🔵 After setting height to 0:', {
              planksOffsetHeight: planks.offsetHeight,
              planksComputedHeight: window.getComputedStyle(planks).height,
              planksComputedMaxHeight: window.getComputedStyle(planks).maxHeight,
              planksDisplay: window.getComputedStyle(planks).display
            });
          }, 100);

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
          setTimeout(() => {
            const planksHeightAfter = planks.offsetHeight;
            const planksComputedAfter = window.getComputedStyle(planks);
            console.log('🔵 After setting 0 values:', {
              planksOffsetHeight: planksHeightAfter,
              planksComputedHeight: planksComputedAfter.height,
              planksComputedMaxHeight: planksComputedAfter.maxHeight,
              planksComputedOpacity: planksComputedAfter.opacity,
              planksComputedVisibility: planksComputedAfter.visibility,
              planksComputedDisplay: planksComputedAfter.display
            });
          }, 100);

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
          const duration = 800; // ms
          const startTime = Date.now();

          console.log('🔵 Padding animation start:', {
            startHeaderHeight: startPadding,
            startBodyPadding: parseFloat(document.body.style.paddingTop) || 0
          });

          function animatePadding() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Measure header height continuously using offsetHeight - more reliable during collapse
            // getBoundingClientRect can be inaccurate during transitions
            const currentHeaderHeight = header.offsetHeight;
            document.body.style.paddingTop = `${currentHeaderHeight}px`;
            const main = document.querySelector('main') || document.querySelector('.main');
            if (main) main.style.paddingTop = `${currentHeaderHeight}px`;

            // Log every 200ms
            if (Math.floor(elapsed / 200) !== Math.floor((elapsed - 16) / 200)) {
              const planksCurrentHeight = planks.offsetHeight;
              const separatorCurrentHeight = separator ? separator.offsetHeight : 0;
              console.log('🔵 Padding animation:', {
                progress: (progress * 100).toFixed(1) + '%',
                headerHeight: currentHeaderHeight,
                headerOffsetHeight: header.offsetHeight,
                bodyPadding: currentHeaderHeight,
                planksHeight: planksCurrentHeight,
                separatorHeight: separatorCurrentHeight,
                planksComputedHeight: window.getComputedStyle(planks).height
              });
            }

            if (progress < 1) {
              requestAnimationFrame(animatePadding);
            } else {
              const finalHeight = header.offsetHeight;
              console.log('🔵 Padding animation complete:', {
                finalHeaderHeight: finalHeight,
                finalBodyPadding: parseFloat(document.body.style.paddingTop) || 0,
                planksFinalHeight: planks.offsetHeight,
                separatorFinalHeight: separator ? separator.offsetHeight : 0
              });
              setHeaderPadding(); // Final update
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
          }, 850);

          console.log('Planks zipped up');
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
            console.log('📐 Measured planks height:', { currentHeight, planksInitialHeight });
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

          // Show placeholder only AFTER container has grown enough (delay ~100ms)
          setTimeout(() => {
            if (!isCollapsed && placeholder) {
              placeholder.style.setProperty('display', 'block', 'important');
            }
          }, 100);
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
          // NO padding animation - set it instantly after animation completes
          planks.style.setProperty('transition', 'max-height 0.8s ease-in-out, height 0.8s ease-in-out, background-color 0.7s ease-in-out, border-radius 0.8s ease-in-out', 'important');

          // Set separator transition BEFORE changing values (include margin)
          if (separator) {
            separator.style.transition = 'padding-top 0.8s ease-in-out, padding-bottom 0.8s ease-in-out, margin-top 0.8s ease-in-out, margin-bottom 0.8s ease-in-out';
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

              const computedPadding = window.getComputedStyle(planks);
              console.log('🟢 Reveal complete - planks padding:', {
                paddingTop: computedPadding.paddingTop,
                paddingBottom: computedPadding.paddingBottom,
                padding: computedPadding.padding,
                overflow: computedPadding.overflow,
                planksHeight: planks.offsetHeight
              });
            }
          }, 850);

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
          const duration = 800; // ms
          const startTime = Date.now();

          function animatePadding() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Measure header height continuously using getBoundingClientRect - more accurate
            const currentRect = header.getBoundingClientRect();
            const currentHeaderHeight = currentRect.height;

            // Log planks height during animation to verify it's animating
            if (Math.floor(elapsed / 200) !== Math.floor((elapsed - 16) / 200)) {
              console.log('🟢 Expand animation progress:', {
                progress: (progress * 100).toFixed(1) + '%',
                planksHeight: planks.offsetHeight,
                planksComputedHeight: window.getComputedStyle(planks).height,
                headerHeight: currentHeaderHeight
              });
            }
            document.body.style.paddingTop = `${currentHeaderHeight}px`;
            const main = document.querySelector('main') || document.querySelector('.main');
            if (main) main.style.paddingTop = `${currentHeaderHeight}px`;

            if (progress < 1) {
              requestAnimationFrame(animatePadding);
            } else {
              setHeaderPadding(); // Final update using offsetHeight
            }
          }
          requestAnimationFrame(animatePadding);

          console.log('Planks revealed');
        }
      }
    }

    // Ensure initial state is expanded (not collapsed)
    planks.style.display = '';
    if (separator) separator.style.display = '';

    // Set initial padding
    setHeaderPadding();

    // Check on scroll immediately (no throttling for instant response)
    function handleScroll() {
      if (window.innerWidth > 768) return;
      // Mark that user has actually scrolled (not just loaded scrolled)
      hasUserScrolled = true;
      checkScroll();
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

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
          checkScroll();
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

    // Initial check after a brief delay to ensure layout is settled - force expanded state
    setTimeout(() => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY <= 30) {
        // Force expanded state at top
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
      checkScroll();
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
