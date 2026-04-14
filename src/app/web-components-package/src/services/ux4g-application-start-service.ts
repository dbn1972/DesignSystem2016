/**
 * UX4G Application Start Service — Web Component
 *
 * @element ux4g-application-start-service
 * @attr {string} service-name
 * @attr {string} applicant-name
 * @attr {string} start-form-path
 * @attr {string} help-path
 *
 * @fires ux4g-step-complete - Fired when user accepts terms and starts
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS } from './service-contract';

export class UX4GApplicationStartService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'applicant-name', 'start-form-path', 'help-path']; }

  private _accepted = false;

  constructor() { super({ useShadowDOM: true }); }

  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get applicantName() { return this.getAttribute('applicant-name') || 'Service User'; }
  private get startFormPath() { return this.getAttribute('start-form-path') || '/form/personal'; }

  protected render(): void {
    const steps = [
      { n: 1, t: 'Complete personal information', d: 'Enter your core personal and contact details accurately.' },
      { n: 2, t: 'Provide address details', d: 'Add current address that matches your supporting proof.' },
      { n: 3, t: 'Fill service-specific details', d: 'Answer additional service-specific questions.' },
      { n: 4, t: 'Upload required documents', d: 'Upload clear and readable proof documents.' },
      { n: 5, t: 'Review and declare', d: 'Confirm all details before final submission.' },
      { n: 6, t: 'Pay application fee', d: 'Complete payment and keep the receipt for records.' },
      { n: 7, t: 'Submit and track', d: 'Submit application and track status using reference number.' },
    ];

    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
        .heading { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.5rem; }
        .sub { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 1.5rem; }
        .info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem; }
        .info-tile { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
        .info-tile__icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .info-tile__title { font-weight: 700; margin-bottom: 0.25rem; }
        .info-tile__text { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; overflow: hidden; margin-bottom: 1.5rem; }
        .card__header { padding: 1rem 1.5rem; font-weight: 700; background: var(--ux4g-color-background, #f8fafc); border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); }
        .card__body { padding: 1.5rem; }
        .step { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; }
        .step:last-child { margin-bottom: 0; }
        .step__num { width: 2.5rem; height: 2.5rem; border-radius: 50%; background: var(--ux4g-color-interactive-default, #000080); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
        .step__title { font-weight: 700; margin-bottom: 0.125rem; }
        .step__desc { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .terms { background: #eff6ff; border: 2px solid #93c5fd; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem; }
        .terms strong { display: block; margin-bottom: 0.25rem; }
        .terms p { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0; }
        .checkbox { display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1.5rem; cursor: pointer; font-size: 0.875rem; }
        .checkbox input { margin-top: 0.125rem; }
        .btn { display: block; width: 100%; padding: 0.875rem; font-size: 0.875rem; font-weight: 700; border: none; border-radius: 0.5rem; cursor: pointer; text-align: center; text-decoration: none; }
        .btn--success { background: #16a34a; color: #fff; }
        .btn--disabled { background: #9ca3af !important; pointer-events: none; }
        @media (max-width: 768px) { .info-grid { grid-template-columns: 1fr; } }
      </style>

      <ux4g-service-header icon="📝" icon-color="#16a34a" category="Welcome, ${this.applicantName}" heading="Start New Application"></ux4g-service-header>

      <div class="main">
        <h2 class="heading">Before You Begin</h2>
        <p class="sub">Review the key instructions before starting your application.</p>

        <div class="info-grid">
          <div class="info-tile"><div class="info-tile__icon">⏱</div><div class="info-tile__title">Time Required</div><div class="info-tile__text">15–20 minutes for complete submission.</div></div>
          <div class="info-tile"><div class="info-tile__icon">📄</div><div class="info-tile__title">Documents Needed</div><div class="info-tile__text">Keep required files ready in PDF/JPEG/PNG format.</div></div>
          <div class="info-tile"><div class="info-tile__icon">🛡</div><div class="info-tile__title">Save Progress</div><div class="info-tile__text">Save draft anytime and continue later.</div></div>
        </div>

        <div class="card">
          <div class="card__header">Application Instructions</div>
          <div class="card__body">
            ${steps.map(s => `<div class="step"><div class="step__num">${s.n}</div><div><div class="step__title">${s.t}</div><div class="step__desc">${s.d}</div></div></div>`).join('')}
          </div>
        </div>

        <div class="card">
          <div class="card__body">
            <div class="terms"><strong>Terms and Conditions</strong><p>By continuing, you confirm all information provided is accurate and can be verified.</p></div>
            <label class="checkbox" id="terms-label">
              <input type="checkbox" id="terms-cb" ${this._accepted ? 'checked' : ''} />
              <span><strong>I have read and understood</strong> the instructions and terms.</span>
            </label>
            <a id="start-btn" class="btn btn--success ${this._accepted ? '' : 'btn--disabled'}" href="${this.startFormPath}" aria-disabled="${!this._accepted}">I Agree — Start Application →</a>
          </div>
        </div>
      </div>

      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Application Start"></ux4g-service-footer>
    `;

    const cb = this.root.querySelector('#terms-cb') as HTMLInputElement;
    cb?.addEventListener('change', () => {
      this._accepted = cb.checked;
      this.render();
    });
  }
}

if (!customElements.get('ux4g-application-start-service')) {
  customElements.define('ux4g-application-start-service', UX4GApplicationStartService);
}
