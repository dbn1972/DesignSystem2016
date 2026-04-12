# @ux4g/angular-core

Angular component library for the UX4G Indian Government Design System.

[![npm version](https://img.shields.io/npm/v/@ux4g/angular-core.svg)](https://www.npmjs.com/package/@ux4g/angular-core)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

---

## 📊 Development Status

| Framework | Status | Components | Version |
|-----------|--------|------------|---------|
| **React** | ✅ **Complete!** 🏆 | **73/73 (100%)** | v1.0.0 |
| **Angular** | ✅ **Complete!** 🎉 | **73/73 (100%)** | v1.0.0 |

**Latest:** 🎉 **PARITY ACHIEVED!** All 73 components complete!  
**Progress:** Added final 9 components - Data Grid, QR Code, Application Tracker, Document Viewer, Charts, Calendar, Feedback Rating, Digital Signature, Language Selector

**✅ ALL BATCHES COMPLETED (73 Components)** 🎉

**Batch 1:** Button, Input, Checkbox, Radio, RadioGroup, Select  
**Batch 2:** Textarea, Label, Field, Alert, Badge, Card  
**Batch 3:** Table, Dialog, Tabs, Pagination, Breadcrumb  
**Batch 4:** Switch, Toast, Progress, Spinner, Tooltip  
**Batch 5:** Avatar, Tag, Divider, Status Tag, Menu  
**Batch 6:** Container, Stack, Skeleton, Statistic  
**Batch 7:** Timeline, Grid, Drawer, OTP Input, Stepper  
**Batch 8:** HintText, ErrorText, Rating, SearchBar, Accordion, Popover, DatePicker, FileUpload, Autocomplete  
**Batch 9:** Segmented Control, Aadhaar Input, PAN Input, Address Autocomplete India, CAPTCHA  
**Batch 10:** Header, Footer, Dropdown, Back to Top, Spacer  
**Batch 11:** List, Description List, Empty State, Code Block, Tree View  
**Batch 12:** Flex, Center, Aspect Ratio, Show/Hide, Section  
**Batch 13-14:** ✅ Data Grid, QR Code, Application Tracker, Document Viewer, Chart Library, Calendar Scheduler, Feedback Rating, Digital Signature, Language Selector

**🎉 MISSION ACCOMPLISHED: 73/73 components - Full parity with React!**

**Next Batches:**
- Layout components (10): Container, Grid, Stack, Divider, etc.
- Government forms (6): Aadhaar Input, PAN Input, etc.
- Advanced features (13): Digital Signature, Payment Gateway, etc.

> **Note**: 🎉 **BOTH FRAMEWORKS ARE COMPLETE!** React and Angular both have all 73/73 components (100%)! Full feature parity achieved with comprehensive documentation and working examples. Angular core library now has 73 production-ready reusable components matching React's complete set.

## Features

✅ **73 Production-Ready Components** - Complete library with Button, Input, Alert, Table, Dialog, Switch, Toast, Avatar, Menu, Stack, Timeline, Grid, Drawer, Rating, Autocomplete, DatePicker, FileUpload, SearchBar, Accordion, Popover, Aadhaar Input, PAN Input, Segmented Control, CAPTCHA, Header, Footer, Dropdown, Back to Top, Spacer, List, Description List, Empty State, Code Block, Tree View, Flex, Center, Aspect Ratio, Show/Hide, Section, Data Grid, QR Code, Application Tracker, Document Viewer, Charts, Calendar, Feedback Rating, Digital Signature, Language Selector, and more!  
✅ **Standalone Architecture** - Modern Angular 18+ standalone components  
✅ **Angular Forms Integration** - Full support for Reactive and Template-driven forms  
✅ **Token-Based Styling** - Built on @ux4g/tokens design system  
✅ **Accessibility-First** - WCAG 2.1 Level AA compliant  
✅ **TypeScript** - Full type safety with comprehensive interfaces  
✅ **Tree-Shakeable** - Modular exports for optimal bundle size  
✅ **OnPush Change Detection** - Optimized performance

---

## Installation

```bash
npm install @ux4g/angular-core @ux4g/tokens @ux4g/styles
```

### Peer Dependencies

```bash
npm install @angular/common@^18.0.0 @angular/core@^18.0.0 @angular/forms@^18.0.0
```

---

## Quick Start

### 1. Import Global Styles

Add to your `src/styles.css`:

```css
@import '@ux4g/styles';
```

### 2. Import Components

**Standalone Components (Recommended):**

```typescript
import { Component } from '@angular/core';
import { ButtonComponent, InputComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  template: `
    <ux4g-button variant="primary" (clicked)="handleClick()">
      Click me
    </ux4g-button>
    
    <ux4g-input 
      placeholder="Enter text"
      [(ngModel)]="text"
    ></ux4g-input>
  `
})
export class AppComponent {
  text = '';
  
  handleClick() {
    console.log('Button clicked!');
  }
}
```

**Module-Based (Legacy):**

```typescript
import { NgModule } from '@angular/core';
import { ButtonComponent, InputComponent } from '@ux4g/angular-core';

@NgModule({
  imports: [ButtonComponent, InputComponent],
  // ...
})
export class AppModule { }
```

---

## Component Categories

### Form Components

```typescript
import {
  ButtonComponent,
  InputComponent,
  TextareaComponent,
  SelectComponent,
  CheckboxComponent,
  RadioComponent,
  FieldComponent,
  LabelComponent,
  HintTextComponent,
  ErrorTextComponent,
  FileUploadComponent,
  DateInputComponent,
} from '@ux4g/angular-core';
```

### Feedback Components

```typescript
import {
  AlertComponent,
  BadgeComponent,
  StatusTagComponent,
  ToastComponent,
} from '@ux4g/angular-core';
```

### Navigation Components

```typescript
import {
  BreadcrumbComponent,
  PaginationComponent,
  TabsComponent,
  AccordionComponent,
  TopNavComponent,
  SideNavComponent,
  HeaderComponent,
  StepperComponent,
} from '@ux4g/angular-core';
```

### Layout Components

```typescript
import {
  CardComponent,
  TableComponent,
} from '@ux4g/angular-core';
```

### Overlay Components

```typescript
import {
  DialogComponent,
  DrawerComponent,
} from '@ux4g/angular-core';
```

---

## Usage Examples

### Forms

#### Reactive Forms

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent, ButtonComponent, FieldComponent, LabelComponent, ErrorTextComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    FieldComponent,
    LabelComponent,
    ErrorTextComponent,
  ],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <ux4g-field [error]="email.invalid && email.touched">
        <ux4g-label htmlFor="email">Email</ux4g-label>
        <ux4g-input 
          id="email"
          type="email"
          formControlName="email"
          [error]="email.invalid && email.touched"
        ></ux4g-input>
        <ux4g-error-text *ngIf="email.hasError('required')">
          Email is required
        </ux4g-error-text>
        <ux4g-error-text *ngIf="email.hasError('email')">
          Invalid email format
        </ux4g-error-text>
      </ux4g-field>

      <ux4g-field [error]="password.invalid && password.touched">
        <ux4g-label htmlFor="password">Password</ux4g-label>
        <ux4g-input 
          id="password"
          type="password"
          formControlName="password"
          [error]="password.invalid && password.touched"
        ></ux4g-input>
        <ux4g-error-text *ngIf="password.hasError('required')">
          Password is required
        </ux4g-error-text>
      </ux4g-field>

      <ux4g-button 
        type="submit" 
        variant="primary"
        [disabled]="loginForm.invalid"
      >
        Sign In
      </ux4g-button>
    </form>
  `
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() { return this.loginForm.get('email')!; }
  get password() { return this.loginForm.get('password')!; }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
```

#### Template-Driven Forms

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent, ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, InputComponent, ButtonComponent],
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()">
      <ux4g-input 
        name="name"
        [(ngModel)]="formData.name"
        required
      ></ux4g-input>

      <ux4g-input 
        name="email"
        type="email"
        [(ngModel)]="formData.email"
        required
        email
      ></ux4g-input>

      <ux4g-button type="submit" [disabled]="form.invalid">
        Submit
      </ux4g-button>
    </form>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
  };

  onSubmit() {
    console.log(this.formData);
  }
}
```

### Alerts

```typescript
import { Component } from '@angular/core';
import { AlertComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [AlertComponent],
  template: `
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

    <ux4g-alert variant="warning" title="Warning">
      Your session will expire in 5 minutes.
    </ux4g-alert>
  `
})
export class NotificationsComponent {
  handleDismiss() {
    console.log('Alert dismissed');
  }
}
```

### Dialogs

```typescript
import { Component } from '@angular/core';
import { DialogComponent, ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [DialogComponent, ButtonComponent],
  template: `
    <ux4g-button (clicked)="isDialogOpen = true">
      Open Dialog
    </ux4g-button>

    <ux4g-dialog 
      [(open)]="isDialogOpen"
      size="md"
      ariaLabel="Confirmation Dialog"
    >
      <ux4g-dialog-header>Confirm Action</ux4g-dialog-header>
      <ux4g-dialog-content>
        Are you sure you want to proceed with this action?
      </ux4g-dialog-content>
      <ux4g-dialog-footer>
        <ux4g-button 
          variant="secondary" 
          (clicked)="isDialogOpen = false"
        >
          Cancel
        </ux4g-button>
        <ux4g-button 
          variant="primary" 
          (clicked)="confirm()"
        >
          Confirm
        </ux4g-button>
      </ux4g-dialog-footer>
    </ux4g-dialog>
  `
})
export class ExampleComponent {
  isDialogOpen = false;

