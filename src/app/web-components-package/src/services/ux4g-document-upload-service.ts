/**
 * UX4G Document Upload Service — Web Component
 *
 * Handles document upload for service applications.
 *
 * @element ux4g-document-upload-service
 * @attr {string} service-name - Service name displayed in header/footer
 * @attr {string} back-path - Path to go back
 * @attr {string} next-path - Path to proceed
 *
 * @fires ux4g-step-complete - Fired when all required documents are uploaded
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS } from './service-contract';

interface DocRequirement {
  id: string;
  label: string;
  required: boolean;
  accept: string;
  maxSizeMB: number;
}

interface UploadedFile {
  name: string;
  size: string;
}

const DOC_REQUIREMENTS: DocRequirement[] = [
  { id: 'aadhaar', label: 'Aadhaar Card', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSizeMB: 2 },
  { id: 'photo', label: 'Passport Size Photo', required: true, accept: '.jpg,.jpeg,.png', maxSizeMB: 1 },
  { id: 'address-proof', label: 'Address Proof', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSizeMB: 2 },
  { id: 'supporting', label: 'Supporting Document', required: false, accept: '.pdf,.jpg,.jpeg,.png,.doc,.docx', maxSizeMB: 5 },
];

export class UX4GDocumentUploadService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'back-path', 'next-path']; }

  private _uploads: Record<string, UploadedFile | null> = {};
  private _uploading: Record<string, boolean> = {};

  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get backPath() { return this.getAttribute('back-path') || '/form/review'; }
  private get nextPath() { return this.getAttribute('next-path') || '/review-summary'; }

  private get allRequiredUploaded(): boolean {
    return DOC_REQUIREMENTS.filter(d => d.required).every(d => !!this._uploads[d.id]);
  }

  private _formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  private _renderDocItem(doc: DocRequirement): string {
    const uploaded = this._uploads[doc.id];
    const uploading = this._uploading[doc.id];

    if (uploading) {
      return `
        <div class="doc-item">
          <div class="doc-item__header">
            <span class="doc-item__label">${doc.label}${doc.required ? ' <span class="req">*</span>' : ''}</span>
          </div>
          <div class="doc-item__uploading">
            <span class="spinner" aria-hidden="true"></span>
            <span>Uploading…</span>
          </div>
        </div>`;
    }

    if (uploaded) {
      return `
        <div class="doc-item doc-item--uploaded">
          <div class="doc-item__header">
            <span class="doc-item__label">${doc.label}${doc.required ? ' <span class="req">*</span>' : ''}</span>
            <span class="doc-item__check" aria-hidden="true">✓</span>
          </div>
          <div class="doc-item__file">
            <span class="doc-item__filename">📄 ${uploaded.name}</span>
            <span class="doc-item__size">${uploaded.size}</span>
            <button type="button" class="doc-item__remove" data-doc="${doc.id}" aria-label="Remove ${doc.label}">✕</button>
          </div>
        </div>`;
    }

    return `
      <div class="doc-item">
        <div class="doc-item__header">
          <span class="doc-item__label">${doc.label}${doc.required ? ' <span class="req">*</span>' : ''}</span>
        </div>
        <div class="doc-item__upload">
          <label class="upload-area" for="file-${doc.id}">
            <span class="upload-area__icon" aria-hidden="true">📤</span>
            <span class="upload-area__text">Click to upload</span>
            <span class="upload-area__hint">Accepted: ${doc.accept} • Max: ${doc.maxSizeMB} MB</span>
          </label>
          <input type="file" id="file-${doc.id}" class="sr-only" accept="${doc.accept}" data-doc="${doc.id}" />
        </div>
      </div>`;
  }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, -apple-system, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; }
        .card__title { font-size: 1.125rem; font-weight: 700; margin: 0 0 1rem; }
        .doc-item { border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem; }
        .doc-item--uploaded { border-color: #16a34a; background: #f0fdf4; }
        .doc-item__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; }
        .doc-item__label { font-size: 0.875rem; font-weight: 600; }
        .doc-item__check { color: #16a34a; font-weight: 700; }
        .req { color: #dc2626; }
        .doc-item__file { display: flex; align-items: center; gap: 0.75rem; font-size: 0.875rem; }
        .doc-item__filename { font-weight: 500; }
        .doc-item__size { color: var(--ux4g-color-text-muted, #64748b); }
        .doc-item__remove { background: none; border: none; color: #dc2626; cursor: pointer; font-size: 1rem; padding: 0.25rem; }
        .doc-item__uploading { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--ux4g-color-interactive-default, #000080); }
        .upload-area { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; padding: 1rem; border: 2px dashed var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; cursor: pointer; text-align: center; }
        .upload-area:hover { border-color: var(--ux4g-color-interactive-default, #000080); background: #f8fafc; }
        .upload-area__icon { font-size: 1.5rem; }
        .upload-area__text { font-size: 0.875rem; font-weight: 600; color: var(--ux4g-color-interactive-default, #000080); }
        .upload-area__hint { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); }
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
        .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid transparent; border-top-color: currentColor; border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .actions { display: flex; justify-content: space-between; margin-top: 1.5rem; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: 2px solid transparent; cursor: pointer; }
        .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; border: none; }
        .btn--primary:hover { opacity: 0.9; }
        .btn--primary:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn--outline { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
      </style>

      <ux4g-service-header icon="📎" icon-color="#7c3aed" category="${this.serviceName}" heading="Upload Documents"></ux4g-service-header>

      <div class="main">
        <div class="card">
          <h2 class="card__title">Required Documents</h2>
          ${DOC_REQUIREMENTS.map(d => this._renderDocItem(d)).join('')}
        </div>

        <div class="actions">
          <a href="${this.backPath}" class="btn btn--outline" id="back-btn">← Back</a>
          <button type="button" class="btn btn--primary" id="continue-btn" ${!this.allRequiredUploaded ? 'disabled' : ''}>Continue →</button>
        </div>
      </div>

      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Document Upload"></ux4g-service-footer>
    `;

    this._attachListeners();
  }

  private _attachListeners(): void {
    DOC_REQUIREMENTS.forEach(doc => {
      const input = this.root.querySelector(`#file-${doc.id}`) as HTMLInputElement;
      input?.addEventListener('change', () => {
        const file = input.files?.[0];
        if (!file) return;
        this._uploading[doc.id] = true;
        this.render();
        setTimeout(() => {
          this._uploading[doc.id] = false;
          this._uploads[doc.id] = { name: file.name, size: this._formatSize(file.size) };
          this.render();
          if (this.allRequiredUploaded) {
            this.dispatchCustomEvent(SERVICE_EVENTS.stepComplete, { step: 'document-upload' });
          }
        }, 1200);
      });

      const removeBtn = this.root.querySelector(`.doc-item__remove[data-doc="${doc.id}"]`) as HTMLButtonElement;
      removeBtn?.addEventListener('click', () => {
        this._uploads[doc.id] = null;
        this.render();
      });
    });

    this.root.querySelector('#back-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.backPath });
    });

    this.root.querySelector('#continue-btn')?.addEventListener('click', () => {
      if (this.allRequiredUploaded) {
        this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.nextPath });
      }
    });
  }
}

if (!customElements.get('ux4g-document-upload-service')) {
  customElements.define('ux4g-document-upload-service', UX4GDocumentUploadService);
}
