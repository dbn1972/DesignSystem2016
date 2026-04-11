# Component Patterns - @ux4g/react-core

## Design Principles

### 1. **Token-Based Styling**
All components use CSS classes from `@ux4g/styles` which consume `@ux4g/tokens`.

```tsx
// ✅ Good - Uses token-based classes
<Button className="ux4g-button-primary">Submit</Button>

// ❌ Bad - Inline styles bypass design tokens
<Button style={{ background: '#005A9C' }}>Submit</Button>
```

### 2. **Accessibility-First**
All components have accessibility built-in by default.

```tsx
// ✅ Automatic ARIA attributes
<Button loading>Submit</Button>
// Renders: <button aria-busy="true" aria-disabled="true">

// ✅ Required accessibility props enforced
<Input id="email" /> // TypeScript error if no label association
```

### 3. **Consistent Prop Naming**

| Prop Pattern | Usage | Example |
|--------------|-------|---------|
| `variant` | Visual style variant | `variant="primary"` |
| `size` | Component size | `size="md"` |
| `disabled` | Disabled state | `disabled={true}` |
| `loading` | Loading state | `loading={true}` |
| `error` | Error state | `error={true}` |
| `required` | Required field | `required={true}` |
| `readOnly` | Read-only state | `readOnly={true}` |
| `onChange` | Change handler | `onChange={(value) => {}}` |
| `onClick` | Click handler | `onClick={(e) => {}}` |

### 4. **Composition Over Configuration**

```tsx
// ✅ Good - Composable components
<Field>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
  <HintText>We'll never share your email</HintText>
</Field>

// ❌ Bad - Monolithic props
<Input
  label="Email"
  hint="We'll never share your email"
  labelProps={{ ... }}
  hintProps={{ ... }}
/>
```

---

## Component Structure

### Standard Component Folder

```
ComponentName/
├── ComponentName.tsx          # Main component implementation
├── ComponentName.types.ts     # TypeScript interfaces
├── ComponentName.test.tsx     # Unit tests
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
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
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
      />
    );
  }
);

ComponentName.displayName = 'ComponentName';
```

### Types File Template

```tsx
// ComponentName.types.ts
import { ComponentSize, ComponentVariant, BaseComponentProps } from '../../types/common';

export interface ComponentNameProps extends BaseComponentProps {
  /**
   * Visual variant
   * @default 'primary'
   */
  variant?: ComponentVariant;

  /**
   * Component size
   * @default 'md'
   */
  size?: ComponentSize;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
}
```

---

## Variant System

### Naming Convention

```tsx
type ComponentVariant =
  | 'primary'      // Primary action (UX4G blue)
  | 'secondary'    // Secondary action
  | 'tertiary'     // Tertiary action
  | 'ghost'        // Minimal styling
  | 'destructive'; // Destructive action (red)

type StatusVariant =
  | 'info'     // Information (blue)
  | 'success'  // Success (green)
  | 'warning'  // Warning (yellow)
  | 'error';   // Error (red)
```

### CSS Class Mapping

```tsx
// Maps to @ux4g/styles classes
variant="primary"    → className="ux4g-button-primary"
variant="secondary"  → className="ux4g-button-secondary"
variant="ghost"      → className="ux4g-button-ghost"

status="success"     → className="ux4g-alert-success"
status="error"       → className="ux4g-alert-error"
```

---

## Size System

### Standard Sizes

```tsx
type ComponentSize = 'sm' | 'md' | 'lg';

// Maps to spacing tokens
size="sm"  → --ux4g-spacing-2 + --ux4g-spacing-3 padding
size="md"  → --ux4g-spacing-3 + --ux4g-spacing-4 padding
size="lg"  → --ux4g-spacing-4 + --ux4g-spacing-5 padding
```

---

## State System

### Boolean State Props

```tsx
interface StateProps {
  disabled?: boolean;   // Component is disabled
  loading?: boolean;    // Component is loading
  error?: boolean;      // Component has error
  required?: boolean;   // Field is required
  readOnly?: boolean;   // Field is read-only
}
```

### State CSS Classes

```tsx
disabled={true}  → className="ux4g-button-disabled" + aria-disabled="true"
loading={true}   → className="ux4g-button-loading" + aria-busy="true"
error={true}     → className="ux4g-input-error" + aria-invalid="true"
```

---

## Accessibility Pattern

### Required Props

```tsx
// Form inputs MUST have associated labels
<Input id="email" aria-label="Email" />
// OR
<Label htmlFor="email">Email</Label>
<Input id="email" />

// Interactive elements MUST have accessible names
<Button aria-label="Close dialog">×</Button>
<Button>Close</Button> // Text content provides name
```

### ARIA Attributes

```tsx
interface AccessibilityProps {
  'aria-label'?: string;         // Accessible name
  'aria-labelledby'?: string;    // Reference to label element
  'aria-describedby'?: string;   // Reference to description
  'aria-invalid'?: boolean;      // Invalid state
  'aria-required'?: boolean;     // Required state
  'aria-disabled'?: boolean;     // Disabled state (non-focusable)
  'aria-busy'?: boolean;         // Loading state
  'aria-live'?: 'polite' | 'assertive'; // Live region
  role?: string;                 // ARIA role
}
```

