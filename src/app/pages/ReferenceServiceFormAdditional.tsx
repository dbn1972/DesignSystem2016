import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function ReferenceServiceFormAdditional() {
  return (
    <AdditionalFormService
      category="Government Service Access"
      title="Step 3 of 3: Additional Information"
      serviceName="Government Service Platform"
      backPath="/reference-service/form/address"
      nextPath="/reference-service/form/review"
      codeDownloadPath="/resources/service-code-downloads#reusable-form-additional"
    />
  );
}
