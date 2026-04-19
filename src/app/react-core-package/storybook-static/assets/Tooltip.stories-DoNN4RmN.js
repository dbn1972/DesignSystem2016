import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as T}from"./index-G8LIXM5I.js";import{c as A}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function b({content:ie,children:le,placement:ce="top",delay:ue=200,disabled:h=!1,showArrow:me=!0,className:de,...pe}){const[ge,f]=T.useState(!1),g=T.useRef(),x=()=>{h||(g.current=setTimeout(()=>{f(!0)},ue))},N=()=>{g.current&&clearTimeout(g.current),f(!1)};return e.jsxs("div",{className:A("ux4g-tooltip-wrapper",de),onMouseEnter:x,onMouseLeave:N,onFocus:x,onBlur:N,...pe,children:[le,ge&&!h&&e.jsx("div",{role:"tooltip",className:A("ux4g-tooltip",`ux4g-tooltip-${ce}`,me&&"ux4g-tooltip-arrow"),children:ie})]})}b.displayName="Tooltip";b.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},content:{required:!0,tsType:{name:"ReactNode"},description:"Tooltip content"},children:{required:!0,tsType:{name:"ReactNode"},description:"Element to attach tooltip to"},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-start'
| 'top-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'right'
| 'right-start'
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:`Tooltip placement
@default 'top'`,defaultValue:{value:"'top'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:`Show delay in ms
@default 200`,defaultValue:{value:"200",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},showArrow:{required:!1,tsType:{name:"boolean"},description:`Show arrow
@default true`,defaultValue:{value:"true",computed:!1}}}};const Te={title:"Components/Tooltip",component:b,tags:["autodocs"]},t={args:{content:"This is a tooltip",children:e.jsx("button",{className:"ux4g-button ux4g-button-primary",children:"Hover me"})}},o={args:{content:"Tooltip on top",placement:"top",children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Top"})}},a={args:{content:"Tooltip on bottom",placement:"bottom",children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Bottom"})}},r={args:{content:"Tooltip on left",placement:"left",children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Left"})}},s={args:{content:"Tooltip on right",placement:"right",children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Right"})}},n={args:{content:"Aadhaar is a 12-digit unique identification number issued by UIDAI",children:e.jsx("span",{className:"ux4g-text-link",children:"What is Aadhaar? ℹ️"})}},i={args:{content:"PAN format: ABCDE1234F (5 letters, 4 digits, 1 letter)",children:e.jsx("label",{className:"ux4g-label",children:"PAN Card Number ℹ️"})}},l={args:{content:"Maximum file size: 5MB. Accepted formats: PDF, JPG, PNG",children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Upload Document ℹ️"})}},c={args:{content:"Select your current state of residence",children:e.jsx("label",{className:"ux4g-label",children:"State ℹ️"})}},u={args:{content:"DigiLocker is a secure cloud-based platform for storing documents",placement:"right",children:e.jsx("span",{className:"ux4g-badge ux4g-badge-info",children:"DigiLocker ℹ️"})}},m={args:{content:"The Permanent Account Number (PAN) is a ten-character alphanumeric identifier issued by the Income Tax Department. It is mandatory for financial transactions and filing income tax returns.",children:e.jsx("button",{className:"ux4g-button ux4g-button-primary",children:"PAN Details"})}},d={args:{content:"This tooltip is disabled",disabled:!0,children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Disabled Tooltip"})}},p={args:{content:"Tooltip without arrow",showArrow:!1,children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"No Arrow"})}};var S,y,D;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <button className="ux4g-button ux4g-button-primary">Hover me</button>
  }
}`,...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var v,w,P;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on top',
    placement: 'top',
    children: <button className="ux4g-button ux4g-button-outline">Top</button>
  }
}`,...(P=(w=o.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var j,L,I;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on bottom',
    placement: 'bottom',
    children: <button className="ux4g-button ux4g-button-outline">Bottom</button>
  }
}`,...(I=(L=a.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var C,q,B;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on left',
    placement: 'left',
    children: <button className="ux4g-button ux4g-button-outline">Left</button>
  }
}`,...(B=(q=r.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var R,k,E;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on right',
    placement: 'right',
    children: <button className="ux4g-button ux4g-button-outline">Right</button>
  }
}`,...(E=(k=s.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var M,F,V;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    content: 'Aadhaar is a 12-digit unique identification number issued by UIDAI',
    children: <span className="ux4g-text-link">What is Aadhaar? ℹ️</span>
  }
}`,...(V=(F=n.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var z,G,H;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    content: 'PAN format: ABCDE1234F (5 letters, 4 digits, 1 letter)',
    children: <label className="ux4g-label">PAN Card Number ℹ️</label>
  }
}`,...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var U,W,_;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    content: 'Maximum file size: 5MB. Accepted formats: PDF, JPG, PNG',
    children: <button className="ux4g-button ux4g-button-outline">Upload Document ℹ️</button>
  }
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var J,O,$;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    content: 'Select your current state of residence',
    children: <label className="ux4g-label">State ℹ️</label>
  }
}`,...($=(O=c.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    content: 'DigiLocker is a secure cloud-based platform for storing documents',
    placement: 'right',
    children: <span className="ux4g-badge ux4g-badge-info">DigiLocker ℹ️</span>
  }
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    content: 'The Permanent Account Number (PAN) is a ten-character alphanumeric identifier issued by the Income Tax Department. It is mandatory for financial transactions and filing income tax returns.',
    children: <button className="ux4g-button ux4g-button-primary">PAN Details</button>
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,ae;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
    children: <button className="ux4g-button ux4g-button-outline">Disabled Tooltip</button>
  }
}`,...(ae=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,se,ne;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip without arrow',
    showArrow: false,
    children: <button className="ux4g-button ux4g-button-outline">No Arrow</button>
  }
}`,...(ne=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const Ae=["Basic","Top","Bottom","Left","Right","AadhaarHelp","PANCardFormat","DocumentSize","StateSelection","DigiLockerInfo","LongContent","Disabled","WithoutArrow"];export{n as AadhaarHelp,t as Basic,a as Bottom,u as DigiLockerInfo,d as Disabled,l as DocumentSize,r as Left,m as LongContent,i as PANCardFormat,s as Right,c as StateSelection,o as Top,p as WithoutArrow,Ae as __namedExportsOrder,Te as default};
