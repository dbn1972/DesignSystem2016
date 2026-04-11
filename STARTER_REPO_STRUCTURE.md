# UX4G Starter Repository Structure

Complete folder structure reference for React and Angular starter repositories.

---

## React Starter Structure

```
ux4g-react-starter/
├── public/                          # Static assets served directly
│   ├── govt-logo.png               # Government logo
│   └── favicon.ico                 # Site favicon
│
├── src/
│   ├── components/                 # Reusable components
│   │   ├── layout/                # Layout components
│   │   │   ├── Header.tsx         # Site header
│   │   │   ├── Header.css
│   │   │   ├── Footer.tsx         # Site footer
│   │   │   ├── Footer.css
│   │   │   ├── MainLayout.tsx     # Main layout wrapper
│   │   │   └── MainLayout.css
│   │   └── common/                # Common components
│   │       ├── LoadingSpinner.tsx
│   │       └── ErrorBoundary.tsx
│   │
│   ├── pages/                     # Page components
│   │   ├── HomePage.tsx           # Landing page
│   │   ├── HomePage.css
│   │   ├── LoginPage.tsx          # Login using SignIn pattern
│   │   ├── ApplicationPage.tsx    # Application form example
│   │   ├── ApplicationPage.css
│   │   ├── StatusPage.tsx         # Status tracking example
│   │   ├── StatusPage.css
│   │   ├── ComponentsPage.tsx     # Component showcase
│   │   └── ComponentsPage.css
│   │
│   ├── services/                  # API services (mock implementations)
│   │   ├── api.ts                # Base API client
│   │   ├── auth.service.ts       # Authentication service
│   │   ├── application.service.ts # Application service
│   │   └── document.service.ts   # Document upload service
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── useAuth.ts            # Authentication hook
│   │   ├── useForm.ts            # Form management hook
│   │   └── useLocalStorage.ts    # Local storage hook
│   │
│   ├── context/                   # React Context providers
│   │   ├── AuthContext.tsx       # Authentication context
│   │   └── ThemeContext.tsx      # Theme context (if needed)
│   │
│   ├── types/                     # TypeScript type definitions
│   │   ├── index.ts              # Central type exports
│   │   ├── auth.types.ts         # Authentication types
│   │   ├── application.types.ts  # Application types
│   │   └── common.types.ts       # Common types
│   │
│   ├── utils/                     # Utility functions
│   │   ├── formatters.ts         # Date, currency formatters
│   │   ├── validators.ts         # Validation functions
│   │   └── constants.ts          # App constants
│   │
│   ├── App.tsx                    # Root component with routing
│   ├── main.tsx                   # Application entry point
│   └── index.css                  # Global styles
│
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules
├── .eslintrc.cjs                  # ESLint configuration
├── .prettierrc                    # Prettier configuration
├── index.html                     # HTML entry point
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.node.json             # Node-specific TS config
├── vite.config.ts                 # Vite build configuration
└── README.md                      # Starter documentation
```

---

## Angular Starter Structure

