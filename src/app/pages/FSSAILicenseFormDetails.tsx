import { PersonalFormService } from "../components/service/PersonalFormService";

export default function FSSAILicenseFormDetails() {
  return (
    <PersonalFormService
      category="Apply for FSSAI Food License"
      title="Step 2 of 4: Business Operator Details"
      serviceName="FSSAI Food License Service (FSSAI)"
      backPath="/services/fssai-license/form/entity-type"
      nextPath="/services/fssai-license/form/address"
    />
  );
}
