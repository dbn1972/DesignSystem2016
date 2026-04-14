import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'identity-sign-in-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="si">
      <div class="si-tricolor" aria-hidden="true"></div>
      <header class="si-gov">
        <span class="si-gov__icon" aria-hidden="true">🛡️</span>
        <div>
          <div class="si-gov__title">Government of India</div>
          <div class="si-gov__sub">Unified Identity Service</div>
        </div>
      </header>

      <main class="si-main">
        <div class="si-content">
          <!-- Form Column -->
          <div class="si-form-col">
            <div class="si-card">
              <h1 class="si-card__title">Sign In to Your Account</h1>
              <p class="si-card__desc">Access government services securely.</p>

              <form (ngSubmit)="signIn()" class="si-form" novalidate>
                <div class="si-field">
                  <label class="si-label" for="username">Username or Mobile Number</label>
                  <input id="username" class="si-input" type="text" [(ngModel)]="username" name="username" placeholder="Enter username or mobile number" autocomplete="username" />
                </div>

                <div class="si-field">
                  <label class="si-label" for="password">Password</label>
                  <div class="si-input-wrap">
                    <input id="password" class="si-input" [type]="showPassword ? 'text' : 'password'" [(ngModel)]="password" name="password" placeholder="Enter your password" autocomplete="current-password" />
                    <button type="button" class="si-toggle" (click)="showPassword = !showPassword" [attr.aria-label]="showPassword ? 'Hide password' : 'Show password'">
                      {{ showPassword ? '🙈' : '👁️' }}
                    </button>
                  </div>
                </div>

                <div class="si-row">
                  <label class="si-check"><input type="checkbox" [(ngModel)]="rememberMe" name="remember" /> Remember me</label>
                  <a class="si-link" href="/reference-service/certificate/identity/forgot-password">Forgot password?</a>
                </div>

                <button type="submit" class="si-btn si-btn--primary">Sign In</button>
              </form>

              <div class="si-divider"><span>Or sign in with</span></div>

              <div class="si-alt-btns">
                <button type="button" class="si-btn si-btn--outline">📱 Mobile OTP</button>
                <button type="button" class="si-btn si-btn--outline">🆔 Aadhaar</button>
              </div>

              <div class="si-security">🔒 Your connection is encrypted and secure. We never store your password in plain text.</div>

              <div class="si-recovery">
                <a href="/reference-service/certificate/identity/account-recovery">Can't access your account? Recover it here →</a>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="si-sidebar">
            <div class="si-panel">
              <h2 class="si-panel__title">Design Annotations</h2>
              <ul class="si-annotations">
                <li *ngFor="let a of annotations">{{ a }}</li>
              </ul>
            </div>
            <div class="si-panel">
              <h2 class="si-panel__title">Sign In Options</h2>
              <p class="si-panel__text">This page supports three authentication methods: username/password, mobile OTP, and Aadhaar-based verification.</p>
            </div>
            <div class="si-panel">
              <h2 class="si-panel__title">Help</h2>
              <p class="si-panel__text">For assistance, call the helpline:</p>
              <p class="si-panel__text si-panel__text--bold">📞 1800-111-555 (Toll Free)</p>
              <p class="si-panel__text">Available Mon–Sat, 9 AM – 6 PM IST</p>
            </div>
          </aside>
        </div>
      </main>

      <ux4g-service-footer leftText="Unified Identity Service • Government of India" rightText="Sign In"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .si { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .si-tricolor { height: 4px; background: linear-gradient(to right, #ff9933 33%, #fff 33%, #fff 66%, #138808 66%); }
    .si-gov { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; background: var(--ux4g-svc-bg, #fff); border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); }
    .si-gov__icon { font-size: 1.75rem; }
    .si-gov__title { font-weight: 700; font-size: 1rem; }
    .si-gov__sub { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .si-main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
    .si-content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
    .si-form-col { max-width: 560px; }
    .si-card { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; }
    .si-card__title { font-size: 1.5rem; font-weight: 800; margin: 0 0 0.25rem; }
    .si-card__desc { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 1.5rem; }
    .si-form { display: flex; flex-direction: column; gap: 1.25rem; }
    .si-field { display: flex; flex-direction: column; gap: 0.375rem; }
    .si-label { font-size: 0.875rem; font-weight: 700; }
    .si-input { padding: 0.625rem 0.75rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; width: 100%; box-sizing: border-box; }
    .si-input:focus { border-color: var(--ux4g-svc-primary, #4f46e5); outline: none; }
    .si-input-wrap { position: relative; }
    .si-input-wrap .si-input { padding-right: 2.5rem; }
    .si-toggle { position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 1.125rem; }
    .si-row { display: flex; justify-content: space-between; align-items: center; }
    .si-check { font-size: 0.8125rem; display: flex; align-items: center; gap: 0.375rem; cursor: pointer; }
    .si-link { font-size: 0.8125rem; color: var(--ux4g-svc-primary, #4f46e5); text-decoration: none; font-weight: 600; }
    .si-link:hover { text-decoration: underline; }
    .si-btn { width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; text-align: center; }
    .si-btn--primary { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .si-btn--outline { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); color: var(--ux4g-svc-fg, #0f172a); }
    .si-divider { text-align: center; margin: 1.5rem 0; position: relative; }
    .si-divider::before { content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: var(--ux4g-svc-border, #e2e8f0); }
    .si-divider span { background: var(--ux4g-svc-bg, #fff); padding: 0 0.75rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); position: relative; }
    .si-alt-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem; }
    .si-security { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 0.375rem; padding: 0.75rem; font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); text-align: center; margin-bottom: 1rem; }
    .si-recovery { text-align: center; }
    .si-recovery a { font-size: 0.8125rem; color: var(--ux4g-svc-primary, #4f46e5); text-decoration: none; }
    .si-sidebar { display: flex; flex-direction: column; gap: 1rem; }
    .si-panel { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
    .si-panel__title { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
    .si-panel__text { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 0.375rem; }
    .si-panel__text--bold { font-weight: 700; color: var(--ux4g-svc-fg, #0f172a); }
    .si-annotations { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    @media (max-width: 768px) {
      .si-content { grid-template-columns: 1fr; }
      .si-form-col { max-width: 100%; }
      .si-alt-btns { grid-template-columns: 1fr; }
    }
  `],
})
export class IdentitySignInComponent {
  username = '';
  password = '';
  showPassword = false;
  rememberMe = false;
  annotations = [
    'Form uses autocomplete attributes for browser autofill',
    'Password toggle uses aria-label for screen readers',
    'Focus states meet WCAG 2.1 AA contrast requirements',
    'Error messages appear inline below each field',
    'Tab order follows logical reading sequence',
    'Mobile OTP and Aadhaar provide passwordless alternatives',
  ];
  signIn() { /* prototype navigation */ }
}
