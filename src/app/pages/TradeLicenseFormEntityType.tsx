import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function TradeLicenseFormEntityType() {
  return (
    <AdditionalFormService
      category="Apply for Trade License"
      title="Step 1 of 4: Select Business Category"
      serviceName="Trade License Service (Municipal Corporation)"
      backPath="/services/trade-license/start"
      nextPath="/services/trade-license/form/details"
    />
  );
}
