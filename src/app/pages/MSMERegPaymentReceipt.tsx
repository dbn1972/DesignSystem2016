import { PaymentReceiptService } from "../components/service/PaymentReceiptService";

export default function MSMERegPaymentReceipt() {
  return (
    <PaymentReceiptService
      category="MSME/Udyam Registration Service"
      title="Registration Receipt"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      statusTrackerPath="/services/msme-registration/status-tracker"
      dashboardPath="/services/msme-registration/my-applications"
    />
  );
}
