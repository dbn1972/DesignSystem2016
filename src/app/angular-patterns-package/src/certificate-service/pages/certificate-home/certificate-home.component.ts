import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, BreadcrumbItem } from '../../shared/breadcrumb/breadcrumb.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { InfoCardComponent } from '../../shared/info-card/info-card.component';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { FaqAccordionComponent } from '../../shared/faq-accordion/faq-accordion.component';
import { CERTIFICATE_PAGE } from '../../data/certificate-page.data';
import { CertificatePageData, FaqItem } from '../../models/certificate.models';

@Component({
  selector: 'cert-home-page',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    SectionHeadingComponent,
    InfoCardComponent,
    CtaButtonComponent,
    FaqAccordionComponent,
  ],
  templateUrl: './certificate-home.component.html',
  styleUrls: ['./certificate-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateHomeComponent {
  page: CertificatePageData = CERTIFICATE_PAGE;
  faqs: FaqItem[] = [...CERTIFICATE_PAGE.faqs];

  breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Reference Services', href: '/reference-service/overview' },
    { label: 'Certificate Service' },
  ];
}
