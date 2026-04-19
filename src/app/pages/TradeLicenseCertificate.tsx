import { Download, QrCode } from "lucide-react";

export default function TradeLicenseCertificate() {
  const license = {
    businessName: "Kumar General Store",
    licenseNumber: "MC/TL/2026/003456",
    referenceNumber: "MC-2026-TL-784512",
    dateOfIssue: "25/01/2026",
    validUntil: "31/03/2027",
    businessAddress: "Shop No. 5, Market Complex, Andheri West, Mumbai - 400058, Maharashtra",
    category: "Retail",
    ownerName: "Rajesh Kumar",
    municipalZone: "Zone 3 — Andheri",
    statusLabel: "Active",
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-foreground">Trade License Certificate</h1>
          <p className="text-sm text-muted-foreground">Reference: {license.referenceNumber}</p>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-card border-2 border-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-foreground mb-3">{license.businessName}</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <Detail label="License Number" value={license.licenseNumber} />
            <Detail label="Business Category" value={license.category} />
            <Detail label="Date of Issue" value={license.dateOfIssue} />
            <Detail label="Valid Until" value={license.validUntil} />
            <Detail label="Owner / Proprietor" value={license.ownerName} />
            <Detail label="Status" value={license.statusLabel} />
          </div>
          <div className="mt-4 text-sm">
            <Detail label="Business Address" value={license.businessAddress} />
            <div className="mt-2">
              <Detail label="Municipal Zone" value={license.municipalZone} />
            </div>
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