  confirm() {
    console.log('Confirmed!');
    this.isDialogOpen = false;
  }
}
```

### Tables

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@ux4g/angular-core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TableComponent],
  template: `
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
  `
})
export class UsersComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ];
}
```

---

## Modular Imports

Import only what you need for optimal bundle size:

```typescript
// Import specific components
import { ButtonComponent } from '@ux4g/angular-core/button';
import { InputComponent } from '@ux4g/angular-core/input';
import { AlertComponent } from '@ux4g/angular-core/feedback';

// Or import category bundles
import * as Forms from '@ux4g/angular-core/forms';
import * as Navigation from '@ux4g/angular-core/navigation';
```

---

## Accessibility

All components are built with accessibility in mind:

- ✅ WCAG 2.1 Level AA compliant
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Focus management
- ✅ ARIA attributes
- ✅ Semantic HTML

```typescript
// Example: Accessible form field
<ux4g-field>
  <ux4g-label htmlFor="username">Username</ux4g-label>
  <ux4g-hint-text id="username-hint">
    Must be at least 3 characters
  </ux4g-hint-text>
  <ux4g-input
    id="username"
    ariaDescribedBy="username-hint"
    [required]="true"
  ></ux4g-input>
</ux4g-field>
```

---

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```typescript
import { ComponentSize, ComponentVariant, StatusVariant } from '@ux4g/angular-core';

// Type-safe component usage
const size: ComponentSize = 'md';
const variant: ComponentVariant = 'primary';
const status: StatusVariant = 'success';
```

---

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

---

## Documentation

- [Component API Reference](./COMPONENT_API_REFERENCE.md) - Complete API docs for all components
- [Component Patterns](./COMPONENT_PATTERNS.md) - Design patterns and best practices
- [Framework Comparison](./FRAMEWORK_COMPARISON.md) - React vs Angular comparison guide
- [Implementation Roadmap](./ROADMAP.md) - Detailed development timeline
- [Changelog](./CHANGELOG.md) - Version history and migration guides

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup and contribution guidelines.

---

## License

MIT © UX4G Team

---

## Related Packages

- [@ux4g/tokens](https://www.npmjs.com/package/@ux4g/tokens) - Design tokens
- [@ux4g/styles](https://www.npmjs.com/package/@ux4g/styles) - CSS foundation
- [@ux4g/react-core](https://www.npmjs.com/package/@ux4g/react-core) - React components

---

## Support

- 📧 Email: support@ux4g.gov.in
- 🐛 Issues: [GitHub Issues](https://github.com/ux4g/angular-core/issues)
- 📚 Docs: [ux4g.gov.in/angular](https://ux4g.gov.in/angular)
