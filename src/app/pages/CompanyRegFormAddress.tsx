import { AddressFormService } from "../components/service/AddressFormService";

export default function CompanyRegFormAddress() {
  return (
    <AddressFormService
      category="Register a New Company"
      title="Step 3 of 4: Registered Office Address"
      serviceName="Company Registration Service (MCA)"
      backPath="/services/company-registration/form/directors"
      nextPath="/services/company-registration/form/additional"
    />
  );
}
