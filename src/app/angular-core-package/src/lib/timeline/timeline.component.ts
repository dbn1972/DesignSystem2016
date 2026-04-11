import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export interface TimelineItem {
  id?: string;
  title: string;
  description?: string;
  timestamp?: string;
  icon?: string;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
}

export type TimelineMode = 'left' | 'right' | 'alternate';

/**
 * UX4G Timeline Component
 *
 * Displays a vertical timeline of events with icons, timestamps, and descriptions.
 * Supports different alignment modes and color coding.
 *
 * @example
 * <ux4g-timeline [items]="events"></ux4g-timeline>
 *
 * @example
 * <ux4g-timeline
 *   [items]="events"
 *   mode="alternate"
 * ></ux4g-timeline>
 */
@Component({
  selector: 'ux4g-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="timelineClasses" [attr.data-testid]="testId">
      @for (item of items; track item.id || $index) {
        <div [class]="getItemClasses($index)">
          <div [class]="dotWrapperClasses">
            <div [class]="getDotClasses(item)">
              @if (item.icon) {
                <span class="ux4g-timeline__icon">{{ item.icon }}</span>
              }
            </div>
            @if (!$last) {
              <div class="ux4g-timeline__line"></div>
            }
          </div>

          <div class="ux4g-timeline__content">
            @if (item.timestamp) {
              <div class="ux4g-timeline__timestamp">{{ item.timestamp }}</div>
            }
            <div class="ux4g-timeline__title">{{ item.title }}</div>
            @if (item.description) {
              <div class="ux4g-timeline__description">{{ item.description }}</div>
            }
          </div>
        </div>
      }
    </div>
  `,
  styleUrls: ['./timeline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TimelineComponent {
  /**
   * Timeline items to display
   */
  @Input() items: TimelineItem[] = [];

  /**
   * Timeline alignment mode
   * @default 'left'
   */
  @Input() mode: TimelineMode = 'left';

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Computed timeline classes
   */
  get timelineClasses(): string {
    return classNames(
      'ux4g-timeline',
      'ux4g-timeline--' + this.mode,
      this.className
    );
  }

  /**
   * Computed dot wrapper classes
   */
  get dotWrapperClasses(): string {
    return classNames('ux4g-timeline__dot-wrapper');
  }

  /**
   * Get item classes
   */
  getItemClasses(index: number): string {
    const isAlternate = this.mode === 'alternate';
    const isRight = this.mode === 'right' || (isAlternate && index % 2 === 1);

    return classNames(
      'ux4g-timeline__item',
      isRight && 'ux4g-timeline__item--right'
    );
  }

  /**
   * Get dot classes for item
   */
  getDotClasses(item: TimelineItem): string {
    return classNames(
      'ux4g-timeline__dot',
      item.color && 'ux4g-timeline__dot--' + item.color
    );
  }
}
