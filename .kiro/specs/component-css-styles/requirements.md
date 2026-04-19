# Requirements Document

## Introduction

The UX4G Government of India Design System Platform has 87 React components, but only 28 have corresponding CSS files in the styles-package. The remaining 59 components reference `ux4g-*` CSS classes in their JSX but no CSS definitions exist, causing them to render as unstyled HTML. This is the primary blocker for production use of the design system.

This feature covers creating CSS files for all 59 missing components following the established 3-layer architecture (base → utilities → components), consuming design tokens via CSS custom properties with fallbacks, and meeting WCAG 2.1 AA accessibility requirements. Each CSS file must define base component classes, variant classes, state classes, size classes, dark mode support, focus indicators, and reduced-motion support.

## Glossary

- **Styles_Package**: The `@ux4g/styles` CSS package at `src/app/styles-package/` that provides foundational CSS for the design system
- **Component_CSS_File**: A single `.css` file in `src/app/styles-package/src/components/` defining all visual styles for one component
- **Design_Token**: A CSS custom property with `--ux4g-*` prefix defined in the tokens-package, representing a single design decision (color, spacing, typography, etc.)
- **Token_Fallback**: A hardcoded CSS value provided as the second argument to `var()` ensuring the component renders correctly if tokens are not loaded
- **Base_Class**: The root CSS class for a component using the pattern `.ux4g-{component}`
- **Variant_Class**: A modifier CSS class using the pattern `.ux4g-{component}-{variant}` (e.g., primary, secondary, destructive)
- **State_Class**: A modifier CSS class using the pattern `.ux4g-{component}-{state}` (e.g., disabled, error, loading)
- **Size_Class**: A modifier CSS class using the pattern `.ux4g-{component}-{size}` (e.g., sm, md, lg)
- **Components_Index**: The `src/app/styles-package/src/components/index.css` file that imports all component CSS files
- **Class_Contract**: The set of `ux4g-*` CSS class names referenced in a React component's TSX file that the corresponding CSS file must define
- **Focus_Indicator**: A visible outline or ring applied on `:focus-visible` to support keyboard navigation, meeting WCAG 2.1 AA 3:1 contrast ratio
- **Touch_Target**: The minimum interactive area of 44×44 CSS pixels required by WCAG 2.1 AA for pointer inputs
- **Reduced_Motion**: The `prefers-reduced-motion: reduce` media query that disables or minimizes CSS animations and transitions for users who request it

## Requirements

### Requirement 1: CSS File Creation for All Missing Components

**User Story:** As a developer consuming the UX4G design system, I want every React component to have a corresponding CSS file in the styles-package, so that components render with correct visual styling when imported.

#### Acceptance Criteria

1. THE Styles_Package SHALL contain one Component_CSS_File for each of the 59 missing components: Accordion, Autocomplete, ApplicationTracker, AspectRatio, BackToTop, CalendarScheduler, Captcha, Center, ChartLibrary, Chatbot, CodeBlock, Container, DataGrid, DatePicker, DescriptionList, DigitalSignature, DocumentViewer, Drawer, Dropdown, EmptyState, ErrorText, FeedbackRatingWidget, Field, FileUpload, Flex, Footer, FormBuilder, Grid, Header, HintText, Label, LanguageSelector, List, MapLocationPicker, Modal, NavigationMenu, Notification, OTPInput, PaymentGateway, Popover, QRCode, Rating, RichTextEditor, SearchBar, Section, SegmentedControl, ShowHide, Skeleton, Slider, Snackbar, Spacer, Stack, Statistic, Stepper, Timeline, TreeView, VideoPlayer, AadhaarInput, PANCardInput, AddressAutocompleteIndia.
2. WHEN a new Component_CSS_File is created, THE Components_Index SHALL import the new file via an `@import` statement.
3. THE Styles_Package SHALL contain a total of 87 Component_CSS_Files after all missing files are created (28 existing + 59 new).

### Requirement 2: Class Contract Alignment

**User Story:** As a developer, I want the CSS file for each component to define every `ux4g-*` class referenced in the component's TSX file, so that no class is left undefined.

#### Acceptance Criteria

