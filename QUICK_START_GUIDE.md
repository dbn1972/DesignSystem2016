# UX4G Quick Start Guide

Everything you need to start using the UX4G documentation and testing infrastructure.

## 📦 What's Been Created

### 1. Automated Accessibility Testing

**Location**: `/src/app/react-core-package/`

```bash
cd src/app/react-core-package
npm install
npm run test-storybook
```

- Tests all Storybook stories for WCAG 2.1 AA compliance
- Runs automatically in CI/CD (GitHub Actions)
- Reports detailed accessibility violations

### 2. Storybook with 102+ Interactive Examples

**Location**: `/src/app/react-core-package/`

```bash
cd src/app/react-core-package
npm install
npm run storybook
```

Opens at: `http://localhost:6006`

**Browse**:
- **Foundations** → Design Tokens, Colors, Typography
- **Components** → Button, Input, Alert, Field, Label, ErrorText, HintText

### 3. Documentation Website

**Location**: `/ux4g-docs/`

```bash
cd ux4g-docs
npm install
npm start
```

Opens at: `http://localhost:3000`

**Read**:
- Getting Started → Introduction, Installation, Quick Start
- Foundations → Design principles and tokens
- Components → Full component documentation
- Patterns → Government-specific patterns

## 🎯 Common Tasks

### Install and Run Everything

```bash
# Install Storybook dependencies
cd src/app/react-core-package
npm install

# Run Storybook
npm run storybook

# In another terminal - install docs dependencies
cd ../../ux4g-docs
npm install

# Run documentation site
npm start
```

### Run Accessibility Tests

```bash
cd src/app/react-core-package
npm run test-storybook
```

### Build for Production

```bash
# Build Storybook
cd src/app/react-core-package
npm run build-storybook

# Build documentation
cd ../../ux4g-docs
npm run build
```

## 📚 File Structure

### Storybook Files

```
src/app/react-core-package/
├── .storybook/
│   ├── main.ts                    # Storybook configuration
│   ├── preview.ts                 # Global settings (a11y, viewports)
│   ├── test-runner.ts            # Automated accessibility tests
│   └── STORYBOOK_GUIDE.md        # Developer guide
├── src/
│   ├── components/
│   │   ├── Button/Button.stories.tsx      # 17 stories
│   │   ├── Input/Input.stories.tsx        # 20 stories
│   │   ├── Alert/Alert.stories.tsx        # 16 stories
│   │   ├── Field/Field.stories.tsx        # 9 stories
│   │   ├── Label/Label.stories.tsx        # 8 stories
│   │   ├── ErrorText/ErrorText.stories.tsx # 9 stories
│   │   └── HintText/HintText.stories.tsx  # 10 stories
│   ├── foundations/
│   │   ├── DesignTokens.mdx              # Token documentation
│   │   ├── Colors.stories.tsx            # 7 color stories
│   │   └── Typography.stories.tsx        # 6 typography stories
│   └── Introduction.mdx                   # Storybook welcome page
└── package.json                            # Updated with test scripts
```

### Documentation Site Files

```
ux4g-docs/
├── docusaurus.config.ts           # Site configuration
├── sidebars.ts                    # Navigation structure
├── package.json                   # Dependencies
├── README.md                      # Developer guide
└── docs/
    └── getting-started/
        ├── introduction.md        # System overview
        ├── installation.md        # Install instructions
        └── quick-start.md         # Build first form
```

### CI/CD Files

```
.github/
└── workflows/
    └── storybook-tests.yml        # Automated testing workflow
```

## 🔍 Finding What You Need

### "I want to see live component examples"
→ Run Storybook: `cd src/app/react-core-package && npm run storybook`

### "I want to learn design tokens"
→ Open Storybook → Foundations → Design Tokens

### "I want to install UX4G in my project"
→ Read: `ux4g-docs/docs/getting-started/installation.md`

### "I want to build a government form"
→ Read: `ux4g-docs/docs/getting-started/quick-start.md`

### "I want to test accessibility"
→ Run: `cd src/app/react-core-package && npm run test-storybook`

### "I want to create new stories"
→ Read: `src/app/react-core-package/.storybook/STORYBOOK_GUIDE.md`

## 🎨 What Each Story Shows

### Button Stories (17 examples)
- All variants: primary, secondary, outline, ghost
- All sizes: small, medium, large
- States: default, disabled, loading
- Features: icons, full width, government workflows

### Input Stories (20 examples)
- Types: text, email, password, phone, search
- States: normal, error, disabled, controlled
- Government IDs: Aadhaar (12-digit), PAN (ABCDE1234F)
- Complete form example

### Alert Stories (16 examples)
- Variants: info, success, warning, error
- Features: dismissible, with actions, custom icons
- Government scenarios: Aadhaar verification, DigiLocker, PAN
- Form validation summaries

### Field, Label, ErrorText, HintText Stories
- Complete form field composition examples
- Validation patterns
- Government ID requirements
- Multilingual support (Hindi)
- Accessibility best practices

### Design Token Stories (13 examples)
- Complete color palette (semantic, surface, interactive, chart)
- Typography scale (8 sizes)
- Font weights, line heights
- Dark mode support
- WCAG 2.1 AA compliance

## ✅ Quality Checks

All components include:

- ✅ TypeScript types
- ✅ Accessibility attributes (ARIA labels, roles)
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Error states
- ✅ Government-specific examples
- ✅ Automated accessibility tests
- ✅ Interactive Storybook examples

## 🚀 Next Steps

1. **Install**: Follow installation.md
2. **Explore**: Browse Storybook
3. **Learn**: Read quick-start.md
4. **Build**: Create your first form
5. **Test**: Run accessibility tests
6. **Deploy**: Use in production

## 📖 Additional Documentation

- **Implementation Details**: See `IMPLEMENTATION_COMPLETE.md`
- **Storybook Guide**: See `.storybook/STORYBOOK_GUIDE.md`
- **Component Verification**: See `COMPONENT_VERIFICATION.md`
- **Documentation Strategy**: See `DOCUMENTATION_STRATEGY.md`

## 🎉 Ready to Use!

The complete UX4G documentation and testing infrastructure is now ready:

- ✅ 102+ interactive Storybook examples
- ✅ Automated accessibility testing
- ✅ Complete design token documentation
- ✅ Comprehensive installation and quick start guides
- ✅ CI/CD integration
- ✅ Government-specific patterns

**Start exploring**: `npm run storybook` or `npm start`
