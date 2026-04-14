import { Link } from "react-router";
import { CheckCircle, CreditCard, Download, Printer } from "lucide-react";

import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import { loadPaymentReceiptDataOrFallback } from "../../services/paymentService";

interface PaymentReceiptServiceProps {
  category: string;
  title: string;
  serviceName: string;
  statusTrackerPath: string;
  dashboardPath: string;
  codeDownloadPath?: string;
}

export function PaymentReceiptService({
  category,
  title,
  serviceName,
  statusTrackerPath,
  dashboardPath,
  codeDownloadPath,
}: PaymentReceiptServiceProps) {
  const receipt = loadPaymentReceiptDataOrFallback();

  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader
        icon={CreditCard}
        iconColor="bg-green-600"
        category={category}
        title={title}
        rightContent={
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded bg-card text-muted-foreground text-sm font-bold hover:bg-muted"
            >
              <Printer size={16} />
              Print
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-primary-foreground text-sm font-bold hover:opacity-90"
            >
              <Download size={16} />
              Download PDF
            </button>
          </div>
        }
      />

      <main className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8 space-y-6">
        <section className="bg-green-50 border-2 border-green-300 rounded-lg p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-3 bg-[var(--ux4g-color-feedback-success)] rounded-full flex items-center justify-center">
            <CheckCircle size={32} className="text-white" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Payment Successful</h2>
          <p className="text-sm text-muted-foreground mt-1">Your payment has been recorded and linked to your application.</p>
        </section>

        <section className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b-2 border-border flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs text-muted-foreground">Transaction ID</p>
              <p className="font-mono text-lg font-bold text-foreground">{receipt.transactionId}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Reference Number</p>
              <p className="font-bold text-foreground">{receipt.referenceNumber}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Status</p>
              <p className="font-bold text-[var(--ux4g-color-feedback-success)]">{receipt.paymentStatus}</p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <ReceiptField label="Payment Date" value={receipt.paymentDate} />
              <ReceiptField label="Payment Time" value={receipt.paymentTime} />
              <ReceiptField label="Applicant Name" value={receipt.applicantName} />
              <ReceiptField label="Service" value={receipt.serviceLabel} />
              <ReceiptField label="Payment Method" value={receipt.paymentMethod} />
              <ReceiptField label="Bank Reference" value={receipt.bankReference} />
            </div>

            <div className="border-2 border-border rounded-lg p-4">
              <h3 className="font-bold text-foreground mb-3">Amount Details</h3>
              <div className="space-y-2 text-sm">
                <PaymentRow label="Application Fee" amount={receipt.applicationFee} />
                <PaymentRow label="Processing Fee" amount={receipt.processingFee} />
                <PaymentRow label="GST" amount={receipt.gst} />
                <div className="border-t-2 border-border pt-2 mt-2">
                  <PaymentRow label="Total Paid" amount={receipt.total} strong />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-foreground">What&apos;s Next</h3>
          <p className="text-sm text-muted-foreground">You can track progress, receive notifications, and download your issued document after approval.</p>

          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              to={statusTrackerPath}
              className="inline-flex items-center justify-center px-4 py-3 bg-[var(--ux4g-color-feedback-success)] text-primary-foreground rounded font-bold text-sm hover:opacity-90"
            >
              Track Application Status
            </Link>
            <Link
              to={dashboardPath}
              className="inline-flex items-center justify-center px-4 py-3 border-2 border-border rounded font-bold text-sm text-muted-foreground hover:bg-muted"
            >
              Go to Dashboard
            </Link>
          </div>

          {codeDownloadPath && (
            <div className="pt-2">
              <Link
                to={codeDownloadPath}
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded font-bold text-sm text-primary hover:bg-muted"
              >
                <Download size={15} />
                Download React code
              </Link>
            </div>
          )}
        </section>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Payment Receipt" />
    </div>
  );
}

function ReceiptField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-bold text-foreground">{value}</p>
    </div>
  );
}

function PaymentRow({ label, amount, strong }: { label: string; amount: number; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={strong ? "font-bold text-foreground" : "text-muted-foreground"}>{label}</span>
      <span className={strong ? "font-bold text-foreground" : "text-foreground"}>₹{amount}</span>
    </div>
  );
}
