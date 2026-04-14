import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-officer-dashboard-page',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="od">
      <ux4g-service-header icon="📊" iconColor="#4f46e5" category="Officer Portal" title="Dashboard Overview">
        <span class="od-officer">Officer Suresh Mehta, District Office Mumbai</span>
      </ux4g-service-header>

      <main class="od-main">
        <!-- Stat Cards -->
        <section class="od-stats" aria-label="Case statistics">
          <div *ngFor="let s of stats" class="od-stat" [style.border-left-color]="s.color">
            <div class="od-stat__val" [style.color]="s.color">{{ s.value }}</div>
            <div class="od-stat__label">{{ s.label }}</div>
          </div>
        </section>

        <div class="od-grid">
          <div class="od-col">
            <!-- Metric Cards -->
            <section class="od-metrics" aria-label="Performance metrics">
              <div class="od-metric" *ngFor="let m of metrics">
                <div class="od-metric__val">{{ m.value }}</div>
                <div class="od-metric__label">{{ m.label }}</div>
              </div>
            </section>

            <!-- Quick Actions -->
            <section class="od-section">
              <h2 class="od-section__title">Quick Actions</h2>
              <div class="od-actions">
                <a *ngFor="let a of actions" class="od-action" [attr.href]="a.href" role="link">
                  <span class="od-action__icon" aria-hidden="true">{{ a.icon }}</span>
                  <span class="od-action__label">{{ a.label }}</span>
                </a>
              </div>
            </section>

            <!-- Recent Activity -->
            <section class="od-section">
              <h2 class="od-section__title">Recent Activity</h2>
              <ul class="od-activity" role="list">
                <li *ngFor="let r of recentActivity" class="od-activity__item">
                  <span class="od-activity__dot" [style.background]="r.dotColor" aria-hidden="true"></span>
                  <div class="od-activity__body">
                    <div class="od-activity__action">{{ r.action }} — <strong>{{ r.ref }}</strong></div>
                    <div class="od-activity__meta">{{ r.applicant }} · {{ r.time }}</div>
                  </div>
                </li>
              </ul>
            </section>
          </div>

          <!-- Sidebar -->
          <aside class="od-sidebar">
            <!-- Urgent Cases -->
            <section class="od-section od-section--urgent">
              <h2 class="od-section__title od-section__title--urgent">🚨 Urgent Cases</h2>
              <div *ngFor="let u of urgentCases" class="od-urgent">
                <div class="od-urgent__name">{{ u.applicant }}</div>
                <div class="od-urgent__type">{{ u.certType }}</div>
                <div class="od-urgent__wait">⏳ {{ u.daysWaiting }} days waiting</div>
                <div class="od-urgent__ref">{{ u.ref }}</div>
              </div>
            </section>

            <!-- Today's Goals -->
            <section class="od-section">
              <h2 class="od-section__title">Today's Goals</h2>
              <div *ngFor="let g of goals" class="od-goal">
                <div class="od-goal__header">
                  <span>{{ g.label }}</span>
                  <span>{{ g.done }}/{{ g.total }}</span>
                </div>
                <div class="od-goal__bar" role="progressbar" [attr.aria-valuenow]="g.done" [attr.aria-valuemin]="0" [attr.aria-valuemax]="g.total" [attr.aria-label]="g.label">
                  <div class="od-goal__fill" [style.width.%]="(g.done / g.total) * 100" [style.background]="g.color"></div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>

      <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Officer Dashboard"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .od { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .od-officer { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .od-main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
    .od-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem; }
    .od-stat { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-left-width: 4px; border-radius: 0.5rem; padding: 1.25rem; }
    .od-stat__val { font-size: 2rem; font-weight: 800; }
    .od-stat__label { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin-top: 0.25rem; }
    .od-grid { display: grid; grid-template-columns: 1fr 340px; gap: 1.5rem; }
    .od-col { display: flex; flex-direction: column; gap: 1.5rem; }
    .od-metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .od-metric { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; text-align: center; }
    .od-metric__val { font-size: 1.5rem; font-weight: 800; color: var(--ux4g-svc-primary, #4f46e5); }
    .od-metric__label { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); margin-top: 0.25rem; }
    .od-section { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; overflow: hidden; }
    .od-section--urgent { border-color: #fca5a5; }
    .od-section__title { font-size: 0.9375rem; font-weight: 700; padding: 1rem 1.25rem; border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); margin: 0; background: var(--ux4g-svc-bg-muted, #f8fafc); }
    .od-section__title--urgent { background: #fef2f2; border-color: #fca5a5; }
    .od-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; padding: 1.25rem; }
    .od-action { display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; text-decoration: none; color: var(--ux4g-svc-fg, #0f172a); font-size: 0.8125rem; font-weight: 600; transition: border-color 0.15s; }
    .od-action:hover { border-color: var(--ux4g-svc-primary, #4f46e5); }
    .od-action__icon { font-size: 1.25rem; }
    .od-activity { list-style: none; margin: 0; padding: 0; }
    .od-activity__item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.875rem 1.25rem; border-bottom: 1px solid var(--ux4g-svc-border, #e2e8f0); }
    .od-activity__item:last-child { border-bottom: none; }
    .od-activity__dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; margin-top: 0.35rem; }
    .od-activity__action { font-size: 0.8125rem; font-weight: 600; }
    .od-activity__meta { font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); margin-top: 0.125rem; }
    .od-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
    .od-urgent { padding: 1rem 1.25rem; border-bottom: 1px solid var(--ux4g-svc-border, #e2e8f0); }
    .od-urgent:last-child { border-bottom: none; }
    .od-urgent__name { font-weight: 700; font-size: 0.875rem; }
    .od-urgent__type { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted, #64748b); }
    .od-urgent__wait { font-size: 0.75rem; color: #dc2626; margin-top: 0.25rem; }
    .od-urgent__ref { font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); font-family: monospace; margin-top: 0.125rem; }
    .od-goal { padding: 0.75rem 1.25rem; }
    .od-goal__header { display: flex; justify-content: space-between; font-size: 0.8125rem; font-weight: 600; margin-bottom: 0.375rem; }
    .od-goal__bar { height: 8px; background: var(--ux4g-svc-border, #e2e8f0); border-radius: 4px; overflow: hidden; }
    .od-goal__fill { height: 100%; border-radius: 4px; transition: width 0.3s; }
    @media (max-width: 900px) {
      .od-stats { grid-template-columns: repeat(2, 1fr); }
      .od-grid { grid-template-columns: 1fr; }
      .od-metrics { grid-template-columns: 1fr; }
      .od-actions { grid-template-columns: 1fr; }
    }
  `],
})
export class CertOfficerDashboardComponent {
  stats = [
    { label: 'Total Cases', value: 47, color: '#3b82f6' },
    { label: 'Pending Review', value: 12, color: '#f97316' },
    { label: 'Completed Today', value: 6, color: '#16a34a' },
    { label: 'Clarification Needed', value: 5, color: '#dc2626' },
  ];
  metrics = [
    { label: 'Approval Rate', value: '87%' },
    { label: 'Avg Processing Time', value: '4.2 days' },
    { label: 'Cases Under Review', value: '8' },
  ];
  actions = [
    { icon: '📋', label: 'View Pending Cases', href: '/reference-service/certificate/officer/cases' },
    { icon: '🔍', label: 'Search Applications', href: '/reference-service/certificate/officer/cases' },
    { icon: '📊', label: 'Generate Reports', href: '/reference-service/certificate/officer/cases' },
    { icon: '⚙️', label: 'Manage Templates', href: '/reference-service/certificate/officer/cases' },
  ];
  recentActivity = [
    { action: 'Approved', ref: 'CERT-2026-MH-876543', applicant: 'Priya Sharma', time: '10 min ago', dotColor: '#16a34a' },
    { action: 'Requested Clarification', ref: 'CERT-2026-MH-876501', applicant: 'Rahul Verma', time: '25 min ago', dotColor: '#f97316' },
    { action: 'Under Review', ref: 'CERT-2026-MH-876498', applicant: 'Anita Desai', time: '1 hour ago', dotColor: '#3b82f6' },
    { action: 'Rejected', ref: 'CERT-2026-MH-876477', applicant: 'Vikram Singh', time: '2 hours ago', dotColor: '#dc2626' },
  ];
  urgentCases = [
    { applicant: 'Meena Kumari', certType: 'Caste Certificate', daysWaiting: 12, ref: 'CERT-2026-MH-876410' },
    { applicant: 'Arjun Patel', certType: 'Income Certificate', daysWaiting: 9, ref: 'CERT-2026-MH-876422' },
    { applicant: 'Sunita Devi', certType: 'Domicile Certificate', daysWaiting: 8, ref: 'CERT-2026-MH-876435' },
  ];
  goals = [
    { label: 'Review', done: 8, total: 12, color: '#3b82f6' },
    { label: 'Clarifications', done: 3, total: 5, color: '#f97316' },
    { label: 'Approve/Reject', done: 6, total: 10, color: '#16a34a' },
  ];
}
