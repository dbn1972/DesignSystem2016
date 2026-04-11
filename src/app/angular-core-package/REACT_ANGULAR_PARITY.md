# React-Angular Parity Guide

This document demonstrates the API parity between `@ux4g/react-core` and `@ux4g/angular-core`.

---

## Design Philosophy

Both libraries share the same:
- Component naming
- Variant systems
- Size systems
- Prop/Input naming conventions
- Accessibility patterns
- Token-based styling

The main differences are framework-specific patterns.

---

## Button Component

### React

```tsx
import { Button } from '@ux4g/react-core';

function App() {
  const handleClick = () => console.log('Clicked');
  
  return (
    <Button 
      variant="primary"
      size="md"
      disabled={false}
      loading={isLoading}
      onClick={handleClick}
    >
      Click me
    </Button>
  );
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <ux4g-button 
      variant="primary"
      size="md"
      [disabled]="false"
      [loading]="isLoading"
      (clicked)="handleClick()"
    >
      Click me
    </ux4g-button>
  `
})
export class AppComponent {
  isLoading = false;
  
  handleClick() {
    console.log('Clicked');
  }
}
```

### Key Differences

| Concept | React | Angular |
|---------|-------|---------|
| Props | `variant="primary"` | `variant="primary"` ✅ Same |
| Boolean props | `disabled={false}` | `[disabled]="false"` |
| Event handlers | `onClick={handler}` | `(clicked)="handler()"` |
| Children | `<Button>text</Button>` | `<ux4g-button>text</ux4g-button>` |

---

## Input Component

### React

```tsx
import { Input } from '@ux4g/react-core';

function Form() {
  const [email, setEmail] = useState('');
  
  return (
    <Input 
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={!isValid}
    />
  );
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, InputComponent],
  template: `
    <ux4g-input 
      type="email"
      placeholder="Enter email"
      [(ngModel)]="email"
      [error]="!isValid"
    ></ux4g-input>
  `
})
export class FormComponent {
  email = '';
  isValid = true;
}
```

### Key Differences

| Concept | React | Angular |
|---------|-------|---------|
| Value prop | `value={email}` | `[(ngModel)]="email"` |
| Change handler | `onChange={handler}` | Built into ngModel |
| Two-way binding | Manual | `[(ngModel)]` |

---

## Form Components

### React (Controlled Components)

```tsx
import { Field, Label, Input, ErrorText } from '@ux4g/react-core';

function Form() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  return (
    <Field error={!!error}>
      <Label htmlFor="email">Email</Label>
      <Input 
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!error}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Field>
  );
}
```

### Angular (Reactive Forms)

```typescript
import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FieldComponent, LabelComponent, InputComponent, ErrorTextComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, FieldComponent, LabelComponent, InputComponent, ErrorTextComponent],
  template: `
    <ux4g-field [error]="email.invalid && email.touched">
      <ux4g-label htmlFor="email">Email</ux4g-label>
      <ux4g-input 
        id="email"
        type="email"
        [formControl]="email"
        [error]="email.invalid && email.touched"
      ></ux4g-input>
      <ux4g-error-text *ngIf="email.hasError('required')">
        Email is required
      </ux4g-error-text>
    </ux4g-field>
  `
})
export class FormComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
}
```

### Key Differences

| Concept | React | Angular |
|---------|-------|---------|
| State management | `useState` | `FormControl` |
| Validation | Custom logic | Built-in validators |
| Error display | Conditional render | `*ngIf` directive |
| Form integration | Manual | `formControl` directive |

---

## Alert Component

### React

```tsx
import { Alert } from '@ux4g/react-core';

