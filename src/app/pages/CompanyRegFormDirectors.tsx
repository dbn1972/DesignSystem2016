import { PersonalFormService } from "../components/service/PersonalFormService";

export default function CompanyRegFormDirectors() {
  return (
    <PersonalFormService
      category="Register a New Company"
      title="Step 2 of 4: Director / Partner Details"
      serviceName="Company Registration Service (MCA)"
      backPath="/services/company-registration/form/entity-type"
      nextPath="/services/company-registration/form/address"
    />
  );
}
