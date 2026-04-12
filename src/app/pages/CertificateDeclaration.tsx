import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, FileCheck } from "lucide-react";
import { loadCertificateDraft, updateCertificateDraft } from "../services/certificateFlow";

export default function CertificateDeclaration() {
  const navigate = useNavigate();
  const draft = useMemo(() => loadCertificateDraft(), []);
  const [accepted, setAccepted] = useState(draft.declarationAccepted);

  const continueFlow = () => {
    if (!accepted) return;
    updateCertificateDraft({ declarationAccepted: true });
    navigate("/reference-service/certificate/payment-summary");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1000px] mx-auto px-6 py-5 flex items-center gap-3">
          <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
            <FileCheck size={24} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Final Confirmation</p>
            <h1 className="text-xl font-bold text-gray-900">Declaration and Consent</h1>
          </div>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-6 py-8">
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 space-y-5">
          <p className="text-sm text-gray-700">
            I, <span className="font-bold text-gray-900">{draft.personal.fullName || "the applicant"}</span>, declare that all
            submitted information and documents are accurate and can be verified by the issuing authority.
          </p>

          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Data may be used only for processing this certificate application.</li>
            <li>False information may lead to rejection and legal action.</li>
            <li>Application fee is non-refundable once payment succeeds.</li>
          </ul>

          <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-gray-700">
              I have read and agree to the declaration, consent, and data usage terms.
            </span>
          </label>
        </div>

        <div className="flex items-center justify-between mt-6">
          <Link
            to="/reference-service/certificate/review-summary"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded font-bold text-sm text-gray-700 hover:bg-gray-50"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
          <button
            onClick={continueFlow}
            disabled={!accepted}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#138808] text-white rounded font-bold text-sm hover:bg-green-700 disabled:bg-gray-300 disabled:text-gray-500"
          >
            Accept and Continue
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
