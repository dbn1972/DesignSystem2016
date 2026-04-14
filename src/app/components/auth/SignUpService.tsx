import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, CheckCircle, Download, Eye, EyeOff, Info, UserPlus } from "lucide-react";

import { InfoBanner } from "../certificate/InfoBanner";
import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import { registerUser, type SignUpFailureState } from "../../services/signUpService";
import { email as validateEmail, mobileNumber as validateMobileNumber, required } from "../../services/validation";

interface SignUpServiceProps {
  category: string;
  title: string;
  subtitle: string;
  backLink: string;
  backText: string;
  signInPath: string;
  verifyOtpPath: string;
  helpPath: string;
  serviceName: string;
  codeDownloadPath?: string;
}

interface FormState {
  fullName: string;
  mobileNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreeTerms?: string;
}

const failureVariantMap: Record<SignUpFailureState, "error" | "warning" | "info" | "success"> = {
  "mobile-already-registered": "error",
  "service-unavailable": "error",
  "validation-error": "warning",
};

export function SignUpService({
  category,
  title,
  subtitle,
  backLink,
  backText,
  signInPath,
  verifyOtpPath,
  helpPath,
  serviceName,
  codeDownloadPath,
}: SignUpServiceProps) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ state: SignUpFailureState; message: string } | null>(null);
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const setField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setStatus(null);
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    const fullNameCheck = required(formData.fullName, "Full name");
    if (!fullNameCheck.valid) nextErrors.fullName = fullNameCheck.error;

    const mobileCheck = validateMobileNumber(formData.mobileNumber);
    if (!mobileCheck.valid) nextErrors.mobileNumber = mobileCheck.error;

    if (formData.email.trim()) {
      const emailCheck = validateEmail(formData.email.trim());
      if (!emailCheck.valid) nextErrors.email = emailCheck.error;
    }

    if (!formData.password.trim()) {
      nextErrors.password = "Password is required.";
    } else if (formData.password.trim().length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword.trim()) {
      nextErrors.confirmPassword = "Confirm your password.";
    } else if (formData.confirmPassword !== formData.password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.agreeTerms) {
      nextErrors.agreeTerms = "You must agree to the terms and privacy policy.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await registerUser({
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        email: formData.email || undefined,
        password: formData.password,
      });

      if (!result.success) {
        setStatus({ state: (result as any).state, message: (result as any).message });
        return;
      }

      navigate(verifyOtpPath);
    } finally {
      setIsSubmitting(false);
    }
  };

  const passwordStrength =
    formData.password.length >= 12 ? "strong" : formData.password.length >= 8 ? "medium" : "weak";

  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader
        icon={UserPlus}
        iconColor="bg-green-600"
        category={category}
        title={title}
        backLink={backLink}
        backText={backText}
      />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-green-50 border-b-2 border-green-300 px-6 sm:px-8 py-6">
              <h2 className="text-xl font-bold text-foreground">{subtitle}</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Create your account to access secure government services.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5" noValidate>
              {status && (
                <InfoBanner
                  variant={failureVariantMap[status.state]}
                  title={status.state === "mobile-already-registered" ? "Account Already Exists" : "Unable to Continue"}
                  message={status.message}
                />
              )}

              <FormField label="Full Name" required error={errors.fullName}>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(event) => setField("fullName", event.target.value)}
                  placeholder="Enter your full name"
                  className={inputClass(Boolean(errors.fullName))}
                />
              </FormField>

              <FormField label="Mobile Number" required error={errors.mobileNumber}>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(event) => setField("mobileNumber", event.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="Enter 10-digit mobile number"
                  className={inputClass(Boolean(errors.mobileNumber))}
                  maxLength={10}
                />
                <p className="mt-2 text-xs text-muted-foreground">OTP will be sent to this number for verification.</p>
              </FormField>

              <FormField label="Email Address (Optional)" error={errors.email}>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setField("email", event.target.value)}
                  placeholder="your.email@example.com"
                  className={inputClass(Boolean(errors.email))}
                />
              </FormField>

              <FormField label="Create Password" required error={errors.password}>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(event) => setField("password", event.target.value)}
                    placeholder="Minimum 8 characters"
                    className={`${inputClass(Boolean(errors.password))} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {formData.password && (
                  <p className="mt-2 text-xs text-muted-foreground">Password strength: <span className="font-bold capitalize">{passwordStrength}</span></p>
                )}
              </FormField>

              <FormField label="Confirm Password" required error={errors.confirmPassword}>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(event) => setField("confirmPassword", event.target.value)}
                  placeholder="Re-enter your password"
                  className={inputClass(Boolean(errors.confirmPassword))}
                />
              </FormField>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(event) => setField("agreeTerms", event.target.checked)}
                    className="w-4 h-4 mt-0.5 border-2 border-border rounded"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to the Terms and Conditions and Privacy Policy.
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="mt-2 text-sm text-red-700" role="alert">{errors.agreeTerms}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-green-700 text-white font-bold rounded text-sm hover:bg-green-600 disabled:opacity-70"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>

              <div className="border-t-2 border-border pt-4 space-y-2 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to={signInPath} className="font-bold text-primary hover:underline">Sign in</Link>
                </p>
                {codeDownloadPath && (
                  <p className="text-sm text-muted-foreground">
                    Need this service code?{" "}
                    <Link to={codeDownloadPath} className="inline-flex items-center gap-1 font-bold text-primary hover:underline">
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
            icon={Info}
            title="Benefits of Creating an Account"
            message={
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Track all your applications in one place.</li>
                <li>Save and resume applications anytime.</li>
                <li>Get notifications for every status change.</li>
                <li>Download issued certificates from your account.</li>
              </ul>
            }
          >
            <Link to={helpPath} className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-primary hover:underline">
              <ArrowLeft size={14} className="rotate-180" />
              Get support
            </Link>
          </InfoBanner>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Create Account" />
    </div>
  );
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-foreground mb-2">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="mt-2 text-sm text-red-700" role="alert">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 border-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring ${
    hasError ? "border-red-300 bg-red-50" : "border-border bg-card"
  }`;
}
