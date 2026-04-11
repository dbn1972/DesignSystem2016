# UX4G Pattern Packages - Strategy & Overview

This document outlines the strategy for `@ux4g/react-patterns` and `@ux4g/angular-patterns`.

---

## Package Purpose

### Components vs Patterns

**Component Packages** (`@ux4g/react-core`, `@ux4g/angular-core`):
- ✅ Individual UI elements (Button, Input, Card)
- ✅ Single responsibility
- ✅ No business logic
- ✅ Maximum reusability
- ✅ Generic across use cases

**Pattern Packages** (`@ux4g/react-patterns`, `@ux4g/angular-patterns`):
- ✅ Composed assemblies of components
- ✅ Complete user flows
- ✅ Accept business logic via props/inputs
- ✅ Service-flow specific
- ✅ Reduce boilerplate code

### Why Separate Pattern Packages?

1. **Clear Separation of Concerns:**
   - Components: Generic UI building blocks
   - Patterns: Service-specific flows

2. **Different Update Cycles:**
   - Components: Stable, infrequent updates
   - Patterns: Evolve with government service needs

3. **Optional Dependency:**
   - Core components: Required
   - Patterns: Optional (teams can build their own)

4. **Bundle Size Control:**
   - Import only patterns you need
   - Tree-shakeable exports

5. **Discoverability:**
   - Clear naming: "I need a sign-in flow" → use SignIn pattern
   - vs "How do I build a sign-in?" → compose Button, Input, Field

---

## Package Architecture

### Dependency Structure

```
@ux4g/react-patterns (or angular-patterns)
    ↓ depends on
@ux4g/react-core (or angular-core)
    ↓ depends on
@ux4g/styles
    ↓ depends on
@ux4g/tokens
```

**Key Principle:** Patterns never directly import tokens or create their own components. They compose existing core components only.

### Package Contents

```
@ux4g/react-patterns/
├── authentication/       # Sign In, Sign Up, OTP, etc.
├── forms/               # Save & Resume, Multi-Document Upload, etc.
├── submission/          # Confirmation, Notifications
├── tracking/            # Status Tracking
├── payment/             # Payment Summary, Fee Summary
└── types/               # Shared TypeScript types
```

---

## Pattern Catalog

### Priority 1: Authentication (6 patterns)

| Pattern | Purpose | Dependencies |
|---------|---------|--------------|
| **Sign In** | Username/password login | Button, Input, Field, Label, ErrorText, Alert |
| **Sign Up** | User registration | Button, Input, Field, Label, ErrorText, HintText, Alert, Checkbox |
| **OTP Verification** | 6-digit OTP input and verification | Button, Alert |
| **Forgot Password** | Initiate password recovery | Button, Input, Field, Label, ErrorText, Alert, Radio |
| **Reset Password** | Set new password | Button, Input, Field, Label, ErrorText, HintText, Alert |
| **Account Recovery** | Multi-step account recovery | Button, Input, Field, Label, ErrorText, Alert, Stepper |

### Priority 2: Forms (3 patterns)

| Pattern | Purpose | Dependencies |
|---------|---------|--------------|
| **Save and Resume Later** | Auto-save form progress | Button, Alert, Dialog |
| **Multi-Document Upload** | Upload multiple document types | Button, FileUpload, Badge, Alert, Card |
| **Review and Confirm** | Final review before submission | Button, Card, Badge, Alert, Checkbox |

### Priority 3: Submission (2 patterns)

| Pattern | Purpose | Dependencies |
|---------|---------|--------------|
| **Submission Confirmation** | Success confirmation screen | Button, Alert, Badge, Card |
| **Notification Blocks** | Alerts and reminders | Alert, Badge, Button |

### Priority 4: Tracking (1 pattern)

| Pattern | Purpose | Dependencies |
|---------|---------|--------------|
| **Status Tracking** | Application status timeline | Badge, Card, Stepper, StatusTag |

### Priority 5: Payment (2 patterns)

| Pattern | Purpose | Dependencies |
|---------|---------|--------------|
| **Payment Summary** | Payment amount display | Card, Button, Badge |
| **Fee Summary** | Fee breakdown | Card, Badge |

**Total:** 14 patterns across 5 categories

---

## Pattern Design Principles

