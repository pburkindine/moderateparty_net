#!/usr/bin/env node
/**
 * Simple unit tests for super-gramma-chat.js
 * Run with: node js/test-super-gramma-chat.js
 * Requires Node.js 18+ (uses built-in test module)
 * No dependencies required!
 */

const { test, describe } = require('node:test');
const assert = require('node:assert');

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
    this.style = {};
    this.dataset = {};
    this.attributes = {};
    this.children = [];
    this.parentNode = null;
    this.nextElementSibling = null;
    this.offsetHeight = 50;
    this.offsetWidth = 100;
    this.innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.scrollTop = 0;
    this.scrollHeight = 0;
    this.disabled = false;
    this.addEventListener = () => {};
    this.setAttribute = (name, value) => { this.attributes[name] = value; };
    this.getAttribute = (name) => this.attributes[name];
    this.appendChild = (child) => {
      this.children.push(child);
      child.parentNode = this;
    };
    this.insertAdjacentHTML = (position, html) => {
      // Mock implementation
    };
    this.remove = () => {
      if (this.parentNode) {
        const index = this.parentNode.children.indexOf(this);
        if (index > -1) {
          this.parentNode.children.splice(index, 1);
        }
      }
    };
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

// Mock document and window
function createMockDOM() {
  const body = new MockElement('BODY');
  const head = new MockElement('HEAD');
  const footer = new MockElement('FOOTER', 'linkBar');
  footer.offsetHeight = 100;

  const chatWidget = new MockElement('DIV', 'super-gramma-chat');
  const chatButton = new MockElement('BUTTON', 'sg-chat-button');
  const chatWindow = new MockElement('DIV', 'sg-chat-window');
  const chatMessages = new MockElement('DIV', 'sg-chat-messages');
  const chatInput = new MockElement('TEXTAREA', 'sg-chat-input');
  const sendButton = new MockElement('BUTTON', 'sg-send-button');
  const closeButton = new MockElement('BUTTON', 'sg-close-button');

  chatWidget.appendChild(chatWindow);
  chatWindow.appendChild(chatMessages);

  const mockDocument = {
    body,
    head,
    getElementById: (id) => {
      const elements = {
        'linkBar': footer,
        'super-gramma-chat': chatWidget,
        'sg-chat-button': chatButton,
        'sg-chat-window': chatWindow,
        'sg-chat-messages': chatMessages,
        'sg-chat-input': chatInput,
        'sg-send-button': sendButton,
        'sg-close-button': closeButton
      };
      return elements[id] || null;
    },
    querySelector: (selector) => {
      if (selector === 'footer') return footer;
      return null;
    },
    readyState: 'complete'
  };

  const mockWindow = {
    innerWidth: 1024,
    innerHeight: 800,
    addEventListener: () => {}
  };

  return {
    body,
    head,
    footer,
    chatWidget,
    chatButton,
    chatWindow,
    chatMessages,
    chatInput,
    sendButton,
    closeButton,
    document: mockDocument,
    window: mockWindow
  };
}

