import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-G8LIXM5I.js";import{c as T}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function b({node:e,level:t,expanded:d,onToggle:l,selectedId:o,onSelect:n}){const s=e.children&&e.children.length>0,i=d.has(e.id),c=o===e.id;return r.jsxs("li",{role:"treeitem","aria-expanded":s?i:void 0,"aria-selected":c,children:[r.jsxs("div",{className:T("flex items-center gap-2 py-1.5 px-2 rounded-lg cursor-pointer text-sm transition-colors",c?"bg-primary/10 text-primary":"text-foreground hover:bg-muted"),style:{paddingLeft:`${t*20+8}px`},onClick:()=>{s&&l(e.id),n==null||n(e.id)},children:[s&&r.jsx("span",{className:"text-xs text-muted-foreground","aria-hidden":"true",children:i?"▾":"▸"}),!s&&r.jsx("span",{className:"w-3"}),e.icon&&r.jsx("span",{"aria-hidden":"true",children:e.icon}),r.jsx("span",{children:e.label})]}),s&&i&&r.jsx("ul",{role:"group",children:e.children.map(p=>r.jsx(b,{node:p,level:t+1,expanded:d,onToggle:l,selectedId:o,onSelect:n},p.id))})]})}const f=x.forwardRef(({nodes:e,defaultExpanded:t=[],onSelect:d,selectedId:l,className:o,...n},s)=>{const[i,c]=x.useState(new Set(t)),p=a=>c(w=>{const m=new Set(w);return m.has(a)?m.delete(a):m.add(a),m});return r.jsx("ul",{ref:s,role:"tree",className:T("ux4g-tree-view",o),...n,children:e.map(a=>r.jsx(b,{node:a,level:0,expanded:i,onToggle:p,selectedId:l,onSelect:d},a.id))})});f.displayName="TreeView";f.__docgenInfo={description:"",methods:[],displayName:"TreeView",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},nodes:{required:!0,tsType:{name:"Array",elements:[{name:"TreeNode"}],raw:"TreeNode[]"},description:""},defaultExpanded:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Initially expanded node IDs",defaultValue:{value:"[]",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called when a node is selected"},selectedId:{required:!1,tsType:{name:"string"},description:"Selected node ID"}}};const C={title:"Components/TreeView",component:f,tags:["autodocs"]},u={args:{nodes:[{id:"1",label:"Ministry of Home Affairs",children:[{id:"1a",label:"Passport Division"},{id:"1b",label:"Census Division"}]},{id:"2",label:"Ministry of Finance",children:[{id:"2a",label:"Tax Department",children:[{id:"2a1",label:"Income Tax"},{id:"2a2",label:"GST"}]}]}]}};var g,h,y;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    nodes: [{
      id: '1',
      label: 'Ministry of Home Affairs',
      children: [{
        id: '1a',
        label: 'Passport Division'
      }, {
        id: '1b',
        label: 'Census Division'
      }]
    }, {
      id: '2',
      label: 'Ministry of Finance',
      children: [{
        id: '2a',
        label: 'Tax Department',
        children: [{
          id: '2a1',
          label: 'Income Tax'
        }, {
          id: '2a2',
          label: 'GST'
        }]
      }]
    }]
  }
}`,...(y=(h=u.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const I=["Default"];export{u as Default,I as __namedExportsOrder,C as default};
