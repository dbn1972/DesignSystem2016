import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as se}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";function a({size:Y="md",variant:Z="primary",label:r,centered:ee=!1,className:ae,...re}){const f=e.jsx("div",{role:"status","aria-live":"polite","aria-label":r||"Loading",className:se("ux4g-spinner",`ux4g-spinner-${Y}`,`ux4g-spinner-${Z}`,ae),...re,children:e.jsx("span",{className:"ux4g-visually-hidden",children:r||"Loading"})});return ee?e.jsxs("div",{className:"ux4g-spinner-container",children:[f,r&&e.jsx("div",{className:"ux4g-spinner-label",children:r})]}):e.jsxs(e.Fragment,{children:[f,r&&e.jsx("span",{className:"ux4g-spinner-label",children:r})]})}a.displayName="Spinner";a.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Spinner size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"StatusVariant | 'primary'",elements:[{name:"union",raw:`| 'neutral'  // Neutral informational status
| 'info'     // --ux4g-color-info
| 'success'  // --ux4g-color-success
| 'warning'  // --ux4g-color-warning
| 'error'`,elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},{name:"literal",value:"'primary'"}]},description:`Spinner variant
@default 'info'`,defaultValue:{value:"'primary'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Loading text"},centered:{required:!1,tsType:{name:"boolean"},description:`Center spinner in container
@default false`,defaultValue:{value:"false",computed:!1}}}};const te={title:"Components/Spinner",component:a,tags:["autodocs"]},s={args:{}},n={args:{label:"Loading..."}},i={args:{size:"sm"}},l={args:{size:"lg",label:"Loading data..."}},t={args:{centered:!0,label:"Loading..."}},o={args:{label:"Verifying Aadhaar...",variant:"info"}},c={args:{label:"Processing your application...",size:"lg",centered:!0}},d={args:{label:"Uploading document to DigiLocker...",variant:"info"}},m={args:{label:"Fetching citizen records..."}},p={args:{label:"Generating PAN card...",size:"lg"}},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx(a,{size:"sm",label:"Small"}),e.jsx(a,{size:"md",label:"Medium"}),e.jsx(a,{size:"lg",label:"Large"})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx(a,{variant:"primary",label:"Primary"}),e.jsx(a,{variant:"info",label:"Info"}),e.jsx(a,{variant:"success",label:"Success"}),e.jsx(a,{variant:"warning",label:"Warning"}),e.jsx(a,{variant:"error",label:"Error"})]})};var S,v,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {}
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,b,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Loading...'
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var z,j,L;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(L=(j=i.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var A,N,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Loading data...'
  }
}`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var w,V,I;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    centered: true,
    label: 'Loading...'
  }
}`,...(I=(V=t.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var T,q,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Verifying Aadhaar...',
    variant: 'info'
  }
}`,...(C=(q=o.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var D,F,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Processing your application...',
    size: 'lg',
    centered: true
  }
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var k,E,G;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Uploading document to DigiLocker...',
    variant: 'info'
  }
}`,...(G=(E=d.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var U,W,_;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Fetching citizen records...'
  }
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var B,M,$;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Generating PAN card...',
    size: 'lg'
  }
}`,...($=(M=p.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var O,H,J;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }}>
      <Spinner size="sm" label="Small" />
      <Spinner size="md" label="Medium" />
      <Spinner size="lg" label="Large" />
    </div>
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }}>
      <Spinner variant="primary" label="Primary" />
      <Spinner variant="info" label="Info" />
      <Spinner variant="success" label="Success" />
      <Spinner variant="warning" label="Warning" />
      <Spinner variant="error" label="Error" />
    </div>
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const oe=["Basic","WithLabel","Small","Large","Centered","VerifyingAadhaar","ProcessingApplication","UploadingDocument","FetchingRecords","GeneratingPAN","AllSizes","AllVariants"];export{u as AllSizes,g as AllVariants,s as Basic,t as Centered,m as FetchingRecords,p as GeneratingPAN,l as Large,c as ProcessingApplication,i as Small,d as UploadingDocument,o as VerifyingAadhaar,n as WithLabel,oe as __namedExportsOrder,te as default};
