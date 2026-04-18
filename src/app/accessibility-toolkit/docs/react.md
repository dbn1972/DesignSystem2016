# React Implementation Guide

## When to Use Which Approach

| Approach | Best For |
|---|---|
| `@ux4g/a11y-react` package | React apps with build systems (Vite, Next.js, CRA) |
| Hosted script tag | React apps where you can't modify the build |

## Option A: React Package (Recommended)

### Install

```bash
npm install @ux4g/a11y-core @ux4g/a11y-react
```

### Import CSS

```tsx
// main.tsx or App.tsx
import '@ux4g/a11y-core/styles/a11y-global.css';
import '@ux4g/a11y-core/styles/a11y-panel.css';
```

### Wrap Your App

```tsx
// App.tsx
import { A11yToolkit } from '@ux4g/a11y-react';

function App() {
  return (
    <A11yToolkit config={{
      launcherPosition: 'bottom-right',
      storageKey: 'my-app-a11y',
      skipToContentSelector: '#main-content',
      respectReducedMotion: true,
    }}>
      <YourApp />
    </A11yToolkit>
  );
}
```

### Use the Hook (Optional)

```tsx
import { useA11y } from '@ux4g/a11y-react';

function MyComponent() {
  const { fontSize, toggle, resetAll, panelOpen, openPanel } = useA11y();

  return (
    <div>
      <p>Current font size step: {fontSize}</p>
      <button onClick={() => toggle('highContrast')}>Toggle High Contrast</button>
      <button onClick={resetAll}>Reset All</button>
    </div>
  );
}
```

### Use the Config Hook

```tsx
import { useA11yConfig } from '@ux4g/a11y-react';

function SettingsInfo() {
  const { labels, enabledFeatures } = useA11yConfig();
  return <p>{enabledFeatures.length} features enabled</p>;
}
```

## Option B: Hosted Script in React

If you can't install packages, add the script to `public/index.html`:

```html
<script src="https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js" defer></script>
```

The toolkit will mount alongside your React app. It operates on the DOM directly and doesn't conflict with React's virtual DOM.

## Next.js / SSR Considerations

The toolkit uses `document` and `window` APIs. In SSR environments:

- The `<A11yToolkit>` component guards all browser APIs behind `useEffect`
- No server-side rendering of the toolkit UI occurs
- Hydration is safe — the toolkit mounts client-side only
- For Next.js App Router, import with `'use client'` directive if needed

## Route Navigation

The toolkit is mounted at the app root level (wrapping the router), so it persists across route changes. State is stored in React context + localStorage, not in the URL.

## Analytics Callback

```tsx
<A11yToolkit config={{
  onSettingChange: (key, value, state) => {
    analytics.track('a11y_setting_changed', { key, value });
  },
}}>
```

## Hindi Labels

```tsx
import { HINDI_LABELS } from '@ux4g/a11y-react';

<A11yToolkit config={{ labels: HINDI_LABELS }}>
```

## Testing Checklist

- [ ] Launcher renders on all routes
- [ ] Panel opens/closes correctly
- [ ] Settings persist after page refresh
- [ ] Settings persist across route navigation
- [ ] No React hydration warnings in console
- [ ] `useA11y()` hook returns current state
- [ ] Reset clears all settings
- [ ] Alt+A keyboard shortcut works
