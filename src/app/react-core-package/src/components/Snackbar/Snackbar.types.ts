export interface SnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  variant?: 'info' | 'success' | 'warning' | 'error';
  action?: {
    label: string;
    onClick: () => void;
  };
  onClose?: () => void;
}
