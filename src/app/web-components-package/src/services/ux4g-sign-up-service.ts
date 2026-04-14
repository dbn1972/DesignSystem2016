/**
 * UX4G Sign Up Service — Web Component
 * @element ux4g-sign-up-service
 * @fires ux4g-auth-success - On successful registration
 * @fires ux4g-navigate - On navigation link click
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS, VALIDATION } from './service-contract';

export class UX4GSignUpService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'sign-in-path']; }
  private _data: Record<string, string> = { fullName: '', email: '', mobile: '', password: '', confirmPassword: '' };
  private _acceptTerms = false;
  private _loading = false;
  private _error = '';
  private _showPassword = false;

  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get signInPath() { return this.getAttribute('sign-in-path') || '/sign-in'; }

  protected render(): void {
    const d = this._data;
    const pwMatch = d.password && d.confirmPassword && d.password === d.confirmPassword;
    const pwMismatch = d.confirmPassword && d.password !== d.confirmPassword;

    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .card { max-width: 480px; margin: 2rem auto; padding: 2rem; background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; }
        .card__header { text-align: center; margin-bottom: 1.5rem; }
        .card__title { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.25rem; }
        .card__sub { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0; }
        .field { margin-bottom: 1.25rem; }
        .label { display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.375rem; }
        .input { display: block; width: 100%; padding: 0.625rem 0.75rem; font-size: 0.875rem; border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; box-sizing: border-box; background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-default, #0f172a); }
        .input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
        .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .error-text { font-size: 0.75rem; color: #dc2626; margin-top: 0.25rem; }
        .match-ok { font-size: 0.75rem; color: #16a34a; margin-top: 0.25rem; }
        .alert { display: flex; gap: 0.5rem; padding: 0.75rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; margin-bottom: 1rem; background: #fef2f2; color: #dc2626; border: 1px solid #dc2626; }
        .checkbox { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.8125rem; margin-bottom: 1.25rem; cursor: pointer; }
        .btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border: none; border-radius: 0.5rem; cursor: pointer; background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid transparent; border-top-color: currentColor; border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .footer { margin-top: 1.5rem; text-align: center; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .link { background: none; border: none; color: var(--ux4g-color-interactive-default, #000080); font-weight: 600; cursor: pointer; text-decoration: none; padding: 0; font-size: inherit; }
        @media (max-width: 480px) { .row { grid-template-columns: 1fr; } .card { margin: 1rem; padding: 1.25rem; } }
      </style>
      <ux4g-service-header icon="📝" icon-color="#16a34a" category="${this.serviceName}" heading="Create Account"></ux4g-service-header>
      <div class="card">
        <div class="card__header"><h2 class="card__title">Create Account</h2><p class="card__sub">Register for Government Services</p></div>
        ${this._error ? `<div class="alert" role="alert">⚠ ${this._error}</div>` : ''}
        <form id="su-form" novalidate>
          <div class="field"><label class="label">Full Name</label><input class="input" data-f="fullName" value="${d.fullName}" placeholder="As per Aadhaar card" autocomplete="name" /></div>
          <div class="field"><label class="label">Email Address</label><input class="input" data-f="email" type="email" value="${d.email}" placeholder="you@example.com" autocomplete="email" /></div>
          <div class="field"><label class="label">Mobile Number</label><input class="input" data-f="mobile" type="tel" value="${d.mobile}" placeholder="10-digit mobile number" maxlength="10" inputmode="numeric" autocomplete="tel" /></div>
          <div class="row">
            <div class="field"><label class="label">Password</label><input class="input" data-f="password" type="${this._showPassword ? 'text' : 'password'}" value="${d.password}" placeholder="Min 8 characters" autocomplete="new-password" /></div>
            <div class="field"><label class="label">Confirm Password</label><input class="input" data-f="confirmPassword" type="password" value="${d.confirmPassword}" placeholder="Re-enter password" />
              ${pwMismatch ? '<div class="error-text">Passwords do not match</div>' : ''}
              ${pwMatch ? '<div class="match-ok">✓ Passwords match</div>' : ''}
            </div>
          </div>
          <label class="checkbox"><input type="checkbox" id="su-terms" ${this._acceptTerms ? 'checked' : ''} /><span>I accept the Terms of Service and Privacy Policy</span></label>
          <button type="submit" class="btn" ${this._loading ? 'disabled' : ''}>${this._loading ? '<span class="spinner"></span> Creating…' : 'Create Account'}</button>
        </form>
        <div class="footer"><span>Already have an account?</span> <button type="button" class="link" id="su-signin">Sign In</button></div>
      </div>
      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Sign Up"></ux4g-service-footer>
    `;
    this._attach();
  }

  private _attach(): void {
    this.root.querySelectorAll('[data-f]').forEach(el => {
      el.addEventListener('input', () => { this._data[(el as HTMLElement).dataset.f!] = (el as HTMLInputElement).value; });
    });
    this.root.querySelector('#su-terms')?.addEventListener('change', (e) => { this._acceptTerms = (e.target as HTMLInputElement).checked; });
    this.root.querySelector('#su-signin')?.addEventListener('click', () => { this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.signInPath }); });
    this.root.querySelector('#su-form')?.addEventListener('submit', (e) => { e.preventDefault(); this._submit(); });
  }

  private _submit(): void {
    const d = this._data;
    if (!d.fullName.trim() || !VALIDATION.email.test(d.email) || !VALIDATION.mobile.test(d.mobile) || d.password.length < 8 || d.password !== d.confirmPassword || !this._acceptTerms) {
      this._error = 'Please fill all fields correctly and accept terms'; this.render(); return;
    }
    this._loading = true; this._error = ''; this.render();
    setTimeout(() => { this._loading = false; this.dispatchCustomEvent(SERVICE_EVENTS.authSuccess, { email: d.email }); this.render(); }, 800);
  }
}

if (!customElements.get('ux4g-sign-up-service')) customElements.define('ux4g-sign-up-service', UX4GSignUpService);
