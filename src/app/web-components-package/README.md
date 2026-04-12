# @ux4g/web-components

**Framework-agnostic Web Components for Government of India Design System**

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://www.npmjs.com/package/@ux4g/web-components)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 🎯 Overview

UX4G Web Components provides **framework-agnostic**, standards-based Web Components that work with **any JavaScript framework** or **plain HTML**. Perfect for government websites and applications that need:

- ✅ **Universal compatibility** - Works with React, Angular, Vue, Svelte, or vanilla HTML
- ✅ **Zero dependencies** - Uses native Web Components APIs
- ✅ **Accessibility-first** - WCAG 2.1 Level AA compliant
- ✅ **Government branding** - Indian tricolor theme
- ✅ **Production-ready** - Battle-tested components

## 📦 Installation

### NPM

```bash
npm install @ux4g/web-components @ux4g/styles
```

### Yarn

```bash
yarn add @ux4g/web-components @ux4g/styles
```

### CDN (For Vanilla HTML)

```html
<!-- UX4G Styles -->
<link rel="stylesheet" href="https://cdn.ux4g.gov.in/styles/v1.0.0/ux4g.css">

<!-- UX4G Web Components -->
<script type="module" src="https://cdn.ux4g.gov.in/web-components/v1.0.0/ux4g-web-components.js"></script>
```

## 🚀 Quick Start

### Vanilla HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Government Service Form</title>
  
  <!-- UX4G Styles -->
  <link rel="stylesheet" href="https://cdn.ux4g.gov.in/styles/v1.0.0/ux4g.css">
  
  <!-- UX4G Web Components -->
  <script type="module" src="https://cdn.ux4g.gov.in/web-components/v1.0.0/ux4g-web-components.js"></script>
</head>
<body>
  <main style="max-width: 600px; margin: 2rem auto; padding: 0 1rem;">
    <h1>Passport Application</h1>
    
    <form id="passportForm">
      <!-- Input Component -->
      <ux4g-input
        label="Full Name"
        name="fullName"
        type="text"
        required
        placeholder="Enter your full name"
        hint="As per your Aadhaar card"
      ></ux4g-input>
      
      <!-- Input with Email -->
      <ux4g-input
        label="Email Address"
        name="email"
        type="email"
        required
        placeholder="your.email@example.com"
      ></ux4g-input>
      
      <!-- Select Component -->
      <ux4g-select
        label="Select State"
        name="state"
        required
        options='[
          {"value":"DL","label":"Delhi"},
          {"value":"MH","label":"Maharashtra"},
          {"value":"KA","label":"Karnataka"},
          {"value":"TN","label":"Tamil Nadu"}
        ]'
      ></ux4g-select>
      
      <!-- Checkbox Component -->
      <ux4g-checkbox
        label="I agree to the terms and conditions"
        name="terms"
        required
      ></ux4g-checkbox>
      
      <!-- Alert Component -->
      <ux4g-alert variant="info" title="Important">
        Please ensure all information is accurate before submission.
      </ux4g-alert>
      
      <!-- Button Component -->
      <ux4g-button
        variant="primary"
        size="lg"
        type="submit"
        full-width
      >
        Submit Application
      </ux4g-button>
    </form>
  </main>
  
  <script>
    // Handle form submission
    document.getElementById('passportForm').addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Form submitted!');
      
      // Show success alert
      const alert = document.createElement('ux4g-alert');
      alert.setAttribute('variant', 'success');
      alert.setAttribute('title', 'Success');
      alert.setAttribute('dismissible', '');
      alert.textContent = 'Your application has been submitted successfully!';
      document.querySelector('main').prepend(alert);
    });
    
    // Listen to component events
    document.querySelector('ux4g-input[name="email"]').addEventListener('ux4g-change', (e) => {
      console.log('Email changed:', e.detail.value);
    });
  </script>
</body>
</html>
```

### React

```tsx
import '@ux4g/web-components';
import '@ux4g/styles';

function PassportForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ux4g-input
        label="Full Name"
        name="fullName"
        required
        placeholder="Enter your full name"
      />
      
      <ux4g-select
        label="Select State"
        name="state"
        required
        options={JSON.stringify([
          { value: 'DL', label: 'Delhi' },
          { value: 'MH', label: 'Maharashtra' },
        ])}
      />
      
      <ux4g-checkbox
        label="I agree to the terms"
        name="terms"
        required
      />
      
      <ux4g-button variant="primary" type="submit" full-width>
        Submit Application
      </ux4g-button>
    </form>
  );
}
```

### Vue

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <ux4g-input
      label="Full Name"
      name="fullName"
      required
      placeholder="Enter your full name"
    />
    
    <ux4g-select
      label="Select State"
      name="state"
      required
      :options="stateOptions"
    />
    
    <ux4g-checkbox
      label="I agree to the terms"
      name="terms"
      required
    />
    
    <ux4g-button variant="primary" type="submit" full-width>
      Submit Application
    </ux4g-button>
  </form>
</template>

<script>
import '@ux4g/web-components';
import '@ux4g/styles';

export default {
  data() {
    return {
      stateOptions: JSON.stringify([
        { value: 'DL', label: 'Delhi' },
        { value: 'MH', label: 'Maharashtra' },
      ])
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted!');
    }
  }
};
</script>
```

### Angular

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import '@ux4g/web-components';
import '@ux4g/styles';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
  // ... rest of your module
})
export class AppModule { }
```

```html
<!-- app.component.html -->
<form (submit)="handleSubmit($event)">
  <ux4g-input
    label="Full Name"
    name="fullName"
    required
    placeholder="Enter your full name"
  ></ux4g-input>
  
  <ux4g-select
    label="Select State"
    name="state"
    required
    [attr.options]="stateOptions"
  ></ux4g-select>
  
  <ux4g-checkbox
    label="I agree to the terms"
    name="terms"
    required
  ></ux4g-checkbox>
  
  <ux4g-button variant="primary" type="submit" full-width>
    Submit Application
  </ux4g-button>
