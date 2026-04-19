import type { ReactNode } from 'react';

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  variant?: 'info' | 'success' | 'warning' | 'error';
  icon?: ReactNode;
  onDismiss?: () => void;
  dismissLabel?: string;
}
