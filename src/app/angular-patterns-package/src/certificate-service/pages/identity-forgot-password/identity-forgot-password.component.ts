import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'identity-forgot-password-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="fp">
      <div class="fp-tricolor" aria-hidden="true"></div>
      <header class="fp-gov">
        <span class="fp-gov__icon" aria-hidden="true">🛡️</span>
        <div><div class="fp-gov__title">Government of India</div><div class="fp-gov__sub">Unified Identity Service — Password Recovery</div></div>
      </header>

      <main class="fp-main">
        <div class="fp-content">
          <div class="fp-form-col">
            <!-- Progress Indicator -->
            <div class="fp-progress" role="navigation" aria-label="Password recovery steps">
              <div *ngFor="let s of stepLabels; let i = index" class="fp-step" [class.fp-step--active]="step === i + 1" [class.fp-step--done]="step > i + 1">
                <div class="fp-step__num">{{ step > i + 1 ? '✓' : i + 1 }}</div>
                <div class="fp-step__label">{{ s }}</div>
              </div>
            </div>

            <!-- Step 1: Identify -->
            <div class="fp-card" *ngIf="step === 1">
              <h1 class="fp-card__title">Forgot Your Password?</h1>
              <p class="fp-card__desc">Choose how you'd like to receive your verification code.</p>

              <div class="fp-methods" role="radiogroup" aria-label="Recovery method">
                <label class="fp-method" [class.fp-method--active]="method === 'mobile'">
                  <input type="radio" name="method" value="mobile" [(ngModel)]="method" hidden />
                  📱 Mobile Number
                </label>
                <label class="fp-method" [class.fp-method--active]="method === 'email'">
                  <input type="radio" name="method" value="email" [(ngModel)]="method" hidden />
                  📧 Email Address
                </label>
              </div>

              <div class="fp-field">
                <label class="fp-label">{{ method === 'mobile' ? 'Mobile Number' : 'Email Address' }}</label>
                <input class="fp-input" [type]="method === 'mobile' ? 'tel' : 'email'" [(ngModel)]="identifier" name="identifier" [placeholder]="method === 'mobile' ? '+91 XXXXX XXXXX' : 'your.email@example.com'" />
              </div>

              <button type="button" class="fp-btn fp-btn--primary" [disabled]="!identifier.trim()" (click)="step = 2">Send Verification Code</button>
            </div>

            <!-- Step 2: Verify -->
            <div class="fp-card" *ngIf="step === 2">
              <h1 class="fp-card__title">Enter Verification Code</h1>
              <p class="fp-card__desc">We've sent a 6-digit code to your {{ method }}.</p>

              <div class="fp-otp-group" role="group" aria-label="Enter 6-digit code">
                <input *ngFor="let d of otpDigits; let i = index" class="fp-otp-input" type="text" inputmode="numeric" maxlength="1" [attr.aria-label]="'Digit ' + (i + 1)" [(ngModel)]="otpDigits[i]" [attr.name]="'otp' + i" />
              </div>

              <button type="button" class="fp-btn fp-btn--primary" [disabled]="!otpComplete" (click)="step = 3">Verify Code</button>
            </div>

            <!-- Step 3: Reset -->
            <div class="fp-card" *ngIf="step === 3">
              <h1 class="fp-card__title">Create New Password</h1>
              <p class="fp-card__desc">Choose a strong password for your account.</p>

              <div class="fp-field">
                <label class="fp-label">New Password <span class="fp-req">*</span></label>
                <input class="fp-input" type="password" [(ngModel)]="newPassword" name="newPassword" placeholder="Enter new password" />
                <div class="fp-reqs" role="list" aria-label="Password requirements">
                  <div *ngFor="let r of pwdReqs" class="fp-req-item" [class.fp-req-item--met]="r.met" role="listitem">
                    {{ r.met ? '✅' : '⬜' }} {{ r.label }}
                  </div>
                </div>
              </div>

              <div class="fp-field">
                <label class="fp-label">Confirm Password <span class="fp-req">*</span></label>
                <input class="fp-input" type="password" [(ngModel)]="confirmPassword" name="confirmPassword" placeholder="Re-enter new password" />
                <div *ngIf="confirmPassword" class="fp-match" [class.fp-match--ok]="passwordsMatch" [class.fp-match--no]="!passwordsMatch">
                  {{ passwordsMatch ? '✅ Passwords match' : '❌ Passwords do not match' }}
                </div>
              </div>

              <button type="button" class="fp-btn fp-btn--primary" [disabled]="!canReset" (click)="step = 4">Reset Password</button>
            </div>

            <!-- Step 4: Success -->
            <div class="fp-card fp-card--success" *ngIf="step === 4">
              <div class="fp-success-icon" aria-hidden="true">✅</div>
              <h1 class="fp-card__title">Password Reset Successful</h1>
              <p class="fp-card__desc">Your password has been updated. You can now sign in with your new password.</p>

              <div class="fp-tips">
                <h3>Security Tips</h3>
                <ul>
                  <li>Never share your password with anyone</li>
                  <li>Use a unique password for each service</li>
                  <li>Enable two-factor authentication when available</li>
                  <li>Change your password regularly</li>
                </ul>
              </div>

              <a class="fp-btn fp-btn--primary" href="/reference-service/certificate/identity/sign-in">Go to Sign In</a>
            </div>
          </div>

          <aside class="fp-sidebar">
            <div class="fp-panel"><h2 class="fp-panel__title">Pattern Info</h2><p class="fp-panel__text">Multi-step password recovery with progressive disclosure. Each step validates before advancing.</p></div>
            <div class="fp-panel"><h2 class="fp-panel__title">User Journey</h2>
              <ol class="fp-list-ol"><li>Choose recovery method</li><li>Receive and enter OTP</li><li>Create new password</li><li>Confirmation and redirect</li></ol>
            </div>
            <div class="fp-panel"><h2 class="fp-panel__title">Security Considerations</h2>
              <ul class="fp-list"><li>OTP expires after 5 minutes</li><li>Max 3 verification attempts</li><li>Rate limiting on resend</li><li>Password history check</li></ul>
            </div>
            <div class="fp-panel"><h2 class="fp-panel__title">Accessibility</h2>
              <ul class="fp-list"><li>Step indicator with ARIA navigation</li><li>Focus management between steps</li><li>Error announcements via aria-live</li></ul>
            </div>
            <div class="fp-panel"><h2 class="fp-panel__title">Implementation</h2>
              <ul class="fp-list"><li>Client-side step management</li><li>Server-side OTP validation</li><li>Password hashing with bcrypt</li><li>Session invalidation on reset</li></ul>
            </div>
          </aside>
        </div>
      </main>

      <ux4g-service-footer leftText="Unified Identity Service • Government of India" rightText="Password Recovery"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .fp { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .fp-tricolor { height: 4px; background: linear-gradient(to right, #ff9933 33%, #fff 33%, #fff 66%, #138808 66%); }
    .fp-gov { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; background: var(--ux4g-svc-bg, #fff); border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); }
    .fp-gov__icon { font-size: 1.75rem; }
    .fp-gov__title { font-weight: 700; font-size: 1rem; }
    .fp-gov__sub { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .fp-main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
    .fp-content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
    .fp-form-col { max-width: 560px; }
    .fp-progress { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
    .fp-step { display: flex; align-items: center; gap: 0.375rem; flex: 1; padding: 0.625rem; background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .fp-step--active { border-color: var(--ux4g-svc-primary, #4f46e5); color: var(--ux4g-svc-primary, #4f46e5); font-weight: 700; }
    .fp-step--done { border-color: #16a34a; color: #16a34a; }
    .fp-step__num { width: 1.5rem; height: 1.5rem; border-radius: 50%; background: var(--ux4g-svc-border, #e2e8f0); display: flex; align-items: center; justify-content: center; font-size: 0.6875rem; font-weight: 700; flex-shrink: 0; }
    .fp-step--active .fp-step__num { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .fp-step--done .fp-step__num { background: #16a34a; color: #fff; }
    .fp-card { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; }
    .fp-card--success { text-align: center; }
    .fp-card__title { font-size: 1.5rem; font-weight: 800; margin: 0 0 0.25rem; }
    .fp-card__desc { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 1.5rem; }
    .fp-methods { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem; }
    .fp-method { display: block; padding: 0.875rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; text-align: center; font-size: 0.875rem; font-weight: 700; cursor: pointer; }
    .fp-method--active { border-color: var(--ux4g-svc-primary, #4f46e5); background: #eff6ff; color: var(--ux4g-svc-primary, #4f46e5); }
    .fp-field { margin-bottom: 1.25rem; }
    .fp-label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.375rem; }
    .fp-req { color: #dc2626; }
    .fp-input { width: 100%; padding: 0.625rem 0.75rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; box-sizing: border-box; }
    .fp-input:focus { border-color: var(--ux4g-svc-primary, #4f46e5); outline: none; }
    .fp-otp-group { display: flex; justify-content: center; gap: 0.75rem; margin-bottom: 1.5rem; }
    .fp-otp-input { width: 3rem; height: 3.5rem; text-align: center; font-size: 1.5rem; font-weight: 700; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; }
    .fp-otp-input:focus { border-color: var(--ux4g-svc-primary, #4f46e5); outline: none; }
    .fp-reqs { display: grid; grid-template-columns: 1fr 1fr; gap: 0.25rem; margin-top: 0.5rem; }
    .fp-req-item { font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .fp-req-item--met { color: #16a34a; }
    .fp-match { font-size: 0.75rem; margin-top: 0.25rem; }
    .fp-match--ok { color: #16a34a; }
    .fp-match--no { color: #dc2626; }
    .fp-btn { display: block; width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; text-align: center; text-decoration: none; }
    .fp-btn--primary { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .fp-btn:disabled { background: #9ca3af; cursor: not-allowed; }
    .fp-success-icon { font-size: 3rem; margin-bottom: 0.5rem; }
    .fp-tips { text-align: left; background: var(--ux4g-svc-bg-muted, #f8fafc); border: 1px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; padding: 1rem; margin-bottom: 1.5rem; }
    .fp-tips h3 { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.5rem; }
    .fp-tips ul { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    .fp-sidebar { display: flex; flex-direction: column; gap: 1rem; }
    .fp-panel { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
    .fp-panel__title { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
    .fp-panel__text { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0; }
    .fp-list, .fp-list-ol { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    @media (max-width: 768px) {
      .fp-content { grid-template-columns: 1fr; }
      .fp-form-col { max-width: 100%; }
      .fp-progress { flex-wrap: wrap; }
      .fp-methods { grid-template-columns: 1fr; }
      .fp-reqs { grid-template-columns: 1fr; }
    }
  `],
})
export class IdentityForgotPasswordComponent {
  step = 1;
  stepLabels = ['Identify', 'Verify', 'Reset', 'Success'];
  method: 'mobile' | 'email' = 'mobile';
  identifier = '';
  otpDigits: string[] = ['', '', '', '', '', ''];
  newPassword = '';
  confirmPassword = '';

  get otpComplete(): boolean { return this.otpDigits.every(d => d.length === 1); }
  get passwordsMatch(): boolean { return this.newPassword === this.confirmPassword && this.newPassword.length > 0; }

  get pwdReqs() {
    const p = this.newPassword;
    return [
      { label: 'At least 8 characters', met: p.length >= 8 },
      { label: 'One uppercase letter', met: /[A-Z]/.test(p) },
      { label: 'One lowercase letter', met: /[a-z]/.test(p) },
      { label: 'One number', met: /\d/.test(p) },
      { label: 'One special character', met: /[^A-Za-z0-9]/.test(p) },
    ];
  }

  get canReset(): boolean { return this.pwdReqs.every(r => r.met) && this.passwordsMatch; }
}
