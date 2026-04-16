import { Link } from "react-router";
import { ArrowLeft, Shield, Eye, EyeOff, Check, X, Phone, Mail, User, Lock, Info, HelpCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function IdentitySignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    consent: false
  });

  const passwordRequirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(password) },
    { label: "One lowercase letter", met: /[a-z]/.test(password) },
    { label: "One number", met: /[0-9]/.test(password) },
    { label: "One special character", met: /[!@#$%^&*]/.test(password) }
  ];

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
            <span className="font-bold">Flow:</span> Sign Up
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                      <Shield size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-foreground">Digital India Portal</div>
                      <div className="text-sm text-muted-foreground">Government of India</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Already have an account? <Link to="/patterns/identity/sign-in" className="text-primary font-bold hover:underline">Sign In</Link>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="px-4 sm:px-8 lg:px-12 py-10">
                <div className="max-w-2xl mx-auto">
                  <h1 className="text-3xl font-bold text-foreground mb-3">Create Your Account</h1>
                  <p className="text-muted-foreground mb-8">
                    Register to access government digital services. Your information is secure and will be used only for authentication.
                  </p>

                  <form className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-bold text-foreground mb-2">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg"
                          placeholder="Enter your full name as per Aadhaar"
                          required
                        />
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">Enter name exactly as it appears on government ID</div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-bold text-foreground mb-2">
                        Mobile Number <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <div className="absolute left-12 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">+91</div>
                        <input
                          type="tel"
                          id="mobile"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full pl-24 pr-4 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg font-mono"
                          placeholder="10-digit mobile number"
                          maxLength={10}
                          required
                        />
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">You will receive OTP on this number for verification</div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">Backup verification method and account recovery</div>
                    </div>

                    {/* Password */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-bold text-foreground mb-2">
                        Create Password <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setFormData({ ...formData, password: e.target.value });
                          }}
                          className="w-full pl-12 pr-14 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg font-mono"
                          placeholder="Enter strong password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-muted-foreground"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>

                      {/* Password Requirements */}
                      {password && (
                        <div className="mt-3 bg-background border-2 border-border rounded-lg p-4">
                          <div className="text-sm font-bold text-foreground mb-3">Password Requirements:</div>
                          <div className="grid grid-cols-2 gap-2">
                            {passwordRequirements.map((req, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                {req.met ? (
                                  <Check size={14} className="text-green-600" />
                                ) : (
                                  <X size={14} className="text-gray-400" />
                                )}
                                <span className={req.met ? "text-green-700" : "text-muted-foreground"}>{req.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-bold text-foreground mb-2">
                        Confirm Password <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          id="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          className="w-full pl-12 pr-14 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg font-mono"
                          placeholder="Re-enter password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-muted-foreground"
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                      {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                        <div className="text-sm text-red-600 mt-2 flex items-center gap-2">
                          <X size={14} />
                          Passwords do not match
                        </div>
                      )}
                    </div>

                    {/* Consent Checkbox */}
                    <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <input
                          type="checkbox"
                          id="consent"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
                          required
                        />
                        <label htmlFor="consent" className="text-sm text-muted-foreground flex-1">
                          I agree to the <a href="#" className="text-primary font-bold hover:underline">Terms of Service</a> and{" "}
                          <a href="#" className="text-primary font-bold hover:underline">Privacy Policy</a>. I understand my data will be used 
                          for authentication and service delivery as per government regulations.
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Link
                        to="/patterns/identity/mobile-otp"
                        className="block w-full px-8 py-5 bg-primary text-white font-bold rounded-lg hover:opacity-90 text-center text-lg transition-colors"
                      >
                        Create Account & Verify Mobile
                      </Link>
                    </div>
                  </form>

                  {/* Security Notice */}
                  <div className="mt-8 bg-green-50 dark:bg-green-950/30 border-l-4 border-green-600 p-4 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <Shield size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-sm text-foreground mb-1">Your data is secure</div>
                        <div className="text-sm text-muted-foreground">
                          All information is encrypted and stored securely. We will never share your personal data without your consent.
                        </div>
                      </div>
                    </div>
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
      </main>
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
            <span>Tricolor header establishes government trust</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Mobile number primary (78% of users prefer mobile OTP)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Password requirements shown in real-time (reduces errors)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Clear consent checkbox with linked policies</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Email as backup for account recovery</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Large touch targets (44px min) for mobile users</span>
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
        <h3 className="font-bold text-foreground text-sm">Sign Up Flow</h3>
      </div>
      <div className="p-4">
        <div className="space-y-3 text-sm">
          <FlowStep number="1" label="Enter Details" active={true} />
          <FlowStep number="2" label="Verify Mobile (OTP)" />
          <FlowStep number="3" label="Account Created" />
        </div>
      </div>
    </div>
  );
}

function FlowStep({ number, label, active = false }: { number: string; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded ${active ? 'bg-blue-100 border-2 border-blue-300' : 'bg-background border-2 border-border'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${active ? 'bg-primary text-white' : 'bg-gray-300 text-muted-foreground'}`}>
        {number}
      </div>
      <span className={`font-medium ${active ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</span>
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
          <div className="font-bold text-foreground mb-1">Email Support</div>
          <div className="text-primary font-bold">support@digitalindia.gov.in</div>
          <div className="text-xs text-muted-foreground">Response within 24 hours</div>
        </div>
        <div>
          <div className="font-bold text-foreground mb-1">Common Issues</div>
          <ul className="space-y-1 text-xs">
            <li>• Not receiving OTP? <a href="#" className="text-primary hover:underline">Troubleshoot</a></li>
            <li>• Password requirements? <a href="#" className="text-primary hover:underline">Learn more</a></li>
            <li>• Already registered? <Link to="/patterns/identity/sign-in" className="text-primary hover:underline">Sign in</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
