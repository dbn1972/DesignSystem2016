import { Download, QrCode } from "lucide-react";

export default function MSMERegCertificate() {
  const enterprise = {
    enterpriseName: "Kumar Manufacturing Works",
    udyamNumber: "UDYAM-MH-26-0012345",
    referenceNumber: "MSME-2026-UDY-784512",
    dateOfRegistration: "15/01/2026",
    enterpriseAddress: "Plot No. 42, Industrial Area, Bhosari, Pune - 411026, Maharashtra",
    classification: "Micro Enterprise",
    activityType: "Manufacturing",
    nicCode: "25110 — Manufacture of structural metal products",
    investmentInPlant: "₹45,00,000",
    turnover: "₹2,10,00,000",
    statusLabel: "Active",
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-foreground">Udyam Registration Certificate</h1>
          <p className="text-sm text-muted-foreground">Reference: {enterprise.referenceNumber}</p>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-card border-2 border-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-foreground mb-3">{enterprise.enterpriseName}</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <Detail label="Udyam Registration Number" value={enterprise.udyamNumber} />
            <Detail label="Enterprise Classification" value={enterprise.classification} />
            <Detail label="Date of Registration" value={enterprise.dateOfRegistration} />
            <Detail label="Status" value={enterprise.statusLabel} />
            <Detail label="Type of Activity" value={enterprise.activityType} />
            <Detail label="NIC Code" value={enterprise.nicCode} />
            <Detail label="Investment in Plant & Machinery" value={enterprise.investmentInPlant} />
            <Detail label="Annual Turnover" value={enterprise.turnover} />
          </div>
          <div className="mt-4 text-sm">
            <Detail label="Enterprise Address" value={enterprise.enterpriseAddress} />
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded font-bold text-sm hover:bg-green-600">
              <Download size={16} /> Download PDF
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded font-bold text-sm text-muted-foreground hover:bg-background">
              <QrCode size={16} /> Verify via QR
            </button>
          </div>
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
