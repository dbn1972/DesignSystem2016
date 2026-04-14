import { Component } from '@angular/core';
import { FormAddressComponent } from '../../../services/components/form-address/form-address.component';

@Component({
  selector: 'cert-form-address-page',
  standalone: true,
  imports: [FormAddressComponent],
  template: `<ux4g-form-address backPath="/reference-service/certificate/form/personal" nextPath="/reference-service/certificate/form/additional" serviceName="Certificate Application Service"></ux4g-form-address>`,
})
export class CertFormAddressComponent {}
