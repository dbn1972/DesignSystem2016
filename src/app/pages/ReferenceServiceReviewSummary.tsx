import { ReviewSummaryService } from "../components/service/ReviewSummaryService";

export default function ReferenceServiceReviewSummary() {
  return (
    <ReviewSummaryService
      category="Government Service Access"
      title="Review Summary"
      serviceName="Government Service Platform"
      editPersonalPath="/reference-service/start"
      editAddressPath="/reference-service/start"
      editAdditionalPath="/reference-service/start"
      editDocumentsPath="/reference-service/document-upload"
      backPath="/reference-service/document-upload"
      nextPath="/reference-service/declaration"
      codeDownloadPath="/resources/service-code-downloads#reusable-review-summary"
    />
  );
}
