import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostListener,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Position } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Popover Component
 *
 * A contextual popover overlay that displays additional content.
 * Supports multiple positions and trigger modes (click or hover).
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-popover position="top" trigger="click">
 *   <button slot="trigger">Show Info</button>
 *   <div slot="content">Additional information about this feature</div>
 * </ux4g-popover>
 *
 * @example
 * <ux4g-popover position="right" trigger="hover" [withBackdrop]="true">
 *   <span slot="trigger">Hover me</span>
 *   <div slot="content">This is a government service tooltip</div>
 * </ux4g-popover>
 */
@Component({
  selector: 'ux4g-popover',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="popoverClasses" [attr.data-testid]="testId">
      <div
        class="ux4g-popover__trigger"
        (click)="onTriggerClick()"
        (mouseenter)="onTriggerMouseEnter()"
        (mouseleave)="onTriggerMouseLeave()"
        [attr.aria-expanded]="isOpen"
        [attr.aria-haspopup]="true"
      >
        <ng-content select="[slot='trigger']"></ng-content>
      </div>

      @if (isOpen) {
        @if (withBackdrop) {
          <div
            class="ux4g-popover__backdrop"
            (click)="close()"
          ></div>
        }

        <div
          [class]="contentClasses"
          role="dialog"
          [attr.aria-label]="ariaLabel"
          (mouseenter)="onContentMouseEnter()"
          (mouseleave)="onContentMouseLeave()"
        >
          <ng-content select="[slot='content']"></ng-content>
        </div>
      }
    </div>
  `,
  styleUrls: ['./popover.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PopoverComponent {
  /**
   * Position of the popover relative to the trigger
   * @default 'top'
   */
  @Input() position: Position = 'top';

  /**
   * Trigger mode: click or hover
   * @default 'click'
   */
  @Input() trigger: 'click' | 'hover' = 'click';

  /**
   * Whether to show a backdrop
   * @default false
   */
  @Input() withBackdrop: boolean = false;

  /**
   * Whether the popover is initially open
   * @default false
   */
  @Input() isOpen: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Event emitted when popover opens
   */
  @Output() opened = new EventEmitter<void>();

  /**
   * Event emitted when popover closes
   */
  @Output() closed = new EventEmitter<void>();

  /**
   * Track if mouse is over content (for hover mode)
   */
  private isMouseOverContent = false;

  /**
   * Track if mouse is over trigger (for hover mode)
   */
  private isMouseOverTrigger = false;

  /**
   * Hover timeout reference
   */
  private hoverTimeout?: number;

  constructor(private elementRef: ElementRef) {}

  /**
   * Computed popover wrapper classes
   */
  get popoverClasses(): string {
    return classNames(
      'ux4g-popover',
      this.isOpen && 'ux4g-popover--open',
      this.className
    );
  }

  /**
   * Computed content classes
   */
  get contentClasses(): string {
    return classNames(
      'ux4g-popover__content',
      `ux4g-popover__content--${this.position}`
    );
  }

  /**
   * Handle trigger click
   */
  onTriggerClick(): void {
    if (this.trigger === 'click') {
      this.toggle();
    }
  }

  /**
   * Handle trigger mouse enter
   */
  onTriggerMouseEnter(): void {
    if (this.trigger === 'hover') {
      this.isMouseOverTrigger = true;
      this.clearHoverTimeout();
      this.open();
    }
  }

  /**
   * Handle trigger mouse leave
   */
  onTriggerMouseLeave(): void {
    if (this.trigger === 'hover') {
      this.isMouseOverTrigger = false;
      this.scheduleClose();
    }
  }

  /**
   * Handle content mouse enter
   */
  onContentMouseEnter(): void {
    if (this.trigger === 'hover') {
      this.isMouseOverContent = true;
      this.clearHoverTimeout();
    }
  }

  /**
   * Handle content mouse leave
   */
  onContentMouseLeave(): void {
    if (this.trigger === 'hover') {
      this.isMouseOverContent = false;
      this.scheduleClose();
    }
  }

  /**
   * Schedule close after delay
   */
  private scheduleClose(): void {
    this.clearHoverTimeout();
    this.hoverTimeout = window.setTimeout(() => {
      if (!this.isMouseOverTrigger && !this.isMouseOverContent) {
        this.close();
      }
    }, 200);
  }

  /**
   * Clear hover timeout
   */
  private clearHoverTimeout(): void {
    if (this.hoverTimeout) {
      window.clearTimeout(this.hoverTimeout);
      this.hoverTimeout = undefined;
    }
  }

  /**
   * Toggle popover open/closed
   */
  toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Open popover
   */
  open(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.opened.emit();
    }
  }

  /**
   * Close popover
   */
  close(): void {
    if (this.isOpen) {
      this.isOpen = false;
      this.closed.emit();
    }
  }

  /**
   * Close on escape key
   */
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.close();
  }

  /**
   * Close on outside click
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.trigger === 'click' && this.isOpen && !this.withBackdrop) {
      const clickedInside = this.elementRef.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.close();
      }
    }
  }
}
