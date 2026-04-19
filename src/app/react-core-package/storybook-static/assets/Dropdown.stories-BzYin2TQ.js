import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as J}from"./index-G8LIXM5I.js";import{c as f}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const Q={sm:"px-3 py-2 text-sm",md:"px-4 py-3 text-base",lg:"px-4 py-3.5 text-lg"},b=J.forwardRef(({id:a,name:_,label:v,options:A,value:F,placeholder:x="Select an option",onChange:p,size:B="md",disabled:c=!1,required:m=!1,error:K=!1,errorText:r,hint:g,className:L,...U},$)=>{const y=K||!!r,S=a?`${a}-hint`:void 0,h=a?`${a}-error`:void 0,G=[g?S:void 0,r?h:void 0].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:f("ux4g-dropdown",L),...U,children:[v&&e.jsxs("label",{htmlFor:a,className:f("ux4g-dropdown-label block text-sm font-medium text-foreground mb-1",c&&"text-muted-foreground"),children:[v,m&&e.jsx("span",{className:"text-destructive ml-1","aria-hidden":"true",children:"*"})]}),e.jsxs("select",{ref:$,id:a,name:_,value:F,onChange:s=>p==null?void 0:p(s.target.value),disabled:c,required:m,"aria-invalid":y,"aria-required":m,"aria-describedby":G,className:f("ux4g-dropdown-select","w-full border rounded-lg bg-background text-foreground appearance-none","focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",y?"border-destructive":"border-border",c&&"opacity-50 cursor-not-allowed bg-muted",Q[B]),children:[x&&e.jsx("option",{value:"",children:x}),A.map(s=>e.jsx("option",{value:s.value,disabled:s.disabled,children:s.label},s.value))]}),g&&!r&&e.jsx("p",{id:S,className:"ux4g-dropdown-hint text-sm text-muted-foreground mt-1",children:g}),r&&e.jsx("p",{id:h,role:"alert",className:"ux4g-dropdown-error text-sm text-destructive mt-1",children:r})]})});b.displayName="Dropdown";b.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},label:{required:!1,tsType:{name:"string"},description:"Label text"},options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"Options list"},value:{required:!1,tsType:{name:"string"},description:"Selected value"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder when no value selected",defaultValue:{value:"'Select an option'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Required",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Error message"},hint:{required:!1,tsType:{name:"string"},description:"Hint text"},id:{required:!1,tsType:{name:"string"},description:"Field id"},name:{required:!1,tsType:{name:"string"},description:"Field name"}}};const t=[{value:"DL",label:"Delhi"},{value:"MH",label:"Maharashtra"},{value:"KA",label:"Karnataka"},{value:"TN",label:"Tamil Nadu"},{value:"UP",label:"Uttar Pradesh"}],se={title:"Components/Dropdown",component:b,tags:["autodocs"]},o={args:{id:"state",label:"State",options:t}},n={args:{id:"state",label:"State",options:t,value:"MH"}},l={args:{id:"state",label:"State",options:t,errorText:"Please select a state",error:!0}},i={args:{id:"state",label:"State",options:t,required:!0}},d={args:{id:"state",label:"State",options:t,disabled:!0}},u={args:{id:"state",label:"State",options:t,size:"sm"}};var q,w,T;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: 'state',
    label: 'State',
    options: states
  }
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var D,N,j;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'state',
    label: 'State',
    options: states,
    value: 'MH'
  }
}`,...(j=(N=n.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var E,P,R;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'state',
    label: 'State',
    options: states,
    errorText: 'Please select a state',
    error: true
  }
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var V,k,z;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: 'state',
    label: 'State',
    options: states,
    required: true
  }
}`,...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var I,C,H;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'state',
    label: 'State',
    options: states,
    disabled: true
  }
}`,...(H=(C=d.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var M,O,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: 'state',
    label: 'State',
    options: states,
    size: 'sm'
  }
}`,...(W=(O=u.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const te=["Default","WithValue","WithError","Required","Disabled","Small"];export{o as Default,d as Disabled,i as Required,u as Small,l as WithError,n as WithValue,te as __namedExportsOrder,se as default};
