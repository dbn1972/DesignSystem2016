# UX4G Design System - Installation Guide

Complete installation guide for the UX4G Design System packages.

---

## Prerequisites

- **Node.js:** 18.x or higher
- **Package Manager:** npm, yarn, or pnpm
- **Framework:** React 18+ or Angular 18+
- **TypeScript:** 5.0+ (recommended)

---

## Package Overview

The UX4G Design System consists of four layers:

```
@ux4g/react-patterns (or angular-patterns)
    ↓ depends on
@ux4g/react-core (or angular-core)
    ↓ depends on
@ux4g/styles
    ↓ depends on
@ux4g/tokens
```

### Package Descriptions

| Package | Description | Required |
|---------|-------------|----------|
| `@ux4g/tokens` | Design tokens (colors, spacing, typography) | ✅ Yes |
| `@ux4g/styles` | CSS foundation and utilities | ✅ Yes |
| `@ux4g/react-core` or `@ux4g/angular-core` | Base UI components | ✅ Yes |
| `@ux4g/react-patterns` or `@ux4g/angular-patterns` | Pre-composed flow patterns | ⚠️ Optional |

---

## Quick Start

### Option 1: Use Starter Repository (Recommended)

Clone the appropriate starter repository to get up and running quickly:

**React:**
```bash
git clone https://github.com/ux4g/react-starter.git my-project
cd my-project
npm install
npm start
```

**Angular:**
```bash
git clone https://github.com/ux4g/angular-starter.git my-project
cd my-project
npm install
npm start
```

### Option 2: Add to Existing Project

Follow the installation steps below to add UX4G to your existing project.

---

## React Installation

### Step 1: Install Packages

**Core Packages (Required):**
```bash
npm install @ux4g/tokens @ux4g/styles @ux4g/react-core
```

**Pattern Package (Optional):**
```bash
npm install @ux4g/react-patterns
```

**All Packages:**
```bash
npm install @ux4g/tokens @ux4g/styles @ux4g/react-core @ux4g/react-patterns
```

### Step 2: Import Global Styles

Add to your `src/index.css` or `src/App.css`:

```css
/* Import UX4G styles */
@import '@ux4g/styles';

/* Your custom styles */
```

Or import in JavaScript/TypeScript:

```tsx
// src/main.tsx or src/index.tsx
import '@ux4g/styles';
import './index.css';
```

### Step 3: Use Components

```tsx
// src/App.tsx
import { Button, Input, Card } from '@ux4g/react-core';

function App() {
  return (
    <Card>
      <h1>Welcome to UX4G</h1>
      <Input placeholder="Enter text" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}

export default App;
```

### Step 4: Use Patterns (Optional)

```tsx
// src/pages/LoginPage.tsx
import { SignIn } from '@ux4g/react-patterns/authentication';

function LoginPage() {
  const handleSignIn = async (credentials) => {
    // Your authentication logic
    const result = await authService.signIn(credentials);
    return result;
  };

  return <SignIn onSignIn={handleSignIn} />;
}

export default LoginPage;
```

---

## Angular Installation

### Step 1: Install Packages

**Core Packages (Required):**
```bash
npm install @ux4g/tokens @ux4g/styles @ux4g/angular-core
```

**Pattern Package (Optional):**
```bash
npm install @ux4g/angular-patterns
```

**All Packages:**
```bash
npm install @ux4g/tokens @ux4g/styles @ux4g/angular-core @ux4g/angular-patterns
```

### Step 2: Import Global Styles

Add to your `src/styles.css`:

```css
/* Import UX4G styles */
@import '@ux4g/styles';

/* Your custom styles */
```

### Step 3: Use Components

```typescript
// src/app/app.component.ts
import { Component } from '@angular/core';
import { ButtonComponent, InputComponent, CardComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, InputComponent, CardComponent],
  template: `
    <ux4g-card>
      <h1>Welcome to UX4G</h1>
      <ux4g-input placeholder="Enter text"></ux4g-input>
      <ux4g-button variant="primary">Submit</ux4g-button>
    </ux4g-card>
  `
})
export class AppComponent { }
```

