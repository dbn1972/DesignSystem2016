/**
 * UX4G Form Review Service — Web Component
 *
 * Displays a review of all form data before final submission.
 *
 * @element ux4g-form-review-service
 * @attr {string} service-name - Service name displayed in header/footer
 * @attr {string} edit-personal-path - Path to edit personal details
 * @attr {string} edit-address-path - Path to edit address details
 * @attr {string} edit-additional-path - Path to edit additional details
 * @attr {string} back-path - Path to go back
 * @attr {string} next-path - Path to proceed
 *
 * @fires ux4g-step-complete - Fired when user confirms and continues
 * @fires ux4g-navigate - Fired when user clicks a navigation link
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS } from './service-contract';

const MOCK_PERSONAL = [
  { label: 'Full Name', value: 'Rajesh Kumar Sharma' },
  { label: 'Date of Birth', value: '15-03-1990' },
  { label: 'Gender', value: 'Male' },
  { label: "Father's Name", value: 'Suresh Kumar Sharma' },
  { label: "Mother's Name", value: 'Sunita Devi' },
  { label: 'Mobile Number', value: '9876543210' },
  { label: 'Email', value: 'rajesh.sharma@example.com' },
  { label: 'Aadhaar Number', value: '•••• •••• 4321' },
];

const MOCK_ADDRESS = [
  { label: 'Address Line 1', value: '42, Sector 15, Vasant Kunj' },
  { label: 'City', value: 'New Delhi' },
  { label: 'District', value: 'South West Delhi' },
  { label: 'State / UT', value: 'Delhi' },
  { label: 'PIN Code', value: '110070' },
];

const MOCK_ADDITIONAL = [
  { label: 'Purpose of Application', value: 'Income Certificate' },
  { label: 'Processing Type', value: 'Normal (7–10 days)' },
  { label: 'Additional Remarks', value: 'Required for scholarship application' },
];

export class UX4GFormReviewService extends UX4GElement {
  static get observedAttributes() {
    return ['service-name', 'edit-personal-path', 'edit-address-path', 'edit-additional-path', 'back-path', 'next-path'];
  }

  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get editPersonalPath() { return this.getAttribute('edit-personal-path') || '/form/personal'; }
  private get editAddressPath() { return this.getAttribute('edit-address-path') || '/form/address'; }
  private get editAdditionalPath() { return this.getAttribute('edit-additional-path') || '/form/additional'; }
  private get backPath() { return this.getAttribute('back-path') || '/form/additional'; }
  private get nextPath() { return this.getAttribute('next-path') || '/document-upload'; }

  private _renderSection(title: string, icon: string, editPath: string, rows: { label: string; value: string }[]): string {
    return `
      <div class="section">
        <div class="section__header">
          <span class="section__icon" aria-hidden="true">${icon}</span>
          <h3 class="section__title">${title}</h3>
          <a href="${editPath}" class="link edit-link" data-path="${editPath}">Edit</a>
        </div>
        <div class="section__body">
          ${rows.map(r => `<div class="row"><span class="row__label">${r.label}</span><span class="row__value">${r.value}</span></div>`).join('')}
        </div>
      </div>`;
  }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, -apple-system, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
        .section { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; margin-bottom: 1rem; overflow: hidden; }
        .section__header { display: flex; align-items: center; gap: 0.5rem; padding: 1rem 1.5rem; background: var(--ux4g-color-background, #f8fafc); border-bottom: 1px solid var(--ux4g-color-border, #e2e8f0); }
        .section__icon { font-size: 1.25rem; }
        .section__title { font-size: 1rem; font-weight: 700; margin: 0; flex: 1; }
        .section__body { padding: 1rem 1.5rem; }
        .row { display: flex; padding: 0.5rem 0; border-bottom: 1px solid var(--ux4g-color-border, #e2e8f0); }
        .row:last-child { border-bottom: none; }
        .row__label { width: 200px; flex-shrink: 0; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .row__value { font-size: 0.875rem; font-weight: 500; }
        .link { background: none; border: none; color: var(--ux4g-color-interactive-default, #000080); font-size: 0.875rem; font-weight: 600; cursor: pointer; text-decoration: none; }
        .link:hover { text-decoration: underline; }
        .actions { display: flex; justify-content: space-between; margin-top: 1.5rem; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: 2px solid transparent; cursor: pointer; }
        .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; border: none; }
        .btn--primary:hover { opacity: 0.9; }
        .btn--outline { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
      </style>

      <ux4g-service-header icon="📝" icon-color="#000080" category="${this.serviceName}" heading="Review Your Details"></ux4g-service-header>

      <div class="main">
        ${this._renderSection('Personal Details', '👤', this.editPersonalPath, MOCK_PERSONAL)}
        ${this._renderSection('Address Details', '📍', this.editAddressPath, MOCK_ADDRESS)}
        ${this._renderSection('Additional Information', '📋', this.editAdditionalPath, MOCK_ADDITIONAL)}

        <div class="actions">
          <a href="${this.backPath}" class="btn btn--outline" id="back-btn">← Back</a>
          <button type="button" class="btn btn--primary" id="confirm-btn">Confirm and Continue →</button>
        </div>
      </div>

      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Form Review"></ux4g-service-footer>
    `;

    this._attachListeners();
  }

  private _attachListeners(): void {
    this.root.querySelectorAll('.edit-link').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: (el as HTMLElement).dataset.path });
      });
    });

    this.root.querySelector('#back-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.backPath });
    });

    this.root.querySelector('#confirm-btn')?.addEventListener('click', () => {
      this.dispatchCustomEvent(SERVICE_EVENTS.stepComplete, { step: 'form-review' });
      this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.nextPath });
    });
  }
}

if (!customElements.get('ux4g-form-review-service')) {
  customElements.define('ux4g-form-review-service', UX4GFormReviewService);
}
