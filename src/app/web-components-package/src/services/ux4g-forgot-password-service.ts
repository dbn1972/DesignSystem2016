/**
 * UX4G Forgot Password Service — Web Component
 * @element ux4g-forgot-password-service
 * @fires ux4g-auth-success - On successful reset link sent
 * @fires ux4g-navigate - On navigation
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS, VALIDATION } from './service-contract';

export class UX4GForgotPasswordService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'sign-in-path']; }
  private _email = '';
  private _loading = false;
  private _error = '';
  private _success = '';

  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get signInPath() { return this.getAttribute('sign-in-path') || '/sign-in'; }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .card { max-width: 480px; margin: 2rem auto; padding: 2rem; background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; }
        .card__header { text-align: center; margin-bottom: 1.5rem; }
        .card__title { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.25rem; }
        .card__sub { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0; }
        .field { margin-bottom: 1.25rem; }
        .label { display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.375rem; }
        .input { display: block; width: 100%; padding: 0.625rem 0.75rem; font-size: 0.875rem; border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; box-sizing: border-box; }
        .input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
        .alert { padding: 0.75rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; margin-bottom: 1rem; }
        .alert--error { background: #fef2f2; color: #dc2626; border: 1px solid #dc2626; }
        .alert--success { background: #f0fdf4; color: #16a34a; border: 1px solid #16a34a; }
        .btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border: none; border-radius: 0.5rem; cursor: pointer; background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid transparent; border-top-color: currentColor; border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .footer { margin-top: 1.5rem; text-align: center; }
        .link { background: none; border: none; color: var(--ux4g-color-interactive-default, #000080); font-weight: 600; cursor: pointer; font-size: 0.875rem; text-decoration: none; }
      </style>
      <ux4g-service-header icon="🔑" icon-color="#9333ea" category="${this.serviceName}" heading="Reset Your Password"></ux4g-service-header>
      <div class="card">
        <div class="card__header"><h2 class="card__title">Forgot Password</h2><p class="card__sub">Enter your registered email to receive a reset link.</p></div>
        ${this._error ? `<div class="alert alert--error" role="alert">⚠ ${this._error}</div>` : ''}
        ${this._success ? `<div class="alert alert--success" role="status">✅ ${this._success}</div>` : ''}
        ${!this._success ? `
          <form id="fp-form" novalidate>
            <div class="field"><label class="label">Email Address</label><input class="input" id="fp-email" type="email" placeholder="you@example.com" autocomplete="email" value="${this._email}" /></div>
            <button type="submit" class="btn" ${this._loading ? 'disabled' : ''}>${this._loading ? '<span class="spinner"></span> Sending…' : 'Send Reset Link'}</button>
          </form>
        ` : ''}
        <div class="footer"><a href="${this.signInPath}" class="link" id="fp-back">← Back to Sign In</a></div>
      </div>
      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Forgot Password"></ux4g-service-footer>
    `;
    const emailInput = this.root.querySelector('#fp-email') as HTMLInputElement;
    emailInput?.addEventListener('input', () => { this._email = emailInput.value; });
    this.root.querySelector('#fp-form')?.addEventListener('submit', (e) => { e.preventDefault(); this._submit(); });
    this.root.querySelector('#fp-back')?.addEventListener('click', (e) => { e.preventDefault(); this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.signInPath }); });
  }

  private _submit(): void {
    if (!VALIDATION.email.test(this._email)) { this._error = 'Enter a valid email address'; this.render(); return; }
    this._loading = true; this._error = ''; this.render();
    setTimeout(() => { this._loading = false; this._success = `Password reset link sent to ${this._email}`; this.dispatchCustomEvent(SERVICE_EVENTS.authSuccess, { email: this._email }); this.render(); }, 600);
  }
}

if (!customElements.get('ux4g-forgot-password-service')) customElements.define('ux4g-forgot-password-service', UX4GForgotPasswordService);
