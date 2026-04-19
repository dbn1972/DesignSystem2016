import { PaymentSummaryService } from "../components/service/PaymentSummaryService";

export default function GSTRegPaymentSummary() {
  return (
    <PaymentSummaryService
      category="GST Registration Service"
      title="Application Fee Summary"
      serviceName="GST Registration Service (CBIC)"
      backPath="/services/gst-registration/declaration"
      nextPath="/services/gst-registration/submission-success"
    />
  );
}
