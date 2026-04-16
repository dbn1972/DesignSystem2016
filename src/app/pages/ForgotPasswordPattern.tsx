import { Link } from "react-router";
import { Key, Shield, CheckCircle, AlertCircle, Info, XCircle, ArrowRight, ChevronRight, Clock, RefreshCw, Phone, Mail, Lock, HelpCircle, Check, X, Eye } from "lucide-react";

export default function ForgotPasswordPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/patterns/identity" className="hover:text-primary">
              Identity & Access Patterns
            </Link>
            <ChevronRight size={16} />
            <span className="text-foreground font-medium">Forgot Password / Reset Password</span>
          </div>

          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center">
                  <Key size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Identity & Access Pattern</div>
                  <h1 className="text-3xl font-bold text-foreground">Forgot Password / Reset Password</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Complete self-service password recovery pattern enabling users to securely reset forgotten passwords 
                through verified contact methods. Balances security, usability, and accessibility for safe account 
                recovery across government digital services.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-002-04</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Version: <span className="font-bold text-foreground">1.0.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Updated: <span className="font-bold text-foreground">April 2026</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded text-red-700 font-bold text-xs text-center uppercase">
                Conformance<br/>Mandatory
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "flow", label: "Flow Diagram" },
              { id: "screens", label: "Example Screens" },
              { id: "password-rules", label: "Password Rules" },
              { id: "security", label: "Security" },
              { id: "accessibility", label: "Accessibility" },
              { id: "implementation", label: "Implementation" },
              { id: "governance", label: "Governance" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-[1600px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-16">
            <OverviewSection />
            <FlowDiagram />
            <ExampleScreens />
            <PasswordRulesSection />
            <SecuritySection />
            <AccessibilitySection />
            <ImplementationSection />
            <GovernanceSection />
          </div>

          {/* Sidebar - 3 columns */}
          <aside className="col-span-3 space-y-6 sticky top-24 self-start">
            <QuickReference />
            <RelatedPatterns />
            <InteractiveDemo />
            <Resources />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Forgot Password Pattern</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== OVERVIEW SECTION ====================

function OverviewSection() {
  return (
    <section id="overview" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Pattern Overview</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Purpose */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Purpose</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Enable users to securely reset forgotten passwords through self-service recovery workflow. 
              Provides verified, accessible path to regain account access while maintaining security 
              and preventing unauthorized access.
            </p>
            <div className="space-y-2">
              <InfoItem icon={<Key size={16} className="text-primary" />} text="Restore access to locked accounts" />
              <InfoItem icon={<Shield size={16} className="text-primary" />} text="Verify user identity before reset" />
              <InfoItem icon={<Lock size={16} className="text-primary" />} text="Enforce strong password policies" />
              <InfoItem icon={<CheckCircle size={16} className="text-green-600" />} text="Prevent unauthorized resets" />
            </div>
          </div>
        </div>

        {/* User Goals */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">User Goals</h3>
          </div>
          <div className="p-6 space-y-2">
            <GoalItem text="Reset password quickly and easily" />
            <GoalItem text="Verify identity through known method" />
            <GoalItem text="Understand password requirements" />
            <GoalItem text="Create strong, memorable password" />
            <GoalItem text="Get help if unable to recover" />
          </div>
        </div>

        {/* When to Use */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-100 border-b-2 border-green-300 px-6 py-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Check size={18} className="text-green-600" />
              When to Use
            </h3>
          </div>
          <div className="p-6 space-y-2 text-sm">
            <WhenItem text="User forgot password and cannot sign in" />
            <WhenItem text="User suspects password compromise" />
            <WhenItem text="Password expired per policy" />
            <WhenItem text="User wants to change password proactively" />
            <WhenItem text="Multiple failed login attempts" />
          </div>
        </div>

        {/* When Not to Use */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <X size={18} className="text-red-600" />
              When Not to Use
            </h3>
          </div>
          <div className="p-6 space-y-2 text-sm">
            <WhenNotItem text="User has lost access to all registered contacts" />
            <WhenNotItem text="User never created an account" />
            <WhenNotItem text="Account permanently locked/blocked" />
            <WhenNotItem text="User needs full account recovery (use Account Recovery pattern)" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FLOW DIAGRAM ====================

function FlowDiagram() {
  return (
    <section id="flow" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">End-to-End Flow Diagram</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-8">
        <div className="space-y-4">
          <FlowStep 
            number={1}
            title="Initiate Password Reset"
            description="User clicks 'Forgot Password' link on sign-in page"
            state="User Action"
          />
          <FlowStep 
            number={2}
            title="Enter Account Identifier"
            description="User enters username, email, or mobile number to identify account"
            state="User Input"
          />
          <FlowStep 
            number={3}
            title="Validate Account Existence"
            description="System checks if account exists (do not reveal if not found for security)"
            state="System Validation"
            branches={true}
          />
          
          {/* Success Path */}
          <div className="ml-12 pl-6 border-l-4 border-green-500 space-y-4">
            <FlowStep 
              number="3a"
              title="Choose Recovery Method"
              description="Offer verified contact methods: SMS to ****** 123 or Email to a***@gmail.com"
              state="User Choice"
              variant="success"
            />
            <FlowStep 
              number={4}
              title="Send Recovery Code/Link"
              description="Send 6-digit OTP via SMS or reset link via email with expiry (15-30 min)"
              state="System Action"
              variant="success"
            />
            <FlowStep 
              number={5}
              title="Verify Code/Link"
              description="User enters OTP or clicks email link to verify identity"
              state="Verification"
              variant="success"
            />
            <FlowStep 
              number={6}
              title="Enter New Password"
              description="User creates new password meeting all policy requirements"
              state="User Input"
              variant="success"
            />
            <FlowStep 
              number={7}
              title="Confirm Password Reset"
              description="Password updated; send confirmation email/SMS; require sign-in with new password"
              state="Success"
              variant="success"
            />
          </div>

          {/* Error Path */}
          <div className="ml-12 pl-6 border-l-4 border-red-500 space-y-4">
            <FlowStep 
              number="3b"
              title="Account Not Found / Error"
              description="Show generic error (don't reveal if account exists); offer sign-up or support"
              state="Error"
              variant="error"
            />
            <FlowStep 
              number={8}
              title="Recovery Options"
              description="Retry, use different identifier, contact support, or escalate to account recovery"
              state="Recovery"
              variant="error"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== EXAMPLE SCREENS ====================

function ExampleScreens() {
  return (
    <section id="screens" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Example Screens</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Forgot Password Entry */}
        <ScreenExample
          title="Forgot Password Entry"
          variant="default"
          description="Initial screen where user enters identifier"
          state="Ready for input"
        >
          <div className="text-center mb-4">
            <Key size={40} className="text-primary mx-auto mb-3" />
            <h4 className="font-bold text-foreground mb-2">Reset Your Password</h4>
            <p className="text-sm text-muted-foreground">
              Enter your registered email or mobile number
            </p>
          </div>
          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="Email or Mobile Number"
              className="w-full px-4 py-3 border-2 border-border rounded"
            />
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90">
              Continue
            </button>
            <Link to="/patterns/identity/sign-in" className="block text-center text-sm text-primary hover:underline">
              Remember password? Sign In
            </Link>
          </div>
        </ScreenExample>

        {/* Invalid Identifier */}
        <ScreenExample
          title="Invalid Identifier"
          variant="error"
          description="User entered invalid format"
          state="Validation error"
        >
          <div className="text-center mb-4">
            <XCircle size={40} className="text-red-600 mx-auto mb-3" />
            <h4 className="font-bold text-foreground mb-2">Invalid Entry</h4>
            <p className="text-sm text-muted-foreground">
              Please enter a valid email or mobile number
            </p>
          </div>
          <div className="space-y-3">
            <input 
              type="text" 
              defaultValue="abc123"
              readOnly
              className="w-full px-4 py-3 border-2 border-red-400 rounded bg-red-50"
            />
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-300 rounded p-3 text-sm text-red-800">
              <AlertCircle size={14} className="inline mr-2" />
              Enter valid email (e.g., user@example.com) or 10-digit mobile
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90">
              Continue
            </button>
          </div>
        </ScreenExample>

        {/* Choose Recovery Method */}
        <ScreenExample
          title="Choose Recovery Method"
          variant="info"
          description="User selects verification method"
          state="Awaiting choice"
        >
          <div className="text-center mb-4">
            <Shield size={40} className="text-primary mx-auto mb-3" />
            <h4 className="font-bold text-foreground mb-2">Verify Your Identity</h4>
            <p className="text-sm text-muted-foreground">
              Choose how you'd like to receive<br/>
              your verification code
            </p>
          </div>
          <div className="space-y-3">
            <button className="w-full px-4 py-4 border-2 border-border rounded hover:bg-blue-50 hover:border-blue-300 text-left flex items-center gap-3">
              <Phone size={20} className="text-primary" />
              <div>
                <p className="font-bold text-foreground text-sm">Mobile Number</p>
                <p className="text-xs text-muted-foreground">Send code to +91 ******* 123</p>
              </div>
            </button>
            <button className="w-full px-4 py-4 border-2 border-border rounded hover:bg-blue-50 hover:border-blue-300 text-left flex items-center gap-3">
              <Mail size={20} className="text-primary" />
              <div>
                <p className="font-bold text-foreground text-sm">Email Address</p>
                <p className="text-xs text-muted-foreground">Send link to u***r@gmail.com</p>
              </div>
            </button>
          </div>
        </ScreenExample>

        {/* Wrong Code */}
        <ScreenExample
          title="Wrong Verification Code"
          variant="error"
          description="User entered incorrect OTP"
          state="Verification failed"
        >
          <div className="text-center mb-4">
            <XCircle size={40} className="text-red-600 mx-auto mb-3" />
            <h4 className="font-bold text-foreground mb-2">Incorrect Code</h4>
            <p className="text-sm text-muted-foreground">
              The code you entered is not correct
            </p>
          </div>
          <div className="flex gap-2 justify-center mb-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-12 h-12 border-2 border-red-400 rounded bg-red-50"></div>
            ))}
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-300 rounded p-3 text-sm text-red-800 mb-3">
            <XCircle size={14} className="inline mr-2" />
            Invalid code. 2 attempts remaining.
          </div>
          <button className="w-full px-4 py-3 border-2 border-primary bg-card text-primary font-bold rounded hover:bg-blue-50">
            Resend Code
          </button>
        </ScreenExample>

        {/* Expired Reset Link */}
        <ScreenExample
          title="Expired Reset Link"
          variant="warning"
          description="Reset link expired after 30 minutes"
          state="Time exceeded"
        >
          <div className="text-center mb-4">
            <Clock size={40} className="text-yellow-600 mx-auto mb-3" />
            <h4 className="font-bold text-foreground mb-2">Link Expired</h4>
            <p className="text-sm text-muted-foreground">
              This password reset link has expired<br/>
              for security reasons
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-300 rounded p-4 text-sm text-muted-foreground mb-4">
            <p className="font-bold mb-1">Reset links expire after 30 minutes</p>
            <p>Please request a new reset link to continue</p>
          </div>
          <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90">
            Request New Link
          </button>
        </ScreenExample>

        {/* Weak Password */}
        <ScreenExample
          title="Weak Password"
          variant="error"
          description="Password doesn't meet requirements"
          state="Validation failed"
        >
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">New Password</label>
              <input 
                type="password" 
                defaultValue="abc123"
                readOnly
                className="w-full px-4 py-3 border-2 border-red-400 rounded bg-red-50"
              />
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded p-4">
              <p className="font-bold text-sm text-red-800 mb-2">Password too weak</p>
              <div className="space-y-1 text-xs">
                <Requirement label="At least 8 characters" met={false} />
                <Requirement label="One uppercase letter" met={false} />
                <Requirement label="One lowercase letter" met={true} />
                <Requirement label="One number" met={true} />
                <Requirement label="One special character" met={false} />
              </div>
            </div>
          </div>
        </ScreenExample>

        {/* Password Mismatch */}
        <ScreenExample
          title="Password Mismatch"
          variant="error"
          description="Passwords don't match"
          state="Confirmation failed"
        >
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">New Password</label>
              <input 
                type="password" 
                defaultValue="SecureP@ss123"
                readOnly
                className="w-full px-4 py-3 border-2 border-border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Confirm Password</label>
              <input 
                type="password" 
                defaultValue="SecureP@ss124"
                readOnly
                className="w-full px-4 py-3 border-2 border-red-400 rounded bg-red-50"
              />
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-300 rounded p-3 text-sm text-red-800">
              <XCircle size={14} className="inline mr-2" />
              Passwords do not match. Please re-enter.
            </div>
          </div>
        </ScreenExample>

        {/* Reset Success */}
        <ScreenExample
          title="Reset Success"
          variant="success"
          description="Password successfully reset"
          state="Complete"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Password Reset Successful</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Your password has been updated.<br/>
              Please sign in with your new password.
            </p>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 rounded p-3 text-sm text-green-800 mb-4">
              <CheckCircle size={14} className="inline mr-2" />
              Confirmation sent to your email/mobile
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90">
              Continue to Sign In
            </button>
          </div>
        </ScreenExample>
      </div>
    </section>
  );
}

// ==================== PASSWORD RULES SECTION ====================

function PasswordRulesSection() {
  return (
    <section id="password-rules" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Password Rules & Guidance</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Government Password Policy</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-bold text-foreground">Requirement</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Specification</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Minimum Length</td>
                <td className="py-3 px-4 text-muted-foreground">8 characters</td>
                <td className="py-3 px-4 text-muted-foreground">Balance security & usability</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Complexity</td>
                <td className="py-3 px-4 text-muted-foreground">Upper + lower + number + special</td>
                <td className="py-3 px-4 text-muted-foreground">Prevent simple passwords</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Special Characters</td>
                <td className="py-3 px-4 text-muted-foreground">!@#$%^&*()-_=+</td>
                <td className="py-3 px-4 text-muted-foreground">Increase password strength</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">History</td>
                <td className="py-3 px-4 text-muted-foreground">Cannot reuse last 5 passwords</td>
                <td className="py-3 px-4 text-muted-foreground">Prevent password cycling</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Common Passwords</td>
                <td className="py-3 px-4 text-muted-foreground">Block top 10,000 common passwords</td>
                <td className="py-3 px-4 text-muted-foreground">Prevent easily guessed passwords</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Personal Info</td>
                <td className="py-3 px-4 text-muted-foreground">Cannot contain name, email, mobile</td>
                <td className="py-3 px-4 text-muted-foreground">Prevent social engineering</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <Info size={20} className="text-primary" />
          Password Guidance Best Practices
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold text-foreground mb-2">Show Requirements Upfront</p>
            <p className="text-muted-foreground">Display all password requirements before user types, not after validation fails</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">Real-Time Feedback</p>
            <p className="text-muted-foreground">Check requirements as user types; show green checkmarks when met</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">Password Strength Meter</p>
            <p className="text-muted-foreground">Visual indicator (Weak/Fair/Strong) to guide users toward better passwords</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">Show/Hide Toggle</p>
            <p className="text-muted-foreground">Eye icon to reveal password; helps users verify correct entry</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SECURITY SECTION ====================

function SecuritySection() {
  return (
    <section id="security" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Security Considerations</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Security Requirements</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <SecurityItem 
              label="Account Enumeration Prevention"
              description="Don't reveal if account exists; show same message for existing and non-existing accounts"
            />
            <SecurityItem 
              label="Rate Limiting"
              description="Max 3 reset requests per hour per account; prevent abuse"
            />
            <SecurityItem 
              label="Token Expiry"
              description="Reset links/codes expire after 15-30 minutes; balance security and usability"
            />
            <SecurityItem 
              label="One-Time Use"
              description="Reset tokens can only be used once; invalidate after successful reset"
            />
            <SecurityItem 
              label="Session Invalidation"
              description="Force logout from all devices after password reset"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border-b-2 border-yellow-200 dark:border-yellow-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Notification Requirements</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <SecurityItem 
              label="Reset Request Notification"
              description="Send email/SMS when reset requested (even if account doesn't exist, for user awareness)"
            />
            <SecurityItem 
              label="Successful Reset Notification"
              description="Send confirmation to all registered contacts after password changed"
            />
            <SecurityItem 
              label="Suspicious Activity Alert"
              description="Alert user if reset requested from unusual location/device"
            />
            <SecurityItem 
              label="Support Contact"
              description="Include helpline in all notifications for users who didn't request reset"
            />
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Common Attack Prevention</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6 text-sm">
            <AttackPrevention 
              attack="Brute Force"
              method="Rate limiting + CAPTCHA after 3 attempts"
            />
            <AttackPrevention 
              attack="Account Enumeration"
              method="Generic error messages; same response time"
            />
            <AttackPrevention 
              attack="Credential Stuffing"
              method="Check against breached password database"
            />
            <AttackPrevention 
              attack="Phishing"
              method="Branded emails; verify sender ID; no inline links"
            />
            <AttackPrevention 
              attack="Session Hijacking"
              method="Invalidate all sessions on password change"
            />
            <AttackPrevention 
              attack="Social Engineering"
              method="Verify via registered contacts only; no phone support reset"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== ACCESSIBILITY SECTION ====================

function AccessibilitySection() {
  return (
    <section id="accessibility" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Accessibility Guidelines</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Form Accessibility</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Field Labels"
              description="Every input has visible label + aria-label for screen readers"
            />
            <AccessibilityItem 
              label="Error Association"
              description="Errors linked to fields via aria-describedby; announced immediately"
            />
            <AccessibilityItem 
              label="Password Visibility"
              description="Show/hide toggle with clear accessible label: 'Show password' / 'Hide password'"
            />
            <AccessibilityItem 
              label="Progress Indication"
              description="Multi-step process shows 'Step X of Y' and current step highlighted"
            />
            <AccessibilityItem 
              label="Success Announcement"
              description="Screen reader announcement: 'Password reset successful' on completion"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Keyboard & Navigation</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Tab Order"
              description="Logical flow: identifier → continue → back to sign in"
            />
            <AccessibilityItem 
              label="Focus Management"
              description="Focus first field on load; move to error on validation failure"
            />
            <AccessibilityItem 
              label="Enter Key"
              description="Submit form when pressing Enter on any field"
            />
            <AccessibilityItem 
              label="Escape Key"
              description="Cancel action and return to sign-in (with confirmation)"
            />
            <AccessibilityItem 
              label="Skip Links"
              description="Skip to main content for screen reader users"
            />
          </div>
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-orange-600" />
          Password Manager Compatibility
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Use autocomplete='current-password' for existing password, 'new-password' for new password" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Use consistent field names: 'username', 'password', 'new-password', 'confirm-password'" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Allow password managers to auto-fill and suggest strong passwords" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Don't block paste functionality in password fields" />
        </div>
      </div>
    </section>
  );
}

// ==================== IMPLEMENTATION SECTION ====================

function ImplementationSection() {
  return (
    <section id="implementation" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Implementation Notes</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Technical Requirements</h3>
        </div>
        <div className="p-6 space-y-4 text-sm">
          <ImplementationItem 
            category="Token Generation"
            requirements={[
              "Generate cryptographically secure reset token (UUID or random 32+ char string)",
              "Store token hash (bcrypt/argon2), not plain token",
              "Associate token with user ID, creation timestamp, and expiry",
              "Set expiry: 15-30 minutes for email links, 5-10 minutes for SMS OTP",
              "Mark token as single-use; invalidate after successful reset",
              "Log all token generation events for audit trail"
            ]}
          />
          <ImplementationItem 
            category="Email Reset Link"
            requirements={[
              "URL format: https://service.gov.in/reset-password?token=abc123xyz",
              "Token embedded in URL, not in email body text",
              "Email template: branded, plain language, clear CTA button",
              "Include warning: 'Didn't request this? Contact support immediately'",
              "Sender verification: SPF, DKIM, DMARC configured",
              "Track email delivery status and failures"
            ]}
          />
          <ImplementationItem 
            category="Password Validation"
            requirements={[
              "Client-side: Real-time validation for immediate feedback",
              "Server-side: Re-validate all requirements (never trust client)",
              "Check against breached password database (e.g., Have I Been Pwned API)",
              "Enforce password history: cannot reuse last 5 passwords",
              "Prevent personal info in password: name, email prefix, mobile",
              "Hash with bcrypt (cost 12+) or argon2 before storage"
            ]}
          />
          <ImplementationItem 
            category="Post-Reset Actions"
            requirements={[
              "Invalidate all active user sessions (force re-login)",
              "Send confirmation email/SMS to all registered contacts",
              "Log password change event with timestamp, IP, user agent",
              "Update password_changed_at timestamp in user record",
              "Revoke all API tokens / refresh tokens for the account",
              "Display success message and redirect to sign-in"
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: Token Generation</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`// Generate reset token
const crypto = require('crypto');
const bcrypt = require('bcrypt');

async function generateResetToken(userId) {
  // Generate secure token
  const token = crypto
    .randomBytes(32)
    .toString('hex');
  
  // Hash for storage
  const hashedToken = await bcrypt.hash(
    token, 
    12
  );
  
  // Store with expiry (30 min)
  await db.passwordResets.create({
    userId,
    token: hashedToken,
    expiresAt: Date.now() + 1800000,
    used: false
  });
  
  return token; // Send this to user
}`}
            </pre>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: Password Validation</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`// Client-side validation
function validatePassword(pwd) {
  const checks = {
    length: pwd.length >= 8,
    upper: /[A-Z]/.test(pwd),
    lower: /[a-z]/.test(pwd),
    number: /[0-9]/.test(pwd),
    special: /[!@#$%^&*]/.test(pwd)
  };
  
  return {
    valid: Object.values(checks)
             .every(v => v),
    checks
  };
}

// Server-side validation
async function validatePasswordServer(
  pwd, 
  userId
) {
  // Check complexity
  if (!validatePassword(pwd).valid) {
    return { valid: false };
  }
  
  // Check password history
  const history = await getHistory(
    userId
  );
  for (const old of history) {
    if (await bcrypt.compare(
      pwd, 
      old
    )) {
      return { 
        valid: false,
        error: 'Cannot reuse password'
      };
    }
  }
  
  return { valid: true };
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== GOVERNANCE SECTION ====================

function GovernanceSection() {
  return (
    <section id="governance" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Governance & Lifecycle</h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-100 border-b-2 border-green-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Lifecycle Status</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-green-100 border-2 border-green-400 rounded text-green-800 font-bold">
                STABLE
              </div>
            </div>
            <div className="text-sm space-y-2">
              <p className="text-muted-foreground"><strong>Version:</strong> 1.0.0</p>
              <p className="text-muted-foreground"><strong>Released:</strong> April 2026</p>
              <p className="text-muted-foreground"><strong>Last Updated:</strong> April 2026</p>
              <p className="text-muted-foreground"><strong>Next Review:</strong> October 2026</p>
            </div>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Conformance Level</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-red-100 border-2 border-red-300 rounded text-red-800 font-bold text-sm">
                MANDATORY
              </div>
            </div>
            <div className="text-sm space-y-2 text-muted-foreground">
              <p>All password-based authentication must include this recovery pattern.</p>
              <p className="font-bold text-foreground mt-3">Required For:</p>
              <ul className="space-y-1 ml-4">
                <li>• Citizen-facing services</li>
                <li>• Officer portals</li>
                <li>• All password auth flows</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Pattern Owner</h3>
          </div>
          <div className="p-6 text-sm space-y-3">
            <div>
              <p className="font-bold text-foreground">Team:</p>
              <p className="text-muted-foreground">Identity & Access Team</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Contact:</p>
              <p className="text-muted-foreground">password@ux4g.gov.in</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Support Hours:</p>
              <p className="text-muted-foreground">Mon-Fri, 9 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-yellow-600" />
          Support & Escalation Guidance
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold text-foreground mb-2">For Implementation Questions:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Email: support@ux4g.gov.in</li>
              <li>• Slack: #ux4g-password-reset</li>
              <li>• Docs: docs.ux4g.gov.in/password-reset</li>
              <li>• Response: 24 hours</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">For User-Facing Issues:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Helpline: 1800-XXX-XXXX (toll-free)</li>
              <li>• Cannot reset: Escalate to Account Recovery</li>
              <li>• Security concerns: security@ux4g.gov.in</li>
              <li>• SLA: P1 incidents &lt;4 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function QuickReference() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 text-xs space-y-3">
        <div>
          <p className="font-bold text-foreground mb-1">Min Password Length</p>
          <p className="text-muted-foreground">8 characters</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Token Expiry</p>
          <p className="text-muted-foreground">15-30 minutes (email/SMS)</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Rate Limit</p>
          <p className="text-muted-foreground">3 requests per hour</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Password History</p>
          <p className="text-muted-foreground">Cannot reuse last 5</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Session Handling</p>
          <p className="text-muted-foreground">Force logout on reset</p>
        </div>
      </div>
    </div>
  );
}

function RelatedPatterns() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Related Patterns</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <RelatedPatternLink to="/patterns/identity/account-recovery" text="Account Recovery" />
        <RelatedPatternLink to="/patterns/identity/sign-in" text="Sign In Pattern" />
        <RelatedPatternLink to="/patterns/identity/otp-verification" text="OTP Verification" />
        <RelatedPatternLink to="/patterns/identity/mobile-otp" text="Mobile OTP" />
        <RelatedPatternLink to="/patterns/identity/session-timeout" text="Session Timeout" />
      </div>
    </div>
  );
}

function InteractiveDemo() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Interactive Demo</h3>
      </div>
      <div className="p-4">
        <Link 
          to="/patterns/identity/forgot-password"
          className="block p-3 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Eye size={16} className="text-primary" />
            <span className="font-bold text-sm text-foreground">View Live Demo</span>
          </div>
          <p className="text-xs text-muted-foreground">Interactive password reset flow</p>
        </Link>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Resources</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <ResourceLink text="Password Policy Guidelines" />
        <ResourceLink text="Security Best Practices" />
        <ResourceLink text="WCAG 2.1 Compliance" />
        <ResourceLink text="Implementation FAQ" />
        <ResourceLink text="Email Templates" />
      </div>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function InfoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-2">
      {icon}
      <span className="text-xs text-muted-foreground flex-1">{text}</span>
    </div>
  );
}

function GoalItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

function WhenItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function WhenNotItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function FlowStep({ number, title, description, state, branches, variant }: { 
  number: number | string; 
  title: string; 
  description: string; 
  state: string;
  branches?: boolean;
  variant?: 'success' | 'error' | 'warning';
}) {
  const bgColor = variant === 'success' ? 'bg-green-50' : 
                  variant === 'error' ? 'bg-red-50' :
                  variant === 'warning' ? 'bg-orange-50' : 'bg-background';
  const borderColor = variant === 'success' ? 'border-green-300' : 
                      variant === 'error' ? 'border-red-300' :
                      variant === 'warning' ? 'border-orange-300' : 'border-border';
  
  return (
    <div className={`${bgColor} border-2 ${borderColor} rounded-lg p-4`}>
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-foreground">{title}</h4>
            <span className="text-xs font-bold text-muted-foreground px-2 py-1 bg-card border border-border rounded">
              {state}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          {branches && (
            <div className="mt-2 text-xs text-muted-foreground flex items-center gap-2">
              <ArrowRight size={14} />
              <span>Branches to success or error path</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ScreenExample({ title, variant, description, state, children }: { 
  title: string;
  variant: 'default' | 'error' | 'warning' | 'success' | 'info';
  description: string;
  state: string;
  children: React.ReactNode;
}) {
  const headerColor = variant === 'error' ? 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800' :
                      variant === 'warning' ? 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800' :
                      variant === 'success' ? 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800' :
                      variant === 'info' ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800' :
                      'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800';
  
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className={`${headerColor} border-b-2 px-6 py-4`}>
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <div className="p-6">
        <div className="bg-background border-2 border-border rounded p-6 space-y-4">
          {children}
        </div>
        <div className="mt-4 text-xs text-muted-foreground space-y-1">
          <p><strong>Description:</strong> {description}</p>
          <p><strong>State:</strong> {state}</p>
        </div>
      </div>
    </div>
  );
}

function Requirement({ label, met }: { label: string; met: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {met ? (
        <CheckCircle size={14} className="text-green-600" />
      ) : (
        <XCircle size={14} className="text-red-600" />
      )}
      <span className={met ? "text-green-700" : "text-red-700"}>{label}</span>
    </div>
  );
}

function SecurityItem({ label, description }: { label: string; description: string }) {
  return (
    <div>
      <p className="font-bold text-foreground mb-1">{label}</p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function AttackPrevention({ attack, method }: { attack: string; method: string }) {
  return (
    <div className="bg-background border border-border rounded p-3">
      <p className="font-bold text-foreground text-xs mb-1">{attack}</p>
      <p className="text-muted-foreground text-xs">{method}</p>
    </div>
  );
}

function AccessibilityItem({ label, description }: { label: string; description: string }) {
  return (
    <div>
      <p className="font-bold text-foreground mb-1">{label}</p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function ImplementationItem({ category, requirements }: { category: string; requirements: string[] }) {
  return (
    <div>
      <h4 className="font-bold text-foreground mb-2">{category}</h4>
      <ul className="space-y-1 ml-4">
        {requirements.map((req, index) => (
          <li key={index} className="text-muted-foreground flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RelatedPatternLink({ to, text }: { to: string; text: string }) {
  return (
    <Link to={to} className="block p-2 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors">
      <div className="flex items-center gap-2">
        <ArrowRight size={12} className="text-primary" />
        <span className="text-foreground">{text}</span>
      </div>
    </Link>
  );
}

function ResourceLink({ text }: { text: string }) {
  return (
    <a href="#" className="flex items-center gap-2 p-2 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors text-foreground">
      <ArrowRight size={12} className="text-primary" />
      <span className="text-xs">{text}</span>
    </a>
  );
}
