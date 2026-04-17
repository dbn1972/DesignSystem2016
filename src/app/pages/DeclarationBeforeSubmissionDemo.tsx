import { useState } from "react";
import { Link } from "react-router";
import { FileText, CheckCircle, AlertCircle, Info, ChevronRight, HelpCircle, ArrowLeft, Shield, Check, X, AlertTriangle, Eye, Lock, User, Calendar, Phone, Mail, MapPin, Upload, Edit } from "lucide-react";

type FlowState = 
  | "review" 
  | "declaration-unchecked"
  | "declaration-checked"
  | "blocked-submit"
  | "successful-submission"
  | "help";

type ApplicationData = {
  applicantName: string;
  fatherName: string;
  dateOfBirth: string;
  gender: string;
  category: string;
  mobile: string;
  email: string;
  address: string;
  state: string;
  district: string;
  pincode: string;
  courseName: string;
  institutionName: string;
  annualIncome: string;
  bankAccount: string;
  ifscCode: string;
  documentsUploaded: string[];
};

const mockApplicationData: ApplicationData = {
  applicantName: "Priya Sharma",
  fatherName: "Rajesh Sharma",
  dateOfBirth: "15/08/2004",
  gender: "Female",
  category: "General",
  mobile: "+91 98765 43210",
  email: "priya.sharma@example.com",
  address: "Plot No. 45, Sector 12",
  state: "Maharashtra",
  district: "Mumbai",
  pincode: "400001",
  courseName: "B.Tech Computer Science",
  institutionName: "Indian Institute of Technology, Mumbai",
  annualIncome: "₹3,50,000",
  bankAccount: "XXXX XXXX XXXX 4567",
  ifscCode: "SBIN0001234",
  documentsUploaded: [
    "Aadhaar Card",
    "Class 12th Marksheet",
    "Income Certificate",
    "Bank Passbook",
    "Admission Letter"
  ]
};

