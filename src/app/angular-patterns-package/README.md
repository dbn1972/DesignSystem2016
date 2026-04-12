# @ux4g/angular-patterns

Reusable Angular patterns for common government service flows in the UX4G Design System.

[![npm version](https://img.shields.io/npm/v/@ux4g/angular-patterns.svg)](https://www.npmjs.com/package/@ux4g/angular-patterns)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## What are Patterns?

Patterns are **pre-composed assemblies** of core components that implement complete user flows. Unlike individual components (buttons, inputs), patterns represent entire screens or multi-step processes commonly found in government services.

**Pattern ≠ Component**

| Component | Pattern |
|-----------|---------|
| ButtonComponent | SignInComponent (uses ButtonComponent, InputComponent, FieldComponent, etc.) |
| InputComponent | OTPVerificationComponent (uses ButtonComponent, custom OTP inputs) |
| CardComponent | StatusTrackingComponent (uses CardComponent, BadgeComponent, StepperComponent) |

---

## Features

✅ **14 High-Priority Patterns** - Authentication, forms, submission, tracking, payment  
✅ **Composed from Core Components** - Built using `@ux4g/angular-core`  
✅ **No Business Logic** - Patterns handle UI only, you provide data/handlers  
✅ **Fully Customizable** - Inputs for behavior, content, and branding  
✅ **Accessibility-First** - WCAG 2.1 Level AA compliant  
✅ **TypeScript** - Complete type safety  
✅ **Standalone Components** - Modern Angular 18+ architecture  
✅ **Token-Based Styling** - Uses `@ux4g/tokens` and `@ux4g/styles`  
✅ **Responsive** - Mobile-first design

---

## Installation

```bash
npm install @ux4g/angular-patterns @ux4g/angular-core @ux4g/tokens @ux4g/styles
```

### Peer Dependencies

```bash
npm install @angular/common@^18.0.0 @angular/core@^18.0.0 @angular/forms@^18.0.0
```

---

## Quick Start

### 1. Import Pattern

```typescript
import { SignInComponent } from '@ux4g/angular-patterns/authentication';
```

### 2. Add to Component

```typescript
import { Component } from '@angular/core';
import { SignInComponent } from '@ux4g/angular-patterns/authentication';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignInComponent],
  template: `
    <ux4g-pattern-signin
      [showRememberMe]="true"
      [branding]="brandingConfig"
      (signIn)="handleSignIn($event)"
      (forgotPassword)="handleForgotPassword()"
      (signUp)="handleSignUp()"
    ></ux4g-pattern-signin>
  `
})
export class LoginPageComponent {
  brandingConfig = {
    logo: '/logo.png',
    serviceName: 'Digital India Services'
  };

  async handleSignIn(credentials: SignInCredentials) {
    const result = await this.authService.signIn(credentials);
    
    if (result.success) {
      this.router.navigate(['/dashboard']);
    }
    
    return result;
  }

  handleForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  handleSignUp() {
    this.router.navigate(['/register']);
  }
}
```

---

## Available Patterns

### Authentication (6 patterns)

```typescript
import {
  SignInComponent,
  SignUpComponent,
  OTPVerificationComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  AccountRecoveryComponent,
} from '@ux4g/angular-patterns/authentication';
```

**Examples:**
- Complete sign-in form with social login
- Registration with password validation
- OTP verification with resend timer
- Password reset flow
- Multi-step account recovery

### Forms (3 patterns)

```typescript
import {
  SaveAndResumeLaterComponent,
  MultiDocumentUploadComponent,
  ReviewAndConfirmComponent,
} from '@ux4g/angular-patterns/forms';
```

**Examples:**
- Auto-save and resume functionality
- Multi-document upload with validation
- Review screen before submission

### Submission (2 patterns)

```typescript
import {
  SubmissionConfirmationComponent,
  NotificationBlocksComponent,
} from '@ux4g/angular-patterns/submission';
```

**Examples:**
- Confirmation screen with reference number
- Notification/reminder widgets

### Tracking (1 pattern)

```typescript
import {
  StatusTrackingComponent,
} from '@ux4g/angular-patterns/tracking';
```

**Examples:**
- Application status timeline

### Payment (2 patterns)

```typescript
import {
  PaymentSummaryComponent,
  FeeSummaryComponent,
} from '@ux4g/angular-patterns/payment';
```

**Examples:**
- Payment amount summary
- Fee breakdown display

---

## Usage Examples

### Sign In Pattern

```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignInComponent } from '@ux4g/angular-patterns/authentication';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignInComponent],
  template: `
    <ux4g-pattern-signin
      [showRememberMe]="true"
      [showMobileLogin]="true"
      [branding]="branding"
      [legalLinks]="legalLinks"
      (signIn)="handleSignIn($event)"
      (forgotPassword)="navigate('/forgot-password')"
      (signUp)="navigate('/register')"
    ></ux4g-pattern-signin>
  `
})
export class LoginPageComponent {
  branding = {
    logo: '/government-logo.png',
    logoAlt: 'Government of India',
    serviceName: 'Citizen Services Portal'
  };

  legalLinks = {
    termsUrl: '/terms',
    privacyUrl: '/privacy'
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async handleSignIn(credentials: SignInCredentials): Promise<AuthenticationResult> {
    try {
      const response = await this.authService.login({
        username: credentials.username,
        password: credentials.password,
        rememberMe: credentials.rememberMe,
      });

      if (response.success) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
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
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
```

### OTP Verification Pattern

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OTPVerificationComponent } from '@ux4g/angular-patterns/authentication';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [OTPVerificationComponent],
  template: `
    <ux4g-pattern-otp-verification
      [recipient]="maskedMobile"
      [otpLength]="6"
      [resendTimeout]="30"
      (verify)="handleVerify($event)"
      (resend)="handleResend()"
      (cancel)="handleCancel()"
    ></ux4g-pattern-otp-verification>
  `
})
export class VerifyOTPPageComponent implements OnInit {
  mobile: string = '';
  maskedMobile: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.mobile = this.route.snapshot.queryParams['mobile'] || '';
    this.maskedMobile = `+91 ******* ${this.mobile.slice(-3)}`;
  }

  async handleVerify(otp: string): Promise<OTPVerificationResult> {
    const result = await this.authService.verifyOTP({
      mobile: this.mobile,
      otp,
    });

    if (result.verified) {
      this.router.navigate(['/dashboard']);
    }

    return {
      verified: result.verified,
      token: result.token,
      error: result.error,
    };
  }

  async handleResend(): Promise<void> {
    await this.authService.resendOTP({ mobile: this.mobile });
  }

  handleCancel() {
    this.router.navigate(['/login']);
  }
}
```

### Multi-Document Upload Pattern

```typescript
import { Component } from '@angular/core';
import { MultiDocumentUploadComponent } from '@ux4g/angular-patterns/forms';
import { DocumentService } from './services/document.service';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [MultiDocumentUploadComponent],
  template: `
    <ux4g-pattern-multi-document-upload
      [documentTypes]="documentTypes"
      [maxFileSize]="maxFileSize"
      [acceptedFormats]="acceptedFormats"
      (upload)="handleUpload($event)"
      (delete)="handleDelete($event)"
    ></ux4g-pattern-multi-document-upload>
  `
})
export class DocumentsPageComponent {
  maxFileSize = 5 * 1024 * 1024; // 5MB
  acceptedFormats = ['.jpg', '.png', '.pdf'];

