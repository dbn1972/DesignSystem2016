import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, LogIn, Shield, Smartphone, HelpCircle, ArrowLeft, Download } from "lucide-react";
import { InfoBanner } from "../certificate/InfoBanner";
import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import {
  getSignInStateTitle,
  type SignInFailureState,
  signInWithIdentifier,
} from "../../services/signInService";
import {
  email as validateEmail,
  mobileNumber as validateMobileNumber,
  required,
} from "../../services/validation";

interface SignInServiceProps {
  category: string;
  title: string;
  subtitle: string;
  backLink: string;
  backText: string;
  successRedirectPath: string;
  forgotPasswordPath: string;
  otpSignInPath: string;
  helpPath: string;
  signUpPath?: string;
  codeDownloadPath?: string;
  serviceName: string;
  initialState?: SignInFailureState | null;
  successMessage?: string;
}

interface FieldErrors {
  identifier?: string;
  password?: string;
}

const stateVariantMap: Record<
  SignInFailureState,
  "info" | "warning" | "error" | "success"
> = {
  "wrong-credentials": "error",
  "locked-account": "error",
  "session-expired": "warning",
  "service-unavailable": "error",
};

export function SignInService({
  category,
  title,
  subtitle,
  backLink,
  backText,
  successRedirectPath,
  forgotPasswordPath,
  otpSignInPath,
  helpPath,
  signUpPath,
  codeDownloadPath,
  serviceName,
  initialState = null,
  successMessage = "Signed in successfully. Redirecting...",
}: SignInServiceProps) {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [authState, setAuthState] = useState<SignInFailureState | null>(initialState);
  const [statusMessage, setStatusMessage] = useState<string>(
    initialState
      ? "Please sign in again to continue securely."
      : ""
  );

  const alertTitle = useMemo(
    () => (authState ? getSignInStateTitle(authState) : ""),
    [authState]
  );

  const validateForm = () => {
    const nextErrors: FieldErrors = {};

    const identifierValue = identifier.trim();
    const requiredIdentifier = required(identifierValue, "Identifier");

    if (!requiredIdentifier.valid) {
      nextErrors.identifier = requiredIdentifier.error;
    } else if (/^\d+$/.test(identifierValue)) {
      const mobileCheck = validateMobileNumber(identifierValue);
      if (!mobileCheck.valid) {
        nextErrors.identifier = mobileCheck.error;
      }
    } else if (identifierValue.includes("@")) {
      const emailCheck = validateEmail(identifierValue);
      if (!emailCheck.valid) {
        nextErrors.identifier = emailCheck.error;
      }
    } else if (identifierValue.length < 4) {
      nextErrors.identifier = "Enter a valid user ID (minimum 4 characters).";
    }

    const requiredPassword = required(password, "Password");
    if (!requiredPassword.valid) {
      nextErrors.password = requiredPassword.error;
    } else if (password.trim().length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      setAuthState(null);
      setStatusMessage("");
      return;
    }

    setIsSubmitting(true);
    setAuthState(null);
    setStatusMessage("");

    try {
      const result = await signInWithIdentifier({
        identifier: identifier.trim(),
        password,
      });

      if (!result.success) {
        setAuthState(result.state);
        setStatusMessage(result.message);
        return;
      }

      setAuthState(null);
      setStatusMessage(successMessage);
      window.setTimeout(() => {
        navigate(successRedirectPath);
      }, 900);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearIdentifierError = () => {
    setErrors((prev) => ({ ...prev, identifier: undefined }));
    if (authState === "wrong-credentials") {
      setAuthState(null);
      setStatusMessage("");
    }
  };

  const clearPasswordError = () => {
    setErrors((prev) => ({ ...prev, password: undefined }));
    if (authState === "wrong-credentials") {
      setAuthState(null);
      setStatusMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader
        icon={Shield}
        iconColor="bg-[#000080]"
        category={category}
        title={title}
        backLink={backLink}
        backText={backText}
      />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 border-b-2 border-blue-300 px-6 sm:px-8 py-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{subtitle}</h2>
              <p className="text-sm text-gray-700 mt-2">
                Use your registered email, mobile number, or user ID and password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6" noValidate>
              {authState && statusMessage && (
                <InfoBanner
                  variant={stateVariantMap[authState]}
                  title={alertTitle}
                  message={statusMessage}
                />
              )}

              {!authState && statusMessage && (
                <div
                  className="bg-green-50 border-2 border-green-300 rounded-lg p-4 text-sm text-green-800"
                  role="status"
                  aria-live="polite"
                >
                  {statusMessage}
                </div>
              )}

              <div>
                <label htmlFor="signin-identifier" className="block text-sm font-bold text-gray-900 mb-2">
                  Email, Mobile Number, or User ID <span className="text-red-600">*</span>
                </label>
                <input
                  id="signin-identifier"
                  type="text"
                  autoComplete="username"
                  value={identifier}
                  onChange={(event) => {
                    setIdentifier(event.target.value);
                    clearIdentifierError();
                  }}
                  className={`w-full px-4 py-3 border-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000080] ${
                    errors.identifier ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"
                  }`}
                  placeholder="Enter registered email, mobile number, or user ID"
                  aria-invalid={Boolean(errors.identifier)}
                  aria-describedby={errors.identifier ? "signin-identifier-error" : undefined}
                />
                {errors.identifier && (
                  <p id="signin-identifier-error" className="mt-2 text-sm text-red-700" role="alert">
                    {errors.identifier}
                  </p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="signin-password" className="block text-sm font-bold text-gray-900">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <Link
                    to={forgotPasswordPath}
                    className="text-sm font-bold text-[#000080] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    id="signin-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      clearPasswordError();
                    }}
                    className={`w-full px-4 py-3 pr-12 border-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000080] ${
                      errors.password ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"
                    }`}
                    placeholder="Enter your password"
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={errors.password ? "signin-password-error" : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p id="signin-password-error" className="mt-2 text-sm text-red-700" role="alert">
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                aria-busy={isSubmitting}
              >
                <LogIn size={18} />
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>

              <div className="border-t-2 border-gray-200 pt-5 space-y-3">
                <Link
                  to={otpSignInPath}
                  className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded text-sm font-bold text-gray-800 hover:bg-gray-50"
                >
                  <Smartphone size={16} />
                  Sign in with OTP instead
                </Link>

                {signUpPath && (
                  <p className="text-center text-sm text-gray-700">
                    New to {serviceName}?{" "}
                    <Link to={signUpPath} className="font-bold text-[#000080] hover:underline">
                      Create an account
                    </Link>
                  </p>
                )}

                {codeDownloadPath && (
                  <p className="text-center text-sm text-gray-700">
                    Need this service code?{" "}
                    <Link to={codeDownloadPath} className="inline-flex items-center gap-1 font-bold text-[#000080] hover:underline">
                      <Download size={14} />
                      Download React code
                    </Link>
                  </p>
                )}
              </div>
            </form>
          </div>

          <InfoBanner
            variant="info"
            icon={HelpCircle}
            title="Need Help Signing In?"
            message={
              <p className="text-sm text-gray-700">
                Contact support if you are unable to access your account or if your account remains locked.
              </p>
            }
          >
            <Link
              to={helpPath}
              className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-[#000080] hover:underline"
            >
              <ArrowLeft size={14} className="rotate-180" />
              Get support
            </Link>
          </InfoBanner>
        </div>
      </main>

      <ServiceFooter
        leftText={`${serviceName} • Government of India`}
        rightText="Secure Sign In"
      />
    </div>
  );
}
