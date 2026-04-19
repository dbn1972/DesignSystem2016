import { PaymentSummaryService } from "../components/service/PaymentSummaryService";

export default function TradeLicensePaymentSummary() {
  return (
    <PaymentSummaryService
      category="Trade License Service"
      title="License Fee Payment"
      serviceName="Trade License Service (Municipal Corporation)"
      backPath="/services/trade-license/declaration"
      nextPath="/services/trade-license/submission-success"
    />
  );
}
