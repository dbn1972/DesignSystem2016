import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItemComponent } from './accordion-item.component';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Accordion Component
 *
 * A collapsible sections component with keyboard navigation support.
 * Can operate in single or multiple expansion mode.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-accordion>
 *   <ux4g-accordion-item title="Section 1">
 *     Content for section 1
 *   </ux4g-accordion-item>
 *   <ux4g-accordion-item title="Section 2">
 *     Content for section 2
 *   </ux4g-accordion-item>
 * </ux4g-accordion>
 *
 * @example
 * <ux4g-accordion [allowMultiple]="false">
 *   <ux4g-accordion-item title="Benefits Eligibility">
 *     Information about eligibility requirements
 *   </ux4g-accordion-item>
 *   <ux4g-accordion-item title="Application Process">
 *     Steps to apply for benefits
 *   </ux4g-accordion-item>
 * </ux4g-accordion>
 */
@Component({
  selector: 'ux4g-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="accordionClasses" [attr.data-testid]="testId">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./accordion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements AfterContentInit {
  /**
   * Whether multiple items can be expanded at once
   * @default true
   */
  @Input() allowMultiple: boolean = true;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Event emitted when an item is expanded
   */
  @Output() itemExpanded = new EventEmitter<number>();

  /**
   * Event emitted when an item is collapsed
   */
  @Output() itemCollapsed = new EventEmitter<number>();

  /**
   * Reference to all accordion items
   */
  @ContentChildren(AccordionItemComponent) items!: QueryList<AccordionItemComponent>;

  /**
   * Computed accordion classes
   */
  get accordionClasses(): string {
    return classNames(
      'ux4g-accordion',
      this.className
    );
  }

  ngAfterContentInit(): void {
    this.setupItemListeners();
  }

  /**
   * Setup listeners for accordion items
   */
  private setupItemListeners(): void {
    this.items.forEach((item, index) => {
      item.toggled.subscribe((isExpanded: boolean) => {
        if (isExpanded) {
          this.itemExpanded.emit(index);
          if (!this.allowMultiple) {
            this.collapseOthers(index);
          }
        } else {
          this.itemCollapsed.emit(index);
        }
      });
    });
  }

  /**
   * Collapse all items except the specified index
   */
  private collapseOthers(exceptIndex: number): void {
    this.items.forEach((item, index) => {
      if (index !== exceptIndex) {
        item.collapse();
      }
    });
  }
}
