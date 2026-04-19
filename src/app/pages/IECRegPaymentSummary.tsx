import { PaymentSummaryService } from "../components/service/PaymentSummaryService";

export default function IECRegPaymentSummary() {
  return (
    <PaymentSummaryService
      category="IEC Registration Service"
      title="Application Fee Summary"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      backPath="/services/iec-registration/declaration"
      nextPath="/services/iec-registration/submission-success"
    />
  );
}
