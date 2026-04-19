import React from "react";
import { Link } from "react-router";
import { RefreshCw, Shield, CheckCircle, AlertCircle, Info, XCircle, ArrowRight, ChevronRight, Clock, HelpCircle, Check, X, Phone, Mail, User, FileText, Eye, Download, Copy } from "lucide-react";

export default function AccountRecoveryPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-purple-100 border-2 border-purple-300 rounded flex items-center justify-center">
                  <RefreshCw size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Identity & Access Pattern</div>
                  <h1 className="text-3xl font-bold text-foreground">Account Recovery</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Comprehensive recovery pattern for complex account access problems beyond standard password reset. 
                Supports lost mobile, lost email, changed contacts, verification failures, and assisted recovery 
                with clear escalation paths and human support integration.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-002-07</span></span>
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
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 dark:text-green-300 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded text-orange-700 font-bold text-xs text-center uppercase">
                Support<br/>Intensive
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
              { id: "recovery-paths", label: "Recovery Paths" },
              { id: "verification", label: "Verification" },
              { id: "escalation", label: "Escalation" },
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
            <RecoveryPathsSection />
            <VerificationSection />
            <EscalationSection />
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
            <div>UX4G Design System Platform • Account Recovery Pattern</div>
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
              Enable users to regain account access when standard recovery methods fail. Provides multiple 
              verification paths, assisted support, and human escalation for complex scenarios while 
              maintaining security and preventing unauthorized access.
            </p>
            <div className="space-y-2">
              <InfoItem icon={<RefreshCw size={16} className="text-primary" />} text="Restore access for locked accounts" />
              <InfoItem icon={<Shield size={16} className="text-primary" />} text="Verify identity through multiple channels" />
              <InfoItem icon={<HelpCircle size={16} className="text-primary" />} text="Provide human support for edge cases" />
              <InfoItem icon={<CheckCircle size={16} className="text-green-600" />} text="Maintain security throughout process" />
            </div>
          </div>
        </div>

        {/* User Goals */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">User Goals</h3>
          </div>
          <div className="p-6 space-y-2">
            <GoalItem text="Regain access to locked account" />
            <GoalItem text="Update changed contact information" />
            <GoalItem text="Verify identity through alternative means" />
            <GoalItem text="Understand recovery process and timeline" />
            <GoalItem text="Get human help when needed" />
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
            <WhenItem text="Lost access to registered mobile number" />
            <WhenItem text="Lost access to registered email" />
            <WhenItem text="Password reset failed or unavailable" />
            <WhenItem text="OTP not received repeatedly" />
            <WhenItem text="Identity details mismatched" />
            <WhenItem text="Account locked after multiple failures" />
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
            <WhenNotItem text="Standard password reset works" />
            <WhenNotItem text="User has access to registered contacts" />
            <WhenNotItem text="First-time sign-up (use Sign Up pattern)" />
            <WhenNotItem text="Minor login issues (session timeout)" />
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

      <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
        <div className="space-y-4">
          <FlowStep 
            number={1}
            title="Identify Recovery Issue"
            description="User selects specific problem: lost mobile, lost email, changed details, etc."
            state="User Selection"
          />
          <FlowStep 
            number={2}
            title="Account Lookup"
            description="User provides any known identifiers: username, email, mobile, Aadhaar (if applicable)"
            state="Account Search"
          />
          <FlowStep 
            number={3}
            title="Validate Account Exists"
            description="System locates account; shows masked partial info for user confirmation"
            state="System Validation"
            branches={true}
          />
          
          {/* Automated Path */}
          <div className="ml-12 pl-6 border-l-4 border-green-500 space-y-4">
            <FlowStep 
              number="3a"
              title="Automated Verification Available"
              description="Alternative contact or document verification possible"
              state="Self-Service"
              variant="success"
            />
            <FlowStep 
              number={4}
              title="Complete Verification"
              description="OTP to alternate contact, document upload, or security questions"
              state="Verification"
              variant="success"
            />
            <FlowStep 
              number={5}
              title="Update Contact Info"
              description="User updates mobile/email; verify new contact before activation"
              state="Update"
              variant="success"
            />
            <FlowStep 
              number={6}
              title="Recovery Complete"
              description="Account unlocked; user can sign in with new/reset credentials"
              state="Success"
              variant="success"
            />
          </div>

          {/* Assisted Path */}
          <div className="ml-12 pl-6 border-l-4 border-orange-500 space-y-4">
            <FlowStep 
              number="3b"
              title="Manual Verification Required"
              description="Cannot verify automatically; escalate to human support"
              state="Escalation"
              variant="warning"
            />
            <FlowStep 
              number={7}
              title="Submit Support Request"
              description="User provides details, uploads documents, creates support ticket"
              state="Pending"
              variant="warning"
            />
            <FlowStep 
              number={8}
              title="Support Team Review"
              description="Officer reviews case, validates identity (1-3 business days)"
              state="In Review"
              variant="warning"
            />
            <FlowStep 
              number={9}
              title="Recovery Decision"
              description="Approve recovery, request more info, or deny (with appeal path)"
              state="Resolution"
              variant="warning"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Choose Recovery Problem */}
        <ScreenExample
          title="Choose Recovery Problem"
          variant="default"
        >
          <div className="space-y-4">
            <div className="text-center mb-4">
              <HelpCircle size={40} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">What problem are you facing?</h3>
            </div>
            <div className="space-y-2">
              {[
                { icon: Phone, text: "Lost access to mobile number" },
                { icon: Mail, text: "Lost access to email" },
                { icon: RefreshCw, text: "Cannot receive OTP" },
                { icon: User, text: "Identity details mismatch" },
                { icon: XCircle, text: "Account locked after failed attempts" }
              ].map((item, i) => (
                <button key={i} className="w-full px-4 py-3 border-2 border-border rounded hover:bg-blue-50 dark:bg-blue-900/20 hover:border-blue-300 text-left flex items-center gap-3">
                  <item.icon size={20} className="text-primary" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </button>
              ))}
            </div>
          </div>
        </ScreenExample>

        {/* Account Lookup */}
        <ScreenExample
          title="Account Lookup"
          variant="info"
        >
          <div className="space-y-4">
            <div className="text-center mb-4">
              <User size={40} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Find Your Account</h3>
              <p className="text-sm text-muted-foreground">
                Enter any information you remember
              </p>
            </div>
            <div className="space-y-3">
              <input aria-label="Username (if known)" type="text" 
                placeholder="Username (if known)"
                className="w-full px-4 py-3 border-2 border-border rounded"
              />
              <input aria-label="Email or Mobile Number" type="text" 
                placeholder="Email or Mobile Number"
                className="w-full px-4 py-3 border-2 border-border rounded"
              />
              <input aria-label="Full Name (as registered)" type="text" 
                placeholder="Full Name (as registered)"
                className="w-full px-4 py-3 border-2 border-border rounded"
              />
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
                Find Account
              </button>
            </div>
          </div>
        </ScreenExample>

        {/* Alternate Verification */}
        <ScreenExample
          title="Alternate Verification"
          variant="success"
        >
          <div className="space-y-4">
            <div className="text-center mb-4">
              <Shield size={40} className="text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Verify Your Identity</h3>
              <p className="text-sm text-muted-foreground">
                Choose an alternative verification method
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3 text-sm mb-3">
              <p className="font-bold text-foreground mb-1">Account Found</p>
              <p className="text-muted-foreground">Username: r***a.sharma</p>
              <p className="text-muted-foreground">Registered: June 2024</p>
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-4 border-2 border-border rounded hover:bg-blue-50 dark:bg-blue-900/20 text-left">
                <p className="font-bold text-sm text-foreground">Send OTP to alternate mobile</p>
                <p className="text-xs text-muted-foreground">If you have access to: +91 ******* 456</p>
              </button>
              <button className="w-full px-4 py-4 border-2 border-border rounded hover:bg-blue-50 dark:bg-blue-900/20 text-left">
                <p className="font-bold text-sm text-foreground">Upload identity document</p>
                <p className="text-xs text-muted-foreground">Aadhaar, PAN, Driving License, or Passport</p>
              </button>
              <button className="w-full px-4 py-4 border-2 border-border rounded hover:bg-blue-50 dark:bg-blue-900/20 text-left">
                <p className="font-bold text-sm text-foreground">Contact support team</p>
                <p className="text-xs text-muted-foreground">Get help from our recovery specialists</p>
              </button>
            </div>
          </div>
        </ScreenExample>

        {/* Recovery Pending */}
        <ScreenExample
          title="Recovery Request Pending"
          variant="warning"
        >
          <div className="space-y-4">
            <div className="text-center">
              <Clock size={40} className="text-yellow-600 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Recovery In Progress</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your request is being reviewed
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded p-4 space-y-3 text-sm">
              <div>
                <p className="font-bold text-foreground">Request ID: REC-2026-04-12345</p>
                <p className="text-muted-foreground">Submitted: April 10, 2026 at 2:30 PM</p>
              </div>
              <div>
                <p className="font-bold text-foreground">Status: Under Review</p>
                <p className="text-muted-foreground">Expected resolution: 1-3 business days</p>
              </div>
              <div>
                <p className="font-bold text-foreground">Next Steps:</p>
                <ul className="ml-4 space-y-1 text-muted-foreground">
                  <li>• Support team will verify your documents</li>
                  <li>• You'll receive email/SMS with updates</li>
                  <li>• Check status using Request ID above</li>
                </ul>
              </div>
            </div>
            <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded">
              Track Request Status
            </button>
          </div>
        </ScreenExample>

        {/* Unable to Recover */}
        <ScreenExample
          title="Unable to Auto-Recover"
          variant="error"
        >
          <div className="space-y-4">
            <div className="text-center">
              <XCircle size={40} className="text-red-600 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Cannot Verify Automatically</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We need additional information<br/>
                to recover your account
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-300 rounded p-4 text-sm text-muted-foreground space-y-2">
              <p className="font-bold text-red-800 dark:text-red-300">Why this happened:</p>
              <ul className="ml-4 space-y-1">
                <li>• No access to any registered contact methods</li>
                <li>• Identity details couldn't be verified</li>
                <li>• Additional security verification required</li>
              </ul>
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
                Submit Manual Recovery Request
              </button>
              <button className="w-full px-4 py-3 border-2 border-primary bg-card text-primary font-bold rounded">
                Contact Support Helpline
              </button>
            </div>
          </div>
        </ScreenExample>

        {/* Escalation to Support */}
        <ScreenExample
          title="Escalate to Support"
          variant="info"
        >
          <div className="space-y-4">
            <div className="text-center mb-4">
              <HelpCircle size={40} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Get Help from Support</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3">
                <p className="font-bold text-foreground mb-2">What to Prepare:</p>
                <ul className="ml-4 space-y-1 text-muted-foreground">
                  <li>• Government-issued photo ID</li>
                  <li>• Account registration details you remember</li>
                  <li>• Proof of contact change (if applicable)</li>
                </ul>
              </div>
              <div>
                <label className="block font-bold text-foreground mb-2">Describe your issue</label>
                <textarea aria-label="Please explain your recovery issue in detail..." rows={4}
                  className="w-full px-4 py-3 border-2 border-border rounded"
                  placeholder="Please explain your recovery issue in detail..."
                ></textarea>
              </div>
              <div>
                <label className="block font-bold text-foreground mb-2">Upload supporting documents</label>
                <div className="border-2 border-dashed border-border rounded p-6 text-center">
                  <FileText size={24} className="text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Click to upload or drag and drop</p>
                </div>
              </div>
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
                Submit Recovery Request
              </button>
            </div>
          </div>
        </ScreenExample>

        {/* Recovery Success */}
        <ScreenExample
          title="Account Recovered"
          variant="success"
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Account Recovered!</h3>
              <p className="text-sm text-muted-foreground">
                Your account has been successfully recovered
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 rounded p-4 text-sm text-left">
              <p className="font-bold text-foreground mb-2">What's Updated:</p>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• New mobile number: +91 ******* 789</li>
                <li>• Password has been reset</li>
                <li>• All previous sessions logged out</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3 text-sm text-muted-foreground">
              <Info size={14} className="inline mr-2" />
              For security, please update your password after signing in
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Continue to Sign In
            </button>
          </div>
        </ScreenExample>
      </div>
    </section>
  );
}

