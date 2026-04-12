/**
 * @ux4g/tokens - Design Tokens
 * @version 1.0.0
 */

export interface Tokens {
  color: Record<string, string>;
  typography: Record<string, string | number | string[]>;
  spacing: Record<string, string>;
  sizing: Record<string, string>;
  radius: Record<string, string>;
  shadow: Record<string, string>;
  opacity: Record<string, number>;
  motion: Record<string, string | number | number[]>;
  zIndex: Record<string, number>;
  semantic: {
    color: Record<string, string>;
    space: Record<string, string>;
    typography: Record<string, any>;
  };
}

declare const tokens: Tokens;
export default tokens;

export const color: Tokens['color'];
export const typography: Tokens['typography'];
export const spacing: Tokens['spacing'];
export const sizing: Tokens['sizing'];
export const radius: Tokens['radius'];
export const shadow: Tokens['shadow'];
export const opacity: Tokens['opacity'];
export const motion: Tokens['motion'];
export const zIndex: Tokens['zIndex'];
export const semantic: Tokens['semantic'];
