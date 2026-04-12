import { Link } from "react-router";
import { CreditCard, ArrowRight, Info } from "lucide-react";

export default function CertificatePaymentSummary() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-pink-600 rounded flex items-center justify-center">
              <CreditCard size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Application Fee Payment</div>
              <h1 className="text-2xl font-bold text-gray-900">Pay Application Fee</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="max-w-2xl mx-auto">
          
          {/* Fee Summary */}
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden mb-6">
            <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
              <h2 className="font-bold text-gray-900">Fee Summary</h2>
            </div>
            <div className="p-8">
              <div className="space-y-4 mb-6">
                <FeeItem label="Application Processing Fee" amount="₹100" />
                <FeeItem label="Service Charge" amount="₹50" />
                <FeeItem label="Payment Gateway Charges" amount="₹5" />
                <div className="border-t-2 border-gray-300 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900 text-lg">Total Amount</span>
                    <span className="font-bold text-gray-900 text-2xl">₹155</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5 mb-6">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm">
                  <Info size={18} className="text-[#000080]" />
                  Payment Information
                </h3>
                <p className="text-sm text-gray-700">
                  Payment is secure and processed through government-approved payment gateway. 
                  Application fees are non-refundable once payment is successful.
                </p>
              </div>

              <Link
                to="/reference-service/certificate/submission-success"
                className="block w-full px-6 py-4 bg-[#138808] text-white font-bold rounded text-center hover:bg-green-700 transition-colors"
              >
                Proceed to Payment
                <ArrowRight size={20} className="inline-block ml-2" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Fee Payment</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeeItem({ label, amount }: { label: string; amount: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-700">{label}</span>
      <span className="font-bold text-gray-900">{amount}</span>
    </div>
  );
}