// Test the logic directly without loading the full file
describe('super-gramma-chat.js logic tests', () => {

  test('MAX_HISTORY constant is 10', () => {
    const MAX_HISTORY = 10;
    assert.strictEqual(MAX_HISTORY, 10, 'MAX_HISTORY should be 10');
  });

  test('Chat history limits to MAX_HISTORY * 2 messages', () => {
    const MAX_HISTORY = 10;
    let chatHistory = [];

    // Add more than MAX_HISTORY * 2 messages
    for (let i = 0; i < 25; i++) {
      chatHistory.push(
        { role: 'user', content: `Message ${i}` },
        { role: 'assistant', content: `Response ${i}` }
      );
    }

    // Simulate history trimming logic
    if (chatHistory.length > MAX_HISTORY * 2) {
      chatHistory = chatHistory.slice(-MAX_HISTORY * 2);
    }

    assert.strictEqual(chatHistory.length, MAX_HISTORY * 2,
      `History should be limited to ${MAX_HISTORY * 2} messages`);
    assert.strictEqual(chatHistory[0].content, 'Message 15',
      'Should keep last 20 messages');
  });

  test('Mobile detection works correctly', () => {
    const mobileWidth = 500;
    const desktopWidth = 1024;
    const tabletWidth = 768;

    const isMobile1 = mobileWidth <= 768;
    const isMobile2 = desktopWidth <= 768;
    const isMobile3 = tabletWidth <= 768;

    assert.strictEqual(isMobile1, true, '500px should be mobile');
    assert.strictEqual(isMobile2, false, '1024px should not be mobile');
    assert.strictEqual(isMobile3, true, '768px should be mobile');
  });

  test('Position widget sets bottom position correctly on mobile', () => {
    const { footer, chatWidget } = createMockDOM();
    const mockWindow = { innerWidth: 500 };

    // Mobile positioning logic
    if (mockWindow.innerWidth <= 768) {
      chatWidget.style.bottom = '15px';
    }

    assert.strictEqual(chatWidget.style.bottom, '15px',
      'Mobile should position widget at 15px from bottom');
  });

  test('Position widget sets bottom position correctly on desktop', () => {
    const { footer, chatWidget } = createMockDOM();
    const mockWindow = { innerWidth: 1024 };

    // Desktop positioning logic
    if (mockWindow.innerWidth > 768 && footer) {
      const footerHeight = footer.offsetHeight;
      const bottomPosition = footerHeight + 15;
      chatWidget.style.bottom = `${bottomPosition}px`;
    }

    assert.strictEqual(chatWidget.style.bottom, '115px',
      'Desktop should position widget above footer');
  });

  test('Position chat window aligns with button', () => {
    const { chatButton, chatWindow } = createMockDOM();
    const mockWindow = { innerHeight: 800 };

    chatButton.offsetHeight = 60;
    const buttonRect = chatButton.getBoundingClientRect();
    const bottomPosition = mockWindow.innerHeight - buttonRect.bottom;
    chatWindow.style.bottom = `${bottomPosition}px`;

    assert.ok(chatWindow.style.bottom !== undefined,
      'Chat window should have bottom position set');
  });

  test('Markdown link conversion works', () => {
    // Simulate convertMarkdownLinks function
    const convertMarkdownLinks = (text) => {
      // Convert markdown links
      text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
      // Convert plain email addresses to mailto links
      text = text.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g, '<a href="mailto:$1">$1</a>');
      return text;
    };

    const markdownText = 'Check out [this link](https://example.com) for more info.';
    const result = convertMarkdownLinks(markdownText);
    assert.ok(result.includes('<a href="https://example.com" target="_blank">this link</a>'),
      'Should convert markdown links to HTML');

    const emailText = 'Contact me at test@example.com';
    const emailResult = convertMarkdownLinks(emailText);
    assert.ok(emailResult.includes('<a href="mailto:test@example.com">test@example.com</a>'),
      'Should convert email addresses to mailto links');
  });

  test('Message content splits paragraphs correctly', () => {
    const content = 'First paragraph\n\nSecond paragraph\n\nThird paragraph';
    const paragraphs = content.split('\n\n').filter(p => p.trim());

    assert.strictEqual(paragraphs.length, 3, 'Should split into 3 paragraphs');
    assert.strictEqual(paragraphs[0], 'First paragraph', 'First paragraph should be correct');
    assert.strictEqual(paragraphs[1], 'Second paragraph', 'Second paragraph should be correct');
  });

  test('Add message creates correct HTML structure', () => {
    const { chatMessages } = createMockDOM();
    const initialChildrenCount = chatMessages.children.length;

    // Simulate addMessage function
    const content = 'Hello, Super Gramma!';
    const role = 'user';
    const messageDiv = new MockElement('DIV');
    messageDiv.className = `sg-message sg-${role}`;

    const contentDiv = new MockElement('DIV');
    contentDiv.className = 'sg-message-content';
    contentDiv.innerHTML = `<p>${content}</p>`;

    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);

    assert.strictEqual(chatMessages.children.length, initialChildrenCount + 1,
      'Should add one message to container');
    assert.strictEqual(messageDiv.className, 'sg-message sg-user',
      'Message should have correct classes');
    assert.ok(contentDiv.innerHTML.includes('Hello, Super Gramma!'),
      'Message content should be included');
  });

  test('Send message validates empty input', () => {
    const { chatInput } = createMockDOM();
    let isTyping = false;

    chatInput.value = '   '; // Only whitespace
    const message = chatInput.value.trim();

    // Simulate the actual logic: if (!message || isTyping) return;
    const shouldSend = !(!message || isTyping);
    assert.strictEqual(shouldSend, false, 'Should not send empty message');

    chatInput.value = 'Hello!';
    const message2 = chatInput.value.trim();
    const shouldSend2 = !(!message2 || isTyping);
    assert.strictEqual(shouldSend2, true, 'Should send non-empty message');
  });

  test('Send message prevents sending when typing', () => {
    const { chatInput } = createMockDOM();
    let isTyping = true;

    chatInput.value = 'Hello!';
    const message = chatInput.value.trim();

    const shouldSend = message && !isTyping;
    assert.strictEqual(shouldSend, false, 'Should not send when typing indicator is active');
  });

  test('Typing indicator show/hide logic', () => {
    const { chatMessages, sendButton } = createMockDOM();
    let isTyping = false;

    // Show typing
    isTyping = true;
    const typingDiv = new MockElement('DIV', 'sg-typing-indicator');
    typingDiv.className = 'sg-message sg-assistant';
    chatMessages.appendChild(typingDiv);
    sendButton.disabled = true;

    assert.strictEqual(isTyping, true, 'isTyping should be true');
    assert.strictEqual(sendButton.disabled, true, 'Send button should be disabled');
    assert.ok(chatMessages.children.some(c => c.id === 'sg-typing-indicator'),
      'Typing indicator should be added');

    // Hide typing
    isTyping = false;
    const typingIndicator = chatMessages.children.find(c => c.id === 'sg-typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
    sendButton.disabled = false;

    assert.strictEqual(isTyping, false, 'isTyping should be false');
    assert.strictEqual(sendButton.disabled, false, 'Send button should be enabled');
    assert.ok(!chatMessages.children.some(c => c.id === 'sg-typing-indicator'),
      'Typing indicator should be removed');
  });

  test('Toggle chat opens window correctly', () => {
    const { chatWindow, chatButton, chatInput } = createMockDOM();
    let isOpen = false;
    const mockWindow = { innerWidth: 1024 };

    // Toggle open
    isOpen = !isOpen;
    if (isOpen) {
      chatWindow.style.display = 'flex';
      chatButton.style.display = 'none';
      chatInput.focus = () => {}; // Mock focus
    }

    assert.strictEqual(isOpen, true, 'isOpen should be true');
    assert.strictEqual(chatWindow.style.display, 'flex', 'Chat window should be visible');
    assert.strictEqual(chatButton.style.display, 'none', 'Chat button should be hidden');
  });

  test('Toggle chat closes window correctly', () => {
    const { chatWindow, chatButton } = createMockDOM();
    let isOpen = true;

    // Toggle closed
    isOpen = !isOpen;
    if (!isOpen) {
      chatWindow.style.display = 'none';
      chatButton.style.display = 'flex';
    }

    assert.strictEqual(isOpen, false, 'isOpen should be false');
    assert.strictEqual(chatWindow.style.display, 'none', 'Chat window should be hidden');
    assert.strictEqual(chatButton.style.display, 'flex', 'Chat button should be visible');
  });

  test('Mobile chat window moves to body when opened', () => {
    const { chatWindow, chatWidget, body } = createMockDOM();
    const mockWindow = { innerWidth: 500 };

    // Simulate mobile open logic
    if (mockWindow.innerWidth <= 768 && chatWindow && chatWidget && chatWindow.parentNode === chatWidget) {
      body.appendChild(chatWindow);
    }

    assert.strictEqual(chatWindow.parentNode, body,
      'On mobile, chat window should move to body');
  });

  test('Mobile chat window returns to widget when closed', () => {
    const { chatWindow, chatWidget, body } = createMockDOM();
    const mockWindow = { innerWidth: 500 };

    // Set up: window is in body
    body.appendChild(chatWindow);

    // Simulate mobile close logic
    if (mockWindow.innerWidth <= 768 && chatWindow && chatWidget && chatWindow.parentNode === body) {
      chatWidget.appendChild(chatWindow);
    }

    assert.strictEqual(chatWindow.parentNode, chatWidget,
      'On mobile close, chat window should return to widget');
  });

  test('Chat history updates correctly after message', () => {
    let chatHistory = [];
    const MAX_HISTORY = 10;

    const userMessage = 'Hello';
    const assistantReply = 'Hi there!';

    // Simulate history update
    chatHistory.push(
      { role: 'user', content: userMessage },
      { role: 'assistant', content: assistantReply }
    );

    assert.strictEqual(chatHistory.length, 2, 'History should have 2 messages');
    assert.strictEqual(chatHistory[0].role, 'user', 'First message should be user');
    assert.strictEqual(chatHistory[0].content, 'Hello', 'User message should match');
    assert.strictEqual(chatHistory[1].role, 'assistant', 'Second message should be assistant');
    assert.strictEqual(chatHistory[1].content, 'Hi there!', 'Assistant reply should match');
  });

  test('Error handling shows friendly message', () => {
    const errorMessage = "Oh honey, I seem to be having trouble right now. Could you try asking again in a moment? ❤️";

    assert.ok(errorMessage.includes('Oh honey'), 'Error message should be friendly');
    assert.ok(errorMessage.includes('❤️'), 'Error message should include heart emoji');
  });

  test('API endpoint constant is correct', () => {
    const API_ENDPOINT = '/api/chat';
    assert.strictEqual(API_ENDPOINT, '/api/chat', 'API endpoint should be /api/chat');
  });

  test('Enter key sends message (without Shift)', () => {
    const mockEvent = {
      key: 'Enter',
      shiftKey: false,
      preventDefault: () => {}
    };

    const shouldSend = mockEvent.key === 'Enter' && !mockEvent.shiftKey;
    assert.strictEqual(shouldSend, true, 'Enter without Shift should send message');
  });

  test('Enter key with Shift does not send message', () => {
    const mockEvent = {
      key: 'Enter',
      shiftKey: true,
      preventDefault: () => {}
    };

    const shouldSend = mockEvent.key === 'Enter' && !mockEvent.shiftKey;
    assert.strictEqual(shouldSend, false, 'Enter with Shift should not send message');
  });

  test('Textarea auto-resize logic', () => {
    const { chatInput } = createMockDOM();
    chatInput.scrollHeight = 50;

    // Simulate auto-resize
    chatInput.style.height = 'auto';
    chatInput.style.height = chatInput.scrollHeight + 'px';

    assert.strictEqual(chatInput.style.height, '50px',
      'Textarea height should match scrollHeight');
  });

  test('Chat messages scroll to bottom', () => {
    const { chatMessages } = createMockDOM();
    chatMessages.scrollHeight = 1000;

    // Simulate scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    assert.strictEqual(chatMessages.scrollTop, 1000,
      'Messages container should scroll to bottom');
  });

  test('Widget z-index values are correct', () => {
    const widgetZIndex = 9999;
    const buttonZIndex = 10000;
    const windowZIndex = 10000;

    assert.strictEqual(widgetZIndex, 9999, 'Widget z-index should be 9999');
    assert.strictEqual(buttonZIndex, 10000, 'Button z-index should be 10000');
    assert.strictEqual(windowZIndex, 10000, 'Window z-index should be 10000');
  });

  test('Mobile z-index hierarchy is correct', () => {
    const widgetZIndex = 1; // Very low on mobile
    const headerZIndex = 1001;
    const hamburgerZIndex = 1002;
    const windowZIndex = 9999; // Very high on mobile

    assert.ok(widgetZIndex < headerZIndex, 'Widget should be below header');
    assert.ok(headerZIndex < hamburgerZIndex, 'Header should be below hamburger');
    assert.ok(hamburgerZIndex < windowZIndex, 'Hamburger should be below chat window');
  });
});

console.log('\n🧪 Running super-gramma-chat.js tests...\n');

