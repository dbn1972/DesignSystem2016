# UX4G Angular Starter

Official starter template for building government service applications with the UX4G Design System and Angular.

## What's Included

✅ **Pre-configured UX4G packages:**
- `@ux4g/tokens` - Design tokens
- `@ux4g/styles` - CSS foundation
- `@ux4g/angular-core` - UI components
- `@ux4g/angular-patterns` - Flow patterns

✅ **Modern Angular setup:**
- Angular 18+ with TypeScript
- Standalone components architecture
- Angular Router for navigation
- Reactive Forms for form handling

✅ **Development tools:**
- Angular CLI
- ESLint for code quality
- Prettier for formatting
- TypeScript strict mode

✅ **Example pages:**
- Home page
- Sign In pattern
- Application form with reactive forms
- Status tracking
- Component showcase

---

## Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/ux4g/angular-starter.git my-project
cd my-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

---

## Project Structure

```
my-project/
├── src/
│   ├── app/
│   │   ├── components/       # Reusable components
│   │   │   ├── layout/      # Layout components
│   │   │   │   ├── header/
│   │   │   │   ├── footer/
│   │   │   │   └── main-layout/
│   │   │   └── common/      # Common components
│   │   │       └── loading-spinner/
│   │   ├── pages/           # Page components
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── application/
│   │   │   ├── status/
│   │   │   └── components/
│   │   ├── services/        # Services
│   │   │   ├── auth.service.ts
│   │   │   └── application.service.ts
│   │   ├── guards/          # Route guards
│   │   │   └── auth.guard.ts
│   │   ├── models/          # TypeScript interfaces
│   │   │   └── index.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/             # Static assets
│   │   └── govt-logo.png
│   ├── environments/       # Environment configs
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── styles.css         # Global styles
│   ├── index.html
│   └── main.ts
├── .env.example           # Environment variables template
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run build:prod` | Build with production optimizations |
| `npm test` | Run unit tests |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

---

## Adding New Pages

### 1. Generate Page Component

```bash
ng generate component pages/my-new-page --standalone
```

### 2. Add Route

```typescript
// src/app/app.routes.ts
import { MyNewPageComponent } from './pages/my-new-page/my-new-page.component';

export const routes: Routes = [
  // ... existing routes
  { path: 'my-new-page', component: MyNewPageComponent }
];
```

### 3. Add Navigation Link

```html
<!-- src/app/components/layout/header/header.component.html -->
<nav>
  <a routerLink="/my-new-page">My New Page</a>
</nav>
```

---

## Using Components

### Import from Core

```typescript
import { Component } from '@angular/core';
import {
  ButtonComponent,
  InputComponent,
  CardComponent,
  AlertComponent,
} from '@ux4g/angular-core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ButtonComponent, InputComponent, CardComponent, AlertComponent],
  template: `
    <ux4g-card>
      <ux4g-alert variant="info">Information message</ux4g-alert>
      <ux4g-input placeholder="Enter text"></ux4g-input>
      <ux4g-button variant="primary">Submit</ux4g-button>
    </ux4g-card>
  `
})
export class MyComponent { }
```

### Import from Patterns

```typescript
import { Component } from '@angular/core';
import { SignInComponent } from '@ux4g/angular-patterns/authentication';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignInComponent],
  template: `
    <ux4g-pattern-signin
      (signIn)="handleSignIn($event)"
    ></ux4g-pattern-signin>
  `
})
export class LoginComponent {
  async handleSignIn(credentials: SignInCredentials) {
    const result = await this.authService.signIn(credentials);
    return result;
  }
}
```

---

## Using Services

Services are pre-configured mock implementations. Replace with real API calls.

### Authentication Service

```typescript
// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  async signIn(credentials: SignInCredentials) {
    // TODO: Replace with real API call
    const response = await this.http.post(
      `${environment.apiUrl}/auth/signin`,
      credentials
    ).toPromise();
    
    return response;
  }
}
```

### Usage in Component

```typescript
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `...`
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  async handleSignIn(credentials: SignInCredentials) {
    try {
      const result = await this.authService.signIn(credentials);
      
      if (result.success) {
        this.router.navigate(['/dashboard']);
      }
      
      return result;
    } catch (error) {
      return {
        success: false,
        error: 'An error occurred',
      };
    }
  }
}
```

---

## Environment Variables

Configure environment files:

