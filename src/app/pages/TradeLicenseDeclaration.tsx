import { DeclarationService } from "../components/service/DeclarationService";

export default function TradeLicenseDeclaration() {
  return (
    <DeclarationService
      category="Trade License Service"
      title="Declaration and Consent"
      serviceName="Trade License Service (Municipal Corporation)"
      backPath="/services/trade-license/review-summary"
      nextPath="/services/trade-license/payment-summary"
    />
  );
}
