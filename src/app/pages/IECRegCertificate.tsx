import { Download, QrCode } from "lucide-react";

export default function IECRegCertificate() {
  const registration = {
    businessName: "Singh Exports Pvt. Ltd.",
    iecNumber: "0526012345",
    referenceNumber: "DGFT-2026-IEC-784512",
    dateOfIssue: "20/01/2026",
    businessAddress: "15, Export Tower, Nariman Point, Mumbai - 400021, Maharashtra",
    entityType: "Private Limited Company",
    panNumber: "AABCS1234F",
    natureOfConcern: "Proprietorship",
    statusLabel: "Active",
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-foreground">IEC Certificate</h1>
          <p className="text-sm text-muted-foreground">Reference: {registration.referenceNumber}</p>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-card border-2 border-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-foreground mb-3">{registration.businessName}</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <Detail label="Import Export Code (IEC)" value={registration.iecNumber} />
            <Detail label="Entity Type" value={registration.entityType} />
            <Detail label="Date of Issue" value={registration.dateOfIssue} />
            <Detail label="Status" value={registration.statusLabel} />
            <Detail label="PAN Number" value={registration.panNumber} />
            <Detail label="Nature of Concern" value={registration.natureOfConcern} />
          </div>
          <div className="mt-4 text-sm">
            <Detail label="Business Address" value={registration.businessAddress} />
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
