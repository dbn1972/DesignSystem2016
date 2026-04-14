import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';

@Component({
  selector: 'ux4g-payment-receipt',
  standalone: true,
  imports: [CommonModule, DatePipe, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="svc-page">
      <ux4g-service-header icon="🧾" iconColor="#16a34a" category="Government Service Access" title="Payment Receipt"></ux4g-service-header>
      <main class="svc-form-main">
        <div class="receipt-success">
          <span class="receipt-success__icon" aria-hidden="true">✅</span>
          <h2 class="receipt-success__title">Payment Successful</h2>
          <p class="receipt-success__text">Your payment has been processed successfully.</p>
        </div>
        <div class="svc-card" style="margin-bottom: 1.5rem;">
          <h3 class="receipt-heading">Receipt Details</h3>
          <div class="receipt-row"><span>Transaction ID</span><span class="receipt-val">TXN-{{ transactionId }}</span></div>
          <div class="receipt-row"><span>Application ID</span><span class="receipt-val">{{ applicationId }}</span></div>
          <div class="receipt-row"><span>Date</span><span class="receipt-val">{{ paymentDate | date:'medium' }}</span></div>
          <div class="receipt-row"><span>Payment Method</span><span class="receipt-val">{{ paymentMethod }}</span></div>
          <div class="receipt-row receipt-row--total"><span>Amount Paid</span><span class="receipt-val">₹{{ amount }}</span></div>
        </div>
        <div class="receipt-actions">
          <button type="button" class="svc-btn svc-btn--outline" (click)="printReceipt()">🖨 Print Receipt</button>
          <a [href]="statusTrackerPath" class="svc-btn svc-btn--primary">Track Application →</a>
          <a [href]="dashboardPath" class="svc-btn svc-btn--outline">Go to Dashboard</a>
        </div>
      </main>
      <ux4g-service-footer [leftText]="serviceName + ' • Government of India'" rightText="Payment Receipt"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    @use '../../styles/service-shared';
    .svc-page { min-height: 100vh; background: var(--ux4g-svc-bg-muted); }
    .svc-form-main { max-width: 640px; margin: 0 auto; padding: 2rem 1.5rem; }
    .receipt-success { text-align: center; padding: 2rem; margin-bottom: 1.5rem; background: #f0fdf4; border: 2px solid #16a34a; border-radius: 0.5rem;
      &__icon { font-size: 3rem; display: block; margin-bottom: 0.75rem; }
      &__title { font-size: 1.5rem; font-weight: 700; color: #166534; margin: 0 0 0.25rem; }
      &__text { font-size: 0.875rem; color: #15803d; margin: 0; }
    }
    .svc-card { background: var(--ux4g-svc-bg); border: 2px solid var(--ux4g-svc-border); border-radius: 0.5rem; padding: 1.5rem; }
    .receipt-heading { font-size: 1rem; font-weight: 700; color: var(--ux4g-svc-fg); margin: 0 0 1rem; }
    .receipt-row { display: flex; justify-content: space-between; padding: 0.625rem 0; border-bottom: 1px solid var(--ux4g-svc-border); font-size: 0.875rem; color: var(--ux4g-svc-fg-muted);
      &:last-child { border-bottom: none; }
      &--total { font-weight: 700; font-size: 1rem; padding-top: 0.75rem; border-top: 2px solid var(--ux4g-svc-border); }
    }
    .receipt-val { font-weight: 600; color: var(--ux4g-svc-fg); }
    .receipt-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
    .svc-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer;
      &--primary { background: var(--ux4g-svc-primary); color: #fff; } &--outline { background: var(--ux4g-svc-bg); color: var(--ux4g-svc-fg-muted); border-color: var(--ux4g-svc-border); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentReceiptComponent {
  @Input() transactionId = '2026041012345';
  @Input() applicationId = 'APP-2026-00142';
  @Input() paymentDate = new Date().toISOString();
  @Input() paymentMethod = 'UPI (GPay)';
  @Input() amount = 649;
  @Input() statusTrackerPath = '/reference-service/status-tracker';
  @Input() dashboardPath = '/reference-service/overview';
  @Input() serviceName = 'Government Service Platform';

  printReceipt(): void { window.print(); }
}
