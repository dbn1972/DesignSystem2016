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
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-6 py-5">
          <Link to="/reference-service/certificate/officer/cases" className="text-sm text-primary font-bold hover:underline inline-flex items-center gap-1">
            <ArrowLeft size={14} /> Back to queue
          </Link>
          <h1 className="text-xl font-bold text-foreground mt-2">Officer Review: {app.referenceNumber}</h1>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-card border-2 border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Applicant: <span className="font-bold text-foreground">{app.applicantName}</span></p>
          <p className="text-sm text-muted-foreground">Certificate: <span className="font-bold text-foreground">{app.certificateType}</span></p>
          <p className="text-sm text-muted-foreground">Current status: <span className="font-bold text-foreground">{app.statusLabel}</span></p>
        </section>

        <section className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
          <h2 className="font-bold text-foreground">Decision</h2>

          <div className="grid md:grid-cols-3 gap-3">
            <DecisionButton active={decision === "issued"} onClick={() => setDecision("issued")} label="Approve & Issue" icon={<CheckCircle size={16} />} />
            <DecisionButton active={decision === "correction-required"} onClick={() => setDecision("correction-required")} label="Request Correction" icon={<MessageSquare size={16} />} />
            <DecisionButton active={decision === "rejected"} onClick={() => setDecision("rejected")} label="Reject" icon={<XCircle size={16} />} />
          </div>

          <div>
            <label className="block text-sm font-bold text-foreground mb-1">Officer Comments</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
              className="w-full border-2 border-border rounded px-3 py-2"
            />
          </div>

          <button
            onClick={submitDecision}
            disabled={!decision || !comments.trim()}
            className="px-5 py-2 bg-primary text-white rounded font-bold text-sm hover:opacity-90 disabled:bg-muted disabled:text-muted-foreground"
          >
            Submit Decision
          </button>
        </section>
      </div>
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
        active ? "bg-primary border-primary text-white" : "bg-card border-border text-muted-foreground hover:bg-background"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
