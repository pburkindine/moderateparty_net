# moderateparty_net

## Running Tests

This project includes unit tests for JavaScript functionality. Tests are located next to the files they test in the `js/` directory.

### Requirements

- Node.js 18+ (uses built-in test module)
- No dependencies required!

### Running Tests

Run individual test files:

```bash
# Test interactions.js
node js/test-interactions.js

# Test super-gramma-chat.js
node js/test-super-gramma-chat.js

# Test planks-data.js (card deck content integrity)
node js/test-planks-data.js
```

### Test Files

- `js/test-interactions.js` - Tests for `js/interactions.js` (mobile header, planks collapse, animations)
- `js/test-super-gramma-chat.js` - Tests for `js/super-gramma-chat.js` (chat widget functionality)
- `js/test-planks-data.js` - Tests for `js/planks-data.js` (card deck: legacy anchor coverage, media files exist, verbatim load-bearing lines)

All tests use Node.js built-in test framework and mock DOM elements to test logic without requiring a browser environment.