### 1. Composition Over Creation

❌ **Don't:** Create new components inside patterns
```tsx
// BAD - Pattern creates its own button
function SignIn() {
  return <button className="custom-button">Sign In</button>;
}
```

✅ **Do:** Compose existing core components
```tsx
// GOOD - Pattern uses core Button component
import { Button } from '@ux4g/react-core';

function SignIn() {
  return <Button variant="primary">Sign In</Button>;
}
```

### 2. Props for Business Logic

❌ **Don't:** Make API calls or manage global state
```tsx
// BAD - Pattern makes API calls
function SignIn() {
  const handleSubmit = async () => {
    await fetch('/api/auth/signin', { ... });
  };
}
```

✅ **Do:** Accept handlers via props
```tsx
// GOOD - Pattern accepts handler
function SignIn({ onSignIn }) {
  const handleSubmit = async () => {
    await onSignIn(credentials);
  };
}
```

### 3. Standardized Interfaces

All patterns use consistent result types:

```typescript
// Authentication result
interface AuthenticationResult {
  success: boolean;
  userId?: string;
  token?: string;
  error?: string;
  redirectUrl?: string;
}

// OTP verification result
interface OTPVerificationResult {
  verified: boolean;
  error?: string;
  token?: string;
}

// Document upload result
interface DocumentUploadResult {
  documentId: string;
  filename: string;
  size: number;
  uploadedAt: Date;
  url?: string;
}
```

This ensures:
- Predictable APIs
- Easy testing
- Simple integration

### 4. Configuration Over Code

❌ **Don't:** Hard-code behavior
```tsx
// BAD - Fixed behavior
function SignIn() {
  return (
    <>
      <Input /> {/* Always shows username */}
      <Input /> {/* Always shows password */}
      <Checkbox /> {/* Always shows remember me */}
    </>
  );
}
```

✅ **Do:** Make behavior configurable
```tsx
// GOOD - Configurable behavior
function SignIn({ showRememberMe, showSocialLogin }) {
  return (
    <>
      <Input />
      <Input />
      {showRememberMe && <Checkbox />}
      {showSocialLogin && <SocialButtons />}
    </>
  );
}
```

### 5. Accessibility by Default

All patterns include:
- ✅ ARIA attributes
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader support
- ✅ Error announcements
- ✅ Loading state indicators

### 6. Responsive Design

All patterns are:
- ✅ Mobile-first
- ✅ Tested on common viewports
- ✅ Touch-friendly (44px targets)
- ✅ Readable text sizes

---

## Pattern File Structure

### React Pattern

```
SignIn/
├── SignIn.tsx           # Component implementation
├── SignIn.css           # Pattern-specific styles
├── SignIn.test.tsx      # Unit tests
├── SignIn.stories.tsx   # Storybook stories (optional)
└── index.ts             # Public exports
```

**SignIn.tsx:**
```tsx
import React from 'react';
import { Button, Input, Field, Label, ErrorText, Alert } from '@ux4g/react-core';
import './SignIn.css';

export interface SignInProps {
  onSignIn: (credentials: SignInCredentials) => Promise<AuthenticationResult>;
  onForgotPassword?: () => void;
  // ... more props
}

export const SignIn: React.FC<SignInProps> = ({ onSignIn, ... }) => {
  // Pattern implementation
};
```

**SignIn.css:**
```css
/* Import base styles from core if needed */
@import '@ux4g/styles/components/forms.css';

/* Pattern-specific layout */
.ux4g-pattern-signin {
  /* Layout styles */
}

.ux4g-pattern-signin__container {
  /* Container styles */
}
```

### Angular Pattern

```
sign-in/
├── sign-in.component.ts    # Component implementation
├── sign-in.component.html  # Template
├── sign-in.component.css   # Pattern-specific styles
├── sign-in.component.spec.ts # Unit tests
└── index.ts                # Public exports
```

**sign-in.component.ts:**
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent, InputComponent, FieldComponent, LabelComponent, ErrorTextComponent, AlertComponent } from '@ux4g/angular-core';

