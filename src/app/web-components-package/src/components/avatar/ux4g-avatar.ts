/**
 * UX4G Avatar Web Component
 * 
 * @element ux4g-avatar
 * 
 * @attr {string} src - Image source URL
 * @attr {string} alt - Alt text for image
 * @attr {string} size - Avatar size: xs, sm, md, lg, xl
 * @attr {string} shape - Avatar shape: circle, square, rounded
 * @attr {string} name - User name for fallback initials
 * @attr {string} bg-color - Background color for initials
 * 
 * @example
 * ```html
 * <ux4g-avatar src="/user.jpg" alt="John Doe" size="md"></ux4g-avatar>
 * <ux4g-avatar name="John Doe" size="lg" shape="circle"></ux4g-avatar>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GAvatar extends UX4GElement {
  static get observedAttributes() {
    return ['src', 'alt', 'size', 'shape', 'name', 'bg-color'];
  }

  private _img: HTMLImageElement | null = null;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const src = this.getAttribute('src');
    const alt = this.getAttributeOrDefault('alt', 'Avatar');
    const size = this.getAttributeOrDefault('size', 'md');
    const shape = this.getAttributeOrDefault('shape', 'circle');
    const name = this.getAttribute('name');
    const bgColor = this.getAttribute('bg-color') || this.generateColorFromName(name || '');

    // Clear previous content
    this.root.innerHTML = '';

    // Create avatar container
    const avatar = this.createElement('div', [
      'ux4g-avatar',
      `ux4g-avatar-${size}`,
      `ux4g-avatar-${shape}`,
    ]);

    if (src) {
      // Display image
      this._img = this.createElement('img', ['ux4g-avatar-img']);
      this._img.src = src;
      this._img.alt = alt;
      
      // Handle image load error
      this._img.addEventListener('error', () => {
        this.renderFallback(avatar, name, bgColor, size);
      });

      avatar.appendChild(this._img);
    } else if (name) {
      // Display initials
      this.renderFallback(avatar, name, bgColor, size);
    } else {
      // Display default icon
      const icon = this.createElement('span', ['ux4g-avatar-icon']);
      icon.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor" class="ux4g-avatar-svg">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      `;
      avatar.appendChild(icon);
    }

    this.root.appendChild(avatar);
  }

  private renderFallback(container: HTMLElement, name: string | null, bgColor: string, size: string): void {
    // Clear container
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const initials = this.getInitials(name || '');
    
    const initialsElement = this.createElement('span', [
      'ux4g-avatar-initials',
      `ux4g-avatar-initials-${size}`,
    ]);
    
    initialsElement.textContent = initials;
    initialsElement.style.backgroundColor = bgColor;
    
    container.appendChild(initialsElement);
  }

  private getInitials(name: string): string {
    if (!name) return '?';
    
    const parts = name.trim().split(/\s+/);
    
    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    }
    
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  private generateColorFromName(name: string): string {
    // Generate a consistent color based on name
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
      '#6C5CE7', '#A29BFE', '#FD79A8', '#FDCB6E', '#6C5B7B',
    ];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    const index = Math.abs(hash) % colors.length;
    return colors[index];
  }

  /**
   * Set src
   */
  set src(value: string) {
    this.setAttribute('src', value);
  }

  get src(): string {
    return this.getAttribute('src') || '';
  }

  /**
   * Set name
   */
  set name(value: string) {
    this.setAttribute('name', value);
  }

  get name(): string {
    return this.getAttribute('name') || '';
  }

  /**
   * Set size
   */
  set size(value: string) {
    this.setAttribute('size', value);
  }

  get size(): string {
    return this.getAttributeOrDefault('size', 'md');
  }
}

// Define the custom element
if (!customElements.get('ux4g-avatar')) {
  customElements.define('ux4g-avatar', UX4GAvatar);
}
