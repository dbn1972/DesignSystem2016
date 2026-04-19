import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-G8LIXM5I.js";import{c as o}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const t=g.forwardRef(({title:p,logo:s,navItems:n=[],actions:i,sticky:m=!1,className:u,...f},x)=>e.jsx("header",{ref:x,className:o("ux4g-header bg-background border-b border-border",m&&"sticky top-0 z-40",u),...f,children:e.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s&&e.jsx("span",{className:"shrink-0","aria-hidden":"true",children:s}),e.jsx("span",{className:"text-lg font-bold text-foreground",children:p})]}),n.length>0&&e.jsx("nav",{"aria-label":"Main navigation",children:e.jsx("ul",{className:"flex items-center gap-1",children:n.map(r=>e.jsx("li",{children:e.jsx("a",{href:r.href,"aria-current":r.active?"page":void 0,className:o("px-3 py-2 text-sm font-medium rounded-lg transition-colors",r.active?"text-primary bg-primary/10":"text-muted-foreground hover:text-foreground hover:bg-muted"),children:r.label})},r.href))})}),i&&e.jsx("div",{className:"flex items-center gap-2",children:i})]})}));t.displayName="Header";t.__docgenInfo={description:"",methods:[],displayName:"Header",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},title:{required:!0,tsType:{name:"string"},description:"Site/service title"},logo:{required:!1,tsType:{name:"ReactNode"},description:"Logo element"},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"NavItem"}],raw:"NavItem[]"},description:"Navigation items",defaultValue:{value:"[]",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:"Right-side actions (e.g. language selector, login button)"},sticky:{required:!1,tsType:{name:"boolean"},description:"Sticky header",defaultValue:{value:"false",computed:!1}}}};const j={title:"Components/Header",component:t,tags:["autodocs"]},a={args:{title:"Certificate Service",navItems:[{label:"Home",href:"/",active:!0},{label:"Apply",href:"/apply"},{label:"Track",href:"/track"}],actions:e.jsx("button",{style:{padding:"6px 12px",fontSize:14,border:"1px solid #d1d5db",borderRadius:8},children:"Login"})}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Certificate Service',
    navItems: [{
      label: 'Home',
      href: '/',
      active: true
    }, {
      label: 'Apply',
      href: '/apply'
    }, {
      label: 'Track',
      href: '/track'
    }],
    actions: <button style={{
      padding: '6px 12px',
      fontSize: 14,
      border: '1px solid #d1d5db',
      borderRadius: 8
    }}>Login</button>
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const S=["Default"];export{a as Default,S as __namedExportsOrder,j as default};