1. WHEN a React component references a CSS class matching the pattern `ux4g-{component}-*`, THE corresponding Component_CSS_File SHALL define that class with at least one CSS property declaration.
2. THE Component_CSS_File SHALL define the Base_Class `.ux4g-{component}` with layout, display, and box-model properties appropriate to the component's role.
3. IF a React component references a class that is not defined in the corresponding Component_CSS_File, THEN THE build verification SHALL report the missing class as an error.

### Requirement 3: Base Component Styling

**User Story:** As a developer, I want each component's base class to establish correct layout, spacing, and typography defaults, so that components have a usable visual baseline.

#### Acceptance Criteria

1. THE Base_Class SHALL define `display` property appropriate to the component's layout role (e.g., `inline-flex` for inline interactive elements, `flex` for container components, `block` for block-level components).
2. THE Base_Class SHALL define `font-family`, `font-size`, and `line-height` using Design_Tokens with Token_Fallbacks.
3. THE Base_Class SHALL define `padding` and `margin` using spacing Design_Tokens with Token_Fallbacks.
4. THE Base_Class SHALL define `border-radius` using the `--ux4g-radius-*` Design_Token with a Token_Fallback.
5. THE Base_Class SHALL define `color` and `background-color` using semantic color Design_Tokens with Token_Fallbacks.

### Requirement 4: Variant Classes

**User Story:** As a developer, I want variant classes for components that support visual variants, so that I can apply different visual treatments (primary, secondary, destructive, etc.) via CSS classes.

#### Acceptance Criteria

1. WHEN a React component supports a `variant` prop, THE Component_CSS_File SHALL define a Variant_Class for each variant value using the pattern `.ux4g-{component}-{variant}`.
2. THE Variant_Class SHALL override only the visual properties that differ from the Base_Class (color, background-color, border-color).
3. WHEN a component supports interactive variants (primary, secondary, tertiary, ghost, destructive), THE Variant_Class SHALL define `:hover` and `:active` pseudo-class styles with visually distinct color changes.
4. WHEN a component supports feedback variants (info, success, warning, error), THE Variant_Class SHALL use the corresponding semantic color Design_Tokens (`--ux4g-color-info`, `--ux4g-color-success`, `--ux4g-color-warning`, `--ux4g-color-error`).

### Requirement 5: State Classes

**User Story:** As a developer, I want state classes for interactive components, so that disabled, error, loading, and active states are visually communicated to users.

#### Acceptance Criteria

1. WHEN a React component supports a `disabled` prop, THE Component_CSS_File SHALL define a State_Class `.ux4g-{component}-disabled` that sets `opacity` to a reduced value, `cursor` to `not-allowed`, and `pointer-events` to `none`.
2. WHEN a React component supports an `error` prop, THE Component_CSS_File SHALL define a State_Class `.ux4g-{component}-error` that applies the `--ux4g-color-error` Design_Token to `border-color` and uses `--ux4g-color-surface-error` for background.
3. WHEN a React component supports a `loading` prop, THE Component_CSS_File SHALL define a State_Class `.ux4g-{component}-loading` that sets `pointer-events` to `none` and applies a loading animation.
4. THE Component_CSS_File SHALL define `:hover` pseudo-class styles for all interactive Base_Classes with a visually distinct background or border color change.
5. THE Component_CSS_File SHALL define `:active` pseudo-class styles for all interactive Base_Classes.

### Requirement 6: Size Classes

**User Story:** As a developer, I want size classes (sm, md, lg) for components that support size variants, so that I can control component dimensions consistently.

#### Acceptance Criteria

1. WHEN a React component supports a `size` prop, THE Component_CSS_File SHALL define Size_Classes `.ux4g-{component}-sm`, `.ux4g-{component}-md`, and `.ux4g-{component}-lg`.
2. THE Size_Class `sm` SHALL define `min-height` of 32px, reduced `padding`, and `font-size` using `--ux4g-font-size-xs` with a Token_Fallback of `0.75rem`.
3. THE Size_Class `md` SHALL define `min-height` of 40px and `padding` using `--ux4g-spacing-4` with a Token_Fallback of `1rem`.
4. THE Size_Class `lg` SHALL define `min-height` of 48px, increased `padding`, and `font-size` using `--ux4g-font-size-base` with a Token_Fallback of `1rem`.
5. THE Size_Class for interactive components SHALL maintain a minimum Touch_Target of 44×44 CSS pixels for the `sm` size.

