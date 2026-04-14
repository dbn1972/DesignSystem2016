/**
 * UX4G Eligibility Check Service — Web Component
 *
 * @element ux4g-eligibility-service
 * @attr {string} service-name
 * @attr {string} sign-in-path
 *
 * @fires ux4g-step-complete - Fired when user is eligible with { eligible, fees }
 */
import { UX4GElement } from '../base/UX4GElement';
import { SERVICE_EVENTS, VALIDATION } from './service-contract';

const STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
  'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab',
  'Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh',
  'Uttarakhand','West Bengal','Delhi',
];

export class UX4GEligibilityService extends UX4GElement {
  static get observedAttributes() { return ['service-name', 'sign-in-path']; }

  private _age = '';
  private _nationality = 'Indian';
  private _state = '';
  private _purpose = '';
  private _loading = false;
  private _result: { eligible: boolean; reason: string; requirements: string[]; fees: number } | null = null;

  constructor() { super({ useShadowDOM: true }); }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  private get serviceName() { return this.getAttribute('service-name') || 'Government Service Platform'; }

  protected render(): void {
    const stateOptions = STATES.map(s => `<option value="${s}">${s}</option>`).join('');

    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .card { max-width: 720px; margin: 2rem auto; padding: 2rem; background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; }
        .card__title { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.25rem; text-align: center; }
        .card__sub { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0 0 1.5rem; text-align: center; }
        .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
        .field { margin-bottom: 1rem; }
        .label { display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.375rem; }
        .input, .select { display: block; width: 100%; padding: 0.625rem 0.75rem; font-size: 0.875rem; border: 1px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; box-sizing: border-box; background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-default, #0f172a); }
        .input:focus, .select:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
        .btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border: none; border-radius: 0.5rem; cursor: pointer; background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid transparent; border-top-color: currentColor; border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .result { margin-top: 1.5rem; padding: 1rem; border-radius: 0.5rem; font-size: 0.875rem; }
        .result--ok { background: #f0fdf4; border: 2px solid #16a34a; color: #166534; }
        .result--no { background: #fef2f2; border: 2px solid #dc2626; color: #991b1b; }
        .result strong { display: block; margin-bottom: 0.25rem; }
        .result ul { margin: 0.5rem 0 0; padding-left: 1.25rem; }
        @media (max-width: 640px) { .row { grid-template-columns: 1fr; } .card { margin: 1rem; padding: 1.25rem; } }
      </style>

      <ux4g-service-header icon="✅" icon-color="#16a34a" category="${this.serviceName}" heading="Eligibility Check"></ux4g-service-header>

      <div class="card">
        <h2 class="card__title">Check Your Eligibility</h2>
        <p class="card__sub">Verify your eligibility before applying</p>

        <form id="elig-form" novalidate>
          <div class="row">
            <div class="field">
              <label class="label" for="el-age">Age</label>
              <input id="el-age" class="input" type="number" min="1" max="120" placeholder="Your age" value="${this._age}" />
            </div>
            <div class="field">
              <label class="label" for="el-nat">Nationality</label>
              <select id="el-nat" class="select"><option value="Indian">Indian</option><option value="NRI">NRI</option><option value="Other">Other</option></select>
            </div>
          </div>
          <div class="row">
            <div class="field">
              <label class="label" for="el-state">State / UT</label>
              <select id="el-state" class="select"><option value="" disabled selected>Select state</option>${stateOptions}</select>
            </div>
            <div class="field">
              <label class="label" for="el-purpose">Purpose</label>
              <select id="el-purpose" class="select"><option value="" disabled selected>Select purpose</option><option value="birth">Birth Certificate</option><option value="death">Death Certificate</option><option value="income">Income Certificate</option><option value="caste">Caste Certificate</option><option value="domicile">Domicile Certificate</option></select>
            </div>
          </div>
          <button type="submit" class="btn" ${this._loading ? 'disabled' : ''}>
            ${this._loading ? '<span class="spinner" aria-hidden="true"></span> Checking…' : 'Check Eligibility'}
          </button>
        </form>

        ${this._result ? `
          <div class="result ${this._result.eligible ? 'result--ok' : 'result--no'}" role="status">
            <strong>${this._result.eligible ? '✅ Eligible' : '❌ Not Eligible'}</strong>
            <p>${this._result.reason}</p>
            ${this._result.requirements.length ? `<ul>${this._result.requirements.map(r => `<li>${r}</li>`).join('')}</ul>` : ''}
          </div>
        ` : ''}
      </div>

      <ux4g-service-footer left-text="${this.serviceName} • Government of India" right-text="Eligibility Check"></ux4g-service-footer>
    `;

    this._attachListeners();
  }

  private _attachListeners(): void {
    const form = this.root.querySelector('#elig-form') as HTMLFormElement;
    const ageInput = this.root.querySelector('#el-age') as HTMLInputElement;
    const natSelect = this.root.querySelector('#el-nat') as HTMLSelectElement;
    const stateSelect = this.root.querySelector('#el-state') as HTMLSelectElement;
    const purposeSelect = this.root.querySelector('#el-purpose') as HTMLSelectElement;

    ageInput?.addEventListener('input', () => { this._age = ageInput.value; });
    natSelect?.addEventListener('change', () => { this._nationality = natSelect.value; });
    stateSelect?.addEventListener('change', () => { this._state = stateSelect.value; });
    purposeSelect?.addEventListener('change', () => { this._purpose = purposeSelect.value; });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      this._checkEligibility();
    });
  }

  private _checkEligibility(): void {
    this._loading = true;
    this._result = null;
    this.render();

    setTimeout(() => {
      const age = parseInt(this._age, 10);
      const eligible = age >= 18 && this._nationality === 'Indian';
      this._result = {
        eligible,
        reason: eligible ? 'You meet all eligibility criteria' : 'You do not meet the minimum age or nationality requirement',
        requirements: eligible ? ['Aadhaar Card', 'Address Proof', 'Passport Photo'] : [],
        fees: eligible ? 649 : 0,
      };
      this._loading = false;
      if (eligible) {
        this.dispatchCustomEvent(SERVICE_EVENTS.stepComplete, { eligible: true, fees: 649 });
      }
      this.render();
    }, 600);
  }
}

if (!customElements.get('ux4g-eligibility-service')) {
  customElements.define('ux4g-eligibility-service', UX4GEligibilityService);
}
