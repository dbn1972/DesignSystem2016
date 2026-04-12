# UX4G Core 10 Hardening Plan

This repo should harden the core 10 components before expanding breadth further.

Core 10:

1. Button
2. Input
3. Select
4. Checkbox
5. Radio
6. Field
7. Dialog
8. Tabs
9. Table
10. Autocomplete

## Policy

No new public components or major surface-area expansions should ship until the core 10 meet the exit criteria below across React, Angular, and Web Components.

## Exit Criteria

Every core component must meet all of these before it is considered stable:

- Canonical contract compliance
  - variant names, size names, state names, event names, and slots must match [COMPONENT_CONTRACT.md](/Users/debabratanayak_1/Documents/DesignSystem_211/src/app/COMPONENT_CONTRACT.md)
- Token compliance
  - no hardcoded brand/status values where UX4G tokens already exist
- Accessibility
  - correct semantics
  - keyboard support
  - visible focus
  - screen-reader labels and announcements
  - error/required/disabled behavior where relevant
- Documentation
  - package README examples use canonical APIs only
  - component stories cover default, variants, sizes, disabled, error, loading, and edge cases
- Testing
  - interaction tests
  - accessibility assertions
  - controlled and uncontrolled cases where applicable
- Cross-framework parity
  - React, Angular, and Web Components expose the same semantic contract even if implementation details differ

## Component Matrix

| Component | React files | Angular files | Web component files | Primary hardening work |
| --- | --- | --- | --- | --- |
| Button | `src/app/react-core-package/src/components/Button/*` | `src/app/angular-core-package/src/lib/button/*` | `src/app/web-components-package/src/components/button/*` | finalize one implementation path, align variants/events, disabled/loading semantics |
| Input | `src/app/react-core-package/src/components/Input/*` | `src/app/angular-core-package/src/lib/input/*` | `src/app/web-components-package/src/components/input/*` | field integration, error semantics, hint/error wiring, icon behavior |
| Select | `src/app/react-core-package/src/components/Select/*` | `src/app/angular-core-package/src/lib/select/*` | `src/app/web-components-package/src/components/select/*` | controlled value behavior, placeholder semantics, described-by/error handling |
| Checkbox | `src/app/react-core-package/src/components/Checkbox/*` | `src/app/angular-core-package/src/lib/checkbox/*` | `src/app/web-components-package/src/components/checkbox/*` | label association, indeterminate behavior, field integration |
| Radio | `src/app/react-core-package/src/components/Radio/*` | `src/app/angular-core-package/src/lib/radio/*` | `src/app/web-components-package/src/components/radio/*` | group semantics, keyboard behavior, error/required messaging |
| Field | `src/app/react-core-package/src/components/Field/*`, `Label/*`, `HintText/*`, `ErrorText/*` | `src/app/angular-core-package/src/lib/field/*`, `label/*`, `hint-text/*`, `error-text/*` | `src/app/web-components-package/src/components/field/*`, `label/*`, `hint-text/*`, `error-text/*` | automatic id/description wiring, required/invalid defaults, composition guidance |
| Dialog | `src/app/react-core-package/src/components/Dialog/*` | `src/app/angular-core-package/src/lib/dialog/*` | `src/app/web-components-package/src/components/dialog/*` | focus trap, unique ids, dismiss policy, modal semantics |
| Tabs | `src/app/react-core-package/src/components/Tabs/*` | `src/app/angular-core-package/src/lib/tabs/*` | `src/app/web-components-package/src/components/tabs/*` | keyboard navigation, selected state, tabpanel labeling, API parity |
| Table | `src/app/react-core-package/src/components/Table/*` | `src/app/angular-core-package/src/lib/table/*` | `src/app/web-components-package/src/components/table/*` | sortable header buttons, selection behavior, empty/loading states |
| Autocomplete | `src/app/react-core-package/src/components/Autocomplete/*` | `src/app/angular-core-package/src/lib/autocomplete/*` | `src/app/web-components-package/src/components/autocomplete/*` | combobox/listbox semantics, active descendant, async/empty/error states |

## Recommended Order

### Sprint 1

- Button
- Field
- Input
- Checkbox
- Radio

Why:
- these create the form baseline for most product teams
- they establish the contract and field-composition defaults used by later components

### Sprint 2

- Select
- Tabs
- Table

Why:
- these extend the interaction model but depend on the same contract vocabulary

### Sprint 3

- Dialog
- Autocomplete

Why:
- these are the highest-risk composite widgets and should be rebuilt against hardened primitives

## Current Priority Notes

### Already improving

- React `Field` composition has been upgraded to auto-wire ids, labels, hint text, error text, and described-by behavior.

### Still highest risk

- Dialog
- Table
- Autocomplete
- cross-framework drift in Web Components
- over-claimed maturity in package documentation

## Definition Of Done For The Core 10

The core 10 are ready to be labeled stable only when:

- each component has contract-compliant API names
- each component has stories and interaction tests
- package docs stop advertising broader “production-ready parity” beyond what has been hardened
- the team can recommend the core 10 as the default supported set for product teams
