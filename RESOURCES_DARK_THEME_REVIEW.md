# Resources Page Dark Theme Review

## Issues Found

### 1. **Starter Kit Section - "What's Included" Box** (Lines 103-131)
**Issue**: Green background box missing dark theme classes

**Current**:
```tsx
<div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
  <h4 className="font-bold text-gray-900 mb-3">What's Included</h4>
  <ul className="space-y-2 text-sm text-gray-700">
```

**Fix Needed**:
- Background: `bg-green-50 dark:bg-green-900/20`
- Border: `border-green-200 dark:border-green-800`
- Heading: `text-gray-900 dark:text-gray-100`
- List text: `text-gray-700 dark:text-gray-300`
- Icon: `text-green-600 dark:text-green-400`

---

### 2. **Starter Kit Section - "Quick Start" Box** (Lines 132-163)
**Issue**: White background box missing dark theme classes

**Current**:
```tsx
<div className="bg-white border-2 border-gray-300 rounded-lg p-6">
  <h4 className="font-bold text-gray-900 mb-3">Quick Start</h4>
  <p className="font-bold text-gray-900">Copy files</p>
  <p className="text-gray-600">Copy starter kit to your project</p>
```

**Fix Needed**:
- Background: `bg-white dark:bg-gray-800`
- Border: `border-gray-300 dark:border-gray-700`
- Headings: `text-gray-900 dark:text-gray-100`
- Body text: `text-gray-600 dark:text-gray-400`
- Number badges: `bg-[#000080] dark:bg-blue-700`
- Button: `bg-[#000080] dark:bg-blue-600 hover:bg-[#000066] dark:hover:bg-blue-700`

---

### 3. **Component Specifications - "Covered Components" Box** (Lines 181-206)
**Issue**: Purple background box missing dark theme classes

**Current**:
```tsx
<div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
  <h4 className="font-bold text-gray-900 mb-3">Covered Components</h4>
  <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
```

**Fix Needed**:
- Background: `bg-purple-50 dark:bg-purple-900/20`
- Border: `border-purple-200 dark:border-purple-800`
- Heading: `text-gray-900 dark:text-gray-100`
- List text: `text-gray-700 dark:text-gray-300`

---

### 4. **Additional Resources - Link Cards** (Lines 247-262)
**Issue**: Four link cards missing dark theme classes

**Current**:
```tsx
<Link to="/accessibility" className="p-4 border-2 border-gray-300 rounded-lg hover:border-[#000080] hover:shadow-md transition-all">
  <h4 className="font-bold text-gray-900 mb-1">Accessibility Guide</h4>
  <p className="text-sm text-gray-700">WCAG 2.1 AA compliance guidelines</p>
</Link>
```

**Fix Needed** (apply to all 4 cards):
- Background: Add `bg-white dark:bg-gray-800`
- Border: `border-gray-300 dark:border-gray-700 hover:border-[#000080] dark:hover:border-blue-500`
- Heading: `text-gray-900 dark:text-gray-100`
- Description: `text-gray-700 dark:text-gray-300`

---

## Summary

**Components with good dark theme** ✅:
- Main container background
- Header gradient
- QuickLinkCard component
- ResourceSection component
- ResourceItem component

**Sections needing fixes** ❌:
1. Starter Kit "What's Included" green box
2. Starter Kit "Quick Start" white box
3. Component Specifications purple box
4. Additional Resources link cards (4 cards)

**Total fixes needed**: 7 specific content boxes/cards
