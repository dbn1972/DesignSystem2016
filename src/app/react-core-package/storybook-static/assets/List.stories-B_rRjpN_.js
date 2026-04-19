import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-G8LIXM5I.js";import{c as o}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const i=S.forwardRef(({items:n,dividers:x=!0,ordered:h=!1,emptyMessage:N="No items",className:k,...A},b)=>{const j=h?"ol":"ul";return n.length===0?e.jsx("p",{className:"text-sm text-muted-foreground py-4",children:N}):e.jsx(j,{ref:b,className:o("ux4g-list",k),role:"list",...A,children:n.map((s,v)=>e.jsxs("li",{className:o("ux4g-list-item flex items-center gap-3 py-3 px-2",x&&v<n.length-1&&"border-b border-border"),children:[s.icon&&e.jsx("span",{className:"ux4g-list-item-icon shrink-0 text-muted-foreground","aria-hidden":"true",children:s.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm font-medium text-foreground",children:s.primary}),s.secondary&&e.jsx("div",{className:"text-xs text-muted-foreground mt-0.5",children:s.secondary})]}),s.action&&e.jsx("div",{className:"shrink-0",children:s.action})]},s.key))})});i.displayName="List";i.__docgenInfo={description:"",methods:[],displayName:"List",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},items:{required:!0,tsType:{name:"Array",elements:[{name:"ListItem"}],raw:"ListItem[]"},description:""},dividers:{required:!1,tsType:{name:"boolean"},description:"Dividers between items",defaultValue:{value:"true",computed:!1}},ordered:{required:!1,tsType:{name:"boolean"},description:"Ordered list",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No items'",computed:!1}}},composes:["HTMLAttributes"]};const C={title:"Components/List",component:i,tags:["autodocs"]},r={args:{items:[{key:"1",primary:"Birth Certificate",secondary:"Applied on 10 Apr 2026"},{key:"2",primary:"Passport",secondary:"Applied on 12 Apr 2026"},{key:"3",primary:"Driving License"}]}},t={args:{items:[],emptyMessage:"No applications found"}},a={args:{items:[{key:"1",primary:"Document.pdf",action:e.jsx("button",{style:{fontSize:12,color:"#005196"},children:"Download"})}]}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      primary: 'Birth Certificate',
      secondary: 'Applied on 10 Apr 2026'
    }, {
      key: '2',
      primary: 'Passport',
      secondary: 'Applied on 12 Apr 2026'
    }, {
      key: '3',
      primary: 'Driving License'
    }]
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: [],
    emptyMessage: 'No applications found'
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var y,f,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      primary: 'Document.pdf',
      action: <button style={{
        fontSize: 12,
        color: '#005196'
      }}>Download</button>
    }]
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const E=["Default","Empty","WithActions"];export{r as Default,t as Empty,a as WithActions,E as __namedExportsOrder,C as default};
