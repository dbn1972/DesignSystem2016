/**
 * Identity Pattern Pages — Recovery (Email OTP, Forgot Password, Account Recovery)
 */
import { UX4GElement } from '../../base/UX4GElement';

const GOV = 'Government of India';
const PORTAL = 'Digital India Portal';
const IP = '/patterns/identity';

const CSS = `
  :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
  .nav { background: var(--ux4g-color-surface, #fff); border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); padding: 1rem 2rem; display: flex; justify-content: space-between; }
  .nav a { color: var(--ux4g-color-text-muted, #64748b); text-decoration: none; font-weight: 500; font-size: 0.875rem; }
  .main { max-width: 1400px; margin: 0 auto; padding: 2rem; }
  .content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
  .proto { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
  .tri { height: 3px; background: linear-gradient(to right, #FF9933, #fff, #138808); }
  .gov { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); }
  .gov__icon { width: 3rem; height: 3rem; border-radius: 0.375rem; background: var(--ux4g-color-interactive-default, #000080); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; color: #fff; }
  .gov__title { font-weight: 700; }
  .gov__sub { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); }
  .progress { display: flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: var(--ux4g-color-background, #f8fafc); border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); }
  .step { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; flex: 1; }
  .step__dot { width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; border: 2px solid var(--ux4g-color-border, #e2e8f0); background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); }
  .step--active .step__dot { background: var(--ux4g-color-interactive-default, #000080); color: #fff; border-color: var(--ux4g-color-interactive-default, #000080); }
  .step--done .step__dot { background: #16a34a; color: #fff; border-color: #16a34a; }
  .step__label { font-size: 0.6875rem; color: var(--ux4g-color-text-muted, #64748b); }
  .step--active .step__label { color: var(--ux4g-color-text-default, #0f172a); font-weight: 600; }
  .connector { flex: 0.5; height: 2px; background: var(--ux4g-color-border, #e2e8f0); }
  .connector--done { background: #16a34a; }
  .form-area { padding: 2.5rem 3rem; max-width: 36rem; margin: 0 auto; }
  h1 { font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem; }
  .desc { color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 2rem; }
  .field { margin-bottom: 1.5rem; }
  .label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.5rem; }
  .req { color: #dc2626; }
  .input { display: block; width: 100%; padding: 0.875rem; font-size: 1rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; box-sizing: border-box; }
  .input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
  .btn { display: block; width: 100%; padding: 1rem; font-size: 1rem; font-weight: 700; border: none; border-radius: 0.5rem; cursor: pointer; text-align: center; text-decoration: none; }
  .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
  .btn--primary:disabled { opacity: 0.5; cursor: not-allowed; }
  .link { color: var(--ux4g-color-interactive-default, #000080); font-weight: 700; font-size: 0.875rem; text-decoration: none; }
  .icon-center { text-align: center; margin-bottom: 1rem; }
  .icon-circle { display: inline-flex; align-items: center; justify-content: center; width: 5rem; height: 5rem; border-radius: 50%; font-size: 2.5rem; }
  .otp-group { display: flex; justify-content: center; gap: 0.75rem; margin-bottom: 1.5rem; }
  .otp-input { width: 3.5rem; height: 4rem; text-align: center; font-size: 1.5rem; font-weight: 700; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; }
  .otp-input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
  .timer { text-align: center; margin-bottom: 1.5rem; padding: 1rem; background: #eff6ff; border: 2px solid #93c5fd; border-radius: 0.5rem; font-size: 0.875rem; }
  .hint { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); margin-top: 0.375rem; }
  .methods { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem; }
  .method { display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; cursor: pointer; font-weight: 600; font-size: 0.875rem; }
  .method--active { border-color: var(--ux4g-color-interactive-default, #000080); background: #eff6ff; }
  .success-icon { text-align: center; font-size: 3rem; margin-bottom: 1rem; }
  .info-box { padding: 1.5rem; background: #eff6ff; border: 2px solid #93c5fd; border-radius: 0.5rem; margin-bottom: 1.5rem; font-size: 0.875rem; }
  .info-box strong { display: block; margin-bottom: 0.5rem; }
  .info-box ul { margin: 0.5rem 0 0; padding-left: 1.25rem; }
  .help-card { border-top: 2px solid var(--ux4g-color-border, #e2e8f0); background: var(--ux4g-color-background, #f8fafc); padding: 1.5rem 3rem; }
  .help-card__inner { max-width: 36rem; margin: 0 auto; display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.875rem; }
  .help-card strong { display: block; margin-bottom: 0.25rem; }
  .help-card p { margin: 0 0 0.25rem; color: var(--ux4g-color-text-muted, #64748b); }
  .sb { display: flex; flex-direction: column; gap: 1rem; }
  .pnl { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
  .pnl--blue { background: #eff6ff; border-color: #93c5fd; }
  .pnl--red { background: #fef2f2; border-color: #fca5a5; }
  .pnl--green { background: #f0fdf4; border-color: #86efac; }
  .pnl__t { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
  .pnl__list { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); line-height: 1.8; }
  .pnl__text { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 0.25rem; }
  .upload-area { border: 2px dashed var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; margin-bottom: 1.5rem; }
  .upload-area:hover { border-color: var(--ux4g-color-interactive-default, #000080); }
  .review-item { display: flex; justify-content: space-between; padding: 0.75rem 1rem; background: var(--ux4g-color-background, #f8fafc); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem; }
  .review-item span:first-child { font-weight: 700; color: var(--ux4g-color-text-muted, #64748b); }
  @media (max-width: 900px) { .content { grid-template-columns: 1fr; } .form-area { padding: 1.5rem; } .methods { grid-template-columns: 1fr; } }
`;

