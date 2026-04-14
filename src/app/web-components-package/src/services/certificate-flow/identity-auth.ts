/**
 * Identity Pattern Pages — Auth (Sign In, Sign Up, Mobile OTP)
 */
import { UX4GElement } from '../../base/UX4GElement';

const GOV = 'Government of India';
const PORTAL = 'Digital India Portal';
const IP = '/patterns/identity';

function sidebar(annotations: string[], flowTitle: string, flowItems: string[], helpItems: string[]): string {
  return `
    <aside class="sb">
      <div class="pnl pnl--blue"><h2 class="pnl__t">Design Annotations</h2><ul class="pnl__list">${annotations.map(a => `<li>✓ ${a}</li>`).join('')}</ul></div>
      <div class="pnl"><h2 class="pnl__t">${flowTitle}</h2><ul class="pnl__list">${flowItems.map((f, i) => `<li>${i + 1}. ${f}</li>`).join('')}</ul></div>
      <div class="pnl"><h2 class="pnl__t">Help</h2><p class="pnl__text">📞 1800-XXX-XXXX (Toll Free)</p><p class="pnl__text">Mon–Sat, 9 AM – 6 PM IST</p>${helpItems.map(h => `<p class="pnl__text">${h}</p>`).join('')}</div>
    </aside>`;
}

const CSS = `
  :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
  .nav { background: var(--ux4g-color-surface, #fff); border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
  .nav a { color: var(--ux4g-color-text-muted, #64748b); text-decoration: none; font-weight: 500; font-size: 0.875rem; }
  .nav a:hover { color: var(--ux4g-color-interactive-default, #000080); }
  .main { max-width: 1400px; margin: 0 auto; padding: 2rem; }
  .content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
  .proto { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
  .tri { height: 3px; background: linear-gradient(to right, #FF9933, #fff, #138808); }
  .gov { display: flex; align-items: center; justify-content: space-between; padding: 1rem 2rem; border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); }
  .gov__left { display: flex; align-items: center; gap: 0.75rem; }
  .gov__icon { width: 3rem; height: 3rem; border-radius: 0.375rem; background: var(--ux4g-color-interactive-default, #000080); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; color: #fff; }
  .gov__title { font-weight: 700; font-size: 1rem; }
  .gov__sub { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); }
  .gov__link { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
  .gov__link a { color: var(--ux4g-color-interactive-default, #000080); font-weight: 700; text-decoration: none; }
  .form-area { padding: 2.5rem 3rem; max-width: 36rem; margin: 0 auto; }
  h1 { font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem; }
  .desc { color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 2rem; }
  .field { margin-bottom: 1.5rem; }
  .label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.5rem; }
  .req { color: #dc2626; }
  .input { display: block; width: 100%; padding: 0.875rem 0.75rem; font-size: 1rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; box-sizing: border-box; }
  .input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
  .input-wrap { position: relative; }
  .input-wrap .input { padding-right: 3rem; }
  .toggle { position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 1.125rem; }
  .hint { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); margin-top: 0.375rem; }
  .row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
  .check { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; cursor: pointer; }
  .link { color: var(--ux4g-color-interactive-default, #000080); font-weight: 700; font-size: 0.875rem; text-decoration: none; background: none; border: none; cursor: pointer; padding: 0; }
  .link:hover { text-decoration: underline; }
  .btn { display: block; width: 100%; padding: 1rem; font-size: 1rem; font-weight: 700; border: none; border-radius: 0.5rem; cursor: pointer; text-align: center; text-decoration: none; }
  .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
  .btn--primary:hover { opacity: 0.9; }
  .btn--primary:disabled { opacity: 0.5; cursor: not-allowed; }
  .btn--outline { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); color: var(--ux4g-color-text-default, #0f172a); font-weight: 700; }
  .divider { text-align: center; margin: 2rem 0; position: relative; }
  .divider::before { content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: var(--ux4g-color-border, #e2e8f0); }
  .divider span { background: var(--ux4g-color-surface, #fff); padding: 0 0.75rem; font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); position: relative; }
  .alt-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 2rem; }
  .security { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; background: #eff6ff; border-left: 4px solid #2563eb; border-radius: 0 0.375rem 0.375rem 0; font-size: 0.875rem; margin-bottom: 1.5rem; }
  .security strong { display: block; margin-bottom: 0.25rem; }
  .security p { margin: 0; color: var(--ux4g-color-text-muted, #64748b); }
  .center-text { text-align: center; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
  .center-text a { color: var(--ux4g-color-interactive-default, #000080); font-weight: 700; text-decoration: none; }
  .otp-group { display: flex; justify-content: center; gap: 0.75rem; margin-bottom: 1.5rem; }
  .otp-input { width: 3.5rem; height: 4rem; text-align: center; font-size: 1.5rem; font-weight: 700; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; }
  .otp-input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
  .timer { text-align: center; margin-bottom: 1.5rem; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
  .warn { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; background: #fef3c7; border-left: 4px solid #d97706; border-radius: 0 0.375rem 0.375rem 0; font-size: 0.875rem; margin-top: 1.5rem; }
  .warn strong { display: block; margin-bottom: 0.25rem; }
  .warn ul { margin: 0.5rem 0 0; padding-left: 1.25rem; }
  .warn li { margin-bottom: 0.25rem; }
  .consent-box { background: #eff6ff; border: 2px solid #93c5fd; border-radius: 0.5rem; padding: 1.25rem; margin-bottom: 1.5rem; }
  .consent-box label { display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.875rem; cursor: pointer; }
  .pw-reqs { display: grid; grid-template-columns: 1fr 1fr; gap: 0.25rem; margin-top: 0.5rem; font-size: 0.75rem; }
  .pw-req--met { color: #16a34a; }
  .pw-req--no { color: var(--ux4g-color-text-muted, #64748b); }
  .match-ok { font-size: 0.75rem; color: #16a34a; margin-top: 0.25rem; }
  .match-no { font-size: 0.75rem; color: #dc2626; margin-top: 0.25rem; }
  .sb { display: flex; flex-direction: column; gap: 1rem; }
  .pnl { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
  .pnl--blue { background: #eff6ff; border-color: #93c5fd; }
  .pnl__t { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
  .pnl__list { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); line-height: 1.8; }
  .pnl__text { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 0.25rem; }
  .icon-center { text-align: center; margin-bottom: 1rem; }
  .icon-circle { display: inline-flex; align-items: center; justify-content: center; width: 5rem; height: 5rem; border-radius: 50%; font-size: 2.5rem; }
  @media (max-width: 900px) { .content { grid-template-columns: 1fr; } .form-area { padding: 1.5rem; } .alt-btns { grid-template-columns: 1fr; } .pw-reqs { grid-template-columns: 1fr; } }
`;

