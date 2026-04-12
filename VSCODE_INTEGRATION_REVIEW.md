# VS Code Integration Review - UX4G Design System

**Date**: April 12, 2026  
**Status**: ❌ **NOT IMPLEMENTED** - No VS Code extension or integration exists  
**Priority**: 🟡 **MEDIUM** (P2 - Nice-to-Have)  
**Effort**: ~2-3 weeks for full implementation

---

## 📊 Current State

### What Exists
- ❌ No VS Code extension
- ❌ No `.vscode/` workspace configuration
- ❌ No snippet files
- ❌ No recommended extensions list
- ❌ No workspace settings
- ❌ No debugging configuration
- 🟡 VS Code mentioned in documentation as "recommended editor" (CONTRIBUTING_GUIDELINES_FEATURE.md, DEVELOPER_ONBOARDING.md)

### What's Missing
Everything related to VS Code integration:
1. Extension published to VS Code Marketplace
2. Component snippets
3. IntelliSense/autocomplete for components
4. Design token color previews
5. Documentation tooltips
6. Workspace settings for developers
7. Recommended extensions list

---

## 🎯 Proposed VS Code Extension Features

### 1. **Component Snippets** (High Priority)

Generate complete component code from short triggers.

#### React Snippets
```json
{
  "UX4G Button": {
    "prefix": "ux4g-button",
    "body": [
      "<Button variant=\"${1|primary,secondary,tertiary,ghost,danger|}\" size=\"${2|sm,md,lg|}\">",
      "  ${3:Click me}",
      "</Button>"
    ],
    "description": "UX4G Button component"
  },
  
  "UX4G Input Field": {
    "prefix": "ux4g-input",
    "body": [
      "<Field>",
      "  <Label htmlFor=\"${1:id}\" ${2:required}>",
      "    ${3:Label Text}",
      "  </Label>",
      "  <Input",
      "    id=\"${1:id}\"",
      "    type=\"${4|text,email,tel,password,number|}\"",
      "    placeholder=\"${5:Enter value}\"",
      "    value={${6:value}}",
      "    onChange={${7:handleChange}}",
      "  />",
      "  ${8:<HintText>Helper text</HintText>}",
      "  ${9:<ErrorText>Error message</ErrorText>}",
      "</Field>"
    ],
    "description": "UX4G Input field with label and validation"
  },
  
  "UX4G Alert": {
    "prefix": "ux4g-alert",
    "body": [
      "<Alert variant=\"${1|info,success,warning,error|}\" title=\"${2:Alert Title}\">",
      "  ${3:Alert message}",
      "</Alert>"
    ],
    "description": "UX4G Alert component"
  },
  
  "UX4G Card": {
    "prefix": "ux4g-card",
    "body": [
      "<Card ${1:elevated} ${2:interactive}>",
      "  <CardHeader>",
      "    ${3:Card Title}",
      "  </CardHeader>",
      "  <CardContent>",
      "    ${4:Card content}",
      "  </CardContent>",
      "  ${5:<CardFooter>Footer</CardFooter>}",
      "</Card>"
    ],
    "description": "UX4G Card component"
  },
  
  "UX4G Dialog": {
    "prefix": "ux4g-dialog",
    "body": [
      "<Dialog open={${1:isOpen}} onOpenChange={${2:setIsOpen}}>",
      "  <DialogContent>",
      "    <DialogHeader>",
      "      <DialogTitle>${3:Dialog Title}</DialogTitle>",
      "      <DialogDescription>${4:Dialog description}</DialogDescription>",
      "    </DialogHeader>",
      "    ${5:<!-- Dialog content -->}",
      "    <DialogFooter>",
      "      <Button variant=\"ghost\" onClick={() => ${2:setIsOpen}(false)}>",
      "        Cancel",
      "      </Button>",
      "      <Button variant=\"primary\" onClick={${6:handleSubmit}}>",
      "        Confirm",
      "      </Button>",
      "    </DialogFooter>",
      "  </DialogContent>",
      "</Dialog>"
    ],
    "description": "UX4G Dialog component"
  },
  
  "UX4G Form Import": {
    "prefix": "ux4g-import-form",
    "body": [
      "import {",
      "  Button,",
      "  Input,",
      "  Field,",
      "  Label,",
      "  ErrorText,",
      "  HintText,",
      "  Select,",
      "  Checkbox,",
      "  Radio",
      "} from '@ux4g/react-core';"
    ],
    "description": "Import UX4G form components"
  }
}
```

