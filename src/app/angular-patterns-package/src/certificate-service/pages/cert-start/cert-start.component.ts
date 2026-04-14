import { Component } from '@angular/core';
import { ApplicationStartComponent } from '../../../services/components/application-start/application-start.component';

@Component({
  selector: 'cert-start-page',
  standalone: true,
  imports: [ApplicationStartComponent],
  template: `<ux4g-application-start serviceName="Certificate Application Service" applicantName="Priya Sharma" startFormPath="/reference-service/certificate/form/personal" helpPath="/reference-service/certificate/help"></ux4g-application-start>`,
})
export class CertStartComponent {}
