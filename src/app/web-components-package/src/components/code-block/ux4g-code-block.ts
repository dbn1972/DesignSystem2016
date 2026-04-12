/**
 * UX4G Code Block Web Component
 * 
 * @element ux4g-code-block
 * 
 * @attr {string} language - Programming language for syntax (e.g., javascript, html, css)
 * @attr {boolean} line-numbers - Show line numbers
 * @attr {boolean} copyable - Show copy button
 * @attr {string} theme - Color theme: light, dark
 * @attr {string} title - Code block title
 * 
 * @slot - Default slot for code content
 * 
 * @fires ux4g-code-copy - Fired when code is copied
 * 
 * @example
 * ```html
 * <ux4g-code-block language="javascript" line-numbers copyable title="Example Code">
 *   const greeting = "Hello, World!";
 *   console.log(greeting);
 * </ux4g-code-block>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GCodeBlock extends UX4GElement {
  static get observedAttributes() {
    return ['language', 'line-numbers', 'copyable', 'theme', 'title'];
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
    const language = this.getAttributeOrDefault('language', 'plaintext');
    const lineNumbers = this.getBooleanAttribute('line-numbers');
    const copyable = this.getBooleanAttribute('copyable');
    const theme = this.getAttributeOrDefault('theme', 'dark');
    const title = this.getAttribute('title');

    // Clear previous content
    this.root.innerHTML = '';

    // Create code block container
    const container = this.createElement('div', [
      'ux4g-code-block',
      `ux4g-code-block-${theme}`,
    ]);

    // Header with title and copy button
    if (title || copyable) {
      const header = this.createElement('div', ['ux4g-code-block-header']);

      if (title) {
        const titleElement = this.createElement('div', ['ux4g-code-block-title']);
        titleElement.textContent = title;
        header.appendChild(titleElement);
      }

      if (copyable) {
        const copyButton = this.createElement('button', ['ux4g-code-block-copy']);
        copyButton.setAttribute('type', 'button');
        copyButton.setAttribute('aria-label', 'Copy code');
        copyButton.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        `;
        
        copyButton.addEventListener('click', () => this.copyCode());
        header.appendChild(copyButton);
      }

      container.appendChild(header);
    }

    // Code content
    const pre = this.createElement('pre', [
      'ux4g-code-block-pre',
      lineNumbers ? 'ux4g-code-block-line-numbers' : '',
    ].filter(Boolean));

    const code = this.createElement('code', [
      'ux4g-code-block-code',
      `language-${language}`,
    ]);

    const slot = document.createElement('slot');
    code.appendChild(slot);
    pre.appendChild(code);

    container.appendChild(pre);

    this.root.appendChild(container);
  }

  private async copyCode(): Promise<void> {
    const codeContent = this.textContent || '';
    
    try {
      await navigator.clipboard.writeText(codeContent.trim());
      this.dispatchCustomEvent('ux4g-code-copy', { code: codeContent.trim() });
      
      // Visual feedback
      const copyButton = this.root.querySelector('.ux4g-code-block-copy');
      if (copyButton) {
        copyButton.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        `;
        
        setTimeout(() => {
          copyButton.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          `;
        }, 2000);
      }
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }

  /**
   * Set language
   */
  set language(value: string) {
    this.setAttribute('language', value);
  }

  get language(): string {
    return this.getAttributeOrDefault('language', 'plaintext');
  }
}

// Define the custom element
if (!customElements.get('ux4g-code-block')) {
  customElements.define('ux4g-code-block', UX4GCodeBlock);
}
