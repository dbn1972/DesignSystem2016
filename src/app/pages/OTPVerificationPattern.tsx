import React from "react";
import { Link } from "react-router";
import { Shield, CheckCircle, AlertCircle, Info, XCircle, ArrowRight, ArrowLeft, ChevronRight, Clock, RefreshCw, Smartphone, Mail, Hash, Eye, Lock, HelpCircle, Check, X, FileText, Code, Download, Copy } from "lucide-react";

export default function OTPVerificationPattern() {
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
            <span className="text-foreground font-medium">OTP Verification</span>
          </div>

          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center">
                  <Hash size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Identity & Access Pattern</div>
                  <h1 className="text-3xl font-bold text-foreground">OTP Verification (Parent Pattern)</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Comprehensive parent pattern for One-Time Password verification used across sign-in, sign-up, 
                account recovery, and transaction verification journeys. Defines shared OTP logic, UI states, 
                validation rules, and accessibility requirements for all OTP implementations.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-002-00</span></span>
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
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "flow", label: "Flow Diagram" },
              { id: "states", label: "Example States" },
              { id: "patterns", label: "OTP Patterns" },
              { id: "validation", label: "Validation Logic" },
              { id: "resend", label: "Resend Logic" },
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
      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-16">
            <OverviewSection />
            <FlowDiagram />
            <ExampleStates />
            <OTPPatterns />
            <ValidationLogic />
            <ResendLogic />
            <AccessibilitySection />
            <ImplementationSection />
            <CodeDownloadsSection />
            <GovernanceSection />
          </div>

          {/* Sidebar - 3 columns */}
          <aside className="col-span-3 space-y-6 sticky top-24 self-start">
            <QuickReference />
            <ChildPatterns />
            <RelatedPatterns />
            <Resources />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • OTP Verification Pattern</div>
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
              Provide a secure, accessible, and user-friendly method for verifying user identity or 
              authorizing sensitive actions using time-limited one-time passwords.
            </p>
            <div className="space-y-2">
              <InfoItem icon={<Shield size={16} className="text-primary" />} text="Verify user identity during sign-in/sign-up" />
              <InfoItem icon={<Lock size={16} className="text-primary" />} text="Authorize sensitive transactions" />
              <InfoItem icon={<RefreshCw size={16} className="text-primary" />} text="Enable secure account recovery" />
              <InfoItem icon={<CheckCircle size={16} className="text-green-600" />} text="Prevent unauthorized access" />
            </div>
          </div>
        </div>

        {/* User Goals */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">User Goals</h3>
          </div>
          <div className="p-6 space-y-2">
            <GoalItem text="Receive OTP quickly and reliably" />
            <GoalItem text="Enter OTP easily without errors" />
            <GoalItem text="Understand OTP validity and expiry" />
            <GoalItem text="Resend OTP if not received" />
            <GoalItem text="Get help if verification fails" />
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
            <WhenItem text="User sign-in and sign-up flows" />
            <WhenItem text="Account recovery and password reset" />
            <WhenItem text="Two-factor authentication (2FA)" />
            <WhenItem text="High-value transaction verification" />
            <WhenItem text="Contact information verification" />
            <WhenItem text="Profile change confirmation" />
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
            <WhenNotItem text="For routine, low-risk actions" />
            <WhenNotItem text="In offline-only environments" />
            <WhenNotItem text="When user has no mobile/email access" />
            <WhenNotItem text="For time-critical emergency services" />
            <WhenNotItem text="Where accessibility cannot be ensured" />
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
            title="Trigger OTP Request"
            description="User initiates action requiring OTP (sign-in, sign-up, verification)"
            state="User Action"
          />
          <FlowStep 
            number={2}
            title="Generate & Send OTP"
            description="System generates 6-digit OTP with 5-10 minute validity and sends via SMS/Email"
            state="System Action"
          />
          <FlowStep 
            number={3}
            title="Display OTP Entry Screen"
            description="Show OTP input with masked contact, timer countdown, and resend option"
            state="UI State"
          />
          <FlowStep 
            number={4}
            title="User Enters OTP"
            description="User types or pastes 6-digit code; system validates format in real-time"
            state="User Action"
          />
          <FlowStep 
            number={5}
            title="Validate OTP"
            description="System checks: correct code, not expired, within attempt limit"
            state="System Action"
            branches={true}
          />
          
          {/* Success Path */}
          <div className="ml-12 pl-6 border-l-4 border-green-500 space-y-4">
            <FlowStep 
              number="5a"
              title="Success Path"
              description="OTP matches, user verified, proceed to next step"
              state="Success"
              variant="success"
            />
          </div>

          {/* Error Path */}
          <div className="ml-12 pl-6 border-l-4 border-red-500 space-y-4">
            <FlowStep 
              number="5b"
              title="Error Path"
              description="Show error: wrong OTP, expired, or attempts exceeded"
              state="Error"
              variant="error"
            />
            <FlowStep 
              number="6"
              title="Recovery Options"
              description="Offer: re-enter OTP, resend OTP, change contact, or get help"
              state="Recovery"
              variant="warning"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== EXAMPLE STATES ====================

function ExampleStates() {
  return (
    <section id="states" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Example States</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Default State */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Default OTP Entry</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-border rounded p-6 space-y-4">
              <div className="text-center">
                <Hash size={40} className="text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Enter OTP</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We've sent a 6-digit code to<br/>
                  <span className="font-bold text-foreground">+91 ******* 123</span>
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-12 h-12 border-2 border-border rounded bg-card"></div>
                ))}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                <Clock size={14} className="inline mr-1" />
                Code expires in <span className="font-bold text-foreground">4:45</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Ready for input</p>
              <p><strong>Timer:</strong> Counting down from 5:00</p>
              <p><strong>Resend:</strong> Disabled until 0:00</p>
            </div>
          </div>
        </div>

        {/* Incomplete OTP */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Incomplete OTP</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-orange-300 rounded p-6 space-y-4">
              <div className="text-center">
                <Hash size={40} className="text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Enter OTP</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We've sent a 6-digit code to<br/>
                  <span className="font-bold text-foreground">+91 ******* 123</span>
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                <div className="w-12 h-12 border-2 border-orange-500 rounded bg-card flex items-center justify-center font-bold text-foreground">1</div>
                <div className="w-12 h-12 border-2 border-orange-500 rounded bg-card flex items-center justify-center font-bold text-foreground">2</div>
                <div className="w-12 h-12 border-2 border-orange-500 rounded bg-card flex items-center justify-center font-bold text-foreground">3</div>
                <div className="w-12 h-12 border-2 border-orange-500 rounded bg-card"></div>
                <div className="w-12 h-12 border-2 border-border rounded bg-card"></div>
                <div className="w-12 h-12 border-2 border-border rounded bg-card"></div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-300 rounded p-3 text-sm text-orange-800">
                <AlertCircle size={14} className="inline mr-2" />
                Please enter all 6 digits
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Partial input (3 of 6 digits)</p>
              <p><strong>Validation:</strong> On submit attempt</p>
            </div>
          </div>
        </div>

        {/* Invalid OTP */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Invalid OTP</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-red-400 rounded p-6 space-y-4">
              <div className="text-center">
                <XCircle size={40} className="text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Incorrect OTP</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  The code you entered doesn't match.<br/>
                  Please try again.
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-12 h-12 border-2 border-red-400 rounded bg-red-50"></div>
                ))}
              </div>
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-300 rounded p-3 text-sm text-red-800">
                <XCircle size={14} className="inline mr-2" />
                Invalid code. 2 attempts remaining.
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Validation failed</p>
              <p><strong>Attempts:</strong> 1 of 3 used</p>
              <p><strong>Action:</strong> Clear fields, allow retry</p>
            </div>
          </div>
        </div>

        {/* Expired OTP */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border-b-2 border-yellow-200 dark:border-yellow-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Expired OTP</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-yellow-400 rounded p-6 space-y-4">
              <div className="text-center">
                <Clock size={40} className="text-yellow-600 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Code Expired</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your verification code has expired.<br/>
                  Please request a new one.
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-12 h-12 border-2 border-border rounded bg-muted opacity-50"></div>
                ))}
              </div>
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90 flex items-center justify-center gap-2">
                <RefreshCw size={16} />
                Resend OTP
              </button>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Time limit exceeded (5:00)</p>
              <p><strong>Action:</strong> Disable input, enable resend</p>
            </div>
          </div>
        </div>

        {/* Resend OTP */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Resend OTP Available</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-border rounded p-6 space-y-4">
              <div className="text-center">
                <RefreshCw size={40} className="text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Didn't receive code?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check your messages or<br/>
                  request a new code
                </p>
              </div>
              <div className="flex gap-2 justify-center opacity-50">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-12 h-12 border-2 border-border rounded bg-card"></div>
                ))}
              </div>
              <div className="space-y-2">
                <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90">
                  Resend OTP
                </button>
                <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded hover:bg-background">
                  Change Mobile Number
                </button>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Resend enabled (timer at 0:00)</p>
              <p><strong>Options:</strong> Resend or change contact</p>
            </div>
          </div>
        </div>

        {/* Attempts Exceeded */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-100 border-b-2 border-red-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Attempts Exceeded</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-red-500 rounded p-6 space-y-4">
              <div className="text-center">
                <XCircle size={40} className="text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Too Many Attempts</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You've exceeded the maximum number<br/>
                  of verification attempts. Please wait.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded p-4 text-sm">
                <p className="text-red-800 font-bold mb-2">Account temporarily locked</p>
                <p className="text-muted-foreground">Try again after <span className="font-bold">14 minutes</span></p>
              </div>
              <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded hover:bg-background flex items-center justify-center gap-2">
                <HelpCircle size={16} />
                Get Help
              </button>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Locked after 3 failed attempts</p>
              <p><strong>Cooldown:</strong> 15 minutes</p>
            </div>
          </div>
        </div>

        {/* Success State */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Verification Success</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-green-400 rounded p-6 space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Verified Successfully</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your identity has been confirmed.<br/>
                  Redirecting you now...
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                {[1,2,3,4,5,6].map((num) => (
                  <div key={num} className="w-12 h-12 border-2 border-green-500 rounded bg-green-50 flex items-center justify-center font-bold text-green-700">{num}</div>
                ))}
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 rounded p-3 text-sm text-green-800">
                <CheckCircle size={14} className="inline mr-2" />
                Proceeding to your account...
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Validation successful</p>
              <p><strong>Action:</strong> Auto-redirect in 2 seconds</p>
            </div>
          </div>
        </div>

        {/* Change Number */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Change Contact Method</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-border rounded p-6 space-y-4">
              <div className="text-center">
                <Smartphone size={40} className="text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Update Mobile Number</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Current: <span className="font-bold">+91 ******* 123</span><br/>
                  Enter new number to receive OTP
                </p>
              </div>
              <div className="space-y-3">
                <input aria-label="Enter 10-digit mobile number" type="tel" 
                  placeholder="Enter 10-digit mobile number"
                  className="w-full px-4 py-3 border-2 border-border rounded text-center font-mono"
                />
                <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90">
                  Send OTP to New Number
                </button>
                <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded hover:bg-background">
                  Cancel
                </button>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Contact change requested</p>
              <p><strong>Validation:</strong> New number must be valid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== OTP PATTERNS ====================

function OTPPatterns() {
  return (
    <section id="patterns" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">OTP Input Patterns</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Single Field Pattern */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Single Field Pattern</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-border rounded p-6 mb-4">
              <label className="block text-sm font-bold text-foreground mb-2">Enter 6-digit OTP</label>
              <input aria-label="000000" type="text" 
                maxLength={6}
                placeholder="000000"
                className="w-full px-4 py-3 border-2 border-border rounded text-center font-mono text-2xl tracking-widest"
              />
            </div>
            <div className="space-y-3 text-sm">
              <h3 className="font-bold text-foreground">Advantages</h3>
              <div className="space-y-2">
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Simpler for screen readers" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Better paste behavior" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Easier keyboard navigation" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Less DOM complexity" />
              </div>
              <h3 className="font-bold text-foreground mt-4">Recommended For</h3>
              <p className="text-muted-foreground">Mobile-first applications, accessibility priority, simpler implementations</p>
            </div>
          </div>
        </div>

        {/* Multi-Field Pattern */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Multi-Field Pattern (6 Inputs)</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-border rounded p-6 mb-4">
              <label className="block text-sm font-bold text-foreground mb-2">Enter 6-digit OTP</label>
              <div className="flex gap-2 justify-center">
                {[...Array(6)].map((_, i) => (
                  <input aria-label="text input" key={i}
                    type="text" 
                    maxLength={1}
                    className="w-12 h-12 border-2 border-border rounded text-center font-bold text-xl"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <h3 className="font-bold text-foreground">Advantages</h3>
              <div className="space-y-2">
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Visual clarity of progress" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Clear digit separation" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Familiar banking pattern" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Per-digit validation" />
              </div>
              <h3 className="font-bold text-foreground mt-4">Recommended For</h3>
              <p className="text-muted-foreground">Desktop applications, high-security contexts, traditional banking services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <Info size={20} className="text-primary" />
          Pattern Selection Guidelines
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold text-foreground mb-2">Use Single Field When:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Mobile is primary interface</li>
              <li>• Accessibility is critical</li>
              <li>• Auto-fill/paste is expected</li>
              <li>• Development resources limited</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">Use Multi-Field When:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Desktop is primary interface</li>
              <li>• Visual clarity is priority</li>
              <li>• Banking/financial context</li>
              <li>• Per-digit validation needed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== VALIDATION LOGIC ====================

function ValidationLogic() {
  return (
    <section id="validation" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Validation Logic & Rules</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">OTP Generation Rules</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-bold text-foreground">Parameter</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Specification</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Length</td>
                <td className="py-3 px-4 text-muted-foreground">6 digits</td>
                <td className="py-3 px-4 text-muted-foreground">Balance security & usability</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Character Set</td>
                <td className="py-3 px-4 text-muted-foreground">Numeric only (0-9)</td>
                <td className="py-3 px-4 text-muted-foreground">Phone keypad compatibility</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Validity Period</td>
                <td className="py-3 px-4 text-muted-foreground">5-10 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">Security vs. SMS delays</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Max Attempts</td>
                <td className="py-3 px-4 text-muted-foreground">3 attempts</td>
                <td className="py-3 px-4 text-muted-foreground">Prevent brute force</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Lockout Duration</td>
                <td className="py-3 px-4 text-muted-foreground">15 minutes</td>
                <td className="py-3 px-4 text-muted-foreground">Security timeout</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Resend Cooldown</td>
                <td className="py-3 px-4 text-muted-foreground">30 seconds</td>
                <td className="py-3 px-4 text-muted-foreground">Prevent SMS spam</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Input Validation */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Input Validation</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <ValidationRule 
              rule="Format Check"
              description="Only numeric characters (0-9) allowed"
              timing="Real-time on keypress"
            />
            <ValidationRule 
              rule="Length Check"
              description="Must be exactly 6 digits"
              timing="Before submission"
            />
            <ValidationRule 
              rule="Completeness"
              description="All 6 fields must be filled"
              timing="On submit attempt"
            />
            <ValidationRule 
              rule="Auto-submit"
              description="Submit when 6th digit entered (optional)"
              timing="On completion"
            />
          </div>
        </div>

        {/* Server Validation */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Server Validation</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <ValidationRule 
              rule="Code Match"
              description="Entered OTP matches generated OTP"
              timing="On server request"
            />
            <ValidationRule 
              rule="Expiry Check"
              description="OTP not expired (within validity period)"
              timing="On server request"
            />
            <ValidationRule 
              rule="Attempt Limit"
              description="User within maximum attempts (3)"
              timing="On server request"
            />
            <ValidationRule 
              rule="Session Check"
              description="Valid session and CSRF token"
              timing="On server request"
            />
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <AlertCircle size={20} className="text-yellow-600" />
          Security Considerations
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <p className="font-bold text-foreground mb-1">Rate Limiting</p>
            <p>Limit OTP requests to 3 per hour per contact</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">SMS Sender Verification</p>
            <p>Use registered sender ID (e.g., "GOV-IN")</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">Browser Autocomplete</p>
            <p>Use autocomplete="one-time-code" attribute</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">Code Masking</p>
            <p>Optional: mask OTP after entry for privacy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== RESEND LOGIC ====================

function ResendLogic() {
  return (
    <section id="resend" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Resend & Countdown Logic</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Countdown Behavior */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Countdown Timer Behavior</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="text-sm space-y-3">
              <TimerState 
                time="5:00 - 0:31"
                state="Active Timer"
                display="Show countdown with minutes:seconds"
                action="Resend button disabled"
              />
              <TimerState 
                time="0:30 - 0:11"
                state="Warning Phase"
                display="Countdown turns orange/amber"
                action="Prepare user for expiry"
              />
              <TimerState 
                time="0:10 - 0:01"
                state="Critical Phase"
                display="Countdown turns red, shows urgency"
                action="Alert user to enter code soon"
              />
              <TimerState 
                time="0:00"
                state="Expired"
                display="'Code expired' message"
                action="Enable resend, disable input"
              />
            </div>
          </div>
        </div>

        {/* Resend Flow */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Resend Flow & Messaging</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="text-sm space-y-3">
              <ResendStep 
                step="1"
                action="User clicks 'Resend OTP'"
                result="New OTP generated and sent"
              />
              <ResendStep 
                step="2"
                action="Show confirmation message"
                result="'New code sent to +91 ****** 123'"
              />
              <ResendStep 
                step="3"
                action="Reset countdown to 5:00"
                result="Timer restarts from beginning"
              />
              <ResendStep 
                step="4"
                action="Clear previous OTP input"
                result="All fields cleared, ready for new code"
              />
              <ResendStep 
                step="5"
                action="Disable resend for 30 seconds"
                result="Prevent spam, show cooldown"
              />
              <ResendStep 
                step="6"
                action="Old OTP invalidated"
                result="Previous code no longer works"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Resend Button States & Messaging</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Disabled State */}
            <div className="bg-background border-2 border-border rounded p-4 text-center">
              <button className="w-full px-4 py-2 bg-gray-300 text-gray-500 font-bold rounded cursor-not-allowed mb-2">
                Resend OTP
              </button>
              <p className="text-xs text-muted-foreground">Available in 0:23</p>
              <div className="mt-2 pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground"><strong>State:</strong> Disabled</p>
                <p className="text-xs text-muted-foreground"><strong>Timer:</strong> Counting down</p>
              </div>
            </div>

            {/* Enabled State */}
            <div className="bg-background border-2 border-blue-300 rounded p-4 text-center">
              <button className="w-full px-4 py-2 bg-primary text-white font-bold rounded hover:opacity-90 mb-2">
                Resend OTP
              </button>
              <p className="text-xs text-muted-foreground">Didn't receive code?</p>
              <div className="mt-2 pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground"><strong>State:</strong> Enabled</p>
                <p className="text-xs text-muted-foreground"><strong>Timer:</strong> Expired (0:00)</p>
              </div>
            </div>

            {/* Success State */}
            <div className="bg-background border-2 border-green-300 rounded p-4 text-center">
              <button className="w-full px-4 py-2 bg-gray-300 text-gray-500 font-bold rounded cursor-not-allowed mb-2">
                Resend OTP
              </button>
              <p className="text-xs text-green-700"><CheckCircle size={12} className="inline mr-1" />New code sent!</p>
              <div className="mt-2 pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground"><strong>State:</strong> Just sent</p>
                <p className="text-xs text-muted-foreground"><strong>Timer:</strong> Reset to 5:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-orange-600" />
          Accessibility Considerations for Timers
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Use aria-live='polite' for timer updates (announce every 30 seconds, not every second)" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Provide visible and audible alerts when timer reaches critical thresholds (30s, 10s)" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Ensure resend button is keyboard accessible and has clear focus states" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Announce 'New code sent' via screen reader when resend is clicked" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Do not rely solely on color to indicate timer urgency (use text/icons too)" />
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
        {/* Keyboard Behavior */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Keyboard Behavior</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Tab Navigation"
              description="Tab key moves between fields (multi-field) or to next action (single field)"
            />
            <AccessibilityItem 
              label="Arrow Keys"
              description="Left/Right arrows move between digits in multi-field pattern"
            />
            <AccessibilityItem 
              label="Backspace"
              description="Delete digit and move to previous field (multi-field)"
            />
            <AccessibilityItem 
              label="Paste Support"
              description="Ctrl+V / Cmd+V pastes full OTP across all fields"
            />
            <AccessibilityItem 
              label="Enter Key"
              description="Submit OTP when complete; no action when incomplete"
            />
            <AccessibilityItem 
              label="Escape Key"
              description="Clear all fields and return focus to first field"
            />
          </div>
        </div>

        {/* Screen Reader Support */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Screen Reader Considerations</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Field Labels"
              description="Each field has accessible label: 'Digit 1 of 6', 'Digit 2 of 6', etc."
            />
            <AccessibilityItem 
              label="Instructions"
              description="Clear instructions announced: 'Enter 6-digit code sent to your mobile'"
            />
            <AccessibilityItem 
              label="Error Messages"
              description="Errors linked to fields via aria-describedby and announced immediately"
            />
            <AccessibilityItem 
              label="Success Feedback"
              description="Success announced: 'Verification successful. Redirecting.'"
            />
            <AccessibilityItem 
              label="Timer Updates"
              description="Timer announced at 30-second intervals, not every second (aria-live='polite')"
            />
            <AccessibilityItem 
              label="Action Confirmation"
              description="Confirm actions: 'New code sent' when resend clicked"
            />
          </div>
        </div>

        {/* Paste Behavior */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Paste Behavior</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Auto-Detect OTP"
              description="Use autocomplete='one-time-code' for browser/OS auto-fill"
            />
            <AccessibilityItem 
              label="Paste Anywhere"
              description="Pasting in any field should populate all 6 fields"
            />
            <AccessibilityItem 
              label="Format Tolerance"
              description="Accept '123456', '123 456', '1 2 3 4 5 6' - strip spaces"
            />
            <AccessibilityItem 
              label="SMS Auto-Read"
              description="Support Web OTP API for SMS auto-reading (Android/iOS)"
            />
            <AccessibilityItem 
              label="Clipboard Security"
              description="Clear OTP from clipboard after paste for security"
            />
          </div>
        </div>

        {/* Focus Management */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border-b-2 border-yellow-200 dark:border-yellow-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Focus Management</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Auto-Focus"
              description="Focus first OTP field automatically on page load"
            />
            <AccessibilityItem 
              label="Auto-Advance"
              description="Move focus to next field when digit entered (multi-field)"
            />
            <AccessibilityItem 
              label="Error Focus"
              description="Move focus to first field on validation error"
            />
            <AccessibilityItem 
              label="Resend Focus"
              description="Return focus to first field after resend"
            />
            <AccessibilityItem 
              label="Visible Focus"
              description="Strong focus indicator (2px solid outline) on all interactive elements"
            />
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">WCAG 2.1 AA Compliance Checklist</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <ComplianceItem criterion="1.3.1 Info & Relationships" status="pass" note="Proper labels and ARIA attributes" />
            <ComplianceItem criterion="1.4.3 Contrast Minimum" status="pass" note="4.5:1 text contrast, 3:1 UI contrast" />
            <ComplianceItem criterion="2.1.1 Keyboard" status="pass" note="All functions keyboard accessible" />
            <ComplianceItem criterion="2.2.1 Timing Adjustable" status="pass" note="5-10 min validity with resend option" />
            <ComplianceItem criterion="2.4.3 Focus Order" status="pass" note="Logical tab order maintained" />
            <ComplianceItem criterion="2.4.7 Focus Visible" status="pass" note="Clear focus indicators" />
            <ComplianceItem criterion="3.2.2 On Input" status="pass" note="No unexpected context changes" />
            <ComplianceItem criterion="3.3.1 Error Identification" status="pass" note="Errors clearly identified" />
            <ComplianceItem criterion="3.3.2 Labels/Instructions" status="pass" note="Clear labels and help text" />
            <ComplianceItem criterion="3.3.3 Error Suggestion" status="pass" note="Recovery options provided" />
            <ComplianceItem criterion="4.1.2 Name, Role, Value" status="pass" note="Proper ARIA implementation" />
            <ComplianceItem criterion="4.1.3 Status Messages" status="pass" note="aria-live for dynamic updates" />
          </div>
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
            category="Backend"
            requirements={[
              "Generate cryptographically secure 6-digit random OTP",
              "Store OTP with timestamp and attempt counter in secure database",
              "Implement rate limiting: max 3 OTP requests per hour per contact",
              "Hash OTP before storage (bcrypt/argon2)",
              "Invalidate previous OTP when new one generated",
              "Log all OTP generation and validation attempts for audit"
            ]}
          />
          <ImplementationItem 
            category="SMS/Email Delivery"
            requirements={[
              "Use government-approved SMS gateway with registered sender ID",
              "SMS template: 'Your verification code is: 123456. Valid for 5 minutes. Do not share. - Govt of India'",
              "Implement retry logic for failed SMS delivery (3 attempts)",
              "Track delivery status and inform user of delays",
              "Email subject: 'Your Verification Code - [Service Name]'",
              "Use plain text + HTML email templates"
            ]}
          />
          <ImplementationItem 
            category="Frontend"
            requirements={[
              "Use inputmode='numeric' for mobile numeric keyboard",
              "Add autocomplete='one-time-code' for browser auto-fill",
              "Implement Web OTP API for SMS auto-reading (Chrome/Safari)",
              "Use JavaScript to handle auto-advance and paste behavior",
              "Implement client-side countdown timer with Interval",
              "Disable submit button until all fields complete"
            ]}
          />
          <ImplementationItem 
            category="Security"
            requirements={[
              "Use HTTPS for all OTP transmission",
              "Implement CSRF protection on OTP submission",
              "Rate limit OTP validation attempts (3 per OTP)",
              "Lock account for 15 minutes after 3 failed attempts",
              "Do not reveal whether contact exists in error messages",
              "Log suspicious OTP activity for fraud detection"
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: HTML Structure</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`<!-- Single Field Pattern -->
<div class="otp-container">
  <label for="otp" class="sr-only">
    Enter 6-digit verification code
  </label>
  <input aria-label="otp" type="text" 
    id="otp"
    name="otp"
    inputmode="numeric"
    maxlength="6"
    autocomplete="one-time-code"
    aria-describedby="otp-help otp-error"
    required
  />
  <div id="otp-help">
    Code sent to +91 ******* 123
  </div>
  <div id="otp-error" 
       role="alert" 
       aria-live="assertive">
    <!-- Error messages here -->
  </div>
</div>`}
            </pre>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: JavaScript Logic</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`// Countdown Timer
let timeLeft = 300; // 5 minutes
const timer = setInterval(() => {
  timeLeft--;
  updateTimerDisplay(timeLeft);
  
  if (timeLeft <= 0) {
    clearInterval(timer);
    handleExpiry();
  }
  
  // Announce at intervals
  if (timeLeft === 30 || timeLeft === 10) {
    announceToScreenReader(
      \`Code expires in \${timeLeft} seconds\`
    );
  }
}, 1000);

// Paste Handler
input.addEventListener('paste', (e) => {
  const paste = e.clipboardData
    .getData('text')
    .replace(/\\s/g, ''); // Remove spaces
  
  if (/^\\d{6}$/.test(paste)) {
    populateFields(paste);
    e.preventDefault();
  }
});`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CODE DOWNLOADS SECTION ====================

const OTP_REACT_CODE = `import React, { useState, useEffect, useRef, useCallback } from 'react';

interface OTPVerificationProps {
  length?: number;
  onComplete?: (otp: string) => void;
  contactInfo?: string;
}

export function OTPVerificationPage({ length = 6, onComplete, contactInfo = '+91 98XXX XX210' }: OTPVerificationProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(120);
  const [verified, setVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) { const t = setTimeout(() => setTimer(t => t - 1), 1000); return () => clearTimeout(t); }
  }, [timer]);

  useEffect(() => { inputRefs.current[0]?.focus(); }, []);

  const handleChange = useCallback((index: number, value: string) => {
    if (!/^\\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < length - 1) inputRefs.current[index + 1]?.focus();
    if (newOtp.every(d => d !== '')) {
      const code = newOtp.join('');
      onComplete?.(code);
    }
  }, [otp, length, onComplete]);

  const handleKeyDown = useCallback((index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }, [otp]);

  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\\D/g, '').slice(0, length);
    const newOtp = [...otp];
    pasted.split('').forEach((ch, i) => { newOtp[i] = ch; });
    setOtp(newOtp);
    inputRefs.current[Math.min(pasted.length, length - 1)]?.focus();
  }, [otp, length]);

  const handleVerify = async () => {
    const code = otp.join('');
    if (code.length !== length) { setError('Please enter the complete OTP'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp: code }),
      });
      if (!res.ok) { const d = await res.json(); setError(d.message || 'Invalid OTP. Please try again.'); return; }
      setVerified(true);
    } catch { setError('Network error. Please try again.'); }
    finally { setLoading(false); }
  };

  const handleResend = async () => {
    setLoading(true); setError('');
    try {
      await fetch('/api/auth/resend-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
      setTimer(120); setOtp(Array(length).fill(''));
      inputRefs.current[0]?.focus();
    } catch { setError('Failed to resend OTP'); }
    finally { setLoading(false); }
  };

  if (verified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Verified Successfully</h2>
          <p className="text-muted-foreground">Your identity has been confirmed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Verify OTP</h1>
        <p className="text-sm text-muted-foreground mb-6">Enter the {length}-digit code sent to {contactInfo}</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        <div className="flex justify-center gap-3 mb-6" onPaste={handlePaste}>
          {otp.map((digit, i) => (
            <input key={i} ref={el => { inputRefs.current[i] = el; }} type="text" inputMode="numeric" maxLength={1} value={digit} onChange={e => handleChange(i, e.target.value)} onKeyDown={e => handleKeyDown(i, e)} className="w-12 h-14 text-center text-xl font-bold border-2 border-border rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors" aria-label={\`Digit \${i + 1} of \${length}\`} />
          ))}
        </div>
        <button onClick={handleVerify} disabled={loading || otp.some(d => !d)} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60 mb-4">{loading ? 'Verifying...' : 'Verify'}</button>
        <div className="text-center text-sm">
          {timer > 0 ? (
            <p className="text-muted-foreground">Resend OTP in <span className="font-semibold text-foreground">{Math.floor(timer/60)}:{String(timer%60).padStart(2,'0')}</span></p>
          ) : (
            <button onClick={handleResend} disabled={loading} className="text-primary hover:underline font-semibold">Resend OTP</button>
          )}
        </div>
      </div>
    </div>
  );
}`;

const OTP_ANGULAR_CODE = `import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-otp-verification',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Verify OTP</h1>
        <p class="text-sm text-muted-foreground mb-6">Enter the 6-digit code sent to your registered contact</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
        <div *ngIf="!verified">
          <div class="flex justify-center gap-3 mb-6">
            <input *ngFor="let d of digits; let i = index" [id]="'otp-'+i" type="text" inputMode="numeric" maxlength="1" (input)="onInput(i, $event)" (keydown)="onKeyDown(i, $event)" class="w-12 h-14 text-center text-xl font-bold border-2 border-border rounded-xl focus:border-primary" [attr.aria-label]="'Digit '+(i+1)+' of 6'" />
          </div>
          <button (click)="verify()" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60 mb-4">{{ loading ? 'Verifying...' : 'Verify' }}</button>
          <div class="text-center text-sm">
            <p *ngIf="timer > 0" class="text-muted-foreground">Resend in {{ formatTime() }}</p>
            <button *ngIf="timer === 0" (click)="resend()" class="text-primary hover:underline font-semibold">Resend OTP</button>
          </div>
        </div>
        <div *ngIf="verified" class="text-center py-8">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <h2 class="text-xl font-bold text-foreground mb-2">Verified Successfully</h2>
        </div>
      </div>
    </div>
  \`
})
export class OTPVerificationComponent implements OnInit, OnDestroy {
  digits = ['', '', '', '', '', ''];
  timer = 120;
  loading = false;
  error = '';
  verified = false;
  private interval: any;

  ngOnInit() {
    this.startTimer();
    setTimeout(() => document.getElementById('otp-0')?.focus(), 100);
  }

  ngOnDestroy() { clearInterval(this.interval); }

  startTimer() {
    this.timer = 120;
    this.interval = setInterval(() => { if (this.timer > 0) this.timer--; else clearInterval(this.interval); }, 1000);
  }

  formatTime() { return Math.floor(this.timer/60) + ':' + String(this.timer%60).padStart(2, '0'); }

  onInput(index: number, event: Event) {
    const val = (event.target as HTMLInputElement).value;
    if (!/^\\d?$/.test(val)) { (event.target as HTMLInputElement).value = ''; return; }
    this.digits[index] = val;
    if (val && index < 5) document.getElementById('otp-'+(index+1))?.focus();
  }

  onKeyDown(index: number, event: KeyboardEvent) {
    if (event.key === 'Backspace' && !this.digits[index] && index > 0) {
      document.getElementById('otp-'+(index-1))?.focus();
    }
  }

  async verify() {
    const code = this.digits.join('');
    if (code.length !== 6) { this.error = 'Enter complete OTP'; return; }
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/auth/verify-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ otp: code }) });
      if (!res.ok) { this.error = 'Invalid OTP'; return; }
      this.verified = true;
    } catch { this.error = 'Network error'; }
    finally { this.loading = false; }
  }

  async resend() {
    this.loading = true;
    try {
      await fetch('/api/auth/resend-otp', { method: 'POST' });
      this.digits = ['', '', '', '', '', ''];
      this.startTimer();
      document.getElementById('otp-0')?.focus();
    } catch { this.error = 'Failed to resend'; }
    finally { this.loading = false; }
  }
}`;

const OTP_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OTP Verification — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 28rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
    .subtitle { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
    .otp-row { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.5rem; }
    .otp-input { width: 3rem; height: 3.5rem; text-align: center; font-size: 1.25rem; font-weight: 700; border: 2px solid #d1d5db; border-radius: 0.75rem; outline: none; }
    .otp-input:focus { border-color: #005196; box-shadow: 0 0 0 2px rgba(0,81,150,0.2); }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; margin-bottom: 1rem; }
    .btn:hover { background: #004178; }
    .btn:disabled { opacity: 0.6; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .timer { text-align: center; font-size: 0.875rem; color: #6b7280; }
    .resend { background: none; border: none; color: #005196; font-weight: 600; cursor: pointer; font-size: 0.875rem; }
    .resend:hover { text-decoration: underline; }
    .success { text-align: center; padding: 2rem 0; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Verify OTP</h1>
    <p class="subtitle">Enter the 6-digit code sent to your registered contact</p>
    <div id="error" class="error" role="alert"></div>
    <div id="otpForm">
      <div class="otp-row" id="otpRow"></div>
      <button class="btn" id="verifyBtn" onclick="verifyOtp()">Verify</button>
      <div class="timer" id="timerArea"></div>
    </div>
    <div id="successArea" class="hidden success">
      <div style="width:4rem;height:4rem;background:#dcfce7;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#16a34a"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
      </div>
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">Verified Successfully</h2>
      <p style="color:#6b7280">Your identity has been confirmed.</p>
    </div>
  </div>
  <script>
    const LENGTH = 6;
    let timer = 120, timerInterval;
    const row = document.getElementById('otpRow');
    for (let i = 0; i < LENGTH; i++) {
      const inp = document.createElement('input');
      inp.type = 'text'; inp.inputMode = 'numeric'; inp.maxLength = 1;
      inp.className = 'otp-input'; inp.id = 'otp' + i;
      inp.setAttribute('aria-label', 'Digit ' + (i+1) + ' of ' + LENGTH);
      inp.addEventListener('input', function() {
        if (!/^\\d?$/.test(this.value)) { this.value = ''; return; }
        if (this.value && i < LENGTH-1) document.getElementById('otp'+(i+1)).focus();
      });
      inp.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && !this.value && i > 0) document.getElementById('otp'+(i-1)).focus();
      });
      inp.addEventListener('paste', function(e) {
        e.preventDefault();
        const text = e.clipboardData.getData('text').replace(/\\D/g, '').slice(0, LENGTH);
        text.split('').forEach((ch, idx) => { const el = document.getElementById('otp'+idx); if (el) el.value = ch; });
        document.getElementById('otp'+Math.min(text.length, LENGTH-1)).focus();
      });
      row.appendChild(inp);
    }
    document.getElementById('otp0').focus();
    function startTimer() {
      timer = 120;
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        timer--;
        const area = document.getElementById('timerArea');
        if (timer > 0) { area.innerHTML = 'Resend in ' + Math.floor(timer/60) + ':' + String(timer%60).padStart(2,'0'); }
        else { clearInterval(timerInterval); area.innerHTML = '<button class="resend" onclick="resendOtp()">Resend OTP</button>'; }
      }, 1000);
    }
    startTimer();
    function showError(msg) { const e = document.getElementById('error'); e.textContent = msg; e.style.display = 'block'; }
    function hideError() { document.getElementById('error').style.display = 'none'; }
    async function verifyOtp() {
      hideError();
      let code = '';
      for (let i = 0; i < LENGTH; i++) code += document.getElementById('otp'+i).value;
      if (code.length !== LENGTH) { showError('Enter complete OTP'); return; }
      const btn = document.getElementById('verifyBtn');
      btn.disabled = true; btn.textContent = 'Verifying...';
      try {
        const res = await fetch('/api/auth/verify-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ otp: code }) });
        if (!res.ok) { showError('Invalid OTP'); return; }
        document.getElementById('otpForm').classList.add('hidden');
        document.getElementById('successArea').classList.remove('hidden');
      } catch { showError('Network error'); }
      finally { btn.disabled = false; btn.textContent = 'Verify'; }
    }
    async function resendOtp() {
      try {
        await fetch('/api/auth/resend-otp', { method: 'POST' });
        for (let i = 0; i < LENGTH; i++) document.getElementById('otp'+i).value = '';
        document.getElementById('otp0').focus();
        startTimer();
      } catch { showError('Failed to resend'); }
    }
  </script>
</body>
</html>`;

function CodeDownloadsSection() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks + Auto-advance', code: OTP_REACT_CODE, filename: 'OTPVerificationPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: OTP_ANGULAR_CODE, filename: 'otp-verification.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: OTP_HTML_CODE, filename: 'otp-verification.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready OTP Verification implementations for your framework.</p>
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
                <div className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
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
            <h3 className="font-bold text-foreground">Conformance Level</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-red-100 border-2 border-red-300 rounded text-red-800 font-bold text-sm">
                MANDATORY
              </div>
            </div>
            <div className="text-sm space-y-2 text-muted-foreground">
              <p>All government digital services using OTP verification MUST follow this pattern.</p>
              <p className="font-bold text-foreground mt-3">Compliance Required For:</p>
              <ul className="space-y-1 ml-4">
                <li>• Citizen-facing services</li>
                <li>• Authentication flows</li>
                <li>• Transaction verification</li>
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
              <p className="text-muted-foreground">identity@ux4g.gov.in</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Support Hours:</p>
              <p className="text-muted-foreground">Mon-Fri, 9 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Support & Escalation</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-foreground mb-3">Implementation Questions</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> support@ux4g.gov.in</p>
                <p><strong>Slack:</strong> #ux4g-identity-patterns</p>
                <p><strong>Documentation:</strong> docs.ux4g.gov.in/otp</p>
                <p><strong>Response Time:</strong> 24 hours</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Compliance Issues</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> compliance@ux4g.gov.in</p>
                <p><strong>Escalation:</strong> UX4G Governance Board</p>
                <p><strong>Audit Request:</strong> audit@ux4g.gov.in</p>
                <p><strong>Response Time:</strong> 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-yellow-600" />
          Planned Updates & Roadmap
        </h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div>
            <p className="font-bold text-foreground">Q3 2026: Mobile-first enhancements</p>
            <p>Biometric OTP confirmation, improved SMS auto-read</p>
          </div>
          <div>
            <p className="font-bold text-foreground">Q4 2026: Multilingual support</p>
            <p>OTP messages in 22 official Indian languages</p>
          </div>
          <div>
            <p className="font-bold text-foreground">Q1 2027: Advanced security</p>
            <p>Device fingerprinting, behavioral analytics</p>
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
          <p className="font-bold text-foreground mb-1">OTP Length</p>
          <p className="text-muted-foreground">6 digits (numeric only)</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Validity Period</p>
          <p className="text-muted-foreground">5-10 minutes</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Max Attempts</p>
          <p className="text-muted-foreground">3 attempts per OTP</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Lockout Duration</p>
          <p className="text-muted-foreground">15 minutes after failures</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Resend Cooldown</p>
          <p className="text-muted-foreground">30 seconds between requests</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Input Mode</p>
          <p className="text-muted-foreground">inputmode="numeric"</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Autocomplete</p>
          <p className="text-muted-foreground">autocomplete="one-time-code"</p>
        </div>
      </div>
    </div>
  );
}

function ChildPatterns() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Child Patterns</h3>
      </div>
      <div className="p-4 space-y-2">
        <Link 
          to="/patterns/identity/mobile-otp"
          className="block p-3 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Smartphone size={16} className="text-primary" />
            <span className="font-bold text-sm text-foreground">Mobile OTP</span>
          </div>
          <p className="text-xs text-muted-foreground">SMS-based verification</p>
        </Link>
        <Link 
          to="/patterns/identity/otp-verification"
          className="block p-3 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Mail size={16} className="text-primary" />
            <span className="font-bold text-sm text-foreground">Email OTP</span>
          </div>
          <p className="text-xs text-muted-foreground">Email-based verification</p>
        </Link>
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
        <RelatedPatternLink to="/patterns/identity/sign-up" text="Sign Up Pattern" />
        <RelatedPatternLink to="/patterns/identity/sign-in" text="Sign In Pattern" />
        <RelatedPatternLink to="/patterns/identity/account-recovery" text="Account Recovery" />
        <RelatedPatternLink to="/patterns/identity/forgot-password" text="Forgot Password" />
        <RelatedPatternLink to="/patterns/identity/session-timeout" text="Session Timeout" />
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
        <ResourceLink icon={<FileText size={14} />} text="SMS Gateway Guidelines" />
        <ResourceLink icon={<Code size={14} />} text="Web OTP API Docs" />
        <ResourceLink icon={<Shield size={14} />} text="Security Best Practices" />
        <ResourceLink icon={<Eye size={14} />} text="WCAG 2.1 Compliance" />
        <ResourceLink icon={<HelpCircle size={14} />} text="Implementation FAQ" />
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
            <h3 className="font-bold text-foreground">{title}</h3>
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

function ValidationRule({ rule, description, timing }: { rule: string; description: string; timing: string }) {
  return (
    <div className="bg-card border border-border rounded p-3">
      <p className="font-bold text-foreground mb-1">{rule}</p>
      <p className="text-muted-foreground mb-2">{description}</p>
      <p className="text-xs text-muted-foreground">
        <Clock size={12} className="inline mr-1" />
        <span className="font-bold">Timing:</span> {timing}
      </p>
    </div>
  );
}

function TimerState({ time, state, display, action }: { time: string; state: string; display: string; action: string }) {
  return (
    <div className="bg-card border border-border rounded p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-foreground font-mono">{time}</span>
        <span className="text-xs font-bold text-muted-foreground px-2 py-1 bg-muted rounded">{state}</span>
      </div>
      <p className="text-muted-foreground mb-1 text-xs">{display}</p>
      <p className="text-muted-foreground text-xs">
        <ArrowRight size={10} className="inline mr-1" />
        {action}
      </p>
    </div>
  );
}

function ResendStep({ step, action, result }: { step: string; action: string; result: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">
        {step}
      </div>
      <div>
        <p className="font-bold text-foreground text-xs">{action}</p>
        <p className="text-muted-foreground text-xs">{result}</p>
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

function ComplianceItem({ criterion, status, note }: { criterion: string; status: 'pass' | 'partial' | 'fail'; note: string }) {
  const statusColor = status === 'pass' ? 'text-green-600' : status === 'partial' ? 'text-yellow-600' : 'text-red-600';
  const statusIcon = status === 'pass' ? <CheckCircle size={14} /> : status === 'partial' ? <AlertCircle size={14} /> : <XCircle size={14} />;
  
  return (
    <div className="bg-background border border-border rounded p-3">
      <div className="flex items-center gap-2 mb-1">
        <span className={statusColor}>{statusIcon}</span>
        <span className="font-bold text-foreground text-xs">{criterion}</span>
      </div>
      <p className="text-muted-foreground text-xs">{note}</p>
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

function ResourceLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a href="#" className="flex items-center gap-2 p-2 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors text-foreground">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </a>
  );
}
