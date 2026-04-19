import { PaymentReceiptService } from "../components/service/PaymentReceiptService";

export default function IECRegPaymentReceipt() {
  return (
    <PaymentReceiptService
      category="IEC Registration Service"
      title="Payment Receipt"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      statusTrackerPath="/services/iec-registration/status-tracker"
      dashboardPath="/services/iec-registration/my-applications"
    />
  );
}
