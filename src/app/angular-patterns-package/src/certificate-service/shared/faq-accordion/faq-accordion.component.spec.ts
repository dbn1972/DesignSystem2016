import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqAccordionComponent } from './faq-accordion.component';
import { FaqItem } from '../../models/certificate.models';

describe('FaqAccordionComponent', () => {
  let component: FaqAccordionComponent;
  let fixture: ComponentFixture<FaqAccordionComponent>;

  const faqs: FaqItem[] = [
    { question: 'Q1?', answer: 'A1', open: false },
    { question: 'Q2?', answer: 'A2', open: false },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqAccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqAccordionComponent);
    component = fixture.componentInstance;
    component.items = [...faqs];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all FAQ items', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('.cert-faq__item').length).toBe(2);
  });

  it('should toggle FAQ open/close', () => {
    component.toggle(0);
    expect(component.items[0].open).toBeTrue();
    expect(component.items[1].open).toBeFalse();
  });

  it('should close other items when one is opened', () => {
    component.toggle(0);
    component.toggle(1);
    expect(component.items[0].open).toBeFalse();
    expect(component.items[1].open).toBeTrue();
  });

  it('should toggle same item closed', () => {
    component.toggle(0);
    component.toggle(0);
    expect(component.items[0].open).toBeFalse();
  });

  it('should have aria-expanded on triggers', () => {
    const el: HTMLElement = fixture.nativeElement;
    const trigger = el.querySelector('.cert-faq__trigger');
    expect(trigger?.getAttribute('aria-expanded')).toBe('false');
  });
});