```
ux4g-angular-starter/
├── src/
│   ├── app/
│   │   ├── components/           # Reusable components
│   │   │   ├── layout/          # Layout components
│   │   │   │   ├── header/
│   │   │   │   │   ├── header.component.ts
│   │   │   │   │   ├── header.component.html
│   │   │   │   │   ├── header.component.css
│   │   │   │   │   └── header.component.spec.ts
│   │   │   │   ├── footer/
│   │   │   │   │   ├── footer.component.ts
│   │   │   │   │   ├── footer.component.html
│   │   │   │   │   ├── footer.component.css
│   │   │   │   │   └── footer.component.spec.ts
│   │   │   │   └── main-layout/
│   │   │   │       ├── main-layout.component.ts
│   │   │   │       ├── main-layout.component.html
│   │   │   │       ├── main-layout.component.css
│   │   │   │       └── main-layout.component.spec.ts
│   │   │   └── common/          # Common components
│   │   │       └── loading-spinner/
│   │   │           ├── loading-spinner.component.ts
│   │   │           ├── loading-spinner.component.html
│   │   │           └── loading-spinner.component.css
│   │   │
│   │   ├── pages/               # Page components
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.css
│   │   │   │   └── home.component.spec.ts
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.css
│   │   │   │   └── login.component.spec.ts
│   │   │   ├── application/
│   │   │   │   ├── application.component.ts
│   │   │   │   ├── application.component.html
│   │   │   │   ├── application.component.css
│   │   │   │   └── application.component.spec.ts
│   │   │   ├── status/
│   │   │   │   ├── status.component.ts
│   │   │   │   ├── status.component.html
│   │   │   │   ├── status.component.css
│   │   │   │   └── status.component.spec.ts
│   │   │   └── components/      # Component showcase
│   │   │       ├── components.component.ts
│   │   │       ├── components.component.html
│   │   │       └── components.component.css
│   │   │
│   │   ├── services/            # Services (mock implementations)
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.service.spec.ts
│   │   │   ├── application.service.ts
│   │   │   ├── application.service.spec.ts
│   │   │   ├── document.service.ts
│   │   │   └── document.service.spec.ts
│   │   │
│   │   ├── guards/              # Route guards
│   │   │   ├── auth.guard.ts
│   │   │   └── auth.guard.spec.ts
│   │   │
│   │   ├── interceptors/        # HTTP interceptors
│   │   │   ├── auth.interceptor.ts
│   │   │   └── error.interceptor.ts
│   │   │
│   │   ├── models/              # TypeScript interfaces
│   │   │   ├── index.ts
│   │   │   ├── auth.model.ts
│   │   │   ├── application.model.ts
│   │   │   └── common.model.ts
│   │   │
│   │   ├── utils/               # Utility functions
│   │   │   ├── formatters.ts
│   │   │   ├── validators.ts
│   │   │   └── constants.ts
│   │   │
│   │   ├── app.component.ts     # Root component
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.component.spec.ts
│   │   ├── app.config.ts        # App configuration
│   │   └── app.routes.ts        # Route configuration
│   │
│   ├── assets/                  # Static assets
│   │   ├── govt-logo.png
│   │   └── icons/
│   │
│   ├── environments/            # Environment configurations
│   │   ├── environment.ts       # Development environment
│   │   └── environment.prod.ts  # Production environment
│   │
│   ├── styles.css              # Global styles
│   ├── index.html              # HTML entry point
│   └── main.ts                 # Application bootstrap
│
├── .editorconfig               # Editor configuration
├── .gitignore                  # Git ignore rules
├── .eslintrc.json             # ESLint configuration
├── .prettierrc                # Prettier configuration
├── angular.json               # Angular CLI configuration
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── tsconfig.app.json          # App-specific TS config
├── tsconfig.spec.json         # Test-specific TS config
└── README.md                  # Starter documentation
```

---

## File Naming Conventions

### React

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase.tsx | `HomePage.tsx` |
| Styles | PascalCase.css | `HomePage.css` |
| Services | camelCase.service.ts | `auth.service.ts` |
| Hooks | useCamelCase.ts | `useAuth.ts` |
| Types | camelCase.types.ts | `auth.types.ts` |
| Utils | camelCase.ts | `validators.ts` |

### Angular

| Type | Convention | Example |
|------|------------|---------|
| Components | kebab-case.component.ts | `home.component.ts` |
| Templates | kebab-case.component.html | `home.component.html` |
| Styles | kebab-case.component.css | `home.component.css` |
| Services | kebab-case.service.ts | `auth.service.ts` |
| Guards | kebab-case.guard.ts | `auth.guard.ts` |
| Models | kebab-case.model.ts | `auth.model.ts` |
| Tests | *.spec.ts | `auth.service.spec.ts` |

---

## Folder Organization Principles

