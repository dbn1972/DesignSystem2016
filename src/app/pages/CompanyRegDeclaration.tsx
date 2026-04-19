import { DeclarationService } from "../components/service/DeclarationService";

export default function CompanyRegDeclaration() {
  return (
    <DeclarationService
      category="Company Registration Service"
      title="Declaration and Consent"
      serviceName="Company Registration Service (MCA)"
      backPath="/services/company-registration/review-summary"
      nextPath="/services/company-registration/payment-summary"
    />
  );
}
