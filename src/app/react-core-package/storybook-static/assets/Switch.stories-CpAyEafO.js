import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as ae}from"./index-G8LIXM5I.js";import{c as a}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const se={sm:{track:"h-5 w-9",thumb:"h-4 w-4",translate:"translate-x-4",offset:"left-0.5 top-0.5"},md:{track:"h-6 w-11",thumb:"h-5 w-5",translate:"translate-x-5",offset:"left-0.5 top-0.5"},lg:{track:"h-7 w-14",thumb:"h-6 w-6",translate:"translate-x-7",offset:"left-0.5 top-0.5"}},b=ae.forwardRef(({id:O,name:F,label:P,children:V,className:B,disabled:u=!1,required:f,error:G,checked:J,defaultChecked:K,size:Q="md",onChange:U,"aria-label":X,"aria-labelledby":Y,"aria-describedby":Z,"aria-invalid":$,...ee},re)=>{const p=se[Q],r=P||V,m=G??!1;return e.jsxs("label",{className:a("ux4g-switch-wrapper","inline-flex items-center gap-3 cursor-pointer",u&&"ux4g-switch-wrapper-disabled opacity-50 cursor-not-allowed",m&&"ux4g-switch-wrapper-error",B),children:[e.jsx("input",{ref:re,type:"checkbox",role:"switch",id:O,name:F,className:"sr-only peer",disabled:u,required:f,checked:J,defaultChecked:K,onChange:U,"aria-label":X||(typeof r=="string"?r:void 0),"aria-labelledby":Y,"aria-describedby":Z,"aria-invalid":$??m,"aria-required":f,...ee}),e.jsx("span",{"aria-hidden":"true",className:a("ux4g-switch-track","relative inline-flex shrink-0 rounded-full border-2 border-transparent transition-colors","bg-muted peer-checked:bg-primary","peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2",m&&"bg-destructive/30 peer-checked:bg-destructive",p.track),children:e.jsx("span",{className:a("ux4g-switch-thumb","pointer-events-none inline-block rounded-full bg-background shadow-sm transition-transform","translate-x-0 peer-checked:"+p.translate,p.thumb)})}),r&&e.jsx("span",{className:a("ux4g-switch-label","text-sm font-medium text-foreground",u&&"ux4g-switch-label-disabled text-muted-foreground"),children:r})]})});b.displayName="Switch";b.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by reference"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by reference"},name:{required:!1,tsType:{name:"string"},description:"Field name for form submission"},id:{required:!1,tsType:{name:"string"},description:"Field ID (links label to input)"},required:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Whether the field is read-only
@default false`},error:{required:!1,tsType:{name:"boolean"},description:`Error state indicator
@default false`},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"ARIA invalid state"},"aria-required":{required:!1,tsType:{name:"boolean"},description:"ARIA required state"},children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:"Switch label text"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the switch is on"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state for uncontrolled usage"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Change handler"}},composes:["Omit"]};const de={title:"Components/Switch",component:b,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},error:{control:"boolean"},required:{control:"boolean"}}},s={args:{label:"Enable notifications"}},t={args:{label:"Dark mode",defaultChecked:!0}},n={args:{label:"Compact toggle",size:"sm"}},i={args:{label:"Large toggle",size:"lg"}},l={args:{label:"Disabled switch",disabled:!0}},o={args:{label:"Disabled on",disabled:!0,defaultChecked:!0}},d={args:{label:"Accept terms",error:!0,required:!0}},c={args:{"aria-label":"Toggle feature"}};var g,h,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var w,x,k;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Dark mode',
    defaultChecked: true
  }
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var T,q,v;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Compact toggle',
    size: 'sm'
  }
}`,...(v=(q=n.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var S,C,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Large toggle',
    size: 'lg'
  }
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,A,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Disabled switch',
    disabled: true
  }
}`,...(I=(A=l.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var N,R,L;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Disabled on',
    disabled: true,
    defaultChecked: true
  }
}`,...(L=(R=o.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var z,W,j;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms',
    error: true,
    required: true
  }
}`,...(j=(W=d.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var M,_,H;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Toggle feature'
  }
}`,...(H=(_=c.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const ce=["Default","Checked","Small","Large","Disabled","DisabledChecked","WithError","WithoutLabel"];export{t as Checked,s as Default,l as Disabled,o as DisabledChecked,i as Large,n as Small,d as WithError,c as WithoutLabel,ce as __namedExportsOrder,de as default};
