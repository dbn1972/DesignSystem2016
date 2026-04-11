# Class Reference - @ux4g/styles

Quick reference for all available classes.

## Spacing Utilities

### Margin
| Class | Value |
|-------|-------|
| `ux4g-m-0` | margin: 0 |
| `ux4g-m-1` | margin: 0.25rem |
| `ux4g-m-2` | margin: 0.5rem |
| `ux4g-m-3` | margin: 0.75rem |
| `ux4g-m-4` | margin: 1rem |
| `ux4g-m-6` | margin: 1.5rem |
| `ux4g-m-8` | margin: 2rem |
| `ux4g-m-12` | margin: 3rem |
| `ux4g-m-auto` | margin: auto |

**Directional**: Replace `m` with `mt` (top), `mr` (right), `mb` (bottom), `ml` (left), `mx` (horizontal), `my` (vertical)

### Padding
| Class | Value |
|-------|-------|
| `ux4g-p-0` | padding: 0 |
| `ux4g-p-1` | padding: 0.25rem |
| `ux4g-p-2` | padding: 0.5rem |
| `ux4g-p-3` | padding: 0.75rem |
| `ux4g-p-4` | padding: 1rem |
| `ux4g-p-6` | padding: 1.5rem |
| `ux4g-p-8` | padding: 2rem |
| `ux4g-p-12` | padding: 3rem |

**Directional**: Replace `p` with `pt`, `pr`, `pb`, `pl`, `px`, `py`

### Gap
```css
ux4g-gap-0    ux4g-gap-2    ux4g-gap-4
ux4g-gap-1    ux4g-gap-3    ux4g-gap-6    ux4g-gap-8
```

---

## Layout Utilities

### Display
```css
ux4g-block         ux4g-inline-block    ux4g-hidden
ux4g-flex          ux4g-inline-flex
ux4g-grid          ux4g-inline-grid
```

### Flexbox
```css
/* Direction */
ux4g-flex-row      ux4g-flex-col
ux4g-flex-row-reverse    ux4g-flex-col-reverse

/* Wrap */
ux4g-flex-wrap     ux4g-flex-nowrap

/* Align Items */
ux4g-items-start   ux4g-items-center   ux4g-items-end
ux4g-items-baseline    ux4g-items-stretch

/* Justify Content */
ux4g-justify-start     ux4g-justify-center    ux4g-justify-end
ux4g-justify-between   ux4g-justify-around    ux4g-justify-evenly

/* Flex */
ux4g-flex-1    ux4g-flex-auto    ux4g-flex-none
```

### Grid
```css
/* Columns */
ux4g-grid-cols-1    ux4g-grid-cols-2    ux4g-grid-cols-3
ux4g-grid-cols-4    ux4g-grid-cols-6    ux4g-grid-cols-12

/* Column Span */
ux4g-col-span-1     ux4g-col-span-2     ux4g-col-span-3
ux4g-col-span-4     ux4g-col-span-6     ux4g-col-span-full
```

### Position
```css
ux4g-static    ux4g-relative    ux4g-absolute
ux4g-fixed     ux4g-sticky
```

### Width & Height
```css
ux4g-w-auto    ux4g-w-full    ux4g-w-screen
ux4g-h-auto    ux4g-h-full    ux4g-h-screen

/* Max Width */
ux4g-max-w-xs      ux4g-max-w-sm      ux4g-max-w-md
ux4g-max-w-lg      ux4g-max-w-xl      ux4g-max-w-2xl
ux4g-max-w-3xl     ux4g-max-w-4xl     ux4g-max-w-5xl
```

### Container
```css
ux4g-container         /* Responsive centered container */
```

---

## Typography

### Text Alignment
```css
ux4g-text-left     ux4g-text-center
ux4g-text-right    ux4g-text-justify
```

### Utilities
```css
ux4g-truncate          /* Truncate with ellipsis */
ux4g-lead              /* Lead paragraph style */
ux4g-helper-text       /* Helper text style */
```

