import { Component } from '@angular/core';
import { OtpVerifyComponent } from '../../../services/components/otp-verify/otp-verify.component';

@Component({
  selector: 'cert-verify-otp-page',
  standalone: true,
  imports: [OtpVerifyComponent],
  template: `<ux4g-otp-verify destination="9876543210" referenceId="CERT-REF"></ux4g-otp-verify>`,
})
export class CertVerifyOtpComponent {}
