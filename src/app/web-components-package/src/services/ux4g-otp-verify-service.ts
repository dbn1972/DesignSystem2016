/**
 * UX4G OTP Verification Service — Web Component
 * @element ux4g-otp-verify-service
 * @fires ux4g-auth-success - On successful OTP verification
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS, VALIDATION } from './service-contract';

export class UX4GOtpVerifyService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'destination']; }
  private _otp = '';
  private _loading = false;
  private _error = '';
  private _countdown = 30;
  private _timer: ReturnType<typeof setInterval> | null = null;

  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this._startTimer(); this.render(); }
  disconnectedCallback(): void { if (this._timer) clearInterval(this._timer); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get destination() { return this.getAttribute('destination') || 'your registered mobile'; }

  private _startTimer(): void {
    this._countdown = 30;
    if (this._timer) clearInterval(this._timer);
    this._timer = setInterval(() => { this._countdown--; if (this._countdown <= 0 && this._timer) clearInterval(this._timer); this.render(); }, 1000);
  }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .card { max-width: 480px; margin: 2rem auto; padding: 2rem; background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; text-align: center; }
        .card__icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .card__title { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.25rem; }
        .card__sub { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 1.5rem; }
        .field { margin-bottom: 1.25rem; }
        .label { display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.375rem; }
        .input { display: block; width: 100%; padding: 0.75rem; font-size: 1.25rem; font-family: monospace; letter-spacing: 0.3em; text-align: center; border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; box-sizing: border-box; }
        .input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
        .hint { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); margin-bottom: 1.25rem; }
        .link { background: none; border: none; color: var(--ux4g-color-interactive-default, #000080); font-weight: 600; cursor: pointer; font-size: 0.875rem; }
        .alert { display: flex; gap: 0.5rem; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; margin-bottom: 1rem; background: #fef2f2; color: #dc2626; border: 1px solid #dc2626; justify-content: center; }
        .btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border: none; border-radius: 0.5rem; cursor: pointer; background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid transparent; border-top-color: currentColor; border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      </style>
      <ux4g-service-header icon="🔐" icon-color="#9333ea" category="${this.serviceName}" heading="Verify OTP"></ux4g-service-header>
      <div class="card">
        <div class="card__icon" aria-hidden="true">🔐</div>
        <h2 class="card__title">Verify OTP</h2>
        <p class="card__sub">Enter the 6-digit code sent to ${this.destination}</p>
        ${this._error ? `<div class="alert" role="alert">⚠ ${this._error}</div>` : ''}
        <form id="otp-form" novalidate>
          <div class="field"><label class="label">One-Time Password</label><input class="input" id="otp-input" type="text" inputmode="numeric" maxlength="6" placeholder="Enter 6-digit OTP" autocomplete="one-time-code" value="${this._otp}" aria-describedby="otp-hint" /></div>
          <div class="hint" id="otp-hint">${this._countdown > 0 ? `Resend OTP in ${this._countdown}s` : '<button type="button" class="link" id="otp-resend">Resend OTP</button>'}</div>
          <button type="submit" class="btn" ${this._loading ? 'disabled' : ''}>${this._loading ? '<span class="spinner"></span> Verifying…' : 'Verify OTP'}</button>
        </form>
      </div>
      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="OTP Verification"></ux4g-service-footer>
    `;
    const input = this.root.querySelector('#otp-input') as HTMLInputElement;
    input?.addEventListener('input', () => { this._otp = input.value.replace(/\D/g, '').slice(0, 6); input.value = this._otp; });
    this.root.querySelector('#otp-resend')?.addEventListener('click', () => { this._startTimer(); this.render(); });
    this.root.querySelector('#otp-form')?.addEventListener('submit', (e) => { e.preventDefault(); this._verify(); });
  }

  private _verify(): void {
    if (!VALIDATION.otp.test(this._otp)) { this._error = 'Enter a valid 6-digit OTP'; this.render(); return; }
    this._loading = true; this._error = ''; this.render();
    setTimeout(() => {
      if (this._otp === '000000') { this._loading = false; this._error = 'Invalid OTP. Please try again.'; this.render(); return; }
      this._loading = false; this.dispatchCustomEvent(SERVICE_EVENTS.authSuccess, { otp: this._otp }); this.render();
    }, 600);
  }
}

if (!customElements.get('ux4g-otp-verify-service')) customElements.define('ux4g-otp-verify-service', UX4GOtpVerifyService);
