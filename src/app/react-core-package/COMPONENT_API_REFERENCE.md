# Component API Reference - @ux4g/react-core

Complete prop interface reference for all UX4G React components.

## Common Type Definitions

```typescript
type ComponentSize = 'sm' | 'md' | 'lg';

type ComponentVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';

type StatusVariant = 'info' | 'success' | 'warning' | 'error';
```

---

## Form Components

### Button

```typescript
interface ButtonProps {
  /** Visual variant @default 'primary' */
  variant?: ComponentVariant;
  
  /** Size @default 'md' */
  size?: ComponentSize;
  
  /** Full width button */
  fullWidth?: boolean;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Loading state */
  loading?: boolean;
  
  /** Loading text @default 'Loading...' */
  loadingText?: string;
  
  /** Icon before text */
  iconBefore?: React.ReactNode;
  
  /** Icon after text */
  iconAfter?: React.ReactNode;
  
  /** Button type @default 'button' */
  type?: 'button' | 'submit' | 'reset';
  
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /** Children */
  children?: React.ReactNode;
  
  /** Accessibility */
  'aria-label'?: string;
  'aria-describedby'?: string;
}
```

**Example**:
```tsx
<Button variant="primary" size="md" loading onClick={handleSubmit}>
  Submit Application
</Button>
```

---

### Input

```typescript
interface InputProps {
  /** Size @default 'md' */
  size?: ComponentSize;
  
  /** Input type @default 'text' */
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';
  
  /** Controlled value */
  value?: string;
  
  /** Default value (uncontrolled) */
  defaultValue?: string;
  
  /** Change handler */
  onChange?: (value: string) => void;
  
  /** Field name */
  name?: string;
  
  /** Field ID */
  id?: string;
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Read-only state */
  readOnly?: boolean;
  
  /** Required field */
  required?: boolean;
  
  /** Error state */
  error?: boolean;
  
  /** Full width input */
  fullWidth?: boolean;
  
  /** Icon before input */
  iconBefore?: React.ReactNode;
  
  /** Icon after input */
  iconAfter?: React.ReactNode;
  
  /** Accessibility */
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
}
```

**Example**:
```tsx
<Input
  id="email"
  type="email"
  value={email}
  onChange={setEmail}
  required
  error={!!errors.email}
  aria-describedby="email-error"
/>
```

---

### Textarea

```typescript
interface TextareaProps {
  /** Size @default 'md' */
  size?: ComponentSize;
  
  /** Controlled value */
  value?: string;
  
  /** Default value (uncontrolled) */
  defaultValue?: string;
  
  /** Change handler */
  onChange?: (value: string) => void;
  
  /** Field name */
  name?: string;
  
  /** Field ID */
  id?: string;
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Number of visible rows @default 3 */
  rows?: number;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Read-only state */
  readOnly?: boolean;
  
  /** Required field */
  required?: boolean;
  
  /** Error state */
  error?: boolean;
  
  /** Full width textarea */
  fullWidth?: boolean;
  
  /** Resize behavior @default 'vertical' */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  
  /** Accessibility */
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
}
```

---

### Select

```typescript
interface SelectProps {
  /** Size @default 'md' */
  size?: ComponentSize;
  
  /** Controlled value */
  value?: string;
  
  /** Default value (uncontrolled) */
  defaultValue?: string;
  
  /** Change handler */
  onChange?: (value: string) => void;
  
  /** Field name */
  name?: string;
  
  /** Field ID */
  id?: string;
  
  /** Placeholder option text */
  placeholder?: string;
  
  /** Select options */
  options: Array<{
    label: string;
    value: string;
    disabled?: boolean;
  }>;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Required field */
  required?: boolean;
  
  /** Error state */
  error?: boolean;
  
  /** Full width select */
  fullWidth?: boolean;
  
  /** Accessibility */
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
}
```

---

### Checkbox

