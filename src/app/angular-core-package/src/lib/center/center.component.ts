import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

/**
 * Center content horizontally and/or vertically
 *
 * @example
 * // Centered Login Form
 * <ux4g-center [vertical]="true" [horizontal]="true" maxWidth="400px">
 *   <ux4g-card>
 *     <h2>Government Portal Login</h2>
 *     <ux4g-aadhaar-input></ux4g-aadhaar-input>
 *     <ux4g-button variant="primary">Login with Aadhaar</ux4g-button>
 *   </ux4g-card>
 * </ux4g-center>
 *
 * @example
 * // Centered Page Content
 * <ux4g-center [horizontal]="true" maxWidth="1200px">
 *   <main>
 *     <h1>Citizen Services</h1>
 *     <p>Access government services online</p>
 *   </main>
 * </ux4g-center>
 */
@Component({
  selector: 'ux4g-center',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="centerClasses" [style.max-width]="maxWidth">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./center.component.css']
})
export class CenterComponent {
  @Input() horizontal: boolean = true;
  @Input() vertical: boolean = true;
  @Input() inline: boolean = false;
  @Input() maxWidth?: string;
  @Input() className?: string;

  get centerClasses(): string {
    const classes = ['ux4g-center'];

    if (this.inline) {
      classes.push('ux4g-center--inline');
    }

    if (this.horizontal && this.vertical) {
      classes.push('ux4g-center--both');
    } else if (this.horizontal) {
      classes.push('ux4g-center--horizontal');
    } else if (this.vertical) {
      classes.push('ux4g-center--vertical');
    }

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }
}
