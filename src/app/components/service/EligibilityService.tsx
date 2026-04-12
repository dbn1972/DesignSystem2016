import { useMemo, useState } from "react";
import { Link } from "react-router";
import { AlertCircle, CheckCircle, Download, HelpCircle, XCircle } from "lucide-react";

import { InfoBanner } from "../certificate/InfoBanner";
import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import {
  allEligibilityAnswered,
  evaluateEligibility,
  getEmptyEligibilityAnswers,
  getMissingEligibilityRequirements,
  type EligibilityAnswers,
} from "../../services/eligibilityService";

interface EligibilityServiceProps {
  category: string;
  title: string;
  serviceName: string;
  homePath: string;
  signInPath: string;
  signUpPath: string;
  helpPath: string;
  codeDownloadPath?: string;
}

export function EligibilityService({
  category,
  title,
  serviceName,
  homePath,
  signInPath,
  signUpPath,
  helpPath,
  codeDownloadPath,
}: EligibilityServiceProps) {
  const [answers, setAnswers] = useState<EligibilityAnswers>(getEmptyEligibilityAnswers());
  const [showResult, setShowResult] = useState(false);

  const allAnswered = allEligibilityAnswered(answers);
  const isEligible = useMemo(() => evaluateEligibility(answers), [answers]);
  const missingRequirements = useMemo(() => getMissingEligibilityRequirements(answers), [answers]);

  const setAnswer = (key: keyof EligibilityAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader icon={HelpCircle} iconColor="bg-blue-600" category={category} title={title} />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <InfoBanner
            variant="info"
            title="Before You Apply"
            message="Answer these quick questions to check if you meet the basic eligibility criteria."
          />

          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
              <h2 className="font-bold text-gray-900">Eligibility Questions</h2>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <YesNoQuestion
                number={1}
                text="Are you an Indian citizen?"
                value={answers.isCitizen}
                onChange={(value) => setAnswer("isCitizen", value)}
              />

              <YesNoQuestion
                number={2}
                text="Are you 18 years of age or above?"
                value={answers.ageAbove18}
                onChange={(value) => setAnswer("ageAbove18", value)}
              />

              <YesNoQuestion
                number={3}
                text="Do you have a valid identity proof (Aadhaar/Voter ID/Passport)?"
                value={answers.hasIdentityProof}
                onChange={(value) => setAnswer("hasIdentityProof", value)}
              />

              <YesNoQuestion
                number={4}
                text="Do you have a valid address proof (Utility Bill/Rent Agreement)?"
                value={answers.hasAddressProof}
                onChange={(value) => setAnswer("hasAddressProof", value)}
              />

              <div className="border-b-2 border-gray-300 pb-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#000080] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">5</div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-3">Which certificate do you want to apply for?</p>
                    <select
                      value={answers.certificateType}
                      onChange={(event) => setAnswer("certificateType", event.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000080]"
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

              <button
                type="button"
                onClick={() => setShowResult(true)}
                disabled={!allAnswered}
                className={`w-full px-6 py-3.5 font-bold rounded text-sm ${
                  allAnswered ? "bg-[#000080] text-white hover:bg-blue-900" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Check Eligibility
              </button>
            </div>
          </div>

          {showResult && (
            <div className={`border-2 rounded-lg overflow-hidden ${isEligible ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"}`}>
              <div className={`border-b-2 px-6 py-6 text-center ${isEligible ? "border-green-300" : "border-red-300"}`}>
                <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${isEligible ? "bg-green-600" : "bg-red-600"}`}>
                  {isEligible ? <CheckCircle size={40} className="text-white" /> : <XCircle size={40} className="text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{isEligible ? "You Are Eligible" : "Not Eligible Yet"}</h3>
                <p className="text-sm text-gray-700">
                  {isEligible
                    ? "You meet the basic eligibility criteria and can start the service application."
                    : "Some requirements are missing. Review the points below before applying."}
                </p>
              </div>

              <div className="p-6 space-y-4">
                {isEligible ? (
                  <>
                    <div className="space-y-2 text-sm text-gray-700">
                      <NextStep text="Sign in to your account or create a new one" />
                      <NextStep text="Complete your application and upload required documents" />
                      <NextStep text="Track progress and download issued certificate" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Link to={signInPath} className="px-6 py-3.5 bg-[#138808] text-white font-bold rounded text-center hover:bg-green-700">Sign In to Apply</Link>
                      <Link to={signUpPath} className="px-6 py-3.5 border-2 border-[#138808] text-[#138808] font-bold rounded text-center hover:bg-green-50">Create Account</Link>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className="font-bold text-gray-900">Requirements Not Met</h4>
                    <div className="space-y-2">
                      {missingRequirements.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-red-700">
                          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={helpPath} className="block w-full px-6 py-3.5 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-center hover:bg-gray-50">
                      Get Help
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="text-sm text-gray-700 text-center">
            <Link to={homePath} className="font-bold text-[#000080] hover:underline">Back to Service Home</Link>
            {codeDownloadPath && (
              <span className="ml-4">
                <Link to={codeDownloadPath} className="inline-flex items-center gap-1 font-bold text-[#000080] hover:underline">
                  <Download size={14} />
                  Download React code
                </Link>
              </span>
            )}
          </div>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Eligibility Check" />
    </div>
  );
}

function YesNoQuestion({
  number,
  text,
  value,
  onChange,
}: {
  number: number;
  text: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="border-b-2 border-gray-300 pb-6">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 bg-[#000080] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">{number}</div>
        <p className="font-bold text-gray-900 flex-1">{text}</p>
      </div>
      <div className="ml-11 flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name={`question-${number}`} value="yes" checked={value === "yes"} onChange={(e) => onChange(e.target.value)} className="w-4 h-4" />
          <span className="text-sm text-gray-700">Yes</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name={`question-${number}`} value="no" checked={value === "no"} onChange={(e) => onChange(e.target.value)} className="w-4 h-4" />
          <span className="text-sm text-gray-700">No</span>
        </label>
      </div>
    </div>
  );
}

function NextStep({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}