// ==================== RECOVERY PATHS SECTION ====================

function RecoveryPathsSection() {
  return (
    <section id="recovery-paths" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Recovery Path Strategies</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RecoveryPath 
          title="Lost Mobile Number"
          steps={[
            "Send OTP to registered email (if available)",
            "Upload ID document for verification",
            "Video call verification with support",
            "Visit service center with ID proof"
          ]}
          timeline="Immediate - 3 days"
        />
        <RecoveryPath 
          title="Lost Email Access"
          steps={[
            "Send OTP to registered mobile",
            "Answer security questions",
            "Verify via alternate email (if added)",
            "Document upload + manual review"
          ]}
          timeline="Immediate - 2 days"
        />
        <RecoveryPath 
          title="Lost Both Contacts"
          steps={[
            "Upload government ID document",
            "Submit detailed recovery form",
            "Manual verification by support team",
            "Phone call or in-person verification"
          ]}
          timeline="2-5 business days"
        />
        <RecoveryPath 
          title="Identity Mismatch"
          steps={[
            "Review registration details",
            "Upload supporting documents",
            "Explain discrepancy in detail",
            "Officer review and validation"
          ]}
          timeline="1-3 business days"
        />
        <RecoveryPath 
          title="Account Locked"
          steps={[
            "Wait for automatic unlock (24 hours)",
            "Request immediate unlock via email",
            "Verify identity via OTP",
            "Contact support for assistance"
          ]}
          timeline="Immediate - 24 hours"
        />
        <RecoveryPath 
          title="Changed Phone/Email"
          steps={[
            "Sign in with old credentials",
            "Verify old contact (if still accessible)",
            "Update to new contact",
            "Verify new contact before activation"
          ]}
          timeline="Immediate"
        />
      </div>
    </section>
  );
}

