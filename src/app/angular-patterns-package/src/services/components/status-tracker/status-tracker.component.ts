import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MockApiService } from '../../mock-api/mock-api.service';
import { ApplicationTracker } from '../../models/service.models';

@Component({
  selector: 'ux4g-status-tracker',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './status-tracker.component.html',
  styleUrls: ['./status-tracker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusTrackerComponent implements OnInit {
  @Input() applicationId = 'APP-2026-00142';

  tracker: ApplicationTracker | null = null;
  loading = true;
  error: string | null = null;

  constructor(private api: MockApiService) {}

  ngOnInit(): void {
    this.api.getApplicationStatus(this.applicationId).subscribe({
      next: (t) => {
        this.tracker = t;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      },
    });
  }

  getStatusBadgeClass(status: string): string {
    const map: Record<string, string> = {
      draft: 'ux4g-badge--info',
      submitted: 'ux4g-badge--info',
      'under-review': 'ux4g-badge--warning',
      'document-verification': 'ux4g-badge--warning',
      approved: 'ux4g-badge--success',
      issued: 'ux4g-badge--success',
      rejected: 'ux4g-badge--error',
      'payment-pending': 'ux4g-badge--warning',
    };
    return map[status] || 'ux4g-badge--info';
  }

  isTimelineItemActive(index: number): boolean {
    return this.tracker ? index <= this.tracker.timeline.length - 1 : false;
  }
}