// ═══════════════════════════════════════════════════════════════════════════
// 1. IDENTITY SIGN IN
// ═══════════════════════════════════════════════════════════════════════════
export class UX4GIdentitySignIn extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    this.root.innerHTML = `<style>${CSS}</style>
      <nav class="nav"><a href="${IP}">← Back to Identity Patterns</a><span style="font-size:0.875rem;color:var(--ux4g-color-text-muted)"><b>Flow:</b> Sign In</span></nav>
      <main class="main"><div class="content">
        <div class="proto"><div class="tri"></div>
          <div class="gov"><div class="gov__left"><div class="gov__icon">🛡</div><div><div class="gov__title">${PORTAL}</div><div class="gov__sub">${GOV}</div></div></div><div class="gov__link">New user? <a href="${IP}/sign-up">Create Account</a></div></div>
          <div class="form-area">
            <h1>Sign In to Your Account</h1><p class="desc">Access your government services dashboard using your registered mobile number or email.</p>
            <div class="field"><label class="label">Mobile Number or Email <span class="req">*</span></label><input class="input" placeholder="Enter mobile number or email" /></div>
            <div class="field"><div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;"><label class="label" style="margin:0;">Password <span class="req">*</span></label><a href="${IP}/forgot-password" class="link">Forgot Password?</a></div><div class="input-wrap"><input class="input" type="password" placeholder="Enter your password" /><button class="toggle">👁</button></div></div>
            <div class="row"><label class="check"><input type="checkbox" /> Keep me signed in</label></div>
            <button class="btn btn--primary">Sign In</button>
            <div class="divider"><span>Or sign in with</span></div>
            <div class="alt-btns"><a href="${IP}/mobile-otp" class="btn btn--outline">📱 Mobile OTP</a><a href="${IP}/aadhaar-auth" class="btn btn--outline">🛡 Aadhaar</a></div>
            <div class="security"><div><strong>🔒 Secure Connection</strong><p>Your login credentials are encrypted. Never share your password with anyone.</p></div></div>
            <div class="center-text">Can't access your account? <a href="${IP}/account-recovery">Account Recovery</a></div>
          </div>
        </div>
        ${sidebar(['Accepts both mobile and email','Forgot Password link prominent','Password show/hide toggle','Alternative auth methods visible','Account recovery path signposted','Security reassurance present'], 'Sign In Options', ['Username + Password','Mobile OTP','Aadhaar Authentication'], ['Forgot password?','Account locked?','Login errors?'])}
      </div></main>`;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. IDENTITY SIGN UP
