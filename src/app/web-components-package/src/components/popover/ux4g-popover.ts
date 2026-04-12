/**
 * UX4G Popover Web Component
 * 
 * @element ux4g-popover
 * 
 * @attr {boolean} open - Whether popover is open
 * @attr {string} placement - Popover placement: top, bottom, left, right, top-start, top-end, etc.
 * @attr {string} trigger - Trigger type: click, hover, focus
 * @attr {string} title - Popover title
 * 
 * @slot trigger - Content that triggers the popover
 * @slot - Default slot for popover content
 * 
 * @fires ux4g-popover-open - Fired when popover opens
 * @fires ux4g-popover-close - Fired when popover closes
 * 
 * @example
 * ```html
 * <ux4g-popover placement="top" title="Help">
 *   <button slot="trigger">Help</button>
 *   <p>This is helpful information about the feature.</p>
 * </ux4g-popover>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GPopover extends UX4GElement {
  static get observedAttributes() {
    return ['open', 'placement', 'trigger', 'title'];
  }

  private _clickOutsideHandler: ((e: MouseEvent) => void) | null = null;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
    this.attachEventListeners();
  }

  disconnectedCallback(): void {
    this.removeEventListeners();
  }

  protected render(): void {
    const isOpen = this.getBooleanAttribute('open');
    const placement = this.getAttributeOrDefault('placement', 'top');
    const trigger = this.getAttributeOrDefault('trigger', 'click');
    const title = this.getAttribute('title');

    // Clear previous content
    this.root.innerHTML = '';

    // Create popover container
    const popover = this.createElement('div', ['ux4g-popover-wrapper']);

    // Trigger slot
    const triggerSlot = document.createElement('slot');
    triggerSlot.name = 'trigger';
    
    const triggerWrapper = this.createElement('div', ['ux4g-popover-trigger']);
    triggerWrapper.appendChild(triggerSlot);

    if (trigger === 'click') {
      triggerWrapper.addEventListener('click', () => this.toggle());
    } else if (trigger === 'hover') {
      triggerWrapper.addEventListener('mouseenter', () => this.open());
      popover.addEventListener('mouseleave', () => this.close());
    } else if (trigger === 'focus') {
      triggerWrapper.addEventListener('focus', () => this.open(), true);
      triggerWrapper.addEventListener('blur', () => this.close(), true);
    }

    popover.appendChild(triggerWrapper);

    // Popover content
    const content = this.createElement('div', [
      'ux4g-popover',
      `ux4g-popover-${placement}`,
      isOpen ? 'ux4g-popover-open' : '',
    ].filter(Boolean));

    content.setAttribute('role', 'tooltip');
    content.hidden = !isOpen;

    // Arrow
    const arrow = this.createElement('div', ['ux4g-popover-arrow']);
    content.appendChild(arrow);

    // Title
    if (title) {
      const titleElement = this.createElement('div', ['ux4g-popover-title']);
      titleElement.textContent = title;
      content.appendChild(titleElement);
    }

    // Body
    const body = this.createElement('div', ['ux4g-popover-body']);
    const bodySlot = document.createElement('slot');
    body.appendChild(bodySlot);
    content.appendChild(body);

    popover.appendChild(content);

    this.root.appendChild(popover);
  }

  private attachEventListeners(): void {
    this._clickOutsideHandler = (e: MouseEvent) => {
      if (this.getBooleanAttribute('open') && !this.contains(e.target as Node)) {
        this.close();
      }
    };
    
    document.addEventListener('click', this._clickOutsideHandler);
  }

  private removeEventListeners(): void {
    if (this._clickOutsideHandler) {
      document.removeEventListener('click', this._clickOutsideHandler);
    }
  }

  /**
   * Open the popover
   */
  open(): void {
    this.setBooleanAttribute('open', true);
    this.dispatchCustomEvent('ux4g-popover-open');
  }

  /**
   * Close the popover
   */
  close(): void {
    this.setBooleanAttribute('open', false);
    this.dispatchCustomEvent('ux4g-popover-close');
  }

  /**
   * Toggle the popover
   */
  toggle(): void {
    if (this.getBooleanAttribute('open')) {
      this.close();
    } else {
      this.open();
    }
  }
}

// Define the custom element
if (!customElements.get('ux4g-popover')) {
  customElements.define('ux4g-popover', UX4GPopover);
}
