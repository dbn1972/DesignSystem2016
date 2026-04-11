/**
 * UX4G Styles - Angular Usage Example
 * How to integrate @ux4g/styles in an Angular application
 */

/**
 * Step 1: Install dependencies
 * npm install @ux4g/tokens @ux4g/styles
 */

/**
 * Step 2: Import in angular.json
 * Add to "styles" array in angular.json:
 *
 * "styles": [
 *   "node_modules/@ux4g/styles/dist/index.css",
 *   "src/styles.css"
 * ]
 *
 * OR import specific layers:
 * "styles": [
 *   "node_modules/@ux4g/styles/dist/base.css",
 *   "node_modules/@ux4g/styles/dist/utilities.css",
 *   "node_modules/@ux4g/styles/dist/components.css",
 *   "src/styles.css"
 * ]
 */

/**
 * Step 3: Or import in global styles.css
 * @import '@ux4g/styles';
 */

/**
 * Example: Form Component
 */

// form.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form class="ux4g-card" (ngSubmit)="onSubmit()">
      <h2>Register for Services</h2>

      <div class="ux4g-form-group">
        <label for="name" class="ux4g-label ux4g-label-required">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          class="ux4g-input"
          [(ngModel)]="formData.name"
          name="name"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div class="ux4g-form-group">
        <label for="email" class="ux4g-label ux4g-label-required">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          class="ux4g-input"
          [(ngModel)]="formData.email"
          name="email"
          placeholder="your.email@example.gov.in"
          [attr.aria-invalid]="emailError ? 'true' : null"
          required
        />
        <span class="ux4g-helper-text">
          We'll never share your email with anyone else.
        </span>
        <div *ngIf="emailError" class="ux4g-error-message">
          {{ emailError }}
        </div>
      </div>

      <div class="ux4g-choice">
        <input
          type="checkbox"
          id="terms"
          [(ngModel)]="formData.terms"
          name="terms"
        />
        <label for="terms">
          I agree to the terms and conditions
        </label>
      </div>

      <div class="ux4g-form-actions">
        <button type="submit" class="ux4g-button-primary">
          Submit Application
        </button>
        <button type="reset" class="ux4g-button-secondary">
          Clear Form
        </button>
      </div>
    </form>
  `
})
export class ExampleFormComponent {
  formData = {
    name: '',
    email: '',
    terms: false
  };

  emailError = '';

  onSubmit() {
    console.log('Form submitted:', this.formData);
  }
}

/**
 * Example: Alert Component
 */

// alert.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type AlertType = 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="ux4g-alert ux4g-alert-{{ type }}"
      role="alert"
    >
      <div class="ux4g-alert-icon">{{ icon }}</div>
      <div class="ux4g-alert-content">
        <div class="ux4g-alert-title" *ngIf="title">{{ title }}</div>
        <div class="ux4g-alert-description">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})
export class AlertComponent {
  @Input() type: AlertType = 'info';
  @Input() title?: string;

  get icon(): string {
    const icons = {
      info: 'ℹ',
      success: '✓',
      warning: '⚠',
      error: '✕'
    };
    return icons[this.type];
  }
}

/**
 * Example: Navigation Component
 */

// navigation.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="ux4g-header ux4g-header-government">
      <div class="ux4g-header-container">
        <a routerLink="/" class="ux4g-logo">
          <span>Ministry of Digital Services</span>
        </a>

        <nav class="ux4g-nav" aria-label="Main navigation">
          <ul class="ux4g-nav-list">
            <li class="ux4g-nav-item" *ngFor="let item of navItems">
              <a
                [routerLink]="item.path"
                routerLinkActive="ux4g-nav-link-active"
                class="ux4g-nav-link"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `
})
export class NavigationComponent {
  navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];
}

/**
 * Example: Card Grid Layout
 */

// service-grid.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-service-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ux4g-container ux4g-py-12">
      <h1 class="ux4g-mb-6">Our Services</h1>

      <div class="ux4g-grid ux4g-grid-cols-3 ux4g-gap-6">
        <div class="ux4g-card" *ngFor="let service of services">
          <h3 class="ux4g-mb-2">{{ service.title }}</h3>
          <p class="ux4g-mb-4">{{ service.description }}</p>
          <a [href]="service.link" class="ux4g-text-link">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  `
})
export class ServiceGridComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Digital Certificates',
      description: 'Apply for and download digital certificates',
      link: '/services/certificates'
    },
    {
      id: 2,
      title: 'License Renewal',
      description: 'Renew your licenses online',
      link: '/services/licenses'
    },
    {
      id: 3,
      title: 'Document Verification',
      description: 'Verify government documents',
      link: '/services/verification'
    }
  ];
}

/**
 * Example: Utility Classes Usage
 */

/*
Spacing utilities:
- ux4g-m-{scale} - margin
- ux4g-p-{scale} - padding
- ux4g-gap-{scale} - gap (flex/grid)

Layout utilities:
- ux4g-flex, ux4g-grid - display
- ux4g-items-center, ux4g-justify-between - flexbox
- ux4g-grid-cols-{n} - grid columns
- ux4g-max-w-{size} - max width

Example:
<div class="ux4g-flex ux4g-items-center ux4g-gap-4 ux4g-p-6">
  <img src="avatar.jpg" alt="Avatar" class="ux4g-rounded-full">
  <div class="ux4g-flex-1">
    <h3 class="ux4g-mb-1">User Name</h3>
    <p class="ux4g-text-sm">user@example.gov.in</p>
  </div>
</div>
*/
