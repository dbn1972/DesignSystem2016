import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'identity-session-timeout-page',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="st">
      <div class="st-tricolor" aria-hidden="true"></div>
      <header class="st-gov">
        <span class="st-gov__icon" aria-hidden="true">🛡️</span>
        <div><div class="st-gov__title">Government of India</div><div class="st-gov__sub">Unified Identity Service — Session Management</div></div>
      </header>

      <main class="st-main">
        <div class="st-content">
          <div class="st-form-col">
            <!-- State Selector -->
            <div class="st-selector">
              <button *ngFor="let s of states" type="button" class="st-sel-btn" [class.st-sel-btn--active]="state === s.key" (click)="state = s.key">{{ s.label }}</button>
            </div>

            <!-- Warning State -->
            <div *ngIf="state === 'warning'" class="st-overlay" role="dialog" aria-modal="true" aria-label="Session timeout warning">
              <div class="st-modal">
                <div class="st-modal__icon" aria-hidden="true">⏰</div>
                <h1 class="st-modal__title">Session Expiring Soon</h1>
                <p class="st-modal__desc">Your session will expire due to inactivity. Any unsaved work will be preserved.</p>
                <div class="st-countdown" aria-live="polite">
                  <div class="st-countdown__time">{{ formattedTime }}</div>
                  <div class="st-countdown__label">Time Remaining</div>
                </div>
                <div class="st-modal__actions">
                  <button type="button" class="st-btn st-btn--primary" (click)="state = 'extended'">Stay Logged In</button>
                  <button type="button" class="st-btn st-btn--outline" (click)="state = 'expired'">Log Out Now</button>
                </div>
                <p class="st-modal__explain">For your security, sessions automatically expire after 15 minutes of inactivity.</p>
              </div>
            </div>

            <!-- Timed Out State -->
            <div *ngIf="state === 'expired'" class="st-card st-card--expired">
              <div class="st-card__icon" aria-hidden="true">🔒</div>
              <h1 class="st-card__title">Session Expired</h1>
              <p class="st-card__desc">Your session has timed out due to inactivity.</p>
              <div class="st-notice">
                <span aria-hidden="true">💾</span> Your work has been saved. You can continue where you left off after signing in.
              </div>
              <a class="st-btn st-btn--primary" href="/reference-service/certificate/identity/sign-in">Sign In Again</a>
            </div>

            <!-- Extended State -->
            <div *ngIf="state === 'extended'" class="st-card st-card--extended">
              <div class="st-card__icon" aria-hidden="true">✅</div>
              <h1 class="st-card__title">Session Extended</h1>
              <p class="st-card__desc">Your session has been extended successfully. You can continue working.</p>
              <div class="st-session-info">
                <div class="st-session-info__row"><span>Session Status</span><span class="st-badge st-badge--green">Active</span></div>
                <div class="st-session-info__row"><span>Last Activity</span><span>Just now</span></div>
                <div class="st-session-info__row"><span>Session Timeout</span><span>15 minutes of inactivity</span></div>
                <div class="st-session-info__row"><span>Maximum Duration</span><span>8 hours</span></div>
              </div>
            </div>
          </div>

          <aside class="st-sidebar">
            <div class="st-panel"><h2 class="st-panel__title">Pattern Info</h2><p class="st-panel__text">Session timeout pattern with warning modal, expired state, and extension confirmation. Protects user data while maintaining security.</p></div>
            <div class="st-panel"><h2 class="st-panel__title">Security Rationale</h2>
              <ul class="st-list"><li>Prevents unauthorized access on shared devices</li><li>Complies with government security standards</li><li>Auto-saves work before expiry</li></ul>
            </div>
            <div class="st-panel"><h2 class="st-panel__title">Timing Configuration</h2>
              <ul class="st-list"><li>Idle timeout: 15 minutes</li><li>Warning shown: 2 minutes before</li><li>Max session: 8 hours</li><li>Extension adds: 15 minutes</li></ul>
            </div>
            <div class="st-panel"><h2 class="st-panel__title">Implementation Notes</h2>
              <ul class="st-list"><li>Uses requestAnimationFrame for timer</li><li>Heartbeat API to extend server session</li><li>localStorage for cross-tab sync</li><li>Focus trap in warning modal</li></ul>
            </div>
          </aside>
        </div>
      </main>

      <ux4g-service-footer leftText="Unified Identity Service • Government of India" rightText="Session Management"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .st { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .st-tricolor { height: 4px; background: linear-gradient(to right, #ff9933 33%, #fff 33%, #fff 66%, #138808 66%); }
    .st-gov { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; background: var(--ux4g-svc-bg, #fff); border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); }
    .st-gov__icon { font-size: 1.75rem; }
    .st-gov__title { font-weight: 700; font-size: 1rem; }
    .st-gov__sub { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .st-main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
    .st-content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
    .st-form-col { max-width: 600px; }
    .st-selector { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .st-sel-btn { padding: 0.5rem 1rem; font-size: 0.8125rem; font-weight: 700; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; background: var(--ux4g-svc-bg, #fff); cursor: pointer; }
    .st-sel-btn--active { border-color: var(--ux4g-svc-primary, #4f46e5); background: #eff6ff; color: var(--ux4g-svc-primary, #4f46e5); }
    .st-overlay { background: rgba(0,0,0,0.5); border-radius: 0.5rem; padding: 2rem; display: flex; align-items: center; justify-content: center; min-height: 400px; }
    .st-modal { background: var(--ux4g-svc-bg, #fff); border-radius: 0.75rem; padding: 2.5rem; text-align: center; max-width: 420px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
    .st-modal__icon { font-size: 3rem; margin-bottom: 0.5rem; }
    .st-modal__title { font-size: 1.375rem; font-weight: 800; margin: 0 0 0.5rem; }
    .st-modal__desc { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 1.5rem; }
    .st-countdown { margin-bottom: 1.5rem; }
    .st-countdown__time { font-size: 2.5rem; font-weight: 800; color: #dc2626; font-family: monospace; }
    .st-countdown__label { font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .st-modal__actions { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1rem; }
    .st-modal__explain { font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0; }
    .st-card { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 2.5rem; text-align: center; }
    .st-card--expired { border-color: #fca5a5; }
    .st-card--extended { border-color: #86efac; }
    .st-card__icon { font-size: 3rem; margin-bottom: 0.5rem; }
    .st-card__title { font-size: 1.5rem; font-weight: 800; margin: 0 0 0.25rem; }
    .st-card__desc { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0 0 1.5rem; }
    .st-notice { background: #f0fdf4; border: 1px solid #86efac; border-radius: 0.375rem; padding: 0.875rem; font-size: 0.8125rem; margin-bottom: 1.5rem; text-align: left; }
    .st-btn { display: block; width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; text-align: center; text-decoration: none; }
    .st-btn--primary { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; }
    .st-btn--outline { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); color: var(--ux4g-svc-fg, #0f172a); }
    .st-session-info { border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; overflow: hidden; text-align: left; }
    .st-session-info__row { display: flex; justify-content: space-between; padding: 0.75rem 1rem; font-size: 0.875rem; border-bottom: 1px solid var(--ux4g-svc-border, #e2e8f0); }
    .st-session-info__row:last-child { border-bottom: none; }
    .st-session-info__row:nth-child(even) { background: var(--ux4g-svc-bg-muted, #f8fafc); }
    .st-badge { display: inline-block; padding: 0.125rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; }
    .st-badge--green { background: #dcfce7; color: #16a34a; }
    .st-sidebar { display: flex; flex-direction: column; gap: 1rem; }
    .st-panel { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
    .st-panel__title { font-size: 0.875rem; font-weight: 700; margin: 0 0 0.75rem; }
    .st-panel__text { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0; }
    .st-list { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); line-height: 1.8; }
    @media (max-width: 768px) {
      .st-content { grid-template-columns: 1fr; }
      .st-form-col { max-width: 100%; }
    }
  `],
})
export class IdentitySessionTimeoutComponent {
  state: 'warning' | 'expired' | 'extended' = 'warning';
  countdown = 120;
  private timer: any;

  states = [
    { key: 'warning' as const, label: '⏰ Warning' },
    { key: 'expired' as const, label: '🔒 Timed Out' },
    { key: 'extended' as const, label: '✅ Extended' },
  ];

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
    this.timer = setInterval(() => {
      if (this.countdown > 0) this.countdown--;
      else { clearInterval(this.timer); this.state = 'expired'; }
    }, 1000);
  }
}
