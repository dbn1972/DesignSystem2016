import { Link } from "react-router";
import { Clock, Shield, CheckCircle, AlertCircle, Info, XCircle, ArrowRight, ChevronRight, RefreshCw, HelpCircle, Check, X, Save, AlertTriangle, Eye } from "lucide-react";

export default function SessionTimeoutPattern() {
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
            <span className="text-foreground font-medium">Session Timeout & Re-authentication</span>
          </div>

          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-yellow-100 border-2 border-yellow-300 rounded flex items-center justify-center">
                  <Clock size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Identity & Access Pattern</div>
                  <h1 className="text-3xl font-bold text-foreground">Session Timeout & Re-authentication</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Graceful handling of session expiry with proactive warnings, clear communication, and 
                seamless re-authentication that preserves user progress. Balances security requirements 
                with user convenience for government digital services.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-002-08</span></span>
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
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded text-blue-700 font-bold text-xs text-center uppercase">
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
              { id: "flow", label: "Flow Diagram" },
              { id: "screens", label: "Example Screens" },
              { id: "timeout-config", label: "Timeout Configuration" },
              { id: "save-progress", label: "Save Progress" },
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
      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-16">
            <OverviewSection />
            <FlowDiagram />
            <ExampleScreens />
            <TimeoutConfigSection />
            <SaveProgressSection />
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
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Session Timeout & Re-authentication Pattern</div>
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
              Protect user sessions from unauthorized access while minimizing disruption. Warn users 
              before timeout, preserve their work, and provide seamless re-authentication that returns 
              them to their task without data loss.
            </p>
            <div className="space-y-2">
              <InfoItem icon={<Shield size={16} className="text-primary" />} text="Enforce security timeout policies" />
              <InfoItem icon={<AlertCircle size={16} className="text-yellow-600" />} text="Warn users before session expires" />
              <InfoItem icon={<Save size={16} className="text-primary" />} text="Auto-save progress where possible" />
              <InfoItem icon={<RefreshCw size={16} className="text-green-600" />} text="Seamless re-authentication flow" />
            </div>
          </div>
        </div>

        {/* User Goals */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">User Goals</h3>
          </div>
          <div className="p-6 space-y-2">
            <GoalItem text="Receive advance warning before timeout" />
            <GoalItem text="Extend session without losing work" />
            <GoalItem text="Understand why session expired" />
            <GoalItem text="Re-authenticate quickly and easily" />
            <GoalItem text="Return to task with progress preserved" />
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
            <WhenItem text="All authenticated government services" />
            <WhenItem text="Services with sensitive data access" />
            <WhenItem text="Long-form applications or multi-step processes" />
            <WhenItem text="Services requiring security compliance" />
            <WhenItem text="Shared/public computer scenarios" />
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
            <WhenNotItem text="Public information pages (no authentication)" />
            <WhenNotItem text="Read-only services without sensitive data" />
            <WhenNotItem text="API-based machine-to-machine access" />
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
            title="User Authenticated & Active"
            description="User signed in and actively using service; session timer starts"
            state="Active Session"
          />
          <FlowStep 
            number={2}
            title="Inactivity Detected"
            description="No user interaction for X minutes (configurable, e.g., 13 min of 15 min timeout)"
            state="Monitoring"
          />
          <FlowStep 
            number={3}
            title="Show Warning Modal"
            description="Display countdown: 'Your session will expire in 2 minutes due to inactivity'"
            state="Warning"
            branches={true}
          />
          
          {/* User Extends Session */}
          <div className="ml-12 pl-6 border-l-4 border-green-500 space-y-4">
            <FlowStep 
              number="3a"
              title="User Clicks 'Continue Session'"
              description="User interacts with warning; session timer resets"
              state="User Action"
              variant="success"
            />
            <FlowStep 
              number={4}
              title="Session Extended"
              description="Warning dismissed; full timeout period resets; user continues work"
              state="Active Session"
              variant="success"
            />
          </div>

          {/* Session Expires */}
          <div className="ml-12 pl-6 border-l-4 border-orange-500 space-y-4">
            <FlowStep 
              number="3b"
              title="No Response / Timer Expires"
              description="Countdown reaches 0; session terminated for security"
              state="Timeout"
              variant="warning"
            />
            <FlowStep 
              number={5}
              title="Auto-Save Progress (if applicable)"
              description="Draft saved to server; form data preserved"
              state="Saving"
              variant="warning"
            />
            <FlowStep 
              number={6}
              title="Show Session Expired Screen"
              description="Explain timeout; offer re-authentication to continue"
              state="Expired"
              variant="warning"
            />
            <FlowStep 
              number={7}
              title="Re-authentication"
              description="User enters password (or OTP if required); verify credentials"
              state="Verification"
              variant="warning"
            />
          </div>

          {/* Re-auth Success */}
          <div className="ml-24 pl-6 border-l-4 border-green-500 space-y-4">
            <FlowStep 
              number="7a"
              title="Re-authentication Successful"
              description="Credentials verified; new session created"
              state="Success"
              variant="success"
            />
            <FlowStep 
              number={8}
              title="Restore Progress & Return to Task"
              description="Load saved draft; return user to exact step they were on"
              state="Restored"
              variant="success"
            />
          </div>

          {/* Re-auth Failed */}
          <div className="ml-24 pl-6 border-l-4 border-red-500 space-y-4">
            <FlowStep 
              number="7b"
              title="Re-authentication Failed"
              description="Wrong password/OTP; show error with retry option"
              state="Error"
              variant="error"
            />
            <FlowStep 
              number={9}
              title="Offer Recovery Options"
              description="Forgot password, try again, or contact support"
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
        {/* Active Form */}
        <ScreenExample
          title="Active Form in Progress"
          variant="default"
        >
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3 text-sm">
              <Info size={14} className="inline mr-2 text-blue-600" />
              <span className="text-muted-foreground">Session active. Auto-saves every 2 minutes.</span>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="Rajesh Kumar"
                  readOnly
                  className="w-full px-4 py-3 border-2 border-border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="rajesh.kumar@example.com"
                  readOnly
                  className="w-full px-4 py-3 border-2 border-border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Mobile Number</label>
                <input 
                  type="tel" 
                  placeholder="+91"
                  className="w-full px-4 py-3 border-2 border-border rounded"
                />
              </div>
            </div>
          </div>
        </ScreenExample>

        {/* Timeout Warning */}
        <ScreenExample
          title="Inactivity Warning Modal"
          variant="warning"
        >
          <div className="bg-card border-2 border-yellow-400 rounded-lg p-6 space-y-4">
            <div className="text-center">
              <Clock size={40} className="text-yellow-600 mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Session Expiring Soon</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Your session will expire in <strong className="text-red-600 text-lg">1:45</strong> due to inactivity.
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-300 rounded p-3 text-sm text-muted-foreground">
              <p>To protect your information, we'll sign you out if there's no activity.</p>
              <p className="mt-2">Click below to continue working.</p>
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
                Continue Session
              </button>
              <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded">
                Sign Out Now
              </button>
            </div>
          </div>
        </ScreenExample>

        {/* Session Extended */}
        <ScreenExample
          title="Session Extended (Success)"
          variant="success"
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Session Extended</h4>
              <p className="text-sm text-muted-foreground">
                You can continue working.<br/>
                Your session has been extended.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 rounded p-3 text-sm text-green-800">
              <CheckCircle size={14} className="inline mr-2" />
              Session will expire after 15 minutes of inactivity
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Continue
            </button>
          </div>
        </ScreenExample>

        {/* Session Expired */}
        <ScreenExample
          title="Session Expired Screen"
          variant="warning"
        >
          <div className="space-y-4">
            <div className="text-center">
              <Clock size={40} className="text-orange-600 mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Session Expired</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Your session has ended due to inactivity.<br/>
                This helps protect your information.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3 text-sm text-muted-foreground">
              <Save size={14} className="inline mr-2 text-blue-600" />
              <strong>Good news:</strong> Your progress has been saved automatically.
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-300 rounded p-4 text-sm text-muted-foreground">
              <p className="font-bold text-foreground mb-2">To continue where you left off:</p>
              <ol className="ml-4 space-y-1">
                <li>1. Sign in again below</li>
                <li>2. We'll take you back to your form</li>
                <li>3. All your information will be there</li>
              </ol>
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Sign In to Continue
            </button>
          </div>
        </ScreenExample>

        {/* Re-authentication */}
        <ScreenExample
          title="Re-authentication Screen"
          variant="info"
        >
          <div className="space-y-4">
            <div className="text-center mb-4">
              <Shield size={40} className="text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Sign In to Continue</h4>
              <p className="text-sm text-muted-foreground">
                Signing in as: <strong>rajesh.kumar@example.com</strong>
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3 text-sm text-muted-foreground">
              <Info size={14} className="inline mr-2" />
              Your form progress is saved. Enter your password to continue.
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password"
                className="w-full px-4 py-3 border-2 border-border rounded"
              />
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Sign In
            </button>
            <div className="text-center">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        </ScreenExample>

        {/* Re-auth Failed */}
        <ScreenExample
          title="Re-authentication Failed"
          variant="error"
        >
          <div className="space-y-4">
            <div className="text-center">
              <XCircle size={40} className="text-red-600 mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Incorrect Password</h4>
              <p className="text-sm text-muted-foreground">
                The password you entered is not correct
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded p-4 text-sm text-muted-foreground">
              <p className="font-bold text-red-800 mb-2">What you can do:</p>
              <ul className="space-y-1 ml-4">
                <li>• Try entering your password again</li>
                <li>• Use "Forgot password" to reset it</li>
                <li>• Your progress is still saved</li>
              </ul>
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password"
                className="w-full px-4 py-3 border-2 border-red-400 rounded bg-red-50"
              />
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Try Again
            </button>
            <button className="w-full px-4 py-3 border-2 border-primary bg-card text-primary font-bold rounded">
              Reset Password
            </button>
          </div>
        </ScreenExample>

        {/* Return to Task */}
        <ScreenExample
          title="Restored to Task (Success)"
          variant="success"
        >
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 rounded p-3 text-sm">
              <CheckCircle size={14} className="inline mr-2 text-green-600" />
              <span className="text-muted-foreground"><strong>Welcome back!</strong> Your progress has been restored.</span>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="Rajesh Kumar"
                  readOnly
                  className="w-full px-4 py-3 border-2 border-border rounded bg-background"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="rajesh.kumar@example.com"
                  readOnly
                  className="w-full px-4 py-3 border-2 border-border rounded bg-background"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Mobile Number</label>
                <input 
                  type="tel" 
                  placeholder="+91"
                  className="w-full px-4 py-3 border-2 border-blue-400 rounded"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  <ArrowRight size={12} className="inline mr-1" />
                  Continue filling out the form
                </p>
              </div>
            </div>
          </div>
        </ScreenExample>

        {/* Help State */}
        <ScreenExample
          title="Help & Support"
          variant="info"
        >
          <div className="space-y-4">
            <div className="text-center mb-4">
              <HelpCircle size={40} className="text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Need Help?</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3">
                <p className="font-bold text-foreground mb-2">Common Questions:</p>
                <ul className="ml-4 space-y-1 text-muted-foreground">
                  <li>• <strong>Why did my session expire?</strong><br/>For security, we sign you out after 15 minutes of inactivity</li>
                  <li>• <strong>Is my progress saved?</strong><br/>Yes, we auto-save your form every 2 minutes</li>
                  <li>• <strong>Can't remember password?</strong><br/>Use "Forgot password" to reset it</li>
                </ul>
              </div>
              <div className="bg-background border border-border rounded p-3">
                <p className="font-bold text-foreground mb-1">Contact Support:</p>
                <p className="text-muted-foreground">Helpline: 1800-XXX-YYYY (Toll-free)</p>
                <p className="text-muted-foreground">Email: support@service.gov.in</p>
                <p className="text-muted-foreground">Hours: Mon-Sat, 9 AM - 6 PM IST</p>
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

// ==================== TIMEOUT CONFIGURATION SECTION ====================

function TimeoutConfigSection() {
  return (
    <section id="timeout-config" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Timeout Configuration Guidelines</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Recommended Timeout Values</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-bold text-foreground">Service Type</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Timeout Period</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Warning Before</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">High Security<br/><span className="text-xs text-muted-foreground">(Payment, sensitive data)</span></td>
                <td className="py-3 px-4 text-muted-foreground">10 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">2 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">Maximum protection for financial/sensitive operations</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Standard Services<br/><span className="text-xs text-muted-foreground">(Application forms, status)</span></td>
                <td className="py-3 px-4 text-muted-foreground">15 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">2 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">Balance between security and convenience</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Long Forms<br/><span className="text-xs text-muted-foreground">(Complex applications)</span></td>
                <td className="py-3 px-4 text-muted-foreground">30 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">3 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">Accommodate time-intensive data entry</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Read-Only Access<br/><span className="text-xs text-muted-foreground">(Dashboard, reports)</span></td>
                <td className="py-3 px-4 text-muted-foreground">60 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">5 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">Lower risk; focus on user convenience</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Public Terminals<br/><span className="text-xs text-muted-foreground">(Kiosks, shared computers)</span></td>
                <td className="py-3 px-4 text-muted-foreground">5 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">1 minute</td>
                <td className="py-3 px-4 text-muted-foreground">Critical: prevent unauthorized access on shared devices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Activity Detection</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <ActivityItem 
              activity="Keyboard Input"
              resets="Yes - any key press in form fields"
            />
            <ActivityItem 
              activity="Mouse Movement"
              resets="No - too sensitive; not reliable indicator"
            />
            <ActivityItem 
              activity="Button Clicks"
              resets="Yes - save, next, previous, submit"
            />
            <ActivityItem 
              activity="Scrolling"
              resets="No - passive action; doesn't indicate engagement"
            />
            <ActivityItem 
              activity="File Upload"
              resets="Yes - active task completion"
            />
            <ActivityItem 
              activity="Modal Interactions"
              resets="Yes - extending session, confirmations"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Warning Display Rules</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <WarningRule 
              rule="Modal, Not Notification"
              description="Use blocking modal that requires user action; not dismissible banner"
            />
            <WarningRule 
              rule="Live Countdown"
              description="Show real-time countdown: '1:45' updating every second"
            />
            <WarningRule 
              rule="Accessibility Announcement"
              description="Screen reader announces: 'Warning: session expiring in 2 minutes'"
            />
            <WarningRule 
              rule="Sound Alert (Optional)"
              description="Brief, non-startling audio cue for users who may not see screen"
            />
            <WarningRule 
              rule="Keyboard Focus"
              description="Focus on 'Continue Session' button for quick keyboard action"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SAVE PROGRESS SECTION ====================

function SaveProgressSection() {
  return (
    <section id="save-progress" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Save Progress Strategy</h2>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Save size={20} className="text-blue-600" />
          Auto-Save is Critical for Session Timeout
        </h3>
        <p className="text-sm text-muted-foreground">
          Users must not lose their work due to timeout. Implement auto-save to preserve form data, 
          uploaded documents, and progress state. This is a <strong>mandatory</strong> feature for 
          all multi-step or long-form government services.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Auto-Save Implementation</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <SaveStrategy 
              strategy="Interval-Based Save"
              description="Auto-save every 2 minutes while user is active"
              recommended={true}
            />
            <SaveStrategy 
              strategy="Field-Level Save"
              description="Save on field blur (when user moves to next field)"
              recommended={true}
            />
            <SaveStrategy 
              strategy="Before Timeout"
              description="Trigger save when warning modal appears"
              recommended={true}
            />
            <SaveStrategy 
              strategy="On Page Navigation"
              description="Save before moving to next/previous step"
              recommended={true}
            />
            <SaveStrategy 
              strategy="Manual Save Button"
              description="Provide explicit 'Save Draft' button for user control"
              recommended={false}
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
            <h3 className="font-bold text-foreground">What to Save</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <SaveItem item="Form Field Values" detail="All text inputs, selections, checkboxes" />
            <SaveItem item="Current Step/Page" detail="User's position in multi-step flow" />
            <SaveItem item="Uploaded Documents" detail="File references (not re-upload required)" />
            <SaveItem item="Validation State" detail="Which fields have been validated/passed" />
            <SaveItem item="Session Context" detail="Application ID, user ID, timestamp" />
            <SaveItem item="User Preferences" detail="Language selection, accessibility settings" />
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Draft Data Retention Policy</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-bold text-foreground mb-2">Retention Period</p>
              <p className="text-muted-foreground">Keep draft data for 30 days from last save</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-2">Cleanup</p>
              <p className="text-muted-foreground">Automatically delete expired drafts; notify user before deletion</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-2">Privacy</p>
              <p className="text-muted-foreground">Encrypt draft data at rest; delete immediately on user request</p>
            </div>
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

      <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-600" />
          WCAG 2.2.1 Timing Adjustable (Level A) - Mandatory Compliance
        </h3>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>For each time limit set by the content, at least one of the following is true:</strong>
          </p>
          <ul className="ml-6 space-y-1">
            <li><strong>• Turn off:</strong> User can turn off time limit before encountering it; OR</li>
            <li><strong>• Adjust:</strong> User can adjust time limit before encountering it over a wide range (at least 10x default); OR</li>
            <li><strong>• Extend:</strong> User is warned before time expires and can extend with a simple action (e.g., "press spacebar")</li>
          </ul>
          <p className="mt-2">
            <strong>Our approach:</strong> We use <strong>"Extend"</strong> - warn users with a modal and allow them to continue their session with one click/keyboard action.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Screen Reader Support</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Warning Announcement"
              description="aria-live='assertive' on warning modal: 'Warning: Your session will expire in 2 minutes'"
            />
            <AccessibilityItem 
              label="Countdown Updates"
              description="Announce every 30 seconds: '1 minute 30 seconds remaining', '1 minute remaining', etc."
            />
            <AccessibilityItem 
              label="Focus Management"
              description="When modal appears, focus moves to 'Continue Session' button automatically"
            />
            <AccessibilityItem 
              label="Expiry Notification"
              description="On timeout: 'Session expired. Please sign in again to continue'"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Keyboard Navigation</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Modal Trap Focus"
              description="Focus stays within warning modal; cannot tab out to background"
            />
            <AccessibilityItem 
              label="Primary Action Default"
              description="'Continue Session' is default focused; press Enter to extend"
            />
            <AccessibilityItem 
              label="Escape Key"
              description="ESC key extends session (same as clicking 'Continue')"
            />
            <AccessibilityItem 
              label="Spacebar Support"
              description="Spacebar also triggers 'Continue Session' for easy keyboard access"
            />
          </div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-purple-600" />
          Plain Language & Visual Design
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Use simple language: 'Your session will expire' not 'Session timeout imminent'" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Explain reason: 'due to inactivity' helps users understand" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Tell them what to do: 'Click Continue Session to keep working' is clear action" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Reassure about progress: 'Your work is saved' reduces anxiety" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="High contrast countdown: Large, bold text for timer visibility" />
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
          <h3 className="font-bold text-foreground">Technical Implementation</h3>
        </div>
        <div className="p-6 space-y-4 text-sm">
          <ImplementationItem 
            category="Client-Side Timer"
            requirements={[
              "Use JavaScript setTimeout/setInterval for countdown display",
              "Reset timer on user activity (keyboard, clicks, form changes)",
              "Store last activity timestamp in sessionStorage",
              "Synchronize with server session timeout value via config",
              "Display warning at configurable threshold (e.g., 2 min before expiry)",
              "Update countdown every second for real-time feedback"
            ]}
          />
          <ImplementationItem 
            category="Server-Side Session Management"
            requirements={[
              "Set session timeout in server configuration (e.g., 15 minutes)",
              "Track last activity time on server for each session",
              "Extend session on authenticated API calls (auto-save, form submit)",
              "Invalidate session on timeout; clear session data securely",
              "Return 401 Unauthorized on expired session API calls",
              "Support session extension via dedicated API endpoint"
            ]}
          />
          <ImplementationItem 
            category="Auto-Save Mechanism"
            requirements={[
              "Implement debounced save: wait 2 seconds after last change before saving",
              "Send draft data to server via POST /api/drafts/:applicationId",
              "Include CSRF token and authentication in save requests",
              "Show visual indicator: 'Saving...' → 'Saved' with timestamp",
              "Handle save failures gracefully; retry with exponential backoff",
              "Store draft ID for retrieval on re-authentication"
            ]}
          />
          <ImplementationItem 
            category="Re-authentication Flow"
            requirements={[
              "On session expiry, redirect to /session-expired with return URL",
              "Display re-auth form pre-filled with user identifier (email/username)",
              "Verify credentials; create new session on success",
              "Retrieve draft data using original application/draft ID",
              "Redirect back to original page with restored state",
              "Log re-authentication event for security audit"
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: Warning Modal</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`// Session timeout warning
const TIMEOUT_MS = 15 * 60 * 1000; // 15 min
const WARNING_MS = 2 * 60 * 1000;  // 2 min

let timeoutTimer;
let warningTimer;

function resetTimers() {
  clearTimeout(timeoutTimer);
  clearTimeout(warningTimer);
  
  // Show warning 2 min before timeout
  warningTimer = setTimeout(() => {
    showWarningModal();
  }, TIMEOUT_MS - WARNING_MS);
  
  // Expire session after full timeout
  timeoutTimer = setTimeout(() => {
    handleSessionExpiry();
  }, TIMEOUT_MS);
}

// Reset on user activity
document.addEventListener('keydown', resetTimers);
document.addEventListener('click', resetTimers);

// Initial setup
resetTimers();`}
            </pre>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: Auto-Save</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`// Auto-save with debounce
let saveTimeout;
const SAVE_DELAY_MS = 2000;

function autoSave(formData) {
  clearTimeout(saveTimeout);
  
  saveTimeout = setTimeout(async () => {
    showSavingIndicator();
    
    try {
      const response = await fetch(
        '/api/drafts/' + applicationId,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken
          },
          body: JSON.stringify(formData)
        }
      );
      
      if (response.ok) {
        showSavedIndicator();
      }
    } catch (error) {
      showSaveError();
    }
  }, SAVE_DELAY_MS);
}

// Trigger on form changes
formElement.addEventListener(
  'change', 
  () => autoSave(getFormData())
);`}
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
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Security Classification</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-blue-100 border-2 border-blue-300 rounded text-blue-800 font-bold text-sm">
                SECURITY CRITICAL
              </div>
            </div>
            <div className="text-sm space-y-2 text-muted-foreground">
              <p>Session timeout is a security control. Changes require security review.</p>
            </div>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Pattern Owner</h3>
          </div>
          <div className="p-6 text-sm space-y-3">
            <div>
              <p className="font-bold text-foreground">Team:</p>
              <p className="text-muted-foreground">Security & Identity</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Contact:</p>
              <p className="text-muted-foreground">session@ux4g.gov.in</p>
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
              <li>☐ Timeout duration configured and approved by security team</li>
              <li>☐ Warning modal implemented with countdown timer</li>
              <li>☐ Auto-save functionality tested and working</li>
              <li>☐ Re-authentication flow tested end-to-end</li>
              <li>☐ Progress restoration verified after timeout</li>
              <li>☐ WCAG 2.2.1 compliance validated (timing adjustable)</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">Ongoing Monitoring:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>☐ Track session timeout rate and user impact</li>
              <li>☐ Monitor re-authentication success/failure rates</li>
              <li>☐ Review user complaints about session expiry</li>
              <li>☐ Analyze auto-save success rate and failures</li>
              <li>☐ Test timeout behavior on different devices/browsers</li>
              <li>☐ Quarterly security review of session management</li>
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
            <p className="font-bold text-foreground mb-2">For Technical Issues:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Email: session-tech@ux4g.gov.in</li>
              <li>• Slack: #session-timeout-support</li>
              <li>• Response: 4 hours (business hours)</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">For Policy Questions:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Email: security@ux4g.gov.in</li>
              <li>• Security review required for timeout changes</li>
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
          <p className="font-bold text-foreground mb-1">Standard Timeout</p>
          <p className="text-muted-foreground">15 minutes inactivity</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Warning Before</p>
          <p className="text-muted-foreground">2 minutes</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Auto-Save Interval</p>
          <p className="text-muted-foreground">Every 2 minutes</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Draft Retention</p>
          <p className="text-muted-foreground">30 days</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">WCAG Level</p>
          <p className="text-muted-foreground">2.2.1 Level A (mandatory)</p>
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
        <RelatedPatternLink to="/patterns/identity/account-recovery" text="Account Recovery" />
        <RelatedPatternLink to="/auth-error-lockout-pattern" text="Auth Errors & Lockout" />
        <RelatedPatternLink to="/patterns/identity/forgot-password" text="Forgot Password" />
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
          to="/patterns/identity/session-timeout"
          className="block p-3 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Eye size={16} className="text-primary" />
            <span className="font-bold text-sm text-foreground">View Live Demo</span>
          </div>
          <p className="text-xs text-muted-foreground">Session timeout flow</p>
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
        <ResourceLink text="WCAG 2.2.1 Timing Adjustable" />
        <ResourceLink text="Session Security Best Practices" />
        <ResourceLink text="Auto-Save Implementation Guide" />
        <ResourceLink text="Timeout Configuration Template" />
        <ResourceLink text="User Testing Results" />
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
              <span>Branches based on user response</span>
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

function ActivityItem({ activity, resets }: { activity: string; resets: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-foreground font-bold">{activity}</span>
      <span className="text-muted-foreground">{resets}</span>
    </div>
  );
}

function WarningRule({ rule, description }: { rule: string; description: string }) {
  return (
    <div>
      <p className="font-bold text-foreground mb-1">{rule}</p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function SaveStrategy({ strategy, description, recommended }: { strategy: string; description: string; recommended: boolean }) {
  return (
    <div className="flex items-start gap-2">
      {recommended ? (
        <CheckCircle size={16} className="text-green-600 mt-0.5" />
      ) : (
        <Info size={16} className="text-gray-400 mt-0.5" />
      )}
      <div className="flex-1">
        <p className="font-bold text-foreground">{strategy}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function SaveItem({ item, detail }: { item: string; detail: string }) {
  return (
    <div>
      <p className="font-bold text-foreground mb-1">{item}</p>
      <p className="text-muted-foreground">{detail}</p>
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
