import { Link } from "react-router";
import { Shield, CheckCircle, AlertCircle, Info, XCircle, ArrowRight, ArrowLeft, ChevronRight, Clock, RefreshCw, Smartphone, Mail, Hash, Eye, Lock, HelpCircle, Check, X } from "lucide-react";

export default function OTPVerificationPattern() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link to="/patterns/identity" className="hover:text-[#000080]">
              Identity & Access Patterns
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-medium">OTP Verification</span>
          </div>

          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center">
                  <Hash size={32} className="text-[#000080]" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">UX4G Identity & Access Pattern</div>
                  <h1 className="text-3xl font-bold text-gray-900">OTP Verification (Parent Pattern)</h1>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Comprehensive parent pattern for One-Time Password verification used across sign-in, sign-up, 
                account recovery, and transaction verification journeys. Defines shared OTP logic, UI states, 
                validation rules, and accessibility requirements for all OTP implementations.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-gray-600">Pattern ID: <span className="font-bold text-gray-900">UX4G-PAT-002-00</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-gray-600">Version: <span className="font-bold text-gray-900">1.0.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-gray-600">Updated: <span className="font-bold text-gray-900">April 2026</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-red-50 border-2 border-red-200 rounded text-red-700 font-bold text-xs text-center uppercase">
                Conformance<br/>Mandatory
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-300 sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-12">
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
              { id: "governance", label: "Governance" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#000080] hover:bg-gray-100 rounded whitespace-nowrap transition-colors"
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
            <ExampleStates />
            <OTPPatterns />
            <ValidationLogic />
            <ResendLogic />
            <AccessibilitySection />
            <ImplementationSection />
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
      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
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
      <div className="border-l-4 border-[#000080] pl-4">
        <h2 className="text-2xl font-bold text-gray-900">Pattern Overview</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Purpose */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
            <h3 className="font-bold text-gray-900">Purpose</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Provide a secure, accessible, and user-friendly method for verifying user identity or 
              authorizing sensitive actions using time-limited one-time passwords.
            </p>
            <div className="space-y-2">
              <InfoItem icon={<Shield size={16} className="text-[#000080]" />} text="Verify user identity during sign-in/sign-up" />
              <InfoItem icon={<Lock size={16} className="text-[#000080]" />} text="Authorize sensitive transactions" />
              <InfoItem icon={<RefreshCw size={16} className="text-[#000080]" />} text="Enable secure account recovery" />
              <InfoItem icon={<CheckCircle size={16} className="text-green-600" />} text="Prevent unauthorized access" />
            </div>
          </div>
        </div>

        {/* User Goals */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
            <h3 className="font-bold text-gray-900">User Goals</h3>
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
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-green-100 border-b-2 border-green-300 px-6 py-4">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
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
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-red-50 border-b-2 border-red-200 px-6 py-4">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
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
      <div className="border-l-4 border-[#000080] pl-4">
        <h2 className="text-2xl font-bold text-gray-900">End-to-End Flow Diagram</h2>
      </div>

      <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
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
      <div className="border-l-4 border-[#000080] pl-4">
        <h2 className="text-2xl font-bold text-gray-900">Example States</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Default State */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-blue-50 border-b-2 border-blue-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Default OTP Entry</h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 border-2 border-gray-300 rounded p-6 space-y-4">
              <div className="text-center">
                <Hash size={40} className="text-[#000080] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Enter OTP</h4>
                <p className="text-sm text-gray-600 mb-4">
                  We've sent a 6-digit code to<br/>
                  <span className="font-bold text-gray-900">+91 ******* 123</span>
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-12 h-12 border-2 border-gray-300 rounded bg-white"></div>
                ))}
              </div>
              <div className="text-center text-sm text-gray-600">
                <Clock size={14} className="inline mr-1" />
                Code expires in <span className="font-bold text-gray-900">4:45</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-600 space-y-1">
              <p><strong>State:</strong> Ready for input</p>
              <p><strong>Timer:</strong> Counting down from 5:00</p>
              <p><strong>Resend:</strong> Disabled until 0:00</p>
            </div>
          </div>
        </div>

        {/* Incomplete OTP */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-orange-50 border-b-2 border-orange-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Incomplete OTP</h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 border-2 border-orange-300 rounded p-6 space-y-4">
              <div className="text-center">
                <Hash size={40} className="text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Enter OTP</h4>
                <p className="text-sm text-gray-600 mb-4">
                  We've sent a 6-digit code to<br/>
                  <span className="font-bold text-gray-900">+91 ******* 123</span>
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                <div className="w-12 h-12 border-2 border-orange-500 rounded bg-white flex items-center justify-center font-bold text-gray-900">1</div>
                <div className="w-12 h-12 border-2 border-orange-500 rounded bg-white flex items-center justify-center font-bold text-gray-900">2</div>
                <div className="w-12 h-12 border-2 border-orange-500 rounded bg-white flex items-center justify-center font-bold text-gray-900">3</div>
                <div className="w-12 h-12 border-2 border-orange-500 rounded bg-white"></div>
                <div className="w-12 h-12 border-2 border-gray-300 rounded bg-white"></div>
                <div className="w-12 h-12 border-2 border-gray-300 rounded bg-white"></div>
              </div>
              <div className="bg-orange-50 border border-orange-300 rounded p-3 text-sm text-orange-800">
                <AlertCircle size={14} className="inline mr-2" />
                Please enter all 6 digits
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-600 space-y-1">
              <p><strong>State:</strong> Partial input (3 of 6 digits)</p>
              <p><strong>Validation:</strong> On submit attempt</p>
            </div>
          </div>
        </div>

        {/* Invalid OTP */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-red-50 border-b-2 border-red-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Invalid OTP</h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 border-2 border-red-400 rounded p-6 space-y-4">
              <div className="text-center">
                <XCircle size={40} className="text-red-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Incorrect OTP</h4>
                <p className="text-sm text-gray-600 mb-4">
                  The code you entered doesn't match.<br/>
                  Please try again.
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-12 h-12 border-2 border-red-400 rounded bg-red-50"></div>
                ))}
              </div>
              <div className="bg-red-50 border border-red-300 rounded p-3 text-sm text-red-800">
                <XCircle size={14} className="inline mr-2" />
                Invalid code. 2 attempts remaining.
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-600 space-y-1">
              <p><strong>State:</strong> Validation failed</p>
              <p><strong>Attempts:</strong> 1 of 3 used</p>
              <p><strong>Action:</strong> Clear fields, allow retry</p>
            </div>
          </div>
        </div>

        {/* Expired OTP */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-yellow-50 border-b-2 border-yellow-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Expired OTP</h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 border-2 border-yellow-400 rounded p-6 space-y-4">
              <div className="text-center">
                <Clock size={40} className="text-yellow-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Code Expired</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Your verification code has expired.<br/>
                  Please request a new one.
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-12 h-12 border-2 border-gray-300 rounded bg-gray-100 opacity-50"></div>
                ))}
              </div>
              <button className="w-full px-4 py-3 bg-[#000080] text-white font-bold rounded hover:bg-blue-900 flex items-center justify-center gap-2">
                <RefreshCw size={16} />
                Resend OTP
              </button>
            </div>
            <div className="mt-4 text-xs text-gray-600 space-y-1">
              <p><strong>State:</strong> Time limit exceeded (5:00)</p>
              <p><strong>Action:</strong> Disable input, enable resend</p>
            </div>
          </div>
        </div>

        {/* Resend OTP */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-purple-50 border-b-2 border-purple-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Resend OTP Available</h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 border-2 border-gray-300 rounded p-6 space-y-4">
              <div className="text-center">
                <RefreshCw size={40} className="text-[#000080] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Didn't receive code?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Check your messages or<br/>
                  request a new code
                </p>
              </div>
              <div className="flex gap-2 justify-center opacity-50">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-12 h-12 border-2 border-gray-300 rounded bg-white"></div>
                ))}
              </div>
              <div className="space-y-2">
                <button className="w-full px-4 py-3 bg-[#000080] text-white font-bold rounded hover:bg-blue-900">
                  Resend OTP
                </button>
                <button className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded hover:bg-gray-50">
                  Change Mobile Number
                </button>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-600 space-y-1">
              <p><strong>State:</strong> Resend enabled (timer at 0:00)</p>
              <p><strong>Options:</strong> Resend or change contact</p>
            </div>
          </div>
        </div>

        {/* Attempts Exceeded */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-red-100 border-b-2 border-red-300 px-6 py-4">
            <h3 className="font-bold text-gray-900">Attempts Exceeded</h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 border-2 border-red-500 rounded p-6 space-y-4">
              <div className="text-center">
                <XCircle size={40} className="text-red-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Too Many Attempts</h4>
                <p className="text-sm text-gray-600 mb-4">
                  You've exceeded the maximum number<br/>
                  of verification attempts. Please wait.
                </p>
              </div>
              <div className="bg-red-50 border-2 border-red-300 rounded p-4 text-sm">
                <p className="text-red-800 font-bold mb-2">Account temporarily locked</p>
                <p className="text-gray-700">Try again after <span className="font-bold">14 minutes</span></p>
              </div>
              <button className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded hover:bg-gray-50 flex items-center justify-center gap-2">
                <HelpCircle size={16} />
                Get Help
              </button>
            </div>
            <div className="mt-4 text-xs text-gray-600 space-y-1">
              <p><strong>State:</strong> Locked after 3 failed attempts</p>
              <p><strong>Cooldown:</strong> 15 minutes</p>
            </div>
          </div>
        </div>

        {/* Success State */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-green-50 border-b-2 border-green-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Verification Success</h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 border-2 border-green-400 rounded p-6 space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Verified Successfully</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Your identity has been confirmed.<br/>
                  Redirecting you now...
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                {[1,2,3,4,5,6].map((num) => (
                  <div key={num} className="w-12 h-12 border-2 border-green-500 rounded bg-green-50 flex items-center justify-center font-bold text-green-700">{num}</div>
                ))}
              </div>
              <div className="bg-green-50 border border-green-300 rounded p-3 text-sm text-green-800">
                <CheckCircle size={14} className="inline mr-2" />
                Proceeding to your account...
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-600 space-y-1">
              <p><strong>State:</strong> Validation successful</p>
              <p><strong>Action:</strong> Auto-redirect in 2 seconds</p>
            </div>
          </div>
        </div>

        {/* Change Number */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
            <h3 className="font-bold text-gray-900">Change Contact Method</h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 border-2 border-gray-300 rounded p-6 space-y-4">
              <div className="text-center">
                <Smartphone size={40} className="text-[#000080] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Update Mobile Number</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Current: <span className="font-bold">+91 ******* 123</span><br/>
                  Enter new number to receive OTP
                </p>
              </div>
              <div className="space-y-3">
                <input 
                  type="tel" 
                  placeholder="Enter 10-digit mobile number"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded text-center font-mono"
                />
                <button className="w-full px-4 py-3 bg-[#000080] text-white font-bold rounded hover:bg-blue-900">
                  Send OTP to New Number
                </button>
                <button className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded hover:bg-gray-50">
                  Cancel
                </button>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-600 space-y-1">
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
      <div className="border-l-4 border-[#000080] pl-4">
        <h2 className="text-2xl font-bold text-gray-900">OTP Input Patterns</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Single Field Pattern */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-blue-50 border-b-2 border-blue-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Single Field Pattern</h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 border-2 border-gray-300 rounded p-6 mb-4">
              <label className="block text-sm font-bold text-gray-900 mb-2">Enter 6-digit OTP</label>
              <input 
                type="text" 
                maxLength={6}
                placeholder="000000"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded text-center font-mono text-2xl tracking-widest"
              />
            </div>
            <div className="space-y-3 text-sm">
              <h4 className="font-bold text-gray-900">Advantages</h4>
              <div className="space-y-2">
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Simpler for screen readers" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Better paste behavior" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Easier keyboard navigation" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Less DOM complexity" />
              </div>
              <h4 className="font-bold text-gray-900 mt-4">Recommended For</h4>
              <p className="text-gray-700">Mobile-first applications, accessibility priority, simpler implementations</p>
            </div>
          </div>
        </div>

        {/* Multi-Field Pattern */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-purple-50 border-b-2 border-purple-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Multi-Field Pattern (6 Inputs)</h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 border-2 border-gray-300 rounded p-6 mb-4">
              <label className="block text-sm font-bold text-gray-900 mb-2">Enter 6-digit OTP</label>
              <div className="flex gap-2 justify-center">
                {[...Array(6)].map((_, i) => (
                  <input 
                    key={i}
                    type="text" 
                    maxLength={1}
                    className="w-12 h-12 border-2 border-gray-300 rounded text-center font-bold text-xl"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <h4 className="font-bold text-gray-900">Advantages</h4>
              <div className="space-y-2">
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Visual clarity of progress" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Clear digit separation" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Familiar banking pattern" />
                <InfoItem icon={<Check size={14} className="text-green-600" />} text="Per-digit validation" />
              </div>
              <h4 className="font-bold text-gray-900 mt-4">Recommended For</h4>
              <p className="text-gray-700">Desktop applications, high-security contexts, traditional banking services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Info size={20} className="text-[#000080]" />
          Pattern Selection Guidelines
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold text-gray-900 mb-2">Use Single Field When:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Mobile is primary interface</li>
              <li>• Accessibility is critical</li>
              <li>• Auto-fill/paste is expected</li>
              <li>• Development resources limited</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-gray-900 mb-2">Use Multi-Field When:</p>
            <ul className="space-y-1 text-gray-700">
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
      <div className="border-l-4 border-[#000080] pl-4">
        <h2 className="text-2xl font-bold text-gray-900">Validation Logic & Rules</h2>
      </div>

      <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
          <h3 className="font-bold text-gray-900">OTP Generation Rules</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4 font-bold text-gray-900">Parameter</th>
                <th className="text-left py-3 px-4 font-bold text-gray-900">Specification</th>
                <th className="text-left py-3 px-4 font-bold text-gray-900">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-medium text-gray-900">Length</td>
                <td className="py-3 px-4 text-gray-700">6 digits</td>
                <td className="py-3 px-4 text-gray-700">Balance security & usability</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-medium text-gray-900">Character Set</td>
                <td className="py-3 px-4 text-gray-700">Numeric only (0-9)</td>
                <td className="py-3 px-4 text-gray-700">Phone keypad compatibility</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-medium text-gray-900">Validity Period</td>
                <td className="py-3 px-4 text-gray-700">5-10 minutes</td>
                <td className="py-3 px-4 text-gray-700">Security vs. SMS delays</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-medium text-gray-900">Max Attempts</td>
                <td className="py-3 px-4 text-gray-700">3 attempts</td>
                <td className="py-3 px-4 text-gray-700">Prevent brute force</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-medium text-gray-900">Lockout Duration</td>
                <td className="py-3 px-4 text-gray-700">15 minutes</td>
                <td className="py-3 px-4 text-gray-700">Security timeout</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">Resend Cooldown</td>
                <td className="py-3 px-4 text-gray-700">30 seconds</td>
                <td className="py-3 px-4 text-gray-700">Prevent SMS spam</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Input Validation */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-blue-50 border-b-2 border-blue-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Input Validation</h3>
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
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-green-50 border-b-2 border-green-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Server Validation</h3>
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

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <AlertCircle size={20} className="text-yellow-600" />
          Security Considerations
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-bold text-gray-900 mb-1">Rate Limiting</p>
            <p>Limit OTP requests to 3 per hour per contact</p>
          </div>
          <div>
            <p className="font-bold text-gray-900 mb-1">SMS Sender Verification</p>
            <p>Use registered sender ID (e.g., "GOV-IN")</p>
          </div>
          <div>
            <p className="font-bold text-gray-900 mb-1">Browser Autocomplete</p>
            <p>Use autocomplete="one-time-code" attribute</p>
          </div>
          <div>
            <p className="font-bold text-gray-900 mb-1">Code Masking</p>
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
      <div className="border-l-4 border-[#000080] pl-4">
        <h2 className="text-2xl font-bold text-gray-900">Resend & Countdown Logic</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Countdown Behavior */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-blue-50 border-b-2 border-blue-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Countdown Timer Behavior</h3>
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
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-purple-50 border-b-2 border-purple-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Resend Flow & Messaging</h3>
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

      <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
          <h3 className="font-bold text-gray-900">Resend Button States & Messaging</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4">
            {/* Disabled State */}
            <div className="bg-gray-50 border-2 border-gray-300 rounded p-4 text-center">
              <button className="w-full px-4 py-2 bg-gray-300 text-gray-500 font-bold rounded cursor-not-allowed mb-2">
                Resend OTP
              </button>
              <p className="text-xs text-gray-600">Available in 0:23</p>
              <div className="mt-2 pt-2 border-t border-gray-300">
                <p className="text-xs text-gray-700"><strong>State:</strong> Disabled</p>
                <p className="text-xs text-gray-700"><strong>Timer:</strong> Counting down</p>
              </div>
            </div>

            {/* Enabled State */}
            <div className="bg-gray-50 border-2 border-blue-300 rounded p-4 text-center">
              <button className="w-full px-4 py-2 bg-[#000080] text-white font-bold rounded hover:bg-blue-900 mb-2">
                Resend OTP
              </button>
              <p className="text-xs text-gray-600">Didn't receive code?</p>
              <div className="mt-2 pt-2 border-t border-gray-300">
                <p className="text-xs text-gray-700"><strong>State:</strong> Enabled</p>
                <p className="text-xs text-gray-700"><strong>Timer:</strong> Expired (0:00)</p>
              </div>
            </div>

            {/* Success State */}
            <div className="bg-gray-50 border-2 border-green-300 rounded p-4 text-center">
              <button className="w-full px-4 py-2 bg-gray-300 text-gray-500 font-bold rounded cursor-not-allowed mb-2">
                Resend OTP
              </button>
              <p className="text-xs text-green-700"><CheckCircle size={12} className="inline mr-1" />New code sent!</p>
              <div className="mt-2 pt-2 border-t border-gray-300">
                <p className="text-xs text-gray-700"><strong>State:</strong> Just sent</p>
                <p className="text-xs text-gray-700"><strong>Timer:</strong> Reset to 5:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Info size={20} className="text-orange-600" />
          Accessibility Considerations for Timers
        </h3>
        <div className="space-y-2 text-sm text-gray-700">
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
      <div className="border-l-4 border-[#000080] pl-4">
        <h2 className="text-2xl font-bold text-gray-900">Accessibility Guidelines</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Keyboard Behavior */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-purple-50 border-b-2 border-purple-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Keyboard Behavior</h3>
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
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-blue-50 border-b-2 border-blue-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Screen Reader Considerations</h3>
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
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-green-50 border-b-2 border-green-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Paste Behavior</h3>
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
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-yellow-50 border-b-2 border-yellow-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Focus Management</h3>
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

      <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
          <h3 className="font-bold text-gray-900">WCAG 2.1 AA Compliance Checklist</h3>
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
      <div className="border-l-4 border-[#000080] pl-4">
        <h2 className="text-2xl font-bold text-gray-900">Implementation Notes</h2>
      </div>

      <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
          <h3 className="font-bold text-gray-900">Technical Requirements</h3>
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
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-blue-50 border-b-2 border-blue-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Code Example: HTML Structure</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`<!-- Single Field Pattern -->
<div class="otp-container">
  <label for="otp" class="sr-only">
    Enter 6-digit verification code
  </label>
  <input 
    type="text" 
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

        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-green-50 border-b-2 border-green-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Code Example: JavaScript Logic</h3>
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

// ==================== GOVERNANCE SECTION ====================

function GovernanceSection() {
  return (
    <section id="governance" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-[#000080] pl-4">
        <h2 className="text-2xl font-bold text-gray-900">Governance & Lifecycle</h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-green-100 border-b-2 border-green-300 px-6 py-4">
            <h3 className="font-bold text-gray-900">Lifecycle Status</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-green-100 border-2 border-green-400 rounded text-green-800 font-bold">
                STABLE
              </div>
            </div>
            <div className="text-sm space-y-2">
              <p className="text-gray-700"><strong>Version:</strong> 1.0.0</p>
              <p className="text-gray-700"><strong>Released:</strong> April 2026</p>
              <p className="text-gray-700"><strong>Last Updated:</strong> April 2026</p>
              <p className="text-gray-700"><strong>Next Review:</strong> October 2026</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-red-50 border-b-2 border-red-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Conformance Level</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-red-100 border-2 border-red-300 rounded text-red-800 font-bold text-sm">
                MANDATORY
              </div>
            </div>
            <div className="text-sm space-y-2 text-gray-700">
              <p>All government digital services using OTP verification MUST follow this pattern.</p>
              <p className="font-bold text-gray-900 mt-3">Compliance Required For:</p>
              <ul className="space-y-1 ml-4">
                <li>• Citizen-facing services</li>
                <li>• Authentication flows</li>
                <li>• Transaction verification</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-blue-50 border-b-2 border-blue-200 px-6 py-4">
            <h3 className="font-bold text-gray-900">Pattern Owner</h3>
          </div>
          <div className="p-6 text-sm space-y-3">
            <div>
              <p className="font-bold text-gray-900">Team:</p>
              <p className="text-gray-700">Identity & Access Team</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">Contact:</p>
              <p className="text-gray-700">identity@ux4g.gov.in</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">Support Hours:</p>
              <p className="text-gray-700">Mon-Fri, 9 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
          <h3 className="font-bold text-gray-900">Support & Escalation</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Implementation Questions</h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> support@ux4g.gov.in</p>
                <p><strong>Slack:</strong> #ux4g-identity-patterns</p>
                <p><strong>Documentation:</strong> docs.ux4g.gov.in/otp</p>
                <p><strong>Response Time:</strong> 24 hours</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Compliance Issues</h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> compliance@ux4g.gov.in</p>
                <p><strong>Escalation:</strong> UX4G Governance Board</p>
                <p><strong>Audit Request:</strong> audit@ux4g.gov.in</p>
                <p><strong>Response Time:</strong> 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Info size={20} className="text-yellow-600" />
          Planned Updates & Roadmap
        </h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <p className="font-bold text-gray-900">Q3 2026: Mobile-first enhancements</p>
            <p>Biometric OTP confirmation, improved SMS auto-read</p>
          </div>
          <div>
            <p className="font-bold text-gray-900">Q4 2026: Multilingual support</p>
            <p>OTP messages in 22 official Indian languages</p>
          </div>
          <div>
            <p className="font-bold text-gray-900">Q1 2027: Advanced security</p>
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
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-blue-50 border-b-2 border-blue-200 px-4 py-3">
        <h3 className="font-bold text-gray-900 text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 text-xs space-y-3">
        <div>
          <p className="font-bold text-gray-900 mb-1">OTP Length</p>
          <p className="text-gray-700">6 digits (numeric only)</p>
        </div>
        <div>
          <p className="font-bold text-gray-900 mb-1">Validity Period</p>
          <p className="text-gray-700">5-10 minutes</p>
        </div>
        <div>
          <p className="font-bold text-gray-900 mb-1">Max Attempts</p>
          <p className="text-gray-700">3 attempts per OTP</p>
        </div>
        <div>
          <p className="font-bold text-gray-900 mb-1">Lockout Duration</p>
          <p className="text-gray-700">15 minutes after failures</p>
        </div>
        <div>
          <p className="font-bold text-gray-900 mb-1">Resend Cooldown</p>
          <p className="text-gray-700">30 seconds between requests</p>
        </div>
        <div>
          <p className="font-bold text-gray-900 mb-1">Input Mode</p>
          <p className="text-gray-700">inputmode="numeric"</p>
        </div>
        <div>
          <p className="font-bold text-gray-900 mb-1">Autocomplete</p>
          <p className="text-gray-700">autocomplete="one-time-code"</p>
        </div>
      </div>
    </div>
  );
}

function ChildPatterns() {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-purple-50 border-b-2 border-purple-200 px-4 py-3">
        <h3 className="font-bold text-gray-900 text-sm">Child Patterns</h3>
      </div>
      <div className="p-4 space-y-2">
        <Link 
          to="/patterns/identity/mobile-otp"
          className="block p-3 bg-gray-50 border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Smartphone size={16} className="text-[#000080]" />
            <span className="font-bold text-sm text-gray-900">Mobile OTP</span>
          </div>
          <p className="text-xs text-gray-600">SMS-based verification</p>
        </Link>
        <Link 
          to="/patterns/identity/otp-verification"
          className="block p-3 bg-gray-50 border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Mail size={16} className="text-[#000080]" />
            <span className="font-bold text-sm text-gray-900">Email OTP</span>
          </div>
          <p className="text-xs text-gray-600">Email-based verification</p>
        </Link>
      </div>
    </div>
  );
}

function RelatedPatterns() {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-green-50 border-b-2 border-green-200 px-4 py-3">
        <h3 className="font-bold text-gray-900 text-sm">Related Patterns</h3>
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
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-orange-50 border-b-2 border-orange-200 px-4 py-3">
        <h3 className="font-bold text-gray-900 text-sm">Resources</h3>
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
      <span className="text-xs text-gray-700 flex-1">{text}</span>
    </div>
  );
}

function GoalItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
}

function WhenItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

function WhenNotItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">{text}</span>
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
                  variant === 'warning' ? 'bg-orange-50' : 'bg-gray-50';
  const borderColor = variant === 'success' ? 'border-green-300' : 
                      variant === 'error' ? 'border-red-300' :
                      variant === 'warning' ? 'border-orange-300' : 'border-gray-300';
  
  return (
    <div className={`${bgColor} border-2 ${borderColor} rounded-lg p-4`}>
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-[#000080] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-gray-900">{title}</h4>
            <span className="text-xs font-bold text-gray-600 px-2 py-1 bg-white border border-gray-300 rounded">
              {state}
            </span>
          </div>
          <p className="text-sm text-gray-700">{description}</p>
          {branches && (
            <div className="mt-2 text-xs text-gray-600 flex items-center gap-2">
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
    <div className="bg-white border border-gray-300 rounded p-3">
      <p className="font-bold text-gray-900 mb-1">{rule}</p>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-xs text-gray-600">
        <Clock size={12} className="inline mr-1" />
        <span className="font-bold">Timing:</span> {timing}
      </p>
    </div>
  );
}

function TimerState({ time, state, display, action }: { time: string; state: string; display: string; action: string }) {
  return (
    <div className="bg-white border border-gray-300 rounded p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-gray-900 font-mono">{time}</span>
        <span className="text-xs font-bold text-gray-600 px-2 py-1 bg-gray-100 rounded">{state}</span>
      </div>
      <p className="text-gray-700 mb-1 text-xs">{display}</p>
      <p className="text-gray-600 text-xs">
        <ArrowRight size={10} className="inline mr-1" />
        {action}
      </p>
    </div>
  );
}

function ResendStep({ step, action, result }: { step: string; action: string; result: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-[#000080] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">
        {step}
      </div>
      <div>
        <p className="font-bold text-gray-900 text-xs">{action}</p>
        <p className="text-gray-600 text-xs">{result}</p>
      </div>
    </div>
  );
}

function AccessibilityItem({ label, description }: { label: string; description: string }) {
  return (
    <div>
      <p className="font-bold text-gray-900 mb-1">{label}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function ComplianceItem({ criterion, status, note }: { criterion: string; status: 'pass' | 'partial' | 'fail'; note: string }) {
  const statusColor = status === 'pass' ? 'text-green-600' : status === 'partial' ? 'text-yellow-600' : 'text-red-600';
  const statusIcon = status === 'pass' ? <CheckCircle size={14} /> : status === 'partial' ? <AlertCircle size={14} /> : <XCircle size={14} />;
  
  return (
    <div className="bg-gray-50 border border-gray-300 rounded p-3">
      <div className="flex items-center gap-2 mb-1">
        <span className={statusColor}>{statusIcon}</span>
        <span className="font-bold text-gray-900 text-xs">{criterion}</span>
      </div>
      <p className="text-gray-600 text-xs">{note}</p>
    </div>
  );
}

function ImplementationItem({ category, requirements }: { category: string; requirements: string[] }) {
  return (
    <div>
      <h4 className="font-bold text-gray-900 mb-2">{category}</h4>
      <ul className="space-y-1 ml-4">
        {requirements.map((req, index) => (
          <li key={index} className="text-gray-700 flex items-start gap-2">
            <span className="text-[#000080] font-bold">•</span>
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RelatedPatternLink({ to, text }: { to: string; text: string }) {
  return (
    <Link to={to} className="block p-2 bg-gray-50 border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-300 transition-colors">
      <div className="flex items-center gap-2">
        <ArrowRight size={12} className="text-[#000080]" />
        <span className="text-gray-900">{text}</span>
      </div>
    </Link>
  );
}

function ResourceLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a href="#" className="flex items-center gap-2 p-2 bg-gray-50 border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-300 transition-colors text-gray-900">
      <span className="text-[#000080]">{icon}</span>
      <span>{text}</span>
    </a>
  );
}
