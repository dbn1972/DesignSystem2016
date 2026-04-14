/**
 * Avatar Component Documentation Page
 * Complete documentation for the Avatar component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { User } from 'lucide-react';

// Import the actual Avatar component for live preview
const AvatarPreview = ({ src, alt, name, size, shape, status, fallback, ...props }: any) => {
  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  };

  const shapeClass = shape === 'square' ? 'rounded' : 'rounded-full';
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.md;

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
  };

  const statusIndicatorSizes = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
  };

  return (
    <div className="relative inline-block" {...props}>
      <div
        className={`${sizeClass} ${shapeClass} bg-[#005196] text-white flex items-center justify-center font-medium overflow-hidden`}
      >
        {src ? (
          <img src={src} alt={alt || name || 'Avatar'} className="w-full h-full object-cover" />
        ) : name ? (
          <span>{getInitials(name)}</span>
        ) : fallback ? (
          fallback
        ) : (
          <User size={size === 'xs' ? 12 : size === 'sm' ? 14 : size === 'lg' ? 20 : size === 'xl' ? 24 : 16} />
        )}
      </div>
      {status && (
        <span
          className={`absolute bottom-0 right-0 ${statusIndicatorSizes[size as keyof typeof statusIndicatorSizes] || statusIndicatorSizes.md} ${statusColors[status as keyof typeof statusColors]} border-2 border-white rounded-full`}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
};

export default function ComponentAvatarPage() {
  return (
    <ComponentDocumentation
      name="Avatar"
      description="Visual representation of users through profile images, initials, or fallback icons. Supports various sizes, shapes, and status indicators for government applications."
      category="Data Display"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      props={[
        {
          name: 'src',
          type: 'string',
          required: false,
          description: 'URL of the avatar image. If provided, displays the image. Falls back to initials or icon if image fails to load.',
        },
        {
          name: 'alt',
          type: 'string',
          required: false,
          description: 'Alternative text for the avatar image. Used for accessibility. If not provided, uses the name prop.',
        },
        {
          name: 'name',
          type: 'string',
          required: false,
          description: 'Full name of the user. Used to generate initials when no image is provided. First letter of first and last name.',
        },
        {
          name: 'size',
          type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
          default: "'md'",
          required: false,
          description: 'Size of the avatar. Extra small (24px), Small (32px), Medium (40px), Large (48px), Extra large (64px).',
        },
        {
          name: 'shape',
          type: "'circle' | 'square'",
          default: "'circle'",
          required: false,
          description: 'Shape of the avatar. Circle for user profiles, square for brand logos or applications.',
        },
        {
          name: 'status',
          type: "'online' | 'offline' | 'away' | 'busy'",
          required: false,
          description: 'Status indicator displayed at bottom-right corner. Shows user availability status.',
        },
        {
          name: 'fallback',
          type: 'ReactNode',
          required: false,
          description: 'Custom fallback content when no image or name is provided. Defaults to a user icon.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply. Merged with size and shape classes.',
        },
        {
          name: 'onClick',
          type: '(event: MouseEvent) => void',
          required: false,
          description: 'Click event handler. Makes avatar interactive when provided.',
        },
      ]}

      examples={[
        {
          title: 'Image Avatar',
          description: 'Avatar displaying a user profile image with proper alt text.',
          code: `import { Avatar } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-4">
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
        alt="John Smith"
        name="John Smith"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
        alt="Jane Doe"
        name="Jane Doe"
      />
    </div>
  );
}`,
          preview: (
            <div className="flex gap-4">
              <AvatarPreview
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="John Smith"
                name="John Smith"
              />
              <AvatarPreview
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                alt="Jane Doe"
                name="Jane Doe"
              />
            </div>
          ),
        },
        {
          title: 'Initials Avatar',
          description: 'Avatar showing user initials when no image is provided.',
          code: `import { Avatar } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-4">
      <Avatar name="John Smith" />
      <Avatar name="Jane Doe" />
      <Avatar name="Robert Johnson" />
      <Avatar name="Maria Garcia" />
    </div>
  );
}`,
          preview: (
            <div className="flex gap-4">
              <AvatarPreview name="John Smith" />
              <AvatarPreview name="Jane Doe" />
              <AvatarPreview name="Robert Johnson" />
              <AvatarPreview name="Maria Garcia" />
            </div>
          ),
        },
        {
          title: 'Different Sizes',
          description: 'Five avatar sizes: extra small (24px), small (32px), medium (40px), large (48px), and extra large (64px).',
          code: `import { Avatar } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex items-center gap-4">
      <Avatar name="John Smith" size="xs" />
      <Avatar name="John Smith" size="sm" />
      <Avatar name="John Smith" size="md" />
      <Avatar name="John Smith" size="lg" />
      <Avatar name="John Smith" size="xl" />
    </div>
  );
}`,
          preview: (
            <div className="flex items-center gap-4">
              <AvatarPreview name="John Smith" size="xs" />
              <AvatarPreview name="John Smith" size="sm" />
              <AvatarPreview name="John Smith" size="md" />
              <AvatarPreview name="John Smith" size="lg" />
              <AvatarPreview name="John Smith" size="xl" />
            </div>
          ),
        },
        {
          title: 'Shapes',
          description: 'Avatars can be circular (default, for users) or square (for brands/apps).',
          code: `import { Avatar } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-4">
      <Avatar name="John Smith" shape="circle" size="lg" />
      <Avatar name="App Name" shape="square" size="lg" />
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
        alt="User"
        shape="circle"
        size="lg"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
        alt="Brand"
        shape="square"
        size="lg"
      />
    </div>
  );
}`,
          preview: (
            <div className="flex gap-4">
              <AvatarPreview name="John Smith" shape="circle" size="lg" />
              <AvatarPreview name="App Name" shape="square" size="lg" />
              <AvatarPreview
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="User"
                shape="circle"
                size="lg"
              />
              <AvatarPreview
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop"
                alt="Brand"
                shape="square"
                size="lg"
              />
            </div>
          ),
        },
        {
          title: 'With Status Indicator',
          description: 'Status badge showing user availability: online, offline, away, or busy.',
          code: `import { Avatar } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-4">
      <Avatar name="John Smith" status="online" size="lg" />
      <Avatar name="Jane Doe" status="away" size="lg" />
      <Avatar name="Bob Wilson" status="busy" size="lg" />
      <Avatar name="Alice Brown" status="offline" size="lg" />
    </div>
  );
}`,
          preview: (
            <div className="flex gap-4">
              <AvatarPreview name="John Smith" status="online" size="lg" />
              <AvatarPreview name="Jane Doe" status="away" size="lg" />
              <AvatarPreview name="Bob Wilson" status="busy" size="lg" />
              <AvatarPreview name="Alice Brown" status="offline" size="lg" />
            </div>
          ),
        },
        {
          title: 'Avatar Group',
          description: 'Multiple avatars displayed together, commonly used for showing team members or collaborators.',
          code: `import { Avatar } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex -space-x-2">
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
        alt="John Smith"
        size="md"
        className="ring-2 ring-white"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
        alt="Jane Doe"
        size="md"
        className="ring-2 ring-white"
      />
      <Avatar
        name="Robert Johnson"
        size="md"
        className="ring-2 ring-white"
      />
      <Avatar
        name="Maria Garcia"
        size="md"
        className="ring-2 ring-white"
      />
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-muted-foreground ring-2 ring-white">
        +3
      </div>
    </div>
  );
}`,
          preview: (
            <div className="flex -space-x-2">
              <AvatarPreview
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="John Smith"
                size="md"
                className="ring-2 ring-white"
              />
              <AvatarPreview
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                alt="Jane Doe"
                size="md"
                className="ring-2 ring-white"
              />
              <AvatarPreview
                name="Robert Johnson"
                size="md"
                className="ring-2 ring-white"
              />
              <AvatarPreview
                name="Maria Garcia"
                size="md"
                className="ring-2 ring-white"
              />
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-muted-foreground ring-2 ring-white">
                +3
              </div>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { avatarVariants } from './avatar.variants';
import { AvatarProps } from './Avatar.types';
import { User } from 'lucide-react';

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      size = 'md',
      shape = 'circle',
      status,
      fallback,
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);

    const getInitials = (name: string): string => {
      const parts = name.trim().split(' ');
      if (parts.length >= 2) {
        return \`\${parts[0][0]}\${parts[1][0]}\`.toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    };

    const renderContent = () => {
      if (src && !imageError) {
        return (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        );
      }

      if (name) {
        return <span>{getInitials(name)}</span>;
      }

      if (fallback) {
        return fallback;
      }

      return <User size={size === 'xs' ? 12 : size === 'sm' ? 14 : size === 'lg' ? 20 : size === 'xl' ? 24 : 16} />;
    };

    const statusColors = {
      online: 'bg-green-500',
      offline: 'bg-gray-400',
      away: 'bg-yellow-500',
      busy: 'bg-red-500',
    };

    const statusSizes = {
      xs: 'w-1.5 h-1.5',
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-4 h-4',
    };

    return (
      <div ref={ref} className="relative inline-block" {...props}>
        <div
          className={cn(
            avatarVariants({ size, shape }),
            className
          )}
        >
          {renderContent()}
        </div>
        {status && (
          <span
            className={cn(
              'absolute bottom-0 right-0',
              'border-2 border-white rounded-full',
              statusSizes[size],
              statusColors[status]
            )}
            role="status"
            aria-label={\`Status: \${status}\`}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';`,
        types: `export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  fallback?: React.ReactNode;
}`,
        variants: `import { cva, type VariantProps } from 'class-variance-authority';

export const avatarVariants = cva(
  [
    'flex items-center justify-center',
    'font-medium overflow-hidden',
    'bg-[#005196] text-white',
  ],
  {
    variants: {
      size: {
        xs: ['w-6 h-6 text-xs'],
        sm: ['w-8 h-8 text-sm'],
        md: ['w-10 h-10 text-base'],
        lg: ['w-12 h-12 text-lg'],
        xl: ['w-16 h-16 text-xl'],
      },
      shape: {
        circle: ['rounded-full'],
        square: ['rounded'],
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
    },
  }
);

export type AvatarVariantProps = VariantProps<typeof avatarVariants>;`,
      }}

      angularCode={{
        component: `import { Component, Input } from '@angular/core';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarShape = 'circle' | 'square';
type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

@Component({
  selector: 'ux4g-avatar',
  template: \`
    <div class="ux4g-avatar-container">
      <div [class]="getAvatarClasses()">
        <img
          *ngIf="src && !imageError"
          [src]="src"
          [alt]="alt || name || 'Avatar'"
          (error)="handleImageError()"
          class="ux4g-avatar-image"
        />
        <span *ngIf="(!src || imageError) && name" class="ux4g-avatar-initials">
          {{ getInitials(name) }}
        </span>
        <ng-content *ngIf="(!src || imageError) && !name"></ng-content>
      </div>
      <span
        *ngIf="status"
        [class]="getStatusClasses()"
        role="status"
        [attr.aria-label]="'Status: ' + status"
      ></span>
    </div>
  \`,
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
  @Input() src?: string;
  @Input() alt?: string;
  @Input() name?: string;
  @Input() size: AvatarSize = 'md';
  @Input() shape: AvatarShape = 'circle';
  @Input() status?: AvatarStatus;

  imageError = false;

  getInitials(name: string): string {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return \`\${parts[0][0]}\${parts[1][0]}\`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  handleImageError(): void {
    this.imageError = true;
  }

  getAvatarClasses(): string {
    const baseClasses = 'ux4g-avatar';
    const sizeClass = \`ux4g-avatar-\${this.size}\`;
    const shapeClass = \`ux4g-avatar-\${this.shape}\`;

    return [baseClasses, sizeClass, shapeClass]
      .filter(Boolean)
      .join(' ');
  }

  getStatusClasses(): string {
    const baseClasses = 'ux4g-avatar-status';
    const statusClass = \`ux4g-avatar-status-\${this.status}\`;
    const sizeClass = \`ux4g-avatar-status-\${this.size}\`;

    return [baseClasses, statusClass, sizeClass]
      .filter(Boolean)
      .join(' ');
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';

@NgModule({
  declarations: [AvatarComponent],
  imports: [CommonModule],
  exports: [AvatarComponent]
})
export class AvatarModule { }`,
        types: `export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';`,
      }}

      comparisons={[
        {
          system: 'Chakra UI',
          component: 'Avatar',
          variants: 'Multiple sizes, with badge support',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/avatar',
        },
        {
          system: 'Material UI (Google)',
          component: 'Avatar',
          variants: 'Circular, square, rounded',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-avatar/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Avatar',
          variants: 'Circle, square, with icon/image/text',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/avatar',
        },
        {
          system: 'Radix UI',
          component: 'Avatar',
          variants: 'Unstyled primitive with fallback',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://www.radix-ui.com/primitives/docs/components/avatar',
        },
        {
          system: 'GOV.UK Design System',
          component: 'N/A',
          variants: 'No dedicated avatar component',
          accessibility: 'N/A',
          documentation: 'N/A',
          link: 'N/A',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Meaningful alt text for profile images (WCAG 1.1.1)',
          'Sufficient color contrast for initials and background (WCAG 1.4.3)',
          'Status indicators include aria-label for screen reader announcement',
          'Image loading failures gracefully fall back to initials or icon',
          'Semantic HTML with proper role attributes',
          'Status badges use role="status" for live region announcements',
          'Initials provide text alternative when images are unavailable',
          'Shape variations maintain accessibility regardless of styling',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Focus avatar if interactive (onClick provided)' },
          { key: 'Enter', action: 'Activate avatar if interactive' },
          { key: 'Space', action: 'Activate avatar if interactive' },
        ],
        screenReader: [
          'Announces image alt text or user name',
          'Status indicators announced as "Status: [online/offline/away/busy]"',
          'Fallback icon properly labeled for assistive technology',
          'Initials are announced as text content',
        ],
      }}

      tokens={{
        file: '/tokens/components/avatar.json',
        mappings: [
          { property: 'Size XS', token: 'avatar.size.xs', value: '24px' },
          { property: 'Size Small', token: 'avatar.size.sm', value: '32px' },
          { property: 'Size Medium', token: 'avatar.size.md', value: '40px' },
          { property: 'Size Large', token: 'avatar.size.lg', value: '48px' },
          { property: 'Size XL', token: 'avatar.size.xl', value: '64px' },
          { property: 'Border Radius Circle', token: 'avatar.borderRadius.circle', value: '9999px' },
          { property: 'Border Radius Square', token: 'avatar.borderRadius.square', value: '4px' },
          { property: 'Background Color', token: 'avatar.background.default', value: '#005196 (Navy 500)' },
          { property: 'Text Color', token: 'avatar.text.default', value: '#FFFFFF (White)' },
          { property: 'Status Online', token: 'avatar.status.online', value: '#10B981 (Green 500)' },
          { property: 'Status Offline', token: 'avatar.status.offline', value: '#9CA3AF (Gray 400)' },
          { property: 'Status Away', token: 'avatar.status.away', value: '#F59E0B (Yellow 500)' },
          { property: 'Status Busy', token: 'avatar.status.busy', value: '#EF4444 (Red 500)' },
          { property: 'Status Border', token: 'avatar.status.border', value: '2px solid white' },
        ],
      }}
    />
  );
}
