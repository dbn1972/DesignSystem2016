import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function CompanyRegFormEntityType() {
  return (
    <AdditionalFormService
      category="Register a New Company"
      title="Step 1 of 4: Select Entity Type"
      serviceName="Company Registration Service (MCA)"
      backPath="/services/company-registration/start"
      nextPath="/services/company-registration/form/directors"
    />
  );
}
