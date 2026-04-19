import { PaymentReceiptService } from "../components/service/PaymentReceiptService";

export default function CompanyRegPaymentReceipt() {
  return (
    <PaymentReceiptService
      category="Company Registration Service"
      title="Payment Receipt"
      serviceName="Company Registration Service (MCA)"
      statusTrackerPath="/services/company-registration/status-tracker"
      dashboardPath="/services/company-registration/my-applications"
    />
  );
}
