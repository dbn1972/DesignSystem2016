/**
 * UX4G Progress Web Component
 * 
 * @element ux4g-progress
 * 
 * @attr {number} value - Current progress value (0-100)
 * @attr {string} variant - Progress variant: primary, success, warning, danger
 * @attr {string} size - Progress size: sm, md, lg
 * @attr {boolean} striped - Display striped pattern
 * @attr {boolean} animated - Animate striped pattern
 * @attr {boolean} show-label - Show percentage label
 * 
 * @example
 * ```html
 * <ux4g-progress value="75" variant="success" show-label></ux4g-progress>
 * <ux4g-progress value="50" striped animated></ux4g-progress>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GProgress extends UX4GElement {
  static get observedAttributes() {
    return ['value', 'variant', 'size', 'striped', 'animated', 'show-label'];
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
    const value = Math.min(100, Math.max(0, parseFloat(this.getAttribute('value') || '0')));
    const variant = this.getAttributeOrDefault('variant', 'primary');
    const size = this.getAttributeOrDefault('size', 'md');
    const striped = this.getBooleanAttribute('striped');
    const animated = this.getBooleanAttribute('animated');
    const showLabel = this.getBooleanAttribute('show-label');

    // Clear previous content
    this.root.innerHTML = '';

    // Create progress container
    const container = this.createElement('div', ['ux4g-progress-container']);

    // Create progress bar background
    const progressBar = this.createElement('div', [
      'ux4g-progress',
      `ux4g-progress-${size}`,
    ]);

    progressBar.setAttribute('role', 'progressbar');
    progressBar.setAttribute('aria-valuemin', '0');
    progressBar.setAttribute('aria-valuemax', '100');
    progressBar.setAttribute('aria-valuenow', value.toString());

    // Create progress fill
    const progressFill = this.createElement('div', [
      'ux4g-progress-fill',
      `ux4g-progress-fill-${variant}`,
      striped ? 'ux4g-progress-striped' : '',
      animated ? 'ux4g-progress-animated' : '',
    ].filter(Boolean));

    progressFill.style.width = `${value}%`;

    // Add label if requested
    if (showLabel) {
      const label = this.createElement('span', ['ux4g-progress-label']);
      label.textContent = `${Math.round(value)}%`;
      progressFill.appendChild(label);
    }

    progressBar.appendChild(progressFill);
    container.appendChild(progressBar);

    this.root.appendChild(container);
  }

  /**
   * Set progress value
   */
  set value(val: number) {
    this.setAttribute('value', val.toString());
  }

  get value(): number {
    return parseFloat(this.getAttribute('value') || '0');
  }

  /**
   * Set variant
   */
  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get variant(): string {
    return this.getAttributeOrDefault('variant', 'primary');
  }
}

// Define the custom element
if (!customElements.get('ux4g-progress')) {
  customElements.define('ux4g-progress', UX4GProgress);
}