### Keyboard Navigation

```tsx
// All interactive components support:
- Tab/Shift+Tab: Focus navigation
- Enter/Space: Activation (buttons, checkboxes)
- Arrow keys: Navigation (tabs, radio groups, select)
- Escape: Close/cancel (dialogs, dropdowns)

// Focus management with refs
const buttonRef = useRef<HTMLButtonElement>(null);
<Button ref={buttonRef}>Click</Button>
```

---

## Event Handler Patterns

### Standard Event Handlers

```tsx
interface EventHandlers {
  // Click events
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  // Change events (controlled components)
  onChange?: (value: string) => void;
  onChange?: (checked: boolean) => void; // Checkbox/Radio

  // Focus events
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;

  // Keyboard events
  onKeyDown?: (event: React.KeyboardEvent) => void;

  // Form events
  onSubmit?: (event: React.FormEvent) => void;
}
```

### Custom Event Patterns

```tsx
// Use semantic callbacks, not raw events
onChange?: (value: string) => void;           // ✅ Good
onChange?: (e: ChangeEvent<HTMLInputElement>) => void; // ❌ Bad

// Provide context in callbacks
onTabChange?: (tabId: string) => void;        // ✅ Good
onTabChange?: (index: number) => void;        // ❌ Less clear
```

---

## Controlled vs Uncontrolled

### Pattern

```tsx
interface ControlledProps {
  value?: string;           // Controlled value
  defaultValue?: string;    // Uncontrolled default
  onChange?: (value: string) => void;
}

// Usage
<Input value={value} onChange={setValue} />        // Controlled
<Input defaultValue="hello" />                     // Uncontrolled
```

### Implementation

```tsx
const [internalValue, setInternalValue] = useState(defaultValue);
const isControlled = value !== undefined;
const currentValue = isControlled ? value : internalValue;

const handleChange = (newValue: string) => {
  if (!isControlled) {
    setInternalValue(newValue);
  }
  onChange?.(newValue);
};
```

---

## Polymorphic Components

### As Prop Pattern

```tsx
<Button as="a" href="/home">Go Home</Button>
// Renders: <a href="/home" class="ux4g-button">Go Home</a>

<Heading as="h1">Page Title</Heading>
// Renders: <h1 class="ux4g-heading">Page Title</h1>
```

### Type Definition

```tsx
type PolymorphicComponentProps<E extends React.ElementType, P = {}> =
  P & Omit<React.ComponentPropsWithoutRef<E>, keyof P> & {
    as?: E;
  };

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

type ButtonPolymorphicProps<E extends React.ElementType = 'button'> =
  PolymorphicComponentProps<E, ButtonProps>;
```

---

## Compound Components

### Pattern

```tsx
// Parent-child relationship with shared context
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Implementation

```tsx
const TabsContext = createContext<TabsContextValue | null>(null);

export const Tabs = ({ children, defaultValue, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, onChange }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabsTrigger = ({ value, children }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');

  return (
    <button onClick={() => context.setActiveTab(value)}>
      {children}
    </button>
  );
};
```

---

## File Naming Conventions

```
// Component files
Button.tsx                    # PascalCase
Button.types.ts              # Component.types.ts
Button.test.tsx              # Component.test.tsx
index.ts                     # Lowercase

// Hook files
useDisclosure.ts             # useCamelCase
useDisclosure.test.ts        # Hook.test.ts

// Utility files
cn.ts                        # camelCase
format-date.ts               # kebab-case

// Type files
common.ts                    # lowercase
form-types.ts                # kebab-case
```

---

## Export Structure

### Component Exports

```tsx
// components/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button.types';
```

### Package Exports

```tsx
// src/index.ts
// Components
export { Button } from './components/Button';
export { Input } from './components/Input';
export { Alert } from './components/Alert';

// Types
export type { ButtonProps } from './components/Button';
export type { InputProps } from './components/Input';
export type { AlertProps } from './components/Alert';

// Common types
export type {
  ComponentSize,
  ComponentVariant,
  StatusVariant
} from './types/common';

// Hooks
export { useDisclosure } from './hooks/useDisclosure';

// Utils
export { cn } from './utils/cn';
```

---

## Testing Patterns

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

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('has loading state', () => {
    render(<Button loading>Click</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toBeDisabled();
  });
});
```

---

## Documentation Pattern

```markdown
# Button

Primary interactive element for actions.

## Usage

\`\`\`tsx
import { Button } from '@ux4g/react-core';

<Button variant="primary" size="md" onClick={handleClick}>
  Submit Application
</Button>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'ghost' | 'primary' | Visual variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| disabled | boolean | false | Disabled state |
| loading | boolean | false | Loading state |

## Accessibility

- Automatically disabled and aria-busy during loading
- Supports keyboard activation with Enter/Space
- Focus visible indicator from UX4G styles

## Examples

[Example code blocks...]
```

---

This pattern ensures consistency, accessibility, and maintainability across all components in @ux4g/react-core.
