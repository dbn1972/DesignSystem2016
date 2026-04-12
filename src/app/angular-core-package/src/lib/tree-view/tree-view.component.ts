import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Tree node interface
 */
export interface TreeNode {
  id: string;
  label: string;
  icon?: string;
  children?: TreeNode[];
  expanded?: boolean;
  disabled?: boolean;
  metadata?: any;
}

/**
 * Tree view component for displaying hierarchical data structures.
 * Commonly used for organization charts, file systems, and category hierarchies.
 *
 * @example
 * // Indian Government Organization Structure
 * <ux4g-tree-view
 *   [data]="[
 *     {
 *       id: '1',
 *       label: 'Central Government',
 *       icon: '🏛️',
 *       expanded: true,
 *       children: [
 *         {
 *           id: '1-1',
 *           label: 'Ministry of Finance',
 *           icon: '💰',
 *           children: [
 *             { id: '1-1-1', label: 'Department of Revenue', icon: '📊' },
 *             { id: '1-1-2', label: 'Department of Expenditure', icon: '💵' }
 *           ]
 *         },
 *         { id: '1-2', label: 'Ministry of Home Affairs', icon: '🏠' },
 *         { id: '1-3', label: 'Ministry of Defence', icon: '🛡️' }
 *       ]
 *     },
 *     {
 *       id: '2',
 *       label: 'State Government',
 *       icon: '🏛️',
 *       children: [
 *         { id: '2-1', label: 'Delhi', icon: '📍' },
 *         { id: '2-2', label: 'Maharashtra', icon: '📍' },
 *         { id: '2-3', label: 'Karnataka', icon: '📍' }
 *       ]
 *     }
 *   ]"
 *   [showIcons]="true"
 *   [selectable]="true"
 *   (selectionChange)="onSelectionChange($event)"
 * ></ux4g-tree-view>
 *
 * @example
 * // Document Categories with Checkboxes
 * <ux4g-tree-view
 *   [data]="[
 *     {
 *       id: 'identity',
 *       label: 'Identity Documents',
 *       icon: '📄',
 *       children: [
 *         { id: 'aadhaar', label: 'Aadhaar Card', icon: '🆔' },
 *         { id: 'pan', label: 'PAN Card', icon: '💳' },
 *         { id: 'voter', label: 'Voter ID', icon: '🗳️' }
 *       ]
 *     },
 *     {
 *       id: 'address',
 *       label: 'Address Proof',
 *       icon: '🏠',
 *       children: [
 *         { id: 'passport', label: 'Passport', icon: '📘' },
 *         { id: 'license', label: 'Driving License', icon: '🚗' }
 *       ]
 *     }
 *   ]"
 *   [checkboxes]="true"
 *   [multiSelect]="true"
 * ></ux4g-tree-view>
 *
 * @example
 * // Service Application Categories (Expand All)
 * <ux4g-tree-view
 *   [data]="serviceCategories"
 *   [expandAll]="true"
 *   [showIcons]="true"
 *   [selectable]="true"
 *   size="lg"
 * ></ux4g-tree-view>
 */
@Component({
  selector: 'ux4g-tree-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TreeViewComponent {
  /**
   * Tree data structure
   */
  @Input() set data(value: TreeNode[]) {
    this._data = value;
    if (this.expandAll) {
      this.expandAllNodes(this._data);
    }
  }
  get data(): TreeNode[] {
    return this._data;
  }
  private _data: TreeNode[] = [];

  /**
   * Expand all nodes by default
   */
  @Input() set expandAll(value: boolean) {
    this._expandAll = value;
    if (value && this._data) {
      this.expandAllNodes(this._data);
    }
  }
  get expandAll(): boolean {
    return this._expandAll;
  }
  private _expandAll: boolean = false;

  /**
   * Show icons for nodes
   */
  @Input() showIcons: boolean = true;

  /**
   * Allow node selection
   */
  @Input() selectable: boolean = false;

  /**
   * Allow multiple node selection
   */
  @Input() multiSelect: boolean = false;

  /**
   * Show checkboxes for selection
   */
  @Input() checkboxes: boolean = false;

  /**
   * Array of selected node IDs
   */
  @Input() selectedNodes?: string[] = [];

  /**
   * Size variant
   */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Emits when selection changes
   */
  @Output() selectionChange = new EventEmitter<string[]>();

  /**
   * Emits when a node is expanded/collapsed
   */
  @Output() nodeToggle = new EventEmitter<{ node: TreeNode; expanded: boolean }>();

  /**
   * Emits when a node is clicked
   */
  @Output() nodeClick = new EventEmitter<TreeNode>();

  /**
   * Selected node IDs set
   */
  selectedNodeIds: Set<string> = new Set();

  /**
   * Get computed CSS classes
   */
  get treeViewClasses(): string {
    const classes = [
      'ux4g-tree-view',
      `ux4g-tree-view--${this.size}`
    ];

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }

  /**
   * Initialize selected nodes
   */
  ngOnInit(): void {
    if (this.selectedNodes) {
      this.selectedNodeIds = new Set(this.selectedNodes);
    }
  }

  /**
   * Expand all nodes recursively
   */
  private expandAllNodes(nodes: TreeNode[]): void {
    nodes.forEach(node => {
      if (node.children && node.children.length > 0) {
        node.expanded = true;
        this.expandAllNodes(node.children);
      }
    });
  }

  /**
   * Toggle node expansion
   */
  toggleNode(node: TreeNode, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }

    node.expanded = !node.expanded;
    this.nodeToggle.emit({ node, expanded: node.expanded || false });
  }

  /**
   * Check if node is selected
   */
  isSelected(nodeId: string): boolean {
    return this.selectedNodeIds.has(nodeId);
  }

  /**
   * Handle node click
   */
  onNodeClick(node: TreeNode, event: Event): void {
    if (!this.selectable || node.disabled) {
      return;
    }

    event.stopPropagation();

    if (this.multiSelect) {
      if (this.selectedNodeIds.has(node.id)) {
        this.selectedNodeIds.delete(node.id);
      } else {
        this.selectedNodeIds.add(node.id);
      }
    } else {
      this.selectedNodeIds.clear();
      this.selectedNodeIds.add(node.id);
    }

    this.selectionChange.emit(Array.from(this.selectedNodeIds));
    this.nodeClick.emit(node);
  }

  /**
   * Handle checkbox change
   */
  onCheckboxChange(node: TreeNode, event: Event): void {
    event.stopPropagation();

    if (this.selectedNodeIds.has(node.id)) {
      this.selectedNodeIds.delete(node.id);
    } else {
      this.selectedNodeIds.add(node.id);
    }

    this.selectionChange.emit(Array.from(this.selectedNodeIds));
  }

  /**
   * Handle keyboard navigation
   */
  onKeyDown(node: TreeNode, event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowRight':
        if (node.children && node.children.length > 0 && !node.expanded) {
          event.preventDefault();
          this.toggleNode(node);
        }
        break;
      case 'ArrowLeft':
        if (node.children && node.children.length > 0 && node.expanded) {
          event.preventDefault();
          this.toggleNode(node);
        }
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.selectable) {
          this.onNodeClick(node, event);
        } else if (node.children && node.children.length > 0) {
          this.toggleNode(node);
        }
        break;
    }
  }

  /**
   * Get indent level style
   */
  getIndentStyle(level: number): any {
    return {
      'padding-left': `${level * 1.5}rem`
    };
  }
}
