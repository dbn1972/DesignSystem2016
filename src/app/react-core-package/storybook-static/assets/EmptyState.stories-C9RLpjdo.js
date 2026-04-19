import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as C}from"./index-G8LIXM5I.js";import{c as s}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const P={sm:{wrapper:"py-8 px-4",icon:"mb-3",title:"text-base",desc:"text-xs",gap:"mt-4"},md:{wrapper:"py-12 px-6",icon:"mb-4",title:"text-lg",desc:"text-sm",gap:"mt-6"},lg:{wrapper:"py-16 px-8",icon:"mb-5",title:"text-xl",desc:"text-base",gap:"mt-8"}},c=C.forwardRef(({title:v,description:d,icon:p,action:l,secondaryAction:m,size:A="md",className:q,...E},W)=>{const t=P[A];return e.jsxs("div",{ref:W,role:"status",className:s("ux4g-empty-state","flex flex-col items-center justify-center text-center",t.wrapper,q),...E,children:[p&&e.jsx("div",{className:s("ux4g-empty-state-icon text-muted-foreground",t.icon),children:p}),e.jsx("h3",{className:s("ux4g-empty-state-title font-semibold text-foreground",t.title),children:v}),d&&e.jsx("p",{className:s("ux4g-empty-state-description text-muted-foreground mt-2 max-w-md",t.desc),children:d}),(l||m)&&e.jsxs("div",{className:s("ux4g-empty-state-actions flex items-center gap-3",t.gap),children:[l,m]})]})});c.displayName="EmptyState";c.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},title:{required:!0,tsType:{name:"string"},description:"Title text"},description:{required:!1,tsType:{name:"string"},description:"Description text"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon or illustration to display"},action:{required:!1,tsType:{name:"ReactNode"},description:"Primary action button"},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Secondary action"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}}},composes:["HTMLAttributes"]};const B={title:"Components/EmptyState",component:c,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},n={args:{title:"No results found",description:"Try adjusting your search or filters to find what you are looking for.",icon:e.jsx("span",{style:{fontSize:48},children:"🔍"})}},r={args:{title:"No applications yet",description:"Start a new application to get started.",icon:e.jsx("span",{style:{fontSize:48},children:"📋"}),action:e.jsx("button",{style:{padding:"8px 16px",background:"#005196",color:"white",border:"none",borderRadius:8,cursor:"pointer"},children:"New Application"})}},o={args:{title:"Something went wrong",description:"We could not load your data. Please try again.",icon:e.jsx("span",{style:{fontSize:48},children:"⚠️"}),action:e.jsx("button",{style:{padding:"8px 16px",background:"#005196",color:"white",border:"none",borderRadius:8},children:"Retry"}),secondaryAction:e.jsx("button",{style:{padding:"8px 16px",background:"transparent",border:"1px solid #d1d5db",borderRadius:8},children:"Go back"})}},a={args:{title:"No items",size:"sm"}},i={args:{title:"Your inbox is empty",description:"You have no notifications at this time.",size:"lg",icon:e.jsx("span",{style:{fontSize:64},children:"📭"})}};var u,g,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'No results found',
    description: 'Try adjusting your search or filters to find what you are looking for.',
    icon: <span style={{
      fontSize: 48
    }}>🔍</span>
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,f,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'No applications yet',
    description: 'Start a new application to get started.',
    icon: <span style={{
      fontSize: 48
    }}>📋</span>,
    action: <button style={{
      padding: '8px 16px',
      background: '#005196',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer'
    }}>New Application</button>
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,S,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Something went wrong',
    description: 'We could not load your data. Please try again.',
    icon: <span style={{
      fontSize: 48
    }}>⚠️</span>,
    action: <button style={{
      padding: '8px 16px',
      background: '#005196',
      color: 'white',
      border: 'none',
      borderRadius: 8
    }}>Retry</button>,
    secondaryAction: <button style={{
      padding: '8px 16px',
      background: 'transparent',
      border: '1px solid #d1d5db',
      borderRadius: 8
    }}>Go back</button>
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var N,j,z;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'No items',
    size: 'sm'
  }
}`,...(z=(j=a.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var R,T,k;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Your inbox is empty',
    description: 'You have no notifications at this time.',
    size: 'lg',
    icon: <span style={{
      fontSize: 64
    }}>📭</span>
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const G=["Default","WithAction","WithBothActions","Small","Large"];export{n as Default,i as Large,a as Small,r as WithAction,o as WithBothActions,G as __namedExportsOrder,B as default};
