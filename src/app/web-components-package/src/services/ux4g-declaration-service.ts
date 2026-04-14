/**
 * UX4G Declaration Service — Web Component
 *
 * Declaration and consent step before payment.
 *
 * @element ux4g-declaration-service
 * @attr {string} service-name - Service name displayed in header/footer
 * @attr {string} applicant-name - Name of the applicant
 * @attr {string} back-path - Path to go back
 * @attr {string} next-path - Path to proceed
 *
 * @fires ux4g-step-complete - Fired when user accepts declaration
 * @fires ux4g-navigate - Fired when user clicks a navigation link
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS } from './service-contract';

export class UX4GDeclarationService extends UX4GElement {
  static get observedAttributes() {
    return ['service-name', 'applicant-name', 'back-path', 'next-path'];
  }

  private _agreed = false;

  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get applicantName() { return this.getAttribute('applicant-name') || 'Applicant'; }
  private get backPath() { return this.getAttribute('back-path') || '/review-summary'; }
  private get nextPath() { return this.getAttribute('next-path') || '/payment-summary'; }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, -apple-system, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem 2rem; }
        .card__title { font-size: 1.25rem; font-weight: 700; margin: 0 0 1rem; }
        .declaration-text { font-size: 0.9375rem; line-height: 1.7; margin-bottom: 1.25rem; color: var(--ux4g-color-text-default, #0f172a); }
        .declaration-text strong { font-weight: 700; }
        .bullet-list { list-style: disc; padding-left: 1.5rem; margin: 1rem 0 1.5rem; }
        .bullet-list li { font-size: 0.875rem; line-height: 1.6; color: var(--ux4g-color-text-muted, #64748b); margin-bottom: 0.5rem; }
        .checkbox-row { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; background: var(--ux4g-color-background, #f8fafc); border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; margin-top: 1.5rem; cursor: pointer; }
        .checkbox-row input[type="checkbox"] { margin-top: 0.125rem; width: 18px; height: 18px; accent-color: var(--ux4g-color-interactive-default, #000080); cursor: pointer; }
        .checkbox-row label { font-size: 0.875rem; font-weight: 600; cursor: pointer; }
        .actions { display: flex; justify-content: space-between; margin-top: 1.5rem; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: 2px solid transparent; cursor: pointer; }
        .btn--accept { background: ${this._agreed ? '#16a34a' : '#94a3b8'}; color: #fff; border: none; }
        .btn--accept:disabled { opacity: 0.6; cursor: not-allowed; }
        .btn--outline { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
      </style>

      <ux4g-service-header icon="📜" icon-color="#000080" category="${this.serviceName}" heading="Declaration"></ux4g-service-header>

      <div class="main">
        <div class="card">
          <h2 class="card__title">Declaration</h2>
          <p class="declaration-text">
            I, <strong>${this.applicantName}</strong>, hereby declare that all the information provided in this application is true, complete, and correct to the best of my knowledge and belief. I understand that any false statement or concealment of facts may result in rejection of my application or legal action.
          </p>
          <ul class="bullet-list">
            <li>The information provided may be verified with government databases and third-party sources for authentication purposes.</li>
            <li>My personal data will be processed in accordance with the applicable data protection laws and government privacy policies.</li>
            <li>I consent to receiving communications regarding my application status via SMS, email, or other registered channels.</li>
          </ul>
          <div class="checkbox-row">
            <input type="checkbox" id="agree-check" ${this._agreed ? 'checked' : ''} />
            <label for="agree-check">I have read and agree to the declaration</label>
          </div>
        </div>

        <div class="actions">
          <a href="${this.backPath}" class="btn btn--outline" id="back-btn">← Back</a>
          <button type="button" class="btn btn--accept" id="accept-btn" ${!this._agreed ? 'disabled' : ''}>Accept and Continue →</button>
        </div>
      </div>

      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Declaration"></ux4g-service-footer>
    `;

    this._attachListeners();
  }

  private _attachListeners(): void {
    this.root.querySelector('#agree-check')?.addEventListener('change', (e) => {
      this._agreed = (e.target as HTMLInputElement).checked;
      this.render();
    });

    this.root.querySelector('#back-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.backPath });
    });

    this.root.querySelector('#accept-btn')?.addEventListener('click', () => {
      if (!this._agreed) return;
      this.dispatchCustomEvent(SERVICE_EVENTS.stepComplete, { step: 'declaration' });
      this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.nextPath });
    });
  }
}

if (!customElements.get('ux4g-declaration-service')) {
  customElements.define('ux4g-declaration-service', UX4GDeclarationService);
}
