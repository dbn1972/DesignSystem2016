# Contributing to @ux4g/styles

Thank you for your interest in contributing to the UX4G Design System! This guide will help you get started.

## Development Setup

### Prerequisites

- Node.js 16+ and npm/pnpm
- Git
- Code editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/ux4g/styles.git
cd styles

# Install dependencies
pnpm install

# Build the package
pnpm run build
```

## Project Structure

```
@ux4g/styles/
├── src/                   # Source CSS files
│   ├── base/              # Foundation styles
│   ├── utilities/         # Utility classes
│   ├── components/        # Component baselines
│   └── index.css          # Main entry point
├── dist/                  # Built output (generated)
├── examples/              # Usage examples
├── scripts/               # Build scripts
├── README.md
├── ARCHITECTURE.md
├── CONTRIBUTING.md
└── package.json
```

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Changes

Edit files in the `src/` directory:

```css
/* src/components/forms.css */
.ux4g-input {
  /* Use design tokens */
  padding: var(--ux4g-spacing-3);
  border: 1px solid var(--ux4g-color-border-default);
}
```

### 3. Build and Test

```bash
# Build the package
pnpm run build

# Watch for changes during development
pnpm run watch
```

### 4. Test Your Changes

Create a test file in `examples/` or integrate with a test application:

```tsx
// examples/test-component.tsx
import '@ux4g/styles';

export function TestComponent() {
  return (
    <div className="ux4g-card">
      Test your changes here
    </div>
  );
}
```

## Contribution Guidelines

### Code Style

1. **Token-First Approach**
   - Always use design tokens from `@ux4g/tokens`
   - Never hardcode color, spacing, or typography values
   
   ```css
   /* ✅ Good */
   .ux4g-button {
     padding: var(--ux4g-spacing-3) var(--ux4g-spacing-4);
     background-color: var(--ux4g-color-primary);
   }
   
   /* ❌ Bad */
   .ux4g-button {
     padding: 0.75rem 1rem;
     background-color: #005A9C;
   }
   ```

2. **Naming Convention**
   - Prefix all classes with `.ux4g-`
   - Use descriptive, semantic names
   - Follow BEM-like patterns for variants
   
   ```css
   .ux4g-component          /* Base */
   .ux4g-component-variant  /* Variant */
   .ux4g-component-state    /* State */
   ```

3. **Accessibility Requirements**
   - Include ARIA attributes in examples
   - Ensure keyboard navigation support
   - Maintain 4.5:1 color contrast for text
   - Test with screen readers
   
   ```css
   /* Focus indicators are required */
   .ux4g-button:focus-visible {
     outline: 2px solid var(--ux4g-color-focus-ring);
     outline-offset: 2px;
   }
   ```

4. **Documentation**
   - Add comments explaining complex patterns
   - Document token dependencies
   - Include WCAG compliance notes
   
   ```css
   /**
    * Alert Component
    * WCAG 2.1: 4.1.3 Status messages
    * Token dependencies: color-*, spacing-*, radius-*
    */
   .ux4g-alert {
     /* ... */
   }
   ```

### Commit Messages

Follow conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Build process or tooling changes

Examples:
```
feat(forms): add input size variants

Add small and large input size utilities:
- ux4g-input-sm
- ux4g-input-lg

fix(typography): improve link contrast for WCAG AA

Increased link color contrast ratio from 3.8:1 to 4.6:1
to meet WCAG 2.1 Level AA requirements.

docs(readme): update installation instructions
```

### Pull Request Process

1. **Update Documentation**
   - Update README.md if adding new features
   - Update CHANGELOG.md with your changes
   - Add examples in `/examples` directory

2. **Create Pull Request**
   - Provide clear description of changes
   - Reference related issues
   - Include screenshots for visual changes
   - List breaking changes (if any)

3. **PR Template**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update
   
   ## Testing
   - [ ] Built successfully
   - [ ] Tested in React example
   - [ ] Tested in Angular example
   - [ ] Accessibility tested (keyboard navigation)
   - [ ] Screen reader tested
   
   ## Screenshots
   (if applicable)
   
   ## Related Issues
   Fixes #123
   ```

4. **Review Process**
   - Address review feedback
   - Keep PR scope focused
   - Ensure CI passes

## Adding New Styles

### Adding a Utility Class

1. Identify the appropriate file (`spacing.css`, `layout.css`)
2. Add the utility following the naming pattern
3. Use design tokens
4. Document in examples

```css
/* src/utilities/spacing.css */

/* Add new utility */
.ux4g-gap-10 {
  gap: var(--ux4g-spacing-10);
}
```

### Adding a Component Style

1. Determine if it fits in existing file or needs new file
2. Create base style with token dependencies
3. Add variants and states
4. Include accessibility features
5. Add example usage

```css
/* src/components/button.css */

.ux4g-button {
  padding: var(--ux4g-spacing-3) var(--ux4g-spacing-4);
  font-size: var(--ux4g-font-size-base);
  background-color: var(--ux4g-color-primary);
  color: var(--ux4g-color-text-on-brand);
  border: none;
  border-radius: var(--ux4g-radius-md);
  cursor: pointer;
}

.ux4g-button:hover {
  background-color: var(--ux4g-color-primary-dark);
}

.ux4g-button:focus-visible {
  outline: 2px solid var(--ux4g-color-focus-ring);
  outline-offset: 2px;
}

.ux4g-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.ux4g-button-secondary {
  background-color: var(--ux4g-color-secondary);
}
```

## Testing Guidelines

### Manual Testing Checklist

- [ ] Visual regression (compare before/after)
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader announces correctly
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] Responsive on mobile devices
- [ ] High contrast mode compatibility
- [ ] Reduced motion preferences respected

### Accessibility Testing

1. **Keyboard Navigation**
   - Tab through all interactive elements
   - Verify focus indicators are visible
   - Test with Enter/Space for activation

2. **Screen Reader Testing**
   - Test with NVDA (Windows) or VoiceOver (Mac)
   - Verify semantic HTML structure
   - Check ARIA labels and roles

3. **Color Contrast**
   - Use tools like WebAIM Contrast Checker
   - Ensure 4.5:1 for normal text
   - Ensure 3:1 for large text and UI components

## Release Process

Maintainers will handle releases:

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create git tag
4. Build package
5. Publish to npm

## Questions?

- Open an issue for bugs or feature requests
- Start a discussion for questions or ideas
- Email: ux4g@gov.in

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards others

Thank you for contributing to UX4G! 🇮🇳
