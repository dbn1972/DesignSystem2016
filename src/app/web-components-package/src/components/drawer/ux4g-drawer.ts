/**
 * UX4G Drawer Web Component
 * 
 * @element ux4g-drawer
 * 
 * @attr {boolean} open - Whether drawer is open
 * @attr {string} position - Drawer position: left, right, top, bottom
 * @attr {string} size - Drawer size: sm, md, lg, full
 * @attr {boolean} close-on-overlay - Close drawer when clicking overlay
 * @attr {string} title - Drawer title
 * 
 * @slot - Default slot for drawer content
 * @slot header - Custom header content
 * @slot footer - Footer content
 * 
 * @fires ux4g-drawer-open - Fired when drawer opens
 * @fires ux4g-drawer-close - Fired when drawer closes
 * 
 * @example
 * ```html
 * <ux4g-drawer open position="right" title="Settings">
 *   <p>Drawer content goes here</p>
 * </ux4g-drawer>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GDrawer extends UX4GElement {
  static get observedAttributes() {
    return ['open', 'position', 'size', 'close-on-overlay', 'title'];
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
    const isOpen = this.getBooleanAttribute('open');
    const position = this.getAttributeOrDefault('position', 'right');
    const size = this.getAttributeOrDefault('size', 'md');
    const title = this.getAttribute('title');

    // Clear previous content
    this.root.innerHTML = '';

    // Create drawer overlay
    const overlay = this.createElement('div', [
      'ux4g-drawer-overlay',
      isOpen ? 'ux4g-drawer-overlay-open' : '',
    ].filter(Boolean));

    overlay.setAttribute('aria-hidden', String(!isOpen));

    if (isOpen) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay && this.getBooleanAttribute('close-on-overlay')) {
          this.close();
        }
      });
    }

    // Create drawer panel
    const drawer = this.createElement('div', [
      'ux4g-drawer',
      `ux4g-drawer-${position}`,
      `ux4g-drawer-${size}`,
      isOpen ? 'ux4g-drawer-open' : '',
    ].filter(Boolean));

    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    if (title) {
      drawer.setAttribute('aria-labelledby', 'drawer-title');
    }

    // Header
    const header = this.createElement('div', ['ux4g-drawer-header']);
    
    if (title) {
      const titleElement = this.createElement('h2', ['ux4g-drawer-title']);
      titleElement.id = 'drawer-title';
      titleElement.textContent = title;
      header.appendChild(titleElement);
    }

    const headerSlot = document.createElement('slot');
    headerSlot.name = 'header';
    header.appendChild(headerSlot);

    // Close button
    const closeButton = this.createElement('button', ['ux4g-drawer-close']);
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('aria-label', 'Close drawer');
    closeButton.innerHTML = '×';
    closeButton.addEventListener('click', () => this.close());
    header.appendChild(closeButton);

    // Body
    const body = this.createElement('div', ['ux4g-drawer-body']);
    const bodySlot = document.createElement('slot');
    body.appendChild(bodySlot);

    // Footer
    const footer = this.createElement('div', ['ux4g-drawer-footer']);
    const footerSlot = document.createElement('slot');
    footerSlot.name = 'footer';
    footer.appendChild(footerSlot);

    drawer.appendChild(header);
    drawer.appendChild(body);
    drawer.appendChild(footer);
    overlay.appendChild(drawer);

    this.root.appendChild(overlay);

    // Manage body scroll
    if (isOpen) {
      this.disableBodyScroll();
    } else {
      this.enableBodyScroll();
    }
  }

  private disableBodyScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private enableBodyScroll(): void {
    document.body.style.overflow = '';
  }

  /**
   * Open the drawer
   */
  open(): void {
    this.setBooleanAttribute('open', true);
    this.dispatchCustomEvent('ux4g-drawer-open');
  }

  /**
   * Close the drawer
   */
  close(): void {
    this.setBooleanAttribute('open', false);
    this.dispatchCustomEvent('ux4g-drawer-close');
  }

  /**
   * Toggle the drawer
   */
  toggle(): void {
    if (this.getBooleanAttribute('open')) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Set position
   */
  set position(value: string) {
    this.setAttribute('position', value);
  }

  get position(): string {
    return this.getAttributeOrDefault('position', 'right');
  }
}

// Define the custom element
if (!customElements.get('ux4g-drawer')) {
  customElements.define('ux4g-drawer', UX4GDrawer);
}
