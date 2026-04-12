/**
 * UX4G Tree View Web Component
 * 
 * @element ux4g-tree-view
 * 
 * @attr {string} data - JSON string of tree data
 * @attr {boolean} checkable - Show checkboxes
 * @attr {boolean} expand-all - Expand all nodes by default
 * 
 * @fires ux4g-tree-select - Fired when node is selected
 * @fires ux4g-tree-check - Fired when node is checked/unchecked
 * 
 * @example
 * ```html
 * <ux4g-tree-view 
 *   data='[{"id":"1","label":"Root","children":[{"id":"1.1","label":"Child"}]}]'
 *   checkable>
 * </ux4g-tree-view>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

interface TreeNode {
  id: string;
  label: string;
  icon?: string;
  children?: TreeNode[];
  expanded?: boolean;
  checked?: boolean;
}

export class UX4GTreeView extends UX4GElement {
  static get observedAttributes() {
    return ['data', 'checkable', 'expand-all'];
  }

  private _selectedId: string | null = null;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const dataStr = this.getAttribute('data') || '[]';
    const checkable = this.getBooleanAttribute('checkable');
    const expandAll = this.getBooleanAttribute('expand-all');

    let data: TreeNode[] = [];
    try {
      data = JSON.parse(dataStr);
    } catch (e) {
      console.error('Invalid tree data JSON');
    }

    // Clear previous content
    this.root.innerHTML = '';

    // Create tree container
    const container = this.createElement('div', ['ux4g-tree-view']);
    container.setAttribute('role', 'tree');

    const tree = this.createElement('ul', ['ux4g-tree-list']);
    
    data.forEach(node => {
      const nodeElement = this.renderNode(node, checkable, expandAll);
      tree.appendChild(nodeElement);
    });

    container.appendChild(tree);
    this.root.appendChild(container);
  }

  private renderNode(node: TreeNode, checkable: boolean, expandAll: boolean, level = 0): HTMLElement {
    const item = this.createElement('li', [
      'ux4g-tree-node',
      this._selectedId === node.id ? 'ux4g-tree-node-selected' : '',
    ].filter(Boolean));

    item.setAttribute('role', 'treeitem');
    item.setAttribute('aria-level', String(level + 1));
    item.setAttribute('data-id', node.id);

    const content = this.createElement('div', ['ux4g-tree-node-content']);
    content.style.paddingLeft = `${level * 20}px`;

    // Expand/collapse button
    if (node.children && node.children.length > 0) {
      const expandBtn = this.createElement('button', [
        'ux4g-tree-expand',
        (node.expanded || expandAll) ? 'ux4g-tree-expanded' : '',
      ].filter(Boolean));
      expandBtn.setAttribute('type', 'button');
      expandBtn.setAttribute('aria-label', 'Toggle');
      expandBtn.innerHTML = '▶';
      
      expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleNode(node.id);
      });
      
      content.appendChild(expandBtn);

      item.setAttribute('aria-expanded', String(node.expanded || expandAll));
    }

    // Checkbox
    if (checkable) {
      const checkbox = this.createElement('input', ['ux4g-tree-checkbox']);
      checkbox.type = 'checkbox';
      checkbox.checked = node.checked || false;
      
      checkbox.addEventListener('change', (e) => {
        e.stopPropagation();
        const target = e.target as HTMLInputElement;
        this.checkNode(node.id, target.checked);
      });
      
      content.appendChild(checkbox);
    }

    // Icon
    if (node.icon) {
      const icon = this.createElement('span', ['ux4g-tree-icon']);
      icon.innerHTML = node.icon;
      content.appendChild(icon);
    }

    // Label
    const label = this.createElement('span', ['ux4g-tree-label']);
    label.textContent = node.label;
    label.addEventListener('click', () => {
      this.selectNode(node.id);
    });
    content.appendChild(label);

    item.appendChild(content);

    // Children
    if (node.children && node.children.length > 0) {
      const childList = this.createElement('ul', [
        'ux4g-tree-children',
        (node.expanded || expandAll) ? 'ux4g-tree-children-visible' : '',
      ].filter(Boolean));
      
      node.children.forEach(child => {
        const childNode = this.renderNode(child, checkable, expandAll, level + 1);
        childList.appendChild(childNode);
      });
      
      item.appendChild(childList);
    }

    return item;
  }

  private selectNode(id: string): void {
    this._selectedId = id;
    this.dispatchCustomEvent('ux4g-tree-select', { nodeId: id });
    this.render();
  }

  private toggleNode(id: string): void {
    // Toggle expanded state in data
    // This is a simplified version - full implementation would update the data
    this.render();
  }

  private checkNode(id: string, checked: boolean): void {
    this.dispatchCustomEvent('ux4g-tree-check', { nodeId: id, checked });
  }

  /**
   * Expand all nodes
   */
  expandAll(): void {
    this.setBooleanAttribute('expand-all', true);
  }

  /**
   * Collapse all nodes
   */
  collapseAll(): void {
    this.setBooleanAttribute('expand-all', false);
  }
}

// Define the custom element
if (!customElements.get('ux4g-tree-view')) {
  customElements.define('ux4g-tree-view', UX4GTreeView);
}
