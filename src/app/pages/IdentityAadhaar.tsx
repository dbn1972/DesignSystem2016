import { Link } from "react-router";
import { ArrowLeft, Shield, FileText, Check, Eye, Info, HelpCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function IdentityAadhaar() {
  const [step, setStep] = useState<"consent" | "enter" | "otp" | "success">("consent");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);

  const maskAadhaar = (num: string) => {
    if (num.length > 8) {
      return `XXXX XXXX ${num.slice(-4)}`;
    }
    return num;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/patterns/identity" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Identity Patterns</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            <span className="font-bold">Flow:</span> Aadhaar Authentication
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Prototype View - 8 columns */}
          <div className="col-span-8">
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden shadow-lg">
              {/* Tricolor Header */}
              <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 h-2"></div>
              
              {/* Government Header */}
              <div className="bg-card border-b-2 border-border px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                    <Shield size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-foreground">Digital India Portal</div>
                    <div className="text-sm text-muted-foreground">Government of India</div>
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="bg-muted border-b-2 border-border px-12 py-4">
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  <ProgressStep number={1} label="Consent" active={step === "consent"} completed={step !== "consent"} />
                  <div className={`flex-1 h-0.5 mx-2 ${step !== "consent" ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <ProgressStep number={2} label="Enter Aadhaar" active={step === "enter"} completed={step === "otp" || step === "success"} />
                  <div className={`flex-1 h-0.5 mx-2 ${step === "otp" || step === "success" ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <ProgressStep number={3} label="Verify OTP" active={step === "otp"} completed={step === "success"} />
                  <div className={`flex-1 h-0.5 mx-2 ${step === "success" ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <ProgressStep number={4} label="Complete" active={step === "success"} completed={false} />
                </div>
              </div>

              {/* Form Content */}
              <div className="px-12 py-10">
                <div className="max-w-2xl mx-auto">
                  
                  {/* Step 1: Consent */}
                  {step === "consent" && (
                    <div>
                      <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FileText size={40} className="text-indigo-600" />
                      </div>
                      <h1 className="text-3xl font-bold text-foreground mb-3 text-center">Aadhaar Authentication Consent</h1>
                      <p className="text-muted-foreground mb-8 text-center">
                        Read and accept the terms before proceeding with Aadhaar-based authentication
                      </p>

                      <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg mb-6">
                        <div className="flex items-start gap-3 mb-4">
                          <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-muted-foreground">
                            <div className="font-bold text-foreground mb-2">What is Aadhaar Authentication?</div>
                            <p>Aadhaar authentication verifies your identity using your 12-digit Aadhaar number and OTP sent to your registered mobile number. This is a secure method approved by UIDAI (Unique Identification Authority of India).</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-2 border-border rounded-lg p-6 mb-6 max-h-96 overflow-y-auto">
                        <h3 className="font-bold text-foreground mb-4">Terms and Conditions</h3>
                        <div className="space-y-4 text-sm text-muted-foreground">
                          <ConsentPoint text="I authorize the use of my Aadhaar number for authentication purposes" />
                          <ConsentPoint text="I understand that my Aadhaar details will be shared with UIDAI for verification" />
                          <ConsentPoint text="I confirm that the mobile number linked to my Aadhaar is accessible" />
                          <ConsentPoint text="I will receive an OTP on my Aadhaar-registered mobile number" />
                          <ConsentPoint text="My demographic information (name, date of birth, address) may be verified" />
                          <ConsentPoint text="This authentication complies with Aadhaar Act, 2016 and IT Act, 2000" />
                        </div>
                      </div>

                      <label className="flex items-start gap-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary hover:bg-blue-50 transition-colors mb-6">
                        <input
                          type="checkbox"
                          checked={consentGiven}
                          onChange={(e) => setConsentGiven(e.target.checked)}
                          className="w-5 h-5 mt-0.5"
                        />
                        <span className="text-sm text-foreground font-medium">
                          I have read and accept the terms and conditions for Aadhaar authentication
                        </span>
                      </label>

                      <button
                        onClick={() => setStep("enter")}
                        disabled={!consentGiven}
                        className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                      >
                        Proceed to Authentication
                      </button>
                    </div>
                  )}

                  {/* Step 2: Enter Aadhaar */}
                  {step === "enter" && (
                    <div>
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Shield size={40} className="text-primary" />
                      </div>
                      <h1 className="text-3xl font-bold text-foreground mb-3 text-center">Enter Aadhaar Number</h1>
                      <p className="text-muted-foreground mb-8 text-center">
                        Provide your 12-digit Aadhaar number for verification
                      </p>

                      <div className="mb-8">
                        <label htmlFor="aadhaar" className="block text-sm font-bold text-foreground mb-2">
                          Aadhaar Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="aadhaar"
                          value={aadhaarNumber}
                          onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
                          className="w-full px-4 py-4 border-2 border-border rounded-lg text-center text-2xl font-bold tracking-widest focus:border-primary focus:outline-none"
                          placeholder="XXXX XXXX XXXX"
                          maxLength={12}
                        />
                        <div className="text-sm text-muted-foreground mt-2">
                          <Info size={14} className="inline mr-1" />
                          Your Aadhaar number is encrypted and transmitted securely
                        </div>
                      </div>

                      <div className="p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg mb-8">
                        <div className="flex items-start gap-3">
                          <AlertTriangle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-muted-foreground">
                            <div className="font-bold text-foreground mb-2">Security Notice</div>
                            <ul className="space-y-1">
                              <li>• Never share your Aadhaar number on unsecured websites</li>
                              <li>• Verify the URL starts with https://</li>
                              <li>• Government services never ask for Aadhaar via email/SMS</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setStep("otp")}
                        disabled={aadhaarNumber.length !== 12}
                        className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                      >
                        Send OTP
                      </button>
                    </div>
                  )}

                  {/* Step 3: OTP Verification */}
                  {step === "otp" && (
                    <div>
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Shield size={40} className="text-green-600" />
                      </div>
                      <h1 className="text-3xl font-bold text-foreground mb-3 text-center">Verify OTP</h1>
                      <p className="text-muted-foreground mb-2 text-center">
                        OTP sent to mobile number linked with Aadhaar
                      </p>
                      <p className="text-lg font-bold text-foreground mb-8 text-center">
                        {maskAadhaar(aadhaarNumber)}
                      </p>

                      <div className="mb-8">
                        <label htmlFor="otp" className="block text-sm font-bold text-foreground mb-2">
                          Enter 6-Digit OTP <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                          className="w-full px-4 py-4 border-2 border-border rounded-lg text-center text-2xl font-bold tracking-widest focus:border-primary focus:outline-none"
                          placeholder="______"
                          maxLength={6}
                        />
                        <div className="text-sm text-muted-foreground mt-2">
                          Didn't receive OTP? <button className="text-primary font-bold hover:underline">Resend</button>
                        </div>
                      </div>

                      <button
                        onClick={() => setStep("success")}
                        disabled={otp.length !== 6}
                        className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                      >
                        Verify and Authenticate
                      </button>
                    </div>
                  )}

                  {/* Step 4: Success */}
                  {step === "success" && (
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-600" />
                      </div>
                      <h1 className="text-3xl font-bold text-foreground mb-3">Authentication Successful</h1>
                      <p className="text-muted-foreground mb-8">
                        Your identity has been verified successfully using Aadhaar
                      </p>

                      <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg mb-8 text-left">
                        <div className="font-bold text-foreground mb-3">Verified Details</div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <VerifiedDetail label="Name" value="As per Aadhaar" />
                          <VerifiedDetail label="Aadhaar" value={maskAadhaar(aadhaarNumber)} />
                          <VerifiedDetail label="Authentication" value="UIDAI Verified ✓" />
                          <VerifiedDetail label="Timestamp" value={new Date().toLocaleString()} />
                        </div>
                      </div>

                      <Link
                        to="/patterns/identity"
                        className="block w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors text-center"
                      >
                        Continue
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Help Card */}
              <div className="border-t-2 border-border bg-background px-12 py-6">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground mb-2">Need Help with Aadhaar?</div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>UIDAI Helpline: <span className="font-bold">1947</span> (Toll-Free)</p>
                        <p>Portal Support: <span className="font-bold">1800-XXX-XXXX</span></p>
                        <p className="text-muted-foreground">Available 24x7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Sidebar */}
          <aside className="col-span-4 space-y-6">
            <PatternInfo />
            <ConsentRequirements />
            <SecurityNotes />
            <LegalCompliance />
          </aside>

        </div>
      </main>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function ProgressStep({ number, label, active, completed }: { number: number; label: string; active: boolean; completed: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 ${
        completed
          ? 'bg-green-500 border-green-500 text-white'
          : active
          ? 'bg-primary border-primary text-white'
          : 'bg-card border-border text-gray-400'
      }`}>
        {completed ? <Check size={18} /> : number}
      </div>
      <div className={`text-xs font-medium ${active ? 'text-foreground' : 'text-gray-500'}`}>{label}</div>
    </div>
  );
}

function ConsentPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function VerifiedDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-bold text-muted-foreground">{label}:</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function PatternInfo() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground">Pattern Info</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <InfoRow label="Pattern ID" value="UX4G-PAT-009-07" />
        <InfoRow label="Status" value="Stable" badge="green" />
        <InfoRow label="Complexity" value="High" />
        <InfoRow label="Category" value="Authentication" />
        <InfoRow label="Version" value="1.0.0" />
      </div>
    </div>
  );
}

