# Component Tokens Reference

**UX4G Design System - Component-Specific Token Architecture**

Complete reference for component tokens, their structure, naming conventions, and usage patterns.

---

## Table of Contents

1. [Overview](#overview)
2. [Token Architecture](#token-architecture)
3. [Naming Conventions](#naming-conventions)
4. [Token Categories](#token-categories)
5. [Component Token Library](#component-token-library)
6. [Usage Patterns](#usage-patterns)
7. [Best Practices](#best-practices)

---

## Overview

### Purpose

Component tokens provide a **semantic layer** between base design tokens and component implementations. They enable:

1. **Context-specific naming**: "button-primary-background" vs "navy-500"
2. **Easier maintenance**: Change one token, update all instances
3. **Self-documentation**: Token names explain usage
4. **Consistency**: Reusable patterns across components

### Hierarchy

```
Base Tokens (Primitive)
    ↓
Semantic Tokens (Context)
    ↓
Component Tokens (Specific)
    ↓
Component Implementation (Usage)
```

**Example Flow:**
```
colors.json: navy.500 = #005196
    ↓
semantic.json: brand.primary = {navy.500}
    ↓
button.json: variant.primary.background.default = #005196
    ↓
Button.tsx: className="bg-[#005196]"
```

---

## Token Architecture

### File Structure

```
tokens/
├── base/                           # Primitive tokens
│   ├── colors.json                 # Color palette
│   ├── spacing.json                # Spacing scale
│   ├── typography.json             # Type scale
│   ├── radius.json                 # Border radius
│   ├── shadows.json                # Shadow scale
│   └── motion.json                 # Animation values
│
├── semantic.json                   # Semantic aliases
│
└── components/                     # Component-specific tokens
    ├── button.json
    ├── input.json
    ├── alert.json
    ├── card.json
    ├── badge.json
    └── ...
```

### Token Schema

All component token files follow the Design Tokens Community Group format:

```json
{
  "$schema": "https://tr.designtokens.org/format/",
  "ux4g": {
    "component": {
      "{component-name}": {
        // Token groups here
      }
    }
  }
}
```

---

## Naming Conventions

### Pattern

```
ux4g.component.{component}.{group}.{property}.{modifier}
```

### Parts Breakdown

| Part | Description | Examples |
|------|-------------|----------|
| `ux4g` | Namespace (fixed) | `ux4g` |
| `component` | Category (fixed) | `component` |
| `{component}` | Component name | `button`, `input`, `alert` |
| `{group}` | Token group | `base`, `variant`, `state`, `accessibility` |
| `{property}` | CSS property | `background`, `text`, `border`, `padding` |
| `{modifier}` | Variant/state | `primary`, `hover`, `disabled`, `sm`, `md`, `lg` |

### Examples

```
ux4g.component.button.base.height.md
ux4g.component.button.variant.primary.background.hover
ux4g.component.input.state.error.border
ux4g.component.alert.variant.success.icon
ux4g.component.button.accessibility.minTouchTarget
```

### Naming Rules

1. **Use kebab-case** for multi-word names: `border-radius`, `focus-ring`
2. **Be specific**: `background` not `bg`, `horizontal` not `h`
3. **Follow CSS property names**: `padding`, `margin`, `border-width`
4. **State suffixes**: `default`, `hover`, `active`, `focus`, `disabled`, `error`
5. **Size suffixes**: `sm`, `md`, `lg` (or `xs`, `xl` where needed)

---

## Token Categories

### 1. Base Tokens

**Purpose:** Structural and foundational properties

**Groups:**
- **Dimensions**: height, width, padding, margin, gap
- **Typography**: fontSize, fontWeight, lineHeight, letterSpacing
- **Borders**: borderWidth, borderRadius
- **Transitions**: duration, timing, delay

**Example:**
```json
{
  "base": {
    "$type": "dimension",
    "height": {
      "sm": { "value": "32px", "description": "Small height" },
      "md": { "value": "40px", "description": "Medium height - default" },
      "lg": { "value": "48px", "description": "Large height" }
    },
    "padding": {
      "horizontal": {
        "sm": { "value": "8px" },
        "md": { "value": "12px" },
        "lg": { "value": "16px" }
      },
      "vertical": {
        "sm": { "value": "6px" },
        "md": { "value": "10px" },
        "lg": { "value": "12px" }
      }
    },
    "borderRadius": {
      "value": "4px",
      "description": "Component border radius"
    },
    "fontSize": {
      "sm": { "value": "14px" },
      "md": { "value": "16px" },
      "lg": { "value": "18px" }
    }
  }
}
```

### 2. Variant Tokens

**Purpose:** Visual style variations (primary, secondary, etc.)

**Groups by variant:**
- background (default, hover, active, disabled)
- text (default, disabled)
- border (default, hover, active, disabled)
- focus (ring, ringOffset)

**Example:**
```json
{
  "variant": {
    "primary": {
      "$type": "color",
      "background": {
        "default": { "value": "#005196", "description": "Navy 500" },
        "hover": { "value": "#004178", "description": "Navy 600" },
        "active": { "value": "#00315a", "description": "Navy 700" },
        "disabled": { "value": "#d4d4d4", "description": "Neutral 300" }
      },
      "text": {
        "default": { "value": "#ffffff", "description": "White" },
        "disabled": { "value": "#a3a3a3", "description": "Neutral 400" }
      },
      "border": {
        "default": { "value": "#005196" },
        "hover": { "value": "#004178" },
        "active": { "value": "#00315a" },
        "disabled": { "value": "#d4d4d4" }
      },
      "focus": {
        "ring": { "value": "#005196", "description": "Focus ring color" },
        "ringOffset": { "value": "#ffffff", "description": "Focus ring offset color" }
      }
    },
    "secondary": {
      "$type": "color",
      "background": {
        "default": { "value": "#ffffff" },
        "hover": { "value": "#f5f5f5" },
        "active": { "value": "#e5e5e5" },
        "disabled": { "value": "#fafafa" }
      },
      "text": {
        "default": { "value": "#005196" },
        "disabled": { "value": "#a3a3a3" }
      },
      "border": {
        "default": { "value": "#005196" },
        "hover": { "value": "#004178" },
        "disabled": { "value": "#d4d4d4" }
      }
    }
  }
}
```

### 3. State Tokens

**Purpose:** Interactive states (for form inputs, interactive components)

**States:**
- default
- hover
- focus
- active
- disabled
- error
- success
- warning
- readonly

**Example:**
```json
{
  "state": {
    "default": {
      "$type": "color",
      "background": { "value": "#ffffff" },
      "text": { "value": "#171717" },
      "border": { "value": "#d4d4d4" },
      "placeholder": { "value": "#737373" }
    },
    "hover": {
      "$type": "color",
      "border": { "value": "#a3a3a3" }
    },
    "focus": {
      "$type": "color",
      "border": { "value": "#005196" },
      "ring": { "value": "#005196" },
      "ringOpacity": { "value": "0.2" }
    },
    "error": {
      "$type": "color",
      "border": { "value": "#dc2626" },
      "ring": { "value": "#dc2626" },
      "text": { "value": "#dc2626" }
    },
    "disabled": {
      "$type": "color",
      "background": { "value": "#fafafa" },
      "text": { "value": "#a3a3a3" },
      "border": { "value": "#e5e5e5" }
    }
  }
}
```

### 4. Accessibility Tokens

**Purpose:** WCAG compliance values

**Properties:**
- minTouchTarget (WCAG 2.5.5 - 44px minimum)
- minHeight (readability)
- focusRingWidth (WCAG 2.4.7 - 2px minimum)
- focusRingOffset (visibility)
- contrast ratios (documented in descriptions)

**Example:**
```json
{
  "accessibility": {
    "$type": "dimension",
    "minTouchTarget": {
      "value": "44px",
      "description": "Minimum touch target size per WCAG 2.5.5"
    },
    "minHeight": {
      "value": "44px",
      "description": "Minimum component height for readability"
    },
    "focusRingWidth": {
      "value": "2px",
      "description": "Focus ring width per WCAG 2.4.7"
    },
    "focusRingOffset": {
      "value": "2px",
      "description": "Focus ring offset for visibility"
    }
  }
}
```

### 5. Specialized Tokens

Component-specific tokens that don't fit other categories:

**Button:**
- loading.spinner (color)
- icon.size, icon.gap

**Alert:**
- title.fontSize, title.fontWeight
- close.size, close.padding
- icon.size

**Input:**
- addon.background, addon.text
- prefix.text, suffix.text

---

## Component Token Library

### Button Component

📁 **File:** `tokens/components/button.json`

**Token Groups:**

```
button
├── base
│   ├── height (sm, md, lg)
│   ├── padding (horizontal, vertical × sm, md, lg)
│   ├── gap (sm, md, lg)
│   ├── borderWidth
│   ├── borderRadius
│   ├── fontSize (sm, md, lg)
│   ├── fontWeight
│   ├── lineHeight
│   ├── minWidth
│   └── transition (duration, timing)
│
├── variant
│   ├── primary (background, text, border, focus)
│   ├── secondary (background, text, border, focus)
│   ├── tertiary (background, text, border, focus)
│   ├── danger (background, text, border, focus)
│   └── success (background, text, border, focus)
│
├── loading
│   └── spinner (primary, secondary)
│
└── accessibility
    ├── minTouchTarget
    ├── focusRingWidth
    └── focusRingOffset
```

### Input Component

📁 **File:** `tokens/components/input.json`

**Token Groups:**

```
input
├── base
│   ├── height (sm, md, lg)
│   ├── padding (horizontal, vertical × sm, md, lg)
│   ├── borderWidth (default, focus, error)
│   ├── borderRadius
│   ├── fontSize (sm, md, lg)
│   ├── lineHeight
│   └── transition (duration, timing)
│
├── state
│   ├── default (background, text, border, placeholder)
│   ├── hover (background, border)
│   ├── focus (background, border, ring, ringOpacity)
│   ├── disabled (background, text, border, cursor)
│   ├── error (background, text, border, ring, ringOpacity)
│   ├── success (background, text, border, ring, ringOpacity)
│   └── readonly (background, text, border)
│
├── accessibility
│   ├── minHeight
│   ├── focusRingWidth
│   └── focusRingOffset
│
└── addon
    ├── background (default, disabled)
    ├── text (default, disabled)
    └── border (default)
```

### Alert Component

📁 **File:** `tokens/components/alert.json`

**Token Groups:**

```
alert
├── base
│   ├── padding (vertical, horizontal)
│   ├── gap (icon, action)
│   ├── borderWidth
│   ├── borderLeftWidth (accent)
│   ├── borderRadius
│   ├── fontSize
│   ├── lineHeight
│   └── iconSize
│
├── variant
│   ├── info (background, text, border, borderAccent, icon, link)
│   ├── success (background, text, border, borderAccent, icon, link)
│   ├── warning (background, text, border, borderAccent, icon, link)
│   └── error (background, text, border, borderAccent, icon, link)
│
├── title
│   ├── fontSize
│   ├── fontWeight
│   └── marginBottom
│
├── close
│   ├── size
│   ├── padding
│   ├── icon (default, hover)
│   └── background (hover)
│
└── accessibility
    └── minHeight
```

---

## Usage Patterns

### In CVA Variants

**Pattern:**
```typescript
export const componentVariants = cva(
  [
    'class-name', // token: token.path (value)
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[#005196]', // token: variant.primary.background.default (Navy 500)
        ],
      },
    },
  }
);
```

**Why use exact values?**

Using `bg-[#005196]` instead of `bg-navy-500`:
1. **Direct token mapping**: Clear link to token file
2. **Flexibility**: Not dependent on Tailwind config
3. **Precision**: Exact color from design system
4. **Documentation**: Comments explain source

### Token Comment Format

**Standard:**
```typescript
'class-name', // token: group.property.modifier (reference)
```

**Examples:**
```typescript
'h-10', // token: base.height.md (40px)
'bg-[#005196]', // token: variant.primary.background.default (Navy 500)
'focus-visible:ring-2', // token: accessibility.focusRingWidth (2px)
'min-h-[44px]', // token: accessibility.minTouchTarget (44px - WCAG 2.5.5)
'rounded', // token: base.borderRadius (4px)
```

### State Mapping

**Interactive States:**
```typescript
// Default state
'bg-[#005196]', // token: variant.primary.background.default

// Hover state
'hover:bg-[#004178]', // token: variant.primary.background.hover

// Active state
'active:bg-[#00315a]', // token: variant.primary.background.active

// Focus state
'focus-visible:ring-[#005196]', // token: variant.primary.focus.ring

// Disabled state
'disabled:bg-[#d4d4d4]', // token: variant.primary.background.disabled
```

### Responsive Tokens

For responsive components:
```json
{
  "base": {
    "padding": {
      "mobile": { "value": "12px" },
      "tablet": { "value": "16px" },
      "desktop": { "value": "24px" }
    }
  }
}
```

Usage:
```typescript
'px-3', // token: base.padding.mobile (12px)
'md:px-4', // token: base.padding.tablet (16px)
'lg:px-6', // token: base.padding.desktop (24px)
```

---

## Best Practices

### 1. Token Documentation

**Always include descriptions:**
```json
{
  "value": "#005196",
  "description": "Primary button background - Navy 500",
  "a11y": "Passes AAA on white (contrast 8.6:1)"
}
```

### 2. Reference Base Tokens

Link component tokens to base tokens in descriptions:
```json
{
  "value": "#005196",
  "description": "Maps to base colors: ux4g.color.base.navy.500"
}
```

### 3. Accessibility Annotations

Include WCAG compliance notes:
```json
{
  "minTouchTarget": {
    "value": "44px",
    "description": "Minimum touch target per WCAG 2.5.5",
    "wcag": "2.5.5 - Target Size (Level AAA)"
  }
}
```

### 4. Semantic Naming

Use purpose-based names, not implementation:

✅ **Good:**
```json
"variant.primary.background.default"
"state.error.border"
```

❌ **Bad:**
```json
"variant.navy.background"
"state.red.border"
```

### 5. Consistent Patterns

Follow established patterns across components:

**Sizing:**
- Always: sm, md, lg
- Rarely: xs, xl (only when needed)

**States:**
- Always: default, hover, active, disabled
- Forms: focus, error, success
- Specific: loading, readonly, checked

**Colors:**
- Always: background, text, border
- Often: icon, link
- Specific: ring, shadow

### 6. Group Organization

Organize tokens logically:
```json
{
  "component": {
    "button": {
      "base": {},        // 1. Structural
      "variant": {},     // 2. Visual variants
      "state": {},       // 3. Interactive states (if not in variant)
      "loading": {},     // 4. Specialized states
      "accessibility": {} // 5. A11y requirements (always last)
    }
  }
}
```

### 7. Token Validation

Before finalizing tokens:
- [ ] All values map to base tokens
- [ ] Descriptions are clear and complete
- [ ] WCAG compliance documented
- [ ] Naming follows conventions
- [ ] No hardcoded values without reason
- [ ] States are complete (default, hover, active, disabled)

---

## Token Update Workflow

### When to Update Tokens

1. **New variant needed**: Add to variant group
2. **New state needed**: Add to state group
3. **Size change**: Update base.height/padding/fontSize
4. **Color change**: Update variant colors
5. **Accessibility update**: Update accessibility group

### Update Process

1. **Update token file** (`tokens/components/{component}.json`)
2. **Update CVA variants** (`{component}.variants.ts`)
3. **Update component** (if API changes)
4. **Update documentation** (README.md)
5. **Test all variants** (visual + a11y)
6. **Create changelog entry**

### Breaking vs Non-Breaking

**Non-Breaking:**
- Adding new variants
- Adding new sizes
- Adding new tokens
- Updating token descriptions

**Breaking:**
- Removing tokens
- Renaming tokens
- Changing token values (if used in prod)
- Changing token structure

---

## Related Documentation

- [Phase 2 Integration Guide](../react-core-package/PHASE2_TOKEN_CVA_INTEGRATION.md)
- [Component Migration Template](../react-core-package/COMPONENT_MIGRATION_TEMPLATE.md)
- [Token Architecture](./ARCHITECTURE.md)
- [Design Tokens Spec](https://tr.designtokens.org/)

---

**Last Updated:** 2026-04-10  
**Version:** 1.0.0  
**Owner:** UX4G Design System Team
