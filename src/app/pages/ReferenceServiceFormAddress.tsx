import { AddressFormService } from "../components/service/AddressFormService";

export default function ReferenceServiceFormAddress() {
  return (
    <AddressFormService
      category="Government Service Access"
      title="Step 2 of 3: Address Details"
      serviceName="Government Service Platform"
      backPath="/reference-service/form/personal"
      nextPath="/reference-service/form/additional"
      codeDownloadPath="/resources/service-code-downloads#reusable-form-address"
    />
  );
}
