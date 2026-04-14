import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';

@Component({
  selector: 'ux4g-application-start',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  templateUrl: './application-start.component.html',
  styleUrls: ['./application-start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationStartComponent {
  @Input() serviceName = 'Government Service Platform';
  @Input() applicantName = 'Service User';
  @Input() startFormPath = '/reference-service/form/personal';
  @Input() helpPath = '/patterns/contact-support/service-support';

  acceptedTerms = false;

  instructions = [
    { n: 1, title: 'Complete personal information', desc: 'Enter your core personal and contact details accurately.' },
    { n: 2, title: 'Provide address details', desc: 'Add current address that matches your supporting proof.' },
    { n: 3, title: 'Fill service-specific details', desc: 'Answer additional service-specific questions.' },
    { n: 4, title: 'Upload required documents', desc: 'Upload clear and readable proof documents.' },
    { n: 5, title: 'Review and declare', desc: 'Confirm all details before final submission.' },
    { n: 6, title: 'Pay application fee', desc: 'Complete payment and keep the receipt for records.' },
    { n: 7, title: 'Submit and track', desc: 'Submit application and track status using reference number.' },
  ];

  infoCards = [
    { icon: '⏱', bg: '#2563eb', title: 'Time Required', text: '15–20 minutes for complete submission.' },
    { icon: '📄', bg: '#9333ea', title: 'Documents Needed', text: 'Keep required files ready in PDF/JPEG/PNG format.' },
    { icon: '🛡', bg: '#16a34a', title: 'Save Progress', text: 'Save draft anytime and continue later.' },
  ];

  warnings = [
    'Application cannot be edited after final submission.',
    'Incomplete applications are not processed.',
    'Upload clear documents to avoid delays.',
    'False information may lead to rejection.',
  ];
}