#### Angular Snippets
```json
{
  "UX4G Angular Button": {
    "prefix": "ux4g-ng-button",
    "body": [
      "<ux4g-button",
      "  variant=\"${1|primary,secondary,tertiary,ghost,danger|}\"",
      "  size=\"${2|sm,md,lg|}\"",
      "  (click)=\"${3:onClick}()\"",
      ">",
      "  ${4:Click me}",
      "</ux4g-button>"
    ],
    "description": "UX4G Angular Button component"
  }
}
```

#### Web Components Snippets
```json
{
  "UX4G Web Component Button": {
    "prefix": "ux4g-wc-button",
    "body": [
      "<ux4g-button variant=\"${1|primary,secondary,tertiary,ghost,danger|}\" size=\"${2|sm,md,lg|}\">",
      "  ${3:Click me}",
      "</ux4g-button>"
    ],
    "description": "UX4G Web Component Button"
  }
}
```

---

### 2. **Design Token Snippets & Previews** (Medium Priority)

#### Color Token Snippets
```json
{
  "UX4G Color Token": {
    "prefix": "ux4g-color",
    "body": "var(--ux4g-color-${1|saffron,green,navy,neutral,brand,semantic|}-${2:500})",
    "description": "UX4G color design token"
  },
  
  "UX4G Spacing Token": {
    "prefix": "ux4g-spacing",
    "body": "var(--ux4g-spacing-${1|xs,sm,md,lg,xl,2xl,3xl,4xl,5xl,6xl|})",
    "description": "UX4G spacing design token"
  },
  
  "UX4G Font Size Token": {
    "prefix": "ux4g-font-size",
    "body": "var(--ux4g-font-size-${1|xs,sm,base,lg,xl,2xl,3xl,4xl,5xl,6xl|})",
    "description": "UX4G font size design token"
  }
}
```

#### Color Previews in Editor
VS Code extension should detect design token usage and show color swatches inline:

**Example**:
```css
.my-component {
  /* Shows saffron color swatch */
  background-color: var(--ux4g-color-saffron-500);
  
  /* Shows green color swatch */
  border-color: var(--ux4g-color-green-600);
}
```

**Token Patterns to Detect**:
- `var(--ux4g-color-*)`
- `#ff7700` → Should suggest: `var(--ux4g-color-saffron-500)`
- `#005196` → Should suggest: `var(--ux4g-color-navy-500)`

---

### 3. **IntelliSense & Autocomplete** (High Priority)

#### Component Props Autocomplete

When typing `<Button `, show all available props:
```typescript
variant?: "primary" | "secondary" | "tertiary" | "ghost" | "danger"
size?: "sm" | "md" | "lg"
disabled?: boolean
loading?: boolean
loadingText?: string
fullWidth?: boolean
iconBefore?: React.ReactNode
iconAfter?: React.ReactNode
type?: "button" | "submit" | "reset"
onClick?: (event: React.MouseEvent) => void
```

#### Import Autocomplete

When typing `import { ... } from '@ux4g/`, suggest:
- `@ux4g/react-core`
- `@ux4g/angular-core`
- `@ux4g/web-components`
- `@ux4g/styles`
- `@ux4g/tokens`

When typing `import { ... } from '@ux4g/react-core'`, suggest all 36 components:
- Accordion
- Alert
- Autocomplete
- Avatar
- Badge
- Breadcrumb
- Button
- Card
- Checkbox
- DatePicker
- Dialog
- Drawer
- ErrorText
- Field
- FileUpload
- HintText
- Input
- Label
- Menu
- OTPInput
- Pagination
- Popover
- Progress
- Radio
- Rating
- SearchBar
- Select
- Spinner
- Stepper
- Table
- Tabs
- Textarea
- Timeline
- Toast
- Tooltip

---

### 4. **Documentation Tooltips** (Medium Priority)

Show component documentation on hover:

