import { PaymentReceiptService } from "../components/service/PaymentReceiptService";

export default function FSSAILicensePaymentReceipt() {
  return (
    <PaymentReceiptService
      category="FSSAI Food License Service"
      title="Payment Receipt"
      serviceName="FSSAI Food License Service (FSSAI)"
      statusTrackerPath="/services/fssai-license/status-tracker"
      dashboardPath="/services/fssai-license/my-applications"
    />
  );
}
