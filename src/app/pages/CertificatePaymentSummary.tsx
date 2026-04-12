import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AlertCircle, ArrowLeft, CreditCard, RefreshCw } from "lucide-react";
import {
  loadCertificateDraft,
  processCertificatePayment,
  submitCertificateApplication,
  updateCertificateDraft,
} from "../services/certificateFlow";

export default function CertificatePaymentSummary() {
  const navigate = useNavigate();
  const draft = useMemo(() => loadCertificateDraft(), []);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const handlePay = () => {
    setIsProcessing(true);
    setPaymentError("");
    updateCertificateDraft({ payment: { ...draft.payment, status: "processing" } });

    window.setTimeout(() => {
      const result = processCertificatePayment(loadCertificateDraft());
      setIsProcessing(false);

      if (!result.success) {
        setPaymentError("Payment failed due to a network issue. Please retry.");
        return;
      }

      submitCertificateApplication();
      navigate("/reference-service/certificate/submission-success");
    }, 900);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[900px] mx-auto px-6 py-5 flex items-center gap-3">
          <div className="w-12 h-12 bg-pink-600 rounded flex items-center justify-center">
            <CreditCard size={24} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Secure Payment</p>
            <h1 className="text-xl font-bold text-gray-900">Application Fee Payment</h1>
          </div>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-white border-2 border-gray-300 rounded-lg p-6">
          <h2 className="font-bold text-gray-900 mb-4">Fee Summary</h2>
          <div className="space-y-2 text-sm">
            <Line label="Application Processing" value="Rs 100" />
            <Line label="Service Charge" value="Rs 50" />
            <Line label="Gateway Charge" value="Rs 5" />
            <div className="border-t-2 border-gray-300 pt-2 mt-2">
              <Line label="Total Amount" value={`Rs ${draft.payment.amount}`} strong />
            </div>
          </div>

          {paymentError ? (
            <div className="mt-4 p-3 border-2 border-red-300 bg-red-50 rounded text-sm text-red-700 flex items-start gap-2">
              <AlertCircle size={16} className="mt-0.5" />
              <span>{paymentError}</span>
            </div>
          ) : null}

          <button
            onClick={handlePay}
            disabled={isProcessing}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#138808] text-white rounded font-bold text-sm hover:bg-green-700 disabled:bg-gray-300 disabled:text-gray-600"
          >
            {isProcessing ? (
              <>
                <RefreshCw size={16} className="animate-spin" />
                Processing Payment...
              </>
            ) : paymentError ? (
              <>
                <RefreshCw size={16} />
                Retry Payment
              </>
            ) : (
              <>Proceed to Payment</>
            )}
          </button>
        </section>

        <div className="flex items-center justify-between">
          <Link
            to="/reference-service/certificate/declaration"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded font-bold text-sm text-gray-700 hover:bg-gray-50"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>
      </main>
    </div>
  );
}

function Line({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={strong ? "font-bold text-gray-900" : "text-gray-700"}>{label}</span>
      <span className={strong ? "font-bold text-gray-900" : "text-gray-900"}>{value}</span>
    </div>
  );
}
