/**
 * UX4G Dialog Web Component
 * 
 * @element ux4g-dialog
 * 
 * @attr {boolean} open - Whether dialog is open
 * @attr {string} type - Dialog type: default, alert, confirm
 * @attr {string} title - Dialog title
 * @attr {string} confirm-text - Text for confirm button
 * @attr {string} cancel-text - Text for cancel button
 * 
 * @slot - Default slot for dialog content
 * 
 * @fires ux4g-dialog-confirm - Fired when confirm button is clicked
 * @fires ux4g-dialog-cancel - Fired when cancel button is clicked
 * @fires ux4g-dialog-close - Fired when dialog closes
 * 
 * @example
 * ```html
 * <ux4g-dialog open type="confirm" title="Delete Item" confirm-text="Delete" cancel-text="Cancel">
 *   <p>Are you sure you want to delete this item?</p>
 * </ux4g-dialog>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GDialog extends UX4GElement {
  static get observedAttributes() {
    return ['open', 'type', 'title', 'confirm-text', 'cancel-text'];
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
    const type = this.getAttributeOrDefault('type', 'default');
    const title = this.getAttribute('title');
    const confirmText = this.getAttributeOrDefault('confirm-text', 'Confirm');
    const cancelText = this.getAttributeOrDefault('cancel-text', 'Cancel');

    // Clear previous content
    this.root.innerHTML = '';

    // Create overlay
    const overlay = this.createElement('div', [
      'ux4g-dialog-overlay',
      isOpen ? 'ux4g-dialog-overlay-open' : '',
    ].filter(Boolean));

    // Create dialog
    const dialog = this.createElement('div', [
      'ux4g-dialog',
      `ux4g-dialog-${type}`,
    ]);

    dialog.setAttribute('role', 'alertdialog');
    dialog.setAttribute('aria-modal', 'true');
    if (title) {
      dialog.setAttribute('aria-labelledby', 'dialog-title');
    }

    // Header
    if (title) {
      const header = this.createElement('div', ['ux4g-dialog-header']);
      const titleElement = this.createElement('h2', ['ux4g-dialog-title']);
      titleElement.id = 'dialog-title';
      titleElement.textContent = title;
      header.appendChild(titleElement);
      dialog.appendChild(header);
    }

    // Body
    const body = this.createElement('div', ['ux4g-dialog-body']);
    const slot = document.createElement('slot');
    body.appendChild(slot);
    dialog.appendChild(body);

    // Footer with actions
    const footer = this.createElement('div', ['ux4g-dialog-footer']);
    
    if (type === 'confirm' || type === 'alert') {
      const cancelButton = this.createElement('button', [
        'ux4g-button',
        'ux4g-button-outline',
      ]);
      cancelButton.textContent = cancelText;
      cancelButton.setAttribute('type', 'button');
      cancelButton.addEventListener('click', () => this.handleCancel());
      footer.appendChild(cancelButton);
    }

    const confirmButton = this.createElement('button', [
      'ux4g-button',
      'ux4g-button-primary',
    ]);
    confirmButton.textContent = confirmText;
    confirmButton.setAttribute('type', 'button');
    confirmButton.addEventListener('click', () => this.handleConfirm());
    footer.appendChild(confirmButton);

    dialog.appendChild(footer);
    overlay.appendChild(dialog);

    this.root.appendChild(overlay);

    // Manage body scroll
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  private handleConfirm(): void {
    this.dispatchCustomEvent('ux4g-dialog-confirm');
    this.close();
  }

  private handleCancel(): void {
    this.dispatchCustomEvent('ux4g-dialog-cancel');
    this.close();
  }

  /**
   * Open the dialog
   */
  open(): void {
    this.setBooleanAttribute('open', true);
  }

  /**
   * Close the dialog
   */
  close(): void {
    this.setBooleanAttribute('open', false);
    this.dispatchCustomEvent('ux4g-dialog-close');
  }
}

// Define the custom element
if (!customElements.get('ux4g-dialog')) {
  customElements.define('ux4g-dialog', UX4GDialog);
}
