import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as F}from"./index-G8LIXM5I.js";import{c as p}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const w={text:"rounded",circular:"rounded-full",rectangular:"rounded-none",rounded:"rounded-lg"},r=F.forwardRef(({variant:a="text",width:u,height:m,lines:t,animate:g=!0,className:h,style:B,...x},v)=>{const y=typeof u=="number"?`${u}px`:u,f=typeof m=="number"?`${m}px`:m,S=f||(a==="text"?"1em":void 0);return a==="text"&&t&&t>1?e.jsxs("div",{ref:v,role:"status","aria-label":"Loading","aria-busy":"true",className:p("ux4g-skeleton-group space-y-2",h),...x,children:[Array.from({length:t},(G,b)=>e.jsx("div",{className:p("ux4g-skeleton bg-muted",g&&"animate-pulse",w.text),style:{width:b===t-1?"75%":y||"100%",height:S}},b)),e.jsx("span",{className:"sr-only",children:"Loading content"})]}):e.jsx("div",{ref:v,role:"status","aria-label":"Loading","aria-busy":"true",className:p("ux4g-skeleton bg-muted",g&&"animate-pulse",w[a],h),style:{width:y||(a==="circular"?f:"100%"),height:S,...B},...x,children:e.jsx("span",{className:"sr-only",children:"Loading"})})});r.displayName="Skeleton";r.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:"Shape variant",defaultValue:{value:"'text'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Width (CSS value, e.g. '100%', '200px')"},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Height (CSS value, e.g. '20px', '1rem')"},lines:{required:!1,tsType:{name:"number"},description:"Number of skeleton lines to render (for text variant)"},animate:{required:!1,tsType:{name:"boolean"},description:"Whether to animate the skeleton",defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes"]};const Y={title:"Components/Skeleton",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"]},animate:{control:"boolean"}}},n={args:{variant:"text",width:"60%"}},s={args:{variant:"text",lines:3}},i={args:{variant:"circular",width:48,height:48}},o={args:{variant:"rectangular",height:200}},l={args:{variant:"rounded",height:120,width:"100%"}},d={args:{variant:"rectangular",height:100,animate:!1}},c={render:()=>e.jsxs("div",{style:{width:300,padding:16,border:"1px solid #e5e7eb",borderRadius:12},children:[e.jsx(r,{variant:"rectangular",height:160}),e.jsx("div",{style:{marginTop:12},children:e.jsx(r,{variant:"text",width:"80%"})}),e.jsx("div",{style:{marginTop:8},children:e.jsx(r,{variant:"text",lines:2})}),e.jsxs("div",{style:{marginTop:12,display:"flex",alignItems:"center",gap:8},children:[e.jsx(r,{variant:"circular",width:32,height:32}),e.jsx(r,{variant:"text",width:100})]})]})};var T,k,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '60%'
  }
}`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var C,N,R;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    lines: 3
  }
}`,...(R=(N=s.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var q,L,A;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 48,
    height: 48
  }
}`,...(A=(L=i.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var I,_,H;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    height: 200
  }
}`,...(H=(_=o.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var E,M,W;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    height: 120,
    width: '100%'
  }
}`,...(W=(M=l.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var P,V,$;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    height: 100,
    animate: false
  }
}`,...($=(V=d.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var D,O,z;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300,
    padding: 16,
    border: '1px solid #e5e7eb',
    borderRadius: 12
  }}>
      <Skeleton variant="rectangular" height={160} />
      <div style={{
      marginTop: 12
    }}>
        <Skeleton variant="text" width="80%" />
      </div>
      <div style={{
      marginTop: 8
    }}>
        <Skeleton variant="text" lines={2} />
      </div>
      <div style={{
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
        <Skeleton variant="circular" width={32} height={32} />
        <Skeleton variant="text" width={100} />
      </div>
    </div>
}`,...(z=(O=c.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const Z=["Text","MultiLine","Circular","Rectangular","Rounded","NoAnimation","CardSkeleton"];export{c as CardSkeleton,i as Circular,s as MultiLine,d as NoAnimation,o as Rectangular,l as Rounded,n as Text,Z as __namedExportsOrder,Y as default};
