# Public API Reference

## Hosted Runtime API (`window.UX4GA11y`)

Available after the script loads. Works on any website.

### Methods

| Method | Description |
|---|---|
| `UX4GA11y.init(config?)` | Initialize the toolkit with optional config. Called automatically unless manual init is configured |
| `UX4GA11y.destroy()` | Remove the toolkit from the page and clean up all styles |
| `UX4GA11y.open()` | Open the settings panel |
| `UX4GA11y.close()` | Close the settings panel |
| `UX4GA11y.toggle()` | Toggle the panel open/closed |
| `UX4GA11y.reset()` | Reset all settings to defaults and clear localStorage |
| `UX4GA11y.getState()` | Returns a copy of the current accessibility state object |
| `UX4GA11y.getConfig()` | Returns the resolved configuration |
| `UX4GA11y.isOpen()` | Returns `true` if the panel is currently open |

### Properties

| Property | Description |
|---|---|
| `UX4GA11y.version` | Current toolkit version string (e.g. `'1.0.0'`) |

### Examples

```javascript
// Open the panel programmatically
document.getElementById('my-a11y-btn').addEventListener('click', function() {
  UX4GA11y.open();
});

// Check if high contrast is active
var state = UX4GA11y.getState();
if (state.highContrast) {
  console.log('High contrast is enabled');
}

// Reset everything
UX4GA11y.reset();
```

## React API

### Components

| Component | Description |
|---|---|
| `<A11yToolkit config={...}>` | Wrap your app. Renders launcher + panel + overlays |

### Hooks

| Hook | Returns | Description |
|---|---|---|
| `useA11y()` | `A11yStoreValue` | State + all action methods |
| `useA11yConfig()` | `ResolvedA11yConfig` | Resolved configuration |

### Store Value Shape

```typescript
interface A11yStoreValue {
  // State
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  dyslexiaFont: boolean;
  leftAlign: boolean;
  highContrast: boolean;
  // ... all toggle states

  // Panel
  panelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
  togglePanel: () => void;

  // Actions
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  increaseLineHeight: () => void;
  decreaseLineHeight: () => void;
  resetLineHeight: () => void;
  // ... all stepper actions
  toggle: (feature: keyof A11yToggleState) => void;
  resetAll: () => void;
}
```

## Angular API

### Provider

```typescript
provideA11yToolkit(config?: A11yCoreConfig): Provider[]
```

### Service

```typescript
@Injectable()
class A11yService {
  readonly config: ResolvedA11yConfig;
  readonly state: Signal<A11yState>;
  readonly panelOpen: Signal<boolean>;
  readonly activeCount: Signal<number>;

  toggle(feature: keyof A11yToggleState): void;
  resetAll(): void;
  openPanel(): void;
  closePanel(): void;
  // ... all stepper methods
}
```

### Components

| Component | Selector | Description |
|---|---|---|
| `A11yToolkitComponent` | `<ux4g-a11y-toolkit>` | Full toolkit (launcher + panel + overlays) |
| `A11yLauncherComponent` | `<ux4g-a11y-launcher>` | Launcher button only |
| `A11yPanelComponent` | `<ux4g-a11y-panel>` | Settings panel only |

## Initialization Patterns

### Auto-Init (Default)

```html
<script src="ux4g-a11y.min.js" defer></script>
```

The toolkit initializes automatically when the DOM is ready.

### Auto-Init with Config

```html
<script>
  window.UX4G_A11Y_CONFIG = { launcherPosition: 'bottom-left' };
</script>
<script src="ux4g-a11y.min.js" defer></script>
```

### Manual Init

```html
<script src="ux4g-a11y.min.js" defer></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    UX4GA11y.init({ storageKey: 'custom-key' });
  });
</script>
```
