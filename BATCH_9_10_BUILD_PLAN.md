# Angular Batch 9 & 10 Build Plan

Building 10 Angular components in two batches to reach 54/73 (74% complete).

---

## 🚀 Batch 9: Government-Specific Forms (5 Components)

**Status:** ⏳ In Progress (Agent Running)  
**Components:** 49/73 → 54/73 after completion  
**Priority:** HIGHEST - Government-critical components

### Components Being Built

1. ✅ **Segmented Control** - iOS-style exclusive selection
   - `/src/app/angular-core-package/src/lib/segmented-control/`
   - Use cases: Gender, Document type, Application type
   - Features: Keyboard navigation, animated indicator

2. ✅ **Aadhaar Input** - 12-digit Aadhaar validation
   - `/src/app/angular-core-package/src/lib/aadhaar-input/`
   - Format: #### #### ####
   - Features: Auto-formatting, masking option, checksum validation

3. ✅ **PAN Card Input** - PAN format validation
   - `/src/app/angular-core-package/src/lib/pan-input/`
   - Format: ABCDE1234F (5 letters + 4 digits + 1 letter)
   - Features: Auto-uppercase, format validation

4. ✅ **Address Autocomplete India** - Indian address input
   - `/src/app/angular-core-package/src/lib/address-autocomplete-india/`
   - Features: 36 states/UTs, district autocomplete, PIN code validation
   - Returns full address object

5. ✅ **CAPTCHA** - Bot prevention
   - `/src/app/angular-core-package/src/lib/captcha/`
   - Features: Random alphanumeric challenge, refresh, distorted text

**Timeline:** Agent running in background  
**ETA:** 5-10 minutes

---

## 🎯 Batch 10: Navigation & Layout (5 Components)

**Status:** 📋 Ready to Build Next  
**Components:** 54/73 → 59/73 after completion  
**Priority:** HIGH - Common UI patterns

### Components to Build

1. ❌ **Header** - Page header component
   - `/src/app/angular-core-package/src/lib/header/`
   - Features: Logo, navigation menu, user menu, search
   - Responsive: Mobile hamburger menu
   - Government branding support

2. ❌ **Footer** - Page footer component
   - `/src/app/angular-core-package/src/lib/footer/`
   - Features: Multiple columns, links, social media, copyright
   - Government footer patterns
   - Responsive layout

3. ❌ **Dropdown** - Dropdown menu component
   - `/src/app/angular-core-package/src/lib/dropdown/`
   - Features: Click/hover trigger, keyboard navigation
   - Positioning (top, bottom, left, right)
   - May extend existing Menu component

4. ❌ **Back to Top** - Scroll to top button
   - `/src/app/angular-core-package/src/lib/back-to-top/`
   - Features: Auto-show on scroll, smooth scroll, customizable threshold
   - Fixed positioning
   - Accessibility (skip to top)

5. ❌ **Spacer** - Spacing utility component
   - `/src/app/angular-core-package/src/lib/spacer/`
   - Features: Horizontal/vertical spacing, responsive sizes
   - Size options: xs, sm, md, lg, xl
   - Government design token integration

**Timeline:** Build after Batch 9 completes  
**ETA:** 3-4 hours

---

## 📋 Batch 9 Specifications

### 1. Segmented Control

**Selector:** `ux4g-segmented-control`

**Interface:**
```typescript
export interface SegmentedOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SegmentedControlProps {
  options: SegmentedOption[];
  value: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (value: string) => void;
}
```

**Usage:**
```typescript
<ux4g-segmented-control
  [(ngModel)]="documentType"
  [options]="[
    { value: 'aadhaar', label: 'Aadhaar' },
    { value: 'pan', label: 'PAN Card' },
    { value: 'passport', label: 'Passport' }
  ]"
></ux4g-segmented-control>
```

---

### 2. Aadhaar Input

**Selector:** `ux4g-aadhaar-input`

**Interface:**
```typescript
interface AadhaarInputProps {
  value: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  helperText?: string;
  mask?: boolean; // XXXX XXXX 1234
}
```

**Usage:**
```typescript
<ux4g-aadhaar-input
  [(ngModel)]="aadhaarNumber"
  label="Aadhaar Number"
  [required]="true"
  helperText="Enter your 12-digit Aadhaar number"
></ux4g-aadhaar-input>
```

**Validation:**
- Exactly 12 digits
- No letters or special characters
- Optional Verhoeff checksum

---

### 3. PAN Input

**Selector:** `ux4g-pan-input`

**Interface:**
```typescript
interface PANInputProps {
  value: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  helperText?: string;
  autoCapitalize?: boolean;
}
```

**Usage:**
```typescript
<ux4g-pan-input
  [(ngModel)]="panNumber"
  label="PAN Number"
  [required]="true"
  helperText="Format: ABCDE1234F"
></ux4g-pan-input>
```

**Validation:**
- Format: [A-Z]{5}[0-9]{4}[A-Z]{1}
- Auto-uppercase
- Real-time validation

---

### 4. Address Autocomplete India

**Selector:** `ux4g-address-autocomplete-india`

**Interface:**
```typescript
export interface AddressValue {
  line1: string;
  line2?: string;
  city: string;
  district: string;
  state: string;
  pinCode: string;
}

export interface State {
  code: string;
  name: string;
  districts: string[];
}

interface AddressAutocompleteProps {
  value: AddressValue;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  showPinCode?: boolean;
  showDistrict?: boolean;
}
```

