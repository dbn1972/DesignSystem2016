/**
 * UX4G Status Tracker Service — Web Component
 *
 * Tracks application status with a timeline view.
 *
 * @element ux4g-status-tracker-service
 * @attr {string} service-name - Service name displayed in header/footer
 * @attr {string} application-id - Application ID to track
 *
 * @fires ux4g-step-complete - Fired when status data is loaded
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS } from './service-contract';

interface TimelineItem {
  id: string;
  label: string;
  description: string;
  timestamp: string;
  status: 'completed' | 'current' | 'pending';
}

const TIMELINE_DATA: TimelineItem[] = [
  { id: 'draft', label: 'Application Created', description: 'Application form saved as draft', timestamp: '10 Jan 2024, 10:30 AM', status: 'completed' },
  { id: 'submitted', label: 'Application Submitted', description: 'All details and documents submitted successfully', timestamp: '10 Jan 2024, 11:15 AM', status: 'completed' },
  { id: 'payment-pending', label: 'Payment Completed', description: 'Payment of ₹649 received via UPI', timestamp: '10 Jan 2024, 11:20 AM', status: 'current' },
  { id: 'under-review', label: 'Under Review', description: 'Application is being reviewed by the department', timestamp: 'Estimated: 17 Jan 2024', status: 'pending' },
];

export class UX4GStatusTrackerService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'application-id']; }

  private _loading = true;

  constructor() { super({ useShadowDOM: true }); }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
    setTimeout(() => {
      this._loading = false;
      this.render();
      this.dispatchCustomEvent(SERVICE_EVENTS.stepComplete, { applicationId: this.applicationId });
    }, 500);
  }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get applicationId() { return this.getAttribute('application-id') || 'APP-2024-005678'; }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, -apple-system, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
        .loading { display: flex; align-items: center; justify-content: center; gap: 0.75rem; padding: 3rem; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .spinner { display: inline-block; width: 20px; height: 20px; border: 2px solid transparent; border-top-color: var(--ux4g-color-interactive-default, #000080); border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
        .summary-item { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1rem; }
        .summary-item__label { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
        .summary-item__value { font-size: 0.9375rem; font-weight: 600; }
        .badge { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; }
        .badge--processing { background: #fef3c7; color: #92400e; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; }
        .card__title { font-size: 1.125rem; font-weight: 700; margin: 0 0 1.5rem; }
        .timeline { position: relative; padding-left: 2rem; }
        .timeline::before { content: ''; position: absolute; left: 0.5rem; top: 0.5rem; bottom: 0.5rem; width: 2px; background: var(--ux4g-color-border, #e2e8f0); }
        .timeline-item { position: relative; padding-bottom: 1.5rem; }
        .timeline-item:last-child { padding-bottom: 0; }
        .timeline-item__dot { position: absolute; left: -1.625rem; top: 0.25rem; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #fff; }
        .timeline-item__dot--completed { background: #16a34a; }
        .timeline-item__dot--current { background: #3b82f6; box-shadow: 0 0 0 4px rgba(59,130,246,0.2); }
        .timeline-item__dot--pending { background: var(--ux4g-color-border, #e2e8f0); }
        .timeline-item__label { font-size: 0.9375rem; font-weight: 600; margin-bottom: 0.125rem; }
        .timeline-item__desc { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); margin-bottom: 0.25rem; }
        .timeline-item__time { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); }
      </style>

      <ux4g-service-header icon="📊" icon-color="#000080" category="${this.serviceName}" heading="Application Status"></ux4g-service-header>

      <div class="main">
        ${this._loading ? `
          <div class="loading"><span class="spinner" aria-hidden="true"></span> Loading application status…</div>
        ` : this._renderContent()}
      </div>

      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Status Tracker"></ux4g-service-footer>
    `;
  }

  private _renderContent(): string {
    return `
      <div class="summary">
        <div class="summary-item">
          <div class="summary-item__label">Application ID</div>
          <div class="summary-item__value">${this.applicationId}</div>
        </div>
        <div class="summary-item">
          <div class="summary-item__label">Service Type</div>
          <div class="summary-item__value">Income Certificate</div>
        </div>
        <div class="summary-item">
          <div class="summary-item__label">Current Status</div>
          <div class="summary-item__value"><span class="badge badge--processing">Under Review</span></div>
        </div>
        <div class="summary-item">
          <div class="summary-item__label">Estimated Completion</div>
          <div class="summary-item__value">17 Jan 2024</div>
        </div>
      </div>

      <div class="card">
        <h2 class="card__title">Application Timeline</h2>
        <div class="timeline">
          ${TIMELINE_DATA.map(item => `
            <div class="timeline-item">
              <div class="timeline-item__dot timeline-item__dot--${item.status}"></div>
              <div class="timeline-item__label">${item.label}</div>
              <div class="timeline-item__desc">${item.description}</div>
              <div class="timeline-item__time">${item.timestamp}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

if (!customElements.get('ux4g-status-tracker-service')) {
  customElements.define('ux4g-status-tracker-service', UX4GStatusTrackerService);
}
