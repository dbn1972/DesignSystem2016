import { ReviewSummaryService } from "../components/service/ReviewSummaryService";

export default function GSTRegReviewSummary() {
  return (
    <ReviewSummaryService
      category="GST Registration Service"
      title="Review Summary"
      serviceName="GST Registration Service (CBIC)"
      editPersonalPath="/services/gst-registration/form/details"
      editAddressPath="/services/gst-registration/form/address"
      editAdditionalPath="/services/gst-registration/form/additional"
      editDocumentsPath="/services/gst-registration/document-upload"
      backPath="/services/gst-registration/document-upload"
      nextPath="/services/gst-registration/declaration"
    />
  );
}
