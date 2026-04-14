import { Component } from '@angular/core';
import { FormPersonalComponent } from '../../../services/components/form-personal/form-personal.component';

@Component({
  selector: 'cert-form-personal-page',
  standalone: true,
  imports: [FormPersonalComponent],
  template: `<ux4g-form-personal backPath="/reference-service/certificate/start" nextPath="/reference-service/certificate/form/address" serviceName="Certificate Application Service"></ux4g-form-personal>`,
})
export class CertFormPersonalComponent {}
