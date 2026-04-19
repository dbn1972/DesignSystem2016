import { ApplicationStartService } from "../components/service/ApplicationStartService";

export default function MSMERegStart() {
  return (
    <ApplicationStartService
      category="MSME/Udyam Registration Service"
      title="Register Your Enterprise"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      applicantName="Rajesh Kumar"
      startFormPath="/services/msme-registration/form/entity-type"
      helpPath="/services/msme-registration/help"
    />
  );
}
