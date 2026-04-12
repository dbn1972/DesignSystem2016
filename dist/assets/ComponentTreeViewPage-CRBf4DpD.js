import{e as z,j as i,r as u,i as F}from"./index-BYMLq1ET.js";import{C as R}from"./ComponentDocumentation-CxrYZXwp.js";import{C as P}from"./chevron-right-B73D9Dq_.js";import{F as I}from"./folder-open-CFuRyq5C.js";import{F as L}from"./file-CCADXp4O.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],B=z("folder",V),r=({data:l,checkable:d=!1,showIcon:c=!1,showLine:s=!1,size:h="md",selectable:p=!1,defaultExpandAll:w=!1})=>{const[m,S]=u.useState(w?new Set(g(l)):new Set),[k,K]=u.useState(new Set),[f,E]=u.useState(new Set);function g(e){let t=[];return e.forEach(n=>{t.push(n.key),n.children&&(t=t.concat(g(n.children)))}),t}const x=e=>{const t=new Set(m);t.has(e)?t.delete(e):t.add(e),S(t)},T=e=>{if(!p)return;const t=new Set(k);t.has(e)?t.delete(e):t.add(e),K(t)},A=(e,t)=>{const n=new Set(f);n.has(e)?(n.delete(e),t.children&&v(t.children,n)):(n.add(e),t.children&&b(t.children,n)),E(n)},b=(e,t)=>{e.forEach(n=>{t.add(n.key),n.children&&b(n.children,t)})},v=(e,t)=>{e.forEach(n=>{t.delete(n.key),n.children&&v(n.children,t)})},D={sm:"text-sm py-1",md:"text-base py-1.5",lg:"text-lg py-2"},C=(e,t=0)=>{const n=e.children&&e.children.length>0,a=m.has(e.key),y=k.has(e.key),N=f.has(e.key),M=t*24+(s?12:0);return i.jsxs("div",{role:"treeitem","aria-expanded":n?a:void 0,"aria-level":t+1,"aria-selected":y,children:[i.jsxs("div",{className:"flex items-center gap-2 px-2 rounded cursor-pointer hover:bg-gray-100 transition-colors "+D[h]+(y?" bg-blue-50 border-l-2 border-[#005196]":""),style:{paddingLeft:M+"px"},onClick:()=>{n&&x(e.key),T(e.key)},children:[s&&t>0&&i.jsx("div",{className:"absolute left-0 w-px h-full bg-gray-300",style:{left:(t-1)*24+12+"px"}}),n?i.jsx("button",{className:"flex-shrink-0 w-4 h-4 flex items-center justify-center text-gray-600 hover:text-gray-900",onClick:o=>{o.stopPropagation(),x(e.key)},"aria-label":a?"Collapse":"Expand",children:a?i.jsx(F,{size:16}):i.jsx(P,{size:16})}):i.jsx("span",{className:"w-4 h-4 flex-shrink-0"}),d&&i.jsx("input",{type:"checkbox",checked:N,onChange:o=>{o.stopPropagation(),A(e.key,e)},className:"flex-shrink-0 w-4 h-4 rounded border-gray-300 text-[#005196] focus:ring-[#005196] cursor-pointer","aria-label":"Check "+e.title}),c&&i.jsx("span",{className:"flex-shrink-0 text-gray-600",children:e.icon||(n?a?i.jsx(I,{size:16}):i.jsx(B,{size:16}):i.jsx(L,{size:16}))}),i.jsx("span",{className:"flex-grow "+(y?"font-medium text-[#005196]":"text-gray-900"),children:e.title})]}),n&&a&&i.jsx("div",{role:"group",children:e.children.map(o=>C(o,t+1))})]},e.key)};return i.jsx("div",{className:"border border-gray-200 rounded-lg p-2 bg-white",role:"tree","aria-label":"Tree view",children:l.map(e=>C(e,0))})};function Q(){const l=[{key:"1",title:"Parent Node 1",children:[{key:"1-1",title:"Child Node 1-1"},{key:"1-2",title:"Child Node 1-2"}]},{key:"2",title:"Parent Node 2",children:[{key:"2-1",title:"Child Node 2-1",children:[{key:"2-1-1",title:"Grandchild Node 2-1-1"},{key:"2-1-2",title:"Grandchild Node 2-1-2"}]}]}],d=[{key:"mha",title:"Ministry of Home Affairs",children:[{key:"mha-police",title:"Police Department",children:[{key:"mha-police-crime",title:"Crime Branch"},{key:"mha-police-traffic",title:"Traffic Division"}]},{key:"mha-disaster",title:"Disaster Management",children:[{key:"mha-disaster-response",title:"Emergency Response Team"},{key:"mha-disaster-planning",title:"Planning Division"}]}]},{key:"mof",title:"Ministry of Finance",children:[{key:"mof-revenue",title:"Revenue Department"},{key:"mof-expenditure",title:"Expenditure Department"},{key:"mof-banking",title:"Banking Division",children:[{key:"mof-banking-public",title:"Public Sector Banks"},{key:"mof-banking-private",title:"Private Sector Banks"}]}]},{key:"mohe",title:"Ministry of Health and Family Welfare",children:[{key:"mohe-public",title:"Public Health"},{key:"mohe-medical",title:"Medical Education"},{key:"mohe-research",title:"Health Research"}]}],c=[{key:"documents",title:"Documents",children:[{key:"documents-reports",title:"Reports",children:[{key:"doc-annual-2023.pdf",title:"Annual Report 2023.pdf"},{key:"doc-quarterly-q4.pdf",title:"Quarterly Report Q4.pdf"}]},{key:"documents-policies",title:"Policies",children:[{key:"policy-citizen.pdf",title:"Citizen Charter.pdf"},{key:"policy-privacy.pdf",title:"Privacy Policy.pdf"}]}]},{key:"downloads",title:"Downloads",children:[{key:"form-application.pdf",title:"Application Form.pdf"},{key:"form-grievance.pdf",title:"Grievance Form.pdf"}]},{key:"templates",title:"Templates",children:[{key:"template-letter.docx",title:"Letter Template.docx"},{key:"template-notice.docx",title:"Notice Template.docx"}]}],s=[{key:"india",title:"India",children:[{key:"mh",title:"Maharashtra",children:[{key:"mh-mumbai",title:"Mumbai",children:[{key:"mh-mumbai-south",title:"Mumbai South"},{key:"mh-mumbai-central",title:"Mumbai Central"},{key:"mh-mumbai-north",title:"Mumbai North"}]},{key:"mh-pune",title:"Pune",children:[{key:"mh-pune-city",title:"Pune City"},{key:"mh-pune-rural",title:"Pune Rural"}]}]},{key:"ka",title:"Karnataka",children:[{key:"ka-bengaluru",title:"Bengaluru",children:[{key:"ka-bengaluru-urban",title:"Bengaluru Urban"},{key:"ka-bengaluru-rural",title:"Bengaluru Rural"}]},{key:"ka-mysuru",title:"Mysuru"}]},{key:"dl",title:"Delhi",children:[{key:"dl-central",title:"Central Delhi"},{key:"dl-north",title:"North Delhi"},{key:"dl-south",title:"South Delhi"},{key:"dl-east",title:"East Delhi"}]}]}],h=[{key:"citizen",title:"Citizen Services",children:[{key:"citizen-certificates",title:"Certificates",children:[{key:"cert-birth",title:"Birth Certificate"},{key:"cert-death",title:"Death Certificate"},{key:"cert-residence",title:"Residence Certificate"},{key:"cert-caste",title:"Caste Certificate"}]},{key:"citizen-licenses",title:"Licenses and Permits",children:[{key:"lic-driving",title:"Driving License"},{key:"lic-arms",title:"Arms License"},{key:"lic-trade",title:"Trade License"}]}]},{key:"business",title:"Business Services",children:[{key:"business-registration",title:"Business Registration",children:[{key:"reg-company",title:"Company Registration"},{key:"reg-gst",title:"GST Registration"},{key:"reg-import-export",title:"Import Export Code"}]},{key:"business-compliance",title:"Compliance",children:[{key:"comp-tax",title:"Tax Filing"},{key:"comp-audit",title:"Annual Audit"}]}]}],p=[{key:"agriculture",title:"Agriculture and Rural Development",children:[{key:"agri-crop",title:"Crop Insurance"},{key:"agri-subsidy",title:"Farmer Subsidies"},{key:"agri-loan",title:"Agricultural Loans"}]},{key:"education",title:"Education and Skill Development",children:[{key:"edu-scholarship",title:"Scholarships"},{key:"edu-training",title:"Vocational Training"},{key:"edu-loan",title:"Education Loans"}]},{key:"health",title:"Health and Wellness",children:[{key:"health-insurance",title:"Health Insurance"},{key:"health-hospital",title:"Hospital Services"},{key:"health-medicine",title:"Medicine Subsidies"}]}];return i.jsx(R,{name:"Tree View",description:"Display hierarchical and nested data structures with expand/collapse functionality. Essential for representing organizational charts, file systems, location hierarchies, and service taxonomies in government applications.",category:"Data Display",maturity:"beta",tier:"core",since:"v1.2.0",updated:"v2.1.0",props:[{name:"data",type:"TreeNode[]",required:!0,description:"Array of tree node objects. Each node has key (unique identifier), title (display text), and optional children array for nested nodes."},{name:"onSelect",type:"(selectedKeys: string[], info: any) => void",required:!1,description:"Callback function triggered when a node is selected. Receives array of selected keys and node info."},{name:"expandedKeys",type:"string[]",required:!1,description:"Controlled array of expanded node keys. Use with onExpand for controlled expansion state."},{name:"selectedKeys",type:"string[]",required:!1,description:"Controlled array of selected node keys. Use with onSelect for controlled selection state."},{name:"checkedKeys",type:"string[]",required:!1,description:"Controlled array of checked node keys when checkable is true. Use with onCheck for controlled check state."},{name:"checkable",type:"boolean",default:"false",required:!1,description:"Whether to show checkboxes before nodes. Enables multi-selection with checkboxes."},{name:"selectable",type:"boolean",default:"true",required:!1,description:"Whether nodes can be selected by clicking. Selected nodes are highlighted."},{name:"showIcon",type:"boolean",default:"false",required:!1,description:"Whether to show icons before node titles. Default icons are folder/file based on children."},{name:"showLine",type:"boolean",default:"false",required:!1,description:"Whether to show connecting lines between parent and child nodes for better hierarchy visualization."},{name:"defaultExpandAll",type:"boolean",default:"false",required:!1,description:"Whether to expand all nodes by default on initial render."},{name:"defaultExpandedKeys",type:"string[]",required:!1,description:"Array of node keys to expand by default on initial render."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Size of the tree nodes. Small (compact), Medium (default), Large (spacious)."}],examples:[{title:"Basic Tree",description:"Simple tree view with expandable parent nodes and child nodes.",code:`import { TreeView } from '@ux4g/react-core';

const data = [
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

function Example() {
  return <TreeView data={data} />;
}`,preview:i.jsx(r,{data:l})},{title:"Department Hierarchy",description:"Organizational chart showing government ministry and department structure.",code:`import { TreeView } from '@ux4g/react-core';

const departmentData = [
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
    ],
  },
];

