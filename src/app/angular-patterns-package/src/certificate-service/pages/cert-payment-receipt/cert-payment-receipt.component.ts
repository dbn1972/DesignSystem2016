import { Component } from '@angular/core';
import { PaymentReceiptComponent } from '../../../services/components/payment-receipt/payment-receipt.component';

@Component({
  selector: 'cert-payment-receipt-page',
  standalone: true,
  imports: [PaymentReceiptComponent],
  template: `<ux4g-payment-receipt statusTrackerPath="/reference-service/certificate/status-tracker" dashboardPath="/reference-service/certificate/my-applications" serviceName="Certificate Application Service"></ux4g-payment-receipt>`,
})
export class CertPaymentReceiptComponent {}
