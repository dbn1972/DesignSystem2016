import { Link } from "react-router";
import { Download, Eye, FolderOpen, Plus } from "lucide-react";

const applications = [
  {
    enterpriseName: "Kumar Manufacturing Works",
    referenceNumber: "MSME-2026-UDY-784512",
    classification: "Micro Enterprise",
    submittedDate: "15/01/2026",
    statusLabel: "Udyam Number Issued",
    canDownload: true,
  },
  {
    enterpriseName: "TechServe Solutions",
    referenceNumber: "MSME-2026-UDY-791034",
    classification: "Small Enterprise",
    submittedDate: "22/01/2026",
    statusLabel: "Registered",
    canDownload: true,
  },
  {
    enterpriseName: "GreenPack Industries",
    referenceNumber: "MSME-2026-UDY-795678",
    classification: "Medium Enterprise",
    submittedDate: "28/01/2026",
    statusLabel: "Re-classification Pending",
    canDownload: false,
  },
];

export default function MSMERegMyApplications() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1100px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
              <FolderOpen size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">MSME/Udyam Registration</p>
              <h1 className="text-xl font-bold text-foreground">My Registrations</h1>
            </div>
          </div>
          <Link to="/services/msme-registration/start" className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded font-bold text-sm hover:bg-green-600">
            <Plus size={16} /> New Registration
          </Link>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-6 py-8 space-y-4">
        {applications.map((app) => (
          <article key={app.referenceNumber} className="bg-card border-2 border-border rounded-lg p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-bold text-foreground">{app.enterpriseName}</h2>
                <p className="text-sm text-muted-foreground">{app.referenceNumber} • {app.classification}</p>
                <p className="text-sm text-muted-foreground mt-1">Registered: {app.submittedDate}</p>
              </div>
              <span className="px-3 py-1 border-2 border-border rounded text-xs font-bold text-muted-foreground">{app.statusLabel}</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Link to="/services/msme-registration/status-tracker" className="inline-flex items-center gap-2 px-3 py-2 border-2 border-border rounded text-sm font-bold text-muted-foreground hover:bg-background">
                <Eye size={16} /> View
              </Link>
              {app.canDownload && (
                <Link to="/services/msme-registration/certificate" className="inline-flex items-center gap-2 px-3 py-2 bg-green-700 text-white rounded text-sm font-bold hover:bg-green-600">
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
