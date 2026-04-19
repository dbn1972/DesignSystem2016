import { AddressFormService } from "../components/service/AddressFormService";

export default function IECRegFormAddress() {
  return (
    <AddressFormService
      category="Apply for Import Export Code"
      title="Step 3 of 4: Business Address"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      backPath="/services/iec-registration/form/details"
      nextPath="/services/iec-registration/form/additional"
    />
  );
}
