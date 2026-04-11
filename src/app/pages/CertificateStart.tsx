import { Link } from "react-router";
import { FileText, CheckCircle, ArrowRight, Info, AlertTriangle, Clock, Shield, User } from "lucide-react";

export default function CertificateStart() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-green-600 rounded flex items-center justify-center">
                <FileText size={28} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Welcome, Priya Sharma</div>
                <h1 className="text-2xl font-bold text-gray-900">Start New Application</h1>
              </div>
            </div>
            <div className="px-4 py-2 bg-green-100 border-2 border-green-300 rounded text-xs font-bold text-green-900">
              AUTHENTICATED
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        
        {/* Before You Begin */}
        <section className="mb-12">
          <div className="border-l-4 border-[#000080] pl-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Before You Begin</h2>
            <p className="text-gray-600">Please review these important instructions</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Time Required</h3>
              <p className="text-sm text-gray-700">
                Approximately <span className="font-bold">15-20 minutes</span> to complete the entire application
              </p>
            </div>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <FileText size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Documents Needed</h3>
              <p className="text-sm text-gray-700">
                Keep all required documents ready in <span className="font-bold">digital format (PDF/JPEG)</span>
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Save Progress</h3>
              <p className="text-sm text-gray-700">
                You can <span className="font-bold">save and resume later</span> at any point during the application
              </p>
            </div>

          </div>
        </section>

        {/* Instructions */}
        <section className="mb-12">
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            
            <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-6">
              <h2 className="text-xl font-bold text-gray-900">Application Instructions</h2>
            </div>

            <div className="p-8 space-y-6">
              
              <InstructionStep
                number={1}
                title="Complete Personal Information"
                description="Provide accurate personal details including full name, date of birth, gender, and contact information. All fields marked with asterisk (*) are mandatory."
              />

              <InstructionStep
                number={2}
                title="Enter Address Details"
                description="Fill in your current residential address. This will be verified against your address proof document. Ensure the address matches exactly with your supporting documents."
              />

              <InstructionStep
                number={3}
                title="Provide Certificate-Specific Information"
                description="Answer additional questions specific to the type of certificate you are applying for. These may include income details, caste information, or other relevant data."
              />

              <InstructionStep
                number={4}
                title="Upload Required Documents"
                description="Upload clear, readable copies of all mandatory documents. Ensure file sizes are under 2MB and formats are PDF, JPEG, or PNG."
              />

              <InstructionStep
                number={5}
                title="Review and Declare"
                description="Carefully review all information entered. Make a declaration that all information provided is true and accurate to the best of your knowledge."
              />

              <InstructionStep
                number={6}
                title="Pay Application Fee (if applicable)"
                description="Pay the processing fee using available online payment methods. You will receive a payment receipt upon successful transaction."
              />

              <InstructionStep
                number={7}
                title="Submit Application"
                description="Submit your completed application. You will receive a unique reference number for tracking your application status."
              />

            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-12">
          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle size={20} className="text-orange-600" />
              Important Notes
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <ImportantNote text="Application cannot be edited after final submission" />
              <ImportantNote text="Incomplete applications will not be processed" />
              <ImportantNote text="Ensure all documents are clear and readable before uploading" />
              <ImportantNote text="False information may lead to rejection and legal consequences" />
              <ImportantNote text="Processing time is 7-10 working days from submission" />
            </div>
          </div>
        </section>

        {/* Terms Acknowledgment */}
        <section className="mb-12">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Terms and Conditions</h3>
              <div className="space-y-2 text-sm text-gray-700 max-h-48 overflow-y-auto">
                <p>By proceeding with this application, you acknowledge and agree to the following:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>All information provided is true and accurate</li>
                  <li>You have read and understood the eligibility criteria</li>
                  <li>You authorize verification of documents and information</li>
                  <li>You understand that false information may lead to rejection</li>
                  <li>You agree to the data collection and processing policies</li>
                  <li>Application fees are non-refundable</li>
                  <li>Processing time may vary based on verification requirements</li>
                </ul>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer mb-6">
              <input
                type="checkbox"
                required
                className="w-5 h-5 mt-0.5 border-2 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">
                <span className="font-bold text-gray-900">I have read and understood</span> the instructions and terms. 
                I agree to provide accurate information and understand the application process.
              </span>
            </label>

            <Link
              to="/reference-service/certificate/form/personal"
              className="w-full block px-8 py-4 bg-[#138808] text-white font-bold rounded text-center hover:bg-green-700 transition-colors"
            >
              I Agree - Start Application
              <ArrowRight size={20} className="inline-block ml-2" />
            </Link>
          </div>
        </section>

        {/* Help Section */}
        <section>
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Info size={24} className="text-[#000080] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-700 mb-3">
                  If you have questions about the application process or need assistance, please visit our help center.
                </p>
                <Link
                  to="/reference-service/certificate/help"
                  className="text-sm text-[#000080] font-bold hover:underline"
                >
                  Visit Help Center →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Application Start</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function InstructionStep({ 
  number, 
  title, 
  description 
}: { 
  number: number; 
  title: string; 
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-[#000080] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ImportantNote({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}