function Notifications() {
  const [show, setShow] = useState(true);
  
  return (
    <>
      {show && (
        <Alert 
          variant="success"
          dismissible
          onDismiss={() => setShow(false)}
        >
          Success message!
        </Alert>
      )}
    </>
  );
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { AlertComponent } from '@ux4g/angular-core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, AlertComponent],
  template: `
    <ux4g-alert 
      *ngIf="show"
      variant="success"
      [dismissible]="true"
      (dismissed)="show = false"
    >
      Success message!
    </ux4g-alert>
  `
})
export class NotificationsComponent {
  show = true;
}
```

### Key Differences

| Concept | React | Angular |
|---------|-------|---------|
| Conditional render | `{show && <Alert />}` | `*ngIf="show"` |
| Event handler | `onDismiss={handler}` | `(dismissed)="handler()"` |
| State | `useState` | Class property |

---

## Dialog Component

### React

```tsx
import { Dialog, Button } from '@ux4g/react-core';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>
      
      <Dialog 
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Header>Title</Dialog.Header>
        <Dialog.Content>Content</Dialog.Content>
        <Dialog.Footer>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { DialogComponent, ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-root',
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
export class AppComponent {
  isOpen = false;
}
```

### Key Differences

| Concept | React | Angular |
|---------|-------|---------|
| Compound components | `Dialog.Header` | `ux4g-dialog-header` |
| Two-way binding | Manual | `[(open)]="isOpen"` |
| Event handler | `onClose={handler}` | `(closed)="handler()"` |

---

## Table Component

### React

```tsx
import { Table } from '@ux4g/react-core';

function Users() {
  const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
  ];
  
  return (
    <Table striped hoverable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@ux4g/angular-core';

interface User {
  id: number;
  name: string;
  email: string;
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
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </ux4g-table>
  `
})
export class UsersComponent {
  users: User[] = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
  ];
}
```

### Key Differences

| Concept | React | Angular |
|---------|-------|---------|
| List rendering | `.map()` | `*ngFor` |
| Interpolation | `{user.name}` | `{{ user.name }}` |
| Props | `striped` | `[striped]="true"` |

---

## Tabs Component

### React

```tsx
import { Tabs } from '@ux4g/react-core';

function App() {
  return (
    <Tabs defaultActiveIndex={0}>
      <Tabs.Panel label="Profile" id="profile">
        Profile content
      </Tabs.Panel>
      <Tabs.Panel label="Settings" id="settings">
        Settings content
      </Tabs.Panel>
    </Tabs>
  );
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { TabsComponent, TabPanelComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabsComponent, TabPanelComponent],
  template: `
    <ux4g-tabs [activeIndex]="0">
      <ux4g-tab-panel label="Profile" id="profile">
        Profile content
      </ux4g-tab-panel>
      <ux4g-tab-panel label="Settings" id="settings">
        Settings content
      </ux4g-tab-panel>
    </ux4g-tabs>
  `
})
export class AppComponent { }
```

### Key Differences

| Concept | React | Angular |
|---------|-------|---------|
| Compound components | `Tabs.Panel` | `ux4g-tab-panel` |
| Default active | `defaultActiveIndex={0}` | `[activeIndex]="0"` |
| Children | Nested JSX | Nested elements |

---

## Props/Inputs Naming Comparison

Both libraries use the same naming conventions:

| Property | React | Angular | ✅ |
|----------|-------|---------|---|
| Variant | `variant="primary"` | `variant="primary"` | Same |
| Size | `size="md"` | `size="md"` | Same |
| Disabled | `disabled={true}` | `[disabled]="true"` | Same |
| Loading | `loading={true}` | `[loading]="true"` | Same |
| Error | `error={true}` | `[error]="true"` | Same |
| Full Width | `fullWidth={true}` | `[fullWidth]="true"` | Same |
| Class Name | `className="custom"` | `className="custom"` | Same |
| ARIA Label | `ariaLabel="text"` | `ariaLabel="text"` | Same |
| Test ID | `testId="btn"` | `testId="btn"` | Same |

---

## Event Naming Comparison

Both libraries use similar naming patterns:

| Event | React | Angular | Note |
|-------|-------|---------|------|
| Click | `onClick` | `(clicked)` | Past tense in Angular |
| Change | `onChange` | `(valueChange)` | More descriptive in Angular |
| Focus | `onFocus` | `(focused)` | Past tense in Angular |
| Blur | `onBlur` | `(blurred)` | Past tense in Angular |
| Dismiss | `onDismiss` | `(dismissed)` | Past tense in Angular |
| Close | `onClose` | `(closed)` | Past tense in Angular |

---

## Variant Systems - Identical

Both libraries share the same variant definitions:

### Component Variants

```typescript
type ComponentVariant = 
  | 'primary' 
  | 'secondary' 
  | 'tertiary' 
  | 'ghost' 
  | 'destructive';
```

### Status Variants

```typescript
type StatusVariant = 
  | 'info' 
  | 'success' 
  | 'warning' 
  | 'error';
```

### Size System

```typescript
type ComponentSize = 
  | 'sm' 
  | 'md' 
  | 'lg';
```

---

## Styling - Identical

Both libraries use the same CSS classes from `@ux4g/styles`:

```css
/* Button */
.ux4g-button
.ux4g-button--primary
.ux4g-button--md
.ux4g-button--loading

/* Input */
.ux4g-input
.ux4g-input--md
.ux4g-input--error

/* Alert */
.ux4g-alert
.ux4g-alert--success
.ux4g-alert--dismissible
```

---

## Accessibility - Identical

Both libraries implement the same accessibility patterns:

- WCAG 2.1 Level AA compliance
- ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support
- Semantic HTML

---

## Migration Guide

### From React to Angular

1. **Component imports:**
   ```typescript
   // React
   import { Button } from '@ux4g/react-core';
   
   // Angular
   import { ButtonComponent } from '@ux4g/angular-core';
   ```

2. **Props → Inputs:**
   ```tsx
   // React
   <Button variant="primary" disabled={true} />
   
   // Angular
   <ux4g-button variant="primary" [disabled]="true"></ux4g-button>
   ```

3. **Events:**
   ```tsx
   // React
   <Button onClick={handler} />
   
   // Angular
   <ux4g-button (clicked)="handler()"></ux4g-button>
   ```

4. **State management:**
   ```tsx
   // React
   const [value, setValue] = useState('');
   
   // Angular
   value = '';
   ```

5. **Forms:**
   ```tsx
   // React
   <Input value={email} onChange={e => setEmail(e.target.value)} />
   
   // Angular
   <ux4g-input [(ngModel)]="email"></ux4g-input>
   ```

### From Angular to React

Follow the same patterns in reverse.

---

## Summary

`@ux4g/react-core` and `@ux4g/angular-core` maintain **API parity** across:

✅ Component names  
✅ Variant systems  
✅ Size systems  
✅ Prop/Input naming  
✅ Accessibility patterns  
✅ Token-based styling  
✅ CSS class names  

The only differences are **framework-specific patterns**:
- React: JSX, hooks, controlled components
- Angular: Templates, decorators, reactive forms

This parity ensures:
- **Consistent developer experience** across frameworks
- **Easier team transitions** between React and Angular
- **Shared documentation** and learning resources
- **Unified design system** for government services
