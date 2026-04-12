/**
 * UX4G Timeline Web Component
 * 
 * @element ux4g-timeline
 * 
 * @attr {string} mode - Timeline mode: left, right, alternate
 * @attr {boolean} pending - Show pending/loading state at end
 * 
 * @example
 * ```html
 * <ux4g-timeline mode="left">
 *   <ux4g-timeline-item color="green" label="2024-01-15">
 *     Application submitted
 *   </ux4g-timeline-item>
 *   <ux4g-timeline-item color="blue" label="2024-01-20">
 *     Under review
 *   </ux4g-timeline-item>
 * </ux4g-timeline>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GTimeline extends UX4GElement {
  static get observedAttributes() {
    return ['mode', 'pending'];
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
    const mode = this.getAttributeOrDefault('mode', 'left');
    const pending = this.getBooleanAttribute('pending');

    // Clear previous content
    this.root.innerHTML = '';

    // Create timeline container
    const timeline = this.createElement('div', [
      'ux4g-timeline',
      `ux4g-timeline-${mode}`,
    ]);

    // Slot for timeline items
    const slot = document.createElement('slot');
    timeline.appendChild(slot);

    // Pending item if enabled
    if (pending) {
      const pendingItem = this.createElement('div', ['ux4g-timeline-item', 'ux4g-timeline-pending']);
      pendingItem.innerHTML = `
        <div class="ux4g-timeline-marker ux4g-timeline-marker-pending">
          <div class="ux4g-spinner ux4g-spinner-sm"></div>
        </div>
        <div class="ux4g-timeline-content">
          <div class="ux4g-timeline-label">Pending...</div>
        </div>
      `;
      timeline.appendChild(pendingItem);
    }

    this.root.appendChild(timeline);
  }

  /**
   * Set mode
   */
  set mode(value: string) {
    this.setAttribute('mode', value);
  }

  get mode(): string {
    return this.getAttributeOrDefault('mode', 'left');
  }
}

// Timeline Item Component
export class UX4GTimelineItem extends UX4GElement {
  static get observedAttributes() {
    return ['color', 'label', 'icon'];
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
    const color = this.getAttributeOrDefault('color', 'blue');
    const label = this.getAttribute('label');

    // Clear previous content
    this.root.innerHTML = '';

    // Create timeline item
    const item = this.createElement('div', ['ux4g-timeline-item']);

    // Marker (dot)
    const marker = this.createElement('div', [
      'ux4g-timeline-marker',
      `ux4g-timeline-marker-${color}`,
    ]);
    item.appendChild(marker);

    // Content
    const content = this.createElement('div', ['ux4g-timeline-content']);

    if (label) {
      const labelElement = this.createElement('div', ['ux4g-timeline-label']);
      labelElement.textContent = label;
      content.appendChild(labelElement);
    }

    const body = this.createElement('div', ['ux4g-timeline-body']);
    const slot = document.createElement('slot');
    body.appendChild(slot);
    content.appendChild(body);

    item.appendChild(content);

    this.root.appendChild(item);
  }

  /**
   * Set color
   */
  set color(value: string) {
    this.setAttribute('color', value);
  }

  get color(): string {
    return this.getAttributeOrDefault('color', 'blue');
  }
}

// Define the custom elements
if (!customElements.get('ux4g-timeline')) {
  customElements.define('ux4g-timeline', UX4GTimeline);
}

if (!customElements.get('ux4g-timeline-item')) {
  customElements.define('ux4g-timeline-item', UX4GTimelineItem);
}
