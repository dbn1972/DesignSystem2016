import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Key, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";

export default function CertificateForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'mobile' | 'otp' | 'newPassword'>('mobile');
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setStep('otp');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <Link 
            to="/reference-service/certificate/sign-in"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={16} />
            Back to Sign In
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-orange-600 rounded flex items-center justify-center">
              <Key size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Account Recovery</div>
              <h1 className="text-2xl font-bold text-gray-900">Reset Your Password</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="max-w-lg mx-auto">
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <StepBadge number={1} label="Mobile" active={step === 'mobile'} completed={step === 'otp' || step === 'newPassword'} />
            <div className={`w-12 h-0.5 ${step !== 'mobile' ? 'bg-green-600' : 'bg-gray-300'}`}></div>
            <StepBadge number={2} label="Verify OTP" active={step === 'otp'} completed={step === 'newPassword'} />
            <div className={`w-12 h-0.5 ${step === 'newPassword' ? 'bg-green-600' : 'bg-gray-300'}`}></div>
            <StepBadge number={3} label="New Password" active={step === 'newPassword'} completed={false} />
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            
            {/* Step 1: Mobile Number */}
            {step === 'mobile' && (
              <>
                <div className="bg-orange-50 border-b-2 border-orange-300 px-8 py-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Enter Mobile Number</h2>
                  <p className="text-sm text-gray-700">
                    Enter the mobile number registered with your account
                  </p>
                </div>
                
                <form onSubmit={handleSendOTP} className="p-8">
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Mobile Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value.replace(/\D/g, '').slice(0, 10));
                        setError("");
                      }}
                      placeholder="Enter 10-digit mobile number"
                      className={`w-full px-4 py-3 border-2 rounded text-sm ${
                        error ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                      maxLength={10}
                    />
                    {error && (
                      <div className="mt-2 flex items-start gap-2 text-sm text-red-700">
                        <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900"
                  >
                    Send OTP
                  </button>

                  <div className="mt-6 text-center">
                    <Link
                      to="/reference-service/certificate/sign-in"
                      className="text-sm text-[#000080] font-bold hover:underline"
                    >
                      Remember your password? Sign In
                    </Link>
                  </div>
                </form>
              </>
            )}

            {/* Step 2: OTP Verification */}
            {step === 'otp' && (
              <>
                <div className="bg-purple-50 border-b-2 border-purple-300 px-8 py-6 text-center">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Verify OTP</h2>
                  <p className="text-sm text-gray-700">
                    Enter the 6-digit code sent to +91 {mobile.slice(0,2)}XXXXXX{mobile.slice(-2)}
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    {[...Array(6)].map((_, i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength={1}
                        className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded focus:outline-none focus:border-[#000080]"
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setStep('newPassword')}
                    className="w-full px-6 py-4 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900 mb-4"
                  >
                    Verify OTP
                  </button>

                  <div className="text-center">
                    <button className="text-sm text-[#000080] font-bold hover:underline">
                      Resend OTP
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Step 3: New Password */}
            {step === 'newPassword' && (
              <>
                <div className="bg-green-50 border-b-2 border-green-300 px-8 py-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Create New Password</h2>
                  <p className="text-sm text-gray-700">
                    Choose a strong password for your account
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        New Password <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Enter new password"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Confirm Password <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Re-enter new password"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Password Requirements:</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-green-600" />
                        Minimum 8 characters
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-green-600" />
                        At least one uppercase letter
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-green-600" />
                        At least one number
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => navigate('/reference-service/certificate/sign-in')}
                    className="w-full px-6 py-4 bg-[#138808] text-white font-bold rounded text-sm hover:bg-green-700"
                  >
                    Reset Password
                  </button>
                </div>
              </>
            )}

          </div>

          {/* Help */}
          <div className="mt-6 bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">Need Help?</h3>
            <p className="text-sm text-gray-700 mb-3">
              If you don't have access to your registered mobile number, please contact support.
            </p>
            <Link to="/reference-service/certificate/help" className="text-sm text-[#000080] font-bold hover:underline">
              Contact Support →
            </Link>
          </div>

        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Password Reset</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StepBadge({ number, label, active, completed }: any) {
  return (
    <div className="text-center">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-1 ${
        completed ? 'bg-green-600 text-white' : active ? 'bg-[#000080] text-white' : 'bg-gray-200 text-gray-600'
      }`}>
        {completed ? '✓' : number}
      </div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  );
}
