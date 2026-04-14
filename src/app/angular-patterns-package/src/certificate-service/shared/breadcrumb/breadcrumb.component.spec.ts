import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbComponent, BreadcrumbItem } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Certificate' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    component.items = items;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all breadcrumb items', () => {
    const el: HTMLElement = fixture.nativeElement;
    const lis = el.querySelectorAll('li');
    expect(lis.length).toBe(3);
  });

  it('should render links for non-last items with href', () => {
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a');
    expect(links.length).toBe(2);
  });

  it('should mark last item as current page', () => {
    const el: HTMLElement = fixture.nativeElement;
    const current = el.querySelector('[aria-current="page"]');
    expect(current?.textContent).toContain('Certificate');
  });

  it('should have aria-label on nav', () => {
    const el: HTMLElement = fixture.nativeElement;
    const nav = el.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Breadcrumb');
  });
});