```typescript
interface CheckboxProps {
  /** Checked state (controlled) */
  checked?: boolean;
  
  /** Default checked (uncontrolled) */
  defaultChecked?: boolean;
  
  /** Change handler */
  onChange?: (checked: boolean) => void;
  
  /** Field name */
  name?: string;
  
  /** Field ID */
  id?: string;
  
  /** Field value for form submission */
  value?: string;
  
  /** Label text */
  label?: React.ReactNode;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Required field */
  required?: boolean;
  
  /** Error state */
  error?: boolean;
  
  /** Indeterminate state (partially checked) */
  indeterminate?: boolean;
  
  /** Accessibility */
  'aria-label'?: string;
  'aria-describedby'?: string;
}
```

---

### Radio

```typescript
interface RadioProps {
  /** Checked state (controlled) */
  checked?: boolean;
  
  /** Default checked (uncontrolled) */
  defaultChecked?: boolean;
  
  /** Change handler */
  onChange?: (checked: boolean) => void;
  
  /** Field name (groups radios together) */
  name?: string;
  
  /** Field ID */
  id?: string;
  
  /** Field value */
  value: string;
  
  /** Label text */
  label?: React.ReactNode;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Required field */
  required?: boolean;
  
  /** Error state */
  error?: boolean;
  
  /** Accessibility */
  'aria-label'?: string;
  'aria-describedby'?: string;
}
```

---

### Field

```typescript
interface FieldProps {
  /** Whether field has error */
  error?: boolean;
  
  /** Whether field is required */
  required?: boolean;
  
  /** Whether field is disabled */
  disabled?: boolean;
  
  /** Children (Label, Input, HintText, ErrorText) */
  children?: React.ReactNode;
}
```

**Example**:
```tsx
<Field error={!!errors.email}>
  <Label htmlFor="email" required>Email</Label>
  <Input id="email" error={!!errors.email} />
  {errors.email && <ErrorText>{errors.email}</ErrorText>}
</Field>
```

---

### Label

```typescript
interface LabelProps {
  /** Element ID to associate with */
  htmlFor?: string;
  
  /** Whether to show required indicator */
  required?: boolean;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Children */
  children?: React.ReactNode;
}
```

---

### HintText

```typescript
interface HintTextProps {
  /** Helper text content */
  children?: React.ReactNode;
}
```

---

### ErrorText

```typescript
interface ErrorTextProps {
  /** Error message content */
  children?: React.ReactNode;
}
```

---

### FileUpload

```typescript
interface FileUploadProps {
  /** Accepted file types (MIME types or extensions) */
  accept?: string;
  
  /** Allow multiple files */
  multiple?: boolean;
  
  /** Maximum file size in bytes */
  maxSize?: number;
  
  /** Maximum number of files */
  maxFiles?: number;
  
  /** Change handler with file list */
  onChange?: (files: FileList | null) => void;
  
  /** Field name */
  name?: string;
  
  /** Field ID */
  id?: string;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Required field */
  required?: boolean;
  
  /** Error state */
  error?: boolean;
  
  /** Drag and drop area text */
  dropzoneText?: string;
  
  /** Browse files button text */
  browseText?: string;
  
  /** File validation error callback */
  onError?: (error: string) => void;
}
```

---

### DateInput

```typescript
interface DateInputProps {
  /** Size @default 'md' */
  size?: ComponentSize;
  
  /** Selected date value (controlled) */
  value?: Date | string;
  
  /** Default date value (uncontrolled) */
  defaultValue?: Date | string;
  
  /** Change handler */
  onChange?: (date: Date | null) => void;
  
  /** Field name */
  name?: string;
  
  /** Field ID */
  id?: string;
  
  /** Minimum selectable date */
  minDate?: Date;
  
  /** Maximum selectable date */
  maxDate?: Date;
  
  /** Disabled dates */
  disabledDates?: Date[];
  
  /** Date format string @default 'MM/DD/YYYY' */
  format?: string;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Required field */
  required?: boolean;
  
  /** Error state */
  error?: boolean;
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Accessibility */
  'aria-label'?: string;
  'aria-describedby'?: string;
}
```

