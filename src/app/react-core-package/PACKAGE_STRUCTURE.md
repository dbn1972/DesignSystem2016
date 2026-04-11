# Package Structure - @ux4g/react-core

Complete folder and file organization for the UX4G React component library.

## Directory Tree

```
@ux4g/react-core/
├── 📄 package.json                    # Package metadata and dependencies
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 .npmignore                      # NPM publish exclusions
├── 📄 LICENSE                         # MIT License
│
├── 📘 README.md                       # Main documentation
├── 📘 COMPONENT_PATTERNS.md           # Component design patterns
├── 📘 COMPONENT_API_REFERENCE.md      # Complete API reference
├── 📘 PACKAGE_STRUCTURE.md            # This file
│
├── 📁 src/                            # Source code
│   ├── 📄 index.ts                    # Main package exports
│   │
│   ├── 📁 components/                 # React components
│   │   │
│   │   ├── 📁 Button/                 # Button component
│   │   │   ├── Button.tsx             # Component implementation
│   │   │   ├── Button.types.ts        # TypeScript interfaces
│   │   │   ├── Button.test.tsx        # Unit tests
│   │   │   ├── index.ts               # Public exports
│   │   │   └── README.md              # Component docs
│   │   │
│   │   ├── 📁 Input/                  # Input component
│   │   │   ├── Input.tsx
│   │   │   ├── Input.types.ts
│   │   │   ├── Input.test.tsx
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   │
│   │   ├── 📁 Textarea/
│   │   ├── 📁 Select/
│   │   ├── 📁 Checkbox/
│   │   ├── 📁 Radio/
│   │   ├── 📁 Field/
│   │   ├── 📁 Label/
│   │   ├── 📁 HintText/
│   │   ├── 📁 ErrorText/
│   │   ├── 📁 Alert/
│   │   ├── 📁 Badge/
│   │   ├── 📁 Card/
│   │   ├── 📁 Tabs/
│   │   ├── 📁 Accordion/
│   │   ├── 📁 Breadcrumb/
│   │   ├── 📁 Pagination/
│   │   ├── 📁 Table/
│   │   ├── 📁 Dialog/
│   │   ├── 📁 Drawer/
│   │   ├── 📁 Header/
│   │   ├── 📁 TopNav/
│   │   ├── 📁 SideNav/
│   │   ├── 📁 Stepper/
│   │   ├── 📁 FileUpload/
│   │   ├── 📁 DateInput/
│   │   ├── 📁 StatusTag/
│   │   └── 📁 Toast/
│   │
│   ├── 📁 hooks/                      # Custom React hooks
│   │   ├── useDisclosure.ts           # Open/close state management
│   │   ├── useControllableState.ts    # Controlled/uncontrolled state
│   │   ├── useId.ts                   # Unique ID generation
│   │   ├── useFocusTrap.ts            # Focus trapping for modals
│   │   └── index.ts                   # Hook exports
│   │
│   ├── 📁 utils/                      # Utility functions
│   │   ├── cn.ts                      # Class name merger
│   │   ├── format-date.ts             # Date formatting
│   │   └── index.ts                   # Utility exports
│   │
│   └── 📁 types/                      # TypeScript type definitions
│       ├── common.ts                  # Shared type definitions
│       └── index.ts                   # Type exports
│
├── 📁 dist/                           # Build output (generated)
│   ├── index.js                       # CommonJS bundle
│   ├── index.mjs                      # ES modules bundle
│   ├── index.d.ts                     # TypeScript declarations
│   └── styles.css                     # Component styles (optional)
│
└── 📁 examples/                       # Usage examples
    ├── basic-form.tsx                 # Basic form example
    ├── data-table.tsx                 # Table with pagination
    ├── navigation.tsx                 # Navigation patterns
    └── modals-dialogs.tsx             # Overlay components
```

---

## Component Folder Structure

Each component follows this standard structure:

```
ComponentName/
├── ComponentName.tsx          # Main component implementation
├── ComponentName.types.ts     # TypeScript prop interfaces
├── ComponentName.test.tsx     # Unit and integration tests
├── index.ts                   # Public exports
└── README.md                  # Component documentation
```

### Component File Template

```tsx
// ComponentName.tsx
import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ComponentNameProps } from './ComponentName.types';

export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ux4g-component-name',
          `ux4g-component-name-${variant}`,
          `ux4g-component-name-${size}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';
```

### Types File Template

```tsx
// ComponentName.types.ts
import { HTMLAttributes } from 'react';
import {
  ComponentSize,
  ComponentVariant,
  BaseComponentProps,
  ChildrenProp
} from '../../types/common';

