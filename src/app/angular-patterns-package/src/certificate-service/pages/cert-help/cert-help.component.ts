import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';
import { FaqAccordionComponent } from '../../shared/faq-accordion/faq-accordion.component';
import { CERTIFICATE_PAGE } from '../../data/certificate-page.data';
import { FaqItem } from '../../models/certificate.models';

@Component({
  selector: 'cert-help-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent, FaqAccordionComponent],
  templateUrl: './cert-help.component.html',
  styleUrls: ['./cert-help.component.scss'],
})
export class CertHelpComponent {
  searchQuery = '';
  faqs: FaqItem[] = [...CERTIFICATE_PAGE.faqs];
  contacts = [
    { icon: '📞', bg: '#2563eb', title: 'Helpline', detail: '1800-111-1111', sub: 'Mon–Sat, 9 AM – 6 PM' },
    { icon: '✉', bg: '#16a34a', title: 'Email Support', detail: 'support@certificate.gov.in', sub: 'Response within 24–48 hrs' },
    { icon: '📄', bg: '#9333ea', title: 'User Guide', detail: 'Download PDF Guide', sub: 'Step-by-step instructions' },
  ];
  quickLinks = [
    { label: 'Check Eligibility', href: '/reference-service/certificate/eligibility' },
    { label: 'Service Information', href: '/reference-service/demo' },
    { label: 'Track Application', href: '/reference-service/certificate/status-tracker' },
    { label: 'Document Guidelines', href: '/reference-service/certificate/document-guidelines' },
    { label: 'Fee Structure', href: '/reference-service/demo' },
    { label: 'Privacy Policy', href: '/reference-service/certificate/privacy-policy' },
  ];

  get filteredFaqs(): FaqItem[] {
    if (!this.searchQuery) return this.faqs;
    const q = this.searchQuery.toLowerCase();
    return this.faqs.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q));
  }
}
