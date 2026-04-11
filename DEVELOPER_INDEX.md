# UX4G Design System - Developer Documentation Index

Complete index of all developer documentation for the UX4G Design System.

---

## Quick Navigation

| I want to... | Go to... |
|--------------|----------|
| **Get started quickly** | [Getting Started Guide](#getting-started) |
| **Clone a starter repo** | [Starter Repositories](#starter-repositories) |
| **Install in existing project** | [Installation Guide](#installation) |
| **Learn the basics** | [Developer Onboarding](#developer-onboarding) |
| **Understand folder structure** | [Repository Structure](#repository-structure) |
| **Find a component** | [Component Documentation](#components) |
| **Use a pattern** | [Pattern Catalog](#patterns) |
| **Customize the theme** | [Theming Guide](#theming) |
| **Get help** | [Support](#support) |

---

## Documentation Structure

### 📚 Core Documentation

#### Getting Started
**File:** [`GETTING_STARTED.md`](./GETTING_STARTED.md)  
**Purpose:** Quick start guide for new developers  
**Time to read:** 10 minutes  
**Covers:**
- Quick start with starter repos
- Manual installation for React and Angular
- First page in 5 minutes
- Common use cases
- FAQ

**Start here if:** You're new to UX4G

---

#### Installation Guide
**File:** [`INSTALLATION_GUIDE.md`](./INSTALLATION_GUIDE.md)  
**Purpose:** Detailed installation instructions  
**Time to read:** 15 minutes  
**Covers:**
- Prerequisites
- Package overview
- Step-by-step installation (React & Angular)
- Verification steps
- TypeScript configuration
- Troubleshooting

**Start here if:** You're adding UX4G to an existing project

---

#### Developer Onboarding
**File:** [`DEVELOPER_ONBOARDING.md`](./DEVELOPER_ONBOARDING.md)  
**Purpose:** 30-minute guided onboarding with checklist  
**Time to complete:** 30 minutes  
**Covers:**
- Setup checklist (5 min)
- Understanding the system (10 min)
- Building your first page (10 min)
- Using patterns (5 min)
- Troubleshooting

**Start here if:** You want a structured learning path

---

### 🏗️ Architecture Documentation

#### Starter Repository Structure
**File:** [`STARTER_REPO_STRUCTURE.md`](./STARTER_REPO_STRUCTURE.md)  
**Purpose:** Complete folder structure reference  
**Time to read:** 10 minutes  
**Covers:**
- React starter structure
- Angular starter structure
- File naming conventions
- Folder organization principles
- Key files explained
- Best practices

**Start here if:** You need to understand the project structure

---

#### Pattern Packages Strategy
**File:** [`PATTERN_PACKAGES_STRATEGY.md`](./PATTERN_PACKAGES_STRATEGY.md)  
**Purpose:** Understanding component vs pattern packages  
**Time to read:** 20 minutes  
**Covers:**
- Package architecture
- Components vs patterns
- Design principles
- Naming conventions
- Usage patterns
- Testing strategy

**Start here if:** You want to understand the design system architecture

---

### 📦 Package Documentation

#### React Packages

**Tokens:**
- Package: `@ux4g/tokens`
- Documentation: `src/app/tokens-package/README.md`
- Purpose: Design tokens (colors, spacing, typography)

**Styles:**
- Package: `@ux4g/styles`
- Documentation: `src/app/styles-package/README.md`
- Purpose: CSS foundation and utilities

**React Core:**
- Package: `@ux4g/react-core`
- Documentation: `src/app/react-core-package/README.md`
- Purpose: Base UI components

**React Patterns:**
- Package: `@ux4g/react-patterns`
- Documentation: `src/app/react-patterns-package/README.md`
- Purpose: Pre-composed flow patterns

#### Angular Packages

**Angular Core:**
- Package: `@ux4g/angular-core`
- Documentation: `src/app/angular-core-package/README.md`
- Purpose: Base UI components

**Angular Patterns:**
- Package: `@ux4g/angular-patterns`
- Documentation: `src/app/angular-patterns-package/README.md`
- Purpose: Pre-composed flow patterns

---

### 🎨 Component & Pattern References

#### Components
**React:** `src/app/react-core-package/COMPONENT_API_REFERENCE.md`  
**Angular:** `src/app/angular-core-package/COMPONENT_API_REFERENCE.md`  

**Covers:**
- All component APIs
- Props/Inputs
- Events/Outputs
- Usage examples
- Accessibility notes

**Total Components:** 28
- Form: 12 components
- Feedback: 4 components
- Navigation: 8 components
- Layout: 2 components
- Overlay: 2 components

---

#### Patterns
**React:** `src/app/react-patterns-package/PATTERN_CATALOG.md`  
**Angular:** `src/app/angular-patterns-package/PATTERN_CATALOG.md`  

**Covers:**
- All pattern specifications
- Dependencies
- Props/Inputs
- States
- Accessibility requirements
- Usage examples

**Total Patterns:** 14
- Authentication: 6 patterns
- Forms: 3 patterns
- Submission: 2 patterns
- Tracking: 1 pattern
- Payment: 2 patterns

---

### 🚀 Starter Repositories

#### React Starter
**Repository:** `starter-repos/react-starter/`  
**Documentation:** [`starter-repos/react-starter/README.md`](./starter-repos/react-starter/README.md)  

**Features:**
- ✅ Vite + React 18 + TypeScript
- ✅ React Router
- ✅ Pre-configured UX4G packages
- ✅ Example pages (Home, Login, Application, Status)
- ✅ Mock services
- ✅ Layout components

**Quick start:**
```bash
git clone https://github.com/ux4g/react-starter.git my-project
cd my-project
npm install
npm run dev
```

---

#### Angular Starter
**Repository:** `starter-repos/angular-starter/`  
**Documentation:** [`starter-repos/angular-starter/README.md`](./starter-repos/angular-starter/README.md)  

**Features:**
- ✅ Angular 18 + TypeScript
- ✅ Standalone components
- ✅ Angular Router
- ✅ Pre-configured UX4G packages
- ✅ Example pages (Home, Login, Application, Status)
- ✅ Mock services
- ✅ Layout components

**Quick start:**
```bash
git clone https://github.com/ux4g/angular-starter.git my-project
cd my-project
npm install
npm start
```

---

## Learning Paths

### Path 1: Quick Start (15 minutes)

For developers who want to start building immediately:

1. ✅ [Clone starter repository](#starter-repositories)
2. ✅ Run `npm install && npm start`
3. ✅ Explore example pages
4. ✅ Read starter README
5. ✅ Start building!

---

### Path 2: Comprehensive Learning (2 hours)

For developers who want to understand the system deeply:

1. ✅ Read [Getting Started Guide](./GETTING_STARTED.md) - 10 min
2. ✅ Complete [Developer Onboarding](./DEVELOPER_ONBOARDING.md) - 30 min
3. ✅ Review [Starter Repository Structure](./STARTER_REPO_STRUCTURE.md) - 10 min
4. ✅ Browse [Component API Reference](#components) - 30 min
5. ✅ Browse [Pattern Catalog](#patterns) - 20 min
6. ✅ Read [Pattern Packages Strategy](./PATTERN_PACKAGES_STRATEGY.md) - 20 min

---

### Path 3: Adding to Existing Project (30 minutes)

For developers adding UX4G to an existing application:

1. ✅ Read [Installation Guide](./INSTALLATION_GUIDE.md) - 15 min
2. ✅ Follow installation steps - 10 min
3. ✅ Create test page - 5 min
4. ✅ Reference [Component API](#components) as needed

---

## Common Tasks

### Task: Create a New Page

**React:**
1. Create `src/pages/MyPage.tsx`
2. Add component using UX4G components
3. Add route in `src/App.tsx`
4. Navigate to `/my-page`

**Angular:**
1. Run `ng generate component pages/my-page --standalone`
2. Add UX4G components to imports
3. Add route in `src/app/app.routes.ts`
4. Navigate to `/my-page`

**Time:** 5 minutes  
**Documentation:** [Getting Started - First Page in 5 Minutes](./GETTING_STARTED.md#first-page-in-5-minutes)

---

### Task: Add Authentication

**React:**
1. Import `SignIn` pattern from `@ux4g/react-patterns/authentication`
2. Create `handleSignIn` function
3. Use pattern: `<SignIn onSignIn={handleSignIn} />`

**Angular:**
1. Import `SignInComponent` from `@ux4g/angular-patterns/authentication`
2. Create `handleSignIn` method
3. Use pattern: `<ux4g-pattern-signin (signIn)="handleSignIn($event)" />`

**Time:** 10 minutes  
**Documentation:** [Pattern Catalog - Sign In](./src/app/react-patterns-package/PATTERN_CATALOG.md#sign-in)

---

### Task: Create a Form

**React:**
```tsx
import { useForm } from 'react-hook-form';
import { Input, Button, Field, Label, ErrorText } from '@ux4g/react-core';

const { register, handleSubmit, formState: { errors } } = useForm();

<form onSubmit={handleSubmit(onSubmit)}>
  <Field error={!!errors.name}>
    <Label>Name</Label>
    <Input {...register('name', { required: true })} />
    {errors.name && <ErrorText>Required</ErrorText>}
  </Field>
  <Button type="submit">Submit</Button>
</form>
```

**Angular:**
```typescript
import { FormBuilder, Validators } from '@angular/forms';
import { InputComponent, ButtonComponent, FieldComponent, LabelComponent, ErrorTextComponent } from '@ux4g/angular-core';

form = this.fb.group({ name: ['', Validators.required] });

<form [formGroup]="form">
  <ux4g-field [error]="name.invalid && name.touched">
    <ux4g-label>Name</ux4g-label>
    <ux4g-input formControlName="name"></ux4g-input>
    <ux4g-error-text *ngIf="name.hasError('required')">Required</ux4g-error-text>
  </ux4g-field>
  <ux4g-button type="submit">Submit</ux4g-button>
</form>
```

**Time:** 10 minutes  
**Documentation:** [Component API - Form Components](#components)

---

### Task: Customize Theme

Add to `src/index.css` (React) or `src/styles.css` (Angular):

```css
@import '@ux4g/styles';

:root {
  --ux4g-semantic-color-brand-primary: #FF5700;
  --ux4g-semantic-color-interactive-default: #005A9C;
}
```

**Time:** 2 minutes  
**Documentation:** [Getting Started - Customization](./GETTING_STARTED.md#customization)

---

## Reference Tables

### Package Import Reference

| What | React Import | Angular Import |
|------|--------------|----------------|
| Button | `import { Button } from '@ux4g/react-core'` | `import { ButtonComponent } from '@ux4g/angular-core'` |
| Input | `import { Input } from '@ux4g/react-core'` | `import { InputComponent } from '@ux4g/angular-core'` |
| Sign In Pattern | `import { SignIn } from '@ux4g/react-patterns/authentication'` | `import { SignInComponent } from '@ux4g/angular-patterns/authentication'` |
| Styles | `import '@ux4g/styles'` in JS | `@import '@ux4g/styles'` in CSS |

### Component Categories

| Category | Count | Examples |
|----------|-------|----------|
| Form Components | 12 | Button, Input, Select, Checkbox, Radio, Field, Label |
| Feedback Components | 4 | Alert, Badge, StatusTag, Toast |
| Navigation Components | 8 | Breadcrumb, Pagination, Tabs, Accordion, Stepper |
| Layout Components | 2 | Card, Table |
| Overlay Components | 2 | Dialog, Drawer |

### Pattern Categories

| Category | Count | Examples |
|----------|-------|----------|
| Authentication | 6 | Sign In, Sign Up, OTP Verification, Forgot Password |
| Forms | 3 | Save & Resume, Multi-Document Upload, Review & Confirm |
| Submission | 2 | Submission Confirmation, Notification Blocks |
| Tracking | 1 | Status Tracking |
| Payment | 2 | Payment Summary, Fee Summary |

---

## Support Resources

### Documentation
- 📚 Official Docs: [ux4g.gov.in](https://ux4g.gov.in)
- 📖 Component Reference: [ux4g.gov.in/components](https://ux4g.gov.in/components)
- 🎨 Pattern Catalog: [ux4g.gov.in/patterns](https://ux4g.gov.in/patterns)

### Community
- 💬 Forum: [forum.ux4g.gov.in](https://forum.ux4g.gov.in)
- 🐛 GitHub Issues: [github.com/ux4g/issues](https://github.com/ux4g/issues)
- 📧 Email: support@ux4g.gov.in

### Training
- 🎓 Video Tutorials: [ux4g.gov.in/learn](https://ux4g.gov.in/learn)
- 📝 Blog: [ux4g.gov.in/blog](https://ux4g.gov.in/blog)
- 🎯 Examples: Starter repositories

---

## Version Information

| Package | Current Version | React | Angular |
|---------|----------------|-------|---------|
| @ux4g/tokens | 1.0.0 | ✅ | ✅ |
| @ux4g/styles | 1.0.0 | ✅ | ✅ |
| @ux4g/react-core | 1.0.0 | ✅ | - |
| @ux4g/react-patterns | 1.0.0 | ✅ | - |
| @ux4g/angular-core | 1.0.0 | - | ✅ |
| @ux4g/angular-patterns | 1.0.0 | - | ✅ |

**Framework Requirements:**
- React: 18.0.0+
- Angular: 18.0.0+
- Node.js: 18.0.0+
- TypeScript: 5.0.0+

---

## Contributing

Want to contribute to UX4G?

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md)
2. Check [GitHub Issues](https://github.com/ux4g/issues)
3. Submit Pull Request
4. Join community discussions

---

## Migration Guides

Migrating from older versions or other systems:

- [Migrating from v0.x to v1.x](./MIGRATION_V0_TO_V1.md)
- [Migrating from Custom Components](./MIGRATION_CUSTOM.md)
- [Migrating from Other Design Systems](./MIGRATION_OTHER.md)

---

## Troubleshooting

Common issues and solutions:

1. **Styles not loading** → Check [Installation Guide - Troubleshooting](./INSTALLATION_GUIDE.md#troubleshooting)
2. **Module not found** → Check [Developer Onboarding - Troubleshooting](./DEVELOPER_ONBOARDING.md#troubleshooting-first-day-issues)
3. **Build errors** → Check starter repo README troubleshooting section

---

## Changelog

Track updates and changes:

- [Tokens Changelog](./src/app/tokens-package/CHANGELOG.md)
- [Styles Changelog](./src/app/styles-package/CHANGELOG.md)
- [React Core Changelog](./src/app/react-core-package/CHANGELOG.md)
- [React Patterns Changelog](./src/app/react-patterns-package/CHANGELOG.md)
- [Angular Core Changelog](./src/app/angular-core-package/CHANGELOG.md)
- [Angular Patterns Changelog](./src/app/angular-patterns-package/CHANGELOG.md)

---

## Quick Links

### Most Used

- [Getting Started](./GETTING_STARTED.md)
- [React Starter](./starter-repos/react-starter/README.md)
- [Angular Starter](./starter-repos/angular-starter/README.md)
- [Component API Reference](#components)
- [Pattern Catalog](#patterns)

### Advanced

- [Package Architecture](./PATTERN_PACKAGES_STRATEGY.md)
- [Repository Structure](./STARTER_REPO_STRUCTURE.md)
- [Theming Guide](./THEMING.md)
- [Best Practices](./BEST_PRACTICES.md)

---

**Ready to build government services? Start with [Getting Started Guide](./GETTING_STARTED.md)!**
