import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Empty state component for displaying no data placeholders.
 * Used when there are no results, no data available, or after completion states.
 *
 * @example
 * // No Applications Found
 * <ux4g-empty-state
 *   title="No Applications Found"
 *   description="You haven't submitted any applications yet. Start a new application to track your government services."
 *   icon="📋"
 *   actionText="Start New Application"
 *   secondaryActionText="View Guidelines"
 *   (action)="startApplication()"
 *   (secondaryAction)="viewGuidelines()"
 * ></ux4g-empty-state>
 *
 * @example
 * // No Search Results (Government Schemes)
 * <ux4g-empty-state
 *   title="No Schemes Found"
 *   description="We couldn't find any government schemes matching your criteria. Try adjusting your filters or search terms."
 *   illustration="no-results"
 *   actionText="Clear Filters"
 *   secondaryActionText="Browse All Schemes"
 *   size="md"
 *   (action)="clearFilters()"
 * ></ux4g-empty-state>
 *
 * @example
 * // Application Submitted Successfully
 * <ux4g-empty-state
 *   title="Application Submitted Successfully"
 *   description="Your application has been received. You will receive a confirmation email shortly with your application number."
 *   illustration="success"
 *   icon="✅"
 *   actionText="View Application Status"
 *   actionHref="/applications"
 *   size="lg"
 * ></ux4g-empty-state>
 *
 * @example
 * // Error State
 * <ux4g-empty-state
 *   title="Unable to Load Documents"
 *   description="There was an error loading your documents. Please check your internet connection and try again."
 *   illustration="error"
 *   actionText="Retry"
 *   secondaryActionText="Contact Support"
 *   (action)="retryLoad()"
 *   (secondaryAction)="contactSupport()"
 * ></ux4g-empty-state>
 */
@Component({
  selector: 'ux4g-empty-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class EmptyStateComponent {
  /**
   * Title text
   */
  @Input() title: string = '';

  /**
   * Description text
   */
  @Input() description: string = '';

  /**
   * Custom icon (emoji or icon)
   */
  @Input() icon?: string;

  /**
   * Illustration variant
   */
  @Input() illustration?: 'no-data' | 'no-results' | 'error' | 'success' = 'no-data';

  /**
   * Primary action button text
   */
  @Input() actionText?: string;

  /**
   * Primary action href (if it's a link)
   */
  @Input() actionHref?: string;

  /**
   * Secondary action button text
   */
  @Input() secondaryActionText?: string;

  /**
   * Size variant
   */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Emits when primary action is clicked
   */
  @Output() action = new EventEmitter<void>();

  /**
   * Emits when secondary action is clicked
   */
  @Output() secondaryAction = new EventEmitter<void>();

  /**
   * Get computed CSS classes
   */
  get emptyStateClasses(): string {
    const classes = [
      'ux4g-empty-state',
      `ux4g-empty-state--${this.size}`
    ];

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }

  /**
   * Handle primary action click
   */
  onAction(): void {
    this.action.emit();
  }

  /**
   * Handle secondary action click
   */
  onSecondaryAction(): void {
    this.secondaryAction.emit();
  }
}
