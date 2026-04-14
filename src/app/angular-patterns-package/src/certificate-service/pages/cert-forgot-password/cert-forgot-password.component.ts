import { Component } from '@angular/core';
import { ForgotPasswordComponent } from '../../../services/components/forgot-password/forgot-password.component';

@Component({
  selector: 'cert-forgot-password-page',
  standalone: true,
  imports: [ForgotPasswordComponent],
  template: `<ux4g-forgot-password></ux4g-forgot-password>`,
})
export class CertForgotPasswordComponent {}
