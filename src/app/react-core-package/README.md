# @ux4g/react-core

React component library for UX4G - Indian Government Design System

Accessible React components built on `@ux4g/tokens` and `@ux4g/styles`.

Canonical API vocabulary for all UX4G packages lives in [../COMPONENT_CONTRACT.md](/Users/debabratanayak_1/Documents/DesignSystem_211/src/app/COMPONENT_CONTRACT.md).

Current stabilization priority lives in [../CORE_10_HARDENING_PLAN.md](/Users/debabratanayak_1/Documents/DesignSystem_211/src/app/CORE_10_HARDENING_PLAN.md). The core 10 components are the default hardening target before broader surface-area expansion.

Component maturity is exported as `REACT_COMPONENT_MATURITY` so consuming teams can make rollout decisions from code as well as docs.

## Features

- 🇮🇳 **Government-Grade Design** - Aligned with UX4G specifications
- ♿ **Accessibility-First** - WCAG 2.1 Level AA compliant by default
- 🎨 **Token-Based Styling** - Consumes design tokens for consistent theming
- 📦 **Modular & Tree-Shakeable** - Import only what you need
- 🔧 **TypeScript Support** - Full type definitions included
- 🎯 **Composable Components** - Flexible composition patterns
- 🚧 **Active Development** - Core pieces are usable, but not every exported component is equally mature

## Maturity Labels

- `stable`: recommended for broad production use
- `beta`: suitable for production with active hardening and tighter review
- `experimental`: use only with deliberate adoption and local ownership

### Current React status

| Component | Maturity |
| --- | --- |
| `Label`, `HintText`, `ErrorText`, `Spinner` | `stable` |
| `Button`, `Input`, `Select`, `Checkbox`, `Radio`, `Textarea`, `Field`, `Alert`, `Badge`, `Card`, `Avatar`, `Table`, `Tabs`, `Breadcrumb`, `Pagination`, `Dialog`, `Tooltip`, `Progress`, `Autocomplete` | `beta` |
| `Drawer`, `Popover`, `Toast`, `Accordion`, `Rating`, `Stepper`, `Timeline`, `OTPInput`, `DatePicker`, `FileUpload`, `SearchBar`, `Menu` | `experimental` |

## Installation

```bash
npm install @ux4g/react-core @ux4g/tokens @ux4g/styles react react-dom
```

## Quick Start

`Beta example`

```tsx
import { Button, Input, Field, Label, Alert } from '@ux4g/react-core';
import '@ux4g/styles';

function App() {
  const [email, setEmail] = useState('');

  return (
    <div>
      <Alert variant="info" title="Welcome">
        Apply for government services online
      </Alert>

      <Field label="Email" required>
        <Input
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="your.email@gov.in"
        />
      </Field>

      <Button variant="primary" onClick={handleSubmit}>
        Submit Application
      </Button>
    </div>
  );
}
```

## Components

### Form Components
- **Button** (`beta`) - Primary interactive element
- **Input** (`beta`) - Text input fields
- **Textarea** (`beta`) - Multi-line text input
- **Select** (`beta`) - Dropdown selection
- **Checkbox** (`beta`) - Checkbox input
- **Radio** (`beta`) - Radio button input
- **Field** (`beta`) - Form field container
- **Label** (`stable`) - Form labels
- **HintText** (`stable`) - Helper text
- **ErrorText** (`stable`) - Error messages
- **FileUpload** (`experimental`) - File upload
- **DatePicker** (`experimental`) - Date picker

### Feedback Components
- **Alert** (`beta`) - Important messages
- **Badge** (`beta`) - Status badges
- **Toast** (`experimental`) - Toast notifications

### Layout / Display Components
- **Card** (`beta`) - Content containers
- **Avatar** (`beta`) - User or entity avatars
- **Table** (`beta`) - Data tables

### Navigation Components
- **Tabs** (`beta`) - Tab navigation
- **Accordion** (`experimental`) - Expandable sections
- **Breadcrumb** (`beta`) - Breadcrumb trails
- **Pagination** (`beta`) - Page navigation
- **Stepper** (`experimental`) - Step indicators

### Overlay Components
- **Dialog** (`beta`) - Modal dialogs
- **Drawer** (`experimental`) - Side drawers
- **Popover** (`experimental`) - Contextual overlays
- **Tooltip** (`beta`) - Supplemental guidance

## Usage Examples

### Form with Validation

`Beta example`

```tsx
import { Button, Input, Field, Label, ErrorText, HintText } from '@ux4g/react-core';

function RegistrationForm() {
  const [formData, setFormData] = useState({ email: '', phone: '' });
  const [errors, setErrors] = useState({});

  return (
    <form onSubmit={handleSubmit}>
      <Field
        id="email"
        label="Email"
        hint={!errors.email ? "We'll never share your email" : undefined}
        errorText={errors.email}
        required
      >
        <Input
          type="email"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
        />
      </Field>

      <Button type="submit" loading={isSubmitting}>
        Register
      </Button>
    </form>
  );
}
```

