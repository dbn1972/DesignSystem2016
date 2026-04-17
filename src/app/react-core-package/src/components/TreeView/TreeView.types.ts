import { ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface TreeNode { id: string; label: string; icon?: ReactNode; children?: TreeNode[]; }

export interface TreeViewProps extends BaseComponentProps {
  nodes: TreeNode[];
  /** Initially expanded node IDs */
  defaultExpanded?: string[];
  /** Called when a node is selected */
  onSelect?: (id: string) => void;
  /** Selected node ID */
  selectedId?: string;
}
