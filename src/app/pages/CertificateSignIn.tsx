import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Shield, Eye, EyeOff, ArrowLeft, CheckCircle, Info, AlertCircle } from "lucide-react";

export default function CertificateSignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ mobile?: string; password?: string }>({});

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: { mobile?: string; password?: string } = {};
    
    if (!mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (mobile.length !== 10) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Mock successful sign in - navigate to start application
    navigate("/reference-service/certificate/start");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <Link 
            to="/reference-service/demo"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={16} />
            Back to Service Home
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-[#000080] rounded flex items-center justify-center">
              <Shield size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Certificate Application Service</div>
              <h1 className="text-2xl font-bold text-gray-900">Sign In to Your Account</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Sign In Form - 6 columns centered */}
          <div className="col-span-12 lg:col-start-4 lg:col-span-6">
            
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              
              {/* Form Header */}
              <div className="bg-blue-50 border-b-2 border-blue-300 px-8 py-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-sm text-gray-700">
                  Sign in to continue with your certificate application
                </p>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSignIn} className="p-8 space-y-6">
                
                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobile" className="block text-sm font-bold text-gray-900 mb-2">
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value.replace(/\D/g, '').slice(0, 10));
                      setErrors({ ...errors, mobile: undefined });
                    }}
                    placeholder="Enter 10-digit mobile number"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.mobile 
                        ? 'border-red-300 bg-red-50' 
                        : 'border-gray-300 bg-white'
                    } focus:outline-none focus:border-[#000080]`}
                    maxLength={10}
                  />
                  {errors.mobile && (
                    <div className="mt-2 flex items-start gap-2 text-sm text-red-700">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>{errors.mobile}</span>
                    </div>
                  )}
                  <p className="mt-2 text-xs text-gray-600">
                    Use the mobile number registered with your account
                  </p>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-bold text-gray-900 mb-2">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrors({ ...errors, password: undefined });
                      }}
                      placeholder="Enter your password"
                      className={`w-full px-4 py-3 pr-12 border-2 rounded text-sm ${
                        errors.password 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-300 bg-white'
                      } focus:outline-none focus:border-[#000080]`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="mt-2 flex items-start gap-2 text-sm text-red-700">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>{errors.password}</span>
                    </div>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 border-2 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">Remember me</span>
                  </label>
                  <Link 
                    to="/reference-service/certificate/forgot-password"
                    className="text-sm text-[#000080] font-bold hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900 transition-colors"
                >
                  Sign In
                </button>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-gray-600">or</span>
                  </div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-sm text-gray-700 mb-3">
                    Don't have an account?
                  </p>
                  <Link
                    to="/reference-service/certificate/signup"
                    className="inline-block px-6 py-3 border-2 border-[#000080] bg-white text-[#000080] font-bold rounded text-sm hover:bg-blue-50 transition-colors"
                  >
                    Create New Account
                  </Link>
                </div>

              </form>
            </div>

            {/* Security Notice */}
            <div className="mt-6 bg-green-50 border-2 border-green-300 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                <Shield size={18} className="text-green-600" />
                Your Account is Secure
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <SecurityPoint text="All data is encrypted using industry-standard protocols" />
                <SecurityPoint text="Your password is never stored in plain text" />
                <SecurityPoint text="Sessions expire automatically for your security" />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Secure Sign In</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SecurityPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}