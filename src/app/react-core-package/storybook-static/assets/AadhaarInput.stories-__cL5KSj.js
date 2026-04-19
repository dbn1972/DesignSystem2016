import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-G8LIXM5I.js";import{c as g}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function Q(e){const r=e.replace(/\D/g,"").slice(0,12);return[r.slice(0,4),r.slice(4,8),r.slice(8,12)].filter(Boolean).join(" ")}const h=x.forwardRef(({id:e,name:r,label:t="Aadhaar Number",value:B="",onChange:i,hint:p,errorText:s,error:F,disabled:m,required:f,className:H,"aria-describedby":O,...L},$)=>{const M=Q(B),b=F||!!s,y=e?`${e}-hint`:void 0,v=e?`${e}-error`:void 0,z=[O,p?y:void 0,s?v:void 0].filter(Boolean).join(" ")||void 0,G=x.useCallback(J=>{const K=J.target.value.replace(/\D/g,"").slice(0,12);i==null||i(K)},[i]);return a.jsxs("div",{className:g("ux4g-aadhaar-input",H),children:[t&&a.jsxs("label",{htmlFor:e,className:g("ux4g-aadhaar-input-label block text-sm font-medium text-foreground mb-1",m&&"text-muted-foreground"),children:[t,f&&a.jsx("span",{className:"text-destructive ml-1","aria-hidden":"true",children:"*"})]}),a.jsx("input",{ref:$,type:"text",inputMode:"numeric",id:e,name:r,value:M,onChange:G,placeholder:"XXXX XXXX XXXX",maxLength:14,disabled:m,required:f,"aria-label":t||"Aadhaar Number","aria-invalid":b,"aria-required":f,"aria-describedby":z,className:g("ux4g-aadhaar-input-field","w-full px-4 py-3 border rounded-lg text-lg tracking-widest font-mono","focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",b?"border-destructive focus-visible:ring-destructive":"border-border",m&&"opacity-50 cursor-not-allowed bg-muted"),...L}),p&&!s&&a.jsx("p",{id:y,className:"ux4g-aadhaar-input-hint text-sm text-muted-foreground mt-1",children:p}),s&&a.jsx("p",{id:v,role:"alert",className:"ux4g-aadhaar-input-error text-sm text-destructive mt-1",children:s})]})});h.displayName="AadhaarInput";h.__docgenInfo={description:"",methods:[],displayName:"AadhaarInput",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled
@default false`},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by reference"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by reference"},name:{required:!1,tsType:{name:"string"},description:"Field name for form submission"},id:{required:!1,tsType:{name:"string"},description:"Field ID (links label to input)"},required:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Whether the field is read-only
@default false`},error:{required:!1,tsType:{name:"boolean"},description:`Error state indicator
@default false`},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"ARIA invalid state"},"aria-required":{required:!1,tsType:{name:"boolean"},description:"ARIA required state"},label:{required:!1,tsType:{name:"string"},description:"Label text",defaultValue:{value:"'Aadhaar Number'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current value (12 digits, formatted as XXXX XXXX XXXX)",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called with raw 12-digit string"},hint:{required:!1,tsType:{name:"string"},description:"Hint text below input"},errorText:{required:!1,tsType:{name:"string"},description:"Error message"}},composes:["Omit"]};const re={title:"Components/AadhaarInput",component:h,tags:["autodocs"]},n={args:{id:"aadhaar",label:"Aadhaar Number"}},d={args:{id:"aadhaar",value:"234567890123"}},o={args:{id:"aadhaar",hint:"Enter your 12-digit Aadhaar number"}},l={args:{id:"aadhaar",value:"1234",errorText:"Please enter a valid 12-digit Aadhaar number",error:!0}},u={args:{id:"aadhaar",required:!0}},c={args:{id:"aadhaar",value:"234567890123",disabled:!0}};var q,A,X;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: 'aadhaar',
    label: 'Aadhaar Number'
  }
}`,...(X=(A=n.parameters)==null?void 0:A.docs)==null?void 0:X.source}}};var T,I,N;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'aadhaar',
    value: '234567890123'
  }
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var w,S,R;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'aadhaar',
    hint: 'Enter your 12-digit Aadhaar number'
  }
}`,...(R=(S=o.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var j,E,W;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'aadhaar',
    value: '1234',
    errorText: 'Please enter a valid 12-digit Aadhaar number',
    error: true
  }
}`,...(W=(E=l.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var D,k,C;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'aadhaar',
    required: true
  }
}`,...(C=(k=u.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var P,V,_;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'aadhaar',
    value: '234567890123',
    disabled: true
  }
}`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const se=["Default","WithValue","WithHint","WithError","Required","Disabled"];export{n as Default,c as Disabled,u as Required,l as WithError,o as WithHint,d as WithValue,se as __namedExportsOrder,re as default};
