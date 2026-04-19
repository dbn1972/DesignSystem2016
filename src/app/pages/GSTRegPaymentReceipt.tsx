import { PaymentReceiptService } from "../components/service/PaymentReceiptService";

export default function GSTRegPaymentReceipt() {
  return (
    <PaymentReceiptService
      category="GST Registration Service"
      title="Payment Receipt"
      serviceName="GST Registration Service (CBIC)"
      statusTrackerPath="/services/gst-registration/status-tracker"
      dashboardPath="/services/gst-registration/my-applications"
    />
  );
}
