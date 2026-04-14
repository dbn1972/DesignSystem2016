import { ArrowLeft, Download, FileCode2 } from "lucide-react";
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
];

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

export default function ServiceCodeDownloads() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <Link
            to="/reference-service/overview"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft size={16} />
            Back to Reference Services
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded bg-primary text-white flex items-center justify-center">
              <FileCode2 size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Service Code Downloads</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Download React source code for sign-up, sign-in, eligibility, application start, user profile, personal/address/additional/review forms, document upload, review summary, declaration, payment summary, payment receipt, status tracker, forgot-password, OTP, and auth-status services.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {downloadGroups.map((group) => (
            <section id={group.id} key={group.title} className="bg-card border-2 border-border rounded-lg p-6 scroll-mt-24">
              <h2 className="text-xl font-bold text-foreground">{group.title}</h2>
              <p className="text-sm text-muted-foreground mt-2 mb-5">{group.description}</p>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <button
                    key={`${group.title}-${item.filename}`}
                    type="button"
                    onClick={() => triggerDownload(item.filename, item.code)}
                    className="w-full inline-flex items-center justify-between gap-3 px-4 py-3 border-2 border-border rounded text-sm font-bold text-foreground hover:bg-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
                  >
                    <span className="text-left">{item.label}</span>
                    <Download size={16} aria-hidden="true" />
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
