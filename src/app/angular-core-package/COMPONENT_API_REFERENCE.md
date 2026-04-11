# UX4G Angular Core - Component API Reference

This document provides the complete API specification for all components in `@ux4g/angular-core`.

## Table of Contents

1. [Form Components](#form-components)
2. [Feedback Components](#feedback-components)
3. [Navigation Components](#navigation-components)
4. [Layout Components](#layout-components)
5. [Overlay Components](#overlay-components)
6. [Data Display Components](#data-display-components)

---

## Form Components

### Button

**Selector:** `ux4g-button`

**Inputs:**
```typescript
@Input() variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive' = 'primary';
@Input() size: 'sm' | 'md' | 'lg' = 'md';
@Input() type: 'button' | 'submit' | 'reset' = 'button';
@Input() disabled: boolean = false;
@Input() loading: boolean = false;
@Input() iconBefore: boolean = false;
@Input() iconAfter: boolean = false;
@Input() fullWidth: boolean = false;
@Input() className?: string;
@Input() ariaLabel?: string;
@Input() ariaDescribedBy?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() clicked = new EventEmitter<MouseEvent>();
@Output() focused = new EventEmitter<FocusEvent>();
@Output() blurred = new EventEmitter<FocusEvent>();
```

**Usage:**
```html
<ux4g-button variant="primary" size="md" (clicked)="handleClick()">
  Click me
</ux4g-button>

<ux4g-button variant="secondary" [loading]="isLoading">
  <span slot="icon-before">📧</span>
  Send Email
</ux4g-button>
```

---

### Input

**Selector:** `ux4g-input`

**Inputs:**
```typescript
@Input() type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'search' = 'text';
@Input() size: 'sm' | 'md' | 'lg' = 'md';
@Input() id?: string;
@Input() name?: string;
@Input() placeholder?: string;
@Input() disabled: boolean = false;
@Input() readonly: boolean = false;
@Input() required: boolean = false;
@Input() error: boolean = false;
@Input() iconBefore: boolean = false;
@Input() iconAfter: boolean = false;
@Input() fullWidth: boolean = true;
@Input() className?: string;
@Input() ariaLabel?: string;
@Input() ariaDescribedBy?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() valueChange = new EventEmitter<string>();
@Output() focused = new EventEmitter<FocusEvent>();
@Output() blurred = new EventEmitter<FocusEvent>();
```

**Usage:**
```html
<!-- Template-driven forms -->
<ux4g-input 
  type="email" 
  placeholder="Enter email"
  [(ngModel)]="email"
></ux4g-input>

<!-- Reactive forms -->
<ux4g-input 
  [formControl]="emailControl"
  [error]="emailControl.invalid && emailControl.touched"
></ux4g-input>

<!-- With icon -->
<ux4g-input [iconBefore]="true">
  <span slot="icon-before">🔍</span>
</ux4g-input>
```

---

### Textarea

**Selector:** `ux4g-textarea`

**Inputs:**
```typescript
@Input() size: 'sm' | 'md' | 'lg' = 'md';
@Input() id?: string;
@Input() name?: string;
@Input() placeholder?: string;
@Input() rows: number = 4;
@Input() maxLength?: number;
@Input() disabled: boolean = false;
@Input() readonly: boolean = false;
@Input() required: boolean = false;
@Input() error: boolean = false;
@Input() resize: 'none' | 'vertical' | 'horizontal' | 'both' = 'vertical';
@Input() fullWidth: boolean = true;
@Input() className?: string;
@Input() ariaLabel?: string;
@Input() ariaDescribedBy?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() valueChange = new EventEmitter<string>();
@Output() focused = new EventEmitter<FocusEvent>();
@Output() blurred = new EventEmitter<FocusEvent>();
```

---

### Select

**Selector:** `ux4g-select`

**Inputs:**
```typescript
@Input() size: 'sm' | 'md' | 'lg' = 'md';
@Input() id?: string;
@Input() name?: string;
@Input() placeholder?: string;
@Input() disabled: boolean = false;
@Input() required: boolean = false;
@Input() error: boolean = false;
@Input() multiple: boolean = false;
@Input() fullWidth: boolean = true;
@Input() className?: string;
@Input() ariaLabel?: string;
@Input() ariaDescribedBy?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() valueChange = new EventEmitter<string | string[]>();
@Output() focused = new EventEmitter<FocusEvent>();
@Output() blurred = new EventEmitter<FocusEvent>();
```

**Usage:**
```html
<ux4g-select [(ngModel)]="selectedOption">
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</ux4g-select>
```

---

### Checkbox

**Selector:** `ux4g-checkbox`

**Inputs:**
```typescript
@Input() id?: string;
@Input() name?: string;
@Input() value?: string;
@Input() disabled: boolean = false;
@Input() required: boolean = false;
@Input() indeterminate: boolean = false;
@Input() className?: string;
@Input() ariaLabel?: string;
@Input() ariaDescribedBy?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() checkedChange = new EventEmitter<boolean>();
@Output() focused = new EventEmitter<FocusEvent>();
@Output() blurred = new EventEmitter<FocusEvent>();
```

**Usage:**
```html
<ux4g-checkbox [(ngModel)]="agreed">
  I agree to the terms and conditions
</ux4g-checkbox>
```

---

### Radio

**Selector:** `ux4g-radio`

**Inputs:**
```typescript
@Input() id?: string;
@Input() name?: string;
@Input() value: string = '';
@Input() disabled: boolean = false;
@Input() required: boolean = false;
@Input() className?: string;
@Input() ariaLabel?: string;
@Input() ariaDescribedBy?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() selectedChange = new EventEmitter<boolean>();
@Output() focused = new EventEmitter<FocusEvent>();
@Output() blurred = new EventEmitter<FocusEvent>();
```

**Usage:**
```html
<ux4g-radio name="option" value="1" [(ngModel)]="selected">Option 1</ux4g-radio>
<ux4g-radio name="option" value="2" [(ngModel)]="selected">Option 2</ux4g-radio>
```

---

### Field

**Selector:** `ux4g-field`

**Inputs:**
```typescript
@Input() htmlFor?: string;
@Input() required: boolean = false;
@Input() error: boolean = false;
@Input() className?: string;
@Input() testId?: string;
```

**Usage:**
```html
<ux4g-field [htmlFor]="'email'" [required]="true" [error]="hasError">
  <ux4g-label>Email Address</ux4g-label>
  <ux4g-hint-text>We'll never share your email</ux4g-hint-text>
  <ux4g-input id="email" type="email" [(ngModel)]="email"></ux4g-input>
  <ux4g-error-text *ngIf="hasError">Invalid email address</ux4g-error-text>
</ux4g-field>
```

---

### Label

**Selector:** `ux4g-label`

**Inputs:**
```typescript
@Input() htmlFor?: string;
@Input() required: boolean = false;
@Input() className?: string;
@Input() testId?: string;
```

---

### HintText

**Selector:** `ux4g-hint-text`

**Inputs:**
```typescript
@Input() id?: string;
@Input() className?: string;
@Input() testId?: string;
```

---

### ErrorText

**Selector:** `ux4g-error-text`

**Inputs:**
```typescript
@Input() id?: string;
@Input() className?: string;
@Input() testId?: string;
```

---

### FileUpload

**Selector:** `ux4g-file-upload`

**Inputs:**
```typescript
@Input() accept?: string;
@Input() multiple: boolean = false;
@Input() maxSize?: number; // in bytes
@Input() disabled: boolean = false;
@Input() dragDrop: boolean = true;
@Input() className?: string;
@Input() ariaLabel?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() filesSelected = new EventEmitter<File[]>();
@Output() fileRejected = new EventEmitter<{ file: File; reason: string }>();
```

---

### DateInput

**Selector:** `ux4g-date-input`

**Inputs:**
```typescript
@Input() id?: string;
@Input() name?: string;
@Input() min?: string; // ISO date string
@Input() max?: string; // ISO date string
@Input() disabled: boolean = false;
@Input() required: boolean = false;
@Input() error: boolean = false;
@Input() format: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD' = 'DD/MM/YYYY';
@Input() className?: string;
@Input() ariaLabel?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() dateChange = new EventEmitter<Date>();
```

---

## Feedback Components

### Alert

**Selector:** `ux4g-alert`

**Inputs:**
```typescript
@Input() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
@Input() title?: string;
@Input() showIcon: boolean = true;
@Input() dismissible: boolean = false;
@Input() className?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() dismissed = new EventEmitter<void>();
```

**Usage:**
```html
<ux4g-alert variant="success">
  Your changes have been saved successfully!
</ux4g-alert>

<ux4g-alert 
  variant="error" 
  title="Error" 
  [dismissible]="true"
  (dismissed)="handleDismiss()"
>
  Unable to process your request. Please try again.
</ux4g-alert>
```

---

### Badge

**Selector:** `ux4g-badge`

**Inputs:**
```typescript
@Input() variant: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' = 'primary';
@Input() size: 'sm' | 'md' | 'lg' = 'md';
@Input() rounded: boolean = false;
@Input() className?: string;
@Input() testId?: string;
```

**Usage:**
```html
<ux4g-badge variant="success">Active</ux4g-badge>
<ux4g-badge variant="error" size="sm">99+</ux4g-badge>
```

---

### StatusTag / StatusIndicator

**Selector:** `ux4g-status-tag`

**Inputs:**
```typescript
@Input() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
@Input() size: 'sm' | 'md' | 'lg' = 'md';
@Input() showDot: boolean = true;
@Input() className?: string;
@Input() testId?: string;
```

**Usage:**
```html
<ux4g-status-tag variant="success">Approved</ux4g-status-tag>
<ux4g-status-tag variant="warning" [showDot]="true">Pending</ux4g-status-tag>
```

---

### Toast / Notification

**Selector:** `ux4g-toast`

**Inputs:**
```typescript
@Input() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
@Input() title?: string;
@Input() duration: number = 5000; // auto-dismiss after milliseconds
@Input() position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' = 'top-right';
@Input() dismissible: boolean = true;
@Input() className?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() dismissed = new EventEmitter<void>();
@Output() expired = new EventEmitter<void>();
```

---

## Navigation Components

### Breadcrumb

**Selector:** `ux4g-breadcrumb`

**Inputs:**
```typescript
@Input() separator: string = '/';
@Input() maxItems?: number;
@Input() className?: string;
@Input() ariaLabel: string = 'Breadcrumb';
@Input() testId?: string;
```

**Usage:**
```html
<ux4g-breadcrumb>
  <a ux4gBreadcrumbItem routerLink="/home">Home</a>
  <a ux4gBreadcrumbItem routerLink="/services">Services</a>
  <span ux4gBreadcrumbItem aria-current="page">Current Page</span>
</ux4g-breadcrumb>
```

---

### Pagination

**Selector:** `ux4g-pagination`

**Inputs:**
```typescript
@Input() currentPage: number = 1;
@Input() totalPages: number = 1;
@Input() pageSize: number = 10;
@Input() totalItems: number = 0;
@Input() showPageSize: boolean = true;
@Input() pageSizeOptions: number[] = [10, 20, 50, 100];
@Input() maxVisiblePages: number = 7;
@Input() className?: string;
@Input() ariaLabel: string = 'Pagination';
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() pageChange = new EventEmitter<number>();
@Output() pageSizeChange = new EventEmitter<number>();
```

---

### Tabs

**Selector:** `ux4g-tabs`

**Inputs:**
```typescript
@Input() activeIndex: number = 0;
@Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
@Input() variant: 'default' | 'pills' | 'underline' = 'default';
@Input() className?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() activeIndexChange = new EventEmitter<number>();
@Output() tabChange = new EventEmitter<{ index: number; id: string }>();
```

**Usage:**
```html
<ux4g-tabs [(activeIndex)]="activeTab">
  <ux4g-tab-panel label="Profile" id="profile">
    Profile content
  </ux4g-tab-panel>
  <ux4g-tab-panel label="Settings" id="settings">
    Settings content
  </ux4g-tab-panel>
</ux4g-tabs>
```

---

### Accordion

**Selector:** `ux4g-accordion`

**Inputs:**
```typescript
@Input() allowMultiple: boolean = false;
@Input() expandedIndexes: number[] = [];
@Input() className?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() expandedIndexesChange = new EventEmitter<number[]>();
@Output() itemToggle = new EventEmitter<{ index: number; expanded: boolean }>();
```

**Usage:**
```html
<ux4g-accordion [allowMultiple]="true">
  <ux4g-accordion-item title="Section 1">
    Content for section 1
  </ux4g-accordion-item>
  <ux4g-accordion-item title="Section 2">
    Content for section 2
  </ux4g-accordion-item>
</ux4g-accordion>
```

---

### TopNav

**Selector:** `ux4g-top-nav`

**Inputs:**
```typescript
@Input() logo?: string;
@Input() logoAlt?: string;
@Input() title?: string;
@Input() sticky: boolean = true;
@Input() className?: string;
@Input() testId?: string;
```

---

### SideNav

**Selector:** `ux4g-side-nav`

**Inputs:**
```typescript
@Input() collapsed: boolean = false;
@Input() width: string = '256px';
@Input() collapsedWidth: string = '64px';
@Input() position: 'left' | 'right' = 'left';
@Input() className?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() collapsedChange = new EventEmitter<boolean>();
```

---

### Header

**Selector:** `ux4g-header`

**Inputs:**
```typescript
@Input() variant: 'primary' | 'secondary' = 'primary';
@Input() sticky: boolean = false;
@Input() className?: string;
@Input() testId?: string;
```

---

### Stepper

**Selector:** `ux4g-stepper`

**Inputs:**
```typescript
@Input() currentStep: number = 0;
@Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
@Input() linear: boolean = true; // enforce sequential steps
@Input() className?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() stepChange = new EventEmitter<number>();
```

**Usage:**
```html
<ux4g-stepper [(currentStep)]="step">
  <ux4g-step label="Personal Info" [completed]="step > 0">
    Step 1 content
  </ux4g-step>
  <ux4g-step label="Address" [completed]="step > 1">
    Step 2 content
  </ux4g-step>
  <ux4g-step label="Review" [completed]="step > 2">
    Step 3 content
  </ux4g-step>
</ux4g-stepper>
```

---

## Layout Components

### Card

**Selector:** `ux4g-card`

**Inputs:**
```typescript
@Input() variant: 'default' | 'outlined' | 'elevated' = 'default';
@Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
@Input() hoverable: boolean = false;
@Input() className?: string;
@Input() testId?: string;
```

**Usage:**
```html
<ux4g-card variant="elevated" [hoverable]="true">
  <ux4g-card-header>Card Title</ux4g-card-header>
  <ux4g-card-content>Card content goes here</ux4g-card-content>
  <ux4g-card-footer>Card footer</ux4g-card-footer>
</ux4g-card>
```

---

### Table

**Selector:** `ux4g-table`

**Inputs:**
```typescript
@Input() striped: boolean = false;
@Input() bordered: boolean = true;
@Input() hoverable: boolean = true;
@Input() size: 'sm' | 'md' | 'lg' = 'md';
@Input() responsive: boolean = true;
@Input() className?: string;
@Input() ariaLabel?: string;
@Input() testId?: string;
```

**Usage:**
```html
<ux4g-table [striped]="true" [hoverable]="true">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of users">
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.role }}</td>
    </tr>
  </tbody>
</ux4g-table>
```

---

## Overlay Components

### Dialog

**Selector:** `ux4g-dialog`

**Inputs:**
```typescript
@Input() open: boolean = false;
@Input() size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
@Input() closeOnOverlayClick: boolean = true;
@Input() closeOnEscape: boolean = true;
@Input() showCloseButton: boolean = true;
@Input() className?: string;
@Input() ariaLabel?: string;
@Input() ariaDescribedBy?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() openChange = new EventEmitter<boolean>();
@Output() closed = new EventEmitter<void>();
```

**Usage:**
```html
<ux4g-dialog [(open)]="isOpen" size="md">
  <ux4g-dialog-header>Dialog Title</ux4g-dialog-header>
  <ux4g-dialog-content>Dialog content</ux4g-dialog-content>
  <ux4g-dialog-footer>
    <ux4g-button variant="secondary" (clicked)="closeDialog()">Cancel</ux4g-button>
    <ux4g-button variant="primary" (clicked)="confirm()">Confirm</ux4g-button>
  </ux4g-dialog-footer>
</ux4g-dialog>
```

---

### Drawer

**Selector:** `ux4g-drawer`

**Inputs:**
```typescript
@Input() open: boolean = false;
@Input() position: 'left' | 'right' | 'top' | 'bottom' = 'right';
@Input() size: 'sm' | 'md' | 'lg' = 'md';
@Input() closeOnOverlayClick: boolean = true;
@Input() closeOnEscape: boolean = true;
@Input() showCloseButton: boolean = true;
@Input() className?: string;
@Input() ariaLabel?: string;
@Input() testId?: string;
```

**Outputs:**
```typescript
@Output() openChange = new EventEmitter<boolean>();
@Output() closed = new EventEmitter<void>();
```

**Usage:**
```html
<ux4g-drawer [(open)]="isDrawerOpen" position="right">
  <ux4g-drawer-header>Settings</ux4g-drawer-header>
  <ux4g-drawer-content>Drawer content</ux4g-drawer-content>
</ux4g-drawer>
```

---

## Shared Input/Output Patterns

All form components implement `ControlValueAccessor` for Angular Forms integration:

```typescript
// Reactive Forms
form = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
});

// Template
<ux4g-input [formControl]="form.controls.email"></ux4g-input>

// Template-driven Forms
<ux4g-input [(ngModel)]="email"></ux4g-input>
```

All components support standard accessibility attributes:
- `ariaLabel`
- `ariaDescribedBy`
- `testId`

All interactive components emit standard events:
- `focused`
- `blurred`
- Component-specific events (clicked, valueChange, etc.)
