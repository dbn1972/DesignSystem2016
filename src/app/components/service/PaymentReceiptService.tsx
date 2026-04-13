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
    <div className="min-h-screen bg-gray-50">
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
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded bg-white text-gray-700 text-sm font-bold hover:bg-gray-50"
            >
              <Printer size={16} />
              Print
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#000080] text-white text-sm font-bold hover:bg-blue-900"
            >
              <Download size={16} />
              Download PDF
            </button>
          </div>
        }
      />

      <main className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8 space-y-6">
        <section className="bg-green-50 border-2 border-green-300 rounded-lg p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-3 bg-green-600 rounded-full flex items-center justify-center">
            <CheckCircle size={32} className="text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Payment Successful</h2>
          <p className="text-sm text-gray-700 mt-1">Your payment has been recorded and linked to your application.</p>
        </section>

        <section className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b-2 border-gray-200 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs text-gray-600">Transaction ID</p>
              <p className="font-mono text-lg font-bold text-gray-900">{receipt.transactionId}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">Reference Number</p>
              <p className="font-bold text-gray-900">{receipt.referenceNumber}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">Status</p>
              <p className="font-bold text-green-700">{receipt.paymentStatus}</p>
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

            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-3">Amount Details</h3>
              <div className="space-y-2 text-sm">
                <PaymentRow label="Application Fee" amount={receipt.applicationFee} />
                <PaymentRow label="Processing Fee" amount={receipt.processingFee} />
                <PaymentRow label="GST" amount={receipt.gst} />
                <div className="border-t-2 border-gray-300 pt-2 mt-2">
                  <PaymentRow label="Total Paid" amount={receipt.total} strong />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-2 border-gray-300 rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-gray-900">What&apos;s Next</h3>
          <p className="text-sm text-gray-700">You can track progress, receive notifications, and download your issued document after approval.</p>

          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              to={statusTrackerPath}
              className="inline-flex items-center justify-center px-4 py-3 bg-[#138808] text-white rounded font-bold text-sm hover:bg-green-700"
            >
              Track Application Status
            </Link>
            <Link
              to={dashboardPath}
              className="inline-flex items-center justify-center px-4 py-3 border-2 border-gray-300 rounded font-bold text-sm text-gray-700 hover:bg-gray-50"
            >
              Go to Dashboard
            </Link>
          </div>

          {codeDownloadPath && (
            <div className="pt-2">
              <Link
                to={codeDownloadPath}
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded font-bold text-sm text-[#000080] hover:bg-gray-50"
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
      <p className="text-xs text-gray-600">{label}</p>
      <p className="text-sm font-bold text-gray-900">{value}</p>
    </div>
  );
}

function PaymentRow({ label, amount, strong }: { label: string; amount: number; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={strong ? "font-bold text-gray-900" : "text-gray-700"}>{label}</span>
      <span className={strong ? "font-bold text-gray-900" : "text-gray-900"}>₹{amount}</span>
    </div>
  );
}
