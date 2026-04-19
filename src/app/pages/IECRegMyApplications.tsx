import { Link } from "react-router";
import { Download, Eye, FolderOpen, Plus } from "lucide-react";

const applications = [
  {
    businessName: "Singh Exports Pvt. Ltd.",
    referenceNumber: "DGFT-2026-IEC-784512",
    entityType: "Private Limited Company",
    submittedDate: "15/01/2026",
    statusLabel: "IEC Issued",
    canDownload: true,
  },
  {
    businessName: "Global Trade Partners LLP",
    referenceNumber: "DGFT-2026-IEC-791034",
    entityType: "Limited Liability Partnership",
    submittedDate: "22/01/2026",
    statusLabel: "Documents Under Review",
    canDownload: false,
  },
  {
    businessName: "Vikram Singh (Proprietor)",
    referenceNumber: "DGFT-2026-IEC-795678",
    entityType: "Proprietorship Firm",
    submittedDate: "28/01/2026",
    statusLabel: "Clarification Requested",
    canDownload: false,
  },
];

export default function IECRegMyApplications() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1100px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
              <FolderOpen size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">IEC Registration</p>
              <h1 className="text-xl font-bold text-foreground">My Applications</h1>
            </div>
          </div>
          <Link to="/services/iec-registration/start" className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded font-bold text-sm hover:bg-green-600">
            <Plus size={16} /> New Application
          </Link>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-6 py-8 space-y-4">
        {applications.map((app) => (
          <article key={app.referenceNumber} className="bg-card border-2 border-border rounded-lg p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-bold text-foreground">{app.businessName}</h2>
                <p className="text-sm text-muted-foreground">{app.referenceNumber} • {app.entityType}</p>
                <p className="text-sm text-muted-foreground mt-1">Submitted: {app.submittedDate}</p>
              </div>
              <span className="px-3 py-1 border-2 border-border rounded text-xs font-bold text-muted-foreground">{app.statusLabel}</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Link to="/services/iec-registration/status-tracker" className="inline-flex items-center gap-2 px-3 py-2 border-2 border-border rounded text-sm font-bold text-muted-foreground hover:bg-background">
                <Eye size={16} /> Track
              </Link>
              {app.canDownload && (
                <Link to="/services/iec-registration/certificate" className="inline-flex items-center gap-2 px-3 py-2 bg-green-700 text-white rounded text-sm font-bold hover:bg-green-600">
                  <Download size={16} /> Download
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
