import { Routes } from '@angular/router';

export const certificateRoutes: Routes = [
  {
    path: 'certificate-service',
    children: [
      // Landing
      { path: '', loadComponent: () => import('./pages/certificate-home/certificate-home.component').then(m => m.CertificateHomeComponent), title: 'Certificate Service' },

      // Pre-Application
      { path: 'start', loadComponent: () => import('./pages/cert-start/cert-start.component').then(m => m.CertStartComponent), title: 'Start Application' },
      { path: 'eligibility', loadComponent: () => import('./pages/cert-eligibility/cert-eligibility.component').then(m => m.CertEligibilityComponent), title: 'Eligibility Check' },
      { path: 'help', loadComponent: () => import('./pages/cert-help/cert-help.component').then(m => m.CertHelpComponent), title: 'Help & Support' },
      { path: 'document-guidelines', loadComponent: () => import('./pages/cert-document-guidelines/cert-document-guidelines.component').then(m => m.CertDocumentGuidelinesComponent), title: 'Document Guidelines' },
      { path: 'privacy-policy', loadComponent: () => import('./pages/cert-privacy-policy/cert-privacy-policy.component').then(m => m.CertPrivacyPolicyComponent), title: 'Privacy Policy' },

      // Authentication
      { path: 'sign-in', loadComponent: () => import('./pages/cert-sign-in/cert-sign-in.component').then(m => m.CertSignInComponent), title: 'Sign In' },
      { path: 'sign-up', loadComponent: () => import('./pages/cert-sign-up/cert-sign-up.component').then(m => m.CertSignUpComponent), title: 'Sign Up' },
      { path: 'verify-otp', loadComponent: () => import('./pages/cert-verify-otp/cert-verify-otp.component').then(m => m.CertVerifyOtpComponent), title: 'Verify OTP' },
      { path: 'forgot-password', loadComponent: () => import('./pages/cert-forgot-password/cert-forgot-password.component').then(m => m.CertForgotPasswordComponent), title: 'Forgot Password' },
      { path: 'session-timeout', loadComponent: () => import('./pages/cert-session-timeout/cert-session-timeout.component').then(m => m.CertSessionTimeoutComponent), title: 'Session Timeout' },

      // Application Forms
      { path: 'user-profile', loadComponent: () => import('./pages/cert-user-profile/cert-user-profile.component').then(m => m.CertUserProfileComponent), title: 'User Profile' },
      { path: 'form/personal', loadComponent: () => import('./pages/cert-form-personal/cert-form-personal.component').then(m => m.CertFormPersonalComponent), title: 'Personal Details' },
      { path: 'form/address', loadComponent: () => import('./pages/cert-form-address/cert-form-address.component').then(m => m.CertFormAddressComponent), title: 'Address Details' },
      { path: 'form/additional', loadComponent: () => import('./pages/cert-form-additional/cert-form-additional.component').then(m => m.CertFormAdditionalComponent), title: 'Additional Info' },
      { path: 'form/review', loadComponent: () => import('./pages/cert-form-review/cert-form-review.component').then(m => m.CertFormReviewComponent), title: 'Form Review' },

      // Submission
      { path: 'document-upload', loadComponent: () => import('./pages/cert-document-upload/cert-document-upload.component').then(m => m.CertDocumentUploadComponent), title: 'Document Upload' },
      { path: 'review-summary', loadComponent: () => import('./pages/cert-review-summary/cert-review-summary.component').then(m => m.CertReviewSummaryComponent), title: 'Review Summary' },
      { path: 'declaration', loadComponent: () => import('./pages/cert-declaration/cert-declaration.component').then(m => m.CertDeclarationComponent), title: 'Declaration' },

      // Payment
      { path: 'payment-summary', loadComponent: () => import('./pages/cert-payment-summary/cert-payment-summary.component').then(m => m.CertPaymentSummaryComponent), title: 'Payment' },
      { path: 'payment-receipt', loadComponent: () => import('./pages/cert-payment-receipt/cert-payment-receipt.component').then(m => m.CertPaymentReceiptComponent), title: 'Payment Receipt' },

      // Post-Submission
      { path: 'submission-success', loadComponent: () => import('./pages/cert-submission-success/cert-submission-success.component').then(m => m.CertSubmissionSuccessComponent), title: 'Submission Success' },
      { path: 'status-tracker', loadComponent: () => import('./pages/cert-status-tracker/cert-status-tracker.component').then(m => m.CertStatusTrackerComponent), title: 'Status Tracker' },
      { path: 'notifications', loadComponent: () => import('./pages/cert-notifications/cert-notifications.component').then(m => m.CertNotificationsComponent), title: 'Notifications' },
      { path: 'my-applications', loadComponent: () => import('./pages/cert-my-applications/cert-my-applications.component').then(m => m.CertMyApplicationsComponent), title: 'My Applications' },

      // Outcomes
      { path: 'issued', loadComponent: () => import('./pages/cert-issued/cert-issued.component').then(m => m.CertIssuedComponent), title: 'Certificate Issued' },
      { path: 'feedback', loadComponent: () => import('./pages/cert-feedback/cert-feedback.component').then(m => m.CertFeedbackComponent), title: 'Feedback' },
      { path: 'verification', loadComponent: () => import('./pages/cert-verification/cert-verification.component').then(m => m.CertVerificationComponent), title: 'Verify Certificate' },
      { path: 'correction-request', loadComponent: () => import('./pages/cert-correction-request/cert-correction-request.component').then(m => m.CertCorrectionRequestComponent), title: 'Correction Request' },
      { path: 'rejected', loadComponent: () => import('./pages/cert-rejected/cert-rejected.component').then(m => m.CertRejectedComponent), title: 'Application Rejected' },
      { path: 'appeal', loadComponent: () => import('./pages/cert-appeal/cert-appeal.component').then(m => m.CertAppealComponent), title: 'File Appeal' },
    ],
  },
];
