/**
 * @ux4g/a11y-core — Token / Config Contracts
 *
 * Configuration types, default labels, default token overrides,
 * and the pure config resolver function.
 * No framework imports.
 */

import type { A11yFeatureKey, A11yFeatureGroup } from './features';
import { FEATURE_REGISTRY } from './features';

// ─── Launcher / Panel Placement ─────────────────────────────────────────────

export type LauncherPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
export type PanelPlacement = 'drawer-right' | 'drawer-left' | 'modal';

// ─── Labels (i18n) ──────────────────────────────────────────────────────────

export interface A11yLabels {
  panelTitle: string;
  launcherLabel: string;
  closePanel: string;
  resetAll: string;
  textGroup: string;
  contrastGroup: string;
  visualGroup: string;
  navigationGroup: string;
  readingGroup: string;
  fontSize: string;
  fontSizeIncrease: string;
  fontSizeDecrease: string;
  fontSizeReset: string;
  lineHeight: string;
  letterSpacing: string;
  wordSpacing: string;
  dyslexiaFont: string;
  leftAlign: string;
  highContrast: string;
  darkContrast: string;
  lightContrast: string;
  invertColors: string;
  grayscale: string;
  desaturate: string;
  monochrome: string;
  highlightLinks: string;
  highlightHeadings: string;
  largerCursor: string;
  readingGuide: string;
  readingMask: string;
  pauseAnimations: string;
  hideImages: string;
  strongFocus: string;
  keyboardNav: string;
  skipToContent: string;
}

export const DEFAULT_LABELS: Readonly<A11yLabels> = {
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
};

/** Hindi translations — pass as `config.labels` for Hindi locale. */
export const HINDI_LABELS: Readonly<A11yLabels> = {
  panelTitle: 'सुगम्यता सेटिंग्स',
  launcherLabel: 'सुगम्यता सेटिंग्स खोलें',
  closePanel: 'सुगम्यता सेटिंग्स बंद करें',
  resetAll: 'सभी सेटिंग्स रीसेट करें',
  textGroup: 'पाठ और पठनीयता',
  contrastGroup: 'कंट्रास्ट और रंग',
  visualGroup: 'दृश्य सहायता',
  navigationGroup: 'नेविगेशन',
  readingGroup: 'पठन सहायता',
  fontSize: 'पाठ का आकार',
  fontSizeIncrease: 'पाठ का आकार बढ़ाएं',
  fontSizeDecrease: 'पाठ का आकार घटाएं',
  fontSizeReset: 'पाठ का आकार रीसेट करें',
  lineHeight: 'पंक्ति ऊंचाई',
  letterSpacing: 'अक्षर अंतराल',
  wordSpacing: 'शब्द अंतराल',
  dyslexiaFont: 'डिस्लेक्सिया-अनुकूल फ़ॉन्ट',
  leftAlign: 'बाएं संरेखित पाठ',
  highContrast: 'उच्च कंट्रास्ट',
  darkContrast: 'डार्क कंट्रास्ट',
  lightContrast: 'लाइट कंट्रास्ट',
  invertColors: 'रंग उलटें',
  grayscale: 'ग्रेस्केल',
  desaturate: 'कम संतृप्ति',
  monochrome: 'मोनोक्रोम',
  highlightLinks: 'लिंक हाइलाइट करें',
  highlightHeadings: 'शीर्षक हाइलाइट करें',
  largerCursor: 'बड़ा कर्सर',
  readingGuide: 'पठन गाइड',
  readingMask: 'पठन मास्क',
  pauseAnimations: 'एनिमेशन रोकें',
  hideImages: 'चित्र छुपाएं',
  strongFocus: 'मजबूत फोकस संकेतक',
  keyboardNav: 'कीबोर्ड नेविगेशन',
  skipToContent: 'मुख्य सामग्री पर जाएं',
};

// ─── Token Overrides ────────────────────────────────────────────────────────

export interface A11yTokenOverrides {
  panelWidth: string;
  zIndex: number;
  borderRadius: string;
  shadow: string;
  accentColor: string;
  fontFamily: string;
}

export const DEFAULT_TOKENS: Readonly<A11yTokenOverrides> = {
  panelWidth: '22rem',
  zIndex: 1500,
  borderRadius: 'var(--ux4g-radius-xl, 0.75rem)',
  shadow: 'var(--ux4g-shadow-2xl, 0 25px 50px -12px rgb(0 0 0 / 0.25))',
  accentColor: 'var(--primary, #005196)',
  fontFamily: 'inherit',
};

// ─── Group → Label Key Mapping ──────────────────────────────────────────────

export const GROUP_LABEL_KEYS: Readonly<Record<A11yFeatureGroup, keyof A11yLabels>> = {
  text: 'textGroup',
  contrast: 'contrastGroup',
  visual: 'visualGroup',
  navigation: 'navigationGroup',
  reading: 'readingGroup',
};

// ─── Configuration ──────────────────────────────────────────────────────────

export interface A11yCoreConfig {
  enabledFeatures?: A11yFeatureKey[];
  disabledFeatures?: A11yFeatureKey[];
  launcherPosition?: LauncherPosition;
  defaultOpen?: boolean;
  storageKey?: string;
  labels?: Partial<A11yLabels>;
  tokens?: Partial<A11yTokenOverrides>;
  skipToContentSelector?: string;
  respectReducedMotion?: boolean;
  panelPlacement?: PanelPlacement;
  /** Optional callback fired on every setting change. Useful for analytics. */
  onSettingChange?: (key: string, value: unknown, state: Record<string, unknown>) => void;
}

export interface ResolvedA11yConfig {
  labels: A11yLabels;
  tokens: A11yTokenOverrides;
  enabledFeatures: A11yFeatureKey[];
  launcherPosition: LauncherPosition;
  panelPlacement: PanelPlacement;
  skipToContentSelector: string;
  storageKey: string;
}

// ─── Config Resolver ────────────────────────────────────────────────────────

export function resolveConfig(config?: A11yCoreConfig): ResolvedA11yConfig {
  const labels: A11yLabels = { ...DEFAULT_LABELS, ...config?.labels };
  const tokens: A11yTokenOverrides = { ...DEFAULT_TOKENS, ...config?.tokens };

  const allKeys = FEATURE_REGISTRY.map((f) => f.key);
  let enabled: A11yFeatureKey[] = config?.enabledFeatures ? config.enabledFeatures : [...allKeys];
  if (config?.disabledFeatures) {
    enabled = enabled.filter((k) => !config.disabledFeatures!.includes(k));
  }

  return {
    labels, tokens, enabledFeatures: enabled,
    launcherPosition: config?.launcherPosition ?? 'bottom-right',
    panelPlacement: config?.panelPlacement ?? 'drawer-right',
    skipToContentSelector: config?.skipToContentSelector ?? '#main-content',
    storageKey: config?.storageKey ?? 'ux4g-a11y',
  };
}
