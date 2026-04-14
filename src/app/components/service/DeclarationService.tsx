import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Download, FileCheck } from "lucide-react";

import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import { loadCertificateDraft, updateCertificateDraft } from "../../services/certificateFlow";
import { getDeclarationDisplayName } from "../../services/reviewDeclarationService";

interface DeclarationServiceProps {
  category: string;
  title: string;
  serviceName: string;
  backPath: string;
  nextPath: string;
  codeDownloadPath?: string;
}

export function DeclarationService({
  category,
  title,
  serviceName,
  backPath,
  nextPath,
  codeDownloadPath,
}: DeclarationServiceProps) {
  const navigate = useNavigate();
  const draft = useMemo(() => loadCertificateDraft(), []);
  const [accepted, setAccepted] = useState(draft.declarationAccepted);

  const continueFlow = () => {
    if (!accepted) return;
    updateCertificateDraft({ declarationAccepted: true });
    navigate(nextPath);
  };

  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader icon={FileCheck} iconColor="bg-purple-600" category={category} title={title} />

      <main className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8">
        <div className="bg-card border-2 border-border rounded-lg p-6 space-y-5">
          <p className="text-sm text-muted-foreground">
            I, <span className="font-bold text-foreground">{getDeclarationDisplayName(draft.personal.fullName)}</span>, declare that all
            submitted information and documents are accurate and can be verified by the issuing authority.
          </p>

          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
            <li>Data may be used only for processing this certificate application.</li>
            <li>False information may lead to rejection and legal action.</li>
            <li>Application fee is non-refundable once payment succeeds.</li>
          </ul>

          <label className="flex items-start gap-3 p-4 border-2 border-border rounded cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(event) => setAccepted(event.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-muted-foreground">
              I have read and agree to the declaration, consent, and data usage terms.
            </span>
          </label>
        </div>

        <div className="flex items-center justify-between mt-6 gap-3 flex-wrap">
          <Link
            to={backPath}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded font-bold text-sm text-muted-foreground hover:bg-muted"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          <div className="flex items-center gap-3">
            {codeDownloadPath && (
              <Link
                to={codeDownloadPath}
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded font-bold text-sm text-primary hover:bg-muted"
              >
                <Download size={15} />
                Download React code
              </Link>
            )}

            <button
              type="button"
              onClick={continueFlow}
              disabled={!accepted}
              className="inline-flex items-center gap-2 px-5 py-2 bg-[var(--ux4g-color-feedback-success)] text-primary-foreground rounded font-bold text-sm hover:opacity-90 disabled:bg-gray-300 disabled:text-gray-500"
            >
              Accept and Continue
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Declaration" />
    </div>
  );
}
