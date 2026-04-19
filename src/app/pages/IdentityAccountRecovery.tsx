import { Link } from "react-router";
import { ArrowLeft, Shield, RefreshCw, Phone, Mail, User, Calendar, MapPin, FileText, Check, X, Info, HelpCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function IdentityAccountRecovery() {
  const [step, setStep] = useState<"locked" | "identity" | "verify" | "documents" | "review" | "success">("locked");
  const [recoveryData, setRecoveryData] = useState({
    fullName: "",
    dob: "",
    mobile: "",
    email: "",
    address: "",
    documentType: "",
    documentNumber: ""
  });

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
            <span className="font-bold">Flow:</span> Account Recovery
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
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
              <div className="bg-muted border-b-2 border-border px-4 sm:px-8 lg:px-12 py-4">
                <div className="flex items-center justify-between max-w-3xl mx-auto">
                  <RecoveryStep number={1} label="Account Status" active={step === "locked"} completed={step !== "locked"} />
                  <div className={`flex-1 h-0.5 mx-2 ${step !== "locked" ? 'bg-green-50 dark:bg-green-900/200' : 'bg-muted'}`}></div>
                  <RecoveryStep number={2} label="Verify Identity" active={step === "identity" || step === "verify"} completed={step === "documents" || step === "review" || step === "success"} />
                  <div className={`flex-1 h-0.5 mx-2 ${step === "documents" || step === "review" || step === "success" ? 'bg-green-50 dark:bg-green-900/200' : 'bg-muted'}`}></div>
                  <RecoveryStep number={3} label="Submit Proof" active={step === "documents"} completed={step === "review" || step === "success"} />
                  <div className={`flex-1 h-0.5 mx-2 ${step === "review" || step === "success" ? 'bg-green-50 dark:bg-green-900/200' : 'bg-muted'}`}></div>
                  <RecoveryStep number={4} label="Review" active={step === "review"} completed={step === "success"} />
                </div>
              </div>

              {/* Form Content */}
              <div className="px-4 sm:px-8 lg:px-12 py-10">
                <div className="max-w-2xl mx-auto">
                  {/* Step 1: Account Locked Notice */}
                  {step === "locked" && (
                    <div>
                      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertTriangle size={40} className="text-red-600" />
                      </div>
                      <h1 className="text-3xl font-bold text-foreground mb-3 text-center">Account Recovery Required</h1>
                      <p className="text-muted-foreground mb-8 text-center">
                        Your account has been locked due to multiple failed login attempts or security concerns. 
                        Follow the recovery process to regain access.
                      </p>

                      <div className="p-6 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg mb-8">
                        <div className="flex items-start gap-3">
                          <Info size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm">
                            <div className="font-bold text-foreground mb-2">Why is my account locked?</div>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• Multiple failed login attempts (5 or more)</li>
                              <li>• Suspicious activity detected</li>
                              <li>• Password reset attempts exceeded limit</li>
                              <li>• Account inactive for extended period (2+ years)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3 p-4 border-2 border-border rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-blue-700">1</span>
                          </div>
                          <div>
                            <div className="font-bold text-foreground mb-1">Verify Your Identity</div>
                            <div className="text-sm text-muted-foreground">Provide personal information to confirm your identity</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 border-2 border-border rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-blue-700">2</span>
                          </div>
                          <div>
                            <div className="font-bold text-foreground mb-1">Submit Supporting Documents</div>
                            <div className="text-sm text-muted-foreground">Upload government ID proof for verification</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 border-2 border-border rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-blue-700">3</span>
                          </div>
                          <div>
                            <div className="font-bold text-foreground mb-1">Wait for Manual Review</div>
                            <div className="text-sm text-muted-foreground">Our team will verify and unlock your account within 3-5 business days</div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setStep("identity")}
                        className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors"
                      >
                        Start Recovery Process
                      </button>
                    </div>
                  )}

                  {/* Step 2: Identity Verification */}
                  {step === "identity" && (
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-3">Verify Your Identity</h1>
                      <p className="text-muted-foreground mb-8">
                        Enter your account details exactly as registered. This helps us verify your identity.
                      </p>

                      <form className="space-y-6">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-bold text-foreground mb-2">
                            Full Name <span className="text-red-600">*</span>
                          </label>
                          <div className="relative">
                            <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                              type="text"
                              id="fullName"
                              value={recoveryData.fullName}
                              onChange={(e) => setRecoveryData({ ...recoveryData, fullName: e.target.value })}
                              className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg"
                              placeholder="Enter full name as per Aadhaar"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="dob" className="block text-sm font-bold text-foreground mb-2">
                            Date of Birth <span className="text-red-600">*</span>
                          </label>
                          <div className="relative">
                            <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                              type="date"
                              id="dob"
                              value={recoveryData.dob}
                              onChange={(e) => setRecoveryData({ ...recoveryData, dob: e.target.value })}
                              className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="mobile" className="block text-sm font-bold text-foreground mb-2">
                            Registered Mobile Number <span className="text-red-600">*</span>
                          </label>
                          <div className="relative">
                            <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                              type="tel"
                              id="mobile"
                              value={recoveryData.mobile}
                              onChange={(e) => setRecoveryData({ ...recoveryData, mobile: e.target.value })}
                              className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg"
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                            Registered Email Address <span className="text-red-600">*</span>
                          </label>
                          <div className="relative">
                            <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                              type="email"
                              id="email"
                              value={recoveryData.email}
                              onChange={(e) => setRecoveryData({ ...recoveryData, email: e.target.value })}
                              className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setStep("documents");
                          }}
                          className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors"
                        >
                          Continue to Document Upload
                        </button>
                      </form>
                    </div>
                  )}

                  {/* Step 3: Document Upload */}
                  {step === "documents" && (
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-3">Submit Identity Proof</h1>
                      <p className="text-muted-foreground mb-8">
                        Upload a clear photo or scan of your government-issued ID for verification
                      </p>

                      <div className="mb-6">
                        <label className="block text-sm font-bold text-foreground mb-3">
                          Select Document Type <span className="text-red-600">*</span>
                        </label>
                        <div className="space-y-3">
                          {["Aadhaar Card", "PAN Card", "Voter ID", "Driving License", "Passport"].map((doc) => (
                            <label key={doc} className="flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-colors">
                              <input
                                type="radio"
                                name="documentType"
                                value={doc}
                                checked={recoveryData.documentType === doc}
                                onChange={(e) => setRecoveryData({ ...recoveryData, documentType: e.target.value })}
                                className="w-5 h-5"
                              />
                              <FileText size={20} className="text-muted-foreground" />
                              <span className="font-medium text-foreground">{doc}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {recoveryData.documentType && (
                        <>
                          <div className="mb-6">
                            <label htmlFor="documentNumber" className="block text-sm font-bold text-foreground mb-2">
                              {recoveryData.documentType} Number <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              id="documentNumber"
                              value={recoveryData.documentNumber}
                              onChange={(e) => setRecoveryData({ ...recoveryData, documentNumber: e.target.value })}
                              className="w-full px-4 py-4 border-2 border-border rounded-lg text-foreground focus:border-primary focus:outline-none text-lg"
                              placeholder="Enter document number"
                            />
                          </div>

                          <div className="mb-8">
                            <label className="block text-sm font-bold text-foreground mb-2">
                              Upload Document <span className="text-red-600">*</span>
                            </label>
                            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center bg-background hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-colors cursor-pointer">
                              <FileText size={48} className="text-muted-foreground mx-auto mb-4" />
                              <div className="font-bold text-foreground mb-2">Click to upload or drag and drop</div>
                              <div className="text-sm text-muted-foreground">PNG, JPG or PDF (max 5MB)</div>
                            </div>
                          </div>
                        </>
                      )}

                      <button
                        onClick={() => setStep("review")}
                        disabled={!recoveryData.documentType || !recoveryData.documentNumber}
                        className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 disabled:bg-muted disabled:cursor-not-allowed transition-colors"
                      >
                        Submit for Review
                      </button>
                    </div>
                  )}

                  {/* Step 4: Review and Submit */}
                  {step === "review" && (
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-3">Review Your Submission</h1>
                      <p className="text-muted-foreground mb-8">
                        Please verify all information before submitting your account recovery request
                      </p>

                      <div className="space-y-4 mb-8">
                        <ReviewItem label="Full Name" value={recoveryData.fullName} />
                        <ReviewItem label="Date of Birth" value={recoveryData.dob} />
                        <ReviewItem label="Mobile Number" value={recoveryData.mobile} />
                        <ReviewItem label="Email Address" value={recoveryData.email} />
                        <ReviewItem label="Document Type" value={recoveryData.documentType} />
                        <ReviewItem label="Document Number" value={recoveryData.documentNumber} />
                        <ReviewItem label="Document Upload" value="identity-proof.pdf" icon={<FileText size={16} />} />
                      </div>

                      <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg mb-8">
                        <div className="flex items-start gap-3">
                          <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-muted-foreground">
                            <div className="font-bold text-foreground mb-2">What happens next?</div>
                            <ul className="space-y-1">
                              <li>• Our security team will manually review your request</li>
                              <li>• You'll receive an email confirmation within 1 business day</li>
                              <li>• Account unlock typically takes 3-5 business days</li>
                              <li>• You'll be notified via email and SMS when complete</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setStep("success")}
                        className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors"
                      >
                        Submit Recovery Request
                      </button>
                    </div>
                  )}

                  {/* Step 5: Success */}
                  {step === "success" && (
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-600" />
                      </div>
                      <h1 className="text-3xl font-bold text-foreground mb-3">Recovery Request Submitted</h1>
                      <p className="text-muted-foreground mb-8">
                        Your account recovery request has been submitted successfully. Our team will review and respond within 3-5 business days.
                      </p>

                      <div className="p-6 bg-muted border-2 border-border rounded-lg mb-8 text-left">
                        <div className="font-bold text-foreground mb-3">Reference Number</div>
                        <div className="text-2xl font-bold text-primary mb-4">REC-2026-04-XXXXX</div>
                        <div className="text-sm text-muted-foreground">Save this number for tracking your request</div>
                      </div>

                      <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg mb-8 text-left">
                        <div className="flex items-start gap-3">
                          <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-muted-foreground">
                            <div className="font-bold text-foreground mb-2">Track Your Request</div>
                            <p className="mb-2">We'll send updates to:</p>
                            <ul className="space-y-1">
                              <li>• Mobile: {recoveryData.mobile}</li>
                              <li>• Email: {recoveryData.email}</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/patterns/identity"
                        className="block w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors text-center"
                      >
                        Back to Identity Patterns
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Help Card */}
              <div className="border-t-2 border-border bg-background px-4 sm:px-8 lg:px-12 py-6">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground mb-2">Need Assistance?</div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Call: <span className="font-bold">1800-XXX-XXXX</span> (Toll-Free)</p>
                        <p>Email: <span className="font-bold">recovery@digitalindia.gov.in</span></p>
                        <p className="text-muted-foreground">Monday to Friday, 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Sidebar - 4 columns */}
          <div className="col-span-4 space-y-6">
            <PatternInfo />
            <WhenToUse />
            <SecurityNotes />
            <ProcessingTime />
          </div>

        </div>
      </div>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function RecoveryStep({ number, label, active, completed }: { number: number; label: string; active: boolean; completed: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 ${
        completed
          ? 'bg-green-500 border-green-500 text-white'
          : active
          ? 'bg-primary border-primary text-white'
          : 'bg-card border-border text-muted-foreground'
      }`}>
        {completed ? <Check size={18} /> : number}
      </div>
      <div className={`text-xs font-medium text-center ${active ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</div>
    </div>
  );
}

function ReviewItem({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between p-4 bg-background border-2 border-border rounded-lg">
      <span className="text-sm font-bold text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm font-medium text-foreground">{value}</span>
      </div>
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
        <InfoRow label="Pattern ID" value="UX4G-PAT-009-06" />
        <InfoRow label="Status" value="Stable" badge="green" />
        <InfoRow label="Complexity" value="High" />
        <InfoRow label="Category" value="Recovery" />
        <InfoRow label="Version" value="1.0.0" />
      </div>
    </div>
  );
}

function WhenToUse() {
  return (
    <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden bg-blue-50 dark:bg-blue-900/20">
      <div className="bg-blue-100 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground">When to Use</h3>
      </div>
      <div className="p-4 space-y-2 text-sm text-muted-foreground">
        <UseCase text="Account locked after multiple failed attempts" />
        <UseCase text="User lost access to registered email/mobile" />
        <UseCase text="Suspicious activity detected" />
        <UseCase text="Account inactive for 2+ years" />
        <UseCase text="User forgot all authentication methods" />
      </div>
    </div>
  );
}

function SecurityNotes() {
  return (
    <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden bg-red-50 dark:bg-red-900/20">
      <div className="bg-red-100 border-b-2 border-red-200 dark:border-red-800 px-4 py-3">
        <h3 className="font-bold text-foreground">Security</h3>
      </div>
      <div className="p-4 space-y-2 text-sm text-muted-foreground">
        <SecurityItem text="Manual review required (not automated)" />
        <SecurityItem text="Verify document authenticity" />
        <SecurityItem text="Cross-check with existing records" />
        <SecurityItem text="Notify user via all contact methods" />
        <SecurityItem text="Log all recovery attempts" />
      </div>
    </div>
  );
}

function ProcessingTime() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground">Processing Time</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <TimelineItem step="1" label="Request Received" time="Immediate" />
        <TimelineItem step="2" label="Initial Review" time="1 business day" />
        <TimelineItem step="3" label="Document Verification" time="2-3 business days" />
        <TimelineItem step="4" label="Account Unlock" time="3-5 business days" />
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
        <span className={`px-2 py-0.5 ${badge === 'green' ? 'bg-green-100 text-green-700 dark:text-green-400' : 'bg-muted text-muted-foreground'} text-xs font-bold rounded-full`}>
          {value}
        </span>
      ) : (
        <span className="font-bold text-foreground">{value}</span>
      )}
    </div>
  );
}

function UseCase({ text }: { text: string }) {
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
      <AlertTriangle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function TimelineItem({ step, label, time }: { step: string; label: string; time: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0 font-bold text-xs">
        {step}
      </div>
      <div className="flex-1">
        <div className="font-bold text-foreground text-sm">{label}</div>
        <div className="text-xs text-muted-foreground">{time}</div>
      </div>
    </div>
  );
}
