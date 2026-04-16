import { useState } from "react";
import { Link } from "react-router";
import { Shield, CheckCircle, AlertCircle, Info, XCircle, ChevronRight, HelpCircle, FileText, User, Database, Clock, AlertTriangle, ArrowLeft, Settings, Eye, Trash2, Edit, Check, X, Bell, Lock } from "lucide-react";

type FlowState = 
  | "summary" 
  | "details" 
  | "change-options"
  | "withdraw-impact" 
  | "withdraw-confirm"
  | "withdraw-success"
  | "change-success"
  | "restricted" 
  | "help";

type ConsentItem = {
  id: string;
  service: string;
  purpose: string;
  dateGranted: string;
  canWithdraw: boolean;
  restrictionReason?: string;
  dataTypes: string[];
};

export default function ConsentWithdrawalDemo() {
  const [flowState, setFlowState] = useState<FlowState>("summary");
  const [selectedConsent, setSelectedConsent] = useState<ConsentItem | null>(null);
  const [confirmWithdrawal, setConfirmWithdrawal] = useState(false);
  const [understandImpact, setUnderstandImpact] = useState(false);

  // Mock consent data
  const consentItems: ConsentItem[] = [
    {
      id: "1",
      service: "Passport Application Service",
      purpose: "Identity verification and passport issuance",
      dateGranted: "March 15, 2026",
      canWithdraw: false,
      restrictionReason: "Active application in progress. Withdrawal will cancel your application.",
      dataTypes: ["Personal details", "Address", "Identity documents", "Biometric data"]
    },
    {
      id: "2",
      service: "Property Tax Payment",
      purpose: "Tax assessment and payment processing",
      dateGranted: "January 10, 2026",
      canWithdraw: true,
      dataTypes: ["Property details", "Contact information", "Payment history"]
    },
    {
      id: "3",
      service: "Health Services Portal",
      purpose: "Medical record access and appointment booking",
      dateGranted: "February 20, 2026",
      canWithdraw: true,
      dataTypes: ["Health records", "Appointment history", "Contact details"]
    },
    {
      id: "4",
      service: "Education Certificate Verification",
      purpose: "Document verification for employment",
      dateGranted: "April 1, 2026",
      canWithdraw: false,
      restrictionReason: "Legal requirement for verification service. Cannot be withdrawn.",
      dataTypes: ["Educational records", "Personal details", "Institution information"]
    }
  ];

  const resetDemo = () => {
    setFlowState("summary");
    setSelectedConsent(null);
    setConfirmWithdrawal(false);
    setUnderstandImpact(false);
  };

  const handleViewDetails = (consent: ConsentItem) => {
    setSelectedConsent(consent);
    setFlowState("details");
  };

  const handleWithdrawClick = () => {
    if (selectedConsent?.canWithdraw) {
      setFlowState("withdraw-impact");
    } else {
      setFlowState("restricted");
    }
  };

  const handleConfirmWithdrawal = () => {
    if (confirmWithdrawal && understandImpact) {
      setFlowState("withdraw-success");
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
                <div className="w-16 h-16 bg-green-100 border-2 border-green-300 rounded flex items-center justify-center">
                  <Settings size={32} className="text-green-700" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Interactive Pattern Demo</div>
                  <h1 className="text-3xl font-bold text-foreground">Consent Withdrawal & Review Flow</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Interactive demonstration of consent review and withdrawal pattern. Users can view their active 
                consents, understand implications of withdrawal, and manage their data permissions with full 
                transparency and control.
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
                  consents={consentItems}
                  onViewDetails={handleViewDetails}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "details" && selectedConsent && (
                <DetailsScreen
                  consent={selectedConsent}
                  onBack={() => setFlowState("summary")}
                  onWithdraw={handleWithdrawClick}
                  onChangeOptions={() => setFlowState("change-options")}
                />
              )}

              {flowState === "change-options" && selectedConsent && (
                <ChangeOptionsScreen
                  consent={selectedConsent}
                  onBack={() => setFlowState("details")}
                  onComplete={() => setFlowState("change-success")}
                />
              )}

              {flowState === "withdraw-impact" && selectedConsent && (
                <WithdrawImpactScreen
                  consent={selectedConsent}
                  understandImpact={understandImpact}
                  onUnderstandChange={setUnderstandImpact}
                  onBack={() => setFlowState("details")}
                  onProceed={() => setFlowState("withdraw-confirm")}
                />
              )}

              {flowState === "withdraw-confirm" && selectedConsent && (
                <WithdrawConfirmScreen
                  consent={selectedConsent}
                  confirmWithdrawal={confirmWithdrawal}
                  onConfirmChange={setConfirmWithdrawal}
                  onBack={() => setFlowState("withdraw-impact")}
                  onConfirm={handleConfirmWithdrawal}
                />
              )}

              {flowState === "withdraw-success" && selectedConsent && (
                <WithdrawSuccessScreen
                  consent={selectedConsent}
                  onReset={resetDemo}
                />
              )}

              {flowState === "change-success" && selectedConsent && (
                <ChangeSuccessScreen
                  consent={selectedConsent}
                  onReset={resetDemo}
                />
              )}

              {flowState === "restricted" && selectedConsent && (
                <RestrictedScreen
                  consent={selectedConsent}
                  onBack={() => setFlowState("details")}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "help" && (
                <HelpScreen onBack={() => setFlowState("summary")} />
              )}

            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <aside className="col-span-4 space-y-6">
            <QuickStats consents={consentItems} />
            <StateExplainer currentState={flowState} />
            <KeyPrinciples />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Consent Withdrawal & Review Interactive Demo</div>
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
    details: { label: "Details", color: "bg-blue-100 text-blue-700" },
    "change-options": { label: "Change Options", color: "bg-purple-100 text-purple-700" },
    "withdraw-impact": { label: "Impact Review", color: "bg-orange-100 text-orange-700" },
    "withdraw-confirm": { label: "Confirm", color: "bg-red-100 text-red-700" },
    "withdraw-success": { label: "Withdrawn", color: "bg-green-100 text-green-700" },
    "change-success": { label: "Changed", color: "bg-green-100 text-green-700" },
    restricted: { label: "Restricted", color: "bg-red-100 text-red-700" },
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
  consents, 
  onViewDetails,
  onHelp 
}: { 
  consents: ConsentItem[];
  onViewDetails: (consent: ConsentItem) => void;
  onHelp: () => void;
}) {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1">
        <div className="bg-card px-8 py-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-green-700 rounded flex items-center justify-center flex-shrink-0">
              <Shield size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">Manage Your Consents</h2>
              <p className="text-sm text-muted-foreground">
                Review and manage data processing consents you've provided to government services
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Info Notice */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 flex items-start gap-3">
          <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-bold text-foreground mb-1 text-sm">Your Data, Your Control</h3>
            <p className="text-sm text-muted-foreground">
              You have the right to review and withdraw your consent for data processing. Some consents 
              cannot be withdrawn if they are legally required or tied to active services.
            </p>
          </div>
        </div>

        {/* Consent List */}
        <div className="space-y-4">
          <h3 className="font-bold text-foreground">Active Consents ({consents.length})</h3>
          
          {consents.map((consent) => (
            <ConsentCard
              key={consent.id}
              consent={consent}
              onViewDetails={() => onViewDetails(consent)}
            />
          ))}
        </div>

        {/* Help Link */}
        <div className="pt-4 text-center">
          <button
            onClick={onHelp}
            className="text-sm text-primary hover:underline flex items-center gap-1 mx-auto"
          >
            <HelpCircle size={16} />
            Understanding consent withdrawal
          </button>
        </div>

      </div>
    </>
  );
}

