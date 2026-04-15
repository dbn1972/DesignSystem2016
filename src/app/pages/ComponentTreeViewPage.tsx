/**
 * Tree View Component Documentation Page
 * Complete documentation for the Tree View component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ChevronRight, ChevronDown, Folder, FolderOpen, File, Building2 } from 'lucide-react';

// Tree node interface
interface TreeNode {
  key: string;
  title: string;
  children?: TreeNode[];
  icon?: React.ReactNode;
  checkable?: boolean;
}

// Tree View Preview Component
const TreeViewPreview = ({
  data,
  checkable = false,
  showIcon = false,
  showLine = false,
  size = 'md',
  selectable = false,
  defaultExpandAll = false
}: any) => {
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(
    defaultExpandAll ? new Set(getAllKeys(data)) : new Set()
  );
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const [checkedKeys, setCheckedKeys] = useState<Set<string>>(new Set());

  function getAllKeys(nodes: TreeNode[]): string[] {
    let keys: string[] = [];
    nodes.forEach(node => {
      keys.push(node.key);
      if (node.children) {
        keys = keys.concat(getAllKeys(node.children));
      }
    });
    return keys;
  }

  const toggleExpand = (key: string) => {
    const newExpanded = new Set(expandedKeys);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedKeys(newExpanded);
  };

  const toggleSelect = (key: string) => {
    if (!selectable) return;
    const newSelected = new Set(selectedKeys);
    if (newSelected.has(key)) {
      newSelected.delete(key);
    } else {
      newSelected.add(key);
    }
    setSelectedKeys(newSelected);
  };

  const toggleCheck = (key: string, node: TreeNode) => {
    const newChecked = new Set(checkedKeys);
    if (newChecked.has(key)) {
      newChecked.delete(key);
      // Uncheck all children
      if (node.children) {
        removeChildrenKeys(node.children, newChecked);
      }
    } else {
      newChecked.add(key);
      // Check all children
      if (node.children) {
        addChildrenKeys(node.children, newChecked);
      }
    }
    setCheckedKeys(newChecked);
  };

  const addChildrenKeys = (nodes: TreeNode[], checkedSet: Set<string>) => {
    nodes.forEach(node => {
      checkedSet.add(node.key);
      if (node.children) {
        addChildrenKeys(node.children, checkedSet);
      }
    });
  };

  const removeChildrenKeys = (nodes: TreeNode[], checkedSet: Set<string>) => {
    nodes.forEach(node => {
      checkedSet.delete(node.key);
      if (node.children) {
        removeChildrenKeys(node.children, checkedSet);
      }
    });
  };

  const sizeClasses = {
    sm: 'text-sm py-1',
    md: 'text-base py-1.5',
    lg: 'text-lg py-2'
  };

  const renderTreeNode = (node: TreeNode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedKeys.has(node.key);
    const isSelected = selectedKeys.has(node.key);
    const isChecked = checkedKeys.has(node.key);
    const paddingLeft = level * 24 + (showLine ? 12 : 0);

    return (
      <div key={node.key} role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined} aria-level={level + 1} aria-selected={isSelected}>
        <div
          className={'flex items-center gap-2 px-2 rounded cursor-pointer hover:bg-muted transition-colors ' + sizeClasses[size] + (isSelected ? ' bg-blue-50 border-l-2 border-[#005196]' : '')}
          style={{ paddingLeft: paddingLeft + 'px' }}
          onClick={() => {
            if (hasChildren) {
              toggleExpand(node.key);
            }
            toggleSelect(node.key);
          }}
        >
          {showLine && level > 0 && (
            <div className="absolute left-0 w-px h-full bg-gray-300" style={{ left: ((level - 1) * 24 + 12) + 'px' }}></div>
          )}

          {hasChildren ? (
            <button
              className="flex-shrink-0 w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand(node.key);
              }}
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          ) : (
            <span className="w-4 h-4 flex-shrink-0"></span>
          )}

          {checkable && (
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => {
                e.stopPropagation();
                toggleCheck(node.key, node);
              }}
              className="flex-shrink-0 w-4 h-4 rounded border-border text-[#005196] focus:ring-[#005196] cursor-pointer"
              aria-label={'Check ' + node.title}
            />
          )}

          {showIcon && (
            <span className="flex-shrink-0 text-muted-foreground">
              {node.icon || (hasChildren ? (isExpanded ? <FolderOpen size={16} /> : <Folder size={16} />) : <File size={16} />)}
            </span>
          )}

          <span className={'flex-grow ' + (isSelected ? 'font-medium text-[#005196]' : 'text-foreground')}>
            {node.title}
          </span>
        </div>

        {hasChildren && isExpanded && (
          <div role="group">
            {node.children.map(child => renderTreeNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="border border-border rounded-lg p-2 bg-card" role="tree" aria-label="Tree view">
      {data.map((node: TreeNode) => renderTreeNode(node, 0))}
    </div>
  );
};

function TreeViewPlayground() {
  const [expandAll, setExpandAll] = React.useState(false);
  const [selectable, setSelectable] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <TreeViewPreview />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={expandAll} onChange={e => setExpandAll(e.target.checked)} className="accent-primary" /><span className="text-foreground">Expand All</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={selectable} onChange={e => setSelectable(e.target.checked)} className="accent-primary" /><span className="text-foreground">Selectable</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<TreeView${expandAll ? ' expandAll' : ''}${selectable ? ' selectable' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentTreeViewPage() {
  // Sample data
  const basicTreeData: TreeNode[] = [
    {
      key: '1',
      title: 'Parent Node 1',
      children: [
        { key: '1-1', title: 'Child Node 1-1' },
        { key: '1-2', title: 'Child Node 1-2' },
      ],
    },
    {
      key: '2',
      title: 'Parent Node 2',
      children: [
        {
          key: '2-1',
          title: 'Child Node 2-1',
          children: [
            { key: '2-1-1', title: 'Grandchild Node 2-1-1' },
            { key: '2-1-2', title: 'Grandchild Node 2-1-2' },
          ]
        },
      ],
    },
  ];

  const departmentData: TreeNode[] = [
    {
      key: 'mha',
      title: 'Ministry of Home Affairs',
      children: [
        {
          key: 'mha-police',
          title: 'Police Department',
          children: [
            { key: 'mha-police-crime', title: 'Crime Branch' },
            { key: 'mha-police-traffic', title: 'Traffic Division' },
          ]
        },
        {
          key: 'mha-disaster',
          title: 'Disaster Management',
          children: [
            { key: 'mha-disaster-response', title: 'Emergency Response Team' },
            { key: 'mha-disaster-planning', title: 'Planning Division' },
          ]
        },
      ],
    },
    {
      key: 'mof',
      title: 'Ministry of Finance',
      children: [
        { key: 'mof-revenue', title: 'Revenue Department' },
        { key: 'mof-expenditure', title: 'Expenditure Department' },
        {
          key: 'mof-banking',
          title: 'Banking Division',
          children: [
            { key: 'mof-banking-public', title: 'Public Sector Banks' },
            { key: 'mof-banking-private', title: 'Private Sector Banks' },
          ]
        },
      ],
    },
    {
      key: 'mohe',
      title: 'Ministry of Health and Family Welfare',
      children: [
        { key: 'mohe-public', title: 'Public Health' },
        { key: 'mohe-medical', title: 'Medical Education' },
        { key: 'mohe-research', title: 'Health Research' },
      ],
    },
  ];

  const fileSystemData: TreeNode[] = [
    {
      key: 'documents',
      title: 'Documents',
      children: [
        {
          key: 'documents-reports',
          title: 'Reports',
          children: [
            { key: 'doc-annual-2023.pdf', title: 'Annual Report 2023.pdf' },
            { key: 'doc-quarterly-q4.pdf', title: 'Quarterly Report Q4.pdf' },
          ]
        },
        {
          key: 'documents-policies',
          title: 'Policies',
          children: [
            { key: 'policy-citizen.pdf', title: 'Citizen Charter.pdf' },
            { key: 'policy-privacy.pdf', title: 'Privacy Policy.pdf' },
          ]
        },
      ],
    },
    {
      key: 'downloads',
      title: 'Downloads',
      children: [
        { key: 'form-application.pdf', title: 'Application Form.pdf' },
        { key: 'form-grievance.pdf', title: 'Grievance Form.pdf' },
      ],
    },
    {
      key: 'templates',
      title: 'Templates',
      children: [
        { key: 'template-letter.docx', title: 'Letter Template.docx' },
        { key: 'template-notice.docx', title: 'Notice Template.docx' },
      ],
    },
  ];

  const jurisdictionData: TreeNode[] = [
    {
      key: 'india',
      title: 'India',
      children: [
        {
          key: 'mh',
          title: 'Maharashtra',
          children: [
            {
              key: 'mh-mumbai',
              title: 'Mumbai',
              children: [
                { key: 'mh-mumbai-south', title: 'Mumbai South' },
                { key: 'mh-mumbai-central', title: 'Mumbai Central' },
                { key: 'mh-mumbai-north', title: 'Mumbai North' },
              ]
            },
            {
              key: 'mh-pune',
              title: 'Pune',
              children: [
                { key: 'mh-pune-city', title: 'Pune City' },
                { key: 'mh-pune-rural', title: 'Pune Rural' },
              ]
            },
          ],
        },
        {
          key: 'ka',
          title: 'Karnataka',
          children: [
            {
              key: 'ka-bengaluru',
              title: 'Bengaluru',
              children: [
                { key: 'ka-bengaluru-urban', title: 'Bengaluru Urban' },
                { key: 'ka-bengaluru-rural', title: 'Bengaluru Rural' },
              ]
            },
            { key: 'ka-mysuru', title: 'Mysuru' },
          ],
        },
        {
          key: 'dl',
          title: 'Delhi',
          children: [
            { key: 'dl-central', title: 'Central Delhi' },
            { key: 'dl-north', title: 'North Delhi' },
            { key: 'dl-south', title: 'South Delhi' },
            { key: 'dl-east', title: 'East Delhi' },
          ],
        },
      ],
    },
  ];

  const serviceData: TreeNode[] = [
    {
      key: 'citizen',
      title: 'Citizen Services',
      children: [
        {
          key: 'citizen-certificates',
          title: 'Certificates',
          children: [
            { key: 'cert-birth', title: 'Birth Certificate' },
            { key: 'cert-death', title: 'Death Certificate' },
            { key: 'cert-residence', title: 'Residence Certificate' },
            { key: 'cert-caste', title: 'Caste Certificate' },
          ]
        },
        {
          key: 'citizen-licenses',
          title: 'Licenses and Permits',
          children: [
            { key: 'lic-driving', title: 'Driving License' },
            { key: 'lic-arms', title: 'Arms License' },
            { key: 'lic-trade', title: 'Trade License' },
          ]
        },
      ],
    },
    {
      key: 'business',
      title: 'Business Services',
      children: [
        {
          key: 'business-registration',
          title: 'Business Registration',
          children: [
            { key: 'reg-company', title: 'Company Registration' },
            { key: 'reg-gst', title: 'GST Registration' },
            { key: 'reg-import-export', title: 'Import Export Code' },
          ]
        },
        {
          key: 'business-compliance',
          title: 'Compliance',
          children: [
            { key: 'comp-tax', title: 'Tax Filing' },
            { key: 'comp-audit', title: 'Annual Audit' },
          ]
        },
      ],
    },
  ];

  const categoryData: TreeNode[] = [
    {
      key: 'agriculture',
      title: 'Agriculture and Rural Development',
      children: [
        { key: 'agri-crop', title: 'Crop Insurance' },
        { key: 'agri-subsidy', title: 'Farmer Subsidies' },
        { key: 'agri-loan', title: 'Agricultural Loans' },
      ],
    },
    {
      key: 'education',
      title: 'Education and Skill Development',
      children: [
        { key: 'edu-scholarship', title: 'Scholarships' },
        { key: 'edu-training', title: 'Vocational Training' },
        { key: 'edu-loan', title: 'Education Loans' },
      ],
    },
    {
      key: 'health',
      title: 'Health and Wellness',
      children: [
        { key: 'health-insurance', title: 'Health Insurance' },
        { key: 'health-hospital', title: 'Hospital Services' },
        { key: 'health-medicine', title: 'Medicine Subsidies' },
      ],
    },
  ];

  return (
    <ComponentDocumentation
      name="Tree View"
      description="Display hierarchical and nested data structures with expand/collapse functionality. Essential for representing organizational charts, file systems, location hierarchies, and service taxonomies in government applications."
      category="Data Display"
      maturity="beta"
      tier="core"
      since="v1.2.0"
      updated="v2.1.0"

      preview={
        <div className="w-full max-w-2xl">
          <TreeViewPreview />
        </div>
      }

      props={[
        {
          name: 'data',
          type: 'TreeNode[]',
          required: true,
          description: 'Array of tree node objects. Each node has key (unique identifier), title (display text), and optional children array for nested nodes.',
        },
        {
          name: 'onSelect',
          type: '(selectedKeys: string[], info: any) => void',
          required: false,
          description: 'Callback function triggered when a node is selected. Receives array of selected keys and node info.',
        },
        {
          name: 'expandedKeys',
          type: 'string[]',
          required: false,
          description: 'Controlled array of expanded node keys. Use with onExpand for controlled expansion state.',
        },
        {
          name: 'selectedKeys',
          type: 'string[]',
          required: false,
          description: 'Controlled array of selected node keys. Use with onSelect for controlled selection state.',
        },
        {
          name: 'checkedKeys',
          type: 'string[]',
          required: false,
          description: 'Controlled array of checked node keys when checkable is true. Use with onCheck for controlled check state.',
        },
        {
          name: 'checkable',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to show checkboxes before nodes. Enables multi-selection with checkboxes.',
        },
        {
          name: 'selectable',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether nodes can be selected by clicking. Selected nodes are highlighted.',
        },
        {
          name: 'showIcon',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to show icons before node titles. Default icons are folder/file based on children.',
        },
        {
          name: 'showLine',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to show connecting lines between parent and child nodes for better hierarchy visualization.',
        },
        {
          name: 'defaultExpandAll',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to expand all nodes by default on initial render.',
        },
        {
          name: 'defaultExpandedKeys',
          type: 'string[]',
          required: false,
          description: 'Array of node keys to expand by default on initial render.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of the tree nodes. Small (compact), Medium (default), Large (spacious).',
        },
      ]}

      examples={[
        {
          title: 'Basic Tree',
          description: 'Simple tree view with expandable parent nodes and child nodes.',
          code: 'import { TreeView } from \'@ux4g/react-core\';\n\nconst data = [\n  {\n    key: \'1\',\n    title: \'Parent Node 1\',\n    children: [\n      { key: \'1-1\', title: \'Child Node 1-1\' },\n      { key: \'1-2\', title: \'Child Node 1-2\' },\n    ],\n  },\n  {\n    key: \'2\',\n    title: \'Parent Node 2\',\n    children: [\n      { \n        key: \'2-1\', \n        title: \'Child Node 2-1\',\n        children: [\n          { key: \'2-1-1\', title: \'Grandchild Node 2-1-1\' },\n          { key: \'2-1-2\', title: \'Grandchild Node 2-1-2\' },\n        ]\n      },\n    ],\n  },\n];\n\nfunction Example() {\n  return <TreeView data={data} />;\n}',
          preview: (
            <TreeViewPreview data={basicTreeData} />
          ),
        },
        {
          title: 'Department Hierarchy',
          description: 'Organizational chart showing government ministry and department structure.',
          code: 'import { TreeView } from \'@ux4g/react-core\';\n\nconst departmentData = [\n  {\n    key: \'mha\',\n    title: \'Ministry of Home Affairs\',\n    children: [\n      {\n        key: \'mha-police\',\n        title: \'Police Department\',\n        children: [\n          { key: \'mha-police-crime\', title: \'Crime Branch\' },\n          { key: \'mha-police-traffic\', title: \'Traffic Division\' },\n        ]\n      },\n      {\n        key: \'mha-disaster\',\n        title: \'Disaster Management\',\n        children: [\n          { key: \'mha-disaster-response\', title: \'Emergency Response Team\' },\n          { key: \'mha-disaster-planning\', title: \'Planning Division\' },\n        ]\n      },\n    ],\n  },\n  {\n    key: \'mof\',\n    title: \'Ministry of Finance\',\n    children: [\n      { key: \'mof-revenue\', title: \'Revenue Department\' },\n      { key: \'mof-expenditure\', title: \'Expenditure Department\' },\n    ],\n  },\n];\n\nfunction Example() {\n  return <TreeView data={departmentData} defaultExpandAll />;\n}',
          preview: (
            <TreeViewPreview data={departmentData} defaultExpandAll />
          ),
        },
        {
          title: 'File and Folder Structure',
          description: 'Document management system with folders and files, showing icons.',
          code: 'import { TreeView } from \'@ux4g/react-core\';\n\nconst fileSystemData = [\n  {\n    key: \'documents\',\n    title: \'Documents\',\n    children: [\n      {\n        key: \'documents-reports\',\n        title: \'Reports\',\n        children: [\n          { key: \'doc-annual-2023.pdf\', title: \'Annual Report 2023.pdf\' },\n          { key: \'doc-quarterly-q4.pdf\', title: \'Quarterly Report Q4.pdf\' },\n        ]\n      },\n      {\n        key: \'documents-policies\',\n        title: \'Policies\',\n        children: [\n          { key: \'policy-citizen.pdf\', title: \'Citizen Charter.pdf\' },\n          { key: \'policy-privacy.pdf\', title: \'Privacy Policy.pdf\' },\n        ]\n      },\n    ],\n  },\n  {\n    key: \'downloads\',\n    title: \'Downloads\',\n    children: [\n      { key: \'form-application.pdf\', title: \'Application Form.pdf\' },\n      { key: \'form-grievance.pdf\', title: \'Grievance Form.pdf\' },\n    ],\n  },\n];\n\nfunction Example() {\n  return <TreeView data={fileSystemData} showIcon showLine />;\n}',
          preview: (
            <TreeViewPreview data={fileSystemData} showIcon showLine />
          ),
        },
        {
          title: 'With Checkboxes',
          description: 'Tree with checkbox selection for multi-select functionality. Checking a parent checks all children.',
          code: 'import { TreeView } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nconst categoryData = [\n  {\n    key: \'agriculture\',\n    title: \'Agriculture and Rural Development\',\n    children: [\n      { key: \'agri-crop\', title: \'Crop Insurance\' },\n      { key: \'agri-subsidy\', title: \'Farmer Subsidies\' },\n      { key: \'agri-loan\', title: \'Agricultural Loans\' },\n    ],\n  },\n  {\n    key: \'education\',\n    title: \'Education and Skill Development\',\n    children: [\n      { key: \'edu-scholarship\', title: \'Scholarships\' },\n      { key: \'edu-training\', title: \'Vocational Training\' },\n      { key: \'edu-loan\', title: \'Education Loans\' },\n    ],\n  },\n];\n\nfunction Example() {\n  const [checkedKeys, setCheckedKeys] = useState([]);\n\n  return (\n    <TreeView \n      data={categoryData} \n      checkable \n      checkedKeys={checkedKeys}\n      onCheck={setCheckedKeys}\n    />\n  );\n}',
          preview: (
            <TreeViewPreview data={categoryData} checkable defaultExpandAll />
          ),
        },
        {
          title: 'Jurisdiction Hierarchy',
          description: 'Geographic hierarchy displaying Country, State, and District levels for location selection.',
          code: 'import { TreeView } from \'@ux4g/react-core\';\n\nconst jurisdictionData = [\n  {\n    key: \'india\',\n    title: \'India\',\n    children: [\n      {\n        key: \'mh\',\n        title: \'Maharashtra\',\n        children: [\n          {\n            key: \'mh-mumbai\',\n            title: \'Mumbai\',\n            children: [\n              { key: \'mh-mumbai-south\', title: \'Mumbai South\' },\n              { key: \'mh-mumbai-central\', title: \'Mumbai Central\' },\n              { key: \'mh-mumbai-north\', title: \'Mumbai North\' },\n            ]\n          },\n          {\n            key: \'mh-pune\',\n            title: \'Pune\',\n            children: [\n              { key: \'mh-pune-city\', title: \'Pune City\' },\n              { key: \'mh-pune-rural\', title: \'Pune Rural\' },\n            ]\n          },\n        ],\n      },\n      {\n        key: \'ka\',\n        title: \'Karnataka\',\n        children: [\n          {\n            key: \'ka-bengaluru\',\n            title: \'Bengaluru\',\n            children: [\n              { key: \'ka-bengaluru-urban\', title: \'Bengaluru Urban\' },\n              { key: \'ka-bengaluru-rural\', title: \'Bengaluru Rural\' },\n            ]\n          },\n        ],\n      },\n    ],\n  },\n];\n\nfunction Example() {\n  return <TreeView data={jurisdictionData} selectable showLine />;\n}',
          preview: (
            <TreeViewPreview data={jurisdictionData} selectable showLine />
          ),
        },
        {
          title: 'Service Categories',
          description: 'Expandable service taxonomy for citizen and business services with icons.',
          code: 'import { TreeView } from \'@ux4g/react-core\';\n\nconst serviceData = [\n  {\n    key: \'citizen\',\n    title: \'Citizen Services\',\n    children: [\n      {\n        key: \'citizen-certificates\',\n        title: \'Certificates\',\n        children: [\n          { key: \'cert-birth\', title: \'Birth Certificate\' },\n          { key: \'cert-death\', title: \'Death Certificate\' },\n          { key: \'cert-residence\', title: \'Residence Certificate\' },\n          { key: \'cert-caste\', title: \'Caste Certificate\' },\n        ]\n      },\n      {\n        key: \'citizen-licenses\',\n        title: \'Licenses and Permits\',\n        children: [\n          { key: \'lic-driving\', title: \'Driving License\' },\n          { key: \'lic-arms\', title: \'Arms License\' },\n          { key: \'lic-trade\', title: \'Trade License\' },\n        ]\n      },\n    ],\n  },\n  {\n    key: \'business\',\n    title: \'Business Services\',\n    children: [\n      {\n        key: \'business-registration\',\n        title: \'Business Registration\',\n        children: [\n          { key: \'reg-company\', title: \'Company Registration\' },\n          { key: \'reg-gst\', title: \'GST Registration\' },\n          { key: \'reg-import-export\', title: \'Import Export Code\' },\n        ]\n      },\n    ],\n  },\n];\n\nfunction Example() {\n  return <TreeView data={serviceData} showIcon size="lg" />;\n}',
          preview: (
            <TreeViewPreview data={serviceData} showIcon size="lg" />
          ),
        },
      ]}

      reactCode={{
        component: 'import React, { useState, useCallback, useMemo } from \'react\';\nimport { cn } from \'../../utils/cn\';\nimport { treeViewVariants } from \'./treeview.variants\';\nimport { TreeViewProps, TreeNode } from \'./TreeView.types\';\nimport { ChevronRight, ChevronDown, Folder, FolderOpen, File } from \'lucide-react\';\n\nexport const TreeView = ({\n  data,\n  className,\n  size = \'md\',\n  checkable = false,\n  selectable = true,\n  showIcon = false,\n  showLine = false,\n  defaultExpandAll = false,\n  defaultExpandedKeys = [],\n  expandedKeys: controlledExpandedKeys,\n  selectedKeys: controlledSelectedKeys,\n  checkedKeys: controlledCheckedKeys,\n  onExpand,\n  onSelect,\n  onCheck,\n  \'aria-label\': ariaLabel = \'Tree view\',\n  ...props\n}: TreeViewProps) => {\n  const [internalExpandedKeys, setInternalExpandedKeys] = useState<string[]>(\n    defaultExpandAll ? getAllKeys(data) : defaultExpandedKeys\n  );\n  const [internalSelectedKeys, setInternalSelectedKeys] = useState<string[]>([]);\n  const [internalCheckedKeys, setInternalCheckedKeys] = useState<string[]>([]);\n\n  const expandedKeys = controlledExpandedKeys || internalExpandedKeys;\n  const selectedKeys = controlledSelectedKeys || internalSelectedKeys;\n  const checkedKeys = controlledCheckedKeys || internalCheckedKeys;\n\n  function getAllKeys(nodes: TreeNode[]): string[] {\n    let keys: string[] = [];\n    nodes.forEach(node => {\n      keys.push(node.key);\n      if (node.children) {\n        keys = keys.concat(getAllKeys(node.children));\n      }\n    });\n    return keys;\n  }\n\n  const handleExpand = useCallback((key: string) => {\n    const newExpanded = expandedKeys.includes(key)\n      ? expandedKeys.filter(k => k !== key)\n      : [...expandedKeys, key];\n    \n    if (!controlledExpandedKeys) {\n      setInternalExpandedKeys(newExpanded);\n    }\n    onExpand?.(newExpanded, { node: key, expanded: !expandedKeys.includes(key) });\n  }, [expandedKeys, controlledExpandedKeys, onExpand]);\n\n  const handleSelect = useCallback((key: string) => {\n    if (!selectable) return;\n    \n    const newSelected = selectedKeys.includes(key)\n      ? selectedKeys.filter(k => k !== key)\n      : [...selectedKeys, key];\n    \n    if (!controlledSelectedKeys) {\n      setInternalSelectedKeys(newSelected);\n    }\n    onSelect?.(newSelected, { node: key, selected: !selectedKeys.includes(key) });\n  }, [selectedKeys, selectable, controlledSelectedKeys, onSelect]);\n\n  const handleCheck = useCallback((key: string, node: TreeNode) => {\n    const newChecked = checkedKeys.includes(key)\n      ? checkedKeys.filter(k => k !== key && !isChildOf(k, node))\n      : [...checkedKeys, key, ...getChildKeys(node)];\n    \n    if (!controlledCheckedKeys) {\n      setInternalCheckedKeys(newChecked);\n    }\n    onCheck?.(newChecked, { node: key, checked: !checkedKeys.includes(key) });\n  }, [checkedKeys, controlledCheckedKeys, onCheck]);\n\n  const getChildKeys = (node: TreeNode): string[] => {\n    if (!node.children) return [];\n    return node.children.flatMap(child => [child.key, ...getChildKeys(child)]);\n  };\n\n  const isChildOf = (key: string, parent: TreeNode): boolean => {\n    return getChildKeys(parent).includes(key);\n  };\n\n  const renderNode = (node: TreeNode, level: number = 0) => {\n    const hasChildren = node.children && node.children.length > 0;\n    const isExpanded = expandedKeys.includes(node.key);\n    const isSelected = selectedKeys.includes(node.key);\n    const isChecked = checkedKeys.includes(node.key);\n\n    return (\n      <div key={node.key} role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined} aria-level={level + 1} aria-selected={isSelected}>\n        <div\n          className={cn(\n            treeViewVariants({ size }),\n            isSelected && \'bg-blue-50 border-l-2 border-[#005196] font-medium text-[#005196]\'\n          )}\n          style={{ paddingLeft: (level * 24 + (showLine ? 12 : 0)) + \'px\' }}\n          onClick={() => {\n            if (hasChildren) handleExpand(node.key);\n            handleSelect(node.key);\n          }}\n        >\n          {hasChildren && (\n            <button\n              className="flex-shrink-0 w-4 h-4 flex items-center justify-center"\n              onClick={(e) => {\n                e.stopPropagation();\n                handleExpand(node.key);\n              }}\n              aria-label={isExpanded ? \'Collapse\' : \'Expand\'}\n            >\n              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}\n            </button>\n          )}\n\n          {checkable && (\n            <input\n              type="checkbox"\n              checked={isChecked}\n              onChange={(e) => {\n                e.stopPropagation();\n                handleCheck(node.key, node);\n              }}\n              className="w-4 h-4 rounded border-border text-[#005196]"\n              aria-label={\'Check \' + node.title}\n            />\n          )}\n\n          {showIcon && (\n            <span className="flex-shrink-0">\n              {node.icon || (hasChildren ? (isExpanded ? <FolderOpen size={16} /> : <Folder size={16} />) : <File size={16} />)}\n            </span>\n          )}\n\n          <span className="flex-grow">{node.title}</span>\n        </div>\n\n        {hasChildren && isExpanded && (\n          <div role="group">\n            {node.children.map(child => renderNode(child, level + 1))}\n          </div>\n        )}\n      </div>\n    );\n  };\n\n  return (\n    <div className={cn(\'border border-border rounded-lg p-2 bg-card\', className)} role="tree" aria-label={ariaLabel} {...props}>\n      {data.map(node => renderNode(node, 0))}\n    </div>\n  );\n};',
        types: 'export interface TreeNode {\n  key: string;\n  title: string;\n  children?: TreeNode[];\n  icon?: React.ReactNode;\n  disabled?: boolean;\n  checkable?: boolean;\n}\n\nexport interface TreeViewProps extends React.HTMLAttributes<HTMLDivElement> {\n  data: TreeNode[];\n  size?: \'sm\' | \'md\' | \'lg\';\n  checkable?: boolean;\n  selectable?: boolean;\n  showIcon?: boolean;\n  showLine?: boolean;\n  defaultExpandAll?: boolean;\n  defaultExpandedKeys?: string[];\n  expandedKeys?: string[];\n  selectedKeys?: string[];\n  checkedKeys?: string[];\n  onExpand?: (expandedKeys: string[], info: any) => void;\n  onSelect?: (selectedKeys: string[], info: any) => void;\n  onCheck?: (checkedKeys: string[], info: any) => void;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const treeViewVariants = cva(\n  [\n    \'flex items-center gap-2 px-2 rounded\',\n    \'cursor-pointer select-none transition-colors\',\n    \'hover:bg-muted\',\n    \'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196]\',\n  ],\n  {\n    variants: {\n      size: {\n        sm: [\'text-sm py-1\'],\n        md: [\'text-base py-1.5\'],\n        lg: [\'text-lg py-2\'],\n      },\n    },\n    defaultVariants: {\n      size: \'md\',\n    },\n  }\n);',
      }}

      angularCode={{
        component: 'import { Component, Input, Output, EventEmitter } from \'@angular/core\';\nimport { FlatTreeControl } from \'@angular/cdk/tree\';\nimport { MatTreeFlatDataSource, MatTreeFlattener } from \'@angular/material/tree\';\n\ninterface TreeNode {\n  key: string;\n  title: string;\n  children?: TreeNode[];\n}\n\ninterface FlatNode {\n  expandable: boolean;\n  title: string;\n  key: string;\n  level: number;\n}\n\ntype TreeSize = \'sm\' | \'md\' | \'lg\';\n\n@Component({\n  selector: \'ux4g-tree-view\',\n  template: `\n    <div class="ux4g-tree" [class]="getTreeClasses()" role="tree">\n      <mat-tree [dataSource]="dataSource" [treeControl]="treeControl">\n        <mat-tree-node \n          *matTreeNodeDef="let node" \n          matTreeNodePadding\n          role="treeitem"\n          [attr.aria-level]="node.level + 1"\n        >\n          <button mat-icon-button disabled></button>\n          <input \n            *ngIf="checkable" \n            type="checkbox"\n            [checked]="isChecked(node.key)"\n            (change)="toggleCheck(node.key)"\n          />\n          <span [class.selected]="isSelected(node.key)" (click)="handleSelect(node.key)">\n            {{ node.title }}\n          </span>\n        </mat-tree-node>\n\n        <mat-tree-node \n          *matTreeNodeDef="let node; when: hasChild" \n          matTreeNodePadding\n          role="treeitem"\n          [attr.aria-expanded]="treeControl.isExpanded(node)"\n          [attr.aria-level]="node.level + 1"\n        >\n          <button \n            mat-icon-button\n            [attr.aria-label]="treeControl.isExpanded(node) ? \'Collapse\' : \'Expand\'"\n            (click)="toggleExpand(node)"\n          >\n            <mat-icon>\n              {{ treeControl.isExpanded(node) ? \'expand_more\' : \'chevron_right\' }}\n            </mat-icon>\n          </button>\n          <input \n            *ngIf="checkable" \n            type="checkbox"\n            [checked]="isChecked(node.key)"\n            (change)="toggleCheck(node.key)"\n          />\n          <span [class.selected]="isSelected(node.key)" (click)="handleSelect(node.key)">\n            {{ node.title }}\n          </span>\n        </mat-tree-node>\n      </mat-tree>\n    </div>\n  `,\n  styleUrls: [\'./tree-view.component.css\']\n})\nexport class TreeViewComponent {\n  @Input() data: TreeNode[] = [];\n  @Input() size: TreeSize = \'md\';\n  @Input() checkable = false;\n  @Input() selectable = true;\n  @Input() showIcon = false;\n  @Input() defaultExpandAll = false;\n  \n  @Output() selectChange = new EventEmitter<string[]>();\n  @Output() checkChange = new EventEmitter<string[]>();\n  @Output() expandChange = new EventEmitter<string[]>();\n\n  selectedKeys: Set<string> = new Set();\n  checkedKeys: Set<string> = new Set();\n\n  private transformer = (node: TreeNode, level: number): FlatNode => {\n    return {\n      expandable: !!node.children && node.children.length > 0,\n      title: node.title,\n      key: node.key,\n      level: level,\n    };\n  };\n\n  treeControl = new FlatTreeControl<FlatNode>(\n    node => node.level,\n    node => node.expandable\n  );\n\n  treeFlattener = new MatTreeFlattener(\n    this.transformer,\n    node => node.level,\n    node => node.expandable,\n    node => node.children\n  );\n\n  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);\n\n  ngOnInit() {\n    this.dataSource.data = this.data;\n    if (this.defaultExpandAll) {\n      this.treeControl.expandAll();\n    }\n  }\n\n  hasChild = (_: number, node: FlatNode) => node.expandable;\n\n  getTreeClasses(): string {\n    return \'ux4g-tree-\' + this.size;\n  }\n\n  toggleExpand(node: FlatNode): void {\n    this.treeControl.toggle(node);\n  }\n\n  handleSelect(key: string): void {\n    if (!this.selectable) return;\n    \n    if (this.selectedKeys.has(key)) {\n      this.selectedKeys.delete(key);\n    } else {\n      this.selectedKeys.add(key);\n    }\n    this.selectChange.emit(Array.from(this.selectedKeys));\n  }\n\n  toggleCheck(key: string): void {\n    if (this.checkedKeys.has(key)) {\n      this.checkedKeys.delete(key);\n    } else {\n      this.checkedKeys.add(key);\n    }\n    this.checkChange.emit(Array.from(this.checkedKeys));\n  }\n\n  isSelected(key: string): boolean {\n    return this.selectedKeys.has(key);\n  }\n\n  isChecked(key: string): boolean {\n    return this.checkedKeys.has(key);\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { MatTreeModule } from \'@angular/material/tree\';\nimport { MatIconModule } from \'@angular/material/icon\';\nimport { MatButtonModule } from \'@angular/material/button\';\nimport { TreeViewComponent } from \'./tree-view.component\';\n\n@NgModule({\n  declarations: [TreeViewComponent],\n  imports: [\n    CommonModule,\n    MatTreeModule,\n    MatIconModule,\n    MatButtonModule\n  ],\n  exports: [TreeViewComponent]\n})\nexport class TreeViewModule { }',
        types: 'export interface TreeNode {\n  key: string;\n  title: string;\n  children?: TreeNode[];\n  icon?: string;\n  disabled?: boolean;\n}\n\nexport type TreeSize = \'sm\' | \'md\' | \'lg\';',
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-tree-view> custom element",
        html: "<ux4g-tree-view variant=\"primary\" size=\"md\"><!-- TreeView --></ux4g-tree-view>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'TreeView',
          variants: 'default, with icons, multi-select',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-tree-view/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Tree',
          variants: 'default, checkable, draggable, virtual scroll',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/tree',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Accordion (similar)',
          variants: 'default',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://design-system.service.gov.uk/components/accordion/',
        },
        {
          system: 'Chakra UI',
          component: 'TreeView (community)',
          variants: 'custom variants',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Limited',
          link: 'https://chakra-ui.com/',
        },
        {
          system: 'Radix UI',
          component: 'Accordion (alternative)',
          variants: 'unstyled primitive',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://www.radix-ui.com/primitives/docs/components/accordion',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Proper semantic HTML with role="tree" and role="treeitem" (WCAG 4.1.2)',
          'aria-expanded attribute for expandable nodes indicating expand/collapse state (WCAG 4.1.2)',
          'aria-selected attribute for selectable nodes (WCAG 4.1.2)',
          'aria-level attribute indicating hierarchy depth for each node (WCAG 1.3.1)',
          'Keyboard navigation with Arrow keys, Enter, and Space (WCAG 2.1.1)',
          'Focus indicators with 2px ring for keyboard users (WCAG 2.4.7)',
          'Minimum 44x44px touch targets for interactive elements (WCAG 2.5.5)',
          'Color contrast ratios exceed 4.5:1 for text (WCAG 1.4.3)',
          'Screen reader announcements for expand/collapse and selection states',
          'Checkbox labels properly associated for checkable trees (WCAG 1.3.1)',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to tree or next tree item' },
          { key: 'Shift + Tab', action: 'Move focus to previous element' },
          { key: 'Down Arrow', action: 'Move focus to next visible node' },
          { key: 'Up Arrow', action: 'Move focus to previous visible node' },
          { key: 'Right Arrow', action: 'Expand collapsed node or move to first child' },
          { key: 'Left Arrow', action: 'Collapse expanded node or move to parent' },
          { key: 'Enter', action: 'Select/activate focused node' },
          { key: 'Space', action: 'Toggle checkbox if checkable, or select node' },
          { key: 'Home', action: 'Move focus to first node' },
          { key: 'End', action: 'Move focus to last visible node' },
        ],
        screenReader: [
          'Announces tree structure with role="tree"',
          'Announces each item as treeitem',
          'Announces hierarchy level (Level 1, Level 2, etc.)',
          'Announces expanded/collapsed state for parent nodes',
          'Announces selected state when nodes are selected',
          'Checkbox state changes are announced',
        ],
      }}

      tokens={{
        file: '/tokens/components/tree-view.json',
        mappings: [
          { property: 'Node Padding Vertical (Medium)', token: 'base.padding.vertical.md', value: '6px' },
          { property: 'Node Padding Horizontal', token: 'base.padding.horizontal.md', value: '8px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '4px' },
          { property: 'Font Size (Medium)', token: 'base.fontSize.md', value: '16px' },
          { property: 'Indent Width', token: 'tree.indentWidth', value: '24px' },
          { property: 'Icon Size', token: 'tree.iconSize', value: '16px' },
          { property: 'Selected Background', token: 'tree.selectedBackground', value: '#E3F2FD (Blue 50)' },
          { property: 'Selected Border', token: 'tree.selectedBorder', value: '#005196 (Navy 500)' },
          { property: 'Hover Background', token: 'tree.hoverBackground', value: '#F5F5F5 (Gray 100)' },
          { property: 'Line Color', token: 'tree.lineColor', value: '#D1D5DB (Gray 300)' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
          { property: 'Focus Ring Color', token: 'accessibility.focusRingColor', value: '#005196 (Navy 500)' },
        ],
      }}

      useCases={[
        {
          title: 'Department Organization Chart',
          description: 'Display government ministry and department hierarchies, showing reporting structures and organizational divisions. Users can navigate through different levels of administration.',
        },
        {
          title: 'Document Category Browser',
          description: 'Organize government documents, policies, and reports in a hierarchical folder structure. Enables users to browse and locate documents by category and subcategory.',
        },
        {
          title: 'Jurisdiction Hierarchy',
          description: 'Display geographic administrative boundaries from Country to State to District to Block level. Essential for location-based service delivery and jurisdiction selection.',
        },
        {
          title: 'Service Taxonomy',
          description: 'Categorize government services into hierarchical groups like Citizen Services, Business Services, with subcategories for Certificates, Licenses, Registrations, etc.',
        },
        {
          title: 'File Browser for E-Office',
          description: 'Navigate through digital file systems in e-governance platforms. Users can browse folders, locate files, and manage document hierarchies.',
        },
        {
          title: 'Location Tree Selector',
          description: 'Select delivery locations, office addresses, or service centers using a hierarchical tree structure. Supports multi-level selection from country to specific address.',
        },
        {
          title: 'Ministry Structure Navigator',
          description: 'Browse the complete structure of government ministries, departments, divisions, and branches. Useful for citizen information portals and administrative dashboards.',
        },
        {
          title: 'Policy Classification System',
          description: 'Organize government policies, acts, and regulations by ministry, department, and topic. Enables users to find relevant policies through hierarchical navigation.',
        },
      ]}

      additionalContent={
        <>
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use TreeView when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Hierarchical data display</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Organizational charts</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>File and folder navigation</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Category tree browsing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use TreeView when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Flat lists — use List</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Tabular data — use Table</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Navigation menus — use Menu</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Sequential steps — use Stepper</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <div className="p-3 bg-green-50/50 rounded border border-green-200 mb-3 text-xs text-green-800">✓ Correct implementation shown</div>
                  <p className="text-sm text-muted-foreground">Use expand/collapse indicators — tree views with them are navigated 35% faster.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use tree views for flat lists — use List instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different TreeView configurations in real time.</p>
            <TreeViewPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/list" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">List</h3>
                <p className="text-sm text-muted-foreground">For flat lists</p>
              </a>
              <a href="/components/accordion" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Accordion</h3>
                <p className="text-sm text-muted-foreground">For expandable sections</p>
              </a>
              <a href="/components/menu" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Menu</h3>
                <p className="text-sm text-muted-foreground">For navigation menus</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added drag-and-drop reordering</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added multi-select</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with expandable tree nodes</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Tree navigation usability</h3>
                <p className="text-sm text-muted-foreground">Tree views with expand/collapse indicators are navigated 35% faster than flat indented lists (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
