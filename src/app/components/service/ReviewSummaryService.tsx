import { useMemo } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Download, Edit2, FileText, MapPin, Upload } from "lucide-react";

import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import { loadReviewSummaryData } from "../../services/reviewDeclarationService";

interface ReviewSummaryServiceProps {
  category: string;
  title: string;
  serviceName: string;
  editPersonalPath: string;
  editAddressPath: string;
  editAdditionalPath: string;
  editDocumentsPath: string;
  backPath: string;
  nextPath: string;
  codeDownloadPath?: string;
}

export function ReviewSummaryService({
  category,
  title,
  serviceName,
  editPersonalPath,
  editAddressPath,
  editAdditionalPath,
  editDocumentsPath,
  backPath,
  nextPath,
  codeDownloadPath,
}: ReviewSummaryServiceProps) {
  const navigate = useNavigate();
  const { draft, uploadedCount } = useMemo(() => loadReviewSummaryData(), []);

  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader icon={FileText} iconColor="bg-blue-700" category={category} title={title} />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 space-y-5">
        <Section title="Personal Information" icon={<FileText size={18} />} editLink={editPersonalPath}>
          <ReviewItem label="Full Name" value={draft.personal.fullName} />
          <ReviewItem label="Mobile" value={draft.personal.mobileNumber} />
          <ReviewItem label="Email" value={draft.personal.email || "-"} />
          <ReviewItem label="Aadhaar" value={draft.personal.aadhaarNumber || "-"} />
        </Section>

        <Section title="Address Details" icon={<MapPin size={18} />} editLink={editAddressPath}>
          <ReviewItem label="Address" value={`${draft.address.addressLine1} ${draft.address.addressLine2}`.trim() || "-"} />
          <ReviewItem label="City / District" value={`${draft.address.city} / ${draft.address.district}`.trim() || "-"} />
          <ReviewItem label="State" value={draft.address.state || "-"} />
          <ReviewItem label="PIN Code" value={draft.address.pincode || "-"} />
        </Section>

        <Section title="Additional Information" icon={<FileText size={18} />} editLink={editAdditionalPath}>
          <ReviewItem label="Certificate Type" value={draft.additional.certificateType} />
          <ReviewItem label="Purpose" value={draft.additional.purpose || "-"} />
          <ReviewItem label="Occupation" value={draft.additional.occupation || "-"} />
          <ReviewItem label="Annual Income" value={draft.additional.annualIncome || "-"} />
        </Section>

        <Section title="Uploaded Documents" icon={<Upload size={18} />} editLink={editDocumentsPath}>
          <ReviewItem label="Uploaded" value={`${uploadedCount} of ${draft.documents.length}`} />
          {draft.documents.map((doc) => (
            <ReviewItem
              key={doc.id}
              label={doc.name}
              value={doc.status === "uploaded" ? doc.fileName || "Uploaded" : "Pending"}
            />
          ))}
        </Section>

        <div className="flex items-center justify-between gap-3 flex-wrap">
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
              onClick={() => navigate(nextPath)}
              className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded font-bold text-sm hover:opacity-90"
            >
              Proceed to Declaration
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Review Summary" />
    </div>
  );
}

function Section({
  title,
  icon,
  editLink,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  editLink: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="px-5 py-4 border-b-2 border-border flex items-center justify-between">
        <h2 className="font-bold text-foreground flex items-center gap-2">
          {icon}
          {title}
        </h2>
        <Link to={editLink} className="text-sm text-primary font-bold hover:underline inline-flex items-center gap-1">
          <Edit2 size={14} />
          Edit
        </Link>
      </div>
      <div className="p-5 grid md:grid-cols-2 gap-3">{children}</div>
    </section>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-bold text-foreground">{value || "-"}</p>
    </div>
  );
}
