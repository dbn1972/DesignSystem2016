# Configuration Reference

Configuration can be provided via:

- `window.UX4G_A11Y_CONFIG` (script-tag installs)
- `UX4GA11y.init(config)` (manual init)
- `<A11yToolkit config={...}>` (React)
- `provideA11yToolkit(config)` (Angular)

All options are optional. Sensible defaults are used when omitted.

## Options

| Option | Type | Default | Description |
|---|---|---|---|
| `launcherPosition` | `'bottom-right'` \| `'bottom-left'` \| `'top-right'` \| `'top-left'` | `'bottom-right'` | Position of the floating launcher button |
| `panelPlacement` | `'drawer-right'` \| `'drawer-left'` \| `'modal'` | `'drawer-right'` | How the settings panel appears |
| `storageKey` | `string` | `'ux4g-a11y'` | localStorage key namespace. Use a unique key per site to avoid conflicts |
| `skipToContentSelector` | `string` | `'#main-content'` | CSS selector for the skip-to-content target |
| `respectReducedMotion` | `boolean` | `true` | Auto-enable "Pause Animations" if user's OS prefers reduced motion |
| `defaultOpen` | `boolean` | `false` | Whether the panel starts open on first load |
| `enabledFeatures` | `string[]` | all features | Whitelist of features to show. Overrides the default (all) |
| `disabledFeatures` | `string[]` | `[]` | Features to hide from the panel |
| `labels` | `Partial<A11yLabels>` | English | Override any label for i18n. See Labels section below |
| `tokens` | `Partial<A11yTokenOverrides>` | UX4G defaults | Override visual tokens. See Tokens section below |
| `onSettingChange` | `(key, value, state) => void` | — | Callback fired on every setting change. Useful for analytics |

## Feature Keys

These are the valid values for `enabledFeatures` and `disabledFeatures`:

| Key | Group | Type | Description |
|---|---|---|---|
| `fontSize` | text | stepper | Text size adjustment (-3 to +5) |
| `lineHeight` | text | stepper | Line height boost (0–4) |
| `letterSpacing` | text | stepper | Letter spacing boost (0–4) |
| `wordSpacing` | text | stepper | Word spacing boost (0–4) |
| `dyslexiaFont` | text | toggle | OpenDyslexic font |
| `leftAlign` | text | toggle | Force left-align all text |
| `highContrast` | contrast | toggle | Increase contrast |
| `darkContrast` | contrast | toggle | Dark mode via invert+hue-rotate |
| `lightContrast` | contrast | toggle | Brighten + reduce contrast |
| `invertColors` | contrast | toggle | Invert all colors |
| `grayscale` | contrast | toggle | Remove all color |
| `desaturate` | contrast | toggle | Reduce color saturation |
| `monochrome` | contrast | toggle | Single-hue color scheme |
| `highlightLinks` | visual | toggle | Outline all links |
| `highlightHeadings` | visual | toggle | Outline all headings |
| `largerCursor` | visual | toggle | Enlarged mouse cursor |
| `hideImages` | visual | toggle | Fade out images |
| `strongFocus` | navigation | toggle | Enhanced focus indicators |
| `keyboardNav` | navigation | toggle | Show focus on all focused elements |
| `readingGuide` | reading | toggle | Horizontal line following cursor |
| `readingMask` | reading | toggle | Spotlight mask around cursor |
| `pauseAnimations` | reading | toggle | Stop all animations/transitions |

## Labels

Override any label for localization:

```javascript
{
  labels: {
    panelTitle: 'Accessibility Settings',
    launcherLabel: 'Open accessibility settings',
    closePanel: 'Close accessibility settings',
    resetAll: 'Reset all settings',
    textGroup: 'Text & Readability',
    contrastGroup: 'Contrast & Colors',
    visualGroup: 'Visual Aids',
    navigationGroup: 'Navigation',
    readingGroup: 'Reading Assistance',
    fontSize: 'Text Size',
    fontSizeIncrease: 'Increase text size',
    fontSizeDecrease: 'Decrease text size',
    fontSizeReset: 'Reset text size',
    lineHeight: 'Line Height',
    letterSpacing: 'Letter Spacing',
    wordSpacing: 'Word Spacing',
    dyslexiaFont: 'Dyslexia-Friendly Font',
    leftAlign: 'Left-Align Text',
    highContrast: 'High Contrast',
    darkContrast: 'Dark Contrast',
    lightContrast: 'Light Contrast',
    invertColors: 'Invert Colors',
    grayscale: 'Grayscale',
    desaturate: 'Reduced Saturation',
    monochrome: 'Monochrome',
    highlightLinks: 'Highlight Links',
    highlightHeadings: 'Highlight Headings',
    largerCursor: 'Larger Cursor',
    readingGuide: 'Reading Guide',
    readingMask: 'Reading Mask',
    pauseAnimations: 'Pause Animations',
    hideImages: 'Hide Images',
    strongFocus: 'Strong Focus Indicator',
    keyboardNav: 'Keyboard Navigation',
    skipToContent: 'Skip to content',
  }
}
```

Hindi translations are included in the package as `HINDI_LABELS`.

## Token Overrides

```javascript
{
  tokens: {
    panelWidth: '22rem',
    zIndex: 1500,
    borderRadius: '0.75rem',
    shadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    accentColor: '#005196',
    fontFamily: 'inherit',
  }
}
```
