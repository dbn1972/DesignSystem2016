import { Link } from "react-router";
import { Shield, CheckCircle, AlertCircle, Info, XCircle, ArrowRight, ChevronRight, Clock, HelpCircle, Check, X, User, Lock, FileText, Eye } from "lucide-react";

export default function AadhaarAuthenticationPattern() {
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
            <span className="text-foreground font-medium">Aadhaar Authentication</span>
          </div>

          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-orange-100 border-2 border-orange-300 rounded flex items-center justify-center">
                  <Shield size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Identity & Access Pattern</div>
                  <h1 className="text-3xl font-bold text-foreground">Aadhaar Authentication</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Governed identity verification pattern using Aadhaar-based authentication for authorized 
                government services. Ensures legal compliance, informed consent, privacy protection, and 
                accessible fallback paths. Use only when legally mandated or specifically authorized.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-002-06</span></span>
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
              <div className="px-6 py-3 bg-orange-100 border-2 border-orange-300 rounded text-orange-800 font-bold text-sm text-center">
                RESTRICTED USE
              </div>
              <div className="px-6 py-3 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded text-red-700 font-bold text-xs text-center uppercase">
                Policy<br/>Governed
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
              { id: "approved-uses", label: "Approved Uses" },
              { id: "flow", label: "Flow Diagram" },
              { id: "screens", label: "Example Screens" },
              { id: "consent", label: "Consent & Privacy" },
              { id: "fallback", label: "Fallback Paths" },
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
            <ApprovedUsesSection />
            <FlowDiagram />
            <ExampleScreens />
            <ConsentPrivacySection />
            <FallbackSection />
            <AccessibilitySection />
            <ImplementationSection />
            <GovernanceSection />
          </div>

          {/* Sidebar - 3 columns */}
          <aside className="col-span-3 space-y-6 sticky top-24 self-start">
            <PolicyAlert />
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
            <div>UX4G Design System Platform • Aadhaar Authentication Pattern</div>
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

      <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-6 mb-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <AlertCircle size={20} className="text-orange-600" />
          Important: Restricted Use Pattern
        </h3>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>Aadhaar authentication is NOT a default authentication method.</strong> It may only be used 
            when explicitly authorized by law or UIDAI regulations. Services must provide alternative 
            authentication methods and cannot deny services to citizens who choose not to use Aadhaar.
          </p>
          <p className="font-bold text-orange-800">
            Supreme Court Ruling (K.S. Puttaswamy vs. Union of India, 2018): Aadhaar cannot be mandatory 
            for services except where backed by law. Privacy and consent are fundamental rights.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Purpose */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Purpose</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Provide secure, legally-compliant Aadhaar-based identity verification for authorized government 
              services. Ensures user consent, privacy protection, and accessible alternatives while meeting 
              UIDAI technical and regulatory requirements.
            </p>
            <div className="space-y-2">
              <InfoItem icon={<Shield size={16} className="text-primary" />} text="Verify identity via UIDAI ecosystem" />
              <InfoItem icon={<Lock size={16} className="text-primary" />} text="Ensure explicit informed consent" />
              <InfoItem icon={<FileText size={16} className="text-primary" />} text="Maintain legal compliance" />
              <InfoItem icon={<CheckCircle size={16} className="text-green-600" />} text="Provide accessible fallback paths" />
            </div>
          </div>
        </div>

        {/* User Goals */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">User Goals</h3>
          </div>
          <div className="p-6 space-y-2">
            <GoalItem text="Understand why Aadhaar is required" />
            <GoalItem text="Give informed consent voluntarily" />
            <GoalItem text="Complete authentication quickly" />
            <GoalItem text="Know how data will be used" />
            <GoalItem text="Access alternative methods if needed" />
          </div>
        </div>

        {/* When to Use */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-100 border-b-2 border-green-300 px-6 py-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Check size={18} className="text-green-600" />
              When to Use (ONLY if authorized)
            </h3>
          </div>
          <div className="p-6 space-y-2 text-sm">
            <WhenItem text="Legally mandated by Parliament Act" />
            <WhenItem text="Subsidies, benefits, or services from Consolidated Fund" />
            <WhenItem text="UIDAI explicitly authorizes usage" />
            <WhenItem text="Authentication API agreement with UIDAI" />
            <WhenItem text="Alternative authentication provided" />
          </div>
        </div>

        {/* When Not to Use */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <X size={18} className="text-red-600" />
              When NOT to Use
            </h3>
          </div>
          <div className="p-6 space-y-2 text-sm">
            <WhenNotItem text="No legal backing or UIDAI authorization" />
            <WhenNotItem text="As default/primary authentication method" />
            <WhenNotItem text="For non-essential services" />
            <WhenNotItem text="Without explicit user consent" />
            <WhenNotItem text="Without alternative authentication option" />
            <WhenNotItem text="For commercial/private sector use (except authorized)" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== APPROVED USES SECTION ====================

function ApprovedUsesSection() {
  return (
    <section id="approved-uses" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Approved Use Cases</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Legally Authorized Uses</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <UseCase 
              title="Welfare Subsidies & Benefits"
              description="LPG subsidy, food ration (PDS), MGNREGA wages, pension schemes"
              status="authorized"
            />
            <UseCase 
              title="Direct Benefit Transfer (DBT)"
              description="Scholarship payments, financial assistance, government grants"
              status="authorized"
            />
            <UseCase 
              title="PAN-Aadhaar Linking"
              description="Income tax filing, PAN verification (as per Finance Act)"
              status="authorized"
            />
            <UseCase 
              title="EPFO / Provident Fund"
              description="Employee provident fund account management and withdrawals"
              status="authorized"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border-b-2 border-yellow-200 dark:border-yellow-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Conditional / Restricted Uses</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <UseCase 
              title="Exam Registration"
              description="JEE, NEET enrollment (voluntary basis with alternatives)"
              status="conditional"
            />
            <UseCase 
              title="School Admissions"
              description="Only for mid-day meal scheme, not for admission denial"
              status="conditional"
            />
            <UseCase 
              title="SIM Card Activation"
              description="Telecom operators (with user consent, alternatives required)"
              status="conditional"
            />
            <UseCase 
              title="Bank Account Opening"
              description="eKYC with consent; cannot deny service if Aadhaar unavailable"
              status="conditional"
            />
          </div>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <XCircle size={20} className="text-red-600" />
          Prohibited Uses (Cannot Mandate Aadhaar)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div>
            <p className="font-bold text-foreground">Education</p>
            <p>Cannot deny school admission, exam entry, or certificates if no Aadhaar</p>
          </div>
          <div>
            <p className="font-bold text-foreground">Healthcare</p>
            <p>Cannot deny treatment, vaccination, or health services without Aadhaar</p>
          </div>
          <div>
            <p className="font-bold text-foreground">General Services</p>
            <p>Driving license, passport, voter ID, birth certificate (Aadhaar optional only)</p>
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
            title="Explanation & Trust Screen"
            description="Explain why Aadhaar is needed, legal basis, data usage, and user rights"
            state="Information"
          />
          <FlowStep 
            number={2}
            title="Explicit Consent Capture"
            description="User must actively consent; checkbox with clear language: 'I consent to Aadhaar authentication'"
            state="Consent Required"
          />
          <FlowStep 
            number={3}
            title="Enter Aadhaar Number"
            description="User enters 12-digit Aadhaar number (format: #### #### ####)"
            state="User Input"
          />
          <FlowStep 
            number={4}
            title="Validate Format"
            description="Client-side: 12 digits, valid checksum (Verhoeff algorithm)"
            state="Validation"
          />
          <FlowStep 
            number={5}
            title="Send OTP Request to UIDAI"
            description="System calls UIDAI API to send OTP to Aadhaar-linked mobile"
            state="API Call"
          />
          <FlowStep 
            number={6}
            title="OTP Verification"
            description="User receives OTP on Aadhaar-registered mobile; enters 6-digit code"
            state="Verification"
            branches={true}
          />
          
          {/* Success Path */}
          <div className="ml-12 pl-6 border-l-4 border-green-500 space-y-4">
            <FlowStep 
              number="6a"
              title="Authentication Successful"
              description="UIDAI validates OTP; returns success response with yes/no match"
              state="Success"
              variant="success"
            />
            <FlowStep 
              number={7}
              title="Log Transaction"
              description="Record authentication event per UIDAI regulations; no identity storage"
              state="Audit Log"
              variant="success"
            />
          </div>

          {/* Error Path */}
          <div className="ml-12 pl-6 border-l-4 border-red-500 space-y-4">
            <FlowStep 
              number="6b"
              title="Authentication Failed"
              description="OTP invalid, Aadhaar not found, or UIDAI service unavailable"
              state="Error"
              variant="error"
            />
            <FlowStep 
              number={8}
              title="Offer Fallback Path"
              description="Direct to alternative authentication method (mandatory to provide)"
              state="Fallback"
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

      <div className="grid grid-cols-2 gap-6">
        {/* Explanation Screen */}
        <ScreenExample
          title="Explanation & Trust Screen"
          variant="info"
        >
          <div className="space-y-4">
            <div className="text-center">
              <Shield size={40} className="text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Aadhaar Authentication</h4>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-4 text-sm text-muted-foreground space-y-2">
              <p><strong>Why we need Aadhaar:</strong></p>
              <p>This service is authorized to use Aadhaar authentication under [Legal Act/Section].</p>
              <p><strong>How your data is used:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Only Yes/No authentication response received</li>
                <li>• No personal details stored by our service</li>
                <li>• Transaction logged as per UIDAI regulations</li>
              </ul>
              <p><strong>Your rights:</strong></p>
              <p>You may choose alternative authentication if preferred.</p>
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Continue
            </button>
            <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded">
              Use Alternative Method
            </button>
          </div>
        </ScreenExample>

        {/* Consent Step */}
        <ScreenExample
          title="Explicit Consent Capture"
          variant="info"
        >
          <div className="space-y-4">
            <div className="text-center">
              <FileText size={40} className="text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Your Consent Required</h4>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-5 h-5 border-2 border-gray-400 rounded" />
                <div className="text-sm text-foreground">
                  <p className="font-bold mb-2">I hereby consent to:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Use my Aadhaar number for authentication</li>
                    <li>• Share authentication request with UIDAI</li>
                    <li>• Receive OTP on my Aadhaar-linked mobile</li>
                  </ul>
                  <p className="mt-2 text-xs text-muted-foreground">
                    This consent is voluntary. You may withdraw at any time or use alternative authentication.
                  </p>
                </div>
              </label>
            </div>
            <button className="w-full px-4 py-3 bg-gray-300 text-gray-500 font-bold rounded cursor-not-allowed">
              Continue (consent required)
            </button>
          </div>
        </ScreenExample>

        {/* Aadhaar Entry */}
        <ScreenExample
          title="Aadhaar Number Entry"
          variant="default"
        >
          <div className="space-y-4">
            <div className="text-center">
              <User size={40} className="text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Enter Aadhaar Number</h4>
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                12-digit Aadhaar Number
              </label>
              <input 
                type="text" 
                placeholder="#### #### ####"
                maxLength={14}
                className="w-full px-4 py-3 border-2 border-border rounded text-center font-mono text-lg"
              />
              <p className="text-xs text-muted-foreground mt-2">
                <Info size={12} className="inline mr-1" />
                Enter number without spaces
              </p>
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Send OTP
            </button>
          </div>
        </ScreenExample>

        {/* Invalid Entry */}
        <ScreenExample
          title="Invalid Aadhaar Number"
          variant="error"
        >
          <div className="space-y-4">
            <div className="text-center">
              <XCircle size={40} className="text-red-600 mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Invalid Number</h4>
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                12-digit Aadhaar Number
              </label>
              <input 
                type="text" 
                defaultValue="1234 5678 9"
                readOnly
                className="w-full px-4 py-3 border-2 border-red-400 rounded text-center font-mono text-lg bg-red-50"
              />
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-300 rounded p-3 text-sm text-red-800 mt-2">
                <XCircle size={14} className="inline mr-2" />
                Aadhaar number must be exactly 12 digits
              </div>
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Send OTP
            </button>
          </div>
        </ScreenExample>

        {/* OTP Verification */}
        <ScreenExample
          title="OTP Verification In Progress"
          variant="info"
        >
          <div className="space-y-4">
            <div className="text-center">
              <Clock size={40} className="text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Enter OTP</h4>
              <p className="text-sm text-muted-foreground">
                Code sent to Aadhaar-linked mobile<br/>
                ending in ***987
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              {[...Array(6)].map((_, i) => (
                <input 
                  key={i}
                  type="text" 
                  maxLength={1}
                  defaultValue=""
                  className="w-12 h-12 border-2 border-border rounded text-center font-bold text-xl"
                />
              ))}
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <Clock size={14} className="inline mr-1" />
              Code expires in 4:45
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Verify
            </button>
          </div>
        </ScreenExample>

        {/* Failed Authentication */}
        <ScreenExample
          title="Authentication Failed"
          variant="error"
        >
          <div className="space-y-4">
            <div className="text-center">
              <XCircle size={40} className="text-red-600 mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Authentication Failed</h4>
              <p className="text-sm text-muted-foreground">
                Unable to verify your Aadhaar
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded p-4 text-sm">
              <p className="text-red-800 font-bold mb-2">Possible reasons:</p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Incorrect OTP entered</li>
                <li>• OTP expired (5 min validity)</li>
                <li>• Mobile number not linked to Aadhaar</li>
                <li>• UIDAI service temporarily unavailable</li>
              </ul>
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Try Again
            </button>
            <button className="w-full px-4 py-3 border-2 border-primary bg-card text-primary font-bold rounded">
              Use Alternative Method
            </button>
          </div>
        </ScreenExample>

        {/* Success State */}
        <ScreenExample
          title="Authentication Successful"
          variant="success"
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Verified Successfully</h4>
              <p className="text-sm text-muted-foreground">
                Your identity has been authenticated<br/>
                via Aadhaar
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 rounded p-3 text-sm text-green-800">
              <CheckCircle size={14} className="inline mr-2" />
              Authentication logged per UIDAI regulations
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Continue to Service
            </button>
          </div>
        </ScreenExample>

        {/* Service Unavailable */}
        <ScreenExample
          title="UIDAI Service Unavailable"
          variant="warning"
        >
          <div className="space-y-4">
            <div className="text-center">
              <AlertCircle size={40} className="text-yellow-600 mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Service Temporarily Unavailable</h4>
              <p className="text-sm text-muted-foreground">
                Aadhaar authentication service<br/>
                is currently down
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-300 rounded p-4 text-sm text-muted-foreground">
              <p className="font-bold mb-2">What you can do:</p>
              <ul className="space-y-1 ml-4">
                <li>• Try again in a few minutes</li>
                <li>• Use alternative authentication method</li>
                <li>• Contact support if issue persists</li>
              </ul>
            </div>
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
              Try Again
            </button>
            <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded">
              Use Alternative Method
            </button>
          </div>
        </ScreenExample>
      </div>
    </section>
  );
}

// ==================== CONSENT & PRIVACY SECTION ====================

function ConsentPrivacySection() {
  return (
    <section id="consent" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Consent & Privacy Requirements</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Mandatory Consent Elements</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-bold text-foreground">Element</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Requirement</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Compliance Note</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Informed Consent</td>
                <td className="py-3 px-4 text-muted-foreground">Explain purpose, legal basis, data usage</td>
                <td className="py-3 px-4 text-muted-foreground">UIDAI Regulation 2016</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Explicit Opt-In</td>
                <td className="py-3 px-4 text-muted-foreground">Active checkbox; not pre-checked</td>
                <td className="py-3 px-4 text-muted-foreground">Cannot be implied consent</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Plain Language</td>
                <td className="py-3 px-4 text-muted-foreground">Clear, simple terms; avoid legal jargon</td>
                <td className="py-3 px-4 text-muted-foreground">Accessibility requirement</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Right to Withdraw</td>
                <td className="py-3 px-4 text-muted-foreground">User can revoke consent anytime</td>
                <td className="py-3 px-4 text-muted-foreground">Fundamental right</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">Alternative Method</td>
                <td className="py-3 px-4 text-muted-foreground">Offer non-Aadhaar authentication</td>
                <td className="py-3 px-4 text-muted-foreground">Supreme Court mandate</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Audit Trail</td>
                <td className="py-3 px-4 text-muted-foreground">Log consent timestamp and IP</td>
                <td className="py-3 px-4 text-muted-foreground">Compliance evidence</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Data Handling Rules</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <DataRule 
              rule="No Storage of Aadhaar Number"
              requirement="Cannot store Aadhaar number in any database (except authorized entities)"
            />
            <DataRule 
              rule="No Core Biometric Information"
              requirement="Never collect or store fingerprints, iris scans, or demographic data from UIDAI"
            />
            <DataRule 
              rule="Yes/No Response Only"
              requirement="UIDAI returns only authentication success/failure; no personal details"
            />
            <DataRule 
              rule="Transaction Logs"
              requirement="Maintain authentication logs for 6 months; share with UIDAI on request"
            />
            <DataRule 
              rule="Encryption in Transit"
              requirement="All API calls to UIDAI must use HTTPS/TLS 1.2+"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Privacy Safeguards</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <DataRule 
              rule="Purpose Limitation"
              requirement="Use authentication only for stated purpose; no secondary use"
            />
            <DataRule 
              rule="Minimize Data Collection"
              requirement="Collect only essential information; avoid over-collection"
            />
            <DataRule 
              rule="Secure Transmission"
              requirement="End-to-end encryption for Aadhaar number transmission"
            />
            <DataRule 
              rule="Access Control"
              requirement="Restrict Aadhaar data access to authorized personnel only"
            />
            <DataRule 
              rule="User Notification"
              requirement="Inform user of authentication success/failure via SMS/email"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FALLBACK SECTION ====================

function FallbackSection() {
  return (
    <section id="fallback" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Fallback & Alternative Paths</h2>
      </div>

      <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <AlertCircle size={20} className="text-orange-600" />
          Mandatory: Alternative Authentication Required
        </h3>
        <p className="text-sm text-muted-foreground">
          <strong>Supreme Court Ruling:</strong> Services cannot be denied to citizens who choose not to use Aadhaar 
          or face authentication failures. You MUST provide at least one alternative authentication method.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FallbackOption 
          title="Email + Mobile OTP"
          description="Send OTP to registered email and mobile number for dual verification"
          recommended={true}
        />
        <FallbackOption 
          title="Document Upload"
          description="Upload scanned copy of government-issued ID (PAN, Driving License, Voter ID)"
          recommended={true}
        />
        <FallbackOption 
          title="Assisted Service"
          description="Visit service center with physical documents for in-person verification"
          recommended={false}
        />
        <FallbackOption 
          title="Video KYC"
          description="Live video verification with officer; upload supporting documents"
          recommended={false}
        />
        <FallbackOption 
          title="Postal Verification"
          description="Send physical documents via registered post for verification"
          recommended={false}
        />
        <FallbackOption 
          title="Third-Party Auth"
          description="DigiLocker, e-Sign, or other government-approved authentication systems"
          recommended={true}
        />
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Assisted Recovery for Common Issues</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-bold text-foreground mb-2">Mobile Not Linked to Aadhaar</p>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Guide user to nearest Aadhaar Enrollment Center</li>
                <li>• Provide UIDAI helpline: 1947</li>
                <li>• Offer alternative authentication immediately</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-foreground mb-2">Aadhaar Number Not Known</p>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Direct to UIDAI portal for retrieval</li>
                <li>• Option to use enrollment number instead</li>
                <li>• Provide non-Aadhaar authentication path</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-foreground mb-2">UIDAI Service Down</p>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Display service status and expected restoration time</li>
                <li>• Automatically redirect to fallback method</li>
                <li>• Allow user to proceed without Aadhaar temporarily</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-foreground mb-2">Multiple Failed Attempts</p>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• After 3 failures, suggest alternative method</li>
                <li>• Provide helpline and escalation path</li>
                <li>• Do not lock user out of service entirely</li>
              </ul>
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
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Screen Reader Support</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Consent Text"
              description="Full consent statement read aloud; checkbox labeled 'I consent to Aadhaar authentication'"
            />
            <AccessibilityItem 
              label="Error Announcements"
              description="Invalid Aadhaar number announced via aria-live='assertive' immediately"
            />
            <AccessibilityItem 
              label="Field Labels"
              description="'Enter 12-digit Aadhaar number' associated with input via aria-labelledby"
            />
            <AccessibilityItem 
              label="Status Updates"
              description="'Sending OTP...', 'OTP sent', 'Verifying...' announced to screen readers"
            />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Keyboard & Focus</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem 
              label="Tab Navigation"
              description="Logical order: consent checkbox → Aadhaar input → send OTP → alternative method"
            />
            <AccessibilityItem 
              label="Focus Indicators"
              description="High-contrast 2px outline on all interactive elements"
            />
            <AccessibilityItem 
              label="Enter Key"
              description="Submit form when pressing Enter on Aadhaar input field"
            />
            <AccessibilityItem 
              label="Skip Links"
              description="'Skip to alternative authentication' for users who cannot use Aadhaar"
            />
          </div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-purple-600" />
          Multilingual Support (Critical for Inclusion)
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Provide UI in all 22 official Indian languages (Hindi, English, regional languages)" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Consent text must be available in user's preferred language" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Error messages and help text localized for each language" />
          <InfoItem icon={<CheckCircle size={14} className="text-green-600" />} text="Support Devanagari, Bengali, Telugu, Tamil, and other Indic scripts for Aadhaar input" />
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
          <h3 className="font-bold text-foreground">UIDAI API Integration</h3>
        </div>
        <div className="p-6 space-y-4 text-sm">
          <ImplementationItem 
            category="Prerequisites"
            requirements={[
              "Register as Authentication User Agency (AUA) with UIDAI",
              "Obtain AUA code and license key from UIDAI",
              "Complete security audit and compliance certification",
              "Sign legal agreement with UIDAI for API access",
              "Set up secure server infrastructure (STQC/CERT-IN certified)",
              "Obtain digital signature certificate for API authentication"
            ]}
          />
          <ImplementationItem 
            category="Technical Specifications"
            requirements={[
              "Use UIDAI Authentication API v2.0 or later",
              "Implement OTP-based authentication (most common for citizen services)",
              "Support biometric authentication if legally authorized (fingerprint/iris)",
              "Use 2048-bit RSA encryption for Aadhaar number transmission",
              "Implement Verhoeff algorithm for Aadhaar number checksum validation",
              "Handle UIDAI response codes: Y (success), N (failure), U (unknown error)"
            ]}
          />
          <ImplementationItem 
            category="Security Requirements"
            requirements={[
              "All API calls over HTTPS with TLS 1.2 or higher",
              "Encrypt Aadhaar number end-to-end before transmission",
              "Never log or store Aadhaar number in plain text",
              "Implement request signing with digital certificate",
              "Use UIDAI-provided public key for encryption",
              "Rotate encryption keys per UIDAI schedule"
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: Aadhaar Validation</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`// Aadhaar number validation
function validateAadhaar(number) {
  // Remove spaces
  const clean = number.replace(/\\s/g, '');
  
  // Check length
  if (clean.length !== 12) {
    return { 
      valid: false, 
      error: 'Must be 12 digits' 
    };
  }
  
  // Check numeric
  if (!/^\\d{12}$/.test(clean)) {
    return { 
      valid: false, 
      error: 'Only digits allowed' 
    };
  }
  
  // Verhoeff checksum validation
  if (!verhoeffCheck(clean)) {
    return { 
      valid: false, 
      error: 'Invalid Aadhaar number' 
    };
  }
  
  return { valid: true };
}

// Verhoeff algorithm
function verhoeffCheck(num) {
  const d = [
    [0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,0,6,7,8,9,5],
    // ... multiplication table
  ];
  // Implementation details
  return checksum === 0;
}`}
            </pre>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">UIDAI API Call Example</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`// UIDAI OTP request
async function sendAadhaarOTP(
  aadhaarNumber
) {
  // Encrypt Aadhaar number
  const encrypted = await rsaEncrypt(
    aadhaarNumber,
    uidaiPublicKey
  );
  
  // Prepare request
  const request = {
    uid: encrypted,
    ac: AUA_CODE,
    sa: SUB_AUA_CODE,
    lk: LICENSE_KEY,
    txn: generateTransactionId(),
    ts: new Date().toISOString()
  };
  
  // Sign request
  const signature = await signRequest(
    request,
    digitalCertificate
  );
  
  // Call UIDAI API
  const response = await fetch(
    UIDAI_API_URL + '/otp',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml'
      },
      body: buildXmlRequest(
        request, 
        signature
      )
    }
  );
  
  return parseResponse(response);
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
        <h2 className="text-2xl font-bold text-foreground">Governance & Compliance</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-orange-100 border-b-2 border-orange-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Lifecycle Status</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-orange-100 border-2 border-orange-400 rounded text-orange-800 font-bold text-sm">
                RESTRICTED USE
              </div>
            </div>
            <div className="text-sm space-y-2">
              <p className="text-muted-foreground"><strong>Version:</strong> 1.0.0</p>
              <p className="text-muted-foreground"><strong>Released:</strong> April 2026</p>
              <p className="text-muted-foreground"><strong>Last Updated:</strong> April 2026</p>
              <p className="text-muted-foreground"><strong>Next Review:</strong> Quarterly</p>
            </div>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Policy Governance</h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-6 py-3 bg-red-100 border-2 border-red-300 rounded text-red-800 font-bold text-sm">
                LEGAL APPROVAL REQUIRED
              </div>
            </div>
            <div className="text-sm space-y-2 text-muted-foreground">
              <p><strong>Must have:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>• Legal authorization</li>
                <li>• UIDAI license</li>
                <li>• Security audit</li>
                <li>• Alternative method</li>
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
              <p className="text-muted-foreground">Identity & Compliance</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Contact:</p>
              <p className="text-muted-foreground">aadhaar@ux4g.gov.in</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Legal Review:</p>
              <p className="text-muted-foreground">Required before use</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <AlertCircle size={20} className="text-red-600" />
          Legal Compliance Checklist (Mandatory Before Implementation)
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold text-foreground mb-2">Legal Requirements</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>☐ Verify legal authorization exists (Parliament Act or UIDAI permission)</li>
              <li>☐ Obtain UIDAI AUA license and agreement signed</li>
              <li>☐ Complete mandatory security audit (STQC/CERT-IN)</li>
              <li>☐ Privacy policy updated with Aadhaar usage disclosure</li>
              <li>☐ Data protection officer appointed and informed</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">User Experience Requirements</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>☐ Explanation screen implemented (why Aadhaar needed)</li>
              <li>☐ Explicit consent capture mechanism in place</li>
              <li>☐ Alternative authentication method available</li>
              <li>☐ Multilingual support for all 22 official languages</li>
              <li>☐ Accessible design tested (WCAG 2.1 AA)</li>
              <li>☐ Fallback paths for service unavailability</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-yellow-600" />
          Support & Escalation
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold text-foreground mb-2">For Legal/Compliance Questions:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Email: legal@ux4g.gov.in</li>
              <li>• UIDAI Helpline: 1947</li>
              <li>• Legal team review mandatory</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">For Technical Implementation:</p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Email: aadhaar-tech@ux4g.gov.in</li>
              <li>• UIDAI Developer Portal: uidai.gov.in</li>
              <li>• Response: 48 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function PolicyAlert() {
  return (
    <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg overflow-hidden">
      <div className="bg-red-100 border-b-2 border-red-300 px-4 py-3">
        <h3 className="font-bold text-red-900 text-sm flex items-center gap-2">
          <AlertCircle size={16} />
          Policy Alert
        </h3>
      </div>
      <div className="p-4 text-xs text-muted-foreground space-y-2">
        <p className="font-bold text-red-800">Restricted Pattern</p>
        <p>Use ONLY when legally authorized. Requires UIDAI license and mandatory alternative authentication.</p>
        <p className="font-bold text-red-800 mt-2">Before Implementation:</p>
        <p>Obtain legal approval and complete compliance checklist.</p>
      </div>
    </div>
  );
}

function QuickReference() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 text-xs space-y-3">
        <div>
          <p className="font-bold text-foreground mb-1">Aadhaar Format</p>
          <p className="text-muted-foreground">12 digits (#### #### ####)</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">OTP Validity</p>
          <p className="text-muted-foreground">5 minutes</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Validation</p>
          <p className="text-muted-foreground">Verhoeff checksum algorithm</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Data Storage</p>
          <p className="text-muted-foreground">Cannot store Aadhaar number</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Alternative Required</p>
          <p className="text-muted-foreground">Mandatory by Supreme Court</p>
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
        <RelatedPatternLink to="/patterns/identity/otp-verification" text="OTP Verification" />
        <RelatedPatternLink to="/patterns/identity/mobile-otp" text="Mobile OTP" />
        <RelatedPatternLink to="/patterns/consent/consent-capture" text="Consent Capture" />
        <RelatedPatternLink to="/patterns/identity/account-recovery" text="Account Recovery" />
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
          to="/patterns/identity/aadhaar-auth"
          className="block p-3 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Eye size={16} className="text-primary" />
            <span className="font-bold text-sm text-foreground">View Live Demo</span>
          </div>
          <p className="text-xs text-muted-foreground">Aadhaar authentication flow</p>
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
        <ResourceLink text="UIDAI Developer Guide" />
        <ResourceLink text="Aadhaar Act 2016" />
        <ResourceLink text="Supreme Court Judgment" />
        <ResourceLink text="Privacy Regulations" />
        <ResourceLink text="API Documentation" />
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

function UseCase({ title, description, status }: { title: string; description: string; status: 'authorized' | 'conditional' }) {
  return (
    <div className="bg-card border border-border rounded p-3">
      <div className="flex items-start gap-2 mb-1">
        {status === 'authorized' ? (
          <CheckCircle size={14} className="text-green-600 mt-0.5" />
        ) : (
          <AlertCircle size={14} className="text-yellow-600 mt-0.5" />
        )}
        <p className="font-bold text-foreground flex-1">{title}</p>
      </div>
      <p className="text-muted-foreground">{description}</p>
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

function DataRule({ rule, requirement }: { rule: string; requirement: string }) {
  return (
    <div>
      <p className="font-bold text-foreground mb-1">{rule}</p>
      <p className="text-muted-foreground">{requirement}</p>
    </div>
  );
}

function FallbackOption({ title, description, recommended }: { title: string; description: string; recommended: boolean }) {
  return (
    <div className={`bg-card border-2 rounded-lg overflow-hidden ${recommended ? 'border-green-300' : 'border-border'}`}>
      <div className={`px-4 py-3 border-b-2 ${recommended ? 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800' : 'bg-muted border-border'}`}>
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-foreground text-sm">{title}</h4>
          {recommended && (
            <CheckCircle size={16} className="text-green-600" />
          )}
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground">{description}</p>
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
