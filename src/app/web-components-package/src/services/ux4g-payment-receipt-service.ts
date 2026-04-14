/**
 * UX4G Payment Receipt Service — Web Component
 *
 * Displays payment receipt after successful payment.
 *
 * @element ux4g-payment-receipt-service
 * @attr {string} service-name - Service name displayed in header/footer
 * @attr {string} transaction-id - Transaction ID
 * @attr {string} application-id - Application ID
 * @attr {string} amount - Payment amount
 * @attr {string} status-tracker-path - Path to status tracker
 * @attr {string} dashboard-path - Path to dashboard
 *
 * @fires ux4g-navigate - Fired when user clicks a navigation link
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS } from './service-contract';

export class UX4GPaymentReceiptService extends UX4GElement {
  static get observedAttributes() {
    return ['service-name', 'transaction-id', 'application-id', 'amount', 'status-tracker-path', 'dashboard-path'];
  }

  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get transactionId() { return this.getAttribute('transaction-id') || 'TXN-2024-001234'; }
  private get applicationId() { return this.getAttribute('application-id') || 'APP-2024-005678'; }
  private get amount() { return this.getAttribute('amount') || '₹649'; }
  private get statusTrackerPath() { return this.getAttribute('status-tracker-path') || '/status-tracker'; }
  private get dashboardPath() { return this.getAttribute('dashboard-path') || '/dashboard'; }

  protected render(): void {
    const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, -apple-system, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 640px; margin: 0 auto; padding: 2rem 1.5rem; }
        .success-banner { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding: 2rem; background: #f0fdf4; border: 2px solid #16a34a; border-radius: 0.5rem; text-align: center; margin-bottom: 1.5rem; }
        .success-banner__check { display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; background: #16a34a; color: #fff; border-radius: 50%; font-size: 1.75rem; }
        .success-banner__title { font-size: 1.25rem; font-weight: 700; color: #15803d; margin: 0; }
        .success-banner__sub { font-size: 0.875rem; color: #166534; margin: 0; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1.5rem; }
        .card__title { font-size: 1rem; font-weight: 700; margin: 0 0 1rem; }
        .row { display: flex; justify-content: space-between; padding: 0.625rem 0; border-bottom: 1px solid var(--ux4g-color-border, #e2e8f0); }
        .row:last-child { border-bottom: none; }
        .row__label { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .row__value { font-size: 0.875rem; font-weight: 600; }
        .row__value--amount { color: #16a34a; font-size: 1rem; }
        .actions { display: flex; flex-direction: column; gap: 0.75rem; }
        .btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: 2px solid transparent; cursor: pointer; text-decoration: none; text-align: center; box-sizing: border-box; }
        .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; border: none; }
        .btn--primary:hover { opacity: 0.9; }
        .btn--outline { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-interactive-default, #000080); border-color: var(--ux4g-color-interactive-default, #000080); }
        .btn--outline:hover { background: #eff6ff; }
        .btn--ghost { background: transparent; color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
        @media print { .actions { display: none; } ux4g-service-header, ux4g-service-footer { display: none; } }
      </style>

      <ux4g-service-header icon="🧾" icon-color="#16a34a" category="${this.serviceName}" heading="Payment Receipt"></ux4g-service-header>

      <div class="main">
        <div class="success-banner">
          <div class="success-banner__check" aria-hidden="true">✓</div>
          <h2 class="success-banner__title">Payment Successful</h2>
          <p class="success-banner__sub">Your payment has been processed successfully.</p>
        </div>

        <div class="card">
          <h3 class="card__title">Receipt Details</h3>
          <div class="row"><span class="row__label">Transaction ID</span><span class="row__value">${this.transactionId}</span></div>
          <div class="row"><span class="row__label">Application ID</span><span class="row__value">${this.applicationId}</span></div>
          <div class="row"><span class="row__label">Date &amp; Time</span><span class="row__value">${today}</span></div>
          <div class="row"><span class="row__label">Payment Method</span><span class="row__value">UPI</span></div>
          <div class="row"><span class="row__label">Amount Paid</span><span class="row__value row__value--amount">${this.amount}</span></div>
        </div>

        <div class="actions">
          <button type="button" class="btn btn--primary" id="print-btn">🖨️ Print Receipt</button>
          <a href="${this.statusTrackerPath}" class="btn btn--outline" id="track-btn">📊 Track Application</a>
          <a href="${this.dashboardPath}" class="btn btn--ghost" id="dashboard-btn">🏠 Go to Dashboard</a>
        </div>
      </div>

      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Payment Receipt"></ux4g-service-footer>
    `;

    this._attachListeners();
  }

  private _attachListeners(): void {
    this.root.querySelector('#print-btn')?.addEventListener('click', () => {
      window.print();
    });

    this.root.querySelector('#track-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.statusTrackerPath });
    });

    this.root.querySelector('#dashboard-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.dashboardPath });
    });
  }
}

if (!customElements.get('ux4g-payment-receipt-service')) {
  customElements.define('ux4g-payment-receipt-service', UX4GPaymentReceiptService);
}
