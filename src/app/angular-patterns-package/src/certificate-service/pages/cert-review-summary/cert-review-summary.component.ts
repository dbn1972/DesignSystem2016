import { Component } from '@angular/core';
import { ReviewSummaryComponent } from '../../../services/components/review-summary/review-summary.component';

@Component({
  selector: 'cert-review-summary-page',
  standalone: true,
  imports: [ReviewSummaryComponent],
  template: `<ux4g-review-summary editPersonalPath="/reference-service/certificate/form/personal" editAddressPath="/reference-service/certificate/form/address" editAdditionalPath="/reference-service/certificate/form/additional" editDocumentsPath="/reference-service/certificate/document-upload" backPath="/reference-service/certificate/document-upload" nextPath="/reference-service/certificate/declaration" serviceName="Certificate Application Service"></ux4g-review-summary>`,
})
export class CertReviewSummaryComponent {}
