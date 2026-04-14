/**
 * UX4G Auth Status Service — Web Component
 * @element ux4g-auth-status-service
 * @attr {string} status - session-expired | locked-account | service-unavailable
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS } from './service-contract';

const STATUS_MAP: Record<string, { icon: string; title: string; message: string; color: string }> = {
  'session-expired': { icon: '⏱', title: 'Session Expired', message: 'Your session has expired due to inactivity. Please sign in again to continue.', color: '#d97706' },
  'locked-account': { icon: '🔒', title: 'Account Locked', message: 'Your account has been temporarily locked due to multiple failed sign-in attempts. Please try again after 30 minutes or contact support.', color: '#dc2626' },
  'service-unavailable': { icon: '🔧', title: 'Service Unavailable', message: 'This service is temporarily unavailable for maintenance. Please try again later.', color: '#64748b' },
};

export class UX4GAuthStatusService extends UX4GElement {
  static get observedAttributes() { return ['status', 'service-name', 'sign-in-path', 'home-path']; }
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get signInPath() { return this.getAttribute('sign-in-path') || '/sign-in'; }
  private get homePath() { return this.getAttribute('home-path') || '/'; }

  protected render(): void {
    const status = this.getAttribute('status') || 'session-expired';
    const cfg = STATUS_MAP[status] || STATUS_MAP['session-expired'];

    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .card { max-width: 560px; margin: 3rem auto; background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 2.5rem; text-align: center; border-top: 4px solid ${cfg.color}; }
        .card__icon { font-size: 3rem; margin-bottom: 1rem; }
        .card__title { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.75rem; }
        .card__msg { color: var(--ux4g-color-text-muted, #64748b); line-height: 1.6; margin: 0 0 1.5rem; }
        .actions { display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1rem; }
        .btn { padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer; }
        .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
        .btn--secondary { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
        .help { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .link { color: var(--ux4g-color-interactive-default, #000080); font-weight: 600; text-decoration: none; }
      </style>
      <ux4g-service-header icon="🔐" icon-color="#9333ea" category="${this.serviceName}" heading="Authentication Status"></ux4g-service-header>
      <div class="card">
        <div class="card__icon" aria-hidden="true">${cfg.icon}</div>
        <h2 class="card__title">${cfg.title}</h2>
        <p class="card__msg">${cfg.message}</p>
        <div class="actions">
          <a href="${this.signInPath}" class="btn btn--primary" id="as-signin">Sign In Again</a>
          <a href="${this.homePath}" class="btn btn--secondary" id="as-home">Go to Home</a>
        </div>
        <p class="help">Need help? <a href="#" class="link">Contact Support</a></p>
      </div>
      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Auth Status"></ux4g-service-footer>
    `;
    this.root.querySelector('#as-signin')?.addEventListener('click', (e) => { e.preventDefault(); this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.signInPath }); });
    this.root.querySelector('#as-home')?.addEventListener('click', (e) => { e.preventDefault(); this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.homePath }); });
  }
}

if (!customElements.get('ux4g-auth-status-service')) customElements.define('ux4g-auth-status-service', UX4GAuthStatusService);
