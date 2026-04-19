import { AddressFormService } from "../components/service/AddressFormService";

export default function TradeLicenseFormAddress() {
  return (
    <AddressFormService
      category="Apply for Trade License"
      title="Step 3 of 4: Business Premises Address"
      serviceName="Trade License Service (Municipal Corporation)"
      backPath="/services/trade-license/form/details"
      nextPath="/services/trade-license/form/additional"
    />
  );
}
