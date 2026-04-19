import { PaymentSummaryService } from "../components/service/PaymentSummaryService";

export default function FSSAILicensePaymentSummary() {
  return (
    <PaymentSummaryService
      category="FSSAI Food License Service"
      title="License Fee Payment"
      serviceName="FSSAI Food License Service (FSSAI)"
      backPath="/services/fssai-license/declaration"
      nextPath="/services/fssai-license/submission-success"
    />
  );
}
