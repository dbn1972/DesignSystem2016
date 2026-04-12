/**
 * UX4G Modal Web Component
 * 
 * @element ux4g-modal
 * 
 * @attr {boolean} open - Whether modal is open
 * @attr {string} size - Modal size: sm, md, lg, xl, full
 * @attr {boolean} close-on-overlay - Close modal when clicking overlay
 * @attr {boolean} close-on-esc - Close modal when pressing Escape key
 * @attr {string} title - Modal title
 * 
 * @slot - Default slot for modal content
 * @slot header - Custom header content
 * @slot footer - Footer content (actions)
 * 
 * @fires ux4g-modal-open - Fired when modal opens
 * @fires ux4g-modal-close - Fired when modal closes
 * 
 * @example
 * ```html
 * <ux4g-modal open title="Confirm Action" size="md">
 *   <p>Are you sure you want to proceed?</p>
 *   <div slot="footer">
 *     <ux4g-button variant="outline">Cancel</ux4g-button>
 *     <ux4g-button variant="primary">Confirm</ux4g-button>
 *   </div>
 * </ux4g-modal>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GModal extends UX4GElement {
  static get observedAttributes() {
    return ['open', 'size', 'close-on-overlay', 'close-on-esc', 'title'];
  }

  private _previousActiveElement: Element | null = null;

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
    const size = this.getAttributeOrDefault('size', 'md');
    const title = this.getAttribute('title');

    // Clear previous content
    this.root.innerHTML = '';

    // Create modal overlay
    const overlay = this.createElement('div', [
      'ux4g-modal-overlay',
      isOpen ? 'ux4g-modal-overlay-open' : '',
    ].filter(Boolean));

    overlay.setAttribute('aria-hidden', String(!isOpen));

    if (isOpen) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay && this.getBooleanAttribute('close-on-overlay')) {
          this.close();
        }
      });
    }

    // Create modal dialog
    const dialog = this.createElement('div', [
      'ux4g-modal-dialog',
      `ux4g-modal-${size}`,
    ]);

    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');
    if (title) {
      dialog.setAttribute('aria-labelledby', 'modal-title');
    }

    // Header
    const header = this.createElement('div', ['ux4g-modal-header']);
    
    const headerSlot = document.createElement('slot');
    headerSlot.name = 'header';
    
    if (title) {
      const titleElement = this.createElement('h2', ['ux4g-modal-title']);
      titleElement.id = 'modal-title';
      titleElement.textContent = title;
      header.appendChild(titleElement);
    }
    
    header.appendChild(headerSlot);

    // Close button
    const closeButton = this.createElement('button', ['ux4g-modal-close']);
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('aria-label', 'Close modal');
    closeButton.innerHTML = '×';
    closeButton.addEventListener('click', () => this.close());
    header.appendChild(closeButton);

    // Body
    const body = this.createElement('div', ['ux4g-modal-body']);
    const bodySlot = document.createElement('slot');
    body.appendChild(bodySlot);

    // Footer
    const footer = this.createElement('div', ['ux4g-modal-footer']);
    const footerSlot = document.createElement('slot');
    footerSlot.name = 'footer';
    footer.appendChild(footerSlot);

    dialog.appendChild(header);
    dialog.appendChild(body);
    dialog.appendChild(footer);
    overlay.appendChild(dialog);

    this.root.appendChild(overlay);

    // Manage focus and body scroll
    if (isOpen) {
      this.trapFocus();
      this.disableBodyScroll();
    } else {
      this.enableBodyScroll();
    }
  }

  private attachEventListeners(): void {
    this._handleKeyDown = this._handleKeyDown.bind(this);
    document.addEventListener('keydown', this._handleKeyDown);
  }

  private removeEventListeners(): void {
    document.removeEventListener('keydown', this._handleKeyDown);
  }

  private _handleKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && this.getBooleanAttribute('open') && this.getBooleanAttribute('close-on-esc')) {
      this.close();
    }
  }

  private trapFocus(): void {
    this._previousActiveElement = document.activeElement;
    
    // Focus the first focusable element in the modal
    setTimeout(() => {
      const focusableElements = this.root.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0] as HTMLElement;
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }, 100);
  }

  private disableBodyScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private enableBodyScroll(): void {
    document.body.style.overflow = '';
    
    // Restore focus to previous element
    if (this._previousActiveElement && this._previousActiveElement instanceof HTMLElement) {
      this._previousActiveElement.focus();
    }
  }

  /**
   * Open the modal
   */
  open(): void {
    this.setBooleanAttribute('open', true);
    this.dispatchCustomEvent('ux4g-modal-open');
  }

  /**
   * Close the modal
   */
  close(): void {
    this.setBooleanAttribute('open', false);
    this.dispatchCustomEvent('ux4g-modal-close');
  }

  /**
   * Toggle the modal
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
if (!customElements.get('ux4g-modal')) {
  customElements.define('ux4g-modal', UX4GModal);
}
