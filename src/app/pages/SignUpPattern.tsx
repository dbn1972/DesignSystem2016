import React from "react";
import { Link } from "react-router";
import { UserPlus, Shield, CheckCircle, AlertCircle, Info, XCircle, Eye, EyeOff, Mail, Phone, User, Users, Lock, AlertTriangle, ArrowRight, Smartphone, FileText, Globe, Code, Settings, HelpCircle, ChevronRight, Database, Check, X, Key, Download, Copy } from "lucide-react";

export default function SignUpPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <UserPlus size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Identity & Access Pattern</div>
                  <h1 className="text-3xl font-bold text-foreground">Sign Up</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Standard account creation pattern for new users to register on government digital services. 
                Includes progressive disclosure, validation, duplicate detection, password security, 
                and OTP verification integration for trustworthy, accessible onboarding.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-009-03</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
                  <span className="text-muted-foreground">Version: <span className="font-bold text-foreground">1.0.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
                  <span className="text-muted-foreground">Updated: <span className="font-bold text-foreground">April 2026</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 dark:text-green-300 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded text-red-700 dark:text-red-400 font-bold text-xs text-center uppercase">
                Conformance<br/>Mandatory
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
              { id: "fields", label: "Fields & Content" },
              { id: "password", label: "Password Guidance" },
              { id: "validation", label: "Validation Rules" },
              { id: "errors", label: "Error States" },
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
            <FlowDiagram />
            <ExampleScreens />
            <FieldsAndContent />
            <PasswordGuidance />
            <ValidationRules />
            <ErrorStates />
            <AccessibilitySection />
            <ImplementationSection />
            <CodeDownloadsSection />
            <GovernanceSection />
          </div>

          {/* Sidebar - 3 columns */}
          <div className="col-span-3 space-y-6 sticky top-24 self-start">
            <QuickReference />
            <InteractivePrototype />
            <RelatedPatterns />
            <Resources />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Sign Up Pattern</div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Purpose */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Purpose</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Enable new users to create accounts on government digital services with minimal friction, 
              clear guidance, and strong security. Sign Up ensures data quality, prevents duplicate accounts, 
              and seamlessly connects to verification flows.
            </p>
            <div className="space-y-2">
              <PurposeItem text="Create secure accounts for new users" />
              <PurposeItem text="Collect essential information with minimal fields" />
              <PurposeItem text="Validate data quality in real-time" />
              <PurposeItem text="Prevent duplicate account creation" />
              <PurposeItem text="Guide users to identity verification (OTP)" />
            </div>
          </div>
        </div>

        {/* When to Use */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">When to Use</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3 text-sm">
              <UseItem 
                type="yes" 
                text="Services requiring personalized access and saved data" 
              />
              <UseItem 
                type="yes" 
                text="Application tracking and multi-visit workflows" 
              />
              <UseItem 
                type="yes" 
                text="Services with eligibility criteria or user profiles" 
              />
              <UseItem 
                type="yes" 
                text="Multi-channel services (web, mobile, assisted)" 
              />
              <UseItem 
                type="yes" 
                text="Services requiring identity verification" 
              />
            </div>
          </div>
        </div>

        {/* When NOT to Use */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">When NOT to Use</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3 text-sm">
              <UseItem 
                type="no" 
                text="Single-visit, no-account-needed information services" 
              />
              <UseItem 
                type="no" 
                text="Services that can use Aadhaar or federated identity" 
              />
              <UseItem 
                type="no" 
                text="Offline-first or walk-in services with no digital profile" 
              />
              <UseItem 
                type="no" 
                text="Anonymous feedback or grievance portals" 
              />
              <UseItem 
                type="no" 
                text="Emergency services requiring immediate access" 
              />
            </div>
          </div>
        </div>

        {/* User Goals */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">User Goals</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3 text-sm">
              <GoalItem 
                icon={<User size={16} />}
                text="Create an account quickly without confusion" 
              />
              <GoalItem 
                icon={<Shield size={16} />}
                text="Understand what information is needed and why" 
              />
              <GoalItem 
                icon={<AlertCircle size={16} />}
                text="Get immediate feedback on errors" 
              />
              <GoalItem 
                icon={<CheckCircle size={16} />}
                text="Know if I already have an account" 
              />
              <GoalItem 
                icon={<Lock size={16} />}
                text="Create a secure password with clear requirements" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PurposeItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

function UseItem({ type, text }: { type: "yes" | "no"; text: string }) {
  return (
    <div className="flex items-start gap-2">
      {type === "yes" ? (
        <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      ) : (
        <X size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
      )}
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function GoalItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-primary mt-0.5">{icon}</div>
      <span className="text-muted-foreground">{text}</span>
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

      <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
        <div className="space-y-4">
          {/* Flow Steps */}
          <FlowStep 
            number="1"
            title="Entry Point"
            description="User arrives at service landing page or login screen"
            action="Clicks 'Create Account' or 'Sign Up'"
            color="gray"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="2"
            title="Sign Up Form"
            description="User enters basic account information"
            action="Full name, email or mobile number, password (optional)"
            color="blue"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="3"
            title="Real-Time Validation"
            description="System validates input as user types or on blur"
            action="Email format, mobile format, password strength"
            color="blue"
          />
          
          <FlowConnector label="Validation Passes" />
          
          <FlowStep 
            number="4"
            title="Duplicate Check"
            description="System checks if account already exists"
            action="Query database by email/mobile number"
            color="blue"
          />
          
          <FlowBranch 
            condition="Account Exists?"
            yesPath="Redirect to Sign In with message"
            noPath="Continue registration"
          />
          
          <FlowStep 
            number="5"
            title="Account Creation"
            description="System creates user record (unverified state)"
            action="Generate user ID, hash password, save data"
            color="green"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="6"
            title="OTP Verification Trigger"
            description="System initiates verification process"
            action="Send OTP via SMS or email, redirect to verification screen"
            color="green"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="7"
            title="Success State"
            description="Account created, awaiting verification"
            action="Show success message, guide user to next step"
            color="green"
          />
        </div>

        {/* Flow Legend */}
        <div className="mt-8 pt-6 border-t-2 border-border">
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
              <span className="text-muted-foreground">Entry Point</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-sm"></div>
              <span className="text-muted-foreground">User Action</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
              <span className="text-muted-foreground">System Response</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle size={14} className="text-orange-600" />
              <span className="text-muted-foreground">Decision Point</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowStep({ number, title, description, action, color }: { 
  number: string; 
  title: string; 
  description: string; 
  action: string;
  color: "gray" | "blue" | "green";
}) {
  const bgColor = color === "gray" ? "bg-muted" : color === "blue" ? "bg-blue-50" : "bg-green-50";
  const borderColor = color === "gray" ? "border-border" : color === "blue" ? "border-primary" : "border-green-600";
  const textColor = color === "gray" ? "text-muted-foreground" : color === "blue" ? "text-primary" : "text-green-700";

  return (
    <div className={`${bgColor} border-2 ${borderColor} rounded-lg p-4`}>
      <div className="flex items-start gap-4">
        <div className={`w-8 h-8 rounded-full ${borderColor.replace('border-', 'bg-')} text-white flex items-center justify-center font-bold text-sm flex-shrink-0`}>
          {number}
        </div>
        <div className="flex-1">
          <h3 className={`font-bold ${textColor} mb-1`}>{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <div className="text-xs text-muted-foreground italic">→ {action}</div>
        </div>
      </div>
    </div>
  );
}

function FlowConnector({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="flex flex-col items-center">
        <ArrowRight size={24} className="text-muted-foreground rotate-90" />
        {label && <span className="text-xs text-muted-foreground mt-1">{label}</span>}
      </div>
    </div>
  );
}

function FlowBranch({ condition, yesPath, noPath }: { condition: string; yesPath: string; noPath: string }) {
  return (
    <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <AlertTriangle size={20} className="text-orange-600 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="font-bold text-orange-800 mb-3">{condition}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-orange-200 dark:border-orange-800 rounded p-3">
              <div className="text-xs font-bold text-orange-700 mb-1">YES</div>
              <div className="text-sm text-muted-foreground">{yesPath}</div>
            </div>
            <div className="bg-card border border-orange-200 dark:border-orange-800 rounded p-3">
              <div className="text-xs font-bold text-green-700 dark:text-green-400 mb-1">NO</div>
              <div className="text-sm text-muted-foreground">{noPath}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== EXAMPLE SCREENS ====================

function ExampleScreens() {
  return (
    <section id="screens" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Example Screens</h2>
        <p className="text-muted-foreground mt-2">Representative states showing validation, error handling, and success flows</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Default State */}
        <ExampleScreen
          title="Default Sign Up Form"
          state="Initial state, empty fields"
          stateColor="gray"
        >
          <SignUpFormExample state="default" />
        </ExampleScreen>

        {/* Invalid Email */}
        <ExampleScreen
          title="Invalid Email Address"
          state="Real-time validation error"
          stateColor="red"
        >
          <SignUpFormExample state="invalid-email" />
        </ExampleScreen>

        {/* Invalid Mobile */}
        <ExampleScreen
          title="Invalid Mobile Number"
          state="Format validation error"
          stateColor="red"
        >
          <SignUpFormExample state="invalid-mobile" />
        </ExampleScreen>

        {/* Weak Password */}
        <ExampleScreen
          title="Weak Password"
          state="Password strength indicator"
          stateColor="orange"
        >
          <SignUpFormExample state="weak-password" />
        </ExampleScreen>

        {/* Password Mismatch */}
        <ExampleScreen
          title="Password Mismatch"
          state="Confirmation field error"
          stateColor="red"
        >
          <SignUpFormExample state="password-mismatch" />
        </ExampleScreen>

        {/* Duplicate Account */}
        <ExampleScreen
          title="Duplicate Account Detected"
          state="Account already exists"
          stateColor="orange"
        >
          <SignUpFormExample state="duplicate-account" />
        </ExampleScreen>

        {/* Success State */}
        <ExampleScreen
          title="Account Created Successfully"
          state="Success with next steps"
          stateColor="green"
        >
          <SignUpFormExample state="success" />
        </ExampleScreen>

        {/* OTP Verification */}
        <ExampleScreen
          title="OTP Verification Required"
          state="Redirect to verification"
          stateColor="blue"
        >
          <SignUpFormExample state="otp-verification" />
        </ExampleScreen>
      </div>
    </section>
  );
}

function ExampleScreen({ 
  title, 
  state, 
  stateColor, 
  children 
}: { 
  title: string; 
  state: string; 
  stateColor: "gray" | "red" | "orange" | "green" | "blue";
  children: React.ReactNode;
}) {
  const colorMap = {
    gray: "bg-muted text-muted-foreground",
    red: "bg-red-100 text-red-700",
    orange: "bg-orange-100 text-orange-700",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700"
  };

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm mb-1">{title}</h3>
        <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${colorMap[stateColor]}`}>
          {state}
        </div>
      </div>
      <div className="p-6 bg-background">
        {children}
      </div>
    </div>
  );
}

function SignUpFormExample({ state }: { state: string }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-primary rounded mx-auto mb-3 flex items-center justify-center">
          <UserPlus size={24} className="text-white" />
        </div>
        <h3 className="font-bold text-foreground text-lg">Create Account</h3>
        <p className="text-sm text-muted-foreground mt-1">Sign up to access government services</p>
      </div>

      {state === "success" ? (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h3 className="font-bold text-foreground mb-2">Account Created Successfully</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Please verify your email address to continue
          </p>
          <button className="w-full px-4 py-2 bg-primary text-white font-bold rounded text-sm">
            Verify Email Address
          </button>
        </div>
      ) : state === "otp-verification" ? (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Smartphone size={32} className="text-blue-600" />
          </div>
          <h3 className="font-bold text-foreground mb-2">Verify Your Mobile Number</h3>
          <p className="text-sm text-muted-foreground mb-4">
            We have sent a 6-digit OTP to<br />
            <span className="font-bold">+91 98765 43210</span>
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <input aria-label="0" key={i}
                type="text" 
                maxLength={1}
                className="w-10 h-10 border-2 border-border rounded text-center font-bold"
                placeholder="0"
              />
            ))}
          </div>
          <button className="w-full px-4 py-2 bg-primary text-white font-bold rounded text-sm">
            Verify OTP
          </button>
        </div>
      ) : state === "duplicate-account" ? (
        <>
          <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded p-4 mb-4">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-orange-800 text-sm mb-1">Account Already Exists</h3>
                <p className="text-sm text-muted-foreground">
                  An account with this email address already exists. Please sign in instead.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-primary text-white font-bold rounded text-sm">
              Go to Sign In
            </button>
            <button className="w-full px-4 py-2 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm">
              Forgot Password?
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-foreground mb-2">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input aria-label="Enter your full name" type="text" 
              className="w-full px-3 py-2 border-2 border-border rounded text-sm focus:border-primary focus:outline-none"
              placeholder="Enter your full name"
              defaultValue={state !== "default" ? "Rajesh Kumar" : ""}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-foreground mb-2">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input aria-label="example@email.com" type="email" 
              className={`w-full px-3 py-2 border-2 rounded text-sm focus:outline-none ${
                state === "invalid-email" ? "border-red-500" : "border-border focus:border-primary"
              }`}
              placeholder="example@email.com"
              defaultValue={state === "invalid-email" ? "rajesh@invalid" : state !== "default" ? "rajesh.kumar@example.com" : ""}
            />
            {state === "invalid-email" && (
              <div className="flex items-start gap-2 mt-2">
                <XCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-red-600">Please enter a valid email address</span>
              </div>
            )}
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-foreground mb-2">
              Mobile Number <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-2">
              <select aria-label="Select option" className="px-2 py-2 border-2 border-border rounded text-sm bg-card">
                <option>+91</option>
              </select>
              <input aria-label="10-digit mobile number" type="tel" 
                className={`flex-1 px-3 py-2 border-2 rounded text-sm focus:outline-none ${
                  state === "invalid-mobile" ? "border-red-500" : "border-border focus:border-primary"
                }`}
                placeholder="10-digit mobile number"
                defaultValue={state === "invalid-mobile" ? "123" : state !== "default" ? "9876543210" : ""}
              />
            </div>
            {state === "invalid-mobile" && (
              <div className="flex items-start gap-2 mt-2">
                <XCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-red-600">Mobile number must be 10 digits</span>
              </div>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-foreground mb-2">
              Password <span className="text-red-600">*</span>
            </label>
            <input aria-label="Create a strong password" type="password" 
              className={`w-full px-3 py-2 border-2 rounded text-sm focus:outline-none ${
                state === "weak-password" ? "border-orange-500" : "border-border focus:border-primary"
              }`}
              placeholder="Create a strong password"
              defaultValue={state === "weak-password" ? "123" : state !== "default" ? "SecurePass123!" : ""}
            />
            {state === "weak-password" && (
              <>
                <div className="flex items-start gap-2 mt-2">
                  <AlertCircle size={14} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-orange-600">Password is too weak</span>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-1 flex-1 bg-orange-300 rounded"></div>
                  <div className="h-1 flex-1 bg-muted rounded"></div>
                  <div className="h-1 flex-1 bg-muted rounded"></div>
                  <div className="h-1 flex-1 bg-muted rounded"></div>
                </div>
              </>
            )}
            {state !== "weak-password" && state !== "default" && state !== "password-mismatch" && state !== "invalid-email" && state !== "invalid-mobile" && (
              <div className="mt-2 flex items-center gap-1">
                <div className="h-1 flex-1 bg-green-50 dark:bg-green-900/200 rounded"></div>
                <div className="h-1 flex-1 bg-green-50 dark:bg-green-900/200 rounded"></div>
                <div className="h-1 flex-1 bg-green-50 dark:bg-green-900/200 rounded"></div>
                <div className="h-1 flex-1 bg-green-50 dark:bg-green-900/200 rounded"></div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-foreground mb-2">
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <input aria-label="Re-enter password" type="password" 
              className={`w-full px-3 py-2 border-2 rounded text-sm focus:outline-none ${
                state === "password-mismatch" ? "border-red-500" : "border-border focus:border-primary"
              }`}
              placeholder="Re-enter password"
              defaultValue={state === "password-mismatch" ? "DifferentPass123!" : state !== "default" && state !== "weak-password" ? "SecurePass123!" : ""}
            />
            {state === "password-mismatch" && (
              <div className="flex items-start gap-2 mt-2">
                <XCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-red-600">Passwords do not match</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button 
            className={`w-full px-4 py-2 font-bold rounded text-sm ${
              state === "default" || state === "invalid-email" || state === "invalid-mobile" || state === "weak-password" || state === "password-mismatch"
                ? "bg-gray-300 text-muted-foreground cursor-not-allowed"
                : "bg-primary text-white"
            }`}
            disabled={state === "default" || state === "invalid-email" || state === "invalid-mobile" || state === "weak-password" || state === "password-mismatch"}
          >
            Create Account
          </button>

          {/* Sign In Link */}
          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">Already have an account? </span>
            <a href="#" className="text-sm text-primary font-bold hover:underline">Sign In</a>
          </div>
        </>
      )}
    </div>
  );
}

// ==================== FIELDS & CONTENT ====================

function FieldsAndContent() {
  return (
    <section id="fields" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Fields & Content Guidance</h2>
        <p className="text-muted-foreground mt-2">Required fields, labels, placeholders, and help text for sign-up forms</p>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-muted border-b-2 border-border">
              <th className="px-6 py-3 text-left text-sm font-bold text-foreground">Field Name</th>
              <th className="px-6 py-3 text-left text-sm font-bold text-foreground">Required</th>
              <th className="px-6 py-3 text-left text-sm font-bold text-foreground">Label Text</th>
              <th className="px-6 py-3 text-left text-sm font-bold text-foreground">Placeholder</th>
              <th className="px-6 py-3 text-left text-sm font-bold text-foreground">Help Text</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <FieldRow 
              field="Full Name"
              required={true}
              label="Full Name"
              placeholder="Enter your full name"
              help="As per government ID (Aadhaar, PAN, etc.)"
            />
            <FieldRow 
              field="Email Address"
              required={true}
              label="Email Address"
              placeholder="example@email.com"
              help="You will receive verification link at this email"
            />
            <FieldRow 
              field="Mobile Number"
              required={true}
              label="Mobile Number"
              placeholder="10-digit mobile number"
              help="Required for OTP verification and service updates"
            />
            <FieldRow 
              field="Password"
              required={true}
              label="Password"
              placeholder="Create a strong password"
              help="Minimum 8 characters with letters, numbers, and symbols"
            />
            <FieldRow 
              field="Confirm Password"
              required={true}
              label="Confirm Password"
              placeholder="Re-enter password"
              help="Must match the password entered above"
            />
            <FieldRow 
              field="Date of Birth"
              required={false}
              label="Date of Birth (Optional)"
              placeholder="DD/MM/YYYY"
              help="Required for age-restricted services"
            />
            <FieldRow 
              field="Terms & Conditions"
              required={true}
              label="I agree to the Terms and Conditions"
              placeholder="—"
              help="Checkbox with link to terms document"
            />
          </tbody>
        </table>
      </div>

      {/* Content Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Page Title</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <div>
              <span className="font-bold text-foreground">Heading:</span>
              <span className="text-muted-foreground ml-2">&quot;Create Account&quot; or &quot;Sign Up&quot;</span>
            </div>
            <div>
              <span className="font-bold text-foreground">Subheading:</span>
              <span className="text-muted-foreground ml-2">&quot;Sign up to access [Service Name]&quot;</span>
            </div>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Button Labels</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <div>
              <span className="font-bold text-foreground">Primary CTA:</span>
              <span className="text-muted-foreground ml-2">&quot;Create Account&quot; or &quot;Sign Up&quot;</span>
            </div>
            <div>
              <span className="font-bold text-foreground">Secondary Link:</span>
              <span className="text-muted-foreground ml-2">&quot;Already have an account? Sign In&quot;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldRow({ field, required, label, placeholder, help }: {
  field: string;
  required: boolean;
  label: string;
  placeholder: string;
  help: string;
}) {
  return (
    <tr>
      <td className="px-6 py-4 text-sm text-foreground font-medium">{field}</td>
      <td className="px-6 py-4 text-sm">
        {required ? (
          <span className="px-2 py-1 bg-red-100 text-red-700 dark:text-red-400 text-xs font-bold rounded">YES</span>
        ) : (
          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-bold rounded">NO</span>
        )}
      </td>
      <td className="px-6 py-4 text-sm text-muted-foreground">{label}</td>
      <td className="px-6 py-4 text-sm text-muted-foreground italic">{placeholder}</td>
      <td className="px-6 py-4 text-sm text-muted-foreground">{help}</td>
    </tr>
  );
}

// ==================== PASSWORD GUIDANCE ====================

function PasswordGuidance() {
  return (
    <section id="password" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Password Guidance</h2>
        <p className="text-muted-foreground mt-2">Security requirements, strength indicators, and user guidance for password creation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Password Requirements */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Password Requirements</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <RequirementItem text="Minimum 8 characters" met={true} />
              <RequirementItem text="At least one uppercase letter (A-Z)" met={true} />
              <RequirementItem text="At least one lowercase letter (a-z)" met={true} />
              <RequirementItem text="At least one number (0-9)" met={true} />
              <RequirementItem text="At least one special character (!@#$%^&*)" met={false} />
              <RequirementItem text="Cannot contain your name or email" met={true} />
            </div>
          </div>
        </div>

        {/* Strength Indicator */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Strength Indicator</h3>
          </div>
          <div className="p-6 space-y-4">
            <StrengthLevel 
              level="Weak"
              color="red"
              bars={1}
              description="Does not meet minimum requirements"
            />
            <StrengthLevel 
              level="Fair"
              color="orange"
              bars={2}
              description="Meets basic requirements but can be stronger"
            />
            <StrengthLevel 
              level="Good"
              color="yellow"
              bars={3}
              description="Meets most requirements, add special characters"
            />
            <StrengthLevel 
              level="Strong"
              color="green"
              bars={4}
              description="Meets all requirements and is highly secure"
            />
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden col-span-2">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Password Best Practices</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                  <Check size={16} />
                  DO
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use a mix of uppercase, lowercase, numbers, and symbols</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Make it at least 8 characters long</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use a unique password for each account</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Consider using a passphrase (e.g., &quot;Blue$Sky2026!&quot;)</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                  <X size={16} />
                  DON&apos;T
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <XCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Use common words or patterns (e.g., &quot;password123&quot;)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Include personal information (name, birthdate, phone)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Reuse passwords from other accounts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Share your password with anyone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RequirementItem({ text, met }: { text: string; met: boolean }) {
  return (
    <div className="flex items-start gap-2">
      {met ? (
        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      ) : (
        <XCircle size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
      )}
      <span className={`text-sm ${met ? 'text-muted-foreground' : 'text-muted-foreground'}`}>{text}</span>
    </div>
  );
}

function StrengthLevel({ level, color, bars, description }: {
  level: string;
  color: string;
  bars: number;
  description: string;
}) {
  const colorMap: { [key: string]: { bg: string; text: string } } = {
    red: { bg: "bg-red-500", text: "text-red-700" },
    orange: { bg: "bg-orange-500", text: "text-orange-700" },
    yellow: { bg: "bg-yellow-500", text: "text-yellow-700" },
    green: { bg: "bg-green-500", text: "text-green-700" }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-bold ${colorMap[color].text}`}>{level}</span>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map(i => (
            <div 
              key={i}
              className={`w-8 h-1 rounded ${i <= bars ? colorMap[color].bg : 'bg-muted'}`}
            ></div>
          ))}
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

// ==================== VALIDATION RULES ====================

function ValidationRules() {
  return (
    <section id="validation" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Validation Rules</h2>
        <p className="text-muted-foreground mt-2">Field-level and form-level validation requirements</p>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-muted border-b-2 border-border">
              <th className="px-6 py-3 text-left text-sm font-bold text-foreground">Field</th>
              <th className="px-6 py-3 text-left text-sm font-bold text-foreground">Validation Rule</th>
              <th className="px-6 py-3 text-left text-sm font-bold text-foreground">Error Message</th>
              <th className="px-6 py-3 text-left text-sm font-bold text-foreground">Timing</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <ValidationRow 
              field="Full Name"
              rule="Must contain at least 2 characters, letters only"
              error="Please enter your full name (minimum 2 characters)"
              timing="On blur"
            />
            <ValidationRow 
              field="Email Address"
              rule="Must match email format: name@domain.extension"
              error="Please enter a valid email address"
              timing="On blur"
            />
            <ValidationRow 
              field="Email (Duplicate)"
              rule="Email must not already exist in system"
              error="This email is already registered. Please sign in or use a different email."
              timing="On submit"
            />
            <ValidationRow 
              field="Mobile Number"
              rule="Must be exactly 10 digits, numeric only"
              error="Mobile number must be 10 digits"
              timing="On blur"
            />
            <ValidationRow 
              field="Mobile (Duplicate)"
              rule="Mobile must not already exist in system"
              error="This mobile number is already registered. Please sign in or use a different number."
              timing="On submit"
            />
            <ValidationRow 
              field="Password"
              rule="Min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character"
              error="Password must meet all security requirements"
              timing="Real-time"
            />
            <ValidationRow 
              field="Confirm Password"
              rule="Must exactly match Password field"
              error="Passwords do not match"
              timing="On blur"
            />
            <ValidationRow 
              field="Terms & Conditions"
              rule="Checkbox must be checked"
              error="You must agree to the Terms and Conditions to continue"
              timing="On submit"
            />
          </tbody>
        </table>
      </div>

      {/* Duplicate Account Handling */}
      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Duplicate Account Handling</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-orange-800 mb-2">When Duplicate Detected</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                    <span>Check email/mobile against existing accounts before creating user record</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                    <span>Show clear message: &quot;An account with this [email/mobile] already exists&quot;</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                    <span>Provide primary action: &quot;Go to Sign In&quot;</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                    <span>Provide secondary action: &quot;Forgot Password?&quot; for account recovery</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                    <span>Do not reveal account details for security (timing attack protection)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValidationRow({ field, rule, error, timing }: {
  field: string;
  rule: string;
  error: string;
  timing: string;
}) {
  return (
    <tr>
      <td className="px-6 py-4 text-sm text-foreground font-medium">{field}</td>
      <td className="px-6 py-4 text-sm text-muted-foreground">{rule}</td>
      <td className="px-6 py-4 text-sm text-red-600 italic">&quot;{error}&quot;</td>
      <td className="px-6 py-4 text-sm">
        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">{timing}</span>
      </td>
    </tr>
  );
}

// ==================== ERROR STATES ====================

function ErrorStates() {
  return (
    <section id="errors" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Error States & Recovery</h2>
        <p className="text-muted-foreground mt-2">Common error scenarios and user recovery paths</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Field Validation Error */}
        <ErrorCard 
          title="Field Validation Error"
          severity="medium"
          trigger="User enters invalid data format"
          behavior={[
            "Show inline error message below field",
            "Change field border to red",
            "Display error icon next to field",
            "Keep user on same screen to fix error"
          ]}
          example='Invalid email: "rajesh@invalid"'
        />

        {/* Duplicate Account */}
        <ErrorCard 
          title="Duplicate Account Detected"
          severity="medium"
          trigger="Email or mobile already registered"
          behavior={[
            "Show alert banner at top of form",
            "Provide 'Sign In' and 'Forgot Password' options",
            "Do not reveal full account details",
            "Allow user to try different email/mobile"
          ]}
          example="Account already exists for this email"
        />

        {/* Weak Password */}
        <ErrorCard 
          title="Weak Password"
          severity="low"
          trigger="Password does not meet strength requirements"
          behavior={[
            "Show orange/yellow alert message",
            "Display which requirements are not met",
            "Update strength indicator in real-time",
            "Allow submit only when all requirements met"
          ]}
          example="Password must include special characters"
        />

        {/* Password Mismatch */}
        <ErrorCard 
          title="Password Mismatch"
          severity="medium"
          trigger="Confirm password does not match original"
          behavior={[
            "Show error on 'Confirm Password' field",
            "Compare on blur or real-time after typing",
            "Clear confirmation field if mismatch persists",
            "Disable submit until passwords match"
          ]}
          example="Passwords do not match"
        />

        {/* Network Error */}
        <ErrorCard 
          title="Network/Server Error"
          severity="high"
          trigger="API failure or connectivity issue"
          behavior={[
            "Show error banner with retry option",
            "Preserve form data (do not clear)",
            "Log error for debugging",
            "Provide support contact information"
          ]}
          example="Unable to create account. Please try again."
        />

        {/* Terms Not Accepted */}
        <ErrorCard 
          title="Terms Not Accepted"
          severity="low"
          trigger="User submits without accepting terms"
          behavior={[
            "Highlight checkbox with error state",
            "Scroll to terms checkbox",
            "Show inline message",
            "Block form submission"
          ]}
          example="You must accept Terms & Conditions"
        />
      </div>
    </section>
  );
}

function ErrorCard({ title, severity, trigger, behavior, example }: {
  title: string;
  severity: "low" | "medium" | "high";
  trigger: string;
  behavior: string[];
  example: string;
}) {
  const severityMap = {
    low: { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-300" },
    medium: { bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-300" },
    high: { bg: "bg-red-100", text: "text-red-700", border: "border-red-300" }
  };

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-foreground">{title}</h3>
          <span className={`px-2 py-1 ${severityMap[severity].bg} ${severityMap[severity].text} text-xs font-bold rounded uppercase`}>
            {severity}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-sm font-bold text-foreground mb-1">Trigger</h3>
          <p className="text-sm text-muted-foreground">{trigger}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground mb-2">Behavior</h3>
          <div className="space-y-1">
            {behavior.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight size={14} className="mt-0.5 flex-shrink-0 text-muted-foreground" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={`${severityMap[severity].bg} border-2 ${severityMap[severity].border} rounded p-3`}>
          <div className="text-xs font-bold text-muted-foreground mb-1">EXAMPLE MESSAGE</div>
          <div className={`text-sm font-medium ${severityMap[severity].text}`}>&quot;{example}&quot;</div>
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
        <p className="text-muted-foreground mt-2">WCAG 2.1 Level AA compliance for sign-up patterns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Keyboard Navigation */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Keyboard Navigation</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem text="Tab key moves through all form fields in logical order" />
            <AccessibilityItem text="Enter key submits form when focus is on submit button" />
            <AccessibilityItem text="Escape key clears focused field (optional enhancement)" />
            <AccessibilityItem text="Visible focus indicators on all interactive elements" />
            <AccessibilityItem text="No keyboard traps or navigation dead ends" />
          </div>
        </div>

        {/* Screen Reader Support */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Screen Reader Support</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem text="All fields have associated <label> elements" />
            <AccessibilityItem text="Required fields marked with aria-required='true'" />
            <AccessibilityItem text="Error messages linked via aria-describedby" />
            <AccessibilityItem text="Form landmarks and regions properly labeled" />
            <AccessibilityItem text="Status messages announced via aria-live regions" />
          </div>
        </div>

        {/* Color & Contrast */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Color & Contrast</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem text="Minimum 4.5:1 contrast for normal text" />
            <AccessibilityItem text="Minimum 3:1 contrast for large text and UI components" />
            <AccessibilityItem text="Error states use icons + color, not color alone" />
            <AccessibilityItem text="Password strength indicated by text + visual bars" />
            <AccessibilityItem text="Links and buttons distinguishable without color" />
          </div>
        </div>

        {/* Error Handling */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Error Handling</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem text="Error summary at top of form when multiple errors" />
            <AccessibilityItem text="Errors announced to screen readers immediately" />
            <AccessibilityItem text="Clear, actionable error messages in plain language" />
            <AccessibilityItem text="Focus moved to first error field on submit" />
            <AccessibilityItem text="Errors persist until user corrects them" />
          </div>
        </div>

        {/* Form Labels & Help Text */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden col-span-2">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Form Labels & Help Text</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 text-sm">
                <AccessibilityItem text="Labels always visible (not placeholder-only)" />
                <AccessibilityItem text="Help text associated with aria-describedby" />
                <AccessibilityItem text="Required indicator (* or 'Required' text)" />
              </div>
              <div className="space-y-3 text-sm">
                <AccessibilityItem text="Autocomplete attributes for known field types" />
                <AccessibilityItem text="Input types match data (email, tel, password)" />
                <AccessibilityItem text="Password reveal toggle clearly labeled" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessibilityItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== IMPLEMENTATION SECTION ====================

function ImplementationSection() {
  return (
    <section id="implementation" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Implementation Notes</h2>
        <p className="text-muted-foreground mt-2">Technical guidance for developers implementing sign-up patterns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend Implementation */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Code size={18} />
              Frontend Implementation
            </h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <ImplementationItem text="Use HTML5 form validation attributes (required, pattern, minlength)" />
            <ImplementationItem text="Implement client-side validation before API call" />
            <ImplementationItem text="Debounce real-time validation (300ms delay)" />
            <ImplementationItem text="Disable submit button during API call (prevent double submission)" />
            <ImplementationItem text="Store form state locally to prevent data loss on errors" />
            <ImplementationItem text="Use autocomplete attributes: name, email, tel, new-password" />
          </div>
        </div>

        {/* Backend/API Implementation */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Database size={18} />
              Backend/API Implementation
            </h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <ImplementationItem text="Hash passwords using bcrypt or Argon2 (never store plain text)" />
            <ImplementationItem text="Check for duplicate email/mobile before creating record" />
            <ImplementationItem text="Create user in 'unverified' state until OTP confirmation" />
            <ImplementationItem text="Rate limit registration endpoint (prevent spam)" />
            <ImplementationItem text="Generate secure random user IDs (UUID v4)" />
            <ImplementationItem text="Return consistent timing for duplicate checks (prevent enumeration)" />
          </div>
        </div>

        {/* Security Considerations */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden col-span-2">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-300 px-6 py-4">
            <h3 className="font-bold text-red-900 flex items-center gap-2">
              <Shield size={18} />
              Security Considerations
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 text-sm">
                <ImplementationItem text="Implement CAPTCHA after 3 failed attempts" />
                <ImplementationItem text="Use HTTPS for all registration traffic" />
                <ImplementationItem text="Implement CSRF protection on form submission" />
                <ImplementationItem text="Sanitize all user inputs (prevent XSS)" />
              </div>
              <div className="space-y-3 text-sm">
                <ImplementationItem text="Rate limit by IP and email (prevent brute force)" />
                <ImplementationItem text="Log registration attempts for security monitoring" />
                <ImplementationItem text="Do not reveal whether email/mobile exists (timing attacks)" />
                <ImplementationItem text="Expire verification tokens after 24 hours" />
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 border-2 border-gray-700 rounded-lg overflow-hidden col-span-2">
          <div className="bg-gray-800 border-b-2 border-gray-700 px-6 py-4">
            <h3 className="font-bold text-white flex items-center gap-2">
              <FileText size={18} />
              Sample API Response (Success)
            </h3>
          </div>
          <div className="p-6">
            <pre className="text-green-400 text-sm font-mono overflow-x-auto">
{`{
  "status": "success",
  "message": "Account created successfully",
  "data": {
    "userId": "usr_a1b2c3d4e5f6",
    "email": "rajesh.kumar@example.com",
    "mobile": "+919876543210",
    "verified": false,
    "verificationSent": true,
    "verificationMethod": "EMAIL_OTP",
    "nextStep": "/verify-otp"
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImplementationItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={14} className="text-primary mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== CODE DOWNLOADS SECTION ====================

const SIGNUP_REACT_CODE = `import React, { useState, useCallback } from 'react';

interface SignUpFormData {
  fullName: string;
  email: string;
  mobile: string;
  aadhaar: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

export function SignUpPage() {
  const [form, setForm] = useState<SignUpFormData>({
    fullName: '', email: '', mobile: '', aadhaar: '',
    password: '', confirmPassword: '', agreeTerms: false,
  });
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const validateStep1 = useCallback(() => {
    if (!form.fullName.trim()) return 'Full name is required';
    if (form.fullName.trim().length < 2) return 'Name must be at least 2 characters';
    if (!form.email.trim()) return 'Email is required';
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email)) return 'Enter a valid email address';
    if (!form.mobile.trim()) return 'Mobile number is required';
    if (!/^(\\+91)?[6-9]\\d{9}$/.test(form.mobile.replace(/\\s/g, ''))) return 'Enter a valid Indian mobile number';
    return '';
  }, [form]);

  const validateStep2 = useCallback(() => {
    if (form.aadhaar && !/^\\d{12}$/.test(form.aadhaar.replace(/\\s/g, ''))) return 'Aadhaar must be 12 digits';
    if (!form.password) return 'Password is required';
    if (form.password.length < 8) return 'Password must be at least 8 characters';
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])/.test(form.password))
      return 'Password needs uppercase, lowercase, number, and special character';
    if (form.password !== form.confirmPassword) return 'Passwords do not match';
    if (!form.agreeTerms) return 'You must agree to the terms and conditions';
    return '';
  }, [form]);

  const handleNext = () => {
    const err = validateStep1();
    if (err) { setError(err); return; }
    setError('');
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateStep2();
    if (err) { setError(err); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, otp }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Registration failed');
      } else { setOtpSent(true); }
    } catch { setError('Network error. Please try again.'); }
    finally { setLoading(false); }
  };

  const sendOtp = async () => {
    setLoading(true);
    try {
      await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile: form.mobile }),
      });
      setOtpSent(true);
    } catch { setError('Failed to send OTP'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Create Account</h1>
        <p className="text-sm text-muted-foreground mb-6">Register for government digital services</p>
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3].map(s => (
            <div key={s} className={\\\`flex-1 h-1 rounded \\\${s <= step ? 'bg-primary' : 'bg-muted'}\\\`} />
          ))}
        </div>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
        <form onSubmit={handleSubmit} noValidate>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
                <input id="fullName" type="text" value={form.fullName} onChange={e => setForm(f => ({...f, fullName: e.target.value}))} placeholder="As per government ID" className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address <span className="text-red-500">*</span></label>
                <input id="email" type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} placeholder="name@example.gov.in" className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-1">Mobile Number <span className="text-red-500">*</span></label>
                <input id="mobile" type="tel" value={form.mobile} onChange={e => setForm(f => ({...f, mobile: e.target.value}))} placeholder="+91 98765 43210" className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" />
              </div>
              <button type="button" onClick={handleNext} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Continue</button>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="aadhaar" className="block text-sm font-medium mb-1">Aadhaar Number (Optional)</label>
                <input id="aadhaar" type="text" value={form.aadhaar} onChange={e => setForm(f => ({...f, aadhaar: e.target.value}))} placeholder="XXXX XXXX XXXX" maxLength={14} className="w-full px-4 py-3 border border-border rounded-lg" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input id="password" type={showPassword ? 'text' : 'password'} value={form.password} onChange={e => setForm(f => ({...f, password: e.target.value}))} className="w-full px-4 py-3 pr-12 border border-border rounded-lg" aria-required="true" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? 'Hide' : 'Show'}</button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password <span className="text-red-500">*</span></label>
                <input id="confirmPassword" type="password" value={form.confirmPassword} onChange={e => setForm(f => ({...f, confirmPassword: e.target.value}))} className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" />
              </div>
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" checked={form.agreeTerms} onChange={e => setForm(f => ({...f, agreeTerms: e.target.checked}))} className="mt-1 accent-primary" aria-required="true" />
                <span>I agree to the <a href="/terms" className="text-primary underline">Terms of Service</a> and <a href="/privacy" className="text-primary underline">Privacy Policy</a></span>
              </label>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button>
                <button type="submit" disabled={loading} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Creating...' : 'Create Account'}</button>
              </div>
            </div>
          )}
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">Already have an account? <a href="/sign-in" className="text-primary hover:underline">Sign In</a></p>
      </div>
    </div>
  );
}`;

const SIGNUP_ANGULAR_CODE = `import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \\\`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Create Account</h1>
        <p class="text-sm text-muted-foreground mb-6">Register for government digital services</p>
        <div class="flex items-center gap-2 mb-6">
          <div *ngFor="let s of [1,2,3]" [class]="'flex-1 h-1 rounded ' + (s <= step ? 'bg-primary' : 'bg-muted')"></div>
        </div>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{{ error }}</div>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div *ngIf="step === 1" class="space-y-4">
            <div>
              <label for="fullName" class="block text-sm font-medium mb-1">Full Name <span class="text-red-500">*</span></label>
              <input id="fullName" formControlName="fullName" placeholder="As per government ID" class="w-full px-4 py-3 border border-border rounded-lg" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-1">Email <span class="text-red-500">*</span></label>
              <input id="email" type="email" formControlName="email" placeholder="name@example.gov.in" class="w-full px-4 py-3 border border-border rounded-lg" />
            </div>
            <div>
              <label for="mobile" class="block text-sm font-medium mb-1">Mobile <span class="text-red-500">*</span></label>
              <input id="mobile" type="tel" formControlName="mobile" placeholder="+91 98765 43210" class="w-full px-4 py-3 border border-border rounded-lg" />
            </div>
            <button type="button" (click)="nextStep()" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Continue</button>
          </div>
          <div *ngIf="step === 2" class="space-y-4">
            <div>
              <label for="aadhaar" class="block text-sm font-medium mb-1">Aadhaar Number (Optional)</label>
              <input id="aadhaar" formControlName="aadhaar" placeholder="XXXX XXXX XXXX" maxlength="14" class="w-full px-4 py-3 border border-border rounded-lg" />
            </div>
            <div>
              <label for="password" class="block text-sm font-medium mb-1">Password <span class="text-red-500">*</span></label>
              <input id="password" [type]="showPassword ? 'text' : 'password'" formControlName="password" class="w-full px-4 py-3 border border-border rounded-lg" />
            </div>
            <div>
              <label for="confirmPassword" class="block text-sm font-medium mb-1">Confirm Password <span class="text-red-500">*</span></label>
              <input id="confirmPassword" type="password" formControlName="confirmPassword" class="w-full px-4 py-3 border border-border rounded-lg" />
            </div>
            <label class="flex items-start gap-2 text-sm">
              <input type="checkbox" formControlName="agreeTerms" class="mt-1 accent-primary" />
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </label>
            <div class="flex gap-3">
              <button type="button" (click)="step = 1" class="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button>
              <button type="submit" [disabled]="loading" class="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Creating...' : 'Create Account' }}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  \\\`
})
export class SignUpComponent {
  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.pattern(/^(\\+91)?[6-9]\\d{9}$/)]),
    aadhaar: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required]),
    agreeTerms: new FormControl(false, [Validators.requiredTrue]),
  });
  step = 1;
  showPassword = false;
  loading = false;
  error = '';

  nextStep() {
    const { fullName, email, mobile } = this.form.controls;
    if (fullName.invalid || email.invalid || mobile.invalid) {
      this.error = 'Please fill all required fields correctly';
      return;
    }
    this.error = '';
    this.step = 2;
  }

  async onSubmit() {
    if (this.form.invalid) { this.error = 'Please fill all required fields'; return; }
    if (this.form.value.password !== this.form.value.confirmPassword) {
      this.error = 'Passwords do not match'; return;
    }
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form.value),
      });
      if (!res.ok) { const data = await res.json(); this.error = data.message || 'Registration failed'; }
    } catch { this.error = 'Network error'; }
    finally { this.loading = false; }
  }
}`;

const SIGNUP_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sign Up — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    h1 { font-size: 1.5rem; font-weight: 700; color: #111; margin-bottom: 0.5rem; }
    .subtitle { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
    .progress { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
    .progress-bar { flex: 1; height: 4px; border-radius: 2px; background: #e5e7eb; }
    .progress-bar.active { background: #005196; }
    label { display: block; font-size: 0.875rem; font-weight: 500; color: #111; margin-bottom: 0.25rem; }
    input[type="text"], input[type="email"], input[type="tel"], input[type="password"] { width: 100%; padding: 0.75rem 1rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; outline: none; }
    input:focus { border-color: #005196; box-shadow: 0 0 0 2px rgba(0,81,150,0.2); }
    .field { margin-bottom: 1rem; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:hover { background: #004178; }
    .btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .btn-outline { background: #fff; color: #111; border: 1px solid #d1d5db; }
    .btn-outline:hover { background: #f9fafb; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .row { display: flex; gap: 0.75rem; }
    .row > * { flex: 1; }
    .terms { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.875rem; margin-bottom: 1rem; }
    .terms a { color: #005196; }
    .signin { text-align: center; margin-top: 1.5rem; font-size: 0.875rem; color: #6b7280; }
    .signin a { color: #005196; text-decoration: none; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Create Account</h1>
    <p class="subtitle">Register for government digital services</p>
    <div class="progress">
      <div class="progress-bar active" id="prog1"></div>
      <div class="progress-bar" id="prog2"></div>
      <div class="progress-bar" id="prog3"></div>
    </div>
    <div id="error" class="error" role="alert"></div>
    <form id="signUpForm" novalidate>
      <div id="step1">
        <div class="field">
          <label for="fullName">Full Name <span style="color:#ef4444">*</span></label>
          <input type="text" id="fullName" placeholder="As per government ID" required aria-required="true" />
        </div>
        <div class="field">
          <label for="email">Email Address <span style="color:#ef4444">*</span></label>
          <input type="email" id="email" placeholder="name@example.gov.in" required aria-required="true" />
        </div>
        <div class="field">
          <label for="mobile">Mobile Number <span style="color:#ef4444">*</span></label>
          <input type="tel" id="mobile" placeholder="+91 98765 43210" required aria-required="true" />
        </div>
        <button type="button" class="btn" onclick="nextStep()">Continue</button>
      </div>
      <div id="step2" class="hidden">
        <div class="field">
          <label for="aadhaar">Aadhaar Number (Optional)</label>
          <input type="text" id="aadhaar" placeholder="XXXX XXXX XXXX" maxlength="14" />
        </div>
        <div class="field">
          <label for="password">Password <span style="color:#ef4444">*</span></label>
          <input type="password" id="password" required minlength="8" aria-required="true" />
        </div>
        <div class="field">
          <label for="confirmPassword">Confirm Password <span style="color:#ef4444">*</span></label>
          <input type="password" id="confirmPassword" required aria-required="true" />
        </div>
        <label class="terms"><input type="checkbox" id="agreeTerms" required aria-required="true" /><span>I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></span></label>
        <div class="row">
          <button type="button" class="btn btn-outline" onclick="prevStep()">Back</button>
          <button type="submit" class="btn" id="submitBtn">Create Account</button>
        </div>
      </div>
    </form>
    <p class="signin">Already have an account? <a href="/sign-in">Sign In</a></p>
  </div>
  <script>
    let currentStep = 1;
    function showError(msg) { const el = document.getElementById('error'); el.textContent = msg; el.style.display = 'block'; }
    function hideError() { document.getElementById('error').style.display = 'none'; }
    function nextStep() {
      hideError();
      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const mobile = document.getElementById('mobile').value.trim();
      if (!name || !email || !mobile) { showError('All fields are required'); return; }
      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) { showError('Enter a valid email'); return; }
      if (!/^(\\+91)?[6-9]\\d{9}$/.test(mobile.replace(/\\s/g, ''))) { showError('Enter a valid Indian mobile number'); return; }
      document.getElementById('step1').classList.add('hidden');
      document.getElementById('step2').classList.remove('hidden');
      document.getElementById('prog2').classList.add('active');
      currentStep = 2;
    }
    function prevStep() {
      document.getElementById('step2').classList.add('hidden');
      document.getElementById('step1').classList.remove('hidden');
      document.getElementById('prog2').classList.remove('active');
      currentStep = 1;
    }
    document.getElementById('signUpForm').addEventListener('submit', async function(e) {
      e.preventDefault(); hideError();
      const pw = document.getElementById('password').value;
      const cpw = document.getElementById('confirmPassword').value;
      if (pw.length < 8) { showError('Password must be at least 8 characters'); return; }
      if (pw !== cpw) { showError('Passwords do not match'); return; }
      if (!document.getElementById('agreeTerms').checked) { showError('You must agree to the terms'); return; }
      const btn = document.getElementById('submitBtn');
      btn.disabled = true; btn.textContent = 'Creating...';
      try {
        const res = await fetch('/api/auth/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fullName: document.getElementById('fullName').value, email: document.getElementById('email').value, mobile: document.getElementById('mobile').value, aadhaar: document.getElementById('aadhaar').value, password: pw }) });
        if (!res.ok) { const data = await res.json(); showError(data.message || 'Registration failed'); }
      } catch { showError('Network error. Please try again.'); }
      finally { btn.disabled = false; btn.textContent = 'Create Account'; }
    });
  </script>
</body>
</html>`;

function CodeDownloadsSection() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadCode = (code: string, filename: string) => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks + Multi-step', code: SIGNUP_REACT_CODE, filename: 'SignUpPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone + Reactive Forms', code: SIGNUP_ANGULAR_CODE, filename: 'sign-up.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: SIGNUP_HTML_CODE, filename: 'sign-up.html' },
  ];

  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Sign Up implementations for your framework.</p>
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
                <div tabIndex={0} role="region" aria-label={`${lane.title} code preview`} className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
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
        <h2 className="text-2xl font-bold text-foreground">Governance & Compliance</h2>
        <p className="text-muted-foreground mt-2">Conformance requirements and quality assurance guidance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conformance Status */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Conformance Status</h3>
          </div>
          <div className="p-6">
            <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800 dark:text-red-300 mb-2">MANDATORY</div>
                <p className="text-sm text-muted-foreground">
                  All government services requiring user accounts MUST implement this pattern
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Non-compliance may result in service certification delays</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Required for UX4G conformance badge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lifecycle Status */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Lifecycle Status</h3>
          </div>
          <div className="p-6">
            <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">STABLE</div>
                <p className="text-sm text-muted-foreground">
                  Production-ready, fully documented, breaking changes unlikely
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-sm"></div>
                <span className="text-muted-foreground">Version: <span className="font-bold">1.0.0</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
                <span className="text-muted-foreground">Last Updated: <span className="font-bold">April 2026</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Required Checks */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden col-span-2">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Pre-Launch Checklist</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <ChecklistItem text="All required fields implemented" />
                <ChecklistItem text="Real-time validation working" />
                <ChecklistItem text="Duplicate account detection active" />
                <ChecklistItem text="Password strength indicator present" />
                <ChecklistItem text="OTP verification flow integrated" />
                <ChecklistItem text="Error messages clear and actionable" />
              </div>
              <div className="space-y-2">
                <ChecklistItem text="WCAG 2.1 AA compliance verified" />
                <ChecklistItem text="Keyboard navigation tested" />
                <ChecklistItem text="Screen reader compatibility confirmed" />
                <ChecklistItem text="Mobile responsive design validated" />
                <ChecklistItem text="Security audit completed" />
                <ChecklistItem text="Load testing performed" />
              </div>
            </div>
          </div>
        </div>

        {/* Support & Escalation */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden col-span-2">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-300 px-6 py-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <HelpCircle size={18} />
              Support & Escalation
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-bold text-foreground mb-2">Pattern Questions</h3>
                <p className="text-muted-foreground mb-2">For design and implementation guidance</p>
                <a href="#" className="text-primary font-bold hover:underline">ux4g-support@gov.in</a>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Technical Issues</h3>
                <p className="text-muted-foreground mb-2">For API or integration problems</p>
                <a href="#" className="text-primary font-bold hover:underline">tech-support@digitalindia.gov.in</a>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Conformance Review</h3>
                <p className="text-muted-foreground mb-2">For certification and audits</p>
                <a href="#" className="text-primary font-bold hover:underline">conformance@ux4g.gov.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <div className="w-4 h-4 border-2 border-border rounded flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check size={12} className="text-muted-foreground" />
      </div>
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function QuickReference() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-primary text-white px-4 py-3">
        <h3 className="font-bold text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <div>
          <div className="font-bold text-foreground mb-1">Pattern Type</div>
          <div className="text-muted-foreground">Identity & Access</div>
        </div>
        <div className="border-t border-border pt-3">
          <div className="font-bold text-foreground mb-1">Complexity</div>
          <div className="text-muted-foreground">Medium</div>
        </div>
        <div className="border-t border-border pt-3">
          <div className="font-bold text-foreground mb-1">Est. Implementation</div>
          <div className="text-muted-foreground">3-5 days</div>
        </div>
        <div className="border-t border-border pt-3">
          <div className="font-bold text-foreground mb-1">Dependencies</div>
          <div className="text-muted-foreground">OTP Verification, Email Service</div>
        </div>
      </div>
    </div>
  );
}

function InteractivePrototype() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">Interactive Prototype</h3>
      </div>
      <div className="p-4">
        <a 
          href="#" 
          className="block w-full px-4 py-3 bg-primary text-white text-center font-bold text-sm rounded hover:opacity-90 transition-colors"
        >
          View Live Demo
        </a>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Test all states and interactions
        </p>
      </div>
    </div>
  );
}

function RelatedPatterns() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">Related Patterns</h3>
      </div>
      <div className="p-4 space-y-2">
        <Link 
          to="/patterns/identity/sign-in"
          className="block px-3 py-2 bg-background hover:bg-muted border border-border rounded text-sm text-foreground transition-colors"
        >
          <div className="font-bold">Sign In</div>
          <div className="text-xs text-muted-foreground">User authentication</div>
        </Link>
        <Link 
          to="/patterns/identity/otp-verification"
          className="block px-3 py-2 bg-background hover:bg-muted border border-border rounded text-sm text-foreground transition-colors"
        >
          <div className="font-bold">Email OTP</div>
          <div className="text-xs text-muted-foreground">Email verification</div>
        </Link>
        <Link 
          to="/patterns/identity/mobile-otp"
          className="block px-3 py-2 bg-background hover:bg-muted border border-border rounded text-sm text-foreground transition-colors"
        >
          <div className="font-bold">Mobile OTP</div>
          <div className="text-xs text-muted-foreground">SMS verification</div>
        </Link>
        <Link 
          to="/patterns/identity/forgot-password"
          className="block px-3 py-2 bg-background hover:bg-muted border border-border rounded text-sm text-foreground transition-colors"
        >
          <div className="font-bold">Forgot Password</div>
          <div className="text-xs text-muted-foreground">Account recovery</div>
        </Link>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">Resources</h3>
      </div>
      <div className="p-4 space-y-3">
        <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
          <FileText size={16} />
          <span>Figma Component</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
          <Code size={16} />
          <span>Code Snippets</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
          <Globe size={16} />
          <span>API Documentation</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
          <Settings size={16} />
          <span>Implementation Guide</span>
        </a>
      </div>
    </div>
  );
}
