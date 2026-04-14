/**
 * Identity Pattern Pages 1-5 — Web Components
 * Matches React: IdentitySignIn, IdentitySignUp, IdentityMobileOTP, IdentityEmailOTP, IdentityForgotPassword
 */
import { UX4GElement } from '../../base/UX4GElement';

const GOV = 'Government of India';
const PORTAL = 'Digital India Portal';
const IP = '/patterns/identity';

function govHeader(): string {
  return `<div style="height:4px;background:linear-gradient(to right,#FF9933 33%,#fff 33%,#fff 66%,#138808 66%)"></div>
    <div style="display:flex;align-items:center;gap:0.75rem;padding:1.5rem 2rem;background:var(--ux4g-color-surface,#fff);border-bottom:2px solid var(--ux4g-color-border,#e2e8f0)">
      <div style="width:3rem;height:3rem;border-radius:0.5rem;background:var(--ux4g-color-interactive-default,#000080);display:flex;align-items:center;justify-content:center;font-size:1.5rem;color:#fff">🛡</div>
      <div><div style="font-weight:700">${PORTAL}</div><div style="font-size:0.8125rem;color:var(--ux4g-color-text-muted,#64748b)">${GOV}</div></div>
    </div>`;
}

function sidebar(panels: {title:string;items:string[]}[]): string {
  return panels.map(p => `<div style="background:var(--ux4g-color-surface,#fff);border:2px solid var(--ux4g-color-border,#e2e8f0);border-radius:0.5rem;padding:1.25rem;margin-bottom:1rem">
    <h3 style="font-size:0.875rem;font-weight:700;margin:0 0 0.75rem">${p.title}</h3>
    <ul style="margin:0;padding-left:1.25rem;font-size:0.8125rem;color:var(--ux4g-color-text-muted,#64748b);line-height:1.8">${p.items.map(i=>`<li>${i}</li>`).join('')}</ul>
  </div>`).join('');
}

