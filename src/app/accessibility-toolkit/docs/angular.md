# Angular Implementation Guide

## When to Use Which Approach

| Approach | Best For |
|---|---|
| `@ux4g/a11y-angular` package | Angular 16+ apps with CLI |
| Hosted script tag | Angular apps where you can't modify the build, or legacy Angular |

## Option A: Angular Package (Recommended)

### Install

```bash
npm install @ux4g/a11y-core @ux4g/a11y-angular
```

### Add Styles

In `angular.json`:

```json
"styles": [
  "node_modules/@ux4g/a11y-core/styles/a11y-global.css",
  "node_modules/@ux4g/a11y-core/styles/a11y-panel.css",
  "src/styles.css"
]
```

### Provide at Root Level

```typescript
// app.config.ts
import { provideA11yToolkit } from '@ux4g/a11y-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideA11yToolkit({
      launcherPosition: 'bottom-right',
      storageKey: 'my-angular-a11y',
      skipToContentSelector: '#main-content',
    }),
  ],
};
```

### Add to App Shell

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A11yToolkitComponent } from '@ux4g/a11y-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, A11yToolkitComponent],
  template: `
    <ux4g-a11y-toolkit />
    <router-outlet />
  `,
})
export class AppComponent {}
```

### Use the Service (Optional)

```typescript
import { Component, inject } from '@angular/core';
import { A11yService } from '@ux4g/a11y-angular';

@Component({
  selector: 'app-settings',
  template: `
    <p>Font size: {{ a11y.state().fontSize }}</p>
    <button (click)="a11y.toggle('highContrast')">Toggle Contrast</button>
    <button (click)="a11y.resetAll()">Reset</button>
  `,
})
export class SettingsComponent {
  readonly a11y = inject(A11yService);
}
```

## Option B: Hosted Script in Angular

Add to `src/index.html` before `</body>`:

```html
<script src="https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js" defer></script>
```

The toolkit mounts directly on the DOM and works alongside Angular without conflict.

## SSR / Angular Universal

The Angular package guards all browser APIs behind `isPlatformBrowser()`. The toolkit:

- Does not render on the server
- Does not access `window`, `document`, or `localStorage` during SSR
- Hydrates safely on the client

## Route Navigation

Mount `<ux4g-a11y-toolkit />` in your root `AppComponent`. It persists across all routes since it's outside the `<router-outlet>`.

## Hindi Labels

```typescript
import { HINDI_LABELS, provideA11yToolkit } from '@ux4g/a11y-angular';

provideA11yToolkit({ labels: HINDI_LABELS })
```

## Testing Checklist

- [ ] Launcher renders on all routes
- [ ] Panel opens/closes correctly
- [ ] Settings persist after page refresh
- [ ] No SSR errors in server logs
- [ ] Service returns current state via signals
- [ ] Reset clears all settings
- [ ] Alt+A keyboard shortcut works
- [ ] No zone.js change detection issues
