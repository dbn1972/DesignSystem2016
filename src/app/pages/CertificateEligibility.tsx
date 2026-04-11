import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { CheckCircle, XCircle, ArrowRight, HelpCircle, AlertCircle } from "lucide-react";

export default function CertificateEligibility() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    isCitizen: "",
    ageAbove18: "",
    hasIdentityProof: "",
    hasAddressProof: "",
    certificateType: ""
  });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (question: string, value: string) => {
    setAnswers({ ...answers, [question]: value });
    setShowResult(false);
  };

  const checkEligibility = () => {
    setShowResult(true);
  };

  const allAnswered = Object.values(answers).every(a => a);
  const isEligible = answers.isCitizen === "yes" && 
                     answers.ageAbove18 === "yes" && 
                     answers.hasIdentityProof === "yes" && 
                     answers.hasAddressProof === "yes" &&
                     answers.certificateType;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-blue-600 rounded flex items-center justify-center">
              <HelpCircle size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Certificate Application Service</div>
              <h1 className="text-2xl font-bold text-gray-900">Check Your Eligibility</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="max-w-3xl mx-auto">
          
          {/* Instructions */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-3">Before You Apply</h2>
            <p className="text-sm text-gray-700">
              Answer the following questions to check if you are eligible to apply for a government certificate. 
              This quick check will help you understand if you meet the basic requirements.
            </p>
          </div>

          {/* Questions */}
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden mb-6">
            <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
              <h3 className="font-bold text-gray-900">Eligibility Questions</h3>
            </div>
            
            <div className="p-8 space-y-6">
              
              {/* Question 1 */}
              <Question
                number={1}
                text="Are you an Indian citizen?"
                value={answers.isCitizen}
                onChange={(val) => handleAnswer("isCitizen", val)}
              />

              {/* Question 2 */}
              <Question
                number={2}
                text="Are you 18 years of age or above?"
                value={answers.ageAbove18}
                onChange={(val) => handleAnswer("ageAbove18", val)}
              />

              {/* Question 3 */}
              <Question
                number={3}
                text="Do you have a valid identity proof (Aadhaar/Voter ID/Passport)?"
                value={answers.hasIdentityProof}
                onChange={(val) => handleAnswer("hasIdentityProof", val)}
              />

              {/* Question 4 */}
              <Question
                number={4}
                text="Do you have a valid address proof (Utility Bill/Rent Agreement)?"
                value={answers.hasAddressProof}
                onChange={(val) => handleAnswer("hasAddressProof", val)}
              />

              {/* Question 5 - Certificate Type */}
              <div className="border-b-2 border-gray-300 pb-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#000080] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    5
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-3">Which certificate do you want to apply for?</p>
                    <select
                      value={answers.certificateType}
                      onChange={(e) => handleAnswer("certificateType", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
                    >
                      <option value="">Select certificate type</option>
                      <option value="income">Income Certificate</option>
                      <option value="domicile">Domicile Certificate</option>
                      <option value="caste">Caste Certificate</option>
                      <option value="birth">Birth Certificate</option>
                      <option value="death">Death Certificate</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Check Button */}
              <button
                onClick={checkEligibility}
                disabled={!allAnswered}
                className={`w-full px-6 py-4 font-bold rounded text-sm ${
                  allAnswered
                    ? 'bg-[#000080] text-white hover:bg-blue-900'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Check Eligibility
              </button>

            </div>
          </div>

          {/* Result */}
          {showResult && (
            <div className={`border-2 rounded-lg overflow-hidden ${
              isEligible 
                ? 'bg-green-50 border-green-300' 
                : 'bg-red-50 border-red-300'
            }`}>
              <div className={`border-b-2 px-8 py-6 text-center ${
                isEligible ? 'border-green-300' : 'border-red-300'
              }`}>
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{
                  background: isEligible ? '#138808' : '#DC2626'
                }}>
                  {isEligible ? (
                    <CheckCircle size={40} className="text-white" />
                  ) : (
                    <XCircle size={40} className="text-white" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {isEligible ? "You Are Eligible!" : "Not Eligible"}
                </h3>
                <p className="text-sm text-gray-700">
                  {isEligible 
                    ? "Based on your answers, you meet the eligibility criteria to apply for this certificate."
                    : "Based on your answers, you do not currently meet all the eligibility requirements."
                  }
                </p>
              </div>
              
              <div className="p-8">
                {isEligible ? (
                  <>
                    <h4 className="font-bold text-gray-900 mb-3">Next Steps:</h4>
                    <div className="space-y-2 mb-6">
                      <NextStep text="Create an account or sign in to your existing account" />
                      <NextStep text="Complete the online application form" />
                      <NextStep text="Upload required documents" />
                      <NextStep text="Pay application fee (if applicable)" />
                      <NextStep text="Submit application and track status" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        to="/reference-service/certificate/sign-in"
                        className="flex-1 px-6 py-4 bg-[#138808] text-white font-bold rounded text-center hover:bg-green-700"
                      >
                        Sign In to Apply
                      </Link>
                      <Link
                        to="/reference-service/certificate/sign-up"
                        className="flex-1 px-6 py-4 border-2 border-[#138808] bg-white text-[#138808] font-bold rounded text-center hover:bg-green-50"
                      >
                        Create Account
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className="font-bold text-gray-900 mb-3">Requirements Not Met:</h4>
                    <div className="space-y-2 mb-6">
                      {answers.isCitizen === "no" && (
                        <RequirementNotMet text="You must be an Indian citizen to apply" />
                      )}
                      {answers.ageAbove18 === "no" && (
                        <RequirementNotMet text="You must be 18 years or above" />
                      )}
                      {answers.hasIdentityProof === "no" && (
                        <RequirementNotMet text="Valid identity proof is mandatory" />
                      )}
                      {answers.hasAddressProof === "no" && (
                        <RequirementNotMet text="Valid address proof is required" />
                      )}
                    </div>
                    <Link
                      to="/reference-service/certificate/help"
                      className="block w-full px-6 py-4 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-center hover:bg-gray-50"
                    >
                      Get Help
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>
              <Link to="/reference-service/demo" className="text-[#000080] font-bold hover:underline mr-6">
                Back to Service Home
              </Link>
              Eligibility Check
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function Question({ 
  number, 
  text, 
  value, 
  onChange 
}: { 
  number: number; 
  text: string; 
  value: string; 
  onChange: (value: string) => void;
}) {
  return (
    <div className="border-b-2 border-gray-300 pb-6">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 bg-[#000080] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
          {number}
        </div>
        <p className="font-bold text-gray-900 flex-1">{text}</p>
      </div>
      <div className="ml-11 flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={`question-${number}`}
            value="yes"
            checked={value === "yes"}
            onChange={(e) => onChange(e.target.value)}
            className="w-4 h-4"
          />
          <span className="text-sm text-gray-700">Yes</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={`question-${number}`}
            value="no"
            checked={value === "no"}
            onChange={(e) => onChange(e.target.value)}
            className="w-4 h-4"
          />
          <span className="text-sm text-gray-700">No</span>
        </label>
      </div>
    </div>
  );
}

function NextStep({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-gray-700">
      <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function RequirementNotMet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-red-700">
      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}