  documentTypes = [
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

  constructor(private documentService: DocumentService) {}

  async handleUpload(event: { file: File; documentType: string }): Promise<DocumentUploadResult> {
    const formData = new FormData();
    formData.append('file', event.file);
    formData.append('type', event.documentType);

    const result = await this.documentService.upload(formData);

    return {
      documentId: result.id,
      filename: event.file.name,
      size: event.file.size,
      uploadedAt: new Date(result.uploadedAt),
      url: result.url,
    };
  }

  async handleDelete(documentId: string): Promise<void> {
    await this.documentService.delete(documentId);
  }
}
```

### Status Tracking Pattern

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatusTrackingComponent } from '@ux4g/angular-patterns/tracking';
import { ApplicationService } from './services/application.service';

@Component({
  selector: 'app-track-application',
  standalone: true,
  imports: [StatusTrackingComponent],
  template: `
    <ux4g-pattern-status-tracking
      [referenceNumber]="referenceNumber"
      [statusEntries]="statusEntries"
      [currentStatus]="currentStatus"
      [showTimeline]="true"
      (refresh)="fetchStatus()"
    ></ux4g-pattern-status-tracking>
  `
})
export class TrackApplicationPageComponent implements OnInit {
  referenceNumber: string = '';
  statusEntries: StatusEntry[] = [];
  currentStatus: ApplicationStatus = 'submitted';

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService
  ) {}

  ngOnInit() {
    this.referenceNumber = this.route.snapshot.params['referenceNumber'];
    this.fetchStatus();
  }

  async fetchStatus() {
    const data = await this.applicationService.getStatus(this.referenceNumber);
    this.statusEntries = data.timeline;
    this.currentStatus = data.currentStatus;
  }
}
```

---

## Pattern Composition

### Patterns vs Components

**Components** (from `@ux4g/angular-core`):
- Single-purpose UI elements
- Generic and reusable
- No business logic
- Examples: ButtonComponent, InputComponent, CardComponent

**Patterns** (from `@ux4g/angular-patterns`):
- Multi-component assemblies
- Specific user flows
- Accept business logic via inputs/outputs
- Examples: SignInComponent, OTPVerificationComponent, StatusTrackingComponent

### How Patterns Work

```typescript
// Pattern internally uses core components
@Component({
  selector: 'ux4g-pattern-signin',
  standalone: true,
  imports: [ButtonComponent, InputComponent, FieldComponent, LabelComponent],
  template: `
    <div class="ux4g-pattern-signin">
      <ux4g-field>
        <ux4g-label>Username</ux4g-label>
        <ux4g-input type="text"></ux4g-input>
      </ux4g-field>
      <ux4g-field>
        <ux4g-label>Password</ux4g-label>
        <ux4g-input type="password"></ux4g-input>
      </ux4g-field>
      <ux4g-button (clicked)="handleSignIn()">Sign In</ux4g-button>
    </div>
  `
})
export class SignInComponent {
  @Output() signIn = new EventEmitter<SignInCredentials>();
  // Pattern handles UI, emits events for parent to handle
}
```

You provide:
- API integration (via event handlers)
- Navigation (via event handlers)
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

```typescript
<ux4g-pattern-signin
  title="Employee Portal"
  subtitle="Sign in with your employee credentials"
  [branding]="{
    logo: '/company-logo.png',
    serviceName: 'Internal Services'
  }"
></ux4g-pattern-signin>
```

### Behavior Customization

```typescript
<ux4g-pattern-signin
  [showRememberMe]="false"
  [showSocialLogin]="true"
  [socialProviders]="['aadhaar']"
  [showMobileLogin]="true"
></ux4g-pattern-signin>
```

### Style Customization

```typescript
<ux4g-pattern-signin
  className="custom-signin-page"
></ux4g-pattern-signin>
```

```css
/* styles.css */
.custom-signin-page .ux4g-pattern-signin__container {
  max-width: 600px;
  box-shadow: none;
}
```

---

## TypeScript Support

All patterns have complete TypeScript types:

```typescript
import type {
  SignInCredentials,
  AuthenticationResult,
  OTPVerificationResult,
  DocumentUploadResult,
  UploadError,
  ApplicationStatus,
  StatusEntry,
  PaymentDetails,
  FeeItem,
} from '@ux4g/angular-patterns';
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

- [Pattern Catalog](https://ux4g.gov.in/patterns) - Complete pattern specifications
- [API Reference](https://ux4g.gov.in/patterns) - Input/Output documentation
- [Package README](./README.md) - Real-world usage examples
- [Migration Guide](https://ux4g.gov.in/patterns) - Upgrading from older versions

---

## Related Packages

- **@ux4g/angular-core** - Base Angular components
- **@ux4g/tokens** - Design tokens
- **@ux4g/styles** - CSS foundation
- **@ux4g/react-patterns** - React version of patterns

---

## Contributing

See [CONTRIBUTING_GUIDELINES_FEATURE.md](../../../CONTRIBUTING_GUIDELINES_FEATURE.md) for development setup and contribution guidelines.

---

## License

MIT © UX4G Team

---

## Support

- 📧 Email: support@ux4g.gov.in
- 🐛 Issues: [GitHub Issues](https://github.com/ux4g/angular-patterns/issues)
- 📚 Docs: [ux4g.gov.in/patterns](https://ux4g.gov.in/patterns)
