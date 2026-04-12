import { ArrowLeft, Download, FileCode2 } from "lucide-react";
import { Link } from "react-router";

import certificateSignInCode from "./CertificateSignIn.tsx?raw";
import referenceSignInCode from "./ReferenceServiceSignIn.tsx?raw";
import certificateForgotPasswordCode from "./CertificateForgotPassword.tsx?raw";
import referenceForgotPasswordCode from "./ReferenceServiceForgotPassword.tsx?raw";
import certificateVerifyOtpCode from "./CertificateVerifyOTP.tsx?raw";
import referenceVerifyOtpCode from "./ReferenceServiceVerifyOTP.tsx?raw";
import certificateAuthStatusCode from "./CertificateSessionTimeout.tsx?raw";
import referenceAuthStatusCode from "./ReferenceServiceAuthStatus.tsx?raw";
import reusableSignInComponentCode from "../components/auth/SignInService.tsx?raw";
import reusableForgotPasswordComponentCode from "../components/auth/ForgotPasswordService.tsx?raw";
import reusableOtpComponentCode from "../components/auth/OtpVerificationService.tsx?raw";
import reusableAuthStatusComponentCode from "../components/auth/AuthStatusService.tsx?raw";
import reusableSignInServiceCode from "../services/signInService.ts?raw";
import reusableForgotPasswordServiceCode from "../services/forgotPasswordService.ts?raw";
import reusableOtpServiceCode from "../services/otpService.ts?raw";

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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <Link
            to="/reference-service/overview"
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={16} />
            Back to Reference Services
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded bg-[#000080] text-white flex items-center justify-center">
              <FileCode2 size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Service Code Downloads</h1>
              <p className="text-sm text-gray-700 mt-1">
                Download React source code for sign-in, forgot-password, OTP, and auth-status services.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {downloadGroups.map((group) => (
            <section id={group.id} key={group.title} className="bg-white border-2 border-gray-300 rounded-lg p-6 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900">{group.title}</h2>
              <p className="text-sm text-gray-700 mt-2 mb-5">{group.description}</p>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <button
                    key={`${group.title}-${item.filename}`}
                    type="button"
                    onClick={() => triggerDownload(item.filename, item.code)}
                    className="w-full inline-flex items-center justify-between gap-3 px-4 py-3 border-2 border-gray-300 rounded text-sm font-bold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000080]"
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
