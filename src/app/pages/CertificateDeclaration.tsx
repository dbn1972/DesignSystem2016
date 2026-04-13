import { DeclarationService } from "../components/service/DeclarationService";

export default function CertificateDeclaration() {
  return (
    <DeclarationService
      category="Certificate Application Service"
      title="Declaration and Consent"
      serviceName="Certificate Application Service"
      backPath="/reference-service/certificate/review-summary"
      nextPath="/reference-service/certificate/payment-summary"
      codeDownloadPath="/resources/service-code-downloads#certificate-declaration"
    />
  );
}
