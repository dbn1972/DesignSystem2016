/**
 * Identity Pattern Pages — 9 Web Components
 * Matches React: IdentitySignIn, IdentitySignUp, IdentityMobileOTP, IdentityEmailOTP,
 * IdentityForgotPassword, IdentityAccountRecovery, IdentitySessionTimeout,
 * IdentityErrorLockout, IdentityAadhaar
 */
import { UX4GElement } from '../../base/UX4GElement';

const GOV = 'Government of India';
const PORTAL = 'Digital India Portal';
const IP = '/patterns/identity';

// Shared styles for all identity pages (8-col + 4-col sidebar layout)
const SHARED_STYLES = `
  :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
  .nav { background: var(--ux4g-color-surface, #fff); border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
  .nav a { color: var(--ux4g-color-text-muted, #64748b); text-decoration: none; font-weight: 500; font-size: 0.875rem; }
  .nav a:hover { color: var(--ux4g-color-interactive-default, #000080); }
  .nav__flow { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
  .main { max-width: 1400px; margin: 0 auto; padding: 2rem; }
  .layout { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
  .proto { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; overflow: hidden; }
  .tri { height: 3px; background: linear-gradient(to right, #FF9933, #fff, #138808); }
  .gov { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); }
  .gov__icon { width: 3rem; height: 3rem; border-radius: 0.375rem; background: var(--ux4g-color-interactive-default, #000080); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; color: #fff; }
  .gov__title { font-weight: 700; }
  .gov__sub { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); }
  .form-area { padding: 2rem 3rem; }
  .form-area h1 { font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem; }
  .form-area > p { color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 2rem; }
  .field { margin-bottom: 1.25rem; }
  .label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.375rem; }
  .req { color: #dc2626; }
  .input { display: block; width: 100%; padding: 0.75rem; font-size: 0.875rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; box-sizing: border-box; }
  .input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
  .input-wrap { position: relative; }
  .input-wrap .input { padding-right: 3rem; }
  .toggle { position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 1rem; }
  .btn { display: block; width: 100%; padding: 0.875rem; font-size: 1rem; font-weight: 700; border: none; border-radius: 0.5rem; cursor: pointer; text-align: center; text-decoration: none; }
  .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
  .btn--primary:hover { opacity: 0.9; }
  .btn--primary:disabled { opacity: 0.5; cursor: not-allowed; }
  .btn--outline { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); color: var(--ux4g-color-text-default, #0f172a); }
  .divider { text-align: center; margin: 1.5rem 0; position: relative; }
  .divider::before { content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: var(--ux4g-color-border, #e2e8f0); }
  .divider span { background: var(--ux4g-color-surface, #fff); padding: 0 0.75rem; font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); position: relative; }
  .alt-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem; }
  .notice { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; border-radius: 0.5rem; font-size: 0.875rem; margin-top: 1.5rem; }
  .notice--blue { background: #eff6ff; border-left: 4px solid #2563eb; }
  .notice--green { background: #f0fdf4; border-left: 4px solid #16a34a; }
  .notice--yellow { background: #fefce8; border-left: 4px solid #ca8a04; }
  .notice strong { display: block; margin-bottom: 0.25rem; }
  .notice p { margin: 0; color: var(--ux4g-color-text-muted, #64748b); }
  .link { color: var(--ux4g-color-interactive-default, #000080); font-weight: 600; text-decoration: none; font-size: 0.875rem; }
  .link:hover { text-decoration: underline; }
  .center { text-align: center; margin-top: 1.5rem; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
  .check { display: flex; align-items: center; gap: 0.75rem; font-size: 0.875rem; margin-bottom: 1rem; }
  .otp-group { display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem; }
  .otp-input { width: 3rem; height: 3.5rem; text-align: center; font-size: 1.5rem; font-weight: 700; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; }
  .otp-input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
  .timer { text-align: center; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin-bottom: 1.5rem; }
  .progress { display: flex; gap: 0.375rem; margin-bottom: 1.5rem; }
  .pstep { display: flex; align-items: center; gap: 0.25rem; flex: 1; padding: 0.5rem; background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.6875rem; color: var(--ux4g-color-text-muted, #64748b); }
  .pstep--active { border-color: var(--ux4g-color-interactive-default, #000080); color: var(--ux4g-color-interactive-default, #000080); font-weight: 700; }
  .pstep--done { border-color: #16a34a; color: #16a34a; }
  .pstep__num { width: 1.25rem; height: 1.25rem; border-radius: 50%; background: var(--ux4g-color-border, #e2e8f0); display: flex; align-items: center; justify-content: center; font-size: 0.5625rem; font-weight: 700; flex-shrink: 0; }
  .pstep--active .pstep__num { background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
  .pstep--done .pstep__num { background: #16a34a; color: #fff; }
  .success-icon { font-size: 3rem; text-align: center; margin-bottom: 0.5rem; }
  .consent-box { background: var(--ux4g-color-background, #f8fafc); border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; padding: 1rem; margin-bottom: 1.5rem; max-height: 200px; overflow-y: auto; font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); line-height: 1.8; }
  .consent-check { display: flex; align-items: flex-start; gap: 0.5rem; padding: 0.75rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; margin-bottom: 1.5rem; font-size: 0.8125rem; cursor: pointer; }
  .pw-reqs { display: grid; grid-template-columns: 1fr 1fr; gap: 0.25rem; margin-top: 0.5rem; font-size: 0.75rem; }
  .pw-req { color: var(--ux4g-color-text-muted, #64748b); }
  .pw-req--met { color: #16a34a; }
  .match { font-size: 0.75rem; margin-top: 0.25rem; }
  .match--ok { color: #16a34a; }
  .match--no { color: #dc2626; }
  .error-selector { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .esel { padding: 0.5rem 0.75rem; font-size: 0.75rem; font-weight: 700; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; background: var(--ux4g-color-surface, #fff); cursor: pointer; }
  .esel--active { border-color: var(--ux4g-color-interactive-default, #000080); background: #eff6ff; color: var(--ux4g-color-interactive-default, #000080); }
  .error-card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; text-align: center; }
  .error-card__icon { font-size: 3rem; margin-bottom: 0.75rem; }
  .error-card__title { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.5rem; }
  .error-card__desc { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 1.5rem; }
  .error-details { border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; overflow: hidden; margin-bottom: 1.5rem; text-align: left; }
  .error-row { display: flex; justify-content: space-between; padding: 0.625rem 1rem; font-size: 0.8125rem; border-bottom: 1px solid var(--ux4g-color-border, #e2e8f0); }
  .error-row:last-child { border-bottom: none; }
  .error-row:nth-child(even) { background: var(--ux4g-color-background, #f8fafc); }
  .error-actions { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .error-tips { text-align: left; background: var(--ux4g-color-background, #f8fafc); border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; padding: 1rem; }
  .error-tips h3 { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.5rem; }
  .error-tips ul { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); line-height: 1.8; }
  .timeout-overlay { background: rgba(0,0,0,0.5); border-radius: 0.5rem; padding: 2rem; display: flex; align-items: center; justify-content: center; min-height: 400px; }
  .timeout-modal { background: var(--ux4g-color-surface, #fff); border-radius: 0.75rem; padding: 2.5rem; text-align: center; max-width: 420px; width: 100%; }
  .timeout-time { font-size: 2.5rem; font-weight: 800; color: #dc2626; font-family: monospace; margin-bottom: 1rem; }
  .sidebar { display: flex; flex-direction: column; gap: 1rem; }
  .panel { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
  .panel__title { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
  .panel__text { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 0.25rem; }
  .panel ul { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); line-height: 1.8; }
  @media (max-width: 768px) { .layout { grid-template-columns: 1fr; } .form-area { padding: 1.5rem; } .alt-btns { grid-template-columns: 1fr; } .pw-reqs { grid-template-columns: 1fr; } .otp-input { width: 2.5rem; height: 3rem; font-size: 1.25rem; } .progress { flex-wrap: wrap; } }
`;

function navBar(flow: string) {
  return `<nav class="nav"><a href="${IP}">← Back to Identity Patterns</a><span class="nav__flow"><strong>Flow:</strong> ${flow}</span></nav>`;
}

function govHeader() {
  return `<div class="tri" aria-hidden="true"></div><div class="gov"><div class="gov__icon">🛡</div><div><div class="gov__title">${PORTAL}</div><div class="gov__sub">${GOV}</div></div></div>`;
}

function sidebar(panels: { title: string; items: string[] }[]) {
  return `<aside class="sidebar">${panels.map(p => `<div class="panel"><h2 class="panel__title">${p.title}</h2><ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('')}</aside>`;
}

