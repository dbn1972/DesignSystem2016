import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as N}from"./index-G8LIXM5I.js";import{c as a}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const n=N.forwardRef(({items:o,layout:c="horizontal",striped:v=!1,className:x,...D},w)=>e.jsx("dl",{ref:w,className:a("ux4g-description-list",x),...D,children:o.map((s,p)=>e.jsxs("div",{className:a("py-3 px-2",c==="horizontal"?"flex gap-4":"",v&&p%2===0&&"bg-muted/30 rounded",p<o.length-1&&"border-b border-border"),children:[e.jsx("dt",{className:a("text-sm font-medium text-muted-foreground",c==="horizontal"?"w-1/3 shrink-0":"mb-1"),children:s.term}),e.jsx("dd",{className:"text-sm text-foreground",children:s.description})]},s.term))}));n.displayName="DescriptionList";n.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},items:{required:!0,tsType:{name:"Array",elements:[{name:"DescriptionItem"}],raw:"DescriptionItem[]"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Layout",defaultValue:{value:"'horizontal'",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"Striped rows",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const T={title:"Components/DescriptionList",component:n,tags:["autodocs"]},r={args:{items:[{term:"Application ID",description:"APP-2026-001"},{term:"Applicant",description:"Rahul Kumar"},{term:"Service",description:"Birth Certificate"},{term:"Status",description:"Under Review"}]}},t={args:{layout:"vertical",items:[{term:"Name",description:"Priya Singh"},{term:"Email",description:"priya@gov.in"}]}},i={args:{striped:!0,items:[{term:"Field 1",description:"Value 1"},{term:"Field 2",description:"Value 2"},{term:"Field 3",description:"Value 3"}]}};var d,m,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      term: 'Application ID',
      description: 'APP-2026-001'
    }, {
      term: 'Applicant',
      description: 'Rahul Kumar'
    }, {
      term: 'Service',
      description: 'Birth Certificate'
    }, {
      term: 'Status',
      description: 'Under Review'
    }]
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,f,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    items: [{
      term: 'Name',
      description: 'Priya Singh'
    }, {
      term: 'Email',
      description: 'priya@gov.in'
    }]
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,y,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    striped: true,
    items: [{
      term: 'Field 1',
      description: 'Value 1'
    }, {
      term: 'Field 2',
      description: 'Value 2'
    }, {
      term: 'Field 3',
      description: 'Value 3'
    }]
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const I=["Default","Vertical","Striped"];export{r as Default,i as Striped,t as Vertical,I as __namedExportsOrder,T as default};