---

## Components

### Card
```css
ux4g-card              /* Base card */
ux4g-card-flat         /* No shadow */
ux4g-card-elevated     /* Elevated shadow */
```

### Surface
```css
ux4g-surface           ux4g-surface-primary
ux4g-surface-secondary ux4g-surface-tertiary
ux4g-surface-inverse

/* Brand surfaces */
ux4g-surface-saffron   ux4g-surface-white
ux4g-surface-green     ux4g-surface-navy

/* Status surfaces */
ux4g-surface-success   ux4g-surface-warning
ux4g-surface-error     ux4g-surface-info
```

### Elevation
```css
ux4g-elevation-0   ux4g-elevation-1   ux4g-elevation-2
ux4g-elevation-3   ux4g-elevation-4   ux4g-elevation-5
```

### Border Radius
```css
ux4g-rounded-none  ux4g-rounded-sm   ux4g-rounded
ux4g-rounded-lg    ux4g-rounded-xl   ux4g-rounded-full
```

---

## Form Components

### Form Structure
```css
ux4g-form-group        /* Form field container */
ux4g-form-actions      /* Form button container */
ux4g-choice            /* Checkbox/radio wrapper */
```

### Input
```css
ux4g-input             /* Base input */
ux4g-input-sm          /* Small input */
ux4g-input-lg          /* Large input */
ux4g-input-error       /* Error state */
ux4g-input-success     /* Success state */
```

### Label
```css
ux4g-label             /* Base label */
ux4g-label-required    /* Shows asterisk */
```

### Messages
```css
ux4g-helper-text       /* Helper message */
ux4g-error-message     /* Error message */
ux4g-success-message   /* Success message */
```

---

## Status Components

### Alert
```css
ux4g-alert             /* Base alert */
ux4g-alert-info        /* Info variant */
ux4g-alert-success     /* Success variant */
ux4g-alert-warning     /* Warning variant */
ux4g-alert-error       /* Error variant */

ux4g-alert-icon        /* Icon wrapper */
ux4g-alert-content     /* Content wrapper */
ux4g-alert-title       /* Alert title */
ux4g-alert-description /* Alert description */
```

### Badge
```css
ux4g-badge             /* Base badge */
ux4g-badge-default     /* Default style */
ux4g-badge-primary     /* Primary color */
ux4g-badge-success     /* Success color */
ux4g-badge-warning     /* Warning color */
ux4g-badge-error       /* Error color */
ux4g-badge-info        /* Info color */
ux4g-badge-dot         /* With dot indicator */
```

### Status Indicator
```css
ux4g-status            /* Status wrapper */
ux4g-status-dot        /* Status dot */
ux4g-status-dot-active     /* Active state */
ux4g-status-dot-inactive   /* Inactive state */
ux4g-status-dot-error      /* Error state */
ux4g-status-dot-warning    /* Warning state */
```

### Progress
```css
ux4g-progress          /* Progress container */
ux4g-progress-bar      /* Progress bar */
ux4g-progress-success  /* Success variant */
ux4g-progress-warning  /* Warning variant */
ux4g-progress-error    /* Error variant */
```

### Loading
```css
ux4g-spinner           /* Loading spinner */
ux4g-spinner-sm        /* Small spinner */
ux4g-spinner-lg        /* Large spinner */

ux4g-skeleton          /* Skeleton loader */
ux4g-skeleton-text     /* Text skeleton */
ux4g-skeleton-heading  /* Heading skeleton */
ux4g-skeleton-circle   /* Circle skeleton */
```

---

## Navigation Components

### Header
```css
ux4g-header            /* Base header */
ux4g-header-government /* With tricolor */
ux4g-header-container  /* Header inner container */
```

### Logo
```css
ux4g-logo              /* Logo link */
```

