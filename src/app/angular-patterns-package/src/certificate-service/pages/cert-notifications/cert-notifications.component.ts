import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

interface Notification { id: string; title: string; message: string; date: string; read: boolean; link?: string; }

@Component({
  selector: 'cert-notifications-page',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="cn"><ux4g-service-header icon="🔔" iconColor="#2563eb" [category]="'Notifications'" [title]="unreadCount + ' unread'">
      <button class="cn-link" (click)="markAllRead()">Mark all as read</button>
    </ux4g-service-header>
    <main class="cn-main">
      <div class="cn-filters"><button class="cn-filter" [class.cn-filter--active]="filter==='all'" (click)="filter='all'">All</button><button class="cn-filter" [class.cn-filter--active]="filter==='unread'" (click)="filter='unread'">Unread</button></div>
      <div *ngIf="shown.length===0" class="cn-empty">No notifications to show.</div>
      <div *ngFor="let n of shown" class="cn-item" [class.cn-item--unread]="!n.read">
        <div class="cn-item__body"><h3>{{ n.title }}</h3><p>{{ n.message }}</p><span class="cn-item__date">{{ n.date }}</span>
          <a *ngIf="n.link" [href]="n.link" class="cn-link">View details</a>
        </div>
        <button *ngIf="!n.read" class="cn-link" (click)="markRead(n.id)">Mark read</button>
      </div>
    </main>
    <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Notifications"></ux4g-service-footer></div>
  `,
  styles: [`
    .cn { min-height: 100vh; background: var(--cert-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--cert-fg, #0f172a); }
    .cn-main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
    .cn-filters { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
    .cn-filter { padding: 0.5rem 1rem; border-radius: 0.375rem; font-weight: 700; font-size: 0.875rem; border: 2px solid var(--cert-border, #e2e8f0); background: var(--cert-bg, #fff); color: var(--cert-fg-muted, #64748b); cursor: pointer; &--active { background: var(--cert-primary, #000080); color: #fff; border-color: var(--cert-primary, #000080); } }
    .cn-item { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; &--unread { border-left: 4px solid var(--cert-primary, #000080); }
      &__body { flex: 1; h3 { font-size: 0.9375rem; font-weight: 700; margin: 0 0 0.25rem; } p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin: 0 0 0.25rem; } }
      &__date { font-size: 0.75rem; color: var(--cert-fg-muted, #64748b); }
    }
    .cn-link { background: none; border: none; color: var(--cert-primary, #000080); font-weight: 700; font-size: 0.875rem; cursor: pointer; text-decoration: none; &:hover { text-decoration: underline; } }
    .cn-empty { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; text-align: center; color: var(--cert-fg-muted, #64748b); }
  `],
})
export class CertNotificationsComponent {
  filter: 'all' | 'unread' = 'all';
  notifications: Notification[] = [
    { id: '1', title: 'Application Submitted', message: 'Your certificate application CERT-2026-MH-876543 has been submitted successfully.', date: 'April 10, 2026', read: true, link: '/reference-service/certificate/status-tracker' },
    { id: '2', title: 'Payment Confirmed', message: 'Payment of ₹649 received via UPI. Transaction ID: TXN-2026041012345.', date: 'April 10, 2026', read: true },
    { id: '3', title: 'Application Under Review', message: 'Your application has been assigned to Officer Suresh Mehta for review.', date: 'April 12, 2026', read: false, link: '/reference-service/certificate/status-tracker' },
    { id: '4', title: 'Document Clarification Needed', message: 'The reviewing officer has requested additional information regarding your income proof document.', date: 'April 13, 2026', read: false, link: '/reference-service/certificate/correction-request' },
  ];
  get unreadCount() { return this.notifications.filter(n => !n.read).length; }
  get shown() { return this.filter === 'all' ? this.notifications : this.notifications.filter(n => !n.read); }
  markAllRead() { this.notifications.forEach(n => n.read = true); }
  markRead(id: string) { const n = this.notifications.find(x => x.id === id); if (n) n.read = true; }
}
