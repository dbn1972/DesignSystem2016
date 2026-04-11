# @ux4g/react-patterns - Pattern Catalog

Complete catalog of reusable patterns for government service flows.

---

## Pattern Categories

| Category | Patterns | Count |
|----------|----------|-------|
| **Authentication** | Sign In, Sign Up, OTP Verification, Forgot Password, Reset Password, Account Recovery | 6 |
| **Forms** | Save and Resume Later, Multi-Document Upload, Review and Confirm | 3 |
| **Submission** | Submission Confirmation, Notification Blocks | 2 |
| **Tracking** | Status Tracking | 1 |
| **Payment** | Payment Summary, Fee Summary | 2 |

**Total:** 14 high-priority patterns

---

## Authentication Patterns

### Sign In

**Path:** `@ux4g/react-patterns/authentication`

**Dependencies:**
- Components: `Button`, `Input`, `Field`, `Label`, `ErrorText`, `Alert`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface SignInProps {
  onSignIn: (credentials: SignInCredentials) => Promise<AuthenticationResult>;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  showRememberMe?: boolean;
  showSocialLogin?: boolean;
  socialProviders?: ('google' | 'facebook' | 'aadhaar')[];
  title?: string;
  subtitle?: string;
  showMobileLogin?: boolean;
  branding?: {
    logo?: string;
    logoAlt?: string;
    serviceName?: string;
  };
  legalLinks?: {
    termsUrl?: string;
    privacyUrl?: string;
  };
}

interface SignInCredentials {
  username: string;
  password: string;
  rememberMe?: boolean;
}

interface AuthenticationResult {
  success: boolean;
  userId?: string;
  token?: string;
  error?: string;
  redirectUrl?: string;
}
```

**States:**
- Idle (default)
- Loading (during sign-in)
- Error (validation or authentication failure)
- Success (authenticated)

**Accessibility:**
- ✅ ARIA labels on all form fields
- ✅ Error messages linked via `aria-describedby`
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader announcements for errors

**Usage:**
```tsx
import { SignIn } from '@ux4g/react-patterns/authentication';

function LoginPage() {
  const handleSignIn = async (credentials) => {
    const result = await authService.signIn(credentials);
    if (result.success) {
      navigate(result.redirectUrl || '/dashboard');
    }
    return result;
  };

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
      legalLinks={{
        termsUrl: '/terms',
        privacyUrl: '/privacy'
      }}
    />
  );
}
```

---

### Sign Up

**Path:** `@ux4g/react-patterns/authentication`

**Dependencies:**
- Components: `Button`, `Input`, `Field`, `Label`, `ErrorText`, `HintText`, `Alert`, `Checkbox`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface SignUpProps {
  onSignUp: (data: SignUpData) => Promise<SignUpResult>;
  onSignIn?: () => void;
  requireEmailVerification?: boolean;
  requireMobileVerification?: boolean;
  passwordRequirements?: PasswordRequirements;
  showSocialSignUp?: boolean;
  socialProviders?: ('google' | 'facebook' | 'aadhaar')[];
  title?: string;
  subtitle?: string;
  legalLinks?: {
    termsUrl: string;
    privacyUrl: string;
  };
}

interface SignUpData {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
}

interface SignUpResult {
  success: boolean;
  userId?: string;
  requiresVerification?: boolean;
  verificationMethod?: 'email' | 'mobile';
  error?: string;
}

interface PasswordRequirements {
  minLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumbers?: boolean;
  requireSpecialChars?: boolean;
}
```

**States:**
- Idle
- Validating
- Submitting
- Success (account created)
- Verification Required

**Accessibility:**
- ✅ Real-time password strength indicator
- ✅ Inline validation with ARIA live regions
- ✅ Required field indicators
- ✅ Terms acceptance with accessible checkbox

---

### OTP Verification

**Path:** `@ux4g/react-patterns/authentication`

**Dependencies:**
- Components: `Button`, `Alert`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface OTPVerificationProps {
  onVerify: (otp: string) => Promise<OTPVerificationResult>;
  onResend?: () => Promise<void>;
  onCancel?: () => void;
  otpLength?: number; // default: 6
  recipient?: string; // masked phone/email
  resendTimeout?: number; // seconds, default: 30
  title?: string;
  instruction?: string;
  verificationType?: 'mobile' | 'email';
}

