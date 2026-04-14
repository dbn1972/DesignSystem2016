import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AlertCircle, ArrowLeft, ArrowRight, CreditCard, Download, RefreshCw } from "lucide-react";

import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import { executePaymentAttempt, loadPaymentSummaryData, preparePaymentAttempt } from "../../services/paymentService";

interface PaymentSummaryServiceProps {
  category: string;
  title: string;
  serviceName: string;
  backPath: string;
  nextPath: string;
  codeDownloadPath?: string;
}

export function PaymentSummaryService({
  category,
  title,
  serviceName,
  backPath,
  nextPath,
  codeDownloadPath,
}: PaymentSummaryServiceProps) {
  const navigate = useNavigate();
  const summary = useMemo(() => loadPaymentSummaryData(), []);

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const handlePay = () => {
    setIsProcessing(true);
    setPaymentError("");
    preparePaymentAttempt();

    window.setTimeout(() => {
      const result = executePaymentAttempt();
      setIsProcessing(false);

      if (!result.success) {
        setPaymentError(result.message);
        return;
      }

      navigate(nextPath);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader icon={CreditCard} iconColor="bg-pink-600" category={category} title={title} />

      <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-8 space-y-5">
        <section className="bg-card border-2 border-border rounded-lg p-6">
          <h2 className="font-bold text-foreground mb-4">Fee Summary</h2>
          <div className="space-y-2 text-sm">
            {summary.lineItems.map((item) => (
              <Line key={item.label} label={item.label} value={`Rs ${item.amount}`} />
            ))}
            <div className="border-t-2 border-border pt-2 mt-2">
              <Line label="Total Amount" value={`Rs ${summary.totalAmount}`} strong />
            </div>
          </div>

          {paymentError ? (
            <div className="mt-4 p-3 border-2 border-red-300 bg-red-50 dark:bg-red-950/40 dark:border-red-800 rounded text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
              <AlertCircle size={16} className="mt-0.5" />
              <span>{paymentError}</span>
            </div>
          ) : null}

          <button
            type="button"
            onClick={handlePay}
            disabled={isProcessing}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded font-bold text-sm hover:opacity-90 disabled:bg-muted disabled:text-muted-foreground"
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
              <>
                Continue
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </section>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Link
            to={backPath}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded font-bold text-sm text-foreground hover:bg-muted"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          {codeDownloadPath && (
            <Link
              to={codeDownloadPath}
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded font-bold text-sm text-primary hover:bg-muted"
            >
              <Download size={15} />
              Download React code
            </Link>
          )}
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Payment Summary" />
    </div>
  );
}

function Line({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={strong ? "font-bold text-foreground" : "text-muted-foreground"}>{label}</span>
      <span className="font-bold text-foreground">{value}</span>
    </div>
  );
}