**Usage:**
```typescript
<ux4g-address-autocomplete-india
  [(ngModel)]="address"
  label="Permanent Address"
  [required]="true"
></ux4g-address-autocomplete-india>
```

**Data:**
- 36 Indian states/UTs
- Major districts for each state
- 6-digit PIN code validation

---

### 5. CAPTCHA

**Selector:** `ux4g-captcha`

**Interface:**
```typescript
interface CaptchaProps {
  value: string;
  length?: number; // 4-8 characters
  difficulty?: 'easy' | 'medium' | 'hard';
  onVerify?: (isValid: boolean) => void;
  autoRefresh?: boolean;
  refreshInterval?: number;
}
```

**Usage:**
```typescript
<ux4g-captcha
  [(ngModel)]="captchaValue"
  [length]="6"
  (verify)="onCaptchaVerify($event)"
></ux4g-captcha>
```

**Features:**
- Random alphanumeric (avoid ambiguous: 0/O, 1/I)
- CSS distortion for difficulty
- Refresh button
- Audio option for accessibility

---

## 📋 Batch 10 Specifications

### 1. Header

**Selector:** `ux4g-header`

**Props:**
```typescript
interface HeaderProps {
  logo?: string;
  title?: string;
  navigation?: NavItem[];
  userMenu?: UserMenuItem[];
  searchEnabled?: boolean;
  sticky?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  children?: NavItem[];
}
```

**Features:**
- Responsive (mobile hamburger)
- Government branding
- Search integration
- User profile menu

---

### 2. Footer

**Selector:** `ux4g-footer`

**Props:**
```typescript
interface FooterProps {
  columns?: FooterColumn[];
  copyright?: string;
  socialLinks?: SocialLink[];
  disclaimer?: string;
}

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
```

**Features:**
- Multi-column layout
- Government footer compliance
- Responsive (stack on mobile)

---

### 3. Dropdown

**Selector:** `ux4g-dropdown`

**Props:**
```typescript
interface DropdownProps {
  trigger: 'click' | 'hover';
  position: 'top' | 'bottom' | 'left' | 'right';
  items: DropdownItem[];
  disabled?: boolean;
}

interface DropdownItem {
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
}
```

**Features:**
- Click/hover trigger
- Keyboard navigation
- Auto-positioning

---

### 4. Back to Top

**Selector:** `ux4g-back-to-top`

**Props:**
```typescript
interface BackToTopProps {
  threshold?: number; // px scrolled before showing
  position?: 'right' | 'left';
  smooth?: boolean;
  icon?: string;
}
```

**Features:**
- Auto-show on scroll
- Smooth scroll animation
- Fixed position (bottom right/left)

---

### 5. Spacer

**Selector:** `ux4g-spacer`

**Props:**
```typescript
interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  orientation?: 'horizontal' | 'vertical';
  responsive?: boolean;
}
```

**Features:**
- Design token sizes
- Horizontal/vertical
- Responsive scaling

---

## 🔄 Workflow

### After Batch 9 Completes

1. ✅ **Verify Components**
   - Check all files created
   - Verify TypeScript compiles
   - Test ControlValueAccessor

2. ✅ **Update Exports**
   ```typescript
   // src/app/angular-core-package/src/public-api.ts
   export { SegmentedControlComponent } from './lib/segmented-control';
   export { AadhaarInputComponent } from './lib/aadhaar-input';
   export { PanInputComponent } from './lib/pan-input';
   export { AddressAutocompleteIndiaComponent } from './lib/address-autocomplete-india';
   export { CaptchaComponent } from './lib/captcha';
   ```

3. ✅ **Update Documentation**
   - Update README.md: 49/73 → 54/73
   - Update OVERVIEW.md
   - Update progress tracking

4. ✅ **Launch Batch 10 Agent**
   - Build Header, Footer, Dropdown, Back to Top, Spacer
   - Use same pattern as Batch 9

---

## 📊 Progress Tracking

| Batch | Components | Before | After | % Complete |
|-------|------------|--------|-------|------------|
| **Current** | - | 44/73 | 44/73 | 60% |
| **Batch 9** | 5 govt forms | 44/73 | 49/73 | 67% |
| **Batch 10** | 5 nav/layout | 49/73 | 54/73 | 74% |
| **Total After** | **10 new** | **44/73** | **54/73** | **+14%** |

**Remaining after Batch 10:** 19 components (26%)

---

## ✅ Success Criteria

### Batch 9
- [⏳] All 5 components created
- [⏳] Aadhaar validation works (12 digits)
- [⏳] PAN validation works (ABCDE1234F)
- [⏳] Address has all 36 Indian states
- [⏳] CAPTCHA generates random challenges
- [⏳] All implement ControlValueAccessor
- [⏳] All have ARIA attributes

### Batch 10
- [ ] All 5 components created
- [ ] Header responsive on mobile
- [ ] Footer multi-column layout
- [ ] Dropdown keyboard navigation
- [ ] Back to Top smooth scroll
- [ ] Spacer uses design tokens
- [ ] All accessible (WCAG 2.1 AA)

---

## 🎯 After Both Batches

**Status:** 54/73 (74% complete)  
**Remaining:** 19 components  
**Next Priority:** Layout utilities + Advanced display

**Batches 11-12:** 14 more components to reach 68/73 (93%)

---

**Current Status:** Batch 9 agent running  
**Next Action:** Wait for completion, then build Batch 10  
**Date:** April 12, 2026
