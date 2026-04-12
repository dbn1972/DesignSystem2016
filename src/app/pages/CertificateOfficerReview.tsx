import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, CheckCircle, MessageSquare, XCircle } from "lucide-react";
import {
  getCertificateApplications,
  getFallbackApplications,
  setApplicationStatus,
  type ApplicationStatus,
} from "../services/certificateFlow";

export default function CertificateOfficerReview() {
  const navigate = useNavigate();
  const app = useMemo(() => {
    const apps = getCertificateApplications();
    return (apps.length ? apps : getFallbackApplications())[0];
  }, []);

  const [decision, setDecision] = useState<ApplicationStatus | "">("");
  const [comments, setComments] = useState("");

  const submitDecision = () => {
    if (!decision || !comments.trim()) return;
    setApplicationStatus(app.referenceNumber, decision);
    navigate("/reference-service/certificate/officer/cases");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1000px] mx-auto px-6 py-5">
          <Link to="/reference-service/certificate/officer/cases" className="text-sm text-[#000080] font-bold hover:underline inline-flex items-center gap-1">
            <ArrowLeft size={14} /> Back to queue
          </Link>
          <h1 className="text-xl font-bold text-gray-900 mt-2">Officer Review: {app.referenceNumber}</h1>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-white border-2 border-gray-300 rounded-lg p-6">
          <p className="text-sm text-gray-700">Applicant: <span className="font-bold text-gray-900">{app.applicantName}</span></p>
          <p className="text-sm text-gray-700">Certificate: <span className="font-bold text-gray-900">{app.certificateType}</span></p>
          <p className="text-sm text-gray-700">Current status: <span className="font-bold text-gray-900">{app.statusLabel}</span></p>
        </section>

        <section className="bg-white border-2 border-gray-300 rounded-lg p-6 space-y-4">
          <h2 className="font-bold text-gray-900">Decision</h2>

          <div className="grid md:grid-cols-3 gap-3">
            <DecisionButton active={decision === "issued"} onClick={() => setDecision("issued")} label="Approve & Issue" icon={<CheckCircle size={16} />} />
            <DecisionButton active={decision === "correction-required"} onClick={() => setDecision("correction-required")} label="Request Correction" icon={<MessageSquare size={16} />} />
            <DecisionButton active={decision === "rejected"} onClick={() => setDecision("rejected")} label="Reject" icon={<XCircle size={16} />} />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-1">Officer Comments</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
              className="w-full border-2 border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button
            onClick={submitDecision}
            disabled={!decision || !comments.trim()}
            className="px-5 py-2 bg-[#000080] text-white rounded font-bold text-sm hover:bg-blue-900 disabled:bg-gray-300 disabled:text-gray-600"
          >
            Submit Decision
          </button>
        </section>
      </main>
    </div>
  );
}

function DecisionButton({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-3 py-2 border-2 rounded text-sm font-bold ${
        active ? "bg-[#000080] border-[#000080] text-white" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
