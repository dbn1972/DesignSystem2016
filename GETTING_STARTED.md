# Getting Started with UX4G Design System

Quick start guide to begin building government service applications with UX4G.

---

## Choose Your Path

### I want to start a new project
→ **Use a starter repository** (recommended)
- [React Starter](#option-1-react-starter)
- [Angular Starter](#option-2-angular-starter)

### I want to add UX4G to an existing project
→ **Manual installation**
- [Add to React Project](#manual-installation-react)
- [Add to Angular Project](#manual-installation-angular)

---

## Option 1: React Starter

### Quick Start (2 minutes)

```bash
# Clone starter repository
git clone https://github.com/ux4g/react-starter.git my-project
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) → You're ready to build!

### What You Get

✅ Pre-configured UX4G packages  
✅ Example pages (Home, Login, Application Form, Status Tracking)  
✅ React Router setup  
✅ Mock services  
✅ TypeScript configuration  
✅ Build tooling (Vite)  

### Next Steps

1. Read the [React Starter README](./starter-repos/react-starter/README.md)
2. Explore example pages in `src/pages/`
3. Review [Developer Onboarding Guide](./DEVELOPER_ONBOARDING.md)
4. Replace mock services with your API

---

## Option 2: Angular Starter

### Quick Start (2 minutes)

```bash
# Clone starter repository
git clone https://github.com/ux4g/angular-starter.git my-project
cd my-project

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:4200](http://localhost:4200) → You're ready to build!

### What You Get

✅ Pre-configured UX4G packages  
✅ Example pages (Home, Login, Application Form, Status Tracking)  
✅ Angular Router setup  
✅ Mock services  
✅ TypeScript configuration  
✅ Standalone components architecture  

### Next Steps

1. Read the [Angular Starter README](./starter-repos/angular-starter/README.md)
2. Explore example pages in `src/app/pages/`
3. Review [Developer Onboarding Guide](./DEVELOPER_ONBOARDING.md)
4. Replace mock services with your API

---

## Manual Installation: React

### Step 1: Install Packages

```bash
npm install @ux4g/tokens @ux4g/styles @ux4g/react-core @ux4g/react-patterns
```

### Step 2: Import Global Styles

```tsx
// src/main.tsx or src/index.tsx
import '@ux4g/styles';
import './index.css';
```

### Step 3: Use Components

```tsx
// src/App.tsx
import { Button, Card, Input } from '@ux4g/react-core';

function App() {
  return (
    <Card>
      <h1>Welcome to UX4G</h1>
      <Input placeholder="Enter text" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Step 4: Use Patterns (Optional)

```tsx
// src/pages/LoginPage.tsx
import { SignIn } from '@ux4g/react-patterns/authentication';

export function LoginPage() {
  const handleSignIn = async (credentials) => {
    // Your authentication logic
    return await authService.signIn(credentials);
  };

  return <SignIn onSignIn={handleSignIn} />;
}
```

---

## Manual Installation: Angular

### Step 1: Install Packages

```bash
npm install @ux4g/tokens @ux4g/styles @ux4g/angular-core @ux4g/angular-patterns
```

### Step 2: Import Global Styles

```css
/* src/styles.css */
@import '@ux4g/styles';
```

### Step 3: Use Components

```typescript
// src/app/app.component.ts
import { Component } from '@angular/core';
import { ButtonComponent, CardComponent, InputComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, CardComponent, InputComponent],
  template: `
    <ux4g-card>
      <h1>Welcome to UX4G</h1>
      <ux4g-input placeholder="Enter text"></ux4g-input>
      <ux4g-button variant="primary">Submit</ux4g-button>
    </ux4g-card>
  `
})
export class AppComponent { }
```

### Step 4: Use Patterns (Optional)

```typescript
// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { SignInComponent } from '@ux4g/angular-patterns/authentication';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignInComponent],
  template: `
    <ux4g-pattern-signin
      (signIn)="handleSignIn($event)"
    ></ux4g-pattern-signin>
  `
})
export class LoginComponent {
  async handleSignIn(credentials: SignInCredentials) {
    // Your authentication logic
    return await this.authService.signIn(credentials);
  }
}
```

---

## Package Overview

### Core Packages (Required)

| Package | Purpose | Size |
|---------|---------|------|
| `@ux4g/tokens` | Design tokens (colors, spacing, typography) | ~10 KB |
| `@ux4g/styles` | CSS foundation and utilities | ~50 KB |
| `@ux4g/react-core` or `@ux4g/angular-core` | UI components | ~150 KB |

### Pattern Package (Optional but Recommended)

| Package | Purpose | Size |
|---------|---------|------|
| `@ux4g/react-patterns` or `@ux4g/angular-patterns` | Pre-composed flow patterns | ~200 KB |

**Total Bundle:** ~410 KB (minified + gzipped: ~100-150 KB)

---

## Key Concepts

### Components vs Patterns

**Components** = Individual UI elements
- Button, Input, Card, Alert, Table
- Generic and reusable
- From `@ux4g/react-core` or `@ux4g/angular-core`

**Patterns** = Complete user flows
- Sign In, OTP Verification, Multi-Document Upload
- Pre-composed from components
- From `@ux4g/react-patterns` or `@ux4g/angular-patterns`

### Example: Sign In Flow

**Using Components (More Code):**
```tsx
// You build the entire form
<form onSubmit={handleSubmit}>
  <Field>
    <Label>Username</Label>
    <Input value={username} onChange={setUsername} />
    {errors.username && <ErrorText>{errors.username}</ErrorText>}
  </Field>
  <Field>
    <Label>Password</Label>
    <Input type="password" value={password} onChange={setPassword} />
    {errors.password && <ErrorText>{errors.password}</ErrorText>}
  </Field>
  <Button type="submit">Sign In</Button>
