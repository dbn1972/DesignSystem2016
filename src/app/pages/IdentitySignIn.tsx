import { Link } from "react-router";
import { ArrowLeft, Shield, Eye, EyeOff, User, Lock, HelpCircle, CheckCircle, Smartphone, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function IdentitySignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false
  });

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
            <span className="font-bold">Flow:</span> Sign In
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
                    New user? <Link to="/patterns/identity/sign-up" className="text-primary font-bold hover:underline">Create Account</Link>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="px-4 sm:px-8 lg:px-12 py-10">
                <div className="max-w-xl mx-auto">
                  <h1 className="text-3xl font-bold text-foreground mb-3">Sign In to Your Account</h1>
                  <p className="text-muted-foreground mb-8">
                    Access your government services dashboard using your registered mobile number or email.
                  </p>

                  <form className="space-y-6">
                    {/* Username/Mobile */}
                    <div>
                      <label htmlFor="username" className="block text-sm font-bold text-foreground mb-2">
                        Mobile Number or Email <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          id="username"
                          value={formData.username}
                          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg"
                          placeholder="Enter mobile number or email"
                          required
                        />
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">Use your registered mobile number (10 digits) or email address</div>
                    </div>

                    {/* Password */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="password" className="block text-sm font-bold text-foreground">
                          Password <span className="text-red-600">*</span>
                        </label>
                        <Link to="/patterns/identity/forgot-password" className="text-sm text-primary font-bold hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="w-full pl-12 pr-14 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg font-mono"
                          placeholder="Enter your password"
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
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        checked={formData.rememberMe}
                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                        className="w-5 h-5 border-2 border-gray-400 rounded"
                      />
                      <label htmlFor="rememberMe" className="text-sm text-muted-foreground">
                        Keep me signed in on this device
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full px-8 py-5 bg-primary text-white font-bold rounded-lg hover:opacity-90 text-lg transition-colors"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>

                  {/* Alternative Sign In Methods */}
                  <div className="mt-8">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-2 border-border"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-card text-muted-foreground font-medium">Or sign in with</span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <Link
                        to="/patterns/identity/mobile-otp"
                        className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-border rounded-lg hover:border-primary hover:bg-blue-50 transition-colors"
                      >
                        <Smartphone size={20} className="text-primary" />
                        <span className="font-bold text-foreground">Mobile OTP</span>
                      </Link>
                      <Link
                        to="/patterns/identity/aadhaar-auth"
                        className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-border rounded-lg hover:border-primary hover:bg-blue-50 transition-colors"
                      >
                        <Shield size={20} className="text-primary" />
                        <span className="font-bold text-foreground">Aadhaar</span>
                      </Link>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <Shield size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-sm text-foreground mb-1">Secure Connection</div>
                        <div className="text-sm text-muted-foreground">
                          Your login credentials are encrypted. Never share your password with anyone.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Account Recovery */}
                  <div className="mt-6 text-center text-sm text-muted-foreground">
                    Can't access your account? <Link to="/patterns/identity/account-recovery" className="text-primary font-bold hover:underline">Account Recovery</Link>
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
            <span>Accepts both mobile and email for flexibility</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>"Forgot Password" link prominently placed</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Password show/hide toggle for accessibility</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Alternative auth methods (OTP, Aadhaar) visible</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Account recovery path clearly signposted</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>Security reassurance messaging present</span>
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
        <h3 className="font-bold text-foreground text-sm">Sign In Options</h3>
      </div>
      <div className="p-4">
        <div className="space-y-3 text-sm">
          <FlowOption label="Username + Password" active={true} />
          <FlowOption label="Mobile OTP" href="/identity-mobile-otp" />
          <FlowOption label="Aadhaar Authentication" href="/identity-aadhaar" />
        </div>
      </div>
    </div>
  );
}

function FlowOption({ label, active = false, href }: { label: string; active?: boolean; href?: string }) {
  const content = (
    <div className={`flex items-center justify-between p-3 rounded ${active ? 'bg-blue-100 border-2 border-blue-300' : 'bg-background border-2 border-border hover:border-gray-400'}`}>
      <span className={`font-medium ${active ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</span>
      {!active && <span className="text-xs text-primary font-bold">View →</span>}
    </div>
  );

  return href ? <Link to={href}>{content}</Link> : content;
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
            <li>• <Link to="/patterns/identity/forgot-password" className="text-primary hover:underline">Forgot password?</Link></li>
            <li>• <Link to="/patterns/identity/account-recovery" className="text-primary hover:underline">Account locked?</Link></li>
            <li>• <Link to="/patterns/identity/auth-error" className="text-primary hover:underline">Login errors?</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