export default function DeclarationBeforeSubmissionDemo() {
  const [flowState, setFlowState] = useState<FlowState>("review");
  const [declarationAccepted, setDeclarationAccepted] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const resetDemo = () => {
    setFlowState("review");
    setDeclarationAccepted(false);
    setApplicationId("");
  };

  const handleProceedToDeclaration = () => {
    setFlowState(declarationAccepted ? "declaration-checked" : "declaration-unchecked");
  };

  const handleSubmit = () => {
    if (!declarationAccepted) {
      setFlowState("blocked-submit");
    } else {
      // Generate application ID
      const id = `NSP-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      setApplicationId(id);
      setFlowState("successful-submission");
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
                <div className="w-16 h-16 bg-green-100 border-2 border-green-300 rounded flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-700" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Interactive Pattern Demo</div>
                  <h1 className="text-3xl font-bold text-foreground">Declaration Before Submission Flow</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Interactive demonstration of pre-submission declaration pattern. Shows how to present a final 
                review screen, collect declaration acknowledgment, and ensure users confirm accuracy before 
                submitting applications or forms to government services.
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
              
              {flowState === "review" && (
                <ReviewScreen 
                  applicationData={mockApplicationData}
                  onProceedToDeclaration={handleProceedToDeclaration}
                />
              )}

              {(flowState === "declaration-unchecked" || flowState === "declaration-checked") && (
                <DeclarationScreen
                  applicationData={mockApplicationData}
                  declarationAccepted={declarationAccepted}
                  onDeclarationChange={setDeclarationAccepted}
                  onSubmit={handleSubmit}
                  onBack={() => setFlowState("review")}
                  onHelp={() => setFlowState("help")}
                  isChecked={flowState === "declaration-checked"}
                />
              )}

              {flowState === "blocked-submit" && (
                <BlockedSubmitScreen
                  onBack={() => {
                    setFlowState("declaration-unchecked");
                  }}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "successful-submission" && (
                <SuccessfulSubmissionScreen
                  applicationId={applicationId}
                  applicationData={mockApplicationData}
                  onReset={resetDemo}
                />
              )}

              {flowState === "help" && (
                <HelpScreen 
                  onBack={() => {
                    if (declarationAccepted) {
                      setFlowState("declaration-checked");
                    } else {
                      setFlowState("declaration-unchecked");
                    }
                  }} 
                />
              )}

            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <div className="col-span-4 space-y-6">
            <ApplicationInfo />
            <StateExplainer currentState={flowState} />
            <DeclarationPurpose />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Declaration Before Submission Interactive Demo</div>
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
    review: { label: "Review", color: "bg-blue-100 text-blue-700" },
    "declaration-unchecked": { label: "Unchecked", color: "bg-muted text-muted-foreground" },
    "declaration-checked": { label: "Checked", color: "bg-green-100 text-green-700" },
    "blocked-submit": { label: "Blocked", color: "bg-red-100 text-red-700" },
    "successful-submission": { label: "Submitted", color: "bg-green-100 text-green-700" },
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

// ==================== REVIEW SCREEN ====================

function ReviewScreen({ 
  applicationData,
  onProceedToDeclaration
}: { 
  applicationData: ApplicationData;
  onProceedToDeclaration: () => void;
}) {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1">
        <div className="bg-card px-8 py-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-700 rounded flex items-center justify-center flex-shrink-0">
              <Eye size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">Review Your Application</h2>
              <p className="text-sm text-muted-foreground">
                National Scholarship Portal • Post-Matric Scholarship Application
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Instruction */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 flex items-start gap-3">
          <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-1 text-sm">Please Review Carefully</h4>
            <p className="text-sm text-muted-foreground">
              Please review all information below carefully. After proceeding, you will be asked to make a 
              declaration confirming the accuracy of this information before final submission.
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User size={20} className="text-muted-foreground" />
              <h3 className="font-bold text-foreground">Personal Information</h3>
            </div>
            <button className="text-sm text-primary font-bold hover:underline flex items-center gap-1">
              <Edit size={14} />
              Edit
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <ReviewField label="Applicant Name" value={applicationData.applicantName} />
              <ReviewField label="Father's Name" value={applicationData.fatherName} />
              <ReviewField label="Date of Birth" value={applicationData.dateOfBirth} />
              <ReviewField label="Gender" value={applicationData.gender} />
              <ReviewField label="Category" value={applicationData.category} />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-muted-foreground" />
              <h3 className="font-bold text-foreground">Contact Information</h3>
            </div>
            <button className="text-sm text-primary font-bold hover:underline flex items-center gap-1">
              <Edit size={14} />
              Edit
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <ReviewField label="Mobile Number" value={applicationData.mobile} />
              <ReviewField label="Email Address" value={applicationData.email} />
              <div className="col-span-2">
                <ReviewField label="Address" value={applicationData.address} />
              </div>
              <ReviewField label="State" value={applicationData.state} />
              <ReviewField label="District" value={applicationData.district} />
              <ReviewField label="PIN Code" value={applicationData.pincode} />
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-muted-foreground" />
              <h3 className="font-bold text-foreground">Academic Information</h3>
            </div>
            <button className="text-sm text-primary font-bold hover:underline flex items-center gap-1">
              <Edit size={14} />
              Edit
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-4">
              <ReviewField label="Course Name" value={applicationData.courseName} />
              <ReviewField label="Institution Name" value={applicationData.institutionName} />
            </div>
          </div>
        </div>

        {/* Financial Information */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock size={20} className="text-muted-foreground" />
              <h3 className="font-bold text-foreground">Financial Information</h3>
            </div>
            <button className="text-sm text-primary font-bold hover:underline flex items-center gap-1">
              <Edit size={14} />
              Edit
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <ReviewField label="Annual Family Income" value={applicationData.annualIncome} />
              <ReviewField label="Bank Account Number" value={applicationData.bankAccount} />
              <ReviewField label="IFSC Code" value={applicationData.ifscCode} />
            </div>
          </div>
        </div>

        {/* Documents Uploaded */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Upload size={20} className="text-muted-foreground" />
              <h3 className="font-bold text-foreground">Documents Uploaded</h3>
            </div>
            <button className="text-sm text-primary font-bold hover:underline flex items-center gap-1">
              <Edit size={14} />
              Edit
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-2">
              {applicationData.documentsUploaded.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-foreground">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-bold text-orange-900 mb-1 text-sm">Next Step: Declaration</h4>
            <p className="text-sm text-orange-800 mb-4">
              After reviewing your information, you will be asked to make a declaration confirming the 
              accuracy of the details provided before final submission.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <button className="px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background">
            Save as Draft
          </button>
          <button
            onClick={onProceedToDeclaration}
            className="flex-1 px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors"
          >
            Proceed to Declaration
          </button>
        </div>

      </div>
    </>
  );
}

function ReviewField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-muted-foreground mb-1">{label}</div>
      <div className="text-sm font-bold text-foreground">{value}</div>
    </div>
  );
}

// ==================== DECLARATION SCREEN ====================

function DeclarationScreen({
  applicationData,
  declarationAccepted,
  onDeclarationChange,
  onSubmit,
  onBack,
  onHelp,
  isChecked
}: {
  applicationData: ApplicationData;
  declarationAccepted: boolean;
  onDeclarationChange: (accepted: boolean) => void;
  onSubmit: () => void;
  onBack: () => void;
  onHelp: () => void;
  isChecked: boolean;
}) {
  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back to Review
        </button>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-green-700 rounded flex items-center justify-center flex-shrink-0">
            <FileText size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">Declaration and Submission</h2>
            <p className="text-sm text-muted-foreground">
              National Scholarship Portal • Post-Matric Scholarship Application
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Application Summary */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
          <h3 className="font-bold text-foreground mb-3 text-sm">Application Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Applicant Name:</span>
              <div className="font-bold text-foreground">{applicationData.applicantName}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Course:</span>
              <div className="font-bold text-foreground">{applicationData.courseName}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Institution:</span>
              <div className="font-bold text-foreground">{applicationData.institutionName}</div>
            </div>
          </div>
        </div>

        {/* Declaration Statement */}
        <div className="bg-card border-2 border-border rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <Shield size={24} className="text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold text-foreground mb-2">Declaration Statement</h3>
              <p className="text-sm text-muted-foreground">
                Please read the following declaration carefully before submitting your application.
              </p>
            </div>
          </div>

          <div className="bg-background border-2 border-border rounded-lg p-5 space-y-4">
            
            <div className="space-y-3">
              <DeclarationPoint
                number="1"
                text="I declare that all information provided in this application is true, complete, and accurate to the best of my knowledge."
              />
              <DeclarationPoint
                number="2"
                text="I understand that any false or misleading information may result in rejection of my application or cancellation of scholarship if already awarded."
              />
              <DeclarationPoint
                number="3"
                text="I confirm that I have uploaded genuine and unaltered documents as proof of the information provided."
              />
              <DeclarationPoint
                number="4"
                text="I authorize the concerned authorities to verify the information and documents submitted with relevant institutions and agencies."
              />
              <DeclarationPoint
                number="5"
                text="I agree to comply with all terms and conditions of the scholarship scheme and government regulations."
              />
              <DeclarationPoint
                number="6"
                text="I understand that submission of false information may lead to legal action under applicable Indian laws."
              />
            </div>

          </div>
        </div>

        {/* What This Means */}
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-5">
          <h4 className="font-bold text-foreground mb-3 text-sm flex items-center gap-2">
            <Info size={18} className="text-green-600" />
            What This Declaration Means
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>You take personal responsibility for the accuracy of all information provided</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>You give permission for verification of submitted information and documents</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>You commit to following scholarship scheme rules and government regulations</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>You acknowledge that false information can have serious legal consequences</span>
            </div>
          </div>
        </div>

        {/* Acceptance Checkbox */}
        <div className={`border-2 rounded-lg p-6 transition-all ${
          !declarationAccepted && isChecked ? 'border-red-300 bg-red-50' : 'border-border bg-background'
        }`}>
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={declarationAccepted}
              onChange={(e) => onDeclarationChange(e.target.checked)}
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded"
              aria-describedby="declaration-description"
            />
            <div className="flex-1">
              <span className="text-sm text-foreground font-bold block mb-2" id="declaration-description">
                I accept this declaration and confirm the accuracy of my application
              </span>
              <span className="text-xs text-muted-foreground">
                By checking this box, I confirm that I have read and understood the declaration above, and 
                I affirm that all information provided in my application is true and complete. I understand 
                the legal implications of submitting false information.
              </span>
            </div>
          </label>
        </div>

        {/* Help Link */}
        <div className="text-center">
          <button
            onClick={onHelp}
            className="text-sm text-primary font-bold hover:underline inline-flex items-center gap-1"
          >
            <HelpCircle size={16} />
            Not sure about the declaration? Get help
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onBack}
            className="px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Back to Review
          </button>
          <button
            onClick={onSubmit}
            disabled={!declarationAccepted}
            className={`flex-1 px-6 py-4 rounded font-bold text-sm transition-all flex items-center justify-center gap-2 ${
              declarationAccepted
                ? 'bg-green-700 text-white hover:bg-green-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <CheckCircle size={18} />
            Submit Application
          </button>
        </div>

        {!declarationAccepted && (
          <p className="text-xs text-muted-foreground text-center">
            You must accept the declaration to submit your application
          </p>
        )}

      </div>
    </>
  );
}

function DeclarationPoint({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
        {number}
      </div>
      <p className="text-sm text-foreground flex-1">{text}</p>
    </div>
  );
}

// ==================== BLOCKED SUBMIT SCREEN ====================

function BlockedSubmitScreen({
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
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Declaration Required</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          You must accept the declaration before you can submit your scholarship application. This is a 
          required step to confirm the accuracy and authenticity of the information you have provided.
        </p>

        <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle size={20} className="text-red-600" />
            Why Declaration is Required
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <RequirementItem text="Legal Accountability: Establishes your responsibility for information accuracy" />
            <RequirementItem text="Fraud Prevention: Deters submission of false or misleading information" />
            <RequirementItem text="Verification Rights: Gives authorities permission to verify your claims" />
            <RequirementItem text="Compliance: Ensures you understand and accept scholarship terms and conditions" />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            What Happens When You Accept
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Your application will be submitted for processing</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span>You will receive a confirmation with application ID</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Authorities may verify your information with relevant institutions</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span>You will be notified of your application status via SMS and email</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onBack}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            Go Back and Accept Declaration
          </button>
          <button
            onClick={onHelp}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Learn More About Declaration
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

// ==================== SUCCESSFUL SUBMISSION SCREEN ====================

function SuccessfulSubmissionScreen({
  applicationId,
  applicationData,
  onReset
}: {
  applicationId: string;
  applicationData: ApplicationData;
  onReset: () => void;
}) {
  return (
    <div className="p-12">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3 text-center">Application Submitted Successfully</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed text-center">
          Your scholarship application has been submitted successfully. You will receive updates about your 
          application status via SMS and email.
        </p>

        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-foreground mb-4 text-center">Application Details</h3>
          <div className="space-y-3">
            <div className="bg-card border-2 border-green-300 rounded p-4 text-center">
              <div className="text-xs text-muted-foreground mb-1">Application ID</div>
              <div className="text-lg font-bold text-foreground font-mono">{applicationId}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Save this ID for tracking your application
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-card border-2 border-border rounded p-3">
                <span className="text-muted-foreground block mb-1">Applicant Name:</span>
                <div className="font-bold text-foreground">{applicationData.applicantName}</div>
              </div>
              <div className="bg-card border-2 border-border rounded p-3">
                <span className="text-muted-foreground block mb-1">Submission Date:</span>
                <div className="font-bold text-foreground">April 9, 2026</div>
              </div>
              <div className="col-span-2 bg-card border-2 border-border rounded p-3">
                <span className="text-muted-foreground block mb-1">Course:</span>
                <div className="font-bold text-foreground">{applicationData.courseName}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            What Happens Next
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <NextStep
              step="1"
              title="Document Verification"
              description="Your documents will be verified by the nodal officer within 7 working days"
            />
            <NextStep
              step="2"
              title="Eligibility Check"
              description="Your eligibility will be assessed based on scheme criteria"
            />
            <NextStep
              step="3"
              title="Approval Process"
              description="If eligible, your application will be forwarded for final approval"
            />
            <NextStep
              step="4"
              title="Disbursement"
              description="Upon approval, scholarship amount will be disbursed to your bank account"
            />
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-5 mb-8">
          <h4 className="font-bold text-orange-900 mb-3 text-sm flex items-center gap-2">
            <AlertCircle size={18} className="text-orange-600" />
            Important Reminders
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
              <span>Check your email and SMS regularly for application updates</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
              <span>You can track your application status using the Application ID</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
              <span>Processing typically takes 15-30 working days</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
              <span>You may be contacted if additional information or documents are needed</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90">
            Track Application Status
          </button>
          <button className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background">
            Download Application Receipt
          </button>
          <button className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background">
            View Application Details
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

function NextStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 pb-3 border-b border-blue-200 dark:border-blue-800 last:border-0 last:pb-0">
      <div className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
        {step}
      </div>
      <div className="flex-1">
        <div className="font-bold text-foreground mb-1">{title}</div>
        <div className="text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

// ==================== HELP SCREEN ====================

function HelpScreen({ onBack }: { onBack: () => void }) {
  return (
    <>
      <div className="bg-orange-100 border-b-2 border-orange-300 px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back to Declaration
        </button>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-orange-600 rounded flex items-center justify-center flex-shrink-0">
            <HelpCircle size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">Help with Declaration</h2>
            <p className="text-sm text-muted-foreground">
              Understanding the declaration and what it means for your application
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            What is a Declaration?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            A declaration is a formal statement where you confirm that all information you have provided 
            in your application is true and accurate. It is a legal requirement for government scholarship 
            applications.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            By making this declaration, you take personal responsibility for the accuracy of your application 
            and give authorities permission to verify the information you have submitted.
          </p>
        </div>

        <div className="bg-card border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Understanding Each Declaration Point</h3>
          <div className="space-y-4">
            <HelpPoint
              number="1"
              title="Information Accuracy"
              explanation="You confirm that every detail in your application (name, address, income, documents) is correct and complete. Double-check all information before proceeding."
            />
            <HelpPoint
              number="2"
              title="Consequences of False Information"
              explanation="If any information is found to be false or misleading, your application may be rejected. If you've already received the scholarship, it may be cancelled and you may have to return the amount."
            />
            <HelpPoint
              number="3"
              title="Document Authenticity"
              explanation="All documents you uploaded (certificates, income proof, etc.) must be genuine and unaltered. Fake or tampered documents can lead to serious legal consequences."
            />
            <HelpPoint
              number="4"
              title="Verification Permission"
              explanation="You give authorities permission to contact your institution, employer, or other agencies to verify the information you provided."
            />
            <HelpPoint
              number="5"
              title="Terms Compliance"
              explanation="You agree to follow all rules of the scholarship scheme, including academic performance requirements, usage restrictions, and reporting obligations."
            />
            <HelpPoint
              number="6"
              title="Legal Implications"
              explanation="Submitting false information can result in legal action under Indian laws, including criminal prosecution for fraud or forgery."
            />
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle size={20} className="text-green-600" />
            Before You Accept the Declaration
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <CheckItem text="Review all information in your application carefully" />
            <CheckItem text="Ensure all documents uploaded are genuine and match the information provided" />
            <CheckItem text="Verify that your contact details (mobile, email) are correct for receiving updates" />
            <CheckItem text="Make sure you understand the scholarship scheme terms and conditions" />
            <CheckItem text="Check that your bank account details are accurate for scholarship disbursement" />
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-6">
          <h3 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
            <AlertTriangle size={20} className="text-orange-600" />
            Common Concerns Addressed
          </h3>
          <div className="space-y-4">
            <Concern
              question="What if I made a mistake in my application?"
              answer="If you notice an error before submitting, go back and correct it now. After submission, you may need to contact the nodal officer to request corrections."
            />
            <Concern
              question="Can I modify my application after accepting the declaration?"
              answer="Once you accept the declaration and submit, you cannot modify the application. However, you may be able to submit corrections through the official correction process if needed."
            />
            <Concern
              question="What if I'm not sure about some information?"
              answer="Do not proceed if you're uncertain. Verify the information first. Contact the helpline for guidance. It's better to delay submission than to provide incorrect information."
            />
          </div>
        </div>

        <div className="bg-background border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Need More Help?</h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-bold text-foreground block mb-1">National Scholarship Portal Helpline:</span>
              <div className="text-muted-foreground">Phone: 0120-6619540 (10 AM - 6 PM, Monday to Friday)</div>
              <div className="text-muted-foreground">Email: helpdesk@nsp.gov.in</div>
            </div>
            <div>
              <span className="font-bold text-foreground block mb-1">State Nodal Officer:</span>
              <div className="text-muted-foreground">Contact details available in your state's scholarship portal</div>
            </div>
          </div>
        </div>

        <button
          onClick={onBack}
          className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
        >
          Back to Declaration
        </button>

      </div>
    </>
  );
}

function HelpPoint({ number, title, explanation }: { number: string; title: string; explanation: string }) {
  return (
    <div className="pb-4 border-b border-border last:border-0 last:pb-0">
      <div className="flex items-start gap-3 mb-2">
        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
          {number}
        </div>
        <h4 className="font-bold text-foreground">{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground ml-9">{explanation}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function Concern({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <div className="font-bold text-foreground mb-1 text-sm">{question}</div>
      <p className="text-sm text-muted-foreground">{answer}</p>
    </div>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function ApplicationInfo() {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
        <FileText size={18} className="text-muted-foreground" />
        Pattern Overview
      </h3>
      <div className="space-y-3 text-sm text-muted-foreground">
        <div>
          <span className="font-bold text-foreground block mb-1">Purpose:</span>
          <span>Pre-submission declaration confirming information accuracy</span>
        </div>
        <div>
          <span className="font-bold text-foreground block mb-1">Context:</span>
          <span>Scholarship application final submission</span>
        </div>
        <div>
          <span className="font-bold text-foreground block mb-1">Required:</span>
          <span>Yes, blocking behavior until accepted</span>
        </div>
      </div>
    </div>
  );
}

function StateExplainer({ currentState }: { currentState: FlowState }) {
  const stateDescriptions = {
    review: {
      title: "Review State",
      description: "User reviews all application information before proceeding to declaration. All sections are editable at this stage."
    },
    "declaration-unchecked": {
      title: "Declaration Unchecked",
      description: "Declaration is presented but not yet accepted. Submit button is disabled until declaration is checked."
    },
    "declaration-checked": {
      title: "Declaration Checked",
      description: "User has accepted the declaration. Submit button is now enabled and application can be submitted."
    },
    "blocked-submit": {
      title: "Blocked Submit",
      description: "User attempted to submit without accepting declaration. Error state explains why submission is blocked."
    },
    "successful-submission": {
      title: "Successful Submission",
      description: "Application submitted successfully. User receives confirmation with application ID and next steps."
    },
    help: {
      title: "Help State",
      description: "Detailed explanation of declaration requirements, each point's meaning, and guidance for users."
    }
  };

  const state = stateDescriptions[currentState];

  return (
    <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-3 text-sm flex items-center gap-2">
        <Info size={18} className="text-primary" />
        Current State
      </h3>
      <div className="space-y-2">
        <div className="font-bold text-foreground">{state.title}</div>
        <p className="text-sm text-muted-foreground">{state.description}</p>
      </div>
    </div>
  );
}

function DeclarationPurpose() {
  return (
    <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-4 text-sm flex items-center gap-2">
        <Shield size={18} className="text-green-600" />
        Declaration Purpose
      </h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <PurposeItem text="Legal accountability for information accuracy" />
        <PurposeItem text="Fraud prevention and deterrence" />
        <PurposeItem text="Permission for verification" />
        <PurposeItem text="Compliance confirmation" />
      </div>
    </div>
  );
}

function PurposeItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}