**Example**: Hover over `<Button>` shows:
```markdown
**Button** - Primary interactive element

Variants: primary, secondary, tertiary, ghost, danger
Sizes: sm, md, lg

Example:
<Button variant="primary" onClick={handleClick}>
  Submit Application
</Button>

Documentation: https://ux4g.gov.in/components/button
```

---

### 5. **Workspace Configuration** (Low Priority)

#### `.vscode/settings.json`
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "css.customData": [".vscode/css-custom-data.json"],
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

#### `.vscode/extensions.json`
```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "Angular.ng-template",
    "storybook.storybook-vscode",
    "unifiedjs.vscode-mdx"
  ]
}
```

#### `.vscode/launch.json`
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Storybook",
      "url": "http://localhost:6006",
      "webRoot": "${workspaceFolder}"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Jest: Current File",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["${fileBasename}", "--config", "jest.config.js"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

#### `.vscode/css-custom-data.json`
```json
{
  "version": 1.1,
  "properties": [
    {
      "name": "--ux4g-color-saffron-500",
      "description": "Base saffron - Indian tricolor",
      "values": [{ "name": "#ff7700" }]
    },
    {
      "name": "--ux4g-color-green-500",
      "description": "Base green - Indian tricolor",
      "values": [{ "name": "#00aa00" }]
    },
    {
      "name": "--ux4g-color-navy-500",
      "description": "Base navy - Government primary",
      "values": [{ "name": "#005196" }]
    }
  ]
}
```

---

### 6. **Code Actions & Quick Fixes** (Low Priority)

#### Auto-import Components
When typing `<Button>` without import, offer quick fix:
```typescript
// Before
function App() {
  return <Button>Click</Button>; // ❌ Error: 'Button' is not defined
}

// After quick fix
import { Button } from '@ux4g/react-core'; // ✅ Auto-added

function App() {
  return <Button>Click</Button>;
}
```

#### Convert Hardcoded Colors to Design Tokens
```css
/* Before */
.component {
  background-color: #ff7700; /* 💡 Quick fix available */
}

/* After quick fix */
.component {
  background-color: var(--ux4g-color-saffron-500);
}
```

---

## 🏗️ Implementation Approach

### Phase 1: Basic Snippets (Week 1)
**Deliverables**:
1. Create snippet files for React, Angular, Web Components
2. Package snippets as VS Code extension
3. Test snippets in real projects
4. Document snippet usage

**Files to Create**:
```
ux4g-vscode-extension/
├── package.json
├── README.md
├── CHANGELOG.md
├── snippets/
│   ├── react.json
│   ├── angular.json
│   ├── web-components.json
│   └── design-tokens.json
├── images/
│   └── icon.png
└── .vscodeignore
```

**package.json**:
```json
{
  "name": "ux4g-snippets",
  "displayName": "UX4G - Indian Government Design System",
  "description": "Code snippets and IntelliSense for UX4G components",
  "version": "1.0.0",
  "publisher": "ux4g",
  "icon": "images/icon.png",
  "repository": {
    "type": "git",
    "url": "https://github.com/ux4g/vscode-extension"
  },
  "engines": {
    "vscode": "^1.80.0"
  },
  "categories": [
    "Snippets",
    "Programming Languages"
  ],
  "keywords": [
    "ux4g",
    "design-system",
    "indian-government",
    "react",
    "angular",
    "web-components",
    "accessibility"
  ],
  "contributes": {
    "snippets": [
      {
        "language": "typescriptreact",
        "path": "./snippets/react.json"
      },
      {
        "language": "typescript",
        "path": "./snippets/angular.json"
      },
      {
        "language": "html",
        "path": "./snippets/web-components.json"
      },
      {
        "language": "css",
        "path": "./snippets/design-tokens.json"
      }
    ]
  }
}
```

---

### Phase 2: Workspace Configuration (Week 1)
**Deliverables**:
1. Add `.vscode/` folder to main repository
2. Configure recommended extensions
3. Set up debug configurations
4. Document workspace setup

**Impact**: Improves developer onboarding

---

### Phase 3: IntelliSense & Autocomplete (Week 2)
**Deliverables**:
1. Create TypeScript definition files
2. Implement autocomplete provider
3. Add prop suggestions
4. Test with React, Angular projects

