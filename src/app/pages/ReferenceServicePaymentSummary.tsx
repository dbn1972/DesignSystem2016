import { PaymentSummaryService } from "../components/service/PaymentSummaryService";

export default function ReferenceServicePaymentSummary() {
  return (
    <PaymentSummaryService
      category="Government Service Access"
      title="Payment Summary"
      serviceName="Government Service Platform"
      backPath="/reference-service/declaration"
      nextPath="/reference-service/payment-receipt"
      codeDownloadPath="/resources/service-code-downloads#reusable-payment-summary"
    />
  );
}
