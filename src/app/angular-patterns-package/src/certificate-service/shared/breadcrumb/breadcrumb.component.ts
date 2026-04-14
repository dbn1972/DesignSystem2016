import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

@Component({
  selector: 'cert-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="cert-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li *ngFor="let item of items; let last = last">
          <a *ngIf="item.href && !last" [href]="item.href">{{ item.label }}</a>
          <span *ngIf="!item.href || last" [attr.aria-current]="last ? 'page' : null">{{ item.label }}</span>
          <span *ngIf="!last" class="cert-breadcrumb__sep" aria-hidden="true">/</span>
        </li>
      </ol>
    </nav>
  `,
  styles: [`
    .cert-breadcrumb ol {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.25rem;
      list-style: none;
      margin: 0;
      padding: 0;
      font-size: 0.8125rem;
    }
    .cert-breadcrumb li {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: var(--cert-fg-muted, #64748b);
    }
    .cert-breadcrumb a {
      color: var(--cert-primary, #000080);
      text-decoration: none;
      font-weight: 600;
    }
    .cert-breadcrumb a:hover { text-decoration: underline; }
    .cert-breadcrumb__sep { color: var(--cert-border, #e2e8f0); }
    [aria-current="page"] { font-weight: 600; color: var(--cert-fg, #0f172a); }
  `],
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
}