**Technical Requirements**:
- Use VS Code Extension API
- Implement `vscode.languages.registerCompletionItemProvider`
- Parse component type definitions
- Provide contextual suggestions

---

### Phase 4: Design Token Previews (Week 2-3)
**Deliverables**:
1. Implement color decorator provider
2. Parse CSS custom properties
3. Show color swatches inline
4. Support hover tooltips

**Technical Requirements**:
- Use `vscode.languages.registerColorProvider`
- Parse `var(--ux4g-color-*)` patterns
- Map tokens to hex values
- Show color picker on click

---

### Phase 5: Documentation Tooltips (Week 3)
**Deliverables**:
1. Implement hover provider
2. Embed component documentation
3. Link to online docs
4. Show usage examples

**Technical Requirements**:
- Use `vscode.languages.registerHoverProvider`
- Extract JSDoc comments from components
- Format as Markdown
- Include links to documentation site

---

### Phase 6: Publish to Marketplace (Week 3)
**Deliverables**:
1. Create Azure DevOps organization
2. Get publisher verification
3. Package extension (`.vsix`)
4. Publish to VS Code Marketplace
5. Set up auto-publishing on releases

**Publishing Steps**:
```bash
# Install vsce
npm install -g @vscode/vsce

# Package extension
vsce package

# Publish extension
vsce publish
```

---

## 📊 Comparison with Other Design Systems

