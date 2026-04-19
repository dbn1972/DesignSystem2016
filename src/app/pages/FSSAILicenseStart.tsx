import { ApplicationStartService } from "../components/service/ApplicationStartService";

export default function FSSAILicenseStart() {
  return (
    <ApplicationStartService
      category="FSSAI Food License Service"
      title="Apply for FSSAI Food License"
      serviceName="FSSAI Food License Service (FSSAI)"
      applicantName="Anita Desai"
      startFormPath="/services/fssai-license/form/entity-type"
      helpPath="/services/fssai-license/help"
    />
  );
}