</form>
// + validation logic
// + error handling
// + loading states
// + etc.
```

**Using Pattern (Less Code):**
```tsx
// Pattern handles everything
<SignIn onSignIn={handleSignIn} />
```

---

## First Page in 5 Minutes

### React

```tsx
// 1. Create page file: src/pages/MyPage.tsx
import { Card, Button, Alert } from '@ux4g/react-core';

export function MyPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <Alert variant="success">Welcome to my page!</Alert>
      
      <Card>
        <h1>My First UX4G Page</h1>
        <p>This page uses UX4G components.</p>
        <Button variant="primary">Click Me</Button>
      </Card>
    </div>
  );
}

// 2. Add route in App.tsx
<Route path="/my-page" element={<MyPage />} />

// 3. Done! Navigate to /my-page
```

### Angular

```bash
# 1. Generate component
ng generate component pages/my-page --standalone
```

```typescript
// 2. src/app/pages/my-page/my-page.component.ts
import { Component } from '@angular/core';
import { CardComponent, ButtonComponent, AlertComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [CardComponent, ButtonComponent, AlertComponent],
  template: `
    <div style="padding: 2rem">
      <ux4g-alert variant="success">Welcome to my page!</ux4g-alert>
      
      <ux4g-card>
        <h1>My First UX4G Page</h1>
        <p>This page uses UX4G components.</p>
        <ux4g-button variant="primary">Click Me</ux4g-button>
      </ux4g-card>
    </div>
  `
})
export class MyPageComponent { }

// 3. Add route in app.routes.ts
{ path: 'my-page', component: MyPageComponent }

// 4. Done! Navigate to /my-page
```

---

## Common Use Cases

### 1. Authentication Flow

Use `SignIn` pattern:

```tsx
// React
import { SignIn } from '@ux4g/react-patterns/authentication';

<SignIn
  onSignIn={async (credentials) => {
    return await authService.signIn(credentials);
  }}
  onForgotPassword={() => navigate('/forgot-password')}
/>
```

```typescript
// Angular
import { SignInComponent } from '@ux4g/angular-patterns/authentication';

<ux4g-pattern-signin
  (signIn)="handleSignIn($event)"
  (forgotPassword)="handleForgotPassword()"
