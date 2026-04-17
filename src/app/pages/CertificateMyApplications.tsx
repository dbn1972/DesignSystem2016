import { Link } from "react-router";
import { Download, Eye, FolderOpen, Plus } from "lucide-react";
import { getCertificateApplications, getFallbackApplications } from "../services/certificateFlow";

export default function CertificateMyApplications() {
  const applications = getCertificateApplications();
  const list = applications.length ? applications : getFallbackApplications();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1100px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
              <FolderOpen size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">User Dashboard</p>
              <h1 className="text-xl font-bold text-foreground">My Applications</h1>
            </div>
          </div>
          <Link to="/reference-service/demo" className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded font-bold text-sm hover:bg-green-600">
            <Plus size={16} />
            New Application
          </Link>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-6 py-8 space-y-4">
        {list.map((app) => (
          <article key={app.referenceNumber} className="bg-card border-2 border-border rounded-lg p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-bold text-foreground">{app.certificateType}</h2>
                <p className="text-sm text-muted-foreground">{app.referenceNumber}</p>
                <p className="text-sm text-muted-foreground mt-1">Submitted: {app.submittedDate}</p>
              </div>
              <span className="px-3 py-1 border-2 border-border rounded text-xs font-bold text-muted-foreground">{app.statusLabel}</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Link to="/reference-service/certificate/status-tracker" className="inline-flex items-center gap-2 px-3 py-2 border-2 border-border rounded text-sm font-bold text-muted-foreground hover:bg-background">
                <Eye size={16} />
                Track
              </Link>
              {app.canDownload ? (
                <Link to="/reference-service/certificate/issued" className="inline-flex items-center gap-2 px-3 py-2 bg-green-700 text-white rounded text-sm font-bold hover:bg-green-600">
                  <Download size={16} />
                  Download
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
