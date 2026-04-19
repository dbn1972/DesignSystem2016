import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as y}from"./index-G8LIXM5I.js";import{c as h}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const n=y.forwardRef(({size:r=16,axis:a="vertical",className:u,style:g,...f},v)=>{const s=typeof r=="number"?`${r}px`:r;return e.jsx("div",{ref:v,"aria-hidden":"true",className:h("ux4g-spacer",u),style:{width:a==="horizontal"?s:void 0,minWidth:a==="horizontal"?s:void 0,height:a==="vertical"?s:void 0,minHeight:a==="vertical"?s:void 0,...g},...f})});n.displayName="Spacer";n.__docgenInfo={description:"",methods:[],displayName:"Spacer",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Fixed size in pixels or CSS value",defaultValue:{value:"16",computed:!1}},axis:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Axis",defaultValue:{value:"'vertical'",computed:!1}}},composes:["HTMLAttributes"]};const j={title:"Components/Spacer",component:n,tags:["autodocs"]},d={args:{size:32},decorators:[r=>e.jsxs("div",{style:{background:"#f0f0f0"},children:[e.jsx("div",{style:{background:"#ddd",padding:8},children:"Above"}),e.jsx(r,{}),e.jsx("div",{style:{background:"#ddd",padding:8},children:"Below"})]})]},i={args:{size:32,axis:"horizontal"},decorators:[r=>e.jsxs("div",{style:{display:"flex",background:"#f0f0f0"},children:[e.jsx("div",{style:{background:"#ddd",padding:8},children:"Left"}),e.jsx(r,{}),e.jsx("div",{style:{background:"#ddd",padding:8},children:"Right"})]})]};var t,o,l;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: 32
  },
  decorators: [S => <div style={{
    background: '#f0f0f0'
  }}><div style={{
      background: '#ddd',
      padding: 8
    }}>Above</div><S /><div style={{
      background: '#ddd',
      padding: 8
    }}>Below</div></div>]
}`,...(l=(o=d.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,p,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 32,
    axis: 'horizontal'
  },
  decorators: [S => <div style={{
    display: 'flex',
    background: '#f0f0f0'
  }}><div style={{
      background: '#ddd',
      padding: 8
    }}>Left</div><S /><div style={{
      background: '#ddd',
      padding: 8
    }}>Right</div></div>]
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const w=["Vertical","Horizontal"];export{i as Horizontal,d as Vertical,w as __namedExportsOrder,j as default};
