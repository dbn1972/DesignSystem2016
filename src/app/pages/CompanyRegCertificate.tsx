import { Download, QrCode } from "lucide-react";

export default function CompanyRegCertificate() {
  const company = {
    companyName: "TechVentures Private Limited",
    cin: "U72200MH2026PTC123456",
    referenceNumber: "MCA-2026-REG-784512",
    dateOfIncorporation: "15/01/2026",
    registeredOffice: "42, Tech Park, Andheri East, Mumbai - 400069, Maharashtra",
    entityType: "Private Limited Company",
    authorizedCapital: "₹10,00,000",
    paidUpCapital: "₹1,00,000",
    statusLabel: "Incorporated",
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-foreground">Certificate of Incorporation</h1>
          <p className="text-sm text-muted-foreground">Reference: {company.referenceNumber}</p>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-card border-2 border-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-foreground mb-3">{company.companyName}</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <Detail label="Corporate Identity Number (CIN)" value={company.cin} />
            <Detail label="Entity Type" value={company.entityType} />
            <Detail label="Date of Incorporation" value={company.dateOfIncorporation} />
            <Detail label="Status" value={company.statusLabel} />
            <Detail label="Authorized Capital" value={company.authorizedCapital} />
            <Detail label="Paid-up Capital" value={company.paidUpCapital} />
          </div>
          <div className="mt-4 text-sm">
            <Detail label="Registered Office" value={company.registeredOffice} />
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
