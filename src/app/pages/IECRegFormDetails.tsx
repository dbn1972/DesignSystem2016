import { PersonalFormService } from "../components/service/PersonalFormService";

export default function IECRegFormDetails() {
  return (
    <PersonalFormService
      category="Apply for Import Export Code"
      title="Step 2 of 4: Applicant Details"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      backPath="/services/iec-registration/form/entity-type"
      nextPath="/services/iec-registration/form/address"
    />
  );
}
