import { Component } from '@angular/core';
import { SignInComponent } from '../../../services/components/sign-in/sign-in.component';

@Component({
  selector: 'cert-sign-in-page',
  standalone: true,
  imports: [SignInComponent],
  template: `<ux4g-sign-in (navigateSignUp)="goSignUp()" (navigateForgotPassword)="goForgot()"></ux4g-sign-in>`,
})
export class CertSignInComponent {
  goSignUp() { window.location.href = '/reference-service/certificate/sign-up'; }
  goForgot() { window.location.href = '/reference-service/certificate/forgot-password'; }
}
