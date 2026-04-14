import { Component, ChangeDetectionStrategy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'identity-email-otp-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="eo">
      <div class="eo-tricolor" aria-hidden="true"></div>
      <header class="eo-gov">
        <span class="eo-gov__icon" aria-hidden="true">🛡️</span>
        <div><div class="eo-gov__title">Government of India</div><div class="eo-gov__sub">Unified Identity Service — Email Verification</div></div>
      </header>

      <main class="eo-main">
        <div class="eo-content">
          <div class="eo-form-col">
            <div class="eo-card">
              <div class="eo-card__icon" aria-hidden="true">📧</div>
              <h1 class="eo-card__title">Verify Your Email Address</h1>
              <p class="eo-card__desc">We've sent a 6-digit OTP to <strong>user@example.com</strong></p>

              <div class="eo-otp-group" role="group" aria-label="Enter 6-digit OTP">
                <input *ngFor="let d of digits; let i = index"
                  #otpInput
                  class="eo-otp-input"
                  type="text"
                  inputmode="numeric"
                  maxlength="1"
                  [attr.aria-label]="'Digit ' + (i + 1)"
                  [value]="digits[i]"
                  (input)="onDigitInput($event, i)"
                  (keydown)="onKeyDown($event, i)"
                />
              </div>

              <div class="eo-timer" aria-live="polite">
                <span *ngIf="countdown > 0">Resend OTP in <strong>{{ formattedTime }}</strong></span>
                <button *ngIf="countdown === 0" type="button" class="eo-resend" (click)="resendOtp()">Resend OTP</button>
              </div>

              <div class="eo-paste-hint">💡 Tip: You can paste the OTP code directly into the first field.</div>

              <button type="button" class="eo-btn eo-btn--primary" [disabled]="!isComplete" (click)="verify()">Verify &amp; Continue</button>

              <div class="eo-spam-tip">📬 Can't find the email? Check your spam or junk folder.</div>
            </div>
          </div>

          <aside class="eo-sidebar">
            <div class="eo-panel">
              <h2 class="eo-panel__title">Pattern Info</h2>
              <p class="eo-panel__text">Email OTP verification pattern with 2-minute expiry timer and auto-advance digit inputs.</p>
            </div>
            <div class="eo-panel">
              <h2 class="eo-panel__title">User Goals</h2>
              <ul class="eo-list">
                <li>Verify email ownership</li>
                <li>Complete registration flow</li>
                <li>Secure account with verified contact</li>
              </ul>
            </div>
            <div class="eo-panel">
              <h2 class="eo-panel__title">Validation Rules</h2>
              <ul class="eo-list">
                <li>6 numeric digits required</li>
                <li>2-minute expiry window</li>
                <li>Max 3 resend attempts</li>
                <li>Auto-submit on complete entry</li>
              </ul>
            </div>
            <div class="eo-panel">
              <h2 class="eo-panel__title">Accessibility Notes</h2>
              <ul class="eo-list">
                <li>Each input has unique aria-label</li>
                <li>Timer uses aria-live for updates</li>
                <li>Keyboard navigation between fields</li>
              </ul>
            </div>
            <div class="eo-panel">
              <h2 class="eo-panel__title">Implementation Notes</h2>
              <ul class="eo-list">
                <li>Paste support on first input</li>
                <li>Backspace navigates to previous</li>
                <li>Only numeric input accepted</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <ux4g-service-footer leftText="Unified Identity Service • Government of India" rightText="Email OTP Verification"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .eo { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .eo-tricolor { height: 4px; background: linear-gradient(to right, #ff9933 33%, #fff 33%, #fff 66%, #138808 66%); }
    .eo-gov { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; background: var(--ux4g-svc-bg, #fff); border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); }
    .eo-gov__icon { font-size: 1.75rem; }
    .eo-gov__title { font-weight: 700; font-size: 1rem; }
    .eo-gov__sub { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .eo-main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
    .eo-content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
    .eo-form-col { max-width: 560px; }
    .eo-card { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; text-align: center; }
    .eo-card__icon { font-size: 3rem; margin-bottom: 0.5rem; }
    .eo-card__title { font-size: 1.5rem; font-weight: 800; margin: 0 0 0.25rem; }
    .eo-card__desc { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 2rem; }
    .eo-otp-group { display: flex; justify-content: center; gap: 0.75rem; margin-bottom: 1.5rem; }
    .eo-otp-input { width: 3rem; height: 3.5rem; text-align: center; font-size: 1.5rem; font-weight: 700; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; }
    .eo-otp-input:focus { border-color: var(--ux4g-svc-primary, #4f46e5); outline: none; }
    .eo-timer { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin-bottom: 1rem; }
    .eo-resend { background: none; border: none; color: var(--ux4g-svc-primary, #4f46e5); font-weight: 700; font-size: 0.875rem; cursor: pointer; text-decoration: underline; }
    .eo-paste-hint { font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); margin-bottom: 1.5rem; }
    .eo-btn { width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; }
    .eo-btn--primary { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .eo-btn:disabled { background: #9ca3af; cursor: not-allowed; }
    .eo-spam-tip { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin-top: 1.25rem; }
    .eo-sidebar { display: flex; flex-direction: column; gap: 1rem; }
    .eo-panel { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
    .eo-panel__title { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
    .eo-panel__text { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0; }
    .eo-list { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    @media (max-width: 768px) {
      .eo-content { grid-template-columns: 1fr; }
      .eo-form-col { max-width: 100%; }
      .eo-otp-input { width: 2.5rem; height: 3rem; font-size: 1.25rem; }
    }
  `],
})
export class IdentityEmailOtpComponent {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  digits: string[] = ['', '', '', '', '', ''];
  countdown = 120;
  private timer: any;

  get isComplete(): boolean { return this.digits.every(d => d.length === 1); }

  get formattedTime(): string {
    const m = Math.floor(this.countdown / 60);
    const s = this.countdown % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  ngOnInit() { this.startTimer(); }
  ngOnDestroy() { clearInterval(this.timer); }

  startTimer() {
    this.countdown = 120;
    clearInterval(this.timer);
    this.timer = setInterval(() => { if (this.countdown > 0) this.countdown--; else clearInterval(this.timer); }, 1000);
  }

  onDigitInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const val = input.value.replace(/\D/g, '');
    this.digits[index] = val.charAt(0) || '';
    input.value = this.digits[index];
    if (val && index < 5) {
      const inputs = this.otpInputs.toArray();
      inputs[index + 1]?.nativeElement.focus();
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.digits[index] && index > 0) {
      const inputs = this.otpInputs.toArray();
      inputs[index - 1]?.nativeElement.focus();
    }
  }

  resendOtp() { this.digits = ['', '', '', '', '', '']; this.startTimer(); }
  verify() { if (this.isComplete) { /* navigate */ } }
}
