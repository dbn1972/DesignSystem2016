# UX4G React Starter

Official starter template for building government service applications with the UX4G Design System.

## What's Included

✅ **Pre-configured UX4G packages:**
- `@ux4g/tokens` - Design tokens
- `@ux4g/styles` - CSS foundation
- `@ux4g/react-core` - UI components
- `@ux4g/react-patterns` - Flow patterns

✅ **Modern React setup:**
- React 18+ with TypeScript
- Vite for fast builds
- React Router for navigation
- React Hook Form for forms

✅ **Development tools:**
- ESLint for code quality
- Prettier for formatting
- TypeScript for type safety

✅ **Example pages:**
- Home page
- Sign In pattern
- Application form with multi-step flow
- Status tracking
- Component showcase

---

## Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/ux4g/react-starter.git my-project
cd my-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
my-project/
├── public/                 # Static assets
│   └── govt-logo.png      # Government logo
├── src/
│   ├── components/        # Reusable components
│   │   ├── layout/       # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MainLayout.tsx
│   │   └── common/       # Common components
│   │       └── LoadingSpinner.tsx
│   ├── pages/            # Page components
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── ApplicationPage.tsx
│   │   ├── StatusPage.tsx
│   │   └── ComponentsPage.tsx
│   ├── services/         # API services
│   │   ├── api.ts       # API client
│   │   ├── auth.service.ts
│   │   └── application.service.ts
│   ├── hooks/           # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useForm.ts
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   ├── routes/          # Route configuration
│   │   └── index.tsx
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |

---

## Adding New Pages

### 1. Create Page Component

```tsx
// src/pages/MyNewPage.tsx
import { Card, Button } from '@ux4g/react-core';

export function MyNewPage() {
  return (
    <Card>
      <h1>My New Page</h1>
      <Button variant="primary">Action</Button>
    </Card>
  );
}
```

### 2. Add Route

```tsx
// src/routes/index.tsx
import { MyNewPage } from '../pages/MyNewPage';

export const routes = [
  // ... existing routes
  {
    path: '/my-new-page',
    element: <MyNewPage />
  }
];
```

### 3. Add Navigation Link

```tsx
// src/components/layout/Header.tsx
<nav>
  <Link to="/my-new-page">My New Page</Link>
</nav>
```

---

## Using Components

### Import from Core

```tsx
import {
  Button,
  Input,
  Card,
  Alert,
  Tabs,
  Dialog,
} from '@ux4g/react-core';

function MyComponent() {
  return (
    <Card>
      <Alert variant="info">Information message</Alert>
      <Input placeholder="Enter text" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Import from Patterns

```tsx
import { SignIn } from '@ux4g/react-patterns/authentication';

function LoginPage() {
  const handleSignIn = async (credentials) => {
    const result = await authService.signIn(credentials);
    return result;
  };

  return <SignIn onSignIn={handleSignIn} />;
}
```

---

## Using Services

Services are pre-configured mock implementations. Replace with real API calls.

### Authentication Service

```tsx
// src/services/auth.service.ts
import { api } from './api';

export const authService = {
  async signIn(credentials: SignInCredentials) {
    // TODO: Replace with real API call
    const response = await api.post('/auth/signin', credentials);
    return response.data;
  },

  async signOut() {
    // TODO: Replace with real API call
    await api.post('/auth/signout');
  },
};
```

### Usage in Component

```tsx
import { authService } from '../services/auth.service';

function LoginPage() {
  const handleSignIn = async (credentials) => {
    try {
      const result = await authService.signIn(credentials);
      if (result.success) {
        // Handle success
        navigate('/dashboard');
      }
      return result;
    } catch (error) {
      return {
        success: false,
        error: 'An error occurred',
      };
    }
  };

  return <SignIn onSignIn={handleSignIn} />;
}
```

---

## Environment Variables

Create `.env` file from template:

```bash
cp .env.example .env
```

Configure your environment:

```env
# API Configuration
VITE_API_BASE_URL=https://api.yourdomain.gov.in
VITE_API_TIMEOUT=30000

# Feature Flags
VITE_ENABLE_SOCIAL_LOGIN=true
VITE_ENABLE_MOBILE_OTP=true

# Branding
VITE_SERVICE_NAME=Digital Services Portal
VITE_LOGO_URL=/govt-logo.png
```

Access in code:

```tsx
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const serviceName = import.meta.env.VITE_SERVICE_NAME;
```

---

## Customization

### Theme Customization

Override design tokens in `src/index.css`:

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

```tsx
// src/components/common/CustomButton.tsx
import { Button, ButtonProps } from '@ux4g/react-core';

export function CustomButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className={`custom-button ${props.className || ''}`}
    />
  );
}
```

---

## Form Handling

### Using React Hook Form with UX4G

```tsx
import { useForm } from 'react-hook-form';
import { Input, Button, Field, Label, ErrorText } from '@ux4g/react-core';

interface FormData {
  name: string;
  email: string;
}

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field error={!!errors.name}>
        <Label htmlFor="name" required>Name</Label>
        <Input
          id="name"
          {...register('name', { required: 'Name is required' })}
          error={!!errors.name}
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      </Field>

      <Button type="submit" variant="primary">Submit</Button>
    </form>
  );
}
```

---

## State Management

### Context API (Included)

```tsx
// src/context/AuthContext.tsx
import { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const signIn = (user: User) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  const signOut = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

### Optional: Add Redux/Zustand

```bash
# Redux Toolkit
npm install @reduxjs/toolkit react-redux

# Zustand (lightweight alternative)
npm install zustand
```

---

## Testing

### Setup Testing (Optional)

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Add test script to `package.json`:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

Example test:

```tsx
// src/pages/HomePage.test.tsx
import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('should render welcome message', () => {
    render(<HomePage />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
```

---

## Deployment

### Build for Production

```bash
npm run build
```

Output in `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to AWS S3

```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

---

## Best Practices

1. **Use TypeScript** - Leverage type safety
2. **Follow Naming Conventions** - PascalCase for components, camelCase for functions
3. **Keep Components Small** - Single responsibility principle
4. **Use Patterns** - Leverage @ux4g/react-patterns for common flows
5. **Mock Services** - Replace mock services with real API calls
6. **Environment Variables** - Never commit secrets
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
# Kill process on port 5173
npx kill-port 5173
# Or use different port
npm run dev -- --port 3000
```

### Issue: TypeScript Errors

**Solution:**
```bash
npm run type-check
# Fix reported errors
```

---

## Learn More

- [UX4G Documentation](https://ux4g.gov.in)
- [Component API Reference](https://ux4g.gov.in/components)
- [Pattern Catalog](https://ux4g.gov.in/patterns)
- [Design Tokens](https://ux4g.gov.in/tokens)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

---

## Support

- 📧 Email: support@ux4g.gov.in
- 🐛 Issues: [GitHub Issues](https://github.com/ux4g/react-starter/issues)
- 💬 Forum: [forum.ux4g.gov.in](https://forum.ux4g.gov.in)

---

## License

MIT © UX4G Team
