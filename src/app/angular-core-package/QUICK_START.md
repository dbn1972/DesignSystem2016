# UX4G Angular Core - Quick Start Guide

Get started with `@ux4g/angular-core` in 5 minutes.

---

## Installation

```bash
npm install @ux4g/angular-core @ux4g/tokens @ux4g/styles
```

---

## Step 1: Import Global Styles

Add to `src/styles.css`:

```css
@import '@ux4g/styles';
```

---

## Step 2: Create Your First Component

**Standalone Component (Recommended):**

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { ButtonComponent, InputComponent, AlertComponent } from '@ux4g/angular-core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    AlertComponent,
    FormsModule,
  ],
  template: `
    <div class="container">
      <h1>Welcome to UX4G</h1>

      <ux4g-alert variant="info">
        This is a government service application.
      </ux4g-alert>

      <form>
        <ux4g-input 
          placeholder="Enter your name"
          [(ngModel)]="name"
        ></ux4g-input>

        <ux4g-button 
          variant="primary" 
          (clicked)="handleSubmit()"
        >
          Submit
        </ux4g-button>
      </form>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
    }
  `]
})
export class AppComponent {
  name = '';

  handleSubmit() {
    console.log('Name:', this.name);
  }
}
```

---

## Step 3: Use Reactive Forms

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { 
  InputComponent, 
  ButtonComponent, 
  FieldComponent, 
  LabelComponent, 
  ErrorTextComponent 
} from '@ux4g/angular-core';

@Component({
  selector: 'app-registration',
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
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <!-- Email Field -->
      <ux4g-field [error]="email.invalid && email.touched">
        <ux4g-label htmlFor="email">Email Address *</ux4g-label>
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

      <!-- Password Field -->
      <ux4g-field [error]="password.invalid && password.touched">
        <ux4g-label htmlFor="password">Password *</ux4g-label>
        <ux4g-input 
          id="password"
          type="password"
          formControlName="password"
          [error]="password.invalid && password.touched"
        ></ux4g-input>
        <ux4g-error-text *ngIf="password.hasError('required')">
          Password is required
        </ux4g-error-text>
        <ux4g-error-text *ngIf="password.hasError('minlength')">
          Password must be at least 8 characters
        </ux4g-error-text>
      </ux4g-field>

      <!-- Submit Button -->
      <ux4g-button 
        type="submit"
        variant="primary"
        [disabled]="form.invalid"
        [loading]="isSubmitting"
      >
        Register
      </ux4g-button>
    </form>
  `
})
export class RegistrationComponent {
  isSubmitting = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  get email() { return this.form.get('email')!; }
  get password() { return this.form.get('password')!; }

  async onSubmit() {
    if (this.form.valid) {
      this.isSubmitting = true;
      // Submit logic here
      await this.submitForm(this.form.value);
      this.isSubmitting = false;
    }
  }

  async submitForm(data: any) {
    // API call
    console.log('Form submitted:', data);
  }
}
```

---

## Step 4: Component Variants

### Button Variants

```typescript
<ux4g-button variant="primary">Primary</ux4g-button>
<ux4g-button variant="secondary">Secondary</ux4g-button>
<ux4g-button variant="tertiary">Tertiary</ux4g-button>
<ux4g-button variant="ghost">Ghost</ux4g-button>
<ux4g-button variant="destructive">Delete</ux4g-button>
```

### Button Sizes

```typescript
<ux4g-button size="sm">Small</ux4g-button>
<ux4g-button size="md">Medium</ux4g-button>
<ux4g-button size="lg">Large</ux4g-button>
```

### Alert Variants

```typescript
<ux4g-alert variant="info">Information message</ux4g-alert>
<ux4g-alert variant="success">Success message</ux4g-alert>
<ux4g-alert variant="warning">Warning message</ux4g-alert>
<ux4g-alert variant="error">Error message</ux4g-alert>
```

---

## Step 5: Use with Icons

```typescript
import { Component } from '@angular/core';
import { ButtonComponent, InputComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  template: `
    <!-- Button with icon -->
    <ux4g-button variant="primary" [iconBefore]="true">
      <svg slot="icon-before" width="16" height="16" viewBox="0 0 16 16">
        <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" fill="currentColor"/>
      </svg>
      Send Email
    </ux4g-button>

    <!-- Input with icon -->
    <ux4g-input [iconBefore]="true" placeholder="Search...">
      <svg slot="icon-before" width="16" height="16" viewBox="0 0 16 16">
        <circle cx="7" cy="7" r="6" stroke="currentColor" fill="none"/>
        <path d="M11 11L15 15" stroke="currentColor"/>
      </svg>
    </ux4g-input>
  `
})
export class ExampleComponent { }
```

---

## Step 6: Modular Imports

For optimal bundle size, import only what you need:

```typescript
// Import from specific entry points
import { ButtonComponent } from '@ux4g/angular-core/button';
import { InputComponent } from '@ux4g/angular-core/input';
import { AlertComponent } from '@ux4g/angular-core/feedback';

// Or import from the main package
import { ButtonComponent, InputComponent, AlertComponent } from '@ux4g/angular-core';
```

---

## Common Patterns

### Form Validation

```typescript
@Component({
  template: `
    <ux4g-field [error]="control.invalid && control.touched">
      <ux4g-label htmlFor="field">Label</ux4g-label>
      <ux4g-hint-text id="field-hint">Helper text</ux4g-hint-text>
      <ux4g-input
        id="field"
        [formControl]="control"
        [error]="control.invalid && control.touched"
        ariaDescribedBy="field-hint"
      ></ux4g-input>
      <ux4g-error-text *ngIf="control.hasError('required')">
        This field is required
      </ux4g-error-text>
    </ux4g-field>
  `
})
```

### Loading States

```typescript
@Component({
  template: `
    <ux4g-button 
      variant="primary"
      [loading]="isLoading"
      (clicked)="handleClick()"
    >
      {{ isLoading ? 'Saving...' : 'Save' }}
    </ux4g-button>
  `
})
export class Component {
  isLoading = false;

  async handleClick() {
    this.isLoading = true;
    await this.saveData();
    this.isLoading = false;
  }
}
```

### Dismissible Alerts

```typescript
@Component({
  template: `
    <ux4g-alert 
      *ngIf="showAlert"
      variant="success"
      [dismissible]="true"
      (dismissed)="showAlert = false"
    >
      Operation completed successfully!
    </ux4g-alert>
  `
})
export class Component {
  showAlert = true;
}
```

---

## Next Steps

- 📚 Read the [Component API Reference](./COMPONENT_API_REFERENCE.md)
- 🎨 Learn [Component Patterns](./COMPONENT_PATTERNS.md)
- 🔍 Explore more [examples](./examples/)

---

## Need Help?

- 📖 [Full Documentation](https://ux4g.gov.in/angular)
- 🐛 [Report Issues](https://github.com/ux4g/angular-core/issues)
- 💬 [Community Forum](https://forum.ux4g.gov.in)

---

**You're ready to build government services with UX4G Angular components!** 🚀