const LAYOUT = `
  :host { display:block; min-height:100vh; background:var(--ux4g-color-background,#f8fafc); font-family:system-ui,sans-serif; color:var(--ux4g-color-text-default,#0f172a); }
  .wrap { max-width:1200px; margin:0 auto; padding:2rem 1.5rem; display:grid; grid-template-columns:2fr 1fr; gap:2rem; }
  .form-col { max-width:600px; }
  .card { background:var(--ux4g-color-surface,#fff); border:2px solid var(--ux4g-color-border,#e2e8f0); border-radius:0.5rem; padding:2rem; }
  .card h1 { font-size:1.5rem; font-weight:800; margin:0 0 0.25rem; }
  .card p.sub { font-size:0.875rem; color:var(--ux4g-color-text-muted,#64748b); margin:0 0 1.5rem; }
  .field { margin-bottom:1.25rem; }
  .label { display:block; font-size:0.875rem; font-weight:700; margin-bottom:0.375rem; }
  .input { display:block; width:100%; padding:0.625rem 0.75rem; font-size:0.875rem; border:1px solid var(--ux4g-color-border,#e2e8f0); border-radius:0.5rem; box-sizing:border-box; }
  .input:focus { border-color:var(--ux4g-color-interactive-default,#000080); outline:none; }
  .btn { display:block; width:100%; padding:0.75rem; font-size:0.875rem; font-weight:700; border:none; border-radius:0.5rem; cursor:pointer; text-align:center; }
  .btn--primary { background:var(--ux4g-color-interactive-default,#000080); color:#fff; }
  .btn:disabled { opacity:0.6; cursor:not-allowed; }
  .link { color:var(--ux4g-color-interactive-default,#000080); font-weight:600; text-decoration:none; font-size:0.875rem; }
  .divider { text-align:center; margin:1.5rem 0; position:relative; }
  .divider::before { content:''; position:absolute; left:0; right:0; top:50%; height:1px; background:var(--ux4g-color-border,#e2e8f0); }
  .divider span { background:var(--ux4g-color-surface,#fff); padding:0 0.75rem; font-size:0.8125rem; color:var(--ux4g-color-text-muted,#64748b); position:relative; }
  .alt-btns { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1.5rem; }
  .alt-btn { padding:0.75rem; border:2px solid var(--ux4g-color-border,#e2e8f0); border-radius:0.5rem; background:var(--ux4g-color-surface,#fff); font-weight:700; font-size:0.875rem; cursor:pointer; text-align:center; }
  .notice { background:#eff6ff; border:1px solid #93c5fd; border-radius:0.375rem; padding:0.75rem; font-size:0.75rem; color:var(--ux4g-color-text-muted,#64748b); text-align:center; margin-top:1rem; }
  .otp-group { display:flex; justify-content:center; gap:0.75rem; margin-bottom:1.5rem; }
  .otp-input { width:3rem; height:3.5rem; text-align:center; font-size:1.5rem; font-weight:700; border:2px solid var(--ux4g-color-border,#e2e8f0); border-radius:0.5rem; }
  .otp-input:focus { border-color:var(--ux4g-color-interactive-default,#000080); outline:none; }
  .timer { font-size:0.875rem; color:var(--ux4g-color-text-muted,#64748b); text-align:center; margin-bottom:1.5rem; }
  .row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
  .check { display:flex; align-items:flex-start; gap:0.5rem; font-size:0.8125rem; margin-bottom:1.25rem; cursor:pointer; }
  .req-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.25rem; margin-top:0.5rem; font-size:0.75rem; }
  .req-item { color:var(--ux4g-color-text-muted,#64748b); }
  .req-item--met { color:#16a34a; }
  .match-ok { font-size:0.75rem; color:#16a34a; margin-top:0.25rem; }
  .match-no { font-size:0.75rem; color:#dc2626; margin-top:0.25rem; }
  .progress { display:flex; gap:0.5rem; margin-bottom:1.5rem; }
  .step { display:flex; align-items:center; gap:0.375rem; flex:1; padding:0.5rem; background:var(--ux4g-color-surface,#fff); border:2px solid var(--ux4g-color-border,#e2e8f0); border-radius:0.375rem; font-size:0.6875rem; color:var(--ux4g-color-text-muted,#64748b); }
  .step--active { border-color:var(--ux4g-color-interactive-default,#000080); color:var(--ux4g-color-interactive-default,#000080); font-weight:700; }
  .step--done { border-color:#16a34a; color:#16a34a; }
  .step__num { width:1.375rem; height:1.375rem; border-radius:50%; background:var(--ux4g-color-border,#e2e8f0); display:flex; align-items:center; justify-content:center; font-size:0.625rem; font-weight:700; flex-shrink:0; }
  .step--active .step__num { background:var(--ux4g-color-interactive-default,#000080); color:#fff; }
  .step--done .step__num { background:#16a34a; color:#fff; }
  .methods { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1.5rem; }
  .method { display:block; padding:0.875rem; border:2px solid var(--ux4g-color-border,#e2e8f0); border-radius:0.375rem; text-align:center; font-weight:700; cursor:pointer; font-size:0.875rem; }
  .method--active { border-color:var(--ux4g-color-interactive-default,#000080); background:#eff6ff; color:var(--ux4g-color-interactive-default,#000080); }
  @media (max-width:768px) { .wrap { grid-template-columns:1fr; } .form-col { max-width:100%; } .row,.alt-btns,.methods,.req-grid { grid-template-columns:1fr; } .progress { flex-wrap:wrap; } }
`;

