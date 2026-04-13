import { PersonalFormService } from "../components/service/PersonalFormService";

export default function ReferenceServiceFormPersonal() {
  return (
    <PersonalFormService
      category="Government Service Access"
      title="Step 1 of 3: Personal Information"
      serviceName="Government Service Platform"
      backPath="/reference-service/start"
      nextPath="/reference-service/form/address"
      codeDownloadPath="/resources/service-code-downloads#reusable-form-personal"
    />
  );
}
