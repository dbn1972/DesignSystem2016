# UX4G Design System - Developer Onboarding Guide

Complete onboarding checklist for developers getting started with UX4G.

---

## Welcome to UX4G! 🎉

This guide will help you get started with the UX4G Design System in **30 minutes or less**.

---

## Onboarding Checklist

### Phase 1: Setup (5 minutes)

- [ ] **Verify Prerequisites**
  - [ ] Node.js 18+ installed (`node --version`)
  - [ ] npm, yarn, or pnpm installed
  - [ ] Code editor (VS Code recommended)
  - [ ] Git installed

- [ ] **Choose Your Path**
  - [ ] React developer → Use React starter
  - [ ] Angular developer → Use Angular starter

- [ ] **Clone Starter Repository**
  ```bash
  # React
  git clone https://github.com/ux4g/react-starter.git my-project
  
  # Angular
  git clone https://github.com/ux4g/angular-starter.git my-project
  ```

- [ ] **Install Dependencies**
  ```bash
  cd my-project
  npm install
  ```

- [ ] **Start Development Server**
  ```bash
  # React
  npm run dev
  
  # Angular
  npm start
  ```

- [ ] **Verify Installation**
  - [ ] Open http://localhost:5173 (React) or http://localhost:4200 (Angular)
  - [ ] See UX4G-styled home page
  - [ ] Navigate to different pages
  - [ ] Check browser console for errors (should be none)

✅ **Checkpoint:** You should see a working government portal application!

---

### Phase 2: Understanding the System (10 minutes)

- [ ] **Review Package Architecture**
  - [ ] Read [INSTALLATION_GUIDE.md](./INSTALLATION_GUIDE.md)
  - [ ] Understand the 4-layer structure:
    - `@ux4g/tokens` → Design tokens
    - `@ux4g/styles` → CSS foundation
    - `@ux4g/react-core` or `@ux4g/angular-core` → Components
    - `@ux4g/react-patterns` or `@ux4g/angular-patterns` → Patterns

- [ ] **Explore Project Structure**
  - [ ] Open `src/` folder
  - [ ] Review `pages/` folder (example pages)
  - [ ] Review `components/` folder (reusable components)
  - [ ] Review `services/` folder (API services)

- [ ] **Understand Import Patterns**
  
  **React:**
  ```tsx
  // Components
  import { Button, Input, Card } from '@ux4g/react-core';
  
  // Patterns
  import { SignIn } from '@ux4g/react-patterns/authentication';
  ```
  
  **Angular:**
  ```typescript
  // Components
  import { ButtonComponent, InputComponent, CardComponent } from '@ux4g/angular-core';
  
  // Patterns
  import { SignInComponent } from '@ux4g/angular-patterns/authentication';
  ```

- [ ] **Review Documentation**
  - [ ] Browse [Component Documentation](./COMPONENTS.md)
  - [ ] Browse [Pattern Catalog](./PATTERNS.md)
  - [ ] Bookmark for reference

✅ **Checkpoint:** You understand how packages are organized!

---

### Phase 3: Build Your First Page (10 minutes)

- [ ] **Task: Create a "Services" Page**

#### React

```bash
# Create new page file
touch src/pages/ServicesPage.tsx
```

```tsx
// src/pages/ServicesPage.tsx
import { Card, Button } from '@ux4g/react-core';

export function ServicesPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Available Services</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
        <Card>
          <h2>Birth Certificate</h2>
          <p>Apply for birth certificate online</p>
          <Button variant="primary">Apply Now</Button>
        </Card>
        
        <Card>
          <h2>Passport</h2>
          <p>Apply for passport services</p>
          <Button variant="primary">Apply Now</Button>
        </Card>
      </div>
    </div>
  );
}
```

Add route in `src/App.tsx`:
```tsx
import { ServicesPage } from './pages/ServicesPage';

// Add to routes
<Route path="/services" element={<ServicesPage />} />
```

#### Angular

```bash
# Generate new page component
ng generate component pages/services --standalone
```

