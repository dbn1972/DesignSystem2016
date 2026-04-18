# Accessibility Guide

## Important Disclaimer

This toolkit provides user-facing accessibility controls. It does **not** make a website fully WCAG 2.1 compliant on its own.

Full accessibility compliance requires:
- Proper semantic HTML throughout the site
- Sufficient color contrast in the site's own design
- Keyboard navigability of all site features
- Screen reader compatibility of all content
- Proper form labels and error handling
- Accessible media (alt text, captions, transcripts)
- Regular accessibility audits and testing

The toolkit supplements these efforts by giving users additional control over their viewing experience.

## Features Provided

### Text & Readability
- Text size: 9 steps from 75% to 175%
- Line height: 5 steps from default to 2.4
- Letter spacing: 5 steps from default to 0.2em
- Word spacing: 5 steps from default to 0.4em (WCAG 1.4.12)
- Dyslexia-friendly font (OpenDyslexic)
- Left-align text override

### Contrast & Colors
- High contrast (1.5x)
- Dark contrast (invert + hue-rotate)
- Light contrast (brighten + reduce contrast)
- Invert colors
- Grayscale
- Reduced saturation
- Monochrome (single-hue)

### Visual Aids
- Highlight links (outline + underline)
- Highlight headings (dashed outline)
- Larger cursor (48px)
- Hide images (fade to 5% opacity)

### Navigation
- Strong focus indicator (3px outline + 6px shadow)
- Keyboard navigation (focus ring on all focused elements)

### Reading Assistance
- Reading guide (horizontal ruler following cursor)
- Reading mask (spotlight band around cursor)
- Pause animations (kills all CSS animations/transitions)

## Keyboard Interaction

| Key | Action |
|---|---|
| `Alt+A` / `⌥ A` | Toggle the settings panel |
| `Tab` | Move focus between controls (trapped inside panel when open) |
| `Shift+Tab` | Move focus backwards |
| `Escape` | Close the panel |
| `Space` / `Enter` | Activate buttons and toggles |

## Screen Reader Behavior

- The launcher button has `aria-label` and `aria-expanded`
- The panel has `role="dialog"` and `aria-modal="true"`
- All toggles use `role="switch"` with `aria-checked`
- Stepper values use `aria-live="polite"` for value announcements
- A live region announces panel open/close and individual setting changes
- Group headings use proper `<h3>` hierarchy inside the panel's `<h2>` title

## Focus Management

- Opening the panel moves focus to the close button
- Closing the panel restores focus to the element that triggered it
- Tab is trapped inside the panel (wraps from last to first element)
- Body scroll is locked while the panel is open

## Touch Targets

- Launcher button: 48×48px (3rem)
- Toggle switches: 44×24px visual, 44×44px touch area via `::after` pseudo-element
- Stepper buttons: 28×28px (1.75rem)
- Panel header buttons: 32×32px (2rem)

## Known Limitations

- The reading guide and reading mask are mouse/touch-dependent — they don't help keyboard-only users
- The larger cursor uses an inline SVG data URI which may not work in all browsers
- Dyslexia font requires network access to load OpenDyslexic from CDN (falls back to Comic Sans)
- Filter-based features (contrast, grayscale, etc.) may affect embedded iframes differently
- The toolkit cannot fix inaccessible content — it only provides user preference controls

## Host Site Responsibilities

The toolkit handles user preferences. The host site must still ensure:

1. All images have meaningful `alt` text
2. All form inputs have associated `<label>` elements
3. Color is not the only means of conveying information
4. The site is navigable by keyboard without the toolkit
5. Dynamic content changes are announced to screen readers
6. Video/audio content has captions and transcripts
7. The site passes automated accessibility testing (axe, Lighthouse)
8. The site has been tested with actual screen readers (NVDA, VoiceOver, JAWS)
