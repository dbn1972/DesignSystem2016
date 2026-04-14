import { useState } from "react";
import { Link } from "react-router";
import { FileText, CheckCircle, AlertCircle, Info, ChevronRight, HelpCircle, ArrowLeft, Shield, ChevronDown, ChevronUp, Check, X, AlertTriangle, Scale, Users, Book, ExternalLink, Lock, Eye } from "lucide-react";

type FlowState = 
  | "summary" 
  | "expanded-detail"
  | "acceptance-missing"
  | "acceptance-complete"
  | "decline"
  | "help";

type TermsSection = {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  details: string[];
};

export default function TermsAcceptanceDemo() {
  const [flowState, setFlowState] = useState<FlowState>("summary");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [accepted, setAccepted] = useState(false);
  const [attemptedProceed, setAttemptedProceed] = useState(false);
  const [understandDecline, setUnderstandDecline] = useState(false);

  const termsSections: TermsSection[] = [
    {
      id: "eligibility",
      number: "1",
      title: "Eligibility and Registration",
      icon: <Users size={20} className="text-blue-600" />,
      summary: "You must be legally eligible to use this service and provide accurate information during registration.",
      details: [
        "You must be at least 18 years old or have guardian consent to use this service",
        "You must be a citizen or resident of India with valid documentation",
        "You must provide accurate, complete, and current information during registration",
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You must notify us immediately of any unauthorized access to your account",
        "One person may maintain only one account for this service",
        "We reserve the right to suspend or terminate accounts that violate these terms"
      ]
    },
    {
      id: "acceptable-use",
      number: "2",
      title: "Acceptable Use Policy",
      icon: <Shield size={20} className="text-green-600" />,
      summary: "You agree to use this service lawfully, ethically, and only for legitimate purposes as intended.",
      details: [
        "You will use this service only for lawful purposes and legitimate government service access",
        "You will not attempt to gain unauthorized access to any part of the system",
        "You will not introduce viruses, malware, or any harmful code",
        "You will not use automated systems (bots, scrapers) without authorization",
        "You will not submit false, fraudulent, or misleading information",
        "You will not impersonate another person or entity",
        "You will not interfere with or disrupt the service or servers",
        "Violation of this policy may result in criminal prosecution under Indian law"
      ]
    },
    {
      id: "service-availability",
      number: "3",
      title: "Service Availability and Changes",
      icon: <AlertCircle size={20} className="text-orange-600" />,
      summary: "We strive for continuous availability but cannot guarantee uninterrupted service. We may modify features with notice.",
      details: [
        "We aim for 99.5% uptime but cannot guarantee uninterrupted service availability",
        "Scheduled maintenance will be announced at least 48 hours in advance when possible",
        "We reserve the right to modify, suspend, or discontinue any feature with reasonable notice",
        "Emergency maintenance may occur without prior notice for security or stability",
        "We are not liable for service interruptions caused by circumstances beyond our control",
        "Major changes to service features will be communicated via email and website notices",
        "You are responsible for maintaining backups of any data you submit"
      ]
    },
    {
      id: "intellectual-property",
      number: "4",
      title: "Intellectual Property Rights",
      icon: <Scale size={20} className="text-purple-600" />,
      summary: "The platform and its content are owned by the Government of India. You retain rights to your submitted content.",
      details: [
        "All content, trademarks, and data on this platform are owned by Government of India",
        "You are granted a limited, non-exclusive license to access and use the service",
        "You may not reproduce, distribute, or create derivative works without permission",
        "You retain ownership of content you submit, but grant us license to process it",
        "We may use anonymized, aggregated data for analytics and service improvement",
        "National emblems and symbols are protected under the Emblems and Names Act, 1950",
        "Unauthorized use of government branding may result in legal action"
      ]
    },
    {
      id: "liability",
      number: "5",
      title: "Limitation of Liability",
      icon: <AlertTriangle size={20} className="text-red-600" />,
      summary: "Our liability is limited as permitted by law. You are responsible for consequences of information you provide.",
      details: [
        "We provide this service 'as is' without warranties of any kind",
        "We are not liable for decisions made based on information from this platform",
        "You are responsible for the accuracy and completeness of information you submit",
        "We are not liable for indirect, incidental, or consequential damages",
        "Our maximum liability is limited to the amount of fees paid, if applicable",
        "These limitations apply to the fullest extent permitted by Indian law",
        "Nothing in these terms excludes liability for fraud, willful misconduct, or death/injury"
      ]
    },
    {
      id: "governing-law",
      number: "6",
      title: "Governing Law and Jurisdiction",
      icon: <Book size={20} className="text-indigo-600" />,
      summary: "These terms are governed by Indian law. Disputes are subject to courts in New Delhi, India.",
      details: [
        "These terms are governed by the laws of India",
        "Any disputes shall be subject to the exclusive jurisdiction of courts in New Delhi",
        "In case of conflict, English version of these terms shall prevail",
        "You agree to submit to the personal jurisdiction of these courts",
        "Applicable laws include IT Act 2000, Indian Penal Code, and other relevant legislation",
        "Alternative dispute resolution may be available for certain matters",
        "Government of India reserves all sovereign immunity rights"
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
    setAccepted(false);
    setAttemptedProceed(false);
    setUnderstandDecline(false);
  };

  const handleProceed = () => {
    if (!accepted) {
      setAttemptedProceed(true);
      setFlowState("acceptance-missing");
    } else {
      setFlowState("acceptance-complete");
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
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <FileText size={32} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Interactive Pattern Demo</div>
                  <h1 className="text-3xl font-bold text-foreground">Terms Acceptance Flow</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Interactive demonstration of terms and conditions acceptance pattern. Shows how to present 
                legal terms clearly with summary-first approach, expandable details, and explicit acceptance 
                requirement with decline option.
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
              
              {flowState === "summary" && (
                <SummaryScreen 
                  termsSections={termsSections}
                  onViewDetails={() => setFlowState("expanded-detail")}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "expanded-detail" && (
                <ExpandedDetailScreen
                  termsSections={termsSections}
                  expandedSections={expandedSections}
                  onToggleSection={toggleSection}
                  accepted={accepted}
                  onAcceptChange={setAccepted}
                  onProceed={handleProceed}
                  onDecline={() => setFlowState("decline")}
                  onBack={() => setFlowState("summary")}
                  attemptedProceed={attemptedProceed}
                />
              )}

              {flowState === "acceptance-missing" && (
                <AcceptanceMissingScreen
                  onBack={() => {
                    setFlowState("expanded-detail");
                    setAttemptedProceed(false);
                  }}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "acceptance-complete" && (
                <AcceptanceCompleteScreen
                  onReset={resetDemo}
                />
              )}

              {flowState === "decline" && (
                <DeclineScreen
                  understandDecline={understandDecline}
                  onUnderstandChange={setUnderstandDecline}
                  onReconsider={() => setFlowState("expanded-detail")}
                />
              )}

              {flowState === "help" && (
                <HelpScreen onBack={() => setFlowState("summary")} />
              )}

            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <aside className="col-span-4 space-y-6">
            <QuickReference />
            <StateExplainer currentState={flowState} />
            <KeyDistinctions />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Terms Acceptance Interactive Demo</div>
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
    summary: { label: "Summary", color: "bg-muted text-muted-foreground" },
    "expanded-detail": { label: "Full Terms", color: "bg-blue-100 text-blue-700" },
    "acceptance-missing": { label: "Missing", color: "bg-red-100 text-red-700" },
    "acceptance-complete": { label: "Accepted", color: "bg-green-100 text-green-700" },
    decline: { label: "Declined", color: "bg-orange-100 text-orange-700" },
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
  termsSections,
  onViewDetails,
  onHelp
}: { 
  termsSections: TermsSection[];
  onViewDetails: () => void;
  onHelp: () => void;
}) {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1">
        <div className="bg-card px-8 py-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gray-700 rounded flex items-center justify-center flex-shrink-0">
              <FileText size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">Terms and Conditions</h2>
              <p className="text-sm text-muted-foreground">
                National Scholarship Portal • Version 3.0 • Effective from April 9, 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Introduction */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            About These Terms
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            These Terms and Conditions govern your access to and use of the National Scholarship Portal. 
            By using this service, you enter into a binding agreement with the Government of India.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Please read these terms carefully. If you do not agree, you will not be able to proceed with 
            registration or use this service.
          </p>
        </div>

        {/* Key Terms Summary */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Key Terms (Summary)</h3>
          <div className="space-y-4">
            {termsSections.map(section => (
              <div key={section.id} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center font-bold text-sm text-muted-foreground">
                  {section.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {section.icon}
                    <h4 className="font-bold text-foreground text-sm">{section.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{section.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Highlights */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={18} className="text-orange-600" />
              <h4 className="font-bold text-foreground text-sm">Your Responsibilities</h4>
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                <span>Provide accurate information</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                <span>Use service lawfully</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                <span>Maintain account security</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Shield size={18} className="text-green-600" />
              <h4 className="font-bold text-foreground text-sm">Our Commitments</h4>
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                <span>Strive for 99.5% uptime</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                <span>Protect your data</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
                <span>Provide advance notice of changes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Information */}
        <div className="bg-background border-2 border-border rounded-lg p-5">
          <h4 className="font-bold text-foreground mb-3 text-sm">Legal Information</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Governing Law:</span>
              <div className="font-bold text-foreground">Laws of India</div>
            </div>
            <div>
              <span className="text-muted-foreground">Jurisdiction:</span>
              <div className="font-bold text-foreground">New Delhi, India</div>
            </div>
            <div>
              <span className="text-muted-foreground">Version:</span>
              <div className="font-bold text-foreground">3.0</div>
            </div>
            <div>
              <span className="text-muted-foreground">Effective Date:</span>
              <div className="font-bold text-foreground">April 9, 2026</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onViewDetails}
            className="flex-1 px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            Read Full Terms and Conditions
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
          Acceptance of these terms is required to use this service
        </p>

      </div>
    </>
  );
}

// ==================== EXPANDED DETAIL SCREEN ====================

function ExpandedDetailScreen({
  termsSections,
  expandedSections,
  onToggleSection,
  accepted,
  onAcceptChange,
  onProceed,
  onDecline,
  onBack,
  attemptedProceed
}: {
  termsSections: TermsSection[];
  expandedSections: Set<string>;
  onToggleSection: (id: string) => void;
  accepted: boolean;
  onAcceptChange: (accept: boolean) => void;
  onProceed: () => void;
  onDecline: () => void;
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
        <h2 className="text-2xl font-bold text-foreground mb-2">Full Terms and Conditions</h2>
        <p className="text-sm text-muted-foreground">
          National Scholarship Portal • Version 3.0 • Effective from April 9, 2026
        </p>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Important Notice */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-bold text-orange-900 mb-1 text-sm">Legal Agreement</h4>
            <p className="text-sm text-orange-800">
              By accepting these terms, you enter into a legally binding agreement with the Government of India. 
              Please read all sections carefully before accepting.
            </p>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-3">
          {termsSections.map(section => (
            <ExpandableSection
              key={section.id}
              section={section}
              isExpanded={expandedSections.has(section.id)}
              onToggle={() => onToggleSection(section.id)}
            />
          ))}
        </div>

        {/* Additional Clauses */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Additional Provisions</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <AdditionalClause
              title="Severability"
              text="If any provision is found to be unenforceable, the remaining provisions will remain in effect."
            />
            <AdditionalClause
              title="Entire Agreement"
              text="These terms constitute the entire agreement between you and the Government of India regarding this service."
            />
            <AdditionalClause
              title="Waiver"
              text="Failure to enforce any provision does not constitute a waiver of that provision."
            />
            <AdditionalClause
              title="Updates to Terms"
              text="We may update these terms with 30 days notice for material changes. Continued use constitutes acceptance of updated terms."
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <HelpCircle size={20} className="text-primary" />
            Questions About Terms?
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-bold text-foreground">Legal Affairs Office:</span>
              <div className="text-muted-foreground">Email: legal@scholarship.gov.in</div>
              <div className="text-muted-foreground">Phone: 1800-XXX-XXXX (Mon-Fri, 9 AM - 6 PM)</div>
            </div>
          </div>
        </div>

        {/* Acceptance Section */}
        <div className={`border-2 rounded-lg p-6 ${
          attemptedProceed && !accepted ? 'border-red-300 bg-red-50' : 'border-border bg-background'
        }`}>
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => onAcceptChange(e.target.checked)}
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
            />
            <div className="flex-1">
              <span className="text-sm text-foreground font-bold block mb-2">
                I accept these Terms and Conditions
              </span>
              <span className="text-xs text-muted-foreground">
                By checking this box, I confirm that I have read, understood, and agree to be bound by these 
                Terms and Conditions. I understand this is a legally binding agreement with the Government of India.
              </span>
              {attemptedProceed && !accepted && (
                <p className="text-xs text-red-700 mt-2 font-bold">
                  ⚠ You must accept the terms to proceed with registration
                </p>
              )}
            </div>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onDecline}
            className="flex-1 px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            I Do Not Accept
          </button>
          <button
            onClick={onProceed}
            disabled={!accepted}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-all ${
              accepted
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
  section, 
  isExpanded, 
  onToggle 
}: { 
  section: TermsSection;
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
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center font-bold text-sm text-muted-foreground flex-shrink-0">
            {section.number}
          </div>
          <div className="flex items-center gap-2">
            {section.icon}
            <span className="font-bold text-foreground">{section.title}</span>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp size={20} className="text-muted-foreground" />
        ) : (
          <ChevronDown size={20} className="text-muted-foreground" />
        )}
      </button>
      {isExpanded && (
        <div className="px-6 pb-6 border-t-2 border-border pt-6">
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-bold">{section.summary}</p>
          <div className="space-y-2">
            {section.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function AdditionalClause({ title, text }: { title: string; text: string }) {
  return (
    <div className="pb-3 border-b border-border last:border-0 last:pb-0">
      <span className="font-bold text-foreground block mb-1">{title}:</span>
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== ACCEPTANCE MISSING SCREEN ====================

function AcceptanceMissingScreen({
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
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Terms Acceptance Required</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          You must accept the Terms and Conditions before you can proceed with registration and use this service. 
          This is a legal requirement for accessing government services.
        </p>

        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle size={20} className="text-red-600" />
            Why Acceptance is Required
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <RequirementItem text="Legal framework: Establishes binding agreement between you and government" />
            <RequirementItem text="Rights and responsibilities: Defines what you can expect and what is expected of you" />
            <RequirementItem text="Dispute resolution: Provides framework for resolving issues" />
            <RequirementItem text="Service protection: Ensures proper use and prevents misuse" />
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            What Acceptance Means
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span>You agree to use the service according to specified conditions</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span>You accept the rights and limitations outlined in the terms</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span>You acknowledge understanding of service availability and liability limitations</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span>You consent to jurisdiction of Indian courts for dispute resolution</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onBack}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            Go Back and Accept Terms
          </button>
          <button
            onClick={onHelp}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Learn More About Terms
          </button>
        </div>
      </div>
    </div>
  );
}

function RequirementItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== ACCEPTANCE COMPLETE SCREEN ====================

function AcceptanceCompleteScreen({ onReset }: { onReset: () => void }) {
  return (
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Terms Accepted</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Thank you for accepting the Terms and Conditions. Your acceptance has been recorded and you can 
          now proceed with registration for the National Scholarship Portal.
        </p>

        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle size={20} className="text-green-600" />
            What This Means
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <CompletionItem text="You have entered into a binding agreement with Government of India" />
            <CompletionItem text="You are bound by the rights and responsibilities outlined in the terms" />
            <CompletionItem text="You can proceed with account creation and service access" />
            <CompletionItem text="You can access the full terms anytime from your account settings" />
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Important Reminders
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Use the service lawfully and provide accurate information</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Maintain confidentiality of your account credentials</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Report any unauthorized access immediately</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>You will be notified of material changes to the terms</span>
            </div>
          </div>
        </div>

        <div className="bg-background border-2 border-border rounded-lg p-5 mb-8">
          <h4 className="font-bold text-foreground mb-3 text-sm">Acceptance Record</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Terms Version:</span>
              <div className="font-bold text-foreground">3.0</div>
            </div>
            <div>
              <span className="text-muted-foreground">Acceptance Date:</span>
              <div className="font-bold text-foreground">April 9, 2026</div>
            </div>
            <div className="col-span-2">
              <span className="text-muted-foreground">Reference ID:</span>
              <div className="font-bold text-foreground font-mono">TC-{Date.now()}-{Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90">
            Proceed to Registration
          </button>
          <button className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background">
            Download Terms Acceptance Record
          </button>
          <button
            onClick={onReset}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Reset Demo
          </button>
        </div>
      </div>
    </div>
  );
}

function CompletionItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== DECLINE SCREEN ====================

function DeclineScreen({
  understandDecline,
  onUnderstandChange,
  onReconsider
}: {
  understandDecline: boolean;
  onUnderstandChange: (understand: boolean) => void;
  onReconsider: () => void;
}) {
  return (
    <div className="p-12">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <X size={48} className="text-orange-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3 text-center">Terms Not Accepted</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed text-center">
          You have chosen not to accept the Terms and Conditions. Unfortunately, you cannot proceed with 
          registration or use this service without accepting the terms.
        </p>

        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
            <AlertTriangle size={20} className="text-orange-600" />
            Consequences of Not Accepting
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <ConsequenceItem text="You cannot create an account on the National Scholarship Portal" />
            <ConsequenceItem text="You will not be able to apply for scholarships through this service" />
            <ConsequenceItem text="You cannot access any features or services of this platform" />
            <ConsequenceItem text="Any partially completed registration will not be saved" />
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Alternative Options
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>
                <span className="font-bold">Reconsider:</span> Go back and review the terms again
              </span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>
                <span className="font-bold">Contact Support:</span> Reach out if you have concerns about specific terms
              </span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>
                <span className="font-bold">Alternative Application:</span> Check if offline/paper application is available
              </span>
            </div>
          </div>
        </div>

        <div className="bg-background border-2 border-border rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={understandDecline}
              onChange={(e) => onUnderstandChange(e.target.checked)}
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
            />
            <span className="text-sm text-foreground">
              I understand that I cannot use this service without accepting the Terms and Conditions
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onReconsider}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            Review Terms Again
          </button>
          <Link
            to="/patterns/consent"
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background block text-center"
          >
            Exit to Pattern Library
          </Link>
        </div>
      </div>
    </div>
  );
}

function ConsequenceItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <X size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== HELP SCREEN ====================

function HelpScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-12">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <HelpCircle size={48} className="text-blue-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3 text-center">Help with Terms and Conditions</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed text-center">
          If you have any questions or need clarification about the Terms and Conditions, please refer to the 
          following resources or contact our support team.
        </p>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Understanding the Terms
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <HelpItem text="Read the summary and full terms carefully" />
            <HelpItem text="Expand sections to see detailed information" />
            <HelpItem text="Check the additional provisions for important clauses" />
            <HelpItem text="Contact the legal office for specific questions" />
          </div>
        </div>

        <div className="bg-background border-2 border-border rounded-lg p-5 mb-8">
          <h4 className="font-bold text-foreground mb-3 text-sm">Contact Information</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Legal Affairs Office:</span>
              <div className="text-muted-foreground">Email: legal@scholarship.gov.in</div>
              <div className="text-muted-foreground">Phone: 1800-XXX-XXXX (Mon-Fri, 9 AM - 6 PM)</div>
            </div>
            <div>
              <span className="text-muted-foreground">Support Team:</span>
              <div className="text-muted-foreground">Email: support@scholarship.gov.in</div>
              <div className="text-muted-foreground">Phone: 1800-XXX-XXXX (Mon-Fri, 9 AM - 6 PM)</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onBack}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            Go Back to Terms
          </button>
        </div>
      </div>
    </div>
  );
}

function HelpItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== QUICK REFERENCE ====================

function QuickReference() {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-4">Quick Reference</h3>
      <div className="space-y-3 text-sm text-muted-foreground">
        <div className="flex items-start gap-2">
          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <span>Read the summary and full terms carefully</span>
        </div>
        <div className="flex items-start gap-2">
          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <span>Expand sections to see detailed information</span>
        </div>
        <div className="flex items-start gap-2">
          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <span>Check the additional provisions for important clauses</span>
        </div>
        <div className="flex items-start gap-2">
          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <span>Contact the legal office for specific questions</span>
        </div>
      </div>
    </div>
  );
}

// ==================== STATE EXPLAINER ====================

function StateExplainer({ currentState }: { currentState: FlowState }) {
  const stateConfig = {
    summary: { label: "Summary", description: "You are viewing the key terms and a summary of the Terms and Conditions." },
    "expanded-detail": { label: "Full Terms", description: "You are viewing the full Terms and Conditions with expandable sections for detailed information." },
    "acceptance-missing": { label: "Missing", description: "You have not accepted the Terms and Conditions. Acceptance is required to proceed with registration." },
    "acceptance-complete": { label: "Accepted", description: "You have successfully accepted the Terms and Conditions. You can now proceed with registration." },
    decline: { label: "Declined", description: "You have declined the Terms and Conditions. You cannot proceed with registration without accepting the terms." },
    help: { label: "Help", description: "You are viewing help resources and contact information for the Terms and Conditions." }
  };

  const config = stateConfig[currentState];

  return (
    <div className="bg-background border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-4">Current State Explanation</h3>
      <div className="space-y-3 text-sm text-muted-foreground">
        <div className="flex items-start gap-2">
          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <span>State: {config.label}</span>
        </div>
        <div className="flex items-start gap-2">
          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <span>Description: {config.description}</span>
        </div>
      </div>
    </div>
  );
}

// ==================== KEY DISTINCTIONS ====================

function KeyDistinctions() {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-4">Key Distinctions</h3>
      <div className="space-y-3 text-sm text-muted-foreground">
        <div className="flex items-start gap-2">
          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <span>Summary vs Full Terms: The summary provides a brief overview, while the full terms include detailed information.</span>
        </div>
        <div className="flex items-start gap-2">
          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <span>Acceptance: You must accept the terms to proceed with registration.</span>
        </div>
        <div className="flex items-start gap-2">
          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <span>Decline: If you decline, you cannot proceed with registration.</span>
        </div>
        <div className="flex items-start gap-2">
          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <span>Help: Provides resources and contact information for the terms.</span>
        </div>
      </div>
    </div>
  );
}