// ═══════════════════════════════════════════════════════════════════════════
// 4. IDENTITY EMAIL OTP
// ═══════════════════════════════════════════════════════════════════════════
export class UX4GIdentityEmailOTP extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    this.root.innerHTML = `<style>${CSS}</style>
      <nav class="nav"><a href="${IP}">← Back to Identity Patterns</a><span style="font-size:0.875rem;color:var(--ux4g-color-text-muted)"><b>Flow:</b> Email OTP</span></nav>
      <main class="main"><div class="content">
        <div class="proto"><div class="tri"></div><div class="gov"><div class="gov__icon">🛡</div><div><div class="gov__title">${PORTAL}</div><div class="gov__sub">${GOV}</div></div></div>
          <div class="form-area" style="text-align:center;">
            <div class="icon-center"><div class="icon-circle" style="background:#dbeafe;border:2px solid #93c5fd;">📧</div></div>
            <h1>Verify Your Email</h1><p class="desc">We've sent a 6-digit verification code to</p><p style="font-size:1.125rem;font-weight:700;margin:0 0 2rem;">user@example.com</p>
            <div class="otp-group"><input class="otp-input" maxlength="1" /><input class="otp-input" maxlength="1" /><input class="otp-input" maxlength="1" /><input class="otp-input" maxlength="1" /><input class="otp-input" maxlength="1" /><input class="otp-input" maxlength="1" /></div>
            <div class="timer">Code expires in <strong>2:00</strong></div>
            <div class="hint" style="text-align:left;margin-bottom:1.5rem;">💡 You can paste the complete 6-digit code</div>
            <button class="btn btn--primary" disabled>Verify Email</button>
            <div class="hint" style="margin-top:1.5rem;">📬 Can't find the email? Check your spam or junk folder.</div>
          </div>
          <div class="help-card"><div class="help-card__inner"><span>❓</span><div><strong>Need Help?</strong><p>Call: 1800-XXX-XXXX (Toll-Free)</p><p>Email: support@digitalindia.gov.in</p></div></div></div>
        </div>
        <aside class="sb">
          <div class="pnl"><h2 class="pnl__t">Pattern Info</h2><p class="pnl__text">Email OTP verification with 2-minute expiry and auto-advance inputs.</p></div>
          <div class="pnl--blue pnl"><h2 class="pnl__t">User Goals</h2><ul class="pnl__list"><li>Verify email ownership</li><li>Complete registration</li><li>Secure account</li></ul></div>
          <div class="pnl"><h2 class="pnl__t">Validation Rules</h2><ul class="pnl__list"><li>6 numeric digits required</li><li>2-minute expiry window</li><li>Max 3 resend attempts</li></ul></div>
          <div class="pnl--green pnl"><h2 class="pnl__t">Accessibility</h2><ul class="pnl__list"><li>Each input has aria-label</li><li>Timer uses aria-live</li><li>Keyboard navigation</li></ul></div>
        </aside>
      </div></main>`;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 5. IDENTITY FORGOT PASSWORD