interface OTPVerificationResult {
  verified: boolean;
  error?: string;
  token?: string;
}
```

**States:**
- Idle (waiting for OTP input)
- Verifying (checking OTP)
- Resending (resending OTP)
- Success (verified)
- Error (invalid OTP)

**Accessibility:**
- ✅ Auto-focus on first input
- ✅ Keyboard navigation (arrow keys, backspace)
- ✅ Paste support for full OTP
- ✅ Auto-submit when complete
- ✅ Timer announcements for screen readers
- ✅ Individual input labels

---

### Forgot Password

**Path:** `@ux4g/react-patterns/authentication`

**Dependencies:**
- Components: `Button`, `Input`, `Field`, `Label`, `ErrorText`, `Alert`, `Radio`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface ForgotPasswordProps {
  onSubmit: (identifier: string, method: 'email' | 'mobile') => Promise<ForgotPasswordResult>;
  onCancel?: () => void;
  supportedMethods?: ('email' | 'mobile')[];
  title?: string;
  instruction?: string;
}

interface ForgotPasswordResult {
  success: boolean;
  method: 'email' | 'mobile';
  recipient?: string; // masked
  error?: string;
}
```

**States:**
- Idle
- Submitting
- Success (recovery email/SMS sent)
- Error

**Accessibility:**
- ✅ Clear instructions
- ✅ Method selection with radio buttons
- ✅ Success message with next steps

---

### Reset Password

**Path:** `@ux4g/react-patterns/authentication`

**Dependencies:**
- Components: `Button`, `Input`, `Field`, `Label`, `ErrorText`, `HintText`, `Alert`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface ResetPasswordProps {
  onReset: (data: ResetPasswordData) => Promise<ResetPasswordResult>;
  token: string; // from email/SMS link
  passwordRequirements?: PasswordRequirements;
  title?: string;
  instruction?: string;
}

interface ResetPasswordData {
  newPassword: string;
  confirmPassword: string;
}

interface ResetPasswordResult {
  success: boolean;
  error?: string;
  redirectUrl?: string;
}
```

**States:**
- Idle
- Validating
- Submitting
- Success
- Error (token expired, passwords don't match, etc.)

**Accessibility:**
- ✅ Password strength indicator
- ✅ Real-time validation
- ✅ Clear success message with redirect

---

### Account Recovery

**Path:** `@ux4g/react-patterns/authentication`

**Dependencies:**
- Components: `Button`, `Input`, `Field`, `Label`, `ErrorText`, `Alert`, `Stepper`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface AccountRecoveryProps {
  onVerifyIdentity: (data: IdentityData) => Promise<VerificationResult>;
  onVerifyOTP: (otp: string) => Promise<OTPVerificationResult>;
  onResetPassword: (password: string) => Promise<ResetPasswordResult>;
  recoveryMethods?: ('email' | 'mobile' | 'securityQuestions')[];
  title?: string;
}

interface IdentityData {
  identifier: string; // email or mobile
  method: 'email' | 'mobile' | 'securityQuestions';
  answers?: string[]; // if security questions
}
```

**States:**
- Step 1: Identity Verification
- Step 2: OTP Verification
- Step 3: Password Reset
- Success

**Accessibility:**
- ✅ Multi-step wizard with progress indicator
- ✅ Step-by-step navigation
- ✅ Clear completion message

---

## Form Patterns

### Save and Resume Later

**Path:** `@ux4g/react-patterns/forms`

**Dependencies:**
- Components: `Button`, `Alert`, `Dialog`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface SaveAndResumeProps {
  onSave: (data: FormData) => Promise<SavedFormData>;
  onResume: (saveId: string) => Promise<FormData>;
  formData: Record<string, any>;
  autoSaveInterval?: number; // milliseconds
  showSaveButton?: boolean;
  showResumePrompt?: boolean;
}

interface SavedFormData {
  saveId: string;
  data: Record<string, any>;
  savedAt: Date;
  expiresAt?: Date;
  resumeToken?: string;
}
```

**States:**
- Idle
- Saving
- Saved (with confirmation)
- Resuming
- Auto-saving (background)

**Accessibility:**
- ✅ Save confirmation messages
- ✅ Auto-save status indicators
- ✅ Resume prompt with clear options

---

### Multi-Document Upload

**Path:** `@ux4g/react-patterns/forms`

**Dependencies:**
- Components: `Button`, `FileUpload`, `Badge`, `Alert`, `Card`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface MultiDocumentUploadProps {
  onUpload: (file: File, documentType: string) => Promise<DocumentUploadResult>;
  onDelete: (documentId: string) => Promise<void>;
  documentTypes: DocumentType[];
  maxFileSize?: number; // bytes
  acceptedFormats?: string[];
  maxFiles?: number;
  title?: string;
  instruction?: string;
}

interface DocumentType {
  id: string;
  label: string;
  required: boolean;
  description?: string;
  maxFiles?: number;
  acceptedFormats?: string[];
}

interface DocumentUploadResult {
  documentId: string;
  filename: string;
  size: number;
  uploadedAt: Date;
  url?: string;
}

interface UploadError {
  filename: string;
  reason: string;
  code?: string;
}
```

