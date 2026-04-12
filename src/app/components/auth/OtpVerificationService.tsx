import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, RefreshCw, Shield, Download } from "lucide-react";

import { InfoBanner } from "../certificate/InfoBanner";
import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import {
  maskMobileNumber,
  verifyOneTimePassword,
  type OtpVerificationState,
} from "../../services/otpService";

interface OtpVerificationServiceProps {
  category: string;
  title: string;
  backLink: string;
  backText: string;
  successRedirectPath: string;
  helpPath: string;
  codeDownloadPath?: string;
  serviceName: string;
  identifier: string;
}

const stateVariantMap: Record<OtpVerificationState, "info" | "warning" | "error" | "success"> = {
  default: "info",
  "invalid-otp": "error",
  "expired-otp": "warning",
  "service-unavailable": "error",
  verified: "success",
};

export function OtpVerificationService({
  category,
  title,
  backLink,
  backText,
  successRedirectPath,
  helpPath,
  codeDownloadPath,
  serviceName,
  identifier,
}: OtpVerificationServiceProps) {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ state: OtpVerificationState; message: string } | null>(null);

  const masked = maskMobileNumber(identifier);
  const canResend = timer <= 0;

  useEffect(() => {
    if (timer <= 0) return;

    const interval = window.setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => window.clearInterval(interval);
  }, [timer]);

  const verify = async () => {
    if (otp.trim().length !== 6) {
      setStatus({ state: "invalid-otp", message: "Enter a valid 6-digit OTP." });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await verifyOneTimePassword({
        identifier,
        otp,
      });

      setStatus({ state: result.state, message: result.message });

      if (!result.success) return;

      window.setTimeout(() => {
        navigate(successRedirectPath);
      }, 900);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resendOtp = () => {
    setTimer(30);
    setOtp("");
    setStatus({ state: "default", message: "A new OTP has been sent to your registered mobile number." });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader
        icon={Shield}
        iconColor="bg-purple-600"
        category={category}
        title={title}
        backLink={backLink}
        backText={backText}
      />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-purple-50 border-b-2 border-purple-300 px-6 sm:px-8 py-6 text-center">
              <h2 className="text-xl font-bold text-gray-900">Enter Verification Code</h2>
              <p className="text-sm text-gray-700 mt-2">We sent a 6-digit OTP to +91 {masked}</p>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              {status && (
                <InfoBanner
                  variant={stateVariantMap[status.state]}
                  title={
                    status.state === "verified"
                      ? "Verification Successful"
                      : status.state === "expired-otp"
                      ? "OTP Expired"
                      : status.state === "service-unavailable"
                      ? "Service Unavailable"
                      : "Verification Status"
                  }
                  message={status.message}
                />
              )}

              <div>
                <label htmlFor="otp-code" className="block text-sm font-bold text-gray-900 mb-2">
                  One-Time Password <span className="text-red-600">*</span>
                </label>
                <input
                  id="otp-code"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={otp}
                  onChange={(event) => {
                    setOtp(event.target.value.replace(/\D/g, "").slice(0, 6));
                    if (status?.state === "invalid-otp") {
                      setStatus(null);
                    }
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded text-center tracking-[0.25em] text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000080]"
                  placeholder="123456"
                  aria-invalid={status?.state === "invalid-otp"}
                />
              </div>

              <button
                type="button"
                onClick={verify}
                disabled={isSubmitting || otp.length !== 6}
                className="w-full px-6 py-3.5 bg-[#138808] text-white font-bold rounded text-sm hover:bg-green-700 disabled:opacity-70"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Verifying..." : "Verify OTP"}
              </button>

              <div className="text-center">
                {canResend ? (
                  <button
                    type="button"
                    onClick={resendOtp}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#000080] hover:underline"
                  >
                    <RefreshCw size={14} />
                    Resend OTP
                  </button>
                ) : (
                  <p className="text-sm text-gray-600">
                    Resend OTP in <span className="font-bold text-gray-900">{timer}s</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <InfoBanner
            variant="info"
            title="Security Tips"
            message={
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                <li>Never share your OTP with anyone.</li>
                <li>OTP is valid for a short duration only.</li>
                <li>If you did not request OTP, contact support.</li>
              </ul>
            }
          >
            <Link to={helpPath} className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-[#000080] hover:underline">
              <ArrowLeft size={14} className="rotate-180" />
              Get support
            </Link>
            {codeDownloadPath && (
              <Link to={codeDownloadPath} className="inline-flex items-center gap-2 mt-3 ml-4 text-sm font-bold text-[#000080] hover:underline">
                <Download size={14} />
                Download React code
              </Link>
            )}
          </InfoBanner>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="OTP Verification" />
    </div>
  );
}
