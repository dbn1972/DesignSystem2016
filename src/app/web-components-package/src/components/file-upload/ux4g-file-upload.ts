/**
 * UX4G File Upload Web Component
 * 
 * @element ux4g-file-upload
 * 
 * @attr {string} name - Form field name
 * @attr {boolean} multiple - Allow multiple file selection
 * @attr {string} accept - Accepted file types (e.g., "image/*,.pdf")
 * @attr {number} max-size - Maximum file size in bytes
 * @attr {boolean} disabled - Whether upload is disabled
 * @attr {boolean} drag-drop - Enable drag and drop
 * 
 * @fires ux4g-file-select - Fired when files are selected
 * @fires ux4g-file-remove - Fired when file is removed
 * 
 * @example
 * ```html
 * <ux4g-file-upload 
 *   name="documents" 
 *   multiple 
 *   accept=".pdf,.doc,.docx"
 *   drag-drop>
 * </ux4g-file-upload>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GFileUpload extends UX4GElement {
  static get observedAttributes() {
    return ['name', 'multiple', 'accept', 'max-size', 'disabled', 'drag-drop'];
  }

  private _input: HTMLInputElement | null = null;
  private _files: File[] = [];

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const multiple = this.getBooleanAttribute('multiple');
    const accept = this.getAttribute('accept') || '';
    const disabled = this.getBooleanAttribute('disabled');
    const dragDrop = this.getBooleanAttribute('drag-drop');

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', ['ux4g-file-upload']);

    // Create upload area
    const uploadArea = this.createElement('div', [
      'ux4g-file-upload-area',
      dragDrop ? 'ux4g-file-upload-drag-drop' : '',
      disabled ? 'ux4g-file-upload-disabled' : '',
    ].filter(Boolean));

    // Hidden file input
    this._input = this.createElement('input', ['ux4g-file-upload-input']);
    this._input.type = 'file';
    this._input.multiple = multiple;
    this._input.accept = accept;
    this._input.disabled = disabled;

    if (this.hasAttribute('name')) {
      this._input.name = this.getAttribute('name')!;
    }

    this._input.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files) {
        this.handleFiles(Array.from(target.files));
      }
    });

    uploadArea.appendChild(this._input);

    // Upload prompt
    const prompt = this.createElement('div', ['ux4g-file-upload-prompt']);
    prompt.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <div class="ux4g-file-upload-text">
        <span class="ux4g-file-upload-primary">Click to upload</span>
        ${dragDrop ? '<span class="ux4g-file-upload-secondary">or drag and drop</span>' : ''}
      </div>
    `;

    prompt.addEventListener('click', () => {
      if (!disabled) {
        this._input?.click();
      }
    });

    uploadArea.appendChild(prompt);

    // Drag and drop handlers
    if (dragDrop && !disabled) {
      uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('ux4g-file-upload-dragging');
      });

      uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('ux4g-file-upload-dragging');
      });

      uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('ux4g-file-upload-dragging');
        
        if (e.dataTransfer?.files) {
          this.handleFiles(Array.from(e.dataTransfer.files));
        }
      });
    }

    container.appendChild(uploadArea);

    // File list
    if (this._files.length > 0) {
      const fileList = this.createElement('div', ['ux4g-file-upload-list']);
      
      this._files.forEach((file, index) => {
        const fileItem = this.createElement('div', ['ux4g-file-upload-item']);
        
        const fileName = this.createElement('span', ['ux4g-file-upload-filename']);
        fileName.textContent = file.name;
        fileItem.appendChild(fileName);

        const fileSize = this.createElement('span', ['ux4g-file-upload-filesize']);
        fileSize.textContent = this.formatFileSize(file.size);
        fileItem.appendChild(fileSize);

        const removeButton = this.createElement('button', ['ux4g-file-upload-remove']);
        removeButton.textContent = '×';
        removeButton.setAttribute('type', 'button');
        removeButton.addEventListener('click', () => this.removeFile(index));
        fileItem.appendChild(removeButton);

        fileList.appendChild(fileItem);
      });

      container.appendChild(fileList);
    }

    this.root.appendChild(container);
  }

  private handleFiles(files: File[]): void {
    const maxSize = parseInt(this.getAttribute('max-size') || '0');
    const multiple = this.getBooleanAttribute('multiple');

    // Filter by max size if specified
    const validFiles = maxSize > 0 
      ? files.filter(f => f.size <= maxSize)
      : files;

    if (multiple) {
      this._files.push(...validFiles);
    } else {
      this._files = validFiles.slice(0, 1);
    }

    this.dispatchCustomEvent('ux4g-file-select', { files: this._files });
    this.render();
  }

  private removeFile(index: number): void {
    const removedFile = this._files.splice(index, 1)[0];
    this.dispatchCustomEvent('ux4g-file-remove', { file: removedFile });
    this.render();
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }

  /**
   * Get selected files
   */
  get files(): File[] {
    return this._files;
  }

  /**
   * Clear all files
   */
  clear(): void {
    this._files = [];
    if (this._input) {
      this._input.value = '';
    }
    this.render();
  }
}

// Define the custom element
if (!customElements.get('ux4g-file-upload')) {
  customElements.define('ux4g-file-upload', UX4GFileUpload);
}
