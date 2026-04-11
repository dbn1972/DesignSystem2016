# @ux4g/angular-core - Package Overview

Complete Angular component library for the UX4G Indian Government Design System.

---

## Package Information

**Name:** `@ux4g/angular-core`  
**Version:** `0.9.0` (Beta - Phase 2 In Progress)  
**License:** MIT  
**Angular Version:** 18.0.0+  
**TypeScript:** 5.4.0+  
**Status:** 🚧 35 components complete, 38 in development

> **Note:** The React package (@ux4g/react-core) is production-ready with all 73 components available.  
> Angular implementation is following a phased approach. See [ROADMAP.md](./ROADMAP.md) for details.

---

## Development Status

### ✅ Phase 1: Core Foundation (Q2 2026) - COMPLETE

**Phase 1 Complete: 16/16 components (100%)**

**Batch 1 (5 components):**
- ✅ Button
- ✅ Input
- ✅ Checkbox
- ✅ Radio + RadioGroup
- ✅ Select

**Batch 2 (6 components):**
- ✅ Textarea
- ✅ Label
- ✅ Field
- ✅ Alert
- ✅ Badge
- ✅ Card

**Batch 3 (5 components):**
- ✅ Table
- ✅ Dialog
- ✅ Tabs
- ✅ Pagination
- ✅ Breadcrumb

**Phase 1 Categories:**
- Form Elements: 8/8 ✅ (Button, Input, Checkbox, Radio, Select, Textarea, Label, Field)
- Feedback: 2/2 ✅ (Alert, Badge)
- Data Display: 2/2 ✅ (Card, Table)
- Navigation: 3/3 ✅ (Tabs, Pagination, Breadcrumb)
- Overlay: 1/1 ✅ (Dialog)

### 🚧 Phase 2: Extended Components (Q3 2026) - IN PROGRESS

**Phase 2 Progress: 19/27 components (70%)**

**Batch 4 (5 components):**
- ✅ Switch
- ✅ Toast (with ToastService)
- ✅ Progress
- ✅ Spinner
- ✅ Tooltip

**Batch 5 (5 components):**
- ✅ Avatar
- ✅ Tag
- ✅ Divider
- ✅ Status Tag
- ✅ Menu

**Batch 6 (4 components):**
- ✅ Container
- ✅ Stack
- ✅ Skeleton
- ✅ Statistic

**Batch 7 (5 components):**
- ✅ Timeline
- ✅ Grid
- ✅ Drawer
- ✅ OTP Input
- ✅ Stepper

**Phase 2 Categories (Current):**
- Form Elements: 2/5 🚧 (Switch ✅, OTP Input ✅, Autocomplete, Date Picker, File Upload)
- Feedback: 4/4 ✅ (Toast ✅, Progress ✅, Spinner ✅, Status Tag ✅) - **COMPLETE**
- Data Display: 5/5 ✅ (Avatar ✅, Tooltip ✅, Tag ✅, Statistic ✅, Timeline ✅) - **COMPLETE**
- Navigation: 3/5 🚧 (Menu ✅, Drawer ✅, Stepper ✅, Top Nav, Side Nav)
- Layout: 5/5 ✅ (Divider ✅, Stack ✅, Container ✅, Skeleton ✅, Grid ✅) - **COMPLETE**

### Next: Phase 2 Completion (Q3 2026) - 8 More Components

**Phase 2 (Q3 2026):** 27 additional components  
**Phase 3 (Q4 2026):** 30 specialized components

See [ROADMAP.md](./ROADMAP.md) for complete implementation timeline.

---

## Key Features

### 1. Standalone Architecture

All components are standalone (Angular 18+):

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ux4g-button>Click me</ux4g-button>`
})
export class AppComponent { }
```

**Benefits:**
- No NgModule required
- Tree-shakeable
- Easier to test
- Simpler mental model

### 2. Angular Forms Integration

Full support for both Reactive and Template-driven forms:

```typescript
// Reactive Forms
<ux4g-input [formControl]="emailControl"></ux4g-input>

// Template-driven Forms
<ux4g-input [(ngModel)]="email"></ux4g-input>
```

All form components implement `ControlValueAccessor`.

### 3. Token-Based Styling

Built on `@ux4g/tokens` and `@ux4g/styles`:

```css
.ux4g-button {
  background: var(--ux4g-semantic-color-interactive-default);
  padding: var(--ux4g-spacing-3) var(--ux4g-spacing-4);
  border-radius: var(--ux4g-radius-base);
}
```

### 4. Accessibility-First

WCAG 2.1 Level AA compliant:

- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ ARIA attributes
- ✅ Focus management
- ✅ Semantic HTML