// ═══════════════════════════════════════════════════════════════════════════
export class UX4GIdentitySignUp extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    this.root.innerHTML = `<style>${CSS}</style>
      <nav class="nav"><a href="${IP}">← Back to Identity Patterns</a><span style="font-size:0.875rem;color:var(--ux4g-color-text-muted)"><b>Flow:</b> Sign Up</span></nav>
      <main class="main"><div class="content">
        <div class="proto"><div class="tri"></div>
          <div class="gov"><div class="gov__left"><div class="gov__icon">🛡</div><div><div class="gov__title">${PORTAL}</div><div class="gov__sub">${GOV}</div></div></div><div class="gov__link">Already have an account? <a href="${IP}/sign-in">Sign In</a></div></div>
          <div class="form-area">
            <h1>Create Your Account</h1><p class="desc">Register to access government digital services. Your information is secure.</p>
            <div class="field"><label class="label">Full Name <span class="req">*</span></label><input class="input" placeholder="Enter your full name as per Aadhaar" /><div class="hint">Enter name exactly as it appears on government ID</div></div>
            <div class="field"><label class="label">Mobile Number <span class="req">*</span></label><input class="input" placeholder="+91 10-digit mobile number" /><div class="hint">You will receive OTP on this number</div></div>
            <div class="field"><label class="label">Email Address <span class="req">*</span></label><input class="input" type="email" placeholder="your.email@example.com" /></div>
            <div class="field"><label class="label">Create Password <span class="req">*</span></label><input class="input" type="password" placeholder="Enter strong password" /><div class="pw-reqs"><span class="pw-req--no">⬜ 8+ characters</span><span class="pw-req--no">⬜ One uppercase</span><span class="pw-req--no">⬜ One lowercase</span><span class="pw-req--no">⬜ One number</span><span class="pw-req--no">⬜ One special char</span></div></div>
            <div class="field"><label class="label">Confirm Password <span class="req">*</span></label><input class="input" type="password" placeholder="Re-enter password" /></div>
            <div class="consent-box"><label><input type="checkbox" /><span>I agree to the Terms of Service and Privacy Policy. I understand my data will be used for authentication and service delivery.</span></label></div>
            <a href="${IP}/mobile-otp" class="btn btn--primary" style="display:block;text-align:center;">Create Account & Verify Mobile</a>
            <div class="security" style="margin-top:2rem;"><div><strong>🔒 Your data is secure</strong><p>All information is encrypted and stored securely.</p></div></div>
          </div>
        </div>
        ${sidebar(['Tricolor header establishes trust','Mobile number primary (78% prefer OTP)','Password requirements shown real-time','Clear consent checkbox with linked policies','Email as backup for recovery','Large touch targets for mobile'], 'Sign Up Flow', ['Enter Details','Verify Mobile (OTP)','Account Created'], ['Not receiving OTP?','Password requirements?','Already registered?'])}
      </div></main>`;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. IDENTITY MOBILE OTP
// ═══════════════════════════════════════════════════════════════════════════
export class UX4GIdentityMobileOTP extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    this.root.innerHTML = `<style>${CSS}</style>
      <nav class="nav"><a href="${IP}">← Back to Identity Patterns</a><span style="font-size:0.875rem;color:var(--ux4g-color-text-muted)"><b>Flow:</b> Mobile OTP</span></nav>
      <main class="main"><div class="content">
        <div class="proto"><div class="tri"></div>
          <div class="gov"><div class="gov__left"><div class="gov__icon">🛡</div><div><div class="gov__title">${PORTAL}</div><div class="gov__sub">${GOV}</div></div></div></div>
          <div class="form-area" style="text-align:center;">
            <div class="icon-center"><div class="icon-circle" style="background:#dbeafe;border:2px solid #93c5fd;">📱</div></div>
            <h1>Verify Your Mobile Number</h1><p class="desc">We've sent a 6-digit OTP to</p><p style="font-size:1.125rem;font-weight:700;margin:0 0 0.5rem;">+91 98765 43210</p><button class="link" style="margin-bottom:2rem;">Change number</button>
            <div class="otp-group"><input class="otp-input" maxlength="1" /><input class="otp-input" maxlength="1" /><input class="otp-input" maxlength="1" /><input class="otp-input" maxlength="1" /><input class="otp-input" maxlength="1" /><input class="otp-input" maxlength="1" /></div>
            <div class="timer">Resend OTP in <strong>30s</strong></div>
            <button class="btn btn--primary" disabled>Verify & Continue</button>
            <div class="warn"><div><strong>⚠ OTP Not Received?</strong><ul><li>Check your SMS inbox</li><li>Ensure mobile has network coverage</li><li>Try resending after countdown</li><li>Contact helpline: 1800-XXX-XXXX</li></ul></div></div>
            <div class="security" style="margin-top:1.5rem;"><div><strong>🔒 Security Reminder</strong><p>Never share your OTP with anyone. Government officials will never ask for your OTP.</p></div></div>
            <div class="center-text" style="margin-top:1rem;">Having trouble? <a href="${IP}/otp-verification">Try Email OTP instead</a></div>
          </div>
        </div>
        ${sidebar(['6 individual inputs with auto-advance','Paste support for SMS codes','30-second countdown prevents spam','Mobile number displayed for confirmation','Clear troubleshooting guidance','Fallback to email OTP','Security warning about OTP sharing'], 'OTP Flow', ['Mobile Number Entered ✓','OTP Sent ✓','Enter OTP (current)','Verification Complete'], ['OTP not received? Wait 30 sec','Network issues? Try email OTP','Wrong number? Go back'])}
      </div></main>`;
  }
}

if (!customElements.get('ux4g-identity-sign-in')) customElements.define('ux4g-identity-sign-in', UX4GIdentitySignIn);
if (!customElements.get('ux4g-identity-sign-up')) customElements.define('ux4g-identity-sign-up', UX4GIdentitySignUp);
if (!customElements.get('ux4g-identity-mobile-otp')) customElements.define('ux4g-identity-mobile-otp', UX4GIdentityMobileOTP);