### Navigation
```css
ux4g-nav               /* Nav container */
ux4g-nav-list          /* Nav list */
ux4g-nav-item          /* Nav item */
ux4g-nav-link          /* Nav link */
ux4g-nav-link-active   /* Active link */
```

### Breadcrumb
```css
ux4g-breadcrumb        /* Breadcrumb container */
ux4g-breadcrumb-list   /* Breadcrumb list */
ux4g-breadcrumb-item   /* Breadcrumb item */
ux4g-breadcrumb-link   /* Breadcrumb link */
ux4g-breadcrumb-current    /* Current page */
ux4g-breadcrumb-separator  /* Separator */
```

### Tabs
```css
ux4g-tabs              /* Tabs container */
ux4g-tabs-list         /* Tabs list */
ux4g-tab               /* Tab button */
ux4g-tab-active        /* Active tab */
```

### Menu
```css
ux4g-menu              /* Dropdown menu */
ux4g-menu-item         /* Menu item */
ux4g-menu-divider      /* Menu divider */
```

### Sidebar
```css
ux4g-sidebar           /* Sidebar container */
ux4g-sidebar-nav       /* Sidebar nav */
ux4g-sidebar-section   /* Sidebar section */
ux4g-sidebar-heading   /* Section heading */
ux4g-sidebar-link      /* Sidebar link */
ux4g-sidebar-link-active   /* Active link */
```

### Footer
```css
ux4g-footer            /* Footer container */
ux4g-footer-container  /* Footer inner */
ux4g-footer-content    /* Footer content grid */
ux4g-footer-section    /* Footer section */
ux4g-footer-heading    /* Section heading */
ux4g-footer-links      /* Link list */
ux4g-footer-link       /* Footer link */
ux4g-footer-bottom     /* Footer bottom */
```

---

## Accessibility Utilities

```css
ux4g-sr-only           /* Screen reader only */
ux4g-sr-only-focusable /* Show on focus */
ux4g-skip-link         /* Skip to content link */
ux4g-focus-keyboard    /* Keyboard focus only */
ux4g-focus-always      /* Always show focus */
ux4g-focus-critical    /* High visibility focus */
ux4g-invisible         /* Visually hidden, maintains layout */
ux4g-text-readable     /* Optimal reading width */
```

---

## Common Patterns

### Centered Content
```html
<div class="ux4g-flex ux4g-items-center ux4g-justify-center">
```

### Stack (Vertical Spacing)
```html
<div class="ux4g-stack-4">  <!-- Children have mt-4 -->
```

### Split (Space Between)
```html
<div class="ux4g-split">  <!-- Flex with space-between -->
```

### Cluster (Wrap with Gap)
```html
<div class="ux4g-cluster">  <!-- Flex wrap with gap -->
```

---

## Naming Convention

All classes use the `.ux4g-` prefix:

- **Components**: `ux4g-card`, `ux4g-button`, `ux4g-alert`
- **Utilities**: `ux4g-m-4`, `ux4g-flex`, `ux4g-grid`
- **Variants**: `ux4g-alert-success`, `ux4g-input-error`
- **States**: `ux4g-nav-link-active`, `ux4g-tab-active`

---

## Token Access

All components use CSS custom properties from `@ux4g/tokens`:

```css
/* Use in custom CSS */
.my-component {
  padding: var(--ux4g-spacing-4);
  color: var(--ux4g-color-text-primary);
  border-radius: var(--ux4g-radius-md);
  box-shadow: var(--ux4g-shadow-sm);
}
```

**Common Token Categories**:
- `--ux4g-spacing-{0-20}` - Spacing scale
- `--ux4g-color-{category}-{variant}` - Colors
- `--ux4g-font-{property}-{variant}` - Typography
- `--ux4g-shadow-{size}` - Shadows
- `--ux4g-radius-{size}` - Border radius
- `--ux4g-z-{layer}` - Z-index

---

**For detailed usage examples**, see [QUICK_START.md](./QUICK_START.md)
