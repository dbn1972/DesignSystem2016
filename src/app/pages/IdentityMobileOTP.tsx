import { Link } from "react-router";
import { ArrowLeft, Shield, Smartphone, Check, RefreshCw, HelpCircle, CheckCircle, Info, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function IdentityMobileOTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

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
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      while (newOtp.length < 6) newOtp.push("");
      setOtp(newOtp);
    }
  };

  const handleResend = () => {
    setCountdown(30);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const isOtpComplete = otp.every(digit => digit !== "");

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
            <span className="font-bold">Flow:</span> Mobile OTP Verification
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
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

              {/* Form Content */}
              <div className="px-4 sm:px-8 lg:px-12 py-10">
                <div className="max-w-xl mx-auto">
                  {/* Icon and Title */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 border-2 border-blue-300 rounded-full mb-4">
                      <Smartphone size={40} className="text-blue-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-foreground mb-3">Verify Your Mobile Number</h1>
                    <p className="text-muted-foreground">
                      We've sent a 6-digit OTP to
                    </p>
                    <p className="text-lg font-bold text-foreground mt-2">+91 98765 43210</p>
                    <button className="text-sm text-primary font-bold hover:underline mt-2">
                      Change number
                    </button>
                  </div>

                  {/* OTP Input */}
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-foreground mb-4 text-center">
                      Enter OTP <span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-3 justify-center" onPaste={handlePaste}>
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          ref={(el) => (inputRefs.current[index] = el)}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          className="w-14 h-16 text-center text-2xl font-bold border-2 border-border rounded-lg focus:border-primary focus:outline-none text-foreground"
                          aria-label={`OTP digit ${index + 1}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground text-center mt-3">
                      Paste OTP if copied from SMS
                    </div>
                  </div>

                  {/* Countdown Timer */}
                  <div className="mb-6">
                    {!canResend ? (
                      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-blue-700">
                          <Clock size={20} />
                          <span className="font-bold">
                            Resend OTP in {countdown} seconds
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-3">Didn't receive the OTP?</p>
                        <button
                          onClick={handleResend}
                          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <RefreshCw size={18} />
                          Resend OTP
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Verify Button */}
                  <div className="mb-6">
                    <button
                      disabled={!isOtpComplete}
                      className={`w-full px-8 py-5 font-bold rounded-lg text-lg transition-colors ${
                        isOtpComplete
                          ? 'bg-primary text-white hover:opacity-90'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Verify & Continue
                    </button>
                  </div>

                  {/* Info Boxes */}
                  <div className="space-y-4">
                    {/* OTP Not Received */}
                    <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <Info size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-sm text-foreground mb-1">OTP Not Received?</div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Check your SMS inbox (OTP usually arrives within 30 seconds)</li>
                            <li>• Ensure your mobile has network coverage</li>
                            <li>• Try resending OTP after countdown completes</li>
                            <li>• Contact helpline if issue persists: <strong>1800-XXX-XXXX</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Security Notice */}
                    <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-600 p-4 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <Shield size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-sm text-foreground mb-1">Security Reminder</div>
                          <div className="text-sm text-muted-foreground">
                            Never share your OTP with anyone. Government officials will never ask for your OTP 
                            over phone, email, or SMS.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Verification */}
                  <div className="mt-8 text-center text-sm text-muted-foreground">
                    Having trouble with mobile OTP?{" "}
                    <Link to="/patterns/identity/otp-verification" className="text-primary font-bold hover:underline">
                      Try Email OTP instead
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Sidebar - 4 columns */}
          <div className="col-span-4 space-y-6 sticky top-24 self-start">
            <AnnotationPanel />
            <FlowNavigation />
            <HelpPanel />
          </div>

        </div>
      </div>
    </div>
  );
}

function AnnotationPanel() {
  return (
    <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden bg-blue-50">
      <div className="bg-blue-100 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Design Annotations</h3>
      </div>
      <div className="p-4">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>6 individual inputs with auto-advance on entry</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Paste support for codes copied from SMS</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>30-second countdown prevents spam resend</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Mobile number displayed for confirmation</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Clear troubleshooting guidance provided</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Fallback to email OTP if mobile fails</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Security warning about OTP sharing</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function FlowNavigation() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">OTP Verification Flow</h3>
      </div>
      <div className="p-4">
        <div className="space-y-3 text-sm">
          <FlowStep number="1" label="Mobile Number Entered" completed />
          <FlowStep number="2" label="OTP Sent" completed />
          <FlowStep number="3" label="Enter OTP" active />
          <FlowStep number="4" label="Verification Complete" />
        </div>
      </div>
    </div>
  );
}

function FlowStep({ number, label, active = false, completed = false }: { number: string; label: string; active?: boolean; completed?: boolean }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded ${
      active ? 'bg-blue-100 border-2 border-blue-300' : 
      completed ? 'bg-green-50 dark:bg-green-950/30 border-2 border-green-300' :
      'bg-background border-2 border-border'
    }`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
        active ? 'bg-primary text-white' : 
        completed ? 'bg-green-600 text-white' :
        'bg-gray-300 text-muted-foreground'
      }`}>
        {completed ? <Check size={16} /> : number}
      </div>
      <span className={`font-medium ${active || completed ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</span>
    </div>
  );
}

function HelpPanel() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3 flex items-center gap-2">
        <HelpCircle size={16} className="text-muted-foreground" />
        <h3 className="font-bold text-foreground text-sm">Need Help?</h3>
      </div>
      <div className="p-4 space-y-4 text-sm text-muted-foreground">
        <div>
          <div className="font-bold text-foreground mb-1">Helpline</div>
          <div className="text-primary font-bold">1800-XXX-XXXX</div>
          <div className="text-xs text-muted-foreground">Mon-Sat, 9 AM - 6 PM</div>
        </div>
        <div>
          <div className="font-bold text-foreground mb-1">Common Issues</div>
          <ul className="space-y-1 text-xs">
            <li>• OTP not received? Wait 30 sec, then resend</li>
            <li>• Network issues? <Link to="/patterns/identity/otp-verification" className="text-primary hover:underline">Try email OTP</Link></li>
            <li>• Wrong number? Go back and change</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
