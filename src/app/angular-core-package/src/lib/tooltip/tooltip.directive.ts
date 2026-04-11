import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { ComponentSize } from '../../types/common.types';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

/**
 * UX4G Tooltip Directive
 *
 * A directive for adding tooltips to elements.
 * Shows on hover/focus and hides on blur/mouseleave.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <button ux4gTooltip="Click to submit">Submit</button>
 *
 * @example
 * <button
 *   ux4gTooltip="Delete this item permanently"
 *   tooltipPosition="top"
 *   tooltipSize="lg"
 * >Delete</button>
 */
@Directive({
  selector: '[ux4gTooltip]',
  standalone: true,
})
export class TooltipDirective implements OnDestroy {
  /**
   * Tooltip content
   */
  @Input('ux4gTooltip') content: string = '';

  /**
   * Tooltip position
   * @default 'top'
   */
  @Input() tooltipPosition: TooltipPosition = 'top';

  /**
   * Tooltip size
   * @default 'md'
   */
  @Input() tooltipSize: ComponentSize = 'md';

  /**
   * Delay before showing tooltip (ms)
   * @default 200
   */
  @Input() tooltipDelay: number = 200;

  /**
   * Whether tooltip is disabled
   * @default false
   */
  @Input() tooltipDisabled: boolean = false;

  private tooltipElement: HTMLElement | null = null;
  private showTimeout: any;
  private hideTimeout: any;
  private uniqueId: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.uniqueId = 'tooltip-' + Math.random().toString(36).substring(2, 11);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.tooltipDisabled || !this.content) return;

    this.clearHideTimeout();
    this.showTimeout = setTimeout(() => {
      this.show();
    }, this.tooltipDelay);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.clearShowTimeout();
    this.hideTimeout = setTimeout(() => {
      this.hide();
    }, 100);
  }

  @HostListener('focus')
  onFocus(): void {
    if (this.tooltipDisabled || !this.content) return;
    this.show();
  }

  @HostListener('blur')
  onBlur(): void {
    this.hide();
  }

  ngOnDestroy(): void {
    this.clearShowTimeout();
    this.clearHideTimeout();
    this.hide();
  }

  private show(): void {
    if (this.tooltipElement) return;

    // Create tooltip element
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.setAttribute(this.tooltipElement, 'id', this.uniqueId);
    this.renderer.setAttribute(this.tooltipElement, 'role', 'tooltip');
    this.renderer.addClass(this.tooltipElement, 'ux4g-tooltip');
    this.renderer.addClass(this.tooltipElement, 'ux4g-tooltip--' + this.tooltipPosition);
    this.renderer.addClass(this.tooltipElement, 'ux4g-tooltip--' + this.tooltipSize);

    // Create arrow
    const arrow = this.renderer.createElement('div');
    this.renderer.addClass(arrow, 'ux4g-tooltip__arrow');
    this.renderer.appendChild(this.tooltipElement, arrow);

    // Create content
    const content = this.renderer.createElement('div');
    this.renderer.addClass(content, 'ux4g-tooltip__content');
    const text = this.renderer.createText(this.content);
    this.renderer.appendChild(content, text);
    this.renderer.appendChild(this.tooltipElement, content);

    // Append to body
    this.renderer.appendChild(document.body, this.tooltipElement);

    // Set aria-describedby on host element
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'aria-describedby',
      this.uniqueId
    );

    // Position tooltip
    this.positionTooltip();

    // Trigger animation
    setTimeout(() => {
      if (this.tooltipElement) {
        this.renderer.addClass(this.tooltipElement, 'ux4g-tooltip--show');
      }
    }, 10);
  }

  private hide(): void {
    if (!this.tooltipElement) return;

    this.renderer.removeClass(this.tooltipElement, 'ux4g-tooltip--show');

    setTimeout(() => {
      if (this.tooltipElement) {
        this.renderer.removeChild(document.body, this.tooltipElement);
        this.tooltipElement = null;
      }

      // Remove aria-describedby
      this.renderer.removeAttribute(
        this.elementRef.nativeElement,
        'aria-describedby'
      );
    }, 150);
  }

  private positionTooltip(): void {
    if (!this.tooltipElement) return;

    const hostElement = this.elementRef.nativeElement;
    const tooltipElement = this.tooltipElement;
    const hostRect = hostElement.getBoundingClientRect();
    const tooltipRect = tooltipElement.getBoundingClientRect();
    const offset = 8;

    let top = 0;
    let left = 0;

    switch (this.tooltipPosition) {
      case 'top':
        top = hostRect.top - tooltipRect.height - offset;
        left = hostRect.left + (hostRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = hostRect.bottom + offset;
        left = hostRect.left + (hostRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = hostRect.top + (hostRect.height - tooltipRect.height) / 2;
        left = hostRect.left - tooltipRect.width - offset;
        break;
      case 'right':
        top = hostRect.top + (hostRect.height - tooltipRect.height) / 2;
        left = hostRect.right + offset;
        break;
    }

    // Add scroll offset
    top += window.scrollY;
    left += window.scrollX;

    // Keep tooltip within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (left < 0) {
      left = 8;
    } else if (left + tooltipRect.width > viewportWidth) {
      left = viewportWidth - tooltipRect.width - 8;
    }

    if (top < window.scrollY) {
      top = window.scrollY + 8;
    } else if (top + tooltipRect.height > window.scrollY + viewportHeight) {
      top = window.scrollY + viewportHeight - tooltipRect.height - 8;
    }

    this.renderer.setStyle(tooltipElement, 'top', top + 'px');
    this.renderer.setStyle(tooltipElement, 'left', left + 'px');
  }

  private clearShowTimeout(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }

  private clearHideTimeout(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
}
