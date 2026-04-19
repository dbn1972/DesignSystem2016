/**
 * FOUC Prevention Script Generator
 *
 * Generates a minified synchronous inline script (< 1KB) that reads
 * stored theme preferences from localStorage and applies them to the
 * document root before the browser paints.
 *
 * The script is framework-agnostic and has zero React dependencies.
 */

/**
 * Returns a minified inline script string for FOUC prevention.
 * The script:
 * 1. Reads ux4g-theme-color-scheme from localStorage
 * 2. Falls back to matchMedia('(prefers-color-scheme: dark)')
 * 3. Sets data-theme, color-scheme, and dark class on <html>
 * 4. Reads ux4g-theme-contrast-mode and sets data-contrast if true
 * 5. Wraps everything in try/catch, defaults to light on error
 */
export function generateFOUCScript(): string {
  return `(function(){try{var d=document.documentElement,s=localStorage.getItem('ux4g-theme-color-scheme'),m='light';if(s==='dark')m='dark';else if(s!=='light')m=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';d.setAttribute('data-theme',m);d.style.colorScheme=m;if(m==='dark')d.classList.add('dark');else d.classList.remove('dark');if(localStorage.getItem('ux4g-theme-contrast-mode')==='true')d.setAttribute('data-contrast','high');}catch(e){var d=document.documentElement;d.setAttribute('data-theme','light');d.style.colorScheme='light';}})();`;
}
