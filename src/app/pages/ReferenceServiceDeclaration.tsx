import { DeclarationService } from "../components/service/DeclarationService";

export default function ReferenceServiceDeclaration() {
  return (
    <DeclarationService
      category="Government Service Access"
      title="Declaration and Consent"
      serviceName="Government Service Platform"
      backPath="/reference-service/review-summary"
      nextPath="/reference-service/status-tracker"
      codeDownloadPath="/resources/service-code-downloads#reusable-declaration"
    />
  );
}
