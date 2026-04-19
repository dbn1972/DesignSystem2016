import { AddressFormService } from "../components/service/AddressFormService";

export default function GSTRegFormAddress() {
  return (
    <AddressFormService
      category="Apply for GST Registration"
      title="Step 3 of 4: Principal Place of Business"
      serviceName="GST Registration Service (CBIC)"
      backPath="/services/gst-registration/form/details"
      nextPath="/services/gst-registration/form/additional"
    />
  );
}