### Requirement 7: Design Token Consumption

**User Story:** As a theme author, I want all component CSS to consume design tokens via CSS custom properties with hardcoded fallbacks, so that components are themeable and render correctly without the tokens package loaded.

#### Acceptance Criteria

1. THE Component_CSS_File SHALL reference color values exclusively through `--ux4g-color-*` Design_Tokens.
2. THE Component_CSS_File SHALL reference spacing values exclusively through `--ux4g-spacing-*` Design_Tokens.
3. THE Component_CSS_File SHALL reference typography values exclusively through `--ux4g-font-*` and `--ux4g-line-height-*` Design_Tokens.
4. THE Component_CSS_File SHALL reference border-radius values exclusively through `--ux4g-radius-*` Design_Tokens.
5. THE Component_CSS_File SHALL reference shadow values exclusively through `--ux4g-shadow-*` Design_Tokens.
6. THE Component_CSS_File SHALL reference transition durations through `--ux4g-motion-duration-*` Design_Tokens.
7. WHEN a Design_Token is referenced, THE `var()` function SHALL include a hardcoded Token_Fallback as the second argument (e.g., `var(--ux4g-spacing-4, 1rem)`).

### Requirement 8: Dark Mode Support

**User Story:** As a user who prefers dark mode, I want components to adapt their colors when dark mode is active, so that the interface is comfortable to use in low-light environments.

#### Acceptance Criteria

1. THE Component_CSS_File SHALL define color properties using semantic Design_Tokens that resolve to appropriate values in both light and dark contexts (e.g., `--ux4g-color-surface-primary`, `--ux4g-color-text-primary`).
2. WHEN a component requires dark-mode-specific overrides beyond token resolution, THE Component_CSS_File SHALL scope those overrides under a `[data-theme="dark"]` selector or `@media (prefers-color-scheme: dark)` query.
3. THE Component_CSS_File SHALL maintain WCAG 2.1 AA contrast ratios in both light and dark modes.

### Requirement 9: Focus Indicators for Keyboard Navigation

**User Story:** As a keyboard user, I want visible focus indicators on all interactive components, so that I can see which element is currently focused.

#### Acceptance Criteria

1. THE Component_CSS_File SHALL define a `:focus-visible` pseudo-class rule for every interactive element (buttons, links, inputs, controls).
2. THE Focus_Indicator SHALL use `outline` with a width of 2px and the `--ux4g-color-focus` Design_Token with a Token_Fallback.
3. THE Focus_Indicator SHALL have an `outline-offset` of 2px to provide visual separation from the element border.
4. THE Focus_Indicator SHALL meet a minimum contrast ratio of 3:1 against adjacent colors per WCAG 2.1 AA non-text contrast requirements.
5. THE Component_CSS_File SHALL NOT define `:focus` styles that override or remove the `:focus-visible` indicator.

### Requirement 10: WCAG 2.1 AA Accessibility Compliance

**User Story:** As a government service user with accessibility needs, I want all components to meet WCAG 2.1 AA standards, so that I can use digital services regardless of ability.

#### Acceptance Criteria

1. THE Component_CSS_File SHALL define text `color` and `background-color` combinations that achieve a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (18px+ or 14px+ bold).
2. THE Component_CSS_File SHALL define UI component boundaries (borders, outlines) with a minimum contrast ratio of 3:1 against adjacent colors.
3. THE Component_CSS_File SHALL define interactive elements with a minimum Touch_Target of 44×44 CSS pixels.
4. THE Component_CSS_File SHALL NOT use `color` as the sole means of conveying information (e.g., error states must include border or icon changes in addition to color).
5. THE Component_CSS_File SHALL NOT use `display: none` or `visibility: hidden` on content that should be available to screen readers; instead, the `.sr-only` pattern SHALL be used.

### Requirement 11: Reduced Motion Support

**User Story:** As a user with vestibular disorders, I want animations and transitions to be minimized when I enable reduced motion in my operating system, so that the interface does not cause discomfort.

