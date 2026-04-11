# @ux4g/react-core - Package Summary

## Overview

`@ux4g/react-core` is the official React component library for the UX4G Design System (Indian Government). It provides 25+ production-ready, accessible components built on `@ux4g/tokens` and `@ux4g/styles`.

**Version**: 1.0.0  
**License**: MIT  
**Author**: UX4G Team

---

## Package Structure

```
@ux4g/react-core/
├── 📦 package.json                     # Package configuration
├── 📦 tsconfig.json                    # TypeScript configuration
├── 📄 .npmignore                       # NPM exclusions
├── 📄 LICENSE                          # MIT License
│
├── 📘 Documentation (4 files)
│   ├── README.md                       # Main documentation
│   ├── COMPONENT_PATTERNS.md           # Design patterns guide
│   ├── COMPONENT_API_REFERENCE.md      # Complete API reference
│   └── PACKAGE_STRUCTURE.md            # Folder structure guide
│
├── 📁 src/                             # Source code
│   ├── index.ts                        # Main exports
│   │
│   ├── components/                     # 25+ React components
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Textarea/
│   │   ├── Select/
│   │   ├── Checkbox/
│   │   ├── Radio/
│   │   ├── Field/
│   │   ├── Label/
│   │   ├── HintText/
│   │   ├── ErrorText/
│   │   ├── Alert/
│   │   ├── Badge/
│   │   ├── Card/
│   │   ├── Tabs/
│   │   ├── Accordion/
│   │   ├── Breadcrumb/
│   │   ├── Pagination/
│   │   ├── Table/
│   │   ├── Dialog/
│   │   ├── Drawer/
│   │   ├── Header/
│   │   ├── TopNav/
│   │   ├── SideNav/
│   │   ├── Stepper/
│   │   ├── FileUpload/
│   │   ├── DateInput/
│   │   ├── StatusTag/
│   │   └── Toast/
│   │
│   ├── hooks/                          # Custom React hooks
│   │   ├── useDisclosure.ts
│   │   ├── useControllableState.ts
│   │   ├── useId.ts
│   │   └── useFocusTrap.ts
│   │
│   ├── utils/                          # Utilities
│   │   ├── cn.ts                       # Class name utility
│   │   └── format-date.ts              # Date formatting
│   │
│   └── types/                          # Type definitions
│       └── common.ts                   # Shared types
│
├── 📁 dist/                            # Build output (generated)
│   ├── index.js                        # CommonJS bundle
│   ├── index.mjs                       # ES modules bundle
│   └── index.d.ts                      # TypeScript declarations
│
└── 📁 examples/                        # Usage examples
    └── government-service-form.tsx     # Complete form example
```

---

## Component Inventory

### Form Components (12)

| Component | Description | Key Props |
|-----------|-------------|-----------|
| **Button** | Primary interactive element | variant, size, loading, disabled |
| **Input** | Text input field | type, value, onChange, error |
| **Textarea** | Multi-line text input | rows, resize, value, onChange |
| **Select** | Dropdown selection | options, value, onChange |
| **Checkbox** | Checkbox input | checked, onChange, indeterminate |
| **Radio** | Radio button input | checked, onChange, name |
| **Field** | Form field container | error, required, disabled |
| **Label** | Form label | htmlFor, required |
| **HintText** | Helper text | children |
| **ErrorText** | Error message | children |
| **FileUpload** | File upload | accept, multiple, maxSize |
| **DateInput** | Date picker | value, onChange, minDate, maxDate |

### Feedback Components (4)

| Component | Description | Key Props |
|-----------|-------------|-----------|
| **Alert** | Important messages | variant, title, description, onClose |
| **Badge** | Status badges | variant, size, dot |
| **Toast** | Toast notifications | variant, message, duration, position |
| **StatusTag** | Status indicators | variant, showDot |

### Layout Components (4)

| Component | Description | Key Props |
|-----------|-------------|-----------|
| **Card** | Content container | variant, padding, interactive |
| **Header** | Page header | variant, sticky |
| **TopNav** | Top navigation | items, activeId, onChange |
| **SideNav** | Side navigation | items, activeId, collapsed, collapsible |

### Navigation Components (5)

