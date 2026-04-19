import { Link } from "react-router";
import { Bell, CheckCircle, Download } from "lucide-react";

export default function FSSAILicenseSubmission() {
  const referenceNumber = "FSSAI-2026-LIC-" + String(Math.floor(100000 + Math.random() * 900000));
  const submittedDate = new Date().toLocaleDateString("en-IN");

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-6 py-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">License Application Submitted</h1>
          <p className="text-sm text-muted-foreground mt-2">Your FSSAI food license application is now under review.</p>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-card border-2 border-border rounded-lg p-6">
          <p className="text-xs text-muted-foreground">Reference Number</p>
          <p className="text-2xl font-bold text-foreground font-mono">{referenceNumber}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-5 text-sm">
            <Detail label="Applicant" value="Anita Desai" />
            <Detail label="License Type" value="State License" />
            <Detail label="Submission Date" value={submittedDate} />
            <Detail label="Current Status" value="Submitted — Under Review" />
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-3">
            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded font-bold text-sm hover:opacity-90">
              <Download size={16} /> Download Receipt
            </button>
            <Link
              to="/services/fssai-license/status-tracker"
              className="inline-flex items-center justify-center px-4 py-2 border-2 border-primary text-primary rounded font-bold text-sm hover:bg-blue-50 dark:bg-blue-900/20"
            >
              Track Status
            </Link>
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
          <h2 className="font-bold text-foreground flex items-center gap-2">
            <Bell size={18} className="text-blue-700" /> What Happens Next
          </h2>
          <ol className="list-decimal list-inside text-sm text-muted-foreground mt-3 space-y-1">
            <li>Your application and documents will be verified by the Food Safety Officer (FSO).</li>
            <li>An inspection of your food business premises may be scheduled.</li>
            <li>Upon approval, your 14-digit FSSAI License Number will be generated.</li>
            <li>FSSAI License Certificate will be available for download.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-bold text-foreground">{value}</p>
    </div>
  );
}
