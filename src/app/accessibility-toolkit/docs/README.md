# UX4G Accessibility Toolkit

A production-ready accessibility widget for Indian government websites and digital public services.

Drop it into any website — WordPress, Drupal, plain HTML, React, or Angular — and give users control over text size, contrast, spacing, animations, and more.

## What It Does

The toolkit adds a floating accessibility button to every page. When activated, it opens a settings panel where users can adjust:

- Text size, line height, letter spacing, word spacing
- Dyslexia-friendly font, left-align text
- High contrast, dark contrast, light contrast
- Invert colors, grayscale, desaturate, monochrome
- Highlight links and headings
- Larger cursor, hide images
- Reading guide, reading mask
- Pause animations
- Strong focus indicators, keyboard navigation
- Skip to content

Settings persist across page loads via localStorage.

## What It Does NOT Do

This toolkit provides user-facing accessibility controls. It does **not** make a website fully WCAG 2.1 compliant on its own. Full compliance requires proper semantic HTML, color contrast, keyboard navigation, screen reader testing, and content accessibility — all of which must be implemented by the host site.

## One-Line Install

```html
<script src="https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js" defer></script>
```

That's it. The toolkit auto-initializes with default settings.

## Documentation

| Guide | Audience |
|---|---|
| [Getting Started](./getting-started.md) | Everyone |
| [WordPress](./wordpress.md) | WordPress developers/admins |
| [Drupal](./drupal.md) | Drupal developers/admins |
| [Plain HTML](./html.md) | Static site developers |
| [React](./react.md) | React developers |
| [Angular](./angular.md) | Angular developers |
| [Configuration Reference](./configuration.md) | All developers |
| [API Reference](./api.md) | Advanced integrators |
| [Theming](./theming.md) | Design system teams |
| [Accessibility](./accessibility.md) | Accessibility reviewers |
| [Troubleshooting](./troubleshooting.md) | Support teams |
| [Versioning](./versioning.md) | Release managers |

## Architecture

```
@ux4g/a11y-core          Framework-independent engine
├── features.ts           Feature registry (22 features)
├── schema.ts             State machine (pure reducer)
├── persistence.ts        localStorage helpers
├── tokens.ts             Config contracts, labels, resolver
├── engine.ts             DOM style application
└── styles/               CSS (shared across all platforms)

@ux4g/a11y-react          React binding (context, hooks, components)
@ux4g/a11y-angular        Angular binding (service, signals, standalone components)
hosted/                   Browser bundle (script tag, auto-init)
```

## Supported Platforms

| Platform | Install Method |
|---|---|
| Plain HTML | Script tag |
| WordPress | `wp_enqueue_script` or paste in footer |
| Drupal | Library YAML or module |
| React | npm package (`@ux4g/a11y-react`) |
| Angular | npm package (`@ux4g/a11y-angular`) |
| Any CMS | Script tag |

## Keyboard Shortcut

`Alt + A` (Windows/Linux) or `⌥ A` (macOS) opens/closes the panel.

## License

MIT — Government of India, UX4G Design System Team
