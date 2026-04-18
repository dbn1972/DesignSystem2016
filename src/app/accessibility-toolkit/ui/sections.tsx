/**
 * @ux4g/a11y-react — Feature Group Sections
 */

import { FONT_SIZE_DISPLAY } from '../core';
import type { A11yStoreValue, A11yLabels, A11yToggleState } from '../core';
import { A11yToggle } from './toggle';
import { A11yStepper } from './stepper';

export type SectionProps = {
  store: A11yStoreValue;
  labels: A11yLabels;
  isEnabled: (k: string) => boolean;
  announce: (msg: string) => void;
};

function toggler(
  store: A11yStoreValue, feature: keyof A11yToggleState,
  label: string, currentValue: boolean, announce: (msg: string) => void,
) {
  return () => { store.toggle(feature); announce(`${label} ${currentValue ? 'disabled' : 'enabled'}`); };
}

export function TextSection({ store: s, labels: l, isEnabled: e, announce }: SectionProps) {
  return (
    <>
      {e('fontSize') && (
        <A11yStepper label={l.fontSize} value={s.fontSize}
          onIncrease={() => { s.increaseFontSize(); announce(`${l.fontSize} increased`); }}
          onDecrease={() => { s.decreaseFontSize(); announce(`${l.fontSize} decreased`); }}
          onReset={() => { s.resetFontSize(); announce(`${l.fontSize} reset`); }}
          increaseLabel={l.fontSizeIncrease} decreaseLabel={l.fontSizeDecrease} resetLabel={l.fontSizeReset}
          displayValue={FONT_SIZE_DISPLAY[s.fontSize] ?? '100%'} />
      )}
      {e('lineHeight') && (
        <A11yStepper label={l.lineHeight} value={s.lineHeight}
          onIncrease={() => { s.increaseLineHeight(); announce(`${l.lineHeight} increased`); }}
          onDecrease={() => { s.decreaseLineHeight(); announce(`${l.lineHeight} decreased`); }}
          onReset={() => { s.resetLineHeight(); announce(`${l.lineHeight} reset`); }}
          increaseLabel={`Increase ${l.lineHeight.toLowerCase()}`}
          decreaseLabel={`Decrease ${l.lineHeight.toLowerCase()}`}
          resetLabel={`Reset ${l.lineHeight.toLowerCase()}`}
          displayValue={s.lineHeight === 0 ? 'Default' : `Step ${s.lineHeight}`} />
      )}
      {e('letterSpacing') && (
        <A11yStepper label={l.letterSpacing} value={s.letterSpacing}
          onIncrease={() => { s.increaseLetterSpacing(); announce(`${l.letterSpacing} increased`); }}
          onDecrease={() => { s.decreaseLetterSpacing(); announce(`${l.letterSpacing} decreased`); }}
          onReset={() => { s.resetLetterSpacing(); announce(`${l.letterSpacing} reset`); }}
          increaseLabel={`Increase ${l.letterSpacing.toLowerCase()}`}
          decreaseLabel={`Decrease ${l.letterSpacing.toLowerCase()}`}
          resetLabel={`Reset ${l.letterSpacing.toLowerCase()}`}
          displayValue={s.letterSpacing === 0 ? 'Default' : `Step ${s.letterSpacing}`} />
      )}
      {e('wordSpacing') && (
        <A11yStepper label={(l as any).wordSpacing ?? 'Word Spacing'} value={s.wordSpacing}
          onIncrease={() => { s.increaseWordSpacing(); announce('Word Spacing increased'); }}
          onDecrease={() => { s.decreaseWordSpacing(); announce('Word Spacing decreased'); }}
          onReset={() => { s.resetWordSpacing(); announce('Word Spacing reset'); }}
          increaseLabel="Increase word spacing" decreaseLabel="Decrease word spacing" resetLabel="Reset word spacing"
          displayValue={s.wordSpacing === 0 ? 'Default' : `Step ${s.wordSpacing}`} />
      )}
      {e('dyslexiaFont') && <A11yToggle label={l.dyslexiaFont} checked={s.dyslexiaFont} onChange={toggler(s, 'dyslexiaFont', l.dyslexiaFont, s.dyslexiaFont, announce)} />}
      {e('leftAlign') && <A11yToggle label={(l as any).leftAlign ?? 'Left-Align Text'} checked={s.leftAlign} onChange={toggler(s, 'leftAlign', 'Left-Align Text', s.leftAlign, announce)} />}
    </>
  );
}

