/**
 * UX4G Additional Form Service — Web Component
 * @element ux4g-additional-form-service
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS, ADDITIONAL_FIELDS, validateForm } from './service-contract';

export class UX4GAdditionalFormService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'back-path', 'next-path']; }
  private _data: Record<string, string> = { purpose: '', urgency: 'normal', remarks: '' };
  private _errors: Record<string, string> = {};
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get backPath() { return this.getAttribute('back-path') || '/form/address'; }

  protected render(): void {
    const d = this._data; const e = this._errors;
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; }
        .field { margin-bottom: 1.25rem; }
        .label { display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.375rem; }
        .req { color: #dc2626; }
        .input, .textarea { display: block; width: 100%; padding: 0.625rem 0.75rem; font-size: 0.875rem; border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; box-sizing: border-box; font-family: inherit; }
        .input:focus, .textarea:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
        .textarea { min-height: 80px; resize: vertical; }
        .radio-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .radio { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; cursor: pointer; }
        .error-text { font-size: 0.75rem; color: #dc2626; margin-top: 0.25rem; }
        .actions { display: flex; justify-content: space-between; margin-top: 1.5rem; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer; }
        .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; border: none; }
        .btn--outline { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
      </style>
      <ux4g-service-header icon="📋" icon-color="#ea580c" category="${this.serviceName}" heading="Step 3 of 3: Additional Information"></ux4g-service-header>
      <div class="main"><form id="add-form" novalidate class="card">
        <div class="field"><label class="label">Purpose <span class="req">*</span></label><select class="input" data-f="purpose"><option value="" disabled ${!d.purpose ? 'selected' : ''}>Select purpose</option><option value="birth" ${d.purpose === 'birth' ? 'selected' : ''}>Birth Certificate</option><option value="death" ${d.purpose === 'death' ? 'selected' : ''}>Death Certificate</option><option value="income" ${d.purpose === 'income' ? 'selected' : ''}>Income Certificate</option><option value="caste" ${d.purpose === 'caste' ? 'selected' : ''}>Caste Certificate</option><option value="domicile" ${d.purpose === 'domicile' ? 'selected' : ''}>Domicile Certificate</option></select>${e.purpose ? `<div class="error-text">${e.purpose}</div>` : ''}</div>
        <div class="field"><label class="label">Processing Type <span class="req">*</span></label><div class="radio-group"><label class="radio"><input type="radio" name="urgency" value="normal" ${d.urgency === 'normal' ? 'checked' : ''} data-f="urgency" /> Normal (7–10 days)</label><label class="radio"><input type="radio" name="urgency" value="tatkal" ${d.urgency === 'tatkal' ? 'checked' : ''} data-f="urgency" /> Tatkal / Urgent (2–3 days)</label></div></div>
        <div class="field"><label class="label">Additional Remarks</label><textarea class="textarea" data-f="remarks" rows="3" placeholder="Any additional information…">${d.remarks}</textarea></div>
        <div class="actions"><a href="${this.backPath}" class="btn btn--outline" id="back">← Back</a><button type="submit" class="btn btn--primary">Save and Continue →</button></div>
      </form></div>
      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Additional Information"></ux4g-service-footer>
    `;
    this.root.querySelectorAll('[data-f]').forEach(el => { const handler = () => { this._data[(el as HTMLElement).dataset.f!] = (el as HTMLInputElement).value; }; el.addEventListener('input', handler); el.addEventListener('change', handler); });
    this.root.querySelector('#add-form')?.addEventListener('submit', (e) => { e.preventDefault(); this._errors = validateForm(ADDITIONAL_FIELDS, this._data); if (Object.keys(this._errors).length) { this.render(); return; } this.dispatchCustomEvent(SERVICE_EVENTS.stepComplete, { data: { ...this._data } }); });
    this.root.querySelector('#back')?.addEventListener('click', (e) => { e.preventDefault(); this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.backPath }); });
  }
}

if (!customElements.get('ux4g-additional-form-service')) customElements.define('ux4g-additional-form-service', UX4GAdditionalFormService);