#### Acceptance Criteria

1. WHEN a Component_CSS_File defines `transition` or `animation` properties, THE file SHALL include a `@media (prefers-reduced-motion: reduce)` query that sets `transition-duration` to `0.01ms` and `animation-duration` to `0.01ms`.
2. THE reduced-motion media query SHALL apply to all animated properties within the Component_CSS_File.
3. THE Component_CSS_File SHALL NOT define animations that cannot be disabled via the `prefers-reduced-motion` media query.

### Requirement 12: CSS Naming Convention Compliance

**User Story:** As a developer, I want all CSS classes to follow the established `ux4g-` prefix naming convention, so that there are no naming conflicts with other CSS frameworks or application styles.

#### Acceptance Criteria

1. THE Component_CSS_File SHALL use the `ux4g-` prefix for all CSS class selectors.
2. THE Component_CSS_File SHALL use lowercase kebab-case for all class names (e.g., `.ux4g-file-upload-area`, not `.ux4g-fileUploadArea`).
3. THE Component_CSS_File SHALL follow the naming patterns: `.ux4g-{component}` for base, `.ux4g-{component}-{variant}` for variants, `.ux4g-{component}-{state}` for states, `.ux4g-{component}-{size}` for sizes.
4. THE Component_CSS_File SHALL use sub-element naming with the pattern `.ux4g-{component}-{element}` (e.g., `.ux4g-drawer-header`, `.ux4g-drawer-body`, `.ux4g-drawer-footer`).

### Requirement 13: Component Category — Layout Primitives

**User Story:** As a developer, I want CSS for layout primitive components (Container, Flex, Grid, Stack, Center, Spacer, Section, AspectRatio), so that I can compose page layouts using the design system's spacing and sizing tokens.

#### Acceptance Criteria

1. THE Component_CSS_File for Container SHALL define `max-width`, `margin-inline: auto`, and responsive `padding` using Design_Tokens.
2. THE Component_CSS_File for Flex SHALL define `display: flex` with configurable `flex-direction`, `align-items`, `justify-content`, `gap`, and `flex-wrap` via modifier classes.
3. THE Component_CSS_File for Grid SHALL define `display: grid` with configurable `grid-template-columns`, `gap`, and responsive column count via modifier classes.
4. THE Component_CSS_File for Stack SHALL define `display: flex` with `flex-direction` toggled between `column` (vertical) and `row` (horizontal) via modifier classes, and `gap` using spacing Design_Tokens.
5. THE Component_CSS_File for Center SHALL define `display: flex` with `align-items: center` and `justify-content: center`.
6. THE Component_CSS_File for Spacer SHALL define configurable `height` and `width` using spacing Design_Tokens.
7. THE Component_CSS_File for AspectRatio SHALL define `aspect-ratio` CSS property with common ratio presets (1/1, 4/3, 16/9).

### Requirement 14: Component Category — Overlay and Panel Components

**User Story:** As a developer, I want CSS for overlay components (Modal, Drawer, Popover, Dropdown, Notification, Snackbar), so that they display correctly with proper layering, backdrop, and animation.

#### Acceptance Criteria

1. THE Component_CSS_File for Modal SHALL define a fixed-position overlay with backdrop, centered content panel, and `z-index` using `--ux4g-z-modal` Design_Token.
2. THE Component_CSS_File for Drawer SHALL define a fixed-position side panel with placement variants (left, right, top, bottom), backdrop, and slide-in transition.
3. THE Component_CSS_File for Popover SHALL define an absolutely-positioned floating panel with `z-index`, `box-shadow`, and `border-radius` using Design_Tokens.
4. THE Component_CSS_File for Dropdown SHALL define an absolutely-positioned menu panel with `z-index`, `max-height` with overflow scrolling, and item hover/focus styles.
5. THE Component_CSS_File for Notification SHALL define a fixed-position container with stacking support and entry/exit transitions.
6. THE Component_CSS_File for Snackbar SHALL define a fixed-position bottom-aligned container with auto-dismiss animation support.

### Requirement 15: Component Category — Form Components