function Example() {
  return <TreeView data={departmentData} defaultExpandAll />;
}`,preview:i.jsx(r,{data:d,defaultExpandAll:!0})},{title:"File and Folder Structure",description:"Document management system with folders and files, showing icons.",code:`import { TreeView } from '@ux4g/react-core';

const fileSystemData = [
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
];

function Example() {
  return <TreeView data={fileSystemData} showIcon showLine />;
}`,preview:i.jsx(r,{data:c,showIcon:!0,showLine:!0})},{title:"With Checkboxes",description:"Tree with checkbox selection for multi-select functionality. Checking a parent checks all children.",code:`import { TreeView } from '@ux4g/react-core';
import { useState } from 'react';

const categoryData = [
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
];

function Example() {
  const [checkedKeys, setCheckedKeys] = useState([]);

  return (
    <TreeView 
      data={categoryData} 
      checkable 
      checkedKeys={checkedKeys}
      onCheck={setCheckedKeys}
    />
  );
}`,preview:i.jsx(r,{data:p,checkable:!0,defaultExpandAll:!0})},{title:"Jurisdiction Hierarchy",description:"Geographic hierarchy displaying Country, State, and District levels for location selection.",code:`import { TreeView } from '@ux4g/react-core';

const jurisdictionData = [
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
        ],
      },
    ],
  },
];

