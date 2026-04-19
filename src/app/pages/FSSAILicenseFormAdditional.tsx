import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function FSSAILicenseFormAdditional() {
  return (
    <AdditionalFormService
      category="Apply for FSSAI Food License"
      title="Step 4 of 4: Food Categories & Products"
      serviceName="FSSAI Food License Service (FSSAI)"
      backPath="/services/fssai-license/form/address"
      nextPath="/services/fssai-license/document-upload"
    />
  );
}