---

## Feedback Components

### Alert

```typescript
interface AlertProps {
  /** Alert variant @default 'info' */
  variant?: StatusVariant;
  
  /** Alert title */
  title?: React.ReactNode;
  
  /** Alert description */
  description?: React.ReactNode;
  
  /** Custom icon (overrides default) */
  icon?: React.ReactNode;
  
  /** Show icon @default true */
  showIcon?: boolean;
  
  /** Close handler (shows close button) */
  onClose?: () => void;
  
  /** Close button label @default 'Close alert' */
  closeLabel?: string;
  
  /** Children (alternative to title/description) */
  children?: React.ReactNode;
}
```

---

### Badge

```typescript
interface BadgeProps {
  /** Badge variant @default 'default' */
  variant?: 'default' | ComponentVariant | StatusVariant;
  
  /** Badge size @default 'md' */
  size?: ComponentSize;
  
  /** Show dot indicator */
  dot?: boolean;
  
  /** Children */
  children?: React.ReactNode;
}
```

**Example**:
```tsx
<Badge variant="success">Active</Badge>
<Badge variant="warning" dot>Pending</Badge>
```

---

### Toast / Notification

```typescript
interface ToastProps {
  /** Toast variant @default 'info' */
  variant?: StatusVariant;
  
  /** Toast title */
  title?: React.ReactNode;
  
  /** Toast message */
  message?: React.ReactNode;
  
  /** Auto-dismiss duration in ms (0 = no auto-dismiss) */
  duration?: number;
  
  /** Close handler */
  onClose?: () => void;
  
  /** Toast position @default 'top-right' */
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  
  /** Custom icon */
  icon?: React.ReactNode;
  
  /** Action button */
  action?: {
    label: string;
    onClick: () => void;
  };
}
```

---

### StatusTag / StatusIndicator

```typescript
interface StatusTagProps {
  /** Status variant */
  variant: StatusVariant | 'active' | 'inactive';
  
  /** Size @default 'md' */
  size?: ComponentSize;
  
  /** Show status dot */
  showDot?: boolean;
  
  /** Status label */
  children?: React.ReactNode;
}
```

---

## Layout Components

### Card

```typescript
interface CardProps {
  /** Card variant @default 'default' */
  variant?: 'default' | 'flat' | 'elevated';
  
  /** Card padding @default 'md' */
  padding?: ComponentSize;
  
  /** Interactive card (hover effects) */
  interactive?: boolean;
  
  /** Click handler (for interactive cards) */
  onClick?: () => void;
  
  /** Children */
  children?: React.ReactNode;
}
```

---

### Header

```typescript
interface HeaderProps {
  /** Header variant @default 'default' */
  variant?: 'default' | 'government'; // government = tricolor theme
  
  /** Sticky header */
  sticky?: boolean;
  
  /** Children (logo, navigation, etc.) */
  children?: React.ReactNode;
}
```

---

### TopNav

```typescript
interface TopNavProps {
  /** Navigation items */
  items: Array<{
    id: string;
    label: string;
    href?: string;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
  }>;
  
  /** Active item ID */
  activeId?: string;
  
  /** Navigation change handler */
  onChange?: (itemId: string) => void;
  
  /** Aria label for navigation */
  'aria-label'?: string;
}
```

---

### SideNav

```typescript
interface SideNavProps {
  /** Navigation items (supports nesting) */
  items: Array<{
    id: string;
    label: string;
    href?: string;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    children?: Array<NavItem>; // Nested items
  }>;
  
  /** Active item ID */
  activeId?: string;
  
  /** Navigation change handler */
  onChange?: (itemId: string) => void;
  
  /** Collapsed state */
  collapsed?: boolean;
  
  /** Collapsible navigation */
  collapsible?: boolean;
  
  /** Collapse toggle handler */
  onCollapse?: (collapsed: boolean) => void;
  
  /** Width @default '280px' */
  width?: string;
  
  /** Aria label */
  'aria-label'?: string;
}
```

---

## Navigation Components

