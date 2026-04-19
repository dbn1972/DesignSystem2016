import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-G8LIXM5I.js";import{c as N}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const y=m.forwardRef(({fields:i,onSubmit:w,submitLabel:C="Submit",loading:h=!1,title:g,description:x,className:F,...D},E)=>{const[n,T]=m.useState(()=>{const e={};return i.forEach(s=>{e[s.key]=s.defaultValue||""}),e}),[k,v]=m.useState({}),u=m.useCallback((e,s)=>{T(t=>({...t,[e]:s})),v(t=>({...t,[e]:""}))},[]),I=m.useCallback(()=>{var s;const e={};for(const t of i){const o=((s=n[t.key])==null?void 0:s.trim())||"";t.required&&!o?e[t.key]=t.errorMessage||`${t.label} is required`:t.pattern&&o&&!new RegExp(t.pattern).test(o)&&(e[t.key]=t.errorMessage||`Invalid ${t.label}`)}return v(e),Object.keys(e).length===0},[i,n]),R=e=>{e.preventDefault(),I()&&w(n)},A=e=>{var f,q;const s=`fb-${e.key}`,t=`${s}-error`,o=`${s}-hint`,l=!!k[e.key],d=[e.hint?o:void 0,l?t:void 0].filter(Boolean).join(" ")||void 0,b=N("w-full px-4 py-3 border rounded-lg bg-background text-foreground","focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",l?"border-destructive":"border-border");let c;switch(e.type){case"textarea":c=r.jsx("textarea",{id:s,value:n[e.key],onChange:a=>u(e.key,a.target.value),placeholder:e.placeholder,required:e.required,"aria-invalid":l,"aria-describedby":d,rows:4,className:b});break;case"select":c=r.jsxs("select",{id:s,value:n[e.key],onChange:a=>u(e.key,a.target.value),required:e.required,"aria-invalid":l,"aria-describedby":d,className:b,children:[r.jsx("option",{value:"",children:e.placeholder||"Select..."}),(f=e.options)==null?void 0:f.map(a=>r.jsx("option",{value:a.value,children:a.label},a.value))]});break;case"checkbox":c=r.jsxs("label",{className:"flex items-center gap-2",children:[r.jsx("input",{type:"checkbox",id:s,checked:n[e.key]==="true",onChange:a=>u(e.key,String(a.target.checked)),"aria-invalid":l,"aria-describedby":d,className:"h-5 w-5 rounded border-border"}),r.jsx("span",{className:"text-sm text-foreground",children:e.label})]});break;case"radio":c=r.jsxs("fieldset",{"aria-describedby":d,children:[r.jsx("legend",{className:"sr-only",children:e.label}),r.jsx("div",{className:"flex flex-col gap-2",children:(q=e.options)==null?void 0:q.map(a=>r.jsxs("label",{className:"flex items-center gap-2",children:[r.jsx("input",{type:"radio",name:e.key,value:a.value,checked:n[e.key]===a.value,onChange:B=>u(e.key,B.target.value),className:"h-4 w-4"}),r.jsx("span",{className:"text-sm text-foreground",children:a.label})]},a.value))})]});break;default:c=r.jsx("input",{type:e.type,id:s,value:n[e.key],onChange:a=>u(e.key,a.target.value),placeholder:e.placeholder,required:e.required,"aria-invalid":l,"aria-describedby":d,className:b})}return r.jsxs("div",{className:"ux4g-formbuilder-field",children:[e.type!=="checkbox"&&e.type!=="radio"&&r.jsxs("label",{htmlFor:s,className:"block text-sm font-medium text-foreground mb-1",children:[e.label,e.required&&r.jsx("span",{className:"text-destructive ml-1","aria-hidden":"true",children:"*"})]}),c,e.hint&&!l&&r.jsx("p",{id:o,className:"text-sm text-muted-foreground mt-1",children:e.hint}),l&&r.jsx("p",{id:t,role:"alert",className:"text-sm text-destructive mt-1",children:k[e.key]})]},e.key)};return r.jsxs("form",{ref:E,onSubmit:R,noValidate:!0,className:N("ux4g-formbuilder space-y-6",F),...D,children:[g&&r.jsx("h2",{className:"text-xl font-bold text-foreground",children:g}),x&&r.jsx("p",{className:"text-sm text-muted-foreground",children:x}),i.map(A),r.jsx("button",{type:"submit",disabled:h,className:"w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60",children:h?"Submitting...":C})]})});y.displayName="FormBuilder";y.__docgenInfo={description:"",methods:[],displayName:"FormBuilder",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},fields:{required:!0,tsType:{name:"Array",elements:[{name:"FormFieldConfig"}],raw:"FormFieldConfig[]"},description:"Field configurations"},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: Record<string, string>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},name:"values"}],return:{name:"void"}}},description:"Called on form submit with field values"},submitLabel:{required:!1,tsType:{name:"string"},description:"Submit button text",defaultValue:{value:"'Submit'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Whether form is submitting",defaultValue:{value:"false",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Form title"},description:{required:!1,tsType:{name:"string"},description:"Form description"}}};const P={title:"Components/FormBuilder",component:y,tags:["autodocs"]},p={args:{title:"Certificate Application",description:"Fill in the details below to apply.",fields:[{key:"name",label:"Full Name",type:"text",required:!0,placeholder:"Enter full name"},{key:"email",label:"Email",type:"email",required:!0,placeholder:"email@gov.in"},{key:"phone",label:"Phone",type:"tel",placeholder:"+91 XXXXX XXXXX"},{key:"state",label:"State",type:"select",required:!0,options:[{value:"DL",label:"Delhi"},{value:"MH",label:"Maharashtra"},{value:"KA",label:"Karnataka"}]},{key:"desc",label:"Description",type:"textarea",placeholder:"Describe your request..."},{key:"agree",label:"I agree to the terms",type:"checkbox",required:!0}],onSubmit:i=>alert(JSON.stringify(i,null,2))}};var j,S,X;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Certificate Application',
    description: 'Fill in the details below to apply.',
    fields: [{
      key: 'name',
      label: 'Full Name',
      type: 'text',
      required: true,
      placeholder: 'Enter full name'
    }, {
      key: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'email@gov.in'
    }, {
      key: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: '+91 XXXXX XXXXX'
    }, {
      key: 'state',
      label: 'State',
      type: 'select',
      required: true,
      options: [{
        value: 'DL',
        label: 'Delhi'
      }, {
        value: 'MH',
        label: 'Maharashtra'
      }, {
        value: 'KA',
        label: 'Karnataka'
      }]
    }, {
      key: 'desc',
      label: 'Description',
      type: 'textarea',
      placeholder: 'Describe your request...'
    }, {
      key: 'agree',
      label: 'I agree to the terms',
      type: 'checkbox',
      required: true
    }],
    onSubmit: v => alert(JSON.stringify(v, null, 2))
  }
}`,...(X=(S=p.parameters)==null?void 0:S.docs)==null?void 0:X.source}}};const _=["Default"];export{p as Default,_ as __namedExportsOrder,P as default};
