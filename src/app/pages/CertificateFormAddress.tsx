import { AddressFormService } from "../components/service/AddressFormService";

export default function CertificateFormAddress() {
  return (
    <AddressFormService
      category="Apply for Government Certificate"
      title="Step 2 of 3: Address Details"
      serviceName="Certificate Application Service"
      backPath="/reference-service/certificate/form/personal"
      nextPath="/reference-service/certificate/form/additional"
      codeDownloadPath="/resources/service-code-downloads#certificate-form-address"
    />
  );
}
