import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-G8LIXM5I.js";import{c as h}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=x.forwardRef(({sections:o=[],copyright:n,logo:d,socialLinks:m,className:p,...f},u)=>e.jsx("footer",{ref:u,className:h("ux4g-footer bg-muted/30 border-t border-border",p),...f,children:e.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.length>0&&e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 mb-8",children:o.map(s=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground mb-3",children:s.title}),e.jsx("ul",{className:"space-y-2",children:s.links.map(t=>e.jsx("li",{children:e.jsx("a",{href:t.href,className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:t.label})},t.href))})]},s.title))}),e.jsxs("div",{className:"flex items-center justify-between pt-8 border-t border-border",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[d,n&&e.jsx("span",{className:"text-sm text-muted-foreground",children:n})]}),m]})]})}));a.displayName="Footer";a.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},sections:{required:!1,tsType:{name:"Array",elements:[{name:"FooterSection"}],raw:"FooterSection[]"},description:"",defaultValue:{value:"[]",computed:!1}},copyright:{required:!1,tsType:{name:"string"},description:""},logo:{required:!1,tsType:{name:"ReactNode"},description:""},socialLinks:{required:!1,tsType:{name:"ReactNode"},description:""}}};const v={title:"Components/Footer",component:a,tags:["autodocs"]},r={args:{sections:[{title:"Resources",links:[{label:"Documentation",href:"/docs"},{label:"API Reference",href:"/api"}]},{title:"Legal",links:[{label:"Privacy Policy",href:"/privacy"},{label:"Terms of Use",href:"/terms"}]}],copyright:"© 2026 Government of India"}};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sections: [{
      title: 'Resources',
      links: [{
        label: 'Documentation',
        href: '/docs'
      }, {
        label: 'API Reference',
        href: '/api'
      }]
    }, {
      title: 'Legal',
      links: [{
        label: 'Privacy Policy',
        href: '/privacy'
      }, {
        label: 'Terms of Use',
        href: '/terms'
      }]
    }],
    copyright: '© 2026 Government of India'
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const R=["Default"];export{r as Default,R as __namedExportsOrder,v as default};
