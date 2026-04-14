/**
 * UX4G Address Form Service — Web Component
 * @element ux4g-address-form-service
 * @fires ux4g-step-complete ux4g-form-save ux4g-navigate
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS, ADDRESS_FIELDS, validateForm } from './service-contract';

const STATES = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Delhi'];

export class UX4GAddressFormService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'back-path', 'next-path']; }
  private _data: Record<string, string> = {};
  private _errors: Record<string, string> = {};
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }
  private get backPath() { return this.getAttribute('back-path') || '/form/personal'; }
  private get nextPath() { return this.getAttribute('next-path') || '/form/additional'; }

  protected render(): void {
    const stateOpts = STATES.map(s => `<option value="${s}" ${this._data.state === s ? 'selected' : ''}>${s}</option>`).join('');
    const e = this._errors;
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; }
        .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .field { margin-bottom: 1.25rem; }
        .label { display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.375rem; }
        .req { color: #dc2626; }
        .input { display: block; width: 100%; padding: 0.625rem 0.75rem; font-size: 0.875rem; border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; box-sizing: border-box; }
        .input:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
        .input--error { border-color: #dc2626; }
        .error-text { font-size: 0.75rem; color: #dc2626; margin-top: 0.25rem; }
        .actions { display: flex; justify-content: space-between; margin-top: 1.5rem; gap: 0.75rem; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer; }
        .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; border: none; }
        .btn--outline { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
        @media (max-width: 640px) { .row { grid-template-columns: 1fr; } }
      </style>
      <ux4g-service-header icon="🏠" icon-color="#2563eb" category="${this.serviceName}" heading="Step 2 of 3: Address Details"></ux4g-service-header>
      <div class="main">
        <form id="addr-form" novalidate class="card">
          <div class="field"><label class="label">Address Line 1 <span class="req">*</span></label><input class="input ${e.addressLine1 ? 'input--error' : ''}" data-f="addressLine1" value="${this._data.addressLine1 || ''}" />${e.addressLine1 ? `<div class="error-text">${e.addressLine1}</div>` : ''}</div>
          <div class="field"><label class="label">Address Line 2</label><input class="input" data-f="addressLine2" value="${this._data.addressLine2 || ''}" /></div>
          <div class="row">
            <div class="field"><label class="label">City <span class="req">*</span></label><input class="input ${e.city ? 'input--error' : ''}" data-f="city" value="${this._data.city || ''}" /></div>
            <div class="field"><label class="label">District <span class="req">*</span></label><input class="input ${e.district ? 'input--error' : ''}" data-f="district" value="${this._data.district || ''}" /></div>
          </div>
          <div class="row">
            <div class="field"><label class="label">State <span class="req">*</span></label><select class="input ${e.state ? 'input--error' : ''}" data-f="state"><option value="" disabled selected>Select</option>${stateOpts}</select></div>
            <div class="field"><label class="label">PIN Code <span class="req">*</span></label><input class="input ${e.pincode ? 'input--error' : ''}" data-f="pincode" inputmode="numeric" maxlength="6" value="${this._data.pincode || ''}" />${e.pincode ? `<div class="error-text">${e.pincode}</div>` : ''}</div>
          </div>
          <div class="actions"><a href="${this.backPath}" class="btn btn--outline" id="back">← Back</a><button type="submit" class="btn btn--primary">Save and Continue →</button></div>
        </form>
      </div>
      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Address Details"></ux4g-service-footer>
    `;
    this.root.querySelectorAll('[data-f]').forEach(el => { el.addEventListener('input', () => { this._data[(el as HTMLElement).dataset.f!] = (el as HTMLInputElement).value; }); el.addEventListener('change', () => { this._data[(el as HTMLElement).dataset.f!] = (el as HTMLInputElement | HTMLSelectElement).value; }); });
    this.root.querySelector('#addr-form')?.addEventListener('submit', (e) => { e.preventDefault(); this._errors = validateForm(ADDRESS_FIELDS, this._data); if (Object.keys(this._errors).length) { this.render(); return; } this.dispatchCustomEvent(SERVICE_EVENTS.stepComplete, { data: { ...this._data } }); });
    this.root.querySelector('#back')?.addEventListener('click', (e) => { e.preventDefault(); this.dispatchCustomEvent(SERVICE_EVENTS.navigate, { path: this.backPath }); });
  }
}

if (!customElements.get('ux4g-address-form-service')) customElements.define('ux4g-address-form-service', UX4GAddressFormService);