@Component({
  selector: 'ux4g-pattern-signin',
  standalone: true,
  imports: [ButtonComponent, InputComponent, ...],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  @Input() showRememberMe: boolean = true;
  @Output() signIn = new EventEmitter<SignInCredentials>();
  // ... more inputs/outputs
}
```

---

## React vs Angular Pattern Parity

Both packages maintain **API parity** wherever possible:

### Props/Inputs

| Concept | React | Angular |
|---------|-------|---------|
| Pattern name | `SignIn` | `SignInComponent` |
| Configuration | `showRememberMe={true}` | `[showRememberMe]="true"` |
| Event handlers | `onSignIn={handler}` | `(signIn)="handler($event)"` |
| Branding | `branding={{ logo: '/logo.png' }}` | `[branding]="brandingConfig"` |

### Result Types

Both use identical TypeScript interfaces:

```typescript
// Shared across React and Angular
interface AuthenticationResult {
  success: boolean;
  userId?: string;
  token?: string;
  error?: string;
  redirectUrl?: string;
}
```

### Pattern Names

| Pattern | React Selector | Angular Selector |
|---------|----------------|------------------|
| Sign In | `<SignIn />` | `<ux4g-pattern-signin></ux4g-pattern-signin>` |
| OTP Verification | `<OTPVerification />` | `<ux4g-pattern-otp-verification></ux4g-pattern-otp-verification>` |
| Multi-Document Upload | `<MultiDocumentUpload />` | `<ux4g-pattern-multi-document-upload></ux4g-pattern-multi-document-upload>` |

---

## Pattern Naming Conventions

### File Naming

**React:**
- Component: `PascalCase.tsx` (e.g., `SignIn.tsx`)
- CSS: `PascalCase.css` (e.g., `SignIn.css`)
- Folder: `PascalCase/` (e.g., `SignIn/`)

**Angular:**
- Component: `kebab-case.component.ts` (e.g., `sign-in.component.ts`)
- Template: `kebab-case.component.html`
- CSS: `kebab-case.component.css`
- Folder: `kebab-case/` (e.g., `sign-in/`)

### CSS Class Naming

Both use BEM methodology with `ux4g-pattern-` prefix:

```css
.ux4g-pattern-signin { }
.ux4g-pattern-signin__container { }
.ux4g-pattern-signin__header { }
.ux4g-pattern-signin__title { }
.ux4g-pattern-signin__form { }
.ux4g-pattern-signin--loading { }
```

### Export Naming

**React:**
```typescript
export { SignIn, type SignInProps } from './SignIn/SignIn';
```

**Angular:**
```typescript
export { SignInComponent } from './sign-in/sign-in.component';
```

---

## Pattern Categories

### Category: Authentication

**Path:** `@ux4g/react-patterns/authentication` or `@ux4g/angular-patterns/authentication`

**Purpose:** User authentication flows

**Patterns:**
- Sign In
- Sign Up
- OTP Verification
- Forgot Password
- Reset Password
- Account Recovery

### Category: Forms

**Path:** `@ux4g/react-patterns/forms` or `@ux4g/angular-patterns/forms`

**Purpose:** Form management and data collection

**Patterns:**
- Save and Resume Later
- Multi-Document Upload
- Review and Confirm

### Category: Submission

**Path:** `@ux4g/react-patterns/submission` or `@ux4g/angular-patterns/submission`

**Purpose:** Submission confirmations and notifications

**Patterns:**
- Submission Confirmation
- Notification Blocks

### Category: Tracking

**Path:** `@ux4g/react-patterns/tracking` or `@ux4g/angular-patterns/tracking`

**Purpose:** Application status tracking

**Patterns:**
- Status Tracking

### Category: Payment

**Path:** `@ux4g/react-patterns/payment` or `@ux4g/angular-patterns/payment`

**Purpose:** Payment and fee displays

**Patterns:**
- Payment Summary
- Fee Summary

---

## Usage Patterns

### Basic Usage

```tsx
// React
import { SignIn } from '@ux4g/react-patterns/authentication';

<SignIn
  onSignIn={handleSignIn}
  onForgotPassword={() => navigate('/forgot-password')}
/>
```

```typescript
// Angular
import { SignInComponent } from '@ux4g/angular-patterns/authentication';

@Component({
  imports: [SignInComponent],
  template: `
    <ux4g-pattern-signin
      (signIn)="handleSignIn($event)"
      (forgotPassword)="navigate('/forgot-password')"
    ></ux4g-pattern-signin>
  `
})
```

### Multi-Pattern Flow

```tsx
// React - Combining patterns
function AuthFlow() {
  const [step, setStep] = useState('signin');

  switch (step) {
    case 'signin':
      return <SignIn onSignIn={...} onNext={() => setStep('otp')} />;
    case 'otp':
      return <OTPVerification onVerify={...} onBack={() => setStep('signin')} />;
    default:
      return null;
  }
}
```

```typescript
// Angular - Combining patterns
@Component({
  template: `
    <ux4g-pattern-signin
      *ngIf="step === 'signin'"
      (signIn)="handleSignIn($event)"
      (next)="step = 'otp'"
    ></ux4g-pattern-signin>

    <ux4g-pattern-otp-verification
      *ngIf="step === 'otp'"
      (verify)="handleVerify($event)"
      (back)="step = 'signin'"
    ></ux4g-pattern-otp-verification>
  `
})
```

---

## Customization Strategy

### Level 1: Props/Inputs (Recommended)

```tsx
// React
<SignIn
  title="Custom Title"
  showRememberMe={false}
  branding={{ logo: '/logo.png' }}
/>
```

### Level 2: CSS Override

```css
/* Custom styles */
.ux4g-pattern-signin__container {
  max-width: 600px;
  box-shadow: none;
}
```

### Level 3: Fork Pattern (Last Resort)

If a pattern doesn't meet your needs:
1. Copy pattern source code
2. Modify as needed
3. Maintain as custom pattern

---

## Testing Strategy

### Pattern Tests Should Cover:

1. **Props/Inputs:**
   - Default values
   - Prop validation
   - Conditional rendering based on props

2. **User Interactions:**
   - Form submission
   - Button clicks
   - Input validation
   - Error handling

3. **Accessibility:**
   - ARIA attributes
   - Keyboard navigation
   - Focus management
   - Screen reader announcements

4. **States:**
   - Loading states
   - Error states
   - Success states
   - Empty states

### Example Test (React):

```tsx
describe('SignIn Pattern', () => {
  it('should call onSignIn with credentials', async () => {
    const onSignIn = jest.fn().mockResolvedValue({ success: true });
    render(<SignIn onSignIn={onSignIn} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(onSignIn).toHaveBeenCalledWith({
        username: 'testuser',
        password: 'password123',
        rememberMe: false,
      });
    });
  });

  it('should display error message on failed sign in', async () => {
    const onSignIn = jest.fn().mockResolvedValue({
      success: false,
      error: 'Invalid credentials',
    });
    render(<SignIn onSignIn={onSignIn} />);

    // ... submit form

    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });
  });
});
```

---

## Version Strategy

### Semantic Versioning

- **Major (1.0.0):** Breaking changes to pattern APIs
- **Minor (0.1.0):** New patterns added
- **Patch (0.0.1):** Bug fixes, styling updates

### Deprecation Policy

When deprecating a pattern:
1. Mark as deprecated in current version
2. Provide migration guide
3. Remove in next major version

---

## Documentation Requirements

Each pattern must have:

1. **API Documentation:**
   - All props/inputs with descriptions
   - All events/outputs
   - TypeScript types
   - Default values

2. **Usage Examples:**
   - Basic usage
   - Advanced usage
   - Integration with APIs
   - Error handling

3. **Accessibility Notes:**
   - Keyboard shortcuts
   - Screen reader behavior
   - ARIA attributes

4. **Customization Guide:**
   - How to override styles
   - How to customize content
   - How to extend behavior

---

## Summary

Pattern packages provide:

✅ **14 high-priority patterns** for common government service flows  
✅ **Composed from core components** - no duplication  
✅ **No business logic** - patterns handle UI only  
✅ **Consistent APIs** across React and Angular  
✅ **Fully customizable** via props/inputs  
✅ **Accessible by default** - WCAG 2.1 Level AA  
✅ **TypeScript support** - complete type definitions  
✅ **Well-documented** - API docs, examples, guides

Pattern packages sit above core component packages and provide pre-composed flows that dramatically reduce boilerplate code for common government service scenarios while remaining flexible enough to customize for specific needs.
