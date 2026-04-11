import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

/**
 * UX4G Drawer Component
 *
 * Slide-out panel that overlays page content.
 * Supports four positions with backdrop and keyboard controls.
 *
 * @example
 * <ux4g-drawer
 *   [isOpen]="showDrawer"
 *   (close)="showDrawer = false"
 * >
 *   <h2>Drawer Content</h2>
 * </ux4g-drawer>
 *
 * @example
 * <ux4g-drawer
 *   [isOpen]="showDrawer"
 *   position="right"
 *   size="lg"
 *   (close)="showDrawer = false"
 * >
 *   Content here
 * </ux4g-drawer>
 */
@Component({
  selector: 'ux4g-drawer',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isOpen) {
      <div
        class="ux4g-drawer__backdrop"
        [class.ux4g-drawer__backdrop--visible]="isOpen"
        (click)="handleBackdropClick()"
      ></div>

      <div
        [class]="drawerClasses"
        role="dialog"
        [attr.aria-modal]="true"
        [attr.aria-label]="ariaLabel"
        [attr.data-testid]="testId"
        tabindex="-1"
      >
        @if (showClose) {
          <button
            type="button"
            class="ux4g-drawer__close"
            aria-label="Close drawer"
            (click)="handleClose()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        }

        <div class="ux4g-drawer__content">
          <ng-content></ng-content>
        </div>
      </div>
    }
  `,
  styleUrls: ['./drawer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DrawerComponent {
  /**
   * Whether drawer is open
   * @default false
   */
  @Input() isOpen: boolean = false;

  /**
   * Drawer position
   * @default 'right'
   */
  @Input() position: DrawerPosition = 'right';

  /**
   * Drawer size
   * @default 'md'
   */
  @Input() size: DrawerSize = 'md';

  /**
   * Whether to show close button
   * @default true
   */
  @Input() showClose: boolean = true;

  /**
   * Whether clicking backdrop closes drawer
   * @default true
   */
  @Input() closeOnBackdrop: boolean = true;

  /**
   * ARIA label for drawer
   */
  @Input() ariaLabel?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Emitted when drawer should close
   */
  @Output() closeDrawer = new EventEmitter<void>();

  /**
   * Handle escape key
   */
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isOpen) {
      this.handleClose();
    }
  }

  /**
   * Computed drawer classes
   */
  get drawerClasses(): string {
    return classNames(
      'ux4g-drawer',
      'ux4g-drawer--' + this.position,
      'ux4g-drawer--' + this.size,
      this.isOpen && 'ux4g-drawer--open',
      this.className
    );
  }

  /**
   * Handle backdrop click
   */
  handleBackdropClick(): void {
    if (this.closeOnBackdrop) {
      this.handleClose();
    }
  }

  /**
   * Handle close
   */
  handleClose(): void {
    this.closeDrawer.emit();
  }
}
