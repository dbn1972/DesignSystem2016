import { ApplicationStartService } from "../components/service/ApplicationStartService";

export default function TradeLicenseStart() {
  return (
    <ApplicationStartService
      category="Trade License Service"
      title="Apply for Trade License"
      serviceName="Trade License Service (Municipal Corporation)"
      applicantName="Rajesh Kumar"
      startFormPath="/services/trade-license/form/entity-type"
      helpPath="/services/trade-license/help"
    />
  );
}
