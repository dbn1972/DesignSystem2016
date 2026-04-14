# React Component Parity Plan

Build 9 missing React components to achieve parity with Angular (44 components total).

---

## 🎯 Goal

**Current State:**
- React: 35/73 components (48%)
- Angular: 44/73 components (60%)

**Target State:**
- React: 44/73 components (60%) ✅ Parity with Angular
- Angular: 44/73 components (60%)

**Gap: 9 components to build**

---

## 📋 Components to Build

### Batch 9: Layout Components (4 components)

#### 1. Container
**File:** `/src/app/react-core-package/src/components/Container/Container.tsx`

**Purpose:** Responsive layout container with max-width variants

**Props:**
```typescript
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

**Features:**
- Responsive max-widths (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- Optional horizontal padding
- Auto-centering with margin
- WCAG 2.1 AA compliant

**Angular Reference:** `/src/app/angular-core-package/src/lib/container/`

---

#### 2. Grid
**File:** `/src/app/react-core-package/src/components/Grid/Grid.tsx`

**Purpose:** CSS Grid layout system with responsive columns

**Props:**
```typescript
interface GridProps {
  columns?: number | { xs?: number; sm?: number; md?: number; lg?: number };
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rows?: number;
  className?: string;
  children: React.ReactNode;
}
```

**Features:**
- Responsive column configuration
- Configurable gap sizes
- Auto-fit and auto-fill support
- Government forms layout patterns

**Angular Reference:** `/src/app/angular-core-package/src/lib/grid/`

---

#### 3. Stack
**File:** `/src/app/react-core-package/src/components/Stack/Stack.tsx`

**Purpose:** Flexbox stack for vertical/horizontal layouts

**Props:**
```typescript
interface StackProps {
  direction?: 'vertical' | 'horizontal';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

**Features:**
- Vertical and horizontal stacking
- Consistent spacing between children
- Flexbox alignment options
- Responsive wrapping

**Angular Reference:** `/src/app/angular-core-package/src/lib/stack/`

---

#### 4. Divider
**File:** `/src/app/react-core-package/src/components/Divider/Divider.tsx`

**Purpose:** Visual separator (horizontal/vertical line)

**Props:**
```typescript
interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}
```

**Features:**
- Horizontal and vertical orientations
- Line style variants
- Optional label/text in divider
- Spacing control

**Angular Reference:** `/src/app/angular-core-package/src/lib/divider/`

---

### Batch 10: Display & Feedback (3 components)

#### 5. Skeleton
**File:** `/src/app/react-core-package/src/components/Skeleton/Skeleton.tsx`

**Purpose:** Loading placeholder with animation

**Props:**
```typescript
interface SkeletonProps {
  variant?: 'text' | 'rect' | 'circle' | 'rounded';
  width?: string | number;
  height?: string | number;
  lines?: number; // For text variant
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;
}
```

**Features:**
- Text, rectangle, circle, rounded variants
- Pulse or wave animations
- Multiple lines for text skeletons
- Accessible loading states

**Angular Reference:** `/src/app/angular-core-package/src/lib/skeleton/`

---

#### 6. Statistic
**File:** `/src/app/react-core-package/src/components/Statistic/Statistic.tsx`

**Purpose:** Display statistics/numbers prominently

**Props:**
```typescript
interface StatisticProps {
  title: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

**Features:**
- Large, prominent number display
- Optional trend indicators (up/down arrows)
- Prefix/suffix support (₹, %, etc.)
- Government dashboard statistics

**Angular Reference:** `/src/app/angular-core-package/src/lib/statistic/`

---

#### 7. Tag
**File:** `/src/app/react-core-package/src/components/Tag/Tag.tsx`

**Purpose:** Label/tag for categorization

**Props:**
```typescript
interface TagProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  closable?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}
```

**Features:**
- Multiple color variants
- Optional close button
- Size variants
- Icon support
- Government categories (verified, pending, rejected)

**Angular Reference:** `/src/app/angular-core-package/src/lib/tag/`

---

### Batch 11: Form Components (2 components)

#### 8. Switch
**File:** `/src/app/react-core-package/src/components/Switch/Switch.tsx`

**Purpose:** Toggle switch (on/off control)

**Props:**
```typescript
interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  labelPosition?: 'left' | 'right';
  className?: string;
  'aria-label'?: string;
}
```

**Features:**
- Controlled and uncontrolled modes
- Keyboard accessible (Space/Enter)
- Size variants
- Label positioning
- Government consent toggles

**Angular Reference:** `/src/app/angular-core-package/src/lib/switch/`

---

#### 9. StatusTag
**File:** `/src/app/react-core-package/src/components/StatusTag/StatusTag.tsx`

**Purpose:** Status indicator badges (approved, pending, rejected, etc.)

**Props:**
```typescript
interface StatusTagProps {
  status: 'approved' | 'pending' | 'rejected' | 'in-progress' | 'completed' | 'draft';
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}
```

**Features:**
- Predefined government statuses
- Color-coded indicators
- Optional status icons
- Custom status text override
- Government application statuses

**Angular Reference:** `/src/app/angular-core-package/src/lib/status-tag/`

---

## 🏗️ Implementation Plan

### Week 1: Batch 9 - Layout Components (4)
**Days 1-2:** Container + Grid  
**Days 3-4:** Stack + Divider  
**Day 5:** Testing, stories, documentation

**Deliverables:**
- 4 React components
- Storybook stories for each
- TypeScript types
- Unit tests
- Documentation

---

### Week 2: Batch 10 - Display & Feedback (3)
**Days 1-2:** Skeleton + Statistic  
**Day 3:** Tag  
**Days 4-5:** Testing, stories, documentation

**Deliverables:**
- 3 React components
- Storybook stories for each
- Government-specific examples
- Unit tests
- Documentation

---

### Week 3: Batch 11 - Form Components (2)
**Days 1-2:** Switch  
**Day 3:** StatusTag  
**Days 4-5:** Integration testing, final review, publish

**Deliverables:**
- 2 React components
- Storybook stories for each
- Forms integration examples
- Unit tests
- Documentation
- **Publish React v1.5.0 (44 components)** 🎉

---

## 📝 Component Template

All components should follow this structure:

```
Component/
├── Component.tsx          # Main component
├── Component.types.ts     # TypeScript types
├── Component.stories.tsx  # Storybook stories
├── Component.test.tsx     # Unit tests
└── index.ts              # Exports
```

### Standard Props Pattern
```typescript
import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  // Component-specific props
  variant?: 'default' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  
  // Common props
  className?: string;
  children?: React.ReactNode;
  'data-testid'?: string;
}

