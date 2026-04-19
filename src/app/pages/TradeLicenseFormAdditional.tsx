import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function TradeLicenseFormAdditional() {
  return (
    <AdditionalFormService
      category="Apply for Trade License"
      title="Step 4 of 4: Inspection & Compliance Details"
      serviceName="Trade License Service (Municipal Corporation)"
      backPath="/services/trade-license/form/address"
      nextPath="/services/trade-license/document-upload"
    />
  );
}
