import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserPlus, Eye, EyeOff, ArrowLeft, AlertCircle, CheckCircle, Info } from "lucide-react";

export default function CertificateSignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: undefined });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (formData.mobile.length !== 10) newErrors.mobile = "Enter valid 10-digit mobile number";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter valid email address";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms and conditions";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/reference-service/certificate/verify-otp");
    }
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
            <div className="w-14 h-14 bg-green-600 rounded flex items-center justify-center">
              <UserPlus size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Certificate Application Service</div>
              <h1 className="text-2xl font-bold text-gray-900">Create New Account</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Sign Up Form - 6 columns centered */}
          <div className="col-span-12 lg:col-start-4 lg:col-span-6">
            
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              
              {/* Form Header */}
              <div className="bg-green-50 border-b-2 border-green-300 px-8 py-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Register to Apply</h2>
                <p className="text-sm text-gray-700">
                  Create an account to apply for government certificates online
                </p>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSignUp} className="p-8 space-y-6">
                
                {/* Full Name */}
                <FormField label="Full Name" required error={errors.fullName}>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                  />
                </FormField>

                {/* Mobile Number */}
                <FormField label="Mobile Number" required error={errors.mobile}>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Enter 10-digit mobile number"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.mobile ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                    maxLength={10}
                  />
                  <p className="mt-2 text-xs text-gray-600">
                    You will receive an OTP on this number for verification
                  </p>
                </FormField>

                {/* Email */}
                <FormField label="Email Address (Optional)" error={errors.email}>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                  />
                </FormField>

                {/* Password */}
                <FormField label="Create Password" required error={errors.password}>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      placeholder="Minimum 8 characters"
                      className={`w-full px-4 py-3 pr-12 border-2 rounded text-sm ${
                        errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <PasswordStrength password={formData.password} />
                </FormField>

                {/* Confirm Password */}
                <FormField label="Confirm Password" required error={errors.confirmPassword}>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange("confirmPassword", e.target.value)}
                    placeholder="Re-enter your password"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                  />
                </FormField>

                {/* Terms Agreement */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => handleChange("agreeTerms", e.target.checked)}
                      className="w-4 h-4 mt-0.5 border-2 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the{" "}
                      <a href="#" className="text-[#000080] font-bold hover:underline">Terms and Conditions</a>
                      {" "}and{" "}
                      <a href="#" className="text-[#000080] font-bold hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <div className="mt-2 flex items-start gap-2 text-sm text-red-700">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>{errors.agreeTerms}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#138808] text-white font-bold rounded text-sm hover:bg-green-700 transition-colors"
                >
                  Create Account
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

                {/* Sign In Link */}
                <div className="text-center">
                  <p className="text-sm text-gray-700 mb-3">
                    Already have an account?
                  </p>
                  <Link
                    to="/reference-service/certificate/sign-in"
                    className="inline-block px-6 py-3 border-2 border-[#000080] bg-white text-[#000080] font-bold rounded text-sm hover:bg-blue-50 transition-colors"
                  >
                    Sign In
                  </Link>
                </div>

              </form>
            </div>

            {/* Benefits */}
            <div className="mt-6 bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                <Info size={18} className="text-[#000080]" />
                Benefits of Creating an Account
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <BenefitPoint text="Track all your applications in one place" />
                <BenefitPoint text="Save and resume applications anytime" />
                <BenefitPoint text="Receive instant notifications on application status" />
                <BenefitPoint text="Download certificates directly to your account" />
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
            <div>Create Account</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function FormField({ 
  label, 
  required, 
  error, 
  children 
}: { 
  label: string; 
  required?: boolean; 
  error?: string; 
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-900 mb-2">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <div className="mt-2 flex items-start gap-2 text-sm text-red-700">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

function PasswordStrength({ password }: { password: string }) {
  if (!password) return null;
  
  const strength = password.length >= 12 ? 'strong' : password.length >= 8 ? 'medium' : 'weak';
  const color = strength === 'strong' ? 'bg-green-600' : strength === 'medium' ? 'bg-yellow-600' : 'bg-red-600';
  const width = strength === 'strong' ? 'w-full' : strength === 'medium' ? 'w-2/3' : 'w-1/3';
  
  return (
    <div className="mt-2">
      <div className="flex items-center gap-2 mb-1">
        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className={`h-full ${color} ${width} transition-all duration-300`}></div>
        </div>
        <span className="text-xs text-gray-600 capitalize">{strength}</span>
      </div>
    </div>
  );
}

function BenefitPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={14} className="text-[#000080] flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}
