import { Link } from "react-router";
import { FileText, CheckCircle, Info, ArrowRight, Shield, Clock, Users, Award, HelpCircle, ChevronRight, AlertCircle } from "lucide-react";

export default function CertificateService() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-800 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#FF9933] to-[#138808] p-1">
        <div className="bg-card dark:bg-gray-900">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
            <div className="flex items-start justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF9933] to-[#138808] rounded flex items-center justify-center">
                    <FileText size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground dark:text-gray-400 mb-1">Government of India</div>
                    <h1 className="text-3xl font-bold text-foreground dark:text-gray-100">Certificate Application Service</h1>
                  </div>
                </div>
                <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                  Apply for government-issued certificates online. Complete application, track status, and receive 
                  digital certificates from the comfort of your home.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="px-6 py-3 bg-green-100 dark:bg-green-900/30 border-2 border-green-300 dark:border-green-800 rounded text-green-800 dark:text-green-400 font-bold text-sm text-center">
                  SERVICE ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Info Banner */}
      <section className="bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-300 dark:border-blue-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground dark:text-gray-400">Processing Time</div>
                <div className="font-bold text-foreground dark:text-gray-100">7-10 Days</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[var(--ux4g-color-feedback-success)] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground dark:text-gray-400">Application Mode</div>
                <div className="font-bold text-foreground dark:text-gray-100">100% Online</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground dark:text-gray-400">Eligibility</div>
                <div className="font-bold text-foreground dark:text-gray-100">All Citizens</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground dark:text-gray-400">Certificate Type</div>
                <div className="font-bold text-foreground dark:text-gray-100">Digital + Print</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        
        {/* Service Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-6">About This Service</h2>
          <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-lg p-8">
            <p className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-4">
              This is a generic government certificate application service that can be used for various types 
              of certificates including birth certificates, death certificates, income certificates, domicile 
              certificates, and caste certificates.
            </p>
            <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
              The service provides a complete digital experience from application submission to certificate 
              download, with real-time status tracking and notifications at every step.
            </p>
          </div>
        </section>

        {/* Eligibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-6">Eligibility Criteria</h2>
          <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-lg p-8">
            <div className="space-y-3">
              <EligibilityItem text="Must be an Indian citizen" />
              <EligibilityItem text="Must be 18 years of age or above" />
              <EligibilityItem text="Must have valid identity proof (Aadhaar, Voter ID, Passport)" />
              <EligibilityItem text="Must have valid address proof" />
              <EligibilityItem text="Must meet specific requirements for certificate type" />
            </div>
            <div className="mt-6 pt-6 border-t-2 border-border dark:border-gray-700">
              <Link 
                to="/reference-service/certificate/eligibility"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded text-sm hover:opacity-90 transition-colors"
              >
                Check Your Eligibility
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-6">Required Documents</h2>
          <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-foreground dark:text-gray-100 mb-3">Mandatory Documents</h3>
                <div className="space-y-2">
                  <DocumentItem text="Identity Proof (Aadhaar / Voter ID / Passport)" />
                  <DocumentItem text="Address Proof (Utility Bill / Rent Agreement)" />
                  <DocumentItem text="Recent Passport Size Photograph" />
                  <DocumentItem text="Application Form (System Generated)" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground dark:text-gray-100 mb-3">Additional Documents (If Applicable)</h3>
                <div className="space-y-2">
                  <DocumentItem text="Income Proof (for income certificate)" optional />
                  <DocumentItem text="Caste Certificate (for caste certificate renewal)" optional />
                  <DocumentItem text="Birth/Death Registration (for related certificates)" optional />
                  <DocumentItem text="Any other supporting documents" optional />
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t-2 border-border dark:border-gray-700">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-800 rounded-lg p-4 flex items-start gap-3">
                <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground dark:text-gray-300">
                  <p className="font-bold text-foreground dark:text-gray-100 mb-1">Document Upload Guidelines</p>
                  <p>All documents must be uploaded in PDF, JPEG, or PNG format. Maximum file size: 2MB per document. 
                  Ensure all documents are clear and readable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-6">Application Process</h2>
          <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-lg p-8">
            <div className="space-y-6">
              
              <ProcessStep
                number={1}
                title="Create Account or Sign In"
                description="Register or log in using your mobile number and OTP verification"
              />

              <ProcessStep
                number={2}
                title="Fill Application Form"
                description="Complete the multi-step form with personal, address, and certificate-specific details"
              />

              <ProcessStep
                number={3}
                title="Upload Documents"
                description="Upload all required documents as per the checklist provided"
              />

              <ProcessStep
                number={4}
                title="Review and Declare"
                description="Review your application, provide consent, and make declaration of accuracy"
              />

              <ProcessStep
                number={5}
                title="Make Payment (if applicable)"
                description="Pay the application fee using online payment methods"
              />

              <ProcessStep
                number={6}
                title="Submit Application"
                description="Submit your application and receive a unique reference number"
              />

              <ProcessStep
                number={7}
                title="Track Status"
                description="Track your application status online using the reference number"
              />

              <ProcessStep
                number={8}
                title="Download Certificate"
                description="Once approved, download your digital certificate"
              />

            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-6">Important Information</h2>
          <div className="grid grid-cols-2 gap-6">
            
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 rounded-lg p-6">
              <h3 className="font-bold text-foreground dark:text-gray-100 mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-orange-600" />
                Before You Apply
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground dark:text-gray-300">
                <ImportantPoint text="Keep all required documents ready in digital format" />
                <ImportantPoint text="Ensure your mobile number is active for OTP verification" />
                <ImportantPoint text="Have a valid email address for notifications" />
                <ImportantPoint text="Application cannot be edited after submission" />
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800 rounded-lg p-6">
              <h3 className="font-bold text-foreground dark:text-gray-100 mb-4 flex items-center gap-2">
                <CheckCircle size={20} className="text-green-600" />
                After Submission
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground dark:text-gray-300">
                <ImportantPoint text="You will receive SMS and email confirmation" />
                <ImportantPoint text="Track status using your reference number" />
                <ImportantPoint text="Officer may request additional documents if needed" />
                <ImportantPoint text="Certificate will be available for download upon approval" />
              </div>
            </div>

          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1 rounded-lg">
          <div className="bg-card dark:bg-gray-900 rounded p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground dark:text-gray-100 mb-4">Ready to Apply?</h2>
            <p className="text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your certificate application now. The entire process takes approximately 15-20 minutes 
              to complete online.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/reference-service/certificate/sign-in"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded text-sm hover:opacity-90 transition-colors flex items-center gap-2"
              >
                <Shield size={18} />
                Sign In to Apply
              </Link>
              <Link
                to="/reference-service/certificate/help"
                className="px-8 py-4 border-2 border-border dark:border-gray-700 bg-card dark:bg-gray-900 text-muted-foreground dark:text-gray-300 font-bold rounded text-sm hover:bg-background dark:bg-gray-800 flex items-center gap-2"
              >
                <HelpCircle size={18} />
                Need Help?
              </Link>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mt-6">
              Don't have an account?{" "}
              <Link to="/reference-service/certificate/sign-up" className="text-primary font-bold hover:underline">
                Sign Up Here
              </Link>
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-card dark:bg-gray-900 border-t-2 border-border dark:border-gray-700 mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground dark:text-gray-400">
            <div>Certificate Application Service • Government of India</div>
            <div>
              <Link to="/reference-service-blueprint" className="text-primary font-bold hover:underline mr-6">
                View Service Blueprint
              </Link>
              Digital India Initiative
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function EligibilityItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span className="text-muted-foreground dark:text-gray-300">{text}</span>
    </div>
  );
}

function DocumentItem({ text, optional }: { text: string; optional?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <ChevronRight size={16} className={`${optional ? 'text-gray-400' : 'text-primary'} flex-shrink-0 mt-0.5`} />
      <span className={`text-sm ${optional ? 'text-muted-foreground dark:text-gray-400' : 'text-muted-foreground dark:text-gray-300'}`}>
        {text}
        {optional && <span className="text-gray-500 ml-2">(Optional)</span>}
      </span>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-foreground dark:text-gray-100 mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function ImportantPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={14} className="flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}