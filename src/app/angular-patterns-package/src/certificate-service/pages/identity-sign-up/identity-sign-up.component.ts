import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'identity-sign-up-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="su">
      <div class="su-tricolor" aria-hidden="true"></div>
      <header class="su-gov">
        <span class="su-gov__icon" aria-hidden="true">🛡️</span>
        <div><div class="su-gov__title">Government of India</div><div class="su-gov__sub">Unified Identity Service — Create Account</div></div>
      </header>

      <main class="su-main">
        <div class="su-content">
          <div class="su-form-col">
            <div class="su-card">
              <h1 class="su-card__title">Create Your Account</h1>
              <p class="su-card__desc">Register to access government digital services.</p>

              <form (ngSubmit)="register()" class="su-form" novalidate>
                <div class="su-field">
                  <label class="su-label" for="fullName">Full Name <span class="su-req">*</span></label>
                  <input id="fullName" class="su-input" type="text" [(ngModel)]="fullName" name="fullName" placeholder="Enter your full name as per official records" />
                </div>

                <div class="su-field">
                  <label class="su-label" for="mobile">Mobile Number <span class="su-req">*</span></label>
                  <div class="su-prefix-wrap">
                    <span class="su-prefix">+91</span>
                    <input id="mobile" class="su-input su-input--prefixed" type="tel" [(ngModel)]="mobile" name="mobile" placeholder="10-digit mobile number" maxlength="10" />
                  </div>
                </div>

                <div class="su-field">
                  <label class="su-label" for="email">Email Address</label>
                  <input id="email" class="su-input" type="email" [(ngModel)]="email" name="email" placeholder="your.email@example.com" />
                </div>

                <div class="su-field">
                  <label class="su-label" for="newPassword">Password <span class="su-req">*</span></label>
                  <input id="newPassword" class="su-input" [type]="showPwd ? 'text' : 'password'" [(ngModel)]="password" name="password" placeholder="Create a strong password" autocomplete="new-password" />
                  <div class="su-reqs" role="list" aria-label="Password requirements">
                    <div *ngFor="let r of pwdReqs" class="su-req-item" [class.su-req-item--met]="r.met" role="listitem">
                      {{ r.met ? '✅' : '⬜' }} {{ r.label }}
                    </div>
                  </div>
                </div>

                <div class="su-field">
                  <label class="su-label" for="confirmPwd">Confirm Password <span class="su-req">*</span></label>
                  <input id="confirmPwd" class="su-input" type="password" [(ngModel)]="confirmPassword" name="confirmPassword" placeholder="Re-enter your password" />
                  <div *ngIf="confirmPassword" class="su-match" [class.su-match--ok]="passwordsMatch" [class.su-match--no]="!passwordsMatch">
                    {{ passwordsMatch ? '✅ Passwords match' : '❌ Passwords do not match' }}
                  </div>
                </div>

                <label class="su-consent">
                  <input type="checkbox" [(ngModel)]="consent" name="consent" />
                  <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                </label>

                <button type="submit" class="su-btn su-btn--primary" [disabled]="!isFormValid">Create Account &amp; Verify Mobile</button>
              </form>

              <div class="su-security">🔒 Your data is encrypted and protected under the IT Act, 2000.</div>
            </div>
          </div>

          <aside class="su-sidebar">
            <div class="su-panel">
              <h2 class="su-panel__title">Design Annotations</h2>
              <ul class="su-annotations">
                <li>Real-time password strength feedback</li>
                <li>Confirm password match indicator</li>
                <li>Mobile prefix for Indian numbers</li>
                <li>Consent required before submission</li>
                <li>Inline validation for all fields</li>
              </ul>
            </div>
            <div class="su-panel">
              <h2 class="su-panel__title">Sign Up Flow</h2>
              <ol class="su-steps">
                <li class="su-step su-step--active">Fill registration form</li>
                <li class="su-step">Verify mobile via OTP</li>
                <li class="su-step">Verify email (optional)</li>
                <li class="su-step">Account created</li>
              </ol>
            </div>
            <div class="su-panel">
              <h2 class="su-panel__title">Help</h2>
              <p class="su-panel__text">📞 1800-111-555 (Toll Free)</p>
              <p class="su-panel__text">Mon–Sat, 9 AM – 6 PM IST</p>
            </div>
          </aside>
        </div>
      </main>

      <ux4g-service-footer leftText="Unified Identity Service • Government of India" rightText="Create Account"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .su { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .su-tricolor { height: 4px; background: linear-gradient(to right, #ff9933 33%, #fff 33%, #fff 66%, #138808 66%); }
    .su-gov { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; background: var(--ux4g-svc-bg, #fff); border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); }
    .su-gov__icon { font-size: 1.75rem; }
    .su-gov__title { font-weight: 700; font-size: 1rem; }
    .su-gov__sub { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .su-main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
    .su-content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
    .su-form-col { max-width: 560px; }
    .su-card { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; }
    .su-card__title { font-size: 1.5rem; font-weight: 800; margin: 0 0 0.25rem; }
    .su-card__desc { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 1.5rem; }
    .su-form { display: flex; flex-direction: column; gap: 1.25rem; }
    .su-field { display: flex; flex-direction: column; gap: 0.375rem; }
    .su-label { font-size: 0.875rem; font-weight: 700; }
    .su-req { color: #dc2626; }
    .su-input { padding: 0.625rem 0.75rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; width: 100%; box-sizing: border-box; }
    .su-input:focus { border-color: var(--ux4g-svc-primary, #4f46e5); outline: none; }
    .su-prefix-wrap { display: flex; align-items: stretch; }
    .su-prefix { display: flex; align-items: center; padding: 0 0.75rem; background: var(--ux4g-svc-bg-muted, #f8fafc); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-right: none; border-radius: 0.375rem 0 0 0.375rem; font-size: 0.875rem; font-weight: 700; color: var(--ux4g-svc-fg-muted, #64748b); }
    .su-input--prefixed { border-radius: 0 0.375rem 0.375rem 0; }
    .su-reqs { display: grid; grid-template-columns: 1fr 1fr; gap: 0.25rem; margin-top: 0.5rem; }
    .su-req-item { font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .su-req-item--met { color: #16a34a; }
    .su-match { font-size: 0.75rem; margin-top: 0.25rem; }
    .su-match--ok { color: #16a34a; }
    .su-match--no { color: #dc2626; }
    .su-consent { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.8125rem; cursor: pointer; }
    .su-consent a { color: var(--ux4g-svc-primary, #4f46e5); text-decoration: none; }
    .su-btn { width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; }
    .su-btn--primary { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .su-btn:disabled { background: #9ca3af; cursor: not-allowed; }
    .su-security { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 0.375rem; padding: 0.75rem; font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); text-align: center; margin-top: 1.25rem; }
    .su-sidebar { display: flex; flex-direction: column; gap: 1rem; }
    .su-panel { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
    .su-panel__title { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
    .su-panel__text { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 0.25rem; }
    .su-annotations { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    .su-steps { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 2; }
    .su-step--active { color: var(--ux4g-svc-primary, #4f46e5); font-weight: 700; }
    @media (max-width: 768px) {
      .su-content { grid-template-columns: 1fr; }
      .su-form-col { max-width: 100%; }
      .su-reqs { grid-template-columns: 1fr; }
    }
  `],
})
export class IdentitySignUpComponent {
  fullName = '';
  mobile = '';
  email = '';
  password = '';
  confirmPassword = '';
  showPwd = false;
  consent = false;

  get pwdReqs() {
    const p = this.password;
    return [
      { label: 'At least 8 characters', met: p.length >= 8 },
      { label: 'One uppercase letter', met: /[A-Z]/.test(p) },
      { label: 'One lowercase letter', met: /[a-z]/.test(p) },
      { label: 'One number', met: /\d/.test(p) },
      { label: 'One special character', met: /[^A-Za-z0-9]/.test(p) },
    ];
  }

  get passwordsMatch(): boolean { return this.password === this.confirmPassword && this.password.length > 0; }

  get isFormValid(): boolean {
    return this.fullName.trim().length > 0 && this.mobile.length === 10 && this.pwdReqs.every(r => r.met) && this.passwordsMatch && this.consent;
  }

  register() { if (this.isFormValid) { /* navigate to OTP */ } }
}