| Feature | Material UI | Carbon | Chakra UI | UX4G (Proposed) |
|---------|-------------|--------|-----------|-----------------|
| **VS Code Extension** | ✅ Yes | ❌ No | ✅ Yes | 🟡 Planned |
| **Component Snippets** | ✅ Yes (50+) | ❌ No | ✅ Yes (30+) | 🟡 36+ planned |
| **IntelliSense** | ✅ Yes | ❌ No | ✅ Yes | 🟡 Planned |
| **Color Previews** | ✅ Yes | ❌ No | ✅ Yes | 🟡 Planned |
| **Auto-import** | ✅ Yes | ❌ No | ✅ Yes | 🟡 Planned |
| **Hover Docs** | ✅ Yes | ❌ No | ✅ Yes | 🟡 Planned |
| **Marketplace Link** | [MUI Tools](https://marketplace.visualstudio.com/items?itemName=Material-UI.vscode-material-ui) | N/A | [Chakra UI Snippets](https://marketplace.visualstudio.com/items?itemName=AndrewKushnir.chakra-ui-snippets) | N/A |

---

## 🎯 Success Metrics

### Downloads & Usage
- **Target**: 1,000+ installs in first 6 months
- **Measure**: VS Code Marketplace analytics
- **Benchmark**: Chakra UI extension has ~50K installs

### Developer Satisfaction
- **Target**: 4.5+ star rating
- **Measure**: Marketplace reviews
- **Feedback**: GitHub issues, developer surveys

### Adoption Rate
- **Target**: 30% of UX4G users use extension
- **Measure**: Telemetry (opt-in)
- **Track**: Component snippet usage

---

## 💰 Effort Estimation

### Total Effort: ~2-3 weeks (80-120 hours)

| Phase | Effort | Priority |
|-------|--------|----------|
| Phase 1: Snippets | 2-3 days | ⭐⭐⭐⭐ High |
| Phase 2: Workspace Config | 1 day | ⭐⭐⭐ Medium |
| Phase 3: IntelliSense | 3-4 days | ⭐⭐⭐⭐ High |
| Phase 4: Color Previews | 3-4 days | ⭐⭐⭐ Medium |
| Phase 5: Hover Docs | 2-3 days | ⭐⭐ Low |
| Phase 6: Publishing | 1 day | ⭐⭐⭐⭐ High |

**Prerequisite Skills**:
- TypeScript
- VS Code Extension API
- Node.js
- Component type definitions

---

## 🚦 Priority Assessment

**Overall Priority**: 🟡 **MEDIUM** (P2 - Nice-to-Have)

### Why Medium Priority (Not High)?
1. **Components Complete**: All 36 React + 74 Angular + 73 Web Components are done
2. **Docs Live**: Documentation site is accessible
3. **No Blocker**: Developers can use UX4G without VS Code extension
4. **Convenience Only**: Extension improves DX but doesn't enable new functionality

### Why Not Low Priority?
1. **Competitive Advantage**: Material UI and Chakra UI have extensions
2. **Developer Experience**: Significantly improves productivity
3. **Adoption Catalyst**: Makes UX4G easier to use → higher adoption
4. **Professional Polish**: Shows maturity and attention to DX

### When to Prioritize Higher?
- ✅ After unit tests are complete (P0)
- ✅ After NPM packages are published (P0)
- ✅ After visual regression tests are set up (P1)
- 🟡 Before or alongside Figma library (P2)

---

## 🎬 Recommended Next Steps

### Option A: Implement Basic Extension (Recommended)
**Start with Phase 1-2 only** (3-4 days):
1. Create snippet files for all 36 React components
2. Add Angular and Web Component snippets
3. Package basic extension
4. Add `.vscode/` workspace config to repo

**Why**: Quick win, high impact on DX, minimal effort

### Option B: Full Implementation
**Complete all 6 phases** (2-3 weeks):
1. Build complete VS Code extension
2. Publish to Marketplace
3. Set up auto-publishing
4. Create extension documentation

**Why**: Best-in-class DX, competitive with Material UI

### Option C: Workspace Config Only
**Just add `.vscode/` folder** (1 day):
1. Recommended extensions
2. Debug configurations
3. Workspace settings
4. No extension needed

**Why**: Immediate improvement for contributors, zero maintenance

---

## 📋 Implementation Checklist

### Prerequisites
- [ ] Unit tests complete (blocks all nice-to-have features)
- [ ] NPM packages published (needed for import suggestions)
- [ ] TypeScript definitions verified (needed for IntelliSense)

### Phase 1: Basic Extension
- [ ] Create extension repository
- [ ] Write React component snippets (36 components)
- [ ] Write Angular component snippets (74 components)
- [ ] Write Web Component snippets (73 components)
- [ ] Write design token snippets
- [ ] Create extension `package.json`
- [ ] Add icon and branding
- [ ] Write README with snippet usage
- [ ] Test locally with `.vsix` file

### Phase 2: Workspace
- [ ] Create `.vscode/settings.json`
- [ ] Create `.vscode/extensions.json`
- [ ] Create `.vscode/launch.json`
- [ ] Create `.vscode/css-custom-data.json`
- [ ] Document workspace setup in CONTRIBUTING.md

### Phase 3: IntelliSense
- [ ] Implement completion provider
- [ ] Add component prop suggestions
- [ ] Add import path suggestions
- [ ] Test autocomplete functionality

### Phase 4: Color Previews
- [ ] Implement color decorator provider
- [ ] Parse design token CSS variables
- [ ] Map tokens to hex colors
- [ ] Show inline color swatches
- [ ] Test color picker functionality

### Phase 5: Documentation
- [ ] Implement hover provider
- [ ] Extract component JSDoc
- [ ] Format documentation as Markdown
- [ ] Add links to online docs
- [ ] Test hover tooltips

### Phase 6: Publishing
- [ ] Create Azure DevOps organization
- [ ] Get publisher verification
- [ ] Package extension (`.vsix`)
- [ ] Test packaged extension
- [ ] Publish to VS Code Marketplace
- [ ] Set up GitHub Actions for auto-publishing
- [ ] Announce extension launch

---

## 💡 Recommendation

**Current Status**: VS Code integration is completely missing.

**Immediate Action**: Add **Workspace Configuration** (Option C) now - takes 1 day, helps contributors immediately.

**Future Action**: Implement **Basic Extension** (Option A) after:
1. ✅ Unit tests are complete
2. ✅ NPM packages are published
3. ✅ Visual regression tests are set up

**Full Extension**: Implement after Phase 1-3 of main roadmap (4-6 weeks from now).

---

## ❓ Questions?

What would you like to prioritize?

A. Add `.vscode/` workspace configuration now (1 day)?
B. Build basic snippet extension (3-4 days)?
C. Build full extension with IntelliSense (2-3 weeks)?
D. Skip VS Code integration for now, focus on testing?
E. Something else?
