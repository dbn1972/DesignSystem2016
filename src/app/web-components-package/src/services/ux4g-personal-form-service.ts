/**
 * UX4G Personal Form Service — Web Component
 *
 * Uses shared PERSONAL_FIELDS from service-contract for field definitions.
 *
 * @element ux4g-personal-form-service
 * @attr {string} service-name
 * @attr {string} back-path
 * @attr {string} next-path
 *
 * @fires ux4g-form-save - Fired when draft is saved with { data }
 * @fires ux4g-step-complete - Fired when form is valid and user continues with { data }
 * @fires ux4g-navigate - Fired on back navigation with { path }
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS, PERSONAL_FIELDS, validateForm, type FieldDef } from './service-contract';

export class UX4GPersonalFormService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'back-path', 'next-path']; }

  private _data: Record<string, string> = {};
  private _errors: Record<string, string> = {};
  private _draftSaved = false;

  constructor() { super({ useShadowDOM: true }); }

  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get backPath() { return this.getAttribute('back-path') || '/start'; }
  private get nextPath() { return this.getAttribute('next-path') || '/form/address'; }

  private _renderField(f: FieldDef): string {
    const val = this._data[f.name] || '';
    const err = this._errors[f.name] || '';
    const errClass = err ? 'input--error' : '';
    const req = f.required ? '<span class="req">*</span>' : '';

    if (f.type === 'select') {
      const opts = (f.options || []).map(o => `<option value="${o.value}" ${val === o.value ? 'selected' : ''}>${o.label}</option>`).join('');
      return `<div class="field"><label class="label" for="pf-${f.name}">${f.label} ${req}</label><select id="pf-${f.name}" class="input ${errClass}" data-field="${f.name}"><option value="" disabled ${!val ? 'selected' : ''}>Select</option>${opts}</select>${err ? `<div class="error-text" role="alert">${err}</div>` : ''}</div>`;
    }

    return `<div class="field"><label class="label" for="pf-${f.name}">${f.label} ${req}</label><input id="pf-${f.name}" class="input ${errClass}" type="${f.type === 'tel' ? 'tel' : f.type === 'date' ? 'date' : f.type === 'email' ? 'email' : 'text'}" value="${val}" placeholder="${f.placeholder || ''}" ${f.maxLength ? `maxlength="${f.maxLength}"` : ''} ${f.type === 'tel' ? 'inputmode="numeric"' : ''} data-field="${f.name}" />${err ? `<div class="error-text" role="alert">${err}</div>` : ''}</div>`;
  }

  protected render(): void {
    // Group fields into rows of 2 where sensible
    const fields = PERSONAL_FIELDS;
    const rows: FieldDef[][] = [];
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].name === 'fullName' || fields[i].name === 'aadhaarNumber') {
        rows.push([fields[i]]);
      } else if (i + 1 < fields.length && fields[i + 1].name !== 'aadhaarNumber') {
        rows.push([fields[i], fields[i + 1]]);
        i++;
      } else {
        rows.push([fields[i]]);
      }
    }

    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; }
        .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .field { margin-bottom: 1.25rem; }
        .label { display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.375rem; }
        .req { color: #dc2626; }
        .input { display: block; width: 100%; padding: 0.625rem 0.75rem; font-size: 0.875rem; border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; box-sizing: border-box; background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-default, #0f172a); }
        .input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
        .input--error { border-color: #dc2626; }
        .error-text { font-size: 0.75rem; color: #dc2626; margin-top: 0.25rem; }
        .toast { background: #dcfce7; border-bottom: 2px solid #16a34a; padding: 0.5rem; text-align: center; font-size: 0.875rem; color: #166534; }
        .actions { display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; gap: 0.75rem; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer; }
        .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; border: none; }
        .btn--outline { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
        @media (max-width: 640px) { .row { grid-template-columns: 1fr; } .actions { flex-direction: column; } }
      </style>

      <ux4g-service-header icon="👤" icon-color="#9333ea" category="${this.serviceName}" heading="Step 1 of 3: Personal Information">
        <button type="button" class="btn btn--outline" id="save-draft" slot="actions">💾 Save Draft</button>
      </ux4g-service-header>

      ${this._draftSaved ? '<div class="toast" role="status">✅ Draft saved successfully.</div>' : ''}

      <div class="main">
        <form id="personal-form" novalidate class="card">
          ${rows.map(row => row.length === 2 ? `<div class="row">${row.map(f => this._renderField(f)).join('')}</div>` : this._renderField(row[0])).join('')}
        </form>

        <div class="actions">
          <a href="${this.backPath}" class="btn btn--outline" id="back-btn">← Back</a>
          <button type="button" class="btn btn--primary" id="continue-btn">Save and Continue →</button>
        </div>
      </div>

      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Personal Information"></ux4g-service-footer>
    `;

    this._attachListeners();
  }

  private _attachListeners(): void {
    // Collect all inputs/selects
    this.root.querySelectorAll('[data-field]').forEach(el => {
      el.addEventListener('input', () => {
        this._data[(el as HTMLElement).dataset.field!] = (el as HTMLInputElement).value;
        this._errors[(el as HTMLElement).dataset.field!] = '';
      });
      el.addEventListener('change', () => {
        this._data[(el as HTMLElement).dataset.field!] = (el as HTMLInputElement | HTMLSelectElement).value;
      });
    });

    this.root.querySelector('#save-draft')?.addEventListener('click', () => {
      this._draftSaved = true;
      this.dispatchCustomEvent(SERVICE_EVENTS.formSave, { data: { ...this._data } });
      this.render();
      setTimeout(() => { this._draftSaved = false; this.render(); }, 2500);
    });

    this.root.querySelector('#continue-btn')?.addEventListener('click', () => {
      this._errors = validateForm(PERSONAL_FIELDS, this._data);
      if (Object.keys(this._errors).length > 0) {
        this.render();
        return;
      }
      this.dispatchCustomEvent(SERVICE_EVENTS.stepComplete, { data: { ...this._data } });
    });

    this.root.querySelector('#back-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.backPath });
    });
  }
}

if (!customElements.get('ux4g-personal-form-service')) {
  customElements.define('ux4g-personal-form-service', UX4GPersonalFormService);
}
