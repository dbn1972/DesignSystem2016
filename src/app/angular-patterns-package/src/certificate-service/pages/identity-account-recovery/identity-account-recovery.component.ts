import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'identity-account-recovery-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ar">
      <div class="ar-tricolor" aria-hidden="true"></div>
      <header class="ar-gov">
        <span class="ar-gov__icon" aria-hidden="true">🛡️</span>
        <div><div class="ar-gov__title">Government of India</div><div class="ar-gov__sub">Unified Identity Service — Account Recovery</div></div>
      </header>

      <main class="ar-main">
        <div class="ar-content">
          <div class="ar-form-col">
            <!-- Progress -->
            <div class="ar-progress" role="navigation" aria-label="Recovery steps">
              <div *ngFor="let s of stepLabels; let i = index" class="ar-step" [class.ar-step--active]="step === i + 1" [class.ar-step--done]="step > i + 1">
                <div class="ar-step__num">{{ step > i + 1 ? '✓' : i + 1 }}</div>
                <div class="ar-step__label">{{ s }}</div>
              </div>
            </div>

            <!-- Step 1: Locked -->
            <div class="ar-card" *ngIf="step === 1">
              <div class="ar-lock-icon" aria-hidden="true">🔒</div>
              <h1 class="ar-card__title">Account Locked</h1>
              <p class="ar-card__desc">Your account has been locked for security reasons. This may happen due to:</p>
              <ul class="ar-reasons">
                <li>Multiple failed login attempts</li>
                <li>Suspicious activity detected</li>
                <li>Password expired or compromised</li>
              </ul>
              <h3 class="ar-subtitle">Recovery Steps</h3>
              <ol class="ar-recovery-steps">
                <li>Verify your identity with personal details</li>
                <li>Upload a government-issued ID document</li>
                <li>Review and submit your recovery request</li>
              </ol>
              <button type="button" class="ar-btn ar-btn--primary" (click)="step = 2">Start Recovery</button>
            </div>

            <!-- Step 2: Identity -->
            <div class="ar-card" *ngIf="step === 2">
              <h1 class="ar-card__title">Verify Your Identity</h1>
              <p class="ar-card__desc">Provide your personal details to verify your identity.</p>
              <div class="ar-field"><label class="ar-label">Full Name <span class="ar-req">*</span></label><input class="ar-input" type="text" [(ngModel)]="fullName" name="fullName" placeholder="As per official records" /></div>
              <div class="ar-field"><label class="ar-label">Date of Birth <span class="ar-req">*</span></label><input class="ar-input" type="date" [(ngModel)]="dob" name="dob" /></div>
              <div class="ar-field"><label class="ar-label">Registered Mobile <span class="ar-req">*</span></label><input class="ar-input" type="tel" [(ngModel)]="mobile" name="mobile" placeholder="+91 XXXXX XXXXX" /></div>
              <div class="ar-field"><label class="ar-label">Registered Email</label><input class="ar-input" type="email" [(ngModel)]="email" name="email" placeholder="your.email@example.com" /></div>
              <button type="button" class="ar-btn ar-btn--primary" [disabled]="!fullName || !dob || !mobile" (click)="step = 3">Continue</button>
            </div>

            <!-- Step 3: Documents -->
            <div class="ar-card" *ngIf="step === 3">
              <h1 class="ar-card__title">Upload Identity Document</h1>
              <p class="ar-card__desc">Select and upload a government-issued identity document.</p>
              <div class="ar-field">
                <label class="ar-label">Document Type <span class="ar-req">*</span></label>
                <select class="ar-select" [(ngModel)]="docType" name="docType">
                  <option value="">Select document type</option>
                  <option *ngFor="let d of docTypes" [value]="d">{{ d }}</option>
                </select>
              </div>
              <div class="ar-field"><label class="ar-label">Document Number <span class="ar-req">*</span></label><input class="ar-input" type="text" [(ngModel)]="docNumber" name="docNumber" placeholder="Enter document number" /></div>
              <div class="ar-upload" role="button" tabindex="0" aria-label="Upload document">
                <div class="ar-upload__icon" aria-hidden="true">📎</div>
                <div class="ar-upload__text">Click or drag to upload document</div>
                <div class="ar-upload__hint">PDF, JPG, PNG — Max 5 MB</div>
              </div>
              <button type="button" class="ar-btn ar-btn--primary" [disabled]="!docType || !docNumber" (click)="step = 4">Continue</button>
            </div>

            <!-- Step 4: Review -->
            <div class="ar-card" *ngIf="step === 4">
              <h1 class="ar-card__title">Review Your Request</h1>
              <p class="ar-card__desc">Please verify all details before submitting.</p>
              <div class="ar-summary">
                <div class="ar-summary__row"><span class="ar-summary__label">Full Name</span><span>{{ fullName }}</span></div>
                <div class="ar-summary__row"><span class="ar-summary__label">Date of Birth</span><span>{{ dob }}</span></div>
                <div class="ar-summary__row"><span class="ar-summary__label">Mobile</span><span>{{ mobile }}</span></div>
                <div class="ar-summary__row"><span class="ar-summary__label">Email</span><span>{{ email || '—' }}</span></div>
                <div class="ar-summary__row"><span class="ar-summary__label">Document Type</span><span>{{ docType }}</span></div>
                <div class="ar-summary__row"><span class="ar-summary__label">Document Number</span><span>{{ docNumber }}</span></div>
              </div>
              <button type="button" class="ar-btn ar-btn--primary" (click)="step = 5">Submit Recovery Request</button>
            </div>

            <!-- Step 5: Success -->
            <div class="ar-card ar-card--success" *ngIf="step === 5">
              <div class="ar-success-icon" aria-hidden="true">✅</div>
              <h1 class="ar-card__title">Recovery Request Submitted</h1>
              <p class="ar-card__desc">Your account recovery request has been submitted successfully.</p>
              <div class="ar-ref">
                <div class="ar-ref__label">Reference Number</div>
                <div class="ar-ref__val">REC-2026-04-XXXXX</div>
              </div>
              <div class="ar-tracking">
                <p>You will receive updates via SMS and email. Expected processing time: 2–3 business days.</p>
                <p>You can track your request status using the reference number above.</p>
              </div>
            </div>
          </div>

          <aside class="ar-sidebar">
            <div class="ar-panel"><h2 class="ar-panel__title">Pattern Info</h2><p class="ar-panel__text">Multi-step account recovery with identity verification and document upload for locked or compromised accounts.</p></div>
            <div class="ar-panel"><h2 class="ar-panel__title">When to Use</h2>
              <ul class="ar-list"><li>Account locked after failed attempts</li><li>Forgotten credentials with no recovery method</li><li>Suspected account compromise</li></ul>
            </div>
            <div class="ar-panel"><h2 class="ar-panel__title">Security Notes</h2>
              <ul class="ar-list"><li>Document verification is manual</li><li>Identity cross-checked with records</li><li>Recovery link expires in 24 hours</li></ul>
            </div>
            <div class="ar-panel"><h2 class="ar-panel__title">Processing Time</h2><p class="ar-panel__text">Standard: 2–3 business days. Expedited processing available for verified Aadhaar holders.</p></div>
          </aside>
        </div>
      </main>

      <ux4g-service-footer leftText="Unified Identity Service • Government of India" rightText="Account Recovery"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .ar { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .ar-tricolor { height: 4px; background: linear-gradient(to right, #ff9933 33%, #fff 33%, #fff 66%, #138808 66%); }
    .ar-gov { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; background: var(--ux4g-svc-bg, #fff); border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); }
    .ar-gov__icon { font-size: 1.75rem; }
    .ar-gov__title { font-weight: 700; font-size: 1rem; }
    .ar-gov__sub { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .ar-main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
    .ar-content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
    .ar-form-col { max-width: 600px; }
    .ar-progress { display: flex; gap: 0.375rem; margin-bottom: 1.5rem; }
    .ar-step { display: flex; align-items: center; gap: 0.375rem; flex: 1; padding: 0.5rem; background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.6875rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .ar-step--active { border-color: var(--ux4g-svc-primary, #4f46e5); color: var(--ux4g-svc-primary, #4f46e5); font-weight: 700; }
    .ar-step--done { border-color: #16a34a; color: #16a34a; }
    .ar-step__num { width: 1.375rem; height: 1.375rem; border-radius: 50%; background: var(--ux4g-svc-border, #e2e8f0); display: flex; align-items: center; justify-content: center; font-size: 0.625rem; font-weight: 700; flex-shrink: 0; }
    .ar-step--active .ar-step__num { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .ar-step--done .ar-step__num { background: #16a34a; color: #fff; }
    .ar-card { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; }
    .ar-card--success { text-align: center; }
    .ar-card__title { font-size: 1.5rem; font-weight: 800; margin: 0 0 0.25rem; }
    .ar-card__desc { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 1.5rem; }
    .ar-lock-icon { font-size: 3rem; text-align: center; margin-bottom: 0.5rem; }
    .ar-reasons, .ar-recovery-steps { padding-left: 1.25rem; font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; margin: 0 0 1.25rem; }
    .ar-subtitle { font-size: 0.9375rem; font-weight: 700; margin: 0 0 0.5rem; }
    .ar-field { margin-bottom: 1.25rem; }
    .ar-label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.375rem; }
    .ar-req { color: #dc2626; }
    .ar-input, .ar-select { width: 100%; padding: 0.625rem 0.75rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; box-sizing: border-box; background: var(--ux4g-svc-bg, #fff); }
    .ar-input:focus, .ar-select:focus { border-color: var(--ux4g-svc-primary, #4f46e5); outline: none; }
    .ar-upload { border: 2px dashed var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; text-align: center; cursor: pointer; margin-bottom: 1.25rem; }
    .ar-upload:hover { border-color: var(--ux4g-svc-primary, #4f46e5); }
    .ar-upload__icon { font-size: 2rem; margin-bottom: 0.5rem; }
    .ar-upload__text { font-size: 0.875rem; font-weight: 600; }
    .ar-upload__hint { font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); margin-top: 0.25rem; }
    .ar-summary { border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; overflow: hidden; margin-bottom: 1.5rem; }
    .ar-summary__row { display: flex; justify-content: space-between; padding: 0.75rem 1rem; font-size: 0.875rem; border-bottom: 1px solid var(--ux4g-svc-border, #e2e8f0); }
    .ar-summary__row:last-child { border-bottom: none; }
    .ar-summary__row:nth-child(even) { background: var(--ux4g-svc-bg-muted, #f8fafc); }
    .ar-summary__label { font-weight: 700; color: var(--ux4g-svc-fg-muted, #64748b); }
    .ar-btn { display: block; width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; text-align: center; }
    .ar-btn--primary { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .ar-btn:disabled { background: #9ca3af; cursor: not-allowed; }
    .ar-success-icon { font-size: 3rem; margin-bottom: 0.5rem; }
    .ar-ref { background: var(--ux4g-svc-bg-muted, #f8fafc); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; padding: 1rem; margin-bottom: 1rem; }
    .ar-ref__label { font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); margin-bottom: 0.25rem; }
    .ar-ref__val { font-size: 1.25rem; font-weight: 800; font-family: monospace; color: var(--ux4g-svc-primary, #4f46e5); }
    .ar-tracking { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .ar-tracking p { margin: 0 0 0.5rem; }
    .ar-sidebar { display: flex; flex-direction: column; gap: 1rem; }
    .ar-panel { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
    .ar-panel__title { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
    .ar-panel__text { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0; }
    .ar-list { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    @media (max-width: 768px) {
      .ar-content { grid-template-columns: 1fr; }
      .ar-form-col { max-width: 100%; }
      .ar-progress { flex-wrap: wrap; }
    }
  `],
})
export class IdentityAccountRecoveryComponent {
  step = 1;
  stepLabels = ['Locked', 'Identity', 'Documents', 'Review', 'Success'];
  fullName = '';
  dob = '';
  mobile = '';
  email = '';
  docType = '';
  docNumber = '';
  docTypes = ['Aadhaar Card', 'PAN Card', 'Voter ID', 'Driving License', 'Passport'];
}
