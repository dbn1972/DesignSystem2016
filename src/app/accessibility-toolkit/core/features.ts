/**
 * @ux4g/a11y-core — Feature Definitions
 */

export type A11yFeatureKey =
  | 'fontSize'
  | 'lineHeight'
  | 'letterSpacing'
  | 'wordSpacing'
  | 'dyslexiaFont'
  | 'leftAlign'
  | 'highContrast'
  | 'darkContrast'
  | 'lightContrast'
  | 'invertColors'
  | 'grayscale'
  | 'desaturate'
  | 'monochrome'
  | 'highlightLinks'
  | 'highlightHeadings'
  | 'largerCursor'
  | 'readingGuide'
  | 'readingMask'
  | 'pauseAnimations'
  | 'hideImages'
  | 'strongFocus'
  | 'keyboardNav';

export type A11yFeatureGroup =
  | 'text'
  | 'contrast'
  | 'visual'
  | 'navigation'
  | 'reading';

export const GROUP_ORDER: readonly A11yFeatureGroup[] = [
  'text', 'contrast', 'visual', 'navigation', 'reading',
];

export interface A11yFeatureDescriptor {
  key: A11yFeatureKey;
  label: string;
  group: A11yFeatureGroup;
  type: 'toggle' | 'stepper';
}

export const FEATURE_REGISTRY: readonly A11yFeatureDescriptor[] = [
  { key: 'fontSize',       label: 'fontSize',       group: 'text',       type: 'stepper' },
  { key: 'lineHeight',     label: 'lineHeight',     group: 'text',       type: 'stepper' },
  { key: 'letterSpacing',  label: 'letterSpacing',  group: 'text',       type: 'stepper' },
  { key: 'wordSpacing',    label: 'wordSpacing',    group: 'text',       type: 'stepper' },
  { key: 'dyslexiaFont',   label: 'dyslexiaFont',   group: 'text',       type: 'toggle'  },
  { key: 'leftAlign',      label: 'leftAlign',      group: 'text',       type: 'toggle'  },
  { key: 'highContrast',   label: 'highContrast',   group: 'contrast',   type: 'toggle'  },
  { key: 'darkContrast',   label: 'darkContrast',   group: 'contrast',   type: 'toggle'  },
  { key: 'lightContrast',  label: 'lightContrast',  group: 'contrast',   type: 'toggle'  },
  { key: 'invertColors',   label: 'invertColors',   group: 'contrast',   type: 'toggle'  },
  { key: 'grayscale',      label: 'grayscale',      group: 'contrast',   type: 'toggle'  },
  { key: 'desaturate',     label: 'desaturate',     group: 'contrast',   type: 'toggle'  },
  { key: 'monochrome',     label: 'monochrome',     group: 'contrast',   type: 'toggle'  },
  { key: 'highlightLinks',    label: 'highlightLinks',    group: 'visual', type: 'toggle' },
  { key: 'highlightHeadings', label: 'highlightHeadings', group: 'visual', type: 'toggle' },
  { key: 'largerCursor',      label: 'largerCursor',      group: 'visual', type: 'toggle' },
  { key: 'hideImages',        label: 'hideImages',        group: 'visual', type: 'toggle' },
  { key: 'strongFocus',  label: 'strongFocus',  group: 'navigation', type: 'toggle' },
  { key: 'keyboardNav',  label: 'keyboardNav',  group: 'navigation', type: 'toggle' },
  { key: 'readingGuide',    label: 'readingGuide',    group: 'reading', type: 'toggle' },
  { key: 'readingMask',     label: 'readingMask',     group: 'reading', type: 'toggle' },
  { key: 'pauseAnimations', label: 'pauseAnimations', group: 'reading', type: 'toggle' },
];
