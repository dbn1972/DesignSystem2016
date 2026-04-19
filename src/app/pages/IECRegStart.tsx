import { ApplicationStartService } from "../components/service/ApplicationStartService";

export default function IECRegStart() {
  return (
    <ApplicationStartService
      category="IEC Registration Service"
      title="Apply for Import Export Code"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      applicantName="Vikram Singh"
      startFormPath="/services/iec-registration/form/entity-type"
      helpPath="/services/iec-registration/help"
    />
  );
}
