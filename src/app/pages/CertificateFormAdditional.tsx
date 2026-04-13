import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function CertificateFormAdditional() {
  return (
    <AdditionalFormService
      category="Apply for Government Certificate"
      title="Step 3 of 3: Additional Information"
      serviceName="Certificate Application Service"
      backPath="/reference-service/certificate/form/address"
      nextPath="/reference-service/certificate/form/review"
      codeDownloadPath="/resources/service-code-downloads#certificate-form-additional"
    />
  );
}
