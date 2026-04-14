import { UX4GElement } from '../../base/UX4GElement';
const GOV = 'Government of India';
const PORTAL = 'Digital India Portal';

export class UX4GIdentitySignIn extends UX4GElement {
  private _username = ''; private _password = ''; private _showPw = false; private _remember = false;
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host{display:block;min-height:100vh;background:var(--ux4g-color-background,#f8fafc);font-family:system-ui,sans-serif;color:var(--ux4g-color-text-default,#0f172a)}
        .tri{height:4px;background:linear-gradient(to right,#ff9933 33%,#fff 33%,#fff 66%,#138808 66%)}
        .gov{display:flex;align-items:center;gap:.75rem;padding:1rem 2rem;background:var(--ux4g-color-surface,#fff);border-bottom:2px solid var(--ux4g-color-border,#e2e8f0)}
        .gov__icon{font-size:1.75rem}.gov__title{font-weight:700}.gov__sub{font-size:.8125rem;color:var(--ux4g-color-text-muted,#64748b)}
        .main{max-width:1200px;margin:0 auto;padding:2rem 1.5rem;display:grid;grid-template-columns:2fr 1fr;gap:2rem}
        .form-col{max-width:560px}
        .card{background:var(--ux4g-color-surface,#fff);border:2px solid var(--ux4g-color-border,#e2e8f0);border-radius:.5rem;padding:2rem}
        .card__title{font-size:1.5rem;font-weight:800;margin:0 0 .25rem}.card__desc{font-size:.875rem;color:var(--ux4g-color-text-muted,#64748b);margin:0 0 1.5rem}
        .field{margin-bottom:1.25rem}.label{display:block;font-size:.875rem;font-weight:700;margin-bottom:.375rem}
        .input{display:block;width:100%;padding:.625rem .75rem;font-size:.875rem;border:1px solid var(--ux4g-color-border,#e2e8f0);border-radius:.5rem;box-sizing:border-box;background:var(--ux4g-color-surface,#fff);color:var(--ux4g-color-text-default,#0f172a)}
        .input:focus{border-color:var(--ux4g-color-interactive-default,#000080);outline:none}
        .input-wrap{position:relative}.input-wrap .input{padding-right:2.5rem}
        .toggle{position:absolute;right:.5rem;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1.125rem}
        .row{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem}
        .check{font-size:.8125rem;display:flex;align-items:center;gap:.375rem;cursor:pointer}
        .link{background:none;border:none;color:var(--ux4g-color-interactive-default,#000080);font-weight:600;cursor:pointer;font-size:.8125rem;text-decoration:none;padding:0}
        .link:hover{text-decoration:underline}
        .btn{width:100%;padding:.75rem;font-size:.875rem;font-weight:700;border-radius:.375rem;border:none;cursor:pointer;text-align:center}
        .btn--primary{background:var(--ux4g-color-interactive-default,#000080);color:#fff}
        .btn--outline{background:var(--ux4g-color-surface,#fff);border:2px solid var(--ux4g-color-border,#e2e8f0);color:var(--ux4g-color-text-default,#0f172a)}
        .divider{text-align:center;margin:1.5rem 0;position:relative}
        .divider::before{content:'';position:absolute;left:0;right:0;top:50%;height:1px;background:var(--ux4g-color-border,#e2e8f0)}
        .divider span{background:var(--ux4g-color-surface,#fff);padding:0 .75rem;font-size:.8125rem;color:var(--ux4g-color-text-muted,#64748b);position:relative}
        .alt{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:1.5rem}
        .security{background:#eff6ff;border:1px solid #93c5fd;border-radius:.375rem;padding:.75rem;font-size:.75rem;color:var(--ux4g-color-text-muted,#64748b);text-align:center;margin-bottom:1rem}
        .recovery{text-align:center;font-size:.8125rem}
        .sidebar{display:flex;flex-direction:column;gap:1rem}
        .panel{background:var(--ux4g-color-surface,#fff);border:2px solid var(--ux4g-color-border,#e2e8f0);border-radius:.5rem;padding:1.25rem}
        .panel__title{font-size:.875rem;font-weight:700;margin:0 0 .75rem}
        .panel__text{font-size:.8125rem;color:var(--ux4g-color-text-muted,#64748b);margin:0 0 .25rem}
        .panel__text--bold{font-weight:700;color:var(--ux4g-color-text-default,#0f172a)}
        .annotations{margin:0;padding-left:1.25rem;font-size:.8125rem;color:var(--ux4g-color-text-muted,#64748b);line-height:1.8}
        @media(max-width:768px){.main{grid-template-columns:1fr}.form-col{max-width:100%}.alt{grid-template-columns:1fr}}
      </style>
      <div class="tri" aria-hidden="true"></div>
      <header class="gov"><span class="gov__icon" aria-hidden="true">🛡️</span><div><div class="gov__title">${PORTAL}</div><div class="gov__sub">${GOV}</div></div></header>
      <div class="main">
        <div class="form-col"><div class="card">
          <h1 class="card__title">Sign In to Your Account</h1>
          <p class="card__desc">Access your government services dashboard.</p>
          <form id="si-form" novalidate>
            <div class="field"><label class="label">Mobile Number or Email</label><input class="input" id="si-user" type="text" placeholder="Enter mobile number or email" autocomplete="username" /></div>
            <div class="field"><label class="label">Password</label><div class="input-wrap"><input class="input" id="si-pw" type="${this._showPw?'text':'password'}" placeholder="Enter your password" autocomplete="current-password" /><button type="button" class="toggle" id="si-toggle">${this._showPw?'🙈':'👁'}</button></div></div>
            <div class="row"><label class="check"><input type="checkbox" id="si-rem" ${this._remember?'checked':''} /> Remember me</label><a class="link" href="/patterns/identity/forgot-password">Forgot Password?</a></div>
            <button type="submit" class="btn btn--primary">Sign In</button>
          </form>
          <div class="divider"><span>Or sign in with</span></div>
          <div class="alt"><a href="/patterns/identity/mobile-otp" class="btn btn--outline">📱 Mobile OTP</a><a href="/patterns/identity/aadhaar-auth" class="btn btn--outline">🛡 Aadhaar</a></div>
          <div class="security">🔒 Your connection is encrypted and secure.</div>
          <div class="recovery"><a href="/patterns/identity/account-recovery" class="link">Can't access your account? Recover it here →</a></div>
        </div></div>
        <aside class="sidebar">
          <div class="panel"><h2 class="panel__title">Design Annotations</h2><ul class="annotations"><li>Accepts both mobile and email</li><li>Forgot Password prominently placed</li><li>Password show/hide toggle</li><li>Alternative auth methods visible</li><li>Account recovery path signposted</li><li>Security reassurance messaging</li></ul></div>
          <div class="panel"><h2 class="panel__title">Sign In Options</h2><p class="panel__text">Username + Password, Mobile OTP, Aadhaar Authentication</p></div>
          <div class="panel"><h2 class="panel__title">Help</h2><p class="panel__text panel__text--bold">📞 1800-XXX-XXXX</p><p class="panel__text">Mon–Sat, 9 AM – 6 PM</p></div>
        </aside>
      </div>
      <ux4g-service-footer left-text="Unified Identity Service • ${GOV}" right-text="Sign In"></ux4g-service-footer>
    `;
    this.root.querySelector('#si-toggle')?.addEventListener('click',()=>{this._showPw=!this._showPw;this.render();});
  }
}
if(!customElements.get('ux4g-identity-sign-in'))customElements.define('ux4g-identity-sign-in',UX4GIdentitySignIn);
