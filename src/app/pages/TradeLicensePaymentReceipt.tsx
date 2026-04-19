import { PaymentReceiptService } from "../components/service/PaymentReceiptService";

export default function TradeLicensePaymentReceipt() {
  return (
    <PaymentReceiptService
      category="Trade License Service"
      title="Payment Receipt"
      serviceName="Trade License Service (Municipal Corporation)"
      statusTrackerPath="/services/trade-license/status-tracker"
      dashboardPath="/services/trade-license/my-applications"
    />
  );
}
