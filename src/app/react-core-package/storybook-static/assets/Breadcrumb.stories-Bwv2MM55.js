import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as Te}from"./index-G8LIXM5I.js";import{c as A}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function f({items:u,separator:Ce="/",maxItems:h,collapseText:g="...",navProps:Ne,className:Pe,...Ie}){const[ke,De]=Te.useState(!1),v=h&&u.length>h&&!ke?[u[0],{label:g,onClick:()=>De(!0)},...u.slice(-(h-2))]:u;return r.jsx("nav",{className:A("ux4g-breadcrumb",Pe),"aria-label":"Breadcrumb",...Ne,...Ie,children:r.jsx("ol",{className:"ux4g-breadcrumb-list",children:v.map((e,y)=>{const S=y===v.length-1,b=e.current||S,x=e.label===g;return r.jsxs("li",{className:A("ux4g-breadcrumb-item",b&&"ux4g-breadcrumb-item-current"),children:[e.href?r.jsxs("a",{href:e.href,className:"ux4g-breadcrumb-link","aria-current":b?"page":void 0,children:[e.icon&&r.jsx("span",{className:"ux4g-breadcrumb-icon","aria-hidden":"true",children:e.icon}),e.label]}):e.onClick||x?r.jsxs("button",{type:"button",className:"ux4g-breadcrumb-button",onClick:e.onClick,"aria-current":b?"page":void 0,"aria-label":x?"Show all items":void 0,children:[e.icon&&r.jsx("span",{className:"ux4g-breadcrumb-icon","aria-hidden":"true",children:e.icon}),e.label]}):r.jsxs("span",{className:"ux4g-breadcrumb-text","aria-current":b?"page":void 0,children:[e.icon&&r.jsx("span",{className:"ux4g-breadcrumb-icon","aria-hidden":"true",children:e.icon}),e.label]}),!S&&r.jsx("span",{className:"ux4g-breadcrumb-separator","aria-hidden":"true",children:Ce})]},y)})})})}f.displayName="Breadcrumb";f.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Breadcrumb items"},separator:{required:!1,tsType:{name:"ReactNode"},description:`Separator between items
@default '/'`,defaultValue:{value:"'/'",computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:"Maximum items to show before collapsing"},collapseText:{required:!1,tsType:{name:"string"},description:`Text for collapsed items
@default '...'`,defaultValue:{value:"'...'",computed:!1}},navProps:{required:!1,tsType:{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>"},description:"Additional props for nav element"}}};const Le={title:"Components/Breadcrumb",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`Breadcrumbs provide a navigation trail for users to understand their location
within a website's hierarchy and navigate back to parent pages.

## When to use
- Multi-level website structures
- Helping users understand their location
- Providing quick navigation to parent pages
- Government portals with deep page hierarchies

