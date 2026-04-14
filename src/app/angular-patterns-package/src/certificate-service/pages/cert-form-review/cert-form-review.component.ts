import { Component } from '@angular/core';
import { FormReviewComponent } from '../../../services/components/form-review/form-review.component';

@Component({
  selector: 'cert-form-review-page',
  standalone: true,
  imports: [FormReviewComponent],
  template: `<ux4g-form-review editPersonalPath="/reference-service/certificate/form/personal" editAddressPath="/reference-service/certificate/form/address" editAdditionalPath="/reference-service/certificate/form/additional" backPath="/reference-service/certificate/form/additional" nextPath="/reference-service/certificate/document-upload" serviceName="Certificate Application Service"></ux4g-form-review>`,
})
export class CertFormReviewComponent {}
