/**
 * UX4G Accordion Web Component
 * 
 * @element ux4g-accordion
 * 
 * @attr {boolean} allow-multiple - Allow multiple panels to be open simultaneously
 * 
 * @fires ux4g-accordion-change - Fired when accordion state changes
 * 
 * @example
 * ```html
 * <ux4g-accordion>
 *   <ux4g-accordion-item title="Section 1" open>
 *     <p>Content for section 1</p>
 *   </ux4g-accordion-item>
 *   <ux4g-accordion-item title="Section 2">
 *     <p>Content for section 2</p>
 *   </ux4g-accordion-item>
 * </ux4g-accordion>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GAccordion extends UX4GElement {
  static get observedAttributes() {
    return ['allow-multiple'];
  }

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
    this.initializeItems();
  }

  protected render(): void {
    // Clear previous content
    this.root.innerHTML = '';

    // Create accordion container
    const container = this.createElement('div', ['ux4g-accordion']);
    container.setAttribute('role', 'presentation');

    // Add slot for accordion items
    const slot = document.createElement('slot');
    container.appendChild(slot);

    this.root.appendChild(container);
  }

  private initializeItems(): void {
    const items = Array.from(this.querySelectorAll('ux4g-accordion-item'));
    
    items.forEach((item) => {
      item.addEventListener('ux4g-accordion-item-toggle', ((e: CustomEvent) => {
        const allowMultiple = this.getBooleanAttribute('allow-multiple');
        
        if (!allowMultiple && e.detail.open) {
          // Close other items
          items.forEach((otherItem) => {
            if (otherItem !== item && otherItem.hasAttribute('open')) {
              otherItem.removeAttribute('open');
            }
          });
        }

        this.dispatchCustomEvent('ux4g-accordion-change', {
          item: item.getAttribute('title'),
          open: e.detail.open,
        });
      }) as EventListener);
    });
  }

  /**
   * Set allow-multiple
   */
  set allowMultiple(value: boolean) {
    this.setBooleanAttribute('allow-multiple', value);
  }

  get allowMultiple(): boolean {
    return this.getBooleanAttribute('allow-multiple');
  }
}

// Accordion Item Component
export class UX4GAccordionItem extends UX4GElement {
  static get observedAttributes() {
    return ['title', 'open'];
  }

  private _button: HTMLButtonElement | null = null;
  private _content: HTMLElement | null = null;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const title = this.getAttributeOrDefault('title', 'Accordion Item');
    const isOpen = this.getBooleanAttribute('open');

    // Clear previous content
    this.root.innerHTML = '';

    // Create accordion item container
    const item = this.createElement('div', ['ux4g-accordion-item']);

    // Create header with button
    const header = this.createElement('div', ['ux4g-accordion-header']);
    
    this._button = this.createElement('button', [
      'ux4g-accordion-button',
      isOpen ? 'ux4g-accordion-button-open' : '',
    ].filter(Boolean));
    
    this._button.textContent = title;
    this._button.setAttribute('aria-expanded', String(isOpen));
    this._button.setAttribute('type', 'button');

    // Add icon
    const icon = this.createElement('span', ['ux4g-accordion-icon']);
    icon.textContent = isOpen ? '−' : '+';
    this._button.appendChild(icon);

    this._button.addEventListener('click', () => {
      this.toggle();
    });

    header.appendChild(this._button);

    // Create content panel
    this._content = this.createElement('div', [
      'ux4g-accordion-content',
      isOpen ? 'ux4g-accordion-content-open' : '',
    ].filter(Boolean));
    
    this._content.setAttribute('role', 'region');
    this._content.hidden = !isOpen;

    const contentInner = this.createElement('div', ['ux4g-accordion-content-inner']);
    const slot = document.createElement('slot');
    contentInner.appendChild(slot);
    this._content.appendChild(contentInner);

    item.appendChild(header);
    item.appendChild(this._content);

    this.root.appendChild(item);
  }

  /**
   * Toggle accordion item
   */
  toggle(): void {
    const isOpen = this.getBooleanAttribute('open');
    this.setBooleanAttribute('open', !isOpen);
    
    this.dispatchCustomEvent('ux4g-accordion-item-toggle', {
      open: !isOpen,
    });
  }

  /**
   * Open accordion item
   */
  open(): void {
    this.setBooleanAttribute('open', true);
    this.dispatchCustomEvent('ux4g-accordion-item-toggle', { open: true });
  }

  /**
   * Close accordion item
   */
  close(): void {
    this.setBooleanAttribute('open', false);
    this.dispatchCustomEvent('ux4g-accordion-item-toggle', { open: false });
  }
}

// Define the custom elements
if (!customElements.get('ux4g-accordion')) {
  customElements.define('ux4g-accordion', UX4GAccordion);
}

if (!customElements.get('ux4g-accordion-item')) {
  customElements.define('ux4g-accordion-item', UX4GAccordionItem);
}
