import { useState } from "react";
import { Link } from "react-router";
import { Shield, CheckCircle, AlertCircle, Info, ChevronRight, HelpCircle, FileText, ArrowLeft, Eye, Lock, Database, Users, Clock, ChevronDown, ChevronUp, Check, X, AlertTriangle, ExternalLink } from "lucide-react";

type FlowState = 
  | "summary" 
  | "full-notice"
  | "acknowledgment-missing"
  | "acknowledgment-complete"
  | "help";

type PrivacySection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  details: string[];
};

export default function PrivacyNoticeDemo() {
  const [flowState, setFlowState] = useState<FlowState>("summary");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [acknowledged, setAcknowledged] = useState(false);
  const [attemptedProceed, setAttemptedProceed] = useState(false);

  const privacySections: PrivacySection[] = [
    {
      id: "collection",
      title: "What Information We Collect",
      icon: <Database size={20} className="text-blue-600" />,
      summary: "We collect personal information you provide during registration and service usage, including identity, contact, and application-specific details.",
      details: [
        "Personal identifiers: Name, date of birth, gender, photographs",
        "Contact information: Mobile number, email address, postal address",
        "Identity documents: Aadhaar number, PAN, passport, driving license",
        "Demographic data: Age, nationality, language preference",
        "Service-specific data: Application forms, supporting documents",
        "Technical data: IP address, browser type, device information, login timestamps",
        "Communication records: Support queries, feedback, complaints"
      ]
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: <Eye size={20} className="text-purple-600" />,
      summary: "Your information is used to provide government services, verify your identity, process applications, communicate updates, and improve service delivery.",
      details: [
        "Identity verification and authentication for secure access",
        "Processing applications and delivering government services",
        "Communication about service status, updates, and notifications",
        "Fraud prevention and security monitoring",
        "Statistical analysis and service improvement (anonymized)",
        "Legal compliance and regulatory requirements",
        "Responding to your queries and providing support"
      ]
    },
    {
      id: "sharing",
      title: "When We Share Your Information",
      icon: <Users size={20} className="text-orange-600" />,
      summary: "We share your information only with authorized government departments, service providers under contract, and when legally required.",
      details: [
        "With other government departments for service delivery and verification",
        "With authorized service providers bound by confidentiality agreements",
        "When required by law, court order, or legal process",
        "With your explicit consent for specific purposes",
        "For fraud investigation and prevention with law enforcement",
        "We never sell your personal information to third parties",
        "Sharing is logged and can be audited for accountability"
      ]
    },
    {
      id: "security",
      title: "How We Protect Your Information",
      icon: <Lock size={20} className="text-green-600" />,
      summary: "We use industry-standard security measures including encryption, access controls, regular audits, and staff training to protect your data.",
      details: [
        "256-bit SSL encryption for data transmission",
        "Encrypted storage of sensitive personal information",
        "Multi-factor authentication for system access",
        "Role-based access controls limiting data visibility",
        "Regular security audits and vulnerability assessments",
        "Staff training on data protection and confidentiality",
        "Incident response procedures for security breaches",
        "Physical security measures at data centers"
      ]
    },
    {
      id: "retention",
      title: "How Long We Keep Your Information",
      icon: <Clock size={20} className="text-teal-600" />,
      summary: "We retain your information as long as necessary for service delivery and legal compliance, typically 5-7 years, after which it is securely deleted.",
      details: [
        "Active service period: For the duration of service usage",
        "Legal retention: 5-7 years after service completion (as per regulations)",
        "Tax and audit records: As per Income Tax Act requirements",
        "Legal disputes: Until resolution of any ongoing cases",
        "Anonymized analytics: May be retained indefinitely for statistics",
        "Deletion process: Secure and irreversible deletion after retention period",
        "Early deletion: Available on request in certain circumstances"
      ]
    },
    {
      id: "rights",
      title: "Your Rights and Choices",
      icon: <Shield size={20} className="text-indigo-600" />,
      summary: "You have rights to access, correct, delete (in certain cases), and control how your information is used. You can also lodge complaints.",
      details: [
        "Right to access: Request a copy of your personal information",
        "Right to correction: Request correction of inaccurate data",
        "Right to data portability: Export your data in standard format",
        "Right to withdraw consent: For optional processing activities",
        "Right to lodge complaint: With Data Protection Officer or authority",
        "Right to information: About how your data is being processed",
        "Limitations: Some rights may be restricted by legal requirements"
      ]
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
    setFlowState("summary");
    setExpandedSections(new Set());
    setAcknowledged(false);
    setAttemptedProceed(false);
  };

  const handleProceed = () => {
    if (!acknowledged) {
      setAttemptedProceed(true);
      setFlowState("acknowledgment-missing");
    } else {
      setFlowState("acknowledgment-complete");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-indigo-100 border-2 border-indigo-300 rounded flex items-center justify-center">
                  <Shield size={32} className="text-indigo-700" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Interactive Pattern Demo</div>
                  <h1 className="text-3xl font-bold text-foreground">Privacy Notice Acknowledgment Flow</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Interactive demonstration of privacy notice acknowledgment pattern. Shows how to present privacy 
                information clearly, distinguish acknowledgment from consent, and ensure users understand data 
                practices before proceeding.
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Interactive Flow - 8 columns */}
          <div className="col-span-8">
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              
              {flowState === "summary" && (
                <SummaryScreen 
                  privacySections={privacySections}
                  onViewFull={() => setFlowState("full-notice")}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "full-notice" && (
                <FullNoticeScreen
                  privacySections={privacySections}
                  expandedSections={expandedSections}
                  onToggleSection={toggleSection}
                  acknowledged={acknowledged}
                  onAcknowledgeChange={setAcknowledged}
                  onProceed={handleProceed}
                  onBack={() => setFlowState("summary")}
                  attemptedProceed={attemptedProceed}
                />
              )}

              {flowState === "acknowledgment-missing" && (
                <AcknowledgmentMissingScreen
                  onBack={() => {
                    setFlowState("full-notice");
                    setAttemptedProceed(false);
                  }}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "acknowledgment-complete" && (
                <AcknowledgmentCompleteScreen
                  onReset={resetDemo}
                />
              )}

              {flowState === "help" && (
                <HelpScreen onBack={() => setFlowState("summary")} />
              )}

            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <div className="col-span-4 space-y-6">
            <QuickInfo />
            <StateExplainer currentState={flowState} />
            <KeyDifference />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Privacy Notice Acknowledgment Interactive Demo</div>
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
    summary: { label: "Summary", color: "bg-blue-100 text-blue-700" },
    "full-notice": { label: "Full Notice", color: "bg-purple-100 text-purple-700" },
    "acknowledgment-missing": { label: "Missing", color: "bg-red-100 text-red-700" },
    "acknowledgment-complete": { label: "Complete", color: "bg-green-100 text-green-700" },
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

// ==================== SUMMARY SCREEN ====================

function SummaryScreen({ 
  privacySections,
  onViewFull,
  onHelp
}: { 
  privacySections: PrivacySection[];
  onViewFull: () => void;
  onHelp: () => void;
}) {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1">
        <div className="bg-card px-8 py-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-indigo-700 rounded flex items-center justify-center flex-shrink-0">
              <Shield size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">Privacy Notice</h2>
              <p className="text-sm text-muted-foreground">
                National Scholarship Portal • Last updated: April 9, 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Introduction */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            About This Privacy Notice
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This privacy notice explains how the National Scholarship Portal collects, uses, shares, 
            and protects your personal information. We are committed to protecting your privacy and 
            complying with applicable data protection laws.
          </p>
        </div>

        {/* Key Points Summary */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Key Points (Summary)</h3>
          <div className="space-y-4">
            {privacySections.map(section => (
              <div key={section.id} className="flex items-start gap-3">
                {section.icon}
                <div className="flex-1">
                  <h4 className="font-bold text-foreground text-sm mb-1">{section.title}</h4>
                  <p className="text-sm text-muted-foreground">{section.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle size={18} className="text-green-600" />
              <h4 className="font-bold text-foreground text-sm">Your Control</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              You have rights to access, correct, and control your information. See full notice for details.
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Lock size={18} className="text-orange-600" />
              <h4 className="font-bold text-foreground text-sm">Your Security</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              We use encryption, access controls, and regular audits to protect your data.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-background border-2 border-border rounded-lg p-5">
          <h4 className="font-bold text-foreground mb-3 text-sm">Questions or Concerns?</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Data Protection Officer:</span>
              <div className="font-bold text-foreground">dpo@scholarship.gov.in</div>
            </div>
            <div>
              <span className="text-muted-foreground">Privacy Helpline:</span>
              <div className="font-bold text-foreground">1800-XXX-XXXX</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onViewFull}
            className="flex-1 px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            Read Full Privacy Notice
          </button>
          <button
            onClick={onHelp}
            className="px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background transition-colors flex items-center gap-2"
          >
            <HelpCircle size={18} />
            Help
          </button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          By proceeding, you acknowledge that you have read and understood this privacy notice
        </p>

      </div>
    </>
  );
}

// ==================== FULL NOTICE SCREEN ====================

function FullNoticeScreen({
  privacySections,
  expandedSections,
  onToggleSection,
  acknowledged,
  onAcknowledgeChange,
  onProceed,
  onBack,
  attemptedProceed
}: {
  privacySections: PrivacySection[];
  expandedSections: Set<string>;
  onToggleSection: (id: string) => void;
  acknowledged: boolean;
  onAcknowledgeChange: (ack: boolean) => void;
  onProceed: () => void;
  onBack: () => void;
  attemptedProceed: boolean;
}) {
  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back to Summary
        </button>
        <h2 className="text-2xl font-bold text-foreground mb-2">Full Privacy Notice</h2>
        <p className="text-sm text-muted-foreground">
          National Scholarship Portal • Effective from April 9, 2026
        </p>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Important Distinction */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 flex items-start gap-3">
          <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-1 text-sm">This is a Privacy Notice, Not a Consent Form</h4>
            <p className="text-sm text-muted-foreground">
              This notice informs you about our data practices. Acknowledging this notice means you have 
              read it, not that you consent to optional processing. Separate consent will be requested 
              when needed.
            </p>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-3">
          {privacySections.map(section => (
            <ExpandableSection
              key={section.id}
              section={section}
              isExpanded={expandedSections.has(section.id)}
              onToggle={() => onToggleSection(section.id)}
            />
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Additional Information</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <InfoItem
              label="Governing Authority"
              text="Ministry of Electronics & Information Technology, Government of India"
            />
            <InfoItem
              label="Applicable Laws"
              text="Information Technology Act, 2000 and applicable data protection regulations"
            />
            <InfoItem
              label="Updates to This Notice"
              text="We may update this notice to reflect changes in our practices or legal requirements. Major changes will be notified via email."
            />
            <InfoItem
              label="Notice Version"
              text="Version 2.1 • Last Updated: April 9, 2026"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <HelpCircle size={20} className="text-green-600" />
            Contact Us About Privacy
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-bold text-foreground">Data Protection Officer:</span>
              <div className="text-muted-foreground">Mr. Rajesh Kumar</div>
              <div className="text-muted-foreground">Email: dpo@scholarship.gov.in</div>
              <div className="text-muted-foreground">Phone: 1800-XXX-XXXX (Mon-Fri, 9 AM - 6 PM)</div>
            </div>
            <div>
              <span className="font-bold text-foreground">Privacy Complaints:</span>
              <div className="text-muted-foreground">You can lodge complaints with the Data Protection Officer or relevant regulatory authority</div>
            </div>
          </div>
        </div>

        {/* Acknowledgment Section */}
        <div className={`border-2 rounded-lg p-6 ${
          attemptedProceed && !acknowledged ? 'border-red-300 bg-red-50' : 'border-border bg-background'
        }`}>
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={acknowledged}
              onChange={(e) => onAcknowledgeChange(e.target.checked)}
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
            />
            <div className="flex-1">
              <span className="text-sm text-foreground font-bold block mb-2">
                I acknowledge that I have read and understood this privacy notice
              </span>
              <span className="text-xs text-muted-foreground">
                This acknowledgment confirms that you have reviewed how we collect, use, and protect your 
                personal information. This is not a consent for data processing.
              </span>
              {attemptedProceed && !acknowledged && (
                <p className="text-xs text-red-700 mt-2 font-bold">
                  ⚠ You must acknowledge the privacy notice to proceed
                </p>
              )}
            </div>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onBack}
            className="px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Back
          </button>
          <button
            onClick={onProceed}
            disabled={!acknowledged}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-all ${
              acknowledged
                ? 'bg-primary text-white hover:opacity-90'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Acknowledge and Continue
          </button>
        </div>

      </div>
    </>
  );
}

function ExpandableSection({ 
  section, 
  isExpanded, 
  onToggle 
}: { 
  section: PrivacySection;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-background transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          {section.icon}
          <span className="font-bold text-foreground">{section.title}</span>
        </div>
        {isExpanded ? (
          <ChevronUp size={20} className="text-muted-foreground" />
        ) : (
          <ChevronDown size={20} className="text-muted-foreground" />
        )}
      </button>
      {isExpanded && (
        <div className="px-6 pb-6 border-t-2 border-border pt-6">
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{section.summary}</p>
          <div className="space-y-2">
            {section.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <ChevronRight size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoItem({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <span className="font-bold text-foreground text-sm block mb-1">{label}</span>
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== ACKNOWLEDGMENT MISSING SCREEN ====================

function AcknowledgmentMissingScreen({
  onBack,
  onHelp
}: {
  onBack: () => void;
  onHelp: () => void;
}) {
  return (
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <AlertTriangle size={48} className="text-red-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Acknowledgment Required</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          You must acknowledge that you have read the privacy notice before proceeding with the application. 
          This is required to ensure you understand how your personal information will be handled.
        </p>

        <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle size={20} className="text-red-600" />
            Why Acknowledgment is Required
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <ReasonItem text="Legal compliance: We must inform you about data practices" />
            <ReasonItem text="Transparency: You should know how your information is used" />
            <ReasonItem text="Your rights: Understanding your rights to access and control data" />
            <ReasonItem text="Trust: Building confidence in government data handling" />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Important: Acknowledgment vs. Consent
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold text-foreground">Acknowledgment:</span> You confirm that you 
                have read and understood the privacy notice. This does not give permission for optional 
                data processing.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold text-foreground">Consent:</span> You give explicit permission 
                for specific data processing activities. This will be requested separately when needed.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3 text-left">
            <Shield size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-bold text-orange-900 mb-1 text-sm">What You Need to Do</h4>
              <p className="text-xs text-orange-800">
                Read the privacy notice carefully to understand how your data will be collected, used, 
                shared, and protected. Then check the acknowledgment box to confirm you have reviewed it.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onBack}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            Go Back and Acknowledge Privacy Notice
          </button>
          <button
            onClick={onHelp}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Learn More About Privacy Notice
          </button>
        </div>
      </div>
    </div>
  );
}

function ReasonItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== ACKNOWLEDGMENT COMPLETE SCREEN ====================

function AcknowledgmentCompleteScreen({ onReset }: { onReset: () => void }) {
  return (
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Acknowledgment Recorded</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Thank you for acknowledging the privacy notice. Your acknowledgment has been recorded and 
          you can now proceed with your scholarship application.
        </p>

        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle size={20} className="text-green-600" />
            What This Means
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <MeaningItem text="You have confirmed reading the privacy notice" />
            <MeaningItem text="You understand how your data will be handled" />
            <MeaningItem text="You are aware of your rights regarding your data" />
            <MeaningItem text="You can access the privacy notice anytime from your account" />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Your Privacy Rights
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Access your privacy notice anytime from Settings &gt; Privacy</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Request a copy of your personal data from your account dashboard</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Contact Data Protection Officer for privacy-related queries</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Review sharing logs to see who accessed your data</span>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3 text-left">
            <Lock size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-bold text-orange-900 mb-1 text-sm">Reminder: Separate Consent</h4>
              <p className="text-xs text-orange-800">
                Acknowledging the privacy notice is not the same as providing consent. When we need 
                your consent for optional data processing (like sharing with third parties), we will 
                request it separately with clear explanation.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90">
            Proceed to Application
          </button>
          <button className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background">
            View Full Privacy Notice Again
          </button>
          <button
            onClick={onReset}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Reset Demo
          </button>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Acknowledgment ID: PN-{Date.now()}-{Math.random().toString(36).substr(2, 9).toUpperCase()}
        </p>
      </div>
    </div>
  );
}

function MeaningItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
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
            <h2 className="text-2xl font-bold text-foreground">Privacy Notice Help</h2>
            <p className="text-sm text-muted-foreground">Understanding privacy notices and acknowledgment</p>
          </div>
        </div>

        <div className="space-y-6">
          <HelpItem
            question="What is a privacy notice?"
            answer="A privacy notice (also called privacy policy) is a document that explains how an organization collects, uses, shares, and protects your personal information. It informs you about your data rights and how to exercise them. It's required by law for government services that process personal data."
          />
          <HelpItem
            question="Why do I need to acknowledge it?"
            answer="Acknowledgment confirms that you have been informed about data practices before proceeding. This is a legal requirement to ensure transparency and fair processing. It protects both you and the service provider by creating a record that information was provided and reviewed."
          />
          <HelpItem
            question="Is acknowledgment the same as consent?"
            answer="No. Acknowledgment means you have read and understood the notice. Consent means you give permission for specific processing activities. You can acknowledge a privacy notice without consenting to optional processing. Separate consent will be requested when needed for activities like marketing or third-party sharing."
          />
          <HelpItem
            question="Can I use the service without acknowledging?"
            answer="No. Acknowledgment is required before you can proceed with the application. This ensures you are informed about how your data will be handled. However, you can take time to read the notice carefully before acknowledging."
          />
          <HelpItem
            question="What if I don't understand the privacy notice?"
            answer="Contact the Data Protection Officer at dpo@scholarship.gov.in or call the privacy helpline at 1800-XXX-XXXX. They can explain the privacy practices in simple terms. You can also request a meeting or consultation for detailed clarification."
          />
          <HelpItem
            question="What are my privacy rights?"
            answer="You have the right to: (1) Access your personal data, (2) Correct inaccurate information, (3) Request data portability, (4) Withdraw consent for optional processing, (5) Lodge complaints with authorities, (6) Object to certain processing. These rights are explained in detail in the privacy notice."
          />
          <HelpItem
            question="How do I access the privacy notice later?"
            answer="Once logged in, you can access the privacy notice anytime from Settings > Privacy or by clicking the Privacy link in the footer. You can also download a PDF copy for your records."
          />
          <HelpItem
            question="What if the privacy notice changes?"
            answer="We will notify you via email if there are material changes to the privacy notice. Minor updates (like contact information) may not trigger notification but will always show the 'last updated' date. You can review the notice anytime to see current practices."
          />
          <HelpItem
            question="Can I revoke my acknowledgment?"
            answer="Acknowledgment is an informational step, not permission for processing. You cannot revoke being informed, but you can withdraw consent for optional activities. If you object to mandatory processing, you may not be able to use the service, but you can contact the DPO to discuss alternatives."
          />
          <HelpItem
            question="Is my acknowledgment recorded?"
            answer="Yes. The system records when you acknowledged the privacy notice, which version you reviewed, and your IP address. This creates an audit trail showing you were properly informed. This record is kept for legal compliance and accountability."
          />
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg">
          <h3 className="font-bold text-foreground mb-3">Still Have Questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Contact our Data Protection Officer for personalized assistance with privacy-related questions.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-bold text-foreground">Email:</span>{' '}
              <a href="#" className="text-primary hover:underline">dpo@scholarship.gov.in</a>
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
            Back to Privacy Summary
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

// ==================== QUICK INFO ====================

function QuickInfo() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-primary text-white px-4 py-3">
        <h3 className="font-bold text-sm">Privacy Notice Info</h3>
      </div>
      <div className="p-4 space-y-4">
        <QuickInfoItem 
          label="Notice Type" 
          value="Informational" 
        />
        <QuickInfoItem 
          label="Acknowledgment" 
          value="Required" 
          color="orange"
        />
        <QuickInfoItem 
          label="Version" 
          value="2.1" 
        />
        <QuickInfoItem 
          label="Last Updated" 
          value="Apr 9, 2026" 
        />
      </div>
    </div>
  );
}

function QuickInfoItem({ label, value, color }: { label: string; value: string; color?: "orange" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`font-bold text-sm ${
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
    summary: "Brief overview of privacy practices with key points from each section.",
    "full-notice": "Complete privacy notice with expandable sections for detailed information.",
    "acknowledgment-missing": "Blocked state when user attempts to proceed without acknowledging.",
    "acknowledgment-complete": "Confirmation that acknowledgment was recorded with next steps.",
    help: "Comprehensive FAQ explaining privacy notices, acknowledgment, and user rights."
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

// ==================== KEY DIFFERENCE ====================

function KeyDifference() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">Key Distinction</h3>
      </div>
      <div className="p-4 space-y-4">
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded p-3">
          <div className="font-bold text-blue-900 text-xs mb-1">ACKNOWLEDGMENT</div>
          <div className="text-xs text-blue-800">
            "I have read and understood the privacy notice"
          </div>
        </div>
        <div className="text-xs text-center text-muted-foreground font-bold">≠ NOT THE SAME AS ≠</div>
        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-3">
          <div className="font-bold text-green-900 text-xs mb-1">CONSENT</div>
          <div className="text-xs text-green-800">
            "I give permission for specific data processing"
          </div>
        </div>
      </div>
    </div>
  );
}