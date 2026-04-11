/**
 * Utility for combining class names
 * Similar to clsx/classnames but lightweight
 */
export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Build BEM-style class names for components
 */
export function bemClass(
  block: string,
  element?: string,
  modifier?: string | string[]
): string {
  let className = block;

  if (element) {
    className += `__${element}`;
  }

  if (modifier) {
    const modifiers = Array.isArray(modifier) ? modifier : [modifier];
    modifiers.forEach(mod => {
      className += ` ${block}${element ? `__${element}` : ''}--${mod}`;
    });
  }

  return className;
}

/**
 * Build UX4G component class name with variants
 */
export function ux4gClass(
  component: string,
  variant?: string,
  size?: string,
  additional?: string | string[]
): string {
  const classes = [`ux4g-${component}`];

  if (variant) {
    classes.push(`ux4g-${component}--${variant}`);
  }

  if (size) {
    classes.push(`ux4g-${component}--${size}`);
  }

  if (additional) {
    const additionalClasses = Array.isArray(additional) ? additional : [additional];
    classes.push(...additionalClasses);
  }

  return classes.join(' ');
}
