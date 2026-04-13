import { PaymentReceiptService } from "../components/service/PaymentReceiptService";

export default function CertificatePaymentReceipt() {
  return (
    <PaymentReceiptService
      category="Certificate Application Service"
      title="Payment Receipt"
      serviceName="Certificate Application Service"
      statusTrackerPath="/reference-service/certificate/status-tracker"
      dashboardPath="/reference-service/certificate/my-applications"
      codeDownloadPath="/resources/service-code-downloads#certificate-payment-receipt"
    />
  );
}
