import React from "react";
import { Link } from "react-router";
import { Smartphone, CheckCircle, AlertCircle, Info, XCircle, ArrowRight, ArrowLeft, ChevronRight, Clock, RefreshCw, Hash, Shield, Signal, MessageSquare, HelpCircle, Check, X, Phone, Code, Download, Copy } from "lucide-react";

export default function MobileOTPPattern() {
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
            <Link to="/patterns/identity/otp-verification" className="hover:text-primary">
              OTP Verification
            </Link>
            <ChevronRight size={16} />
            <span className="text-foreground font-medium">Mobile OTP</span>
          </div>

          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center">
                  <Smartphone size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Identity & Access Pattern</div>
                  <h1 className="text-3xl font-bold text-foreground">Mobile OTP Verification</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Complete pattern for mobile number-based OTP verification via SMS. Extends the parent OTP pattern 
                with mobile-specific states, SMS delivery handling, network considerations, and recovery paths 
                optimized for Indian telecommunications infrastructure.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-002-01</span></span>
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
              { id: "screens", label: "Example Screens" },
              { id: "mobile-entry", label: "Mobile Entry" },
              { id: "sms-handling", label: "SMS Handling" },
              { id: "network", label: "Network Issues" },
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
            <MobileEntrySection />
            <SMSHandlingSection />
            <NetworkConsiderations />
            <AccessibilitySection />
            <ImplementationSection />
            <CodeDownloadsSection />
            <GovernanceSection />
          </div>

          {/* Sidebar - 3 columns */}
          <div className="col-span-3 space-y-6 sticky top-24 self-start">
            <QuickReference />
            <ParentPattern />
            <RelatedPatterns />
            <Resources />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Mobile OTP Verification Pattern</div>
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
              Verify user identity using SMS-based one-time passwords sent to registered mobile numbers. 
              Optimized for Indian telecommunications infrastructure with handling for network delays, 
              low connectivity, and SMS delivery challenges.
            </p>
            <div className="space-y-2">
              <InfoItem icon={<Smartphone size={16} className="text-primary" />} text="Mobile-first verification for Indian users" />
              <InfoItem icon={<MessageSquare size={16} className="text-primary" />} text="SMS delivery across all major carriers" />
              <InfoItem icon={<Signal size={16} className="text-primary" />} text="Graceful handling of network issues" />
              <InfoItem icon={<Shield size={16} className="text-primary" />} text="Secure with government SMS gateway" />
            </div>
          </div>
        </div>

        {/* User Goals */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">User Goals</h3>
          </div>
          <div className="p-6 space-y-2">
            <GoalItem text="Receive SMS quickly on any network" />
            <GoalItem text="Enter mobile number easily and correctly" />
            <GoalItem text="Know what to do if SMS is delayed" />
            <GoalItem text="Change mobile number if incorrect" />
            <GoalItem text="Get support if unable to receive SMS" />
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
            <WhenItem text="Primary authentication method for Indian citizens" />
            <WhenItem text="User sign-up requiring mobile verification" />
            <WhenItem text="Account recovery when email unavailable" />
            <WhenItem text="Two-factor authentication (2FA)" />
            <WhenItem text="Transaction verification for government services" />
            <WhenItem text="When mobile number is already collected" />
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
            <WhenNotItem text="In areas with no mobile network coverage" />
            <WhenNotItem text="For users without mobile phones" />
            <WhenNotItem text="When user prefers email verification" />
            <WhenNotItem text="For time-critical emergency services" />
            <WhenNotItem text="When SMS gateway is down/unreliable" />
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
            title="Request Mobile Number"
            description="User prompted to enter 10-digit Indian mobile number (+91 prefix optional)"
            state="User Input"
          />
          <FlowStep 
            number={2}
            title="Validate Mobile Format"
            description="Check: 10 digits, starts with 6-9, valid format for Indian numbers"
            state="Client Validation"
          />
          <FlowStep 
            number={3}
            title="Send OTP Request"
            description="Submit mobile number to server; generate 6-digit OTP"
            state="Server Action"
          />
          <FlowStep 
            number={4}
            title="Send SMS via Gateway"
            description="Transmit OTP via government-approved SMS gateway with registered sender ID"
            state="SMS Delivery"
          />
          <FlowStep 
            number={5}
            title="Display OTP Entry Screen"
            description="Show masked mobile (+91 ****** 123), OTP input, timer, and resend option"
            state="UI State"
          />
          <FlowStep 
            number={6}
            title="User Receives SMS"
            description="User receives SMS with OTP (may be delayed 30 seconds - 2 minutes)"
            state="External Event"
            branches={true}
          />
          
          {/* Success Path */}
          <div className="ml-12 pl-6 border-l-4 border-green-500 space-y-4">
            <FlowStep 
              number="6a"
              title="SMS Received"
              description="User receives SMS, enters OTP, verification succeeds"
              state="Success"
              variant="success"
            />
          </div>

          {/* Delay Path */}
          <div className="ml-12 pl-6 border-l-4 border-yellow-500 space-y-4">
            <FlowStep 
              number="6b"
              title="SMS Delayed"
              description="SMS not received within 60 seconds; show delay message and wait guidance"
              state="Delayed"
              variant="warning"
            />
            <FlowStep 
              number="7"
              title="Offer Recovery Options"
              description="After 2 minutes: resend OTP, change number, or contact support"
              state="Recovery"
              variant="warning"
            />
          </div>

          {/* Error Path */}
          <div className="ml-12 pl-6 border-l-4 border-red-500 space-y-4">
            <FlowStep 
              number="6c"
              title="SMS Not Received"
              description="Network failure, number incorrect, or SMS blocked"
              state="Error"
              variant="error"
            />
            <FlowStep 
              number="8"
              title="Support Path"
              description="Guide user: check number, check spam, change number, or call helpline"
              state="Support"
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
        {/* Mobile Number Entry */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Mobile Number Entry</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-border rounded p-6 space-y-4">
              <div className="text-center">
                <Smartphone size={40} className="text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Enter Mobile Number</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We'll send a verification code<br/>
                  to confirm your identity
                </p>
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Mobile Number
                </label>
                <div className="flex gap-2">
                  <input aria-label="text input" type="text" 
                    value="+91"
                    disabled
                    className="w-16 px-3 py-3 border-2 border-border rounded bg-muted text-center font-bold"
                  />
                  <input aria-label="10-digit mobile number" type="tel" 
                    placeholder="10-digit mobile number"
                    className="flex-1 px-4 py-3 border-2 border-border rounded"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <Info size={12} className="inline mr-1" />
                  Enter number without country code
                </p>
              </div>
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90">
                Send OTP
              </button>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Ready for input</p>
              <p><strong>Validation:</strong> 10 digits, starts 6-9</p>
            </div>
          </div>
        </div>

        {/* Invalid Mobile Number */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Invalid Mobile Number</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-red-400 rounded p-6 space-y-4">
              <div className="text-center">
                <XCircle size={40} className="text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Invalid Number</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Please check and enter a<br/>
                  valid 10-digit mobile number
                </p>
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Mobile Number
                </label>
                <div className="flex gap-2">
                  <input aria-label="text input" type="text" 
                    value="+91"
                    disabled
                    className="w-16 px-3 py-3 border-2 border-border rounded bg-muted text-center font-bold"
                  />
                  <input aria-label="tel input" type="tel" 
                    value="123456"
                    className="flex-1 px-4 py-3 border-2 border-red-400 rounded bg-red-50"
                  />
                </div>
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-300 rounded p-3 text-sm text-red-800 mt-2">
                  <XCircle size={14} className="inline mr-2" />
                  Mobile number must be 10 digits
                </div>
              </div>
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90">
                Send OTP
              </button>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Validation error</p>
              <p><strong>Error:</strong> Incomplete number</p>
            </div>
          </div>
        </div>

        {/* OTP Sent State */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">OTP Sent Successfully</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-border rounded p-6 space-y-4">
              <div className="text-center">
                <MessageSquare size={40} className="text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">OTP Sent</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  We've sent a 6-digit code to
                </p>
                <p className="text-sm font-bold text-foreground mb-4">
                  +91 ******* 123
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 rounded p-3 text-sm text-green-800">
                <CheckCircle size={14} className="inline mr-2" />
                SMS sent successfully
              </div>
              <div>
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
              <div className="text-center text-sm text-muted-foreground">
                <Clock size={14} className="inline mr-1" />
                Code expires in <span className="font-bold text-foreground">4:45</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> OTP sent, awaiting input</p>
              <p><strong>Timer:</strong> 5:00 countdown started</p>
            </div>
          </div>
        </div>

        {/* SMS Delayed */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border-b-2 border-yellow-200 dark:border-yellow-800 px-6 py-4">
            <h3 className="font-bold text-foreground">SMS Delayed</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-yellow-400 rounded p-6 space-y-4">
              <div className="text-center">
                <Clock size={40} className="text-yellow-600 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Haven't received code yet?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  SMS may take up to 2 minutes<br/>
                  due to network conditions
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-300 rounded p-4">
                <p className="text-sm text-foreground font-bold mb-2">Please wait a moment...</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• SMS sent to: +91 ******* 123</li>
                  <li>• Check your inbox for messages</li>
                  <li>• Delivery may be delayed</li>
                </ul>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90 flex items-center justify-center gap-2">
                  <RefreshCw size={16} />
                  Resend OTP
                </button>
                <button className="flex-1 px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded hover:bg-background">
                  Change Number
                </button>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> SMS delayed (&gt;60 seconds)</p>
              <p><strong>Action:</strong> Show guidance, enable resend</p>
            </div>
          </div>
        </div>

        {/* SMS Not Received */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-4">
            <h3 className="font-bold text-foreground">SMS Not Received</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-red-400 rounded p-6 space-y-4">
              <div className="text-center">
                <XCircle size={40} className="text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Still no code?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's try to resolve this
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-4">
                <p className="text-sm font-bold text-foreground mb-2">Troubleshooting Steps:</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Check if +91 ******* 123 is correct</li>
                  <li>• Ensure you have network signal</li>
                  <li>• Check SMS inbox / message folder</li>
                  <li>• SMS may be in spam folder</li>
                  <li>• Restart your phone if needed</li>
                </ul>
              </div>
              <div className="space-y-2">
                <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90 flex items-center justify-center gap-2">
                  <RefreshCw size={16} />
                  Resend OTP
                </button>
                <button className="w-full px-4 py-3 border-2 border-primary bg-card text-primary font-bold rounded hover:bg-blue-50">
                  Change Mobile Number
                </button>
                <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded hover:bg-background flex items-center justify-center gap-2">
                  <HelpCircle size={16} />
                  Contact Support
                </button>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> SMS failed (&gt;3 minutes)</p>
              <p><strong>Actions:</strong> Full recovery options</p>
            </div>
          </div>
        </div>

        {/* Change Number */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Change Mobile Number</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-border rounded p-6 space-y-4">
              <div className="text-center">
                <Smartphone size={40} className="text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Update Mobile Number</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Enter a new number to<br/>
                  receive verification code
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3 text-sm">
                <p className="text-muted-foreground">
                  <strong>Current Number:</strong> +91 ******* 123
                </p>
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  New Mobile Number
                </label>
                <div className="flex gap-2">
                  <input aria-label="text input" type="text" 
                    value="+91"
                    disabled
                    className="w-16 px-3 py-3 border-2 border-border rounded bg-muted text-center font-bold"
                  />
                  <input aria-label="10-digit mobile number" type="tel" 
                    placeholder="10-digit mobile number"
                    className="flex-1 px-4 py-3 border-2 border-border rounded"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90">
                  Send OTP to New Number
                </button>
                <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded hover:bg-background">
                  Cancel
                </button>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Change number flow</p>
              <p><strong>Validation:</strong> New number must differ</p>
            </div>
          </div>
        </div>

        {/* Network Error */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-100 border-b-2 border-red-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Network Error</h3>
          </div>
          <div className="p-6">
            <div className="bg-background border-2 border-red-500 rounded p-6 space-y-4">
              <div className="text-center">
                <Signal size={40} className="text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Connection Problem</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Unable to send OTP due to<br/>
                  network connectivity issue
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded p-4 text-sm">
                <p className="text-red-800 font-bold mb-2">What you can do:</p>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>• Check your internet connection</li>
                  <li>• Ensure you have network signal</li>
                  <li>• Try again in a few moments</li>
                </ul>
              </div>
              <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90 flex items-center justify-center gap-2">
                <RefreshCw size={16} />
                Try Again
              </button>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Network failure</p>
              <p><strong>Action:</strong> Retry with backoff</p>
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
                <h3 className="font-bold text-foreground mb-2">Mobile Verified!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your mobile number has been<br/>
                  successfully verified
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 rounded p-4 text-center">
                <p className="text-sm text-green-800 font-bold mb-1">Verified Number</p>
                <p className="text-sm text-foreground font-mono">+91 9876543210</p>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                <CheckCircle size={14} className="inline mr-1 text-green-600" />
                Proceeding to next step...
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p><strong>State:</strong> Verification successful</p>
              <p><strong>Action:</strong> Auto-redirect in 2 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== MOBILE ENTRY SECTION ====================

function MobileEntrySection() {
  return (
    <section id="mobile-entry" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Mobile Number Entry & Validation</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Indian Mobile Number Format</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-bold text-foreground">Component</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Format</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Validation Rule</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Country Code</td>
                <td className="py-3 px-4 text-muted-foreground">+91 (auto-populated)</td>
                <td className="py-3 px-4 text-muted-foreground">Fixed, non-editable</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Number Length</td>
                <td className="py-3 px-4 text-muted-foreground">10 digits</td>
                <td className="py-3 px-4 text-muted-foreground">Exactly 10, no more/less</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">First Digit</td>
                <td className="py-3 px-4 text-muted-foreground">6, 7, 8, or 9</td>
                <td className="py-3 px-4 text-muted-foreground">Must start with 6-9</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Character Set</td>
                <td className="py-3 px-4 text-muted-foreground">Numeric only</td>
                <td className="py-3 px-4 text-muted-foreground">0-9, no letters/symbols</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Example</td>
                <td className="py-3 px-4 text-muted-foreground font-mono">9876543210</td>
                <td className="py-3 px-4 text-muted-foreground">Valid format</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Input Validation */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Client-Side Validation</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <ValidationRule 
              rule="Format Check"
              description="Only digits 0-9 allowed, block other characters"
              timing="Real-time on keypress"
            />
            <ValidationRule 
              rule="Length Check"
              description="Exactly 10 digits, show counter: 9/10"
              timing="Real-time"
            />
            <ValidationRule 
              rule="First Digit"
              description="Must be 6, 7, 8, or 9 for Indian mobile"
              timing="After 1st digit entered"
            />
            <ValidationRule 
              rule="No Duplicates"
              description="Warn if all digits same: 9999999999"
              timing="On blur / submit"
            />
            <ValidationRule 
              rule="No Sequential"
              description="Warn if sequential: 1234567890 (likely fake)"
              timing="On blur / submit"
            />
          </div>
        </div>

        {/* Masked Display */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Masked Number Display</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="text-sm space-y-3">
              <div className="bg-background border border-border rounded p-3">
                <p className="text-xs text-muted-foreground mb-1">Standard Masking (Recommended)</p>
                <p className="font-mono text-foreground">+91 ******* 210</p>
                <p className="text-xs text-muted-foreground mt-1">Show last 3 digits for confirmation</p>
              </div>
              <div className="bg-background border border-border rounded p-3">
                <p className="text-xs text-muted-foreground mb-1">Partial Masking (Alternative)</p>
                <p className="font-mono text-foreground">+91 987*****10</p>
                <p className="text-xs text-muted-foreground mt-1">Show first 3 and last 2 digits</p>
              </div>
              <div className="bg-background border border-border rounded p-3">
                <p className="text-xs text-muted-foreground mb-1">High Security (Max Privacy)</p>
                <p className="font-mono text-foreground">+91 ********** </p>
                <p className="text-xs text-muted-foreground mt-1">Fully masked, show "your registered number"</p>
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-300 rounded p-3 text-xs">
              <p className="text-muted-foreground">
                <strong>Recommendation:</strong> Show last 3 digits for user confirmation while maintaining privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SMS HANDLING ====================

function SMSHandlingSection() {
  return (
    <section id="sms-handling" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">SMS Delivery & Delay Handling</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">SMS Template & Content</h3>
        </div>
        <div className="p-6">
          <div className="bg-gray-900 text-green-400 p-6 rounded font-mono text-sm">
            <p className="mb-4"><strong className="text-white">Standard SMS Template:</strong></p>
            <p className="mb-1">Your verification code is: <strong className="text-yellow-300">123456</strong></p>
            <p className="mb-1">Valid for 5 minutes.</p>
            <p className="mb-1">Do not share this code with anyone.</p>
            <p className="mb-4">- Government of India</p>
            <p className="text-gray-500 text-xs">Sender ID: GOV-IN or VM-GOVIND</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-bold text-foreground mb-1">Message Length</p>
              <p className="text-muted-foreground">Under 160 characters (1 SMS credit)</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">Language</p>
              <p className="text-muted-foreground">English (multilingual support in roadmap)</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">Sender ID</p>
              <p className="text-muted-foreground">GOV-IN / VM-GOVIND (registered)</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">DLT Registration</p>
              <p className="text-muted-foreground">TRAI DLT compliant template</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Immediate Delivery */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground text-sm">Immediate (0-30s)</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <CheckCircle size={32} className="text-green-600 mx-auto mb-2" />
              <p className="text-xs font-bold text-foreground">Ideal Delivery</p>
            </div>
            <div className="space-y-2 text-xs">
              <p className="text-muted-foreground"><strong>Status:</strong> SMS delivered</p>
              <p className="text-muted-foreground"><strong>User Action:</strong> Enter OTP</p>
              <p className="text-muted-foreground"><strong>UI State:</strong> Normal flow</p>
              <p className="text-muted-foreground"><strong>Message:</strong> None (success)</p>
            </div>
          </div>
        </div>

        {/* Slight Delay */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border-b-2 border-yellow-200 dark:border-yellow-800 px-6 py-4">
            <h3 className="font-bold text-foreground text-sm">Delayed (30s-2min)</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <Clock size={32} className="text-yellow-600 mx-auto mb-2" />
              <p className="text-xs font-bold text-foreground">Minor Delay</p>
            </div>
            <div className="space-y-2 text-xs">
              <p className="text-muted-foreground"><strong>Status:</strong> In transit</p>
              <p className="text-muted-foreground"><strong>User Action:</strong> Wait patiently</p>
              <p className="text-muted-foreground"><strong>UI State:</strong> Show "wait" message</p>
              <p className="text-muted-foreground"><strong>Message:</strong> "SMS may take up to 2 minutes"</p>
            </div>
          </div>
        </div>

        {/* Major Delay */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-4">
            <h3 className="font-bold text-foreground text-sm">Failed (&gt;2min)</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <XCircle size={32} className="text-red-600 mx-auto mb-2" />
              <p className="text-xs font-bold text-foreground">Delivery Issue</p>
            </div>
            <div className="space-y-2 text-xs">
              <p className="text-muted-foreground"><strong>Status:</strong> Likely failed</p>
              <p className="text-muted-foreground"><strong>User Action:</strong> Resend / change number</p>
              <p className="text-muted-foreground"><strong>UI State:</strong> Show recovery options</p>
              <p className="text-muted-foreground"><strong>Message:</strong> "Having trouble? Try these steps..."</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <Info size={20} className="text-primary" />
          Progressive Disclosure: User Guidance Timeline
        </h3>
        <div className="space-y-3 text-sm">
          <TimelineItem 
            time="0-30 seconds"
            message="No message (normal delivery expected)"
            action="User waits normally"
          />
          <TimelineItem 
            time="30-60 seconds"
            message="'SMS on its way. Please wait a moment...'"
            action="Reassure user, keep waiting"
          />
          <TimelineItem 
            time="60-120 seconds"
            message="'SMS may take up to 2 minutes due to network conditions'"
            action="Set expectations, enable resend option"
          />
          <TimelineItem 
            time=">2 minutes"
            message="'Haven't received code? Try: Resend OTP, Change Number, or Get Help'"
            action="Full recovery options displayed"
          />
        </div>
      </div>
    </section>
  );
}

// ==================== NETWORK CONSIDERATIONS ====================

function NetworkConsiderations() {
  return (
    <section id="network" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Low Network & Connectivity Handling</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Common Network Issues */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Common Network Issues in India</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <NetworkIssue 
              issue="DND (Do Not Disturb)"
              description="User has DND activated; promotional SMS blocked"
              solution="OTP SMS uses transactional route (exempt from DND)"
            />
            <NetworkIssue 
              issue="Roaming"
              description="User is roaming internationally or in remote area"
              solution="SMS may be delayed; show extended wait message"
            />
            <NetworkIssue 
              issue="Network Congestion"
              description="Peak hours (9-10 AM, 6-7 PM) cause delays"
              solution="Increase timeout, show 'network busy' message"
            />
            <NetworkIssue 
              issue="Operator Issues"
              description="Specific carrier (Jio/Airtel/Vi/BSNL) experiencing outage"
              solution="Suggest alternate contact method (email OTP)"
            />
            <NetworkIssue 
              issue="SIM Not Inserted"
              description="Dual SIM phone, wrong SIM selected"
              solution="Guidance: 'Ensure SIM with registered number is active'"
            />
          </div>
        </div>

        {/* Retry Logic */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">SMS Retry & Fallback Logic</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="text-sm">
              <p className="font-bold text-foreground mb-2">Automated Retry Strategy:</p>
              <div className="space-y-2 ml-4">
                <RetryStep step="1st Attempt" timing="Immediate" gateway="Primary gateway (BSNL/MTNL)" />
                <RetryStep step="2nd Attempt" timing="+30 seconds" gateway="Secondary gateway (Private vendor)" />
                <RetryStep step="3rd Attempt" timing="+60 seconds" gateway="Tertiary gateway (Backup)" />
                <RetryStep step="Manual Resend" timing="User initiated" gateway="Fresh attempt, primary gateway" />
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-300 rounded p-3 text-xs">
              <p className="text-muted-foreground">
                <strong>Note:</strong> System attempts 3 automated retries before requiring user action. 
                Each retry logged for monitoring SMS gateway reliability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">User Guidance for Network Issues</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-foreground mb-3">Before Requesting OTP</h3>
              <div className="space-y-2">
                <GuidanceItem icon={<Signal size={14} className="text-primary" />} text="Check you have network signal (2G/3G/4G/5G)" />
                <GuidanceItem icon={<Smartphone size={14} className="text-primary" />} text="Ensure correct SIM is active (if dual SIM)" />
                <GuidanceItem icon={<Phone size={14} className="text-primary" />} text="Verify mobile number is correct before submitting" />
                <GuidanceItem icon={<MessageSquare size={14} className="text-primary" />} text="Check SMS inbox has space (not full)" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">If OTP Doesn't Arrive</h3>
              <div className="space-y-2">
                <GuidanceItem icon={<Clock size={14} className="text-primary" />} text="Wait 2 minutes before resending" />
                <GuidanceItem icon={<RefreshCw size={14} className="text-primary" />} text="Try resending OTP (max 3 times per hour)" />
                <GuidanceItem icon={<Smartphone size={14} className="text-primary" />} text="Restart phone and check again" />
                <GuidanceItem icon={<HelpCircle size={14} className="text-primary" />} text="Contact support if problem persists" />
              </div>
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

      <div className="grid grid-cols-2 gap-6">
        {/* Mobile Input Accessibility */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Mobile Number Input</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Input Type"
              description='Use type="tel" and inputmode="numeric" for mobile keyboard'
            />
            <AccessibilityItem 
              label="Label Association"
              description="Proper <label for='mobile'> linked to input field"
            />
            <AccessibilityItem 
              label="Autocomplete"
              description='Use autocomplete="tel" for browser autofill support'
            />
            <AccessibilityItem 
              label="Error Announcement"
              description="Invalid number announced immediately via aria-live='assertive'"
            />
            <AccessibilityItem 
              label="Help Text"
              description="Format guidance linked via aria-describedby"
            />
          </div>
        </div>

        {/* OTP Input Accessibility */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">OTP Field Accessibility</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Input Mode"
              description='Use inputmode="numeric" for numeric keyboard on mobile'
            />
            <AccessibilityItem 
              label="Autocomplete"
              description='Use autocomplete="one-time-code" for SMS auto-read'
            />
            <AccessibilityItem 
              label="Field Labels"
              description="Multi-field: Each labeled 'Digit 1 of 6', 'Digit 2 of 6', etc."
            />
            <AccessibilityItem 
              label="Paste Support"
              description="Full OTP paste works in any field (multi-field pattern)"
            />
            <AccessibilityItem 
              label="Timer Announcements"
              description="Countdown announced at 30s, 10s intervals (aria-live='polite')"
            />
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">SMS Auto-Read APIs (Web OTP)</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-foreground mb-3">iOS Safari (WebKit)</h3>
              <div className="bg-background border border-border rounded p-4">
                <p className="text-muted-foreground mb-2">Automatically reads SMS with OTP when:</p>
                <ul className="space-y-1 ml-4 text-muted-foreground">
                  <li>• Input has autocomplete="one-time-code"</li>
                  <li>• SMS contains OTP in recognizable format</li>
                  <li>• Domain matches sender's domain binding</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Android Chrome (Web OTP API)</h3>
              <div className="bg-background border border-border rounded p-4">
                <p className="text-muted-foreground mb-2">Use WebOTP API with SMS format:</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs mt-2">
                  Your code: 123456<br/>
                  @example.com #123456
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-orange-600" />
          Screen Reader Guidance
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Announce 'Enter mobile number' when field gains focus" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Announce 'OTP sent to +91 ******* 123' after successful SMS send" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Announce 'Code expires in X minutes' when OTP screen loads" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Announce timer updates at 30-second intervals, not every second" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Announce 'Invalid OTP. 2 attempts remaining' on validation failure" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Announce 'Mobile number verified successfully' on success" />
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
          <h3 className="font-bold text-foreground">SMS Gateway Integration</h3>
        </div>
        <div className="p-6 space-y-4 text-sm">
          <ImplementationItem 
            category="Government SMS Gateway (Primary)"
            requirements={[
              "Use CDAC/NIC SMS gateway for government services",
              "Register sender ID: GOV-IN or VM-GOVIND",
              "TRAI DLT (Distributed Ledger Technology) registration mandatory",
              "Template pre-approval required for all OTP messages",
              "Rate limit: Max 100 SMS per second per department",
              "Delivery reports (DLR) must be tracked and logged"
            ]}
          />
          <ImplementationItem 
            category="Private SMS Gateway (Backup)"
            requirements={[
              "Use approved vendors: Twilio, MSG91, Kaleyra for fallback",
              "Same DLT registration and template approval required",
              "Implement automatic failover if primary gateway fails",
              "Cost per SMS: ₹0.15-0.25 (transactional route)",
              "SLA: 95% delivery within 30 seconds",
              "Monitor gateway health with heartbeat checks"
            ]}
          />
          <ImplementationItem 
            category="Security Requirements"
            requirements={[
              "Use HTTPS for all API calls to SMS gateway",
              "Encrypt OTP before database storage (bcrypt/argon2)",
              "Rate limit: Max 3 OTP requests per hour per mobile number",
              "Log all OTP generation, SMS sending, and validation events",
              "Implement IP-based rate limiting to prevent abuse",
              "Monitor for fraud patterns (same number, multiple accounts)"
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: Mobile Input</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`<!-- Mobile Number Input -->
<div class="mobile-input">
  <label for="mobile">
    Mobile Number
  </label>
  <div class="input-group">
    <input 
      type="text" 
      value="+91"
      disabled
      class="country-code"
      aria-label="Country code India"
    />
    <input aria-label="mobile" type="tel" 
      id="mobile"
      name="mobile"
      inputmode="numeric"
      autocomplete="tel"
      maxlength="10"
      pattern="[6-9][0-9]{9}"
      aria-describedby="mobile-help"
      required
    />
  </div>
  <div id="mobile-help" class="help">
    Enter 10-digit number (e.g., 9876543210)
  </div>
</div>`}
            </pre>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: SMS Sending</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`// Server-side SMS sending
async function sendMobileOTP(mobile) {
  // Generate 6-digit OTP
  const otp = generateOTP(6);
  
  // Store with expiry (5 minutes)
  await storeOTP({
    mobile,
    otp: await hash(otp),
    expiresAt: Date.now() + 300000,
    attempts: 0
  });
  
  // Send via gateway
  const result = await smsGateway.send({
    to: mobile,
    message: \`Your verification code is: \${otp}. Valid for 5 minutes. Do not share. - Govt of India\`,
    senderId: 'GOV-IN',
    templateId: 'DLT-123456'
  });
  
  return result;
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CODE DOWNLOADS SECTION ====================

const MOBILE_OTP_REACT_CODE = `import React, { useState, useEffect, useRef, useCallback } from 'react';

export function MobileOTPPage() {
  const [mobile, setMobile] = useState('');
  const [step, setStep] = useState<'mobile' | 'otp' | 'done'>('mobile');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) { const t = setTimeout(() => setTimer(v => v - 1), 1000); return () => clearTimeout(t); }
  }, [timer]);

  const validateMobile = useCallback(() => {
    const cleaned = mobile.replace(/\\s/g, '');
    if (!cleaned) return 'Mobile number is required';
    if (!/^(\\+91)?[6-9]\\d{9}$/.test(cleaned)) return 'Enter a valid Indian mobile number (+91 XXXXX XXXXX)';
    return '';
  }, [mobile]);

  const handleSendOtp = async () => {
    const err = validateMobile();
    if (err) { setError(err); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/auth/send-mobile-otp', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile: mobile.replace(/\\s/g, '') }),
      });
      if (!res.ok) { const d = await res.json(); setError(d.message || 'Failed to send OTP'); return; }
      setStep('otp'); setTimer(120);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } catch { setError('Network error. Please try again.'); }
    finally { setLoading(false); }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\\d?$/.test(value)) return;
    const newOtp = [...otp]; newOtp[index] = value; setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) inputRefs.current[index - 1]?.focus();
  };

  const handleVerify = async () => {
    const code = otp.join('');
    if (code.length !== 6) { setError('Enter the complete 6-digit OTP'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/auth/verify-mobile-otp', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile: mobile.replace(/\\s/g, ''), otp: code }),
      });
      if (!res.ok) { const d = await res.json(); setError(d.message || 'Invalid OTP'); return; }
      setStep('done');
    } catch { setError('Network error.'); }
    finally { setLoading(false); }
  };

  const maskedMobile = mobile ? mobile.replace(/\\d(?=\\d{4})/g, 'X') : '';

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Mobile Verification</h1>
            <p className="text-sm text-muted-foreground">Verify your Indian mobile number via SMS OTP</p>
          </div>
        </div>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        {step === 'mobile' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium mb-1">Mobile Number <span className="text-red-500">*</span></label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-lg text-sm font-medium text-muted-foreground">+91</span>
                <input id="mobile" type="tel" value={mobile} onChange={e => setMobile(e.target.value)} placeholder="98765 43210" maxLength={12} className="flex-1 px-4 py-3 border border-border rounded-r-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-required="true" autoComplete="tel" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">An SMS with a 6-digit OTP will be sent to this number</p>
            </div>
            <button onClick={handleSendOtp} disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Sending OTP...' : 'Send OTP'}</button>
          </div>
        )}
        {step === 'otp' && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">OTP sent to {maskedMobile}</p>
            <div className="flex justify-center gap-3">
              {otp.map((digit, i) => (
                <input key={i} ref={el => { inputRefs.current[i] = el; }} type="text" inputMode="numeric" maxLength={1} value={digit} onChange={e => handleOtpChange(i, e.target.value)} onKeyDown={e => handleKeyDown(i, e)} className="w-12 h-14 text-center text-xl font-bold border-2 border-border rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={\`Digit \${i+1}\`} />
              ))}
            </div>
            <button onClick={handleVerify} disabled={loading || otp.some(d => !d)} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Verifying...' : 'Verify OTP'}</button>
            <div className="text-center text-sm">
              {timer > 0 ? <p className="text-muted-foreground">Resend in {Math.floor(timer/60)}:{String(timer%60).padStart(2,'0')}</p> : <button onClick={() => { setOtp(['','','','','','']); handleSendOtp(); }} className="text-primary hover:underline font-semibold">Resend OTP</button>}
            </div>
            <button onClick={() => { setStep('mobile'); setOtp(['','','','','','']); setError(''); }} className="w-full text-center text-sm text-muted-foreground hover:text-foreground">Change mobile number</button>
          </div>
        )}
        {step === 'done' && (
          <div className="text-center space-y-4 py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
            <h2 className="text-xl font-bold text-foreground">Mobile Verified</h2>
            <p className="text-muted-foreground">Your mobile number has been verified successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
}`;

const MOBILE_OTP_ANGULAR_CODE = `import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ux4g-mobile-otp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Mobile Verification</h1>
        <p class="text-sm text-muted-foreground mb-6">Verify your Indian mobile number via SMS OTP</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
        <div *ngIf="step === 'mobile'" class="space-y-4">
          <div>
            <label for="mobile" class="block text-sm font-medium mb-1">Mobile Number <span class="text-red-500">*</span></label>
            <div class="flex">
              <span class="inline-flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-lg text-sm">+91</span>
              <input id="mobile" type="tel" [formControl]="mobileCtrl" placeholder="98765 43210" maxlength="12" class="flex-1 px-4 py-3 border border-border rounded-r-lg" />
            </div>
          </div>
          <button (click)="sendOtp()" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Sending...' : 'Send OTP' }}</button>
        </div>
        <div *ngIf="step === 'otp'" class="space-y-4">
          <p class="text-sm text-muted-foreground text-center">OTP sent to your mobile</p>
          <div class="flex justify-center gap-3">
            <input *ngFor="let d of digits; let i = index" [id]="'motp-'+i" type="text" inputMode="numeric" maxlength="1" (input)="onInput(i, $event)" (keydown)="onKeyDown(i, $event)" class="w-12 h-14 text-center text-xl font-bold border-2 border-border rounded-xl" [attr.aria-label]="'Digit '+(i+1)" />
          </div>
          <button (click)="verify()" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Verifying...' : 'Verify OTP' }}</button>
          <div class="text-center text-sm">
            <p *ngIf="timer > 0" class="text-muted-foreground">Resend in {{ formatTime() }}</p>
            <button *ngIf="timer === 0" (click)="sendOtp()" class="text-primary hover:underline font-semibold">Resend OTP</button>
          </div>
        </div>
        <div *ngIf="step === 'done'" class="text-center py-8">
          <h2 class="text-xl font-bold text-foreground mb-2">Mobile Verified</h2>
          <p class="text-muted-foreground">Your mobile number has been verified.</p>
        </div>
      </div>
    </div>
  \`
})
export class MobileOTPComponent implements OnInit, OnDestroy {
  mobileCtrl = new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\\d{9}$/)]);
  step: 'mobile' | 'otp' | 'done' = 'mobile';
  digits = ['','','','','',''];
  timer = 0; loading = false; error = '';
  private interval: any;

  ngOnInit() {}
  ngOnDestroy() { clearInterval(this.interval); }

  formatTime() { return Math.floor(this.timer/60)+':'+String(this.timer%60).padStart(2,'0'); }

  async sendOtp() {
    if (this.mobileCtrl.invalid) { this.error = 'Enter valid mobile number'; return; }
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/auth/send-mobile-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mobile: '+91' + this.mobileCtrl.value }) });
      if (!res.ok) { this.error = 'Failed to send OTP'; return; }
      this.step = 'otp'; this.timer = 120;
      this.interval = setInterval(() => { if (this.timer > 0) this.timer--; else clearInterval(this.interval); }, 1000);
    } catch { this.error = 'Network error'; }
    finally { this.loading = false; }
  }

  onInput(i: number, e: Event) {
    const v = (e.target as HTMLInputElement).value;
    if (!/^\\d?$/.test(v)) { (e.target as HTMLInputElement).value = ''; return; }
    this.digits[i] = v;
    if (v && i < 5) document.getElementById('motp-'+(i+1))?.focus();
  }

  onKeyDown(i: number, e: KeyboardEvent) {
    if (e.key === 'Backspace' && !this.digits[i] && i > 0) document.getElementById('motp-'+(i-1))?.focus();
  }

  async verify() {
    const code = this.digits.join('');
    if (code.length !== 6) { this.error = 'Enter complete OTP'; return; }
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/auth/verify-mobile-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mobile: '+91'+this.mobileCtrl.value, otp: code }) });
      if (!res.ok) { this.error = 'Invalid OTP'; return; }
      this.step = 'done';
    } catch { this.error = 'Network error'; }
    finally { this.loading = false; }
  }
}`;

const MOBILE_OTP_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mobile OTP Verification — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 28rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
    .subtitle { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
    label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem; }
    .mobile-row { display: flex; margin-bottom: 1rem; }
    .prefix { display: flex; align-items: center; padding: 0 0.75rem; background: #f3f4f6; border: 1px solid #d1d5db; border-right: none; border-radius: 0.5rem 0 0 0.5rem; font-size: 0.875rem; font-weight: 500; }
    .mobile-input { flex: 1; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0 0.5rem 0.5rem 0; font-size: 1rem; outline: none; }
    .mobile-input:focus { border-color: #005196; }
    .otp-row { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.5rem; }
    .otp-input { width: 3rem; height: 3.5rem; text-align: center; font-size: 1.25rem; font-weight: 700; border: 2px solid #d1d5db; border-radius: 0.75rem; outline: none; }
    .otp-input:focus { border-color: #005196; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:disabled { opacity: 0.6; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .timer { text-align: center; font-size: 0.875rem; color: #6b7280; margin-top: 1rem; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Mobile Verification</h1>
    <p class="subtitle">Verify your Indian mobile number via SMS OTP</p>
    <div id="error" class="error" role="alert"></div>
    <div id="stepMobile">
      <label for="mobile">Mobile Number <span style="color:#ef4444">*</span></label>
      <div class="mobile-row">
        <span class="prefix">+91</span>
        <input type="tel" id="mobile" class="mobile-input" placeholder="98765 43210" maxlength="12" required aria-required="true" />
      </div>
      <button class="btn" onclick="sendOtp()">Send OTP</button>
    </div>
    <div id="stepOtp" class="hidden">
      <p class="subtitle" style="text-align:center">OTP sent to your mobile</p>
      <div class="otp-row" id="otpRow"></div>
      <button class="btn" onclick="verifyOtp()">Verify OTP</button>
      <div class="timer" id="timerArea"></div>
    </div>
    <div id="stepDone" class="hidden" style="text-align:center;padding:2rem 0">
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">Mobile Verified</h2>
      <p style="color:#6b7280">Your mobile number has been verified successfully.</p>
    </div>
  </div>
  <script>
    let timer = 0, timerInterval;
    function showError(msg) { const e = document.getElementById('error'); e.textContent = msg; e.style.display = 'block'; }
    function hideError() { document.getElementById('error').style.display = 'none'; }
    function showStep(id) { ['stepMobile','stepOtp','stepDone'].forEach(s => document.getElementById(s).classList.add('hidden')); document.getElementById(id).classList.remove('hidden'); }
    // Build OTP inputs
    const row = document.getElementById('otpRow');
    for (let i = 0; i < 6; i++) {
      const inp = document.createElement('input');
      inp.type = 'text'; inp.inputMode = 'numeric'; inp.maxLength = 1;
      inp.className = 'otp-input'; inp.id = 'motp' + i;
      inp.setAttribute('aria-label', 'Digit ' + (i+1));
      inp.addEventListener('input', function() { if (!/^\\d?$/.test(this.value)) { this.value = ''; return; } if (this.value && i < 5) document.getElementById('motp'+(i+1)).focus(); });
      inp.addEventListener('keydown', function(e) { if (e.key === 'Backspace' && !this.value && i > 0) document.getElementById('motp'+(i-1)).focus(); });
      row.appendChild(inp);
    }
    function startTimer() {
      timer = 120; clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        timer--;
        const area = document.getElementById('timerArea');
        if (timer > 0) area.textContent = 'Resend in ' + Math.floor(timer/60) + ':' + String(timer%60).padStart(2,'0');
        else { clearInterval(timerInterval); area.innerHTML = '<button style="background:none;border:none;color:#005196;font-weight:600;cursor:pointer" onclick="sendOtp()">Resend OTP</button>'; }
      }, 1000);
    }
    async function sendOtp() {
      hideError();
      const mobile = document.getElementById('mobile').value.replace(/\\s/g, '');
      if (!/^[6-9]\\d{9}$/.test(mobile)) { showError('Enter a valid 10-digit Indian mobile number'); return; }
      try {
        const res = await fetch('/api/auth/send-mobile-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mobile: '+91' + mobile }) });
        if (!res.ok) { showError('Failed to send OTP'); return; }
        showStep('stepOtp'); startTimer();
        document.getElementById('motp0').focus();
      } catch { showError('Network error'); }
    }
    async function verifyOtp() {
      hideError();
      let code = '';
      for (let i = 0; i < 6; i++) code += document.getElementById('motp'+i).value;
      if (code.length !== 6) { showError('Enter complete OTP'); return; }
      try {
        const res = await fetch('/api/auth/verify-mobile-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mobile: '+91'+document.getElementById('mobile').value.replace(/\\s/g,''), otp: code }) });
        if (!res.ok) { showError('Invalid OTP'); return; }
        showStep('stepDone');
      } catch { showError('Network error'); }
    }
  </script>
</body>
</html>`;

function CodeDownloadsSection() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks + SMS OTP', code: MOBILE_OTP_REACT_CODE, filename: 'MobileOTPPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: MOBILE_OTP_ANGULAR_CODE, filename: 'mobile-otp.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: MOBILE_OTP_HTML_CODE, filename: 'mobile-otp.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Mobile OTP implementations for your framework.</p>
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
            <h3 className="font-bold text-foreground">Conformance Level</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-red-100 border-2 border-red-300 rounded text-red-800 font-bold text-sm">
                MANDATORY
              </div>
            </div>
            <div className="text-sm space-y-2 text-muted-foreground">
              <p>All mobile-based authentication flows MUST use this pattern.</p>
              <p className="font-bold text-foreground mt-3">Required For:</p>
              <ul className="space-y-1 ml-4">
                <li>• Citizen sign-up/sign-in</li>
                <li>• Mobile verification</li>
                <li>• 2FA implementation</li>
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
              <p className="text-muted-foreground">mobile-otp@ux4g.gov.in</p>
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
              <li>• Slack: #ux4g-mobile-otp</li>
              <li>• Docs: docs.ux4g.gov.in/mobile-otp</li>
              <li>• Response: 24 hours</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">For User-Facing Issues:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Helpline: 1800-XXX-XXXX (toll-free)</li>
              <li>• SMS not received: Check gateway status page</li>
              <li>• Report bugs: bugs@ux4g.gov.in</li>
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
          <p className="font-bold text-foreground mb-1">Mobile Format</p>
          <p className="text-muted-foreground">+91 + 10 digits (6-9 first)</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">OTP Length</p>
          <p className="text-muted-foreground">6 digits (numeric only)</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">SMS Delivery</p>
          <p className="text-muted-foreground">0-30s (ideal), up to 2min</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Validity</p>
          <p className="text-muted-foreground">5 minutes</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Resend Limit</p>
          <p className="text-muted-foreground">3 per hour per mobile</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">SMS Gateway</p>
          <p className="text-muted-foreground">CDAC/NIC (primary)</p>
        </div>
      </div>
    </div>
  );
}

function ParentPattern() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Parent Pattern</h3>
      </div>
      <div className="p-4">
        <Link 
          to="/patterns/identity/otp-verification"
          className="block p-3 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Hash size={16} className="text-primary" />
            <span className="font-bold text-sm text-foreground">OTP Verification</span>
          </div>
          <p className="text-xs text-muted-foreground">Parent pattern with shared logic</p>
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
        <RelatedPatternLink to="/patterns/identity/otp-verification" text="Email OTP Pattern" />
        <RelatedPatternLink to="/patterns/identity/sign-up" text="Sign Up Pattern" />
        <RelatedPatternLink to="/patterns/identity/sign-in" text="Sign In Pattern" />
        <RelatedPatternLink to="/patterns/identity/account-recovery" text="Account Recovery" />
        <RelatedPatternLink to="/patterns/identity/forgot-password" text="Forgot Password" />
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
        <ResourceLink icon={<MessageSquare size={14} />} text="TRAI DLT Guidelines" />
        <ResourceLink icon={<Code size={14} />} text="Web OTP API Docs" />
        <ResourceLink icon={<Shield size={14} />} text="SMS Gateway Setup" />
        <ResourceLink icon={<Signal size={14} />} text="Network Testing Guide" />
        <ResourceLink icon={<HelpCircle size={14} />} text="User Support Scripts" />
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
              <span>Branches to success, delay, or error path</span>
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

function NetworkIssue({ issue, description, solution }: { issue: string; description: string; solution: string }) {
  return (
    <div className="bg-card border border-border rounded p-3">
      <p className="font-bold text-foreground mb-1">{issue}</p>
      <p className="text-muted-foreground text-xs mb-2">{description}</p>
      <p className="text-xs text-green-700">
        <CheckCircle size={12} className="inline mr-1" />
        <span className="font-bold">Solution:</span> {solution}
      </p>
    </div>
  );
}

function RetryStep({ step, timing, gateway }: { step: string; timing: string; gateway: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="w-16 text-xs font-bold text-foreground">{step}</div>
      <div className="flex-1">
        <p className="text-xs text-muted-foreground"><strong>Timing:</strong> {timing}</p>
        <p className="text-xs text-muted-foreground">{gateway}</p>
      </div>
    </div>
  );
}

function TimelineItem({ time, message, action }: { time: string; message: string; action: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-24 text-xs font-bold text-foreground font-mono">{time}</div>
      <div className="flex-1">
        <p className="text-xs text-foreground font-bold mb-1">{message}</p>
        <p className="text-xs text-muted-foreground">{action}</p>
      </div>
    </div>
  );
}

function GuidanceItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-2">
      {icon}
      <span className="text-xs text-muted-foreground">{text}</span>
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

function ResourceLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a href="#" className="flex items-center gap-2 p-2 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors text-foreground">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </a>
  );
}
