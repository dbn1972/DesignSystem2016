/**
 * UX4G Sign In Service — Web Component
 *
 * Complete sign-in flow matching the React SignInService component.
 *
 * @element ux4g-sign-in-service
 * @attr {string} service-name - Service name displayed in header/footer
 * @attr {string} sign-up-path - Path to sign-up page
 * @attr {string} forgot-password-path - Path to forgot password page
 * @attr {string} help-path - Path to help page
 *
 * @fires ux4g-auth-success - Fired on successful sign-in with { email }
 * @fires ux4g-navigate - Fired when user clicks a navigation link with { path }
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS, VALIDATION } from './service-contract';

export class UX4GSignInService extends UX4GElement {
  static get observedAttributes() {
    return ['service-name', 'sign-up-path', 'forgot-password-path', 'help-path'];
  }

  private _email = '';
  private _password = '';
  private _showPassword = false;
  private _loading = false;
  private _error = '';

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get signUpPath() { return this.getAttribute('sign-up-path') || '/sign-up'; }
  private get forgotPasswordPath() { return this.getAttribute('forgot-password-path') || '/forgot-password'; }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, -apple-system, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .card { max-width: 480px; margin: 2rem auto; padding: 2rem; background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; }
        .card__header { text-align: center; margin-bottom: 1.5rem; }
        .card__emblem { font-size: 2rem; margin-bottom: 0.5rem; }
        .card__title { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.25rem; }
        .card__sub { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0; }
        .field { margin-bottom: 1.25rem; }
        .label { display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.375rem; }
        .input { display: block; width: 100%; padding: 0.625rem 0.75rem; font-size: 0.875rem; border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; outline: none; box-sizing: border-box; background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-default, #0f172a); }
        .input:focus { border-color: var(--ux4g-color-interactive-default, #000080); box-shadow: 0 0 0 3px rgba(0,0,128,0.15); }
        .input--error { border-color: var(--ux4g-color-feedback-error, #dc2626); }
        .input-group { position: relative; }
        .input-group .input { padding-right: 2.5rem; }
        .toggle { position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 1rem; padding: 0.25rem; }
        .error-text { font-size: 0.75rem; color: var(--ux4g-color-feedback-error, #dc2626); margin-top: 0.25rem; }
        .alert { display: flex; align-items: flex-start; gap: 0.5rem; padding: 0.75rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; margin-bottom: 1rem; background: #fef2f2; color: #dc2626; border: 1px solid #dc2626; }
        .actions { display: flex; justify-content: flex-end; margin-bottom: 1rem; }
        .link { background: none; border: none; color: var(--ux4g-color-interactive-default, #000080); font-size: 0.875rem; font-weight: 600; cursor: pointer; text-decoration: none; padding: 0; }
        .link:hover { text-decoration: underline; }
        .btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 600; border: none; border-radius: 0.5rem; cursor: pointer; }
        .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
        .btn--primary:hover { opacity: 0.9; }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid transparent; border-top-color: currentColor; border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .footer { margin-top: 1.5rem; text-align: center; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .footer .link { margin-left: 0.25rem; }
      </style>

      <ux4g-service-header icon="🔐" icon-color="#000080" category="${this.serviceName}" heading="Sign In"></ux4g-service-header>

      <div class="card">
        <div class="card__header">
          <div class="card__emblem" aria-hidden="true">🇮🇳</div>
          <h2 class="card__title">Sign In</h2>
          <p class="card__sub">Access your ${this.serviceName} account</p>
        </div>

        ${this._error ? `<div class="alert" role="alert"><span aria-hidden="true">⚠</span><span>${this._error}</span></div>` : ''}

        <form id="signin-form" novalidate>
          <div class="field">
            <label class="label" for="si-email">Email Address</label>
            <input id="si-email" class="input" type="email" placeholder="you@example.com" autocomplete="email" value="${this._email}" aria-describedby="si-email-err" />
            <div id="si-email-err" class="error-text" role="alert"></div>
          </div>

          <div class="field">
            <label class="label" for="si-password">Password</label>
            <div class="input-group">
              <input id="si-password" class="input" type="${this._showPassword ? 'text' : 'password'}" placeholder="Enter your password" autocomplete="current-password" value="${this._password}" aria-describedby="si-pw-err" />
              <button type="button" class="toggle" id="si-toggle" aria-label="${this._showPassword ? 'Hide password' : 'Show password'}">${this._showPassword ? '🙈' : '👁'}</button>
            </div>
            <div id="si-pw-err" class="error-text" role="alert"></div>
          </div>

          <div class="actions">
            <button type="button" class="link" id="si-forgot">Forgot password?</button>
          </div>

          <button type="submit" class="btn btn--primary" ${this._loading ? 'disabled' : ''} aria-busy="${this._loading}">
            ${this._loading ? '<span class="spinner" aria-hidden="true"></span> Signing in…' : 'Sign In'}
          </button>
        </form>

        <div class="footer">
          <span>Don't have an account?</span>
          <button type="button" class="link" id="si-signup">Create Account</button>
        </div>
      </div>

      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Sign In"></ux4g-service-footer>
    `;

    this._attachListeners();
  }

  private _attachListeners(): void {
    const form = this.root.querySelector('#signin-form') as HTMLFormElement;
    const emailInput = this.root.querySelector('#si-email') as HTMLInputElement;
    const pwInput = this.root.querySelector('#si-password') as HTMLInputElement;
    const toggle = this.root.querySelector('#si-toggle') as HTMLButtonElement;
    const forgot = this.root.querySelector('#si-forgot') as HTMLButtonElement;
    const signup = this.root.querySelector('#si-signup') as HTMLButtonElement;

    emailInput?.addEventListener('input', () => { this._email = emailInput.value; });
    pwInput?.addEventListener('input', () => { this._password = pwInput.value; });

    toggle?.addEventListener('click', () => {
      this._showPassword = !this._showPassword;
      this.render();
    });

    forgot?.addEventListener('click', () => {
      this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.forgotPasswordPath });
    });

    signup?.addEventListener('click', () => {
      this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.signUpPath });
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleSubmit();
    });
  }

  private _handleSubmit(): void {
    // Validate
    const emailErr = this.root.querySelector('#si-email-err') as HTMLElement;
    const pwErr = this.root.querySelector('#si-pw-err') as HTMLElement;
    let valid = true;

    if (!this._email || !VALIDATION.email.test(this._email)) {
      emailErr.textContent = 'Enter a valid email address';
      valid = false;
    } else {
      emailErr.textContent = '';
    }

    if (!this._password || this._password.length < VALIDATION.password.minLength) {
      pwErr.textContent = 'Password must be at least 8 characters';
      valid = false;
    } else {
      pwErr.textContent = '';
    }

    if (!valid) return;

    // Simulate API call
    this._loading = true;
    this._error = '';
    this.render();

    setTimeout(() => {
      if (this._email === 'fail@test.com') {
        this._loading = false;
        this._error = 'Invalid email or password';
        this.render();
        return;
      }

      this._loading = false;
      this.dispatchCustomEvent(SERVICE_EVENTS.authSuccess, { email: this._email });
      this.render();
    }, 800);
  }
}

if (!customElements.get('ux4g-sign-in-service')) {
  customElements.define('ux4g-sign-in-service', UX4GSignInService);
}
