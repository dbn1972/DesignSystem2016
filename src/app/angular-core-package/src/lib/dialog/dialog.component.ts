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
import { ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Dialog Component
 *
 * A modal dialog overlay component for displaying content above the main page.
 * Supports different sizes, close button, and backdrop click to close.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-dialog
 *   [open]="isOpen"
 *   (openChange)="isOpen = $event"
 *   title="Confirm Action"
 * >
 *   <ux4g-dialog-content>
 *     Are you sure you want to proceed?
 *   </ux4g-dialog-content>
 *   <ux4g-dialog-footer>
 *     <button (click)="isOpen = false">Cancel</button>
 *     <button (click)="handleConfirm()">Confirm</button>
 *   </ux4g-dialog-footer>
 * </ux4g-dialog>
 */
@Component({
  selector: 'ux4g-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (open) {
      <div
        class="ux4g-dialog-overlay"
        [class.ux4g-dialog-overlay--no-backdrop]="!showBackdrop"
        (click)="handleBackdropClick()"
        [@fadeIn]
      >
        <div
          role="dialog"
          [attr.aria-modal]="true"
          [attr.aria-labelledby]="titleId"
          [attr.aria-describedby]="descriptionId"
          [attr.data-testid]="testId"
          [class]="dialogClasses"
          (click)="$event.stopPropagation()"
          [@slideIn]
        >
          @if (title || showCloseButton) {
            <div class="ux4g-dialog__header">
              @if (title) {
                <h2 [id]="titleId" class="ux4g-dialog__title">
                  {{ title }}
                </h2>
              }
              @if (showCloseButton) {
                <button
                  type="button"
                  class="ux4g-dialog__close"
                  aria-label="Close dialog"
                  (click)="handleClose()"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              }
            </div>
          }

          <div [id]="descriptionId" class="ux4g-dialog__body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    }
  `,
  styleUrls: ['./dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent {
  /**
   * Whether the dialog is open
   * @default false
   */
  @Input() open: boolean = false;

  /**
   * Dialog title
   */
  @Input() title?: string;

  /**
   * Dialog size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Whether to show close button
   * @default true
   */
  @Input() showCloseButton: boolean = true;

  /**
   * Whether to show backdrop
   * @default true
   */
  @Input() showBackdrop: boolean = true;

  /**
   * Whether clicking backdrop closes dialog
   * @default true
   */
  @Input() closeOnBackdropClick: boolean = true;

  /**
   * Whether pressing Escape closes dialog
   * @default true
   */
  @Input() closeOnEscape: boolean = true;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Open state change event emitter
   */
  @Output() openChange = new EventEmitter<boolean>();

  /**
   * Close event emitter
   */
  @Output() closed = new EventEmitter<void>();

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-dialog-' + DialogComponent.nextId++;

  /**
   * Get title ID
   */
  get titleId(): string {
    return this.generatedId + '-title';
  }

  /**
   * Get description ID
   */
  get descriptionId(): string {
    return this.generatedId + '-description';
  }

  /**
   * Computed dialog classes
   */
  get dialogClasses(): string {
    return classNames(
      'ux4g-dialog',
      'ux4g-dialog--' + this.size,
      this.className
    );
  }

  /**
   * Handle backdrop click
   */
  handleBackdropClick(): void {
    if (this.closeOnBackdropClick) {
      this.handleClose();
    }
  }

  /**
   * Handle close
   */
  handleClose(): void {
    this.openChange.emit(false);
    this.closed.emit();
  }

  /**
   * Handle escape key press
   */
  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent): void {
    if (this.open && this.closeOnEscape) {
      event.preventDefault();
      this.handleClose();
    }
  }
}

/**
 * UX4G Dialog Content Component
 *
 * Content section for a dialog.
 */
@Component({
  selector: 'ux4g-dialog-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ux4g-dialog__content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DialogContentComponent {}

/**
 * UX4G Dialog Footer Component
 *
 * Footer section for a dialog, typically containing actions.
 */
@Component({
  selector: 'ux4g-dialog-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ux4g-dialog__footer">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DialogFooterComponent {}