></ux4g-pattern-signin>
```

### 2. Form with Validation

Use form components with validation:

```tsx
// React with React Hook Form
import { useForm } from 'react-hook-form';
import { Input, Button, Field, Label, ErrorText } from '@ux4g/react-core';

const { register, handleSubmit, formState: { errors } } = useForm();

<form onSubmit={handleSubmit(onSubmit)}>
  <Field error={!!errors.email}>
    <Label>Email</Label>
    <Input {...register('email', { required: true })} error={!!errors.email} />
    {errors.email && <ErrorText>Email is required</ErrorText>}
  </Field>
  <Button type="submit">Submit</Button>
</form>
```

```typescript
// Angular with Reactive Forms
import { FormBuilder, Validators } from '@angular/forms';

form = this.fb.group({
  email: ['', [Validators.required, Validators.email]]
});

<form [formGroup]="form">
  <ux4g-field [error]="email.invalid && email.touched">
    <ux4g-label>Email</ux4g-label>
    <ux4g-input formControlName="email"></ux4g-input>
    <ux4g-error-text *ngIf="email.hasError('required')">
      Email is required
    </ux4g-error-text>
  </ux4g-field>
  <ux4g-button type="submit">Submit</ux4g-button>
</form>
```

### 3. Data Display

Use table or card components:

```tsx
// React
import { Table, Card } from '@ux4g/react-core';

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
```

---

## Customization

### Override Theme Colors

```css
/* src/index.css or src/styles.css */
@import '@ux4g/styles';

:root {
  /* Override brand primary color */
  --ux4g-semantic-color-brand-primary: #FF5700;
  
  /* Override interactive color */
  --ux4g-semantic-color-interactive-default: #005A9C;
}
```

### Custom Component Wrapper

```tsx
// React
import { Button, ButtonProps } from '@ux4g/react-core';

export function MyButton(props: ButtonProps) {
  return <Button {...props} className={`my-custom-button ${props.className}`} />;
}
```

```typescript
// Angular
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-my-button',
  template: `<ux4g-button [className]="'my-custom-button ' + className"><ng-content></ng-content></ux4g-button>`
})
export class MyButtonComponent {
  @Input() className = '';
}
```

---

## Best Practices

1. ✅ **Use TypeScript** - Full type safety included
2. ✅ **Import Only What You Need** - Better tree-shaking
3. ✅ **Use Patterns for Common Flows** - Less code, consistent UX
4. ✅ **Follow Accessibility Guidelines** - Components are accessible by default
5. ✅ **Test on Mobile** - Components are responsive by default
6. ✅ **Review Examples** - Check starter repo examples

---

## Next Steps

1. **Complete Onboarding** - Follow [Developer Onboarding Guide](./DEVELOPER_ONBOARDING.md)
2. **Explore Components** - Browse [Component Documentation](./COMPONENTS.md)
3. **Use Patterns** - Review [Pattern Catalog](./PATTERNS.md)
4. **Customize Theme** - Read [Theming Guide](./THEMING.md)
5. **Deploy** - Build and deploy your application

---

## Getting Help

- 📚 **Documentation:** [ux4g.gov.in](https://ux4g.gov.in)
- 💬 **Forum:** [forum.ux4g.gov.in](https://forum.ux4g.gov.in)
- 🐛 **Issues:** [GitHub Issues](https://github.com/ux4g/issues)
- 📧 **Email:** support@ux4g.gov.in

---

## FAQ

**Q: Do I need all 4 packages?**  
A: You need tokens, styles, and core. Patterns are optional but highly recommended.

**Q: Can I use UX4G with Next.js/Nuxt?**  
A: Yes! Follow the React/Angular manual installation steps.

**Q: Is UX4G production-ready?**  
A: Yes! It's being used in production government services.

**Q: Can I customize the theme?**  
A: Yes! Override CSS custom properties or wrap components.

**Q: What if I find a bug?**  
A: Report it on [GitHub Issues](https://github.com/ux4g/issues).

---

**Ready to build? Start with a [starter repository](#choose-your-path) or jump to [manual installation](#manual-installation-react)!**
