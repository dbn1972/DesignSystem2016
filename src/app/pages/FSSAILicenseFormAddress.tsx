import { AddressFormService } from "../components/service/AddressFormService";

export default function FSSAILicenseFormAddress() {
  return (
    <AddressFormService
      category="Apply for FSSAI Food License"
      title="Step 3 of 4: Premises Address"
      serviceName="FSSAI Food License Service (FSSAI)"
      backPath="/services/fssai-license/form/details"
      nextPath="/services/fssai-license/form/additional"
    />
  );
}
