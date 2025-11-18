# Super Gramma Content Update - November 18, 2024

## What Changed

Updated Super Gramma's system prompt in `functions/api/chat.js` to include **detailed, verbatim text** from the moderateparty.net site pages.

## Key Improvements

### 1. **Full Steel Man Technique Text**
- Included all four rules word-for-word from steel-man.html
- Added explanation of steel man vs straw man
- Link to full page

### 2. **THINK Acronym**
- "Is it True? Helpful? Inspiring? Necessary? Kind?"

### 3. **Detailed Planks Content**
Added **verbatim quotes** from various-issues.html for EVERY plank:
- K-Jobs Education
- Pro-Obamacare / Healthcare
- Sustainability
- Pro-Pot / Marijuana
- 2nd Amendment / Guns
- Immigration
- Tariffs
- **⚠️ ABORTION** - with explicit instruction to stay to text only
- **⚠️ FAITH AND FAMILY / CHRISTIANITY** - with explicit instruction to stay to text only
- Israel and Palestine
- Diversity
- Ranked Choice Voting
- Moderate Capitalism
- Taxes
- The Unions
- Gold Standard
- One-World Government

### 4. **Key Concepts with Full Text**
- "not THAT complicated" - full explanation and gravity analogy
- "Matched Set" - full explanation with pug dog analogy
- "Fail on Purpose" - brief but complete

### 5. **Clear Instructions**
Added explicit guidance:
- **QUOTE THE ACTUAL TEXT** - Don't paraphrase
- **LINK NATURALLY** - Weave links into conversation
- **BE SPECIFIC** - Use exact language from pages
- **STAY TO THE TEXT** on abortion and Christianity especially
- **TEACH THE CONCEPTS** - Steel Man, THINK, etc.

### 6. **Special Callouts**
Two issues flagged with ⚠️ warnings:

**ABORTION:**
- "DO NOT elaborate or philosophize beyond this text on abortion. It's intentionally limited. If pressed, repeat: 'There's no easy answer. It's sad.'"

**CHRISTIANITY/FAITH:**
- "This is about COEXISTENCE, not theocracy. Faith is personal and beautiful, but never by force of law."

## What Super Gramma Can Now Do

1. **Quote exact text** from the planks page when asked about positions
2. **Link directly** to specific sections like `#education`, `#healthcare`, etc.
3. **Teach the Steel Man technique** using the full four-rule framework
4. **Stay disciplined** on abortion and Christianity - won't over-elaborate
5. **Reference actual site language** instead of giving generic moderate-sounding answers

## Expected Behavior Change

**BEFORE:** "Well, healthcare is important and we think there should be universal coverage while also respecting market forces..."

**AFTER:** "So, for-profit healthcare is never going to be there for the working poor. It just ain't. People who work their whole lives don't deserve to live in fear, we believe that... Obamacare is what works. A real, honest American compromise for the best. Check out our [full breakdown on healthcare](https://www.moderateparty.net/various-issues.html#healthcare) ☕"

## Files Modified

- `/Users/pete.burkindine/Documents/git/copyleftout_sites/moderateparty_net/functions/api/chat.js`

## Testing Recommendations

Test with questions like:
- "What's your position on healthcare?"
- "Tell me about ranked choice voting"
- "What do you think about abortion?" (should stay brief and sad)
- "Are you Christian?" (should emphasize coexistence, not theocracy)
- "What's the steel man technique?" (should give full four rules)
- "Explain centrism vs moderate party" (should give strong synthesis explanation)

Expected: Actual quotes from site, links to pages, accurate representation of positions.

---

*This update addresses the issue where Super Gramma was giving generic smart-sounding answers instead of referencing and linking to the actual site content.*

