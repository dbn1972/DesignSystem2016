import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-G8LIXM5I.js";import{c as k}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=o.forwardRef(({src:c,alt:E,size:T="md",name:l,shape:C="circle",className:P,...w},D)=>{const[O,M]=o.useState(!1),_=b=>b.split(" ").map(U=>U[0]).join("").toUpperCase().slice(0,2);return e.jsx("div",{ref:D,className:k("ux4g-avatar",`ux4g-avatar-${T}`,`ux4g-avatar-${C}`,P),...w,children:c&&!O?e.jsx("img",{src:c,alt:E||l,onError:()=>M(!0)}):l?e.jsx("span",{className:"ux4g-avatar-initials",children:_(l)}):e.jsx("svg",{className:"ux4g-avatar-icon",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})})});a.displayName="Avatar";a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:"",defaultValue:{value:"'circle'",computed:!1}}},composes:["HTMLAttributes"]};const B={title:"Components/Avatar",component:a,parameters:{layout:"padded"},tags:["autodocs"]},s={args:{name:"Rajesh Kumar"}},r={args:{src:"https://i.pravatar.cc/150?img=12",alt:"User avatar"}},t={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",name:"RK"}),e.jsx(a,{size:"md",name:"RK"}),e.jsx(a,{size:"lg",name:"RK"}),e.jsx(a,{size:"xl",name:"RK"})]})},n={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{shape:"circle",name:"Rajesh Kumar"}),e.jsx(a,{shape:"square",name:"Rajesh Kumar"})]})},i={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{name:"Rajesh Kumar"}),e.jsx(a,{name:"Priya Sharma"}),e.jsx(a,{name:"Amit Patel"}),e.jsx(a,{name:"S"})]})},m={render:()=>e.jsxs("div",{className:"flex items-center gap-3 p-4 border rounded",children:[e.jsx(a,{size:"lg",name:"Officer Name"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Rajesh Kumar"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Deputy Commissioner"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Employee ID: EMP-2026-1234"})]})]})};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'Rajesh Kumar'
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,v,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'User avatar'
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,h,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar size="sm" name="RK" />
      <Avatar size="md" name="RK" />
      <Avatar size="lg" name="RK" />
      <Avatar size="xl" name="RK" />
    </div>
}`,...(j=(h=t.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var y,R,N;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar shape="circle" name="Rajesh Kumar" />
      <Avatar shape="square" name="Rajesh Kumar" />
    </div>
}`,...(N=(R=n.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var S,A,K;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Avatar name="Rajesh Kumar" />
      <Avatar name="Priya Sharma" />
      <Avatar name="Amit Patel" />
      <Avatar name="S" />
    </div>
}`,...(K=(A=i.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var z,q,I;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3 p-4 border rounded">
      <Avatar size="lg" name="Officer Name" />
      <div>
        <h4 className="font-medium">Rajesh Kumar</h4>
        <p className="text-sm text-gray-600">Deputy Commissioner</p>
        <p className="text-xs text-gray-500">Employee ID: EMP-2026-1234</p>
      </div>
    </div>
}`,...(I=(q=m.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};const L=["Default","WithImage","Sizes","Shapes","Initials","GovernmentOfficer"];export{s as Default,m as GovernmentOfficer,i as Initials,n as Shapes,t as Sizes,r as WithImage,L as __namedExportsOrder,B as default};
