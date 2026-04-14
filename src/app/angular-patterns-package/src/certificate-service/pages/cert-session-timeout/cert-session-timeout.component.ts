import { Component } from '@angular/core';
import { AuthStatusComponent } from '../../../services/components/auth-status/auth-status.component';

@Component({
  selector: 'cert-session-timeout-page',
  standalone: true,
  imports: [AuthStatusComponent],
  template: `<ux4g-auth-status status="session-expired" signInPath="/reference-service/certificate/sign-in" homePath="/reference-service/demo" helpPath="/reference-service/certificate/help"></ux4g-auth-status>`,
})
export class CertSessionTimeoutComponent {}
