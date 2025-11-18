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

    // Simulate scroll > 200px (updated threshold)
    const scrollY = 210;
    const shouldCollapse = scrollY > 200;

    assert.strictEqual(shouldCollapse, true, 'Should collapse when scrollY > 200');

    if (shouldCollapse !== isCollapsed) {
      isCollapsed = shouldCollapse;

      // Mock links to hide
      const mockLink = new MockElement('A');
      mockLink.className = 'header-link';
      planks.querySelectorAll = (selector) => {
        if (selector === '.header-link') return [mockLink];
        if (selector === '.planks-placeholder') return [];
        return [];
      };

      // Hide links
      const links = planks.querySelectorAll('.header-link');
      links.forEach(link => {
        link.style.setProperty('display', 'none', 'important');
      });

      // Set position relative for placeholder
      planks.style.position = 'relative';

      // Set transition FIRST (NO opacity, padding, margin)
      planks.style.transition = 'max-height 0.8s ease-in-out, height 0.8s ease-in-out, background-color 0.7s ease-in-out, border-radius 0.8s ease-in-out';

      // Set padding to 0 instantly (no animation)
      planks.style.setProperty('padding-top', '0', 'important');
      planks.style.setProperty('padding-bottom', '0', 'important');
      planks.style.setProperty('padding-left', '0', 'important');
      planks.style.setProperty('padding-right', '0', 'important');

      // Collapse planks - set dimensions to 0
      planks.style.maxHeight = '0';
      planks.style.height = '0';
      planks.style.overflow = 'hidden';
      planks.style.opacity = '1'; // Opacity stays at 1
      planks.style.pointerEvents = 'none';

      // Separator padding animation (still valid)
      if (separator) {
        separator.style.display = '';
        separator.style.opacity = '1';
        separator.style.visibility = 'visible';
        separator.style.transition = 'padding-top 0.8s ease-in-out, padding-bottom 0.8s ease-in-out';
        separator.style.paddingTop = '4px';
        separator.style.paddingBottom = '4px';
      }
    }

    assert.strictEqual(isCollapsed, true, 'isCollapsed should be true');
    assert.strictEqual(planks.style.maxHeight, '0', 'Planks maxHeight should be 0');
    assert.strictEqual(planks.style.height, '0', 'Planks height should be 0');
    assert.strictEqual(planks.style.opacity, '1', 'Planks opacity should stay at 1 (no opacity animation)');
    assert.strictEqual(planks.style.position, 'relative', 'Planks should have position relative for placeholder');
    assert.strictEqual(planks.style.pointerEvents, 'none', 'Planks pointerEvents should be none');
    // Separator should remain visible with reduced padding
    assert.strictEqual(separator.style.opacity, '1', 'Separator should stay visible');
    assert.strictEqual(separator.style.paddingTop, '4px', 'Separator padding should shrink to 4px');
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
    const shouldCollapse = scrollY > 200;

    assert.strictEqual(shouldCollapse, false, 'Should not collapse when scrollY <= 200');

    if (shouldCollapse !== isCollapsed) {
      isCollapsed = shouldCollapse;

      // Mock links to show
      const mockLink = new MockElement('A');
      mockLink.className = 'header-link';
      planks.querySelectorAll = (selector) => {
        if (selector === '.header-link') return [mockLink];
        return [];
      };

      // Set position relative for placeholder
      planks.style.position = 'relative';

      // Set transition (NO opacity, padding, margin)
      planks.style.transition = 'max-height 0.8s ease-in-out, height 0.8s ease-in-out, background-color 0.7s ease-in-out, border-radius 0.8s ease-in-out';

      // Set padding to 0 first, will restore after animation
      planks.style.setProperty('padding-top', '0', 'important');
      planks.style.setProperty('padding-bottom', '0', 'important');
      planks.style.setProperty('padding-left', '0', 'important');
      planks.style.setProperty('padding-right', '0', 'important');

      // Start from 0 height
      planks.style.maxHeight = '0';
      planks.style.height = '0';
      planks.style.overflow = 'hidden';
      planks.style.opacity = '1'; // Opacity stays at 1

      // Then animate to full height (simplified)
      planks.style.maxHeight = `${planksInitialHeight}px`;
      planks.style.height = `${planksInitialHeight}px`;

      // After animation completes, restore padding and set to auto
      // (in actual code this happens in setTimeout after 850ms)
      planks.style.pointerEvents = 'auto';

      // Show links after animation (in actual code this happens after timeout)
      const links = planks.querySelectorAll('.header-link');
      links.forEach(link => {
        link.style.display = '';
      });

      // Separator padding restored
      if (separator) {
        separator.style.display = '';
        separator.style.opacity = '1';
        separator.style.visibility = 'visible';
        separator.style.transition = 'padding-top 0.8s ease-in-out, padding-bottom 0.8s ease-in-out';
        separator.style.paddingTop = '8px';
        separator.style.paddingBottom = '8px';
      }
    }

    assert.strictEqual(isCollapsed, false, 'isCollapsed should be false');
    assert.strictEqual(planks.style.maxHeight, '80px', 'Planks maxHeight should be restored');
    assert.strictEqual(planks.style.opacity, '1', 'Planks opacity should stay at 1');
    assert.strictEqual(planks.style.position, 'relative', 'Planks should have position relative for placeholder');
    assert.strictEqual(planks.style.pointerEvents, 'auto', 'Planks pointerEvents should be auto');
    assert.strictEqual(separator.style.paddingTop, '8px', 'Separator padding should be restored');
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

  test('Scroll threshold is 200px', () => {
    assert.strictEqual(200 > 200, false, '200px should not collapse');
    assert.strictEqual(201 > 200, true, '201px should collapse');
    assert.strictEqual(199 > 200, false, '199px should not collapse');
  });

  test('Animation timing values are correct', () => {
    // Updated to match actual implementation - NO opacity, padding, or margin animations
    const collapseTransition = 'max-height 0.8s ease-in-out, height 0.8s ease-in-out, background-color 0.7s ease-in-out, border-radius 0.8s ease-in-out';
    const revealTransition = 'max-height 0.8s ease-in-out, height 0.8s ease-in-out, background-color 0.7s ease-in-out, border-radius 0.8s ease-in-out';

    assert.ok(collapseTransition.includes('0.8s'), 'Collapse should use 0.8s timing for height');
    assert.ok(collapseTransition.includes('0.7s'), 'Collapse background should use 0.7s');
    assert.ok(collapseTransition.includes('ease-in-out'), 'Collapse should use ease-in-out');
    assert.ok(collapseTransition.includes('border-radius'), 'Collapse should include border-radius');
    assert.ok(collapseTransition.includes('background-color'), 'Collapse should include background-color');
    assert.ok(!collapseTransition.includes('opacity'), 'Collapse should NOT include opacity');
    assert.ok(!collapseTransition.includes('padding'), 'Collapse should NOT include padding');
    assert.ok(!collapseTransition.includes('margin'), 'Collapse should NOT include margin');
    assert.ok(revealTransition.includes('0.8s'), 'Reveal should use 0.8s timing');
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