// ==================== VERIFICATION SECTION ====================

function VerificationSection() {
  return (
    <section id="verification" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Verification Methods</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Automated Verification</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <VerificationMethod 
              method="OTP to Alternate Contact"
              description="Send code to secondary mobile/email if registered"
              strength="Strong"
            />
            <VerificationMethod 
              method="Security Questions"
              description="Answer pre-set personal security questions"
              strength="Medium"
            />
            <VerificationMethod 
              method="Document OCR Verification"
              description="Auto-validate uploaded ID against stored details"
              strength="Strong"
            />
            <VerificationMethod 
              method="Transaction History Match"
              description="Confirm recent account activity details"
              strength="Medium"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Manual Verification</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <VerificationMethod 
              method="Document Review"
              description="Officer reviews uploaded ID documents"
              strength="Strong"
            />
            <VerificationMethod 
              method="Video KYC"
              description="Live video call with support agent"
              strength="Very Strong"
            />
            <VerificationMethod 
              method="In-Person Verification"
              description="Visit service center with original documents"
              strength="Very Strong"
            />
            <VerificationMethod 
              method="Phone Call Verification"
              description="Support team calls user to verify details"
              strength="Medium"
            />
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <AlertCircle size={20} className="text-yellow-600" />
          Security Considerations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <p className="font-bold text-foreground mb-1">Risk Assessment</p>
            <p>Evaluate account value and sensitivity; higher-value accounts require stronger verification</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">Fraud Detection</p>
            <p>Monitor for suspicious recovery patterns; flag multiple recovery attempts</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">Time Delays</p>
            <p>Introduce waiting periods for high-risk recoveries (24-72 hours)</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">Audit Trail</p>
            <p>Log all recovery attempts, verification methods, and officer decisions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== ESCALATION SECTION ====================

function EscalationSection() {
  return (
    <section id="escalation" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Support & Escalation</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Escalation Path & Timeline</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <EscalationLevel 
              level="Level 1: Self-Service"
              description="Automated recovery via OTP, security questions, or document upload"
              timeline="Immediate"
              sla="Real-time"
            />
            <EscalationLevel 
              level="Level 2: Tier 1 Support"
              description="Email/chat support; review standard recovery cases"
              timeline="24-48 hours"
              sla="Response within 24 hours"
            />
            <EscalationLevel 
              level="Level 3: Tier 2 Support"
              description="Specialist team for complex cases; phone/video verification"
              timeline="2-3 business days"
              sla="Resolution within 72 hours"
            />
            <EscalationLevel 
              level="Level 4: Senior Review"
              description="Manager approval for high-risk or disputed cases"
              timeline="3-5 business days"
              sla="Final decision within 5 days"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Support Channels</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <SupportChannel 
              channel="Email Support"
              contact="recovery@service.gov.in"
              hours="24/7 (Response: 24 hrs)"
            />
            <SupportChannel 
              channel="Helpline"
              contact="1800-XXX-YYYY (Toll-free)"
              hours="Mon-Sat, 9 AM - 6 PM IST"
            />
            <SupportChannel 
              channel="Live Chat"
              contact="Available on portal"
              hours="Mon-Fri, 9 AM - 5 PM IST"
            />
            <SupportChannel 
              channel="Service Centers"
              contact="Find nearest center"
              hours="Mon-Fri, 10 AM - 4 PM"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-6 py-4">
            <h3 className="font-bold text-foreground">SLA Commitments</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <SLAItem 
              metric="First Response Time"
              target="&lt;24 hours for email/chat"
            />
            <SLAItem 
              metric="Automated Recovery"
              target="Immediate (if verification succeeds)"
            />
            <SLAItem 
              metric="Manual Review Cases"
              target="72 hours for standard cases"
            />
            <SLAItem 
              metric="Complex Cases"
              target="5 business days maximum"
            />
            <SLAItem 
              metric="Status Updates"
              target="Every 48 hours via email/SMS"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Form Accessibility</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Clear Instructions"
              description="Plain language guidance for each recovery step; avoid technical jargon"
            />
            <AccessibilityItem 
              label="Progress Indication"
              description="Show 'Step X of Y' throughout multi-step recovery process"
            />
            <AccessibilityItem 
              label="Error Prevention"
              description="Validate inputs in real-time; show requirements before submission"
            />
            <AccessibilityItem 
              label="Status Updates"
              description="Screen reader announcements for 'Request submitted', 'Under review', etc."
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Assisted Access</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Phone Support"
              description="Toll-free helpline for users unable to complete online recovery"
            />
            <AccessibilityItem 
              label="In-Person Assistance"
              description="Service centers with trained staff for complex recovery cases"
            />
            <AccessibilityItem 
              label="Document Help"
              description="Guidance on acceptable ID documents and upload formats"
            />
            <AccessibilityItem 
              label="Translation Support"
              description="Recovery forms and support available in regional languages"
            />
          </div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-purple-600" />
          Empathy & Plain Language
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Use reassuring, helpful tone: 'We'll help you recover your account' not 'Account recovery request'" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Explain timelines clearly: '1-3 business days' not 'pending review'" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Provide next steps: 'Check your email for updates' not just 'Request submitted'" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Offer alternatives: 'Or you can call us at...' for every self-service step" />
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
            category="Recovery Request Management"
            requirements={[
              "Create support ticket system for tracking recovery cases",
              "Generate unique request ID for each recovery attempt",
              "Store request status, timeline, and officer notes",
              "Send email/SMS notifications at each status change",
              "Provide user dashboard to check recovery status",
              "Implement SLA tracking and alert system for overdue cases"
            ]}
          />
          <ImplementationItem 
            category="Document Processing"
            requirements={[
              "Support common formats: PDF, JPG, PNG (max 5MB per file)",
              "Implement OCR for automatic ID extraction (Aadhaar, PAN, etc.)",
              "Validate document authenticity where possible",
              "Encrypt uploaded documents at rest and in transit",
              "Automatically delete documents after recovery (GDPR compliance)",
              "Provide document upload guidelines and examples"
            ]}
          />
          <ImplementationItem 
            category="Security & Fraud Prevention"
            requirements={[
              "Flag accounts with multiple recovery attempts (>3 in 30 days)",
              "Implement CAPTCHA after failed recovery attempts",
              "Monitor for suspicious patterns (location, device, timing)",
              "Require manager approval for high-value account recovery",
              "Log all recovery actions with IP, timestamp, user agent",
              "Notify original email/mobile when recovery initiated"
            ]}
          />
          <ImplementationItem 
            category="Officer Dashboard"
            requirements={[
              "Queue management: assign cases to support agents",
              "Case details view: user info, recovery reason, documents",
              "Action buttons: Approve, Reject, Request More Info",
              "Internal notes and communication thread",
              "Escalation workflow to senior officers",
              "Performance metrics: cases resolved, avg resolution time"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

// ==================== CODE DOWNLOADS SECTION ====================

const RECOVERY_REACT_CODE = `import React, { useState, useCallback } from 'react';

type RecoveryMethod = 'email' | 'mobile' | 'aadhaar' | 'support';
type Step = 'method' | 'verify' | 'reset' | 'done';

export function AccountRecoveryPage() {
  const [step, setStep] = useState<Step>('method');
  const [method, setMethod] = useState<RecoveryMethod>('email');
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSelectMethod = useCallback(async () => {
    if (!identifier.trim()) { setError('This field is required'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/auth/recovery/initiate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method, identifier }),
      });
      if (!res.ok) { const d = await res.json(); setError(d.message || 'Failed to initiate recovery'); return; }
      setStep('verify');
    } catch { setError('Network error. Please try again.'); }
    finally { setLoading(false); }
  }, [method, identifier]);

  const handleVerify = useCallback(async () => {
    if (otp.length < 6) { setError('Enter the complete verification code'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/auth/recovery/verify', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method, identifier, otp }),
      });
      if (!res.ok) { setError('Invalid verification code'); return; }
      setStep('reset');
    } catch { setError('Network error.'); }
    finally { setLoading(false); }
  }, [method, identifier, otp]);

  const handleReset = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) { setError('Password must be at least 8 characters'); return; }
    if (password !== confirmPassword) { setError('Passwords do not match'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/auth/recovery/reset', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method, identifier, otp, newPassword: password }),
      });
      if (!res.ok) { setError('Reset failed. Please try again.'); return; }
      setStep('done');
    } catch { setError('Network error.'); }
    finally { setLoading(false); }
  }, [method, identifier, otp, password, confirmPassword]);

  const methods: { id: RecoveryMethod; label: string; desc: string; placeholder: string }[] = [
    { id: 'email', label: 'Email Recovery', desc: 'OTP sent to registered email', placeholder: 'Enter registered email' },
    { id: 'mobile', label: 'Mobile Recovery', desc: 'OTP sent via SMS to registered mobile', placeholder: '+91 XXXXX XXXXX' },
    { id: 'aadhaar', label: 'Aadhaar Verification', desc: 'Verify identity via Aadhaar OTP', placeholder: 'Enter 12-digit Aadhaar number' },
    { id: 'support', label: 'Contact Support', desc: 'Manual verification by support team', placeholder: 'Enter your registered name or ID' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Account Recovery</h1>
        <p className="text-sm text-muted-foreground mb-6">Recover access to your government services account</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
        {step === 'method' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {methods.map(m => (
                <button key={m.id} onClick={() => { setMethod(m.id); setIdentifier(''); setError(''); }} className={\`p-4 rounded-xl border-2 text-left transition-colors \${method === m.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}\`}>
                  <div className="font-semibold text-sm text-foreground">{m.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.desc}</div>
                </button>
              ))}
            </div>
            <div>
              <label htmlFor="identifier" className="block text-sm font-medium mb-1">{methods.find(m => m.id === method)?.label} <span className="text-red-500">*</span></label>
              <input id="identifier" type="text" value={identifier} onChange={e => setIdentifier(e.target.value)} placeholder={methods.find(m => m.id === method)?.placeholder} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-required="true" />
            </div>
            <button onClick={handleSelectMethod} disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Processing...' : 'Continue'}</button>
          </div>
        )}
        {step === 'verify' && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Enter the verification code sent via {method}</p>
            <input type="text" value={otp} onChange={e => setOtp(e.target.value.replace(/\\D/g, '').slice(0, 6))} placeholder="Enter 6-digit code" maxLength={6} className="w-full px-4 py-3 border border-border rounded-lg text-center text-lg font-bold tracking-widest" aria-label="Verification code" />
            <button onClick={handleVerify} disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Verifying...' : 'Verify'}</button>
          </div>
        )}
        {step === 'reset' && (
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label htmlFor="newPw" className="block text-sm font-medium mb-1">New Password <span className="text-red-500">*</span></label>
              <input id="newPw" type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" />
            </div>
            <div>
              <label htmlFor="confirmPw" className="block text-sm font-medium mb-1">Confirm Password <span className="text-red-500">*</span></label>
              <input id="confirmPw" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Resetting...' : 'Reset Password'}</button>
          </form>
        )}
        {step === 'done' && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
            <h2 className="text-xl font-bold text-foreground">Account Recovered</h2>
            <p className="text-muted-foreground">You can now sign in with your new password.</p>
            <a href="/sign-in" className="inline-block py-3 px-6 bg-primary text-primary-foreground rounded-lg font-semibold">Sign In</a>
          </div>
        )}
      </div>
    </div>
  );
}`;

const RECOVERY_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-account-recovery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Account Recovery</h1>
        <p class="text-sm text-muted-foreground mb-6">Recover access to your government services account</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{{ error }}</div>
        <div *ngIf="step === 'method'" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button *ngFor="let m of methods" (click)="method = m.id; identifier.reset()" [class]="'p-4 rounded-xl border-2 text-left ' + (method === m.id ? 'border-primary bg-primary/5' : 'border-border')">
              <div class="font-semibold text-sm">{{ m.label }}</div>
              <div class="text-xs text-muted-foreground mt-1">{{ m.desc }}</div>
            </button>
          </div>
          <div>
            <label for="id" class="block text-sm font-medium mb-1">Recovery Input <span class="text-red-500">*</span></label>
            <input id="id" [formControl]="identifier" class="w-full px-4 py-3 border border-border rounded-lg" />
          </div>
          <button (click)="initiate()" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Processing...' : 'Continue' }}</button>
        </div>
        <div *ngIf="step === 'verify'" class="space-y-4">
          <input [formControl]="otpCtrl" placeholder="Enter 6-digit code" maxlength="6" class="w-full px-4 py-3 border border-border rounded-lg text-center text-lg font-bold tracking-widest" />
          <button (click)="verify()" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Verifying...' : 'Verify' }}</button>
        </div>
        <div *ngIf="step === 'reset'">
          <form [formGroup]="resetForm" (ngSubmit)="reset()" class="space-y-4">
            <div><label class="block text-sm font-medium mb-1">New Password</label><input type="password" formControlName="password" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label class="block text-sm font-medium mb-1">Confirm</label><input type="password" formControlName="confirm" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <button type="submit" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Resetting...' : 'Reset Password' }}</button>
          </form>
        </div>
        <div *ngIf="step === 'done'" class="text-center py-8">
          <h2 class="text-xl font-bold mb-2">Account Recovered</h2>
          <a href="/sign-in" class="inline-block py-3 px-6 bg-primary text-primary-foreground rounded-lg font-semibold">Sign In</a>
        </div>
      </div>
    </div>
  \`
})
export class AccountRecoveryComponent {
  methods = [
    { id: 'email', label: 'Email Recovery', desc: 'OTP sent to registered email' },
    { id: 'mobile', label: 'Mobile Recovery', desc: 'OTP sent via SMS' },
    { id: 'aadhaar', label: 'Aadhaar Verification', desc: 'Verify via Aadhaar OTP' },
    { id: 'support', label: 'Contact Support', desc: 'Manual verification' },
  ];
  method = 'email';
  identifier = new FormControl('', [Validators.required]);
  otpCtrl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  resetForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirm: new FormControl('', [Validators.required]),
  });
  step: 'method' | 'verify' | 'reset' | 'done' = 'method';
  loading = false; error = '';

  async initiate() {
    if (this.identifier.invalid) { this.error = 'Field required'; return; }
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/auth/recovery/initiate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ method: this.method, identifier: this.identifier.value }) });
      if (!res.ok) { this.error = 'Failed'; return; }
      this.step = 'verify';
    } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }
  async verify() {
    if (this.otpCtrl.invalid) { this.error = 'Enter code'; return; }
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/auth/recovery/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ otp: this.otpCtrl.value }) });
      if (!res.ok) { this.error = 'Invalid code'; return; }
      this.step = 'reset';
    } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }
  async reset() {
    if (this.resetForm.invalid) { this.error = 'Fill fields'; return; }
    if (this.resetForm.value.password !== this.resetForm.value.confirm) { this.error = 'Mismatch'; return; }
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/auth/recovery/reset', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ newPassword: this.resetForm.value.password }) });
      if (!res.ok) { this.error = 'Failed'; return; }
      this.step = 'done';
    } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }
}`;

const RECOVERY_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Account Recovery — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
    .sub { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
    .methods { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem; }
    .method-btn { padding: 1rem; border: 2px solid #e5e7eb; border-radius: 0.75rem; background: #fff; cursor: pointer; text-align: left; }
    .method-btn.active { border-color: #005196; background: rgba(0,81,150,0.05); }
    .method-btn .title { font-weight: 600; font-size: 0.875rem; }
    .method-btn .desc { font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem; }
    label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem; }
    input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; outline: none; margin-bottom: 1rem; }
    input:focus { border-color: #005196; box-shadow: 0 0 0 2px rgba(0,81,150,0.2); }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:disabled { opacity: 0.6; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .hidden { display: none; }
    .success { text-align: center; padding: 2rem 0; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Account Recovery</h1>
    <p class="sub">Recover access to your government services account</p>
    <div id="error" class="error" role="alert"></div>
    <div id="stepMethod">
      <div class="methods">
        <button class="method-btn active" onclick="selectMethod('email',this)"><div class="title">Email</div><div class="desc">OTP to registered email</div></button>
        <button class="method-btn" onclick="selectMethod('mobile',this)"><div class="title">Mobile</div><div class="desc">OTP via SMS</div></button>
        <button class="method-btn" onclick="selectMethod('aadhaar',this)"><div class="title">Aadhaar</div><div class="desc">Aadhaar OTP</div></button>
        <button class="method-btn" onclick="selectMethod('support',this)"><div class="title">Support</div><div class="desc">Manual verification</div></button>
      </div>
      <label for="identifier">Recovery Input <span style="color:#ef4444">*</span></label>
      <input type="text" id="identifier" required aria-required="true" />
      <button class="btn" onclick="initiate()">Continue</button>
    </div>
    <div id="stepVerify" class="hidden">
      <label for="otp">Verification Code</label>
      <input type="text" id="otp" maxlength="6" placeholder="Enter 6-digit code" style="text-align:center;font-size:1.25rem;font-weight:700;letter-spacing:0.25em" />
      <button class="btn" onclick="verifyCode()">Verify</button>
    </div>
    <div id="stepReset" class="hidden">
      <label for="newPw">New Password</label>
      <input type="password" id="newPw" minlength="8" />
      <label for="confirmPw">Confirm Password</label>
      <input type="password" id="confirmPw" />
      <button class="btn" onclick="resetPw()">Reset Password</button>
    </div>
    <div id="stepDone" class="hidden success">
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem">Account Recovered</h2>
      <a href="/sign-in" class="btn" style="display:inline-block;width:auto;padding:0.75rem 2rem;text-decoration:none">Sign In</a>
    </div>
  </div>
  <script>
    let method = 'email';
    function showError(m) { const e=document.getElementById('error'); e.textContent=m; e.style.display='block'; }
    function hideError() { document.getElementById('error').style.display='none'; }
    function showStep(id) { ['stepMethod','stepVerify','stepReset','stepDone'].forEach(s=>document.getElementById(s).classList.add('hidden')); document.getElementById(id).classList.remove('hidden'); }
    function selectMethod(m, btn) { method=m; document.querySelectorAll('.method-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); }
    async function initiate() {
      hideError(); const id=document.getElementById('identifier').value.trim();
      if(!id){showError('Field required');return;}
      try { const r=await fetch('/api/auth/recovery/initiate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({method,identifier:id})}); if(!r.ok){showError('Failed');return;} showStep('stepVerify'); } catch{showError('Network error');}
    }
    async function verifyCode() {
      hideError(); const c=document.getElementById('otp').value;
      if(c.length<6){showError('Enter complete code');return;}
      try { const r=await fetch('/api/auth/recovery/verify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({otp:c})}); if(!r.ok){showError('Invalid code');return;} showStep('stepReset'); } catch{showError('Network error');}
    }
    async function resetPw() {
      hideError(); const pw=document.getElementById('newPw').value,cpw=document.getElementById('confirmPw').value;
      if(pw.length<8){showError('Min 8 chars');return;} if(pw!==cpw){showError('Mismatch');return;}
      try { const r=await fetch('/api/auth/recovery/reset',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({newPassword:pw})}); if(!r.ok){showError('Failed');return;} showStep('stepDone'); } catch{showError('Network error');}
    }
  </script>
</body>
</html>`;

function CodeDownloadsSection() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks + Multi-method', code: RECOVERY_REACT_CODE, filename: 'AccountRecoveryPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: RECOVERY_ANGULAR_CODE, filename: 'account-recovery.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: RECOVERY_HTML_CODE, filename: 'account-recovery.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Account Recovery implementations for your framework.</p>
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
        <h2 className="text-2xl font-bold text-foreground">Governance & Lifecycle</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-100 border-b-2 border-green-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Lifecycle Status</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-green-100 border-2 border-green-400 rounded text-green-800 dark:text-green-300 font-bold">
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
          <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Support Level</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-orange-100 border-2 border-orange-300 rounded text-orange-800 font-bold text-sm">
                SUPPORT INTENSIVE
              </div>
            </div>
            <div className="text-sm space-y-2 text-muted-foreground">
              <p>Requires trained support team and officer review capabilities.</p>
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
              <p className="text-muted-foreground">Identity & Support</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Contact:</p>
              <p className="text-muted-foreground">recovery@ux4g.gov.in</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Support Hours:</p>
              <p className="text-muted-foreground">24/7 Email, Mon-Sat Phone</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-yellow-600" />
          Implementation Checklist
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold text-foreground mb-2">Before Launch:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>☐ Support team trained on recovery procedures</li>
              <li>☐ Officer dashboard and queue system operational</li>
              <li>☐ Document verification process established</li>
              <li>☐ SLA monitoring and alerts configured</li>
              <li>☐ Email/SMS templates prepared</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">Ongoing Monitoring:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>☐ Track recovery request volume and trends</li>
              <li>☐ Monitor SLA compliance (response & resolution times)</li>
              <li>☐ Review fraud/abuse patterns weekly</li>
              <li>☐ Collect user feedback on recovery experience</li>
              <li>☐ Monthly support team performance review</li>
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
          <p className="font-bold text-foreground mb-1">Automated Recovery</p>
          <p className="text-muted-foreground">Immediate (if verified)</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Manual Review</p>
          <p className="text-muted-foreground">1-3 business days</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Support Response</p>
          <p className="text-muted-foreground">&lt;24 hours</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Helpline</p>
          <p className="text-muted-foreground">1800-XXX-YYYY</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Request Tracking</p>
          <p className="text-muted-foreground">Via unique Request ID</p>
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
        <RelatedPatternLink to="/patterns/identity/forgot-password" text="Forgot Password" />
        <RelatedPatternLink to="/patterns/identity/sign-in" text="Sign In Pattern" />
        <RelatedPatternLink to="/patterns/identity/otp-verification" text="OTP Verification" />
        <RelatedPatternLink to="/patterns/identity/mobile-otp" text="Mobile OTP" />
        <RelatedPatternLink to="/patterns/identity/auth-error" text="Error & Lockout" />
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
          to="/patterns/identity/account-recovery"
          className="block p-3 bg-background border border-border rounded hover:bg-blue-50 dark:bg-blue-900/20 hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Eye size={16} className="text-primary" />
            <span className="font-bold text-sm text-foreground">View Live Demo</span>
          </div>
          <p className="text-xs text-muted-foreground">Account recovery flow</p>
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
        <ResourceLink text="Support Team Training" />
        <ResourceLink text="Document Verification Guide" />
        <ResourceLink text="Fraud Detection Patterns" />
        <ResourceLink text="SLA Monitoring Dashboard" />
        <ResourceLink text="User Communication Templates" />
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
              <span>Branches to automated or assisted path</span>
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

function RecoveryPath({ title, steps, timeline }: { title: string; steps: string[]; timeline: string }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">{title}</h3>
      </div>
      <div className="p-4">
        <ol className="space-y-2 text-xs text-muted-foreground mb-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="font-bold text-primary">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <div className="pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <Clock size={12} className="inline mr-1" />
            <strong>Timeline:</strong> {timeline}
          </p>
        </div>
      </div>
    </div>
  );
}

function VerificationMethod({ method, description, strength }: { method: string; description: string; strength: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <p className="font-bold text-foreground">{method}</p>
        <span className="text-xs px-2 py-1 bg-muted border border-border rounded">{strength}</span>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function EscalationLevel({ level, description, timeline, sla }: { level: string; description: string; timeline: string; sla: string }) {
  return (
    <div className="bg-background border border-border rounded p-4">
      <p className="font-bold text-foreground mb-1">{level}</p>
      <p className="text-muted-foreground mb-2">{description}</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span><Clock size={12} className="inline mr-1" />{timeline}</span>
        <span><CheckCircle size={12} className="inline mr-1" />{sla}</span>
      </div>
    </div>
  );
}

function SupportChannel({ channel, contact, hours }: { channel: string; contact: string; hours: string }) {
  return (
    <div>
      <p className="font-bold text-foreground mb-1">{channel}</p>
      <p className="text-muted-foreground">{contact}</p>
      <p className="text-muted-foreground text-xs">{hours}</p>
    </div>
  );
}

function SLAItem({ metric, target }: { metric: string; target: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-foreground font-bold">{metric}</span>
      <span className="text-muted-foreground">{target}</span>
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
    <Link to={to} className="block p-2 bg-background border border-border rounded hover:bg-blue-50 dark:bg-blue-900/20 hover:border-blue-300 transition-colors">
      <div className="flex items-center gap-2">
        <ArrowRight size={12} className="text-primary" />
        <span className="text-foreground">{text}</span>
      </div>
    </Link>
  );
}

function ResourceLink({ text }: { text: string }) {
  return (
    <a href="#" className="flex items-center gap-2 p-2 bg-background border border-border rounded hover:bg-blue-50 dark:bg-blue-900/20 hover:border-blue-300 transition-colors text-foreground">
      <ArrowRight size={12} className="text-primary" />
      <span className="text-xs">{text}</span>
    </a>
  );
}
