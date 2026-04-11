# Architecture

## Token Layering

```
┌─────────────────────────────┐
│  Semantic Tokens            │  Context-aware (brand.primary)
│  semantic.json              │
└─────────────────────────────┘
            ↓ references
┌─────────────────────────────┐
│  Base Tokens                │  Primitives (navy.500)
│  base/*.json                │
└─────────────────────────────┘
```

## Base Tokens

Raw primitive values. Never reference other tokens.

**Location:** `tokens/base/*.json`

**Examples:**
- `color.base.navy.500` → `#005196`
- `spacing.4` → `1rem`
- `typography.fontSize.base` → `1rem`

## Semantic Tokens

Context-aware tokens that reference base tokens using `{token.reference}` syntax.

**Location:** `tokens/semantic.json`

**Examples:**
- `semantic.color.brand.primary` → `{ux4g.color.base.navy.500}`
- `semantic.space.button.padding-x` → `{ux4g.spacing.4}`

**Benefits:**
- Enables theming by remapping references
- Provides contextual meaning
- Single source of truth (change navy.500, all references update)

## Token Categories

### Colors
- **Base:** Saffron, green, navy, neutral scales (50-900)
- **Semantic:** Brand, text, background, border, interactive, state colors

### Typography
- **Base:** Font families, sizes, weights, line heights, letter spacing
- **Semantic:** Heading presets, body presets

### Spacing
- **Base:** Scale from 0 to 96 (0px to 384px)
- **Semantic:** Component spacing (button, input, card)

### Others
- Sizing, radius, shadows, opacity, motion, z-index

## Output Formats

### CSS Variables (`dist/tokens.css`)
```css
:root {
  --ux4g-color-base-navy-500: #005196;
  --ux4g-semantic-color-brand-primary: var(--ux4g-color-base-navy-500);
}
```

### JavaScript (`dist/index.js`, `dist/index.mjs`)
```javascript
{
  color: { 'base.navy.500': '#005196' },
  semantic: { color: { 'brand.primary': '#005196' } }
}
```

## Accessibility

All tokens meet WCAG 2.1 AA:
- Color contrast: 4.5:1 (text), 3:1 (UI)
- Touch targets: 24px minimum
- Base font: 16px
- Line height: 1.5+

## Theming Strategy

Remap semantic tokens to create themes:

```javascript
// Light theme (default)
semantic.color.background.primary → neutral.0 (white)

// Dark theme (future)
semantic.color.background.primary → neutral.900 (black)
```

Components use semantic tokens, so they adapt automatically.

## Build Process

1. Read all JSON token files
2. Flatten nested structure
3. Resolve token references
4. Generate CSS variables
5. Generate JS/TS modules
6. Write to `dist/`

## Version Strategy

- **Major:** Breaking changes (token renames/removals)
- **Minor:** New tokens added
- **Patch:** Token value updates

## File Structure

```
@ux4g/tokens/
├── tokens/
│   ├── base/          # Primitive tokens (9 files)
│   ├── semantic.json  # Context-aware tokens
│   └── index.json     # Registry
├── scripts/
│   └── build.js       # Build script
├── dist/              # Generated outputs
│   ├── tokens.css
│   ├── index.js
│   ├── index.mjs
│   └── index.d.ts
└── examples/          # Usage examples
```

## Design Principles

1. **Accessibility first** - WCAG 2.1 AA mandatory
2. **Government-grade** - Appropriate restraint
3. **Consistency** - Unified design language
4. **Scalability** - National deployment ready
5. **Cultural identity** - Indian tricolor theme
