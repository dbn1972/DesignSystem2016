import React from "react";
import { Link } from "react-router";
import { AlertTriangle, Shield, CheckCircle, AlertCircle, Info, XCircle, ArrowRight, ChevronRight, Lock, HelpCircle, Check, X, Phone, Mail, RefreshCw, Eye, Download, Copy } from "lucide-react";

export default function AuthErrorLockoutPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/patterns/identity" className="hover:text-primary">
              Identity & Access Patterns
            </Link>
            <ChevronRight size={16} />
            <span className="text-foreground font-medium">Authentication Errors & Lockout</span>
          </div>

          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-red-100 border-2 border-red-300 rounded flex items-center justify-center">
                  <AlertTriangle size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Identity & Access Pattern</div>
                  <h1 className="text-3xl font-bold text-foreground">Authentication Errors & Lockout</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Comprehensive error handling and lockout strategy for authentication failures. Balances 
                security protection with clear user communication, helpful recovery paths, and support 
                escalation for government digital services.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-002-09</span></span>
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
                Security<br/>Critical
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "error-types", label: "Error Types" },
              { id: "flow", label: "Flow Diagram" },
              { id: "screens", label: "Example Screens" },
              { id: "lockout-policy", label: "Lockout Policy" },
              { id: "recovery", label: "Recovery Paths" },
              { id: "accessibility", label: "Accessibility" },
              { id: "implementation", label: "Implementation" },
              { id: "code-downloads", label: "Code Downloads" },
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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-16">
            <OverviewSection />
            <ErrorTypesSection />
            <FlowDiagram />
            <ExampleScreens />
            <LockoutPolicySection />
            <RecoveryPathsSection />
            <AccessibilitySection />
            <ImplementationSection />
            <CodeDownloadsSection />
            <GovernanceSection />
          </div>

          {/* Sidebar - 3 columns */}
          <div className="col-span-3 space-y-6 sticky top-24 self-start">
            <QuickReference />
            <RelatedPatterns />
            <InteractiveDemo />
            <Resources />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Authentication Errors & Lockout Pattern</div>
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
              Protect accounts from unauthorized access while helping legitimate users recover from 
              authentication failures. Communicate errors clearly, provide actionable recovery paths, 
              and prevent brute-force attacks through intelligent lockout policies.
            </p>
            <div className="space-y-2">
              <InfoItem icon={<Shield size={16} className="text-primary" />} text="Prevent unauthorized access attempts" />
              <InfoItem icon={<Info size={16} className="text-blue-600" />} text="Communicate errors in plain language" />
              <InfoItem icon={<RefreshCw size={16} className="text-green-600" />} text="Offer clear recovery options" />
              <InfoItem icon={<HelpCircle size={16} className="text-primary" />} text="Provide escalation to human support" />
            </div>
          </div>
        </div>

        {/* User Goals */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">User Goals</h3>
          </div>
          <div className="p-6 space-y-2">
            <GoalItem text="Understand what went wrong" />
            <GoalItem text="Know how to fix the error" />
            <GoalItem text="Recover access quickly" />
            <GoalItem text="Get help when needed" />
            <GoalItem text="Avoid permanent lockout" />
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
            <WhenItem text="Any authentication failure (password, OTP, etc.)" />
            <WhenItem text="Multiple failed login attempts" />
            <WhenItem text="Suspicious activity detection" />
            <WhenItem text="Account locked/disabled states" />
            <WhenItem text="Service availability issues" />
            <WhenItem text="Temporary or permanent blocks" />
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
            <WhenNotItem text="Network/connectivity errors (separate pattern)" />
            <WhenNotItem text="Form validation errors (use field-level validation)" />
            <WhenNotItem text="Generic system errors (use error pattern)" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== ERROR TYPES SECTION ====================

function ErrorTypesSection() {
  return (
    <section id="error-types" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Common Authentication Error Types</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ErrorType 
          title="Wrong Credentials"
          severity="Low"
          examples={[
            "Incorrect password entered",
            "Username not found",
            "Email not registered"
          ]}
          userMessage="The password you entered is incorrect. Please try again."
          nextSteps={[
            "Allow retry",
            "Show 'Forgot password' link",
            "Count attempts toward lockout"
          ]}
        />
        <ErrorType 
          title="Wrong OTP"
          severity="Medium"
          examples={[
            "Incorrect OTP code",
            "OTP doesn't match",
            "Invalid verification code"
          ]}
          userMessage="The code you entered is incorrect. Please check and try again."
          nextSteps={[
            "Allow retry (limited attempts)",
            "Offer to resend code",
            "Show expiry time remaining"
          ]}
        />
        <ErrorType 
          title="Expired OTP"
          severity="Low"
          examples={[
            "OTP validity period ended",
            "Code expired (>5 minutes)",
            "Verification window closed"
          ]}
          userMessage="This code has expired. Request a new code to continue."
          nextSteps={[
            "Offer to resend new code",
            "Clear expired code from input",
            "Reset OTP attempt counter"
          ]}
        />
        <ErrorType 
          title="Too Many Attempts"
          severity="High"
          examples={[
            "3+ wrong passwords",
            "5+ wrong OTP attempts",
            "Rapid-fire login tries"
          ]}
          userMessage="Too many incorrect attempts. Your account is temporarily locked."
          nextSteps={[
            "Trigger temporary lockout",
            "Show lockout duration",
            "Offer account recovery path"
          ]}
        />
        <ErrorType 
          title="Temporary Lockout"
          severity="High"
          examples={[
            "15-minute cooldown active",
            "Account locked for security",
            "Time-based restriction"
          ]}
          userMessage="Your account is locked for 15 minutes after multiple failed attempts."
          nextSteps={[
            "Show countdown timer",
            "Explain reason clearly",
            "Offer recovery options"
          ]}
        />
        <ErrorType 
          title="Suspicious Activity"
          severity="Critical"
          examples={[
            "Login from new location",
            "Unusual access pattern",
            "Multiple device attempts"
          ]}
          userMessage="We detected unusual activity. Please verify your identity."
          nextSteps={[
            "Require additional verification",
            "Send email/SMS notification",
            "Offer to contact support"
          ]}
        />
        <ErrorType 
          title="Account Unavailable"
          severity="Critical"
          examples={[
            "Account disabled by admin",
            "Compliance suspension",
            "Terms violation"
          ]}
          userMessage="This account is currently unavailable. Please contact support."
          nextSteps={[
            "Provide support contact",
            "Explain appeal process",
            "Do not reveal specific reason"
          ]}
        />
        <ErrorType 
          title="Service Unavailable"
          severity="Medium"
          examples={[
            "Authentication server down",
            "Maintenance in progress",
            "System overload"
          ]}
          userMessage="Authentication service temporarily unavailable. Please try again shortly."
          nextSteps={[
            "Show estimated downtime",
            "Offer status page link",
            "Provide alternative contact"
          ]}
        />
        <ErrorType 
          title="Session Conflict"
          severity="Medium"
          examples={[
            "Already logged in elsewhere",
            "Concurrent session limit",
            "Active session on another device"
          ]}
          userMessage="You're already signed in on another device. Sign out there or continue here."
          nextSteps={[
            "Show active device info",
            "Allow force logout",
            "Security notification sent"
          ]}
        />
      </div>
    </section>
  );
}

// ==================== FLOW DIAGRAM ====================

function FlowDiagram() {
  return (
    <section id="flow" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Error Handling Flow Diagram</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-8">
        <div className="space-y-4">
          <FlowStep 
            number={1}
            title="User Attempts Authentication"
            description="User enters credentials (password, OTP, etc.) and submits"
            state="User Action"
          />
          <FlowStep 
            number={2}
            title="Verify Credentials"
            description="System validates against stored credentials/tokens"
            state="Verification"
            branches={true}
          />
          
          {/* Success Path */}
          <div className="ml-12 pl-6 border-l-4 border-green-500 space-y-4">
            <FlowStep 
              number="2a"
              title="Credentials Valid"
              description="Authentication successful; create session"
              state="Success"
              variant="success"
            />
            <FlowStep 
              number={3}
              title="Grant Access"
              description="User signed in; redirect to intended destination"
              state="Authenticated"
              variant="success"
            />
          </div>

          {/* Failure Path - First Attempt */}
          <div className="ml-12 pl-6 border-l-4 border-orange-500 space-y-4">
            <FlowStep 
              number="2b"
              title="Credentials Invalid"
              description="Authentication failed; check failure count"
              state="Failed"
              variant="warning"
            />
            <FlowStep 
              number={4}
              title="Check Attempt Count"
              description="How many failures for this account/IP in time window?"
              state="Security Check"
              variant="warning"
              branches={true}
            />
          </div>

          {/* Below Threshold */}
          <div className="ml-24 pl-6 border-l-4 border-yellow-500 space-y-4">
            <FlowStep 
              number="4a"
              title="Below Threshold (1-2 attempts)"
              description="Show generic error; allow retry"
              state="Allow Retry"
              variant="warning"
            />
            <FlowStep 
              number={5}
              title="Display Error + Recovery Options"
              description="'Incorrect password' + Forgot password link + Try again"
              state="User Feedback"
              variant="warning"
            />
          </div>

          {/* At Threshold */}
          <div className="ml-24 pl-6 border-l-4 border-red-500 space-y-4">
            <FlowStep 
              number="4b"
              title="At Threshold (3+ attempts)"
              description="Trigger temporary lockout for security"
              state="Lockout"
              variant="error"
            />
            <FlowStep 
              number={6}
              title="Enforce Lockout Period"
              description="Block auth attempts for 15 minutes; send alert email/SMS"
              state="Locked"
              variant="error"
            />
            <FlowStep 
              number={7}
              title="Show Lockout Message + Support"
              description="Explain lockout; show countdown; offer account recovery"
              state="User Support"
              variant="error"
            />
          </div>

          {/* Suspicious Activity */}
          <div className="ml-24 pl-6 border-l-4 border-purple-500 space-y-4">
            <FlowStep 
              number="4c"
              title="Suspicious Pattern Detected"
              description="Multiple IPs, rapid attempts, unusual location, etc."
              state="Security Alert"
              variant="error"
            />
            <FlowStep 
              number={8}
              title="Require Additional Verification"
              description="Email verification link, SMS code, security questions"
              state="Enhanced Auth"
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
        {/* Wrong Password */}
        <ScreenExample
          title="Wrong Password (1st Attempt)"
          variant="error"
        >
          <div className="space-y-4">
            <div className="text-center">
              <XCircle size={40} className="text-red-600 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Incorrect Password</h3>
              <p className="text-sm text-muted-foreground">
                The password you entered is not correct
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-300 rounded p-3 text-sm text-muted-foreground">
              <p className="mb-2"><strong>What you can do:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>• Check if Caps Lock is on</li>
                <li>• Try entering your password again</li>
                <li>• Use "Forgot password" if you can't remember it</li>
              </ul>
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Password</label>
              <input aria-label="Enter your password" type="password" 
                placeholder="Enter your password"
                className="w-full px-4 py-3 border-2 border-red-400 rounded bg-red-50"
              />
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Try Again
            </button>
            <div className="text-center">
              <a href="#" className="text-sm text-primary hover:underline font-bold">
                Forgot password?
              </a>
            </div>
          </div>
        </ScreenExample>

        {/* Wrong OTP */}
        <ScreenExample
          title="Wrong OTP Code"
          variant="error"
        >
          <div className="space-y-4">
            <div className="text-center">
              <XCircle size={40} className="text-red-600 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Incorrect Code</h3>
              <p className="text-sm text-muted-foreground">
                The verification code you entered<br/>
                is not correct
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-12 h-12 border-2 border-red-400 rounded bg-red-50"></div>
              ))}
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-300 rounded p-3 text-sm text-red-800 text-center">
              <XCircle size={14} className="inline mr-2" />
              <strong>2 attempts remaining</strong> before lockout
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
                Try Again
              </button>
              <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded">
                Resend Code
              </button>
            </div>
          </div>
        </ScreenExample>

        {/* Expired OTP */}
        <ScreenExample
          title="Expired OTP Code"
          variant="warning"
        >
          <div className="space-y-4">
            <div className="text-center">
              <AlertTriangle size={40} className="text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Code Expired</h3>
              <p className="text-sm text-muted-foreground">
                This verification code has expired.<br/>
                Codes are valid for 5 minutes only.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-300 rounded p-3 text-sm text-muted-foreground">
              <Info size={14} className="inline mr-2 text-orange-600" />
              For your security, verification codes expire after 5 minutes.
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Send New Code
            </button>
          </div>
        </ScreenExample>

        {/* Too Many Attempts */}
        <ScreenExample
          title="Too Many Failed Attempts"
          variant="error"
        >
          <div className="space-y-4">
            <div className="text-center">
              <Lock size={40} className="text-red-600 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Too Many Attempts</h3>
              <p className="text-sm text-muted-foreground">
                You've entered incorrect credentials<br/>
                multiple times
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded p-4 text-sm text-muted-foreground">
              <p className="font-bold text-red-800 mb-2">For your security:</p>
              <p>Your account has been temporarily locked after 3 incorrect password attempts.</p>
              <p className="mt-2">You can try again in <strong className="text-red-800">15 minutes</strong>, or reset your password now.</p>
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
                Reset Password Now
              </button>
              <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded">
                Contact Support
              </button>
            </div>
          </div>
        </ScreenExample>

        {/* Temporary Lockout */}
        <ScreenExample
          title="Temporary Lockout (Countdown)"
          variant="error"
        >
          <div className="space-y-4">
            <div className="text-center">
              <Lock size={40} className="text-red-600 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Account Temporarily Locked</h3>
              <p className="text-sm text-muted-foreground">
                Multiple failed sign-in attempts detected
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">You can try again in:</p>
              <p className="text-4xl font-bold text-primary">12:34</p>
              <p className="text-xs text-muted-foreground mt-1">minutes:seconds</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3 text-sm text-muted-foreground">
              <Info size={14} className="inline mr-2" />
              <strong>Why this happened:</strong> After 3 incorrect password attempts, we lock accounts for 15 minutes to protect your information.
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
                Reset Password Instead
              </button>
              <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded">
                Need Help?
              </button>
            </div>
          </div>
        </ScreenExample>

        {/* Suspicious Activity */}
        <ScreenExample
          title="Suspicious Activity Check"
          variant="warning"
        >
          <div className="space-y-4">
            <div className="text-center">
              <Shield size={40} className="text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Unusual Activity Detected</h3>
              <p className="text-sm text-muted-foreground">
                We noticed a sign-in attempt from<br/>
                a location or device you don't usually use
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-300 rounded p-3 text-sm text-muted-foreground">
              <p className="font-bold text-foreground mb-2">Sign-in attempt details:</p>
              <ul className="space-y-1 ml-4">
                <li>• Location: Mumbai, Maharashtra</li>
                <li>• Device: Windows PC, Chrome browser</li>
                <li>• Date/Time: April 10, 2026 at 2:30 PM</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3 text-sm text-muted-foreground">
              <p className="font-bold text-foreground mb-1">To verify it's you:</p>
              <p>We've sent a verification code to your registered email ending in ***@gmail.com</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Enter verification code</label>
              <input aria-label="6-digit code" type="text" 
                placeholder="6-digit code"
                className="w-full px-4 py-3 border-2 border-border rounded"
              />
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Verify
            </button>
          </div>
        </ScreenExample>

        {/* Account Unavailable */}
        <ScreenExample
          title="Account Unavailable"
          variant="error"
        >
          <div className="space-y-4">
            <div className="text-center">
              <XCircle size={40} className="text-red-600 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Account Unavailable</h3>
              <p className="text-sm text-muted-foreground">
                This account is currently unavailable
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-300 rounded p-4 text-sm text-muted-foreground">
              <p className="mb-2">Your account has been temporarily disabled. This may be due to:</p>
              <ul className="space-y-1 ml-4">
                <li>• Security review in progress</li>
                <li>• Compliance verification required</li>
                <li>• Administrative action</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded p-3 text-sm">
              <p className="font-bold text-foreground mb-2">What you can do:</p>
              <p className="text-muted-foreground">Contact our support team for assistance with your account.</p>
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
                Contact Support
              </button>
              <div className="text-center text-sm text-muted-foreground">
                <p>Helpline: 1800-XXX-YYYY</p>
                <p>Email: support@service.gov.in</p>
              </div>
            </div>
          </div>
        </ScreenExample>

        {/* Service Unavailable */}
        <ScreenExample
          title="Service Unavailable"
          variant="warning"
        >
          <div className="space-y-4">
            <div className="text-center">
              <AlertTriangle size={40} className="text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Service Temporarily Unavailable</h3>
              <p className="text-sm text-muted-foreground">
                Authentication service is currently<br/>
                experiencing issues
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-300 rounded p-3 text-sm text-muted-foreground">
              <p><strong>What's happening:</strong></p>
              <p className="mt-1">We're experiencing technical difficulties with our sign-in system. Our team is working to resolve this.</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3 text-sm text-muted-foreground">
              <Info size={14} className="inline mr-2" />
              <strong>Estimated resolution:</strong> Within 30 minutes
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
                Try Again
              </button>
              <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded">
                Check Service Status
              </button>
            </div>
          </div>
        </ScreenExample>

        {/* Help / Support State */}
        <ScreenExample
          title="Help & Support"
          variant="info"
        >
          <div className="space-y-4">
            <div className="text-center">
              <HelpCircle size={40} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Sign-In Help</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3">
                <p className="font-bold text-foreground mb-2">Common Issues:</p>
                <ul className="ml-4 space-y-2 text-muted-foreground">
                  <li>
                    <strong>• Forgot password?</strong><br/>
                    <a href="#" className="text-primary hover:underline">Reset your password →</a>
                  </li>
                  <li>
                    <strong>• Account locked?</strong><br/>
                    Wait 15 minutes or reset password to unlock immediately
                  </li>
                  <li>
                    <strong>• Not receiving OTP?</strong><br/>
                    Check spam folder or try alternative contact method
                  </li>
                </ul>
              </div>
              <div className="bg-background border border-border rounded p-3">
                <p className="font-bold text-foreground mb-2">Contact Support:</p>
                <p className="text-muted-foreground mb-1">Helpline: 1800-XXX-YYYY (Toll-free)</p>
                <p className="text-muted-foreground mb-1">Email: auth-support@service.gov.in</p>
                <p className="text-muted-foreground">Hours: 24/7 for authentication issues</p>
              </div>
            </div>
            <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded">
              Back to Sign In
            </button>
          </div>
        </ScreenExample>
      </div>
    </section>
  );
}

