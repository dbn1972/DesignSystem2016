# UX4G Angular Core - Component Patterns

This document outlines the design patterns, conventions, and best practices used across all `@ux4g/angular-core` components.

## Table of Contents

1. [Component Architecture](#component-architecture)
2. [Naming Conventions](#naming-conventions)
3. [Selector Patterns](#selector-patterns)
4. [Input/Output Patterns](#inputoutput-patterns)
5. [Forms Integration](#forms-integration)
6. [Styling Patterns](#styling-patterns)
7. [Accessibility Patterns](#accessibility-patterns)
8. [Content Projection](#content-projection)
9. [State Management](#state-management)
10. [Testing Patterns](#testing-patterns)

---

## Component Architecture

### Standalone Components

All UX4G components use Angular's standalone component architecture:

```typescript
@Component({
  selector: 'ux4g-button',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent { }
```

**Benefits:**
- No need for NgModule declarations
- Tree-shakeable
- Easier to test
- Simpler mental model

### Change Detection Strategy

All components use `ChangeDetectionStrategy.OnPush` for optimal performance:

```typescript
changeDetection: ChangeDetectionStrategy.OnPush
```

This requires:
- Immutable inputs
- EventEmitter for outputs
- Explicit change detection when needed

### View Encapsulation

Components use `ViewEncapsulation.None` to allow global UX4G styles:

```typescript
encapsulation: ViewEncapsulation.None
```

This allows:
- Consistent styling across all components
- Use of global @ux4g/styles CSS classes
- Better integration with design tokens

---

## Naming Conventions

### File Naming

```
component-name/
├── component-name.component.ts      # Component class
├── component-name.component.css     # Component styles
├── component-name.component.spec.ts # Unit tests
└── index.ts                         # Public exports
```

### Class Naming

```typescript
// Component class
export class ButtonComponent { }

// Directive class
export class BreadcrumbItemDirective { }

// Service class
export class ToastService { }
```

### Variable Naming

```typescript
// Inputs: camelCase
@Input() variant: ComponentVariant;
@Input() isDisabled: boolean;

// Outputs: camelCase + past tense for events
@Output() clicked = new EventEmitter<MouseEvent>();
@Output() valueChanged = new EventEmitter<string>();

// Private properties: camelCase with underscore
private _value: string;

// Public methods: camelCase
handleClick(): void { }
```

---

## Selector Patterns

### Component Selectors

All component selectors use the `ux4g-` prefix:

```typescript
@Component({
  selector: 'ux4g-button',
  // ...
})

@Component({
  selector: 'ux4g-input',
  // ...
})

@Component({
  selector: 'ux4g-alert',
  // ...
})
```

### Directive Selectors

Directives use attribute selectors with the same prefix:

```typescript
@Directive({
  selector: '[ux4gBreadcrumbItem]',
  standalone: true,
})
export class BreadcrumbItemDirective { }

// Usage
<a ux4gBreadcrumbItem routerLink="/home">Home</a>
```

### Compound Selectors

For sub-components, use double-dash naming:

```typescript
@Component({
  selector: 'ux4g-card-header',
  // ...
})

@Component({
  selector: 'ux4g-card-content',
  // ...
})

@Component({
  selector: 'ux4g-dialog-footer',
  // ...
})
```

---

## Input/Output Patterns

### Standard Inputs

```typescript
export class ButtonComponent {
  // Required inputs (no default)
  @Input({ required: true }) label!: string;

  // Optional inputs with defaults
  @Input() variant: ComponentVariant = 'primary';
  @Input() size: ComponentSize = 'md';
  @Input() disabled: boolean = false;

  // Optional inputs without defaults
  @Input() className?: string;
  @Input() ariaLabel?: string;
}
```

### Two-Way Binding

Use `@Input()` + `@Output()` for two-way binding:

```typescript
export class InputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }
}

// Usage
<ux4g-input [(value)]="name"></ux4g-input>
```

### Event Outputs

```typescript
export class ButtonComponent {
  // Use descriptive past-tense names
  @Output() clicked = new EventEmitter<MouseEvent>();
  @Output() focused = new EventEmitter<FocusEvent>();
  @Output() blurred = new EventEmitter<FocusEvent>();

  handleClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
```

---

## Forms Integration

### ControlValueAccessor

All form components implement `ControlValueAccessor`:

```typescript
@Component({
  selector: 'ux4g-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  value: string = '';
  
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }
}
```

### Reactive Forms

```typescript
// Component
form = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(8)]),
});

// Template
<form [formGroup]="form">
  <ux4g-field [error]="emailControl.invalid && emailControl.touched">
    <ux4g-label htmlFor="email">Email</ux4g-label>
    <ux4g-input 
      id="email" 
      formControlName="email"
      [error]="emailControl.invalid && emailControl.touched"
    ></ux4g-input>
    <ux4g-error-text *ngIf="emailControl.hasError('required')">
      Email is required
    </ux4g-error-text>
    <ux4g-error-text *ngIf="emailControl.hasError('email')">
      Invalid email format
    </ux4g-error-text>
  </ux4g-field>
</form>
```

### Template-Driven Forms

```typescript
// Component
email: string = '';
password: string = '';

// Template
<form #form="ngForm">
  <ux4g-field>
    <ux4g-label htmlFor="email">Email</ux4g-label>
    <ux4g-input 
      id="email"
      name="email"
      [(ngModel)]="email"
      required
      email
    ></ux4g-input>
  </ux4g-field>
</form>
```

---

## Styling Patterns

### CSS Class Generation

Use the `classNames` utility for dynamic classes:

```typescript
import { classNames } from '../../utils/class-names';

export class ButtonComponent {
  @Input() variant: ComponentVariant = 'primary';
  @Input() size: ComponentSize = 'md';
  @Input() className?: string;

  get buttonClasses(): string {
    return classNames(
      'ux4g-button',
      `ux4g-button--${this.variant}`,
      `ux4g-button--${this.size}`,
      this.disabled && 'ux4g-button--disabled',
      this.className
    );
  }
}

// Template
<button [class]="buttonClasses">...</button>
```

### BEM Methodology

Follow BEM (Block Element Modifier) naming:

```css
/* Block */
.ux4g-button { }

/* Element */
.ux4g-button__icon { }
.ux4g-button__label { }

/* Modifier */
.ux4g-button--primary { }
.ux4g-button--disabled { }

/* Element + Modifier */
.ux4g-button__icon--before { }
```

### Import UX4G Styles

```css
/**
 * Component styles
 */
@import '@ux4g/styles/components/buttons.css';

/* Angular-specific adjustments */
ux4g-button {
  display: inline-block;
}

.ux4g-button--full-width {
  width: 100%;
}
```

### Design Tokens

Use CSS custom properties from @ux4g/tokens:

```css
.ux4g-button {
  padding: var(--ux4g-spacing-3) var(--ux4g-spacing-4);
  border-radius: var(--ux4g-radius-base);
  background: var(--ux4g-semantic-color-interactive-default);
  color: var(--ux4g-semantic-color-text-inverse);
  transition: all var(--ux4g-transition-fast);
}
```

---

## Accessibility Patterns

### ARIA Attributes

```typescript
@Component({
  template: `
    <button
      [attr.aria-label]="ariaLabel"
      [attr.aria-describedby]="ariaDescribedBy"
      [attr.aria-disabled]="disabled"
      [attr.aria-busy]="loading"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
}
```

### Semantic HTML

```typescript
// Use semantic elements
<nav aria-label="Breadcrumb">...</nav>
<main>...</main>
<aside>...</aside>

// Use appropriate roles
<div role="alert">...</div>
<div role="dialog" aria-modal="true">...</div>
```

### Keyboard Navigation

```typescript
@Component({
  template: `
    <div 
      tabindex="0"
      (keydown)="handleKeyDown($event)"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class AccordionItemComponent {
  @Output() toggle = new EventEmitter<void>();

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle.emit();
    }
  }
}
```

### Focus Management

```typescript
import { ElementRef, ViewChild } from '@angular/core';

export class DialogComponent {
  @ViewChild('dialogContent') dialogContent!: ElementRef;

  ngAfterViewInit(): void {
    if (this.open) {
      this.dialogContent.nativeElement.focus();
    }
  }
}
```

---

## Content Projection

### Single Slot

```typescript
@Component({
  template: `
    <div class="ux4g-card">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent { }

// Usage
<ux4g-card>Card content</ux4g-card>
```

### Multiple Slots

```typescript
@Component({
  template: `
    <div class="ux4g-card">
      <div class="ux4g-card__header">
        <ng-content select="ux4g-card-header"></ng-content>
      </div>
      <div class="ux4g-card__content">
        <ng-content select="ux4g-card-content"></ng-content>
      </div>
      <div class="ux4g-card__footer">
        <ng-content select="ux4g-card-footer"></ng-content>
      </div>
    </div>
  `
})
export class CardComponent { }

// Usage
<ux4g-card>
  <ux4g-card-header>Header</ux4g-card-header>
  <ux4g-card-content>Content</ux4g-card-content>
  <ux4g-card-footer>Footer</ux4g-card-footer>
</ux4g-card>
```

### Select Attribute

```typescript
@Component({
  template: `
    <button class="ux4g-button">
      <span class="ux4g-button__icon--before">
        <ng-content select="[slot='icon-before']"></ng-content>
      </span>
      <ng-content></ng-content>
      <span class="ux4g-button__icon--after">
        <ng-content select="[slot='icon-after']"></ng-content>
      </span>
    </button>
  `
})
export class ButtonComponent { }

// Usage
<ux4g-button>
  <span slot="icon-before">📧</span>
  Send Email
</ux4g-button>
```

---

## State Management

### Internal State

```typescript
export class AccordionComponent {
  @Input() expandedIndexes: number[] = [];
  @Output() expandedIndexesChange = new EventEmitter<number[]>();

  toggleItem(index: number): void {
    const isExpanded = this.expandedIndexes.includes(index);
    
    if (this.allowMultiple) {
      if (isExpanded) {
        this.expandedIndexes = this.expandedIndexes.filter(i => i !== index);
      } else {
        this.expandedIndexes = [...this.expandedIndexes, index];
      }
    } else {
      this.expandedIndexes = isExpanded ? [] : [index];
    }
    
    this.expandedIndexesChange.emit(this.expandedIndexes);
  }
}
```

### Controlled vs Uncontrolled

```typescript
// Controlled (parent manages state)
<ux4g-dialog [(open)]="isDialogOpen"></ux4g-dialog>

// Uncontrolled (component manages state)
<ux4g-dialog [open]="false"></ux4g-dialog>
```

---

## Testing Patterns

### Component Testing

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit clicked event when clicked', () => {
    spyOn(component.clicked, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.clicked.emit).toHaveBeenCalled();
  });

  it('should not emit clicked event when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    
    spyOn(component.clicked, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.clicked.emit).not.toHaveBeenCalled();
  });
});
```

### Forms Testing

```typescript
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { InputComponent } from './input.component';

describe('InputComponent with Forms', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent, ReactiveFormsModule]
    }).compileComponents();
  });

  it('should integrate with FormControl', () => {
    const control = new FormControl('initial value');
    component.writeValue('initial value');
    expect(component.value).toBe('initial value');
  });
});
```

---

## Component Template Structure

Standard template structure for all components:

```typescript
@Component({
  selector: 'ux4g-component',
  template: `
    <!-- Main wrapper with dynamic classes -->
    <div [class]="wrapperClasses" [attr.data-testid]="testId">
      
      <!-- Icon/prefix content -->
      @if (iconBefore) {
        <span class="ux4g-component__icon--before" aria-hidden="true">
          <ng-content select="[slot='icon-before']"></ng-content>
        </span>
      }

      <!-- Main content -->
      <div class="ux4g-component__content">
        <ng-content></ng-content>
      </div>

      <!-- Icon/suffix content -->
      @if (iconAfter) {
        <span class="ux4g-component__icon--after" aria-hidden="true">
          <ng-content select="[slot='icon-after']"></ng-content>
        </span>
      }

      <!-- Conditional elements -->
      @if (dismissible) {
        <button 
          type="button"
          class="ux4g-component__close"
          (click)="handleDismiss()"
        >
          Close
        </button>
      }
    </div>
  `
})
```

---

## Summary

Following these patterns ensures:

✅ **Consistency** - All components follow the same structure  
✅ **Accessibility** - WCAG 2.1 Level AA compliance  
✅ **Performance** - OnPush change detection  
✅ **Maintainability** - Clear naming and organization  
✅ **Testability** - Standalone components are easy to test  
✅ **Developer Experience** - Predictable API across all components  
✅ **Angular Best Practices** - Modern Angular patterns (standalone, signals-ready)

These patterns align with the React component patterns while leveraging Angular-specific features like decorators, dependency injection, and template syntax.
