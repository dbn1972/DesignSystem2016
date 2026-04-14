/**
 * Identity Pattern Pages — Security (Session Timeout, Error/Lockout, Aadhaar)
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
  .form-area { padding: 2.5rem 3rem; max-width: 36rem; margin: 0 auto; }
  h1 { font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem; }
  .desc { color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 2rem; }
  .btn { display: block; width: 100%; padding: 1rem; font-size: 1rem; font-weight: 700; border: none; border-radius: 0.5rem; cursor: pointer; text-align: center; text-decoration: none; margin-bottom: 0.75rem; }
  .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
  .btn--outline { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); color: var(--ux4g-color-text-default, #0f172a); }
  .btn--primary:disabled { opacity: 0.5; cursor: not-allowed; }
  .link { color: var(--ux4g-color-interactive-default, #000080); font-weight: 700; font-size: 0.875rem; text-decoration: none; }
  .icon-center { text-align: center; margin-bottom: 1rem; }
  .icon-circle { display: inline-flex; align-items: center; justify-content: center; width: 5rem; height: 5rem; border-radius: 50%; font-size: 2.5rem; }
  .overlay { background: rgba(0,0,0,0.5); border-radius: 0.5rem; padding: 3rem; display: flex; align-items: center; justify-content: center; min-height: 400px; }
  .modal { background: var(--ux4g-color-surface, #fff); border-radius: 0.75rem; padding: 2.5rem; text-align: center; max-width: 420px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
  .modal__icon { font-size: 3rem; margin-bottom: 0.5rem; }
  .modal h2 { font-size: 1.375rem; font-weight: 800; margin: 0 0 0.5rem; }
  .modal p { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 1.5rem; }
  .countdown { font-size: 2.5rem; font-weight: 800; color: #dc2626; font-family: monospace; margin-bottom: 0.25rem; }
  .countdown-label { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); margin-bottom: 1.5rem; }
  .explain { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); margin-top: 1rem; }
  .info-box { padding: 1rem; background: #eff6ff; border: 2px solid #93c5fd; border-radius: 0.5rem; margin-bottom: 1.5rem; font-size: 0.875rem; text-align: left; }
  .info-box strong { display: block; margin-bottom: 0.25rem; }
  .info-box p { margin: 0; color: var(--ux4g-color-text-muted, #64748b); }
  .selector { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .sel-btn { padding: 0.5rem 0.875rem; font-size: 0.75rem; font-weight: 700; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; background: var(--ux4g-color-surface, #fff); cursor: pointer; white-space: nowrap; }
  .sel-btn--active { border-color: var(--ux4g-color-interactive-default, #000080); background: #eff6ff; color: var(--ux4g-color-interactive-default, #000080); }
  .error-card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 2.5rem; text-align: center; }
  .error-card__icon { font-size: 3.5rem; margin-bottom: 0.75rem; }
  .error-card h2 { font-size: 1.5rem; font-weight: 800; margin: 0 0 0.5rem; }
  .error-card p { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 1.5rem; max-width: 400px; margin-left: auto; margin-right: auto; }
  .details { border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; overflow: hidden; margin-bottom: 1.5rem; text-align: left; }
  .details__row { display: flex; justify-content: space-between; padding: 0.625rem 1rem; font-size: 0.8125rem; border-bottom: 1px solid var(--ux4g-color-border, #e2e8f0); }
  .details__row:last-child { border-bottom: none; }
  .details__row:nth-child(even) { background: var(--ux4g-color-background, #f8fafc); }
  .details__label { font-weight: 700; color: var(--ux4g-color-text-muted, #64748b); }
  .tips { text-align: left; background: var(--ux4g-color-background, #f8fafc); border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; padding: 1rem; }
  .tips h3 { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.5rem; }
  .tips ul { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); line-height: 1.8; }
  .actions { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .actions .btn { width: auto; padding: 0.625rem 1.25rem; font-size: 0.875rem; display: inline-block; }
  .progress { display: flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: var(--ux4g-color-background, #f8fafc); border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); }
  .step { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; flex: 1; }
  .step__dot { width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; border: 2px solid var(--ux4g-color-border, #e2e8f0); background: var(--ux4g-color-surface, #fff); }
  .step--active .step__dot { background: var(--ux4g-color-interactive-default, #000080); color: #fff; border-color: var(--ux4g-color-interactive-default, #000080); }
  .step--done .step__dot { background: #16a34a; color: #fff; border-color: #16a34a; }
  .step__label { font-size: 0.6875rem; color: var(--ux4g-color-text-muted, #64748b); }
  .step--active .step__label { font-weight: 600; color: var(--ux4g-color-text-default, #0f172a); }
  .connector { flex: 0.5; height: 2px; background: var(--ux4g-color-border, #e2e8f0); }
  .field { margin-bottom: 1.5rem; }
  .label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.5rem; }
  .req { color: #dc2626; }
  .input { display: block; width: 100%; padding: 0.875rem; font-size: 1rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; box-sizing: border-box; font-family: monospace; letter-spacing: 0.15em; text-align: center; }
  .input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
  .consent-list { background: var(--ux4g-color-background, #f8fafc); border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; padding: 1rem; margin-bottom: 1.5rem; text-align: left; }
  .consent-list h3 { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.5rem; }
  .consent-list ul { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); line-height: 1.8; }
  .checkbox-row { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.8125rem; cursor: pointer; margin-bottom: 1.5rem; padding: 0.875rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; text-align: left; }
  .warn-box { background: #fef3c7; border: 1px solid #fbbf24; border-radius: 0.375rem; padding: 0.75rem; font-size: 0.75rem; margin-bottom: 1.5rem; text-align: left; }
  .verified { border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; overflow: hidden; margin-bottom: 1.5rem; text-align: left; }
  .verified__row { display: flex; justify-content: space-between; padding: 0.75rem 1rem; font-size: 0.875rem; border-bottom: 1px solid var(--ux4g-color-border, #e2e8f0); }
  .verified__row:last-child { border-bottom: none; }
  .verified__label { font-weight: 700; color: var(--ux4g-color-text-muted, #64748b); }
  .badge { display: inline-block; padding: 0.125rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; background: #dcfce7; color: #16a34a; }
  .sb { display: flex; flex-direction: column; gap: 1rem; }
  .pnl { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
  .pnl--blue { background: #eff6ff; border-color: #93c5fd; }
  .pnl--red { background: #fef2f2; border-color: #fca5a5; }
  .pnl__t { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
  .pnl__list { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); line-height: 1.8; }
  .pnl__text { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 0.25rem; }
  .help-card { border-top: 2px solid var(--ux4g-color-border, #e2e8f0); background: var(--ux4g-color-background, #f8fafc); padding: 1.5rem 3rem; }
  .help-card__inner { max-width: 36rem; margin: 0 auto; display: flex; gap: 0.75rem; font-size: 0.875rem; }
  .help-card strong { display: block; margin-bottom: 0.25rem; }
  .help-card p { margin: 0 0 0.25rem; color: var(--ux4g-color-text-muted, #64748b); }
  @media (max-width: 900px) { .content { grid-template-columns: 1fr; } .form-area { padding: 1.5rem; } .selector { flex-direction: column; } }
`;

// ═══════════════════════════════════════════════════════════════════════════
// 7. SESSION TIMEOUT
// ═══════════════════════════════════════════════════════════════════════════
export class UX4GIdentitySessionTimeout extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    this.root.innerHTML = `<style>${CSS}</style>
      <nav class="nav"><a href="${IP}">← Back to Identity Patterns</a><span style="font-size:0.875rem;color:var(--ux4g-color-text-muted)"><b>Flow:</b> Session Timeout</span></nav>
      <main class="main"><div class="content">
        <div class="proto"><div class="tri"></div><div class="gov"><div class="gov__icon">🛡</div><div><div class="gov__title">${PORTAL}</div><div class="gov__sub">${GOV}</div></div></div>
          <div class="overlay"><div class="modal"><div class="modal__icon">⏰</div><h2>Session Expiring Soon</h2><p>Your session will expire due to inactivity.</p><div class="countdown">2:00</div><div class="countdown-label">Time Remaining</div><button class="btn btn--primary">Stay Logged In</button><button class="btn btn--outline">Log Out Now</button><div class="explain">Sessions expire after 15 minutes of inactivity for security.</div></div></div>
        </div>
        <aside class="sb">
          <div class="pnl"><h2 class="pnl__t">Pattern Info</h2><p class="pnl__text">Session timeout with warning modal, expired state, and extension.</p></div>
          <div class="pnl--red pnl"><h2 class="pnl__t">Security Rationale</h2><ul class="pnl__list"><li>Prevents unauthorized access</li><li>Reduces session hijacking risk</li><li>Protects sensitive data</li><li>Mandatory for high-security services</li></ul></div>
          <div class="pnl"><h2 class="pnl__t">Timing</h2><ul class="pnl__list"><li>Idle timeout: 15 minutes</li><li>Warning: 2 minutes before</li><li>Max session: 8 hours</li></ul></div>
          <div class="pnl--blue pnl"><h2 class="pnl__t">Implementation</h2><ul class="pnl__list"><li>Track mouse/keyboard/scroll</li><li>Modal overlay with countdown</li><li>Heartbeat API for extension</li><li>Auto-logout at zero</li></ul></div>
        </aside>
      </div></main>`;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 8. ERROR & LOCKOUT
// ═══════════════════════════════════════════════════════════════════════════
export class UX4GIdentityErrorLockout extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    this.root.innerHTML = `<style>${CSS}</style>
      <nav class="nav"><a href="${IP}">← Back to Identity Patterns</a><span style="font-size:0.875rem;color:var(--ux4g-color-text-muted)"><b>Flow:</b> Error States & Lockout</span></nav>
      <main class="main"><div class="content">
        <div>
          <div class="selector"><button class="sel-btn sel-btn--active">⚠ Invalid Credentials</button><button class="sel-btn">🔒 Account Locked</button><button class="sel-btn">⏰ Session Expired</button><button class="sel-btn">📡 Network Error</button><button class="sel-btn">🔧 Server Error</button></div>
          <div class="proto"><div class="tri"></div><div class="gov"><div class="gov__icon">🛡</div><div><div class="gov__title">${PORTAL}</div><div class="gov__sub">${GOV}</div></div></div>
            <div class="form-area">
              <div class="error-card">
                <div class="error-card__icon">⚠</div><h2>Invalid Username or Password</h2><p>The credentials you entered don't match our records.</p>
                <div class="details"><div class="details__row"><span class="details__label">Failed Attempts</span><span style="color:#dc2626;font-weight:600;">3 of 5</span></div><div class="details__row"><span class="details__label">Remaining</span><span style="font-weight:600;">2</span></div><div class="details__row"><span class="details__label">Account Status</span><span style="font-weight:600;">Active</span></div></div>
                <div class="actions"><button class="btn btn--primary">Try Again</button><a href="${IP}/forgot-password" class="btn btn--outline">Forgot Password?</a></div>
                <div class="tips"><h3>ℹ Troubleshooting Tips</h3><ul><li>Check if Caps Lock is on</li><li>Ensure correct username format</li><li>Password is case-sensitive</li><li>Try resetting your password</li></ul></div>
              </div>
            </div>
            <div class="help-card"><div class="help-card__inner"><span>❓</span><div><strong>Still Having Issues?</strong><p>Call: 1800-XXX-XXXX</p><p>Email: support@digitalindia.gov.in</p></div></div></div>
          </div>
        </div>
        <aside class="sb">
          <div class="pnl"><h2 class="pnl__t">Pattern Info</h2><p class="pnl__text">Comprehensive error state showcase covering auth failures, lockouts, session issues, and server errors.</p></div>
          <div class="pnl"><h2 class="pnl__t">Error Types</h2><ul class="pnl__list"><li>Authentication errors</li><li>Account status errors</li><li>Session errors</li><li>System errors</li></ul></div>
          <div class="pnl--blue pnl"><h2 class="pnl__t">Recovery Actions</h2><ul class="pnl__list"><li>Clear actionable messages</li><li>Multiple recovery paths</li><li>Help always visible</li><li>Error reference codes</li></ul></div>
          <div class="pnl"><h2 class="pnl__t">Implementation</h2><ul class="pnl__list"><li>Log all errors with context</li><li>Immediate clear feedback</li><li>5 fails = 15 min lock</li><li>Always 2+ recovery options</li></ul></div>
        </aside>
      </div></main>`;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 9. AADHAAR AUTHENTICATION
// ═══════════════════════════════════════════════════════════════════════════
export class UX4GIdentityAadhaar extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  protected render(): void {
    this.root.innerHTML = `<style>${CSS}</style>
      <nav class="nav"><a href="${IP}">← Back to Identity Patterns</a><span style="font-size:0.875rem;color:var(--ux4g-color-text-muted)"><b>Flow:</b> Aadhaar Authentication</span></nav>
      <main class="main"><div class="content">
        <div class="proto"><div class="tri"></div><div class="gov"><div class="gov__icon">🛡</div><div><div class="gov__title">${PORTAL}</div><div class="gov__sub">${GOV}</div></div></div>
          <div class="progress"><div class="step step--active"><div class="step__dot">1</div><div class="step__label">Consent</div></div><div class="connector"></div><div class="step"><div class="step__dot">2</div><div class="step__label">Enter</div></div><div class="connector"></div><div class="step"><div class="step__dot">3</div><div class="step__label">OTP</div></div><div class="connector"></div><div class="step"><div class="step__dot">4</div><div class="step__label">Complete</div></div></div>
          <div class="form-area" style="text-align:center;">
            <div class="icon-center"><div class="icon-circle" style="background:#e0e7ff;border:2px solid #a5b4fc;">🆔</div></div>
            <h1>Aadhaar Authentication Consent</h1><p class="desc">Read and accept the terms before proceeding with Aadhaar-based authentication.</p>
            <div class="info-box" style="text-align:left;"><strong>ℹ What is Aadhaar Authentication?</strong><p>Aadhaar authentication verifies your identity using your 12-digit Aadhaar number and OTP sent to your registered mobile. Approved by UIDAI.</p></div>
            <div class="consent-list"><h3>By proceeding, you consent to:</h3><ul><li>Sharing your Aadhaar number with UIDAI for verification</li><li>Receiving OTP on your Aadhaar-registered mobile</li><li>Verification of your identity for this service</li><li>Your Aadhaar data will not be stored beyond this session</li><li>This authentication is voluntary</li><li>Data usage governed by Aadhaar Act, 2016</li></ul></div>
            <div class="checkbox-row"><input type="checkbox" /><span>I have read and accept the terms for Aadhaar authentication</span></div>
            <button class="btn btn--primary" disabled>Proceed to Authentication</button>
          </div>
          <div class="help-card"><div class="help-card__inner"><span>❓</span><div><strong>Need Help with Aadhaar?</strong><p>UIDAI Helpline: 1947 (Toll-Free)</p><p>Portal Support: 1800-XXX-XXXX</p></div></div></div>
        </div>
        <aside class="sb">
          <div class="pnl"><h2 class="pnl__t">Pattern Info</h2><p class="pnl__text">Aadhaar-based authentication using UIDAI's OTP service. Strong identity verification for government services.</p></div>
          <div class="pnl--blue pnl"><h2 class="pnl__t">Consent Required</h2><ul class="pnl__list"><li>Explicit consent before collection</li><li>Clear explanation of data use</li><li>User must actively accept</li><li>Right to withdraw consent</li><li>Audit trail of consent</li></ul></div>
          <div class="pnl--red pnl"><h2 class="pnl__t">Security</h2><ul class="pnl__list"><li>256-bit SSL/TLS encryption</li><li>Aadhaar number never stored</li><li>OTP sent via UIDAI gateway</li><li>Tokenized authentication</li></ul></div>
          <div class="pnl"><h2 class="pnl__t">Legal Compliance</h2><ul class="pnl__list"><li>Aadhaar Act, 2016 compliant</li><li>IT Act, 2000 data protection</li><li>UIDAI authentication guidelines</li></ul></div>
        </aside>
      </div></main>`;
  }
}

if (!customElements.get('ux4g-identity-session-timeout')) customElements.define('ux4g-identity-session-timeout', UX4GIdentitySessionTimeout);
if (!customElements.get('ux4g-identity-error-lockout')) customElements.define('ux4g-identity-error-lockout', UX4GIdentityErrorLockout);
if (!customElements.get('ux4g-identity-aadhaar')) customElements.define('ux4g-identity-aadhaar', UX4GIdentityAadhaar);