function ConsentCard({ 
  consent, 
  onViewDetails 
}: { 
  consent: ConsentItem;
  onViewDetails: () => void;
}) {
  return (
    <button
      onClick={onViewDetails}
      className="w-full bg-card border-2 border-border hover:border-primary rounded-lg p-6 text-left transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-bold text-foreground mb-1 group-hover:text-primary">{consent.service}</h4>
          <p className="text-sm text-muted-foreground">{consent.purpose}</p>
        </div>
        <ChevronRight size={20} className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
      </div>
      
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Clock size={14} />
          <span>Granted: {consent.dateGranted}</span>
        </div>
        {!consent.canWithdraw && (
          <div className="flex items-center gap-1 text-orange-700 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded px-2 py-1">
            <Lock size={12} />
            <span>Withdrawal restricted</span>
          </div>
        )}
      </div>
    </button>
  );
}

// ==================== DETAILS SCREEN ====================

function DetailsScreen({
  consent,
  onBack,
  onWithdraw,
  onChangeOptions
}: {
  consent: ConsentItem;
  onBack: () => void;
  onWithdraw: () => void;
  onChangeOptions: () => void;
}) {
  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back to all consents
        </button>
        <h2 className="text-2xl font-bold text-foreground mb-2">{consent.service}</h2>
        <p className="text-sm text-muted-foreground">{consent.purpose}</p>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Consent Details */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Consent Details
          </h3>
          <div className="space-y-3 text-sm">
            <DetailRow label="Service" value={consent.service} />
            <DetailRow label="Purpose" value={consent.purpose} />
            <DetailRow label="Date Granted" value={consent.dateGranted} />
            <DetailRow label="Status" value="Active" badge="success" />
          </div>
        </div>

        {/* Data Types */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Database size={20} className="text-muted-foreground" />
            Data Being Processed
          </h3>
          <div className="space-y-2">
            {consent.dataTypes.map((type, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Shield size={20} className="text-green-600" />
            Your Rights
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <RightItem text="View all data collected under this consent" />
            <RightItem text="Request correction of inaccurate data" />
            <RightItem text="Export your data in portable format" />
            {consent.canWithdraw && (
              <RightItem text="Withdraw this consent at any time" />
            )}
          </div>
        </div>

        {/* Warning if restricted */}
        {!consent.canWithdraw && (
          <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-bold text-orange-900 mb-1 text-sm">Withdrawal Restricted</h4>
              <p className="text-sm text-orange-800">{consent.restrictionReason}</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onChangeOptions}
            className="flex-1 px-6 py-4 border-2 border-primary bg-card text-primary font-bold rounded text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
          >
            <Edit size={18} />
            Modify Preferences
          </button>
          <button
            onClick={onWithdraw}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
              consent.canWithdraw
                ? 'border-2 border-red-600 bg-card text-red-700 hover:bg-red-50'
                : 'border-2 border-border bg-muted text-gray-500 cursor-not-allowed'
            }`}
          >
            <Trash2 size={18} />
            Withdraw Consent
          </button>
        </div>

      </div>
    </>
  );
}

function DetailRow({ label, value, badge }: { label: string; value: string; badge?: "success" | "warning" }) {
  return (
    <div className="flex items-start justify-between">
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-bold text-foreground">
        {badge ? (
          <span className={`px-2 py-1 rounded text-xs ${
            badge === "success" ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
          }`}>
            {value}
          </span>
        ) : (
          value
        )}
      </span>
    </div>
  );
}

function RightItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== CHANGE OPTIONS SCREEN ====================

function ChangeOptionsScreen({
  consent,
  onBack,
  onComplete
}: {
  consent: ConsentItem;
  onBack: () => void;
  onComplete: () => void;
}) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back to details
        </button>
        <h2 className="text-2xl font-bold text-foreground mb-2">Modify Consent Preferences</h2>
        <p className="text-sm text-muted-foreground">Adjust how your data is used for {consent.service}</p>
      </div>

      <div className="p-8 space-y-6">
        
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 flex items-start gap-3">
          <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Some data processing is required for the service to function. Optional preferences can be adjusted below.
          </p>
        </div>

        {/* Required Processing */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Required Data Processing</h3>
          <div className="space-y-3">
            <RequiredItem 
              text="Identity verification and authentication" 
              locked={true}
            />
            <RequiredItem 
              text="Service delivery and transaction processing" 
              locked={true}
            />
            <RequiredItem 
              text="Legal and regulatory compliance" 
              locked={true}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            These cannot be disabled as they are essential for service operation
          </p>
        </div>

        {/* Optional Preferences */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Optional Preferences</h3>
          <div className="space-y-4">
            <PreferenceToggle
              label="Service notifications and updates"
              description="Receive SMS/email about application status and service updates"
              checked={notificationsEnabled}
              onChange={setNotificationsEnabled}
            />
            <PreferenceToggle
              label="Surveys and feedback requests"
              description="Help improve government services by participating in surveys"
              checked={marketingEnabled}
              onChange={setMarketingEnabled}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onBack}
            className="px-6 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Cancel
          </button>
          <button
            onClick={onComplete}
            className="flex-1 px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            Save Preferences
          </button>
        </div>

      </div>
    </>
  );
}

function RequiredItem({ text, locked }: { text: string; locked: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 bg-background rounded">
      <span className="text-sm text-muted-foreground">{text}</span>
      {locked && (
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Lock size={14} />
          <span>Required</span>
        </div>
      )}
    </div>
  );
}

function PreferenceToggle({ 
  label, 
  description, 
  checked, 
  onChange 
}: { 
  label: string; 
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-4 cursor-pointer p-3 hover:bg-background rounded">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
      />
      <div className="flex-1">
        <div className="font-bold text-foreground text-sm mb-1">{label}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </label>
  );
}

// ==================== WITHDRAW IMPACT SCREEN ====================

function WithdrawImpactScreen({
  consent,
  understandImpact,
  onUnderstandChange,
  onBack,
  onProceed
}: {
  consent: ConsentItem;
  understandImpact: boolean;
  onUnderstandChange: (understood: boolean) => void;
  onBack: () => void;
  onProceed: () => void;
}) {
  return (
    <>
      <div className="bg-orange-100 border-b-2 border-orange-300 px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back to details
        </button>
        <h2 className="text-2xl font-bold text-foreground mb-2">Impact of Withdrawal</h2>
        <p className="text-sm text-muted-foreground">
          Understand what will happen if you withdraw consent for {consent.service}
        </p>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Warning */}
        <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle size={24} className="text-red-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-900 mb-2">Important: Read Before Proceeding</h3>
              <p className="text-sm text-red-800 leading-relaxed">
                Withdrawing consent will have significant impacts on your access to this service. 
                Please review all consequences carefully before making your decision.
              </p>
            </div>
          </div>
        </div>

        {/* What Will Happen */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <XCircle size={20} className="text-red-600" />
            What Will Happen
          </h3>
          <div className="space-y-3 text-sm">
            <ImpactItem
              type="negative"
              text="Your account for this service will be deactivated"
            />
            <ImpactItem
              type="negative"
              text="You will not receive any service updates or notifications"
            />
            <ImpactItem
              type="negative"
              text="Active applications or requests will be cancelled"
            />
            <ImpactItem
              type="negative"
              text="You will need to re-apply and provide consent again to use this service"
            />
          </div>
        </div>

        {/* What Will NOT Happen */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            What Will NOT Happen
          </h3>
          <div className="space-y-3 text-sm">
            <ImpactItem
              type="neutral"
              text="Historical records will be retained as per legal requirements (5 years)"
            />
            <ImpactItem
              type="neutral"
              text="Previously issued certificates or documents remain valid"
            />
            <ImpactItem
              type="neutral"
              text="Your identity verification on other government services is not affected"
            />
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Database size={20} className="text-primary" />
            Data Retention After Withdrawal
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Even after consent withdrawal, we are legally required to retain certain data for:
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <RetentionItem text="Audit and compliance purposes: 5 years" />
            <RetentionItem text="Fraud prevention and investigation: As needed" />
            <RetentionItem text="Legal disputes or ongoing proceedings: Duration of case" />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            All retained data will be marked as withdrawn and will not be used for any new processing
          </p>
        </div>

        {/* Understanding Checkbox */}
        <div className="bg-background border-2 border-border rounded-lg p-6">
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={understandImpact}
              onChange={(e) => onUnderstandChange(e.target.checked)}
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
            />
            <span className="text-sm text-foreground font-bold">
              I understand the consequences of withdrawing my consent and wish to proceed
            </span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onBack}
            className="flex-1 px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Keep My Consent Active
          </button>
          <button
            onClick={onProceed}
            disabled={!understandImpact}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-all ${
              understandImpact
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Proceed to Withdraw
          </button>
        </div>

      </div>
    </>
  );
}

function ImpactItem({ type, text }: { type: "negative" | "neutral"; text: string }) {
  return (
    <div className="flex items-start gap-3">
      {type === "negative" ? (
        <XCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
      ) : (
        <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
      )}
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function RetentionItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Clock size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== WITHDRAW CONFIRM SCREEN ====================

function WithdrawConfirmScreen({
  consent,
  confirmWithdrawal,
  onConfirmChange,
  onBack,
  onConfirm
}: {
  consent: ConsentItem;
  confirmWithdrawal: boolean;
  onConfirmChange: (confirmed: boolean) => void;
  onBack: () => void;
  onConfirm: () => void;
}) {
  return (
    <>
      <div className="bg-red-100 border-b-2 border-red-300 px-8 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Final Confirmation</h2>
        <p className="text-sm text-muted-foreground">
          This is your last chance to cancel before withdrawing consent
        </p>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Final Warning */}
        <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={24} className="text-red-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-900 mb-2">Final Warning</h3>
              <p className="text-sm text-red-800 leading-relaxed">
                Once you confirm, your consent for <span className="font-bold">{consent.service}</span> will 
                be immediately withdrawn. This action cannot be undone. You will need to re-apply and provide 
                consent again to use this service in the future.
              </p>
            </div>
          </div>
        </div>

        {/* What You're Withdrawing */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">You Are Withdrawing Consent For:</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service:</span>
              <span className="font-bold text-foreground">{consent.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Purpose:</span>
              <span className="font-bold text-foreground">{consent.purpose}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Originally Granted:</span>
              <span className="font-bold text-foreground">{consent.dateGranted}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Withdrawal Date:</span>
              <span className="font-bold text-foreground">April 9, 2026</span>
            </div>
          </div>
        </div>

        {/* Confirmation Required */}
        <div className="bg-background border-2 border-border rounded-lg p-6">
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={confirmWithdrawal}
              onChange={(e) => onConfirmChange(e.target.checked)}
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
            />
            <div className="flex-1">
              <span className="text-sm text-foreground font-bold block mb-2">
                I confirm that I want to withdraw my consent for {consent.service}
              </span>
              <span className="text-xs text-muted-foreground">
                I understand this will deactivate my account and cancel any active applications
              </span>
            </div>
          </label>
        </div>

        {/* Alternative Options */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info size={18} className="text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-bold text-foreground mb-1 text-sm">Not Sure?</h4>
              <p className="text-xs text-muted-foreground">
                Instead of withdrawing entirely, you can modify your consent preferences to limit how 
                your data is used while keeping the service active.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onBack}
            className="flex-1 px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Go Back
          </button>
          <button
            onClick={onConfirm}
            disabled={!confirmWithdrawal}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-all ${
              confirmWithdrawal
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Confirm Withdrawal
          </button>
        </div>

      </div>
    </>
  );
}

// ==================== WITHDRAW SUCCESS SCREEN ====================

function WithdrawSuccessScreen({ consent, onReset }: { consent: ConsentItem; onReset: () => void }) {
  return (
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Consent Withdrawn Successfully</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Your consent for <span className="font-bold">{consent.service}</span> has been withdrawn. 
          Your account has been deactivated and active applications have been cancelled.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            What Happens Next
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <NextStepItem text="Confirmation email sent to your registered email address" />
            <NextStepItem text="Service access deactivated immediately" />
            <NextStepItem text="Historical data retained for legal compliance (5 years)" />
            <NextStepItem text="No new data will be collected or processed" />
            <NextStepItem text="You can re-apply for this service anytime in the future" />
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
            <Bell size={20} className="text-orange-600" />
            Important Reminders
          </h3>
          <div className="space-y-2 text-sm text-orange-800">
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
              <span>Your withdrawal is effective immediately</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
              <span>To use this service again, you must re-register and provide consent</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
              <span>Previously issued documents remain valid unless otherwise specified</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onReset}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            Return to Consent Management
          </button>
          <button className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background">
            Download Withdrawal Confirmation
          </button>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Reference ID: WD-{consent.id}-{Date.now()}
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

// ==================== CHANGE SUCCESS SCREEN ====================

function ChangeSuccessScreen({ consent, onReset }: { consent: ConsentItem; onReset: () => void }) {
  return (
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Preferences Updated</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Your consent preferences for <span className="font-bold">{consent.service}</span> have been 
          successfully updated. Changes are effective immediately.
        </p>

        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle size={20} className="text-green-600" />
            Changes Applied
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <ChangeItem text="Service notifications and updates: Enabled" status="updated" />
            <ChangeItem text="Surveys and feedback requests: Disabled" status="updated" />
            <ChangeItem text="Core service functionality: Active (Required)" status="unchanged" />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3 text-left">
            <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to your registered email address. 
                You can modify these preferences anytime from your account settings.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onReset}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            Return to Consent Management
          </button>
        </div>
      </div>
    </div>
  );
}

function ChangeItem({ text, status }: { text: string; status: "updated" | "unchanged" }) {
  return (
    <div className="flex items-start justify-between">
      <span className="text-muted-foreground">{text}</span>
      <span className={`text-xs font-bold px-2 py-1 rounded ${
        status === "updated" ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'
      }`}>
        {status === "updated" ? "Updated" : "No change"}
      </span>
    </div>
  );
}

// ==================== RESTRICTED SCREEN ====================

function RestrictedScreen({
  consent,
  onBack,
  onHelp
}: {
  consent: ConsentItem;
  onBack: () => void;
  onHelp: () => void;
}) {
  return (
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Lock size={48} className="text-orange-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Withdrawal Not Available</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Consent for <span className="font-bold">{consent.service}</span> cannot be withdrawn at this time.
        </p>

        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
            <AlertTriangle size={20} className="text-orange-600" />
            Why Withdrawal is Restricted
          </h3>
          <p className="text-sm text-orange-800 leading-relaxed">
            {consent.restrictionReason}
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Your Options
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <OptionItem text="Complete or cancel your active application first" />
            <OptionItem text="Modify consent preferences without full withdrawal" />
            <OptionItem text="Contact support for special circumstances" />
            <OptionItem text="Wait until service completion to withdraw" />
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onBack}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            Return to Consent Details
          </button>
          <button
            onClick={onHelp}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

function OptionItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
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
            <h2 className="text-2xl font-bold text-foreground">Consent Withdrawal Help</h2>
            <p className="text-sm text-muted-foreground">Common questions about managing consent</p>
          </div>
        </div>

        <div className="space-y-6">
          <HelpItem
            question="Can I withdraw consent for any service?"
            answer="You can withdraw most consents, but some restrictions apply. If you have an active application or service in progress, withdrawal may cancel it. Some consents are legally required and cannot be withdrawn while using the service. You will always be informed if withdrawal is not possible."
          />
          <HelpItem
            question="What happens to my data after withdrawal?"
            answer="After withdrawal, no new data will be collected. However, we are legally required to retain historical data for 5 years for audit and compliance purposes. This data will be marked as withdrawn and will not be used for any new processing. You can request a copy of retained data at any time."
          />
          <HelpItem
            question="Can I use the service again after withdrawing consent?"
            answer="Yes, you can re-apply for the service at any time. You will need to go through the registration process again and provide fresh consent. Your previous history may help speed up the process, but you will start with a new application."
          />
          <HelpItem
            question="Will withdrawing one consent affect other services?"
            answer="No. Each service consent is independent. Withdrawing consent for one service does not affect your consents for other government services. However, if services are linked (like Aadhaar authentication), you may need to update multiple consents separately."
          />
          <HelpItem
            question="How long does withdrawal take effect?"
            answer="Consent withdrawal is immediate. Your service access will be deactivated within minutes. However, scheduled processes (like pending transactions) may complete before full termination. You will receive confirmation via email and SMS."
          />
          <HelpItem
            question="Can I modify consent instead of withdrawing?"
            answer="Yes! Before withdrawing completely, consider modifying your consent preferences. You can disable optional features like marketing communications while keeping the core service active. This gives you more control without losing service access."
          />
          <HelpItem
            question="What if I withdraw by mistake?"
            answer="Withdrawal is permanent and cannot be undone. However, you can immediately re-apply for the service. Depending on the service, you may need to go through verification again. To prevent mistakes, we require multiple confirmations before processing withdrawal."
          />
          <HelpItem
            question="How do I know which consents I can withdraw?"
            answer="In your consent summary, each consent will show whether withdrawal is available. Restricted consents will display a lock icon and explanation. Common restrictions include active applications, legal requirements, and ongoing service delivery."
          />
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg">
          <h3 className="font-bold text-foreground mb-3">Still Have Questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Contact our Data Protection Officer for personalized assistance with consent management.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-bold text-foreground">Email:</span>{' '}
              <a href="#" className="text-primary hover:underline">privacy@service.gov.in</a>
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
            Back to Consent Summary
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

// ==================== QUICK STATS ====================

function QuickStats({ consents }: { consents: ConsentItem[] }) {
  const totalConsents = consents.length;
  const withdrawableConsents = consents.filter(c => c.canWithdraw).length;
  const restrictedConsents = consents.filter(c => !c.canWithdraw).length;

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-primary text-white px-4 py-3">
        <h3 className="font-bold text-sm">Your Consents</h3>
      </div>
      <div className="p-4 space-y-4">
        <StatItem label="Total Active Consents" value={totalConsents.toString()} />
        <StatItem label="Can Be Withdrawn" value={withdrawableConsents.toString()} color="green" />
        <StatItem label="Withdrawal Restricted" value={restrictedConsents.toString()} color="orange" />
      </div>
    </div>
  );
}

function StatItem({ label, value, color }: { label: string; value: string; color?: "green" | "orange" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`font-bold text-lg ${
        color === "green" ? "text-green-600" :
        color === "orange" ? "text-orange-600" :
        "text-foreground"
      }`}>
        {value}
      </span>
    </div>
  );
}

// ==================== STATE EXPLAINER ====================

function StateExplainer({ currentState }: { currentState: FlowState }) {
  const explanations = {
    summary: "Overview of all active consents with options to view details or withdraw.",
    details: "Detailed view of specific consent showing data usage and available actions.",
    "change-options": "Modify consent preferences without full withdrawal.",
    "withdraw-impact": "Review consequences before withdrawing consent.",
    "withdraw-confirm": "Final confirmation step with explicit acknowledgment required.",
    "withdraw-success": "Consent successfully withdrawn with next steps guidance.",
    "change-success": "Preferences successfully updated and confirmed.",
    restricted: "Withdrawal not available due to active services or legal requirements.",
    help: "Comprehensive FAQ and support information about consent management."
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
        <PrincipleItem text="Transparent impact explanation" />
        <PrincipleItem text="Avoid accidental withdrawal" />
        <PrincipleItem text="Multiple confirmation steps" />
        <PrincipleItem text="Clear restriction reasons" />
        <PrincipleItem text="Data retention transparency" />
        <PrincipleItem text="Alternative options offered" />
        <PrincipleItem text="Immediate confirmation" />
        <PrincipleItem text="Comprehensive help support" />
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