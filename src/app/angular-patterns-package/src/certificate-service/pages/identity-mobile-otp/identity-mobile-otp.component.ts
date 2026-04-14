import { Component, ChangeDetectionStrategy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'identity-mobile-otp-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mo">
      <div class="mo-tricolor" aria-hidden="true"></div>
      <header class="mo-gov">
        <span class="mo-gov__icon" aria-hidden="true">🛡️</span>
        <div><div class="mo-gov__title">Government of India</div><div class="mo-gov__sub">Unified Identity Service — Mobile Verification</div></div>
      </header>

      <main class="mo-main">
        <div class="mo-content">
          <div class="mo-form-col">
            <div class="mo-card">
              <div class="mo-card__icon" aria-hidden="true">📱</div>
              <h1 class="mo-card__title">Verify Your Mobile Number</h1>
              <p class="mo-card__desc">We've sent a 6-digit OTP to <strong>+91 98XXX XXXXX</strong></p>

              <div class="mo-otp-group" role="group" aria-label="Enter 6-digit OTP">
                <input *ngFor="let d of digits; let i = index"
                  #otpInput
                  class="mo-otp-input"
                  type="text"
                  inputmode="numeric"
                  maxlength="1"
                  [attr.aria-label]="'Digit ' + (i + 1)"
                  [value]="digits[i]"
                  (input)="onDigitInput($event, i)"
                  (keydown)="onKeyDown($event, i)"
                />
              </div>

              <div class="mo-timer" aria-live="polite">
                <span *ngIf="countdown > 0">Resend OTP in <strong>{{ countdown }}s</strong></span>
                <button *ngIf="countdown === 0" type="button" class="mo-resend" (click)="resendOtp()">Resend OTP</button>
              </div>

              <button type="button" class="mo-btn mo-btn--primary" [disabled]="!isComplete" (click)="verify()">Verify &amp; Continue</button>

              <div class="mo-trouble">
                <h3>OTP Not Received?</h3>
                <ul>
                  <li>Check if your mobile number is correct</li>
                  <li>Ensure your phone has network coverage</li>
                  <li>Check your SMS inbox and spam folder</li>
                  <li>Wait a few moments and try resending</li>
                </ul>
              </div>

              <div class="mo-security">🔒 Never share your OTP with anyone. Government officials will never ask for your OTP.</div>

              <div class="mo-alt">
                <a href="/reference-service/certificate/identity/email-otp">Try Email OTP instead →</a>
              </div>
            </div>
          </div>

          <aside class="mo-sidebar">
            <div class="mo-panel">
              <h2 class="mo-panel__title">Design Annotations</h2>
              <ul class="mo-annotations">
                <li>Auto-advance on digit entry</li>
                <li>Backspace returns to previous field</li>
                <li>Countdown timer prevents OTP spam</li>
                <li>Numeric inputmode for mobile keyboards</li>
                <li>ARIA labels for each digit input</li>
              </ul>
            </div>
            <div class="mo-panel">
              <h2 class="mo-panel__title">OTP Flow</h2>
              <ol class="mo-steps">
                <li>OTP sent to registered mobile</li>
                <li class="mo-step--active">User enters 6-digit code</li>
                <li>System verifies OTP</li>
                <li>Proceed to next step</li>
              </ol>
            </div>
            <div class="mo-panel">
              <h2 class="mo-panel__title">Help</h2>
              <p class="mo-panel__text">📞 1800-111-555 (Toll Free)</p>
              <p class="mo-panel__text">Mon–Sat, 9 AM – 6 PM IST</p>
            </div>
          </aside>
        </div>
      </main>

      <ux4g-service-footer leftText="Unified Identity Service • Government of India" rightText="Mobile OTP Verification"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .mo { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .mo-tricolor { height: 4px; background: linear-gradient(to right, #ff9933 33%, #fff 33%, #fff 66%, #138808 66%); }
    .mo-gov { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; background: var(--ux4g-svc-bg, #fff); border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); }
    .mo-gov__icon { font-size: 1.75rem; }
    .mo-gov__title { font-weight: 700; font-size: 1rem; }
    .mo-gov__sub { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .mo-main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
    .mo-content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
    .mo-form-col { max-width: 560px; }
    .mo-card { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; text-align: center; }
    .mo-card__icon { font-size: 3rem; margin-bottom: 0.5rem; }
    .mo-card__title { font-size: 1.5rem; font-weight: 800; margin: 0 0 0.25rem; }
    .mo-card__desc { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 2rem; }
    .mo-otp-group { display: flex; justify-content: center; gap: 0.75rem; margin-bottom: 1.5rem; }
    .mo-otp-input { width: 3rem; height: 3.5rem; text-align: center; font-size: 1.5rem; font-weight: 700; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; }
    .mo-otp-input:focus { border-color: var(--ux4g-svc-primary, #4f46e5); outline: none; }
    .mo-timer { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin-bottom: 1.5rem; }
    .mo-resend { background: none; border: none; color: var(--ux4g-svc-primary, #4f46e5); font-weight: 700; font-size: 0.875rem; cursor: pointer; text-decoration: underline; }
    .mo-btn { width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; }
    .mo-btn--primary { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .mo-btn:disabled { background: #9ca3af; cursor: not-allowed; }
    .mo-trouble { text-align: left; background: var(--ux4g-svc-bg-muted, #f8fafc); border: 1px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; padding: 1rem; margin-top: 1.5rem; }
    .mo-trouble h3 { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.5rem; }
    .mo-trouble ul { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    .mo-security { background: #fef3c7; border: 1px solid #fbbf24; border-radius: 0.375rem; padding: 0.75rem; font-size: 0.75rem; margin-top: 1rem; }
    .mo-alt { margin-top: 1rem; }
    .mo-alt a { font-size: 0.8125rem; color: var(--ux4g-svc-primary, #4f46e5); text-decoration: none; font-weight: 600; }
    .mo-sidebar { display: flex; flex-direction: column; gap: 1rem; }
    .mo-panel { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
    .mo-panel__title { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
    .mo-panel__text { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 0.25rem; }
    .mo-annotations { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    .mo-steps { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 2; }
    .mo-step--active { color: var(--ux4g-svc-primary, #4f46e5); font-weight: 700; }
    @media (max-width: 768px) {
      .mo-content { grid-template-columns: 1fr; }
      .mo-form-col { max-width: 100%; }
      .mo-otp-input { width: 2.5rem; height: 3rem; font-size: 1.25rem; }
    }
  `],
})
export class IdentityMobileOtpComponent {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  digits: string[] = ['', '', '', '', '', ''];
  countdown = 30;
  private timer: any;

  get isComplete(): boolean { return this.digits.every(d => d.length === 1); }

  ngOnInit() { this.startTimer(); }
  ngOnDestroy() { clearInterval(this.timer); }

  startTimer() {
    this.countdown = 30;
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
