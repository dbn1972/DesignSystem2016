---
sidebar_position: 2
---

# Installation

Install UX4G components and styles in your React or Angular project.

## React Installation

### Prerequisites

- Node.js 18 or higher
- React 18 or higher
- npm, yarn, or pnpm

### Install Packages

Install the core React components and styles:

```bash
npm install @ux4g/react-core @ux4g/styles @ux4g/tokens
```

Or with yarn:

```bash
yarn add @ux4g/react-core @ux4g/styles @ux4g/tokens
```

Or with pnpm:

```bash
pnpm add @ux4g/react-core @ux4g/styles @ux4g/tokens
```

### Import Styles

Import the UX4G styles in your application entry point:

```tsx title="src/main.tsx"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import UX4G styles
import '@ux4g/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Start Using Components

```tsx title="src/App.tsx"
import { Button, Input, Field, Label, Alert } from '@ux4g/react-core';

function App() {
  return (
    <div className="container">
      <Alert variant="info">
        Welcome to UX4G Design System!
      </Alert>

      <Field>
        <Label htmlFor="name" required>Full Name</Label>
        <Input id="name" placeholder="Enter your name" required />
      </Field>

      <Button variant="primary">Submit</Button>
    </div>
  );
}

export default App;
```

## Angular Installation

### Prerequisites

- Node.js 18 or higher
- Angular 18 or higher
- npm, yarn, or pnpm

### Install Packages

```bash
npm install @ux4g/angular-core @ux4g/styles @ux4g/tokens
```

### Import Styles

Import UX4G styles in your global styles file:

```scss title="src/styles.scss"
@import '@ux4g/styles';
```

### Import Components

UX4G Angular components are standalone components. Import them directly:

```typescript title="src/app/app.component.ts"
import { Component } from '@angular/core';
import { ButtonComponent, InputComponent, FieldComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, InputComponent, FieldComponent],
  template: `
    <div class="container">
      <ux4g-field>
        <ux4g-input
          id="name"
          placeholder="Enter your name"
          label="Full Name"
          required
        ></ux4g-input>
      </ux4g-field>

      <ux4g-button variant="primary">Submit</ux4g-button>
    </div>
  `,
})
export class AppComponent {}
```

## TypeScript Configuration

UX4G is written in TypeScript and includes full type definitions.

### tsconfig.json

Ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Tailwind CSS Configuration

UX4G works seamlessly with Tailwind CSS v4.

### tailwind.config.js

If you're using Tailwind CSS, UX4G design tokens are compatible:

```javascript title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@ux4g/react-core/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        destructive: 'var(--color-destructive)',
      },
    },
  },
  plugins: [],
}
```

## Vite Configuration

If you're using Vite, no additional configuration is required. UX4G works out of the box.

### vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

## Next.js Configuration

### App Router (Next.js 13+)

Import UX4G styles in your root layout:

```tsx title="app/layout.tsx"
import '@ux4g/styles';

export default function RootLayout({
  children,
}: {
  children: React.Node;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Pages Router (Next.js 12 and below)

Import UX4G styles in `_app.tsx`:

```tsx title="pages/_app.tsx"
import '@ux4g/styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

## Package Versions

Current stable versions:

| Package | Version | Description |
|---------|---------|-------------|
| `@ux4g/react-core` | 1.0.0 | React components |
| `@ux4g/angular-core` | 1.0.0 | Angular components |
| `@ux4g/styles` | 1.0.0 | CSS styles |
| `@ux4g/tokens` | 1.0.0 | Design tokens |

## Verify Installation

Create a simple test component to verify installation:

```tsx
import { Button } from '@ux4g/react-core';

function Test() {
  return (
    <Button variant="primary" onClick={() => alert('It works!')}>
      Click Me
    </Button>
  );
}
```

If the button renders with proper styling, you're all set!

## Troubleshooting

### Styles Not Loading

If styles aren't loading, ensure:

1. You've imported `@ux4g/styles` in your entry point
2. Your bundler is configured to process CSS files
3. CSS import order is correct (UX4G styles should come before custom styles)

### TypeScript Errors

If you see TypeScript errors:

1. Ensure `@types/react` and `@types/react-dom` are installed
2. Check that `strict` mode is enabled in `tsconfig.json`
3. Clear your TypeScript cache: `rm -rf node_modules/.cache`

### Module Not Found

If you see "Module not found" errors:

1. Clear your package manager cache
2. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
3. Restart your development server

## Next Steps

Now that UX4G is installed:

1. [Quick Start Guide](/getting-started/quick-start) - Build your first form
2. [Component Documentation](/components) - Explore all components
3. [Storybook](/storybook) - See live examples

---

**Need help?** Check our [FAQs](/resources/faqs) or [open an issue](https://github.com/ux4g/ux4g/issues).
