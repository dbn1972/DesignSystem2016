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
    <div className="min-h-screen bg-background">
      <ServiceHeader icon={HelpCircle} iconColor="bg-blue-600" category={category} title={title} />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <InfoBanner
            variant="info"
            title="Before You Apply"
            message="Answer these quick questions to check if you meet the basic eligibility criteria."
          />

          <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-muted border-b-2 border-border px-6 py-4">
              <h2 className="font-bold text-foreground">Eligibility Questions</h2>
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

              <div className="border-b-2 border-border pb-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">5</div>
                  <div className="flex-1">
                    <p className="font-bold text-foreground mb-3">Which certificate do you want to apply for?</p>
                    <select
                      value={answers.certificateType}
                      onChange={(event) => setAnswer("certificateType", event.target.value)}
                      className="w-full px-4 py-3 border-2 border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
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
                  allAnswered ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-gray-300 text-muted-foreground cursor-not-allowed"
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
                <h3 className="text-2xl font-bold text-foreground mb-2">{isEligible ? "You Are Eligible" : "Not Eligible Yet"}</h3>
                <p className="text-sm text-muted-foreground">
                  {isEligible
                    ? "You meet the basic eligibility criteria and can start the service application."
                    : "Some requirements are missing. Review the points below before applying."}
                </p>
              </div>

              <div className="p-6 space-y-4">
                {isEligible ? (
                  <>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <NextStep text="Sign in to your account or create a new one" />
                      <NextStep text="Complete your application and upload required documents" />
                      <NextStep text="Track progress and download issued certificate" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Link to={signInPath} className="px-6 py-3.5 bg-[var(--ux4g-color-feedback-success)] text-primary-foreground font-bold rounded text-center hover:opacity-90">Sign In to Apply</Link>
                      <Link to={signUpPath} className="px-6 py-3.5 border-2 border-green-700 text-[var(--ux4g-color-feedback-success)] dark:text-green-400 font-bold rounded text-center hover:bg-green-50 dark:hover:bg-green-950/30">Create Account</Link>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className="font-bold text-foreground">Requirements Not Met</h4>
                    <div className="space-y-2">
                      {missingRequirements.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-red-700">
                          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={helpPath} className="block w-full px-6 py-3.5 border-2 border-border bg-card text-muted-foreground font-bold rounded text-center hover:bg-muted">
                      Get Help
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="text-sm text-muted-foreground text-center">
            <Link to={homePath} className="font-bold text-primary hover:underline">Back to Service Home</Link>
            {codeDownloadPath && (
              <span className="ml-4">
                <Link to={codeDownloadPath} className="inline-flex items-center gap-1 font-bold text-primary hover:underline">
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
    <div className="border-b-2 border-border pb-6">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">{number}</div>
        <p className="font-bold text-foreground flex-1">{text}</p>
      </div>
      <div className="ml-11 flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name={`question-${number}`} value="yes" checked={value === "yes"} onChange={(e) => onChange(e.target.value)} className="w-4 h-4" />
          <span className="text-sm text-muted-foreground">Yes</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name={`question-${number}`} value="no" checked={value === "no"} onChange={(e) => onChange(e.target.value)} className="w-4 h-4" />
          <span className="text-sm text-muted-foreground">No</span>
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
