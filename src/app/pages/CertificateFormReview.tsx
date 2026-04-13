import { FormReviewService } from "../components/service/FormReviewService";

export default function CertificateFormReview() {
  return (
    <FormReviewService
      category="Certificate Application Service"
      title="Review Form Details"
      serviceName="Certificate Application Service"
      editPersonalPath="/reference-service/certificate/form/personal"
      editAddressPath="/reference-service/certificate/form/address"
      editAdditionalPath="/reference-service/certificate/form/additional"
      backPath="/reference-service/certificate/form/additional"
      nextPath="/reference-service/certificate/document-upload"
      codeDownloadPath="/resources/service-code-downloads#certificate-form-review"
    />
  );
}
