/**
 * Certificate Officer Dashboard — 3 Web Components
 * Matches React: CertificateOfficerDashboard, CertificateOfficerCases, CertificateOfficerReview
 */
import { UX4GElement } from '../../base/UX4GElement';

const SVC = 'Certificate Application Service';
const P = '/reference-service/certificate/officer';

// ═══════════════════════════════════════════════════════════════════════════
// 1. OFFICER DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════
export class UX4GCertOfficerDashboard extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .m { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
        .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem; }
        .stat { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-left-width: 4px; border-radius: 0.5rem; padding: 1.25rem; }
        .stat__val { font-size: 2rem; font-weight: 800; }
        .stat__label { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); margin-top: 0.25rem; }
        .metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem; }
        .metric { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; text-align: center; }
        .metric__val { font-size: 1.5rem; font-weight: 800; color: var(--ux4g-color-interactive-default, #000080); }
        .metric__label { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); margin-top: 0.25rem; }
        .grid { display: grid; grid-template-columns: 1fr 340px; gap: 1.5rem; }
        .section { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; overflow: hidden; margin-bottom: 1.5rem; }
        .section--urgent { border-color: #fca5a5; }
        .section__title { font-size: 0.9375rem; font-weight: 700; padding: 1rem 1.25rem; border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); margin: 0; background: var(--ux4g-color-background, #f8fafc); }
        .section__title--urgent { background: #fef2f2; border-color: #fca5a5; }
        .actions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; padding: 1.25rem; }
        .action { display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; text-decoration: none; color: var(--ux4g-color-text-default, #0f172a); font-size: 0.8125rem; font-weight: 600; }
        .action:hover { border-color: var(--ux4g-color-interactive-default, #000080); }
        .action__icon { font-size: 1.25rem; }
        .activity { list-style: none; margin: 0; padding: 0; }
        .activity__item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.875rem 1.25rem; border-bottom: 1px solid var(--ux4g-color-border, #e2e8f0); }
        .activity__item:last-child { border-bottom: none; }
        .activity__dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; margin-top: 0.35rem; }
        .activity__action { font-size: 0.8125rem; font-weight: 600; }
        .activity__meta { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); margin-top: 0.125rem; }
        .urgent { padding: 1rem 1.25rem; border-bottom: 1px solid var(--ux4g-color-border, #e2e8f0); }
        .urgent:last-child { border-bottom: none; }
        .urgent__name { font-weight: 700; font-size: 0.875rem; }
        .urgent__type { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); }
        .urgent__wait { font-size: 0.75rem; color: #dc2626; margin-top: 0.25rem; }
        .urgent__ref { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); font-family: monospace; }
        .goal { padding: 0.75rem 1.25rem; }
        .goal__header { display: flex; justify-content: space-between; font-size: 0.8125rem; font-weight: 600; margin-bottom: 0.375rem; }
        .goal__bar { height: 8px; background: var(--ux4g-color-border, #e2e8f0); border-radius: 4px; overflow: hidden; }
        .goal__fill { height: 100%; border-radius: 4px; }
        .link { font-size: 0.875rem; color: var(--ux4g-color-interactive-default, #000080); font-weight: 700; text-decoration: none; display: block; text-align: center; padding: 0.75rem; border-top: 2px solid var(--ux4g-color-border, #e2e8f0); }
        .officer { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .btn--urgent { display: block; width: calc(100% - 2.5rem); margin: 0 1.25rem 1.25rem; padding: 0.75rem; background: #dc2626; color: #fff; font-weight: 700; font-size: 0.875rem; border: none; border-radius: 0.375rem; cursor: pointer; text-align: center; text-decoration: none; }
        @media (max-width: 900px) { .stats { grid-template-columns: repeat(2, 1fr); } .metrics { grid-template-columns: 1fr; } .grid { grid-template-columns: 1fr; } .actions-grid { grid-template-columns: 1fr; } }
      </style>
      <ux4g-service-header icon="📊" icon-color="#4f46e5" category="Officer Portal" heading="Dashboard Overview">
        <span class="officer" slot="actions">Officer Suresh Mehta, District Office Mumbai</span>
      </ux4g-service-header>
      <div class="m">
        <div class="stats">
          <div class="stat" style="border-left-color:#3b82f6"><div class="stat__val" style="color:#3b82f6">47</div><div class="stat__label">Total Cases</div></div>
          <div class="stat" style="border-left-color:#f97316"><div class="stat__val" style="color:#f97316">12</div><div class="stat__label">Pending Review</div></div>
          <div class="stat" style="border-left-color:#16a34a"><div class="stat__val" style="color:#16a34a">6</div><div class="stat__label">Completed Today</div></div>
          <div class="stat" style="border-left-color:#dc2626"><div class="stat__val" style="color:#dc2626">5</div><div class="stat__label">Clarification Needed</div></div>
        </div>
        <div class="metrics">
          <div class="metric"><div class="metric__val">87%</div><div class="metric__label">Approval Rate</div></div>
          <div class="metric"><div class="metric__val">4.2 days</div><div class="metric__label">Avg Processing Time</div></div>
          <div class="metric"><div class="metric__val">8</div><div class="metric__label">Cases Under Review</div></div>
        </div>
        <div class="grid">
          <div>
            <div class="section"><h2 class="section__title">Quick Actions</h2><div class="actions-grid">
              <a href="${P}/cases" class="action"><span class="action__icon">📋</span>View Case Queue</a>
              <a href="${P}/cases" class="action"><span class="action__icon">⏳</span>Pending Applications</a>
              <a href="${P}/cases" class="action"><span class="action__icon">⚠</span>Clarifications</a>
              <a href="${P}/cases" class="action"><span class="action__icon">✅</span>Completed Cases</a>
            </div></div>
            <div class="section"><h2 class="section__title">Recent Activity</h2><ul class="activity">
              <li class="activity__item"><span class="activity__dot" style="background:#16a34a"></span><div><div class="activity__action">Approved — CERT-2026-MH-876543</div><div class="activity__meta">Priya Sharma · 10 min ago</div></div></li>
              <li class="activity__item"><span class="activity__dot" style="background:#f97316"></span><div><div class="activity__action">Requested Clarification — CERT-2026-MH-875421</div><div class="activity__meta">Rajesh Kumar · 25 min ago</div></div></li>
              <li class="activity__item"><span class="activity__dot" style="background:#3b82f6"></span><div><div class="activity__action">Under Review — CERT-2026-MH-874112</div><div class="activity__meta">Anita Desai · 1 hour ago</div></div></li>
              <li class="activity__item"><span class="activity__dot" style="background:#dc2626"></span><div><div class="activity__action">Rejected — CERT-2026-MH-873098</div><div class="activity__meta">Vikram Singh · 2 hours ago</div></div></li>
            </ul><a href="${P}/cases" class="link">View All Activity →</a></div>
          </div>
          <div>
            <div class="section section--urgent"><h2 class="section__title section__title--urgent">🚨 Urgent Cases</h2>
              <div class="urgent"><div class="urgent__name">Meera Patel</div><div class="urgent__type">Income Certificate</div><div class="urgent__wait">⏳ 8 days waiting</div><div class="urgent__ref">CERT-2026-MH-872567</div></div>
              <div class="urgent"><div class="urgent__name">Arjun Reddy</div><div class="urgent__type">Domicile Certificate</div><div class="urgent__wait">⏳ 7 days waiting</div><div class="urgent__ref">CERT-2026-MH-871234</div></div>
              <div class="urgent"><div class="urgent__name">Kavita Joshi</div><div class="urgent__type">Caste Certificate</div><div class="urgent__wait">⏳ 6 days waiting</div><div class="urgent__ref">CERT-2026-MH-870987</div></div>
              <a href="${P}/cases" class="btn--urgent">Review Urgent Cases</a>
            </div>
            <div class="section"><h2 class="section__title">Today's Goals</h2>
              <div class="goal"><div class="goal__header"><span>Review</span><span>8/12</span></div><div class="goal__bar"><div class="goal__fill" style="width:66.7%;background:#3b82f6"></div></div></div>
              <div class="goal"><div class="goal__header"><span>Clarifications</span><span>3/5</span></div><div class="goal__bar"><div class="goal__fill" style="width:60%;background:#f97316"></div></div></div>
              <div class="goal"><div class="goal__header"><span>Approve/Reject</span><span>6/10</span></div><div class="goal__bar"><div class="goal__fill" style="width:60%;background:#16a34a"></div></div></div>
            </div>
          </div>
        </div>
      </div>
      <ux4g-service-footer left-text="${SVC} • Officer Portal" right-text="Dashboard"></ux4g-service-footer>
    `;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. OFFICER CASES
// ═══════════════════════════════════════════════════════════════════════════

interface CaseItem { ref: string; applicant: string; certType: string; submitted: string; status: string; statusColor: string; priority: string; priorityColor: string; }

const CASES: CaseItem[] = [
  { ref: 'CERT-2026-MH-876543', applicant: 'Priya Sharma', certType: 'Income Certificate', submitted: 'Apr 10, 2026', status: 'Pending', statusColor: '#f97316', priority: 'High', priorityColor: '#dc2626' },
  { ref: 'CERT-2026-MH-875421', applicant: 'Rajesh Kumar', certType: 'Domicile Certificate', submitted: 'Apr 9, 2026', status: 'Under Review', statusColor: '#9333ea', priority: 'Normal', priorityColor: '#6b7280' },
  { ref: 'CERT-2026-MH-874112', applicant: 'Anita Desai', certType: 'Caste Certificate', submitted: 'Apr 8, 2026', status: 'Clarification', statusColor: '#dc2626', priority: 'High', priorityColor: '#dc2626' },
  { ref: 'CERT-2026-MH-873098', applicant: 'Vikram Singh', certType: 'Birth Certificate', submitted: 'Apr 7, 2026', status: 'Verified', statusColor: '#16a34a', priority: 'Normal', priorityColor: '#6b7280' },
  { ref: 'CERT-2026-MH-872567', applicant: 'Meera Patel', certType: 'Income Certificate', submitted: 'Apr 6, 2026', status: 'Pending', statusColor: '#f97316', priority: 'Urgent', priorityColor: '#dc2626' },
];

export class UX4GCertOfficerCases extends UX4GElement {
  private _search = '';
  private _statusFilter = '';

  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  private get filtered(): CaseItem[] {
    return CASES.filter(c => {
      const matchStatus = !this._statusFilter || c.status === this._statusFilter;
      const q = this._search.toLowerCase();
      const matchSearch = !q || c.applicant.toLowerCase().includes(q) || c.ref.toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }

  protected render(): void {
    const rows = this.filtered.map(c => `
      <tr><td style="font-family:monospace;font-size:0.8125rem;font-weight:700;">${c.ref}</td><td style="font-weight:600;">${c.applicant}</td><td>${c.certType}</td><td>${c.submitted}</td>
      <td><span style="display:inline-block;padding:0.25rem 0.625rem;border-radius:9999px;font-size:0.6875rem;font-weight:700;color:#fff;background:${c.statusColor}">${c.status}</span></td>
      <td><span style="display:inline-block;padding:0.25rem 0.625rem;border-radius:9999px;font-size:0.6875rem;font-weight:700;color:#fff;background:${c.priorityColor}">${c.priority}</span></td>
      <td><a href="${P}/review" style="display:inline-block;padding:0.375rem 0.75rem;background:var(--ux4g-color-interactive-default,#000080);color:#fff;font-size:0.75rem;font-weight:700;border-radius:0.375rem;text-decoration:none;">Review</a></td></tr>
    `).join('');

    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .m { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
        .stat-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
        .stat { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1rem; text-align: center; cursor: pointer; }
        .stat:hover, .stat--active { border-color: var(--ux4g-color-interactive-default, #000080); }
        .stat__val { font-size: 1.5rem; font-weight: 800; color: var(--ux4g-color-interactive-default, #000080); }
        .stat__label { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); margin-top: 0.25rem; }
        .filters { display: flex; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .search { flex: 1; min-width: 200px; padding: 0.625rem 0.75rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; }
        .search:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
        .select { padding: 0.625rem 0.75rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; background: var(--ux4g-color-surface, #fff); }
        .table-wrap { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
        th { text-align: left; padding: 0.875rem 1rem; background: var(--ux4g-color-background, #f8fafc); border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ux4g-color-text-muted, #64748b); }
        td { padding: 0.875rem 1rem; border-bottom: 1px solid var(--ux4g-color-border, #e2e8f0); }
        tr:last-child td { border-bottom: none; }
        .empty { text-align: center; padding: 3rem; color: var(--ux4g-color-text-muted, #64748b); }
        @media (max-width: 768px) { .stat-row { grid-template-columns: repeat(2, 1fr); } .filters { flex-direction: column; } }
      </style>
      <ux4g-service-header icon="💼" icon-color="#4f46e5" category="Officer Dashboard" heading="Application Case Queue"></ux4g-service-header>
      <div class="m">
        <div class="stat-row">
          <div class="stat ${!this._statusFilter ? 'stat--active' : ''}" data-filter=""><div class="stat__val">5</div><div class="stat__label">Total</div></div>
          <div class="stat ${this._statusFilter === 'Pending' ? 'stat--active' : ''}" data-filter="Pending"><div class="stat__val">2</div><div class="stat__label">Pending</div></div>
          <div class="stat ${this._statusFilter === 'Under Review' ? 'stat--active' : ''}" data-filter="Under Review"><div class="stat__val">1</div><div class="stat__label">Under Review</div></div>
          <div class="stat ${this._statusFilter === 'Clarification' ? 'stat--active' : ''}" data-filter="Clarification"><div class="stat__val">1</div><div class="stat__label">Clarification</div></div>
          <div class="stat ${this._statusFilter === 'Verified' ? 'stat--active' : ''}" data-filter="Verified"><div class="stat__val">1</div><div class="stat__label">Verified</div></div>
        </div>
        <div class="filters">
          <input class="search" id="oc-search" type="text" placeholder="Search by name or reference…" value="${this._search}" />
          <select class="select" id="oc-filter"><option value="">All Statuses</option><option value="Pending">Pending</option><option value="Under Review">Under Review</option><option value="Clarification">Clarification</option><option value="Verified">Verified</option></select>
        </div>
        ${this.filtered.length ? `<div class="table-wrap"><table><thead><tr><th>Reference</th><th>Applicant</th><th>Certificate Type</th><th>Submitted</th><th>Status</th><th>Priority</th><th>Actions</th></tr></thead><tbody>${rows}</tbody></table></div>` : '<div class="empty">📭 No cases found. Try adjusting your filters.</div>'}
      </div>
      <ux4g-service-footer left-text="${SVC} • Officer Dashboard" right-text="Case Queue"></ux4g-service-footer>
    `;

    this.root.querySelector('#oc-search')?.addEventListener('input', (e) => { this._search = (e.target as HTMLInputElement).value; this.render(); });
    this.root.querySelector('#oc-filter')?.addEventListener('change', (e) => { this._statusFilter = (e.target as HTMLSelectElement).value; this.render(); });
    this.root.querySelectorAll('.stat').forEach(el => {
      el.addEventListener('click', () => { const f = (el as HTMLElement).dataset.filter || ''; this._statusFilter = this._statusFilter === f ? '' : f; this.render(); });
    });
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. OFFICER REVIEW
// ═══════════════════════════════════════════════════════════════════════════
export class UX4GCertOfficerReview extends UX4GElement {
  private _decision: 'approve' | 'correct' | 'reject' | '' = '';
  private _comments = '';

  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .m { max-width: 800px; margin: 0 auto; padding: 2rem 1.5rem; display: flex; flex-direction: column; gap: 1.5rem; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; overflow: hidden; }
        .card__header { padding: 1rem 1.5rem; font-weight: 700; background: var(--ux4g-color-background, #f8fafc); border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); }
        .card__body { padding: 1.5rem; }
        .details { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .detail__label { display: block; font-size: 0.75rem; font-weight: 700; color: var(--ux4g-color-text-muted, #64748b); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
        .detail__val { font-size: 0.9375rem; font-weight: 600; }
        .mono { font-family: monospace; }
        .badge { display: inline-block; padding: 0.25rem 0.625rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; color: #fff; background: #3b82f6; }
        .decisions { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
        .dec { padding: 0.875rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; background: var(--ux4g-color-surface, #fff); font-size: 0.875rem; font-weight: 700; cursor: pointer; text-align: center; }
        .dec--approve.dec--active { border-color: #16a34a; background: #f0fdf4; color: #16a34a; }
        .dec--correct.dec--active { border-color: #f97316; background: #fff7ed; color: #f97316; }
        .dec--reject.dec--active { border-color: #dc2626; background: #fef2f2; color: #dc2626; }
        .field { margin-bottom: 1.5rem; }
        .label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.5rem; }
        .req { color: #dc2626; }
        .textarea { width: 100%; padding: 0.75rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; resize: vertical; box-sizing: border-box; min-height: 100px; }
        .textarea:focus { border-color: var(--ux4g-color-interactive-default, #000080); outline: none; }
        .submit { width: 100%; padding: 0.875rem; background: var(--ux4g-color-interactive-default, #000080); color: #fff; font-weight: 700; font-size: 0.875rem; border: none; border-radius: 0.375rem; cursor: pointer; }
        .submit:disabled { background: #9ca3af; cursor: not-allowed; }
        .back { font-size: 0.875rem; color: var(--ux4g-color-interactive-default, #000080); text-decoration: none; font-weight: 600; }
        @media (max-width: 640px) { .details { grid-template-columns: 1fr; } .decisions { grid-template-columns: 1fr; } }
      </style>
      <ux4g-service-header icon="📝" icon-color="#4f46e5" category="Officer Dashboard" heading="Review Application">
        <a href="${P}/cases" class="back" slot="actions">← Back to Cases</a>
      </ux4g-service-header>
      <div class="m">
        <div class="card"><div class="card__header">Application Details</div><div class="card__body"><div class="details">
          <div><span class="detail__label">Applicant</span><span class="detail__val">Priya Sharma</span></div>
          <div><span class="detail__label">Certificate Type</span><span class="detail__val">Income Certificate</span></div>
          <div><span class="detail__label">Status</span><span class="detail__val"><span class="badge">Under Review</span></span></div>
          <div><span class="detail__label">Reference</span><span class="detail__val mono">CERT-2026-MH-876543</span></div>
        </div></div></div>
        <div class="card"><div class="card__header">Decision</div><div class="card__body">
          <div class="decisions">
            <button type="button" class="dec dec--approve ${this._decision === 'approve' ? 'dec--active' : ''}" data-d="approve">✅ Approve & Issue</button>
            <button type="button" class="dec dec--correct ${this._decision === 'correct' ? 'dec--active' : ''}" data-d="correct">🔄 Request Correction</button>
            <button type="button" class="dec dec--reject ${this._decision === 'reject' ? 'dec--active' : ''}" data-d="reject">❌ Reject</button>
          </div>
          <div class="field"><label class="label">Officer Comments <span class="req">*</span></label><textarea class="textarea" id="or-comments" placeholder="Provide your comments and reasoning…">${this._comments}</textarea></div>
          <button type="button" class="submit" id="or-submit" ${!this._decision || !this._comments.trim() ? 'disabled' : ''}>Submit Decision</button>
        </div></div>
      </div>
      <ux4g-service-footer left-text="${SVC} • Officer Portal" right-text="Officer Review"></ux4g-service-footer>
    `;

    this.root.querySelectorAll('.dec').forEach(el => {
      el.addEventListener('click', () => { this._decision = (el as HTMLElement).dataset.d as any; this.render(); });
    });
    this.root.querySelector('#or-comments')?.addEventListener('input', (e) => { this._comments = (e.target as HTMLTextAreaElement).value; const btn = this.root.querySelector('#or-submit') as HTMLButtonElement; if (btn) btn.disabled = !this._decision || !this._comments.trim(); });
    this.root.querySelector('#or-submit')?.addEventListener('click', () => { if (this._decision && this._comments.trim()) window.location.href = `${P}/cases`; });
  }
}

// Register
if (!customElements.get('ux4g-cert-officer-dashboard')) customElements.define('ux4g-cert-officer-dashboard', UX4GCertOfficerDashboard);
if (!customElements.get('ux4g-cert-officer-cases')) customElements.define('ux4g-cert-officer-cases', UX4GCertOfficerCases);
if (!customElements.get('ux4g-cert-officer-review')) customElements.define('ux4g-cert-officer-review', UX4GCertOfficerReview);
