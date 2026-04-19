import { useState } from "react";
import { Link } from "react-router";
import { CheckSquare, Shield, CheckCircle, AlertCircle, Info, XCircle, ChevronRight, ChevronDown, HelpCircle, Eye, Lock, Clock, Database, ArrowLeft, ArrowRight, X } from "lucide-react";

type ConsentState = "initial" | "reading" | "granted" | "declined" | "help" | "blocked";

export default function ConsentCaptureDemo() {
  const [consentState, setConsentState] = useState<ConsentState>("initial");
  const [showDetails, setShowDetails] = useState(false);
  const [hasReadDetails, setHasReadDetails] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [attemptedProceed, setAttemptedProceed] = useState(false);

  const handleConsentChange = (checked: boolean) => {
    setConsentChecked(checked);
    setAttemptedProceed(false);
    if (checked) {
      setConsentState("granted");
    } else {
      setConsentState("initial");
    }
  };

  const handleProceed = () => {
    if (!consentChecked) {
      setAttemptedProceed(true);
      setConsentState("blocked");
    } else {
      // Proceed to next step
      setConsentState("granted");
    }
  };

  const handleDecline = () => {
    setConsentChecked(false);
    setConsentState("declined");
  };

  const handleExpandDetails = () => {
    setShowDetails(!showDetails);
    if (!showDetails) {
      setHasReadDetails(true);
    }
  };

  const resetDemo = () => {
    setConsentState("initial");
    setShowDetails(false);
    setHasReadDetails(false);
    setConsentChecked(false);
    setAttemptedProceed(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center">
                  <CheckSquare size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Interactive Pattern Demo</div>
                  <h1 className="text-3xl font-bold text-foreground">Consent Capture Flow</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Interactive demonstration of consent capture pattern with multiple states, expandable details, 
                and accessible interactions. This shows how to implement explicit consent collection with 
                plain-language messaging and clear user control.
              </p>
              <div className="flex items-center gap-4">
                <Link 
                  to="/patterns/consent/consent-capture"
                  className="text-sm text-primary font-bold hover:underline flex items-center gap-1"
                >
                  <ArrowLeft size={16} />
                  View Pattern Documentation
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
            <StateIndicator currentState={consentState} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Interactive Consent Flow - 8 columns */}
          <div className="col-span-8">
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              
              {/* Different state views */}
              {(consentState === "initial" || consentState === "reading" || consentState === "blocked") && (
                <ConsentRequestScreen
                  showDetails={showDetails}
                  onExpandDetails={handleExpandDetails}
                  consentChecked={consentChecked}
                  onConsentChange={handleConsentChange}
                  onProceed={handleProceed}
                  onDecline={handleDecline}
                  onHelp={() => setConsentState("help")}
                  attemptedProceed={attemptedProceed}
                  isBlocked={consentState === "blocked"}
                />
              )}

              {consentState === "granted" && (
                <ConsentGrantedScreen onReset={resetDemo} />
              )}

              {consentState === "declined" && (
                <ConsentDeclinedScreen 
                  onReconsider={() => {
                    setConsentState("initial");
                    setConsentChecked(false);
                  }}
                  onReset={resetDemo}
                />
              )}

              {consentState === "help" && (
                <HelpScreen onBack={() => setConsentState("initial")} />
              )}

            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <div className="col-span-4 space-y-6">
            <InteractionGuide 
              hasReadDetails={hasReadDetails}
              consentChecked={consentChecked}
            />
            <StateExplainer currentState={consentState} />
            <ImplementationNotes />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Consent Capture Interactive Demo</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== STATE INDICATOR ====================

function StateIndicator({ currentState }: { currentState: ConsentState }) {
  const stateConfig = {
    initial: { label: "Initial", color: "bg-muted text-muted-foreground", icon: <Info size={16} /> },
    reading: { label: "Reading Details", color: "bg-blue-100 text-blue-700", icon: <Eye size={16} /> },
    granted: { label: "Consent Granted", color: "bg-green-100 text-green-700", icon: <CheckCircle size={16} /> },
    declined: { label: "Consent Declined", color: "bg-red-100 text-red-700", icon: <XCircle size={16} /> },
    help: { label: "Help/Support", color: "bg-orange-100 text-orange-700", icon: <HelpCircle size={16} /> },
    blocked: { label: "Blocked", color: "bg-red-100 text-red-700", icon: <AlertCircle size={16} /> }
  };

  const config = stateConfig[currentState];

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs font-bold text-muted-foreground text-right">CURRENT STATE</div>
      <div className={`px-4 py-3 ${config.color} border-2 border-border rounded font-bold text-sm text-center flex items-center justify-center gap-2 min-w-[180px]`}>
        {config.icon}
        {config.label}
      </div>
    </div>
  );
}

// ==================== CONSENT REQUEST SCREEN ====================

function ConsentRequestScreen({
  showDetails,
  onExpandDetails,
  consentChecked,
  onConsentChange,
  onProceed,
  onDecline,
  onHelp,
  attemptedProceed,
  isBlocked
}: {
  showDetails: boolean;
  onExpandDetails: () => void;
  consentChecked: boolean;
  onConsentChange: (checked: boolean) => void;
  onProceed: () => void;
  onDecline: () => void;
  onHelp: () => void;
  attemptedProceed: boolean;
  isBlocked: boolean;
}) {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1">
        <div className="bg-card px-8 py-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary rounded flex items-center justify-center flex-shrink-0">
              <Shield size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">Data Collection Consent</h2>
              <p className="text-sm text-muted-foreground">
                We need your permission to collect and process your personal data for this service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Error Alert if blocked */}
      {isBlocked && attemptedProceed && (
        <div className="mx-8 mt-6 bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-bold text-red-900 mb-1">Consent Required</h3>
            <p className="text-sm text-red-800 dark:text-red-300">
              You must provide consent to continue with this service. Please review the information below 
              and check the consent box if you agree.
            </p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-8 space-y-6">
        
        {/* What We Collect - Summary */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Database size={20} className="text-primary" />
            What We Will Collect
          </h3>
          
          <div className="space-y-3">
            <DataItem 
              icon={<CheckCircle size={16} className="text-blue-600" />}
              text="Personal Details: Name, date of birth, gender"
            />
            <DataItem 
              icon={<CheckCircle size={16} className="text-blue-600" />}
              text="Contact Information: Mobile number, email address, residential address"
            />
            <DataItem 
              icon={<CheckCircle size={16} className="text-blue-600" />}
              text="Identity Proof: Aadhaar number, PAN card details"
            />
            <DataItem 
              icon={<CheckCircle size={16} className="text-blue-600" />}
              text="Service Data: Application details, document uploads, transaction history"
            />
          </div>
        </div>

        {/* Why We Need It */}
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-green-600" />
            Why We Need This Data
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This data is required to verify your identity, process your application, communicate service updates, 
            and maintain records as per government regulations. We will not use your data for any other purpose 
            without your explicit consent.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard
            icon={<Eye size={20} className="text-orange-600" />}
            title="Who Can Access"
            text="Authorized government officials and verification agencies only"
            bgColor="bg-orange-50"
            borderColor="border-orange-300"
          />
          <InfoCard
            icon={<Clock size={20} className="text-purple-600" />}
            title="Retention Period"
            text="Data will be stored for 5 years as per record retention policy"
            bgColor="bg-purple-50"
            borderColor="border-purple-300"
          />
        </div>

        {/* Expandable Details */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <button
            onClick={onExpandDetails}
            className="w-full px-6 py-4 bg-muted hover:bg-muted transition-colors flex items-center justify-between text-left"
          >
            <span className="font-bold text-foreground">View Detailed Privacy Policy</span>
            {showDetails ? (
              <ChevronDown size={20} className="text-muted-foreground" />
            ) : (
              <ChevronRight size={20} className="text-muted-foreground" />
            )}
          </button>
          
          {showDetails && (
            <div className="p-6 bg-card space-y-4 border-t-2 border-border">
              <DetailSection
                title="1. Data Collection and Usage"
                content="We collect your personal information solely for the purpose of processing your application and providing government services. This includes identity verification, eligibility assessment, service delivery, and record maintenance."
              />
              <DetailSection
                title="2. Data Sharing"
                content="Your data may be shared with other government departments strictly for service delivery purposes. We will never share your data with commercial entities or third parties without your explicit consent."
              />
              <DetailSection
                title="3. Data Security"
                content="All data is encrypted during transmission and storage. We implement industry-standard security measures including access controls, audit logs, and regular security assessments to protect your information."
              />
              <DetailSection
                title="4. Your Rights"
                content="You have the right to access your data, request corrections, withdraw consent (where applicable), and file complaints with the data protection authority. You can exercise these rights through your account settings or by contacting our data protection officer."
              />
              <DetailSection
                title="5. Legal Basis"
                content="Processing of your data is authorized under the Digital Personal Data Protection Act 2023 and relevant service-specific regulations. We process data only when legally required or when you provide explicit consent."
              />
            </div>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className={`border-2 ${attemptedProceed && !consentChecked ? 'border-red-300 bg-red-50 dark:bg-red-900/20' : 'border-border bg-background'} rounded-lg p-6`}>
          <label className="flex items-start gap-4 cursor-pointer group">
            <input
              type="checkbox"
              checked={consentChecked}
              onChange={(e) => onConsentChange(e.target.checked)}
              className="mt-1 w-5 h-5 border-2 border-border rounded cursor-pointer"
            />
            <div className="flex-1">
              <span className="text-sm text-foreground leading-relaxed">
                I have read and understood the above information. I consent to the collection, processing, 
                and storage of my personal data as described for the purpose of accessing this government service. 
                I understand that I can withdraw this consent at any time from my account settings.
              </span>
              {attemptedProceed && !consentChecked && (
                <p className="text-xs text-red-700 dark:text-red-400 mt-2 font-bold">
                  ⚠ Please check this box to provide your consent
                </p>
              )}
            </div>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onProceed}
            disabled={!consentChecked}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-all ${
              consentChecked
                ? 'bg-primary text-white hover:opacity-90'
                : 'bg-gray-300 text-muted-foreground cursor-not-allowed'
            }`}
          >
            I Agree - Continue to Service
          </button>
          <button
            onClick={onDecline}
            className="flex-1 px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background transition-colors"
          >
            I Do Not Consent
          </button>
        </div>

        {/* Help Link */}
        <div className="text-center pt-2">
          <button
            onClick={onHelp}
            className="text-sm text-primary hover:underline flex items-center gap-1 mx-auto"
          >
            <HelpCircle size={16} />
            Need help understanding this?
          </button>
        </div>

      </div>
    </>
  );
}

function DataItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

function InfoCard({ icon, title, text, bgColor, borderColor }: {
  icon: React.ReactNode;
  title: string;
  text: string;
  bgColor: string;
  borderColor: string;
}) {
  return (
    <div className={`${bgColor} border-2 ${borderColor} rounded-lg p-4`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h4 className="font-bold text-foreground text-sm">{title}</h4>
      </div>
      <p className="text-xs text-muted-foreground">{text}</p>
    </div>
  );
}

function DetailSection({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4 className="font-bold text-foreground mb-2 text-sm">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
    </div>
  );
}

// ==================== CONSENT GRANTED SCREEN ====================

function ConsentGrantedScreen({ onReset }: { onReset: () => void }) {
  return (
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Consent Granted</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Thank you for providing your consent. Your preferences have been recorded and you can now 
          proceed with the service.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            What Happens Next
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>Your consent has been recorded with timestamp and version number</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>You can now access all features of this service</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>A confirmation email has been sent to your registered email address</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>You can withdraw consent anytime from Account Settings → Privacy & Consent</span>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3 text-left">
            <Lock size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-bold text-orange-900 mb-1 text-sm">Your Rights</h4>
              <p className="text-xs text-orange-800">
                You can withdraw your consent at any time. Withdrawing consent may affect your ability to use 
                certain service features. Visit your account settings to manage your consent preferences.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors">
            Continue to Service Dashboard
          </button>
          <button
            onClick={onReset}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background transition-colors"
          >
            Reset Demo
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== CONSENT DECLINED SCREEN ====================

function ConsentDeclinedScreen({ onReconsider, onReset }: { onReconsider: () => void; onReset: () => void }) {
  return (
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <AlertCircle size={48} className="text-orange-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Consent Not Provided</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          You have chosen not to provide consent for data collection. Here is what this means for your 
          service access:
        </p>

        <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
            <XCircle size={20} className="text-red-600" />
            Service Limitations
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <XCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
              <span>You will not be able to submit applications or access personalized services</span>
            </div>
            <div className="flex items-start gap-3">
              <XCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
              <span>Identity verification and document processing will not be available</span>
            </div>
            <div className="flex items-start gap-3">
              <XCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
              <span>You will not receive service updates or notifications</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>You can still view general information and public resources</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Alternative Options
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Visit your nearest government service center for in-person assistance</span>
            </div>
            <div className="flex items-start gap-3">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Contact the helpline at 1800-XXX-XXXX for alternative service delivery methods</span>
            </div>
            <div className="flex items-start gap-3">
              <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>You can provide consent later if you change your mind</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onReconsider}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors"
          >
            Review and Reconsider Consent
          </button>
          <button className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background transition-colors">
            Continue Without Consent (Limited Access)
          </button>
          <button
            onClick={onReset}
            className="text-sm text-muted-foreground hover:text-foreground font-medium"
          >
            Reset Demo
          </button>
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
            <h2 className="text-2xl font-bold text-foreground">Understanding Consent</h2>
            <p className="text-sm text-muted-foreground">Common questions and answers</p>
          </div>
        </div>

        <div className="space-y-6">
          <FAQItem
            question="Why do I need to provide consent?"
            answer="Government services require your explicit permission to collect and process your personal data. This consent ensures transparency and gives you control over your information. It is a legal requirement under the Digital Personal Data Protection Act 2023."
          />
          <FAQItem
            question="What data will be collected?"
            answer="We collect only the information necessary to provide the service: your personal details (name, DOB, gender), contact information (mobile, email, address), identity proof (Aadhaar, PAN), and service-specific data (application details, documents). We do not collect unnecessary information."
          />
          <FAQItem
            question="How will my data be used?"
            answer="Your data is used solely for: (1) Verifying your identity, (2) Processing your application, (3) Delivering the requested service, (4) Communicating updates and notifications, (5) Maintaining records as required by law. We will not use your data for marketing or share it with commercial entities."
          />
          <FAQItem
            question="Who can access my data?"
            answer="Only authorized government officials directly involved in processing your service request can access your data. We implement strict access controls and maintain audit logs. Your data will not be sold or shared with third parties without your explicit consent."
          />
          <FAQItem
            question="Can I withdraw consent later?"
            answer="Yes, you can withdraw consent at any time from your Account Settings → Privacy & Consent. However, withdrawing consent may affect your ability to use certain service features. You will be informed of the impact before withdrawal is processed."
          />
          <FAQItem
            question="What if I don't provide consent?"
            answer="If you don't provide consent, you will not be able to access personalized services that require data processing. However, you can still view general information and public resources. You can also access services through in-person visits to government offices."
          />
          <FAQItem
            question="How is my data protected?"
            answer="We use industry-standard security measures including encryption (at rest and in transit), access controls, regular security audits, and compliance with government cybersecurity frameworks. All data handling follows the Digital Personal Data Protection Act 2023."
          />
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg">
          <h3 className="font-bold text-foreground mb-3">Still have questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Contact our Data Protection Officer or visit the nearest service center for assistance.
          </p>
          <div className="flex gap-4 text-sm">
            <div>
              <span className="font-bold text-foreground">Email:</span>{' '}
              <a href="#" className="text-primary hover:underline">privacy@service.gov.in</a>
            </div>
            <div>
              <span className="font-bold text-foreground">Phone:</span>{' '}
              <a href="#" className="text-primary hover:underline">1800-XXX-XXXX</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Consent Screen
          </button>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
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

// ==================== INTERACTION GUIDE ====================

function InteractionGuide({ hasReadDetails, consentChecked }: { hasReadDetails: boolean; consentChecked: boolean }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-primary text-white px-4 py-3">
        <h3 className="font-bold text-sm">Interaction Guide</h3>
      </div>
      <div className="p-4 space-y-4">
        <GuideStep
          number="1"
          text="Read the consent summary"
          completed={true}
        />
        <GuideStep
          number="2"
          text="Expand details (optional)"
          completed={hasReadDetails}
        />
        <GuideStep
          number="3"
          text="Check consent box"
          completed={consentChecked}
        />
        <GuideStep
          number="4"
          text="Click proceed or decline"
          completed={false}
        />
      </div>
    </div>
  );
}

function GuideStep({ number, text, completed }: { number: string; text: string; completed: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
        completed ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'
      }`}>
        {completed ? <CheckCircle size={18} /> : number}
      </div>
      <span className={`text-sm ${completed ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
        {text}
      </span>
    </div>
  );
}

// ==================== STATE EXPLAINER ====================

function StateExplainer({ currentState }: { currentState: ConsentState }) {
  const explanations = {
    initial: "User is viewing the consent request and reading information. No action taken yet.",
    reading: "User is exploring detailed privacy policy information to make an informed decision.",
    granted: "User has provided explicit consent. Service access is enabled.",
    declined: "User has declined consent. Service limitations are explained with alternatives.",
    help: "User needs assistance understanding consent requirements. FAQ and support provided.",
    blocked: "User attempted to proceed without consent. Clear error shown with guidance."
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

// ==================== IMPLEMENTATION NOTES ====================

function ImplementationNotes() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">Key Features</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <FeatureItem text="Plain language explanations" />
        <FeatureItem text="Expandable detailed information" />
        <FeatureItem text="Explicit consent checkbox" />
        <FeatureItem text="Clear proceed/decline actions" />
        <FeatureItem text="Blocked state when required" />
        <FeatureItem text="Help and support access" />
        <FeatureItem text="Accessible keyboard navigation" />
        <FeatureItem text="Mobile-responsive design" />
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
