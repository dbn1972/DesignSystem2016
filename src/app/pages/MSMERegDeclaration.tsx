import { DeclarationService } from "../components/service/DeclarationService";

export default function MSMERegDeclaration() {
  return (
    <DeclarationService
      category="MSME/Udyam Registration Service"
      title="Declaration and Consent"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      backPath="/services/msme-registration/review-summary"
      nextPath="/services/msme-registration/payment-summary"
    />
  );
}