// ═══════════════════════════════════════════════════════════════════════════
export class UX4GIdentityForgotPassword extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    this.root.innerHTML = `<style>${CSS}</style>
      <nav class="nav"><a href="${IP}">← Back to Identity Patterns</a><span style="font-size:0.875rem;color:var(--ux4g-color-text-muted)"><b>Flow:</b> Forgot Password</span></nav>
      <main class="main"><div class="content">
        <div class="proto"><div class="tri"></div><div class="gov"><div class="gov__icon">🛡</div><div><div class="gov__title">${PORTAL}</div><div class="gov__sub">${GOV}</div></div></div>
          <div class="progress"><div class="step step--active"><div class="step__dot">1</div><div class="step__label">Identify</div></div><div class="connector"></div><div class="step"><div class="step__dot">2</div><div class="step__label">Verify OTP</div></div><div class="connector"></div><div class="step"><div class="step__dot">3</div><div class="step__label">Reset</div></div><div class="connector"></div><div class="step"><div class="step__dot">4</div><div class="step__label">Complete</div></div></div>
          <div class="form-area" style="text-align:center;">
            <div class="icon-center"><div class="icon-circle" style="background:#fee2e2;border:2px solid #fca5a5;">🔑</div></div>
            <h1>Reset Your Password</h1><p class="desc">Enter your registered mobile number or email to receive a verification code</p>
            <div class="methods"><button class="method method--active">📱 Mobile Number</button><button class="method">📧 Email Address</button></div>
            <div class="field"><label class="label">Mobile Number <span class="req">*</span></label><input class="input" type="tel" placeholder="+91 XXXXX XXXXX" /></div>
            <button class="btn btn--primary">Send Verification Code</button>
          </div>
          <div class="help-card"><div class="help-card__inner"><span>❓</span><div><strong>Need Help?</strong><p>Call: 1800-XXX-XXXX</p><p>Email: support@digitalindia.gov.in</p></div></div></div>
        </div>
        <aside class="sb">
          <div class="pnl"><h2 class="pnl__t">Pattern Info</h2><p class="pnl__text">Multi-step password recovery with progressive disclosure.</p></div>
          <div class="pnl--blue pnl"><h2 class="pnl__t">User Journey</h2><ol class="pnl__list"><li>Choose recovery method</li><li>Receive and enter OTP</li><li>Create new password</li><li>Confirmation</li></ol></div>
          <div class="pnl--red pnl"><h2 class="pnl__t">Security</h2><ul class="pnl__list"><li>Rate limit: 3 per hour</li><li>OTP valid 10 minutes</li><li>Log all reset attempts</li><li>Notify after reset</li></ul></div>
          <div class="pnl--green pnl"><h2 class="pnl__t">Accessibility</h2><ul class="pnl__list"><li>Progress indicator announced</li><li>All fields labeled</li><li>Password requirements announced</li></ul></div>
        </aside>
      </div></main>`;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 6. IDENTITY ACCOUNT RECOVERY
