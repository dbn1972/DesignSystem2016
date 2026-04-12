import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Accordion Item Component
 *
 * Individual item within an accordion. Must be used inside ux4g-accordion.
 * Supports keyboard navigation (Enter, Space, Arrow keys).
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-accordion-item title="Frequently Asked Questions" [isExpanded]="true">
 *   <p>Answer to common questions about government services</p>
 * </ux4g-accordion-item>
 */
@Component({
  selector: 'ux4g-accordion-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="itemClasses" [attr.data-testid]="testId">
      <button
        type="button"
        [class]="headerClasses"
        [attr.aria-expanded]="isExpanded"
        [attr.aria-controls]="contentId"
        [id]="headerId"
        (click)="toggle()"
        (keydown.enter)="toggle()"
        (keydown.space)="onSpaceKey($event)"
      >
        <span class="ux4g-accordion-item__title">{{ title }}</span>
        <span class="ux4g-accordion-item__icon" aria-hidden="true">
          {{ isExpanded ? '−' : '+' }}
        </span>
      </button>

      <div
        [id]="contentId"
        [class]="contentClasses"
        role="region"
        [attr.aria-labelledby]="headerId"
        [attr.hidden]="!isExpanded ? true : null"
      >
        <div class="ux4g-accordion-item__body">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./accordion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AccordionItemComponent {
  /**
   * Accordion item title
   */
  @Input() title: string = '';

  /**
   * Whether the item is initially expanded
   * @default false
   */
  @Input() isExpanded: boolean = false;

  /**
   * Whether the item is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Event emitted when item is toggled
   */
  @Output() toggled = new EventEmitter<boolean>();

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-accordion-item-' + AccordionItemComponent.nextId++;

  /**
   * Get header ID
   */
  get headerId(): string {
    return this.generatedId + '-header';
  }

  /**
   * Get content ID
   */
  get contentId(): string {
    return this.generatedId + '-content';
  }

  /**
   * Computed item classes
   */
  get itemClasses(): string {
    return classNames(
      'ux4g-accordion-item',
      this.isExpanded && 'ux4g-accordion-item--expanded',
      this.disabled && 'ux4g-accordion-item--disabled',
      this.className
    );
  }

  /**
   * Computed header classes
   */
  get headerClasses(): string {
    return classNames(
      'ux4g-accordion-item__header',
      this.isExpanded && 'ux4g-accordion-item__header--expanded'
    );
  }

  /**
   * Computed content classes
   */
  get contentClasses(): string {
    return classNames(
      'ux4g-accordion-item__content',
      this.isExpanded && 'ux4g-accordion-item__content--expanded'
    );
  }

  /**
   * Toggle expanded state
   */
  toggle(): void {
    if (!this.disabled) {
      this.isExpanded = !this.isExpanded;
      this.toggled.emit(this.isExpanded);
    }
  }

  /**
   * Expand the item
   */
  expand(): void {
    if (!this.isExpanded && !this.disabled) {
      this.isExpanded = true;
      this.toggled.emit(true);
    }
  }

  /**
   * Collapse the item
   */
  collapse(): void {
    if (this.isExpanded && !this.disabled) {
      this.isExpanded = false;
      this.toggled.emit(false);
    }
  }

  /**
   * Handle space key to prevent scrolling
   */
  onSpaceKey(event: KeyboardEvent): void {
    event.preventDefault();
    this.toggle();
  }
}
