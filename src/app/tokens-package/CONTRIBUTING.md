# Contributing to @ux4g/tokens

Thank you for contributing to the UX4G design token system!

## Quick Guidelines

### Adding New Tokens

1. **Choose the right category** - Add to the appropriate file in `tokens/base/`
2. **Follow naming conventions** - Use dot notation, lowercase, descriptive names
3. **Include documentation** - Add `description` and `a11y` notes where applicable
4. **Test accessibility** - Ensure WCAG 2.1 AA compliance
5. **Create semantic aliases** - Add to `tokens/semantic.json` if contextual
6. **Run build** - Execute `npm run build` to generate outputs

### Token Naming

**Base tokens:**
```
category.subcategory.scale.variant
```

Examples:
- `color.base.navy.500` ✅
- `spacing.4` ✅
- `typography.fontSize.lg` ✅

**Semantic tokens:**
```
semantic.category.context.property
```

Examples:
- `semantic.color.brand.primary` ✅
- `semantic.space.button.padding-x` ✅

### Accessibility Requirements

**Colors:**
- Text: 4.5:1 minimum contrast
- UI components: 3:1 minimum contrast
- Include `a11y` notes with contrast ratios

**Sizing:**
- Touch targets: 24px minimum (44px recommended)

**Typography:**
- Base size: 16px minimum
- Line height: 1.5 minimum for body text

### Example: Adding a New Color

```json
// In tokens/base/colors.json
{
  "purple": {
    "500": {
      "value": "#a855f7",
      "description": "Base purple",
      "a11y": "Passes AA on white (4.6:1)"
    }
  }
}
```

```json
// In tokens/semantic.json
{
  "semantic": {
    "color": {
      "accent": {
        "value": "{ux4g.color.base.purple.500}",
        "description": "Accent color for highlights"
      }
    }
  }
}
```

### Build Process

```bash
npm run build
```

This generates:
- `dist/tokens.css` - CSS custom properties
- `dist/index.js` - CommonJS module
- `dist/index.mjs` - ES module
- `dist/index.d.ts` - TypeScript declarations

### Pull Request Checklist

- [ ] Tokens follow naming conventions
- [ ] Documentation included (description field)
- [ ] Accessibility tested and documented
- [ ] Build runs without errors
- [ ] Semantic aliases created (if applicable)
- [ ] Examples updated (if needed)

## Questions?

Open an issue for clarification or email ux4g-tokens@gov.in

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