// ═══════════════════════════════════════════════════════════════════════════
export class UX4GIdentityAccountRecovery extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    this.root.innerHTML = `<style>${CSS}</style>
      <nav class="nav"><a href="${IP}">← Back to Identity Patterns</a><span style="font-size:0.875rem;color:var(--ux4g-color-text-muted)"><b>Flow:</b> Account Recovery</span></nav>
      <main class="main"><div class="content">
        <div class="proto"><div class="tri"></div><div class="gov"><div class="gov__icon">🛡</div><div><div class="gov__title">${PORTAL}</div><div class="gov__sub">${GOV}</div></div></div>
          <div class="progress"><div class="step step--active"><div class="step__dot">1</div><div class="step__label">Status</div></div><div class="connector"></div><div class="step"><div class="step__dot">2</div><div class="step__label">Identity</div></div><div class="connector"></div><div class="step"><div class="step__dot">3</div><div class="step__label">Proof</div></div><div class="connector"></div><div class="step"><div class="step__dot">4</div><div class="step__label">Review</div></div></div>
          <div class="form-area" style="text-align:center;">
            <div class="icon-center"><div class="icon-circle" style="background:#fee2e2;border:2px solid #fca5a5;">⚠</div></div>
            <h1>Account Recovery Required</h1><p class="desc">Your account has been locked due to multiple failed login attempts or security concerns.</p>
            <div class="info-box" style="text-align:left;"><strong>Why is my account locked?</strong><ul><li>Multiple failed login attempts (5 or more)</li><li>Suspicious activity detected</li><li>Password reset attempts exceeded</li><li>Account inactive for 2+ years</li></ul></div>
            <div style="text-align:left;margin-bottom:2rem;">
              <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:1rem;border:2px solid var(--ux4g-color-border,#e2e8f0);border-radius:0.5rem;margin-bottom:0.75rem;"><div style="width:2rem;height:2rem;border-radius:50%;background:#dbeafe;display:flex;align-items:center;justify-content:center;font-weight:700;color:#2563eb;flex-shrink:0;">1</div><div><div style="font-weight:700;">Verify Your Identity</div><div style="font-size:0.875rem;color:var(--ux4g-color-text-muted,#64748b);">Provide personal information to confirm identity</div></div></div>
              <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:1rem;border:2px solid var(--ux4g-color-border,#e2e8f0);border-radius:0.5rem;margin-bottom:0.75rem;"><div style="width:2rem;height:2rem;border-radius:50%;background:#dbeafe;display:flex;align-items:center;justify-content:center;font-weight:700;color:#2563eb;flex-shrink:0;">2</div><div><div style="font-weight:700;">Submit Supporting Documents</div><div style="font-size:0.875rem;color:var(--ux4g-color-text-muted,#64748b);">Upload government ID proof</div></div></div>
              <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:1rem;border:2px solid var(--ux4g-color-border,#e2e8f0);border-radius:0.5rem;"><div style="width:2rem;height:2rem;border-radius:50%;background:#dbeafe;display:flex;align-items:center;justify-content:center;font-weight:700;color:#2563eb;flex-shrink:0;">3</div><div><div style="font-weight:700;">Wait for Manual Review</div><div style="font-size:0.875rem;color:var(--ux4g-color-text-muted,#64748b);">3–5 business days</div></div></div>
            </div>
            <button class="btn btn--primary">Start Recovery Process</button>
          </div>
          <div class="help-card"><div class="help-card__inner"><span>❓</span><div><strong>Need Assistance?</strong><p>Call: 1800-XXX-XXXX</p><p>Email: recovery@digitalindia.gov.in</p></div></div></div>
        </div>
        <aside class="sb">
          <div class="pnl"><h2 class="pnl__t">Pattern Info</h2><p class="pnl__text">Multi-step account recovery with identity verification and document upload.</p></div>
          <div class="pnl--blue pnl"><h2 class="pnl__t">When to Use</h2><ul class="pnl__list"><li>Account locked after failed attempts</li><li>Lost access to email/mobile</li><li>Suspicious activity detected</li><li>Account inactive 2+ years</li></ul></div>
          <div class="pnl--red pnl"><h2 class="pnl__t">Security</h2><ul class="pnl__list"><li>Manual review required</li><li>Document authenticity verified</li><li>Cross-check with records</li><li>All attempts logged</li></ul></div>
          <div class="pnl"><h2 class="pnl__t">Processing Time</h2><ul class="pnl__list"><li>Request received: Immediate</li><li>Initial review: 1 business day</li><li>Document verification: 2–3 days</li><li>Account unlock: 3–5 days</li></ul></div>
        </aside>
      </div></main>`;
  }
}

if (!customElements.get('ux4g-identity-email-otp')) customElements.define('ux4g-identity-email-otp', UX4GIdentityEmailOTP);
if (!customElements.get('ux4g-identity-forgot-password')) customElements.define('ux4g-identity-forgot-password', UX4GIdentityForgotPassword);
if (!customElements.get('ux4g-identity-account-recovery')) customElements.define('ux4g-identity-account-recovery', UX4GIdentityAccountRecovery);