### Button Variants

`Beta example`

```tsx
import { Button } from '@ux4g/react-core';

// Primary action
<Button variant="primary">Submit</Button>

// Secondary action
<Button variant="secondary">Cancel</Button>

// Destructive action
<Button variant="destructive">Delete</Button>

// With icons
<Button iconBefore={<IconSave />}>Save</Button>

// Loading state
<Button loading>Processing...</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Alerts

`Beta example`

```tsx
import { Alert } from '@ux4g/react-core';

// Info alert
<Alert variant="info" title="Information">
  Your application is being processed.
</Alert>

// Success alert
<Alert variant="success" title="Success">
  Application submitted successfully.
</Alert>

// Warning alert
<Alert variant="warning" title="Warning">
  Please verify your documents.
</Alert>

// Error alert
<Alert variant="error" title="Error" onClose={handleClose}>
  Failed to submit application. Please try again.
</Alert>
```

### Tabs

`Beta example`

```tsx
import { Tabs } from '@ux4g/react-core';

<Tabs
  defaultValue="personal"
  items={[
    { value: 'personal', label: 'Personal Details', content: <PersonalDetailsForm /> },
    { value: 'documents', label: 'Documents', content: <DocumentsUpload /> },
    { value: 'review', label: 'Review', content: <ApplicationReview /> },
  ]}
/>
```

### Data Table

`Beta example`

```tsx
import { Table, Pagination, Badge } from '@ux4g/react-core';

<Table
  columns={[
    { key: 'id', header: 'Application ID', width: '120px' },
    { key: 'name', header: 'Applicant Name', sortable: true },
    { key: 'status', header: 'Status', accessor: (row) => (
      <Badge variant="info">{row.status}</Badge>
    )},
    { key: 'date', header: 'Submitted', sortable: true }
  ]}
  data={applications}
  onRowClick={handleRowClick}
  sortState={sortState}
  onSortChange={setSortState}
/>

<Pagination
  totalPages={totalPages}
  currentPage={currentPage}
  onPageChange={handlePageChange}
/>
```

### Dialog

`Beta example`

```tsx
import { Dialog, Button } from '@ux4g/react-core';

function ConfirmDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Delete Application
      </Button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Deletion"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </>
        }
      />
    </>
  );
}
```

## Accessibility

All components follow WCAG 2.1 Level AA guidelines:

- ✓ Semantic HTML structure
- ✓ ARIA attributes included
- ✓ Keyboard navigation support
- ✓ Baseline focus management in many components
- ✓ Screen reader optimization
- ✓ High contrast mode support
- ✓ Token-based styling foundations

### Accessibility Examples

```tsx
// Automatic ARIA attributes
<Button loading>Submit</Button>
// Renders: <button aria-busy="true" aria-disabled="true">

// Required field indicators
<Label htmlFor="email" required>Email</Label>
// Accessible to screen readers

// Error state communication
<Input error aria-invalid aria-describedby="email-error" />
<ErrorText id="email-error">Invalid email</ErrorText>
// Error is announced to screen readers
```

## Customization

### Theme Customization

Override design tokens to customize the theme:

```css
:root {
  --ux4g-color-primary: #1E3A8A;
  --ux4g-spacing-4: 1.25rem;
  --ux4g-radius-md: 0.5rem;
}
```

### Component Customization

```tsx
// Using className for custom styles
<Button className="my-custom-class">Submit</Button>

// Combining UX4G utilities
<Button className="ux4g-w-full ux4g-mt-4">Full Width</Button>
```

## TypeScript

Full TypeScript support with type definitions:

```tsx
import { ButtonProps, InputProps } from '@ux4g/react-core';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Documentation

- [API Reference](./COMPONENT_API_REFERENCE.md) - Complete prop interfaces
- [Package Structure](./PACKAGE_STRUCTURE.md) - Folder organization
- [Component Inventory](./src/components/README.md) - Current maturity and migration status

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

Contributions are welcome! Please read our [Contributing Guide](../../../CONTRIBUTING_GUIDELINES_FEATURE.md) for details.

## License

MIT © UX4G Team

## Related Packages

- [`@ux4g/tokens`](https://www.npmjs.com/package/@ux4g/tokens) - Design tokens
- [`@ux4g/styles`](https://www.npmjs.com/package/@ux4g/styles) - CSS styles

## Support

- Documentation: [ux4g.gov.in/docs](https://ux4g.gov.in/docs)
- Issues: [GitHub Issues](https://github.com/ux4g/react-core/issues)
- Email: ux4g@gov.in
