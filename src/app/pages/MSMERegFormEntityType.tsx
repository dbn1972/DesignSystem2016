import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function MSMERegFormEntityType() {
  return (
    <AdditionalFormService
      category="Register Your Enterprise"
      title="Step 1 of 4: Select Enterprise Classification"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      backPath="/services/msme-registration/start"
      nextPath="/services/msme-registration/form/details"
    />
  );
}
