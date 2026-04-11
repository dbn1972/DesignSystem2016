/**
 * Class name utility
 * Merges class names using clsx
 */

import clsx, { ClassValue } from 'clsx';

/**
 * Merge class names with clsx
 * @param inputs - Class names to merge
 * @returns Merged class name string
 *
 * @example
 * cn('ux4g-button', isActive && 'ux4g-button-active', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
