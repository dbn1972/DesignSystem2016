# React vs Angular - Framework Comparison

Quick reference guide for developers choosing between @ux4g/react-core and @ux4g/angular-core.

---

## At a Glance

| Feature | React | Angular |
|---------|-------|---------|
| **Status** | ✅ Production Ready | 🚧 In Development |
| **Version** | v1.0.0 | v0.1.0 (Alpha) |
| **Components** | 73/73 | 4/73 |
| **Bundle Size** | ~120kb (gzipped) | TBD |
| **TypeScript** | ✅ Full support | ✅ Full support |
| **Tree Shaking** | ✅ Supported | ✅ Supported |
| **Server Rendering** | ✅ Next.js compatible | ✅ Angular Universal |
| **Learning Curve** | Moderate | Steeper |

---

## Installation

### React

```bash
npm install @ux4g/react-core @ux4g/tokens @ux4g/styles
```

**Peer Dependencies:**
```bash
npm install react@^18.0.0 react-dom@^18.0.0
```

### Angular

```bash
npm install @ux4g/angular-core @ux4g/tokens @ux4g/styles
```

**Peer Dependencies:**
```bash
npm install @angular/common@^18.0.0 @angular/core@^18.0.0 @angular/forms@^18.0.0
```

---

## Basic Usage Comparison

### Button Component

**React:**
```tsx
import { Button } from '@ux4g/react-core';

function App() {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <Button variant="primary" onClick={handleClick}>
      Click Me
    </Button>
  );
}
```

**Angular:**
```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <ux4g-button variant="primary" (clicked)="handleClick()">
      Click Me
    </ux4g-button>
  `
})
export class AppComponent {
  handleClick() {
    console.log('Clicked!');
  }
}
```

---

## Forms Integration

### React (with React Hook Form)

```tsx
import { useForm } from 'react-hook-form';
import { Input, Button } from '@ux4g/react-core';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', { required: true })}
        placeholder="Email"
        error={!!errors.email}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Angular (with Reactive Forms)

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent, ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <ux4g-input 
        formControlName="email"
        placeholder="Email"
        [error]="email.invalid && email.touched"
      ></ux4g-input>
      <ux4g-button type="submit">Submit</ux4g-button>
    </form>
  `
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  get email() { return this.loginForm.get('email')!; }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
```

---

## Styling Approach

Both frameworks use the same design token system:

**Shared Styles Import:**
```css
/* styles.css */
@import '@ux4g/styles';
```

**React (Tailwind + CVA):**
```tsx
import { cva } from 'class-variance-authority';

const button = cva('base-button', {
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white',
      secondary: 'bg-gray-200 text-gray-900'
    }
  }
});

<button className={button({ variant: 'primary' })}>Click</button>
```

**Angular (Class Binding):**
```typescript
@Component({
  template: `
    <button [class]="getButtonClass()">Click</button>
  `
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';

  getButtonClass(): string {
    const base = 'base-button';
    const variants = {
      primary: 'bg-blue-600 text-white',
      secondary: 'bg-gray-200 text-gray-900'
    };
    return `${base} ${variants[this.variant]}`;
  }
}
```

---

## State Management

### React (Context API / Zustand)

```tsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

### Angular (Services + RxJS)

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('light');
  theme$ = this.themeSubject.asObservable();

  setTheme(theme: string) {
    this.themeSubject.next(theme);
  }

  get currentTheme() {
    return this.themeSubject.value;
  }
}
```

---

## Component Communication

### React (Props & Callbacks)

```tsx
// Parent
function Parent() {
  const [value, setValue] = useState('');
  
  return <Child value={value} onChange={setValue} />;
}

// Child
function Child({ value, onChange }) {
  return (
    <input 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
    />
  );
}
```

### Angular (@Input & @Output)

```typescript
// Parent
@Component({
  template: `<app-child [value]="value" (valueChange)="value = $event"></app-child>`
})
export class ParentComponent {
  value = '';
}

// Child
@Component({
  selector: 'app-child',
  template: `<input [value]="value" (input)="onInput($event)" />`
})
export class ChildComponent {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }
}
```

---

## Build & Bundle

### React (Vite)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

