/**
 * UX4G User Profile Service — Web Component
 * @element ux4g-user-profile-service
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS } from './service-contract';

export class UX4GUserProfileService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'my-applications-path', 'change-password-path']; }
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get myAppsPath() { return this.getAttribute('my-applications-path') || '/my-applications'; }
  private get changePwPath() { return this.getAttribute('change-password-path') || '/forgot-password'; }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 720px; margin: 0 auto; padding: 2rem 1.5rem; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1.5rem; }
        .profile-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); }
        .avatar { width: 3.5rem; height: 3.5rem; border-radius: 50%; background: var(--ux4g-color-interactive-default, #000080); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; }
        .name { font-size: 1.25rem; font-weight: 700; margin: 0; }
        .role { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .field-label { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); margin-bottom: 0.125rem; }
        .field-value { font-weight: 600; font-size: 0.9375rem; }
        .actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer; }
        .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; border: none; }
        .btn--outline { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
        @media (max-width: 480px) { .grid { grid-template-columns: 1fr; } }
      </style>
      <ux4g-service-header icon="👤" icon-color="#2563eb" category="${this.serviceName}" heading="Account Settings"></ux4g-service-header>
      <div class="main">
        <div class="card">
          <div class="profile-header">
            <div class="avatar">R</div>
            <div><h2 class="name">Rajesh Kumar</h2><div class="role">Citizen Account</div></div>
          </div>
          <div class="grid">
            <div><div class="field-label">Email</div><div class="field-value">rajesh.kumar@example.com</div></div>
            <div><div class="field-label">Mobile</div><div class="field-value">+91 98765 43210</div></div>
            <div><div class="field-label">Aadhaar</div><div class="field-value">XXXX-XXXX-1234</div></div>
            <div><div class="field-label">User ID</div><div class="field-value">USR-2026-001</div></div>
          </div>
        </div>
        <div class="actions">
          <a href="${this.myAppsPath}" class="btn btn--primary" id="apps-btn">My Applications</a>
          <a href="${this.changePwPath}" class="btn btn--outline" id="pw-btn">Change Password</a>
        </div>
      </div>
      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="User Profile"></ux4g-service-footer>
    `;
    this.root.querySelector('#apps-btn')?.addEventListener('click', (e) => { e.preventDefault(); this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.myAppsPath }); });
    this.root.querySelector('#pw-btn')?.addEventListener('click', (e) => { e.preventDefault(); this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.changePwPath }); });
  }
}

if (!customElements.get('ux4g-user-profile-service')) customElements.define('ux4g-user-profile-service', UX4GUserProfileService);