// ── 1. IDENTITY SIGN IN ──
export class UX4GIdentitySignIn extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    this.root.innerHTML = `<style>${LAYOUT}</style>${govHeader()}
      <div class="wrap"><div class="form-col"><div class="card">
        <h1>Sign In to Your Account</h1><p class="sub">Access government services securely.</p>
        <div class="field"><label class="label">Mobile Number or Email</label><input class="input" placeholder="Enter mobile number or email" /></div>
        <div class="field"><label class="label">Password</label><input class="input" type="password" placeholder="Enter your password" /></div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem"><label class="check" style="margin:0"><input type="checkbox" /> Remember me</label><a href="${IP}/forgot-password" class="link">Forgot password?</a></div>
        <button class="btn btn--primary">Sign In</button>
        <div class="divider"><span>Or sign in with</span></div>
        <div class="alt-btns"><button class="alt-btn">�� Mobile OTP</button><button class="alt-btn">🆔 Aadhaar</button></div>
        <div class="notice">�� Your connection is encrypted and secure.</div>
        <div style="text-align:center;margin-top:1rem"><a href="${IP}/account-recovery" class="link">Can't access your account? →</a></div>
      </div></div>
      <aside>${sidebar([
        { title: 'Design Annotations', items: ['Accepts mobile and email', 'Forgot Password prominently placed', 'Password show/hide toggle', 'Alternative auth methods visible', 'Account recovery path signposted', 'Security reassurance messaging'] },
        { title: 'Sign In Options', items: ['Username + Password', 'Mobile OTP', 'Aadhaar Authentication'] },
        { title: 'Help', items: ['Helpline: 1800-XXX-XXXX', 'Mon–Sat, 9 AM – 6 PM'] },
      ])}</aside></div>
      <ux4g-service-footer left-text="Unified Identity Service • ${GOV}" right-text="Sign In"></ux4g-service-footer>`;
  }
}

// ── 2. IDENTITY SIGN UP ──
export class UX4GIdentitySignUp extends UX4GElement {
  private _pw = '';
  private _cpw = '';
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    const p = this._pw;
    const reqs = [
      { l: '8+ characters', m: p.length >= 8 }, { l: 'Uppercase', m: /[A-Z]/.test(p) },
      { l: 'Lowercase', m: /[a-z]/.test(p) }, { l: 'Number', m: /\d/.test(p) }, { l: 'Special char', m: /[^A-Za-z0-9]/.test(p) },
    ];
    const match = p && this._cpw && p === this._cpw;
    const mismatch = this._cpw && p !== this._cpw;
    this.root.innerHTML = `<style>${LAYOUT}</style>${govHeader()}
      <div class="wrap"><div class="form-col"><div class="card">
        <h1>Create Your Account</h1><p class="sub">Register to access government digital services.</p>
        <div class="field"><label class="label">Full Name</label><input class="input" placeholder="As per official records" /></div>
        <div class="field"><label class="label">Mobile Number</label><input class="input" type="tel" placeholder="10-digit mobile number" maxlength="10" /></div>
        <div class="field"><label class="label">Email Address</label><input class="input" type="email" placeholder="your.email@example.com" /></div>
        <div class="field"><label class="label">Password</label><input class="input" id="su-pw" type="password" placeholder="Create a strong password" value="${p}" />
          ${p ? `<div class="req-grid">${reqs.map(r=>`<div class="req-item ${r.m?'req-item--met':''}">${r.m?'✅':'⬜'} ${r.l}</div>`).join('')}</div>` : ''}
        </div>
        <div class="field"><label class="label">Confirm Password</label><input class="input" id="su-cpw" type="password" placeholder="Re-enter password" value="${this._cpw}" />
          ${match ? '<div class="match-ok">✅ Passwords match</div>' : ''}${mismatch ? '<div class="match-no">❌ Passwords do not match</div>' : ''}
        </div>
        <label class="check"><input type="checkbox" /><span>I agree to the Terms of Service and Privacy Policy</span></label>
        <button class="btn btn--primary">Create Account & Verify Mobile</button>
        <div class="notice">🔒 Your data is encrypted and protected.</div>
      </div></div>
      <aside>${sidebar([
        { title: 'Design Annotations', items: ['Real-time password strength', 'Confirm password match', 'Mobile prefix for India', 'Consent required', 'Inline validation'] },
        { title: 'Sign Up Flow', items: ['1. Fill form (current)', '2. Verify mobile via OTP', '3. Account created'] },
        { title: 'Help', items: ['📞 1800-XXX-XXXX', 'Mon–Sat, 9 AM – 6 PM'] },
      ])}</aside></div>
      <ux4g-service-footer left-text="Unified Identity Service • ${GOV}" right-text="Create Account"></ux4g-service-footer>`;
    this.root.querySelector('#su-pw')?.addEventListener('input', (e) => { this._pw = (e.target as HTMLInputElement).value; this.render(); });
    this.root.querySelector('#su-cpw')?.addEventListener('input', (e) => { this._cpw = (e.target as HTMLInputElement).value; this.render(); });
  }
}

