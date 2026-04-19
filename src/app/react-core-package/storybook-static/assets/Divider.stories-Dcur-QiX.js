import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as q}from"./index-G8LIXM5I.js";import{c}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const u={sm:"my-2",md:"my-4",lg:"my-8"},w={sm:"mx-2",md:"mx-4",lg:"mx-8"},m=q.forwardRef(({orientation:i="horizontal",label:p,spacing:o="md",className:n,...l},d)=>i==="vertical"?e.jsx("hr",{ref:d,role:"separator","aria-orientation":"vertical",className:c("ux4g-divider inline-block border-l border-border h-full min-h-[1em]",w[o],n),...l}):p?e.jsxs("div",{role:"separator",className:c("ux4g-divider flex items-center gap-4",u[o],n),children:[e.jsx("hr",{ref:d,className:"flex-1 border-border",...l}),e.jsx("span",{className:"text-sm text-muted-foreground shrink-0",children:p}),e.jsx("hr",{className:"flex-1 border-border"})]}):e.jsx("hr",{ref:d,role:"separator","aria-orientation":"horizontal",className:c("ux4g-divider border-border",u[o],n),...l}));m.displayName="Divider";m.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation",defaultValue:{value:"'horizontal'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text in the middle"},spacing:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Spacing around divider",defaultValue:{value:"'md'",computed:!1}}},composes:["HTMLAttributes"]};const O={title:"Components/Divider",component:m,tags:["autodocs"]},r={},a={args:{label:"OR"}},s={args:{orientation:"vertical"},decorators:[i=>e.jsx("div",{style:{height:100,display:"flex"},children:e.jsx(i,{})})]},t={args:{spacing:"lg"}};var g,f,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,h,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'OR'
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,S,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  decorators: [S => <div style={{
    height: 100,
    display: 'flex'
  }}><S /></div>]
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var N,T,D;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    spacing: 'lg'
  }
}`,...(D=(T=t.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const V=["Default","WithLabel","Vertical","LargeSpacing"];export{r as Default,t as LargeSpacing,s as Vertical,a as WithLabel,V as __namedExportsOrder,O as default};