```typescript
// src/app/pages/services/services.component.ts
import { Component } from '@angular/core';
import { CardComponent, ButtonComponent } from '@ux4g/angular-core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  template: `
    <div style="padding: 2rem">
      <h1>Available Services</h1>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem">
        <ux4g-card>
          <h2>Birth Certificate</h2>
          <p>Apply for birth certificate online</p>
          <ux4g-button variant="primary">Apply Now</ux4g-button>
        </ux4g-card>
        
        <ux4g-card>
          <h2>Passport</h2>
          <p>Apply for passport services</p>
          <ux4g-button variant="primary">Apply Now</ux4g-button>
        </ux4g-card>
      </div>
    </div>
  `
})
export class ServicesComponent { }
```

Add route in `src/app/app.routes.ts`:
```typescript
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  // ... existing routes
  { path: 'services', component: ServicesComponent }
];
```

- [ ] **Verify Your Page**
  - [ ] Navigate to `/services`
  - [ ] See cards with buttons
  - [ ] Test button interactions
  - [ ] Check responsive design (resize browser)

✅ **Checkpoint:** You created a page using UX4G components!

---

### Phase 4: Use a Pattern (5 minutes)

- [ ] **Task: Add Authentication Flow**

The starter already includes a login page, but let's understand how it works:

#### React

```tsx
// src/pages/LoginPage.tsx (already exists)
import { SignIn } from '@ux4g/react-patterns/authentication';
import { authService } from '../services/auth.service';

export function LoginPage() {
  const navigate = useNavigate();

  const handleSignIn = async (credentials) => {
    const result = await authService.signIn(credentials);
    
    if (result.success) {
      navigate('/');
    }
    
    return result;
  };

  return (
    <SignIn
      onSignIn={handleSignIn}
      showRememberMe
      branding={{
        logo: '/govt-logo.png',
        serviceName: 'Digital Services Portal'
      }}
    />
  );
}
```

#### Angular

```typescript
// src/app/pages/login/login.component.ts (already exists)
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SignInComponent } from '@ux4g/angular-patterns/authentication';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignInComponent],
  template: `
    <ux4g-pattern-signin
      [showRememberMe]="true"
      [branding]="branding"
      (signIn)="handleSignIn($event)"
    ></ux4g-pattern-signin>
  `
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  branding = {
    logo: '/govt-logo.png',
    serviceName: 'Digital Services Portal'
  };

  async handleSignIn(credentials: SignInCredentials) {
    const result = await this.authService.signIn(credentials);
    
    if (result.success) {
      this.router.navigate(['/']);
    }
    
    return result;
  }
}
```

- [ ] **Test the Login Pattern**
  - [ ] Navigate to `/login`
  - [ ] Try to sign in (use demo/demo123 for mock)
  - [ ] Verify validation works
  - [ ] Check error handling

✅ **Checkpoint:** You understand how patterns work!

---

### Phase 5: Customize (Optional)

- [ ] **Customize Theme**
  
  Edit `src/index.css` (React) or `src/styles.css` (Angular):
  ```css
  :root {
    /* Override brand color */
    --ux4g-semantic-color-brand-primary: #FF5700;
    
    /* Override spacing */
    --ux4g-spacing-base: 4px;
  }
  ```

- [ ] **Add Your Logo**
  - [ ] Replace `public/govt-logo.png` (React) or `src/assets/govt-logo.png` (Angular)
  - [ ] Update branding in layout component

- [ ] **Configure Environment**
  - [ ] Copy `.env.example` to `.env` (React)
  - [ ] Update `src/environments/environment.ts` (Angular)
  - [ ] Set your API URL and service name

✅ **Checkpoint:** You customized the starter to your needs!

---

## What's Next?

### Learn More

- [ ] **Read Documentation**
  - [ ] [Component API Reference](./COMPONENTS.md)
  - [ ] [Pattern Catalog](./PATTERNS.md)
  - [ ] [Theming Guide](./THEMING.md)
  - [ ] [Best Practices](./BEST_PRACTICES.md)

