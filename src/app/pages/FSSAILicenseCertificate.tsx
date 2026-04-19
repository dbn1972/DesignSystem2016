import { Download, QrCode } from "lucide-react";

export default function FSSAILicenseCertificate() {
  const license = {
    businessName: "Desai's Kitchen Pvt. Ltd.",
    licenseNumber: "10026123456789",
    referenceNumber: "FSSAI-2026-LIC-784512",
    dateOfIssue: "15/02/2026",
    validUpto: "14/02/2031",
    premisesAddress: "12, Food Park, Bandra West, Mumbai - 400050, Maharashtra",
    licenseType: "State License",
    foodCategory: "Dairy Products, Bakery & Confectionery",
    operatorName: "Anita Desai",
    statusLabel: "Active",
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-foreground">FSSAI License Certificate</h1>
          <p className="text-sm text-muted-foreground">Reference: {license.referenceNumber}</p>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-card border-2 border-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-foreground mb-3">{license.businessName}</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <Detail label="FSSAI License Number (14-digit)" value={license.licenseNumber} />
            <Detail label="License Type" value={license.licenseType} />
            <Detail label="Date of Issue" value={license.dateOfIssue} />
            <Detail label="Valid Upto" value={license.validUpto} />
            <Detail label="Food Business Operator" value={license.operatorName} />
            <Detail label="Status" value={license.statusLabel} />
            <Detail label="Food Category" value={license.foodCategory} />
          </div>
          <div className="mt-4 text-sm">
            <Detail label="Premises Address" value={license.premisesAddress} />
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
