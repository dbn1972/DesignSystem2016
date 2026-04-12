import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @component ApplicationTracker
 * @description Track application status with visual timeline
 *
 * @example
 * // Passport Application Tracker
 * <ux4g-application-tracker
 *   [stages]="[
 *     { label: 'Application Submitted', status: 'completed', date: '2026-04-01', icon: '✓' },
 *     { label: 'Documents Verified', status: 'completed', date: '2026-04-05', icon: '✓' },
 *     { label: 'Police Verification', status: 'current', description: 'In progress', icon: '⏳' },
 *     { label: 'Passport Printing', status: 'pending', icon: '⏱' },
 *     { label: 'Dispatch', status: 'pending', icon: '⏱' }
 *   ]"
 *   [currentStage]="2"
 * ></ux4g-application-tracker>
 *
 * @example
 * // RTI Application Status
 * <ux4g-application-tracker
 *   [stages]="[
 *     { label: 'Application Received', status: 'completed', date: '2026-03-15' },
 *     { label: 'Fee Payment', status: 'completed', date: '2026-03-15' },
 *     { label: 'Under Review', status: 'current', description: 'Expected by 2026-04-15' },
 *     { label: 'Response Sent', status: 'pending' }
 *   ]"
 *   [vertical]="true"
 * ></ux4g-application-tracker>
 */
export interface TrackerStage {
  label: string;
  description?: string;
  date?: string;
  status: 'completed' | 'current' | 'pending' | 'rejected';
  icon?: string;
}

@Component({
  selector: 'ux4g-application-tracker',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      class="ux4g-application-tracker"
      [class.ux4g-application-tracker--vertical]="vertical"
      role="list"
      aria-label="Application progress tracker"
    >
      @for (stage of stages; track $index; let i = $index; let isLast = $last) {
        <div
          class="ux4g-application-tracker__stage"
          [class.ux4g-application-tracker__stage--completed]="stage.status === 'completed'"
          [class.ux4g-application-tracker__stage--current]="stage.status === 'current'"
          [class.ux4g-application-tracker__stage--pending]="stage.status === 'pending'"
          [class.ux4g-application-tracker__stage--rejected]="stage.status === 'rejected'"
          role="listitem"
          [attr.aria-current]="stage.status === 'current' ? 'step' : null"
        >
          <div class="ux4g-application-tracker__stage-indicator">
            <div
              class="ux4g-application-tracker__stage-icon"
              [attr.aria-label]="getStageAriaLabel(stage)"
            >
              @if (stage.icon) {
                <span>{{ stage.icon }}</span>
              } @else {
                <span>{{ i + 1 }}</span>
              }
            </div>
            @if (!isLast) {
              <div
                class="ux4g-application-tracker__stage-line"
                [class.ux4g-application-tracker__stage-line--completed]="stage.status === 'completed'"
                aria-hidden="true"
              ></div>
            }
          </div>
          <div class="ux4g-application-tracker__stage-content">
            <div class="ux4g-application-tracker__stage-label">
              {{ stage.label }}
            </div>
            @if (stage.description) {
              <div class="ux4g-application-tracker__stage-description">
                {{ stage.description }}
              </div>
            }
            @if (stage.date && showDates) {
              <div class="ux4g-application-tracker__stage-date">
                {{ stage.date }}
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
  styleUrls: ['./application-tracker.component.css']
})
export class ApplicationTrackerComponent {
  @Input() stages: TrackerStage[] = [];
  @Input() currentStage: number = 0;
  @Input() vertical: boolean = false;
  @Input() showDates: boolean = true;

  getStageAriaLabel(stage: TrackerStage): string {
    const statusText = {
      completed: 'Completed',
      current: 'In progress',
      pending: 'Pending',
      rejected: 'Rejected'
    }[stage.status];

    return `${stage.label} - ${statusText}`;
  }
}
