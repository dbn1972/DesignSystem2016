import { PersonalFormService } from "../components/service/PersonalFormService";

export default function CertificateFormPersonal() {
  return (
    <PersonalFormService
      category="Apply for Government Certificate"
      title="Step 1 of 3: Personal Information"
      serviceName="Certificate Application Service"
      backPath="/reference-service/certificate/start"
      nextPath="/reference-service/certificate/form/address"
      codeDownloadPath="/resources/service-code-downloads#certificate-form-personal"
    />
  );
}
