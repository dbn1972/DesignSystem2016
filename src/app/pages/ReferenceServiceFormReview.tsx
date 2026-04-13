import { FormReviewService } from "../components/service/FormReviewService";

export default function ReferenceServiceFormReview() {
  return (
    <FormReviewService
      category="Government Service Access"
      title="Review Form Details"
      serviceName="Government Service Platform"
      editPersonalPath="/reference-service/form/personal"
      editAddressPath="/reference-service/form/address"
      editAdditionalPath="/reference-service/form/additional"
      backPath="/reference-service/form/additional"
      nextPath="/reference-service/document-upload"
      codeDownloadPath="/resources/service-code-downloads#reusable-form-review"
    />
  );
}