**User Story:** As a developer, I want CSS for form-related components (Field, Label, HintText, ErrorText, FileUpload, OTPInput, Autocomplete, DatePicker, Slider, SearchBar, FormBuilder), so that form interfaces are visually consistent and accessible.

#### Acceptance Criteria

1. THE Component_CSS_File for Field SHALL define a wrapper with vertical layout, consistent spacing between label, input, hint, and error elements.
2. THE Component_CSS_File for Label SHALL define `font-weight`, `font-size`, `color`, and a required-indicator style using `--ux4g-color-error` Design_Token.
3. THE Component_CSS_File for HintText SHALL define `font-size` using `--ux4g-font-size-sm`, `color` using `--ux4g-color-text-secondary`, and `margin-top` spacing.
4. THE Component_CSS_File for ErrorText SHALL define `font-size` using `--ux4g-font-size-sm`, `color` using `--ux4g-color-error`, and an error icon or indicator.
5. THE Component_CSS_File for FileUpload SHALL define a dashed-border drop zone, drag-active state with highlighted border, file list items, and remove button styles.
6. THE Component_CSS_File for OTPInput SHALL define a row of fixed-width single-character input boxes with consistent spacing and center-aligned text.
7. THE Component_CSS_File for Autocomplete SHALL define an input with attached dropdown suggestion list, highlighted active suggestion, and loading state.
8. THE Component_CSS_File for DatePicker SHALL define a calendar grid layout, day cell styles, selected/today/range states, and navigation header.
9. THE Component_CSS_File for Slider SHALL define a track, thumb, filled range, and label with size variants.
10. THE Component_CSS_File for SearchBar SHALL define an input with integrated search icon and optional clear button.

### Requirement 16: Component Category — Data Display Components

**User Story:** As a developer, I want CSS for data display components (Accordion, DataGrid, DescriptionList, List, Statistic, Timeline, TreeView, CodeBlock, Rating, Skeleton, EmptyState, QRCode), so that data is presented clearly and consistently.

#### Acceptance Criteria

1. THE Component_CSS_File for Accordion SHALL define item borders, header with chevron indicator, expand/collapse content transition, and open/disabled states.
2. THE Component_CSS_File for DataGrid SHALL define a table-like layout with header row, sortable column indicators, row hover/selection states, and pagination area.
3. THE Component_CSS_File for DescriptionList SHALL define term-description pairs with consistent spacing and optional horizontal layout.
4. THE Component_CSS_File for List SHALL define ordered and unordered list styles with consistent item spacing, bullet/number styling, and nested list indentation.
5. THE Component_CSS_File for Statistic SHALL define a value display with label, optional trend indicator, and size variants.
6. THE Component_CSS_File for Timeline SHALL define a vertical line with event nodes, content panels, and alternating layout support.
7. THE Component_CSS_File for TreeView SHALL define nested indentation, expand/collapse icons, and selected/focused node states.
8. THE Component_CSS_File for CodeBlock SHALL define a monospace font container with syntax-area background, line numbers, and copy-button positioning.
9. THE Component_CSS_File for Rating SHALL define star/icon items with filled, half-filled, and empty states, hover preview, and size variants.
10. THE Component_CSS_File for Skeleton SHALL define a pulse animation placeholder with text, circular, rectangular, and rounded shape variants.
11. THE Component_CSS_File for EmptyState SHALL define a centered layout with illustration area, heading, description, and action button placement.
12. THE Component_CSS_File for QRCode SHALL define a centered container with configurable size and optional label.

### Requirement 17: Component Category — Navigation Components

**User Story:** As a developer, I want CSS for navigation components (Header, Footer, NavigationMenu, BackToTop, Stepper, LanguageSelector, SegmentedControl, ShowHide), so that users can navigate government services consistently.

#### Acceptance Criteria

