import{j as y}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-G8LIXM5I.js";import{c as b}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const n=x.forwardRef(({children:l,minHeight:t,inline:m=!1,className:p,style:u,...f},h)=>{const g=typeof t=="number"?`${t}px`:t;return y.jsx("div",{ref:h,className:b("ux4g-center flex items-center justify-center",m&&"inline-flex",p),style:{minHeight:g,...u},...f,children:l})});n.displayName="Center";n.__docgenInfo={description:"",methods:[],displayName:"Center",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},children:{required:!0,tsType:{name:"ReactNode"},description:""},minHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Minimum height"},inline:{required:!1,tsType:{name:"boolean"},description:"Center inline (horizontal only)",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const q={title:"Components/Center",component:n,tags:["autodocs"]},e={args:{children:"Centered content",minHeight:200,style:{border:"1px dashed #ccc"}}},r={args:{children:"🎯",inline:!0,style:{width:48,height:48,border:"1px solid #ccc",borderRadius:"50%"}}};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Centered content',
    minHeight: 200,
    style: {
      border: '1px dashed #ccc'
    }
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var o,c,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: '🎯',
    inline: true,
    style: {
      width: 48,
      height: 48,
      border: '1px solid #ccc',
      borderRadius: '50%'
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const N=["Default","Inline"];export{e as Default,r as Inline,N as __namedExportsOrder,q as default};
