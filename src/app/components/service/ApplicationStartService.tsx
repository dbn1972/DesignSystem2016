import { useState } from "react";
import { Link } from "react-router";
import { AlertTriangle, ArrowRight, CheckCircle, Clock, Download, FileText, Info, Shield } from "lucide-react";

import { InfoBanner } from "../certificate/InfoBanner";
import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";

interface ApplicationStartServiceProps {
  category: string;
  title: string;
  serviceName: string;
  applicantName: string;
  startFormPath: string;
  helpPath: string;
  codeDownloadPath?: string;
}

export function ApplicationStartService({
  category,
  title,
  serviceName,
  applicantName,
  startFormPath,
  helpPath,
  codeDownloadPath,
}: ApplicationStartServiceProps) {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader
        icon={FileText}
        iconColor="bg-green-600"
        category={`Welcome, ${applicantName}`}
        title={title}
        rightContent={
          <div className="px-4 py-2 bg-green-100 border-2 border-green-300 rounded text-xs font-bold text-green-900">
            AUTHENTICATED
          </div>
        }
      />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12 space-y-8">
        <section>
          <div className="border-l-4 border-primary pl-4 mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Before You Begin</h2>
            <p className="text-muted-foreground">Review the key instructions before starting your application.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard icon={Clock} iconBg="bg-blue-600" title="Time Required" text="15-20 minutes for complete submission." />
            <InfoCard icon={FileText} iconBg="bg-purple-600" title="Documents Needed" text="Keep required files ready in PDF/JPEG/PNG format." />
            <InfoCard icon={Shield} iconBg="bg-green-600" title="Save Progress" text="Save draft anytime and continue later." />
          </div>
        </section>

        <section className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-5">
            <h3 className="text-xl font-bold text-foreground">Application Instructions</h3>
          </div>

          <div className="p-6 sm:p-8 space-y-5">
            <InstructionStep number={1} title="Complete personal information" description="Enter your core personal and contact details accurately." />
            <InstructionStep number={2} title="Provide address details" description="Add current address that matches your supporting proof." />
            <InstructionStep number={3} title="Fill service-specific details" description="Answer additional service-specific questions." />
            <InstructionStep number={4} title="Upload required documents" description="Upload clear and readable proof documents." />
            <InstructionStep number={5} title="Review and declare" description="Confirm all details before final submission." />
            <InstructionStep number={6} title="Pay application fee" description="Complete payment and keep the receipt for records." />
            <InstructionStep number={7} title="Submit and track" description="Submit application and track status using reference number." />
          </div>
        </section>

        <InfoBanner
          variant="warning"
          icon={AlertTriangle}
          title="Important Notes"
          message={
            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
              <li>Application cannot be edited after final submission.</li>
              <li>Incomplete applications are not processed.</li>
              <li>Upload clear documents to avoid delays.</li>
              <li>False information may lead to rejection.</li>
            </ul>
          }
        />

        <section className="bg-card border-2 border-border rounded-lg p-6 sm:p-8">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5 mb-5">
            <h3 className="font-bold text-foreground mb-2">Terms and Conditions</h3>
            <p className="text-sm text-muted-foreground">By continuing, you confirm all information provided is accurate and can be verified.</p>
          </div>

          <label className="flex items-start gap-3 cursor-pointer mb-6">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) => setAcceptedTerms(event.target.checked)}
              className="w-5 h-5 mt-0.5 border-2 border-border rounded"
            />
            <span className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">I have read and understood</span> the instructions and terms.
            </span>
          </label>

          <Link
            to={startFormPath}
            className={`w-full block px-8 py-4 text-white font-bold rounded text-center transition-colors ${
              acceptedTerms ? "bg-green-700 hover:bg-green-600" : "bg-gray-400 pointer-events-none"
            }`}
            aria-disabled={!acceptedTerms}
          >
            I Agree - Start Application <ArrowRight size={18} className="inline-block ml-2" />
          </Link>
        </section>

        <InfoBanner
          variant="info"
          icon={Info}
          title="Need Help?"
          message="If you need assistance with application steps, visit the help center."
        >
          <div className="mt-2 flex items-center gap-4 text-sm">
            <Link to={helpPath} className="font-bold text-primary hover:underline">Visit Help Center</Link>
            {codeDownloadPath && (
              <Link to={codeDownloadPath} className="inline-flex items-center gap-1 font-bold text-primary hover:underline">
                <Download size={14} />
                Download React code
              </Link>
            )}
          </div>
        </InfoBanner>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Application Start" />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  iconBg,
  title,
  text,
}: {
  icon: typeof Clock;
  iconBg: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-5">
      <div className={`w-11 h-11 ${iconBg} rounded-lg flex items-center justify-center mb-3`}>
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="font-bold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function InstructionStep({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">{number}</div>
      <div>
        <h4 className="font-bold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
