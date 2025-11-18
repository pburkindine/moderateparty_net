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
```

### Test Files

- `js/test-interactions.js` - Tests for `js/interactions.js` (mobile header, planks collapse, animations)
- `js/test-super-gramma-chat.js` - Tests for `js/super-gramma-chat.js` (chat widget functionality)

All tests use Node.js built-in test framework and mock DOM elements to test logic without requiring a browser environment.