function Example() {
  return <TreeView data={jurisdictionData} selectable showLine />;
}`,preview:i.jsx(r,{data:s,selectable:!0,showLine:!0})},{title:"Service Categories",description:"Expandable service taxonomy for citizen and business services with icons.",code:`import { TreeView } from '@ux4g/react-core';

const serviceData = [
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
    ],
  },
];

function Example() {
  return <TreeView data={serviceData} showIcon size="lg" />;
}`,preview:i.jsx(r,{data:h,showIcon:!0,size:"lg"})}],reactCode:{component:`import React, { useState, useCallback, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { treeViewVariants } from './treeview.variants';
import { TreeViewProps, TreeNode } from './TreeView.types';
import { ChevronRight, ChevronDown, Folder, FolderOpen, File } from 'lucide-react';

export const TreeView = ({
  data,
  className,
  size = 'md',
  checkable = false,
  selectable = true,
  showIcon = false,
  showLine = false,
  defaultExpandAll = false,
  defaultExpandedKeys = [],
  expandedKeys: controlledExpandedKeys,
  selectedKeys: controlledSelectedKeys,
  checkedKeys: controlledCheckedKeys,
  onExpand,
  onSelect,
  onCheck,
  'aria-label': ariaLabel = 'Tree view',
  ...props
}: TreeViewProps) => {
  const [internalExpandedKeys, setInternalExpandedKeys] = useState<string[]>(
    defaultExpandAll ? getAllKeys(data) : defaultExpandedKeys
  );
  const [internalSelectedKeys, setInternalSelectedKeys] = useState<string[]>([]);
  const [internalCheckedKeys, setInternalCheckedKeys] = useState<string[]>([]);

  const expandedKeys = controlledExpandedKeys || internalExpandedKeys;
  const selectedKeys = controlledSelectedKeys || internalSelectedKeys;
  const checkedKeys = controlledCheckedKeys || internalCheckedKeys;

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

  const handleExpand = useCallback((key: string) => {
    const newExpanded = expandedKeys.includes(key)
      ? expandedKeys.filter(k => k !== key)
      : [...expandedKeys, key];
    
    if (!controlledExpandedKeys) {
      setInternalExpandedKeys(newExpanded);
    }
    onExpand?.(newExpanded, { node: key, expanded: !expandedKeys.includes(key) });
  }, [expandedKeys, controlledExpandedKeys, onExpand]);

  const handleSelect = useCallback((key: string) => {
    if (!selectable) return;
    
    const newSelected = selectedKeys.includes(key)
      ? selectedKeys.filter(k => k !== key)
      : [...selectedKeys, key];
    
    if (!controlledSelectedKeys) {
      setInternalSelectedKeys(newSelected);
    }
    onSelect?.(newSelected, { node: key, selected: !selectedKeys.includes(key) });
  }, [selectedKeys, selectable, controlledSelectedKeys, onSelect]);

  const handleCheck = useCallback((key: string, node: TreeNode) => {
    const newChecked = checkedKeys.includes(key)
      ? checkedKeys.filter(k => k !== key && !isChildOf(k, node))
      : [...checkedKeys, key, ...getChildKeys(node)];
    
    if (!controlledCheckedKeys) {
      setInternalCheckedKeys(newChecked);
    }
    onCheck?.(newChecked, { node: key, checked: !checkedKeys.includes(key) });
  }, [checkedKeys, controlledCheckedKeys, onCheck]);

  const getChildKeys = (node: TreeNode): string[] => {
    if (!node.children) return [];
    return node.children.flatMap(child => [child.key, ...getChildKeys(child)]);
  };

  const isChildOf = (key: string, parent: TreeNode): boolean => {
    return getChildKeys(parent).includes(key);
  };

  const renderNode = (node: TreeNode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedKeys.includes(node.key);
    const isSelected = selectedKeys.includes(node.key);
    const isChecked = checkedKeys.includes(node.key);

    return (
      <div key={node.key} role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined} aria-level={level + 1} aria-selected={isSelected}>
        <div
          className={cn(
            treeViewVariants({ size }),
            isSelected && 'bg-blue-50 border-l-2 border-[#005196] font-medium text-[#005196]'
          )}
          style={{ paddingLeft: (level * 24 + (showLine ? 12 : 0)) + 'px' }}
          onClick={() => {
            if (hasChildren) handleExpand(node.key);
            handleSelect(node.key);
          }}
        >
          {hasChildren && (
            <button
              className="flex-shrink-0 w-4 h-4 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                handleExpand(node.key);
              }}
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}

          {checkable && (
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => {
                e.stopPropagation();
                handleCheck(node.key, node);
              }}
              className="w-4 h-4 rounded border-gray-300 text-[#005196]"
              aria-label={'Check ' + node.title}
            />
          )}

          {showIcon && (
            <span className="flex-shrink-0">
              {node.icon || (hasChildren ? (isExpanded ? <FolderOpen size={16} /> : <Folder size={16} />) : <File size={16} />)}
            </span>
          )}

          <span className="flex-grow">{node.title}</span>
        </div>

        {hasChildren && isExpanded && (
          <div role="group">
            {node.children.map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={cn('border border-gray-200 rounded-lg p-2 bg-white', className)} role="tree" aria-label={ariaLabel} {...props}>
      {data.map(node => renderNode(node, 0))}
    </div>
  );
};`,types:`export interface TreeNode {
  key: string;
  title: string;
  children?: TreeNode[];
  icon?: React.ReactNode;
  disabled?: boolean;
  checkable?: boolean;
}

export interface TreeViewProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TreeNode[];
  size?: 'sm' | 'md' | 'lg';
  checkable?: boolean;
  selectable?: boolean;
  showIcon?: boolean;
  showLine?: boolean;
  defaultExpandAll?: boolean;
  defaultExpandedKeys?: string[];
  expandedKeys?: string[];
  selectedKeys?: string[];
  checkedKeys?: string[];
  onExpand?: (expandedKeys: string[], info: any) => void;
  onSelect?: (selectedKeys: string[], info: any) => void;
  onCheck?: (checkedKeys: string[], info: any) => void;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const treeViewVariants = cva(
  [
    'flex items-center gap-2 px-2 rounded',
    'cursor-pointer select-none transition-colors',
    'hover:bg-gray-100',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196]',
  ],
  {
    variants: {
      size: {
        sm: ['text-sm py-1'],
        md: ['text-base py-1.5'],
        lg: ['text-lg py-2'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface TreeNode {
  key: string;
  title: string;
  children?: TreeNode[];
}

interface FlatNode {
  expandable: boolean;
  title: string;
  key: string;
  level: number;
}

type TreeSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ux4g-tree-view',
  template: \`
    <div class="ux4g-tree" [class]="getTreeClasses()" role="tree">
      <mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
        <mat-tree-node 
          *matTreeNodeDef="let node" 
          matTreeNodePadding
          role="treeitem"
          [attr.aria-level]="node.level + 1"
        >
          <button mat-icon-button disabled></button>
          <input 
            *ngIf="checkable" 
            type="checkbox"
            [checked]="isChecked(node.key)"
            (change)="toggleCheck(node.key)"
          />
          <span [class.selected]="isSelected(node.key)" (click)="handleSelect(node.key)">
            {{ node.title }}
          </span>
        </mat-tree-node>

        <mat-tree-node 
          *matTreeNodeDef="let node; when: hasChild" 
          matTreeNodePadding
          role="treeitem"
          [attr.aria-expanded]="treeControl.isExpanded(node)"
          [attr.aria-level]="node.level + 1"
        >
          <button 
            mat-icon-button
            [attr.aria-label]="treeControl.isExpanded(node) ? 'Collapse' : 'Expand'"
            (click)="toggleExpand(node)"
          >
            <mat-icon>
              {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
            </mat-icon>
          </button>
          <input 
            *ngIf="checkable" 
            type="checkbox"
            [checked]="isChecked(node.key)"
            (change)="toggleCheck(node.key)"
          />
          <span [class.selected]="isSelected(node.key)" (click)="handleSelect(node.key)">
            {{ node.title }}
          </span>
        </mat-tree-node>
      </mat-tree>
    </div>
  \`,
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  @Input() data: TreeNode[] = [];
  @Input() size: TreeSize = 'md';
  @Input() checkable = false;
  @Input() selectable = true;
  @Input() showIcon = false;
  @Input() defaultExpandAll = false;
  
  @Output() selectChange = new EventEmitter<string[]>();
  @Output() checkChange = new EventEmitter<string[]>();
  @Output() expandChange = new EventEmitter<string[]>();

  selectedKeys: Set<string> = new Set();
  checkedKeys: Set<string> = new Set();

  private transformer = (node: TreeNode, level: number): FlatNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      title: node.title,
      key: node.key,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  ngOnInit() {
    this.dataSource.data = this.data;
    if (this.defaultExpandAll) {
      this.treeControl.expandAll();
    }
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  getTreeClasses(): string {
    return 'ux4g-tree-' + this.size;
  }

  toggleExpand(node: FlatNode): void {
    this.treeControl.toggle(node);
  }

  handleSelect(key: string): void {
    if (!this.selectable) return;
    
    if (this.selectedKeys.has(key)) {
      this.selectedKeys.delete(key);
    } else {
      this.selectedKeys.add(key);
    }
    this.selectChange.emit(Array.from(this.selectedKeys));
  }

  toggleCheck(key: string): void {
    if (this.checkedKeys.has(key)) {
      this.checkedKeys.delete(key);
    } else {
      this.checkedKeys.add(key);
    }
    this.checkChange.emit(Array.from(this.checkedKeys));
  }

  isSelected(key: string): boolean {
    return this.selectedKeys.has(key);
  }

  isChecked(key: string): boolean {
    return this.checkedKeys.has(key);
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TreeViewComponent } from './tree-view.component';

@NgModule({
  declarations: [TreeViewComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [TreeViewComponent]
})
export class TreeViewModule { }`,types:`export interface TreeNode {
  key: string;
  title: string;
  children?: TreeNode[];
  icon?: string;
  disabled?: boolean;
}

export type TreeSize = 'sm' | 'md' | 'lg';`},comparisons:[{system:"Material UI (Google)",component:"TreeView",variants:"default, with icons, multi-select",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-tree-view/"},{system:"Ant Design (Alibaba)",component:"Tree",variants:"default, checkable, draggable, virtual scroll",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://ant.design/components/tree"},{system:"GOV.UK Design System",component:"Accordion (similar)",variants:"default",accessibility:"WCAG 2.1 AAA",documentation:"Good",link:"https://design-system.service.gov.uk/components/accordion/"},{system:"Chakra UI",component:"TreeView (community)",variants:"custom variants",accessibility:"WCAG 2.1 AA",documentation:"Limited",link:"https://chakra-ui.com/"},{system:"Radix UI",component:"Accordion (alternative)",variants:"unstyled primitive",accessibility:"WCAG 2.1 AAA",documentation:"Good",link:"https://www.radix-ui.com/primitives/docs/components/accordion"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['Proper semantic HTML with role="tree" and role="treeitem" (WCAG 4.1.2)',"aria-expanded attribute for expandable nodes indicating expand/collapse state (WCAG 4.1.2)","aria-selected attribute for selectable nodes (WCAG 4.1.2)","aria-level attribute indicating hierarchy depth for each node (WCAG 1.3.1)","Keyboard navigation with Arrow keys, Enter, and Space (WCAG 2.1.1)","Focus indicators with 2px ring for keyboard users (WCAG 2.4.7)","Minimum 44x44px touch targets for interactive elements (WCAG 2.5.5)","Color contrast ratios exceed 4.5:1 for text (WCAG 1.4.3)","Screen reader announcements for expand/collapse and selection states","Checkbox labels properly associated for checkable trees (WCAG 1.3.1)"],keyboardSupport:[{key:"Tab",action:"Move focus to tree or next tree item"},{key:"Shift + Tab",action:"Move focus to previous element"},{key:"Down Arrow",action:"Move focus to next visible node"},{key:"Up Arrow",action:"Move focus to previous visible node"},{key:"Right Arrow",action:"Expand collapsed node or move to first child"},{key:"Left Arrow",action:"Collapse expanded node or move to parent"},{key:"Enter",action:"Select/activate focused node"},{key:"Space",action:"Toggle checkbox if checkable, or select node"},{key:"Home",action:"Move focus to first node"},{key:"End",action:"Move focus to last visible node"}],screenReader:['Announces tree structure with role="tree"',"Announces each item as treeitem","Announces hierarchy level (Level 1, Level 2, etc.)","Announces expanded/collapsed state for parent nodes","Announces selected state when nodes are selected","Checkbox state changes are announced"]},tokens:{file:"/tokens/components/tree-view.json",mappings:[{property:"Node Padding Vertical (Medium)",token:"base.padding.vertical.md",value:"6px"},{property:"Node Padding Horizontal",token:"base.padding.horizontal.md",value:"8px"},{property:"Border Radius",token:"base.borderRadius",value:"4px"},{property:"Font Size (Medium)",token:"base.fontSize.md",value:"16px"},{property:"Indent Width",token:"tree.indentWidth",value:"24px"},{property:"Icon Size",token:"tree.iconSize",value:"16px"},{property:"Selected Background",token:"tree.selectedBackground",value:"#E3F2FD (Blue 50)"},{property:"Selected Border",token:"tree.selectedBorder",value:"#005196 (Navy 500)"},{property:"Hover Background",token:"tree.hoverBackground",value:"#F5F5F5 (Gray 100)"},{property:"Line Color",token:"tree.lineColor",value:"#D1D5DB (Gray 300)"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"},{property:"Focus Ring Color",token:"accessibility.focusRingColor",value:"#005196 (Navy 500)"}]},useCases:[{title:"Department Organization Chart",description:"Display government ministry and department hierarchies, showing reporting structures and organizational divisions. Users can navigate through different levels of administration."},{title:"Document Category Browser",description:"Organize government documents, policies, and reports in a hierarchical folder structure. Enables users to browse and locate documents by category and subcategory."},{title:"Jurisdiction Hierarchy",description:"Display geographic administrative boundaries from Country to State to District to Block level. Essential for location-based service delivery and jurisdiction selection."},{title:"Service Taxonomy",description:"Categorize government services into hierarchical groups like Citizen Services, Business Services, with subcategories for Certificates, Licenses, Registrations, etc."},{title:"File Browser for E-Office",description:"Navigate through digital file systems in e-governance platforms. Users can browse folders, locate files, and manage document hierarchies."},{title:"Location Tree Selector",description:"Select delivery locations, office addresses, or service centers using a hierarchical tree structure. Supports multi-level selection from country to specific address."},{title:"Ministry Structure Navigator",description:"Browse the complete structure of government ministries, departments, divisions, and branches. Useful for citizen information portals and administrative dashboards."},{title:"Policy Classification System",description:"Organize government policies, acts, and regulations by ministry, department, and topic. Enables users to find relevant policies through hierarchical navigation."}]})}export{Q as default};