// ── 3. IDENTITY MOBILE OTP ──
export class UX4GIdentityMobileOTP extends UX4GElement {
  private _countdown = 30;
  private _timer: any;
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this._startTimer(); this.render(); }
  disconnectedCallback(): void { clearInterval(this._timer); }
  private _startTimer() { this._countdown = 30; clearInterval(this._timer); this._timer = setInterval(() => { this._countdown--; if (this._countdown <= 0) clearInterval(this._timer); this.render(); }, 1000); }
  protected render(): void {
    this.root.innerHTML = `<style>${LAYOUT}</style>${govHeader()}
      <div class="wrap"><div class="form-col"><div class="card" style="text-align:center">
        <div style="font-size:3rem;margin-bottom:0.5rem">📱</div>
        <h1>Verify Your Mobile Number</h1><p class="sub">We've sent a 6-digit OTP to <strong>+91 98765 43210</strong></p>
        <div class="otp-group">${[1,2,3,4,5,6].map(i=>`<input class="otp-input" type="text" inputmode="numeric" maxlength="1" aria-label="Digit ${i}" />`).join('')}</div>
        <div class="timer">${this._countdown > 0 ? `Resend OTP in <strong>${this._countdown}s</strong>` : '<button class="link" id="mo-resend">Resend OTP</button>'}</div>
        <button class="btn btn--primary">Verify & Continue</button>
        <div style="margin-top:1.5rem;background:#fef3c7;border:1px solid #fbbf24;border-radius:0.375rem;padding:0.75rem;font-size:0.75rem;text-align:left">🔒 Never share your OTP with anyone. Government officials will never ask for your OTP.</div>
        <div style="margin-top:1rem;text-align:center"><a href="${IP}/otp-verification" class="link">Try Email OTP instead →</a></div>
      </div></div>
      <aside>${sidebar([
        { title: 'Design Annotations', items: ['Auto-advance on digit entry', 'Backspace returns to previous', '30-second countdown', 'Numeric inputmode', 'ARIA labels per digit'] },
        { title: 'OTP Flow', items: ['1. OTP sent to mobile', '2. User enters code (current)', '3. System verifies', '4. Proceed'] },
        { title: 'Help', items: ['�� 1800-XXX-XXXX', 'Mon–Sat, 9 AM – 6 PM'] },
      ])}</aside></div>
      <ux4g-service-footer left-text="Unified Identity Service • ${GOV}" right-text="Mobile OTP"></ux4g-service-footer>`;
    this.root.querySelector('#mo-resend')?.addEventListener('click', () => this._startTimer());
  }
}

