import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

interface ErrorState {
  key: string; label: string; icon: string; title: string; description: string;
  details: { label: string; value: string }[];
  actions: { label: string; style: string; href?: string }[];
  tips: string[];
}

@Component({
  selector: 'identity-error-lockout-page',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="el">
      <div class="el-tricolor" aria-hidden="true"></div>
      <header class="el-gov">
        <span class="el-gov__icon" aria-hidden="true">🛡️</span>
        <div><div class="el-gov__title">Government of India</div><div class="el-gov__sub">Unified Identity Service — Error States</div></div>
      </header>

      <main class="el-main">
        <div class="el-content">
          <div class="el-form-col">
            <!-- State Selector -->
            <div class="el-selector" role="tablist" aria-label="Error state selector">
              <button *ngFor="let s of errorStates" type="button" class="el-sel-btn" [class.el-sel-btn--active]="activeKey === s.key" (click)="activeKey = s.key" role="tab" [attr.aria-selected]="activeKey === s.key">
                {{ s.label }}
              </button>
            </div>

            <!-- Error Display -->
            <div class="el-error" *ngIf="active" role="tabpanel">
              <div class="el-error__icon" aria-hidden="true">{{ active.icon }}</div>
              <h1 class="el-error__title">{{ active.title }}</h1>
              <p class="el-error__desc">{{ active.description }}</p>

              <div class="el-details">
                <div *ngFor="let d of active.details" class="el-details__row">
                  <span class="el-details__label">{{ d.label }}</span>
                  <span class="el-details__val">{{ d.value }}</span>
                </div>
              </div>

              <div class="el-actions">
                <a *ngFor="let a of active.actions" class="el-btn" [class.el-btn--primary]="a.style === 'primary'" [class.el-btn--outline]="a.style === 'outline'" [attr.href]="a.href || '#'">
                  {{ a.label }}
                </a>
              </div>

              <div class="el-tips">
                <h3>Troubleshooting Tips</h3>
                <ul><li *ngFor="let t of active.tips">{{ t }}</li></ul>
              </div>
            </div>
          </div>

          <aside class="el-sidebar">
            <div class="el-panel"><h2 class="el-panel__title">Pattern Info</h2><p class="el-panel__text">Comprehensive error state showcase covering authentication failures, account lockouts, session issues, and server errors.</p></div>
            <div class="el-panel"><h2 class="el-panel__title">Error Types</h2>
              <ul class="el-list"><li>Authentication errors (credentials, lockout)</li><li>Session errors (timeout, expired)</li><li>Infrastructure errors (network, server)</li></ul>
            </div>
            <div class="el-panel"><h2 class="el-panel__title">Recovery Actions</h2>
              <ul class="el-list"><li>Each error provides clear next steps</li><li>Primary action is always most helpful</li><li>Secondary action offers alternative</li><li>Troubleshooting tips for self-service</li></ul>
            </div>
            <div class="el-panel"><h2 class="el-panel__title">Implementation Notes</h2>
              <ul class="el-list"><li>Error codes for support reference</li><li>Countdown timers for lockout</li><li>Auto-retry for network errors</li><li>Graceful degradation patterns</li></ul>
            </div>
          </aside>
        </div>
      </main>

      <ux4g-service-footer leftText="Unified Identity Service • Government of India" rightText="Error States"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .el { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .el-tricolor { height: 4px; background: linear-gradient(to right, #ff9933 33%, #fff 33%, #fff 66%, #138808 66%); }
    .el-gov { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; background: var(--ux4g-svc-bg, #fff); border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); }
    .el-gov__icon { font-size: 1.75rem; }
    .el-gov__title { font-weight: 700; font-size: 1rem; }
    .el-gov__sub { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .el-main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
    .el-content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
    .el-form-col { max-width: 640px; }
    .el-selector { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .el-sel-btn { padding: 0.5rem 0.875rem; font-size: 0.75rem; font-weight: 700; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; background: var(--ux4g-svc-bg, #fff); cursor: pointer; white-space: nowrap; }
    .el-sel-btn--active { border-color: var(--ux4g-svc-primary, #4f46e5); background: #eff6ff; color: var(--ux4g-svc-primary, #4f46e5); }
    .el-error { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 2.5rem; text-align: center; }
    .el-error__icon { font-size: 3.5rem; margin-bottom: 0.75rem; }
    .el-error__title { font-size: 1.5rem; font-weight: 800; margin: 0 0 0.5rem; }
    .el-error__desc { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 1.5rem; max-width: 400px; margin-left: auto; margin-right: auto; }
    .el-details { border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; overflow: hidden; margin-bottom: 1.5rem; text-align: left; }
    .el-details__row { display: flex; justify-content: space-between; padding: 0.625rem 1rem; font-size: 0.8125rem; border-bottom: 1px solid var(--ux4g-svc-border, #e2e8f0); }
    .el-details__row:last-child { border-bottom: none; }
    .el-details__row:nth-child(even) { background: var(--ux4g-svc-bg-muted, #f8fafc); }
    .el-details__label { font-weight: 700; color: var(--ux4g-svc-fg-muted, #64748b); }
    .el-details__val { font-weight: 600; }
    .el-actions { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .el-btn { padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; text-decoration: none; display: inline-block; }
    .el-btn--primary { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .el-btn--outline { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); color: var(--ux4g-svc-fg, #0f172a); }
    .el-tips { text-align: left; background: var(--ux4g-svc-bg-muted, #f8fafc); border: 1px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; padding: 1rem; }
    .el-tips h3 { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.5rem; }
    .el-tips ul { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    .el-sidebar { display: flex; flex-direction: column; gap: 1rem; }
    .el-panel { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
    .el-panel__title { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
    .el-panel__text { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0; }
    .el-list { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    @media (max-width: 768px) {
      .el-content { grid-template-columns: 1fr; }
      .el-form-col { max-width: 100%; }
      .el-actions { flex-direction: column; }
    }
  `],
})
export class IdentityErrorLockoutComponent {
  activeKey = 'invalid';

  errorStates: ErrorState[] = [
    {
      key: 'invalid', label: 'Invalid Credentials', icon: '⚠️', title: 'Invalid Credentials',
      description: 'The username or password you entered is incorrect. Please check your credentials and try again.',
      details: [
        { label: 'Attempts Used', value: '3 of 5' },
        { label: 'Remaining Attempts', value: '2' },
        { label: 'Account Status', value: 'Active' },
      ],
      actions: [
        { label: 'Try Again', style: 'primary' },
        { label: 'Forgot Password', style: 'outline', href: '/reference-service/certificate/identity/forgot-password' },
      ],
      tips: ['Check Caps Lock is not enabled', 'Verify your username is correct', 'Use the password reset option if unsure', 'Contact support after 5 failed attempts'],
    },
    {
      key: 'locked', label: 'Account Locked', icon: '🔒', title: 'Account Locked',
      description: 'Your account has been temporarily locked due to multiple failed login attempts.',
      details: [
        { label: 'Lock Duration', value: '15 minutes' },
        { label: 'Failed Attempts', value: '5 of 5' },
        { label: 'Lock Expires', value: 'In 14:32' },
      ],
      actions: [
        { label: 'Unlock Account', style: 'primary', href: '/reference-service/certificate/identity/account-recovery' },
        { label: 'Contact Support', style: 'outline' },
      ],
      tips: ['Wait for the lockout period to expire', 'Use account recovery to unlock immediately', 'Contact support if you suspect unauthorized access', 'Enable two-factor authentication after recovery'],
    },
    {
      key: 'expired', label: 'Session Expired', icon: '⏰', title: 'Session Expired',
      description: 'Your session has expired due to inactivity. Please sign in again to continue.',
      details: [
        { label: 'Session Duration', value: '15 minutes' },
        { label: 'Expired At', value: '2:45 PM IST' },
        { label: 'Work Saved', value: 'Yes' },
      ],
      actions: [
        { label: 'Sign In Again', style: 'primary', href: '/reference-service/certificate/identity/sign-in' },
      ],
      tips: ['Your unsaved work has been preserved', 'You will be redirected to your last page after sign in', 'Consider enabling "Remember Me" for longer sessions'],
    },
    {
      key: 'network', label: 'Network Error', icon: '📡', title: 'Network Connection Error',
      description: 'Unable to connect to the server. Please check your internet connection and try again.',
      details: [
        { label: 'Error Type', value: 'Connection Timeout' },
        { label: 'Last Successful', value: '2:30 PM IST' },
        { label: 'Retry Attempts', value: '3' },
      ],
      actions: [
        { label: 'Retry Connection', style: 'primary' },
        { label: 'Go Back', style: 'outline' },
      ],
      tips: ['Check your Wi-Fi or mobile data connection', 'Try refreshing the page', 'Disable VPN if you are using one', 'Try again in a few minutes'],
    },
    {
      key: 'server', label: 'Server Error', icon: '🔧', title: 'Server Error',
      description: 'Something went wrong on our end. Our team has been notified and is working to fix the issue.',
      details: [
        { label: 'Error Code', value: '500' },
        { label: 'Reference', value: 'REF-2026-04-XXXXX' },
        { label: 'Timestamp', value: 'Apr 18, 2026 2:45 PM' },
      ],
      actions: [
        { label: 'Try Again', style: 'primary' },
        { label: 'Go to Homepage', style: 'outline', href: '/' },
      ],
      tips: ['This is a temporary issue on our servers', 'Try again in a few minutes', 'If the problem persists, contact support with the reference number', 'Your data has not been affected'],
    },
  ];

  get active(): ErrorState | undefined { return this.errorStates.find(s => s.key === this.activeKey); }
}
