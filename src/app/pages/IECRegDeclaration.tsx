import { DeclarationService } from "../components/service/DeclarationService";

export default function IECRegDeclaration() {
  return (
    <DeclarationService
      category="IEC Registration Service"
      title="Declaration and Consent"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      backPath="/services/iec-registration/review-summary"
      nextPath="/services/iec-registration/payment-summary"
    />
  );
}
