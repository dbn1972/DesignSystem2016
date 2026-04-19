import { Link } from "react-router";
import { Bell, CheckCircle, Download } from "lucide-react";

export default function MSMERegSubmission() {
  const referenceNumber = "MSME-2026-UDY-" + String(Math.floor(100000 + Math.random() * 900000));
  const submittedDate = new Date().toLocaleDateString("en-IN");

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-6 py-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Udyam Registration Completed</h1>
          <p className="text-sm text-muted-foreground mt-2">Your MSME/Udyam registration has been processed instantly. Your Udyam Number is ready.</p>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-card border-2 border-border rounded-lg p-6">
          <p className="text-xs text-muted-foreground">Registration Reference Number</p>
          <p className="text-2xl font-bold text-foreground font-mono">{referenceNumber}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-5 text-sm">
            <Detail label="Applicant" value="Rajesh Kumar" />
            <Detail label="Enterprise Classification" value="Micro Enterprise" />
            <Detail label="Registration Date" value={submittedDate} />
            <Detail label="Current Status" value="Registered — Udyam Number Issued" />
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-3">
            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded font-bold text-sm hover:opacity-90">
              <Download size={16} /> Download Certificate
            </button>
            <Link to="/services/msme-registration/status-tracker" className="inline-flex items-center justify-center px-4 py-2 border-2 border-primary text-primary rounded font-bold text-sm hover:bg-blue-50 dark:bg-blue-900/20">
              View Details
            </Link>
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
          <h2 className="font-bold text-foreground flex items-center gap-2">
            <Bell size={18} className="text-blue-700" /> What Happens Next
          </h2>
          <ol className="list-decimal list-inside text-sm text-muted-foreground mt-3 space-y-1">
            <li>Your Udyam Registration Number has been generated instantly.</li>
            <li>Download your Udyam Registration Certificate from the portal.</li>
            <li>Use your Udyam Number to avail government benefits and subsidies.</li>
            <li>Update your registration details annually if investment or turnover changes.</li>
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
