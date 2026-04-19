import { ReviewSummaryService } from "../components/service/ReviewSummaryService";

export default function MSMERegReviewSummary() {
  return (
    <ReviewSummaryService
      category="MSME/Udyam Registration Service"
      title="Review Summary"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      editPersonalPath="/services/msme-registration/form/details"
      editAddressPath="/services/msme-registration/form/address"
      editAdditionalPath="/services/msme-registration/form/additional"
      editDocumentsPath="/services/msme-registration/document-upload"
      backPath="/services/msme-registration/document-upload"
      nextPath="/services/msme-registration/declaration"
    />
  );
}
