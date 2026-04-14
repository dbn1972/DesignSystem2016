import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificateHomeComponent } from './certificate-home.component';
import { CERTIFICATE_PAGE } from '../../data/certificate-page.data';

describe('CertificateHomeComponent', () => {
  let component: CertificateHomeComponent;
  let fixture: ComponentFixture<CertificateHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have page data loaded', () => {
    expect(component.page.title).toBe('Certificate Application Service');
  });

  it('should have breadcrumbs', () => {
    expect(component.breadcrumbs.length).toBe(3);
    expect(component.breadcrumbs[2].label).toBe('Certificate Service');
  });

  it('should render hero title', () => {
    const el: HTMLElement = fixture.nativeElement;
    const title = el.querySelector('.cert-hero__title');
    expect(title?.textContent).toContain('Certificate Application Service');
  });

  it('should render all quick info cards', () => {
    const el: HTMLElement = fixture.nativeElement;
    const cards = el.querySelectorAll('cert-info-card');
    expect(cards.length).toBe(4);
  });

  it('should render all process steps', () => {
    const el: HTMLElement = fixture.nativeElement;
    const steps = el.querySelectorAll('.cert-steps__item');
    expect(steps.length).toBe(8);
  });

  it('should render eligibility items', () => {
    const el: HTMLElement = fixture.nativeElement;
    const section = el.querySelector('[aria-labelledby="eligibility-heading"]');
    const items = section?.querySelectorAll('.cert-list__item');
    expect(items?.length).toBe(CERTIFICATE_PAGE.eligibility.length);
  });

  it('should render FAQ items', () => {
    const el: HTMLElement = fixture.nativeElement;
    const faqItems = el.querySelectorAll('.cert-faq__item');
    expect(faqItems.length).toBe(CERTIFICATE_PAGE.faqs.length);
  });

  it('should render CTA buttons', () => {
    const el: HTMLElement = fixture.nativeElement;
    const ctas = el.querySelectorAll('.cert-cta-banner cert-cta-button');
    expect(ctas.length).toBe(2);
  });

  it('should have correct CTA href', () => {
    const el: HTMLElement = fixture.nativeElement;
    const primaryCta = el.querySelector('.cert-cta-banner .cert-cta--primary') as HTMLAnchorElement;
    expect(primaryCta?.getAttribute('href')).toBe('/reference-service/certificate/sign-in');
  });

  it('should render mandatory and additional document sections', () => {
    const el: HTMLElement = fixture.nativeElement;
    const docTitles = el.querySelectorAll('.cert-docs-grid__title');
    expect(docTitles.length).toBe(2);
    expect(docTitles[0].textContent).toContain('Mandatory');
    expect(docTitles[1].textContent).toContain('Additional');
  });

  it('should render important info cards', () => {
    const el: HTMLElement = fixture.nativeElement;
    const cards = el.querySelectorAll('.cert-important-card');
    expect(cards.length).toBe(2);
  });
});