1. THE Component_CSS_File for Header SHALL define a sticky top bar with government tricolor stripe, logo area, navigation links, and responsive collapse behavior.
2. THE Component_CSS_File for Footer SHALL define a multi-column layout with link sections, government branding, and bottom bar.
3. THE Component_CSS_File for NavigationMenu SHALL define a horizontal/vertical menu with nested submenu support, active link indicator, and hover/focus states.
4. THE Component_CSS_File for BackToTop SHALL define a fixed-position circular button in the bottom-right corner with show/hide transition and hover state.
5. THE Component_CSS_File for Stepper SHALL define horizontal and vertical orientations with step indicators (number/check), connector lines, and process/finish/waiting/error status styles.
6. THE Component_CSS_File for LanguageSelector SHALL define a dropdown trigger with current language display and language option list.
7. THE Component_CSS_File for SegmentedControl SHALL define a pill-shaped container with segment buttons, active segment indicator, and transition between segments.
8. THE Component_CSS_File for ShowHide SHALL define a toggle trigger with expand/collapse indicator and content area with transition.

### Requirement 18: Component Category — India-Specific Government Components

**User Story:** As a developer building Indian government services, I want CSS for India-specific components (AadhaarInput, PANCardInput, AddressAutocompleteIndia, Captcha, DigitalSignature, PaymentGateway, ApplicationTracker, MapLocationPicker), so that government-specific UI patterns are styled consistently.

#### Acceptance Criteria

1. THE Component_CSS_File for AadhaarInput SHALL define a formatted input field with `letter-spacing` for the XXXX XXXX XXXX pattern, monospace `font-family`, label, hint, and error styles.
2. THE Component_CSS_File for PANCardInput SHALL define a formatted input field with uppercase `text-transform`, monospace `font-family`, and validation state styles.
3. THE Component_CSS_File for AddressAutocompleteIndia SHALL define an input with attached suggestion dropdown, pin code field, and state/district display.
4. THE Component_CSS_File for Captcha SHALL define a challenge display area, input field, refresh button, and audio alternative button.
5. THE Component_CSS_File for DigitalSignature SHALL define a signature pad area with border, clear button, and upload alternative.
6. THE Component_CSS_File for PaymentGateway SHALL define a payment method selector, amount display, and form field layout.
7. THE Component_CSS_File for ApplicationTracker SHALL define a status timeline with step indicators, current status highlight, and detail panel.
8. THE Component_CSS_File for MapLocationPicker SHALL define a map container with fixed aspect ratio, pin indicator, and address display area.

### Requirement 19: Component Category — Feedback and Communication Components

**User Story:** As a developer, I want CSS for feedback and communication components (FeedbackRatingWidget, Chatbot, RichTextEditor, DocumentViewer, VideoPlayer, CalendarScheduler, ChartLibrary), so that interactive content components are styled consistently.

#### Acceptance Criteria

1. THE Component_CSS_File for FeedbackRatingWidget SHALL define a rating scale (stars or emoji), optional comment textarea, and submit button layout.
2. THE Component_CSS_File for Chatbot SHALL define a floating chat window with message bubbles (user/bot differentiated), input area, and header with minimize/close controls.
3. THE Component_CSS_File for RichTextEditor SHALL define a toolbar with button groups, editable content area with border, and formatting state indicators.
4. THE Component_CSS_File for DocumentViewer SHALL define a document display area with toolbar (zoom, page navigation), and loading state.
5. THE Component_CSS_File for VideoPlayer SHALL define a video container with aspect ratio, control bar, play/pause button, progress bar, and fullscreen toggle.
6. THE Component_CSS_File for CalendarScheduler SHALL define a month/week/day grid layout, event blocks with color coding, and navigation header.
7. THE Component_CSS_File for ChartLibrary SHALL define a chart container with responsive sizing, legend area, and tooltip styles.

### Requirement 20: CSS File Structure and Documentation

**User Story:** As a maintainer of the styles-package, I want each CSS file to follow a consistent internal structure with documentation comments, so that the codebase is maintainable and self-documenting.

#### Acceptance Criteria

1. THE Component_CSS_File SHALL begin with a block comment containing the component name, a one-line description, and alignment note referencing the React component class contract.
2. THE Component_CSS_File SHALL organize rules in the order: base class, sub-element classes, variant classes, state classes, size classes, pseudo-class states, reduced-motion query.
3. THE Component_CSS_File SHALL use CSS nesting (PostCSS nesting syntax) for pseudo-classes and media queries within a component scope.
4. THE Component_CSS_File SHALL contain no hardcoded color, spacing, or typography values outside of Token_Fallback positions.
