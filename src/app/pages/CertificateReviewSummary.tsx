import { ReviewSummaryService } from "../components/service/ReviewSummaryService";

export default function CertificateReviewSummary() {
  return (
    <ReviewSummaryService
      category="Certificate Application Service"
      title="Review Summary"
      serviceName="Certificate Application Service"
      editPersonalPath="/reference-service/certificate/form/personal"
      editAddressPath="/reference-service/certificate/form/address"
      editAdditionalPath="/reference-service/certificate/form/additional"
      editDocumentsPath="/reference-service/certificate/document-upload"
      backPath="/reference-service/certificate/document-upload"
      nextPath="/reference-service/certificate/declaration"
      codeDownloadPath="/resources/service-code-downloads#certificate-review-summary"
    />
  );
}
