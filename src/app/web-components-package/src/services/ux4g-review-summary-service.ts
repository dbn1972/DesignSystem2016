/**
 * UX4G Review Summary Service — Web Component
 *
 * Final review of all application details before declaration.
 *
 * @element ux4g-review-summary-service
 * @attr {string} service-name - Service name displayed in header/footer
 * @attr {string} edit-personal-path - Path to edit personal details
 * @attr {string} edit-address-path - Path to edit address details
 * @attr {string} edit-additional-path - Path to edit additional details
 * @attr {string} edit-documents-path - Path to edit documents
 * @attr {string} back-path - Path to go back
 * @attr {string} next-path - Path to proceed
 *
 * @fires ux4g-step-complete - Fired when user proceeds to declaration
 * @fires ux4g-navigate - Fired when user clicks a navigation link
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS } from './service-contract';

const SUMMARY_CARDS = [
  { key: 'personal', icon: '👤', title: 'Personal Details', editAttr: 'edit-personal-path', summary: 'Rajesh Kumar Sharma • Male • DOB: 15-03-1990 • Mobile: 9876543210' },
  { key: 'address', icon: '📍', title: 'Address Details', editAttr: 'edit-address-path', summary: '42, Sector 15, Vasant Kunj, New Delhi, Delhi — 110070' },
  { key: 'additional', icon: '📋', title: 'Additional Information', editAttr: 'edit-additional-path', summary: 'Income Certificate • Normal Processing • Scholarship application' },
  { key: 'documents', icon: '📎', title: 'Documents', editAttr: 'edit-documents-path', summary: 'Aadhaar Card ✓ • Photo ✓ • Address Proof ✓ • Supporting Doc ✓' },
];

export class UX4GReviewSummaryService extends UX4GElement {
  static get observedAttributes() {
    return ['service-name', 'edit-personal-path', 'edit-address-path', 'edit-additional-path', 'edit-documents-path', 'back-path', 'next-path'];
  }

  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get backPath() { return this.getAttribute('back-path') || '/document-upload'; }
  private get nextPath() { return this.getAttribute('next-path') || '/declaration'; }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, -apple-system, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
        .banner { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 1.25rem; background: #eff6ff; border: 1px solid #3b82f6; border-radius: 0.5rem; margin-bottom: 1.5rem; font-size: 0.875rem; color: #1e40af; }
        .banner__icon { font-size: 1.25rem; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; margin-bottom: 1rem; overflow: hidden; }
        .card__header { display: flex; align-items: center; gap: 0.5rem; padding: 1rem 1.5rem; border-bottom: 1px solid var(--ux4g-color-border, #e2e8f0); }
        .card__icon { font-size: 1.25rem; }
        .card__title { font-size: 1rem; font-weight: 700; margin: 0; flex: 1; }
        .card__body { padding: 1rem 1.5rem; }
        .card__summary { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); line-height: 1.5; }
        .link { background: none; border: none; color: var(--ux4g-color-interactive-default, #000080); font-size: 0.875rem; font-weight: 600; cursor: pointer; text-decoration: none; }
        .link:hover { text-decoration: underline; }
        .actions { display: flex; justify-content: space-between; margin-top: 1.5rem; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: 2px solid transparent; cursor: pointer; }
        .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; border: none; }
        .btn--primary:hover { opacity: 0.9; }
        .btn--outline { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
      </style>

      <ux4g-service-header icon="📋" icon-color="#000080" category="${this.serviceName}" heading="Review Summary"></ux4g-service-header>

      <div class="main">
        <div class="banner" role="status">
          <span class="banner__icon" aria-hidden="true">ℹ️</span>
          <span>Please review all details carefully before proceeding.</span>
        </div>

        ${SUMMARY_CARDS.map(card => {
          const editPath = this.getAttribute(card.editAttr) || '#';
          return `
            <div class="card">
              <div class="card__header">
                <span class="card__icon" aria-hidden="true">${card.icon}</span>
                <h3 class="card__title">${card.title}</h3>
                <a href="${editPath}" class="link edit-link" data-path="${editPath}">Edit</a>
              </div>
              <div class="card__body">
                <p class="card__summary">${card.summary}</p>
              </div>
            </div>`;
        }).join('')}

        <div class="actions">
          <a href="${this.backPath}" class="btn btn--outline" id="back-btn">← Back</a>
          <button type="button" class="btn btn--primary" id="proceed-btn">Proceed to Declaration →</button>
        </div>
      </div>

      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Review Summary"></ux4g-service-footer>
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

    this.root.querySelector('#proceed-btn')?.addEventListener('click', () => {
      this.dispatchCustomEvent(SERVICE_EVENTS.stepComplete, { step: 'review-summary' });
      this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.nextPath });
    });
  }
}

if (!customElements.get('ux4g-review-summary-service')) {
  customElements.define('ux4g-review-summary-service', UX4GReviewSummaryService);
}
