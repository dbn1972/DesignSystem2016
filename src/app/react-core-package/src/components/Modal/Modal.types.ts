import { ReactNode } from 'react';
import { BaseComponentProps, ComponentSize } from '../../types/common';

export interface ModalProps extends BaseComponentProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: ComponentSize;
  closeOnOverlay?: boolean;
}
