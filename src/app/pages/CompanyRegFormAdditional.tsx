import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function CompanyRegFormAdditional() {
  return (
    <AdditionalFormService
      category="Register a New Company"
      title="Step 4 of 4: Company Details"
      serviceName="Company Registration Service (MCA)"
      backPath="/services/company-registration/form/address"
      nextPath="/services/company-registration/document-upload"
    />
  );
}
