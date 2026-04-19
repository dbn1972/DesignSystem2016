import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./index-G8LIXM5I.js";import{c as b}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function w(t){if(typeof t=="number")return t;const e=t.split("/").map(Number);return e.length===2&&e[1]?e[0]/e[1]:1}const i=h.forwardRef(({children:t,ratio:e=1,className:m,style:u,...g},f)=>{const y=w(e);return n.jsx("div",{ref:f,className:b("ux4g-aspect-ratio relative overflow-hidden",m),style:{aspectRatio:String(y),...u},...g,children:t})});i.displayName="AspectRatio";i.__docgenInfo={description:"",methods:[],displayName:"AspectRatio",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},children:{required:!0,tsType:{name:"ReactNode"},description:""},ratio:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:'Ratio as number (e.g. 16/9 = 1.777) or string "16/9"',defaultValue:{value:"1",computed:!1}}},composes:["HTMLAttributes"]};const C={title:"Components/AspectRatio",component:i,tags:["autodocs"]},r={args:{ratio:1,children:n.jsx("div",{style:{background:"#e5e7eb",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:"1:1"}),style:{width:200}}},s={args:{ratio:"16/9",children:n.jsx("div",{style:{background:"#e5e7eb",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:"16:9"}),style:{width:400}}};var a,o,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ratio: 1,
    children: <div style={{
      background: '#e5e7eb',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>1:1</div>,
    style: {
      width: 200
    }
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,l,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ratio: '16/9',
    children: <div style={{
      background: '#e5e7eb',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>16:9</div>,
    style: {
      width: 400
    }
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const q=["Square","Widescreen"];export{r as Square,s as Widescreen,q as __namedExportsOrder,C as default};
