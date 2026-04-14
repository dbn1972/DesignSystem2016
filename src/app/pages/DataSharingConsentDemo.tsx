import { useState } from "react";
import { Link } from "react-router";
import { Share2, CheckCircle, AlertCircle, Info, ChevronRight, HelpCircle, Database, Users, FileText, ArrowLeft, Shield, Lock, ChevronDown, ChevronUp, Check, X, AlertTriangle, Building, Clock, Eye } from "lucide-react";

type FlowState = 
  | "explanation" 
  | "consent-review"
  | "consent-accepted" 
  | "consent-declined"
  | "alternate-path"
  | "help";

type DataCategory = {
  id: string;
  name: string;
  items: string[];
  required: boolean;
};

type Recipient = {
  id: string;
  name: string;
  type: string;
  purpose: string;
  retentionPeriod: string;
};

export default function DataSharingConsentDemo() {
  const [flowState, setFlowState] = useState<FlowState>("explanation");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [consentChecked, setConsentChecked] = useState(false);
  const [understandDecline, setUnderstandDecline] = useState(false);

  // Mock data
  const dataCategories: DataCategory[] = [
    {
      id: "personal",
      name: "Personal Information",
      items: ["Full name", "Date of birth", "Gender", "Mobile number", "Email address"],
      required: true
    },
    {
      id: "identity",
      name: "Identity Documents",
      items: ["Aadhaar number (last 4 digits)", "PAN number", "Photograph"],
      required: true
    },
    {
      id: "address",
      name: "Address Details",
      items: ["Current residential address", "Permanent address", "Pin code"],
      required: true
    },
    {
      id: "income",
      name: "Income & Employment",
      items: ["Annual income", "Employment status", "Employer name"],
      required: false
    }
  ];

  const recipients: Recipient[] = [
    {
      id: "dept1",
      name: "Ministry of Electronics & IT",
      type: "Government Department",
      purpose: "Identity verification and service delivery",
      retentionPeriod: "5 years from service completion"
    },
    {
      id: "dept2",
      name: "Income Tax Department",
      type: "Government Department",
      purpose: "Income verification for eligibility assessment",
      retentionPeriod: "7 years as per tax regulations"
    },
    {
      id: "provider",
      name: "National e-Governance Division",
      type: "Authorized Service Provider",
      purpose: "Technical infrastructure and service processing",
      retentionPeriod: "Duration of service + 2 years"
    }
  ];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const resetDemo = () => {
    setFlowState("explanation");
    setExpandedSections(new Set());
    setConsentChecked(false);
    setUnderstandDecline(false);
  };

  const handleConsent = (accept: boolean) => {
    if (accept && consentChecked) {
      setFlowState("consent-accepted");
    } else if (!accept) {
      setFlowState("consent-declined");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center">
                  <Share2 size={32} className="text-blue-700" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Interactive Pattern Demo</div>
                  <h1 className="text-3xl font-bold text-foreground">Data-Sharing Consent Flow</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Interactive demonstration of data-sharing consent pattern for services that share user information 
                across systems, departments, or authorized service providers. Shows transparent disclosure, explicit 
                consent, and alternative paths.
              </p>
              <div className="flex items-center gap-4">
                <Link 
                  to="/patterns/consent"
                  className="text-sm text-primary font-bold hover:underline flex items-center gap-1"
                >
                  <ArrowLeft size={16} />
                  Back to Consent Patterns
                </Link>
                <button 
                  onClick={resetDemo}
                  className="text-sm text-muted-foreground font-bold hover:text-foreground flex items-center gap-1"
                >
                  Reset Demo
                </button>
              </div>
            </div>

            {/* State Indicator */}
            <StateIndicator currentState={flowState} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Interactive Flow - 8 columns */}
          <div className="col-span-8">
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              
              {flowState === "explanation" && (
                <ExplanationScreen 
                  onProceed={() => setFlowState("consent-review")}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "consent-review" && (
                <ConsentReviewScreen
                  dataCategories={dataCategories}
                  recipients={recipients}
                  expandedSections={expandedSections}
                  onToggleSection={toggleSection}
                  consentChecked={consentChecked}
                  onConsentChange={setConsentChecked}
                  onAccept={() => handleConsent(true)}
                  onDecline={() => handleConsent(false)}
                  onBack={() => setFlowState("explanation")}
                />
              )}

              {flowState === "consent-accepted" && (
                <ConsentAcceptedScreen
                  onReset={resetDemo}
                />
              )}

              {flowState === "consent-declined" && (
                <ConsentDeclinedScreen
                  understandDecline={understandDecline}
                  onUnderstandChange={setUnderstandDecline}
                  onAlternatePath={() => setFlowState("alternate-path")}
                  onReconsider={() => setFlowState("consent-review")}
                />
              )}

              {flowState === "alternate-path" && (
                <AlternatePathScreen
                  onBack={() => setFlowState("consent-declined")}
                />
              )}

              {flowState === "help" && (
                <HelpScreen onBack={() => setFlowState("explanation")} />
              )}

            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <aside className="col-span-4 space-y-6">
            <DataSummary dataCategories={dataCategories} recipients={recipients} />
            <StateExplainer currentState={flowState} />
            <KeyPrinciples />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Data-Sharing Consent Interactive Demo</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== STATE INDICATOR ====================

function StateIndicator({ currentState }: { currentState: FlowState }) {
  const stateConfig = {
    explanation: { label: "Explanation", color: "bg-blue-100 text-blue-700" },
    "consent-review": { label: "Review & Consent", color: "bg-purple-100 text-purple-700" },
    "consent-accepted": { label: "Accepted", color: "bg-green-100 text-green-700" },
    "consent-declined": { label: "Declined", color: "bg-red-100 text-red-700" },
    "alternate-path": { label: "Alternate Path", color: "bg-orange-100 text-orange-700" },
    help: { label: "Help", color: "bg-orange-100 text-orange-700" }
  };

  const config = stateConfig[currentState];

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs font-bold text-muted-foreground text-right">CURRENT STATE</div>
      <div className={`px-4 py-3 ${config.color} border-2 border-border rounded font-bold text-sm text-center min-w-[180px]`}>
        {config.label}
      </div>
    </div>
  );
}

// ==================== EXPLANATION SCREEN ====================

function ExplanationScreen({ 
  onProceed,
  onHelp
}: { 
  onProceed: () => void;
  onHelp: () => void;
}) {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1">
        <div className="bg-card px-8 py-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-700 rounded flex items-center justify-center flex-shrink-0">
              <Share2 size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">Data Sharing for Scholarship Application</h2>
              <p className="text-sm text-muted-foreground">
                To process your National Merit Scholarship application faster, we need your consent to share 
                some information with partner departments
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Why Data Sharing */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Why We Need to Share Your Data
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <BenefitItem 
              text="Faster application processing (3 days instead of 14 days)"
              highlight="time"
            />
            <BenefitItem 
              text="Automatic verification without document uploads"
              highlight="convenience"
            />
            <BenefitItem 
              text="Reduced paperwork and fewer visits to offices"
              highlight="convenience"
            />
            <BenefitItem 
              text="Single unified profile across government services"
              highlight="integration"
            />
          </div>
        </div>

        {/* What Happens */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Check size={20} className="text-green-600" />
              <h4 className="font-bold text-foreground text-sm">With Data Sharing</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Automatic verification</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>3-day processing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>No document uploads</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Online tracking</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <X size={20} className="text-orange-600" />
              <h4 className="font-bold text-foreground text-sm">Without Data Sharing</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <AlertCircle size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Manual verification required</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>14-day processing</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Upload all documents</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Possible office visits</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">What Happens Next</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <ProcessStep 
              number={1} 
              text="Review what data will be shared and with whom"
            />
            <ProcessStep 
              number={2} 
              text="Understand how your data will be protected"
            />
            <ProcessStep 
              number={3} 
              text="Give or decline consent for data sharing"
            />
            <ProcessStep 
              number={4} 
              text="Proceed with your application"
            />
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-bold text-orange-900 mb-1 text-sm">Important</h4>
            <p className="text-sm text-orange-800">
              You can decline data sharing, but you will need to complete manual verification. 
              You can also withdraw consent later if you change your mind.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onProceed}
            className="flex-1 px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors"
          >
            Review Data Sharing Details
          </button>
          <button
            onClick={onHelp}
            className="px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background transition-colors"
          >
            Learn More
          </button>
        </div>

      </div>
    </>
  );
}

function BenefitItem({ text, highlight }: { text: string; highlight: "time" | "convenience" | "integration" }) {
  const icons = {
    time: <Clock size={16} className="text-blue-600" />,
    convenience: <CheckCircle size={16} className="text-blue-600" />,
    integration: <Database size={16} className="text-blue-600" />
  };

  return (
    <div className="flex items-start gap-3">
      {icons[highlight]}
      <span>{text}</span>
    </div>
  );
}

function ProcessStep({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
        {number}
      </div>
      <span>{text}</span>
    </div>
  );
}

// ==================== CONSENT REVIEW SCREEN ====================

function ConsentReviewScreen({
  dataCategories,
  recipients,
  expandedSections,
  onToggleSection,
  consentChecked,
  onConsentChange,
  onAccept,
  onDecline,
  onBack
}: {
  dataCategories: DataCategory[];
  recipients: Recipient[];
  expandedSections: Set<string>;
  onToggleSection: (id: string) => void;
  consentChecked: boolean;
  onConsentChange: (checked: boolean) => void;
  onAccept: () => void;
  onDecline: () => void;
  onBack: () => void;
}) {
  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <h2 className="text-2xl font-bold text-foreground mb-2">Review Data Sharing Details</h2>
        <p className="text-sm text-muted-foreground">
          Please review all details before providing consent
        </p>
      </div>

      <div className="p-8 space-y-6">
        
        {/* What Data Section */}
        <ExpandableSection
          id="what-data"
          title="What Data Will Be Shared"
          icon={<Database size={20} className="text-blue-600" />}
          isExpanded={expandedSections.has("what-data")}
          onToggle={() => onToggleSection("what-data")}
        >
          <div className="space-y-4">
            {dataCategories.map(category => (
              <div key={category.id} className="bg-background rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-foreground text-sm">{category.name}</h4>
                  {category.required && (
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded font-bold">
                      Required
                    </span>
                  )}
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ExpandableSection>

        {/* Who Receives Section */}
        <ExpandableSection
          id="who-receives"
          title="Who Will Receive Your Data"
          icon={<Users size={20} className="text-purple-600" />}
          isExpanded={expandedSections.has("who-receives")}
          onToggle={() => onToggleSection("who-receives")}
        >
          <div className="space-y-4">
            {recipients.map(recipient => (
              <div key={recipient.id} className="bg-background rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <Building size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-sm mb-1">{recipient.name}</h4>
                    <p className="text-xs text-muted-foreground">{recipient.type}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-foreground">Purpose:</span>
                    <span>{recipient.purpose}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-foreground">Data Retention:</span>
                    <span>{recipient.retentionPeriod}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ExpandableSection>

        {/* Why Section */}
        <ExpandableSection
          id="why-sharing"
          title="Why This Data Sharing is Needed"
          icon={<Info size={20} className="text-primary" />}
          isExpanded={expandedSections.has("why-sharing")}
          onToggle={() => onToggleSection("why-sharing")}
        >
          <div className="space-y-3 text-sm text-muted-foreground">
            <ReasonItem 
              text="To verify your identity without requiring physical document submission"
            />
            <ReasonItem 
              text="To confirm your eligibility based on income and employment records"
            />
            <ReasonItem 
              text="To prevent duplicate applications and fraud"
            />
            <ReasonItem 
              text="To maintain a unified record for future scholarship renewals"
            />
          </div>
        </ExpandableSection>

        {/* Security Section */}
        <ExpandableSection
          id="security"
          title="How Your Data is Protected"
          icon={<Shield size={20} className="text-green-600" />}
          isExpanded={expandedSections.has("security")}
          onToggle={() => onToggleSection("security")}
        >
          <div className="space-y-3 text-sm text-muted-foreground">
            <SecurityItem 
              text="All data is encrypted during transfer using 256-bit SSL"
            />
            <SecurityItem 
              text="Access is logged and audited for compliance"
            />
            <SecurityItem 
              text="Data is shared on need-to-know basis only"
            />
            <SecurityItem 
              text="Recipients are bound by government data protection regulations"
            />
            <SecurityItem 
              text="You can review sharing logs anytime from your account"
            />
          </div>
        </ExpandableSection>

        {/* Your Rights */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Eye size={20} className="text-primary" />
            Your Rights
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <RightItem text="Right to access: View all data shared and sharing logs" />
            <RightItem text="Right to withdraw: Revoke consent anytime (may affect service)" />
            <RightItem text="Right to correct: Request correction of inaccurate data" />
            <RightItem text="Right to complain: Lodge complaint with Data Protection Officer" />
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="bg-background border-2 border-border rounded-lg p-6">
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={consentChecked}
              onChange={(e) => onConsentChange(e.target.checked)}
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
            />
            <div className="flex-1">
              <span className="text-sm text-foreground font-bold block mb-2">
                I consent to sharing my data as described above
              </span>
              <span className="text-xs text-muted-foreground">
                I have reviewed the details of what data will be shared, who will receive it, and why it 
                is needed. I understand my rights and can withdraw consent at any time.
              </span>
            </div>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onDecline}
            className="flex-1 px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Decline Data Sharing
          </button>
          <button
            onClick={onAccept}
            disabled={!consentChecked}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-all ${
              consentChecked
                ? 'bg-primary text-white hover:opacity-90'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Accept and Continue
          </button>
        </div>

      </div>
    </>
  );
}

function ExpandableSection({ 
  id, 
  title, 
  icon, 
  isExpanded, 
  onToggle, 
  children 
}: { 
  id: string;
  title: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-background transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-bold text-foreground">{title}</span>
        </div>
        {isExpanded ? (
          <ChevronUp size={20} className="text-muted-foreground" />
        ) : (
          <ChevronDown size={20} className="text-muted-foreground" />
        )}
      </button>
      {isExpanded && (
        <div className="px-6 pb-6 border-t-2 border-border pt-6">
          {children}
        </div>
      )}
    </div>
  );
}

function ReasonItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function SecurityItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Lock size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function RightItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== CONSENT ACCEPTED SCREEN ====================

function ConsentAcceptedScreen({ onReset }: { onReset: () => void }) {
  return (
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Consent Recorded</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Thank you for providing consent. Your data sharing preferences have been recorded and 
          your application will proceed with automatic verification.
        </p>

        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle size={20} className="text-green-600" />
            What Happens Next
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <NextStepItem text="Your data will be securely shared with authorized departments" />
            <NextStepItem text="Automatic verification will begin within 24 hours" />
            <NextStepItem text="You will receive notifications at each step" />
            <NextStepItem text="Expected processing time: 3 business days" />
            <NextStepItem text="No document uploads required" />
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Managing Your Consent
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>
                View sharing logs anytime from your account dashboard
              </span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>
                Withdraw consent at any time (may require manual verification)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>
                Download consent records for your reference
              </span>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3 text-left">
            <Shield size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-bold text-orange-900 mb-1 text-sm">Data Protection</h4>
              <p className="text-xs text-orange-800">
                All data sharing is encrypted, logged, and monitored. Recipients are bound by government 
                data protection regulations. Any unauthorized access will be reported and investigated.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90">
            Continue to Application
          </button>
          <button
            onClick={onReset}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Reset Demo
          </button>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Consent Reference ID: DSC-{Date.now()}-{Math.random().toString(36).substr(2, 9).toUpperCase()}
        </p>
      </div>
    </div>
  );
}

function NextStepItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== CONSENT DECLINED SCREEN ====================

function ConsentDeclinedScreen({
  understandDecline,
  onUnderstandChange,
  onAlternatePath,
  onReconsider
}: {
  understandDecline: boolean;
  onUnderstandChange: (understood: boolean) => void;
  onAlternatePath: () => void;
  onReconsider: () => void;
}) {
  return (
    <>
      <div className="bg-orange-100 border-b-2 border-orange-300 px-8 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Data Sharing Consent Declined</h2>
        <p className="text-sm text-muted-foreground">
          You have chosen not to share your data. Here's what this means for your application.
        </p>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Impact Notice */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-orange-900 mb-2">Impact of Declining</h3>
              <p className="text-sm text-orange-800 leading-relaxed">
                Without data sharing consent, automatic verification is not possible. You will need to 
                complete a manual verification process which takes longer and requires document submission.
              </p>
            </div>
          </div>
        </div>

        {/* What Changes */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">What Changes for Your Application</h3>
          <div className="space-y-3 text-sm">
            <ChangeItem
              type="slower"
              text="Processing time increases from 3 days to 14 days"
            />
            <ChangeItem
              type="slower"
              text="Manual verification required by officials"
            />
            <ChangeItem
              type="slower"
              text="You must upload all supporting documents"
            />
            <ChangeItem
              type="slower"
              text="Possible requirement for in-person verification"
            />
            <ChangeItem
              type="slower"
              text="Higher risk of application rejection due to incomplete documents"
            />
          </div>
        </div>

        {/* What Stays Same */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            What Stays the Same
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <SameItem text="Your application can still be processed" />
            <SameItem text="Same eligibility criteria apply" />
            <SameItem text="You can change your mind and provide consent later" />
            <SameItem text="Your personal data remains protected" />
          </div>
        </div>

        {/* Alternate Path Available */}
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <ChevronRight size={20} className="text-green-600" />
            Alternate Path Available
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            You can proceed with manual verification. We'll guide you through uploading required documents 
            and scheduling verification if needed.
          </p>
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={understandDecline}
              onChange={(e) => onUnderstandChange(e.target.checked)}
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
            />
            <span className="text-sm text-foreground">
              I understand that manual verification will take longer and require more effort on my part
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onReconsider}
            className="flex-1 px-6 py-4 border-2 border-primary bg-card text-primary font-bold rounded text-sm hover:bg-blue-50"
          >
            Reconsider and Provide Consent
          </button>
          <button
            onClick={onAlternatePath}
            disabled={!understandDecline}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-all ${
              understandDecline
                ? 'bg-primary text-white hover:opacity-90'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Proceed with Manual Verification
          </button>
        </div>

      </div>
    </>
  );
}

function ChangeItem({ type, text }: { type: "slower" | "faster"; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <AlertCircle size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function SameItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== ALTERNATE PATH SCREEN ====================

function AlternatePathScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-12">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <FileText size={48} className="text-blue-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3 text-center">Manual Verification Process</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed text-center">
          Since you declined data sharing, we'll proceed with manual verification. 
          Follow these steps to complete your application.
        </p>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          <AlternateStep
            number={1}
            title="Gather Required Documents"
            description="Collect all documents: ID proof, income certificate, address proof, education certificates"
            timeEstimate="15 minutes"
          />
          <AlternateStep
            number={2}
            title="Upload Documents"
            description="Scan or photograph documents clearly and upload them in PDF or JPG format"
            timeEstimate="20 minutes"
          />
          <AlternateStep
            number={3}
            title="Complete Application Form"
            description="Fill all fields manually as automatic population is not available"
            timeEstimate="30 minutes"
          />
          <AlternateStep
            number={4}
            title="Submit for Verification"
            description="Application will be manually reviewed by verification officers"
            timeEstimate="10-14 business days"
          />
          <AlternateStep
            number={5}
            title="In-Person Verification (if needed)"
            description="You may be called for physical document verification at local office"
            timeEstimate="Variable"
          />
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Important Notes
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>All documents must be clear and legible</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Original documents may be needed for physical verification</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>You can provide data sharing consent anytime to speed up future applications</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90">
            Start Manual Application Process
          </button>
          <button
            onClick={onBack}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

function AlternateStep({ 
  number, 
  title, 
  description, 
  timeEstimate 
}: { 
  number: number;
  title: string;
  description: string;
  timeEstimate: string;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-5">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock size={14} />
            <span>Est. time: {timeEstimate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== HELP SCREEN ====================

function HelpScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-orange-100 rounded flex items-center justify-center">
            <HelpCircle size={32} className="text-orange-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Data Sharing Help</h2>
            <p className="text-sm text-muted-foreground">Understanding data sharing for government services</p>
          </div>
        </div>

        <div className="space-y-6">
          <HelpItem
            question="Why do you need to share my data?"
            answer="Data sharing enables faster processing through automatic verification. Instead of manually checking each document, authorized departments can directly verify your information from official sources. This reduces processing time from weeks to days and eliminates paperwork."
          />
          <HelpItem
            question="Who exactly will see my data?"
            answer="Only authorized government departments and service providers listed in the consent form will have access. Access is limited to specific officials who need the information for verification purposes. All access is logged and monitored for audit purposes."
          />
          <HelpItem
            question="Is my data secure during sharing?"
            answer="Yes. All data is encrypted using 256-bit SSL during transfer. The sharing happens through secure government networks. Only the minimum necessary data is shared. Recipients are bound by government data protection regulations and can face penalties for misuse."
          />
          <HelpItem
            question="Can I decline data sharing?"
            answer="Yes, data sharing is completely voluntary. You can decline consent and still apply for the service. However, you will need to go through manual verification which takes longer and requires document uploads. You can provide consent later if you change your mind."
          />
          <HelpItem
            question="What happens if I withdraw consent later?"
            answer="You can withdraw consent anytime from your account settings. After withdrawal, no new data will be shared. However, data already shared for completed processes will be retained as per legal requirements. Future applications will require manual verification."
          />
          <HelpItem
            question="How long is my data retained?"
            answer="Data retention periods vary by department and are listed in the consent details. Typically, data is retained for 5-7 years for audit and compliance purposes. After the retention period, data is securely deleted unless there are ongoing legal requirements."
          />
          <HelpItem
            question="Can I see who accessed my data?"
            answer="Yes. You can view detailed sharing logs from your account dashboard. Logs show which department accessed what data, when, and for what purpose. You have the right to question any unauthorized access."
          />
          <HelpItem
            question="What if my data is misused?"
            answer="Report any suspected misuse to the Data Protection Officer immediately. All access is logged and can be investigated. Misuse of government data is a serious offense with legal consequences. You can also file a complaint with the relevant authority."
          />
        </div>

        <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-300 rounded-lg">
          <h3 className="font-bold text-foreground mb-3">Still Have Questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Contact our Data Protection Officer for personalized assistance with data sharing concerns.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-bold text-foreground">Email:</span>{' '}
              <a href="#" className="text-primary hover:underline">datasharing@service.gov.in</a>
            </div>
            <div>
              <span className="font-bold text-foreground">Helpline:</span>{' '}
              <a href="#" className="text-primary hover:underline">1800-XXX-XXXX</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-primary text-white font-bold rounded text-sm hover:opacity-90 inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Explanation
          </button>
        </div>
      </div>
    </div>
  );
}

function HelpItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-2 flex items-start gap-2">
        <HelpCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
        {question}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed pl-6">{answer}</p>
    </div>
  );
}

// ==================== DATA SUMMARY ====================

function DataSummary({ 
  dataCategories, 
  recipients 
}: { 
  dataCategories: DataCategory[];
  recipients: Recipient[];
}) {
  const totalDataPoints = dataCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const requiredCategories = dataCategories.filter(cat => cat.required).length;

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-primary text-white px-4 py-3">
        <h3 className="font-bold text-sm">Data Sharing Summary</h3>
      </div>
      <div className="p-4 space-y-4">
        <SummaryItem 
          label="Data Categories" 
          value={dataCategories.length.toString()} 
        />
        <SummaryItem 
          label="Total Data Points" 
          value={totalDataPoints.toString()} 
        />
        <SummaryItem 
          label="Required Categories" 
          value={requiredCategories.toString()}
          color="orange"
        />
        <SummaryItem 
          label="Recipients" 
          value={recipients.length.toString()} 
        />
      </div>
    </div>
  );
}

function SummaryItem({ label, value, color }: { label: string; value: string; color?: "orange" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`font-bold text-lg ${
        color === "orange" ? "text-orange-600" : "text-foreground"
      }`}>
        {value}
      </span>
    </div>
  );
}

// ==================== STATE EXPLAINER ====================

function StateExplainer({ currentState }: { currentState: FlowState }) {
  const explanations = {
    explanation: "Overview of data sharing benefits, purpose, and what happens with/without consent.",
    "consent-review": "Detailed review of what data, who receives it, why, and how it's protected.",
    "consent-accepted": "Confirmation of consent with next steps and data protection information.",
    "consent-declined": "Impact of declining with option to proceed via manual verification.",
    "alternate-path": "Step-by-step guide for manual verification process without data sharing.",
    help: "Comprehensive FAQ about data sharing, security, rights, and recourse."
  };

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">State Explanation</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {explanations[currentState]}
        </p>
      </div>
    </div>
  );
}

// ==================== KEY PRINCIPLES ====================

function KeyPrinciples() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">Key Principles</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <PrincipleItem text="Clear purpose explanation" />
        <PrincipleItem text="Detailed recipient disclosure" />
        <PrincipleItem text="Expandable sections for details" />
        <PrincipleItem text="Explicit separate consent" />
        <PrincipleItem text="Decline path available" />
        <PrincipleItem text="Alternate verification option" />
        <PrincipleItem text="Security transparency" />
        <PrincipleItem text="User rights highlighted" />
      </div>
    </div>
  );
}

function PrincipleItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}