</form>
```

## 📚 Available Components

| Component | Description | Status |
|-----------|-------------|--------|
| `<ux4g-button>` | Primary interactive element for user actions | ✅ Stable |
| `<ux4g-input>` | Text input field for form data entry | ✅ Stable |
| `<ux4g-checkbox>` | Checkbox for boolean selections | ✅ Stable |
| `<ux4g-alert>` | Alert notifications and messages | ✅ Stable |
| `<ux4g-select>` | Dropdown selection component | ✅ Stable |

**More components coming soon!** (60+ components planned)

## 🎨 Component API

### `<ux4g-button>`

**Attributes:**
- `variant`: `primary` | `secondary` | `outline` | `ghost` | `danger` (default: `primary`)
- `size`: `sm` | `md` | `lg` (default: `md`)
- `disabled`: boolean
- `loading`: boolean
- `type`: `button` | `submit` | `reset` (default: `button`)
- `full-width`: boolean

**Events:**
- `ux4g-click`: Fired when button is clicked

**Example:**
```html
<ux4g-button variant="primary" size="lg" loading>
  Processing...
</ux4g-button>
```

### `<ux4g-input>`

**Attributes:**
- `label`: string
- `type`: `text` | `email` | `password` | `number` | `tel` | `url` | `search`
- `value`: string
- `placeholder`: string
- `size`: `sm` | `md` | `lg` (default: `md`)
- `required`: boolean
- `disabled`: boolean
- `readonly`: boolean
- `error`: boolean
- `error-message`: string
- `hint`: string
- `full-width`: boolean
- `name`: string

**Events:**
- `ux4g-change`: Fired when value changes
- `ux4g-input`: Fired on input
- `ux4g-focus`: Fired when input receives focus
- `ux4g-blur`: Fired when input loses focus

**Example:**
```html
<ux4g-input
  label="Email Address"
  type="email"
  required
  error
  error-message="Please enter a valid email"
></ux4g-input>
```

### `<ux4g-checkbox>`

**Attributes:**
- `label`: string
- `checked`: boolean
- `disabled`: boolean
- `required`: boolean
- `indeterminate`: boolean
- `name`: string
- `value`: string

**Events:**
- `ux4g-change`: Fired when checked state changes

**Example:**
```html
<ux4g-checkbox
  label="I agree to the terms and conditions"
  required
></ux4g-checkbox>
```

### `<ux4g-alert>`

**Attributes:**
- `variant`: `info` | `success` | `warning` | `error` (default: `info`)
- `title`: string
- `dismissible`: boolean
- `role`: `alert` | `status` (default: `alert`)

**Events:**
- `ux4g-dismiss`: Fired when alert is dismissed

**Example:**
```html
<ux4g-alert variant="success" title="Success" dismissible>
  Your application has been submitted successfully.
</ux4g-alert>
```

### `<ux4g-select>`

**Attributes:**
- `label`: string
- `value`: string
- `placeholder`: string
- `size`: `sm` | `md` | `lg` (default: `md`)
- `required`: boolean
- `disabled`: boolean
- `error`: boolean
- `error-message`: string
- `hint`: string
- `full-width`: boolean
- `name`: string
- `options`: JSON string of options array

**Events:**
- `ux4g-change`: Fired when selection changes

**Example:**
```html
<ux4g-select
  label="Select State"
  required
  options='[
    {"value":"DL","label":"Delhi"},
    {"value":"MH","label":"Maharashtra"}
  ]'
></ux4g-select>
```

## 🎯 Use Cases

### Government Portals
```html
<!-- Citizen service application form -->
<ux4g-input label="Aadhaar Number" type="text" maxlength="12"></ux4g-input>
<ux4g-select label="Service Type" options='[...]'></ux4g-select>
<ux4g-button variant="primary">Submit Request</ux4g-button>
```

### Legacy Applications
```html
<!-- Drop-in replacement for existing forms -->
<form method="post" action="/submit">
  <ux4g-input name="applicantName" label="Name" required></ux4g-input>
  <ux4g-checkbox name="consent" required></ux4g-checkbox>
  <button type="submit">Submit</button>
</form>
```

### Multi-Framework Projects
```html
<!-- Same components work in React, Angular, Vue -->
<ux4g-button variant="primary">Universal Button</ux4g-button>
```

## ♿ Accessibility

All UX4G Web Components are built with **accessibility-first** approach:

- ✅ **WCAG 2.1 Level AA** compliant
- ✅ **Keyboard navigation** fully supported
- ✅ **Screen reader** optimized with ARIA attributes
- ✅ **Focus management** with visible focus indicators
- ✅ **Color contrast** meets 4.5:1 ratio
- ✅ **Error identification** with clear messages

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

**Note:** Web Components require modern browsers with Custom Elements v1 support.

## 📖 Documentation

- **Full Documentation:** https://ux4g.gov.in/components
- **Component Examples:** https://ux4g.gov.in/examples
- **API Reference:** https://ux4g.gov.in/api/web-components

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](../../../CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Related Packages

- **[@ux4g/react-core](../react-core-package)** - React component library
- **[@ux4g/angular-core](../angular-core-package)** - Angular component library
- **[@ux4g/styles](../styles-package)** - CSS foundations
- **[@ux4g/tokens](../tokens-package)** - Design tokens

## 💬 Support

- **Email:** support@ux4g.gov.in
- **GitHub Issues:** https://github.com/ux4g/design-system/issues
- **Documentation:** https://ux4g.gov.in/docs

---

**Built with ❤️ for Government of India**
