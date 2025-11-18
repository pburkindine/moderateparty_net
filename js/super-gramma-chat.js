// Super Gramma Chat Widget
// Add this script to pages where you want the chat available

(function() {
  'use strict';

  // Configuration
  const API_ENDPOINT = '/api/chat'; // Cloudflare Function endpoint
  const MAX_HISTORY = 10; // Keep last 10 messages for context

  let chatHistory = [];
  let isOpen = false;
  let isTyping = false;

  // Position widget above footer
  function positionWidget() {
    const footer = document.getElementById('linkBar');
    const widget = document.getElementById('super-gramma-chat');
    if (footer && widget) {
      const footerHeight = footer.offsetHeight;
      let bottomPosition = footerHeight + 15;

      // On mobile, ensure chat button doesn't overlap with header
      if (window.innerWidth <= 768) {
        const header = document.querySelector('header');
        if (header) {
          const headerHeight = header.offsetHeight;
          const viewportHeight = window.innerHeight;
          // Ensure button is at least 80px from top (below header area)
          const minTopSpace = 80;
          const maxBottom = viewportHeight - minTopSpace;
          if (bottomPosition > maxBottom) {
            bottomPosition = maxBottom;
          }
        }
      }

      widget.style.bottom = `${bottomPosition}px`;
      console.log(`Super Gramma: Positioned ${bottomPosition}px from bottom`);
    }
  }

  // Position chat window to align with button
  function positionChatWindow() {
    const button = document.getElementById('sg-chat-button');
    const chatWindow = document.getElementById('sg-chat-window');
    if (button && chatWindow) {
      const buttonRect = button.getBoundingClientRect();
      // Position window bottom-aligned with button
      const bottomPosition = window.innerHeight - buttonRect.bottom;
      chatWindow.style.bottom = `${bottomPosition}px`;
    }
  }

  // Create chat widget HTML
  function createChatWidget() {
    const widgetHTML = `
      <div id="super-gramma-chat" class="sg-chat-widget">
        <!-- Floating Button -->
        <button id="sg-chat-button" class="sg-chat-button" aria-label="Chat with Super Gramma">
          <img src="img/super-gramma.png" alt="Super Gramma" class="sg-button-img" />
          <span class="sg-button-text">Chat</span>
        </button>

        <!-- Chat Window -->
        <div id="sg-chat-window" class="sg-chat-window" style="display: none;">
          <div class="sg-chat-header">
            <div class="sg-header-content">
              <img src="img/super-gramma.png" alt="Super Gramma" class="sg-header-img" />
              <div>
                <div class="sg-header-title">Chat</div>
                <div class="sg-header-subtitle">☕🥐🍂🐌🌻💬</div>
              </div>
            </div>
            <button id="sg-close-button" class="sg-close-button" aria-label="Close chat">✕</button>
          </div>

          <div id="sg-chat-messages" class="sg-chat-messages">
            <!-- IMMUTABLE: Opening greeting crafted by Pete - do not modify -->
            <div class="sg-message sg-assistant">
              <div class="sg-message-content">
                <p>Hi, sweetheart! I'm Super Gramma. I'm up all night to talk about politics, or your problems, or quantum physics for all I care :)  Maybe a story? What's on yer mind? 🍦</p>
              </div>
            </div>
          </div>

          <div class="sg-chat-input-container">
            <textarea
              id="sg-chat-input"
              class="sg-chat-input"
              placeholder="Ask Super Gramma anything..."
              rows="1"
            ></textarea>
            <button id="sg-send-button" class="sg-send-button" aria-label="Send message">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10l18-8-8 18-2-8-8-2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    // Append to the chat container in footer
    const container = document.getElementById('sg-chat-container');
    if (container) {
      container.insertAdjacentHTML('beforeend', widgetHTML);

      // Position based on actual footer height
      positionWidget();

      // Reposition on window resize (footer height may change)
      window.addEventListener('resize', positionWidget);

      console.log('Super Gramma: Chat widget added to footer container');
    } else {
      // Fallback: append to body if container not found
      document.body.insertAdjacentHTML('beforeend', widgetHTML);
      console.log('Super Gramma: Chat widget added to body (fallback)');
    }
  }

  // Add CSS styles
  function addStyles() {
    const styles = `
      <style>
        .sg-chat-widget {
          position: fixed;
          right: 20px;
          /* bottom will be set by JS based on footer height */
          pointer-events: auto;
          z-index: 9999;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .sg-chat-button {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,123,255,0.4);
          transition: all 0.3s ease;
          font-size: 16px;
          font-weight: 600;
          position: relative;
          z-index: 10000;
        }

        .sg-chat-button:hover {
          background: #0056b3;
          box-shadow: 0 6px 16px rgba(0,123,255,0.6);
          transform: translateY(-2px);
        }

        .sg-button-img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          padding: 2px;
        }

        .sg-chat-window {
          position: fixed;
          /* Position will be set by JS to align with button */
          right: 20px;
          width: 380px;
          max-width: calc(100vw - 40px);
          height: 500px;
          max-height: calc(100vh - 120px);
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .sg-chat-header {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          color: white;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sg-header-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sg-header-img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: white;
          padding: 3px;
        }

        .sg-header-title {
          font-size: 18px;
          font-weight: 700;
        }

        .sg-header-subtitle {
          font-size: 18px;
          opacity: 1;
        }

        .sg-close-button {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .sg-close-button:hover {
          background: rgba(255,255,255,0.2);
        }

        .sg-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background: #f8f9fa;
        }

        .sg-message {
          margin-bottom: 16px;
          display: flex;
          gap: 10px;
        }

        .sg-message-content {
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 12px;
          line-height: 1.5;
        }

        .sg-assistant .sg-message-content {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px 12px 12px 4px;
        }

        .sg-user .sg-message-content {
          background: #007bff;
          color: white;
          border-radius: 12px 12px 4px 12px;
          margin-left: auto;
        }

        .sg-message-content p {
          margin: 0;
        }

        .sg-message-content p + p {
          margin-top: 8px;
        }

        .sg-message-content a {
          color: #007bff;
          text-decoration: underline;
        }

        .sg-user .sg-message-content a {
          color: white;
          text-decoration: underline;
        }

        .sg-typing {
          display: inline-flex;
          gap: 4px;
          padding: 12px 16px;
        }

        .sg-typing span {
          width: 8px;
          height: 8px;
          background: #999;
          border-radius: 50%;
          animation: sg-typing-bounce 1.4s infinite;
        }

        .sg-typing span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .sg-typing span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes sg-typing-bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-10px); }
        }

        .sg-chat-input-container {
          display: flex;
          gap: 8px;
          padding: 16px;
          background: white;
          border-top: 1px solid #e0e0e0;
        }

        .sg-chat-input {
          flex: 1;
          padding: 10px 14px;
          border: 1px solid #ddd;
          border-radius: 20px;
          resize: none;
          font-size: 14px;
          font-family: inherit;
          max-height: 100px;
        }

        .sg-chat-input:focus {
          outline: none;
          border-color: #007bff;
        }

        .sg-send-button {
          width: 40px;
          height: 40px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .sg-send-button:hover {
          background: #0056b3;
        }

        .sg-send-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .sg-chat-widget {
            right: 15px;
            /* bottom set by JS */
            z-index: 1 !important; /* Very low - stay below header and menu */
          }

          /* Ensure header and hamburger stay above chat */
          header {
            z-index: 1001 !important;
          }

          .hamburger-btn,
          .mobile-menu-container {
            z-index: 1002 !important;
          }

          .sg-chat-button {
            padding: 10px;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0;
            box-shadow: 0 4px 20px rgba(0,123,255,0.5);
          }

          .sg-button-text {
            display: none;
          }

          .sg-button-img {
            width: 40px;
            height: 40px;
            margin: 0;
          }

          .sg-chat-window {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            max-width: 100vw;
            max-height: 100vh;
            border-radius: 0;
            display: flex;
            flex-direction: column;
          }

          .sg-chat-header {
            flex-shrink: 0;
          }

          .sg-chat-messages {
            flex: 1;
            overflow-y: auto;
            min-height: 0;
          }

          .sg-chat-input-container {
            flex-shrink: 0;
            padding: 12px;
          }

          .sg-chat-input {
            font-size: 16px;
          }
        }
      </style>
    `;
    document.head.insertAdjacentHTML('beforeend', styles);
  }

  // Initialize chat
  function init() {
    addStyles();
    createChatWidget();
    attachEventListeners();
  }

  // Attach event listeners
  function attachEventListeners() {
    const chatButton = document.getElementById('sg-chat-button');
    const closeButton = document.getElementById('sg-close-button');
    const sendButton = document.getElementById('sg-send-button');
    const chatInput = document.getElementById('sg-chat-input');
    const chatWindow = document.getElementById('sg-chat-window');

    chatButton.addEventListener('click', toggleChat);
    closeButton.addEventListener('click', toggleChat);
    sendButton.addEventListener('click', sendMessage);

    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    // Auto-resize textarea
    chatInput.addEventListener('input', () => {
      chatInput.style.height = 'auto';
      chatInput.style.height = chatInput.scrollHeight + 'px';
    });
  }

  // Toggle chat window
  function toggleChat() {
    isOpen = !isOpen;
    const chatWindow = document.getElementById('sg-chat-window');
    const chatButton = document.getElementById('sg-chat-button');

    if (isOpen) {
      // Position window before showing it
      positionChatWindow();
      chatWindow.style.display = 'flex';
      chatButton.style.display = 'none';
      document.getElementById('sg-chat-input').focus();
    } else {
      chatWindow.style.display = 'none';
      chatButton.style.display = 'flex';
    }
  }

  // Send message
  async function sendMessage() {
    const input = document.getElementById('sg-chat-input');
    const message = input.value.trim();

    if (!message || isTyping) return;

    // Add user message to chat
    addMessage(message, 'user');
    input.value = '';
    input.style.height = 'auto';

    // Show typing indicator
    showTyping();

    try {
      // Call API
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          history: chatHistory
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      // Remove typing indicator
      hideTyping();

      // Add assistant response
      addMessage(data.reply, 'assistant');

      // Update history
      chatHistory.push(
        { role: 'user', content: message },
        { role: 'assistant', content: data.reply }
      );

      // Keep history manageable
      if (chatHistory.length > MAX_HISTORY * 2) {
        chatHistory = chatHistory.slice(-MAX_HISTORY * 2);
      }

    } catch (error) {
      console.error('Chat error:', error);
      hideTyping();
      addMessage(
        "Oh honey, I seem to be having trouble right now. Could you try asking again in a moment? ❤️",
        'assistant'
      );
    }
  }

  // Add message to chat
  function addMessage(content, role) {
    const messagesContainer = document.getElementById('sg-chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `sg-message sg-${role}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'sg-message-content';

    // Convert markdown links to HTML: [text](url) -> <a href="url">text</a>
    const convertMarkdownLinks = (text) => {
      // Convert markdown links
      text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
      // Convert plain email addresses to mailto links
      text = text.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g, '<a href="mailto:$1">$1</a>');
      return text;
    };

    // Convert line breaks to paragraphs and parse markdown links
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    contentDiv.innerHTML = paragraphs.map(p => `<p>${convertMarkdownLinks(p)}</p>`).join('');

    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Show typing indicator
  function showTyping() {
    isTyping = true;
    const messagesContainer = document.getElementById('sg-chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'sg-typing-indicator';
    typingDiv.className = 'sg-message sg-assistant';
    typingDiv.innerHTML = `
      <div class="sg-typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    document.getElementById('sg-send-button').disabled = true;
  }

  // Hide typing indicator
  function hideTyping() {
    isTyping = false;
    const typingIndicator = document.getElementById('sg-typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
    document.getElementById('sg-send-button').disabled = false;
  }

  // Initialize when DOM is ready and footer is loaded
  function waitForFooter() {
    const footer = document.querySelector('footer');
    if (footer && footer.innerHTML.trim() !== '') {
      // Footer is loaded and has content
      init();
    } else {
      // Footer not ready, check again soon
      setTimeout(waitForFooter, 100);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForFooter);
  } else {
    waitForFooter();
  }

})();

