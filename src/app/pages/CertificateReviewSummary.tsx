import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Edit2, FileText, MapPin, Upload } from "lucide-react";
import { useMemo } from "react";
import { loadCertificateDraft } from "../services/certificateFlow";

export default function CertificateReviewSummary() {
  const navigate = useNavigate();
  const draft = useMemo(() => loadCertificateDraft(), []);
  const uploadedCount = draft.documents.filter((d) => d.status === "uploaded").length;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <h1 className="text-xl font-bold text-gray-900">Review Summary</h1>
          <p className="text-sm text-gray-600">Confirm your details before declaration and payment.</p>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-8 space-y-5">
        <Section title="Personal Information" icon={<FileText size={18} />} editLink="/reference-service/certificate/form/personal">
          <ReviewItem label="Full Name" value={draft.personal.fullName} />
          <ReviewItem label="Mobile" value={draft.personal.mobileNumber} />
          <ReviewItem label="Email" value={draft.personal.email || "-"} />
          <ReviewItem label="Aadhaar" value={draft.personal.aadhaarNumber || "-"} />
        </Section>

        <Section title="Address Details" icon={<MapPin size={18} />} editLink="/reference-service/certificate/form/address">
          <ReviewItem label="Address" value={`${draft.address.addressLine1} ${draft.address.addressLine2}`.trim() || "-"} />
          <ReviewItem label="City / District" value={`${draft.address.city} / ${draft.address.district}`.trim() || "-"} />
          <ReviewItem label="State" value={draft.address.state || "-"} />
          <ReviewItem label="PIN Code" value={draft.address.pincode || "-"} />
        </Section>

        <Section title="Additional Information" icon={<FileText size={18} />} editLink="/reference-service/certificate/form/additional">
          <ReviewItem label="Certificate Type" value={draft.additional.certificateType} />
          <ReviewItem label="Purpose" value={draft.additional.purpose || "-"} />
          <ReviewItem label="Occupation" value={draft.additional.occupation || "-"} />
          <ReviewItem label="Annual Income" value={draft.additional.annualIncome || "-"} />
        </Section>

        <Section title="Uploaded Documents" icon={<Upload size={18} />} editLink="/reference-service/certificate/document-upload">
          <ReviewItem label="Uploaded" value={`${uploadedCount} of ${draft.documents.length}`} />
          {draft.documents.map((doc) => (
            <ReviewItem
              key={doc.id}
              label={doc.name}
              value={doc.status === "uploaded" ? doc.fileName || "Uploaded" : "Pending"}
            />
          ))}
        </Section>

        <div className="flex items-center justify-between">
          <Link
            to="/reference-service/certificate/document-upload"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded font-bold text-sm text-gray-700 hover:bg-gray-50"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
          <button
            onClick={() => navigate("/reference-service/certificate/declaration")}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#000080] text-white rounded font-bold text-sm hover:bg-blue-900"
          >
            Proceed to Declaration
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
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
    <section className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="px-5 py-4 border-b-2 border-gray-200 flex items-center justify-between">
        <h2 className="font-bold text-gray-900 flex items-center gap-2">
          {icon}
          {title}
        </h2>
        <Link to={editLink} className="text-sm text-[#000080] font-bold hover:underline inline-flex items-center gap-1">
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
      <p className="text-xs text-gray-600">{label}</p>
      <p className="text-sm font-bold text-gray-900">{value || "-"}</p>
    </div>
  );
}
