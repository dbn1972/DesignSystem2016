import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as T}from"./index-G8LIXM5I.js";import{c as r}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const w={completed:{dot:"bg-green-600 text-white",line:"bg-green-600",text:"text-foreground"},current:{dot:"bg-primary text-white ring-4 ring-primary/20",line:"bg-border",text:"text-primary font-semibold"},upcoming:{dot:"bg-muted text-muted-foreground",line:"bg-border",text:"text-muted-foreground"},error:{dot:"bg-destructive text-white",line:"bg-destructive/30",text:"text-destructive"}},L={completed:"✓",current:"●",upcoming:"○",error:"!"},c=T.forwardRef(({applicationId:l,serviceName:d,steps:p,orientation:j="vertical",className:S,...A},D)=>{const a=j==="vertical";return e.jsxs("div",{ref:D,className:r("ux4g-application-tracker",S),role:"group","aria-label":`Application tracker for ${l}`,...A,children:[e.jsxs("div",{className:"ux4g-application-tracker-header mb-6",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"Application ID"}),e.jsx("div",{className:"text-lg font-bold text-foreground font-mono",children:l}),d&&e.jsx("div",{className:"text-sm text-muted-foreground mt-1",children:d})]}),e.jsx("ol",{className:r("ux4g-application-tracker-steps",a?"flex flex-col gap-0":"flex items-start gap-0"),"aria-label":"Application steps",children:p.map((t,I)=>{const s=w[t.status],m=I===p.length-1;return e.jsxs("li",{className:r("ux4g-application-tracker-step relative",a?"flex gap-4 pb-8 last:pb-0":"flex flex-col items-center flex-1"),"aria-current":t.status==="current"?"step":void 0,children:[!m&&a&&e.jsx("div",{className:r("absolute left-[15px] top-8 w-0.5 h-full",s.line),"aria-hidden":"true"}),e.jsx("div",{className:r("relative z-10 flex items-center justify-center rounded-full shrink-0","h-8 w-8 text-sm font-bold",s.dot),"aria-hidden":"true",children:t.icon||L[t.status]}),e.jsxs("div",{className:r(a?"flex-1 pt-1":"text-center mt-3"),children:[e.jsx("div",{className:r("text-sm",s.text),children:t.label}),t.description&&e.jsx("div",{className:"text-xs text-muted-foreground mt-0.5",children:t.description}),t.timestamp&&e.jsx("div",{className:"text-xs text-muted-foreground mt-0.5",children:t.timestamp})]}),!m&&!a&&e.jsx("div",{className:r("h-0.5 flex-1 mt-4 mx-2",s.line),"aria-hidden":"true"})]},t.key)})})]})});c.displayName="ApplicationTracker";c.__docgenInfo={description:"",methods:[],displayName:"ApplicationTracker",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},applicationId:{required:!0,tsType:{name:"string"},description:"Application/reference ID"},serviceName:{required:!1,tsType:{name:"string"},description:"Service name"},steps:{required:!0,tsType:{name:"Array",elements:[{name:"TrackerStep"}],raw:"TrackerStep[]"},description:"Steps in the application journey"},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Layout direction",defaultValue:{value:"'vertical'",computed:!1}}}};const P={title:"Components/ApplicationTracker",component:c,tags:["autodocs"]},N=[{key:"submitted",label:"Application Submitted",status:"completed",timestamp:"10 Apr 2026"},{key:"screening",label:"Initial Screening",status:"completed",timestamp:"11 Apr 2026"},{key:"verification",label:"Document Verification",status:"current",description:"Officer reviewing documents"},{key:"approval",label:"Approval",status:"upcoming"},{key:"issued",label:"Certificate Issued",status:"upcoming"}],i={args:{applicationId:"DL-2026-89012",serviceName:"Birth Certificate",steps:N}},n={args:{applicationId:"DL-2026-89012",serviceName:"Passport",steps:N,orientation:"horizontal"}},o={args:{applicationId:"DL-2026-89013",serviceName:"Driving License",steps:[{key:"submitted",label:"Submitted",status:"completed"},{key:"rejected",label:"Rejected",status:"error",description:"Missing address proof"}]}};var u,x,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    applicationId: 'DL-2026-89012',
    serviceName: 'Birth Certificate',
    steps
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,v,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    applicationId: 'DL-2026-89012',
    serviceName: 'Passport',
    steps,
    orientation: 'horizontal'
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,y,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    applicationId: 'DL-2026-89013',
    serviceName: 'Driving License',
    steps: [{
      key: 'submitted',
      label: 'Submitted',
      status: 'completed' as const
    }, {
      key: 'rejected',
      label: 'Rejected',
      status: 'error' as const,
      description: 'Missing address proof'
    }]
  }
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const _=["Default","Horizontal","WithError"];export{i as Default,n as Horizontal,o as WithError,_ as __namedExportsOrder,P as default};