### 5. TypeScript Support

Comprehensive type definitions:

```typescript
import { 
  ComponentSize, 
  ComponentVariant, 
  StatusVariant 
} from '@ux4g/angular-core';

const size: ComponentSize = 'md'; // 'sm' | 'md' | 'lg'
const variant: ComponentVariant = 'primary'; // 'primary' | 'secondary' | ...
```

### 6. OnPush Change Detection

All components use `ChangeDetectionStrategy.OnPush` for optimal performance.

---

## Selector Conventions

All selectors use the `ux4g-` prefix:

### Components
```html
<ux4g-button>...</ux4g-button>
<ux4g-input></ux4g-input>
<ux4g-alert>...</ux4g-alert>
<ux4g-dialog>...</ux4g-dialog>
```

### Sub-Components
```html
<ux4g-card>
  <ux4g-card-header>...</ux4g-card-header>
  <ux4g-card-content>...</ux4g-card-content>
  <ux4g-card-footer>...</ux4g-card-footer>
</ux4g-card>
```

### Directives
```html
<a ux4gBreadcrumbItem routerLink="/home">Home</a>
```

---

## Input/Output Patterns

### Standard Inputs

```typescript
@Input() variant: ComponentVariant = 'primary';
@Input() size: ComponentSize = 'md';
@Input() disabled: boolean = false;
@Input() className?: string;
@Input() ariaLabel?: string;
```

### Standard Outputs

```typescript
@Output() clicked = new EventEmitter<MouseEvent>();
@Output() focused = new EventEmitter<FocusEvent>();
@Output() blurred = new EventEmitter<FocusEvent>();
```

### Two-Way Binding

```typescript
@Input() value: string = '';
@Output() valueChange = new EventEmitter<string>();

// Usage
<ux4g-input [(value)]="name"></ux4g-input>
```

---

## Variant System

### Component Variants

```typescript
type ComponentVariant = 
  | 'primary'      // Primary action (saffron/orange)
  | 'secondary'    // Secondary action (navy blue)
  | 'tertiary'     // Tertiary action (outlined)
  | 'ghost'        // Subtle action (text-only)
  | 'destructive'; // Destructive action (red)
```

### Status Variants

```typescript
type StatusVariant = 
  | 'info'     // Blue
  | 'success'  // Green
  | 'warning'  // Orange/yellow
  | 'error';   // Red
```

### Size System

```typescript
type ComponentSize = 
  | 'sm'  // Small (compact)
  | 'md'  // Medium (default)
  | 'lg'; // Large (prominent)
```

---

## Component Groups

### Form Components

**Basic Inputs:**
- `ux4g-input` - Text input with icon support
- `ux4g-textarea` - Multi-line text input
- `ux4g-select` - Dropdown select
- `ux4g-checkbox` - Checkbox with label
- `ux4g-radio` - Radio button with label

**Specialized Inputs:**
- `ux4g-file-upload` - File upload with drag-drop
- `ux4g-date-input` - Date picker

**Form Structure:**
- `ux4g-field` - Form field wrapper
- `ux4g-label` - Form label
- `ux4g-hint-text` - Helper text
- `ux4g-error-text` - Error message

**Actions:**
- `ux4g-button` - Action button with variants

---

### Feedback Components

- `ux4g-alert` - Alert message with variants
- `ux4g-badge` - Small label/count indicator
- `ux4g-status-tag` - Status indicator
- `ux4g-toast` - Toast notification

---

### Navigation Components

- `ux4g-breadcrumb` - Breadcrumb navigation
- `ux4g-pagination` - Page navigation
- `ux4g-tabs` - Tab navigation
- `ux4g-accordion` - Expandable sections
- `ux4g-top-nav` - Top navigation bar
- `ux4g-side-nav` - Sidebar navigation
- `ux4g-header` - Page header
- `ux4g-stepper` - Step-by-step wizard

---

### Layout Components

- `ux4g-card` - Content card with header/footer
- `ux4g-table` - Data table

---

### Overlay Components

- `ux4g-dialog` - Modal dialog
- `ux4g-drawer` - Side drawer/panel

---

## Usage Examples

### Simple Form

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent, InputComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent, InputComponent],
  template: `
    <form (ngSubmit)="onSubmit()">
      <ux4g-input 
        placeholder="Enter your name"
        [(ngModel)]="name"
      ></ux4g-input>
      
      <ux4g-button type="submit" variant="primary">
        Submit
      </ux4g-button>
    </form>
  `
})
export class SimpleFormComponent {
  name = '';
  
