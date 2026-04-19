import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-G8LIXM5I.js";import{c as k}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const n=d.forwardRef(({code:o,language:a,filename:r,showLineNumbers:b=!1,copyable:i=!0,className:h,...y},C)=>{const[N,c]=d.useState(!1),j=()=>{navigator.clipboard.writeText(o),c(!0),setTimeout(()=>c(!1),2e3)},w=o.split(`
`);return e.jsxs("div",{className:k("ux4g-code-block rounded-xl border border-border overflow-hidden",h),children:[(r||i)&&e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border",children:[e.jsx("span",{className:"text-xs font-mono text-muted-foreground",children:r||a||"Code"}),i&&e.jsx("button",{type:"button",onClick:j,className:"text-xs text-muted-foreground hover:text-foreground","aria-label":"Copy code",children:N?"✓ Copied":"Copy"})]}),e.jsx("pre",{ref:C,tabIndex:0,role:"region","aria-label":`${r||a||"Code"} snippet`,className:"p-4 bg-slate-950 text-slate-100 text-sm overflow-auto max-h-96",...y,children:e.jsx("code",{className:"font-mono leading-6",children:b?w.map((T,l)=>e.jsxs("span",{children:[e.jsx("span",{className:"inline-block w-8 text-right mr-4 text-slate-500 select-none",children:l+1}),T,`
`]},l)):o})})]})});n.displayName="CodeBlock";n.__docgenInfo={description:"",methods:[],displayName:"CodeBlock",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},code:{required:!0,tsType:{name:"string"},description:""},language:{required:!1,tsType:{name:"string"},description:""},filename:{required:!1,tsType:{name:"string"},description:""},showLineNumbers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},copyable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes"]};const L={title:"Components/CodeBlock",component:n,tags:["autodocs"]},t={args:{code:`import { Button } from "@ux4g/react";

export default function App() {
  return <Button>Click me</Button>;
}`,language:"tsx",filename:"App.tsx"}},s={args:{code:`const a = 1;
const b = 2;
const c = a + b;
console.log(c);`,showLineNumbers:!0,filename:"example.js"}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    code: 'import { Button } from "@ux4g/react";\\n\\nexport default function App() {\\n  return <Button>Click me</Button>;\\n}',
    language: 'tsx',
    filename: 'App.tsx'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,x,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    code: 'const a = 1;\\nconst b = 2;\\nconst c = a + b;\\nconsole.log(c);',
    showLineNumbers: true,
    filename: 'example.js'
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const I=["Default","WithLineNumbers"];export{t as Default,s as WithLineNumbers,I as __namedExportsOrder,L as default};
