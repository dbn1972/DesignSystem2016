/**
 * @ux4g/angular-patterns — Certificate Service Public API
 */

// Models
export * from './models/certificate.models';

// Data
export { CERTIFICATE_PAGE } from './data/certificate-page.data';

// Shared UI Components
export { BreadcrumbComponent, BreadcrumbItem } from './shared/breadcrumb/breadcrumb.component';
export { SectionHeadingComponent } from './shared/section-heading/section-heading.component';
export { InfoCardComponent } from './shared/info-card/info-card.component';
export { CtaButtonComponent } from './shared/cta-button/cta-button.component';
export { FaqAccordionComponent } from './shared/faq-accordion/faq-accordion.component';

// Page Component
export { CertificateHomeComponent } from './pages/certificate-home/certificate-home.component';

// Routes
export { certificateRoutes } from './certificate-service.routes';