  onSubmit() {
    console.log('Name:', this.name);
  }
}
```

### Reactive Form

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent, ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <ux4g-input 
        formControlName="email"
        [error]="email.invalid && email.touched"
      ></ux4g-input>
      
      <ux4g-button 
        type="submit"
        [disabled]="form.invalid"
      >
        Submit
      </ux4g-button>
    </form>
  `
})
export class ReactiveFormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  
  get email() { return this.form.get('email')!; }
  
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
```

### Dialog

```typescript
import { Component } from '@angular/core';
import { DialogComponent, ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-dialog-example',
  standalone: true,
  imports: [DialogComponent, ButtonComponent],
  template: `
    <ux4g-button (clicked)="isOpen = true">
      Open Dialog
    </ux4g-button>
    
    <ux4g-dialog [(open)]="isOpen">
      <ux4g-dialog-header>Title</ux4g-dialog-header>
      <ux4g-dialog-content>Content</ux4g-dialog-content>
      <ux4g-dialog-footer>
        <ux4g-button (clicked)="isOpen = false">Close</ux4g-button>
      </ux4g-dialog-footer>
    </ux4g-dialog>
  `
})
export class DialogExampleComponent {
  isOpen = false;
}
```

---

## Import Strategies

### Default Import (Full Package)

```typescript
import { ButtonComponent, InputComponent, AlertComponent } from '@ux4g/angular-core';
```

**Pros:** Simple, all components in one place  
**Cons:** Larger bundle if not tree-shaken properly

### Modular Import (Recommended)

```typescript
import { ButtonComponent } from '@ux4g/angular-core/button';
import { InputComponent } from '@ux4g/angular-core/input';
```

**Pros:** Explicit, optimal tree-shaking  
**Cons:** More import statements

### Category Import

```typescript
import * as Forms from '@ux4g/angular-core/forms';
import * as Navigation from '@ux4g/angular-core/navigation';
```

**Pros:** Organized by functionality  
**Cons:** May include unused components

---

## Performance Characteristics

### Bundle Size

| Import Type | Approximate Size |
|-------------|-----------------|
| Single component | 5-15 KB |
| Form components bundle | ~80 KB |
| Full package (tree-shaken) | ~150-200 KB |
| Full package (no tree-shaking) | ~300 KB |

### Change Detection

All components use `OnPush` change detection:
- Only checks when inputs change
- Emits outputs via EventEmitter
- Optimal performance for large applications

### Lazy Loading

Components can be lazy-loaded:

```typescript
const routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent)
  }
];
```

---

## Accessibility Features

### Keyboard Navigation

All interactive components support keyboard navigation:
- `Enter` / `Space` - Activate
- `Tab` / `Shift+Tab` - Navigate
- `Escape` - Close overlays
- Arrow keys - Navigate lists/tabs

### Screen Readers

All components include:
- Semantic HTML
- ARIA labels
- ARIA descriptions
- Role attributes
- Live regions for dynamic content

### Focus Management

Components manage focus:
- Visible focus indicators
- Focus trapping in modals
- Focus restoration on close
- Skip links where appropriate

---

## Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## Related Packages

- **@ux4g/tokens** - Design tokens (colors, spacing, typography)
- **@ux4g/styles** - CSS foundation and utilities
- **@ux4g/react-core** - React component library (same API design)

---

## Documentation

- 📚 [README](./README.md) - Main documentation
- 🚀 [Quick Start](./QUICK_START.md) - Get started in 5 minutes
- 📖 [Component API Reference](./COMPONENT_API_REFERENCE.md) - Complete API docs
- 🎨 [Component Patterns](./COMPONENT_PATTERNS.md) - Design patterns
- 📐 [Package Structure](./PACKAGE_STRUCTURE.md) - Directory organization

---

## Support

- 📧 Email: support@ux4g.gov.in
- 🐛 Issues: [GitHub Issues](https://github.com/ux4g/angular-core/issues)
- 📚 Docs: [ux4g.gov.in/angular](https://ux4g.gov.in/angular)
- 💬 Forum: [forum.ux4g.gov.in](https://forum.ux4g.gov.in)

---

## Summary

`@ux4g/angular-core` provides:

✅ **28 production-ready components**  
✅ **Standalone Angular 18+ architecture**  
✅ **Full Forms integration** (Reactive + Template-driven)  
✅ **Token-based styling** with @ux4g/tokens  
✅ **WCAG 2.1 Level AA accessibility**  
✅ **TypeScript type safety**  
✅ **OnPush change detection** for performance  
✅ **Tree-shakeable modular exports**  
✅ **Comprehensive documentation**

Built specifically for Indian Government digital services with Indian design patterns (tricolor theme, government-appropriate restraint, cultural sensitivity).