**Output:**
- ESM modules
- Code splitting
- Tree shaking
- ~50kb base bundle (gzipped)

### Angular (Angular CLI)

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build --configuration production",
    "test": "ng test"
  }
}
```

**Output:**
- Ivy-compiled components
- AOT compilation
- Tree shaking
- ~80kb base bundle (gzipped)

---

## Testing

### React (Vitest + Testing Library)

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@ux4g/react-core';

test('button click handler', () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  
  fireEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledOnce();
});
```

### Angular (Jest + TestBed)

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '@ux4g/angular-core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should emit clicked event', () => {
    spyOn(component.clicked, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    
    button.click();
    expect(component.clicked.emit).toHaveBeenCalled();
  });
});
```

---

## When to Choose React

✅ **Choose React if you:**
- Need production-ready components **now**
- Prefer functional programming style
- Want a lighter bundle size
- Have React expertise in your team
- Use Next.js for SSR
- Prefer flexibility over structure

---

## When to Choose Angular

✅ **Choose Angular if you:**
- Can wait for component development (Q2-Q4 2026)
- Prefer object-oriented programming
- Want built-in dependency injection
- Have Angular expertise in your team
- Need strong typing and tooling
- Prefer opinionated framework structure
- Already have Angular infrastructure

---

## Migration Path

### React to Angular

1. Component structure is similar (props → @Input, events → @Output)
2. Template syntax differences (JSX → Angular templates)
3. State management (hooks → services + RxJS)
4. Styling remains identical (same design tokens)

**Estimated effort:** 2-3 days per component for experienced Angular developers

### Angular to React

1. Services → custom hooks or Context API
2. @Input/@Output → props and callbacks
3. Templates → JSX
4. RxJS → Promise or custom state management

**Estimated effort:** 1-2 days per component for experienced React developers

---

## Ecosystem Comparison

| Tool/Library | React | Angular |
|--------------|-------|---------|
| **Routing** | React Router | Angular Router (built-in) |
| **Forms** | React Hook Form, Formik | Reactive Forms (built-in) |
| **HTTP** | Axios, fetch | HttpClient (built-in) |
| **State Management** | Redux, Zustand, Context | Services + RxJS |
| **Testing** | Vitest, Jest | Jasmine, Jest (built-in) |
| **Dev Tools** | React DevTools | Angular DevTools |
| **SSR** | Next.js, Remix | Angular Universal |
| **Mobile** | React Native | Ionic, NativeScript |

---

## Performance Characteristics

### React
- **Initial Load:** Fast (smaller bundle)
- **Runtime:** Fast (virtual DOM diffing)
- **Re-renders:** Can be optimized with `memo`, `useMemo`
- **Bundle Size:** Smaller base, grows with dependencies

### Angular
- **Initial Load:** Slower (larger framework)
- **Runtime:** Fast (Ivy rendering engine)
- **Change Detection:** Optimized with OnPush strategy
- **Bundle Size:** Larger base, but well-optimized with AOT

---

## Learning Resources

### React
- [React Core Package Docs](../react-core-package/README.md)
- [React Official Docs](https://react.dev)
- [UX4G React Examples](../react-core-package/examples/)

### Angular
- [Angular Core Package Docs](./README.md)
- [Angular Roadmap](./ROADMAP.md)
- [Angular Official Docs](https://angular.io)
- [UX4G Angular Examples](./examples/) (coming soon)

---

## Support

**React Support:**  
- ✅ Production support available
- 📧 react-support@ux4g.gov.in
- 💬 Active community

**Angular Support:**  
- 🚧 Pre-release / Alpha support
- 📧 angular-support@ux4g.gov.in
- 📋 [Roadmap discussions](https://github.com/ux4g/angular-core/discussions)

---

## Conclusion

Both frameworks are first-class citizens in the UX4G ecosystem:

- **For immediate production use:** Choose React (73 components ready)
- **For future Angular projects:** Monitor roadmap, Phase 1 targets June 2026
- **For new projects:** React is recommended until Angular reaches Phase 3 (December 2026)

The design system ensures consistency across both frameworks using shared tokens and styles.

---

**Last Updated:** April 11, 2026  
**Next Review:** July 2026 (After Phase 1 completion)
