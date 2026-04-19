import { PersonalFormService } from "../components/service/PersonalFormService";

export default function TradeLicenseFormDetails() {
  return (
    <PersonalFormService
      category="Apply for Trade License"
      title="Step 2 of 4: Business & Owner Details"
      serviceName="Trade License Service (Municipal Corporation)"
      backPath="/services/trade-license/form/entity-type"
      nextPath="/services/trade-license/form/address"
    />
  );
}