### Step 4: Use Patterns (Optional)

```typescript
// src/app/pages/login/login.component.ts
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
    // Your authentication logic
    const result = await this.authService.signIn(credentials);
    return result;
  }
}
```

---

## Verification

### Verify Installation

Create a simple test page to verify everything is installed correctly:

**React:**
```tsx
// src/TestPage.tsx
import { Button, Alert } from '@ux4g/react-core';

export function TestPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <Alert variant="success">UX4G is installed correctly!</Alert>
      <Button variant="primary">Test Button</Button>
    </div>
  );
}
```

**Angular:**
```typescript
// src/app/test/test.component.ts
import { Component } from '@angular/core';
import { ButtonComponent, AlertComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ButtonComponent, AlertComponent],
  template: `
    <div style="padding: 2rem">
      <ux4g-alert variant="success">UX4G is installed correctly!</ux4g-alert>
      <ux4g-button variant="primary">Test Button</ux4g-button>
    </div>
  `
})
export class TestComponent { }
```

If you see styled components with the UX4G theme, installation is successful!

---

## Package Versions

Always install compatible versions:

```json
{
  "dependencies": {
    "@ux4g/tokens": "^1.0.0",
    "@ux4g/styles": "^1.0.0",
    "@ux4g/react-core": "^1.0.0",
    "@ux4g/react-patterns": "^1.0.0"
  }
}
```

Or for Angular:

```json
{
  "dependencies": {
    "@ux4g/tokens": "^1.0.0",
    "@ux4g/styles": "^1.0.0",
    "@ux4g/angular-core": "^1.0.0",
    "@ux4g/angular-patterns": "^1.0.0"
  }
}
```

---

## TypeScript Configuration

### React (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Angular (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "lib": ["ES2022", "DOM"],
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

---

## CSS Configuration

### Vite (React)

No additional configuration needed. Vite handles CSS imports automatically.

### Webpack (React/Angular)

Ensure CSS loader is configured:

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

### Angular (angular.json)

Styles are automatically configured when using `@import '@ux4g/styles'` in `styles.css`.

---

## Troubleshooting

### Issue: Styles Not Loading

**Solution:**
1. Verify `@ux4g/styles` is installed
2. Ensure import is in global CSS file
3. Check build tool CSS configuration
4. Clear build cache and restart dev server

### Issue: Components Not Found

**Solution:**
1. Verify package installation: `npm list @ux4g/react-core`
2. Check import path: `import { Button } from '@ux4g/react-core'`
3. Ensure TypeScript can resolve package: check `tsconfig.json`

### Issue: Type Errors

**Solution:**
1. Install `@types` packages if needed
2. Update TypeScript to 5.0+
3. Run `npm install` to ensure all dependencies are installed

### Issue: Build Errors

**Solution:**
1. Check Node.js version (18+)
2. Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`
3. Update build tool (Vite, Webpack, Angular CLI)

---

## Next Steps

1. ✅ **Explore Components:** [Component Documentation](./COMPONENTS.md)
2. ✅ **Use Patterns:** [Pattern Documentation](./PATTERNS.md)
3. ✅ **Customize Theme:** [Theming Guide](./THEMING.md)
4. ✅ **Review Examples:** [Example Applications](./examples/)
5. ✅ **Read Best Practices:** [Best Practices](./BEST_PRACTICES.md)

---

## Support

- 📧 Email: support@ux4g.gov.in
- 🐛 Issues: [GitHub Issues](https://github.com/ux4g/issues)
- 📚 Documentation: [ux4g.gov.in](https://ux4g.gov.in)
- 💬 Forum: [forum.ux4g.gov.in](https://forum.ux4g.gov.in)

---

## Migration Guides

- [Migrating from v0.x to v1.x](./MIGRATION_V0_TO_V1.md)
- [Migrating from Custom Components](./MIGRATION_CUSTOM.md)
- [Migrating from Other Design Systems](./MIGRATION_OTHER.md)
