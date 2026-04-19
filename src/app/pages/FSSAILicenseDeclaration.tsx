import { DeclarationService } from "../components/service/DeclarationService";

export default function FSSAILicenseDeclaration() {
  return (
    <DeclarationService
      category="FSSAI Food License Service"
      title="Declaration and Consent"
      serviceName="FSSAI Food License Service (FSSAI)"
      backPath="/services/fssai-license/review-summary"
      nextPath="/services/fssai-license/payment-summary"
    />
  );
}
