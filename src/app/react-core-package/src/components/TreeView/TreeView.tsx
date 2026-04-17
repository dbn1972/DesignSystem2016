import { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { TreeViewProps, TreeNode } from './TreeView.types';

function TreeItem({ node, level, expanded, onToggle, selectedId, onSelect }: {
  node: TreeNode; level: number; expanded: Set<string>; onToggle: (id: string) => void; selectedId?: string; onSelect?: (id: string) => void;
}) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expanded.has(node.id);
  const isSelected = selectedId === node.id;

  return (
    <li role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined} aria-selected={isSelected}>
      <div
        className={cn('flex items-center gap-2 py-1.5 px-2 rounded-lg cursor-pointer text-sm transition-colors', isSelected ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted')}
        style={{ paddingLeft: `${level * 20 + 8}px` }}
        onClick={() => { if (hasChildren) onToggle(node.id); onSelect?.(node.id); }}
      >
        {hasChildren && <span className="text-xs text-muted-foreground" aria-hidden="true">{isExpanded ? '▾' : '▸'}</span>}
        {!hasChildren && <span className="w-3" />}
        {node.icon && <span aria-hidden="true">{node.icon}</span>}
        <span>{node.label}</span>
      </div>
      {hasChildren && isExpanded && (
        <ul role="group">
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} expanded={expanded} onToggle={onToggle} selectedId={selectedId} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </li>
  );
}

export const TreeView = forwardRef<HTMLUListElement, TreeViewProps>(
  ({ nodes, defaultExpanded = [], onSelect, selectedId, className, ...props }, ref) => {
    const [expanded, setExpanded] = useState<Set<string>>(new Set(defaultExpanded));
    const toggle = (id: string) => setExpanded((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });

    return (
      <ul ref={ref} role="tree" className={cn('ux4g-tree-view', className)} {...props}>
        {nodes.map((node) => (
          <TreeItem key={node.id} node={node} level={0} expanded={expanded} onToggle={toggle} selectedId={selectedId} onSelect={onSelect} />
        ))}
      </ul>
    );
  }
);

TreeView.displayName = 'TreeView';
