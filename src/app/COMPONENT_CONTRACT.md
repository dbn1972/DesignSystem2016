# UX4G Component Contract

This document defines the canonical public contract for UX4G components across React, Angular, and Web Components.

The goal is to make components learn-once, use-consistently, and hard to misuse.

Implementation priority is governed by [CORE_10_HARDENING_PLAN.md](/Users/debabratanayak_1/Documents/DesignSystem_211/src/app/CORE_10_HARDENING_PLAN.md): Button, Input, Select, Checkbox, Radio, Field, Dialog, Tabs, Table, and Autocomplete must be hardened before the system expands breadth further.

## Core Vocabulary

### Interactive variants

Use these names for interactive/action components:

- `primary`
- `secondary`
- `tertiary`
- `ghost`
- `destructive`

Rules:
- `danger` is deprecated. Use `destructive`.
- `outline` is deprecated. Use `secondary` unless the component has a documented surface-specific style token.
- Do not invent component-specific action variants.

### Feedback variants

Use these names for status and messaging components:

- `neutral`
- `info`
- `success`
- `warning`
- `error`

Rules:
- `danger` is deprecated. Use `error`.
- `primary` and `secondary` are not valid feedback variants.

### Sizes

Use these sizes unless a component has a formally documented exception:

- `sm`
- `md`
- `lg`

Rules:
- `md` is the default.
- Additional sizes such as `xs` or `xl` are component-specific extensions and must be documented in that component API.

## States

### Shared state names

Use these names consistently across packages:

- `disabled`
- `loading`
- `readonly`
- `required`
- `invalid`
- `selected`
- `checked`
- `open`
- `active`

### State rules

- Use boolean props/attributes for boolean states.
- Visual state must follow semantic state. Example: error styling should come from `invalid` or documented validation props, not a visual-only flag.
- Components must support disabled state without emitting action events.
- Components with asynchronous work should use `loading` and suppress duplicate actions.

## Events

Event semantics are standardized, while each framework uses its native API shape.

| Semantic event | React prop | Angular output | Web component event |
| --- | --- | --- | --- |
| activation | `onClick` or documented `onAction` | `clicked` or documented `action` | `ux4g-activate` |
| value change | `onChange` | `valueChange` | `ux4g-change` |
| open state change | `onOpenChange` | `openChange` | `ux4g-open-change` |
| selection change | `onSelectionChange` | `selectionChange` | `ux4g-selection-change` |
| dismiss/close | `onClose` | `closed` | `ux4g-dismiss` |
| submit/commit | `onSubmit` or `onValueCommit` | `submitted` or `valueCommitted` | `ux4g-submit` or `ux4g-value-commit` |

Rules:
- One semantic event per user intent.
- Do not create component-specific event names when a shared semantic event exists.
- Web components may emit legacy aliases during migration, but the canonical names above must be documented and preferred.

## Slots And Children

### Shared slot names

Use these slot or child-region names where relevant:

- `default`
- `label`
- `description`
- `hint`
- `error`
- `icon-leading`
- `icon-trailing`
- `actions`
- `header`
- `footer`
- `empty`

Rules:
- Prefer shared slot names over component-specific names like `icon-before`.
- If a component exposes slots, they must be documented in every package.
- If React uses composition instead of slots, the same conceptual regions should still be preserved in prop names or child APIs.

## Accessibility Behavior

### Required defaults

- Every interactive control must expose an accessible name.
- Focus must be visible in all themes.
- Disabled controls must not be focusable unless platform semantics require it.
- Field components must connect label, hint, and error content with `id` and `aria-describedby`.
- Invalid fields must set `aria-invalid="true"` when in error.
- Dismissible feedback components must provide an accessible close label.
- Dialogs, drawers, popovers, menus, tabs, tables, and comboboxes must follow established WAI-ARIA patterns.

### Overlay requirements

- Unique ids for title and description wiring
- Escape support unless intentionally modal-blocking
- Focus management on open and close
- No duplicate static ids across instances

## Framework Mapping

### React

- Canonical names use props and callback props.
- Prefer `children` plus documented subregions over implicit layout behavior.
- New shared types must come from `src/types/common.ts`.

### Angular

- Canonical names use `@Input()` and `@Output()`.
- Outputs should follow the semantic event table above.
- New shared types must come from `src/types/common.types.ts`.

### Web Components

- Canonical names use kebab-case attributes and `ux4g-*` custom events.
- Public attributes should normalize deprecated aliases where needed.
- Shared runtime normalization should come from `src/component-contract.ts`.

## Migration Rules

- New components must conform to this contract before export.
- Existing components may support legacy aliases temporarily, but docs must point to canonical names.
- Deprecated names must be normalized internally and tracked for removal in a later cleanup pass.
