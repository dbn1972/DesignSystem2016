import { Link } from "react-router";
import { Shield, Smartphone, Mail, Lock, Key, RefreshCw, UserCheck, Clock, AlertTriangle, CheckCircle, ArrowRight, FileText, Info, Eye, Users, Layers, GitBranch, Database, Zap, Globe, Code, BookOpen, Settings, BarChart3, XCircle } from "lucide-react";

export default function IdentityAccessPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <Shield size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Service Pattern Library</div>
                  <h1 className="text-3xl font-bold text-foreground">Identity and Access Patterns</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A comprehensive, cross-service pattern family for identity verification, authentication, 
                password recovery, session management, and error handling across all Government of India digital services. 
                Built for 1.4 billion citizens with accessibility, security, and trust as foundational principles.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-009</span></span>
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

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-16">
            <WhatAreIdentityPatterns />
            <WhyCrossService />
            <RelationshipToArchetypes />
            <CorePatternFamilies />
            <InteractiveFlowsGrid />
            <CommonUserJourneys />
            <AccessibilityConsiderations />
            <ImplementationConsiderations />
            <GovernanceConsiderations />
            <SupportAndRecovery />
            <LifecycleAndReadiness />
          </div>

          {/* Sidebar - 3 columns */}
          <aside className="col-span-3 space-y-6 sticky top-24 self-start">
            <QuickRefPanel />
            <KeyPrinciples />
            <UsageStats />
            <RelatedPatterns />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Identity and Access Patterns</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== WHAT ARE IDENTITY PATTERNS ====================

