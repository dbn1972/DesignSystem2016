/**
 * UX4G Payment Summary Service — Web Component
 *
 * Payment summary and method selection.
 *
 * @element ux4g-payment-summary-service
 * @attr {string} service-name - Service name displayed in header/footer
 * @attr {string} application-id - Application ID for the payment
 *
 * @fires ux4g-payment-complete - Fired when payment is successful
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS } from './service-contract';

const FEE_ITEMS = [
  { label: 'Application Fee', amount: 500 },
  { label: 'Processing Fee', amount: 50 },
  { label: 'GST (18%)', amount: 99 },
];
const TOTAL = 649;

const PAYMENT_METHODS = [
  { id: 'upi', label: 'UPI', icon: '📱' },
  { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
  { id: 'card', label: 'Credit / Debit Card', icon: '💳' },
  { id: 'wallet', label: 'Wallet', icon: '👛' },
];

export class UX4GPaymentSummaryService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'application-id']; }

  private _loading = true;
  private _paying = false;
  private _paid = false;
  private _selectedMethod = 'upi';

  constructor() { super({ useShadowDOM: true }); }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
    setTimeout(() => { this._loading = false; this.render(); }, 500);
  }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get applicationId() { return this.getAttribute('application-id') || 'APP-2024-005678'; }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, -apple-system, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 640px; margin: 0 auto; padding: 2rem 1.5rem; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1rem; }
        .card__title { font-size: 1.125rem; font-weight: 700; margin: 0 0 1rem; }
        .loading { display: flex; align-items: center; justify-content: center; gap: 0.75rem; padding: 3rem; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .spinner { display: inline-block; width: 20px; height: 20px; border: 2px solid transparent; border-top-color: var(--ux4g-color-interactive-default, #000080); border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .fee-table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
        .fee-table td { padding: 0.625rem 0; font-size: 0.875rem; border-bottom: 1px solid var(--ux4g-color-border, #e2e8f0); }
        .fee-table td:last-child { text-align: right; font-weight: 500; }
        .fee-table .total td { border-bottom: none; border-top: 2px solid var(--ux4g-color-text-default, #0f172a); font-weight: 700; font-size: 1rem; padding-top: 0.75rem; }
        .method-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .method { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; cursor: pointer; font-size: 0.875rem; }
        .method:hover { border-color: var(--ux4g-color-interactive-default, #000080); }
        .method--selected { border-color: var(--ux4g-color-interactive-default, #000080); background: #eff6ff; }
        .method input[type="radio"] { accent-color: var(--ux4g-color-interactive-default, #000080); }
        .method__icon { font-size: 1.25rem; }
        .btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 0.75rem 1.25rem; font-size: 1rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; margin-top: 1.5rem; }
        .btn--pay { background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
        .btn--pay:hover { opacity: 0.9; }
        .btn--pay:disabled { opacity: 0.6; cursor: not-allowed; }
        .alert--success { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 1.25rem; background: #f0fdf4; border: 1px solid #16a34a; border-radius: 0.5rem; font-size: 0.875rem; color: #15803d; margin-top: 1rem; }
        .alert__icon { font-size: 1.25rem; }
      </style>

      <ux4g-service-header icon="💰" icon-color="#000080" category="${this.serviceName}" heading="Payment Summary"></ux4g-service-header>

      <div class="main">
        ${this._loading ? `
          <div class="loading"><span class="spinner" aria-hidden="true"></span> Loading payment summary…</div>
        ` : this._renderContent()}
      </div>

      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Payment"></ux4g-service-footer>
    `;

    if (!this._loading) this._attachListeners();
  }

  private _renderContent(): string {
    return `
      <div class="card">
        <h2 class="card__title">Fee Breakdown</h2>
        <table class="fee-table">
          <tbody>
            ${FEE_ITEMS.map(f => `<tr><td>${f.label}</td><td>₹${f.amount}</td></tr>`).join('')}
            <tr class="total"><td>Total</td><td>₹${TOTAL}</td></tr>
          </tbody>
        </table>
      </div>

      <div class="card">
        <h2 class="card__title">Payment Method</h2>
        <div class="method-group">
          ${PAYMENT_METHODS.map(m => `
            <label class="method ${this._selectedMethod === m.id ? 'method--selected' : ''}">
              <input type="radio" name="payment-method" value="${m.id}" ${this._selectedMethod === m.id ? 'checked' : ''} />
              <span class="method__icon" aria-hidden="true">${m.icon}</span>
              <span>${m.label}</span>
            </label>
          `).join('')}
        </div>
      </div>

      <button type="button" class="btn btn--pay" id="pay-btn" ${this._paying ? 'disabled' : ''}>
        ${this._paying ? '<span class="spinner" aria-hidden="true"></span> Processing…' : `Pay ₹${TOTAL}`}
      </button>

      ${this._paid ? `
        <div class="alert--success" role="alert">
          <span class="alert__icon" aria-hidden="true">✅</span>
          <span>Payment of ₹${TOTAL} completed successfully! Transaction ID: TXN-${Date.now().toString(36).toUpperCase()}</span>
        </div>
      ` : ''}
    `;
  }

  private _attachListeners(): void {
    this.root.querySelectorAll('input[name="payment-method"]').forEach(el => {
      el.addEventListener('change', (e) => {
        this._selectedMethod = (e.target as HTMLInputElement).value;
        this.render();
      });
    });

    this.root.querySelector('#pay-btn')?.addEventListener('click', () => {
      if (this._paying || this._paid) return;
      this._paying = true;
      this.render();
      setTimeout(() => {
        this._paying = false;
        this._paid = true;
        this.render();
        this.dispatchCustomEvent(SERVICE_EVENTS.paymentComplete, {
          applicationId: this.applicationId,
          amount: TOTAL,
          method: this._selectedMethod,
        });
      }, 1500);
    });
  }
}

if (!customElements.get('ux4g-payment-summary-service')) {
  customElements.define('ux4g-payment-summary-service', UX4GPaymentSummaryService);
}
