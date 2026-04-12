# Unit Testing Guide

This project uses **Vitest** and **React Testing Library** for unit testing.

## Quick Start

```bash
# Run tests in watch mode
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests with coverage report
pnpm test:coverage
```

## Test Structure

Tests are organized alongside the code they test:

```
src/
  app/
    components/
      __tests__/
        Footer.test.tsx
        LanguageSelector.test.tsx
      ui/
        __tests__/
          utils.test.ts
```

## Writing Tests

### 1. Testing Utility Functions

For pure functions without React dependencies:

```typescript
import { describe, it, expect } from 'vitest';
import { cn } from '../utils';

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    const result = cn('px-4', 'py-2');
    expect(result).toBe('px-4 py-2');
  });
});
```

### 2. Testing React Components

For components, use React Testing Library:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Footer from '../Footer';

describe('Footer', () => {
  it('should render the footer', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
```

### 3. Testing User Interactions

Use `@testing-library/user-event` for realistic user interactions:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('LanguageSelector', () => {
  it('should toggle dropdown when clicked', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');
    
    // Click to open
    fireEvent.click(button);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
});
```

### 4. Mocking Dependencies

Mock external dependencies using Vitest:

```typescript
import { vi } from 'vitest';

// Mock a module
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
      changeLanguage: vi.fn(),
    },
  }),
}));

// Mock a function
const mockFunction = vi.fn();
```

## Common Testing Patterns

### Testing with React Router

Wrap components that use routing in `BrowserRouter`:

```typescript
render(
  <BrowserRouter>
    <YourComponent />
  </BrowserRouter>
);
```

### Testing Async Behavior

Use `waitFor` for async assertions:

```typescript
import { waitFor } from '@testing-library/react';

await waitFor(() => {
  expect(screen.getByText('Loading complete')).toBeInTheDocument();
});
```

### Testing Accessibility

Test ARIA attributes and semantic HTML:

```typescript
// Test roles
const button = screen.getByRole('button', { name: /submit/i });

// Test ARIA attributes
expect(button).toHaveAttribute('aria-expanded', 'true');

// Test accessible names
const nav = screen.getByRole('navigation', { name: /main/i });
```

## Available Matchers

Thanks to `@testing-library/jest-dom`, you have access to custom matchers:

- `toBeInTheDocument()`
- `toHaveAttribute(name, value)`
- `toHaveClass(className)`
- `toHaveTextContent(text)`
- `toBeVisible()`
- `toBeDisabled()`
- `toHaveFocus()`

See full list: https://github.com/testing-library/jest-dom

## Querying Elements

### Priority Order

1. **Queries accessible to everyone**: `getByRole`, `getByLabelText`, `getByPlaceholderText`, `getByText`
2. **Semantic queries**: `getByAltText`, `getByTitle`
3. **Test IDs**: `getByTestId` (last resort)

### Query Variants

- `getBy*`: Throws error if not found (use for elements that should exist)
- `queryBy*`: Returns null if not found (use for asserting non-existence)
- `findBy*`: Returns a promise (use for async elements)

```typescript
// Element should exist
const button = screen.getByRole('button');

// Element might not exist
const modal = screen.queryByRole('dialog');
expect(modal).not.toBeInTheDocument();

// Wait for element to appear
const message = await screen.findByText('Success');
```

## Coverage Reports

Run tests with coverage:

```bash
pnpm test:coverage
```

This generates:
- Terminal output with coverage summary
- HTML report in `coverage/` directory
- JSON report for CI/CD integration

Coverage thresholds and exclusions are configured in `vitest.config.ts`.

## Best Practices

1. **Test behavior, not implementation**: Focus on what users see and do
2. **Use semantic queries**: Prefer `getByRole` over `getByTestId`
3. **Test accessibility**: Ensure proper ARIA attributes and roles
4. **Keep tests isolated**: Each test should be independent
5. **Mock external dependencies**: Don't make real API calls in unit tests
6. **Use descriptive test names**: Test names should explain what's being tested
7. **Follow AAA pattern**: Arrange, Act, Assert

## Example Test Structure

```typescript
describe('ComponentName', () => {
  // Setup that applies to all tests
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('rendering', () => {
    it('should render with default props', () => {
      // Arrange
      render(<ComponentName />);
      
      // Act (if needed)
      
      // Assert
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('user interactions', () => {
    it('should handle button click', () => {
      // Test user interactions
    });
  });

  describe('edge cases', () => {
    it('should handle empty state', () => {
      // Test edge cases
    });
  });
});
```

## Running Specific Tests

```bash
# Run tests in a specific file
pnpm test Footer.test.tsx

# Run tests matching a pattern
pnpm test LanguageSelector

# Run tests in watch mode for a specific file
pnpm test Footer --watch
```

## Debugging Tests

### 1. Use `screen.debug()`

```typescript
import { screen } from '@testing-library/react';

render(<Component />);
screen.debug(); // Prints the DOM tree
```

### 2. Use Vitest UI

```bash
pnpm test:ui
```

This opens a browser-based UI for debugging tests interactively.

### 3. Use `logRoles()`

```typescript
import { logRoles } from '@testing-library/react';

const { container } = render(<Component />);
logRoles(container); // Logs all available roles
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [Common Testing Library Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
