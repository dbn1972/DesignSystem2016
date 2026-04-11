import { Link } from "react-router";
import { ArrowLeft, Shield, Key, Eye, EyeOff, Check, X, Phone, Mail, Info, HelpCircle, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function IdentityForgotPassword() {
  const [step, setStep] = useState<"identify" | "verify" | "reset" | "success">("identify");
  const [recoveryMethod, setRecoveryMethod] = useState<"mobile" | "email">("mobile");
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRequirements = [
    { label: "At least 8 characters", met: newPassword.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(newPassword) },
    { label: "One lowercase letter", met: /[a-z]/.test(newPassword) },
    { label: "One number", met: /[0-9]/.test(newPassword) },
    { label: "One special character", met: /[!@#$%^&*]/.test(newPassword) }
  ];

  const allRequirementsMet = passwordRequirements.every(req => req.met);
  const passwordsMatch = newPassword === confirmPassword && confirmPassword !== "";

  const handleSendOTP = () => {
    // Validate identifier and send OTP
    setStep("verify");
  };

  const handleVerifyOTP = () => {
    // Verify OTP code
    setStep("reset");
  };

  const handleResetPassword = () => {
    // Reset password
    setStep("success");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/patterns/identity" className="flex items-center gap-2 text-gray-700 hover:text-[#000080]">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Identity Patterns</span>
          </Link>
          <div className="text-sm text-gray-600">
            <span className="font-bold">Flow:</span> Forgot Password / Reset
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Prototype View - 8 columns */}
          <div className="col-span-8">
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
              {/* Tricolor Header */}
              <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 h-2"></div>
              
              {/* Government Header */}
              <div className="bg-white border-b-2 border-gray-300 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#000080] rounded flex items-center justify-center">
                      <Shield size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">Digital India Portal</div>
                      <div className="text-sm text-gray-600">Government of India</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Remember password? <Link to="/patterns/identity/sign-in" className="text-[#000080] font-bold hover:underline">Sign In</Link>
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="bg-gray-100 border-b-2 border-gray-300 px-12 py-4">
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  <ProgressStep number={1} label="Identify" active={step === "identify"} completed={step !== "identify"} />
                  <div className={`flex-1 h-0.5 mx-2 ${step !== "identify" ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <ProgressStep number={2} label="Verify OTP" active={step === "verify"} completed={step === "reset" || step === "success"} />
                  <div className={`flex-1 h-0.5 mx-2 ${step === "reset" || step === "success" ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <ProgressStep number={3} label="Reset Password" active={step === "reset"} completed={step === "success"} />
                  <div className={`flex-1 h-0.5 mx-2 ${step === "success" ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <ProgressStep number={4} label="Complete" active={step === "success"} completed={false} />
                </div>
              </div>

              {/* Form Content */}
              <div className="px-12 py-10">
                <div className="max-w-2xl mx-auto">
                  {/* Step 1: Identify Account */}
                  {step === "identify" && (
                    <div>
                      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Key size={40} className="text-red-600" />
                      </div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">Reset Your Password</h1>
                      <p className="text-gray-600 mb-8 text-center">
                        Enter your registered mobile number or email to receive a verification code
                      </p>

                      {/* Recovery Method Selection */}
                      <div className="mb-6">
                        <label className="block text-sm font-bold text-gray-900 mb-3">
                          Choose Recovery Method
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            onClick={() => setRecoveryMethod("mobile")}
                            className={`flex items-center gap-3 p-4 border-2 rounded-lg font-medium transition-colors ${
                              recoveryMethod === "mobile"
                                ? 'border-[#000080] bg-blue-50 text-[#000080]'
                                : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                            }`}
                          >
                            <Phone size={20} />
                            <span>Mobile Number</span>
                            {recoveryMethod === "mobile" && <Check size={20} className="ml-auto" />}
                          </button>
                          <button
                            onClick={() => setRecoveryMethod("email")}
                            className={`flex items-center gap-3 p-4 border-2 rounded-lg font-medium transition-colors ${
                              recoveryMethod === "email"
                                ? 'border-[#000080] bg-blue-50 text-[#000080]'
                                : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                            }`}
                          >
                            <Mail size={20} />
                            <span>Email Address</span>
                            {recoveryMethod === "email" && <Check size={20} className="ml-auto" />}
                          </button>
                        </div>
                      </div>

                      {/* Input Field */}
                      <div className="mb-8">
                        <label htmlFor="identifier" className="block text-sm font-bold text-gray-900 mb-2">
                          {recoveryMethod === "mobile" ? "Mobile Number" : "Email Address"} <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          {recoveryMethod === "mobile" ? (
                            <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          ) : (
                            <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          )}
                          <input
                            type={recoveryMethod === "mobile" ? "tel" : "email"}
                            id="identifier"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg text-gray-900 focus:border-[#000080] focus:outline-none text-lg"
                            placeholder={recoveryMethod === "mobile" ? "+91 XXXXX XXXXX" : "your.email@example.com"}
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleSendOTP}
                        disabled={!identifier}
                        className="w-full py-4 bg-[#000080] text-white font-bold rounded-lg hover:bg-[#000060] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                      >
                        Send Verification Code
                      </button>
                    </div>
                  )}

                  {/* Step 2: Verify OTP */}
                  {step === "verify" && (
                    <div>
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        {recoveryMethod === "mobile" ? <Phone size={40} className="text-[#000080]" /> : <Mail size={40} className="text-[#000080]" />}
                      </div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">Enter Verification Code</h1>
                      <p className="text-gray-600 mb-2 text-center">
                        We've sent a 6-digit code to
                      </p>
                      <p className="text-lg font-bold text-gray-900 mb-8 text-center">
                        {identifier}
                      </p>

                      <div className="mb-8">
                        <label htmlFor="otp" className="block text-sm font-bold text-gray-900 mb-2">
                          Verification Code <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                          className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-center text-2xl font-bold tracking-widest focus:border-[#000080] focus:outline-none"
                          placeholder="______"
                          maxLength={6}
                        />
                        <div className="text-sm text-gray-600 mt-2">
                          Didn't receive the code? <button className="text-[#000080] font-bold hover:underline">Resend Code</button>
                        </div>
                      </div>

                      <button
                        onClick={handleVerifyOTP}
                        disabled={otp.length !== 6}
                        className="w-full py-4 bg-[#000080] text-white font-bold rounded-lg hover:bg-[#000060] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                      >
                        Verify Code
                      </button>
                    </div>
                  )}

                  {/* Step 3: Reset Password */}
                  {step === "reset" && (
                    <div>
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Key size={40} className="text-green-600" />
                      </div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">Create New Password</h1>
                      <p className="text-gray-600 mb-8 text-center">
                        Choose a strong password that you haven't used before
                      </p>

                      {/* New Password */}
                      <div className="mb-6">
                        <label htmlFor="newPassword" className="block text-sm font-bold text-gray-900 mb-2">
                          New Password <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <Key size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type={showNewPassword ? "text" : "password"}
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full pl-12 pr-12 py-4 border-2 border-gray-300 rounded-lg text-gray-900 focus:border-[#000080] focus:outline-none text-lg"
                            placeholder="Enter new password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>

                      {/* Password Requirements */}
                      <div className="mb-6 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg">
                        <div className="text-sm font-bold text-gray-900 mb-3">Password must contain:</div>
                        <div className="grid grid-cols-2 gap-2">
                          {passwordRequirements.map((req, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              {req.met ? (
                                <Check size={14} className="text-green-600" />
                              ) : (
                                <X size={14} className="text-gray-400" />
                              )}
                              <span className={req.met ? "text-green-700" : "text-gray-600"}>{req.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Confirm Password */}
                      <div className="mb-8">
                        <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-900 mb-2">
                          Confirm New Password <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <Key size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full pl-12 pr-12 py-4 border-2 border-gray-300 rounded-lg text-gray-900 focus:border-[#000080] focus:outline-none text-lg"
                            placeholder="Re-enter new password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                        {confirmPassword && !passwordsMatch && (
                          <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
                            <X size={14} />
                            <span>Passwords do not match</span>
                          </div>
                        )}
                        {passwordsMatch && (
                          <div className="flex items-center gap-2 mt-2 text-sm text-green-600">
                            <Check size={14} />
                            <span>Passwords match</span>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={handleResetPassword}
                        disabled={!allRequirementsMet || !passwordsMatch}
                        className="w-full py-4 bg-[#000080] text-white font-bold rounded-lg hover:bg-[#000060] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                      >
                        Reset Password
                      </button>
                    </div>
                  )}

                  {/* Step 4: Success */}
                  {step === "success" && (
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-600" />
                      </div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-3">Password Reset Successful!</h1>
                      <p className="text-gray-600 mb-8">
                        Your password has been changed successfully. You can now sign in with your new password.
                      </p>

                      <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg mb-8">
                        <div className="flex items-start gap-3 text-left">
                          <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-gray-700">
                            <div className="font-bold text-gray-900 mb-2">Security Tip</div>
                            <ul className="space-y-1 text-gray-700">
                              <li>• Don't share your password with anyone</li>
                              <li>• Use a unique password for this account</li>
                              <li>• Change your password regularly</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/patterns/identity/sign-in"
                        className="block w-full py-4 bg-[#000080] text-white font-bold rounded-lg hover:bg-[#000060] transition-colors text-center"
                      >
                        Go to Sign In
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Help Card */}
              <div className="border-t-2 border-gray-300 bg-gray-50 px-12 py-6">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={20} className="text-[#000080] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 mb-2">Need Help?</div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p>Call: <span className="font-bold">1800-XXX-XXXX</span> (Toll-Free)</p>
                        <p>Email: <span className="font-bold">support@digitalindia.gov.in</span></p>
                        <p className="text-gray-600">Monday to Friday, 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Sidebar - 4 columns */}
          <aside className="col-span-4 space-y-6">
            <PatternInfo />
            <UserJourney />
            <SecurityConsiderations />
            <AccessibilityNotes />
            <ImplementationNotes />
          </aside>

        </div>
      </main>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function ProgressStep({ number, label, active, completed }: { number: number; label: string; active: boolean; completed: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 ${
        completed
          ? 'bg-green-500 border-green-500 text-white'
          : active
          ? 'bg-[#000080] border-[#000080] text-white'
          : 'bg-white border-gray-300 text-gray-400'
      }`}>
        {completed ? <Check size={18} /> : number}
      </div>
      <div className={`text-xs font-medium ${active ? 'text-gray-900' : 'text-gray-500'}`}>{label}</div>
    </div>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function PatternInfo() {
  return (
    <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
      <div className="bg-gray-100 border-b-2 border-gray-300 px-4 py-3">
        <h3 className="font-bold text-gray-900">Pattern Info</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <InfoRow label="Pattern ID" value="UX4G-PAT-009-05" />
        <InfoRow label="Status" value="Stable" badge="green" />
        <InfoRow label="Complexity" value="Medium" />
        <InfoRow label="Category" value="Recovery" />
        <InfoRow label="Version" value="1.0.0" />
      </div>
    </div>
  );
}

function UserJourney() {
  return (
    <div className="border-2 border-blue-200 rounded-lg overflow-hidden bg-blue-50">
      <div className="bg-blue-100 border-b-2 border-blue-200 px-4 py-3">
        <h3 className="font-bold text-gray-900">User Journey</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-gray-700">
        <JourneyStep number="1" text="Identify account (mobile/email)" />
        <JourneyStep number="2" text="Receive OTP verification code" />
        <JourneyStep number="3" text="Verify OTP code" />
        <JourneyStep number="4" text="Create new password" />
        <JourneyStep number="5" text="Confirm password reset" />
      </div>
    </div>
  );
}

function SecurityConsiderations() {
  return (
    <div className="border-2 border-red-200 rounded-lg overflow-hidden bg-red-50">
      <div className="bg-red-100 border-b-2 border-red-200 px-4 py-3">
        <h3 className="font-bold text-gray-900">Security</h3>
      </div>
      <div className="p-4 space-y-2 text-sm text-gray-700">
        <SecurityItem text="Rate limit reset attempts (3 per hour)" />
        <SecurityItem text="OTP valid for 10 minutes only" />
        <SecurityItem text="Log all password reset attempts" />
        <SecurityItem text="Send notification email after reset" />
        <SecurityItem text="Require re-login after reset" />
      </div>
    </div>
  );
}

function AccessibilityNotes() {
  return (
    <div className="border-2 border-green-200 rounded-lg overflow-hidden bg-green-50">
      <div className="bg-green-100 border-b-2 border-green-200 px-4 py-3">
        <h3 className="font-bold text-gray-900">Accessibility</h3>
      </div>
      <div className="p-4 space-y-2 text-sm text-gray-700">
        <AccessibilityItem text="Progress indicator visible and announced" />
        <AccessibilityItem text="All form fields properly labeled" />
        <AccessibilityItem text="Password requirements announced" />
        <AccessibilityItem text="Error messages linked to fields" />
        <AccessibilityItem text="Keyboard navigation throughout" />
      </div>
    </div>
  );
}

function ImplementationNotes() {
  return (
    <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
      <div className="bg-gray-100 border-b-2 border-gray-300 px-4 py-3">
        <h3 className="font-bold text-gray-900">Implementation</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-gray-700">
        <div>
          <div className="font-bold text-gray-900 mb-1">Step management</div>
          <div>Use state to track current step (identify → verify → reset → success)</div>
        </div>
        <div>
          <div className="font-bold text-gray-900 mb-1">OTP delivery</div>
          <div>Send via SMS Gateway or Email Service with retry logic</div>
        </div>
        <div>
          <div className="font-bold text-gray-900 mb-1">Password validation</div>
          <div>Real-time validation with visual feedback for each requirement</div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function InfoRow({ label, value, badge }: { label: string; value: string; badge?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-600">{label}</span>
      {badge ? (
        <span className={`px-2 py-0.5 ${badge === 'green' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'} text-xs font-bold rounded-full`}>
          {value}
        </span>
      ) : (
        <span className="font-bold text-gray-900">{value}</span>
      )}
    </div>
  );
}

function JourneyStep({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold text-xs">
        {number}
      </div>
      <span>{text}</span>
    </div>
  );
}

function SecurityItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <AlertCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function AccessibilityItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}