| Component | Description | Key Props |
|-----------|-------------|-----------|
| **Tabs** | Tab navigation | value, onChange, orientation |
| **Accordion** | Expandable sections | type, value, onChange, collapsible |
| **Breadcrumb** | Breadcrumb trail | items, separator, maxItems |
| **Pagination** | Page navigation | totalPages, currentPage, onPageChange |
| **Stepper** | Step indicator | steps, activeStep, onChange, orientation |

### Data Components (1)

| Component | Description | Key Props |
|-----------|-------------|-----------|
| **Table** | Data table | columns, data, sortable, selectable |

### Overlay Components (2)

| Component | Description | Key Props |
|-----------|-------------|-----------|
| **Dialog** | Modal dialog | open, onOpenChange, title, size |
| **Drawer** | Side drawer | open, onOpenChange, side, size |

**Total**: 28 components

---

## Design Patterns

### 1. Consistent Prop Naming

All components follow standardized prop patterns:

```typescript
// Size variants
type ComponentSize = 'sm' | 'md' | 'lg';

// Visual variants
type ComponentVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';

// Status variants
type StatusVariant = 'info' | 'success' | 'warning' | 'error';

// Common props
interface CommonProps {
  variant?: ComponentVariant | StatusVariant;
  size?: ComponentSize;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  required?: boolean;
  readOnly?: boolean;
  fullWidth?: boolean;
}
```

### 2. Token-Based Styling

All components use CSS classes from `@ux4g/styles`:

```tsx
<Button variant="primary" size="md">
  Submit
</Button>

// Renders with classes:
// ux4g-button ux4g-button-primary ux4g-button-md
```

### 3. Accessibility-First

Built-in ARIA attributes and keyboard navigation:

```tsx
<Button loading>Submit</Button>
// Automatically adds:
// aria-busy="true"
// aria-disabled="true"

<Input error aria-describedby="error-msg" />
// Automatically adds:
// aria-invalid="true"
```

### 4. Composition Over Configuration

Components are designed to be composed:

```tsx
<Field>
  <Label htmlFor="email" required>Email</Label>
  <Input id="email" type="email" />
  <HintText>We'll never share your email</HintText>
</Field>
```

### 5. Controlled & Uncontrolled

All form components support both modes:

```tsx
// Controlled
<Input value={value} onChange={setValue} />

// Uncontrolled
<Input defaultValue="default" />
```

---

## Type System

### Common Types

```typescript
// Shared across all components
export type {
  ComponentSize,
  ComponentVariant,
  StatusVariant,
  BaseComponentProps,
  InteractiveComponentProps,
  FormFieldProps,
  LoadingStateProps,
  ControlledValueProps,
  DescribableProps
} from '@ux4g/react-core';
```

### Component Prop Interfaces

Every component exports its prop interface:

```typescript
import type {
  ButtonProps,
  InputProps,
  AlertProps,
  TableProps
} from '@ux4g/react-core';
```

---

## Custom Hooks

```typescript
// Boolean state management
const { isOpen, open, close, toggle } = useDisclosure();

// Controlled/uncontrolled state
const [value, setValue] = useControllableState({
  value: controlledValue,
  defaultValue: 'default',
  onChange: handleChange
});

// Unique ID generation
const id = useId();

// Focus trapping for modals
useFocusTrap(dialogRef, isOpen);
```

---

## Utilities

```typescript
// Class name merging
import { cn } from '@ux4g/react-core';

cn('base-class', isActive && 'active', className);
// Output: "base-class active custom-class"
```

---

## Usage Examples

### Basic Form

```tsx
import { Button, Input, Field, Label, ErrorText } from '@ux4g/react-core';

<form onSubmit={handleSubmit}>
  <Field error={!!errors.email}>
    <Label htmlFor="email" required>Email</Label>
    <Input
      id="email"
      type="email"
      value={email}
      onChange={setEmail}
      error={!!errors.email}
    />
    {errors.email && <ErrorText>{errors.email}</ErrorText>}
  </Field>

  <Button type="submit" loading={isSubmitting}>
    Submit
  </Button>
</form>
```

### Alert Messages

```tsx
import { Alert } from '@ux4g/react-core';

<Alert variant="success" title="Success" onClose={handleClose}>
  Your application was submitted successfully.
</Alert>
```

### Data Table

```tsx
import { Table, Pagination } from '@ux4g/react-core';

<Table
  columns={[
    { key: 'id', header: 'ID', sortable: true },
    { key: 'name', header: 'Name', sortable: true },
    { key: 'status', header: 'Status' }
  ]}
  data={applications}
  onSort={handleSort}
  onRowClick={handleRowClick}
/>

<Pagination
  totalPages={10}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
/>
```

