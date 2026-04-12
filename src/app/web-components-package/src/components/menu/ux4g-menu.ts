/**
 * UX4G Menu Web Component
 * 
 * @element ux4g-menu
 * 
 * @attr {string} mode - Menu mode: vertical, horizontal, inline
 * @attr {boolean} collapsible - Enable collapsing in vertical mode
 * 
 * @example
 * ```html
 * <ux4g-menu mode="vertical">
 *   <ux4g-menu-item href="/home">Home</ux4g-menu-item>
 *   <ux4g-menu-item href="/services">Services</ux4g-menu-item>
 *   <ux4g-menu-item href="/about">About</ux4g-menu-item>
 * </ux4g-menu>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GMenu extends UX4GElement {
  static get observedAttributes() {
    return ['mode', 'collapsible'];
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
    const mode = this.getAttributeOrDefault('mode', 'vertical');
    const collapsible = this.getBooleanAttribute('collapsible');

    // Clear previous content
    this.root.innerHTML = '';

    // Create menu
    const menu = this.createElement('nav', [
      'ux4g-menu',
      `ux4g-menu-${mode}`,
      collapsible ? 'ux4g-menu-collapsible' : '',
    ].filter(Boolean));

    menu.setAttribute('role', 'navigation');

    const list = this.createElement('ul', ['ux4g-menu-list']);
    list.setAttribute('role', 'menubar');

    const slot = document.createElement('slot');
    list.appendChild(slot);

    menu.appendChild(list);
    this.root.appendChild(menu);
  }

  /**
   * Set mode
   */
  set mode(value: string) {
    this.setAttribute('mode', value);
  }

  get mode(): string {
    return this.getAttributeOrDefault('mode', 'vertical');
  }
}

// Menu Item Component
export class UX4GMenuItem extends UX4GElement {
  static get observedAttributes() {
    return ['href', 'active', 'disabled', 'icon'];
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
    const href = this.getAttribute('href');
    const active = this.getBooleanAttribute('active');
    const disabled = this.getBooleanAttribute('disabled');

    // Clear previous content
    this.root.innerHTML = '';

    // Create list item
    const item = this.createElement('li', [
      'ux4g-menu-item',
      active ? 'ux4g-menu-item-active' : '',
      disabled ? 'ux4g-menu-item-disabled' : '',
    ].filter(Boolean));

    item.setAttribute('role', 'none');

    if (href && !disabled) {
      // Create link
      const link = this.createElement('a', ['ux4g-menu-link']);
      link.setAttribute('href', href);
      link.setAttribute('role', 'menuitem');
      
      if (active) {
        link.setAttribute('aria-current', 'page');
      }

      const slot = document.createElement('slot');
      link.appendChild(slot);

      link.addEventListener('click', (e) => {
        this.dispatchCustomEvent('ux4g-menu-item-click', {
          href,
          originalEvent: e,
        });
      });

      item.appendChild(link);
    } else {
      // Create button/span
      const button = this.createElement('button', ['ux4g-menu-button']);
      button.setAttribute('role', 'menuitem');
      button.setAttribute('type', 'button');
      button.disabled = disabled;

      const slot = document.createElement('slot');
      button.appendChild(slot);

      item.appendChild(button);
    }

    this.root.appendChild(item);
  }

  /**
   * Set active state
   */
  set active(value: boolean) {
    this.setBooleanAttribute('active', value);
  }

  get active(): boolean {
    return this.getBooleanAttribute('active');
  }
}

// Define the custom elements
if (!customElements.get('ux4g-menu')) {
  customElements.define('ux4g-menu', UX4GMenu);
}

if (!customElements.get('ux4g-menu-item')) {
  customElements.define('ux4g-menu-item', UX4GMenuItem);
}
