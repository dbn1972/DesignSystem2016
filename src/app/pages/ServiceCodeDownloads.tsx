import { ArrowLeft, Download, FileCode2, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router";

import certificateSignInCode from "./CertificateSignIn.tsx?raw";
import referenceSignInCode from "./ReferenceServiceSignIn.tsx?raw";
import certificateSignUpCode from "./CertificateSignUp.tsx?raw";
import referenceSignUpCode from "./ReferenceServiceSignUp.tsx?raw";
import certificateEligibilityCode from "./CertificateEligibility.tsx?raw";
import referenceEligibilityCode from "./ReferenceServiceEligibility.tsx?raw";
import certificateStartCode from "./CertificateStart.tsx?raw";
import referenceStartCode from "./ReferenceServiceStart.tsx?raw";
import certificateUserProfileCode from "./CertificateUserProfile.tsx?raw";
import referenceUserProfileCode from "./ReferenceServiceUserProfile.tsx?raw";
import certificateFormPersonalCode from "./CertificateFormPersonal.tsx?raw";
import referenceFormPersonalCode from "./ReferenceServiceFormPersonal.tsx?raw";
import certificateFormAddressCode from "./CertificateFormAddress.tsx?raw";
import referenceFormAddressCode from "./ReferenceServiceFormAddress.tsx?raw";
import certificateFormAdditionalCode from "./CertificateFormAdditional.tsx?raw";
import referenceFormAdditionalCode from "./ReferenceServiceFormAdditional.tsx?raw";
import certificateFormReviewCode from "./CertificateFormReview.tsx?raw";
import referenceFormReviewCode from "./ReferenceServiceFormReview.tsx?raw";
import certificateDocumentUploadCode from "./CertificateDocumentUpload.tsx?raw";
import referenceDocumentUploadCode from "./ReferenceServiceDocumentUpload.tsx?raw";
import certificateReviewSummaryCode from "./CertificateReviewSummary.tsx?raw";
import referenceReviewSummaryCode from "./ReferenceServiceReviewSummary.tsx?raw";
import certificateDeclarationCode from "./CertificateDeclaration.tsx?raw";
import referenceDeclarationCode from "./ReferenceServiceDeclaration.tsx?raw";
import certificatePaymentSummaryCode from "./CertificatePaymentSummary.tsx?raw";
import referencePaymentSummaryCode from "./ReferenceServicePaymentSummary.tsx?raw";
import certificatePaymentReceiptCode from "./CertificatePaymentReceipt.tsx?raw";
import referencePaymentReceiptCode from "./ReferenceServicePaymentReceipt.tsx?raw";
import certificateStatusTrackerCode from "./CertificateStatusTracker.tsx?raw";
import referenceStatusTrackerCode from "./ReferenceServiceStatusTracker.tsx?raw";
import certificateForgotPasswordCode from "./CertificateForgotPassword.tsx?raw";
import referenceForgotPasswordCode from "./ReferenceServiceForgotPassword.tsx?raw";
import certificateVerifyOtpCode from "./CertificateVerifyOTP.tsx?raw";
import referenceVerifyOtpCode from "./ReferenceServiceVerifyOTP.tsx?raw";
import certificateAuthStatusCode from "./CertificateSessionTimeout.tsx?raw";
import referenceAuthStatusCode from "./ReferenceServiceAuthStatus.tsx?raw";
import certificateIssuedCode from "./CertificateIssued.tsx?raw";
import certificateNotificationsCode from "./CertificateNotifications.tsx?raw";
import certificateOfficerDashboardCode from "./CertificateOfficerDashboard.tsx?raw";
import certificateOfficerCasesCode from "./CertificateOfficerCases.tsx?raw";
import certificateOfficerReviewCode from "./CertificateOfficerReview.tsx?raw";
import certificateMyApplicationsCode from "./CertificateMyApplications.tsx?raw";
import certificateVerificationCode from "./CertificateVerification.tsx?raw";
import certificateFeedbackCode from "./CertificateFeedback.tsx?raw";
import certificateCorrectionRequestCode from "./CertificateCorrectionRequest.tsx?raw";
import certificateRejectedCode from "./CertificateRejected.tsx?raw";
import certificateAppealCode from "./CertificateAppeal.tsx?raw";
import certificateHelpCode from "./CertificateHelp.tsx?raw";
import certificatePrivacyPolicyCode from "./CertificatePrivacyPolicy.tsx?raw";
import reusableSignInComponentCode from "../components/auth/SignInService.tsx?raw";
import reusableSignUpComponentCode from "../components/auth/SignUpService.tsx?raw";
import reusableForgotPasswordComponentCode from "../components/auth/ForgotPasswordService.tsx?raw";
import reusableOtpComponentCode from "../components/auth/OtpVerificationService.tsx?raw";
import reusableAuthStatusComponentCode from "../components/auth/AuthStatusService.tsx?raw";
import reusableEligibilityComponentCode from "../components/service/EligibilityService.tsx?raw";
import reusableStartComponentCode from "../components/service/ApplicationStartService.tsx?raw";
import reusableUserProfileComponentCode from "../components/service/UserProfileService.tsx?raw";
import reusablePersonalFormComponentCode from "../components/service/PersonalFormService.tsx?raw";
import reusableAddressFormComponentCode from "../components/service/AddressFormService.tsx?raw";
import reusableAdditionalFormComponentCode from "../components/service/AdditionalFormService.tsx?raw";
import reusableFormReviewComponentCode from "../components/service/FormReviewService.tsx?raw";
import reusableDocumentUploadComponentCode from "../components/service/DocumentUploadService.tsx?raw";
import reusableReviewSummaryComponentCode from "../components/service/ReviewSummaryService.tsx?raw";
import reusableDeclarationComponentCode from "../components/service/DeclarationService.tsx?raw";
import reusablePaymentSummaryComponentCode from "../components/service/PaymentSummaryService.tsx?raw";
import reusablePaymentReceiptComponentCode from "../components/service/PaymentReceiptService.tsx?raw";
import reusableStatusTrackerComponentCode from "../components/service/StatusTrackerService.tsx?raw";
import reusableSignInServiceCode from "../services/signInService.ts?raw";
import reusableSignUpServiceCode from "../services/signUpService.ts?raw";
import reusableForgotPasswordServiceCode from "../services/forgotPasswordService.ts?raw";
import reusableOtpServiceCode from "../services/otpService.ts?raw";
import reusableEligibilityServiceCode from "../services/eligibilityService.ts?raw";
import reusableDocumentUploadServiceCode from "../services/documentUploadService.ts?raw";
import reusableFormFlowServiceCode from "../services/formFlowService.ts?raw";
import reusableReviewDeclarationServiceCode from "../services/reviewDeclarationService.ts?raw";
import reusablePaymentServiceCode from "../services/paymentService.ts?raw";
import reusableStatusTrackerServiceCode from "../services/statusTrackerService.ts?raw";

type DownloadItem = {
  label: string;
  filename: string;
  code: string;
};

type DownloadGroup = {
  id: string;
  title: string;
  description: string;
  items: DownloadItem[];
};

type JourneyStage = {
  id: string;
  title: string;
  description: string;
};

const downloadGroups: DownloadGroup[] = [
  {
    id: "certificate-sign-in",
    title: "Certificate Sign In Service",
    description:
      "Production sign-in page used by the certificate reference service with reusable auth behavior.",
    items: [
      {
        label: "Download Certificate Sign In Page",
        filename: "CertificateSignIn.tsx",
        code: certificateSignInCode,
      },
      {
        label: "Download Shared Sign In Component",
        filename: "SignInService.tsx",
        code: reusableSignInComponentCode,
      },
      {
        label: "Download Sign In Service Logic",
        filename: "signInService.ts",
        code: reusableSignInServiceCode,
      },
    ],
  },
  {
    id: "reusable-sign-in",
    title: "Reusable Government Sign In Service",
    description:
      "Generic sign-in service entry that can be reused across reference services and government workflows.",
    items: [
      {
        label: "Download Reusable Sign In Page",
        filename: "ReferenceServiceSignIn.tsx",
        code: referenceSignInCode,
      },
      {
        label: "Download Shared Sign In Component",
        filename: "SignInService.tsx",
        code: reusableSignInComponentCode,
      },
      {
        label: "Download Sign In Service Logic",
        filename: "signInService.ts",
        code: reusableSignInServiceCode,
      },
    ],
  },
  {
    id: "certificate-sign-up",
    title: "Certificate Sign Up Service",
    description: "Certificate-specific sign-up wrapper and shared sign-up implementation.",
    items: [
      {
        label: "Download Certificate Sign Up Page",
        filename: "CertificateSignUp.tsx",
        code: certificateSignUpCode,
      },
      {
        label: "Download Shared Sign Up Component",
        filename: "SignUpService.tsx",
        code: reusableSignUpComponentCode,
      },
      {
        label: "Download Sign Up Service Logic",
        filename: "signUpService.ts",
        code: reusableSignUpServiceCode,
      },
    ],
  },
  {
    id: "reusable-sign-up",
    title: "Reusable Government Sign Up Service",
    description: "Generic sign-up flow reusable across government services.",
    items: [
      {
        label: "Download Reusable Sign Up Page",
        filename: "ReferenceServiceSignUp.tsx",
        code: referenceSignUpCode,
      },
      {
        label: "Download Shared Sign Up Component",
        filename: "SignUpService.tsx",
        code: reusableSignUpComponentCode,
      },
      {
        label: "Download Sign Up Service Logic",
        filename: "signUpService.ts",
        code: reusableSignUpServiceCode,
      },
    ],
  },
  {
    id: "certificate-eligibility",
    title: "Certificate Eligibility Service",
    description: "Certificate-specific eligibility wrapper and shared eligibility implementation.",
    items: [
      {
        label: "Download Certificate Eligibility Page",
        filename: "CertificateEligibility.tsx",
        code: certificateEligibilityCode,
      },
      {
        label: "Download Shared Eligibility Component",
        filename: "EligibilityService.tsx",
        code: reusableEligibilityComponentCode,
      },
      {
        label: "Download Eligibility Service Logic",
        filename: "eligibilityService.ts",
        code: reusableEligibilityServiceCode,
      },
    ],
  },
  {
    id: "reusable-eligibility",
    title: "Reusable Government Eligibility Service",
    description: "Generic eligibility flow for reuse across government services.",
    items: [
      {
        label: "Download Reusable Eligibility Page",
        filename: "ReferenceServiceEligibility.tsx",
        code: referenceEligibilityCode,
      },
      {
        label: "Download Shared Eligibility Component",
        filename: "EligibilityService.tsx",
        code: reusableEligibilityComponentCode,
      },
      {
        label: "Download Eligibility Service Logic",
        filename: "eligibilityService.ts",
        code: reusableEligibilityServiceCode,
      },
    ],
  },
  {
    id: "certificate-start",
    title: "Certificate Application Start Service",
    description: "Certificate-specific application start wrapper and shared start implementation.",
    items: [
      {
        label: "Download Certificate Start Page",
        filename: "CertificateStart.tsx",
        code: certificateStartCode,
      },
      {
        label: "Download Shared Start Component",
        filename: "ApplicationStartService.tsx",
        code: reusableStartComponentCode,
      },
    ],
  },
  {
    id: "reusable-start",
    title: "Reusable Government Application Start Service",
    description: "Generic application start flow reusable across services.",
    items: [
      {
        label: "Download Reusable Start Page",
        filename: "ReferenceServiceStart.tsx",
        code: referenceStartCode,
      },
      {
        label: "Download Shared Start Component",
        filename: "ApplicationStartService.tsx",
        code: reusableStartComponentCode,
      },
    ],
  },
  {
    id: "certificate-user-profile",
    title: "Certificate User Profile Service",
    description: "Certificate-specific user profile wrapper with shared account settings module.",
    items: [
      {
        label: "Download Certificate User Profile Page",
        filename: "CertificateUserProfile.tsx",
        code: certificateUserProfileCode,
      },
      {
        label: "Download Shared User Profile Component",
        filename: "UserProfileService.tsx",
        code: reusableUserProfileComponentCode,
      },
    ],
  },
  {
    id: "reusable-user-profile",
    title: "Reusable Government User Profile Service",
    description: "Reusable account settings/profile service for government service platforms.",
    items: [
      {
        label: "Download Reusable User Profile Page",
        filename: "ReferenceServiceUserProfile.tsx",
        code: referenceUserProfileCode,
      },
      {
        label: "Download Shared User Profile Component",
        filename: "UserProfileService.tsx",
        code: reusableUserProfileComponentCode,
      },
    ],
  },
  {
    id: "certificate-form-personal",
    title: "Certificate Personal Form Service",
    description: "Certificate personal-information form wrapper with shared form module.",
    items: [
      {
        label: "Download Certificate Personal Form Page",
        filename: "CertificateFormPersonal.tsx",
        code: certificateFormPersonalCode,
      },
      {
        label: "Download Shared Personal Form Component",
        filename: "PersonalFormService.tsx",
        code: reusablePersonalFormComponentCode,
      },
      {
        label: "Download Form Flow Service Logic",
        filename: "formFlowService.ts",
        code: reusableFormFlowServiceCode,
      },
    ],
  },
  {
    id: "reusable-form-personal",
    title: "Reusable Government Personal Form Service",
    description: "Reusable personal-information form flow for cross-service onboarding.",
    items: [
      {
        label: "Download Reusable Personal Form Page",
        filename: "ReferenceServiceFormPersonal.tsx",
        code: referenceFormPersonalCode,
      },
      {
        label: "Download Shared Personal Form Component",
        filename: "PersonalFormService.tsx",
        code: reusablePersonalFormComponentCode,
      },
      {
        label: "Download Form Flow Service Logic",
        filename: "formFlowService.ts",
        code: reusableFormFlowServiceCode,
      },
    ],
  },
  {
    id: "certificate-form-address",
    title: "Certificate Address Form Service",
    description: "Certificate address-details form wrapper with shared form module.",
    items: [
      {
        label: "Download Certificate Address Form Page",
        filename: "CertificateFormAddress.tsx",
        code: certificateFormAddressCode,
      },
      {
        label: "Download Shared Address Form Component",
        filename: "AddressFormService.tsx",
        code: reusableAddressFormComponentCode,
      },
      {
        label: "Download Form Flow Service Logic",
        filename: "formFlowService.ts",
        code: reusableFormFlowServiceCode,
      },
    ],
  },
  {
    id: "reusable-form-address",
    title: "Reusable Government Address Form Service",
    description: "Reusable address-details form flow for government services.",
    items: [
      {
        label: "Download Reusable Address Form Page",
        filename: "ReferenceServiceFormAddress.tsx",
        code: referenceFormAddressCode,
      },
      {
        label: "Download Shared Address Form Component",
        filename: "AddressFormService.tsx",
        code: reusableAddressFormComponentCode,
      },
      {
        label: "Download Form Flow Service Logic",
        filename: "formFlowService.ts",
        code: reusableFormFlowServiceCode,
      },
    ],
  },
  {
    id: "certificate-form-additional",
    title: "Certificate Additional Form Service",
    description: "Certificate additional-information form wrapper with shared form module.",
    items: [
      {
        label: "Download Certificate Additional Form Page",
        filename: "CertificateFormAdditional.tsx",
        code: certificateFormAdditionalCode,
      },
      {
        label: "Download Shared Additional Form Component",
        filename: "AdditionalFormService.tsx",
        code: reusableAdditionalFormComponentCode,
      },
      {
        label: "Download Form Flow Service Logic",
        filename: "formFlowService.ts",
        code: reusableFormFlowServiceCode,
      },
    ],
  },
  {
    id: "reusable-form-additional",
    title: "Reusable Government Additional Form Service",
    description: "Reusable additional-information form flow for service applications.",
    items: [
      {
        label: "Download Reusable Additional Form Page",
        filename: "ReferenceServiceFormAdditional.tsx",
        code: referenceFormAdditionalCode,
      },
      {
        label: "Download Shared Additional Form Component",
        filename: "AdditionalFormService.tsx",
        code: reusableAdditionalFormComponentCode,
      },
      {
        label: "Download Form Flow Service Logic",
        filename: "formFlowService.ts",
        code: reusableFormFlowServiceCode,
      },
    ],
  },
  {
    id: "certificate-form-review",
    title: "Certificate Form Review Service",
    description: "Certificate form-review wrapper with shared review module.",
    items: [
      {
        label: "Download Certificate Form Review Page",
        filename: "CertificateFormReview.tsx",
        code: certificateFormReviewCode,
      },
      {
        label: "Download Shared Form Review Component",
        filename: "FormReviewService.tsx",
        code: reusableFormReviewComponentCode,
      },
      {
        label: "Download Form Flow Service Logic",
        filename: "formFlowService.ts",
        code: reusableFormFlowServiceCode,
      },
    ],
  },
  {
    id: "reusable-form-review",
    title: "Reusable Government Form Review Service",
    description: "Reusable form-review and confirmation module for service flows.",
    items: [
      {
        label: "Download Reusable Form Review Page",
        filename: "ReferenceServiceFormReview.tsx",
        code: referenceFormReviewCode,
      },
      {
        label: "Download Shared Form Review Component",
        filename: "FormReviewService.tsx",
        code: reusableFormReviewComponentCode,
      },
      {
        label: "Download Form Flow Service Logic",
        filename: "formFlowService.ts",
        code: reusableFormFlowServiceCode,
      },
    ],
  },
  {
    id: "certificate-document-upload",
    title: "Certificate Document Upload Service",
    description: "Certificate-specific document-upload wrapper and shared upload implementation.",
    items: [
      {
        label: "Download Certificate Document Upload Page",
        filename: "CertificateDocumentUpload.tsx",
        code: certificateDocumentUploadCode,
      },
      {
        label: "Download Shared Document Upload Component",
        filename: "DocumentUploadService.tsx",
        code: reusableDocumentUploadComponentCode,
      },
      {
        label: "Download Document Upload Service Logic",
        filename: "documentUploadService.ts",
        code: reusableDocumentUploadServiceCode,
      },
    ],
  },
  {
    id: "reusable-document-upload",
    title: "Reusable Government Document Upload Service",
    description: "Generic document-upload flow reusable across government services.",
    items: [
      {
        label: "Download Reusable Document Upload Page",
        filename: "ReferenceServiceDocumentUpload.tsx",
        code: referenceDocumentUploadCode,
      },
      {
        label: "Download Shared Document Upload Component",
        filename: "DocumentUploadService.tsx",
        code: reusableDocumentUploadComponentCode,
      },
      {
        label: "Download Document Upload Service Logic",
        filename: "documentUploadService.ts",
        code: reusableDocumentUploadServiceCode,
      },
    ],
  },
  {
    id: "certificate-review-summary",
    title: "Certificate Review Summary Service",
    description: "Certificate-specific review-summary wrapper and shared review implementation.",
    items: [
      {
        label: "Download Certificate Review Summary Page",
        filename: "CertificateReviewSummary.tsx",
        code: certificateReviewSummaryCode,
      },
      {
        label: "Download Shared Review Summary Component",
        filename: "ReviewSummaryService.tsx",
        code: reusableReviewSummaryComponentCode,
      },
      {
        label: "Download Review/Declaration Service Logic",
        filename: "reviewDeclarationService.ts",
        code: reusableReviewDeclarationServiceCode,
      },
    ],
  },
  {
    id: "reusable-review-summary",
    title: "Reusable Government Review Summary Service",
    description: "Generic review-summary flow reusable across government services.",
    items: [
      {
        label: "Download Reusable Review Summary Page",
        filename: "ReferenceServiceReviewSummary.tsx",
        code: referenceReviewSummaryCode,
      },
      {
        label: "Download Shared Review Summary Component",
        filename: "ReviewSummaryService.tsx",
        code: reusableReviewSummaryComponentCode,
      },
      {
        label: "Download Review/Declaration Service Logic",
        filename: "reviewDeclarationService.ts",
        code: reusableReviewDeclarationServiceCode,
      },
    ],
  },
  {
    id: "certificate-declaration",
    title: "Certificate Declaration Service",
    description: "Certificate-specific declaration wrapper and shared declaration implementation.",
    items: [
      {
        label: "Download Certificate Declaration Page",
        filename: "CertificateDeclaration.tsx",
        code: certificateDeclarationCode,
      },
      {
        label: "Download Shared Declaration Component",
        filename: "DeclarationService.tsx",
        code: reusableDeclarationComponentCode,
      },
      {
        label: "Download Review/Declaration Service Logic",
        filename: "reviewDeclarationService.ts",
        code: reusableReviewDeclarationServiceCode,
      },
    ],
  },
  {
    id: "reusable-declaration",
    title: "Reusable Government Declaration Service",
    description: "Generic declaration flow reusable across government services.",
    items: [
      {
        label: "Download Reusable Declaration Page",
        filename: "ReferenceServiceDeclaration.tsx",
        code: referenceDeclarationCode,
      },
      {
        label: "Download Shared Declaration Component",
        filename: "DeclarationService.tsx",
        code: reusableDeclarationComponentCode,
      },
      {
        label: "Download Review/Declaration Service Logic",
        filename: "reviewDeclarationService.ts",
        code: reusableReviewDeclarationServiceCode,
      },
    ],
  },
  {
    id: "certificate-payment-summary",
    title: "Certificate Payment Summary Service",
    description: "Certificate-specific payment summary wrapper with shared payment handling logic.",
    items: [
      {
        label: "Download Certificate Payment Summary Page",
        filename: "CertificatePaymentSummary.tsx",
        code: certificatePaymentSummaryCode,
      },
      {
        label: "Download Shared Payment Summary Component",
        filename: "PaymentSummaryService.tsx",
        code: reusablePaymentSummaryComponentCode,
      },
      {
        label: "Download Payment Service Logic",
        filename: "paymentService.ts",
        code: reusablePaymentServiceCode,
      },
    ],
  },
  {
    id: "reusable-payment-summary",
    title: "Reusable Government Payment Summary Service",
    description: "Generic payment summary flow reusable across service applications.",
    items: [
      {
        label: "Download Reusable Payment Summary Page",
        filename: "ReferenceServicePaymentSummary.tsx",
        code: referencePaymentSummaryCode,
      },
      {
        label: "Download Shared Payment Summary Component",
        filename: "PaymentSummaryService.tsx",
        code: reusablePaymentSummaryComponentCode,
      },
      {
        label: "Download Payment Service Logic",
        filename: "paymentService.ts",
        code: reusablePaymentServiceCode,
      },
    ],
  },
  {
    id: "certificate-payment-receipt",
    title: "Certificate Payment Receipt Service",
    description: "Certificate-specific payment receipt wrapper with shared receipt rendering logic.",
    items: [
      {
        label: "Download Certificate Payment Receipt Page",
        filename: "CertificatePaymentReceipt.tsx",
        code: certificatePaymentReceiptCode,
      },
      {
        label: "Download Shared Payment Receipt Component",
        filename: "PaymentReceiptService.tsx",
        code: reusablePaymentReceiptComponentCode,
      },
      {
        label: "Download Payment Service Logic",
        filename: "paymentService.ts",
        code: reusablePaymentServiceCode,
      },
    ],
  },
  {
    id: "reusable-payment-receipt",
    title: "Reusable Government Payment Receipt Service",
    description: "Generic payment receipt flow reusable across government service journeys.",
    items: [
      {
        label: "Download Reusable Payment Receipt Page",
        filename: "ReferenceServicePaymentReceipt.tsx",
        code: referencePaymentReceiptCode,
      },
      {
        label: "Download Shared Payment Receipt Component",
        filename: "PaymentReceiptService.tsx",
        code: reusablePaymentReceiptComponentCode,
      },
      {
        label: "Download Payment Service Logic",
        filename: "paymentService.ts",
        code: reusablePaymentServiceCode,
      },
    ],
  },
  {
    id: "certificate-status-tracker",
    title: "Certificate Status Tracker Service",
    description: "Certificate-specific status tracker wrapper and shared tracker implementation.",
    items: [
      {
        label: "Download Certificate Status Tracker Page",
        filename: "CertificateStatusTracker.tsx",
        code: certificateStatusTrackerCode,
      },
      {
        label: "Download Shared Status Tracker Component",
        filename: "StatusTrackerService.tsx",
        code: reusableStatusTrackerComponentCode,
      },
      {
        label: "Download Status Tracker Service Logic",
        filename: "statusTrackerService.ts",
        code: reusableStatusTrackerServiceCode,
      },
    ],
  },
  {
    id: "reusable-status-tracker",
    title: "Reusable Government Status Tracker Service",
    description: "Generic status tracker flow for reusable service integration.",
    items: [
      {
        label: "Download Reusable Status Tracker Page",
        filename: "ReferenceServiceStatusTracker.tsx",
        code: referenceStatusTrackerCode,
      },
      {
        label: "Download Shared Status Tracker Component",
        filename: "StatusTrackerService.tsx",
        code: reusableStatusTrackerComponentCode,
      },
      {
        label: "Download Status Tracker Service Logic",
        filename: "statusTrackerService.ts",
        code: reusableStatusTrackerServiceCode,
      },
    ],
  },
  {
    id: "certificate-forgot-password",
    title: "Certificate Forgot Password Service",
    description: "Certificate-specific wrapper + reusable forgot-password flow implementation.",
    items: [
      {
        label: "Download Certificate Forgot Password Page",
        filename: "CertificateForgotPassword.tsx",
        code: certificateForgotPasswordCode,
      },
      {
        label: "Download Shared Forgot Password Component",
        filename: "ForgotPasswordService.tsx",
        code: reusableForgotPasswordComponentCode,
      },
      {
        label: "Download Forgot Password Service Logic",
        filename: "forgotPasswordService.ts",
        code: reusableForgotPasswordServiceCode,
      },
    ],
  },
  {
    id: "reusable-forgot-password",
    title: "Reusable Government Forgot Password Service",
    description: "Generic forgot-password flow for reuse across government services.",
    items: [
      {
        label: "Download Reusable Forgot Password Page",
        filename: "ReferenceServiceForgotPassword.tsx",
        code: referenceForgotPasswordCode,
      },
      {
        label: "Download Shared Forgot Password Component",
        filename: "ForgotPasswordService.tsx",
        code: reusableForgotPasswordComponentCode,
      },
      {
        label: "Download Forgot Password Service Logic",
        filename: "forgotPasswordService.ts",
        code: reusableForgotPasswordServiceCode,
      },
    ],
  },
  {
    id: "certificate-otp",
    title: "Certificate OTP Verification Service",
    description: "Certificate-specific OTP verification wrapper and shared OTP module.",
    items: [
      {
        label: "Download Certificate OTP Page",
        filename: "CertificateVerifyOTP.tsx",
        code: certificateVerifyOtpCode,
      },
      {
        label: "Download Shared OTP Component",
        filename: "OtpVerificationService.tsx",
        code: reusableOtpComponentCode,
      },
      {
        label: "Download OTP Service Logic",
        filename: "otpService.ts",
        code: reusableOtpServiceCode,
      },
    ],
  },
  {
    id: "reusable-otp",
    title: "Reusable Government OTP Verification Service",
    description: "Generic OTP verification flow for reusable service integration.",
    items: [
      {
        label: "Download Reusable OTP Page",
        filename: "ReferenceServiceVerifyOTP.tsx",
        code: referenceVerifyOtpCode,
      },
      {
        label: "Download Shared OTP Component",
        filename: "OtpVerificationService.tsx",
        code: reusableOtpComponentCode,
      },
      {
        label: "Download OTP Service Logic",
        filename: "otpService.ts",
        code: reusableOtpServiceCode,
      },
    ],
  },
  {
    id: "certificate-auth-status",
    title: "Certificate Auth Status Service",
    description: "Certificate authentication status flow (session expired, lockout, unavailable).",
    items: [
      {
        label: "Download Certificate Auth Status Page",
        filename: "CertificateSessionTimeout.tsx",
        code: certificateAuthStatusCode,
      },
      {
        label: "Download Shared Auth Status Component",
        filename: "AuthStatusService.tsx",
        code: reusableAuthStatusComponentCode,
      },
    ],
  },
  {
    id: "reusable-auth-status",
    title: "Reusable Government Auth Status Service",
    description: "Generic authentication status service for shared platform use.",
    items: [
      {
        label: "Download Reusable Auth Status Page",
        filename: "ReferenceServiceAuthStatus.tsx",
        code: referenceAuthStatusCode,
      },
      {
        label: "Download Shared Auth Status Component",
        filename: "AuthStatusService.tsx",
        code: reusableAuthStatusComponentCode,
      },
    ],
  },
  {
    id: "certificate-issued",
    title: "Certificate Issued Page",
    description: "Post-issuance certificate landing page for confirmation and download flows.",
    items: [
      {
        label: "Download Certificate Issued Page",
        filename: "CertificateIssued.tsx",
        code: certificateIssuedCode,
      },
    ],
  },
  {
    id: "certificate-notifications",
    title: "Certificate Notifications Page",
    description: "Notification center for service updates, reminders, and action prompts.",
    items: [
      {
        label: "Download Certificate Notifications Page",
        filename: "CertificateNotifications.tsx",
        code: certificateNotificationsCode,
      },
    ],
  },
  {
    id: "certificate-my-applications",
    title: "Certificate My Applications Page",
    description: "Application history and saved drafts for the certificate journey.",
    items: [
      {
        label: "Download Certificate My Applications Page",
        filename: "CertificateMyApplications.tsx",
        code: certificateMyApplicationsCode,
      },
    ],
  },
  {
    id: "certificate-officer-dashboard",
    title: "Certificate Officer Dashboard",
    description: "Back-office dashboard for reviewing and managing incoming certificate cases.",
    items: [
      {
        label: "Download Certificate Officer Dashboard",
        filename: "CertificateOfficerDashboard.tsx",
        code: certificateOfficerDashboardCode,
      },
    ],
  },
  {
    id: "certificate-officer-cases",
    title: "Certificate Officer Cases",
    description: "List and queue management for officer review workloads.",
    items: [
      {
        label: "Download Certificate Officer Cases",
        filename: "CertificateOfficerCases.tsx",
        code: certificateOfficerCasesCode,
      },
    ],
  },
  {
    id: "certificate-officer-review",
    title: "Certificate Officer Review",
    description: "Decision and adjudication screen used by reviewing officers.",
    items: [
      {
        label: "Download Certificate Officer Review",
        filename: "CertificateOfficerReview.tsx",
        code: certificateOfficerReviewCode,
      },
    ],
  },
  {
    id: "certificate-verification",
    title: "Certificate Verification Page",
    description: "Verification and issuance lookup page for residents and officials.",
    items: [
      {
        label: "Download Certificate Verification Page",
        filename: "CertificateVerification.tsx",
        code: certificateVerificationCode,
      },
    ],
  },
  {
    id: "certificate-feedback",
    title: "Certificate Feedback Page",
    description: "Feedback collection page for post-completion service improvement.",
    items: [
      {
        label: "Download Certificate Feedback Page",
        filename: "CertificateFeedback.tsx",
        code: certificateFeedbackCode,
      },
    ],
  },
  {
    id: "certificate-correction-request",
    title: "Certificate Correction Request",
    description: "Correction and resubmission entry point for rejected or updated submissions.",
    items: [
      {
        label: "Download Certificate Correction Request Page",
        filename: "CertificateCorrectionRequest.tsx",
        code: certificateCorrectionRequestCode,
      },
    ],
  },
  {
    id: "certificate-rejected",
    title: "Certificate Rejected Page",
    description: "Clear rejection outcome with next-step guidance.",
    items: [
      {
        label: "Download Certificate Rejected Page",
        filename: "CertificateRejected.tsx",
        code: certificateRejectedCode,
      },
    ],
  },
  {
    id: "certificate-appeal",
    title: "Certificate Appeal Page",
    description: "Appeal and escalation flow for post-decision review.",
    items: [
      {
        label: "Download Certificate Appeal Page",
        filename: "CertificateAppeal.tsx",
        code: certificateAppealCode,
      },
    ],
  },
  {
    id: "certificate-help",
    title: "Certificate Help Page",
    description: "Contextual support and contact guidance for the certificate service.",
    items: [
      {
        label: "Download Certificate Help Page",
        filename: "CertificateHelp.tsx",
        code: certificateHelpCode,
      },
    ],
  },
  {
    id: "certificate-privacy-policy",
    title: "Certificate Privacy Policy Page",
    description: "Service-specific privacy policy and data-handling information.",
    items: [
      {
        label: "Download Certificate Privacy Policy Page",
        filename: "CertificatePrivacyPolicy.tsx",
        code: certificatePrivacyPolicyCode,
      },
    ],
  },
];

const journeyStages: JourneyStage[] = [
  {
    id: "entry-access",
    title: "Entry and access",
    description: "Authentication, onboarding, eligibility, and initial service entry flows.",
  },
  {
    id: "application-build",
    title: "Application build",
    description: "Core form steps, document upload, review, and declaration journeys.",
  },
  {
    id: "submission-status",
    title: "Submission and status",
    description: "Payment, tracking, receipts, and confirmation after the form is submitted.",
  },
  {
    id: "operations-support",
    title: "Operations and support",
    description: "Officer review, issuance, appeals, help, and public service follow-up pages.",
  },
];

const DOWNLOAD_GROUP_COUNT = downloadGroups.length;
const DOWNLOAD_FILE_COUNT = downloadGroups.reduce((sum, group) => sum + group.items.length, 0);
const CERTIFICATE_GROUP_COUNT = downloadGroups.filter((group) => group.id.startsWith("certificate-")).length;
const REUSABLE_GROUP_COUNT = downloadGroups.filter((group) => group.id.startsWith("reusable-")).length;
const SINGLE_FILE_GROUP_COUNT = downloadGroups.filter((group) => group.items.length === 1).length;

function triggerDownload(filename: string, code: string) {
  const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function getJourneyStageId(groupId: string) {
  if (
    groupId.includes("sign-in") ||
    groupId.includes("sign-up") ||
    groupId.includes("eligibility") ||
    groupId.includes("start") ||
    groupId.includes("user-profile") ||
    groupId.includes("forgot-password") ||
    groupId.includes("otp") ||
    groupId.includes("auth-status")
  ) {
    return "entry-access";
  }

  if (groupId.includes("form-") || groupId.includes("document-upload") || groupId.includes("review-summary") || groupId.includes("declaration")) {
    return "application-build";
  }

  if (groupId.includes("payment-summary") || groupId.includes("payment-receipt") || groupId.includes("status-tracker")) {
    return "submission-status";
  }

  return "operations-support";
}

export default function ServiceCodeDownloads() {
  const [searchTerm, setSearchTerm] = useState("");
  const [scope, setScope] = useState<"all" | "certificate" | "reusable" | "single">("all");

  const filteredGroups = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return downloadGroups.filter((group) => {
      const matchesScope =
        scope === "all" ||
        (scope === "certificate" && group.id.startsWith("certificate-")) ||
        (scope === "reusable" && group.id.startsWith("reusable-")) ||
        (scope === "single" && group.items.length === 1);

      if (!matchesScope) return false;
      if (!query) return true;

      const haystack = [
        group.title,
        group.description,
        group.id,
        ...group.items.map((item) => `${item.label} ${item.filename}`),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [scope, searchTerm]);

  const visibleGroupCount = filteredGroups.length;
  const visibleFileCount = filteredGroups.reduce((sum, group) => sum + group.items.length, 0);
  const groupedByStage = journeyStages
    .map((stage) => ({
      ...stage,
      groups: filteredGroups.filter((group) => getJourneyStageId(group.id) === stage.id),
    }))
    .filter((stage) => stage.groups.length > 0);
  const visibleStageCount = groupedByStage.length;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),_transparent_30%),linear-gradient(to_bottom,theme(colors.background),theme(colors.background))]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-12 sm:px-8 lg:px-4 sm:px-8 lg:px-12 xl:grid-cols-[1.15fr_0.85fr] xl:items-center xl:py-16">
          <div className="space-y-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-primary text-primary-foreground shadow-lg shadow-primary/15">
                  <FileCode2 size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Service source downloads</p>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Service code downloads for reference journeys</h1>
                </div>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Download the React source behind the service flows, shared components, and supporting logic used across the certificate
                reference service and reusable government patterns.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#entry-access"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Start with access
              </a>
              <a
                href="#application-build"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                Jump to applications
              </a>
              <a
                href="#submission-status"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                Payment and status
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-6 shadow-xl shadow-black/5">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Catalogue snapshot</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">What’s available</h2>
              </div>
              <div className="rounded-2xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{DOWNLOAD_GROUP_COUNT} bundles</div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <SummaryCard value={DOWNLOAD_GROUP_COUNT.toString()} label="Bundles" />
              <SummaryCard value={DOWNLOAD_FILE_COUNT.toString()} label="Download files" />
              <SummaryCard value={CERTIFICATE_GROUP_COUNT.toString()} label="Certificate groups" />
              <SummaryCard value={REUSABLE_GROUP_COUNT.toString()} label="Reusable groups" />
              <SummaryCard value={journeyStages.length.toString()} label="Journey stages" />
            </div>

            <div className="mt-6 space-y-3 rounded-2xl bg-muted/40 p-4">
              <ReviewNote title="Content review" text="The catalogue now includes later-stage certificate pages like issued, officer review, appeal, and privacy policy." />
              <ReviewNote title="Structure" text="Bundles are consistently split between certificate-specific wrappers and reusable government flows." />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-4 sm:px-8 lg:px-12">
        <section className="mb-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Jump to a bundle</p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Browse by journey stage or implementation concern</h2>
              <p className="text-muted-foreground">
                Use search to narrow the catalogue, then jump to the exact bundle you need. The filters keep the page usable as the catalogue grows.
              </p>
            </div>
            <div className="hidden flex-wrap gap-2 lg:flex">
              <AnchorPill href="#entry-access" label="Entry" />
              <AnchorPill href="#application-build" label="Applications" />
              <AnchorPill href="#submission-status" label="Submission" />
              <AnchorPill href="#operations-support" label="Operations" />
            </div>
          </div>

          <div className="mt-6 grid gap-3 rounded-[24px] border border-border bg-card p-4 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <span className="sr-only">Search service bundles</span>
              <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by bundle name, file name, or journey stage"
                className="w-full rounded-2xl border border-border bg-background py-3 pl-10 pr-10 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/80 focus:border-primary focus:ring-2 focus:ring-ring"
              />
              {searchTerm ? (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              ) : null}
            </label>

            <div className="flex flex-wrap gap-2">
              <FilterChip active={scope === "all"} onClick={() => setScope("all")} label="All bundles" />
              <FilterChip active={scope === "certificate"} onClick={() => setScope("certificate")} label="Certificate" />
              <FilterChip active={scope === "reusable"} onClick={() => setScope("reusable")} label="Reusable" />
              <FilterChip active={scope === "single"} onClick={() => setScope("single")} label="Single file" />
            </div>
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <CalloutCard
            title="Certificate-specific"
            text="Wrapper pages for the certificate reference service, including submission, post-submission, and support flows."
          />
          <CalloutCard
            title="Reusable services"
            text="Generic government flows that can be adopted across departments without certificate-specific copy."
          />
          <CalloutCard
            title="Shared logic"
            text="Auth, form flow, review, payment, and status helpers are surfaced alongside the page wrappers."
          />
          <CalloutCard
            title="Content review"
            text={`${SINGLE_FILE_GROUP_COUNT} single-file service screens are now exposed in the catalogue for completeness.`}
          />
        </section>

        <section className="mb-6 flex items-center justify-between gap-4 rounded-[24px] border border-border bg-muted/30 px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Showing {visibleGroupCount} bundle{visibleGroupCount === 1 ? "" : "s"} across {visibleStageCount} stage
              {visibleStageCount === 1 ? "" : "s"} and {visibleFileCount} file{visibleFileCount === 1 ? "" : "s"}
            </p>
            <p className="text-xs text-muted-foreground">Search term: {searchTerm.trim() ? searchTerm.trim() : "none"} • Scope: {scope}</p>
          </div>
          <div className="text-right text-xs text-muted-foreground">
            Tip: use the anchor pills for fast jumping once you’ve narrowed the list
          </div>
        </section>

        {groupedByStage.length > 0 ? (
          <div className="space-y-8">
            {groupedByStage.map((stage) => (
              <section key={stage.id} id={stage.id} className="scroll-mt-24 space-y-4">
                <div className="flex flex-col gap-3 border-b border-border pb-4 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-3xl space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Journey stage</p>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-[2rem]">{stage.title}</h2>
                    <p className="text-sm leading-6 text-muted-foreground">{stage.description}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground shadow-sm">
                    {stage.groups.length} bundle{stage.groups.length === 1 ? "" : "s"}
                  </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-2">
                  {stage.groups.map((group) => (
                    <section
                      id={group.id}
                      key={group.title}
                      className="overflow-hidden rounded-[28px] border border-border bg-card shadow-sm"
                    >
                      <div className="border-b border-border bg-muted/35 px-6 py-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-bold tracking-tight text-foreground">{group.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p>
                          </div>
                          <div className="rounded-2xl border border-border bg-background px-4 py-2 text-sm font-semibold text-muted-foreground">
                            {group.items.length} file{group.items.length === 1 ? "" : "s"}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 p-6">
                        {group.items.map((item) => (
                          <button
                            key={`${group.title}-${item.filename}`}
                            type="button"
                            onClick={() => triggerDownload(item.filename, item.code)}
                            className="group inline-flex w-full items-center justify-between gap-3 rounded-[20px] border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            <span className="text-left leading-6">{item.label}</span>
                            <Download
                              size={16}
                              aria-hidden="true"
                              className="flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-y-0.5 group-hover:text-primary"
                            />
                          </button>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-border bg-card p-10 text-center shadow-sm">
            <h3 className="text-xl font-bold text-foreground">No bundles match your search</h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Try a broader search term or switch back to All bundles. The current catalogue is organized around service journeys,
              reusable flows, and certificate-specific wrappers.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setScope("all");
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
      }`}
    >
      {label}
    </button>
  );
}

function SummaryCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 p-4">
      <div className="text-2xl font-bold tracking-tight text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function ReviewNote({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function AnchorPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
    >
      {label}
    </a>
  );
}

function CalloutCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-border bg-card p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}