export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant = 'default', size = 'md', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ux4g-component',
          `ux4g-component--${variant}`,
          `ux4g-component--${size}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Component.displayName = 'Component';
```

---

## 🎯 Success Criteria

### Code Quality
- ✅ TypeScript strict mode
- ✅ forwardRef for all components
- ✅ Full ARIA attributes
- ✅ Keyboard navigation where applicable
- ✅ CSS class naming: `ux4g-{component}`

### Testing
- ✅ Unit tests with 80%+ coverage
- ✅ Storybook stories (6-12 per component)
- ✅ Government-specific examples
- ✅ Accessibility testing (axe-playwright)

### Documentation
- ✅ JSDoc comments
- ✅ README with examples
- ✅ Props table
- ✅ Usage examples (basic + government)

### Integration
- ✅ Exported in `/src/index.ts`
- ✅ Type exports included
- ✅ Works with existing components
- ✅ CSS tokens from @ux4g/styles

---

## 📦 Dependencies

**No new dependencies needed** - all components use existing:
- React 18.3.1
- TypeScript
- Tailwind CSS
- @ux4g/styles
- @ux4g/tokens

---

## 🚀 Post-Completion

After building all 9 components:

### 1. Update Exports
```typescript
// Add to /src/app/react-core-package/src/index.ts

// Layout Components
export { Container } from './components/Container';
export { Grid } from './components/Grid';
export { Stack } from './components/Stack';
export { Divider } from './components/Divider';

// Display Components
export { Skeleton } from './components/Skeleton';
export { Statistic } from './components/Statistic';
export { Tag } from './components/Tag';

// Form Components
export { Switch } from './components/Switch';
export { StatusTag } from './components/StatusTag';

// Type exports...
export type { ContainerProps } from './components/Container';
// ... etc
```

### 2. Update Documentation
- Update README.md: 44/44 components
- Update ALL_COMPONENTS_COMPLETE.md
- Update REACT_ANGULAR_COMPONENT_COMPARISON.md
- Update Components.tsx page

### 3. Version & Publish
```bash
cd src/app/react-core-package
npm version 1.5.0
npm publish
```

### 4. Announce Parity
- React and Angular both at 44 components ✅
- Document remaining 29 components as Phase 2

---

## ⏱️ Timeline Summary

| Week | Batch | Components | Total After |
|------|-------|------------|-------------|
| Week 1 | Batch 9 | 4 layout | 39/73 |
| Week 2 | Batch 10 | 3 display | 42/73 |
| Week 3 | Batch 11 | 2 form | **44/73** ✅ |

**Total Time: 3 weeks**  
**ETA: May 3, 2026**

---

## 🎊 After Parity Achievement

Once React reaches 44 components:

1. **Both frameworks equal** at 44/73 (60%)
2. **Focus shifts** to remaining 29 components
3. **Build in parallel** for both React and Angular
4. **Target:** 73/73 components by July 2026

---

**Status:** Ready to start Batch 9  
**Next Action:** Create Container component  
**Date:** April 12, 2026
