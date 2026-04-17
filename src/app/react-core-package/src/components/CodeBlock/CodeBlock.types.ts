import { HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface CodeBlockProps extends HTMLAttributes<HTMLPreElement>, BaseComponentProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  copyable?: boolean;
}
