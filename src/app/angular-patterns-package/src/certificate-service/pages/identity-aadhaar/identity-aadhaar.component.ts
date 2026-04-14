import { Component, ChangeDetectionStrategy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'identity-aadhaar-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="aa">
      <div class="aa-tricolor" aria-hidden="true"></div>
      <header class="aa-gov">
        <span class="aa-gov__icon" aria-hidden="true">🛡️</span>
        <div><div class="aa-gov__title">Government of India</div><div class="aa-gov__sub">Unified Identity Service — Aadhaar Authentication</div></div>
      </header>

      <main class="aa-main">
        <div class="aa-content">
          <div class="aa-form-col">
            <!-- Progress -->
            <div class="aa-progress" role="navigation" aria-label="Aadhaar authentication steps">
              <div *ngFor="let s of stepLabels; let i = index" class="aa-step" [class.aa-step--active]="step === i + 1" [class.aa-step--done]="step > i + 1">
                <div class="aa-step__num">{{ step > i + 1 ? '✓' : i + 1 }}</div>
                <div class="aa-step__label">{{ s }}</div>
              </div>
            </div>

            <!-- Step 1: Consent -->
            <div class="aa-card" *ngIf="step === 1">
              <div class="aa-card__icon" aria-hidden="true">🆔</div>
              <h1 class="aa-card__title">Aadhaar Authentication</h1>
              <p class="aa-card__desc">This service uses UIDAI's Aadhaar authentication to verify your identity securely.</p>

              <div class="aa-consent-list">
                <h3>By proceeding, you consent to:</h3>
                <ul>
                  <li *ngFor="let c of consentPoints">{{ c }}</li>
                </ul>
              </div>

              <label class="aa-checkbox">
                <input type="checkbox" [(ngModel)]="consentGiven" name="consent" />
                <span>I have read and agree to the above terms for Aadhaar authentication</span>
              </label>

              <button type="button" class="aa-btn aa-btn--primary" [disabled]="!consentGiven" (click)="step = 2">Proceed to Aadhaar Entry</button>
            </div>

            <!-- Step 2: Enter Aadhaar -->
            <div class="aa-card" *ngIf="step === 2">
              <h1 class="aa-card__title">Enter Your Aadhaar Number</h1>
              <p class="aa-card__desc">Enter your 12-digit Aadhaar number to receive an OTP.</p>

              <div class="aa-field">
                <label class="aa-label" for="aadhaar">Aadhaar Number <span class="aa-req">*</span></label>
                <input id="aadhaar" class="aa-input aa-input--aadhaar" [type]="showAadhaar ? 'text' : 'password'" [(ngModel)]="aadhaarNumber" name="aadhaar" placeholder="XXXX XXXX XXXX" maxlength="12" inputmode="numeric" />
                <button type="button" class="aa-toggle" (click)="showAadhaar = !showAadhaar" [attr.aria-label]="showAadhaar ? 'Hide Aadhaar' : 'Show Aadhaar'">
                  {{ showAadhaar ? '🙈 Hide' : '👁️ Show' }}
                </button>
              </div>

              <div class="aa-security-notice">🔒 Your Aadhaar number is encrypted and never stored. Never share your Aadhaar with unauthorized persons.</div>

              <button type="button" class="aa-btn aa-btn--primary" [disabled]="aadhaarNumber.length !== 12" (click)="step = 3">Send OTP to Aadhaar-linked Mobile</button>
            </div>

            <!-- Step 3: OTP -->
            <div class="aa-card" *ngIf="step === 3">
              <h1 class="aa-card__title">Enter Aadhaar OTP</h1>
              <p class="aa-card__desc">OTP sent to mobile linked with Aadhaar <strong>XXXX XXXX {{ aadhaarNumber.slice(-4) || '1234' }}</strong></p>

              <div class="aa-otp-group" role="group" aria-label="Enter 6-digit OTP">
                <input *ngFor="let d of otpDigits; let i = index"
                  #otpInput
                  class="aa-otp-input"
                  type="text"
                  inputmode="numeric"
                  maxlength="1"
                  [attr.aria-label]="'Digit ' + (i + 1)"
                  [value]="otpDigits[i]"
                  (input)="onDigitInput($event, i)"
                  (keydown)="onKeyDown($event, i)"
                />
              </div>

              <div class="aa-resend-row">
                <button type="button" class="aa-link" (click)="resendOtp()">Resend OTP</button>
              </div>

              <button type="button" class="aa-btn aa-btn--primary" [disabled]="!otpComplete" (click)="step = 4">Verify Aadhaar</button>
            </div>

            <!-- Step 4: Success -->
            <div class="aa-card aa-card--success" *ngIf="step === 4">
              <div class="aa-success-icon" aria-hidden="true">✅</div>
              <h1 class="aa-card__title">Aadhaar Verified Successfully</h1>
              <p class="aa-card__desc">Your identity has been verified through UIDAI.</p>

              <div class="aa-verified">
                <div class="aa-verified__row"><span class="aa-verified__label">Name</span><span>Priya Sharma</span></div>
                <div class="aa-verified__row"><span class="aa-verified__label">Aadhaar</span><span>XXXX XXXX {{ aadhaarNumber.slice(-4) || '1234' }}</span></div>
                <div class="aa-verified__row"><span class="aa-verified__label">Status</span><span class="aa-badge aa-badge--green">UIDAI Verified</span></div>
                <div class="aa-verified__row"><span class="aa-verified__label">Timestamp</span><span>{{ verifiedTimestamp }}</span></div>
              </div>

              <button type="button" class="aa-btn aa-btn--primary" (click)="onContinue()">Continue to Application</button>
            </div>
          </div>

          <aside class="aa-sidebar">
            <div class="aa-panel"><h2 class="aa-panel__title">Pattern Info</h2><p class="aa-panel__text">Aadhaar-based authentication using UIDAI's OTP service. Provides strong identity verification for government services.</p></div>
            <div class="aa-panel"><h2 class="aa-panel__title">Consent Requirements</h2>
              <ul class="aa-list"><li>Explicit user consent required by law</li><li>Purpose limitation must be stated</li><li>Data minimization principle applies</li><li>Consent can be withdrawn</li></ul>
            </div>
            <div class="aa-panel"><h2 class="aa-panel__title">Security Notes</h2>
              <ul class="aa-list"><li>Aadhaar number is masked after entry</li><li>OTP valid for 10 minutes only</li><li>End-to-end encryption with UIDAI</li><li>No biometric data collected</li></ul>
            </div>
            <div class="aa-panel"><h2 class="aa-panel__title">Legal Compliance</h2>
              <ul class="aa-list"><li>Aadhaar Act, 2016 compliant</li><li>UIDAI authentication guidelines</li><li>IT Act, 2000 data protection</li><li>Supreme Court privacy ruling adherence</li></ul>
            </div>
          </aside>
        </div>
      </main>

      <ux4g-service-footer leftText="Unified Identity Service • Government of India" rightText="Aadhaar Authentication"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .aa { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .aa-tricolor { height: 4px; background: linear-gradient(to right, #ff9933 33%, #fff 33%, #fff 66%, #138808 66%); }
    .aa-gov { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; background: var(--ux4g-svc-bg, #fff); border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); }
    .aa-gov__icon { font-size: 1.75rem; }
    .aa-gov__title { font-weight: 700; font-size: 1rem; }
    .aa-gov__sub { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .aa-main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
    .aa-content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
    .aa-form-col { max-width: 600px; }
    .aa-progress { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
    .aa-step { display: flex; align-items: center; gap: 0.375rem; flex: 1; padding: 0.625rem; background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .aa-step--active { border-color: var(--ux4g-svc-primary, #4f46e5); color: var(--ux4g-svc-primary, #4f46e5); font-weight: 700; }
    .aa-step--done { border-color: #16a34a; color: #16a34a; }
    .aa-step__num { width: 1.5rem; height: 1.5rem; border-radius: 50%; background: var(--ux4g-svc-border, #e2e8f0); display: flex; align-items: center; justify-content: center; font-size: 0.6875rem; font-weight: 700; flex-shrink: 0; }
    .aa-step--active .aa-step__num { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .aa-step--done .aa-step__num { background: #16a34a; color: #fff; }
    .aa-card { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; }
    .aa-card--success { text-align: center; border-color: #86efac; }
    .aa-card__icon { font-size: 3rem; text-align: center; margin-bottom: 0.5rem; }
    .aa-card__title { font-size: 1.5rem; font-weight: 800; margin: 0 0 0.25rem; }
    .aa-card__desc { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 1.5rem; }
    .aa-consent-list { background: var(--ux4g-svc-bg-muted, #f8fafc); border: 1px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; padding: 1rem 1rem 1rem 1.25rem; margin-bottom: 1.5rem; }
    .aa-consent-list h3 { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.5rem; }
    .aa-consent-list ul { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    .aa-checkbox { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.8125rem; cursor: pointer; margin-bottom: 1.5rem; padding: 0.875rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; }
    .aa-field { position: relative; margin-bottom: 1rem; }
    .aa-label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.375rem; }
    .aa-req { color: #dc2626; }
    .aa-input { width: 100%; padding: 0.75rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; font-size: 1.125rem; font-family: monospace; letter-spacing: 0.15em; box-sizing: border-box; }
    .aa-input:focus { border-color: var(--ux4g-svc-primary, #4f46e5); outline: none; }
    .aa-toggle { position: absolute; right: 0.75rem; bottom: 0.625rem; background: none; border: none; cursor: pointer; font-size: 0.8125rem; color: var(--ux4g-svc-primary, #4f46e5); font-weight: 600; }
    .aa-security-notice { background: #fef3c7; border: 1px solid #fbbf24; border-radius: 0.375rem; padding: 0.75rem; font-size: 0.75rem; margin-bottom: 1.5rem; }
    .aa-otp-group { display: flex; justify-content: center; gap: 0.75rem; margin-bottom: 1rem; }
    .aa-otp-input { width: 3rem; height: 3.5rem; text-align: center; font-size: 1.5rem; font-weight: 700; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; }
    .aa-otp-input:focus { border-color: var(--ux4g-svc-primary, #4f46e5); outline: none; }
    .aa-resend-row { text-align: center; margin-bottom: 1.5rem; }
    .aa-link { background: none; border: none; color: var(--ux4g-svc-primary, #4f46e5); font-weight: 700; font-size: 0.8125rem; cursor: pointer; text-decoration: underline; }
    .aa-btn { display: block; width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; text-align: center; }
    .aa-btn--primary { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .aa-btn:disabled { background: #9ca3af; cursor: not-allowed; }
    .aa-success-icon { font-size: 3rem; margin-bottom: 0.5rem; }
    .aa-verified { border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; overflow: hidden; margin-bottom: 1.5rem; text-align: left; }
    .aa-verified__row { display: flex; justify-content: space-between; padding: 0.75rem 1rem; font-size: 0.875rem; border-bottom: 1px solid var(--ux4g-svc-border, #e2e8f0); }
    .aa-verified__row:last-child { border-bottom: none; }
    .aa-verified__row:nth-child(even) { background: var(--ux4g-svc-bg-muted, #f8fafc); }
    .aa-verified__label { font-weight: 700; color: var(--ux4g-svc-fg-muted, #64748b); }
    .aa-badge { display: inline-block; padding: 0.125rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; }
    .aa-badge--green { background: #dcfce7; color: #16a34a; }
    .aa-sidebar { display: flex; flex-direction: column; gap: 1rem; }
    .aa-panel { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
    .aa-panel__title { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
    .aa-panel__text { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0; }
    .aa-list { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    @media (max-width: 768px) {
      .aa-content { grid-template-columns: 1fr; }
      .aa-form-col { max-width: 100%; }
      .aa-progress { flex-wrap: wrap; }
      .aa-otp-input { width: 2.5rem; height: 3rem; font-size: 1.25rem; }
    }
  `],
})
export class IdentityAadhaarComponent {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  step = 1;
  stepLabels = ['Consent', 'Enter', 'OTP', 'Success'];
  consentGiven = false;
  aadhaarNumber = '';
  showAadhaar = false;
  otpDigits: string[] = ['', '', '', '', '', ''];

  consentPoints = [
    'Sharing your Aadhaar number with UIDAI for authentication',
    'Receiving an OTP on your Aadhaar-linked mobile number',
    'Verification of your identity for this government service',
    'Your Aadhaar data will not be stored beyond this session',
    'This authentication is voluntary and you may choose alternatives',
    'Data usage is governed by the Aadhaar Act, 2016',
  ];

  get otpComplete(): boolean { return this.otpDigits.every(d => d.length === 1); }

  get verifiedTimestamp(): string {
    const now = new Date();
    return now.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }) + ' ' +
           now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  }

  onDigitInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const val = input.value.replace(/\D/g, '');
    this.otpDigits[index] = val.charAt(0) || '';
    input.value = this.otpDigits[index];
    if (val && index < 5) {
      const inputs = this.otpInputs.toArray();
      inputs[index + 1]?.nativeElement.focus();
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
      const inputs = this.otpInputs.toArray();
      inputs[index - 1]?.nativeElement.focus();
    }
  }

  resendOtp() { this.otpDigits = ['', '', '', '', '', '']; }
  onContinue() { /* navigate to application */ }
}
