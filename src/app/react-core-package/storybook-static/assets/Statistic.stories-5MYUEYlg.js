import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-G8LIXM5I.js";import{c}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const n=S.forwardRef(({label:h,value:y,prefix:i,suffix:l,trend:s,icon:o,className:N,...T},j)=>e.jsxs("div",{ref:j,className:c("ux4g-statistic",N),...T,children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o&&e.jsx("span",{className:"text-muted-foreground","aria-hidden":"true",children:o}),e.jsx("span",{className:"text-sm text-muted-foreground",children:h})]}),e.jsxs("div",{className:"flex items-baseline gap-1",children:[i&&e.jsx("span",{className:"text-lg text-muted-foreground",children:i}),e.jsx("span",{className:"text-3xl font-bold text-foreground",children:y}),l&&e.jsx("span",{className:"text-lg text-muted-foreground",children:l})]}),s&&e.jsxs("div",{className:c("flex items-center gap-1 mt-1 text-sm",s.value>=0?"text-green-600":"text-red-600"),children:[e.jsx("span",{"aria-hidden":"true",children:s.value>=0?"↑":"↓"}),e.jsxs("span",{children:[Math.abs(s.value),"%"]}),s.label&&e.jsx("span",{className:"text-muted-foreground",children:s.label})]})]}));n.displayName="Statistic";n.__docgenInfo={description:"",methods:[],displayName:"Statistic",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},prefix:{required:!1,tsType:{name:"ReactNode"},description:"Prefix (e.g. ₹, $)"},suffix:{required:!1,tsType:{name:"ReactNode"},description:"Suffix (e.g. %, units)"},trend:{required:!1,tsType:{name:"signature",type:"object",raw:"{ value: number; label?: string }",signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!1}}]}},description:"Trend indicator"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon"}},composes:["HTMLAttributes"]};const k={title:"Components/Statistic",component:n,tags:["autodocs"]},a={args:{label:"Total Applications",value:"12,456"}},r={args:{label:"Active Users",value:"8,234",trend:{value:12,label:"vs last month"}}},t={args:{label:"Revenue",value:"4,50,000",prefix:"₹"}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Total Applications',
    value: '12,456'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,x,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Active Users',
    value: '8,234',
    trend: {
      value: 12,
      label: 'vs last month'
    }
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,v,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Revenue',
    value: '4,50,000',
    prefix: '₹'
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const C=["Default","WithTrend","WithPrefix"];export{a as Default,t as WithPrefix,r as WithTrend,C as __namedExportsOrder,k as default};
