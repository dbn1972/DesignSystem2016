import { PersonalFormService } from "../components/service/PersonalFormService";

export default function MSMERegFormDetails() {
  return (
    <PersonalFormService
      category="Register Your Enterprise"
      title="Step 2 of 4: Enterprise & Proprietor Details"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      backPath="/services/msme-registration/form/entity-type"
      nextPath="/services/msme-registration/form/address"
    />
  );
}
