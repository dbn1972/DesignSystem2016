import { Link } from "react-router";
import { Receipt, Download, Printer, CheckCircle, Mail } from "lucide-react";

export default function CertificatePaymentReceipt() {
  const receiptData = {
    transactionId: "TXN987654321",
    referenceNumber: "CERT-2026-MH-876543",
    paymentDate: "April 10, 2026",
    paymentTime: "3:32 PM",
    applicantName: "Priya Sharma",
    certificateType: "Income Certificate",
    applicationFee: 100,
    processingFee: 50,
    gst: 5,
    total: 155,
    paymentMethod: "UPI",
    upiId: "priya@upi",
    bankReference: "987654321098",
    status: "Success"
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300 print:hidden">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-green-600 rounded flex items-center justify-center">
                <Receipt size={28} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Payment Confirmation</div>
                <h1 className="text-2xl font-bold text-gray-900">Payment Receipt</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50"
              >
                <Printer size={18} />
                Print
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900">
                <Download size={18} />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="max-w-3xl mx-auto">
          
          {/* Success Message */}
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8 mb-6 text-center print:hidden">
            <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
            <p className="text-sm text-gray-700">
              Your payment has been received and your application is being processed
            </p>
          </div>

          {/* Receipt */}
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            
            {/* Header */}
            <div className="bg-[#FF9933] border-b-2 border-gray-300 px-8 py-6 text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-1">Government of India</div>
                <div className="text-sm text-white">Certificate Application Service</div>
              </div>
              <div className="h-1 bg-white my-4"></div>
              <div className="h-1 bg-[#138808] my-4"></div>
              <h2 className="text-xl font-bold text-gray-900">PAYMENT RECEIPT</h2>
            </div>

            {/* Receipt Details */}
            <div className="p-8">
              
              {/* Transaction Info */}
              <div className="mb-8">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Transaction ID</div>
                      <div className="text-lg font-bold text-gray-900 font-mono">{receiptData.transactionId}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Payment Status</div>
                      <div className="text-lg font-bold text-green-700">{receiptData.status}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 text-sm">
                  <ReceiptField label="Date" value={receiptData.paymentDate} />
                  <ReceiptField label="Time" value={receiptData.paymentTime} />
                  <ReceiptField label="Application Reference" value={receiptData.referenceNumber} />
                  <ReceiptField label="Bank Reference No." value={receiptData.bankReference} />
                </div>
              </div>

              {/* Applicant Details */}
              <div className="mb-8 pb-8 border-b-2 border-gray-300">
                <h3 className="font-bold text-gray-900 mb-4">Applicant Details</h3>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <ReceiptField label="Applicant Name" value={receiptData.applicantName} />
                  <ReceiptField label="Certificate Type" value={receiptData.certificateType} />
                </div>
              </div>

              {/* Payment Details */}
              <div className="mb-8 pb-8 border-b-2 border-gray-300">
                <h3 className="font-bold text-gray-900 mb-4">Payment Details</h3>
                <div className="space-y-3">
                  <PaymentRow label="Application Fee" amount={receiptData.applicationFee} />
                  <PaymentRow label="Processing Fee" amount={receiptData.processingFee} />
                  <PaymentRow label="GST (18%)" amount={receiptData.gst} />
                  <div className="pt-3 border-t-2 border-gray-300">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900 text-lg">Total Amount Paid</span>
                      <span className="font-bold text-gray-900 text-xl">₹{receiptData.total}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Payment Method</h3>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <ReceiptField label="Payment Mode" value={receiptData.paymentMethod} />
                  <ReceiptField label="UPI ID" value={receiptData.upiId} />
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Important Notes:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• This is a computer-generated receipt and does not require a signature</li>
                  <li>• Payment is non-refundable once the application is submitted</li>
                  <li>• Please save this receipt for your records</li>
                  <li>• Quote the transaction ID for any payment-related queries</li>
                  <li>• Receipt is valid for 90 days from date of issue</li>
                </ul>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-8 border-t-2 border-gray-300 text-center text-xs text-gray-600">
                <p>This is an electronically generated receipt</p>
                <p className="mt-1">Certificate Application Service • Government of India</p>
                <p className="mt-1">For queries: support@certificate.gov.in | 1800-111-1111</p>
              </div>

            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 print:hidden">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">What's Next?</h3>
              <div className="space-y-3">
                <NextStep
                  number={1}
                  text="Your application will be reviewed by our officers"
                  subtext="Estimated time: 7-10 working days"
                />
                <NextStep
                  number={2}
                  text="Track your application status using the reference number"
                  link="/reference-service/certificate/status-tracker"
                  linkText="Track Now"
                />
                <NextStep
                  number={3}
                  text="You will receive notifications via SMS and email at each stage"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Link
                to="/reference-service/certificate/status-tracker"
                className="flex-1 px-6 py-4 bg-[#138808] text-white font-bold rounded text-center hover:bg-green-700"
              >
                Track Application Status
              </Link>
              <Link
                to="/reference-service/certificate/my-applications"
                className="flex-1 px-6 py-4 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-center hover:bg-gray-50"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24 print:hidden">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Payment Receipt</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ReceiptField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-gray-600 mb-1">{label}</div>
      <div className="font-bold text-gray-900">{value}</div>
    </div>
  );
}

function PaymentRow({ label, amount }: { label: string; amount: number }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-700">{label}</span>
      <span className="font-bold text-gray-900">₹{amount}</span>
    </div>
  );
}

function NextStep({ number, text, subtext, link, linkText }: any) {
  return (
    <div className="flex items-start gap-3 p-4 bg-blue-50 border-2 border-blue-300 rounded">
      <div className="w-6 h-6 bg-[#000080] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
        {number}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-900 font-bold">{text}</p>
        {subtext && <p className="text-xs text-gray-600 mt-1">{subtext}</p>}
        {link && (
          <Link to={link} className="text-sm text-[#000080] font-bold hover:underline mt-2 inline-block">
            {linkText} →
          </Link>
        )}
      </div>
    </div>
  );
}
