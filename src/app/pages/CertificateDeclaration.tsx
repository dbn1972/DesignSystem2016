import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FileCheck, ArrowRight, ArrowLeft, AlertCircle } from "lucide-react";

export default function CertificateDeclaration() {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = () => {
    if (accepted) {
      navigate("/reference-service/certificate/payment-summary");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-purple-600 rounded flex items-center justify-center">
              <FileCheck size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Application Declaration</div>
              <h1 className="text-2xl font-bold text-gray-900">Declaration & Consent</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden mb-6">
            <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
              <h2 className="font-bold text-gray-900">Declaration</h2>
            </div>
            <div className="p-8">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-6 max-h-96 overflow-y-auto">
                <div className="space-y-4 text-sm text-gray-700">
                  <p>I, <span className="font-bold">Priya Sharma</span>, hereby declare that:</p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>All information provided in this application is true and correct to the best of my knowledge</li>
                    <li>I have read and understood the eligibility criteria for this certificate</li>
                    <li>I authorize the concerned department to verify the information and documents provided</li>
                    <li>I understand that providing false information may lead to rejection and legal consequences</li>
                    <li>I consent to the collection, processing, and storage of my personal data for this application</li>
                    <li>I agree to receive notifications via SMS and email regarding this application</li>
                    <li>I understand the application fee (if applicable) is non-refundable</li>
                    <li>I acknowledge that processing time is 7-10 working days from submission</li>
                  </ol>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-5 mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle size={20} className="text-orange-600" />
                  Important Notice
                </h3>
                <p className="text-sm text-gray-700">
                  This declaration is legally binding. False or misleading information may result in application 
                  rejection, certificate cancellation, and potential legal action under applicable laws.
                </p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="w-5 h-5 mt-0.5 border-2 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  <span className="font-bold text-gray-900">I accept and agree</span> to the above declaration and 
                  confirm that all information provided is accurate.
                </span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Link
              to="/reference-service/certificate/review-summary"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Back
            </Link>
            <button
              onClick={handleSubmit}
              disabled={!accepted}
              className={`flex items-center gap-2 px-8 py-3 font-bold rounded text-sm ${
                accepted
                  ? 'bg-[#138808] text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Accept Declaration
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Declaration & Consent</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