## When NOT to use
- Single-level websites
- Mobile apps with flat navigation
- As primary navigation`}}}},a={args:{items:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Aadhaar",current:!0}]}},n={args:{items:[{label:"Home",href:"/"},{label:"Documents",href:"/documents"},{label:"Identity Proofs",current:!0}],separator:">"}},s={args:{items:[{label:"Home",href:"/",icon:"🏠"},{label:"My Applications",href:"/applications",icon:"📋"},{label:"PAN Application",current:!0,icon:"📝"}]}},t={args:{items:[{label:"DigiLocker",href:"/"},{label:"Documents",href:"/documents"},{label:"Educational",href:"/documents/educational"},{label:"10th Certificate",current:!0}]}},i={args:{items:[{label:"India.gov.in",href:"/"},{label:"Citizen Services",href:"/citizen-services"},{label:"Identity Cards",href:"/citizen-services/identity"},{label:"Aadhaar Services",href:"/citizen-services/identity/aadhaar"},{label:"Update Demographics",current:!0}]}},o={args:{items:[{label:"Home",href:"/"},{label:"Passport",href:"/passport"},{label:"Apply",href:"/passport/apply"},{label:"New Application",href:"/passport/apply/new"},{label:"Personal Details",current:!0}]}},l={args:{items:[{label:"Income Tax Department",href:"/"},{label:"e-Filing",href:"/e-filing"},{label:"File Returns",href:"/e-filing/returns"},{label:"ITR-1",current:!0}]}},c={args:{items:[{label:"Maharashtra",href:"/"},{label:"Revenue Department",href:"/revenue"},{label:"7/12 Extract",href:"/revenue/7-12"},{label:"Apply Online",current:!0}]}},p={args:{items:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Government Schemes",href:"/services/schemes"},{label:"Social Welfare",href:"/services/schemes/social-welfare"},{label:"Pension Schemes",href:"/services/schemes/social-welfare/pension"},{label:"Old Age Pension",href:"/services/schemes/social-welfare/pension/old-age"},{label:"Application Form",current:!0}],maxItems:4}},m={args:{items:[{label:"Dashboard",onClick:()=>alert("Navigate to Dashboard")},{label:"Applications",onClick:()=>alert("Navigate to Applications")},{label:"Pending Review",current:!0}]}},d={args:{items:[{label:"Home",current:!0}]}};var w,C,N,P,I;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Services',
      href: '/services'
    }, {
      label: 'Aadhaar',
      current: true
    }]
  }
}`,...(N=(C=a.parameters)==null?void 0:C.docs)==null?void 0:N.source},description:{story:"Basic breadcrumb with simple navigation path",...(I=(P=a.parameters)==null?void 0:P.docs)==null?void 0:I.description}}};var k,D,T,H,B;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Documents',
      href: '/documents'
    }, {
      label: 'Identity Proofs',
      current: true
    }],
    separator: '>'
  }
}`,...(T=(D=n.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:"Breadcrumb with custom separator",...(B=(H=n.parameters)==null?void 0:H.docs)==null?void 0:B.description}}};var j,R,M,E,L;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: '🏠'
    }, {
      label: 'My Applications',
      href: '/applications',
      icon: '📋'
    }, {
      label: 'PAN Application',
      current: true,
      icon: '📝'
    }]
  }
}`,...(M=(R=s.parameters)==null?void 0:R.docs)==null?void 0:M.source},description:{story:"Breadcrumb with icons",...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};var q,z,G,W,F;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'DigiLocker',
      href: '/'
    }, {
      label: 'Documents',
      href: '/documents'
    }, {
      label: 'Educational',
      href: '/documents/educational'
    }, {
      label: '10th Certificate',
      current: true
    }]
  }
}`,...(G=(z=t.parameters)==null?void 0:z.docs)==null?void 0:G.source},description:{story:"DigiLocker breadcrumb navigation",...(F=(W=t.parameters)==null?void 0:W.docs)==null?void 0:F.description}}};var O,_,U,V,J;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'India.gov.in',
      href: '/'
    }, {
      label: 'Citizen Services',
      href: '/citizen-services'
    }, {
      label: 'Identity Cards',
      href: '/citizen-services/identity'
    }, {
      label: 'Aadhaar Services',
      href: '/citizen-services/identity/aadhaar'
    }, {
      label: 'Update Demographics',
      current: true
    }]
  }
}`,...(U=(_=i.parameters)==null?void 0:_.docs)==null?void 0:U.source},description:{story:"Government portal breadcrumb",...(J=(V=i.parameters)==null?void 0:V.docs)==null?void 0:J.description}}};var K,Q,X,Y,Z;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Passport',
      href: '/passport'
    }, {
      label: 'Apply',
      href: '/passport/apply'
    }, {
      label: 'New Application',
      href: '/passport/apply/new'
    }, {
      label: 'Personal Details',
      current: true
    }]
  }
}`,...(X=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Passport application breadcrumb",...(Z=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var $,ee,re,ae,ne;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Income Tax Department',
      href: '/'
    }, {
      label: 'e-Filing',
      href: '/e-filing'
    }, {
      label: 'File Returns',
      href: '/e-filing/returns'
    }, {
      label: 'ITR-1',
      current: true
    }]
  }
}`,...(re=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"Income Tax Portal breadcrumb",...(ne=(ae=l.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};var se,te,ie,oe,le;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Maharashtra',
      href: '/'
    }, {
      label: 'Revenue Department',
      href: '/revenue'
    }, {
      label: '7/12 Extract',
      href: '/revenue/7-12'
    }, {
      label: 'Apply Online',
      current: true
    }]
  }
}`,...(ie=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ie.source},description:{story:"State government service breadcrumb",...(le=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:le.description}}};var ce,pe,me,de,ue;p.parameters={...p.parameters,docs:{...(ce=p.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Services',
      href: '/services'
    }, {
      label: 'Government Schemes',
      href: '/services/schemes'
    }, {
      label: 'Social Welfare',
      href: '/services/schemes/social-welfare'
    }, {
      label: 'Pension Schemes',
      href: '/services/schemes/social-welfare/pension'
    }, {
      label: 'Old Age Pension',
      href: '/services/schemes/social-welfare/pension/old-age'
    }, {
      label: 'Application Form',
      current: true
    }],
    maxItems: 4
  }
}`,...(me=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:"Collapsed breadcrumb with many items",...(ue=(de=p.parameters)==null?void 0:de.docs)==null?void 0:ue.description}}};var be,he,fe,ge,ve;m.parameters={...m.parameters,docs:{...(be=m.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      onClick: () => alert('Navigate to Dashboard')
    }, {
      label: 'Applications',
      onClick: () => alert('Navigate to Applications')
    }, {
      label: 'Pending Review',
      current: true
    }]
  }
}`,...(fe=(he=m.parameters)==null?void 0:he.docs)==null?void 0:fe.source},description:{story:"Breadcrumb with click handlers instead of links",...(ve=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:ve.description}}};var ye,Se,xe,Ae,we;d.parameters={...d.parameters,docs:{...(ye=d.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      current: true
    }]
  }
}`,...(xe=(Se=d.parameters)==null?void 0:Se.docs)==null?void 0:xe.source},description:{story:"Single item breadcrumb (current page only)",...(we=(Ae=d.parameters)==null?void 0:Ae.docs)==null?void 0:we.description}}};const qe=["Basic","CustomSeparator","WithIcons","DigiLockerNavigation","GovernmentPortal","PassportApplication","IncomeTaxPortal","StateGovernmentService","Collapsed","WithClickHandlers","SingleItem"];export{a as Basic,p as Collapsed,n as CustomSeparator,t as DigiLockerNavigation,i as GovernmentPortal,l as IncomeTaxPortal,o as PassportApplication,d as SingleItem,c as StateGovernmentService,m as WithClickHandlers,s as WithIcons,qe as __namedExportsOrder,Le as default};
