import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

/**
 * Responsive visibility utility
 *
 * @example
 * // Mobile-only Help Text
 * <ux4g-show-hide show="mobile">
 *   <ux4g-alert variant="info">
 *     Tap on Aadhaar field to enter your 12-digit number
 *   </ux4g-alert>
 * </ux4g-show-hide>
 *
 * @example
 * // Desktop-only Sidebar
 * <ux4g-show-hide show="desktop">
 *   <aside>
 *     <h3>Quick Links</h3>
 *     <ul>
 *       <li>My Applications</li>
 *       <li>Documents</li>
 *       <li>Profile</li>
 *     </ul>
 *   </aside>
 * </ux4g-show-hide>
 *
 * @example
 * // Hide on Mobile
 * <ux4g-show-hide hide="mobile">
 *   <ux4g-table [data]="applications"></ux4g-table>
 * </ux4g-show-hide>
 */
@Component({
  selector: 'ux4g-show-hide',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="showHideClasses" [attr.aria-hidden]="isHidden ? 'true' : null">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./show-hide.component.css']
})
export class ShowHideComponent {
  @Input() show: 'always' | 'mobile' | 'tablet' | 'desktop' = 'always';
  @Input() hide: 'never' | 'mobile' | 'tablet' | 'desktop' = 'never';
  @Input() className?: string;

  get showHideClasses(): string {
    const classes = ['ux4g-show-hide'];

    if (this.show !== 'always') {
      classes.push(`ux4g-show-hide--show-${this.show}`);
    }

    if (this.hide !== 'never') {
      classes.push(`ux4g-show-hide--hide-${this.hide}`);
    }

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }

  get isHidden(): boolean {
    // This would need runtime detection for SSR
    return false;
  }
}
