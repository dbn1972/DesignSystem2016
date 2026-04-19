import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as P}from"./index-G8LIXM5I.js";import{c as T}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=P.forwardRef(({children:A,className:V,variant:L="neutral",size:R="md",dot:o=!1,...k},C)=>e.jsxs("span",{ref:C,className:T("ux4g-badge",`ux4g-badge-${L}`,`ux4g-badge-${R}`,o&&"ux4g-badge-dot",V),...k,children:[o&&e.jsx("span",{className:"ux4g-badge-dot-indicator"}),A]}));a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},children:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"StatusVariant | 'neutral'",elements:[{name:"union",raw:`| 'neutral'  // Neutral informational status
| 'info'     // --ux4g-color-info
| 'success'  // --ux4g-color-success
| 'warning'  // --ux4g-color-warning
| 'error'`,elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},{name:"literal",value:"'neutral'"}]},description:`Badge variant/color
@default 'info'`,defaultValue:{value:"'neutral'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Badge size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},dot:{required:!1,tsType:{name:"boolean"},description:`Whether to show a dot indicator
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const E={title:"Components/Badge",component:a,parameters:{layout:"padded"},tags:["autodocs"]},r={args:{children:"Badge"}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"neutral",children:"Neutral"}),e.jsx(a,{variant:"info",children:"Info"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",children:"Error"})]})},n={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},i={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{dot:!0,variant:"success",children:"Active"}),e.jsx(a,{dot:!0,variant:"error",children:"Offline"}),e.jsx(a,{dot:!0,variant:"warning",children:"Pending"})]})},t={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsx("span",{children:"Aadhaar Verification"}),e.jsx(a,{variant:"success",children:"Verified"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsx("span",{children:"PAN Card Application"}),e.jsx(a,{variant:"warning",children:"Pending"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsx("span",{children:"Passport Renewal"}),e.jsx(a,{variant:"info",children:"In Review"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsx("span",{children:"Driving License"}),e.jsx(a,{variant:"error",children:"Rejected"})]})]})},d={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx("button",{className:"p-2 border rounded",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})})}),e.jsx(a,{size:"sm",variant:"error",className:"absolute -top-1 -right-1",children:"3"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("button",{className:"p-2 border rounded",children:"Messages"}),e.jsx(a,{size:"sm",variant:"info",className:"absolute -top-2 -right-2",children:"12"})]})]})};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,f,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,j,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Badge dot variant="success">Active</Badge>
      <Badge dot variant="error">Offline</Badge>
      <Badge dot variant="warning">Pending</Badge>
    </div>
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var N,b,w;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <div className="flex items-center justify-between p-4 border rounded">
        <span>Aadhaar Verification</span>
        <Badge variant="success">Verified</Badge>
      </div>
      <div className="flex items-center justify-between p-4 border rounded">
        <span>PAN Card Application</span>
        <Badge variant="warning">Pending</Badge>
      </div>
      <div className="flex items-center justify-between p-4 border rounded">
        <span>Passport Renewal</span>
        <Badge variant="info">In Review</Badge>
      </div>
      <div className="flex items-center justify-between p-4 border rounded">
        <span>Driving License</span>
        <Badge variant="error">Rejected</Badge>
      </div>
    </div>
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,S,z;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <div className="relative">
        <button className="p-2 border rounded">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <Badge size="sm" variant="error" className="absolute -top-1 -right-1">3</Badge>
      </div>
      <div className="relative">
        <button className="p-2 border rounded">Messages</button>
        <Badge size="sm" variant="info" className="absolute -top-2 -right-2">12</Badge>
      </div>
    </div>
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const _=["Default","Variants","Sizes","WithDot","ApplicationStatus","NotificationBadge"];export{t as ApplicationStatus,r as Default,d as NotificationBadge,n as Sizes,s as Variants,i as WithDot,_ as __namedExportsOrder,E as default};
