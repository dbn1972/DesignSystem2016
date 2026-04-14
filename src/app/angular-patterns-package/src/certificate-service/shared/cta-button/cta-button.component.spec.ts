import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CtaButtonComponent } from './cta-button.component';

describe('CtaButtonComponent', () => {
  let component: CtaButtonComponent;
  let fixture: ComponentFixture<CtaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render as anchor when href is provided', () => {
    component.href = '/test';
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('a')).toBeTruthy();
    expect(el.querySelector('button')).toBeFalsy();
  });

  it('should render as button when no href', () => {
    component.href = undefined;
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('button')).toBeTruthy();
  });

  it('should apply primary variant class', () => {
    component.href = '/test';
    component.variant = 'primary';
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.cert-cta--primary')).toBeTruthy();
  });

  it('should apply secondary variant class', () => {
    component.href = '/test';
    component.variant = 'secondary';
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.cert-cta--secondary')).toBeTruthy();
  });

  it('should emit clicked event for button', () => {
    component.href = undefined;
    fixture.detectChanges();
    spyOn(component.clicked, 'emit');
    const btn = fixture.nativeElement.querySelector('button');
    btn.click();
    expect(component.clicked.emit).toHaveBeenCalled();
  });
});
