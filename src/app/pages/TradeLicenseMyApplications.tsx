import { Link } from "react-router";
import { Download, Eye, FolderOpen, Plus } from "lucide-react";

const applications = [
  {
    businessName: "Kumar General Store",
    referenceNumber: "MC-2026-TL-784512",
    category: "Retail",
    submittedDate: "10/01/2026",
    statusLabel: "License Issued",
    canDownload: true,
  },
  {
    businessName: "Spice Kitchen Restaurant",
    referenceNumber: "MC-2026-TL-791034",
    category: "Food & Beverage",
    submittedDate: "18/01/2026",
    statusLabel: "Inspection Scheduled",
    canDownload: false,
  },
  {
    businessName: "HealthPlus Pharmacy",
    referenceNumber: "MC-2026-TL-795678",
    category: "Healthcare",
    submittedDate: "25/01/2026",
    statusLabel: "Documents Under Review",
    canDownload: false,
  },
];

export default function TradeLicenseMyApplications() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1100px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
              <FolderOpen size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Trade License</p>
              <h1 className="text-xl font-bold text-foreground">My Applications</h1>
            </div>
          </div>
          <Link to="/services/trade-license/start" className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded font-bold text-sm hover:bg-green-600">
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
                <p className="text-sm text-muted-foreground">{app.referenceNumber} • {app.category}</p>
                <p className="text-sm text-muted-foreground mt-1">Submitted: {app.submittedDate}</p>
              </div>
              <span className="px-3 py-1 border-2 border-border rounded text-xs font-bold text-muted-foreground">{app.statusLabel}</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Link to="/services/trade-license/status-tracker" className="inline-flex items-center gap-2 px-3 py-2 border-2 border-border rounded text-sm font-bold text-muted-foreground hover:bg-background">
                <Eye size={16} /> Track
              </Link>
              {app.canDownload && (
                <Link to="/services/trade-license/certificate" className="inline-flex items-center gap-2 px-3 py-2 bg-green-700 text-white rounded text-sm font-bold hover:bg-green-600">
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
