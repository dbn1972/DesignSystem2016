import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function FSSAILicenseFormEntityType() {
  return (
    <AdditionalFormService
      category="Apply for FSSAI Food License"
      title="Step 1 of 4: Select License Type"
      serviceName="FSSAI Food License Service (FSSAI)"
      backPath="/services/fssai-license/start"
      nextPath="/services/fssai-license/form/details"
    />
  );
}
