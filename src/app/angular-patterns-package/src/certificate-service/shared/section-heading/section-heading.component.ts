import { Component, Input } from '@angular/core';

@Component({
  selector: 'cert-section-heading',
  standalone: true,
  template: `
    <h2 class="cert-section-heading" [id]="anchorId">{{ text }}</h2>
  `,
  styles: [`
    .cert-section-heading {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--cert-fg, #0f172a);
      margin: 0 0 1.5rem;
    }
  `],
})
export class SectionHeadingComponent {
  @Input() text = '';
  @Input() anchorId = '';
}
