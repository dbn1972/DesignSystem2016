import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as x}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";function r({value:a,size:fe="md",variant:be="info",showLabel:he=!1,labelFormatter:we=s=>`${s}%`,indeterminate:o=!1,className:Le,...xe}){const s=Math.min(100,Math.max(0,a));return e.jsxs("div",{className:x("ux4g-progress-container",Le),...xe,children:[e.jsx("div",{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":o?void 0:s,"aria-label":o?"Loading":`Progress: ${s}%`,className:x("ux4g-progress",`ux4g-progress-${fe}`,`ux4g-progress-${be}`,o&&"ux4g-progress-indeterminate"),children:e.jsx("div",{className:"ux4g-progress-bar",style:o?void 0:{width:`${s}%`}})}),he&&!o&&e.jsx("div",{className:"ux4g-progress-label",children:we(s)})]})}r.displayName="Progress";r.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},value:{required:!0,tsType:{name:"number"},description:"Progress value (0-100)"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Progress size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'neutral'  // Neutral informational status
| 'info'     // --ux4g-color-info
| 'success'  // --ux4g-color-success
| 'warning'  // --ux4g-color-warning
| 'error'`,elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`Progress variant
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Show label
@default false`,defaultValue:{value:"false",computed:!1}},labelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Custom label formatter",defaultValue:{value:"(val) => `${val}%`",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:`Indeterminate state (loading animation)
@default false`,defaultValue:{value:"false",computed:!1}}}};const je={title:"Components/Progress",component:r,tags:["autodocs"]},n={args:{value:60}},t={args:{value:75,showLabel:!0}},l={args:{value:50,variant:"info",showLabel:!0}},i={args:{value:100,variant:"success",showLabel:!0}},u={args:{value:60,variant:"warning",showLabel:!0}},c={args:{value:25,variant:"error",showLabel:!0}},m={args:{value:40,size:"sm"}},d={args:{value:80,size:"lg",showLabel:!0}},p={args:{value:100,variant:"success",showLabel:!0,labelFormatter:a=>a===100?"Verified":`${a}%`}},g={args:{value:66,variant:"info",showLabel:!0,labelFormatter:a=>`${Math.round(a/100*3)} of 3 documents uploaded`}},v={args:{value:40,variant:"info",showLabel:!0,labelFormatter:a=>`Step ${Math.ceil(a/100*5)} of 5`}},f={args:{value:80,variant:"success",showLabel:!0,labelFormatter:a=>`${a}% Complete`}},b={args:{value:0,indeterminate:!0,variant:"info"}},h={args:{value:0,indeterminate:!0,variant:"info"}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{value:50,variant:"info",showLabel:!0}),e.jsx(r,{value:75,variant:"success",showLabel:!0}),e.jsx(r,{value:60,variant:"warning",showLabel:!0}),e.jsx(r,{value:30,variant:"error",showLabel:!0})]})},L={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{value:60,size:"sm",showLabel:!0}),e.jsx(r,{value:60,size:"md",showLabel:!0}),e.jsx(r,{value:60,size:"lg",showLabel:!0})]})};var S,y,P;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 60
  }
}`,...(P=(y=n.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var j,z,$;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 75,
    showLabel: true
  }
}`,...($=(z=t.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var V,A,F;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 50,
    variant: 'info',
    showLabel: true
  }
}`,...(F=(A=l.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var T,q,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'success',
    showLabel: true
  }
}`,...(C=(q=i.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var N,I,D;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: 'warning',
    showLabel: true
  }
}`,...(D=(I=u.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var M,E,W;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 25,
    variant: 'error',
    showLabel: true
  }
}`,...(W=(E=c.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var _,R,k;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'sm'
  }
}`,...(k=(R=m.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var B,U,O;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: 80,
    size: 'lg',
    showLabel: true
  }
}`,...(O=(U=d.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'success',
    showLabel: true,
    labelFormatter: val => val === 100 ? 'Verified' : \`\${val}%\`
  }
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: 66,
    variant: 'info',
    showLabel: true,
    labelFormatter: val => \`\${Math.round(val / 100 * 3)} of 3 documents uploaded\`
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    value: 40,
    variant: 'info',
    showLabel: true,
    labelFormatter: val => \`Step \${Math.ceil(val / 100 * 5)} of 5\`
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,se;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    value: 80,
    variant: 'success',
    showLabel: true,
    labelFormatter: val => \`\${val}% Complete\`
  }
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ne,te;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    value: 0,
    indeterminate: true,
    variant: 'info'
  }
}`,...(te=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,ie,ue;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    value: 0,
    indeterminate: true,
    variant: 'info'
  }
}`,...(ue=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,me,de;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Progress value={50} variant="info" showLabel />
      <Progress value={75} variant="success" showLabel />
      <Progress value={60} variant="warning" showLabel />
      <Progress value={30} variant="error" showLabel />
    </div>
}`,...(de=(me=w.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ge,ve;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Progress value={60} size="sm" showLabel />
      <Progress value={60} size="md" showLabel />
      <Progress value={60} size="lg" showLabel />
    </div>
}`,...(ve=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};const ze=["Basic","WithLabel","Info","Success","Warning","Error","Small","Large","AadhaarVerification","DocumentUpload","ApplicationProgress","FormCompletion","Indeterminate","ProcessingApplication","AllVariants","AllSizes"];export{p as AadhaarVerification,L as AllSizes,w as AllVariants,v as ApplicationProgress,n as Basic,g as DocumentUpload,c as Error,f as FormCompletion,b as Indeterminate,l as Info,d as Large,h as ProcessingApplication,m as Small,i as Success,u as Warning,t as WithLabel,ze as __namedExportsOrder,je as default};
