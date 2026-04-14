import { Link } from "react-router";
import { ArrowLeft, Shield, Mail, RefreshCw, Info, HelpCircle, CheckCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function IdentityEmailOTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(120); // 2 minutes
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-advance to next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      // Focus last input
      const lastInput = document.getElementById("otp-5");
      lastInput?.focus();
    }
  };

  const handleResend = () => {
    setCountdown(120);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    // Focus first input
    const firstInput = document.getElementById("otp-0");
    firstInput?.focus();
  };

  const handleVerify = () => {
    setIsVerifying(true);
    // Simulate verification
    setTimeout(() => {
      setIsVerifying(false);
      // Navigate to success or next step
    }, 2000);
  };

  const isComplete = otp.every(digit => digit !== "");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/patterns/identity" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Identity Patterns</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            <span className="font-bold">Flow:</span> Email OTP Verification
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Prototype View - 8 columns */}
          <div className="col-span-8">
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden shadow-lg">
              {/* Tricolor Header */}
              <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 h-2"></div>
              
              {/* Government Header */}
              <div className="bg-card border-b-2 border-border px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                    <Shield size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-foreground">Digital India Portal</div>
                    <div className="text-sm text-muted-foreground">Government of India</div>
                  </div>
                </div>
              </div>

              {/* OTP Verification Content */}
              <div className="px-12 py-10">
                <div className="max-w-xl mx-auto text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail size={40} className="text-primary" />
                  </div>

                  {/* Heading */}
                  <h1 className="text-3xl font-bold text-foreground mb-3">Verify Your Email</h1>
                  <p className="text-muted-foreground mb-2">
                    We've sent a 6-digit verification code to
                  </p>
                  <p className="text-lg font-bold text-foreground mb-8">
                    user@example.com
                  </p>

                  {/* OTP Input */}
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-foreground mb-4 text-left">
                      Enter 6-Digit Code <span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-3 justify-center" onPaste={handlePaste}>
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          className="w-16 h-16 text-center text-2xl font-bold border-2 border-border rounded-lg focus:border-primary focus:outline-none"
                          aria-label={`Digit ${index + 1}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground mt-3 text-left">
                      <Info size={14} className="inline mr-1" />
                      You can paste the complete 6-digit code
                    </div>
                  </div>

                  {/* Timer/Resend */}
                  <div className="mb-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                    {!canResend ? (
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Clock size={16} className="text-blue-600" />
                        <span>
                          Code expires in <span className="font-bold">{Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}</span>
                        </span>
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground">
                        Didn't receive the code?{" "}
                        <button
                          onClick={handleResend}
                          className="text-primary font-bold hover:underline"
                        >
                          Resend Code
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Verify Button */}
                  <button
                    onClick={handleVerify}
                    disabled={!isComplete || isVerifying}
                    className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors mb-6"
                  >
                    {isVerifying ? "Verifying..." : "Verify Email"}
                  </button>

                  {/* Help Text */}
                  <div className="text-sm text-muted-foreground text-left space-y-2">
                    <p className="flex items-start gap-2">
                      <Info size={14} className="flex-shrink-0 mt-0.5" />
                      <span>Check your spam/junk folder if you don't see the email</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Info size={14} className="flex-shrink-0 mt-0.5" />
                      <span>Email delivery may take up to 2 minutes</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Help Card */}
              <div className="border-t-2 border-border bg-background px-12 py-6">
                <div className="max-w-xl mx-auto">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground mb-2">Need Help?</div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Call: <span className="font-bold">1800-XXX-XXXX</span> (Toll-Free)</p>
                        <p>Email: <span className="font-bold">support@digitalindia.gov.in</span></p>
                        <p className="text-muted-foreground">Monday to Friday, 9:00 AM - 6:00 PM IST</p>
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
            <UserGoals />
            <ValidationRules />
            <AccessibilityNotes />
            <ImplementationNotes />
          </aside>

        </div>
      </main>
    </div>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function PatternInfo() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground">Pattern Info</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <InfoRow label="Pattern ID" value="UX4G-PAT-009-04" />
        <InfoRow label="Status" value="Stable" badge="green" />
        <InfoRow label="Complexity" value="Low" />
        <InfoRow label="Category" value="Verification" />
        <InfoRow label="Version" value="1.0.0" />
      </div>
    </div>
  );
}

function UserGoals() {
  return (
    <div className="border-2 border-blue-200 rounded-lg overflow-hidden bg-blue-50">
      <div className="bg-blue-100 border-b-2 border-blue-200 px-4 py-3">
        <h3 className="font-bold text-foreground">User Goals</h3>
      </div>
      <div className="p-4 space-y-2 text-sm text-muted-foreground">
        <GoalItem text="Verify email address quickly" />
        <GoalItem text="Receive OTP code reliably" />
        <GoalItem text="Understand expiry time" />
        <GoalItem text="Resend code if not received" />
        <GoalItem text="Get help if needed" />
      </div>
    </div>
  );
}

function ValidationRules() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground">Validation Rules</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <RuleItem text="OTP must be exactly 6 digits" />
        <RuleItem text="OTP valid for 2 minutes (120 seconds)" />
        <RuleItem text="Maximum 3 resend attempts" />
        <RuleItem text="After 3 failed verifications, lock for 15 minutes" />
        <RuleItem text="Support paste functionality for convenience" />
      </div>
    </div>
  );
}

function AccessibilityNotes() {
  return (
    <div className="border-2 border-green-200 rounded-lg overflow-hidden bg-green-50">
      <div className="bg-green-100 border-b-2 border-green-200 px-4 py-3">
        <h3 className="font-bold text-foreground">Accessibility</h3>
      </div>
      <div className="p-4 space-y-2 text-sm text-muted-foreground">
        <AccessibilityItem text="Each OTP input has aria-label" />
        <AccessibilityItem text="Countdown announced to screen readers" />
        <AccessibilityItem text="Paste support for assistive tech" />
        <AccessibilityItem text="Clear focus indicators on inputs" />
        <AccessibilityItem text="All buttons keyboard accessible" />
      </div>
    </div>
  );
}

function ImplementationNotes() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground">Implementation</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <div>
          <div className="font-bold text-foreground mb-1">Auto-advance</div>
          <div>Focus next input when digit entered</div>
        </div>
        <div>
          <div className="font-bold text-foreground mb-1">Paste support</div>
          <div>Accept 6-digit code paste from clipboard</div>
        </div>
        <div>
          <div className="font-bold text-foreground mb-1">Timer</div>
          <div>Use setInterval for countdown display</div>
        </div>
        <div>
          <div className="font-bold text-foreground mb-1">Rate limiting</div>
          <div>Block after 3 resend attempts (backend)</div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function InfoRow({ label, value, badge }: { label: string; value: string; badge?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      {badge ? (
        <span className={`px-2 py-0.5 ${badge === 'green' ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'} text-xs font-bold rounded-full`}>
          {value}
        </span>
      ) : (
        <span className="font-bold text-foreground">{value}</span>
      )}
    </div>
  );
}

function GoalItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function RuleItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-1.5"></div>
      <span className="text-muted-foreground">{text}</span>
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