export function ContrastSection({ store: s, labels: l, isEnabled: e, announce }: SectionProps) {
  return (
    <>
      {e('highContrast') && <A11yToggle label={l.highContrast} checked={s.highContrast} onChange={toggler(s, 'highContrast', l.highContrast, s.highContrast, announce)} />}
      {e('darkContrast') && <A11yToggle label={l.darkContrast} checked={s.darkContrast} onChange={toggler(s, 'darkContrast', l.darkContrast, s.darkContrast, announce)} />}
      {e('lightContrast') && <A11yToggle label={l.lightContrast} checked={s.lightContrast} onChange={toggler(s, 'lightContrast', l.lightContrast, s.lightContrast, announce)} />}
      {e('invertColors') && <A11yToggle label={l.invertColors} checked={s.invertColors} onChange={toggler(s, 'invertColors', l.invertColors, s.invertColors, announce)} />}
      {e('grayscale') && <A11yToggle label={l.grayscale} checked={s.grayscale} onChange={toggler(s, 'grayscale', l.grayscale, s.grayscale, announce)} />}
      {e('desaturate') && <A11yToggle label={l.desaturate} checked={s.desaturate} onChange={toggler(s, 'desaturate', l.desaturate, s.desaturate, announce)} />}
      {e('monochrome') && <A11yToggle label={(l as any).monochrome ?? 'Monochrome'} checked={s.monochrome} onChange={toggler(s, 'monochrome', 'Monochrome', s.monochrome, announce)} />}
    </>
  );
}

export function VisualSection({ store: s, labels: l, isEnabled: e, announce }: SectionProps) {
  return (
    <>
      {e('highlightLinks') && <A11yToggle label={l.highlightLinks} checked={s.highlightLinks} onChange={toggler(s, 'highlightLinks', l.highlightLinks, s.highlightLinks, announce)} />}
      {e('highlightHeadings') && <A11yToggle label={l.highlightHeadings} checked={s.highlightHeadings} onChange={toggler(s, 'highlightHeadings', l.highlightHeadings, s.highlightHeadings, announce)} />}
      {e('largerCursor') && <A11yToggle label={l.largerCursor} checked={s.largerCursor} onChange={toggler(s, 'largerCursor', l.largerCursor, s.largerCursor, announce)} />}
      {e('hideImages') && <A11yToggle label={l.hideImages} checked={s.hideImages} onChange={toggler(s, 'hideImages', l.hideImages, s.hideImages, announce)} />}
    </>
  );
}

export function NavigationSection({ store: s, labels: l, isEnabled: e, announce }: SectionProps) {
  return (
    <>
      {e('strongFocus') && <A11yToggle label={l.strongFocus} checked={s.strongFocus} onChange={toggler(s, 'strongFocus', l.strongFocus, s.strongFocus, announce)} />}
      {e('keyboardNav') && <A11yToggle label={l.keyboardNav} checked={s.keyboardNav} onChange={toggler(s, 'keyboardNav', l.keyboardNav, s.keyboardNav, announce)} />}
    </>
  );
}

export function ReadingSection({ store: s, labels: l, isEnabled: e, announce }: SectionProps) {
  return (
    <>
      {e('readingGuide') && <A11yToggle label={l.readingGuide} checked={s.readingGuide} onChange={toggler(s, 'readingGuide', l.readingGuide, s.readingGuide, announce)} />}
      {e('readingMask') && <A11yToggle label={l.readingMask} checked={s.readingMask} onChange={toggler(s, 'readingMask', l.readingMask, s.readingMask, announce)} />}
      {e('pauseAnimations') && <A11yToggle label={l.pauseAnimations} checked={s.pauseAnimations} onChange={toggler(s, 'pauseAnimations', l.pauseAnimations, s.pauseAnimations, announce)} />}
    </>
  );
}