// ── 4. IDENTITY EMAIL OTP ──
export class UX4GIdentityEmailOTP extends UX4GElement {
  private _countdown = 120;
  private _timer: any;
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this._startTimer(); this.render(); }
  disconnectedCallback(): void { clearInterval(this._timer); }
  private _startTimer() { this._countdown = 120; clearInterval(this._timer); this._timer = setInterval(() => { this._countdown--; if (this._countdown <= 0) clearInterval(this._timer); this.render(); }, 1000); }
  private get _formatted(): string { const m = Math.floor(this._countdown/60); const s = this._countdown%60; return `${m}:${s.toString().padStart(2,'0')}`; }
  protected render(): void {
    this.root.innerHTML = `<style>${LAYOUT}</style>${govHeader()}
      <div class="wrap"><div class="form-col"><div class="card" style="text-align:center">
        <div style="font-size:3rem;margin-bottom:0.5rem">📧</div>
        <h1>Verify Your Email</h1><p class="sub">We've sent a 6-digit code to <strong>user@example.com</strong></p>
        <div class="otp-group">${[1,2,3,4,5,6].map(i=>`<input class="otp-input" type="text" inputmode="numeric" maxlength="1" aria-label="Digit ${i}" />`).join('')}</div>
        <div class="timer">${this._countdown > 0 ? `Code expires in <strong>${this._formatted}</strong>` : '<button class="link" id="eo-resend">Resend Code</button>'}</div>
        <div style="font-size:0.75rem;color:var(--ux4g-color-text-muted,#64748b);margin-bottom:1.5rem">�� You can paste the OTP code directly</div>
        <button class="btn btn--primary">Verify Email</button>
        <div style="font-size:0.8125rem;color:var(--ux4g-color-text-muted,#64748b);margin-top:1.25rem">📬 Can't find the email? Check your spam folder.</div>
      </div></div>
      <aside>${sidebar([
        { title: 'Pattern Info', items: ['Email OTP verification', '2-minute expiry', 'Auto-advance inputs'] },
        { title: 'User Goals', items: ['Verify email ownership', 'Complete registration', 'Secure account'] },
        { title: 'Validation Rules', items: ['6 numeric digits', '2-minute expiry', 'Max 3 resend attempts'] },
        { title: 'Accessibility', items: ['ARIA labels per input', 'Timer uses aria-live', 'Keyboard navigation'] },
      ])}</aside></div>
      <ux4g-service-footer left-text="Unified Identity Service • ${GOV}" right-text="Email OTP"></ux4g-service-footer>`;
    this.root.querySelector('#eo-resend')?.addEventListener('click', () => this._startTimer());
  }
}

// ── 5. IDENTITY FORGOT PASSWORD ──
export class UX4GIdentityForgotPassword extends UX4GElement {
  private _step = 1;
  private _method: 'mobile'|'email' = 'mobile';
  private _pw = '';
  private _cpw = '';
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    const labels = ['Identify','Verify','Reset','Success'];
    const p = this._pw;
    const reqs = [
      { l: '8+ chars', m: p.length >= 8 }, { l: 'Uppercase', m: /[A-Z]/.test(p) },
      { l: 'Lowercase', m: /[a-z]/.test(p) }, { l: 'Number', m: /\d/.test(p) }, { l: 'Special', m: /[^A-Za-z0-9]/.test(p) },
    ];
    const match = p && this._cpw && p === this._cpw;
    const steps = labels.map((l,i) => `<div class="step ${this._step===i+1?'step--active':''} ${this._step>i+1?'step--done':''}"><div class="step__num">${this._step>i+1?'✓':i+1}</div><div>${l}</div></div>`).join('');

