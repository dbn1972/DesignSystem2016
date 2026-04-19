import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as Q}from"./index-G8LIXM5I.js";import{c as b}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const U={neutral:"bg-muted text-foreground border-border",info:"bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-800",success:"bg-green-50 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-200 dark:border-green-800",warning:"bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800",error:"bg-red-50 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-200 dark:border-red-800"},X={sm:"text-xs px-2 py-0.5 gap-1",md:"text-sm px-2.5 py-1 gap-1.5",lg:"text-sm px-3 py-1.5 gap-2"},m=Q.forwardRef(({label:u,variant:O="neutral",size:g="md",icon:p,removable:$=!1,onRemove:F,disabled:d=!1,className:G,...J},K)=>e.jsxs("span",{ref:K,className:b("ux4g-tag","inline-flex items-center rounded-full border font-medium",U[O],X[g],d&&"opacity-50 cursor-not-allowed",G),...J,children:[p&&e.jsx("span",{className:"ux4g-tag-icon shrink-0","aria-hidden":"true",children:p}),e.jsx("span",{className:"ux4g-tag-label",children:u}),$&&e.jsx("button",{type:"button",onClick:F,disabled:d,"aria-label":`Remove ${u}`,className:b("ux4g-tag-remove","inline-flex items-center justify-center rounded-full shrink-0","hover:bg-black/10 dark:hover:bg-white/10 transition-colors",g==="sm"?"h-3.5 w-3.5":"h-4 w-4",d&&"pointer-events-none"),children:e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",className:"h-3 w-3","aria-hidden":"true",children:e.jsx("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})})]}));m.displayName="Tag";m.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},label:{required:!0,tsType:{name:"string"},description:"Tag label text"},variant:{required:!1,tsType:{name:"union",raw:`| 'neutral'  // Neutral informational status
| 'info'     // --ux4g-color-info
| 'success'  // --ux4g-color-success
| 'warning'  // --ux4g-color-warning
| 'error'`,elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Color variant",defaultValue:{value:"'neutral'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size",defaultValue:{value:"'md'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon before label"},removable:{required:!1,tsType:{name:"boolean"},description:"Whether the tag is removable",defaultValue:{value:"false",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when remove button is clicked"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the tag is disabled",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const se={title:"Components/Tag",component:m,tags:["autodocs"],argTypes:{variant:{control:"select",options:["neutral","info","success","warning","error"]},size:{control:"select",options:["sm","md","lg"]}}},r={args:{label:"Category"}},a={args:{label:"Active",variant:"success"}},s={args:{label:"Rejected",variant:"error"}},t={args:{label:"Pending",variant:"warning"}},n={args:{label:"New",variant:"info"}},o={args:{label:"React",removable:!0}},l={args:{label:"Tiny",size:"sm"}},i={args:{label:"Large tag",size:"lg"}},c={args:{label:"Disabled",disabled:!0,removable:!0}};var f,v,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Category'
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,h,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Active',
    variant: 'success'
  }
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var k,S,T;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Rejected',
    variant: 'error'
  }
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var N,R,C;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Pending',
    variant: 'warning'
  }
}`,...(C=(R=t.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var j,q,L;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'New',
    variant: 'info'
  }
}`,...(L=(q=n.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var z,D,I;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'React',
    removable: true
  }
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var E,A,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Tiny',
    size: 'sm'
  }
}`,...(P=(A=l.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var V,W,_;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Large tag',
    size: 'lg'
  }
}`,...(_=(W=i.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var M,B,H;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true,
    removable: true
  }
}`,...(H=(B=c.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const te=["Default","Success","Error","Warning","Info","Removable","Small","Large","Disabled"];export{r as Default,c as Disabled,s as Error,n as Info,i as Large,o as Removable,l as Small,a as Success,t as Warning,te as __namedExportsOrder,se as default};
