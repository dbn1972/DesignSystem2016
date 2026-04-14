import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

interface CaseItem {
  ref: string; applicant: string; certType: string; submitted: string;
  status: string; statusColor: string; priority: string; priorityColor: string;
}

@Component({
  selector: 'cert-officer-cases-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="oc">
      <ux4g-service-header icon="💼" iconColor="#4f46e5" category="Officer Dashboard" title="Application Case Queue"></ux4g-service-header>

      <main class="oc-main">
        <!-- Stat Cards -->
        <section class="oc-stats" aria-label="Queue statistics">
          <div *ngFor="let s of queueStats" class="oc-stat" [class.oc-stat--active]="statusFilter === s.filterKey" (click)="statusFilter = statusFilter === s.filterKey ? '' : s.filterKey">
            <div class="oc-stat__val">{{ s.value }}</div>
            <div class="oc-stat__label">{{ s.label }}</div>
          </div>
        </section>

        <!-- Filters -->
        <div class="oc-filters">
          <input class="oc-search" type="text" placeholder="Search by name or reference…" [(ngModel)]="searchTerm" aria-label="Search cases" />
          <select class="oc-select" [(ngModel)]="statusFilter" aria-label="Filter by status">
            <option value="">All Statuses</option>
            <option *ngFor="let st of statusOptions" [value]="st">{{ st }}</option>
          </select>
          <button class="oc-btn oc-btn--outline" type="button">More Filters</button>
        </div>

        <!-- Table -->
        <div class="oc-table-wrap" *ngIf="filteredCases.length > 0">
          <table class="oc-table" role="table">
            <thead>
              <tr><th>Reference</th><th>Applicant</th><th>Certificate Type</th><th>Submitted</th><th>Status</th><th>Priority</th><th>Actions</th></tr>
            </thead>
            <tbody>
              <tr *ngFor="let c of filteredCases">
                <td class="oc-mono">{{ c.ref }}</td>
                <td>{{ c.applicant }}</td>
                <td>{{ c.certType }}</td>
                <td>{{ c.submitted }}</td>
                <td><span class="oc-badge" [style.background]="c.statusColor">{{ c.status }}</span></td>
                <td><span class="oc-badge" [style.background]="c.priorityColor">{{ c.priority }}</span></td>
                <td><a class="oc-btn oc-btn--sm" href="/reference-service/certificate/officer/review">Review</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Empty State -->
        <div *ngIf="filteredCases.length === 0" class="oc-empty" role="status">
          <span class="oc-empty__icon" aria-hidden="true">📭</span>
          <h3>No cases found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      </main>

      <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Officer Case Queue"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .oc { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .oc-main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
    .oc-stats { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
    .oc-stat { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; padding: 1rem; text-align: center; cursor: pointer; transition: border-color 0.15s; }
    .oc-stat:hover, .oc-stat--active { border-color: var(--ux4g-svc-primary, #4f46e5); }
    .oc-stat__val { font-size: 1.5rem; font-weight: 800; color: var(--ux4g-svc-primary, #4f46e5); }
    .oc-stat__label { font-size: 0.75rem; color: var(--ux4g-svc-fg-muted, #64748b); margin-top: 0.25rem; }
    .oc-filters { display: flex; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .oc-search { flex: 1; min-width: 200px; padding: 0.625rem 0.75rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; }
    .oc-search:focus { border-color: var(--ux4g-svc-primary, #4f46e5); outline: none; }
    .oc-select { padding: 0.625rem 0.75rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; background: var(--ux4g-svc-bg, #fff); }
    .oc-btn { padding: 0.5rem 1rem; font-size: 0.8125rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; text-decoration: none; display: inline-block; }
    .oc-btn--outline { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); color: var(--ux4g-svc-fg, #0f172a); }
    .oc-btn--sm { background: var(--ux4g-svc-primary, #4f46e5); color: #fff; padding: 0.375rem 0.75rem; font-size: 0.75rem; }
    .oc-table-wrap { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; overflow-x: auto; }
    .oc-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    .oc-table th { text-align: left; padding: 0.875rem 1rem; background: var(--ux4g-svc-bg-muted, #f8fafc); border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ux4g-svc-fg-muted, #64748b); }
    .oc-table td { padding: 0.875rem 1rem; border-bottom: 1px solid var(--ux4g-svc-border, #e2e8f0); }
    .oc-table tr:last-child td { border-bottom: none; }
    .oc-mono { font-family: monospace; font-size: 0.8125rem; }
    .oc-badge { display: inline-block; padding: 0.25rem 0.625rem; border-radius: 9999px; font-size: 0.6875rem; font-weight: 700; color: #fff; }
    .oc-empty { text-align: center; padding: 3rem; background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; }
    .oc-empty__icon { font-size: 3rem; display: block; margin-bottom: 0.75rem; }
    .oc-empty h3 { font-size: 1.125rem; font-weight: 700; margin: 0 0 0.25rem; }
    .oc-empty p { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b); margin: 0; }
    @media (max-width: 768px) {
      .oc-stats { grid-template-columns: repeat(2, 1fr); }
      .oc-filters { flex-direction: column; }
    }
  `],
})
export class CertOfficerCasesComponent {
  searchTerm = '';
  statusFilter = '';
  statusOptions = ['Pending', 'Under Review', 'Clarification', 'Verified', 'Rejected'];

  queueStats = [
    { label: 'Total', value: 5, filterKey: '' },
    { label: 'Pending', value: 2, filterKey: 'Pending' },
    { label: 'Under Review', value: 1, filterKey: 'Under Review' },
    { label: 'Clarification', value: 1, filterKey: 'Clarification' },
    { label: 'Verified', value: 1, filterKey: 'Verified' },
  ];

  cases: CaseItem[] = [
    { ref: 'CERT-2026-MH-876543', applicant: 'Priya Sharma', certType: 'Income Certificate', submitted: 'Apr 15, 2026', status: 'Under Review', statusColor: '#3b82f6', priority: 'High', priorityColor: '#dc2626' },
    { ref: 'CERT-2026-MH-876501', applicant: 'Rahul Verma', certType: 'Caste Certificate', submitted: 'Apr 14, 2026', status: 'Pending', statusColor: '#f97316', priority: 'Medium', priorityColor: '#f97316' },
    { ref: 'CERT-2026-MH-876498', applicant: 'Anita Desai', certType: 'Domicile Certificate', submitted: 'Apr 13, 2026', status: 'Clarification', statusColor: '#eab308', priority: 'High', priorityColor: '#dc2626' },
    { ref: 'CERT-2026-MH-876477', applicant: 'Vikram Singh', certType: 'Income Certificate', submitted: 'Apr 12, 2026', status: 'Verified', statusColor: '#16a34a', priority: 'Low', priorityColor: '#6b7280' },
    { ref: 'CERT-2026-MH-876460', applicant: 'Meena Kumari', certType: 'Birth Certificate', submitted: 'Apr 11, 2026', status: 'Pending', statusColor: '#f97316', priority: 'Medium', priorityColor: '#f97316' },
  ];

  get filteredCases(): CaseItem[] {
    return this.cases.filter(c => {
      const matchesStatus = !this.statusFilter || c.status === this.statusFilter;
      const term = this.searchTerm.toLowerCase();
      const matchesSearch = !term || c.applicant.toLowerCase().includes(term) || c.ref.toLowerCase().includes(term);
      return matchesStatus && matchesSearch;
    });
  }
}