### Tabs

```typescript
interface TabsProps {
  /** Active tab value (controlled) */
  value?: string;
  
  /** Default active tab (uncontrolled) */
  defaultValue?: string;
  
  /** Tab change handler */
  onChange?: (value: string) => void;
  
  /** Tabs orientation @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
  
  /** Children (TabsList, TabsContent) */
  children?: React.ReactNode;
}

interface TabsListProps {
  /** Children (TabsTrigger components) */
  children?: React.ReactNode;
}

interface TabsTriggerProps {
  /** Tab value (unique identifier) */
  value: string;
  
  /** Tab label */
  children?: React.ReactNode;
  
  /** Disabled state */
  disabled?: boolean;
}

interface TabsContentProps {
  /** Tab value (matches trigger) */
  value: string;
  
  /** Tab content */
  children?: React.ReactNode;
}
```

**Example**:
```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

---

### Accordion

```typescript
interface AccordionProps {
  /** Accordion type @default 'single' */
  type?: 'single' | 'multiple';
  
  /** Expanded item value (controlled) */
  value?: string | string[];
  
  /** Default expanded items (uncontrolled) */
  defaultValue?: string | string[];
  
  /** Change handler */
  onChange?: (value: string | string[]) => void;
  
  /** Allow collapse all */
  collapsible?: boolean;
  
  /** Children (AccordionItem components) */
  children?: React.ReactNode;
}

interface AccordionItemProps {
  /** Item value (unique identifier) */
  value: string;
  
  /** Item header/trigger */
  trigger: React.ReactNode;
  
  /** Item content */
  children?: React.ReactNode;
  
  /** Disabled state */
  disabled?: boolean;
}
```

---

### Breadcrumb

```typescript
interface BreadcrumbProps {
  /** Breadcrumb items */
  items: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    current?: boolean;
  }>;
  
  /** Separator @default '/' */
  separator?: React.ReactNode;
  
  /** Maximum items to show @default Infinity */
  maxItems?: number;
  
  /** Aria label */
  'aria-label'?: string;
}
```

---

### Pagination

```typescript
interface PaginationProps {
  /** Total number of pages */
  totalPages: number;
  
  /** Current page (controlled) */
  currentPage?: number;
  
  /** Default current page (uncontrolled) */
  defaultPage?: number;
  
  /** Page change handler */
  onPageChange?: (page: number) => void;
  
  /** Number of sibling pages to show */
  siblingCount?: number;
  
  /** Show first/last buttons @default true */
  showFirstLast?: boolean;
  
  /** Show previous/next buttons @default true */
  showPrevNext?: boolean;
  
  /** Size @default 'md' */
  size?: ComponentSize;
  
  /** Previous button label @default 'Previous' */
  previousLabel?: string;
  
  /** Next button label @default 'Next' */
  nextLabel?: string;
  
  /** First button label @default 'First' */
  firstLabel?: string;
  
  /** Last button label @default 'Last' */
  lastLabel?: string;
}
```

---

### Stepper

```typescript
interface StepperProps {
  /** Current active step (0-indexed, controlled) */
  activeStep?: number;
  
  /** Default active step (uncontrolled) */
  defaultStep?: number;
  
  /** Step change handler */
  onChange?: (step: number) => void;
  
  /** Steps configuration */
  steps: Array<{
    label: string;
    description?: string;
    icon?: React.ReactNode;
    optional?: boolean;
    error?: boolean;
  }>;
  
  /** Stepper orientation @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
  
  /** Allow non-linear navigation */
  nonLinear?: boolean;
  
  /** Completed steps */
  completedSteps?: number[];
}
```

---

## Data Components

### Table

```typescript
interface TableProps<T = any> {
  /** Table columns configuration */
  columns: Array<{
    key: string;
    header: React.ReactNode;
    accessor?: (row: T) => React.ReactNode;
    width?: string;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
  }>;
  
  /** Table data rows */
  data: T[];
  
  /** Row key accessor */
  rowKey?: string | ((row: T) => string);
  
