import { HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  name?: string;
  shape?: 'circle' | 'square';
}
