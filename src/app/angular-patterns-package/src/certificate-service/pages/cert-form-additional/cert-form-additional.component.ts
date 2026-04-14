import { Component } from '@angular/core';
import { FormAdditionalComponent } from '../../../services/components/form-additional/form-additional.component';

@Component({
  selector: 'cert-form-additional-page',
  standalone: true,
  imports: [FormAdditionalComponent],
  template: `<ux4g-form-additional backPath="/reference-service/certificate/form/address" nextPath="/reference-service/certificate/form/review" serviceName="Certificate Application Service"></ux4g-form-additional>`,
})
export class CertFormAdditionalComponent {}
