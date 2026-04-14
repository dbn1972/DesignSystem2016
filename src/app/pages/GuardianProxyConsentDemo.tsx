import { useState } from "react";
import { Link } from "react-router";
import { Users, Shield, CheckCircle, AlertCircle, Info, XCircle, ChevronRight, HelpCircle, FileText, Upload, User, UserCheck, AlertTriangle, ArrowLeft, ArrowRight, Check, X } from "lucide-react";

type FlowState = 
  | "start" 
  | "relationship" 
  | "person-details" 
  | "authorization" 
  | "consent" 
  | "proof-upload"
  | "invalid" 
  | "success" 
  | "help";

type Relationship = 
  | "parent-minor"
  | "legal-guardian"
  | "caregiver-dependent"
  | "authorized-representative"
  | "nominee"
  | "";

export default function GuardianProxyConsentDemo() {
  const [flowState, setFlowState] = useState<FlowState>("start");
  const [relationship, setRelationship] = useState<Relationship>("");
  const [representedPersonName, setRepresentedPersonName] = useState("");
  const [authorizationChecked, setAuthorizationChecked] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [proofUploaded, setProofUploaded] = useState(false);
  const [attemptedProceed, setAttemptedProceed] = useState(false);

  const resetDemo = () => {
    setFlowState("start");
    setRelationship("");
    setRepresentedPersonName("");
    setAuthorizationChecked(false);
    setConsentChecked(false);
    setProofUploaded(false);
    setAttemptedProceed(false);
  };

  const handleRelationshipSelect = (rel: Relationship) => {
    setRelationship(rel);
    setFlowState("person-details");
  };

  const handlePersonDetailsSubmit = () => {
    if (!representedPersonName.trim()) {
      setAttemptedProceed(true);
      return;
    }
    setAttemptedProceed(false);
    setFlowState("authorization");
  };

  const handleAuthorizationSubmit = () => {
    if (!authorizationChecked) {
      setAttemptedProceed(true);
      setFlowState("invalid");
      return;
    }
    setAttemptedProceed(false);
    setFlowState("consent");
  };

  const handleConsentSubmit = () => {
    if (!consentChecked) {
      setAttemptedProceed(true);
      return;
    }
    setAttemptedProceed(false);
    
    // Check if proof is required for this relationship
    const requiresProof = relationship === "legal-guardian" || relationship === "authorized-representative";
    if (requiresProof) {
      setFlowState("proof-upload");
    } else {
      setFlowState("success");
    }
  };

  const handleProofSubmit = () => {
    if (!proofUploaded) {
      setAttemptedProceed(true);
      return;
    }
    setAttemptedProceed(false);
    setFlowState("success");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-purple-100 border-2 border-purple-300 rounded flex items-center justify-center">
                  <Users size={32} className="text-purple-700" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Interactive Pattern Demo</div>
                  <h1 className="text-3xl font-bold text-foreground">Guardian or Proxy Consent Flow</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Interactive demonstration of guardian/proxy consent pattern for cases where a parent, guardian, 
                caregiver, or authorized representative is acting on behalf of another person. Shows relationship 
                verification, authorization, and consent capture.
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
              
              {flowState === "start" && (
                <StartScreen onProceed={() => setFlowState("relationship")} />
              )}

              {flowState === "relationship" && (
                <RelationshipScreen 
                  selectedRelationship={relationship}
                  onSelect={handleRelationshipSelect}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "person-details" && (
                <PersonDetailsScreen
                  relationship={relationship}
                  personName={representedPersonName}
                  onNameChange={setRepresentedPersonName}
                  onSubmit={handlePersonDetailsSubmit}
                  onBack={() => setFlowState("relationship")}
                  attemptedProceed={attemptedProceed}
                />
              )}

              {flowState === "authorization" && (
                <AuthorizationScreen
                  relationship={relationship}
                  personName={representedPersonName}
                  authorizationChecked={authorizationChecked}
                  onAuthorizationChange={setAuthorizationChecked}
                  onSubmit={handleAuthorizationSubmit}
                  onBack={() => setFlowState("person-details")}
                  attemptedProceed={attemptedProceed}
                />
              )}

              {flowState === "consent" && (
                <ConsentScreen
                  relationship={relationship}
                  personName={representedPersonName}
                  consentChecked={consentChecked}
                  onConsentChange={setConsentChecked}
                  onSubmit={handleConsentSubmit}
                  onBack={() => setFlowState("authorization")}
                  attemptedProceed={attemptedProceed}
                />
              )}

              {flowState === "proof-upload" && (
                <ProofUploadScreen
                  relationship={relationship}
                  proofUploaded={proofUploaded}
                  onProofUpload={setProofUploaded}
                  onSubmit={handleProofSubmit}
                  onBack={() => setFlowState("consent")}
                  attemptedProceed={attemptedProceed}
                />
              )}

              {flowState === "invalid" && (
                <InvalidScreen 
                  onRetry={() => {
                    setAuthorizationChecked(false);
                    setAttemptedProceed(false);
                    setFlowState("authorization");
                  }}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "success" && (
                <SuccessScreen 
                  relationship={relationship}
                  personName={representedPersonName}
                  onReset={resetDemo}
                />
              )}

              {flowState === "help" && (
                <HelpScreen onBack={() => setFlowState("start")} />
              )}

            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <aside className="col-span-4 space-y-6">
            <ProgressTracker 
              currentState={flowState}
              relationship={relationship}
            />
            <StateExplainer currentState={flowState} />
            <KeyFeatures />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Guardian/Proxy Consent Interactive Demo</div>
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
    start: { label: "Start", color: "bg-muted text-muted-foreground" },
    relationship: { label: "Relationship", color: "bg-blue-100 text-blue-700" },
    "person-details": { label: "Person Details", color: "bg-blue-100 text-blue-700" },
    authorization: { label: "Authorization", color: "bg-purple-100 text-purple-700" },
    consent: { label: "Consent", color: "bg-purple-100 text-purple-700" },
    "proof-upload": { label: "Proof Upload", color: "bg-orange-100 text-orange-700" },
    invalid: { label: "Invalid", color: "bg-red-100 text-red-700" },
    success: { label: "Success", color: "bg-green-100 text-green-700" },
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

// ==================== START SCREEN ====================

function StartScreen({ onProceed }: { onProceed: () => void }) {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1">
        <div className="bg-card px-8 py-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-purple-700 rounded flex items-center justify-center flex-shrink-0">
              <Users size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">Acting on Behalf of Another Person</h2>
              <p className="text-sm text-muted-foreground">
                This service allows guardians, parents, caregivers, or authorized representatives to complete 
                applications and provide consent on behalf of another person
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Important Notice */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-orange-900 mb-2">Important Notice</h3>
              <p className="text-sm text-orange-800 leading-relaxed mb-3">
                You are about to act on behalf of another person. You must have legal authority or proper 
                authorization to represent them. Providing false information or unauthorized representation 
                is a legal offense.
              </p>
              <p className="text-sm text-orange-800 leading-relaxed">
                You will need to provide details about your relationship and may be asked to upload 
                supporting documents as proof of authorization.
              </p>
            </div>
          </div>
        </div>

        {/* When to Use This Flow */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            When to Use This Flow
          </h3>
          <div className="space-y-3">
            <UseCase
              icon={<Users size={16} className="text-blue-600" />}
              text="Parent applying for services on behalf of a minor child"
            />
            <UseCase
              icon={<Users size={16} className="text-blue-600" />}
              text="Legal guardian managing affairs for a dependent person"
            />
            <UseCase
              icon={<Users size={16} className="text-blue-600" />}
              text="Caregiver assisting an elderly or disabled person"
            />
            <UseCase
              icon={<Users size={16} className="text-blue-600" />}
              text="Authorized representative with power of attorney"
            />
            <UseCase
              icon={<Users size={16} className="text-blue-600" />}
              text="Nominee acting on behalf of the primary beneficiary"
            />
          </div>
        </div>

        {/* What You'll Need */}
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText size={20} className="text-green-600" />
            What You'll Need
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <RequirementItem text="Details of person you're representing" />
            <RequirementItem text="Your relationship to them" />
            <RequirementItem text="Authorization or legal documents" />
            <RequirementItem text="Your own identity verification" />
          </div>
        </div>

        {/* Consent Notice */}
        <div className="border-2 border-border rounded-lg p-6 bg-background">
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
            />
            <span className="text-sm text-foreground">
              I understand that I am acting on behalf of another person and I have the legal authority 
              or proper authorization to do so. I accept responsibility for the accuracy of the information 
              I provide.
            </span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onProceed}
            className="flex-1 px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors"
          >
            Continue as Guardian/Representative
          </button>
          <Link
            to="/patterns/consent"
            className="flex-1 px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background transition-colors text-center"
          >
            Cancel
          </Link>
        </div>

      </div>
    </>
  );
}

function UseCase({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

function RequirementItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== RELATIONSHIP SCREEN ====================

function RelationshipScreen({ 
  selectedRelationship, 
  onSelect,
  onHelp
}: { 
  selectedRelationship: Relationship; 
  onSelect: (rel: Relationship) => void;
  onHelp: () => void;
}) {
  const relationships = [
    {
      id: "parent-minor" as Relationship,
      title: "Parent of Minor Child",
      description: "You are the parent of a child under 18 years",
      proofRequired: false,
      icon: <Users size={24} className="text-blue-600" />
    },
    {
      id: "legal-guardian" as Relationship,
      title: "Legal Guardian",
      description: "You have court-appointed guardianship",
      proofRequired: true,
      icon: <Shield size={24} className="text-purple-600" />
    },
    {
      id: "caregiver-dependent" as Relationship,
      title: "Caregiver for Dependent",
      description: "You care for an elderly or disabled person",
      proofRequired: false,
      icon: <UserCheck size={24} className="text-green-600" />
    },
    {
      id: "authorized-representative" as Relationship,
      title: "Authorized Representative",
      description: "You have power of attorney or written authorization",
      proofRequired: true,
      icon: <FileText size={24} className="text-orange-600" />
    },
    {
      id: "nominee" as Relationship,
      title: "Nominee",
      description: "You are nominated by the primary beneficiary",
      proofRequired: false,
      icon: <User size={24} className="text-teal-600" />
    }
  ];

  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Select Your Relationship</h2>
        <p className="text-sm text-muted-foreground">
          Choose the option that best describes your relationship to the person you're representing
        </p>
      </div>

      <div className="p-8 space-y-4">
        
        {relationships.map((rel) => (
          <button
            key={rel.id}
            onClick={() => onSelect(rel.id)}
            className={`w-full border-2 rounded-lg p-6 text-left transition-all ${
              selectedRelationship === rel.id
                ? 'border-primary bg-blue-50'
                : 'border-border bg-card hover:border-blue-400 hover:bg-background'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {rel.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1">{rel.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{rel.description}</p>
                {rel.proofRequired && (
                  <div className="flex items-center gap-2 text-xs text-orange-700 bg-orange-50 border border-orange-200 rounded px-2 py-1 inline-block">
                    <AlertCircle size={12} />
                    <span>Supporting documents required</span>
                  </div>
                )}
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </button>
        ))}

        <div className="pt-4 text-center">
          <button
            onClick={onHelp}
            className="text-sm text-primary hover:underline flex items-center gap-1 mx-auto"
          >
            <HelpCircle size={16} />
            Not sure which option applies to you?
          </button>
        </div>

      </div>
    </>
  );
}

// ==================== PERSON DETAILS SCREEN ====================

function PersonDetailsScreen({
  relationship,
  personName,
  onNameChange,
  onSubmit,
  onBack,
  attemptedProceed
}: {
  relationship: Relationship;
  personName: string;
  onNameChange: (name: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  attemptedProceed: boolean;
}) {
  const relationshipLabels = {
    "parent-minor": "your child",
    "legal-guardian": "the person under guardianship",
    "caregiver-dependent": "the person you care for",
    "authorized-representative": "the person you represent",
    "nominee": "the primary beneficiary"
  };

  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Details of Person Being Represented</h2>
        <p className="text-sm text-muted-foreground">
          Provide information about {relationshipLabels[relationship] || "the person"} you are representing
        </p>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Info Box */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 flex items-start gap-3">
          <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Enter the details exactly as they appear on official documents. This information will be 
            verified during processing.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={personName}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="Enter full name as per official documents"
              className={`w-full px-4 py-3 border-2 rounded text-sm ${
                attemptedProceed && !personName.trim()
                  ? 'border-red-300 bg-red-50'
                  : 'border-border bg-card'
              }`}
            />
            {attemptedProceed && !personName.trim() && (
              <p className="text-xs text-red-700 mt-1 font-bold">
                ⚠ This field is required
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Date of Birth <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 border-2 border-border rounded text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Gender <span className="text-red-600">*</span>
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm hover:border-primary hover:bg-blue-50">
                Male
              </button>
              <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm hover:border-primary hover:bg-blue-50">
                Female
              </button>
              <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm hover:border-primary hover:bg-blue-50">
                Other
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Aadhaar Number (Optional)
            </label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX"
              maxLength={14}
              className="w-full px-4 py-3 border-2 border-border rounded text-sm font-mono"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Providing Aadhaar helps in faster verification
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onBack}
            className="px-6 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Back
          </button>
          <button
            onClick={onSubmit}
            className="flex-1 px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            Continue
          </button>
        </div>

      </div>
    </>
  );
}

// ==================== AUTHORIZATION SCREEN ====================

function AuthorizationScreen({
  relationship,
  personName,
  authorizationChecked,
  onAuthorizationChange,
  onSubmit,
  onBack,
  attemptedProceed
}: {
  relationship: Relationship;
  personName: string;
  authorizationChecked: boolean;
  onAuthorizationChange: (checked: boolean) => void;
  onSubmit: () => void;
  onBack: () => void;
  attemptedProceed: boolean;
}) {
  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Authorization Declaration</h2>
        <p className="text-sm text-muted-foreground">
          Declare that you have the legal authority to act on behalf of {personName || "the represented person"}
        </p>
      </div>

      {attemptedProceed && !authorizationChecked && (
        <div className="mx-8 mt-6 bg-red-50 border-2 border-red-300 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-red-900 mb-1">Authorization Required</h3>
            <p className="text-sm text-red-800">
              You must declare your legal authority to continue. Please review and check the declaration below.
            </p>
          </div>
        </div>
      )}

      <div className="p-8 space-y-6">
        
        {/* Legal Notice */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Shield size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-orange-900 mb-2">Legal Declaration</h3>
              <p className="text-sm text-orange-800 leading-relaxed">
                By proceeding, you declare under penalty of law that you have the legal authority or proper 
                authorization to act on behalf of the person named above. Providing false declarations is a 
                punishable offense under Indian law.
              </p>
            </div>
          </div>
        </div>

        {/* Declaration Points */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">I Declare That:</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <DeclarationPoint text="I have the legal right or authorization to represent the person named above" />
            <DeclarationPoint text="All information I provide is true and accurate to the best of my knowledge" />
            <DeclarationPoint text="I am acting in the best interest of the person I represent" />
            <DeclarationPoint text="I understand that false representation is a legal offense" />
            <DeclarationPoint text="I will provide supporting documents if requested for verification" />
          </div>
        </div>

        {/* Authorization Checkbox */}
        <div className={`border-2 rounded-lg p-6 ${
          attemptedProceed && !authorizationChecked ? 'border-red-300 bg-red-50' : 'border-border bg-background'
        }`}>
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={authorizationChecked}
              onChange={(e) => onAuthorizationChange(e.target.checked)}
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
            />
            <div className="flex-1">
              <span className="text-sm text-foreground font-bold leading-relaxed">
                I solemnly declare that I have read and understood the above statements, and I confirm 
                that I have the legal authority to act on behalf of {personName || "the represented person"}.
              </span>
              {attemptedProceed && !authorizationChecked && (
                <p className="text-xs text-red-700 mt-2 font-bold">
                  ⚠ You must check this box to proceed
                </p>
              )}
            </div>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onBack}
            className="px-6 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Back
          </button>
          <button
            onClick={onSubmit}
            disabled={!authorizationChecked}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-all ${
              authorizationChecked
                ? 'bg-primary text-white hover:opacity-90'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Accept Declaration and Continue
          </button>
        </div>

      </div>
    </>
  );
}

function DeclarationPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== CONSENT SCREEN ====================

function ConsentScreen({
  relationship,
  personName,
  consentChecked,
  onConsentChange,
  onSubmit,
  onBack,
  attemptedProceed
}: {
  relationship: Relationship;
  personName: string;
  consentChecked: boolean;
  onConsentChange: (checked: boolean) => void;
  onSubmit: () => void;
  onBack: () => void;
  attemptedProceed: boolean;
}) {
  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Data Processing Consent</h2>
        <p className="text-sm text-muted-foreground">
          Provide consent for data collection and processing on behalf of {personName || "the represented person"}
        </p>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Notice */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground mb-2">Acting on Their Behalf</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You are providing consent for data collection and processing on behalf of{' '}
                <span className="font-bold">{personName || "the represented person"}</span>. Ensure you 
                have discussed this with them (if applicable) and you have their best interests in mind.
              </p>
            </div>
          </div>
        </div>

        {/* Data Collection Details */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Data to be Collected</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <DataItem text="Personal information (name, DOB, gender, contact details)" />
            <DataItem text="Identity verification documents (Aadhaar, PAN, etc.)" />
            <DataItem text="Application and service-specific information" />
            <DataItem text="Guardian/representative relationship details" />
            <DataItem text="Supporting documents and authorization proof" />
          </div>
        </div>

        {/* Purpose and Usage */}
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Purpose of Data Collection</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The data will be used to verify identity, process the application, deliver government services, 
            maintain records as per regulations, and communicate service updates. Data will not be shared 
            with third parties without consent or legal requirement.
          </p>
        </div>

        {/* Consent Checkbox */}
        <div className={`border-2 rounded-lg p-6 ${
          attemptedProceed && !consentChecked ? 'border-red-300 bg-red-50' : 'border-border bg-background'
        }`}>
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={consentChecked}
              onChange={(e) => onConsentChange(e.target.checked)}
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
            />
            <div className="flex-1">
              <span className="text-sm text-foreground leading-relaxed">
                On behalf of <span className="font-bold">{personName || "the represented person"}</span>, 
                I consent to the collection, processing, and storage of their personal data as described above 
                for the purpose of accessing this government service. I understand that consent can be withdrawn 
                through proper channels.
              </span>
              {attemptedProceed && !consentChecked && (
                <p className="text-xs text-red-700 mt-2 font-bold">
                  ⚠ Consent is required to proceed
                </p>
              )}
            </div>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onBack}
            className="px-6 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Back
          </button>
          <button
            onClick={onSubmit}
            disabled={!consentChecked}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-all ${
              consentChecked
                ? 'bg-primary text-white hover:opacity-90'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Provide Consent and Continue
          </button>
        </div>

      </div>
    </>
  );
}

function DataItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== PROOF UPLOAD SCREEN ====================

function ProofUploadScreen({
  relationship,
  proofUploaded,
  onProofUpload,
  onSubmit,
  onBack,
  attemptedProceed
}: {
  relationship: Relationship;
  proofUploaded: boolean;
  onProofUpload: (uploaded: boolean) => void;
  onSubmit: () => void;
  onBack: () => void;
  attemptedProceed: boolean;
}) {
  const requirementsByRelationship = {
    "legal-guardian": [
      "Court order appointing you as legal guardian",
      "Guardianship certificate",
      "Any other legal document establishing guardianship"
    ],
    "authorized-representative": [
      "Power of Attorney document",
      "Authorization letter signed by the person",
      "Notarized consent document"
    ]
  };

  const requirements = requirementsByRelationship[relationship as keyof typeof requirementsByRelationship] || [];

  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Upload Supporting Documents</h2>
        <p className="text-sm text-muted-foreground">
          Provide proof of your authorization to act as a representative
        </p>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Requirements */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-bold text-orange-900 mb-3">Required Documents</h3>
              <p className="text-sm text-orange-800 mb-3">
                You must upload at least one of the following documents:
              </p>
              <ul className="space-y-2 text-sm text-orange-800">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold">{idx + 1}.</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <div className={`border-2 border-dashed rounded-lg p-8 text-center ${
          attemptedProceed && !proofUploaded ? 'border-red-300 bg-red-50' : 'border-border bg-background'
        }`}>
          {!proofUploaded ? (
            <>
              <Upload size={48} className="mx-auto mb-4 text-gray-400" />
              <h3 className="font-bold text-foreground mb-2">Upload Documents</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop files here or click to browse
              </p>
              <button
                onClick={() => onProofUpload(true)}
                className="px-6 py-3 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
              >
                Select Files
              </button>
              <p className="text-xs text-muted-foreground mt-4">
                Supported formats: PDF, JPG, PNG • Maximum size: 5MB per file
              </p>
              {attemptedProceed && !proofUploaded && (
                <p className="text-sm text-red-700 mt-3 font-bold">
                  ⚠ Please upload at least one supporting document
                </p>
              )}
            </>
          ) : (
            <div className="bg-card border-2 border-green-300 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText size={24} className="text-green-600" />
                  <div className="text-left">
                    <div className="font-bold text-foreground text-sm">guardianship_certificate.pdf</div>
                    <div className="text-xs text-muted-foreground">2.4 MB • Uploaded successfully</div>
                  </div>
                </div>
                <button
                  onClick={() => onProofUpload(false)}
                  className="p-2 hover:bg-muted rounded"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Information */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info size={18} className="text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                Your documents will be verified by our team within 2-3 business days. You will receive a 
                notification once verification is complete.
              </p>
              <p>
                Ensure documents are clear, legible, and show all relevant information. Blurred or incomplete 
                documents may delay processing.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onBack}
            className="px-6 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Back
          </button>
          <button
            onClick={onSubmit}
            disabled={!proofUploaded}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-all ${
              proofUploaded
                ? 'bg-primary text-white hover:opacity-90'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Documents and Continue
          </button>
        </div>

      </div>
    </>
  );
}

// ==================== INVALID SCREEN ====================

function InvalidScreen({ onRetry, onHelp }: { onRetry: () => void; onHelp: () => void }) {
  return (
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <AlertTriangle size={48} className="text-red-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Authorization Not Provided</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          You cannot proceed without declaring your legal authority to act as a representative. 
          This declaration is mandatory for all guardian/proxy applications.
        </p>

        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
            <XCircle size={20} className="text-red-600" />
            Why Authorization is Required
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <ChevronRight size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
              <span>Legal protection for the person you're representing</span>
            </div>
            <div className="flex items-start gap-3">
              <ChevronRight size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
              <span>Prevention of unauthorized access to personal data</span>
            </div>
            <div className="flex items-start gap-3">
              <ChevronRight size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
              <span>Compliance with data protection regulations</span>
            </div>
            <div className="flex items-start gap-3">
              <ChevronRight size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
              <span>Audit trail for government service delivery</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            What You Can Do
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>Review the authorization declaration and try again</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>Contact help desk if you have questions about your authority</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>Obtain proper legal authorization before proceeding</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>The person can apply directly if they are able to do so</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            Review Declaration and Try Again
          </button>
          <button
            onClick={onHelp}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Get Help Understanding Requirements
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== SUCCESS SCREEN ====================

function SuccessScreen({ 
  relationship, 
  personName, 
  onReset 
}: { 
  relationship: Relationship; 
  personName: string; 
  onReset: () => void;
}) {
  const relationshipLabels = {
    "parent-minor": "parent of a minor",
    "legal-guardian": "legal guardian",
    "caregiver-dependent": "caregiver",
    "authorized-representative": "authorized representative",
    "nominee": "nominee"
  };

  return (
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Authorization Complete</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          You are now authorized to act as {relationshipLabels[relationship] || "representative"} on behalf of{' '}
          <span className="font-bold">{personName}</span>. You can proceed with the service application.
        </p>

        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle size={20} className="text-green-600" />
            What's Been Recorded
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <RecordItem text="Your relationship as representative has been verified" />
            <RecordItem text="Authorization declaration has been recorded with timestamp" />
            <RecordItem text="Consent for data processing has been captured" />
            {(relationship === "legal-guardian" || relationship === "authorized-representative") && (
              <RecordItem text="Supporting documents uploaded for verification" />
            )}
            <RecordItem text="Audit trail created for compliance and record-keeping" />
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Important Information
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>
                All actions you take will be recorded as being performed on behalf of {personName}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>
                You are responsible for ensuring accuracy of all information provided
              </span>
            </div>
            <div className="flex items-start gap-3">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>
                Any updates or changes will require re-verification of your authorization
              </span>
            </div>
            {(relationship === "legal-guardian" || relationship === "authorized-representative") && (
              <div className="flex items-start gap-3">
                <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Your documents will be verified within 2-3 business days
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3 text-left">
            <Shield size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-bold text-orange-900 mb-1 text-sm">Your Responsibilities</h4>
              <p className="text-xs text-orange-800">
                You must act in the best interest of {personName} at all times. Keep them informed of 
                actions taken on their behalf (if applicable). Maintain confidentiality of their personal 
                information. Report any changes in your authorization status immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90">
            Proceed to Service Application
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

function RecordItem({ text }: { text: string }) {
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
            <h2 className="text-2xl font-bold text-foreground">Guardian/Proxy Consent Help</h2>
            <p className="text-sm text-muted-foreground">Common questions and guidance</p>
          </div>
        </div>

        <div className="space-y-6">
          <HelpItem
            question="Who can act as a guardian or representative?"
            answer="Parents of minor children (under 18), court-appointed legal guardians, caregivers for elderly or disabled persons with consent, authorized representatives with power of attorney, and nominees designated by the primary beneficiary can act as representatives."
          />
          <HelpItem
            question="What documents do I need as proof?"
            answer="Requirements vary by relationship type: Parents typically need birth certificate showing relationship. Legal guardians need court order or guardianship certificate. Authorized representatives need power of attorney or notarized authorization letter. Caregivers may need consent letter from the person or medical documentation."
          />
          <HelpItem
            question="Can I act on behalf of someone without their knowledge?"
            answer="No. You must have explicit authorization or legal right to represent them. For adults with mental capacity, you need their written consent or power of attorney. Only in cases of legal incapacity (with court appointment) or parental authority (for minors) can you act without direct consent."
          />
          <HelpItem
            question="What if the person I'm representing doesn't have Aadhaar?"
            answer="Aadhaar is helpful but not always mandatory. Alternative identity documents may be accepted. Contact the service center or helpline for guidance on alternative identity verification methods for the specific service you're applying for."
          />
          <HelpItem
            question="How long is my authorization valid?"
            answer="For parents of minors: Until the child turns 18. For legal guardians: As per court order duration. For authorized representatives: As per the power of attorney validity. For caregivers: You may need to renew authorization periodically. Always check service-specific requirements."
          />
          <HelpItem
            question="Can I authorize someone else to act on my behalf?"
            answer="Yes, you can create a chain of authorization, but it must be explicitly documented. For example, if you're a guardian, you might authorize a helper, but you remain ultimately responsible. Ensure proper legal documentation for any sub-authorization."
          />
          <HelpItem
            question="What happens if my documents are rejected?"
            answer="You'll receive notification explaining the reason for rejection. Common reasons include: unclear/illegible documents, expired authorization, missing information, or mismatch in details. You can resubmit corrected documents or contact support for guidance."
          />
          <HelpItem
            question="Is there a fee for verification?"
            answer="No, verification of guardian/representative status is free of charge for government services. However, obtaining legal documents like power of attorney from notaries may involve separate costs."
          />
        </div>

        <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-300 rounded-lg">
          <h3 className="font-bold text-foreground mb-3">Need More Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            For specific questions about your situation, contact our support team or visit the nearest 
            service center with your documents.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-bold text-foreground">Email:</span>{' '}
              <a href="#" className="text-primary hover:underline">support@service.gov.in</a>
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
            Back to Flow
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

// ==================== PROGRESS TRACKER ====================

function ProgressTracker({ currentState, relationship }: { currentState: FlowState; relationship: Relationship }) {
  const requiresProof = relationship === "legal-guardian" || relationship === "authorized-representative";
  
  const steps = [
    { id: "start", label: "Introduction", state: "start" },
    { id: "relationship", label: "Relationship", state: "relationship" },
    { id: "person-details", label: "Person Details", state: "person-details" },
    { id: "authorization", label: "Authorization", state: "authorization" },
    { id: "consent", label: "Consent", state: "consent" },
    ...(requiresProof ? [{ id: "proof-upload", label: "Proof Upload", state: "proof-upload" }] : []),
    { id: "success", label: "Complete", state: "success" }
  ];

  const stateOrder = ["start", "relationship", "person-details", "authorization", "consent", "proof-upload", "success"];
  const currentIndex = stateOrder.indexOf(currentState);

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-primary text-white px-4 py-3">
        <h3 className="font-bold text-sm">Progress</h3>
      </div>
      <div className="p-4 space-y-3">
        {steps.map((step, index) => {
          const stepIndex = stateOrder.indexOf(step.state);
          const isActive = currentState === step.state;
          const isComplete = stepIndex < currentIndex;
          
          return (
            <div key={step.id} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                isComplete ? 'bg-green-100 text-green-700' : 
                isActive ? 'bg-blue-100 text-blue-700' : 
                'bg-muted text-muted-foreground'
              }`}>
                {isComplete ? <CheckCircle size={18} /> : index + 1}
              </div>
              <span className={`text-sm ${
                isComplete ? 'text-foreground font-medium' : 
                isActive ? 'text-foreground font-bold' : 
                'text-muted-foreground'
              }`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==================== STATE EXPLAINER ====================

function StateExplainer({ currentState }: { currentState: FlowState }) {
  const explanations = {
    start: "Introduction screen explaining guardian/proxy representation and legal requirements.",
    relationship: "User selects their relationship to the person they're representing.",
    "person-details": "User provides information about the person being represented.",
    authorization: "User declares their legal authority to act as representative.",
    consent: "User provides data processing consent on behalf of the represented person.",
    "proof-upload": "User uploads supporting documents to verify their authorization.",
    invalid: "Authorization not provided. User must accept declaration to continue.",
    success: "Authorization complete. User can proceed with service application.",
    help: "Help and support information about guardian/proxy representation."
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

// ==================== KEY FEATURES ====================

function KeyFeatures() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">Key Features</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <FeatureItem text="Clear relationship selection" />
        <FeatureItem text="Formal authorization declaration" />
        <FeatureItem text="Proof upload for verification" />
        <FeatureItem text="Invalid state handling" />
        <FeatureItem text="Plain language messaging" />
        <FeatureItem text="Accessible form behavior" />
        <FeatureItem text="Comprehensive help support" />
        <FeatureItem text="Audit trail tracking" />
      </div>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}
