import type { PresetName, ThemeDefinition } from '../types';
import { defaultPreset } from './default';
import { saffronPrimaryPreset } from './saffron-primary';
import { greenPrimaryPreset } from './green-primary';
import { highContrastPreset } from './high-contrast';

export { defaultPreset } from './default';
export { saffronPrimaryPreset } from './saffron-primary';
export { greenPrimaryPreset } from './green-primary';
export { highContrastPreset } from './high-contrast';

/**
 * Registry of all built-in theme presets.
 * 'navy-primary' maps to the same definition as 'default'.
 */
export const THEME_PRESETS: Record<PresetName, ThemeDefinition> = {
  default: defaultPreset,
  'navy-primary': defaultPreset,
  'saffron-primary': saffronPrimaryPreset,
  'green-primary': greenPrimaryPreset,
  'high-contrast': highContrastPreset,
};