export interface ComponentNameProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps,
    ChildrenProp {
  
  /** Visual variant @default 'primary' */
  variant?: ComponentVariant;
  
  /** Component size @default 'md' */
  size?: ComponentSize;
  
  /** Additional prop descriptions */
}
```

### Index File Template

```tsx
// index.ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName.types';
```

---

## Component Categories

### Form Components
```
components/
├── Button/           # Primary action button
├── Input/            # Text input field
├── Textarea/         # Multi-line text input
├── Select/           # Dropdown select
├── Checkbox/         # Checkbox input
├── Radio/            # Radio button input
├── Field/            # Form field container
├── Label/            # Form label
├── HintText/         # Helper text
├── ErrorText/        # Error message
├── FileUpload/       # File upload component
└── DateInput/        # Date picker input
```

### Feedback Components
```
components/
├── Alert/            # Feedback messages
├── Badge/            # Status badges
├── Toast/            # Toast notifications
└── StatusTag/        # Status indicators
```

### Layout Components
```
components/
├── Card/             # Content container
├── Header/           # Page header
├── TopNav/           # Top navigation
└── SideNav/          # Side navigation
```

### Navigation Components
```
components/
├── Tabs/             # Tab navigation
├── Accordion/        # Expandable sections
├── Breadcrumb/       # Breadcrumb navigation
├── Pagination/       # Page navigation
└── Stepper/          # Step indicator
```

### Data Components
```
components/
└── Table/            # Data table
```

### Overlay Components
```
components/
├── Dialog/           # Modal dialog
└── Drawer/           # Side drawer
```

---

## Custom Hooks Structure

```
hooks/
├── useDisclosure.ts           # Boolean state with open/close/toggle
├── useControllableState.ts    # Controlled/uncontrolled state management
├── useId.ts                   # Unique ID generation for a11y
├── useFocusTrap.ts            # Focus trapping for modals
├── useClickOutside.ts         # Detect clicks outside element
├── useEscapeKey.ts            # Handle escape key press
└── index.ts                   # Hook exports
```

### Hook Example

```tsx
// useDisclosure.ts
import { useState, useCallback } from 'react';

export interface UseDisclosureReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useDisclosure(defaultOpen = false): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle };
}
```

---

## Utilities Structure

```
utils/
├── cn.ts                      # Class name utility (using clsx)
├── format-date.ts             # Date formatting utilities
├── validation.ts              # Form validation helpers
└── index.ts                   # Utility exports
```

---

## Type Definitions Structure

```
types/
├── common.ts                  # Shared component types
├── form-types.ts              # Form-specific types
├── navigation-types.ts        # Navigation-specific types
└── index.ts                   # Type exports
```

### Common Types Example

```tsx
// types/common.ts
export type ComponentSize = 'sm' | 'md' | 'lg';
export type ComponentVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';
export type StatusVariant = 'info' | 'success' | 'warning' | 'error';

export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  'data-testid'?: string;
}

export interface InteractiveComponentProps extends BaseComponentProps {
  disabled?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}
```

---

## Export Strategy

### Main Package Exports

```tsx
// src/index.ts
// Components
export { Button } from './components/Button';
export { Input } from './components/Input';
export { Alert } from './components/Alert';
// ... all components

// Types
export type { ButtonProps } from './components/Button';
export type { InputProps } from './components/Input';
export type { AlertProps } from './components/Alert';
// ... all component prop types

// Common Types
export type {
  ComponentSize,
  ComponentVariant,
  StatusVariant,
  BaseComponentProps
} from './types/common';

// Hooks
export { useDisclosure } from './hooks/useDisclosure';
// ... all hooks

// Utils
export { cn } from './utils/cn';
// ... all utilities
```

### Package.json Exports

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./styles": "./dist/styles.css"
  }
}
```

---

## Build Configuration

### TypeScript Config

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "jsx": "react-jsx",
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.tsx"]
}
```

### Build Script (tsup)

```bash
# Build both CJS and ESM bundles with TypeScript declarations
tsup src/index.ts --format cjs,esm --dts --clean
```

---

## Testing Structure

```
src/components/Button/
├── Button.tsx
├── Button.types.ts
├── Button.test.tsx              # Component tests
└── __tests__/                   # Additional test files
    ├── accessibility.test.tsx   # A11y-specific tests
    └── integration.test.tsx     # Integration tests
```

### Test Example

```tsx
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when loading', () => {
    render(<Button loading>Click</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

---

## NPM Publishing

### Files Included in Package

```
dist/           ✓ Built bundles and type declarations
src/            ✓ Source code (for source maps and advanced usage)
README.md       ✓ Documentation
LICENSE         ✓ License file
package.json    ✓ Package metadata
```

### Files Excluded (.npmignore)

```
examples/       ✗ Usage examples (documentation only)
**/*.test.tsx   ✗ Test files
**/*.test.ts    ✗ Test files
tsconfig.json   ✗ TypeScript config (included in source)
.github/        ✗ GitHub-specific files
```

---

## Development Workflow

```bash
# Install dependencies
npm install

# Type checking
npm run type-check

# Build package
npm run build

# Watch mode during development
npm run build:watch

# Run tests
npm run test

# Lint code
npm run lint
```

---

## Version Management

Follow semantic versioning:
- **Patch** (1.0.x): Bug fixes, no API changes
- **Minor** (1.x.0): New features, backward compatible
- **Major** (x.0.0): Breaking changes

---

This structure ensures maintainability, consistency, and ease of use for the UX4G React component library.