- [ ] **Explore Examples**
  - [ ] Review all pages in starter repo
  - [ ] Check `examples/` folder
  - [ ] Study pattern usage

- [ ] **Join Community**
  - [ ] Visit [forum.ux4g.gov.in](https://forum.ux4g.gov.in)
  - [ ] Join Slack/Discord (if available)
  - [ ] Follow on social media

### Build Your Application

- [ ] **Plan Your Application**
  - [ ] List required pages
  - [ ] Identify needed patterns
  - [ ] Map user flows

- [ ] **Replace Mock Services**
  - [ ] Update `services/auth.service.ts` with real API
  - [ ] Add other service files as needed
  - [ ] Test API integration

- [ ] **Add More Pages**
  - [ ] Create page components
  - [ ] Add routes
  - [ ] Connect to services

- [ ] **Deploy**
  - [ ] Build for production (`npm run build`)
  - [ ] Deploy to your hosting platform
  - [ ] Configure production environment

---

## Common First-Day Questions

### Q: Which package do I import from?

**A:** 
- **Components** (Button, Input, Card) → `@ux4g/react-core` or `@ux4g/angular-core`
- **Patterns** (SignIn, OTPVerification) → `@ux4g/react-patterns` or `@ux4g/angular-patterns`
- **Styles** → Import once in global CSS: `@import '@ux4g/styles'`
- **Tokens** → Used by styles, rarely imported directly

### Q: Do I need to install all packages?

**A:**
- **Required:** `@ux4g/tokens`, `@ux4g/styles`, `@ux4g/[react|angular]-core`
- **Optional:** `@ux4g/[react|angular]-patterns` (but highly recommended)

### Q: Can I customize component styles?

**A:** Yes! Three ways:
1. Override CSS custom properties (tokens)
2. Add custom CSS classes
3. Wrap components in your own components

### Q: How do I connect to my backend API?

**A:** Replace the mock services in `src/services/` with real API calls using fetch (React) or HttpClient (Angular).

### Q: What if I need a component that doesn't exist?

**A:**
1. Check if a pattern exists that includes it
2. Build it using existing components
3. Request it on GitHub Issues
4. Contribute it back to UX4G!

---

## Troubleshooting First-Day Issues

### Issue: "Module not found" errors

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Styles not loading

**Solution:**
1. Verify `@import '@ux4g/styles'` is in global CSS
2. Check build tool CSS configuration
3. Clear browser cache
4. Restart dev server

### Issue: TypeScript errors

**Solution:**
1. Check TypeScript version (should be 5.0+)
2. Verify tsconfig.json is correct
3. Run `npm install` again

### Issue: Can't find example pages

**Solution:**
Make sure you cloned the starter repo, not the individual packages.

---

## Getting Help

### Resources

- 📚 **Documentation:** [ux4g.gov.in](https://ux4g.gov.in)
- 💬 **Forum:** [forum.ux4g.gov.in](https://forum.ux4g.gov.in)
- 🐛 **Issues:** [GitHub Issues](https://github.com/ux4g/issues)
- 📧 **Email:** support@ux4g.gov.in

### Before Asking for Help

1. Check this onboarding guide
2. Search documentation
3. Check GitHub Issues
4. Ask in forum/community

### When Asking for Help

Include:
- UX4G package versions
- Framework (React/Angular) and version
- Error message (full stack trace)
- Code snippet (minimal reproduction)
- What you've already tried

---

## Congratulations! 🎊

You've completed the UX4G onboarding! You now know how to:

✅ Install and set up UX4G  
✅ Use components and patterns  
✅ Create new pages  
✅ Customize the theme  
✅ Connect to APIs  

**Ready to build amazing government services!**

---

## Onboarding Feedback

Help us improve this onboarding guide:

- What was confusing?
- What was missing?
- What worked well?

Submit feedback: [onboarding-feedback@ux4g.gov.in](mailto:onboarding-feedback@ux4g.gov.in)
