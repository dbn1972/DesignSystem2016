import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

/**
 * Flexbox wrapper component for flexible layouts
 *
 * @example
 * // Government Form Layout
 * <ux4g-flex direction="column" gap="1.5rem">
 *   <ux4g-field>
 *     <ux4g-label>Aadhaar Number</ux4g-label>
 *     <ux4g-aadhaar-input></ux4g-aadhaar-input>
 *   </ux4g-field>
 *   <ux4g-field>
 *     <ux4g-label>PAN Number</ux4g-label>
 *     <ux4g-pan-input></ux4g-pan-input>
 *   </ux4g-field>
 * </ux4g-flex>
 *
 * @example
 * // Form Actions Row
 * <ux4g-flex justify="between" align="center" gap="1rem">
 *   <ux4g-button variant="secondary">Cancel</ux4g-button>
 *   <ux4g-flex gap="0.5rem">
 *     <ux4g-button variant="outline">Save Draft</ux4g-button>
 *     <ux4g-button variant="primary">Submit Application</ux4g-button>
 *   </ux4g-flex>
 * </ux4g-flex>
 */
@Component({
  selector: 'ux4g-flex',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="flexClasses" [style.gap]="gap">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./flex.component.css']
})
export class FlexComponent {
  @Input() direction: 'row' | 'column' | 'row-reverse' | 'column-reverse' = 'row';
  @Input() wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'nowrap';
  @Input() justify: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' = 'start';
  @Input() align: 'start' | 'end' | 'center' | 'baseline' | 'stretch' = 'stretch';
  @Input() gap: string = '0';
  @Input() inline: boolean = false;
  @Input() className?: string;

  get flexClasses(): string {
    const classes = [
      this.inline ? 'ux4g-flex--inline' : 'ux4g-flex',
      `ux4g-flex--direction-${this.direction}`,
      `ux4g-flex--wrap-${this.wrap}`,
      `ux4g-flex--justify-${this.justify}`,
      `ux4g-flex--align-${this.align}`
    ];

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }
}
