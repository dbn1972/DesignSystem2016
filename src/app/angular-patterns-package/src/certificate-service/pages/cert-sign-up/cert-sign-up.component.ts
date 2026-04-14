import { Component } from '@angular/core';
import { SignUpComponent } from '../../../services/components/sign-up/sign-up.component';

@Component({
  selector: 'cert-sign-up-page',
  standalone: true,
  imports: [SignUpComponent],
  template: `<ux4g-sign-up (navigateSignIn)="goSignIn()"></ux4g-sign-up>`,
})
export class CertSignUpComponent {
  goSignIn() { window.location.href = '/reference-service/certificate/sign-in'; }
}