  /** Table caption */
  caption?: string;
  
  /** Empty state message */
  emptyMessage?: React.ReactNode;
  
  /** Loading state */
  loading?: boolean;
  
  /** Striped rows */
  striped?: boolean;
  
  /** Hoverable rows */
  hoverable?: boolean;
  
  /** Compact size */
  compact?: boolean;
  
  /** Row click handler */
  onRowClick?: (row: T, index: number) => void;
  
  /** Sorting */
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (key: string, direction: 'asc' | 'desc') => void;
  
  /** Selection */
  selectable?: boolean;
  selectedRows?: string[];
  onSelectionChange?: (selectedRows: string[]) => void;
}
```

---

## Overlay Components

### Dialog

```typescript
interface DialogProps {
  /** Dialog open state (controlled) */
  open?: boolean;
  
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  
  /** Open state change handler */
  onOpenChange?: (open: boolean) => void;
  
  /** Dialog title */
  title?: React.ReactNode;
  
  /** Dialog description */
  description?: React.ReactNode;
  
  /** Dialog content */
  children?: React.ReactNode;
  
  /** Dialog size @default 'md' */
  size?: ComponentSize | 'xl' | 'full';
  
  /** Close on overlay click @default true */
  closeOnOverlayClick?: boolean;
  
  /** Close on escape key @default true */
  closeOnEscape?: boolean;
  
  /** Show close button @default true */
  showCloseButton?: boolean;
  
  /** Footer content (typically actions) */
  footer?: React.ReactNode;
}
```

---

### Drawer

```typescript
interface DrawerProps {
  /** Drawer open state (controlled) */
  open?: boolean;
  
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  
  /** Open state change handler */
  onOpenChange?: (open: boolean) => void;
  
  /** Drawer side @default 'right' */
  side?: 'left' | 'right' | 'top' | 'bottom';
  
  /** Drawer title */
  title?: React.ReactNode;
  
  /** Drawer content */
  children?: React.ReactNode;
  
  /** Drawer size @default 'md' */
  size?: ComponentSize;
  
  /** Close on overlay click @default true */
  closeOnOverlayClick?: boolean;
  
  /** Close on escape key @default true */
  closeOnEscape?: boolean;
  
  /** Show close button @default true */
  showCloseButton?: boolean;
  
  /** Footer content */
  footer?: React.ReactNode;
}
```

---

## Component Composition Examples

### Form with Validation

```tsx
<form onSubmit={handleSubmit}>
  <Field error={!!errors.email}>
    <Label htmlFor="email" required>Email</Label>
    <Input
      id="email"
      type="email"
      value={formData.email}
      onChange={(value) => setFormData({ ...formData, email: value })}
      error={!!errors.email}
      aria-describedby={errors.email ? 'email-error' : 'email-hint'}
    />
    {errors.email ? (
      <ErrorText id="email-error">{errors.email}</ErrorText>
    ) : (
      <HintText id="email-hint">We'll never share your email</HintText>
    )}
  </Field>

  <Button type="submit" loading={isSubmitting}>
    Submit Application
  </Button>
</form>
```

### Navigation Pattern

```tsx
<Header variant="government">
  <TopNav
    items={navItems}
    activeId={activeRoute}
    onChange={handleNavigate}
  />
</Header>

<div className="ux4g-flex">
  <SideNav
    items={sideNavItems}
    activeId={activeRoute}
    onChange={handleNavigate}
  />
  <main>{children}</main>
</div>
```

### Data Display Pattern

```tsx
<Card>
  <Table
    columns={columns}
    data={data}
    loading={isLoading}
    sortBy={sortColumn}
    sortDirection={sortDirection}
    onSort={handleSort}
    onRowClick={handleRowClick}
  />
  
  <Pagination
    totalPages={totalPages}
    currentPage={currentPage}
    onPageChange={handlePageChange}
  />
</Card>
```

---

This API reference provides the complete interface for all UX4G React components with consistent naming patterns and accessibility-first defaults.
