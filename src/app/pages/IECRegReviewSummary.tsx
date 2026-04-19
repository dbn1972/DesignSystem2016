import { ReviewSummaryService } from "../components/service/ReviewSummaryService";

export default function IECRegReviewSummary() {
  return (
    <ReviewSummaryService
      category="IEC Registration Service"
      title="Review Summary"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      editPersonalPath="/services/iec-registration/form/details"
      editAddressPath="/services/iec-registration/form/address"
      editAdditionalPath="/services/iec-registration/form/additional"
      editDocumentsPath="/services/iec-registration/document-upload"
      backPath="/services/iec-registration/document-upload"
      nextPath="/services/iec-registration/declaration"
    />
  );
}
