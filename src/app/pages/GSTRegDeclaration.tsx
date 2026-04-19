import { DeclarationService } from "../components/service/DeclarationService";

export default function GSTRegDeclaration() {
  return (
    <DeclarationService
      category="GST Registration Service"
      title="Declaration and Consent"
      serviceName="GST Registration Service (CBIC)"
      backPath="/services/gst-registration/review-summary"
      nextPath="/services/gst-registration/payment-summary"
    />
  );
}
