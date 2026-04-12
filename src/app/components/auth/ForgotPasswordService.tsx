import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, CheckCircle, KeyRound, RefreshCw, Download } from "lucide-react";

import { InfoBanner } from "../certificate/InfoBanner";
import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import {
  completePasswordReset,
  requestPasswordReset,
  type ForgotPasswordState,
} from "../../services/forgotPasswordService";
import { email as validateEmail, mobileNumber as validateMobileNumber, required } from "../../services/validation";

interface ForgotPasswordServiceProps {
  category: string;
  title: string;
  backLink: string;
  backText: string;
  signInPath: string;
  helpPath: string;
  codeDownloadPath?: string;
  serviceName: string;
}

type Step = "identifier" | "otp" | "new-password";

interface Errors {
  identifier?: string;
  otp?: string;
  newPassword?: string;
  confirmPassword?: string;
}

const stateVariantMap: Record<ForgotPasswordState, "info" | "warning" | "error" | "success"> = {
  default: "info",
  "service-unavailable": "error",
  "identifier-not-found": "error",
  "invalid-otp": "error",
  "expired-otp": "warning",
  "reset-success": "success",
};

export function ForgotPasswordService({
  category,
  title,
  backLink,
  backText,
  signInPath,
  helpPath,
  codeDownloadPath,
  serviceName,
}: ForgotPasswordServiceProps) {
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>("identifier");
  const [identifier, setIdentifier] = useState("");
  const [maskedMobile, setMaskedMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ state: ForgotPasswordState; message: string } | null>(null);

  const stepNumber = useMemo(() => {
    if (step === "identifier") return 1;
    if (step === "otp") return 2;
    return 3;
  }, [step]);

  const clearStatus = () => setStatus(null);

  const validateIdentifier = () => {
    const nextErrors: Errors = {};
    const value = identifier.trim();

    const requiredCheck = required(value, "Identifier");
    if (!requiredCheck.valid) {
      nextErrors.identifier = requiredCheck.error;
    } else if (/^\d+$/.test(value)) {
      const mobileCheck = validateMobileNumber(value);
      if (!mobileCheck.valid) {
        nextErrors.identifier = mobileCheck.error;
      }
    } else if (value.includes("@")) {
      const emailCheck = validateEmail(value);
      if (!emailCheck.valid) {
        nextErrors.identifier = emailCheck.error;
      }
    } else if (value.length < 4) {
      nextErrors.identifier = "Enter a valid user ID (minimum 4 characters).";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validatePasswordStep = () => {
    const nextErrors: Errors = {};

    if (!otp.trim() || otp.trim().length !== 6 || !/^\d{6}$/.test(otp.trim())) {
      nextErrors.otp = "Enter a valid 6-digit OTP.";
    }

    if (!newPassword.trim()) {
      nextErrors.newPassword = "New password is required.";
    } else if (newPassword.trim().length < 8) {
      nextErrors.newPassword = "Password must be at least 8 characters.";
    }

    if (!confirmPassword.trim()) {
      nextErrors.confirmPassword = "Confirm your new password.";
    } else if (confirmPassword !== newPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const continueFromOtpStep = () => {
    const otpValue = otp.trim();
    if (!/^\d{6}$/.test(otpValue)) {
      setErrors((prev) => ({ ...prev, otp: "Enter a valid 6-digit OTP." }));
      return;
    }

    setErrors((prev) => ({ ...prev, otp: undefined }));
    setStep("new-password");
  };

  const handleRequestOtp = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateIdentifier()) return;

    setIsSubmitting(true);
    clearStatus();

    try {
      const response = await requestPasswordReset(identifier);
      setStatus({ state: response.state, message: response.message });

      if (!response.success || !response.mobileNumber) return;

      const mobile = response.mobileNumber;
      setMaskedMobile(`${mobile.slice(0, 2)}XXXXXX${mobile.slice(-2)}`);
      setStep("otp");
      setOtp("");
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validatePasswordStep()) return;

    setIsSubmitting(true);
    clearStatus();

    try {
      const response = await completePasswordReset({
        identifier,
        otp: otp.trim(),
        newPassword,
      });

      setStatus({ state: response.state, message: response.message });

      if (!response.success) return;

      window.setTimeout(() => {
        navigate(signInPath);
      }, 900);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader
        icon={KeyRound}
        iconColor="bg-orange-600"
        category={category}
        title={title}
        backLink={backLink}
        backText={backText}
      />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2" aria-label="Reset password progress">
            <StepBadge number={1} label="Identifier" active={stepNumber === 1} completed={stepNumber > 1} />
            <div className={`w-10 h-0.5 ${stepNumber > 1 ? "bg-green-600" : "bg-gray-300"}`} />
            <StepBadge number={2} label="OTP" active={stepNumber === 2} completed={stepNumber > 2} />
            <div className={`w-10 h-0.5 ${stepNumber > 2 ? "bg-green-600" : "bg-gray-300"}`} />
            <StepBadge number={3} label="New Password" active={stepNumber === 3} completed={false} />
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            {status && (
              <div className="p-5 border-b-2 border-gray-200">
                <InfoBanner
                  variant={stateVariantMap[status.state]}
                  title={
                    status.state === "reset-success"
                      ? "Password Reset Successful"
                      : status.state === "expired-otp"
                      ? "OTP Expired"
                      : status.state === "service-unavailable"
                      ? "Service Unavailable"
                      : "Action Required"
                  }
                  message={status.message}
                />
              </div>
            )}

            {step === "identifier" && (
              <form onSubmit={handleRequestOtp} className="p-6 sm:p-8 space-y-5" noValidate>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Identify Your Account</h2>
                  <p className="text-sm text-gray-700 mt-2">
                    Enter your registered email, mobile number, or user ID to receive a reset OTP.
                  </p>
                </div>

                <div>
                  <label htmlFor="fp-identifier" className="block text-sm font-bold text-gray-900 mb-2">
                    Email, Mobile Number, or User ID <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fp-identifier"
                    type="text"
                    value={identifier}
                    onChange={(event) => {
                      setIdentifier(event.target.value);
                      setErrors((prev) => ({ ...prev, identifier: undefined }));
                      clearStatus();
                    }}
                    className={`w-full px-4 py-3 border-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000080] ${
                      errors.identifier ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"
                    }`}
                    aria-invalid={Boolean(errors.identifier)}
                    aria-describedby={errors.identifier ? "fp-identifier-error" : undefined}
                    placeholder="Enter registered email, mobile number, or user ID"
                  />
                  {errors.identifier && (
                    <p id="fp-identifier-error" className="mt-2 text-sm text-red-700" role="alert">
                      {errors.identifier}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900 disabled:opacity-70"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? "Sending OTP..." : "Send OTP"}
                </button>
              </form>
            )}

            {step === "otp" && (
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Verify OTP</h2>
                  <p className="text-sm text-gray-700 mt-2">
                    Enter the 6-digit OTP sent to +91 {maskedMobile}.
                  </p>
                </div>

                <div>
                  <label htmlFor="fp-otp" className="block text-sm font-bold text-gray-900 mb-2">
                    One-Time Password (OTP) <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fp-otp"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(event) => {
                      setOtp(event.target.value.replace(/\D/g, "").slice(0, 6));
                      setErrors((prev) => ({ ...prev, otp: undefined }));
                      clearStatus();
                    }}
                    className={`w-full px-4 py-3 border-2 rounded text-sm tracking-[0.25em] text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000080] ${
                      errors.otp ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"
                    }`}
                    aria-invalid={Boolean(errors.otp)}
                    aria-describedby={errors.otp ? "fp-otp-error" : undefined}
                    placeholder="123456"
                  />
                  {errors.otp && (
                    <p id="fp-otp-error" className="mt-2 text-sm text-red-700" role="alert">
                      {errors.otp}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={continueFromOtpStep}
                  className="w-full px-6 py-3.5 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900"
                >
                  Continue
                </button>

                <button
                  type="button"
                  onClick={async () => {
                    setIsSubmitting(true);
                    clearStatus();
                    try {
                      const response = await requestPasswordReset(identifier);
                      setStatus({ state: response.state, message: response.message });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded text-sm font-bold text-gray-800 hover:bg-gray-50 disabled:opacity-60"
                >
                  <RefreshCw size={14} />
                  Resend OTP
                </button>
              </div>
            )}

            {step === "new-password" && (
              <form onSubmit={handleResetPassword} className="p-6 sm:p-8 space-y-5" noValidate>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Set New Password</h2>
                  <p className="text-sm text-gray-700 mt-2">
                    Create a new password and confirm it to secure your account.
                  </p>
                </div>

                <div>
                  <label htmlFor="fp-new-password" className="block text-sm font-bold text-gray-900 mb-2">
                    New Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fp-new-password"
                    type="password"
                    value={newPassword}
                    onChange={(event) => {
                      setNewPassword(event.target.value);
                      setErrors((prev) => ({ ...prev, newPassword: undefined }));
                      clearStatus();
                    }}
                    className={`w-full px-4 py-3 border-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000080] ${
                      errors.newPassword ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"
                    }`}
                    aria-invalid={Boolean(errors.newPassword)}
                    aria-describedby={errors.newPassword ? "fp-new-password-error" : undefined}
                    placeholder="Enter a new password"
                  />
                  {errors.newPassword && (
                    <p id="fp-new-password-error" className="mt-2 text-sm text-red-700" role="alert">
                      {errors.newPassword}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="fp-confirm-password" className="block text-sm font-bold text-gray-900 mb-2">
                    Confirm New Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fp-confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                      setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
                      clearStatus();
                    }}
                    className={`w-full px-4 py-3 border-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000080] ${
                      errors.confirmPassword ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"
                    }`}
                    aria-invalid={Boolean(errors.confirmPassword)}
                    aria-describedby={errors.confirmPassword ? "fp-confirm-password-error" : undefined}
                    placeholder="Re-enter the new password"
                  />
                  {errors.confirmPassword && (
                    <p id="fp-confirm-password-error" className="mt-2 text-sm text-red-700" role="alert">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 bg-[#138808] text-white font-bold rounded text-sm hover:bg-green-700 disabled:opacity-70"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? "Resetting Password..." : "Reset Password"}
                </button>
              </form>
            )}
          </div>

          <InfoBanner
            variant="info"
            title="Need Help?"
            message="If you no longer have access to your registered contact details, contact support for account recovery assistance."
          >
            <Link to={helpPath} className="inline-flex items-center gap-2 mt-2 text-sm font-bold text-[#000080] hover:underline">
              <ArrowLeft size={14} className="rotate-180" />
              Contact support
            </Link>
            {codeDownloadPath && (
              <Link to={codeDownloadPath} className="inline-flex items-center gap-2 mt-2 ml-4 text-sm font-bold text-[#000080] hover:underline">
                <Download size={14} />
                Download React code
              </Link>
            )}
          </InfoBanner>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Password Recovery" />
    </div>
  );
}

function StepBadge({ number, label, active, completed }: { number: number; label: string; active: boolean; completed: boolean }) {
  return (
    <div className="text-center">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-1 ${
          completed
            ? "bg-green-600 text-white"
            : active
            ? "bg-[#000080] text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        {completed ? <CheckCircle size={16} /> : number}
      </div>
      <div className="text-xs text-gray-700">{label}</div>
    </div>
  );
}
