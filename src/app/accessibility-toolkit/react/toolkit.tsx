/**
 * @ux4g/a11y-react — Toolkit (app integration)
 *
 * Wrap your app with <A11yToolkit> to get the full accessibility
 * toolkit: provider + launcher + panel + reading overlays +
 * skip-to-content link.
 */

import type { ReactNode } from 'react';
import { A11yProvider, type A11yToolkitConfig } from './provider';
import { useA11y, useA11yConfig } from './hooks';
import { A11yLauncher } from '../ui/launcher';
import { A11yPanel } from '../ui/panel';
import { ReadingGuide } from '../ui/reading-guide';
import { ReadingMask } from '../ui/reading-mask';

interface A11yToolkitProps {
  config?: A11yToolkitConfig;
  children: ReactNode;
}

export function A11yToolkit({ config, children }: A11yToolkitProps) {
  return (
    <A11yProvider config={config}>
      <A11ySkipLink />
      {children}
      <A11yOverlays />
    </A11yProvider>
  );
}

/** Skip-to-content link — rendered by the toolkit for standalone adopters. */
function A11ySkipLink() {
  const { labels, skipToContentSelector } = useA11yConfig();
  return (
    <a
      href={skipToContentSelector}
      className="ux4g-a11y-skip-link"
    >
      {labels.skipToContent}
    </a>
  );
}

function A11yOverlays() {
  const { readingGuide, readingMask } = useA11y();
  return (
    <>
      <A11yLauncher />
      <A11yPanel />
      <ReadingGuide active={readingGuide} />
      <ReadingMask active={readingMask} />
    </>
  );
}