### By Feature (Recommended for Large Apps)

```
src/
├── features/
│   ├── authentication/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   ├── application/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   └── status/
│       ├── components/
│       ├── pages/
│       └── services/
└── shared/
    ├── components/
    ├── services/
    └── utils/
```

### By Type (Used in Starter - Good for Small/Medium Apps)

```
src/
├── components/    # Reusable components
├── pages/        # Page components
├── services/     # Services
├── hooks/        # Hooks (React)
├── guards/       # Guards (Angular)
├── types/        # Type definitions
└── utils/        # Utilities
```

---

## Key Files Explained

### React

**`src/main.tsx`** - Application entry point
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@ux4g/styles'; // Import UX4G global styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**`src/App.tsx`** - Root component with routing
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**`src/services/api.ts`** - Base API client
```tsx
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    return response.json();
  },
  post: async (endpoint: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
```

---

### Angular

**`src/main.ts`** - Application bootstrap
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

**`src/app/app.config.ts`** - Application configuration
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
  ]
};
```

**`src/app/app.routes.ts`** - Route configuration
```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];
```

**`src/app/services/auth.service.ts`** - Service example
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  async signIn(credentials: SignInCredentials) {
    return this.http.post(
      `${environment.apiUrl}/auth/signin`,
      credentials
    ).toPromise();
  }
}
```

---

## Environment Configuration

### React (.env files)

**`.env.example`** - Template
```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_SERVICE_NAME=Digital Services Portal
VITE_ENABLE_SOCIAL_LOGIN=true
```

**`.env`** - Local development (not committed)
```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_SERVICE_NAME=Digital Services Portal (Dev)
```

**`.env.production`** - Production
```env
VITE_API_BASE_URL=https://api.yourdomain.gov.in
VITE_SERVICE_NAME=Digital Services Portal
```

### Angular (environment files)

**`src/environments/environment.ts`** - Development
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  serviceName: 'Digital Services Portal (Dev)',
};
```

**`src/environments/environment.prod.ts`** - Production
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.gov.in',
  serviceName: 'Digital Services Portal',
};
```

---

## Adding New Features

### React: Add a New Page

```bash
# 1. Create page file
touch src/pages/MyNewPage.tsx
touch src/pages/MyNewPage.css

# 2. Create page component
# (edit MyNewPage.tsx)

# 3. Add route in App.tsx
# <Route path="/my-new-page" element={<MyNewPage />} />
```

### Angular: Add a New Page

```bash
# 1. Generate page component
ng generate component pages/my-new-page --standalone

# 2. Add route in app.routes.ts
# { path: 'my-new-page', component: MyNewPageComponent }
```

---

## Best Practices

### Folder Structure

1. ✅ **Group by feature** for large apps
2. ✅ **Group by type** for small/medium apps (starter default)
3. ✅ **Keep pages separate** from components
4. ✅ **Shared code in common/shared** folder
5. ✅ **One component per file**
6. ✅ **Co-locate related files** (component + styles + tests)

### File Organization

1. ✅ **Follow framework conventions** (React: PascalCase, Angular: kebab-case)
2. ✅ **Use index.ts for barrel exports**
3. ✅ **Keep files focused** (single responsibility)
4. ✅ **Organize imports** (external → internal → relative)

### Service Layer

1. ✅ **Mock services initially** (easy to replace)
2. ✅ **Separate API client** from service logic
3. ✅ **Use environment variables** for configuration
4. ✅ **Handle errors consistently**

---

## Summary

Both starter repositories follow:

✅ **Clear separation of concerns** - pages, components, services  
✅ **Framework conventions** - React (PascalCase), Angular (kebab-case)  
✅ **Scalable structure** - Easy to add features  
✅ **Mock services** - Replace with real APIs  
✅ **Environment configuration** - Dev and prod configs  
✅ **TypeScript throughout** - Type safety  

Use these structures as a starting point and adapt to your application's needs!
