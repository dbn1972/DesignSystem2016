# Quick Start Guide - @ux4g/styles

Get started with UX4G styles in under 5 minutes.

## Step 1: Install

```bash
npm install @ux4g/tokens @ux4g/styles
```

## Step 2: Import Styles

### React/Next.js
```tsx
// app/layout.tsx
import '@ux4g/styles';

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
```

### Angular
```typescript
// angular.json
"styles": [
  "node_modules/@ux4g/styles/dist/index.css"
]
```

### HTML
```html
<link rel="stylesheet" href="node_modules/@ux4g/styles/dist/index.css">
```

## Step 3: Use Classes

### Layout Container
```tsx
<div className="ux4g-container">
  {/* Your content here */}
</div>
```

### Card Component
```tsx
<div className="ux4g-card ux4g-p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### Form
```tsx
<form className="ux4g-card">
  <div className="ux4g-form-group">
    <label htmlFor="email" className="ux4g-label ux4g-label-required">
      Email
    </label>
    <input
      type="email"
      id="email"
      className="ux4g-input"
      placeholder="your.email@gov.in"
      required
    />
  </div>
  
  <button type="submit" className="ux4g-button-primary">
    Submit
  </button>
</form>
```

### Alert
```tsx
<div className="ux4g-alert ux4g-alert-success" role="alert">
  <div className="ux4g-alert-content">
    <div className="ux4g-alert-title">Success</div>
    <div className="ux4g-alert-description">
      Your application has been submitted.
    </div>
  </div>
</div>
```

### Grid Layout
```tsx
<div className="ux4g-grid ux4g-grid-cols-3 ux4g-gap-6">
  <div className="ux4g-card">Item 1</div>
  <div className="ux4g-card">Item 2</div>
  <div className="ux4g-card">Item 3</div>
</div>
```

## Common Patterns

### Page Layout
```tsx
<div className="ux4g-container ux4g-py-12">
  <h1 className="ux4g-mb-6">Page Title</h1>
  
  <div className="ux4g-max-w-4xl ux4g-mx-auto">
    <div className="ux4g-card ux4g-p-8">
      {/* Content */}
    </div>
  </div>
</div>
```

### Two-Column Layout
```tsx
<div className="ux4g-grid ux4g-grid-cols-2 ux4g-gap-8">
  <div>Left column</div>
  <div>Right column</div>
</div>
```

### Centered Content
```tsx
<div className="ux4g-flex ux4g-items-center ux4g-justify-center ux4g-min-h-screen">
  <div className="ux4g-card ux4g-p-8">
    Centered content
  </div>
</div>
```

### Header with Navigation
```tsx
<header className="ux4g-header ux4g-header-government">
  <div className="ux4g-header-container">
    <a href="/" className="ux4g-logo">Ministry Name</a>
    
    <nav className="ux4g-nav">
      <ul className="ux4g-nav-list">
        <li className="ux4g-nav-item">
          <a href="/" className="ux4g-nav-link ux4g-nav-link-active">Home</a>
        </li>
        <li className="ux4g-nav-item">
          <a href="/services" className="ux4g-nav-link">Services</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
```

## Essential Utilities

### Spacing
```tsx
className="ux4g-m-4"     // margin all sides
className="ux4g-mt-6"    // margin top
className="ux4g-mb-8"    // margin bottom
className="ux4g-p-6"     // padding all sides
className="ux4g-px-4"    // padding horizontal
className="ux4g-py-8"    // padding vertical
className="ux4g-gap-4"   // flex/grid gap
```

### Layout
```tsx
className="ux4g-flex"              // display: flex
className="ux4g-flex-col"          // flex-direction: column
className="ux4g-items-center"      // align-items: center
className="ux4g-justify-between"   // justify-content: space-between
className="ux4g-grid"              // display: grid
className="ux4g-grid-cols-3"       // 3 columns
className="ux4g-max-w-4xl"         // max-width
className="ux4g-mx-auto"           // center horizontally
```

## Customization

### Override Tokens
```css
:root {
  --ux4g-color-primary: #1E3A8A;
  --ux4g-spacing-4: 1.25rem;
}

@import '@ux4g/styles';
```

### Extend Components
```css
@import '@ux4g/styles';

.my-custom-button {
  padding: var(--ux4g-spacing-4);
  background: var(--ux4g-color-primary);
  border-radius: var(--ux4g-radius-lg);
}
```

## Next Steps

- Browse [CLASS_REFERENCE.md](./CLASS_REFERENCE.md) for complete class list
- Read [ARCHITECTURE.md](./ARCHITECTURE.md) for design principles
- Check [examples/](./examples/) for more patterns
- See [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) for advanced usage

## Need Help?

- Documentation: [README.md](./README.md)
- Issues: GitHub Issues
- Email: ux4g@gov.in
