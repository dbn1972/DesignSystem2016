import { ApplicationStartService } from "../components/service/ApplicationStartService";

export default function CompanyRegStart() {
  return (
    <ApplicationStartService
      category="Company Registration Service"
      title="Register a New Company"
      serviceName="Company Registration Service (MCA)"
      applicantName="Rajesh Kumar"
      startFormPath="/services/company-registration/form/entity-type"
      helpPath="/services/company-registration/help"
    />
  );
}
