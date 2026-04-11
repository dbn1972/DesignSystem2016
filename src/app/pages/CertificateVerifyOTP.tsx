import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Shield, ArrowLeft, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";

export default function CertificateVerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const mobileNumber = "9876543210";
  const maskedNumber = `${mobileNumber.slice(0, 2)}XXXXXX${mobileNumber.slice(-2)}`;

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all 6 digits are entered
    if (newOtp.every(digit => digit) && index === 5) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = pastedData.split("").concat(Array(6 - pastedData.length).fill("")).slice(0, 6);
    setOtp(newOtp);
    
    if (pastedData.length === 6) {
      handleVerify(pastedData);
    }
  };

  const handleVerify = (otpValue: string) => {
    // Mock verification - accept "123456" as valid
    if (otpValue === "123456") {
      navigate("/reference-service/certificate/start");
    } else {
      setError("Invalid OTP. Please try again.");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    }
  };

  const handleResend = () => {
    setTimer(30);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    setError("");
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <Link 
            to="/reference-service/certificate/sign-up"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={16} />
            Back to Sign Up
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-purple-600 rounded flex items-center justify-center">
              <Shield size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Mobile Verification</div>
              <h1 className="text-2xl font-bold text-gray-900">Verify OTP</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="max-w-lg mx-auto">
          
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            
            {/* Form Header */}
            <div className="bg-purple-50 border-b-2 border-purple-300 px-8 py-6 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Enter Verification Code</h2>
              <p className="text-sm text-gray-700">
                We have sent a 6-digit OTP to
              </p>
              <p className="text-sm font-bold text-gray-900 mt-1">
                +91 {maskedNumber}
              </p>
            </div>

            {/* OTP Input */}
            <div className="p-8">
              
              <div className="mb-6">
                <div className="flex items-center justify-center gap-3" onPaste={handlePaste}>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className={`w-14 h-14 text-center text-2xl font-bold border-2 rounded ${
                        error 
                          ? 'border-red-300 bg-red-50' 
                          : digit 
                            ? 'border-green-600 bg-green-50' 
                            : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                      autoFocus={index === 0}
                    />
                  ))}
                </div>
                
                {error && (
                  <div className="mt-4 flex items-start gap-2 text-sm text-red-700 justify-center">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}
              </div>

              {/* Resend OTP */}
              <div className="text-center mb-6">
                {canResend ? (
                  <button
                    onClick={handleResend}
                    className="text-sm text-[#000080] font-bold hover:underline flex items-center gap-2 mx-auto"
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

              {/* Manual Verify Button */}
              <button
                onClick={() => handleVerify(otp.join(""))}
                disabled={otp.some(digit => !digit)}
                className={`w-full px-6 py-4 font-bold rounded text-sm ${
                  otp.every(digit => digit)
                    ? 'bg-[#138808] text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Verify OTP
              </button>

              {/* Help Text */}
              <div className="mt-6 pt-6 border-t-2 border-gray-300">
                <p className="text-xs text-gray-600 text-center mb-2">
                  For testing purposes, use OTP: <span className="font-bold text-gray-900">123456</span>
                </p>
              </div>

            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm">
              <Shield size={18} className="text-[#000080]" />
              Security Tips
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <SecurityTip text="Never share your OTP with anyone, including officials" />
              <SecurityTip text="OTP is valid for 10 minutes only" />
              <SecurityTip text="If you didn't request this OTP, please ignore it" />
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>OTP Verification</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SecurityTip({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={14} className="text-[#000080] flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}
