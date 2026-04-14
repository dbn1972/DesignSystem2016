import { Component } from '@angular/core';
import { DeclarationComponent } from '../../../services/components/declaration/declaration.component';

@Component({
  selector: 'cert-declaration-page',
  standalone: true,
  imports: [DeclarationComponent],
  template: `<ux4g-declaration applicantName="Priya Sharma" backPath="/reference-service/certificate/review-summary" nextPath="/reference-service/certificate/payment-summary" serviceName="Certificate Application Service"></ux4g-declaration>`,
})
export class CertDeclarationComponent {}