function WhatAreIdentityPatterns() {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">What Are Identity and Access Patterns?</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-8">
        <p className="text-muted-foreground leading-relaxed mb-6">
          Identity and Access Patterns are <span className="font-bold text-foreground">structured, reusable UX flows</span> that handle 
          user authentication, identity verification, session management, password recovery, and error states across government digital services.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-5 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="flex items-start gap-3 mb-3">
              <Shield size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <h3 className="font-bold text-foreground">Not Just Login Forms</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These are complete journey patterns covering account creation, verification methods (OTP, Aadhaar), 
              recovery flows, session security, and comprehensive error handling—not isolated UI components.
            </p>
          </div>

          <div className="p-5 bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-start gap-3 mb-3">
              <Layers size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
              <h3 className="font-bold text-foreground">Cross-Service Foundation</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Used as foundational patterns across <span className="font-bold">120+ government services</span>, 
              ensuring citizens encounter familiar, predictable authentication experiences regardless of department.
            </p>
          </div>
        </div>

        <div className="mt-6 p-6 bg-background border-2 border-border rounded-lg">
          <h3 className="font-bold text-foreground mb-4">Pattern Scope</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <ScopeItem icon={<UserCheck size={16} />} label="Account Creation" description="Sign up with verification" />
            <ScopeItem icon={<Lock size={16} />} label="Authentication" description="Sign in, Aadhaar auth" />
            <ScopeItem icon={<Smartphone size={16} />} label="Verification" description="OTP (mobile, email)" />
            <ScopeItem icon={<Key size={16} />} label="Recovery" description="Password reset, account unlock" />
            <ScopeItem icon={<Clock size={16} />} label="Session Security" description="Timeout, re-authentication" />
            <ScopeItem icon={<AlertTriangle size={16} />} label="Error Handling" description="Lockout, failure states" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScopeItem({ icon, label, description }: { icon: React.ReactNode; label: string; description: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="text-primary flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="font-bold text-foreground text-sm">{label}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

// ==================== WHY CROSS-SERVICE ====================

function WhyCrossService() {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Why Are These Cross-Service Patterns?</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-8 py-4">
          <h3 className="font-bold text-foreground">Consistency Across Government Services</h3>
        </div>
        <div className="p-8">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Citizens interact with multiple government departments—income tax, passport services, ration card, 
            driving license, subsidies, healthcare. Each service requires authentication. 
            <span className="font-bold text-foreground"> Inconsistent identity flows create confusion, failed authentications, 
            and increased support burden.</span>
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <XCircle size={16} className="text-red-600" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-1">Without Cross-Service Patterns</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Each department designs its own login flow</li>
                    <li>• Inconsistent OTP delivery times and formats</li>
                    <li>• Different password requirements per service</li>
                    <li>• Varied error messages and recovery paths</li>
                    <li>• Citizens must re-learn authentication for each service</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-1">With Cross-Service Patterns</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Familiar login experience across all services</li>
                    <li>• Consistent OTP timing (30 seconds mobile, 2 min email)</li>
                    <li>• Unified password policy government-wide</li>
                    <li>• Predictable error handling and recovery</li>
                    <li>• Citizens learn once, use everywhere</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-5 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <div className="font-bold text-foreground mb-2">Design System Principle</div>
                <p>
                  Identity patterns must be <span className="font-bold">consistent across departments</span> because 
                  citizens don't distinguish between "Income Tax Portal" and "Passport Service"—they see them all as 
                  "Government of India." A unified authentication experience builds trust and reduces cognitive load.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== RELATIONSHIP TO ARCHETYPES ====================

function RelationshipToArchetypes() {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">How Identity Patterns Relate to Service Archetypes</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-8">
        <p className="text-muted-foreground leading-relaxed mb-6">
          Service archetypes (Application Submission, Eligibility Screening, Renewal, etc.) represent <span className="font-bold">end-to-end citizen journeys</span>. 
          Identity and Access Patterns are <span className="font-bold">foundational sub-patterns</span> that appear within these archetypes as required steps.
        </p>

        <div className="space-y-4">
          <ArchetypeMapping
            archetype="Application Submission"
            identityFlows={["Sign Up (first-time users)", "Sign In (returning users)", "Session Timeout"]}
            example="Passport application requires sign in before starting application form"
          />
          <ArchetypeMapping
            archetype="Eligibility & Screening"
            identityFlows={["Aadhaar Authentication", "Mobile OTP Verification"]}
            example="Subsidy eligibility check uses Aadhaar to verify applicant identity"
          />
          <ArchetypeMapping
            archetype="Renewal"
            identityFlows={["Sign In", "Forgot Password", "Account Recovery"]}
            example="License renewal requires login; forgot password flow if credentials lost"
          />
          <ArchetypeMapping
            archetype="Complaint & Escalation"
            identityFlows={["Sign In", "Email OTP Verification"]}
            example="Filing complaint requires authentication to link complaint to citizen record"
          />
          <ArchetypeMapping
            archetype="High-Volume Status Tracking"
            identityFlows={["Sign In (optional)", "Mobile OTP for tracking ID"]}
            example="Track application status—authenticated users see full history, guest users need OTP"
          />
        </div>

        <div className="mt-6 p-5 bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg">
          <div className="font-bold text-foreground mb-3">Pattern Hierarchy</div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="px-3 py-2 bg-card border-2 border-border rounded font-bold">Service Archetype</div>
            <span>contains</span>
            <div className="px-3 py-2 bg-blue-100 border-2 border-blue-300 rounded font-bold">Identity Pattern</div>
            <span>uses</span>
            <div className="px-3 py-2 bg-green-100 border-2 border-green-300 rounded font-bold">UI Components</div>
          </div>
          <div className="text-xs text-muted-foreground mt-3">
            Example: Application Submission archetype → uses Sign In pattern → uses Form Input and Password Input components
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchetypeMapping({ archetype, identityFlows, example }: { archetype: string; identityFlows: string[]; example: string }) {
  return (
    <div className="p-5 bg-background border-2 border-border rounded-lg">
      <div className="flex items-start justify-between mb-3">
        <div className="font-bold text-foreground">{archetype}</div>
        <Link to="/archetypes" className="text-xs text-primary hover:underline">View Archetype →</Link>
      </div>
      <div className="space-y-2 mb-3">
        {identityFlows.map((flow, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
            <span className="text-muted-foreground">{flow}</span>
          </div>
        ))}
      </div>
      <div className="text-xs text-muted-foreground italic">Example: {example}</div>
    </div>
  );
}

// ==================== CORE PATTERN FAMILIES ====================

function CorePatternFamilies() {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Core Pattern Families</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PatternFamily
          title="Account Creation"
          icon={<UserCheck size={32} className="text-blue-600" />}
          bgColor="bg-blue-50"
          borderColor="border-blue-200 dark:border-blue-800"
          patterns={["Sign Up"]}
          description="New account registration with mobile/email verification and consent"
        />
        <PatternFamily
          title="Authentication"
          icon={<Lock size={32} className="text-green-600" />}
          bgColor="bg-green-50"
          borderColor="border-green-200 dark:border-green-800"
          patterns={["Sign In", "Aadhaar Authentication"]}
          description="Standard login and Aadhaar-based identity verification"
        />
        <PatternFamily
          title="Verification"
          icon={<Smartphone size={32} className="text-purple-600" />}
          bgColor="bg-purple-50"
          borderColor="border-purple-200 dark:border-purple-800"
          patterns={["Mobile OTP", "Email OTP"]}
          description="One-time password verification via SMS or email"
        />
        <PatternFamily
          title="Recovery"
          icon={<RefreshCw size={32} className="text-orange-600" />}
          bgColor="bg-orange-50"
          borderColor="border-orange-200 dark:border-orange-800"
          patterns={["Forgot Password", "Account Recovery"]}
          description="Password reset and locked account recovery workflows"
        />
        <PatternFamily
          title="Session Security"
          icon={<Clock size={32} className="text-yellow-600" />}
          bgColor="bg-yellow-50"
          borderColor="border-yellow-200 dark:border-yellow-800"
          patterns={["Session Timeout"]}
          description="Inactivity warnings and automatic logout for security"
        />
        <PatternFamily
          title="Error Handling"
          icon={<AlertTriangle size={32} className="text-red-600" />}
          bgColor="bg-red-50"
          borderColor="border-red-200 dark:border-red-800"
          patterns={["Error States & Lockout"]}
          description="Invalid credentials, account lockout, and system errors"
        />
      </div>
    </section>
  );
}

function PatternFamily({ title, icon, bgColor, borderColor, patterns, description }: { 
  title: string; 
  icon: React.ReactNode; 
  bgColor: string; 
  borderColor: string; 
  patterns: string[]; 
  description: string;
}) {
  return (
    <div className={`border-2 ${borderColor} ${bgColor} rounded-lg p-6`}>
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <div className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</div>
      <div className="space-y-1">
        {patterns.map((pattern, idx) => (
          <div key={idx} className="text-sm font-medium text-foreground">• {pattern}</div>
        ))}
      </div>
    </div>
  );
}

// ==================== INTERACTIVE FLOWS GRID ====================

function InteractiveFlowsGrid() {
  const flows = [
    {
      id: "sign-up",
      title: "Sign Up",
      description: "New account creation with mobile verification and consent",
      icon: <UserCheck size={32} className="text-blue-600" />,
      href: "/patterns/identity/sign-up",
      status: "Stable",
      complexity: "Medium",
      category: "Account Creation"
    },
    {
      id: "sign-in",
      title: "Sign In",
      description: "Standard authentication with username/mobile + password",
      icon: <Lock size={32} className="text-green-600" />,
      href: "/patterns/identity/sign-in",
      status: "Stable",
      complexity: "Low",
      category: "Authentication"
    },
    {
      id: "mobile-otp",
      title: "Mobile OTP Verification",
      description: "6-digit OTP sent to registered mobile number",
      icon: <Smartphone size={32} className="text-purple-600" />,
      href: "/patterns/identity/mobile-otp",
      status: "Stable",
      complexity: "Low",
      category: "Verification"
    },
    {
      id: "email-otp",
      title: "Email OTP Verification",
      description: "6-digit OTP sent to registered email address",
      icon: <Mail size={32} className="text-orange-600" />,
      href: "/patterns/identity/otp-verification",
      status: "Stable",
      complexity: "Low",
      category: "Verification"
    },
    {
      id: "forgot-password",
      title: "Forgot Password / Reset",
      description: "Password recovery with OTP verification",
      icon: <Key size={32} className="text-red-600" />,
      href: "/patterns/identity/forgot-password",
      status: "Stable",
      complexity: "Medium",
      category: "Recovery"
    },
    {
      id: "account-recovery",
      title: "Account Recovery",
      description: "Multi-factor account recovery for locked accounts",
      icon: <RefreshCw size={32} className="text-teal-600" />,
      href: "/patterns/identity/account-recovery",
      status: "Stable",
      complexity: "High",
      category: "Recovery"
    },
    {
      id: "aadhaar-auth",
      title: "Aadhaar Authentication",
      description: "Aadhaar-based identity verification with consent",
      icon: <Shield size={32} className="text-indigo-600" />,
      href: "/patterns/identity/aadhaar-auth",
      status: "Stable",
      complexity: "High",
      category: "Authentication"
    },
    {
      id: "session-timeout",
      title: "Session Timeout / Re-auth",
      description: "Inactive session warning and re-authentication",
      icon: <Clock size={32} className="text-yellow-600" />,
      href: "/patterns/identity/session-timeout",
      status: "Stable",
      complexity: "Medium",
      category: "Security"
    },
    {
      id: "error-lockout",
      title: "Authentication Error & Lockout",
      description: "Failed attempts, error messages, and account lockout",
      icon: <AlertTriangle size={32} className="text-red-600" />,
      href: "/patterns/identity/auth-error",
      status: "Stable",
      complexity: "Medium",
      category: "Error Handling"
    }
  ];

  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Interactive Flow Prototypes</h2>
        <p className="text-muted-foreground mt-2">Click any pattern to view the interactive prototype with realistic states and navigation</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flows.map((flow) => (
          <Link
            key={flow.id}
            to={flow.href}
            className="border-2 border-border rounded-lg overflow-hidden bg-card hover:border-primary hover:shadow-lg transition-all group"
          >
            {/* Icon Header */}
            <div className="bg-background border-b-2 border-border p-6 h-28 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              {flow.icon}
            </div>

            {/* Details */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-foreground text-sm flex-1">{flow.title}</h3>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full flex-shrink-0 ml-2">
                  {flow.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{flow.description}</p>
              
              <div className="flex items-center justify-between text-xs">
                <div className="text-gray-500">
                  <span className="font-bold">Complexity:</span> {flow.complexity}
                </div>
                <div className="text-gray-500">{flow.category}</div>
              </div>

              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-sm font-medium text-primary">View Prototype</span>
                <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ==================== COMMON USER JOURNEYS ====================

function CommonUserJourneys() {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Common User Journeys</h2>
      </div>

      <div className="space-y-6">
        <JourneyCard
          title="First-Time User (New Account)"
          steps={[
            { label: "Sign Up", description: "Create account with mobile and email" },
            { label: "Mobile OTP", description: "Verify mobile number" },
            { label: "Complete Profile", description: "Add personal information" },
            { label: "Access Service", description: "Start using government service" }
          ]}
          duration="5-7 minutes"
          complexity="Medium"
        />

        <JourneyCard
          title="Returning User (Sign In)"
          steps={[
            { label: "Sign In", description: "Enter username and password" },
            { label: "Access Service", description: "Continue to dashboard or service" }
          ]}
          duration="30 seconds"
          complexity="Low"
        />

        <JourneyCard
          title="Forgot Password Recovery"
          steps={[
            { label: "Request Reset", description: "Enter mobile or email" },
            { label: "OTP Verification", description: "Verify identity via OTP" },
            { label: "Create New Password", description: "Set new password meeting requirements" },
            { label: "Sign In", description: "Login with new credentials" }
          ]}
          duration="3-5 minutes"
          complexity="Medium"
        />

        <JourneyCard
          title="High-Security Service (Aadhaar Required)"
          steps={[
            { label: "Sign In", description: "Standard authentication" },
            { label: "Aadhaar Consent", description: "Read and accept terms" },
            { label: "Enter Aadhaar", description: "Provide 12-digit number" },
            { label: "OTP Verification", description: "Verify via Aadhaar-linked mobile" },
            { label: "Access Service", description: "Proceed to high-security service" }
          ]}
          duration="4-6 minutes"
          complexity="High"
        />

        <JourneyCard
          title="Account Locked (Recovery)"
          steps={[
            { label: "View Lockout Message", description: "Understand why account is locked" },
            { label: "Start Recovery", description: "Provide identity information" },
            { label: "Submit Documents", description: "Upload government ID proof" },
            { label: "Wait for Review", description: "3-5 business day manual verification" },
            { label: "Account Unlocked", description: "Receive notification and sign in" }
          ]}
          duration="3-5 business days"
          complexity="High"
        />
      </div>
    </section>
  );
}

function JourneyCard({ title, steps, duration, complexity }: {
  title: string;
  steps: Array<{ label: string; description: string }>;
  duration: string;
  complexity: string;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6">
      <div className="flex items-start justify-between mb-6">
        <h3 className="font-bold text-foreground text-lg">{title}</h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="text-muted-foreground">
            <span className="font-bold">Duration:</span> {duration}
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            complexity === 'High' 
              ? 'bg-red-100 text-red-700' 
              : complexity === 'Medium' 
              ? 'bg-yellow-100 text-yellow-700' 
              : 'bg-green-100 text-green-700'
          }`}>
            {complexity}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-4 flex-1">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-foreground text-sm">{step.label}</div>
                  <div className="text-xs text-muted-foreground">{step.description}</div>
                </div>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <ArrowRight size={16} className="text-gray-400 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== ACCESSIBILITY CONSIDERATIONS ====================

function AccessibilityConsiderations() {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Accessibility Considerations</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-8 py-4">
          <h3 className="font-bold text-foreground">WCAG 2.1 AA Compliance Across All Patterns</h3>
        </div>
        <div className="p-8 space-y-6">
          <AccessibilityBlock
            title="Form Design and Labeling"
            requirements={[
              "All input fields have visible labels (not placeholder-only)",
              "Required fields marked with asterisk (*) and aria-required",
              "Field-level help text provided before interaction, not after errors",
              "Error messages linked to fields via aria-describedby",
              "Clear distinction between optional and required fields"
            ]}
          />
          <AccessibilityBlock
            title="OTP Input Accessibility"
            requirements={[
              "Auto-advance focus between OTP digits with keyboard support",
              "Backspace navigates to previous field when empty",
              "Paste support for complete 6-digit codes",
              "Countdown timers announced to screen readers at intervals",
              "Resend button disabled state clearly communicated"
            ]}
          />
          <AccessibilityBlock
            title="Keyboard Navigation"
            requirements={[
              "All interactive elements accessible via Tab and Enter",
              "Visible focus indicators (2px outline, 2px offset)",
              "'Skip to main content' link at top of page",
              "No keyboard traps in modals, forms, or overlays",
              "Logical tab order following visual hierarchy"
            ]}
          />
          <AccessibilityBlock
            title="Screen Reader Support"
            requirements={[
              "Meaningful page titles and headings (h1, h2, h3)",
              "Form field instructions announced before input",
              "Loading states and progress updates announced",
              "Error messages announced immediately on submission",
              "Success confirmations clearly communicated"
            ]}
          />
          <AccessibilityBlock
            title="Color and Contrast"
            requirements={[
              "Minimum 4.5:1 contrast for text (7:1 for large text)",
              "Error states not conveyed by color alone (icons + text)",
              "Link text distinguishable without relying on color",
              "Focus indicators visible on all backgrounds"
            ]}
          />
          <AccessibilityBlock
            title="Low-Bandwidth and Assistive Tech"
            requirements={[
              "Patterns work on 2G networks (minimal dependencies)",
              "Offline fallback: helpline numbers always visible",
              "Compatible with screen readers (JAWS, NVDA, VoiceOver)",
              "Works with browser zoom up to 200%"
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
      <div className="grid grid-cols-2 gap-3">
        {requirements.map((req, idx) => (
          <div key={idx} className="flex items-start gap-2 text-sm">
            <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{req}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== IMPLEMENTATION CONSIDERATIONS ====================

function ImplementationConsiderations() {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Implementation Considerations</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ImplementationCard
          icon={<Code size={24} className="text-blue-600" />}
          title="Frontend Implementation"
          considerations={[
            "React + TypeScript with form validation",
            "State management for multi-step flows",
            "Timer/countdown components for OTP",
            "Responsive design (mobile-first)",
            "Error boundary components",
            "Loading and disabled states for all CTAs"
          ]}
        />
        <ImplementationCard
          icon={<Database size={24} className="text-green-600" />}
          title="Backend Integration"
          considerations={[
            "OTP delivery via SMS/Email gateways",
            "Session management and token refresh",
            "Rate limiting (5 attempts = 15 min lock)",
            "UIDAI Aadhaar verification API",
            "Document upload and storage (S3/Azure)",
            "Audit logging for all authentication events"
          ]}
        />
        <ImplementationCard
          icon={<Shield size={24} className="text-purple-600" />}
          title="Security Implementation"
          considerations={[
            "256-bit SSL/TLS encryption required",
            "Password hashing (bcrypt, Argon2)",
            "CSRF protection on all forms",
            "Secure session cookies (httpOnly, secure flags)",
            "Input sanitization and validation",
            "SQL injection prevention"
          ]}
        />
        <ImplementationCard
          icon={<Settings size={24} className="text-orange-600" />}
          title="Configuration & Customization"
          considerations={[
            "Configurable session timeouts (default 30 min)",
            "Adjustable OTP expiry times",
            "Customizable password requirements",
            "Lockout policy configuration",
            "Email/SMS template customization",
            "Multilingual content support (Hindi + English)"
          ]}
        />
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-foreground mb-2">Implementation Starter Kit</div>
            <p className="text-sm text-muted-foreground mb-3">
              All identity patterns come with reference implementations, API endpoint specifications, 
              validation rules, and integration guides for common government tech stacks.
            </p>
            <Link to="/starter-kits" className="text-sm font-bold text-primary hover:underline">
              Download Starter Kit →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImplementationCard({ icon, title, considerations }: {
  icon: React.ReactNode;
  title: string;
  considerations: string[];
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-2">
        {considerations.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-1.5"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==================== GOVERNANCE CONSIDERATIONS ====================

function GovernanceConsiderations() {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Governance Considerations</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-8 py-4">
          <h3 className="font-bold text-foreground">Mandatory Conformance for All Government Services</h3>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="p-5 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <div className="font-bold text-foreground">Mandatory Patterns</div>
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>All government digital services <span className="font-bold">must implement</span> these patterns:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Sign In (primary authentication)</li>
                  <li>• Forgot Password / Reset</li>
                  <li>• Session Timeout</li>
                  <li>• Error States & Lockout</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                <div className="font-bold text-foreground">Conditional Patterns</div>
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Implement <span className="font-bold">when service requires</span>:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Sign Up (new account creation services)</li>
                  <li>• OTP Verification (additional security layer)</li>
                  <li>• Aadhaar Authentication (high-security services)</li>
                  <li>• Account Recovery (long-term user accounts)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <GovernanceItem
              title="Conformance Tracking"
              description="120 government services currently use identity patterns. Adoption tracked via UX4G Conformance Dashboard."
              link="/conformance-dashboard"
            />
            <GovernanceItem
              title="Version Control"
              description="Pattern version 1.0.0 is current stable release. All services must update within 6 months of new version release."
              link=""
            />
            <GovernanceItem
              title="Audit and Compliance"
              description="Quarterly audits verify pattern implementation matches UX4G specifications. Non-conformance reported to department heads."
              link="/governance"
            />
            <GovernanceItem
              title="Support and Training"
              description="Training materials, webinars, and technical support available for implementation teams."
              link="/resources"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GovernanceItem({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="flex items-start justify-between p-4 bg-background border-2 border-border rounded-lg">
      <div className="flex-1">
        <div className="font-bold text-foreground mb-1">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
      {link && (
        <Link to={link} className="text-sm font-bold text-primary hover:underline whitespace-nowrap ml-4">
          View Details →
        </Link>
      )}
    </div>
  );
}

// ==================== SUPPORT AND RECOVERY ====================

function SupportAndRecovery() {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Support and Recovery Considerations</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-8">
        <p className="text-muted-foreground leading-relaxed mb-6">
          Every identity pattern includes <span className="font-bold">built-in support and recovery mechanisms</span> to 
          prevent citizen frustration and reduce helpdesk burden. Support is not an afterthought—it's designed into each flow.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">In-Pattern Support</h3>
            <SupportFeature
              title="Always-Visible Help Cards"
              description="Every flow shows helpline number, email, and office hours"
            />
            <SupportFeature
              title="Contextual Guidance"
              description="Inline help text explains each step before user attempts it"
            />
            <SupportFeature
              title="Clear Error Messages"
              description="Errors explain what went wrong and provide next steps"
            />
            <SupportFeature
              title="Recovery Path Options"
              description="Every error offers at least 2 recovery paths (self-serve + assisted)"
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Escalation Mechanisms</h3>
            <SupportFeature
              title="Multi-Channel Support"
              description="Phone (1800-XXX-XXXX), email, live chat where available"
            />
            <SupportFeature
              title="Reference Codes"
              description="Unique reference IDs for tracking support requests"
            />
            <SupportFeature
              title="Manual Review Fallback"
              description="Account recovery includes human review for complex cases"
            />
            <SupportFeature
              title="Offline Options"
              description="Physical service centers for citizens unable to self-serve online"
            />
          </div>
        </div>

        <div className="p-5 bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-foreground mb-2">Critical Support Principle</div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold">Never leave citizens stranded.</span> If automated recovery fails (OTP not received, 
                account locked, verification failed), always provide manual support path with clear instructions and estimated response time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-background border-2 border-border rounded-lg">
      <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
      <div>
        <div className="font-bold text-foreground text-sm mb-1">{title}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

// ==================== LIFECYCLE AND READINESS ====================

function LifecycleAndReadiness() {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Lifecycle and Readiness Statuses</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-8 py-4">
          <h3 className="font-bold text-foreground">Pattern Maturity and Production Status</h3>
        </div>
        <div className="p-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-bold text-foreground">Pattern</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Version</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Last Updated</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Services Using</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Conformance</th>
                </tr>
              </thead>
              <tbody>
                <LifecycleRow pattern="Sign Up" status="Stable" version="1.0.0" updated="April 2026" usage="85" conformance="Conditional" />
                <LifecycleRow pattern="Sign In" status="Stable" version="1.0.0" updated="April 2026" usage="120" conformance="Mandatory" />
                <LifecycleRow pattern="Mobile OTP Verification" status="Stable" version="1.0.0" updated="April 2026" usage="94" conformance="Conditional" />
                <LifecycleRow pattern="Email OTP Verification" status="Stable" version="1.0.0" updated="April 2026" usage="67" conformance="Conditional" />
                <LifecycleRow pattern="Forgot Password / Reset" status="Stable" version="1.0.0" updated="April 2026" usage="118" conformance="Mandatory" />
                <LifecycleRow pattern="Account Recovery" status="Stable" version="1.0.0" updated="April 2026" usage="89" conformance="Conditional" />
                <LifecycleRow pattern="Aadhaar Authentication" status="Stable" version="1.0.0" updated="April 2026" usage="42" conformance="Conditional" />
                <LifecycleRow pattern="Session Timeout" status="Stable" version="1.0.0" updated="April 2026" usage="120" conformance="Mandatory" />
                <LifecycleRow pattern="Error States & Lockout" status="Stable" version="1.0.0" updated="April 2026" usage="120" conformance="Mandatory" />
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-4">
            <StatusBadge
              label="Stable"
              color="bg-green-100 text-green-700 border-green-300"
              description="Production-ready, no breaking changes expected"
            />
            <StatusBadge
              label="Evolving"
              color="bg-blue-100 text-blue-700 border-blue-300"
              description="Actively being refined based on feedback"
            />
            <StatusBadge
              label="Experimental"
              color="bg-yellow-100 text-yellow-700 border-yellow-300"
              description="Early testing, not recommended for production"
            />
            <StatusBadge
              label="Deprecated"
              color="bg-red-100 text-red-700 border-red-300"
              description="Being replaced, migrate to new version"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LifecycleRow({ pattern, status, version, updated, usage, conformance }: {
  pattern: string;
  status: string;
  version: string;
  updated: string;
  usage: string;
  conformance: string;
}) {
  return (
    <tr className="border-b border-border hover:bg-background">
      <td className="py-3 px-4 font-medium text-foreground">{pattern}</td>
      <td className="py-3 px-4">
        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
          {status}
        </span>
      </td>
      <td className="py-3 px-4 text-sm text-muted-foreground">{version}</td>
      <td className="py-3 px-4 text-sm text-muted-foreground">{updated}</td>
      <td className="py-3 px-4 text-sm font-bold text-foreground">{usage}</td>
      <td className="py-3 px-4">
        <span className={`px-2 py-1 text-xs font-bold rounded-full ${
          conformance === 'Mandatory'
            ? 'bg-red-100 text-red-700'
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {conformance}
        </span>
      </td>
    </tr>
  );
}

function StatusBadge({ label, color, description }: { label: string; color: string; description: string }) {
  return (
    <div className={`p-3 border-2 rounded-lg ${color}`}>
      <div className="font-bold text-sm mb-1">{label}</div>
      <div className="text-xs opacity-80">{description}</div>
    </div>
  );
}

// ==================== SIDEBAR ====================

function QuickRefPanel() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <QuickRefRow label="Total Patterns" value="9" />
        <QuickRefRow label="Auth Methods" value="4" />
        <QuickRefRow label="OTP Types" value="Mobile + Email" />
        <QuickRefRow label="Recovery Flows" value="2" />
        <QuickRefRow label="WCAG Level" value="AA" />
        <QuickRefRow label="Languages" value="Hindi + English" />
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

function KeyPrinciples() {
  return (
    <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden bg-blue-50">
      <div className="bg-blue-100 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Key Principles</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <PrincipleItem icon={<Shield size={14} />} text="Security first, UX second" />
        <PrincipleItem icon={<Eye size={14} />} text="Transparent about data usage" />
        <PrincipleItem icon={<CheckCircle size={14} />} text="Clear error recovery paths" />
        <PrincipleItem icon={<Users size={14} />} text="Accessible to all citizens" />
      </div>
    </div>
  );
}

function PrincipleItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="text-blue-600 flex-shrink-0 mt-0.5">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function UsageStats() {
  return (
    <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden bg-green-50">
      <div className="bg-green-100 border-b-2 border-green-200 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Adoption Stats</h3>
      </div>
      <div className="p-4 space-y-3">
        <StatItem label="Services Using Pattern" value="120+" />
        <StatItem label="Daily Authentications" value="5M+" />
        <StatItem label="Success Rate" value="94%" />
        <StatItem label="Mobile OTP Primary" value="78%" />
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
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
        <RelatedLink title="Application Submission" href="/application-submission-pattern" />
        <RelatedLink title="High-Volume Status Tracking" href="/high-volume-status-tracking-pattern" />
        <RelatedLink title="Complaint and Escalation" href="/complaint-escalation-pattern" />
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
