import { Component } from '@angular/core';
import { PaymentComponent } from '../../../services/components/payment/payment.component';

@Component({
  selector: 'cert-payment-summary-page',
  standalone: true,
  imports: [PaymentComponent],
  template: `<ux4g-payment applicationId="CERT-2026-MH-876543"></ux4g-payment>`,
})
export class CertPaymentSummaryComponent {}