// ==================== LOCKOUT POLICY SECTION ====================

function LockoutPolicySection() {
  return (
    <section id="lockout-policy" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Lockout Policy Configuration</h2>
      </div>

      <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Shield size={20} className="text-red-600" />
          Security vs. Usability Balance
        </h3>
        <p className="text-sm text-muted-foreground">
          Lockout policies must balance protection against brute-force attacks with legitimate user access. 
          Too strict = frustrated users; too lenient = security risk. Follow these evidence-based guidelines 
          for government services.
        </p>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Recommended Lockout Thresholds</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-bold text-foreground">Auth Method</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Max Attempts</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Lockout Duration</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Password</td>
                <td className="py-3 px-4 text-muted-foreground">3 attempts</td>
                <td className="py-3 px-4 text-muted-foreground">15 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">Standard security practice; prevents brute-force</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">OTP (Email/SMS)</td>
                <td className="py-3 px-4 text-muted-foreground">5 attempts</td>
                <td className="py-3 px-4 text-muted-foreground">10 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">Higher threshold; users may misread code</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Security Questions</td>
                <td className="py-3 px-4 text-muted-foreground">3 attempts</td>
                <td className="py-3 px-4 text-muted-foreground">30 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">Lower attack surface; longer lockout acceptable</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Biometric (if used)</td>
                <td className="py-3 px-4 text-muted-foreground">5 attempts</td>
                <td className="py-3 px-4 text-muted-foreground">No lockout</td>
                <td className="py-3 px-4 text-muted-foreground">Fallback to password; sensor errors common</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Account Recovery</td>
                <td className="py-3 px-4 text-muted-foreground">3 attempts</td>
                <td className="py-3 px-4 text-muted-foreground">24 hours</td>
                <td className="py-3 px-4 text-muted-foreground">High-risk operation; strict controls needed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Progressive Delays</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <DelayRule 
              attempt="1st failure"
              action="Instant retry allowed"
              delay="0 seconds"
            />
            <DelayRule 
              attempt="2nd failure"
              action="Brief warning shown"
              delay="0 seconds (no delay yet)"
            />
            <DelayRule 
              attempt="3rd failure"
              action="Trigger lockout"
              delay="15 minutes"
            />
            <DelayRule 
              attempt="4th failure (after unlock)"
              action="Extended lockout"
              delay="60 minutes"
            />
            <DelayRule 
              attempt="5th failure (persistent)"
              action="Manual review required"
              delay="24 hours + support contact"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Tracking Scope</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <TrackingRule 
              scope="Per Account"
              description="Count failures for specific username/email regardless of IP"
              recommended={true}
            />
            <TrackingRule 
              scope="Per IP Address"
              description="Track attempts from same IP (catches distributed attacks)"
              recommended={true}
            />
            <TrackingRule 
              scope="Per Session"
              description="Reset counter on successful auth or explicit timeout"
              recommended={true}
            />
            <TrackingRule 
              scope="Per Device/Browser"
              description="Use fingerprinting to identify suspicious patterns"
              recommended={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== RECOVERY PATHS SECTION ====================

function RecoveryPathsSection() {
  return (
    <section id="recovery" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Recovery & Escalation Paths</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RecoveryPath 
          title="Immediate Recovery"
          icon={<RefreshCw className="text-green-600" />}
          options={[
            "Password reset (email link)",
            "Resend OTP to alternate contact",
            "Try different auth method",
            "Use recovery email/mobile"
          ]}
          timeline="Immediate - 5 minutes"
        />
        <RecoveryPath 
          title="Assisted Recovery"
          icon={<HelpCircle className="text-blue-600" />}
          options={[
            "Contact helpline (24/7)",
            "Submit support ticket",
            "Live chat with agent",
            "Visit service center"
          ]}
          timeline="Minutes - 24 hours"
        />
        <RecoveryPath 
          title="Manual Review"
          icon={<Shield className="text-orange-600" />}
          options={[
            "Identity verification required",
            "Document submission",
            "Security team review",
            "Account restoration appeal"
          ]}
          timeline="1-5 business days"
        />
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-yellow-600" />
          Always Provide Escalation Path
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <p className="font-bold text-foreground mb-1">Never Dead-End Users</p>
            <p>Every error state must have at least one recovery option. Even if account is disabled, provide support contact.</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">Multiple Paths</p>
            <p>Offer 2-3 recovery options: self-service (password reset), assisted (phone), and manual (support ticket)</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">Clear Next Steps</p>
            <p>Tell users exactly what to do: "Click 'Reset Password'" not "You may need to take action"</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">Set Expectations</p>
            <p>Provide realistic timelines: "Support responds within 4 hours" builds trust</p>
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
            <h3 className="font-bold text-foreground">Error Communication</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Plain Language"
              description="'Incorrect password' not 'Authentication failure 401' - use words everyone understands"
            />
            <AccessibilityItem 
              label="Don't Rely on Color"
              description="Use icons + text: ❌ 'Incorrect password' not just red border"
            />
            <AccessibilityItem 
              label="Screen Reader Announcements"
              description="aria-live='assertive' for errors: 'Error: Incorrect password. Try again.'"
            />
            <AccessibilityItem 
              label="Focus Management"
              description="After error, move focus to error message or first error field"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Lockout Countdown</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Large, High-Contrast Timer"
              description="Use 3rem+ font size; minimum 4.5:1 contrast ratio for countdown"
            />
            <AccessibilityItem 
              label="Descriptive Label"
              description="'You can try again in: 12 minutes 34 seconds' - explicit context"
            />
            <AccessibilityItem 
              label="Periodic Announcements"
              description="Announce time remaining every 5 minutes for screen readers"
            />
            <AccessibilityItem 
              label="Completion Notification"
              description="When timer ends: 'Lockout period ended. You can now try again.'"
            />
          </div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-purple-600" />
          WCAG 3.3.1 Error Identification & 3.3.3 Error Suggestion
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Identify errors in text: 'Password is incorrect' (not just red border)" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Suggest fixes: 'Try again or use Forgot Password to reset' (actionable guidance)" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Don't block user completely: Always provide recovery path (phone, email, support)" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Use clear, specific language: 'Account locked for 15 minutes' (not 'Access denied')" />
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
            category="Failure Tracking"
            requirements={[
              "Store failed attempt count in database (keyed by account ID + IP)",
              "Include timestamp of each failure for time-window calculations",
              "Reset counter to 0 on successful authentication",
              "Expire old failures after 24 hours (sliding window)",
              "Track both per-account and per-IP to catch distributed attacks",
              "Log all auth failures for security monitoring and incident response"
            ]}
          />
          <ImplementationItem 
            category="Lockout Enforcement"
            requirements={[
              "Check failure count before processing auth attempt",
              "Return 429 Too Many Requests status code when locked",
              "Include Retry-After header with seconds until unlock",
              "Store lockout expiry timestamp in cache (Redis) for fast lookup",
              "Send email/SMS notification on lockout trigger",
              "Allow password reset to bypass lockout immediately"
            ]}
          />
          <ImplementationItem 
            category="Error Messaging"
            requirements={[
              "Never reveal whether username exists ('Invalid credentials' not 'User not found')",
              "Use generic messages for security: 'Incorrect password' not 'No match for user@example.com'",
              "Include attempt count: '2 attempts remaining' for user awareness",
              "Provide clear next steps: 'Reset password' or 'Try again in 15 min'",
              "Localize all error messages for regional languages",
              "Log detailed error internally but show simplified version to user"
            ]}
          />
          <ImplementationItem 
            category="Security Logging & Alerts"
            requirements={[
              "Log every auth failure with: username, IP, timestamp, user-agent, failure reason",
              "Alert security team on 10+ failures for same account in 1 hour",
              "Monitor for distributed attacks: many IPs targeting same account",
              "Track successful login after lockout (possible compromised account)",
              "Integrate with SIEM for centralized security monitoring",
              "Generate daily reports on lockout rate and top failed accounts"
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: Failure Tracking</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`// Track auth failures
async function recordFailure(
  accountId, 
  ipAddress
) {
  const key = \`auth_fail:\${accountId}\`;
  
  // Increment failure count
  const failures = await redis.incr(key);
  
  // Set expiry (24 hour window)
  if (failures === 1) {
    await redis.expire(key, 86400);
  }
  
  // Check lockout threshold
  if (failures >= MAX_ATTEMPTS) {
    const lockoutKey = 
      \`lockout:\${accountId}\`;
    const lockoutExpiry = 
      LOCKOUT_MINUTES * 60;
    
    await redis.setex(
      lockoutKey, 
      lockoutExpiry, 
      'locked'
    );
    
    // Send notification
    await sendLockoutAlert(
      accountId, 
      lockoutExpiry
    );
    
    return { 
      locked: true, 
      retryAfter: lockoutExpiry 
    };
  }
  
  return { 
    locked: false, 
    attemptsRemaining: 
      MAX_ATTEMPTS - failures 
  };
}`}
            </pre>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: Lockout Check</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`// Check if account is locked
async function isAccountLocked(
  accountId
) {
  const lockoutKey = 
    \`lockout:\${accountId}\`;
  
  const ttl = await redis.ttl(
    lockoutKey
  );
  
  if (ttl > 0) {
    return {
      locked: true,
      retryAfterSeconds: ttl,
      retryAfterMinutes: 
        Math.ceil(ttl / 60),
      message: 
        'Account temporarily locked' +
        ' after multiple failed ' +
        'attempts. Try again in ' +
        Math.ceil(ttl / 60) + 
        ' minutes or reset ' +
        'your password.'
    };
  }
  
  return { locked: false };
}

// API endpoint
app.post('/api/auth/login', 
  async (req, res) => {
    const lockStatus = 
      await isAccountLocked(
        req.body.username
      );
    
    if (lockStatus.locked) {
      return res.status(429).json({
        error: lockStatus.message,
        retryAfter: 
          lockStatus.retryAfterSeconds
      });
    }
    
    // Proceed with auth...
  }
);`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CODE DOWNLOADS SECTION ====================

const LOCKOUT_REACT_CODE = `import React, { useState, useEffect } from 'react';

type LockoutState = 'normal' | 'warning' | 'locked' | 'support';

export function AuthErrorLockoutPage() {
  const [state, setState] = useState<LockoutState>('normal');
  const [attempts, setAttempts] = useState(0);
  const [lockTimer, setLockTimer] = useState(0);
  const [error, setError] = useState('');
  const maxAttempts = 5;
  const lockDuration = 900; // 15 minutes

  useEffect(() => {
    if (lockTimer > 0) {
      const t = setInterval(() => setLockTimer(v => { if (v <= 1) { clearInterval(t); setState('normal'); setAttempts(0); return 0; } return v - 1; }), 1000);
      return () => clearInterval(t);
    }
  }, [lockTimer]);

  const handleLogin = async (username: string, password: string) => {
    if (state === 'locked') return;
    setError('');
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        if (newAttempts >= maxAttempts) {
          setState('locked');
          setLockTimer(lockDuration);
          setError('Account locked for 15 minutes due to too many failed attempts.');
        } else if (newAttempts >= 3) {
          setState('warning');
          setError(\`Invalid credentials. \${maxAttempts - newAttempts} attempts remaining before account lock.\`);
        } else {
          setError('Invalid username or password. Please try again.');
        }
      }
    } catch { setError('Network error. Please try again.'); }
  };

  const mins = Math.floor(lockTimer / 60);
  const secs = lockTimer % 60;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Sign In</h1>
        {state === 'locked' ? (
          <div className="space-y-4">
            <div role="alert" className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                <span className="font-bold text-red-700">Account Temporarily Locked</span>
              </div>
              <p className="text-sm text-red-600">Too many failed sign-in attempts. Your account is locked for security.</p>
              <div className="mt-3 text-center">
                <div className="text-2xl font-bold text-red-700" aria-live="polite">{mins}:{String(secs).padStart(2, '0')}</div>
                <p className="text-xs text-red-500 mt-1">Time until unlock</p>
              </div>
            </div>
            <div className="space-y-2">
              <a href="/forgot-password" className="block w-full py-3 text-center border border-border rounded-lg font-semibold text-foreground hover:bg-muted">Reset Password</a>
              <button onClick={() => setState('support')} className="block w-full py-3 text-center text-primary hover:underline text-sm font-semibold">Contact Support</button>
            </div>
          </div>
        ) : state === 'support' ? (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">Contact Support</h2>
            <div className="space-y-3">
              <div className="p-3 bg-muted rounded-lg"><div className="font-semibold text-sm">Helpline</div><div className="text-sm text-muted-foreground">1800-XXX-XXXX (Mon-Fri, 9AM-6PM IST)</div></div>
              <div className="p-3 bg-muted rounded-lg"><div className="font-semibold text-sm">Email</div><div className="text-sm text-muted-foreground">support@digitalindia.gov.in</div></div>
            </div>
            <button onClick={() => setState(attempts >= maxAttempts ? 'locked' : 'normal')} className="w-full py-3 border border-border rounded-lg font-semibold">Back</button>
          </div>
        ) : (
          <LoginForm onSubmit={handleLogin} error={error} state={state} attemptsLeft={maxAttempts - attempts} />
        )}
      </div>
    </div>
  );
}

function LoginForm({ onSubmit, error, state, attemptsLeft }: { onSubmit: (u: string, p: string) => void; error: string; state: string; attemptsLeft: number }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); await onSubmit(username, password); setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4" noValidate>
      {error && <div role="alert" className={\`p-3 rounded-lg text-sm \${state === 'warning' ? 'bg-yellow-50 border border-yellow-200 text-yellow-700' : 'bg-red-50 border border-red-200 text-red-700'}\`}>{error}</div>}
      <div>
        <label htmlFor="username" className="block text-sm font-medium mb-1">Email or Mobile <span className="text-red-500">*</span></label>
        <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">Password <span className="text-red-500">*</span></label>
        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" />
      </div>
      <button type="submit" disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Signing in...' : 'Sign In'}</button>
      <a href="/forgot-password" className="block text-center text-sm text-primary hover:underline">Forgot password?</a>
    </form>
  );
}`;

const LOCKOUT_ANGULAR_CODE = `import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-auth-error-lockout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Sign In</h1>
        <div *ngIf="error" role="alert" [class]="'mb-4 p-3 rounded-lg text-sm ' + (state === 'warning' ? 'bg-yellow-50 border border-yellow-200 text-yellow-700' : 'bg-red-50 border border-red-200 text-red-700')">{{ error }}</div>
        <div *ngIf="state === 'locked'" class="space-y-4">
          <div class="p-4 bg-red-50 border border-red-200 rounded-xl text-center">
            <p class="font-bold text-red-700 mb-2">Account Temporarily Locked</p>
            <div class="text-2xl font-bold text-red-700" aria-live="polite">{{ formatTime() }}</div>
            <p class="text-xs text-red-500 mt-1">Time until unlock</p>
          </div>
          <a href="/forgot-password" class="block w-full py-3 text-center border border-border rounded-lg font-semibold">Reset Password</a>
        </div>
        <form *ngIf="state !== 'locked'" [formGroup]="form" (ngSubmit)="login()" class="space-y-4 mt-4">
          <div><label class="block text-sm font-medium mb-1">Email or Mobile</label><input formControlName="username" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <div><label class="block text-sm font-medium mb-1">Password</label><input type="password" formControlName="password" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <button type="submit" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Signing in...' : 'Sign In' }}</button>
        </form>
      </div>
    </div>
  \`
})
export class AuthErrorLockoutComponent implements OnDestroy {
  form = new FormGroup({ username: new FormControl('', Validators.required), password: new FormControl('', Validators.required) });
  state: 'normal' | 'warning' | 'locked' = 'normal';
  attempts = 0; maxAttempts = 5; lockTimer = 0; loading = false; error = '';
  private interval: any;

  ngOnDestroy() { clearInterval(this.interval); }
  formatTime() { return Math.floor(this.lockTimer/60)+':'+String(this.lockTimer%60).padStart(2,'0'); }

  async login() {
    if (this.state === 'locked' || this.form.invalid) return;
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/auth/signin', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.form.value) });
      if (!res.ok) {
        this.attempts++;
        if (this.attempts >= this.maxAttempts) { this.state = 'locked'; this.lockTimer = 900; this.error = 'Account locked for 15 minutes.'; this.startTimer(); }
        else if (this.attempts >= 3) { this.state = 'warning'; this.error = \`Invalid credentials. \${this.maxAttempts - this.attempts} attempts left.\`; }
        else this.error = 'Invalid credentials.';
      }
    } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }

  startTimer() {
    this.interval = setInterval(() => { this.lockTimer--; if (this.lockTimer <= 0) { clearInterval(this.interval); this.state = 'normal'; this.attempts = 0; } }, 1000);
  }
}`;

const LOCKOUT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Auth Error & Lockout — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 28rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
    label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem; }
    input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; outline: none; margin-bottom: 1rem; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:disabled { opacity: 0.6; }
    .error { margin-bottom: 1rem; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; display: none; }
    .error-red { background: #fef2f2; border: 1px solid #fecaca; color: #b91c1c; }
    .error-yellow { background: #fefce8; border: 1px solid #fde68a; color: #a16207; }
    .locked-box { text-align: center; padding: 1.5rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.75rem; margin-bottom: 1rem; }
    .timer { font-size: 2rem; font-weight: 700; color: #b91c1c; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Sign In</h1>
    <div id="error" class="error" role="alert"></div>
    <div id="lockedView" class="hidden">
      <div class="locked-box">
        <p style="font-weight:700;color:#b91c1c;margin-bottom:0.5rem">Account Temporarily Locked</p>
        <div class="timer" id="lockTimer" aria-live="polite">15:00</div>
        <p style="font-size:0.75rem;color:#b91c1c;margin-top:0.25rem">Time until unlock</p>
      </div>
      <a href="/forgot-password" class="btn" style="display:block;text-align:center;text-decoration:none;margin-bottom:0.5rem">Reset Password</a>
    </div>
    <form id="loginForm">
      <label for="username">Email or Mobile</label>
      <input type="text" id="username" required />
      <label for="password">Password</label>
      <input type="password" id="password" required />
      <button type="submit" class="btn" id="submitBtn">Sign In</button>
    </form>
  </div>
  <script>
    let attempts = 0, maxAttempts = 5, lockTimer = 0, lockInterval;
    function showError(msg, type) { const e = document.getElementById('error'); e.textContent = msg; e.className = 'error ' + (type === 'warning' ? 'error-yellow' : 'error-red'); e.style.display = 'block'; }
    function hideError() { document.getElementById('error').style.display = 'none'; }
    function lockAccount() {
      document.getElementById('loginForm').classList.add('hidden');
      document.getElementById('lockedView').classList.remove('hidden');
      lockTimer = 900;
      lockInterval = setInterval(() => {
        lockTimer--;
        document.getElementById('lockTimer').textContent = Math.floor(lockTimer/60)+':'+String(lockTimer%60).padStart(2,'0');
        if (lockTimer <= 0) { clearInterval(lockInterval); attempts = 0; document.getElementById('loginForm').classList.remove('hidden'); document.getElementById('lockedView').classList.add('hidden'); hideError(); }
      }, 1000);
    }
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
      e.preventDefault(); hideError();
      const btn = document.getElementById('submitBtn');
      btn.disabled = true; btn.textContent = 'Signing in...';
      try {
        const res = await fetch('/api/auth/signin', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: document.getElementById('username').value, password: document.getElementById('password').value }) });
        if (!res.ok) {
          attempts++;
          if (attempts >= maxAttempts) { showError('Account locked for 15 minutes.', 'error'); lockAccount(); }
          else if (attempts >= 3) showError('Invalid credentials. '+(maxAttempts-attempts)+' attempts left.', 'warning');
          else showError('Invalid username or password.', 'error');
        }
      } catch { showError('Network error.', 'error'); }
      finally { btn.disabled = false; btn.textContent = 'Sign In'; }
    });
  </script>
</body>
</html>`;

function CodeDownloadsSection() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks + Lockout Timer', code: LOCKOUT_REACT_CODE, filename: 'AuthErrorLockoutPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: LOCKOUT_ANGULAR_CODE, filename: 'auth-error-lockout.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: LOCKOUT_HTML_CODE, filename: 'auth-error-lockout.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Auth Error & Lockout implementations for your framework.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <div key={lane.key} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-1 bg-[#005196]" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="inline-flex rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Framework lane</span>
                  <h3 className="text-lg font-bold text-foreground mt-2">{lane.title}</h3>
                  <p className="text-sm text-muted-foreground">{lane.desc}</p>
                </div>
                <button onClick={() => downloadCode(lane.code, lane.filename)} aria-label={`Download ${lane.title} code`} className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-[#005196] hover:bg-[#005196] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]">
                  <Download size={16} />
                </button>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">{lane.filename}</span>
                  <button onClick={() => copyToClipboard(lane.code, lane.key)} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
                    {copiedId === lane.key ? <Check size={12} /> : <Copy size={12} />}
                    {copiedId === lane.key ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div tabIndex={0} role="region" aria-label="Code preview" className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
                  <pre className="font-mono leading-5 whitespace-pre-wrap"><code>{lane.code.slice(0, 800)}...</code></pre>
                </div>
              </div>
            </div>
          </div>
        ))}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h3 className="font-bold text-foreground">Security Level</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-red-100 border-2 border-red-300 rounded text-red-800 font-bold text-sm">
                SECURITY CRITICAL
              </div>
            </div>
            <div className="text-sm space-y-2 text-muted-foreground">
              <p>Error handling is a security control. Policy changes require security review and approval.</p>
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
              <p className="text-muted-foreground">Security & Identity</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Contact:</p>
              <p className="text-muted-foreground">auth-errors@ux4g.gov.in</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Review Cycle:</p>
              <p className="text-muted-foreground">Bi-annual</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-yellow-600" />
          Implementation Checklist
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold text-foreground mb-2">Before Launch:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>☐ Lockout thresholds configured and security-approved</li>
              <li>☐ Failure tracking implemented (per-account + per-IP)</li>
              <li>☐ Error messages use plain language and provide next steps</li>
              <li>☐ Recovery paths available for all error states</li>
              <li>☐ Support contact info displayed on lockout screens</li>
              <li>☐ Logging and alerting configured for security team</li>
              <li>☐ WCAG 3.3.1 and 3.3.3 compliance validated</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">Ongoing Monitoring:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>☐ Track lockout rate and user impact metrics</li>
              <li>☐ Monitor support tickets related to auth errors</li>
              <li>☐ Review security logs for attack patterns weekly</li>
              <li>☐ Analyze false-positive lockouts (legit users blocked)</li>
              <li>☐ Test error states on different devices/browsers</li>
              <li>☐ Quarterly security review of lockout effectiveness</li>
              <li>☐ Update thresholds based on threat landscape</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <HelpCircle size={20} className="text-blue-600" />
          Support & Escalation
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold text-foreground mb-2">For Technical Implementation:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Email: auth-tech@ux4g.gov.in</li>
              <li>• Slack: #auth-error-support</li>
              <li>• Response: 4 hours (business hours)</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">For Security Review:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Email: security@ux4g.gov.in</li>
              <li>• Security approval required for policy changes</li>
              <li>• Response: 48 hours</li>
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
          <p className="font-bold text-foreground mb-1">Max Password Attempts</p>
          <p className="text-muted-foreground">3 failures</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Lockout Duration</p>
          <p className="text-muted-foreground">15 minutes</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Max OTP Attempts</p>
          <p className="text-muted-foreground">5 failures</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Generic Error Message</p>
          <p className="text-muted-foreground">"Invalid credentials"</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">WCAG Compliance</p>
          <p className="text-muted-foreground">3.3.1, 3.3.3 (Level A)</p>
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
        <RelatedPatternLink to="/patterns/identity/sign-in" text="Sign In Pattern" />
        <RelatedPatternLink to="/patterns/identity/forgot-password" text="Forgot Password" />
        <RelatedPatternLink to="/patterns/identity/otp-verification" text="OTP Verification" />
        <RelatedPatternLink to="/patterns/identity/account-recovery" text="Account Recovery" />
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
          to="/patterns/identity/auth-error"
          className="block p-3 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Eye size={16} className="text-primary" />
            <span className="font-bold text-sm text-foreground">View Live Demo</span>
          </div>
          <p className="text-xs text-muted-foreground">Error & lockout states</p>
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
        <ResourceLink text="OWASP Auth Security Guide" />
        <ResourceLink text="WCAG 3.3 Error Handling" />
        <ResourceLink text="Brute-Force Protection" />
        <ResourceLink text="Security Logging Best Practices" />
        <ResourceLink text="User Testing: Error Messages" />
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

function ErrorType({ title, severity, examples, userMessage, nextSteps }: {
  title: string;
  severity: string;
  examples: string[];
  userMessage: string;
  nextSteps: string[];
}) {
  const severityColor = severity === 'Critical' ? 'bg-red-100 text-red-800 border-red-300' :
                        severity === 'High' ? 'bg-orange-100 text-orange-800 border-orange-300' :
                        severity === 'Medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' :
                        'bg-blue-100 text-blue-800 border-blue-300';
  
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-foreground text-sm">{title}</h3>
          <span className={`text-xs px-2 py-1 border rounded font-bold ${severityColor}`}>
            {severity}
          </span>
        </div>
      </div>
      <div className="p-4 text-xs space-y-3">
        <div>
          <p className="font-bold text-foreground mb-1">Examples:</p>
          <ul className="space-y-1 text-muted-foreground ml-4">
            {examples.map((ex, i) => (
              <li key={i}>• {ex}</li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded p-2">
          <p className="font-bold text-foreground mb-1">User Message:</p>
          <p className="text-muted-foreground italic">"{userMessage}"</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Next Steps:</p>
          <ul className="space-y-1 text-muted-foreground ml-4">
            {nextSteps.map((step, i) => (
              <li key={i}>• {step}</li>
            ))}
          </ul>
        </div>
      </div>
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
            <h3 className="font-bold text-foreground">{title}</h3>
            <span className="text-xs font-bold text-muted-foreground px-2 py-1 bg-card border border-border rounded">
              {state}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          {branches && (
            <div className="mt-2 text-xs text-muted-foreground flex items-center gap-2">
              <ArrowRight size={14} />
              <span>Branches based on result</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ScreenExample({ title, variant, children }: { 
  title: string;
  variant: 'default' | 'error' | 'warning' | 'success' | 'info';
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
        <div className="bg-background border-2 border-border rounded p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

function DelayRule({ attempt, action, delay }: { attempt: string; action: string; delay: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2">
      <div className="flex-1">
        <p className="font-bold text-foreground">{attempt}</p>
        <p className="text-muted-foreground">{action}</p>
      </div>
      <span className="text-primary font-bold">{delay}</span>
    </div>
  );
}

function TrackingRule({ scope, description, recommended }: { scope: string; description: string; recommended: boolean }) {
  return (
    <div className="flex items-start gap-2">
      {recommended ? (
        <CheckCircle size={16} className="text-green-600 mt-0.5" />
      ) : (
        <Info size={16} className="text-muted-foreground mt-0.5" />
      )}
      <div className="flex-1">
        <p className="font-bold text-foreground">{scope}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function RecoveryPath({ title, icon, options, timeline }: { 
  title: string; 
  icon: React.ReactNode; 
  options: string[];
  timeline: string;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-4 py-3">
        <div className="flex items-center gap-2 mb-1">
          {icon}
          <h3 className="font-bold text-foreground text-sm">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <ul className="space-y-2 text-xs text-muted-foreground mb-3">
          {options.map((option, i) => (
            <li key={i} className="flex items-start gap-2">
              <ArrowRight size={12} className="text-primary mt-0.5" />
              <span>{option}</span>
            </li>
          ))}
        </ul>
        <div className="pt-3 border-t border-border text-xs text-muted-foreground">
          <p><strong>Timeline:</strong> {timeline}</p>
        </div>
      </div>
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
      <h3 className="font-bold text-foreground mb-2">{category}</h3>
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
