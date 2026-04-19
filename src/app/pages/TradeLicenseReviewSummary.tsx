import { ReviewSummaryService } from "../components/service/ReviewSummaryService";

export default function TradeLicenseReviewSummary() {
  return (
    <ReviewSummaryService
      category="Trade License Service"
      title="Review Summary"
      serviceName="Trade License Service (Municipal Corporation)"
      editPersonalPath="/services/trade-license/form/details"
      editAddressPath="/services/trade-license/form/address"
      editAdditionalPath="/services/trade-license/form/additional"
      editDocumentsPath="/services/trade-license/document-upload"
      backPath="/services/trade-license/document-upload"
      nextPath="/services/trade-license/declaration"
    />
  );
}
