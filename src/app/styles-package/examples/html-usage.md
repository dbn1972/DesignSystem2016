# UX4G Styles - HTML Usage Example

## Installation

```bash
npm install @ux4g/tokens @ux4g/styles
```

## Basic HTML Setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UX4G Styles Example</title>

  <!-- Import complete style system -->
  <link rel="stylesheet" href="node_modules/@ux4g/styles/dist/index.css">

  <!-- OR import specific layers -->
  <!--
  <link rel="stylesheet" href="node_modules/@ux4g/styles/dist/base.css">
  <link rel="stylesheet" href="node_modules/@ux4g/styles/dist/utilities.css">
  <link rel="stylesheet" href="node_modules/@ux4g/styles/dist/components.css">
  -->
</head>
<body>
  <!-- Your content here -->
</body>
</html>
```

## Government Header

```html
<header class="ux4g-header ux4g-header-government">
  <div class="ux4g-header-container">
    <a href="/" class="ux4g-logo">
      <span>Ministry of Digital Services</span>
    </a>

    <nav class="ux4g-nav" aria-label="Main navigation">
      <ul class="ux4g-nav-list">
        <li class="ux4g-nav-item">
          <a href="/" class="ux4g-nav-link ux4g-nav-link-active">Home</a>
        </li>
        <li class="ux4g-nav-item">
          <a href="/services" class="ux4g-nav-link">Services</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
```

## Form Example

```html
<form class="ux4g-card">
  <h2 class="ux4g-mb-6">Application Form</h2>

  <div class="ux4g-form-group">
    <label for="name" class="ux4g-label ux4g-label-required">
      Full Name
    </label>
    <input
      type="text"
      id="name"
      class="ux4g-input"
      placeholder="Enter your full name"
      required
    />
  </div>

  <div class="ux4g-form-group">
    <label for="email" class="ux4g-label ux4g-label-required">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      class="ux4g-input"
      placeholder="your.email@example.gov.in"
      required
    />
    <span class="ux4g-helper-text">
      We'll send confirmation to this email.
    </span>
  </div>

  <div class="ux4g-choice">
    <input type="checkbox" id="terms" required />
    <label for="terms">
      I agree to the terms and conditions
    </label>
  </div>

  <div class="ux4g-form-actions">
    <button type="submit" class="ux4g-button-primary">Submit</button>
    <button type="reset" class="ux4g-button-secondary">Clear</button>
  </div>
</form>
```

## Alert Examples

```html
<div class="ux4g-alert ux4g-alert-info" role="alert">
  <div class="ux4g-alert-icon">ℹ</div>
  <div class="ux4g-alert-content">
    <div class="ux4g-alert-title">Information</div>
    <div class="ux4g-alert-description">
      Your application has been received.
    </div>
  </div>
</div>

<div class="ux4g-alert ux4g-alert-success" role="alert">
  <div class="ux4g-alert-icon">✓</div>
  <div class="ux4g-alert-content">
    <div class="ux4g-alert-title">Success</div>
    <div class="ux4g-alert-description">
      Operation completed successfully.
    </div>
  </div>
</div>
```

## Cards and Grid

```html
<div class="ux4g-grid ux4g-grid-cols-3 ux4g-gap-6">
  <div class="ux4g-card">
    <h3 class="ux4g-mb-2">Service 1</h3>
    <p class="ux4g-mb-4">Description of the service</p>
    <span class="ux4g-badge ux4g-badge-success">Active</span>
  </div>

  <div class="ux4g-card">
    <h3 class="ux4g-mb-2">Service 2</h3>
    <p class="ux4g-mb-4">Description of the service</p>
    <span class="ux4g-badge ux4g-badge-success">Active</span>
  </div>

  <div class="ux4g-card">
    <h3 class="ux4g-mb-2">Service 3</h3>
    <p class="ux4g-mb-4">Description of the service</p>
    <span class="ux4g-badge ux4g-badge-warning">Coming Soon</span>
  </div>
</div>
```

## Utility Classes

### Spacing

```html
<!-- Margin -->
<div class="ux4g-m-4">Margin on all sides</div>
<div class="ux4g-mt-6">Margin top</div>
<div class="ux4g-mb-8">Margin bottom</div>
<div class="ux4g-mx-auto">Centered horizontally</div>

<!-- Padding -->
<div class="ux4g-p-6">Padding on all sides</div>
<div class="ux4g-py-4">Vertical padding</div>
<div class="ux4g-px-8">Horizontal padding</div>
```

### Layout

```html
<!-- Flexbox -->
<div class="ux4g-flex ux4g-items-center ux4g-justify-between">
  <span>Left</span>
  <span>Right</span>
</div>

<!-- Grid -->
<div class="ux4g-grid ux4g-grid-cols-4 ux4g-gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

<!-- Container -->
<div class="ux4g-container">
  <div class="ux4g-max-w-4xl ux4g-mx-auto">
    Centered content with max width
  </div>
</div>
```
