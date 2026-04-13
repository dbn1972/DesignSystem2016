import { PaymentSummaryService } from "../components/service/PaymentSummaryService";

export default function CertificatePaymentSummary() {
  return (
    <PaymentSummaryService
      category="Certificate Application Service"
      title="Application Fee Payment"
      serviceName="Certificate Application Service"
      backPath="/reference-service/certificate/declaration"
      nextPath="/reference-service/certificate/submission-success"
      codeDownloadPath="/resources/service-code-downloads#certificate-payment-summary"
    />
  );
}
