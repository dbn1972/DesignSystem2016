/**
 * UX4G Stepper Web Component
 * 
 * @element ux4g-stepper
 * 
 * @attr {number} current - Current active step (0-based index)
 * @attr {string} direction - Stepper direction: horizontal, vertical
 * @attr {string} status - Current step status: wait, process, finish, error
 * 
 * @fires ux4g-step-change - Fired when step changes
 * 
 * @example
 * ```html
 * <ux4g-stepper current="1" direction="horizontal">
 *   <ux4g-step title="Personal Info" description="Enter your details"></ux4g-step>
 *   <ux4g-step title="Address" description="Enter your address"></ux4g-step>
 *   <ux4g-step title="Review" description="Review and submit"></ux4g-step>
 * </ux4g-stepper>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GStepper extends UX4GElement {
  static get observedAttributes() {
    return ['current', 'direction', 'status'];
  }

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
    this.initializeSteps();
  }

  protected render(): void {
    const direction = this.getAttributeOrDefault('direction', 'horizontal');

    // Clear previous content
    this.root.innerHTML = '';

    // Create stepper container
    const stepper = this.createElement('div', [
      'ux4g-stepper',
      `ux4g-stepper-${direction}`,
    ]);

    const slot = document.createElement('slot');
    stepper.appendChild(slot);

    this.root.appendChild(stepper);
  }

  private initializeSteps(): void {
    const steps = Array.from(this.querySelectorAll('ux4g-step'));
    const current = parseInt(this.getAttribute('current') || '0');

    steps.forEach((step, index) => {
      const status = index < current ? 'finish' : index === current ? 'process' : 'wait';
      step.setAttribute('status', status);
      step.setAttribute('index', String(index));
    });
  }

  /**
   * Go to next step
   */
  next(): void {
    const current = parseInt(this.getAttribute('current') || '0');
    const steps = this.querySelectorAll('ux4g-step');
    
    if (current < steps.length - 1) {
      this.setAttribute('current', String(current + 1));
      this.initializeSteps();
      this.dispatchCustomEvent('ux4g-step-change', { current: current + 1 });
    }
  }

  /**
   * Go to previous step
   */
  prev(): void {
    const current = parseInt(this.getAttribute('current') || '0');
    
    if (current > 0) {
      this.setAttribute('current', String(current - 1));
      this.initializeSteps();
      this.dispatchCustomEvent('ux4g-step-change', { current: current - 1 });
    }
  }

  /**
   * Set current step
   */
  set current(value: number) {
    this.setAttribute('current', String(value));
    this.initializeSteps();
  }

  get current(): number {
    return parseInt(this.getAttribute('current') || '0');
  }
}

// Step Component
export class UX4GStep extends UX4GElement {
  static get observedAttributes() {
    return ['title', 'description', 'status', 'index'];
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
    const title = this.getAttribute('title') || '';
    const description = this.getAttribute('description');
    const status = this.getAttributeOrDefault('status', 'wait');
    const index = parseInt(this.getAttribute('index') || '0');

    // Clear previous content
    this.root.innerHTML = '';

    // Create step
    const step = this.createElement('div', [
      'ux4g-step',
      `ux4g-step-${status}`,
    ]);

    // Step icon/number
    const icon = this.createElement('div', ['ux4g-step-icon']);
    if (status === 'finish') {
      icon.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>';
    } else if (status === 'error') {
      icon.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>';
    } else {
      icon.textContent = String(index + 1);
    }
    step.appendChild(icon);

    // Step content
    const content = this.createElement('div', ['ux4g-step-content']);
    
    const titleElement = this.createElement('div', ['ux4g-step-title']);
    titleElement.textContent = title;
    content.appendChild(titleElement);

    if (description) {
      const descElement = this.createElement('div', ['ux4g-step-description']);
      descElement.textContent = description;
      content.appendChild(descElement);
    }

    step.appendChild(content);

    this.root.appendChild(step);
  }
}

// Define the custom elements
if (!customElements.get('ux4g-stepper')) {
  customElements.define('ux4g-stepper', UX4GStepper);
}

if (!customElements.get('ux4g-step')) {
  customElements.define('ux4g-step', UX4GStep);
}
