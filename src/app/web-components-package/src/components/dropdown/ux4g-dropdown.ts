/**
 * UX4G Dropdown Web Component
 * 
 * @element ux4g-dropdown
 * 
 * @attr {boolean} open - Whether dropdown is open
 * @attr {string} placement - Dropdown placement: bottom-start, bottom-end, top-start, top-end
 * @attr {string} trigger - Trigger type: click, hover
 * 
 * @slot trigger - Content that triggers the dropdown
 * @slot - Default slot for dropdown content
 * 
 * @fires ux4g-dropdown-open - Fired when dropdown opens
 * @fires ux4g-dropdown-close - Fired when dropdown closes
 * 
 * @example
 * ```html
 * <ux4g-dropdown placement="bottom-start">
 *   <button slot="trigger">Menu</button>
 *   <ux4g-dropdown-item>Option 1</ux4g-dropdown-item>
 *   <ux4g-dropdown-item>Option 2</ux4g-dropdown-item>
 * </ux4g-dropdown>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GDropdown extends UX4GElement {
  static get observedAttributes() {
    return ['open', 'placement', 'trigger'];
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
    const placement = this.getAttributeOrDefault('placement', 'bottom-start');
    const trigger = this.getAttributeOrDefault('trigger', 'click');

    // Clear previous content
    this.root.innerHTML = '';

    // Create dropdown container
    const dropdown = this.createElement('div', ['ux4g-dropdown']);

    // Trigger slot
    const triggerSlot = document.createElement('slot');
    triggerSlot.name = 'trigger';
    
    const triggerWrapper = this.createElement('div', ['ux4g-dropdown-trigger']);
    triggerWrapper.appendChild(triggerSlot);

    if (trigger === 'click') {
      triggerWrapper.addEventListener('click', () => this.toggle());
    } else if (trigger === 'hover') {
      triggerWrapper.addEventListener('mouseenter', () => this.open());
      dropdown.addEventListener('mouseleave', () => this.close());
    }

    dropdown.appendChild(triggerWrapper);

    // Dropdown menu
    const menu = this.createElement('div', [
      'ux4g-dropdown-menu',
      `ux4g-dropdown-${placement}`,
      isOpen ? 'ux4g-dropdown-open' : '',
    ].filter(Boolean));

    menu.setAttribute('role', 'menu');
    menu.hidden = !isOpen;

    const menuSlot = document.createElement('slot');
    menu.appendChild(menuSlot);

    dropdown.appendChild(menu);

    this.root.appendChild(dropdown);
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
   * Open the dropdown
   */
  open(): void {
    this.setBooleanAttribute('open', true);
    this.dispatchCustomEvent('ux4g-dropdown-open');
  }

  /**
   * Close the dropdown
   */
  close(): void {
    this.setBooleanAttribute('open', false);
    this.dispatchCustomEvent('ux4g-dropdown-close');
  }

  /**
   * Toggle the dropdown
   */
  toggle(): void {
    if (this.getBooleanAttribute('open')) {
      this.close();
    } else {
      this.open();
    }
  }
}

// Dropdown Item Component
export class UX4GDropdownItem extends UX4GElement {
  static get observedAttributes() {
    return ['disabled', 'active'];
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
    const disabled = this.getBooleanAttribute('disabled');
    const active = this.getBooleanAttribute('active');

    // Clear previous content
    this.root.innerHTML = '';

    // Create item button
    const item = this.createElement('button', [
      'ux4g-dropdown-item',
      disabled ? 'ux4g-dropdown-item-disabled' : '',
      active ? 'ux4g-dropdown-item-active' : '',
    ].filter(Boolean));

    item.setAttribute('role', 'menuitem');
    item.setAttribute('type', 'button');
    item.disabled = disabled;

    const slot = document.createElement('slot');
    item.appendChild(slot);

    item.addEventListener('click', () => {
      if (!disabled) {
        this.dispatchCustomEvent('ux4g-dropdown-item-click');
      }
    });

    this.root.appendChild(item);
  }

  /**
   * Set disabled state
   */
  set disabled(value: boolean) {
    this.setBooleanAttribute('disabled', value);
  }

  get disabled(): boolean {
    return this.getBooleanAttribute('disabled');
  }
}

// Define the custom elements
if (!customElements.get('ux4g-dropdown')) {
  customElements.define('ux4g-dropdown', UX4GDropdown);
}

if (!customElements.get('ux4g-dropdown-item')) {
  customElements.define('ux4g-dropdown-item', UX4GDropdownItem);
}
