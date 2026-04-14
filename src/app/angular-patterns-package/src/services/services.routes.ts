/**
 * UX4G Angular Services — Route Configuration
 *
 * Usage:
 *   import { serviceRoutes } from '@ux4g/angular-patterns/services';
 *   const routes: Routes = [...serviceRoutes];
 */
import { Routes } from '@angular/router';

export const serviceRoutes: Routes = [
  {
    path: 'services',
    children: [
      // Auth
      { path: 'sign-in', loadComponent: () => import('./components/sign-in/sign-in.component').then(m => m.SignInComponent), title: 'Sign In' },
      { path: 'sign-up', loadComponent: () => import('./components/sign-up/sign-up.component').then(m => m.SignUpComponent), title: 'Create Account' },
      { path: 'verify-otp', loadComponent: () => import('./components/otp-verify/otp-verify.component').then(m => m.OtpVerifyComponent), title: 'Verify OTP' },
      { path: 'forgot-password', loadComponent: () => import('./components/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent), title: 'Forgot Password' },
      { path: 'auth-status', loadComponent: () => import('./components/auth-status/auth-status.component').then(m => m.AuthStatusComponent), title: 'Auth Status' },

      // Service Flow
      { path: 'overview', loadComponent: () => import('./components/service-blueprint/service-blueprint.component').then(m => m.ServiceBlueprintComponent), title: 'Service Blueprint' },
      { path: 'start', loadComponent: () => import('./components/application-start/application-start.component').then(m => m.ApplicationStartComponent), title: 'Start Application' },
      { path: 'eligibility', loadComponent: () => import('./components/eligibility/eligibility.component').then(m => m.EligibilityComponent), title: 'Eligibility Check' },

      // Forms
      { path: 'form/personal', loadComponent: () => import('./components/form-personal/form-personal.component').then(m => m.FormPersonalComponent), title: 'Personal Details' },
      { path: 'form/address', loadComponent: () => import('./components/form-address/form-address.component').then(m => m.FormAddressComponent), title: 'Address Details' },
      { path: 'form/additional', loadComponent: () => import('./components/form-additional/form-additional.component').then(m => m.FormAdditionalComponent), title: 'Additional Info' },
      { path: 'form/review', loadComponent: () => import('./components/form-review/form-review.component').then(m => m.FormReviewComponent), title: 'Form Review' },

      // Submission
      { path: 'document-upload', loadComponent: () => import('./components/document-upload/document-upload.component').then(m => m.DocumentUploadComponent), title: 'Upload Documents' },
      { path: 'review-summary', loadComponent: () => import('./components/review-summary/review-summary.component').then(m => m.ReviewSummaryComponent), title: 'Review Summary' },
      { path: 'declaration', loadComponent: () => import('./components/declaration/declaration.component').then(m => m.DeclarationComponent), title: 'Declaration' },

      // Payment
      { path: 'payment', loadComponent: () => import('./components/payment/payment.component').then(m => m.PaymentComponent), title: 'Payment' },
      { path: 'payment-receipt', loadComponent: () => import('./components/payment-receipt/payment-receipt.component').then(m => m.PaymentReceiptComponent), title: 'Payment Receipt' },

      // Post-Submission
      { path: 'status', loadComponent: () => import('./components/status-tracker/status-tracker.component').then(m => m.StatusTrackerComponent), title: 'Status Tracker' },
      { path: 'user-profile', loadComponent: () => import('./components/user-profile/user-profile.component').then(m => m.UserProfileComponent), title: 'User Profile' },

      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];
