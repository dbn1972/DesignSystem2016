import { AddressFormService } from "../components/service/AddressFormService";

export default function MSMERegFormAddress() {
  return (
    <AddressFormService
      category="Register Your Enterprise"
      title="Step 3 of 4: Enterprise Address"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      backPath="/services/msme-registration/form/details"
      nextPath="/services/msme-registration/form/additional"
    />
  );
}