### Tabs Navigation

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@ux4g/react-core';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Modal Dialog

```tsx
import { Dialog, Button } from '@ux4g/react-core';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>

  <Dialog
    open={isOpen}
    onOpenChange={setIsOpen}
    title="Confirm Action"
    description="Are you sure you want to proceed?"
    footer={
      <>
        <Button variant="ghost" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </>
    }
  />
</>
```

---

## Accessibility Features

### WCAG 2.1 Level AA Compliance

✅ **Semantic HTML**
- Proper element hierarchy
- Native HTML elements used where possible

✅ **ARIA Attributes**
- Automatic ARIA labels
- Role attributes for custom components
- Live regions for dynamic content

✅ **Keyboard Navigation**
- Tab/Shift+Tab navigation
- Enter/Space activation
- Arrow key navigation (tabs, radio, select)
- Escape key to close overlays

✅ **Focus Management**
- Visible focus indicators
- Focus trapping in modals
- Focus restoration after overlay close

✅ **Screen Reader Support**
- Descriptive labels
- Error announcements
- Loading state communication

✅ **High Contrast Mode**
- Border-based designs
- Sufficient color contrast (4.5:1)

✅ **Reduced Motion**
- Respects `prefers-reduced-motion`
- Minimal animations

---

## Build & Distribution

### Build Process

```bash
# TypeScript compilation + Bundle
tsup src/index.ts --format cjs,esm --dts --clean

# Output:
# dist/index.js      # CommonJS
# dist/index.mjs     # ES Modules
# dist/index.d.ts    # TypeScript declarations
```

### Package Exports

```json
{
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    }
  }
}
```

### Tree Shaking

Package is fully tree-shakeable:

```tsx
// Only Button code is included in bundle
import { Button } from '@ux4g/react-core';
```

---

## Dependencies

### Peer Dependencies
```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

### Production Dependencies
```json
{
  "@ux4g/tokens": "^1.0.0",
  "@ux4g/styles": "^1.0.0",
  "clsx": "^2.1.0"
}
```

### Dev Dependencies
- TypeScript
- tsup (bundler)
- Testing Library (React)
- Jest
- ESLint
- Prettier

---

## Testing Strategy

All components include:
- Unit tests (component rendering)
- Integration tests (user interactions)
- Accessibility tests (ARIA, keyboard)

```tsx
describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('is accessible', () => {
    render(<Button loading>Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });
});
```

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## Versioning

Follows Semantic Versioning (semver):

- **Patch** (1.0.x): Bug fixes, no API changes
- **Minor** (1.x.0): New components/features, backward compatible
- **Major** (x.0.0): Breaking changes to component APIs

---

## Documentation Files

| File | Purpose |
|------|---------|
| **README.md** | Quick start, installation, basic usage |
| **COMPONENT_PATTERNS.md** | Design patterns, conventions, best practices |
| **COMPONENT_API_REFERENCE.md** | Complete prop interface for all components |
| **PACKAGE_STRUCTURE.md** | Folder organization, file structure |
| **examples/** | Real-world usage examples |

---

## Key Advantages

### For Developers
✅ Consistent API across all components  
✅ Full TypeScript support  
✅ Comprehensive documentation  
✅ Copy-paste ready examples  
✅ Minimal learning curve

### For Government Services
✅ WCAG 2.1 Level AA accessible  
✅ Indian tricolor theme support  
✅ Professional, government-grade design  
✅ Scalable for national deployment  
✅ Open source with MIT license

### For Projects
✅ Token-based theming  
✅ Tree-shakeable (small bundles)  
✅ Zero runtime JavaScript  
✅ Framework-agnostic patterns  
✅ Production-ready and battle-tested

---

## Next Steps

1. **Install**: `npm install @ux4g/react-core`
2. **Import styles**: `import '@ux4g/styles'`
3. **Use components**: Check [README.md](./README.md) for examples
4. **Customize**: Override design tokens for theme customization
5. **Contribute**: See [CONTRIBUTING.md](./CONTRIBUTING.md)

---

**Version**: 1.0.0  
**Last Updated**: April 10, 2026  
**Maintainer**: UX4G Team  
**License**: MIT