    let body = '';
    if (this._step === 1) body = `<h1>Reset Your Password</h1><p class="sub">Choose how to receive your verification code.</p>
      <div class="methods"><label class="method ${this._method==='mobile'?'method--active':''}" id="fp-mobile">📱 Mobile</label><label class="method ${this._method==='email'?'method--active':''}" id="fp-email">📧 Email</label></div>
      <div class="field"><label class="label">${this._method==='mobile'?'Mobile Number':'Email Address'}</label><input class="input" placeholder="${this._method==='mobile'?'+91 XXXXX XXXXX':'your.email@example.com'}" /></div>
      <button class="btn btn--primary" id="fp-send">Send Verification Code</button>`;
    else if (this._step === 2) body = `<h1>Enter Verification Code</h1><p class="sub">We've sent a 6-digit code.</p>
      <div class="otp-group">${[1,2,3,4,5,6].map(i=>`<input class="otp-input" type="text" inputmode="numeric" maxlength="1" aria-label="Digit ${i}" />`).join('')}</div>
      <button class="btn btn--primary" id="fp-verify">Verify Code</button>`;
    else if (this._step === 3) body = `<h1>Create New Password</h1><p class="sub">Choose a strong password.</p>
      <div class="field"><label class="label">New Password</label><input class="input" id="fp-pw" type="password" value="${p}" />
        ${p ? `<div class="req-grid">${reqs.map(r=>`<div class="req-item ${r.m?'req-item--met':''}">${r.m?'✅':'⬜'} ${r.l}</div>`).join('')}</div>` : ''}
      </div>
      <div class="field"><label class="label">Confirm Password</label><input class="input" id="fp-cpw" type="password" value="${this._cpw}" />
        ${match ? '<div class="match-ok">✅ Match</div>' : ''}${this._cpw && !match ? '<div class="match-no">❌ Mismatch</div>' : ''}
      </div>
      <button class="btn btn--primary" id="fp-reset">Reset Password</button>`;
    else body = `<div style="text-align:center"><div style="font-size:3rem;margin-bottom:0.5rem">✅</div><h1>Password Reset Successful</h1><p class="sub">You can now sign in with your new password.</p>
      <a href="${IP}/sign-in" class="btn btn--primary" style="display:block;text-decoration:none;color:#fff">Go to Sign In</a></div>`;

    this.root.innerHTML = `<style>${LAYOUT}</style>${govHeader()}
      <div class="wrap"><div class="form-col"><div class="progress">${steps}</div><div class="card">${body}</div></div>
      <aside>${sidebar([
        { title: 'Pattern Info', items: ['Multi-step recovery', 'Progressive disclosure', 'Real-time validation'] },
        { title: 'User Journey', items: ['1. Choose recovery method', '2. Receive & enter OTP', '3. Create new password', '4. Confirmation'] },
        { title: 'Security', items: ['OTP expires in 10 min', 'Max 3 attempts', 'Log all reset attempts', 'Notification after reset'] },
      ])}</aside></div>
      <ux4g-service-footer left-text="Unified Identity Service • ${GOV}" right-text="Password Recovery"></ux4g-service-footer>`;

    this.root.querySelector('#fp-mobile')?.addEventListener('click', () => { this._method = 'mobile'; this.render(); });
    this.root.querySelector('#fp-email')?.addEventListener('click', () => { this._method = 'email'; this.render(); });
    this.root.querySelector('#fp-send')?.addEventListener('click', () => { this._step = 2; this.render(); });
    this.root.querySelector('#fp-verify')?.addEventListener('click', () => { this._step = 3; this.render(); });
    this.root.querySelector('#fp-reset')?.addEventListener('click', () => { this._step = 4; this.render(); });
    this.root.querySelector('#fp-pw')?.addEventListener('input', (e) => { this._pw = (e.target as HTMLInputElement).value; this.render(); });
    this.root.querySelector('#fp-cpw')?.addEventListener('input', (e) => { this._cpw = (e.target as HTMLInputElement).value; this.render(); });
  }
}

if (!customElements.get('ux4g-identity-sign-in')) customElements.define('ux4g-identity-sign-in', UX4GIdentitySignIn);
if (!customElements.get('ux4g-identity-sign-up')) customElements.define('ux4g-identity-sign-up', UX4GIdentitySignUp);
if (!customElements.get('ux4g-identity-mobile-otp')) customElements.define('ux4g-identity-mobile-otp', UX4GIdentityMobileOTP);
if (!customElements.get('ux4g-identity-email-otp')) customElements.define('ux4g-identity-email-otp', UX4GIdentityEmailOTP);
if (!customElements.get('ux4g-identity-forgot-password')) customElements.define('ux4g-identity-forgot-password', UX4GIdentityForgotPassword);
