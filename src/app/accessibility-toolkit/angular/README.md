# @ux4g/a11y-angular

Angular binding for the UX4G accessibility toolkit. All business logic lives in `@ux4g/a11y-core` — this package provides Angular services, injection tokens, and standalone components.

## Quick Start

### 1. Install

```bash
npm install @ux4g/a11y-core @ux4g/a11y-angular
```

### 2. Import CSS (in `angular.json` or `styles.css`)

```json
"styles": [
  "node_modules/@ux4g/a11y-core/styles/a11y-global.css",
  "node_modules/@ux4g/a11y-core/styles/a11y-panel.css"
]
```

### 3. Provide at root level

```ts
// app.config.ts
import { provideA11yToolkit } from '@ux4g/a11y-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideA11yToolkit({
      launcherPosition: 'bottom-right',
      storageKey: 'my-app-a11y',
      skipToContentSelector: '#main-content',
    }),
  ],
};
```

### 4. Add to app shell

```ts
// app.component.ts
import { A11yToolkitComponent } from '@ux4g/a11y-angular';

@Component({
  standalone: true,
  imports: [RouterOutlet, A11yToolkitComponent],
  template: `
    <ux4g-a11y-toolkit />
    <router-outlet />
  `,
})
export class AppComponent {}
```

That's it. The toolkit renders a floating launcher, settings panel, skip link, reading guide, and reading mask across all routes.

## Configuration

```ts
provideA11yToolkit({
  launcherPosition: 'bottom-left',     // 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  panelPlacement: 'drawer-right',      // 'drawer-right' | 'drawer-left' | 'modal'
  storageKey: 'gov-a11y',             // localStorage namespace
  skipToContentSelector: '#main',      // skip-link target
  respectReducedMotion: true,          // auto-enable pause-animations
  disabledFeatures: ['readingMask'],   // hide specific features
  labels: { panelTitle: 'सुगम्यता' }, // i18n overrides
  onSettingChange: (key, val, state) => console.log(key, val),
})
```

## Using the service directly

```ts
import { A11yService } from '@ux4g/a11y-angular';

@Component({ ... })
export class MyComponent {
  private a11y = inject(A11yService);

  get isDyslexia() { return this.a11y.state().dyslexiaFont; }

  toggleContrast() { this.a11y.toggle('highContrast'); }
}
```

## Hindi labels

```ts
import { HINDI_LABELS } from '@ux4g/a11y-angular';

provideA11yToolkit({ labels: HINDI_LABELS })
```

## Architecture

```
@ux4g/a11y-core          ← Framework-independent (shared with React)
  ├── features.ts         Feature registry
  ├── schema.ts           State, reducer, actions
  ├── persistence.ts      localStorage helpers
  ├── tokens.ts           Config contracts, labels, resolver
  ├── engine.ts           DOM style application
  └── styles/             CSS (shared across frameworks)

@ux4g/a11y-angular        ← Angular binding
  ├── a11y-config.ts      InjectionToken + provideA11yToolkit()
  ├── a11y.service.ts     State management via signals
  ├── a11y-toolkit.component.ts   Composition root
  ├── a11y-launcher.component.ts  Floating button
  ├── a11y-panel.component.ts     Settings drawer
  ├── a11y-toggle.component.ts    Toggle switch
  └── a11y-stepper.component.ts   +/- stepper
```
