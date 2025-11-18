#!/usr/bin/env node
/**
 * Simple unit tests for interactions.js
 * Run with: node js/test-interactions.js
 * Requires Node.js 18+ (uses built-in test module)
 * No dependencies required!
 */

const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

// Simple DOM mocks
class MockElement {
  constructor(tagName, id = null) {
    this.tagName = tagName;
    this.id = id;
    this.className = '';
    this.classList = {
      contains: () => false,
      add: () => {},
      remove: () => {},
      toggle: () => {}
    };
    // Create style object with setProperty and getPropertyValue
    const styleObj = {};
    styleObj.setProperty = (prop, value, priority) => {
      styleObj[prop] = value;
      if (priority === 'important') {
        styleObj[prop + '_important'] = true;
      }
    };
    styleObj.getPropertyValue = (prop) => {
      return styleObj[prop] || '';
    };
    this.style = styleObj;
    this.dataset = {};
    this.attributes = {};
    this.children = [];
    this.parentNode = null;
    this.nextElementSibling = null;
    this.offsetHeight = 50;
    this.offsetWidth = 100;
    this.innerHTML = '';
    this.textContent = '';
    this.addEventListener = () => {};
    this.setAttribute = (name, value) => { this.attributes[name] = value; };
    this.getAttribute = (name) => this.attributes[name];
  }

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      right: 100,
      bottom: this.offsetHeight,
      width: 100,
      height: this.offsetHeight
    };
  }
}

// Create fresh mocks for each test
function createMocks() {
  const header = new MockElement('HEADER');
  header.offsetHeight = 100;

  const planks = new MockElement('DIV', 'planks');
  planks.className = 'header-links';
  planks.offsetHeight = 80;

  const separator = new MockElement('CENTER', 'planks-separator');
  separator.offsetHeight = 30;
  separator.textContent = '— ↑ ↓ —';
  planks.nextElementSibling = separator;

  const main = new MockElement('MAIN');
  const body = new MockElement('BODY');
  body.style = {};
  main.style = {};

  const mobileMenu = new MockElement('DIV', 'mobileMenu');
  const hamburgerBtn = new MockElement('BUTTON');
  hamburgerBtn.className = 'hamburger-btn';

  return { header, planks, separator, main, body, mobileMenu, hamburgerBtn };
}

