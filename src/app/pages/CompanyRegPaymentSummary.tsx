import { PaymentSummaryService } from "../components/service/PaymentSummaryService";

export default function CompanyRegPaymentSummary() {
  return (
    <PaymentSummaryService
      category="Company Registration Service"
      title="Registration Fee Payment"
      serviceName="Company Registration Service (MCA)"
      backPath="/services/company-registration/declaration"
      nextPath="/services/company-registration/submission-success"
    />
  );
}