**States:**
- Idle
- Uploading (per file)
- Success (file uploaded)
- Error (upload failed, invalid file, etc.)

**Accessibility:**
- ✅ Drag-and-drop with keyboard alternative
- ✅ Upload progress announcements
- ✅ File list with delete options
- ✅ Clear error messages per file

---

### Review and Confirm

**Path:** `@ux4g/react-patterns/forms`

**Dependencies:**
- Components: `Button`, `Card`, `Badge`, `Alert`, `Checkbox`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface ReviewAndConfirmProps {
  onSubmit: () => Promise<SubmitResult>;
  onEdit: (section: string) => void;
  sections: ReviewSection[];
  confirmationRequired?: boolean;
  confirmationText?: string;
  title?: string;
  submitButtonText?: string;
  editableAfterSubmit?: boolean;
}

interface ReviewSection {
  id: string;
  title: string;
  editable: boolean;
  items: ReviewItem[];
}

interface ReviewItem {
  label: string;
  value: string | React.ReactNode;
  highlight?: boolean;
}

interface SubmitResult {
  success: boolean;
  error?: string;
  submissionId?: string;
}
```

**States:**
- Review
- Editing (navigated to section)
- Confirming
- Submitting
- Success

**Accessibility:**
- ✅ Grouped sections with headings
- ✅ Edit buttons with clear labels
- ✅ Confirmation checkbox
- ✅ Submit confirmation dialog

---

## Submission Patterns

### Submission Confirmation

**Path:** `@ux4g/react-patterns/submission`

**Dependencies:**
- Components: `Button`, `Alert`, `Badge`, `Card`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface SubmissionConfirmationProps {
  confirmation: SubmissionConfirmation;
  onDownloadReceipt?: () => Promise<void>;
  onTrackStatus?: () => void;
  onNewSubmission?: () => void;
  showSharingOptions?: boolean;
  title?: string;
}

interface SubmissionConfirmation {
  referenceNumber: string;
  submittedAt: Date;
  processingTimeDays?: number;
  trackingUrl?: string;
  receiptUrl?: string;
  instructions?: string[];
}
```

**States:**
- Display confirmation
- Downloading receipt
- Sharing (email, SMS)

**Accessibility:**
- ✅ Success message with reference number
- ✅ Clear next steps
- ✅ Download and share options

---

### Notification / Reminder Blocks

**Path:** `@ux4g/react-patterns/submission`

**Dependencies:**
- Components: `Alert`, `Badge`, `Button`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface NotificationBlockProps {
  notifications: Notification[];
  onDismiss?: (notificationId: string) => void;
  onAction?: (notificationId: string, actionId: string) => void;
  maxVisible?: number;
  allowDismiss?: boolean;
}

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'reminder';
  title: string;
  message: string;
  timestamp: Date;
  dismissible: boolean;
  actions?: NotificationAction[];
  priority?: 'low' | 'normal' | 'high';
}

interface NotificationAction {
  id: string;
  label: string;
  variant?: 'primary' | 'secondary';
}
```

**States:**
- Display notifications
- Dismissing
- Performing action

**Accessibility:**
- ✅ ARIA live regions for new notifications
- ✅ Dismissible with keyboard
- ✅ Priority-based display order

---

## Tracking Patterns

### Status Tracking

**Path:** `@ux4g/react-patterns/tracking`

**Dependencies:**
- Components: `Badge`, `Card`, `Stepper`, `StatusTag`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface StatusTrackingProps {
  referenceNumber: string;
  statusEntries: StatusEntry[];
  currentStatus: ApplicationStatus;
  onRefresh?: () => Promise<void>;
  showTimeline?: boolean;
  title?: string;
}

interface StatusEntry {
  status: ApplicationStatus;
  label: string;
  description?: string;
  timestamp: Date;
  current?: boolean;
  metadata?: Record<string, any>;
}

type ApplicationStatus =
  | 'draft'
  | 'submitted'
  | 'under-review'
  | 'pending-payment'
  | 'approved'
  | 'rejected'
  | 'completed'
  | 'cancelled';
```

