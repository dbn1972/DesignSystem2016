/**
 * UX4G Application Tracker Web Component
 * 
 * @element ux4g-application-tracker
 * 
 * @attr {string} application-id - Application ID
 * @attr {string} status - Current status
 * @attr {string} stages - JSON string of stages array
 * 
 * @fires ux4g-stage-click - Fired when stage is clicked
 * 
 * @example
 * ```html
 * <ux4g-application-tracker 
 *   application-id="APP123456" 
 *   status="processing"
 *   stages='[{"id":"submitted","label":"Submitted","status":"complete"},
 *            {"id":"processing","label":"Processing","status":"current"}]'>
 * </ux4g-application-tracker>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

interface Stage {
  id: string;
  label: string;
  status: 'complete' | 'current' | 'pending' | 'rejected';
  date?: string;
  description?: string;
}

export class UX4GApplicationTracker extends UX4GElement {
  static get observedAttributes() {
    return ['application-id', 'status', 'stages'];
  }

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const applicationId = this.getAttribute('application-id') || '';
    const stagesStr = this.getAttribute('stages') || '[]';

    let stages: Stage[] = [];
    try {
      stages = JSON.parse(stagesStr);
    } catch (e) {
      console.error('Invalid stages JSON');
    }

    // Clear previous content
    this.root.innerHTML = '';

    // Create tracker container
    const container = this.createElement('div', ['ux4g-application-tracker']);

    // Header with application ID
    const header = this.createElement('div', ['ux4g-tracker-header']);
    const idLabel = this.createElement('div', ['ux4g-tracker-id']);
    idLabel.innerHTML = `<strong>Application ID:</strong> ${applicationId}`;
    header.appendChild(idLabel);
    container.appendChild(header);

    // Stages
    const stagesContainer = this.createElement('div', ['ux4g-tracker-stages']);

    stages.forEach((stage, index) => {
      const stageElement = this.createElement('div', [
        'ux4g-tracker-stage',
        `ux4g-tracker-stage-${stage.status}`,
      ]);

      stageElement.setAttribute('data-stage-id', stage.id);

      // Stage indicator
      const indicator = this.createElement('div', ['ux4g-tracker-indicator']);
      
      if (stage.status === 'complete') {
        indicator.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>';
      } else if (stage.status === 'rejected') {
        indicator.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>';
      } else if (stage.status === 'current') {
        indicator.innerHTML = `<div class="ux4g-tracker-pulse"></div>`;
      } else {
        indicator.textContent = String(index + 1);
      }

      stageElement.appendChild(indicator);

      // Stage content
      const content = this.createElement('div', ['ux4g-tracker-content']);
      
      const label = this.createElement('div', ['ux4g-tracker-label']);
      label.textContent = stage.label;
      content.appendChild(label);

      if (stage.description) {
        const description = this.createElement('div', ['ux4g-tracker-description']);
        description.textContent = stage.description;
        content.appendChild(description);
      }

      if (stage.date) {
        const date = this.createElement('div', ['ux4g-tracker-date']);
        date.textContent = stage.date;
        content.appendChild(date);
      }

      stageElement.appendChild(content);

      // Connector line (not for last stage)
      if (index < stages.length - 1) {
        const connector = this.createElement('div', [
          'ux4g-tracker-connector',
          stage.status === 'complete' ? 'ux4g-tracker-connector-complete' : '',
        ].filter(Boolean));
        stageElement.appendChild(connector);
      }

      stageElement.addEventListener('click', () => {
        this.dispatchCustomEvent('ux4g-stage-click', { stageId: stage.id });
      });

      stagesContainer.appendChild(stageElement);
    });

    container.appendChild(stagesContainer);
    this.root.appendChild(container);
  }

  /**
   * Set application ID
   */
  set applicationId(value: string) {
    this.setAttribute('application-id', value);
  }

  get applicationId(): string {
    return this.getAttribute('application-id') || '';
  }
}

// Define the custom element
if (!customElements.get('ux4g-application-tracker')) {
  customElements.define('ux4g-application-tracker', UX4GApplicationTracker);
}