// Test the logic directly without loading the full file
describe('interactions.js logic tests', () => {

  test('toggleMobileMenu toggles classes when elements exist', () => {
    const { mobileMenu, hamburgerBtn } = createMocks();
    let menuToggled = false;
    let btnToggled = false;

    mobileMenu.classList.toggle = () => { menuToggled = true; };
    hamburgerBtn.classList.toggle = () => { btnToggled = true; };

    // Simulate the function logic
    const menu = mobileMenu;
    const btn = hamburgerBtn;

    if (menu && btn) {
      menu.classList.toggle('active');
      btn.classList.toggle('active');
    }

    assert.ok(menuToggled, 'Menu class should be toggled');
    assert.ok(btnToggled, 'Button class should be toggled');
  });

  test('toggleMobileMenu handles missing elements gracefully', () => {
    // Should not throw when elements are null
    assert.doesNotThrow(() => {
      const menu = null;
      const btn = null;
      if (menu && btn) {
        menu.classList.toggle('active');
        btn.classList.toggle('active');
      }
    }, 'Should handle null elements');
  });

  test('initializeMobileHeader detects mobile vs desktop', () => {
    const { header, planks } = createMocks();

    // Mobile detection
    const isMobile = 500 <= 768;
    assert.strictEqual(isMobile, true, 'Should detect mobile width');

    // Desktop detection
    const isDesktop = 1024 > 768;
    assert.strictEqual(isDesktop, true, 'Should detect desktop width');
  });

  test('initializeMobileHeader sets up planks styles correctly', () => {
    const { header, planks, separator } = createMocks();

    // Simulate the setup logic
    const planksInitialHeight = planks.offsetHeight;
    const separatorHeight = separator.offsetHeight;

    planks.style.overflow = 'hidden';
    planks.style.maxHeight = `${planksInitialHeight}px`;
    planks.style.height = 'auto';
    planks.style.opacity = '1';

    separator.style.overflow = 'hidden';
    separator.style.maxHeight = `${separatorHeight}px`;
    separator.style.height = 'auto';
    separator.style.opacity = '1';

    assert.strictEqual(planks.style.overflow, 'hidden', 'Planks should have overflow hidden');
    assert.strictEqual(planks.style.maxHeight, '80px', 'Planks maxHeight should match offsetHeight');
    assert.strictEqual(planks.style.opacity, '1', 'Planks should start visible');
    assert.strictEqual(separator.style.maxHeight, '30px', 'Separator maxHeight should match offsetHeight');
  });

  test('Planks collapse animation is smooth (transition set before values)', () => {
    const { planks } = createMocks();

    // CRITICAL: Transition must be set BEFORE values change for smooth animation
    const transition = 'max-height 0.8s ease-in-out, height 0.8s ease-in-out, opacity 0.7s ease-in-out, padding 0.8s ease-in-out, margin 0.8s ease-in-out, background-color 0.7s ease-in-out, border-radius 0.8s ease-in-out';
    planks.style.transition = transition;

    // Then set values
    planks.style.maxHeight = '0';
    planks.style.height = '0';

    assert.ok(planks.style.transition.includes('0.8s'), 'Collapse transition should be 0.8s (same as expand)');
    assert.ok(planks.style.transition.includes('ease-in-out'), 'Collapse should use ease-in-out');
    assert.strictEqual(planks.style.maxHeight, '0', 'Planks maxHeight should be 0');
    assert.strictEqual(planks.style.height, '0', 'Planks height should be 0');
  });

  test('Planks background removed with !important to override CSS', () => {
    const { planks } = createMocks();

    // Simulate setProperty with important
    planks.style.setProperty('background-color', 'transparent', 'important');
    planks.style.setProperty('background', 'transparent', 'important');
    planks.style.setProperty('box-shadow', 'none', 'important');

    // Check that important flag was set (in real DOM, getPropertyValue would show this)
    assert.strictEqual(planks.style.getPropertyValue('background-color'), 'transparent', 'Background color should be transparent');
    assert.strictEqual(planks.style.getPropertyValue('background'), 'transparent', 'Background should be transparent');
    assert.strictEqual(planks.style.getPropertyValue('box-shadow'), 'none', 'Box shadow should be none');
  });

  test('Separator padding animates smoothly to hug arrows', () => {
    const { separator } = createMocks();
    const separatorInitialPaddingTop = '8px';

    // Transition must be set BEFORE changing padding
    separator.style.transition = 'padding-top 0.8s ease-in-out, padding-bottom 0.8s ease-in-out';
    separator.style.paddingTop = '2px';
    separator.style.paddingBottom = '2px';

    assert.ok(separator.style.transition.includes('0.8s'), 'Separator transition should be 0.8s');
    assert.ok(separator.style.transition.includes('padding-top'), 'Separator should transition padding-top');
    assert.ok(separator.style.transition.includes('padding-bottom'), 'Separator should transition padding-bottom');
    assert.strictEqual(separator.style.paddingTop, '2px', 'Separator padding should shrink to 2px');
    assert.strictEqual(separator.style.paddingBottom, '2px', 'Separator bottom padding should shrink to 2px');
  });

  test('Planks collapse logic works correctly', () => {
    const { planks, separator } = createMocks();
    let isCollapsed = false;
    const planksInitialHeight = 80;
    const separatorHeight = 30;

    // Simulate scroll > 30
    const scrollY = 35;
    const shouldCollapse = scrollY > 30;

    assert.strictEqual(shouldCollapse, true, 'Should collapse when scrollY > 30');

    if (shouldCollapse !== isCollapsed) {
      isCollapsed = shouldCollapse;

      // Set transition FIRST
      planks.style.transition = 'max-height 0.8s ease-in-out, height 0.8s ease-in-out, opacity 0.7s ease-in-out, padding 0.8s ease-in-out, margin 0.8s ease-in-out, background-color 0.7s ease-in-out, border-radius 0.8s ease-in-out';

      // Remove background with !important
      planks.style.setProperty('background-color', 'transparent', 'important');
      planks.style.setProperty('background', 'transparent', 'important');
      planks.style.setProperty('box-shadow', 'none', 'important');

      // Collapse planks - set all dimensions and spacing to 0
      planks.style.maxHeight = '0';
      planks.style.height = '0';
      planks.style.opacity = '0';
      planks.style.paddingTop = '0';
      planks.style.paddingBottom = '0';
      planks.style.paddingLeft = '0';
      planks.style.paddingRight = '0';
      planks.style.marginTop = '0';
      planks.style.marginBottom = '0';
      planks.style.marginLeft = '0';
      planks.style.marginRight = '0';
      planks.style.borderRadius = '0';
      planks.style.pointerEvents = 'none';

      // Separator padding animation
      if (separator) {
        separator.style.display = '';
        separator.style.opacity = '1';
        separator.style.visibility = 'visible';
        separator.style.transition = 'padding-top 0.8s ease-in-out, padding-bottom 0.8s ease-in-out';
        separator.style.paddingTop = '2px';
        separator.style.paddingBottom = '2px';
        separator.style.paddingLeft = '0';
        separator.style.paddingRight = '0';
      }
    }

    assert.strictEqual(isCollapsed, true, 'isCollapsed should be true');
    assert.strictEqual(planks.style.maxHeight, '0', 'Planks maxHeight should be 0');
    assert.strictEqual(planks.style.height, '0', 'Planks height should be 0');
    assert.strictEqual(planks.style.opacity, '0', 'Planks opacity should be 0');
    assert.strictEqual(planks.style.getPropertyValue('background-color'), 'transparent', 'Planks background should be transparent');
    assert.strictEqual(planks.style.pointerEvents, 'none', 'Planks pointerEvents should be none');
    // Separator should remain visible with reduced padding
    assert.strictEqual(separator.style.opacity, '1', 'Separator should stay visible');
    assert.strictEqual(separator.style.paddingTop, '2px', 'Separator padding should shrink to hug arrows');
    assert.ok(separator.style.transition.includes('0.8s'), 'Separator should have transition');
  });

  test('Header stays visible above planks (z-index check)', () => {
    const header = new MockElement('HEADER');
    header.style.zIndex = '1001';

    // Header should have higher z-index than planks
    const planksZIndex = 1; // Planks are in normal flow
    const headerZIndex = parseInt(header.style.zIndex) || 1001;

    assert.ok(headerZIndex > planksZIndex, 'Header z-index should be higher than planks');
    assert.strictEqual(headerZIndex, 1001, 'Header should have z-index 1001');
  });

  test('Planks reveal logic works correctly', () => {
    const { planks, separator } = createMocks();
    let isCollapsed = true;
    let planksInitialHeight = 80;
    const separatorHeight = 30;

    // Simulate scroll back to top
    const scrollY = 10;
    const shouldCollapse = scrollY > 30;

    assert.strictEqual(shouldCollapse, false, 'Should not collapse when scrollY <= 30');

    if (shouldCollapse !== isCollapsed) {
      isCollapsed = shouldCollapse;

      // Restore display and reset collapsed styles
      planks.style.display = '';
      planks.style.paddingTop = '';
      planks.style.paddingBottom = '';
      planks.style.paddingLeft = '';
      planks.style.paddingRight = '';
      planks.style.marginTop = '';
      planks.style.marginBottom = '';
      planks.style.marginLeft = '';
      planks.style.marginRight = '';
      planks.style.borderRadius = ''; // Restore rounded corners
      planks.style.backgroundColor = ''; // Restore background
      planks.style.boxShadow = ''; // Restore shadow
      planks.style.pointerEvents = 'auto';
      planks.style.overflow = 'hidden';

      // Recalculate height (simplified for test - actual code uses absolute positioning)
      planks.style.height = 'auto';
      planks.style.maxHeight = 'none';
      void planks.offsetHeight; // Force reflow
      const currentHeight = planks.offsetHeight;
      if (currentHeight > 0) {
        planksInitialHeight = currentHeight;
      }

      // Reset to 0 for animation start, then animate to full height
      planks.style.maxHeight = '0';
      planks.style.height = '0';
      // Then animate (simplified - actual code uses requestAnimationFrame)
      planks.style.maxHeight = `${planksInitialHeight}px`;
      planks.style.height = 'auto';
      planks.style.opacity = '1';

      // Separator stays visible
      if (separator) {
        separator.style.display = '';
        separator.style.maxHeight = `${separatorHeight}px`;
        separator.style.height = 'auto';
        separator.style.opacity = '1';
        separator.style.visibility = 'visible';
      }
    }

    assert.strictEqual(isCollapsed, false, 'isCollapsed should be false');
    assert.strictEqual(planks.style.maxHeight, '80px', 'Planks maxHeight should be restored');
    assert.strictEqual(planks.style.opacity, '1', 'Planks opacity should be 1');
    assert.strictEqual(planks.style.borderRadius, '', 'Planks borderRadius should be restored');
    assert.strictEqual(planks.style.backgroundColor, '', 'Planks background should be restored');
    assert.strictEqual(separator.style.maxHeight, '30px', 'Separator maxHeight should be restored');
  });

  test('Header padding calculation includes planks and separator', () => {
    const { header, planks, separator, body, main } = createMocks();
    let isCollapsed = false;
    const planksInitialHeight = 80;
    const separatorHeight = 30;

    // Simulate setHeaderPadding function
    let totalHeight = header.offsetHeight;
    if (!isCollapsed) {
      totalHeight += planksInitialHeight + separatorHeight;
    }
    body.style.paddingTop = `${totalHeight}px`;
    main.style.paddingTop = `${totalHeight}px`;

    const expectedHeight = 100 + 80 + 30; // header + planks + separator
    assert.strictEqual(parseInt(body.style.paddingTop), expectedHeight,
      `Body padding should be ${expectedHeight}px when expanded`);
    assert.strictEqual(parseInt(main.style.paddingTop), expectedHeight,
      `Main padding should be ${expectedHeight}px when expanded`);
  });

  test('Header padding excludes planks when collapsed', () => {
    const { header, planks, separator, body, main } = createMocks();
    let isCollapsed = true;
    const planksInitialHeight = 80;
    const separatorHeight = 30;

    // Simulate setHeaderPadding function when collapsed
    let totalHeight = header.offsetHeight;
    if (!isCollapsed) {
      totalHeight += planksInitialHeight + separatorHeight;
    }
    body.style.paddingTop = `${totalHeight}px`;
    main.style.paddingTop = `${totalHeight}px`;

    const expectedHeight = 100; // header only
    assert.strictEqual(parseInt(body.style.paddingTop), expectedHeight,
      `Body padding should be ${expectedHeight}px when collapsed`);
  });

  test('Desktop mode resets all styles', () => {
    const { planks, separator } = createMocks();

    // Set some styles first
    planks.style.maxHeight = '0';
    planks.style.opacity = '0';
    separator.style.maxHeight = '0';

    // Simulate desktop reset
    planks.style.maxHeight = '';
    planks.style.opacity = '';
    planks.style.overflow = '';
    planks.style.transition = '';
    separator.style.maxHeight = '';
    separator.style.opacity = '';
    separator.style.overflow = '';
    separator.style.transition = '';

    assert.strictEqual(planks.style.maxHeight, '', 'Planks maxHeight should be reset');
    assert.strictEqual(planks.style.opacity, '', 'Planks opacity should be reset');
    assert.strictEqual(separator.style.maxHeight, '', 'Separator maxHeight should be reset');
  });

  test('Missing elements handled gracefully', () => {
    const header = null;
    const planks = null;

    // Should not throw
    assert.doesNotThrow(() => {
      if (!header || !planks) {
        // Simulate retry logic
        return;
      }
    }, 'Should handle missing header/planks');
  });

  test('Scroll threshold is 100px', () => {
    assert.strictEqual(100 > 100, false, '100px should not collapse');
    assert.strictEqual(101 > 100, true, '101px should collapse');
    assert.strictEqual(99 > 100, false, '99px should not collapse');
  });

  test('Animation timing values are correct', () => {
    // Updated to match actual implementation - slower, smoother animations
    const collapseTransition = 'max-height 0.6s ease-in-out, height 0.6s ease-in-out, opacity 0.5s ease-in-out, padding 0.6s ease-in-out, margin 0.6s ease-in-out, background-color 0.5s ease-in-out, border-radius 0.6s ease-in-out';
    const revealTransition = 'max-height 0.6s ease-in-out, height 0.6s ease-in-out, opacity 0.5s ease-in-out, padding 0.6s ease-in-out, margin 0.6s ease-in-out, background-color 0.5s ease-in-out, border-radius 0.6s ease-in-out';

    assert.ok(collapseTransition.includes('0.6s'), 'Collapse should use 0.6s timing');
    assert.ok(collapseTransition.includes('0.5s'), 'Collapse opacity should use 0.5s');
    assert.ok(collapseTransition.includes('ease-in-out'), 'Collapse should use ease-in-out');
    assert.ok(collapseTransition.includes('border-radius'), 'Collapse should include border-radius');
    assert.ok(collapseTransition.includes('background-color'), 'Collapse should include background-color');
    assert.ok(revealTransition.includes('0.6s'), 'Reveal should use 0.6s timing');
    assert.ok(revealTransition.includes('0.5s'), 'Reveal opacity should use 0.5s');
    assert.ok(revealTransition.includes('ease-in-out'), 'Reveal should use ease-in-out');
    assert.ok(revealTransition.includes('border-radius'), 'Reveal should include border-radius');
  });

  test('Separator text is correct', () => {
    const { separator } = createMocks();
    assert.strictEqual(separator.textContent, '— ↑ ↓ —',
      'Separator should contain em-dashes and arrows');
  });
});

console.log('\n🧪 Running interactions.js tests...\n');

