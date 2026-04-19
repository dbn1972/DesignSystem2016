import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-G8LIXM5I.js";import{c as f}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const t=b.forwardRef(({languages:o,value:d,onChange:c,label:s="Select Language",disabled:u=!1,className:g,...m},p)=>a.jsxs("div",{className:f("ux4g-language-selector inline-flex items-center gap-2",g),...m,children:[a.jsx("label",{htmlFor:"ux4g-lang-select",className:"text-sm text-muted-foreground sr-only",children:s}),a.jsx("select",{ref:p,id:"ux4g-lang-select",value:d,onChange:e=>c(e.target.value),disabled:u,"aria-label":s,className:"text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",children:o.map(e=>a.jsxs("option",{value:e.code,children:[e.nativeLabel," (",e.label,")"]},e.code))})]}));t.displayName="LanguageSelector";t.__docgenInfo={description:"",methods:[],displayName:"LanguageSelector",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},languages:{required:!0,tsType:{name:"Array",elements:[{name:"Language"}],raw:"Language[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select Language'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const S={title:"Components/LanguageSelector",component:t,tags:["autodocs"]},n={args:{languages:[{code:"en",label:"English",nativeLabel:"English"},{code:"hi",label:"Hindi",nativeLabel:"हिन्दी"},{code:"ta",label:"Tamil",nativeLabel:"தமிழ்"},{code:"bn",label:"Bengali",nativeLabel:"বাংলা"}],value:"en"}};var r,l,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    languages: [{
      code: 'en',
      label: 'English',
      nativeLabel: 'English'
    }, {
      code: 'hi',
      label: 'Hindi',
      nativeLabel: 'हिन्दी'
    }, {
      code: 'ta',
      label: 'Tamil',
      nativeLabel: 'தமிழ்'
    }, {
      code: 'bn',
      label: 'Bengali',
      nativeLabel: 'বাংলা'
    }],
    value: 'en'
  }
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const T=["Default"];export{n as Default,T as __namedExportsOrder,S as default};
