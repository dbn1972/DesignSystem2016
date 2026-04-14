/**
 * @ux4g/angular-patterns — Services Public API
 *
 * Standalone Angular components for government service flows.
 */

// Models
export * from './models/service.models';

// Mock API
export { MockApiService } from './mock-api/mock-api.service';

// Shared Layout
export { ServiceHeaderComponent } from './components/service-header/service-header.component';
export { ServiceFooterComponent } from './components/service-footer/service-footer.component';

// Auth Components
export { SignInComponent } from './components/sign-in/sign-in.component';
export { SignUpComponent } from './components/sign-up/sign-up.component';
export { OtpVerifyComponent } from './components/otp-verify/otp-verify.component';
export { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
export { AuthStatusComponent, AuthStatusType } from './components/auth-status/auth-status.component';

// Service Flow Components
export { ServiceBlueprintComponent } from './components/service-blueprint/service-blueprint.component';
export { ApplicationStartComponent } from './components/application-start/application-start.component';
export { FormPersonalComponent } from './components/form-personal/form-personal.component';
export { FormAddressComponent } from './components/form-address/form-address.component';
export { FormAdditionalComponent } from './components/form-additional/form-additional.component';
export { FormReviewComponent } from './components/form-review/form-review.component';
export { ReviewSummaryComponent } from './components/review-summary/review-summary.component';
export { DeclarationComponent } from './components/declaration/declaration.component';
export { UserProfileComponent } from './components/user-profile/user-profile.component';
export { PaymentReceiptComponent } from './components/payment-receipt/payment-receipt.component';

// Existing Components
export { EligibilityComponent } from './components/eligibility/eligibility.component';
export { DocumentUploadComponent } from './components/document-upload/document-upload.component';
export { PaymentComponent } from './components/payment/payment.component';
export { StatusTrackerComponent } from './components/status-tracker/status-tracker.component';

// Routes
export { serviceRoutes } from './services.routes';
