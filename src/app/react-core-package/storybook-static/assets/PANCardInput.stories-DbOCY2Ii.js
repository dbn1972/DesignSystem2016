import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as v}from"./index-G8LIXM5I.js";import{c as m}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const f=v.forwardRef(({id:e,name:w,label:l="PAN Card Number",value:j="",onChange:s,hint:u,errorText:a,error:W,disabled:p,required:c,className:k,"aria-describedby":V,..._},O)=>{const g=W||!!a,b=e?`${e}-hint`:void 0,y=e?`${e}-error`:void 0,U=[V,u?b:void 0,a?y:void 0].filter(Boolean).join(" ")||void 0,$=v.useCallback(z=>{const L=z.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,10);s==null||s(L)},[s]);return r.jsxs("div",{className:m("ux4g-pan-input",k),children:[l&&r.jsxs("label",{htmlFor:e,className:m("ux4g-pan-input-label block text-sm font-medium text-foreground mb-1",p&&"text-muted-foreground"),children:[l,c&&r.jsx("span",{className:"text-destructive ml-1","aria-hidden":"true",children:"*"})]}),r.jsx("input",{ref:O,type:"text",id:e,name:w,value:j.toUpperCase(),onChange:$,placeholder:"ABCDE1234F",maxLength:10,disabled:p,required:c,autoCapitalize:"characters","aria-label":l||"PAN Card Number","aria-invalid":g,"aria-required":c,"aria-describedby":U,className:m("ux4g-pan-input-field","w-full px-4 py-3 border rounded-lg text-lg tracking-widest font-mono uppercase","focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",g?"border-destructive focus-visible:ring-destructive":"border-border",p&&"opacity-50 cursor-not-allowed bg-muted"),..._}),u&&!a&&r.jsx("p",{id:b,className:"ux4g-pan-input-hint text-sm text-muted-foreground mt-1",children:u}),a&&r.jsx("p",{id:y,role:"alert",className:"ux4g-pan-input-error text-sm text-destructive mt-1",children:a})]})});f.displayName="PANCardInput";f.__docgenInfo={description:"",methods:[],displayName:"PANCardInput",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled
@default false`},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by reference"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by reference"},name:{required:!1,tsType:{name:"string"},description:"Field name for form submission"},id:{required:!1,tsType:{name:"string"},description:"Field ID (links label to input)"},required:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Whether the field is read-only
@default false`},error:{required:!1,tsType:{name:"boolean"},description:`Error state indicator
@default false`},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"ARIA invalid state"},"aria-required":{required:!1,tsType:{name:"boolean"},description:"ARIA required state"},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'PAN Card Number'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:'Current value (e.g. "ABCDE1234F")',defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called with uppercase PAN string"},hint:{required:!1,tsType:{name:"string"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const M={title:"Components/PANCardInput",component:f,tags:["autodocs"]},t={args:{id:"pan"}},i={args:{id:"pan",value:"ABCDE1234F"}},n={args:{id:"pan",value:"ABC",errorText:"Enter valid PAN (ABCDE1234F)",error:!0}},o={args:{id:"pan",required:!0}},d={args:{id:"pan",value:"ABCDE1234F",disabled:!0}};var A,h,x;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: 'pan'
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var q,C,N;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: 'pan',
    value: 'ABCDE1234F'
  }
}`,...(N=(C=i.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var T,E,I;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'pan',
    value: 'ABC',
    errorText: 'Enter valid PAN (ABCDE1234F)',
    error: true
  }
}`,...(I=(E=n.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var D,B,P;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'pan',
    required: true
  }
}`,...(P=(B=o.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var F,R,S;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'pan',
    value: 'ABCDE1234F',
    disabled: true
  }
}`,...(S=(R=d.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const Q=["Default","WithValue","WithError","Required","Disabled"];export{t as Default,d as Disabled,o as Required,n as WithError,i as WithValue,Q as __namedExportsOrder,M as default};
