import React from "react";
import { Link } from "react-router";
import { CheckSquare, Shield, CheckCircle, AlertCircle, Info, XCircle, ArrowRight, ArrowLeft, FileText, Globe, Code, Settings, HelpCircle, ChevronRight, Database, Check, X, Eye, User, Lock, Clock, UserX, Download, Copy } from "lucide-react";

export default function ConsentCapturePattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center">
                  <CheckSquare size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Consent & Declaration Pattern</div>
                  <h1 className="text-3xl font-bold text-foreground">Consent Capture</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Standard pattern for capturing informed user consent with clear purpose explanation, granular options, 
                opt-in/opt-out mechanisms, and confirmation. Used for data collection authorization, processing permissions, 
                and service-specific consent across government digital services.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-010-01</span></span>
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
              { id: "content", label: "Content Guidance" },
              { id: "states", label: "Consent States" },
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
            <Link
              to="/patterns/consent/consent-capture-code"
              className="px-4 py-2 text-sm font-bold text-white bg-primary hover:opacity-90 rounded whitespace-nowrap transition-colors flex items-center gap-2"
            >
              <Code size={16} />
              Code Examples
            </Link>
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
            <ContentGuidance />
            <ConsentStates />
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
            <div>UX4G Design System Platform • Consent Capture Pattern</div>
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
              Enable users to provide informed, explicit consent for data collection, processing, or sharing. 
              This pattern ensures transparency, user autonomy, and legal compliance while maintaining 
              accessible and trustworthy interactions.
            </p>
            <div className="space-y-2">
              <PurposeItem text="Obtain informed user consent legally and ethically" />
              <PurposeItem text="Explain purpose and implications clearly" />
              <PurposeItem text="Provide granular control over permissions" />
              <PurposeItem text="Enable easy consent or decline" />
              <PurposeItem text="Record consent with timestamp and version" />
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
                text="Collecting personal or sensitive data" 
              />
              <UseItem 
                type="yes" 
                text="Sharing data with third parties or departments" 
              />
              <UseItem 
                type="yes" 
                text="Processing data for non-essential services" 
              />
              <UseItem 
                type="yes" 
                text="Marketing, notifications, or optional communications" 
              />
              <UseItem 
                type="yes" 
                text="Research, analytics, or improvement activities" 
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
                text="Essential service delivery (use notice, not consent)" 
              />
              <UseItem 
                type="no" 
                text="Legal obligations (no choice provided)" 
              />
              <UseItem 
                type="no" 
                text="Emergency services or public safety" 
              />
              <UseItem 
                type="no" 
                text="Anonymous aggregate data collection" 
              />
              <UseItem 
                type="no" 
                text="Publicly available information access" 
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
                icon={<Info size={16} />}
                text="Understand what I'm consenting to in plain language" 
              />
              <GoalItem 
                icon={<Eye size={16} />}
                text="See who will access my data and why" 
              />
              <GoalItem 
                icon={<Shield size={16} />}
                text="Know the consequences of consenting or declining" 
              />
              <GoalItem 
                icon={<CheckCircle size={16} />}
                text="Make an informed decision without pressure" 
              />
              <GoalItem 
                icon={<Lock size={16} />}
                text="Trust that my consent will be respected" 
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
        <h2 className="text-2xl font-bold text-foreground">Consent Flow Diagram</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
        <div className="space-y-4">
          {/* Flow Steps */}
          <FlowStep 
            number="1"
            title="Entry Point"
            description="User reaches consent requirement"
            action="Service requires consent for specific purpose"
            color="gray"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="2"
            title="Consent Request Screen"
            description="Clear explanation of what consent is being requested"
            action="Show purpose, data types, recipients, duration in plain language"
            color="blue"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="3"
            title="User Reviews Information"
            description="User reads explanation and implications"
            action="Optional: View detailed policy or FAQ"
            color="blue"
          />
          
          <FlowConnector label="User Decision" />
          
          <FlowBranch 
            condition="User Choice?"
            leftPath="Grant Consent"
            rightPath="Decline Consent"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Grant Path */}
            <div className="space-y-4">
              <FlowStep 
                number="4a"
                title="Consent Granted"
                description="User clicks 'I Agree' or checks consent box"
                action="Record consent with timestamp, IP, version"
                color="green"
              />
              
              <FlowConnector />
              
              <FlowStep 
                number="5a"
                title="Confirmation Screen"
                description="Acknowledge consent received"
                action="Show confirmation message, next steps, withdrawal info"
                color="green"
              />
              
              <FlowConnector />
              
              <FlowStep 
                number="6a"
                title="Proceed to Service"
                description="User can access consented features"
                action="Enable consented data collection/processing"
                color="green"
              />
            </div>

            {/* Decline Path */}
            <div className="space-y-4">
              <FlowStep 
                number="4b"
                title="Consent Declined"
                description="User clicks 'I Decline' or 'Not Now'"
                action="Record refusal with timestamp"
                color="red"
              />
              
              <FlowConnector />
              
              <FlowStep 
                number="5b"
                title="Impact Explanation"
                description="Explain what happens without consent"
                action="Show limited functionality or alternative options"
                color="red"
              />
              
              <FlowConnector />
              
              <FlowStep 
                number="6b"
                title="Continue with Limitations"
                description="User proceeds without consented features"
                action="Disable consented features, provide alternative path"
                color="red"
              />
            </div>
          </div>
        </div>

        {/* Flow Legend */}
        <div className="mt-8 pt-6 border-t-2 border-border">
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
              <span className="text-muted-foreground">Entry Point</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-sm"></div>
              <span className="text-muted-foreground">User Action</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
              <span className="text-muted-foreground">Consent Granted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
              <span className="text-muted-foreground">Consent Declined</span>
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
  color: "gray" | "blue" | "green" | "red";
}) {
  const bgColor = color === "gray" ? "bg-muted" : color === "blue" ? "bg-blue-50" : color === "green" ? "bg-green-50" : "bg-red-50";
  const borderColor = color === "gray" ? "border-border" : color === "blue" ? "border-primary" : color === "green" ? "border-green-600" : "border-red-600";
  const textColor = color === "gray" ? "text-muted-foreground" : color === "blue" ? "text-primary" : color === "green" ? "text-green-700" : "text-red-700";

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

function FlowBranch({ condition, leftPath, rightPath }: { condition: string; leftPath: string; rightPath: string }) {
  return (
    <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="font-bold text-orange-800 mb-3">{condition}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-green-300 rounded p-3">
              <div className="text-xs font-bold text-green-700 dark:text-green-400 mb-1">GRANT CONSENT</div>
              <div className="text-sm text-muted-foreground">{leftPath}</div>
            </div>
            <div className="bg-card border border-red-300 rounded p-3">
              <div className="text-xs font-bold text-red-700 dark:text-red-400 mb-1">DECLINE CONSENT</div>
              <div className="text-sm text-muted-foreground">{rightPath}</div>
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
        <p className="text-muted-foreground mt-2">Representative consent capture screens for different scenarios</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Simple Consent */}
        <ExampleScreen
          title="Simple Data Collection Consent"
          state="Single purpose consent"
          stateColor="blue"
        >
          <ConsentScreenExample type="simple" />
        </ExampleScreen>

        {/* Granular Consent */}
        <ExampleScreen
          title="Granular Consent Options"
          state="Multiple consent choices"
          stateColor="blue"
        >
          <ConsentScreenExample type="granular" />
        </ExampleScreen>

        {/* Consent Granted */}
        <ExampleScreen
          title="Consent Granted Confirmation"
          state="Success state"
          stateColor="green"
        >
          <ConsentScreenExample type="granted" />
        </ExampleScreen>

        {/* Consent Declined */}
        <ExampleScreen
          title="Consent Declined Impact"
          state="Impact explanation"
          stateColor="orange"
        >
          <ConsentScreenExample type="declined" />
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

function ConsentScreenExample({ type }: { type: string }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6 max-w-md mx-auto">
      {type === "simple" && (
        <>
          {/* Header */}
          <div className="mb-6">
            <div className="w-12 h-12 bg-primary rounded mx-auto mb-3 flex items-center justify-center">
              <CheckSquare size={24} className="text-white" />
            </div>
            <h3 className="font-bold text-foreground text-lg text-center mb-2">Data Collection Consent</h3>
            <p className="text-sm text-muted-foreground text-center">
              We need your permission to collect and process your data
            </p>
          </div>

          {/* Consent Details */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-foreground text-sm mb-3">What we will collect:</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <CheckCircle size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Name, email, and mobile number</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Application and service usage data</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Document uploads and submitted information</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-foreground text-sm mb-2">Purpose:</h3>
              <p className="text-sm text-muted-foreground">
                To process your application, verify your identity, and provide service updates.
              </p>
            </div>

            <div className="mt-3">
              <h3 className="font-bold text-foreground text-sm mb-2">Duration:</h3>
              <p className="text-sm text-muted-foreground">
                Data will be retained for 5 years as per government regulations.
              </p>
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="bg-background border-2 border-border rounded-lg p-4 mb-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input aria-label="Checkbox" type="checkbox" className="mt-1 w-4 h-4 border-2 border-gray-400 rounded" />
              <span className="text-sm text-muted-foreground">
                I understand and consent to the collection, processing, and storage of my personal data 
                as described above for the stated purpose.
              </span>
            </label>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded text-sm">
              I Agree - Grant Consent
            </button>
            <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm">
              I Decline
            </button>
          </div>

          {/* Help Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-primary hover:underline">
              View full privacy policy
            </a>
          </div>
        </>
      )}

      {type === "granular" && (
        <>
          <div className="mb-6">
            <div className="w-12 h-12 bg-primary rounded mx-auto mb-3 flex items-center justify-center">
              <Settings size={24} className="text-white" />
            </div>
            <h3 className="font-bold text-foreground text-lg text-center mb-2">Manage Your Permissions</h3>
            <p className="text-sm text-muted-foreground text-center">
              Choose what data you want to share
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {/* Essential - Non-optional */}
            <div className="bg-muted border-2 border-border rounded-lg p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-sm mb-1">Essential Service Data</h3>
                  <p className="text-xs text-muted-foreground">
                    Required for basic service delivery
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-muted-foreground">REQUIRED</span>
                  <CheckCircle size={20} className="text-green-600" />
                </div>
              </div>
            </div>

            {/* Optional Consents */}
            <div className="bg-card border-2 border-border rounded-lg p-4">
              <label className="flex items-start justify-between gap-3 cursor-pointer">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-sm mb-1">Service Notifications</h3>
                  <p className="text-xs text-muted-foreground">
                    Send SMS and email updates about your application
                  </p>
                </div>
                <input aria-label="Checkbox" type="checkbox" defaultChecked className="mt-1 w-5 h-5 border-2 border-gray-400 rounded" />
              </label>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-4">
              <label className="flex items-start justify-between gap-3 cursor-pointer">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-sm mb-1">Usage Analytics</h3>
                  <p className="text-xs text-muted-foreground">
                    Help us improve the service by sharing usage data
                  </p>
                </div>
                <input aria-label="Checkbox" type="checkbox" className="mt-1 w-5 h-5 border-2 border-gray-400 rounded" />
              </label>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-4">
              <label className="flex items-start justify-between gap-3 cursor-pointer">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-sm mb-1">Government Updates</h3>
                  <p className="text-xs text-muted-foreground">
                    Receive newsletters and policy updates
                  </p>
                </div>
                <input aria-label="Checkbox" type="checkbox" className="mt-1 w-5 h-5 border-2 border-gray-400 rounded" />
              </label>
            </div>
          </div>

          <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded text-sm">
            Save Preferences
          </button>
        </>
      )}

      {type === "granted" && (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h3 className="font-bold text-foreground text-lg mb-2">Consent Granted</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Thank you. Your consent has been recorded and you can now access the service.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 mb-6 text-left">
            <h4 className="font-bold text-foreground text-sm mb-2">You can withdraw consent anytime</h4>
            <p className="text-xs text-muted-foreground mb-3">
              You have the right to withdraw your consent at any time from your account settings. 
              This may affect your ability to use certain features.
            </p>
            <a href="#" className="text-xs text-primary font-bold hover:underline">
              Manage consent settings →
            </a>
          </div>

          <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded text-sm">
            Continue to Service
          </button>
        </div>
      )}

      {type === "declined" && (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <AlertCircle size={32} className="text-orange-600" />
          </div>
          <h3 className="font-bold text-foreground text-lg mb-2">Consent Not Granted</h3>
          <p className="text-sm text-muted-foreground mb-6">
            You have declined to provide consent. Here is what this means:
          </p>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-4 mb-6 text-left">
            <h4 className="font-bold text-orange-800 text-sm mb-3">Limited Functionality</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <XCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>You will not receive service notifications</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Application status tracking will be unavailable</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>You can still submit your application</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded text-sm">
              Continue Without Consent
            </button>
            <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm">
              Go Back and Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== CONTENT GUIDANCE ====================

function ContentGuidance() {
  return (
    <section id="content" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Content Guidance</h2>
        <p className="text-muted-foreground mt-2">Plain-language messaging requirements for consent screens</p>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Essential Elements</h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            
            {/* What */}
            <ContentElement
              title="What data is being collected"
              required={true}
              description="List specific data types in plain language"
              example="Name, email address, mobile number, Aadhaar number, uploaded documents"
              tips={[
                "Use everyday language, not technical terms",
                "Group related data types together",
                "Avoid vague terms like 'relevant information'"
              ]}
            />

            {/* Why */}
            <ContentElement
              title="Why data is needed (purpose)"
              required={true}
              description="Explain the specific reason for collection"
              example="To verify your identity, process your application, and send you service updates"
              tips={[
                "Be specific about the purpose",
                "Connect purpose to user benefit",
                "Avoid generic statements"
              ]}
            />

            {/* Who */}
            <ContentElement
              title="Who will access the data"
              required={true}
              description="Identify specific recipients or categories"
              example="This data will be accessed by the Ministry of X, verification agencies, and payment processors"
              tips={[
                "Name specific departments or agencies",
                "Explain why each recipient needs access",
                "Clarify if data leaves India"
              ]}
            />

            {/* How Long */}
            <ContentElement
              title="How long data is retained"
              required={true}
              description="State retention period clearly"
              example="Your data will be stored for 5 years as per government record retention policy"
              tips={[
                "Give specific timeframes",
                "Explain reason for retention period",
                "Mention deletion after period"
              ]}
            />

            {/* Consequences */}
            <ContentElement
              title="Consequences of consent/decline"
              required={true}
              description="Explain what happens with each choice"
              example="If you decline: You can still submit your application, but you won't receive status updates"
              tips={[
                "Be honest about limitations",
                "Explain alternatives if available",
                "Never use coercive language"
              ]}
            />

            {/* Withdrawal */}
            <ContentElement
              title="How to withdraw consent"
              required={true}
              description="Provide clear withdrawal mechanism"
              example="You can withdraw consent anytime from Account Settings > Privacy & Consent"
              tips={[
                "Make withdrawal as easy as granting",
                "Provide specific steps",
                "Mention impact of withdrawal"
              ]}
            />

          </div>
        </div>
      </div>

      {/* Language Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-300 px-6 py-4">
            <h3 className="font-bold text-green-800 dark:text-green-300 flex items-center gap-2">
              <Check size={18} />
              Do Use
            </h3>
          </div>
          <div className="p-6 space-y-2 text-sm">
            <LanguageItem type="do" text="Plain, simple language (8th grade reading level)" />
            <LanguageItem type="do" text="Active voice ('We will collect...')" />
            <LanguageItem type="do" text="Specific examples and lists" />
            <LanguageItem type="do" text="User-centered framing ('your data', 'you can')" />
            <LanguageItem type="do" text="Honest about implications" />
            <LanguageItem type="do" text="Short sentences and paragraphs" />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-300 px-6 py-4">
            <h3 className="font-bold text-red-800 dark:text-red-300 flex items-center gap-2">
              <X size={18} />
              Don&apos;t Use
            </h3>
          </div>
          <div className="p-6 space-y-2 text-sm">
            <LanguageItem type="dont" text="Legal jargon or complex terms" />
            <LanguageItem type="dont" text="Passive voice ('Data may be collected...')" />
            <LanguageItem type="dont" text="Vague or ambiguous phrases" />
            <LanguageItem type="dont" text="Coercive or manipulative language" />
            <LanguageItem type="dont" text="Pre-checked consent boxes" />
            <LanguageItem type="dont" text="Dense paragraphs or walls of text" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentElement({ title, required, description, example, tips }: {
  title: string;
  required: boolean;
  description: string;
  example: string;
  tips: string[];
}) {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="font-bold text-foreground">{title}</h3>
        {required && (
          <span className="px-2 py-1 bg-red-100 text-red-700 dark:text-red-400 text-xs font-bold rounded">REQUIRED</span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded p-3 mb-2">
        <div className="text-xs font-bold text-blue-700 mb-1">EXAMPLE</div>
        <p className="text-sm text-muted-foreground italic">&quot;{example}&quot;</p>
      </div>
      <div className="space-y-1">
        {tips.map((tip, i) => (
          <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
            <Info size={12} className="mt-0.5 flex-shrink-0 text-blue-600" />
            <span>{tip}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LanguageItem({ type, text }: { type: "do" | "dont"; text: string }) {
  return (
    <div className="flex items-start gap-2">
      {type === "do" ? (
        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
      ) : (
        <XCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
      )}
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== CONSENT STATES ====================

function ConsentStates() {
  return (
    <section id="states" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Consent States & Management</h2>
        <p className="text-muted-foreground mt-2">Different consent states and how to handle them</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Not Requested */}
        <StateCard
          title="Not Requested"
          state="Initial state before consent request"
          color="gray"
          icon={<HelpCircle size={24} />}
          actions={[
            "User has not seen consent request",
            "No consent decision recorded",
            "Service may or may not be accessible"
          ]}
        />

        {/* Pending */}
        <StateCard
          title="Pending Decision"
          state="Consent requested, awaiting user response"
          color="blue"
          icon={<Clock size={24} />}
          actions={[
            "Consent screen shown to user",
            "User is reviewing information",
            "No action taken yet"
          ]}
        />

        {/* Granted */}
        <StateCard
          title="Consent Granted"
          state="User has provided explicit consent"
          color="green"
          icon={<CheckCircle size={24} />}
          actions={[
            "Record: user ID, timestamp, IP, consent version",
            "Enable consented features/data collection",
            "Provide withdrawal mechanism in settings"
          ]}
        />

        {/* Declined */}
        <StateCard
          title="Consent Declined"
          state="User has explicitly refused consent"
          color="red"
          icon={<XCircle size={24} />}
          actions={[
            "Record refusal with timestamp",
            "Disable consented features",
            "Provide alternative service path if available"
          ]}
        />

        {/* Withdrawn */}
        <StateCard
          title="Consent Withdrawn"
          state="Previously granted, now revoked by user"
          color="orange"
          icon={<UserX size={24} />}
          actions={[
            "Record withdrawal timestamp",
            "Stop data processing immediately",
            "Delete data unless legally required to retain"
          ]}
        />

        {/* Expired */}
        <StateCard
          title="Consent Expired"
          state="Time-limited consent has lapsed"
          color="orange"
          icon={<Clock size={24} />}
          actions={[
            "Notify user of expiry",
            "Request renewal if service continues",
            "Stop processing until renewed"
          ]}
        />

      </div>

      {/* State Transitions */}
      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Allowed State Transitions</h3>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            <TransitionRule from="Not Requested" to="Pending" trigger="User views consent screen" />
            <TransitionRule from="Pending" to="Granted" trigger="User clicks 'I Agree'" />
            <TransitionRule from="Pending" to="Declined" trigger="User clicks 'I Decline'" />
            <TransitionRule from="Granted" to="Withdrawn" trigger="User withdraws from settings" />
            <TransitionRule from="Granted" to="Expired" trigger="Time-based expiry reached" />
            <TransitionRule from="Expired" to="Granted" trigger="User re-grants consent" />
            <TransitionRule from="Declined" to="Granted" trigger="User changes mind, grants consent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StateCard({ title, state, color, icon, actions }: {
  title: string;
  state: string;
  color: string;
  icon: React.ReactNode;
  actions: string[];
}) {
  const colorMap: { [key: string]: { bg: string; border: string; text: string } } = {
    gray: { bg: "bg-muted", border: "border-border", text: "text-muted-foreground" },
    blue: { bg: "bg-blue-100", border: "border-blue-300", text: "text-blue-700" },
    green: { bg: "bg-green-100", border: "border-green-300", text: "text-green-700" },
    red: { bg: "bg-red-100", border: "border-red-300", text: "text-red-700" },
    orange: { bg: "bg-orange-100", border: "border-orange-300", text: "text-orange-700" }
  };

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className={`${colorMap[color].bg} border-b-2 ${colorMap[color].border} px-6 py-4`}>
        <div className="flex items-center gap-3">
          <div className={colorMap[color].text}>
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{state}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-sm font-bold text-foreground mb-3">System Actions:</h3>
        <div className="space-y-2">
          {actions.map((action, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight size={14} className="mt-0.5 flex-shrink-0 text-muted-foreground" />
              <span>{action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TransitionRule({ from, to, trigger }: { from: string; to: string; trigger: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-background border border-border rounded">
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-center">
        <div className="text-sm font-bold text-muted-foreground">{from}</div>
        <div className="flex items-center justify-center">
          <ArrowRight size={16} className="text-muted-foreground" />
        </div>
        <div className="text-sm font-bold text-muted-foreground">{to}</div>
      </div>
      <div className="flex-1 text-sm text-muted-foreground italic">{trigger}</div>
    </div>
  );
}

// ==================== ACCESSIBILITY SECTION ====================

function AccessibilitySection() {
  return (
    <section id="accessibility" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Accessibility Requirements</h2>
        <p className="text-muted-foreground mt-2">WCAG 2.1 Level AA compliance for consent patterns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Keyboard Navigation */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Keyboard Navigation</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem text="Tab through all interactive elements in logical order" />
            <AccessibilityItem text="Space key toggles checkboxes" />
            <AccessibilityItem text="Enter key activates focused buttons" />
            <AccessibilityItem text="Visible focus indicators on all controls" />
            <AccessibilityItem text="Skip links for long consent text" />
          </div>
        </div>

        {/* Screen Reader Support */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Screen Reader Support</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem text="Checkboxes properly labeled with associated text" />
            <AccessibilityItem text="Required fields marked with aria-required" />
            <AccessibilityItem text="Consent sections use proper heading hierarchy" />
            <AccessibilityItem text="Status messages announced via aria-live" />
            <AccessibilityItem text="Links and buttons clearly identified" />
          </div>
        </div>

        {/* Alternative Formats */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Alternative Formats</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem text="Provide audio version of consent text" />
            <AccessibilityItem text="Support text resizing up to 200%" />
            <AccessibilityItem text="Offer video explanation with captions" />
            <AccessibilityItem text="Provide downloadable PDF version" />
            <AccessibilityItem text="Support high contrast mode" />
          </div>
        </div>

        {/* Multilingual Support */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Multilingual Support</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem text="Provide consent in all 22 scheduled languages" />
            <AccessibilityItem text="Language selector clearly visible" />
            <AccessibilityItem text="RTL language support where applicable" />
            <AccessibilityItem text="Regional language translations verified" />
            <AccessibilityItem text="Visual icons supplement text" />
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
        <p className="text-muted-foreground mt-2">Technical guidance for implementing consent capture</p>
      </div>

      {/* Full Code Implementation Link */}
      <Link
        to="/patterns/consent/consent-capture-code"
        className="block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl p-6 shadow-lg transition-all hover:shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-card bg-opacity-20 rounded-lg flex items-center justify-center">
              <Code size={24} />
            </div>
            <div>
              <div className="font-bold text-lg mb-1">View Full Code Implementation</div>
              <div className="text-blue-100 text-sm">
                Complete React code, props documentation, live examples, and accessibility guide
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-blue-100">
            <span className="text-sm font-semibold">View Code</span>
            <ArrowRight size={20} />
          </div>
        </div>
      </Link>

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
            <ImplementationItem text="Never use pre-checked consent checkboxes" />
            <ImplementationItem text="Require explicit action (click, tap) to grant consent" />
            <ImplementationItem text="Validate consent before form submission" />
            <ImplementationItem text="Show consent version number to user" />
            <ImplementationItem text="Store consent timestamp in ISO 8601 format" />
            <ImplementationItem text="Disable 'Agree' button until user scrolls through text" />
          </div>
        </div>

        {/* Backend/Database */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Database size={18} />
              Backend/Database
            </h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <ImplementationItem text="Create consent_records table with audit trail" />
            <ImplementationItem text="Store: user_id, consent_type, version, timestamp, IP, user_agent" />
            <ImplementationItem text="Implement consent expiry logic" />
            <ImplementationItem text="Support granular consent storage (separate fields)" />
            <ImplementationItem text="Enable consent history query by user" />
            <ImplementationItem text="Implement consent withdrawal cascade logic" />
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden col-span-2">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-300 px-6 py-4">
            <h3 className="font-bold text-red-900 flex items-center gap-2">
              <Shield size={18} />
              Security & Privacy Considerations
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 text-sm">
                <ImplementationItem text="Encrypt consent records at rest and in transit" />
                <ImplementationItem text="Log all consent changes for audit trail" />
                <ImplementationItem text="Implement tamper-proof consent records" />
                <ImplementationItem text="Set up automated consent expiry notifications" />
              </div>
              <div className="space-y-3 text-sm">
                <ImplementationItem text="Separate consent from service access where possible" />
                <ImplementationItem text="Never share consent data with third parties" />
                <ImplementationItem text="Implement right-to-erasure workflow" />
                <ImplementationItem text="Regular consent database audits" />
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 border-2 border-gray-700 rounded-lg overflow-hidden col-span-2">
          <div className="bg-gray-800 border-b-2 border-gray-700 px-6 py-4">
            <h3 className="font-bold text-white flex items-center gap-2">
              <FileText size={18} />
              Sample Consent Record Schema
            </h3>
          </div>
          <div className="p-6">
            <pre className="text-green-400 text-sm font-mono overflow-x-auto">
{`{
  "consent_id": "consent_a1b2c3d4e5f6",
  "user_id": "usr_x9y8z7w6v5u4",
  "consent_type": "data_collection",
  "consent_version": "1.2.0",
  "status": "granted",
  "granted_at": "2026-04-09T14:30:00Z",
  "expires_at": "2031-04-09T14:30:00Z",
  "ip_address": "203.0.113.45",
  "user_agent": "Mozilla/5.0...",
  "granular_consents": {
    "essential_data": true,
    "notifications": true,
    "analytics": false,
    "marketing": false
  },
  "withdrawal": null,
  "audit_trail": [...]
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

const CONSENT_REACT_CODE = `import React, { useState } from 'react';

interface ConsentItem {
  id: string;
  title: string;
  description: string;
  required: boolean;
}

const CONSENT_ITEMS: ConsentItem[] = [
  { id: 'data-collection', title: 'Data Collection & Storage', description: 'I consent to the collection and secure storage of my personal data including name, address, Aadhaar number, and contact details for the purpose of this government service.', required: true },
  { id: 'data-sharing', title: 'Data Sharing with Departments', description: 'I consent to sharing my verified data with relevant government departments for processing my application and delivering the requested service.', required: true },
  { id: 'aadhaar-verification', title: 'Aadhaar-based Verification', description: 'I consent to the verification of my identity through UIDAI Aadhaar authentication as required for this service.', required: true },
  { id: 'communication', title: 'Service Communications', description: 'I agree to receive SMS, email, and push notifications regarding my application status, service updates, and important deadlines.', required: false },
  { id: 'analytics', title: 'Service Improvement Analytics', description: 'I consent to anonymized usage data being collected to improve government digital services.', required: false },
];

export function ConsentCapturePage() {
  const [consents, setConsents] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleConsent = (id: string) => {
    setConsents(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allRequiredChecked = CONSENT_ITEMS.filter(c => c.required).every(c => consents[c.id]);

  const handleSubmit = async () => {
    if (!allRequiredChecked) { setError('Please accept all mandatory consent items'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/consent/capture', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ consents, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) { setError('Failed to record consent'); return; }
      setSubmitted(true);
    } catch { setError('Network error.'); }
    finally { setLoading(false); }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Consent Recorded</h2>
          <p className="text-muted-foreground mb-4">Your consent preferences have been securely recorded.</p>
          <p className="text-xs text-muted-foreground">You can modify your consent at any time from your account settings.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Consent & Permissions</h1>
        <p className="text-sm text-muted-foreground mb-6">Review and provide your consent for data processing as required by this government service.</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
        <div className="space-y-3 mb-6">
          {CONSENT_ITEMS.map(item => (
            <div key={item.id} className="border border-border rounded-xl overflow-hidden">
              <div className="flex items-start gap-3 p-4 cursor-pointer" onClick={() => setExpanded(expanded === item.id ? null : item.id)}>
                <input type="checkbox" checked={!!consents[item.id]} onChange={() => toggleConsent(item.id)} onClick={e => e.stopPropagation()} className="mt-1 accent-primary" aria-label={item.title} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-foreground">{item.title}</span>
                    {item.required && <span className="text-xs bg-red-100 text-red-700 dark:text-red-400 px-2 py-0.5 rounded-full font-semibold">Required</span>}
                  </div>
                  {expanded === item.id && <p className="text-sm text-muted-foreground mt-2">{item.description}</p>}
                </div>
                <svg className={\`w-4 h-4 text-muted-foreground transition-transform \${expanded === item.id ? 'rotate-180' : ''}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleSubmit} disabled={loading || !allRequiredChecked} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Recording...' : 'Accept & Continue'}</button>
        <p className="text-xs text-muted-foreground text-center mt-4">Your consent is recorded securely and can be withdrawn at any time.</p>
      </div>
    </div>
  );
}`;

const CONSENT_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ConsentItem { id: string; title: string; description: string; required: boolean; }

@Component({
  selector: 'ux4g-consent-capture',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Consent & Permissions</h1>
        <p class="text-sm text-muted-foreground mb-6">Review and provide your consent for data processing.</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{{ error }}</div>
        <div *ngIf="!submitted" class="space-y-3 mb-6">
          <div *ngFor="let item of items" class="border border-border rounded-xl overflow-hidden">
            <div class="flex items-start gap-3 p-4 cursor-pointer" (click)="toggle(item.id)">
              <input type="checkbox" [checked]="consents[item.id]" (change)="consents[item.id] = !consents[item.id]" (click)="$event.stopPropagation()" class="mt-1 accent-primary" />
              <div class="flex-1">
                <span class="font-semibold text-sm">{{ item.title }}</span>
                <span *ngIf="item.required" class="text-xs bg-red-100 text-red-700 dark:text-red-400 px-2 py-0.5 rounded-full ml-2">Required</span>
                <p *ngIf="expanded === item.id" class="text-sm text-muted-foreground mt-2">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <button *ngIf="!submitted" (click)="submit()" [disabled]="loading || !allRequired()" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Recording...' : 'Accept & Continue' }}</button>
        <div *ngIf="submitted" class="text-center py-8">
          <h2 class="text-xl font-bold mb-2">Consent Recorded</h2>
          <p class="text-muted-foreground">Your preferences have been saved.</p>
        </div>
      </div>
    </div>
  \`
})
export class ConsentCaptureComponent {
  items: ConsentItem[] = [
    { id: 'data', title: 'Data Collection & Storage', description: 'Consent to collect and store personal data.', required: true },
    { id: 'sharing', title: 'Data Sharing', description: 'Consent to share data with departments.', required: true },
    { id: 'aadhaar', title: 'Aadhaar Verification', description: 'Consent to UIDAI verification.', required: true },
    { id: 'comms', title: 'Communications', description: 'Receive service notifications.', required: false },
  ];
  consents: Record<string, boolean> = {};
  expanded: string | null = null;
  loading = false; error = ''; submitted = false;

  toggle(id: string) { this.expanded = this.expanded === id ? null : id; }
  allRequired() { return this.items.filter(i => i.required).every(i => this.consents[i.id]); }

  async submit() {
    if (!this.allRequired()) { this.error = 'Accept all required items'; return; }
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/consent/capture', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ consents: this.consents }) });
      if (!res.ok) { this.error = 'Failed'; return; }
      this.submitted = true;
    } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }
}`;

const CONSENT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Consent Capture — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
    .sub { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
    .consent-item { border: 1px solid #e5e7eb; border-radius: 0.75rem; margin-bottom: 0.75rem; overflow: hidden; }
    .consent-header { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; cursor: pointer; }
    .consent-header input { margin-top: 0.25rem; }
    .consent-title { font-weight: 600; font-size: 0.875rem; }
    .required-badge { font-size: 0.75rem; background: #fef2f2; color: #b91c1c; padding: 0.125rem 0.5rem; border-radius: 1rem; margin-left: 0.5rem; }
    .consent-desc { padding: 0 1rem 1rem 2.75rem; font-size: 0.875rem; color: #6b7280; display: none; }
    .consent-desc.show { display: block; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:disabled { opacity: 0.6; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .note { text-align: center; font-size: 0.75rem; color: #6b7280; margin-top: 1rem; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Consent & Permissions</h1>
    <p class="sub">Review and provide your consent for data processing.</p>
    <div id="error" class="error" role="alert"></div>
    <div id="consentList"></div>
    <button class="btn" id="submitBtn" onclick="submitConsent()">Accept & Continue</button>
    <p class="note">Your consent is recorded securely and can be withdrawn at any time.</p>
  </div>
  <script>
    const items = [
      { id: 'data', title: 'Data Collection & Storage', desc: 'I consent to the collection and secure storage of my personal data for this government service.', required: true },
      { id: 'sharing', title: 'Data Sharing with Departments', desc: 'I consent to sharing my data with relevant government departments.', required: true },
      { id: 'aadhaar', title: 'Aadhaar Verification', desc: 'I consent to identity verification through UIDAI.', required: true },
      { id: 'comms', title: 'Service Communications', desc: 'I agree to receive notifications about my application.', required: false },
      { id: 'analytics', title: 'Service Improvement', desc: 'I consent to anonymized usage data collection.', required: false },
    ];
    const list = document.getElementById('consentList');
    items.forEach(item => {
      const div = document.createElement('div'); div.className = 'consent-item';
      div.innerHTML = '<div class="consent-header" onclick="toggleDesc(\\'' + item.id + '\\')"><input type="checkbox" id="c-'+item.id+'" onclick="event.stopPropagation()"><div><span class="consent-title">'+item.title+'</span>'+(item.required?'<span class="required-badge">Required</span>':'')+'</div></div><div class="consent-desc" id="desc-'+item.id+'">'+item.desc+'</div>';
      list.appendChild(div);
    });
    function toggleDesc(id) { const el = document.getElementById('desc-'+id); el.classList.toggle('show'); }
    function showError(m) { const e=document.getElementById('error'); e.textContent=m; e.style.display='block'; }
    async function submitConsent() {
      document.getElementById('error').style.display='none';
      const missing = items.filter(i => i.required && !document.getElementById('c-'+i.id).checked);
      if (missing.length) { showError('Please accept all required consent items'); return; }
      const consents = {}; items.forEach(i => consents[i.id] = document.getElementById('c-'+i.id).checked);
      const btn = document.getElementById('submitBtn'); btn.disabled = true; btn.textContent = 'Recording...';
      try {
        const res = await fetch('/api/consent/capture', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ consents }) });
        if (!res.ok) { showError('Failed to record consent'); return; }
        document.querySelector('.card').innerHTML = '<div style="text-align:center;padding:2rem 0"><h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">Consent Recorded</h2><p style="color:#6b7280">Your preferences have been saved securely.</p></div>';
      } catch { showError('Network error'); }
      finally { btn.disabled = false; btn.textContent = 'Accept & Continue'; }
    }
  </script>
</body>
</html>`;

function CodeDownloadsSection() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks + Expandable Items', code: CONSENT_REACT_CODE, filename: 'ConsentCapturePage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: CONSENT_ANGULAR_CODE, filename: 'consent-capture.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: CONSENT_HTML_CODE, filename: 'consent-capture.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Consent Capture implementations for your framework.</p>
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
        <p className="text-muted-foreground mt-2">Legal requirements and quality assurance</p>
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
                  All government services collecting personal data MUST implement consent capture
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Shield size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Required by Digital Personal Data Protection Act</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Essential for UX4G certification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Requirements */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Legal Compliance</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <ComplianceItem text="Digital Personal Data Protection Act 2023" />
            <ComplianceItem text="IT Act 2000 (amended 2008)" />
            <ComplianceItem text="Right to Information Act compliance" />
            <ComplianceItem text="Aadhaar Act 2016 (if applicable)" />
            <ComplianceItem text="Service-specific regulations" />
          </div>
        </div>

        {/* Pre-Launch Checklist */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden col-span-2">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Pre-Launch Checklist</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <ChecklistItem text="Plain language review completed" />
                <ChecklistItem text="Legal team approval obtained" />
                <ChecklistItem text="All 6 essential elements included" />
                <ChecklistItem text="Multilingual versions tested" />
                <ChecklistItem text="Withdrawal mechanism functional" />
                <ChecklistItem text="Consent database schema implemented" />
              </div>
              <div className="space-y-2">
                <ChecklistItem text="WCAG 2.1 AA compliance verified" />
                <ChecklistItem text="Screen reader testing completed" />
                <ChecklistItem text="Keyboard navigation validated" />
                <ChecklistItem text="Mobile responsive design tested" />
                <ChecklistItem text="Audit trail logging active" />
                <ChecklistItem text="Security review passed" />
              </div>
            </div>
          </div>
        </div>

        {/* Support & Escalation */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 col-span-2">
          <div className="flex items-start gap-4">
            <HelpCircle size={32} className="text-primary flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-foreground text-lg mb-2">Support & Escalation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div>
                  <h3 className="font-bold text-foreground mb-1">Legal Questions</h3>
                  <p className="text-muted-foreground mb-2">For compliance and legal guidance</p>
                  <a href="#" className="text-primary font-bold hover:underline">legal@ux4g.gov.in</a>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Implementation Support</h3>
                  <p className="text-muted-foreground mb-2">For technical implementation help</p>
                  <a href="#" className="text-primary font-bold hover:underline">support@ux4g.gov.in</a>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Privacy Officer</h3>
                  <p className="text-muted-foreground mb-2">For data protection concerns</p>
                  <a href="#" className="text-primary font-bold hover:underline">privacy@digitalindia.gov.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Shield size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <div className="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
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
          <div className="text-muted-foreground">Consent & Declaration</div>
        </div>
        <div className="border-t border-border pt-3">
          <div className="font-bold text-foreground mb-1">Complexity</div>
          <div className="text-muted-foreground">Medium</div>
        </div>
        <div className="border-t border-border pt-3">
          <div className="font-bold text-foreground mb-1">Est. Implementation</div>
          <div className="text-muted-foreground">2-3 days</div>
        </div>
        <div className="border-t border-border pt-3">
          <div className="font-bold text-foreground mb-1">Legal Review Required</div>
          <div className="text-muted-foreground">Yes (Mandatory)</div>
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
        <Link 
          to="/consent-capture-demo"
          className="block w-full px-4 py-3 bg-primary text-white text-center font-bold text-sm rounded hover:opacity-90 transition-colors"
        >
          View Live Demo
        </Link>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Test all consent states and flows
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
          to="/declaration-submission-pattern"
          className="block px-3 py-2 bg-background hover:bg-muted border border-border rounded text-sm text-foreground transition-colors"
        >
          <div className="font-bold">Declaration Before Submission</div>
          <div className="text-xs text-muted-foreground">Form submission declaration</div>
        </Link>
        <Link 
          to="/data-sharing-consent-pattern"
          className="block px-3 py-2 bg-background hover:bg-muted border border-border rounded text-sm text-foreground transition-colors"
        >
          <div className="font-bold">Data Sharing Consent</div>
          <div className="text-xs text-muted-foreground">Third-party data sharing</div>
        </Link>
        <Link 
          to="/consent-withdrawal-pattern"
          className="block px-3 py-2 bg-background hover:bg-muted border border-border rounded text-sm text-foreground transition-colors"
        >
          <div className="font-bold">Consent Withdrawal</div>
          <div className="text-xs text-muted-foreground">Manage and revoke consent</div>
        </Link>
        <Link 
          to="/privacy-notice-pattern"
          className="block px-3 py-2 bg-background hover:bg-muted border border-border rounded text-sm text-foreground transition-colors"
        >
          <div className="font-bold">Privacy Notice</div>
          <div className="text-xs text-muted-foreground">Privacy policy acknowledgment</div>
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
          <Shield size={16} />
          <span>Legal Templates</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
          <Globe size={16} />
          <span>Multilingual Versions</span>
        </a>
      </div>
    </div>
  );
}