**States:**
- Display status
- Refreshing (fetching latest)

**Accessibility:**
- ✅ Timeline with clear progression
- ✅ Current status highlighted
- ✅ Timestamp information

---

## Payment Patterns

### Payment Summary

**Path:** `@ux4g/react-patterns/payment`

**Dependencies:**
- Components: `Card`, `Button`, `Badge`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface PaymentSummaryProps {
  onProceedToPayment: () => Promise<void>;
  paymentDetails: PaymentDetails;
  transactionFee?: number;
  showBreakdown?: boolean;
  title?: string;
}

interface PaymentDetails {
  amount: number;
  currency?: string;
  method?: 'card' | 'upi' | 'netbanking' | 'wallet' | 'cash';
  transactionId?: string;
  status?: 'pending' | 'processing' | 'completed' | 'failed';
  timestamp?: Date;
}
```

**States:**
- Review summary
- Proceeding to payment gateway
- Payment in progress (external)

**Accessibility:**
- ✅ Clear amount display
- ✅ Fee breakdown
- ✅ Payment method selection

---

### Fee Summary

**Path:** `@ux4g/react-patterns/payment`

**Dependencies:**
- Components: `Card`, `Badge`
- Tokens: `@ux4g/tokens`
- Styles: `@ux4g/styles`

**Props:**
```typescript
interface FeeSummaryProps {
  fees: FeeItem[];
  showGST?: boolean;
  currency?: string;
  title?: string;
}

interface FeeItem {
  label: string;
  amount: number;
  isTax?: boolean;
  description?: string;
}
```

**States:**
- Display summary

**Accessibility:**
- ✅ Itemized fee list
- ✅ Total calculation
- ✅ Tax breakdown

---

## Pattern Composition Rules

1. **Single Responsibility:** Each pattern handles one complete flow
2. **No Business Logic:** Patterns don't make API calls or store data
3. **Composable:** Patterns use core components only
4. **Configurable:** Accept handlers and configuration via props
5. **Accessible:** All patterns are WCAG 2.1 Level AA compliant
6. **Responsive:** Mobile-first responsive design
7. **Token-Based:** Use design tokens for all styling
8. **Documented:** Complete TypeScript types and examples

---

## Usage Guidelines

### Import Patterns

```tsx
// Full import
import { SignIn, OTPVerification } from '@ux4g/react-patterns';

// Category import
import { SignIn, OTPVerification } from '@ux4g/react-patterns/authentication';

// Individual import
import { SignIn } from '@ux4g/react-patterns/authentication';
```

### Customize Patterns

```tsx
<SignIn
  // Required: implement business logic
  onSignIn={handleSignIn}
  
  // Optional: customize behavior
  showRememberMe
  showSocialLogin
  socialProviders={['aadhaar']}
  
  // Optional: customize content
  title="Government Portal Sign In"
  subtitle="Access your digital services"
  
  // Optional: add branding
  branding={{
    logo: '/govt-logo.png',
    serviceName: 'MyGov Services'
  }}
/>
```

### Combine Patterns

```tsx
function AuthFlow() {
  const [step, setStep] = useState<'signin' | 'otp'>('signin');
  const [tempToken, setTempToken] = useState('');

  if (step === 'signin') {
    return (
      <SignIn
        onSignIn={async (credentials) => {
          const result = await authService.signIn(credentials);
          if (result.success && result.requiresOTP) {
            setTempToken(result.tempToken);
            setStep('otp');
          }
          return result;
        }}
      />
    );
  }

  return (
    <OTPVerification
      recipient="+91 ******* 789"
      onVerify={async (otp) => {
        const result = await authService.verifyOTP(tempToken, otp);
        return result;
      }}
      onCancel={() => setStep('signin')}
    />
  );
}
```

---

## Summary

`@ux4g/react-patterns` provides **14 high-priority patterns** across **5 categories** for building complete government service flows with minimal code.

Each pattern:
- ✅ Composes core components from `@ux4g/react-core`
- ✅ Uses design tokens from `@ux4g/tokens`
- ✅ Implements complete accessibility
- ✅ Handles all UI states
- ✅ Accepts business logic via props
- ✅ Is fully customizable
- ✅ Includes TypeScript types
- ✅ Provides usage examples
