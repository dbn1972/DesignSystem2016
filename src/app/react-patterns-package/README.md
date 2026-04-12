# @ux4g/react-patterns

Reusable React patterns for common government service flows in the UX4G Design System.

[![npm version](https://img.shields.io/npm/v/@ux4g/react-patterns.svg)](https://www.npmjs.com/package/@ux4g/react-patterns)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## What are Patterns?

Patterns are **pre-composed assemblies** of core components that implement complete user flows. Unlike individual components (buttons, inputs), patterns represent entire screens or multi-step processes commonly found in government services.

**Pattern ≠ Component**

| Component | Pattern |
|-----------|---------|
| Button | Sign In (uses Button, Input, Field, Label, etc.) |
| Input | OTP Verification (uses Button, custom OTP inputs) |
| Card | Status Tracking (uses Card, Badge, Stepper) |
| FileUpload | Multi-Document Upload (uses FileUpload, Card, Badge, Alert) |

---

## Features

✅ **14 High-Priority Patterns** - Authentication, forms, submission, tracking, payment  
✅ **Composed from Core Components** - Built using `@ux4g/react-core`  
✅ **No Business Logic** - Patterns handle UI only, you provide data/handlers  
✅ **Fully Customizable** - Props for behavior, content, and branding  
✅ **Accessibility-First** - WCAG 2.1 Level AA compliant  
✅ **TypeScript** - Complete type safety  
✅ **Token-Based Styling** - Uses `@ux4g/tokens` and `@ux4g/styles`  
✅ **Responsive** - Mobile-first design

---

## Installation

```bash
npm install @ux4g/react-patterns @ux4g/react-core @ux4g/tokens @ux4g/styles
```

### Peer Dependencies

```bash
npm install react@^18.0.0 react-dom@^18.0.0
```

---

## Quick Start

### 1. Import Pattern

```tsx
import { SignIn } from '@ux4g/react-patterns/authentication';
```

### 2. Implement Business Logic

```tsx
const handleSignIn = async (credentials) => {
  // Your API call
  const response = await fetch('/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
  
  const result = await response.json();
  
  // Return standardized result
  return {
    success: result.authenticated,
    userId: result.user?.id,
    token: result.token,
    error: result.error,
    redirectUrl: result.redirectUrl,
  };
};
```

### 3. Use Pattern

```tsx
function LoginPage() {
  return (
    <SignIn
      onSignIn={handleSignIn}
      onForgotPassword={() => navigate('/forgot-password')}
      onSignUp={() => navigate('/register')}
      showRememberMe
      branding={{
        logo: '/logo.png',
        serviceName: 'Digital India Services'
      }}
    />
  );
}
```

---

## Available Patterns

### Authentication (6 patterns)

```tsx
import {
  SignIn,
  SignUp,
  OTPVerification,
  ForgotPassword,
  ResetPassword,
  AccountRecovery,
} from '@ux4g/react-patterns/authentication';
```

**Examples:**
- Complete sign-in form with social login
- Registration with password validation
- OTP verification with resend timer
- Password reset flow
- Multi-step account recovery

### Forms (3 patterns)

```tsx
import {
  SaveAndResumeLater,
  MultiDocumentUpload,
  ReviewAndConfirm,
} from '@ux4g/react-patterns/forms';
```

**Examples:**
- Auto-save and resume functionality
- Multi-document upload with validation
- Review screen before submission

### Submission (2 patterns)

```tsx
import {
  SubmissionConfirmation,
  NotificationBlocks,
} from '@ux4g/react-patterns/submission';
```

**Examples:**
- Confirmation screen with reference number
- Notification/reminder widgets

### Tracking (1 pattern)

```tsx
import {
  StatusTracking,
} from '@ux4g/react-patterns/tracking';
```

**Examples:**
- Application status timeline

### Payment (2 patterns)

```tsx
import {
  PaymentSummary,
  FeeSummary,
} from '@ux4g/react-patterns/payment';
```

**Examples:**
- Payment amount summary
- Fee breakdown display

---

## Usage Examples

### Sign In Pattern

```tsx
import { SignIn } from '@ux4g/react-patterns/authentication';

function LoginPage() {
  const navigate = useNavigate();

  const handleSignIn = async (credentials) => {
    try {
      const response = await authService.login({
        username: credentials.username,
        password: credentials.password,
        rememberMe: credentials.rememberMe,
      });

      if (response.success) {
        // Store token, update auth state, etc.
        localStorage.setItem('token', response.token);
        navigate('/dashboard');
      }

      return {
        success: response.success,
        userId: response.userId,
        token: response.token,
        error: response.error,
      };
    } catch (error) {
      return {
        success: false,
        error: 'An unexpected error occurred',
      };
    }
  };

  return (
    <SignIn
      onSignIn={handleSignIn}
      onForgotPassword={() => navigate('/forgot-password')}
      onSignUp={() => navigate('/register')}
      showRememberMe
      showMobileLogin
      branding={{
        logo: '/government-logo.png',
        logoAlt: 'Government of India',
        serviceName: 'Citizen Services Portal'
      }}
      legalLinks={{
        termsUrl: '/terms',
        privacyUrl: '/privacy'
      }}
    />
  );
}
```

### OTP Verification Pattern

```tsx
import { OTPVerification } from '@ux4g/react-patterns/authentication';

function VerifyOTPPage() {
  const { mobile } = useLocation().state;
  const navigate = useNavigate();

  const handleVerify = async (otp) => {
    const result = await authService.verifyOTP({
      mobile,
      otp,
    });

    if (result.verified) {
      navigate('/dashboard');
    }

    return {
      verified: result.verified,
      token: result.token,
      error: result.error,
    };
  };

  const handleResend = async () => {
    await authService.resendOTP({ mobile });
  };

  return (
    <OTPVerification
      recipient={`+91 ******* ${mobile.slice(-3)}`}
      onVerify={handleVerify}
      onResend={handleResend}
      onCancel={() => navigate(-1)}
      otpLength={6}
      resendTimeout={30}
    />
  );
}
```

### Multi-Document Upload Pattern

```tsx
import { MultiDocumentUpload } from '@ux4g/react-patterns/forms';

function DocumentsPage() {
  const documentTypes = [
    {
      id: 'aadhaar',
      label: 'Aadhaar Card',
      required: true,
      description: 'Upload front and back of your Aadhaar card',
      maxFiles: 2,
      acceptedFormats: ['.jpg', '.png', '.pdf'],
    },
    {
      id: 'pan',
      label: 'PAN Card',
      required: true,
      maxFiles: 1,
      acceptedFormats: ['.jpg', '.png', '.pdf'],
    },
    {
      id: 'address-proof',
      label: 'Address Proof',
      required: false,
      maxFiles: 1,
    },
  ];

  const handleUpload = async (file, documentType) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', documentType);

    const response = await fetch('/api/documents/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    return {
      documentId: result.id,
      filename: file.name,
      size: file.size,
      uploadedAt: new Date(result.uploadedAt),
      url: result.url,
    };
  };

  const handleDelete = async (documentId) => {
    await fetch(`/api/documents/${documentId}`, {
      method: 'DELETE',
    });
  };

  return (
    <MultiDocumentUpload
      documentTypes={documentTypes}
      onUpload={handleUpload}
      onDelete={handleDelete}
      maxFileSize={5 * 1024 * 1024} // 5MB
      acceptedFormats={['.jpg', '.png', '.pdf']}
    />
  );
}
```

### Status Tracking Pattern

```tsx
import { StatusTracking } from '@ux4g/react-patterns/tracking';

function TrackApplicationPage() {
  const { referenceNumber } = useParams();
  const [statusData, setStatusData] = useState(null);

  useEffect(() => {
    fetchStatus();
  }, [referenceNumber]);

  const fetchStatus = async () => {
    const response = await fetch(`/api/applications/${referenceNumber}/status`);
    const data = await response.json();
    setStatusData(data);
  };

  if (!statusData) return <div>Loading...</div>;

  return (
    <StatusTracking
      referenceNumber={referenceNumber}
      statusEntries={statusData.timeline}
      currentStatus={statusData.currentStatus}
      onRefresh={fetchStatus}
      showTimeline
    />
  );
}
```

---

## Pattern Composition

### Patterns vs Components

**Components** (from `@ux4g/react-core`):
- Single-purpose UI elements
- Generic and reusable
- No business logic
- Examples: Button, Input, Card

**Patterns** (from `@ux4g/react-patterns`):
- Multi-component assemblies
- Specific user flows
- Accept business logic via props
- Examples: SignIn, OTPVerification, StatusTracking

### How Patterns Work

```tsx
// Pattern internally uses core components
function SignIn({ onSignIn, ...props }) {
  return (
    <div className="ux4g-pattern-signin">
      <Field>
        <Label>Username</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>Password</Label>
        <Input type="password" />
      </Field>
      <Button onClick={() => onSignIn(credentials)}>
        Sign In
      </Button>
    </div>
  );
}
```

You provide:
- API integration (`onSignIn`)
- Navigation (`onForgotPassword`)
- State management (if needed)
- Data fetching

Pattern provides:
- Complete UI layout
- Form validation
- Loading states
- Error handling UI
- Accessibility
- Responsive design

---

## Customization

### Content Customization

```tsx
<SignIn
  title="Employee Portal"
  subtitle="Sign in with your employee credentials"
  branding={{
    logo: '/company-logo.png',
    serviceName: 'Internal Services'
  }}
/>
```

### Behavior Customization

```tsx
<SignIn
  showRememberMe={false}
  showSocialLogin
  socialProviders={['aadhaar']}
  showMobileLogin
/>
```

### Style Customization

```tsx
<SignIn
  className="custom-signin-page"
  // Override via CSS
/>

// styles.css
.custom-signin-page .ux4g-pattern-signin__container {
  max-width: 600px;
  box-shadow: none;
}
```

---

## TypeScript Support

All patterns have complete TypeScript types:

```tsx
import type {
  SignInProps,
  SignInCredentials,
  AuthenticationResult,
  OTPVerificationProps,
  OTPVerificationResult,
  DocumentUploadResult,
  UploadError,
} from '@ux4g/react-patterns';
```

---

## Accessibility

All patterns are WCAG 2.1 Level AA compliant:

- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management
- ✅ ARIA attributes
- ✅ Error announcements
- ✅ Loading state announcements
- ✅ High contrast mode support

---

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

---

## Documentation

- [Pattern Catalog](./PATTERN_CATALOG.md) - Complete pattern specifications
- [Package Overview](./PACKAGE_OVERVIEW.md) - How to compose and customize patterns
- [Examples](https://ux4g.gov.in/patterns) - Real-world usage examples
- [Pattern Catalog](./PATTERN_CATALOG.md) - Upgrading from older versions

---

## Related Packages

- **@ux4g/react-core** - Base React components
- **@ux4g/tokens** - Design tokens
- **@ux4g/styles** - CSS foundation
- **@ux4g/angular-patterns** - Angular version of patterns

---

## Contributing

See [CONTRIBUTING_GUIDELINES_FEATURE.md](../../../CONTRIBUTING_GUIDELINES_FEATURE.md) for development setup and contribution guidelines.

---

## License

MIT © UX4G Team

---

## Support

- 📧 Email: support@ux4g.gov.in
- 🐛 Issues: [GitHub Issues](https://github.com/ux4g/react-patterns/issues)
- 📚 Docs: [ux4g.gov.in/patterns](https://ux4g.gov.in/patterns)
