import { PaymentReceiptService } from "../components/service/PaymentReceiptService";

export default function ReferenceServicePaymentReceipt() {
  return (
    <PaymentReceiptService
      category="Government Service Access"
      title="Payment Receipt"
      serviceName="Government Service Platform"
      statusTrackerPath="/reference-service/status-tracker"
      dashboardPath="/reference-service/overview"
      codeDownloadPath="/resources/service-code-downloads#reusable-payment-receipt"
    />
  );
}
