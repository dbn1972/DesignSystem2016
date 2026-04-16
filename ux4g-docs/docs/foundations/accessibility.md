---
sidebar_position: 2
title: Accessibility
---

# Accessibility

UX4G targets WCAG 2.1 Level AA compliance across all components.

## Standards

| Standard | Level | Status |
|---|---|---|
| WCAG 2.1 | Level AA | ✅ All components |
| Section 508 | Compliant | ✅ |
| GIGW (India) | Compliant | ✅ |

## Built-in Features

Every UX4G component includes:

- **Keyboard navigation** — Tab, Enter, Space, Escape, Arrow keys
- **Screen reader support** — Proper ARIA roles, labels, and live regions
- **Focus management** — Visible focus rings (2px, offset 2px)
- **Color contrast** — Minimum 4.5:1 for text (WCAG 1.4.3)
- **Touch targets** — Minimum 44×44px (WCAG 2.5.5)
- **Reduced motion** — `motion-reduce:transition-none` on all animations

## Testing Accessibility

```bash
pnpm run test:a11y
```

## Keyboard Support Reference

| Key | Common Action |
|---|---|
| Tab | Move focus to next element |
| Shift+Tab | Move focus to previous element |
| Enter | Activate button, submit form |
| Space | Toggle checkbox, activate button |
| Escape | Close modal, drawer, popover |
| Arrow keys | Navigate within menus, tabs, radio groups |

## Screen Reader Testing

Test with:
- **NVDA** (Windows) — free
- **VoiceOver** (macOS) — built-in
- **JAWS** (Windows) — enterprise