function ConsentRequirements() {
  return (
    <div className="border-2 border-blue-200 rounded-lg overflow-hidden bg-blue-50">
      <div className="bg-blue-100 border-b-2 border-blue-200 px-4 py-3">
        <h3 className="font-bold text-foreground">Consent Required</h3>
      </div>
      <div className="p-4 space-y-2 text-sm text-muted-foreground">
        <ConsentItem text="Explicit consent before collection" />
        <ConsentItem text="Clear explanation of data use" />
        <ConsentItem text="User must actively accept terms" />
        <ConsentItem text="Right to withdraw consent" />
        <ConsentItem text="Audit trail of consent" />
      </div>
    </div>
  );
}

function SecurityNotes() {
  return (
    <div className="border-2 border-red-200 rounded-lg overflow-hidden bg-red-50">
      <div className="bg-red-100 border-b-2 border-red-200 px-4 py-3">
        <h3 className="font-bold text-foreground">Security</h3>
      </div>
      <div className="p-4 space-y-2 text-sm text-muted-foreground">
        <SecurityItem text="256-bit SSL/TLS encryption" />
        <SecurityItem text="Aadhaar number never stored" />
        <SecurityItem text="OTP sent via UIDAI gateway" />
        <SecurityItem text="Tokenized authentication" />
        <SecurityItem text="Logging and monitoring" />
      </div>
    </div>
  );
}

function LegalCompliance() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground">Legal Compliance</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <LegalItem
          title="Aadhaar Act, 2016"
          description="Complies with all provisions and amendments"
        />
        <LegalItem
          title="IT Act, 2000"
          description="Follows information security standards"
        />
        <LegalItem
          title="UIDAI Guidelines"
          description="Adheres to authentication protocols"
        />
      </div>
    </div>
  );
}

// Helper Components
function InfoRow({ label, value, badge }: { label: string; value: string; badge?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      {badge ? (
        <span className={`px-2 py-0.5 ${badge === 'green' ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'} text-xs font-bold rounded-full`}>
          {value}
        </span>
      ) : (
        <span className="font-bold text-foreground">{value}</span>
      )}
    </div>
  );
}

function ConsentItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function SecurityItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Shield size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function LegalItem({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <div className="font-bold text-foreground mb-1">{title}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
}
