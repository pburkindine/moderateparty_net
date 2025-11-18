# Super Gramma Chat Setup Instructions

## What This Does

Adds a "Chat with Super Gramma" widget to your moderate party site. Visitors can click the floating button to open a chat and ask Super Gramma anything about politics, the moderate party platform, or specific issues.

Super Gramma is powered by OpenAI's GPT-4o-mini and has been given the full personality and knowledge of the moderate party platform.

## Files Created

1. **`functions/api/chat.js`** - Cloudflare Function that handles the AI chat
2. **`js/super-gramma-chat.js`** - Chat widget UI (can be added to any page)

## Setup Steps

### 1. Get an OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Click "Create new secret key"
4. Copy the key (starts with `sk-...`)
5. **Save it somewhere safe** - you won't be able to see it again!

**Cost**: GPT-4o-mini is very cheap - about $0.01-0.03 per conversation

### 2. Add API Key to Cloudflare

1. Go to your Cloudflare dashboard
2. Navigate to **Pages** → your moderateparty site
3. Go to **Settings** → **Environment variables**
4. Add a new variable:
   - **Variable name**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (the `sk-...` key)
   - **Type**: Production (and Preview if you want)
5. Click **Save**

### 3. Deploy the Function

The Cloudflare Function (`functions/api/chat.js`) will automatically deploy when you push to your repository. Cloudflare Pages automatically detects functions in the `functions/` directory.

After deploying, your chat API will be available at:
`https://www.moderateparty.net/api/chat`

### 4. Add Chat Widget to Pages

Add this line before the closing `</body>` tag on any page where you want the chat available:

```html
<script src="js/super-gramma-chat.js"></script>
```

**Example** (in `index.html`):
```html
  ...
  <footer></footer>

  <script src="js/super-gramma-chat.js"></script>
</body>
</html>
```

### 5. Test It!

1. Push your changes to GitHub/deploy to Cloudflare
2. Visit your site
3. Look for the floating "Chat with Super Gramma!" button in the bottom-right corner
4. Click it and try asking Super Gramma a question!

**Test questions:**
- "What does the moderate party believe?"
- "What's your stance on healthcare?"
- "Can you explain the Steel Man technique?"
- "Why both pro-Obamacare AND pro-guns?"

## Features

✅ **Floating chat button** - Always accessible in bottom-right corner
✅ **Smooth animations** - Clean, modern UI
✅ **Mobile-friendly** - Works great on phones and tablets
✅ **Conversation memory** - Remembers last 10 messages for context
✅ **Super Gramma personality** - Warm, wise, grandmotherly with moderate politics
✅ **Site knowledge** - Knows all about the planks, concepts, and philosophy
✅ **Typing indicator** - Shows when Super Gramma is thinking
✅ **Auto-scroll** - Messages always visible

## Customization

### Change Chat Position

In `super-gramma-chat.js`, find this CSS:
```css
.sg-chat-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```

Change `bottom` or `right` to `left` to move it around.

### Change Colors

Look for `#007bff` (blue) and change to your preferred color.

### Adjust Response Length

In `functions/api/chat.js`, find:
```javascript
max_tokens: 500,  // Keep responses concise
```

Increase this number for longer responses (costs more).

### Modify Personality

Edit the `systemPrompt` in `functions/api/chat.js` to adjust Super Gramma's personality, tone, or knowledge.

## Troubleshooting

### Chat button doesn't appear
- Check browser console for errors
- Make sure `super-gramma-chat.js` is loaded
- Verify the script tag is before `</body>`

### "Oh honey, I seem to be having trouble..."
- Check that OPENAI_API_KEY is set in Cloudflare
- Verify the API key is valid
- Check Cloudflare Functions logs

### Responses are slow
- GPT-4o-mini is fast - if it's slow, might be Cloudflare cold start
- First request after inactivity can take 1-2 seconds

### Costs getting high
- Each message costs about $0.001-0.003
- Consider adding rate limiting if getting spammed
- Can switch to an even cheaper model if needed

## Advanced: Rate Limiting

To prevent abuse, you can add rate limiting in the Cloudflare Function:

```javascript
// In functions/api/chat.js, before calling OpenAI:
const ip = context.request.headers.get('CF-Connecting-IP');
// Store IP + timestamp in KV storage
// Reject if too many requests in X minutes
```

## Need Help?

- Check Cloudflare Functions logs for errors
- Test the API directly at `/api/chat`
- Verify environment variables are set
- Check OpenAI API usage dashboard

---

**That's it!** Super Gramma is ready to chat politics with your visitors! 👵💙

