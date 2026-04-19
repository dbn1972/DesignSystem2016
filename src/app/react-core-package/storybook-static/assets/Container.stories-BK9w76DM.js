import{j as y}from"./jsx-runtime-Cf8x2fCZ.js";import{r as C}from"./index-G8LIXM5I.js";import{c as v}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const N={sm:"max-w-screen-sm",md:"max-w-screen-md",lg:"max-w-screen-lg",xl:"max-w-screen-xl","2xl":"max-w-screen-2xl",full:"max-w-full"},t=C.forwardRef(({children:u,maxWidth:x="xl",centered:g=!0,padding:f=!0,className:h,...w},S)=>y.jsx("div",{ref:S,className:v("ux4g-container",N[x],g&&"mx-auto",f&&"px-4 sm:px-6 lg:px-8",h),...w,children:u}));t.displayName="Container";t.__docgenInfo={description:"",methods:[],displayName:"Container",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},children:{required:!0,tsType:{name:"ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'full'"}]},description:"Max width",defaultValue:{value:"'xl'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center content",defaultValue:{value:"true",computed:!1}},padding:{required:!1,tsType:{name:"boolean"},description:"Horizontal padding",defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes"]};const _={title:"Components/Container",component:t,tags:["autodocs"]},e={args:{children:"Contained content with max-width and padding."}},a={args:{maxWidth:"sm",children:"Small container"}},r={args:{padding:!1,children:"No padding"}};var s,n,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Contained content with max-width and padding.'
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var o,i,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    maxWidth: 'sm',
    children: 'Small container'
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    padding: false,
    children: 'No padding'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const b=["Default","Small","NoPadding"];export{e as Default,r as NoPadding,a as Small,b as __namedExportsOrder,_ as default};
