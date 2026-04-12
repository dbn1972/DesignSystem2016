import React, { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { AvatarProps } from './Avatar.types';

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, size = 'md', name, shape = 'circle', className, ...props }, ref) => {
    const [imgError, setImgError] = useState(false);
    
    const getInitials = (name: string) => {
      return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    return (
      <div
        ref={ref}
        className={cn(
          'ux4g-avatar',
          `ux4g-avatar-${size}`,
          `ux4g-avatar-${shape}`,
          className
        )}
        {...props}
      >
        {src && !imgError ? (
          <img src={src} alt={alt || name} onError={() => setImgError(true)} />
        ) : name ? (
          <span className="ux4g-avatar-initials">{getInitials(name)}</span>
        ) : (
          <svg className="ux4g-avatar-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
