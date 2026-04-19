import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as q}from"./index-G8LIXM5I.js";import{c as i}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const w={sm:"text-xs px-3 py-1.5",md:"text-sm px-4 py-2",lg:"text-base px-5 py-2.5"},s=q.forwardRef(({options:v,value:f,onChange:t,size:b="md",disabled:r=!1,"aria-label":y="Options",className:x,...S},T)=>o.jsx("div",{ref:T,role:"radiogroup","aria-label":y,className:i("ux4g-segmented-control inline-flex rounded-lg border border-border bg-muted/50 p-1",r&&"opacity-50",x),...S,children:v.map(e=>{const n=f===e.value;return o.jsx("button",{type:"button",role:"radio","aria-checked":n,disabled:r||e.disabled,onClick:()=>t==null?void 0:t(e.value),className:i("ux4g-segmented-control-option rounded-md font-medium transition-colors",w[b],n?"bg-background text-foreground shadow-sm":"text-muted-foreground hover:text-foreground",(r||e.disabled)&&"cursor-not-allowed"),children:e.label},e.value)})}));s.displayName="SegmentedControl";s.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},options:{required:!0,tsType:{name:"Array",elements:[{name:"SegmentOption"}],raw:"SegmentOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Options'",computed:!1}}}};const D={title:"Components/SegmentedControl",component:s,tags:["autodocs"]},a={args:{options:[{value:"all",label:"All"},{value:"active",label:"Active"},{value:"closed",label:"Closed"}],value:"all"}},l={args:{options:[{value:"a",label:"Day"},{value:"b",label:"Week"},{value:"c",label:"Month"}],value:"a",size:"sm"}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'all',
      label: 'All'
    }, {
      value: 'active',
      label: 'Active'
    }, {
      value: 'closed',
      label: 'Closed'
    }],
    value: 'all'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,c,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'a',
      label: 'Day'
    }, {
      value: 'b',
      label: 'Week'
    }, {
      value: 'c',
      label: 'Month'
    }],
    value: 'a',
    size: 'sm'
  }
}`,...(g=(c=l.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const O=["Default","Small"];export{a as Default,l as Small,O as __namedExportsOrder,D as default};
