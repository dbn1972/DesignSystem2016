import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-service-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="svc-header">
      <div class="svc-header__tricolor" aria-hidden="true"></div>
      <div class="svc-header__inner">
        <div class="svc-header__left">
          <div class="svc-header__icon" [style.background]="iconColor" aria-hidden="true">{{ icon }}</div>
          <div>
            <div class="svc-header__category">{{ category }}</div>
            <h1 class="svc-header__title">{{ title }}</h1>
          </div>
        </div>
        <div class="svc-header__right">
          <ng-content></ng-content>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./service-header.component.scss'],
})
export class ServiceHeaderComponent {
  @Input() icon = '📄';
  @Input() iconColor = '#16a34a';
  @Input() category = '';
  @Input() title = '';
}
