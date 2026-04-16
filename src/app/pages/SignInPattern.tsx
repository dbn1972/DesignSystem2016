import { Link } from "react-router";
import { Lock, Shield, CheckCircle, AlertCircle, Info, XCircle, Eye, EyeOff, Clock, Phone, Mail, User, Users, Key, AlertTriangle, ArrowRight, RefreshCw, Smartphone, FileText, Globe, Code, Settings, HelpCircle, ChevronRight, Database } from "lucide-react";

export default function SignInPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <Lock size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Identity & Access Pattern</div>
                  <h1 className="text-3xl font-bold text-foreground">Sign In</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Standard authentication pattern for returning users to access government digital services using 
                username/mobile number and password. Includes error handling, password recovery entry point, 
                and account lockout protection.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-009-02</span></span>
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
              { id: "fields", label: "Fields & Content" },
              { id: "validation", label: "Validation" },
              { id: "errors", label: "Error States" },
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
            <FieldsAndContent />
            <ValidationRules />
            <ErrorStates />
            <AccessibilitySection />
            <ImplementationSection />
            <GovernanceSection />
          </div>

          {/* Sidebar - 3 columns */}
          <aside className="col-span-3 space-y-6 sticky top-24 self-start">
            <QuickReference />
            <InteractivePrototype />
            <RelatedPatterns />
            <Resources />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Sign In Pattern</div>
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
              Provide a secure, familiar authentication experience for citizens returning to government digital services. 
              Sign In validates user credentials and grants access to personalized dashboards, saved applications, and service history.
            </p>
            <div className="space-y-2">
              <PurposeItem text="Authenticate returning users" />
              <PurposeItem text="Protect account security with password validation" />
              <PurposeItem text="Provide clear error feedback and recovery paths" />
              <PurposeItem text="Prevent unauthorized access through lockout mechanisms" />
            </div>
          </div>
        </div>

        {/* When to Use */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-100 border-b-2 border-green-300 px-6 py-4">
            <h3 className="font-bold text-foreground">When to Use</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <WhenToUseItem text="User has an existing account" />
              <WhenToUseItem text="Service requires authentication for personalized access" />
              <WhenToUseItem text="User needs to access saved applications or history" />
              <WhenToUseItem text="Service requires session-based interaction" />
              <WhenToUseItem text="Compliance requires identity verification" />
            </ul>
          </div>
        </div>

        {/* When NOT to Use */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-100 border-b-2 border-red-300 px-6 py-4">
            <h3 className="font-bold text-foreground">When NOT to Use</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <WhenNotToUseItem text="User is a first-time visitor (use Sign Up)" />
              <WhenNotToUseItem text="Service is fully public and doesn't require authentication" />
              <WhenNotToUseItem text="Guest checkout or tracking-only access is sufficient" />
              <WhenNotToUseItem text="High-security service requires Aadhaar authentication" />
            </ul>
          </div>
        </div>

        {/* Primary User Goals */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-100 border-b-2 border-blue-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Primary User Goals</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <UserGoalItem text="Sign in quickly (< 30 seconds)" />
              <UserGoalItem text="Access my saved applications and data" />
              <UserGoalItem text="Understand why sign in failed (if errors occur)" />
              <UserGoalItem text="Recover my account if I forgot my password" />
              <UserGoalItem text="Get help if I'm locked out" />
            </ul>
          </div>
        </div>
      </div>

      {/* Pattern Characteristics */}
      <div className="bg-card border-2 border-border rounded-lg p-8">
        <h3 className="font-bold text-foreground mb-6">Pattern Characteristics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CharacteristicItem
            icon={<Clock size={24} className="text-blue-600" />}
            label="Average Duration"
            value="30 seconds"
          />
          <CharacteristicItem
            icon={<AlertTriangle size={24} className="text-yellow-600" />}
            label="Complexity"
            value="Low"
          />
          <CharacteristicItem
            icon={<CheckCircle size={24} className="text-green-600" />}
            label="Success Rate"
            value="96%"
          />
          <CharacteristicItem
            icon={<Users size={24} className="text-purple-600" />}
            label="Daily Usage"
            value="5M+ authentications"
          />
          <CharacteristicItem
            icon={<Shield size={24} className="text-red-600" />}
            label="Security Level"
            value="Standard (password-based)"
          />
          <CharacteristicItem
            icon={<Globe size={24} className="text-indigo-600" />}
            label="Services Using"
            value="120+"
          />
        </div>
      </div>
    </section>
  );
}

function PurposeItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

function WhenToUseItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}

function WhenNotToUseItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <XCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}

function UserGoalItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <ChevronRight size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}

function CharacteristicItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="font-bold text-foreground">{value}</div>
      </div>
    </div>
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
        <div className="space-y-8">
          {/* Happy Path */}
          <div>
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle size={20} className="text-green-600" />
              Happy Path (Successful Sign In)
            </h3>
            <div className="flex items-center gap-4">
              <FlowStep number="1" label="Enter Credentials" description="Username/mobile + password" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="2" label="Submit Form" description="Validation and authentication" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="3" label="Create Session" description="Token generation" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="4" label="Redirect" description="Dashboard/service homepage" />
            </div>
          </div>

          {/* Error Path */}
          <div>
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <XCircle size={20} className="text-red-600" />
              Error Path (Invalid Credentials)
            </h3>
            <div className="flex items-center gap-4">
              <FlowStep number="1" label="Enter Credentials" description="Incorrect username or password" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="2" label="Submit Form" description="Backend validation fails" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="3" label="Show Error" description="Attempt counter: 1 of 5" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="4" label="Retry or Recover" description="Try again or reset password" />
            </div>
          </div>

          {/* Lockout Path */}
          <div>
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Lock size={20} className="text-orange-600" />
              Lockout Path (5 Failed Attempts)
            </h3>
            <div className="flex items-center gap-4">
              <FlowStep number="1" label="5th Failed Attempt" description="Lockout threshold reached" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="2" label="Account Locked" description="15-minute temporary lock" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="3" label="Show Lockout Message" description="Timer + recovery options" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="4" label="Wait or Contact Support" description="Auto-unlock or assistance" />
            </div>
          </div>

          {/* Recovery Path */}
          <div>
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Key size={20} className="text-blue-600" />
              Recovery Path (Forgot Password)
            </h3>
            <div className="flex items-center gap-4">
              <FlowStep number="1" label="Click 'Forgot Password'" description="Entry point from sign in" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="2" label="Navigate to Reset" description="Redirect to password reset flow" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="3" label="Complete Reset" description="OTP verification + new password" />
              <ArrowRight size={20} className="text-gray-400" />
              <FlowStep number="4" label="Return to Sign In" description="Use new credentials" />
            </div>
          </div>
        </div>

        <div className="mt-8 p-5 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <div className="font-bold text-foreground mb-2">Flow Decision Points</div>
              <ul className="space-y-1">
                <li>• After 3 failed attempts, show warning message</li>
                <li>• After 5 failed attempts, trigger 15-minute account lock</li>
                <li>• "Forgot Password" link always visible for recovery</li>
                <li>• Session timeout redirects to Sign In with saved context</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowStep({ number, label, description }: { number: string; label: string; description: string }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="p-4 bg-background border-2 border-border rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
            {number}
          </div>
          <div className="font-bold text-foreground text-sm">{label}</div>
        </div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

// ==================== EXAMPLE SCREENS ====================

function ExampleScreens() {
  const states = [
    { id: "default", label: "Default Sign In", description: "Standard entry state" },
    { id: "wrong", label: "Wrong Credentials", description: "Invalid username/password" },
    { id: "forgot", label: "Forgot Password Entry", description: "Recovery path visible" },
    { id: "locked", label: "Account Locked", description: "5 failed attempts" },
    { id: "expired", label: "Session Expired", description: "Re-authentication required" },
    { id: "unavailable", label: "Service Unavailable", description: "System error" }
  ];

  return (
    <section id="screens" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Example Screens</h2>
        <p className="text-muted-foreground mt-2">Visual representations of key sign-in states</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {states.map((state) => (
          <ScreenExample key={state.id} state={state.id} label={state.label} description={state.description} />
        ))}
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Eye size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <div className="font-bold text-foreground mb-2">Interactive Prototype Available</div>
            <p className="mb-3">
              View the full working prototype with realistic form behavior, validation, and state transitions.
            </p>
            <Link
              to="/patterns/identity/sign-in"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded hover:opacity-90 transition-colors"
            >
              View Interactive Prototype
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenExample({ state, label, description }: { state: string; label: string; description: string }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3 flex items-center justify-between">
        <h3 className="font-bold text-foreground text-sm">{label}</h3>
        <span className="text-xs text-muted-foreground">{description}</span>
      </div>
      <div className="p-6 bg-background min-h-[300px] flex items-center justify-center">
        <ScreenMockup state={state} />
      </div>
    </div>
  );
}

function ScreenMockup({ state }: { state: string }) {
  return (
    <div className="w-full max-w-md bg-card border-2 border-border rounded-lg overflow-hidden shadow-lg">
      {/* Tricolor */}
      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-500"></div>
      
      {/* Header */}
      <div className="p-4 border-b-2 border-border flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
          <Shield size={16} className="text-white" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">Digital India Portal</div>
          <div className="text-xs text-muted-foreground">Government of India</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Sign In</h2>
        
        {/* State-specific error messages */}
        {state === "wrong" && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded flex items-start gap-2">
            <XCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-red-800">
              <div className="font-bold">Invalid username or password</div>
              <div className="text-xs mt-1">Attempts: 1 of 5</div>
            </div>
          </div>
        )}

        {state === "locked" && (
          <div className="mb-4 p-3 bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded flex items-start gap-2">
            <Lock size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-orange-800">
              <div className="font-bold">Account temporarily locked</div>
              <div className="text-xs mt-1">Unlocks in: 14:23</div>
            </div>
          </div>
        )}

        {state === "expired" && (
          <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded flex items-start gap-2">
            <Clock size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <div className="font-bold">Session expired</div>
              <div className="text-xs mt-1">Sign in again to continue</div>
            </div>
          </div>
        )}

        {state === "unavailable" && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded flex items-start gap-2">
            <AlertTriangle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-red-800">
              <div className="font-bold">Service temporarily unavailable</div>
              <div className="text-xs mt-1">Try again in a few minutes</div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-foreground mb-1">
              Username or Mobile Number
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 border-border rounded text-sm"
              placeholder="+91 XXXXX XXXXX"
              disabled
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-foreground mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border-2 border-border rounded text-sm"
              placeholder="••••••••"
              disabled
            />
          </div>
          
          <button
            className="w-full py-2 bg-primary text-white font-bold text-sm rounded"
            disabled
          >
            Sign In
          </button>

          {state === "forgot" && (
            <div className="text-center">
              <a href="#" className="text-sm font-bold text-primary underline">
                Forgot Password?
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==================== FIELDS AND CONTENT ====================

function FieldsAndContent() {
  return (
    <section id="fields" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Fields & Content Guidance</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Required Form Fields</h3>
        </div>
        <div className="divide-y-2 divide-border">
          <FieldGuidance
            field="Username or Mobile Number"
            type="Text input"
            required={true}
            placeholder="+91 XXXXX XXXXX or username"
            helpText="Enter your registered mobile number (with +91) or username"
            maxLength="15 characters (for mobile) or 50 (for username)"
            validation="Must match existing account identifier"
          />
          <FieldGuidance
            field="Password"
            type="Password input with show/hide toggle"
            required={true}
            placeholder="Enter your password"
            helpText="Case-sensitive password as set during registration"
            maxLength="128 characters"
            validation="Must match stored password hash"
          />
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Content Guidance</h3>
        <div className="space-y-4">
          <ContentItem
            element="Page Title"
            content='"Sign In" or "Login" (consistent across service)'
            rationale="Clear, familiar terminology; avoid jargon"
          />
          <ContentItem
            element="Submit Button"
            content='"Sign In" (not "Submit" or "Login")'
            rationale="Matches page title; action-oriented"
          />
          <ContentItem
            element="Forgot Password Link"
            content='"Forgot Password?" or "Reset Password"'
            rationale="Clear recovery path; always visible"
          />
          <ContentItem
            element="New User CTA"
            content='"Don&apos;t have an account? Sign Up"'
            rationale="Guides first-time users to account creation"
          />
          <ContentItem
            element="Help Text"
            content='"Need help? Call 1800-XXX-XXXX"'
            rationale="Provides offline support option"
          />
        </div>
      </div>
    </section>
  );
}

function FieldGuidance({ field, type, required, placeholder, helpText, maxLength, validation }: {
  field: string;
  type: string;
  required: boolean;
  placeholder: string;
  helpText: string;
  maxLength: string;
  validation: string;
}) {
  return (
    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="font-bold text-foreground flex items-center gap-2">
            {field}
            {required && <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">Required</span>}
          </div>
          <div className="text-sm text-muted-foreground mt-1">{type}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="font-bold text-muted-foreground mb-1">Placeholder</div>
          <div className="text-muted-foreground">{placeholder}</div>
        </div>
        <div>
          <div className="font-bold text-muted-foreground mb-1">Max Length</div>
          <div className="text-muted-foreground">{maxLength}</div>
        </div>
        <div>
          <div className="font-bold text-muted-foreground mb-1">Help Text</div>
          <div className="text-muted-foreground">{helpText}</div>
        </div>
        <div>
          <div className="font-bold text-muted-foreground mb-1">Validation</div>
          <div className="text-muted-foreground">{validation}</div>
        </div>
      </div>
    </div>
  );
}

function ContentItem({ element, content, rationale }: { element: string; content: string; rationale: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-background border-2 border-border rounded">
      <div className="flex-1">
        <div className="font-bold text-foreground text-sm mb-1">{element}</div>
        <div className="text-sm text-muted-foreground mb-2">"{content}"</div>
        <div className="text-xs text-muted-foreground italic">Rationale: {rationale}</div>
      </div>
    </div>
  );
}

// ==================== VALIDATION RULES ====================

function ValidationRules() {
  return (
    <section id="validation" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Validation Rules</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Client-Side Validation */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-100 border-b-2 border-blue-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Client-Side Validation</h3>
          </div>
          <div className="p-6 space-y-3">
            <ValidationItem
              rule="Required fields must be filled"
              trigger="On form submit"
              message='"Please enter your username/mobile" or "Please enter your password"'
            />
            <ValidationItem
              rule="Username/mobile format check"
              trigger="On blur (optional)"
              message="No real-time validation to avoid revealing account existence"
            />
            <ValidationItem
              rule="Password minimum length (8 chars)"
              trigger="On input (optional)"
              message="Can show character count, but don't reveal password requirements to attackers"
            />
          </div>
        </div>

        {/* Server-Side Validation */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-100 border-b-2 border-green-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Server-Side Validation</h3>
          </div>
          <div className="p-6 space-y-3">
            <ValidationItem
              rule="Account existence check"
              trigger="On submit"
              message="Generic error to prevent account enumeration"
            />
            <ValidationItem
              rule="Password hash comparison"
              trigger="On submit"
              message="Timing-attack resistant comparison"
            />
            <ValidationItem
              rule="Account status check (active, locked, suspended)"
              trigger="On submit"
              message="Specific message for locked accounts"
            />
            <ValidationItem
              rule="Failed attempt counter"
              trigger="On submit"
              message="Track and increment on each failure"
            />
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Security Best Practices</h3>
        <div className="grid grid-cols-2 gap-4">
          <SecurityPractice
            title="Rate Limiting"
            description="Limit to 5 attempts per 15 minutes per IP address and per account"
          />
          <SecurityPractice
            title="Generic Error Messages"
            description='Use "Invalid username or password" instead of revealing which field is wrong'
          />
          <SecurityPractice
            title="Timing Attack Prevention"
            description="Ensure password comparison takes constant time regardless of correctness"
          />
          <SecurityPractice
            title="Account Enumeration Prevention"
            description="Don't reveal whether username exists; use same error for non-existent accounts"
          />
          <SecurityPractice
            title="Lockout Policy"
            description="Temporarily lock account after 5 failed attempts for 15 minutes"
          />
          <SecurityPractice
            title="Logging and Monitoring"
            description="Log all sign-in attempts (success and failure) with timestamp and IP"
          />
        </div>
      </div>
    </section>
  );
}

function ValidationItem({ rule, trigger, message }: { rule: string; trigger: string; message: string }) {
  return (
    <div className="p-3 bg-background border-l-4 border-blue-600 rounded-r">
      <div className="font-bold text-foreground text-sm mb-1">{rule}</div>
      <div className="text-xs text-muted-foreground mb-2">Trigger: {trigger}</div>
      <div className="text-xs text-muted-foreground italic">{message}</div>
    </div>
  );
}

function SecurityPractice({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded">
      <Shield size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
      <div>
        <div className="font-bold text-foreground text-sm mb-1">{title}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

// ==================== ERROR STATES ====================

function ErrorStates() {
  return (
    <section id="errors" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Error States & Handling</h2>
      </div>

      <div className="space-y-4">
        <ErrorStateCard
          title="Invalid Credentials (Most Common)"
          severity="warning"
          message='"Invalid username or password. Please try again."'
          attemptCounter="Attempts: 1 of 5"
          actions={["Try Again (pre-filled username)", "Forgot Password?"]}
          notes="Show attempt counter after first failure. Generic message prevents account enumeration."
        />

        <ErrorStateCard
          title="Account Locked (5 Failed Attempts)"
          severity="error"
          message='"Your account has been temporarily locked due to multiple failed login attempts."'
          lockDuration="Unlocks in: 14:32 (countdown timer)"
          actions={["Wait for Auto-Unlock", "Contact Support", "Account Recovery"]}
          notes="15-minute automatic unlock. Provide clear recovery paths."
        />

        <ErrorStateCard
          title="Empty Fields"
          severity="warning"
          message='"Please enter your username/mobile number" or "Please enter your password"'
          attemptCounter=""
          actions={["Fill Required Fields"]}
          notes="Field-level validation on submit. Don&apos;t count as failed attempt."
        />

        <ErrorStateCard
          title="Session Expired"
          severity="info"
          message='"Your session has expired. Please sign in again to continue."'
          attemptCounter=""
          actions={["Sign In (preserves context)", "View saved draft"]}
          notes="Happens after 30 minutes of inactivity. Saved form data should be preserved."
        />

        <ErrorStateCard
          title="Account Suspended (Admin Action)"
          severity="error"
          message='"Your account has been suspended. Please contact support for assistance."'
          attemptCounter=""
          actions={["Contact Support: 1800-XXX-XXXX", "Email: support@example.gov.in"]}
          notes="Rare case. Requires manual intervention. Show support contact prominently."
        />

        <ErrorStateCard
          title="Service Unavailable (System Error)"
          severity="error"
          message='"We&apos;re experiencing technical difficulties. Please try again in a few minutes."'
          attemptCounter=""
          actions={["Retry", "Check System Status"]}
          notes="Backend server error or maintenance. Provide error reference code for support."
        />

        <ErrorStateCard
          title="Network Connection Lost"
          severity="warning"
          message='"Connection lost. Please check your internet connection and try again."'
          attemptCounter=""
          actions={["Retry Connection", "Check Network"]}
          notes="Client-side network error. Allow retry without penalty."
        />
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <div className="font-bold text-foreground mb-2">Error Message Principles</div>
            <ul className="space-y-1">
              <li>• Use plain language; avoid technical jargon</li>
              <li>• Explain what happened and why (when safe to reveal)</li>
              <li>• Provide clear next steps or recovery actions</li>
              <li>• Never blame the user ("Your password is wrong" → "Invalid password")</li>
              <li>• Show attempt counter to build awareness of lockout threshold</li>
              <li>• Always offer a help/support option</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ErrorStateCard({ title, severity, message, attemptCounter, lockDuration, actions, notes }: {
  title: string;
  severity: "error" | "warning" | "info";
  message: string;
  attemptCounter?: string;
  lockDuration?: string;
  actions: string[];
  notes: string;
}) {
  const severityStyles = {
    error: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800",
    warning: "bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800",
    info: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800"
  };

  const iconStyles = {
    error: <XCircle size={20} className="text-red-600" />,
    warning: <AlertTriangle size={20} className="text-orange-600" />,
    info: <Info size={20} className="text-blue-600" />
  };

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-6 py-3 flex items-center justify-between">
        <h3 className="font-bold text-foreground">{title}</h3>
        <span className={`px-2 py-1 text-xs font-bold rounded uppercase ${
          severity === 'error' ? 'bg-red-100 text-red-700' :
          severity === 'warning' ? 'bg-orange-100 text-orange-700' :
          'bg-blue-100 text-blue-700'
        }`}>
          {severity}
        </span>
      </div>
      <div className="p-6 space-y-4">
        <div className={`p-4 border-2 ${severityStyles[severity]} rounded-lg flex items-start gap-3`}>
          {iconStyles[severity]}
          <div className="flex-1">
            <div className="font-bold text-foreground mb-1">{message}</div>
            {attemptCounter && <div className="text-sm text-muted-foreground">{attemptCounter}</div>}
            {lockDuration && <div className="text-sm text-muted-foreground mt-1">{lockDuration}</div>}
          </div>
        </div>

        <div>
          <div className="font-bold text-foreground mb-2 text-sm">Available Actions</div>
          <ul className="space-y-1">
            {actions.map((action, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowRight size={14} className="text-gray-400" />
                {action}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-xs text-muted-foreground italic p-3 bg-background border-l-4 border-gray-400 rounded-r">
          <span className="font-bold">Implementation Note:</span> {notes}
        </div>
      </div>
    </div>
  );
}

// ==================== ACCESSIBILITY SECTION ====================

function AccessibilitySection() {
  return (
    <section id="accessibility" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Accessibility Requirements</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">WCAG 2.1 AA Compliance</h3>
        </div>
        <div className="p-6 space-y-6">
          <AccessibilityBlock
            title="Form Structure and Labels"
            requirements={[
              "All input fields have visible <label> elements (not placeholder-only)",
              "Labels use for/id association for click-to-focus behavior",
              'Required fields marked with asterisk (*) and aria-required="true"',
              'Error messages linked to fields via aria-describedby',
              "Field-level help text provided before errors occur"
            ]}
          />
          <AccessibilityBlock
            title="Keyboard Navigation"
            requirements={[
              "All interactive elements accessible via Tab key",
              "Focus indicators clearly visible (2px outline, 2px offset)",
              "Enter key submits form from any input field",
              "Show/hide password toggle accessible via keyboard",
              "No keyboard traps; Escape dismisses modals"
            ]}
          />
          <AccessibilityBlock
            title="Screen Reader Support"
            requirements={[
              'Page title announced: "Sign In - [Service Name]"',
              'Form landmark: <form role="form" aria-label="Sign In Form">',
              "Error summary announced immediately on submission failure",
              'Submit button state: aria-busy="true" during authentication',
              'Attempt counter announced: "Login attempt 1 of 5"'
            ]}
          />
          <AccessibilityBlock
            title="Color and Contrast"
            requirements={[
              "Text-to-background contrast ratio minimum 4.5:1 (7:1 for large text)",
              "Error states not conveyed by color alone (icon + text + border)",
              "Focus indicators visible on all backgrounds",
              "Link text (Forgot Password) distinguishable without color dependency"
            ]}
          />
          <AccessibilityBlock
            title="Mobile and Touch"
            requirements={[
              "Minimum touch target size: 44px × 44px (iOS) / 48px × 48px (Android)",
              "Sufficient spacing between interactive elements (8px minimum)",
              "Password show/hide toggle large enough for touch",
              "Form inputs zoom-friendly (font-size ≥ 16px to prevent auto-zoom on iOS)"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function AccessibilityBlock({ title, requirements }: { title: string; requirements: string[] }) {
  return (
    <div>
      <div className="font-bold text-foreground mb-3">{title}</div>
      <ul className="space-y-2">
        {requirements.map((req, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==================== IMPLEMENTATION SECTION ====================

function ImplementationSection() {
  return (
    <section id="implementation" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Implementation Notes</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ImplementationCard
          icon={<Code size={24} className="text-blue-600" />}
          title="Frontend Implementation"
          items={[
            "Form state management (React useState or form library)",
            "Client-side validation on submit",
            "Loading state during authentication",
            "Error state display with accessibility",
            "Show/hide password toggle functionality",
            "Remember username persistence (localStorage)"
          ]}
        />
        <ImplementationCard
          icon={<Database size={24} className="text-green-600" />}
          title="Backend Implementation"
          items={[
            "POST /api/auth/signin endpoint",
            "Password hash comparison (bcrypt, Argon2)",
            "Session token generation (JWT or session ID)",
            "Failed attempt counter (Redis or database)",
            "Account lockout logic (15-minute expiry)",
            "Audit logging (timestamp, IP, user agent)"
          ]}
        />
        <ImplementationCard
          icon={<Shield size={24} className="text-red-600" />}
          title="Security Implementation"
          items={[
            "HTTPS required (SSL/TLS certificate)",
            "CSRF protection (token-based)",
            "Rate limiting (5 attempts per 15 min per IP)",
            "Secure session cookies (httpOnly, secure flags)",
            "Password hashing with salt (never store plaintext)",
            "SQL injection prevention (parameterized queries)"
          ]}
        />
        <ImplementationCard
          icon={<Settings size={24} className="text-purple-600" />}
          title="Configuration Options"
          items={[
            "Lockout threshold (default: 5 attempts)",
            "Lockout duration (default: 15 minutes)",
            "Session timeout (default: 30 minutes)",
            "Remember username toggle (optional)",
            "Multi-factor authentication (future enhancement)",
            "Social login integration (optional)"
          ]}
        />
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Sample API Contract</h3>
        <div className="bg-gray-900 text-green-400 font-mono text-xs p-4 rounded overflow-x-auto">
          <pre>{`POST /api/auth/signin
Content-Type: application/json

{
  "username": "user@example.com" | "+919876543210",
  "password": "user_password_here",
  "rememberMe": false
}

// Success Response (200 OK)
{
  "success": true,
  "sessionToken": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_123",
    "name": "Rajesh Kumar",
    "email": "user@example.com"
  },
  "expiresAt": "2026-04-09T18:30:00Z"
}

// Error Response (401 Unauthorized)
{
  "success": false,
  "error": "Invalid username or password",
  "attempts": 3,
  "maxAttempts": 5,
  "accountLocked": false
}

// Locked Account Response (403 Forbidden)
{
  "success": false,
  "error": "Account temporarily locked",
  "accountLocked": true,
  "unlockAt": "2026-04-09T12:45:00Z"
}`}</pre>
        </div>
      </div>
    </section>
  );
}

function ImplementationCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-1.5"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==================== GOVERNANCE SECTION ====================

function GovernanceSection() {
  return (
    <section id="governance" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Governance & Support</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-100 border-b-2 border-red-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Conformance Requirements</h3>
          </div>
          <div className="p-6 space-y-3">
            <ConformanceItem
              level="Mandatory"
              requirement="All government services with user accounts MUST implement this Sign In pattern"
            />
            <ConformanceItem
              level="Mandatory"
              requirement="Must follow UX4G field naming and validation rules exactly"
            />
            <ConformanceItem
              level="Mandatory"
              requirement="Must include 'Forgot Password' link for account recovery"
            />
            <ConformanceItem
              level="Mandatory"
              requirement="Must implement 5-attempt lockout policy (15-minute duration)"
            />
            <ConformanceItem
              level="Recommended"
              requirement="Should provide 'Remember Me' functionality for returning users"
            />
            <ConformanceItem
              level="Recommended"
              requirement="Should support both mobile and email as username"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-100 border-b-2 border-blue-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Support & Escalation</h3>
          </div>
          <div className="p-6 space-y-4">
            <SupportChannel
              channel="In-App Help"
              details="Always visible help link: 'Need help signing in?'"
              availability="24/7"
            />
            <SupportChannel
              channel="Helpline"
              details="Toll-free: 1800-XXX-XXXX"
              availability="Mon-Fri, 9 AM - 6 PM IST"
            />
            <SupportChannel
              channel="Email Support"
              details="support@digitalindia.gov.in"
              availability="48-hour response time"
            />
            <SupportChannel
              channel="Self-Service"
              details="Forgot Password, Account Recovery flows"
              availability="24/7 automated"
            />
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Adoption Tracking</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AdoptionStat label="Services Using" value="120" />
          <AdoptionStat label="Daily Sign-Ins" value="5M+" />
          <AdoptionStat label="Success Rate" value="96%" />
          <AdoptionStat label="Avg. Duration" value="28 sec" />
        </div>
      </div>
    </section>
  );
}

function ConformanceItem({ level, requirement }: { level: string; requirement: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className={`px-2 py-1 text-xs font-bold rounded-full flex-shrink-0 ${
        level === 'Mandatory' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
      }`}>
        {level}
      </span>
      <span className="text-sm text-muted-foreground">{requirement}</span>
    </div>
  );
}

function SupportChannel({ channel, details, availability }: { channel: string; details: string; availability: string }) {
  return (
    <div className="p-3 bg-background border-2 border-border rounded">
      <div className="font-bold text-foreground text-sm mb-1">{channel}</div>
      <div className="text-sm text-muted-foreground mb-1">{details}</div>
      <div className="text-xs text-muted-foreground">Available: {availability}</div>
    </div>
  );
}

function AdoptionStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function QuickReference() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <QuickRefRow label="Pattern ID" value="UX4G-PAT-009-02" />
        <QuickRefRow label="Status" value="Stable" />
        <QuickRefRow label="Complexity" value="Low" />
        <QuickRefRow label="Duration" value="~30 seconds" />
        <QuickRefRow label="Success Rate" value="96%" />
        <QuickRefRow label="Conformance" value="Mandatory" />
      </div>
    </div>
  );
}

function QuickRefRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-foreground">{value}</span>
    </div>
  );
}

function InteractivePrototype() {
  return (
    <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden bg-blue-50">
      <div className="bg-blue-100 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Interactive Prototype</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-4">
          Try the working Sign In flow with realistic form behavior and validation
        </p>
        <Link
          to="/patterns/identity/sign-in"
          className="block w-full py-2 px-4 bg-primary text-white font-bold text-sm rounded text-center hover:opacity-90 transition-colors"
        >
          Launch Prototype →
        </Link>
      </div>
    </div>
  );
}

function RelatedPatterns() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Related Patterns</h3>
      </div>
      <div className="p-4 space-y-2">
        <RelatedLink title="Sign Up" href="/identity-signup" />
        <RelatedLink title="Forgot Password" href="/identity-forgot-password" />
        <RelatedLink title="Account Recovery" href="/identity-account-recovery" />
        <RelatedLink title="Session Timeout" href="/identity-session-timeout" />
        <RelatedLink title="Error & Lockout States" href="/identity-error-lockout" />
      </div>
    </div>
  );
}

function RelatedLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      to={href}
      className="block px-3 py-2 bg-card border border-border rounded hover:border-primary hover:bg-background transition-colors text-sm text-muted-foreground font-medium"
    >
      {title}
    </Link>
  );
}

function Resources() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Resources</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <ResourceLink icon={<FileText size={14} />} label="Starter Kit" />
        <ResourceLink icon={<Code size={14} />} label="Code Examples" />
        <ResourceLink icon={<HelpCircle size={14} />} label="Implementation Guide" />
        <ResourceLink icon={<Settings size={14} />} label="API Documentation" />
      </div>
    </div>
  );
}

function ResourceLink({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a href="#" className="flex items-center gap-2 text-primary hover:underline">
      {icon}
      <span>{label}</span>
    </a>
  );
}
