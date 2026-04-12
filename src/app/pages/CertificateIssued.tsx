import { Download, QrCode } from "lucide-react";
import { getCertificateApplications } from "../services/certificateFlow";

export default function CertificateIssued() {
  const issued = getCertificateApplications().find((app) => app.status === "issued" || app.status === "approved");

  if (!issued) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-[900px] mx-auto bg-white border-2 border-gray-300 rounded-lg p-6">
          <h1 className="text-xl font-bold text-gray-900 mb-2">No issued certificate available</h1>
          <p className="text-sm text-gray-700">Your certificate will appear here once it is approved and issued by an officer.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1000px] mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Certificate Issued</h1>
          <p className="text-sm text-gray-700">Reference: {issued.referenceNumber}</p>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-white border-2 border-gray-300 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">{issued.certificateType}</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <Detail label="Applicant" value={issued.applicantName} />
            <Detail label="Reference" value={issued.referenceNumber} />
            <Detail label="Certificate Number" value={issued.certificateNumber || "Will be assigned at issuance"} />
            <Detail label="Status" value={issued.statusLabel} />
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#138808] text-white rounded font-bold text-sm hover:bg-green-700">
              <Download size={16} />
              Download PDF
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded font-bold text-sm text-gray-700 hover:bg-gray-50">
              <QrCode size={16} />
              Verify via QR
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-600">{label}</p>
      <p className="font-bold text-gray-900">{value}</p>
    </div>
  );
}
