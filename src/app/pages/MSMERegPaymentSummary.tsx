import { PaymentSummaryService } from "../components/service/PaymentSummaryService";

export default function MSMERegPaymentSummary() {
  return (
    <PaymentSummaryService
      category="MSME/Udyam Registration Service"
      title="Registration Confirmation"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      backPath="/services/msme-registration/declaration"
      nextPath="/services/msme-registration/submission-success"
    />
  );
}
