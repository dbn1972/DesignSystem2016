import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ContainerProps } from './Container.types';

const maxWidthMap = { sm: 'max-w-screen-sm', md: 'max-w-screen-md', lg: 'max-w-screen-lg', xl: 'max-w-screen-xl', '2xl': 'max-w-screen-2xl', full: 'max-w-full' };

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, maxWidth = 'xl', centered = true, padding = true, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('ux4g-container', maxWidthMap[maxWidth], centered && 'mx-auto', padding && 'px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  )
);

Container.displayName = 'Container';
