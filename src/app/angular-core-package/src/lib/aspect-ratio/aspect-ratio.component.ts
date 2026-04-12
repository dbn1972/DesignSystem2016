import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

/**
 * Maintain aspect ratio for images, videos, and iframes
 *
 * @example
 * // Government Video Tutorial
 * <ux4g-aspect-ratio ratio="16/9">
 *   <video src="aadhaar-enrollment-tutorial.mp4" controls></video>
 * </ux4g-aspect-ratio>
 *
 * @example
 * // Document Preview Thumbnail
 * <ux4g-aspect-ratio ratio="4/3">
 *   <img src="pan-card-scan.jpg" alt="PAN Card">
 * </ux4g-aspect-ratio>
 *
 * @example
 * // Square Profile Photo
 * <ux4g-aspect-ratio ratio="1/1">
 *   <img src="citizen-photo.jpg" alt="Citizen Photo">
 * </ux4g-aspect-ratio>
 */
@Component({
  selector: 'ux4g-aspect-ratio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="ux4g-aspect-ratio" [class]="className" [style.--aspect-ratio]="ratioValue">
      <div class="ux4g-aspect-ratio__content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./aspect-ratio.component.css']
})
export class AspectRatioComponent {
  @Input() ratio: string = '16/9';
  @Input() className?: string;

  get ratioValue(): string {
    // Parse ratio string (e.g., "16/9" -> 16/9)
    const parts = this.ratio.split('/');
    if (parts.length === 2) {
      const width = parseFloat(parts[0]);
      const height = parseFloat(parts[1]);
      return `${width} / ${height}`;
    }
    return '16 / 9'; // default
  }
}
