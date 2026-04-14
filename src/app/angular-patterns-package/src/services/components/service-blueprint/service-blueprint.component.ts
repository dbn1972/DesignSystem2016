import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';

interface JourneyPhase {
  title: string;
  icon: string;
  color: string;
  pages: { label: string; href: string }[];
}

@Component({
  selector: 'ux4g-service-blueprint',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  templateUrl: './service-blueprint.component.html',
  styleUrls: ['./service-blueprint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceBlueprintComponent {
  @Input() serviceName = 'Government Service Platform';
  @Input() category = 'Reference Service';
  @Input() title = 'Service Blueprint';
  @Input() demoPath = '/reference-service/demo';
  @Input() signInPath = '/reference-service/sign-in';

  phases: JourneyPhase[] = [
    {
      title: 'Pre-Application', icon: '📋', color: '#2563eb',
      pages: [
        { label: 'Service Information', href: '/reference-service/demo' },
        { label: 'Eligibility Check', href: '/reference-service/eligibility' },
      ],
    },
    {
      title: 'Authentication', icon: '🔐', color: '#9333ea',
      pages: [
        { label: 'Sign In', href: '/reference-service/sign-in' },
        { label: 'Sign Up', href: '/reference-service/sign-up' },
        { label: 'OTP Verification', href: '/reference-service/verify-otp' },
        { label: 'Forgot Password', href: '/reference-service/forgot-password' },
      ],
    },
    {
      title: 'Application', icon: '📝', color: '#16a34a',
      pages: [
        { label: 'Start Application', href: '/reference-service/start' },
        { label: 'Personal Details', href: '/reference-service/form/personal' },
        { label: 'Address Details', href: '/reference-service/form/address' },
        { label: 'Additional Info', href: '/reference-service/form/additional' },
        { label: 'Form Review', href: '/reference-service/form/review' },
      ],
    },
    {
      title: 'Submission', icon: '📤', color: '#ea580c',
      pages: [
        { label: 'Document Upload', href: '/reference-service/document-upload' },
        { label: 'Review Summary', href: '/reference-service/review-summary' },
        { label: 'Declaration', href: '/reference-service/declaration' },
      ],
    },
    {
      title: 'Payment', icon: '💳', color: '#db2777',
      pages: [
        { label: 'Payment Summary', href: '/reference-service/payment-summary' },
        { label: 'Payment Receipt', href: '/reference-service/payment-receipt' },
      ],
    },
    {
      title: 'Post-Submission', icon: '📊', color: '#0891b2',
      pages: [
        { label: 'Status Tracker', href: '/reference-service/status-tracker' },
        { label: 'User Profile', href: '/reference-service/user-profile' },
      ],
    },
  ];

  get totalPages(): number {
    return this.phases.reduce((sum, p) => sum + p.pages.length, 0);
  }
}
