import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface ShowHideProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  children: ReactNode;
  /** Label for the toggle button */
  label: string;
  /** Initially expanded */
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Called when toggled */
  onToggle?: (open: boolean) => void;
}
