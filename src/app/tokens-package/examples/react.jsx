/**
 * React Component Examples using @ux4g/tokens
 */

import tokens from '@ux4g/tokens';
import { semantic, radius, shadow, spacing } from '@ux4g/tokens';

// Example 1: Simple Button
export function Button({ children, variant = 'primary' }) {
  const variants = {
    primary: {
      background: semantic.color['interactive.default'],
      color: semantic.color['text.inverse']
    },
    secondary: {
      background: semantic.color['brand.secondary'],
      color: semantic.color['text.inverse']
    },
    outline: {
      background: 'transparent',
      color: semantic.color['interactive.default'],
      border: `1px solid ${semantic.color['border.default']}`
    }
  };

  return (
    <button style={{
      ...variants[variant],
      padding: `${semantic.space['button.padding-y']} ${semantic.space['button.padding-x']}`,
      borderRadius: radius.base,
      border: 'none',
      cursor: 'pointer',
      fontWeight: tokens.typography['fontWeight.semibold'],
      fontSize: tokens.typography['fontSize.base']
    }}>
      {children}
    </button>
  );
}

// Example 2: Card Component
export function Card({ title, children }) {
  return (
    <div style={{
      background: semantic.color['background.primary'],
      border: `1px solid ${semantic.color['border.default']}`,
      borderRadius: radius.lg,
      padding: semantic.space['card.padding'],
      boxShadow: shadow.base
    }}>
      {title && (
        <h3 style={{
          fontSize: tokens.semantic.typography['heading.h3.size'],
          fontWeight: tokens.semantic.typography['heading.h3.weight'],
          marginBottom: semantic.space['card.gap']
        }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

// Example 3: Input Field
export function Input({ label, error, ...props }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing['2'] }}>
      {label && (
        <label style={{
          fontSize: tokens.typography['fontSize.sm'],
          fontWeight: tokens.typography['fontWeight.medium'],
          color: semantic.color['text.primary']
        }}>
          {label}
        </label>
      )}
      <input
        {...props}
        style={{
          padding: `${semantic.space['input.padding-y']} ${semantic.space['input.padding-x']}`,
          border: `1px solid ${error ? semantic.color.error : semantic.color['border.default']}`,
          borderRadius: radius.base,
          fontSize: tokens.typography['fontSize.base'],
          outline: 'none',
          transition: `border-color ${tokens.motion['duration.fast']}`
        }}
      />
      {error && (
        <span style={{
          fontSize: tokens.typography['fontSize.xs'],
          color: semantic.color.error
        }}>
          {error}
        </span>
      )}
    </div>
  );
}