**Development (`src/environments/environment.ts`):**
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  serviceName: 'Digital Services Portal (Dev)',
  enableSocialLogin: true,
  enableMobileOTP: true,
};
```

**Production (`src/environments/environment.prod.ts`):**
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.gov.in',
  serviceName: 'Digital Services Portal',
  enableSocialLogin: true,
  enableMobileOTP: true,
};
```

Access in code:

```typescript
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;
```

---

## Customization

### Theme Customization

Override design tokens in `src/styles.css`:

```css
/* Import UX4G styles */
@import '@ux4g/styles';

/* Override tokens */
:root {
  --ux4g-semantic-color-brand-primary: #your-color;
  --ux4g-spacing-base: 4px;
}
```

### Component Customization

Extend UX4G components:

```typescript
// src/app/components/custom-button/custom-button.component.ts
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <ux4g-button
      [variant]="variant"
      [size]="size"
      [className]="'custom-button ' + (className || '')"
    >
      <ng-content></ng-content>
    </ux4g-button>
  `
})
export class CustomButtonComponent {
  @Input() variant = 'primary';
  @Input() size = 'md';
  @Input() className = '';
}
```

---

## Form Handling

### Using Reactive Forms with UX4G

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {
  InputComponent,
  ButtonComponent,
  FieldComponent,
  LabelComponent,
  ErrorTextComponent,
} from '@ux4g/angular-core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    FieldComponent,
    LabelComponent,
    ErrorTextComponent,
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <ux4g-field [error]="name.invalid && name.touched">
        <ux4g-label htmlFor="name" [required]="true">Name</ux4g-label>
        <ux4g-input
          id="name"
          formControlName="name"
          [error]="name.invalid && name.touched"
        ></ux4g-input>
        <ux4g-error-text *ngIf="name.hasError('required')">
          Name is required
        </ux4g-error-text>
      </ux4g-field>

      <ux4g-button type="submit" variant="primary" [disabled]="form.invalid">
        Submit
      </ux4g-button>
    </form>
  `
})
export class MyFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get name() { return this.form.get('name')!; }
  get email() { return this.form.get('email')!; }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
```

---

## State Management

### Services (Included)

```typescript
// src/app/services/state.service.ts
import { Injectable, signal } from '@angular/core';

interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  // Using Angular signals for reactive state
  private userSignal = signal<User | null>(null);
  private isAuthenticatedSignal = signal(false);

  readonly user = this.userSignal.asReadonly();
  readonly isAuthenticated = this.isAuthenticatedSignal.asReadonly();

  setUser(user: User | null) {
    this.userSignal.set(user);
    this.isAuthenticatedSignal.set(!!user);
  }

  clearUser() {
    this.userSignal.set(null);
    this.isAuthenticatedSignal.set(false);
  }
}
```

### Optional: Add NgRx

```bash
ng add @ngrx/store
ng add @ngrx/effects
```

---

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Example Test

```typescript
// src/app/pages/home/home.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render welcome message', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome');
  });
});
```

---

## Deployment

### Build for Production

```bash
npm run build:prod
```

Output in `dist/` folder.

### Deploy to Azure

```bash
# Install Azure CLI
az login
az webapp up --name your-app-name --resource-group your-resource-group
```

### Deploy to Firebase

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

---

## Best Practices

1. **Use Standalone Components** - Modern Angular architecture
2. **Use Signals** - For reactive state management
3. **Follow Angular Style Guide** - Consistent code structure
4. **Use Patterns** - Leverage @ux4g/angular-patterns for common flows
5. **Mock Services** - Replace mock services with real API calls
6. **Environment Configuration** - Use environment files for config
7. **Accessibility** - Test with keyboard and screen readers
8. **Responsive Design** - Test on mobile devices

---

## Troubleshooting

### Issue: Build Errors

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Port Already in Use

**Solution:**
```bash
# Kill process on port 4200
npx kill-port 4200
# Or use different port
ng serve --port 4300
```

### Issue: Angular CLI Not Found

**Solution:**
```bash
npm install -g @angular/cli
```

---

## Learn More

- [UX4G Documentation](https://ux4g.gov.in)
- [Component API Reference](https://ux4g.gov.in/components)
- [Pattern Catalog](https://ux4g.gov.in/patterns)
- [Design Tokens](https://ux4g.gov.in/tokens)
- [Angular Documentation](https://angular.dev)

---

## Support

- 📧 Email: support@ux4g.gov.in
- 🐛 Issues: [GitHub Issues](https://github.com/ux4g/angular-starter/issues)
- 💬 Forum: [forum.ux4g.gov.in](https://forum.ux4g.gov.in)

---

## License

MIT © UX4G Team
