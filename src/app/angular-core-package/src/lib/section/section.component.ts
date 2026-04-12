import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';

/**
 * Page section wrapper with consistent spacing
 *
 * @example
 * // Government Portal Homepage Sections
 * <ux4g-section size="lg" background="primary" [contained]="true">
 *   <h1>Welcome to Government Services Portal</h1>
 *   <p>Access all citizen services in one place</p>
 * </ux4g-section>
 *
 * <ux4g-section size="md" background="default" [contained]="true">
 *   <h2>Popular Services</h2>
 *   <ux4g-grid cols="3" gap="1.5rem">
 *     <ux4g-card>Aadhaar Services</ux4g-card>
 *     <ux4g-card>PAN Services</ux4g-card>
 *     <ux4g-card>Passport Services</ux4g-card>
 *   </ux4g-grid>
 * </ux4g-section>
 *
 * <ux4g-section size="sm" background="subtle" [contained]="true">
 *   <ux4g-footer></ux4g-footer>
 * </ux4g-section>
 */
@Component({
  selector: 'ux4g-section',
  standalone: true,
  imports: [NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <section [class]="sectionClasses">
      <div *ngIf="contained" class="ux4g-section__container">
        <ng-content></ng-content>
      </div>
      <ng-content *ngIf="!contained"></ng-content>
    </section>
  `,
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() background: 'default' | 'subtle' | 'accent' | 'primary' = 'default';
  @Input() contained: boolean = false;
  @Input() className?: string;

  get sectionClasses(): string {
    const classes = [
      'ux4g-section',
      `ux4g-section--${this.size}`,
      `ux4g-section--bg-${this.background}`
    ];

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }
}
