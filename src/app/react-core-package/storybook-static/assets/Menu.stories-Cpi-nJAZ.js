import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h,R as Ce}from"./index-G8LIXM5I.js";import{c as i}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function D({items:se,trigger:ce,placement:re="bottom-start",open:w,defaultOpen:ue=!1,onOpenChange:C,disabled:A=!1,className:de,...ge}){const[pe,be]=h.useState(ue),x=h.useRef(null),n=w??pe,me=w!==void 0,l=e=>{me||be(e),C==null||C(e)};h.useEffect(()=>{if(!n)return;const e=f=>{x.current&&!x.current.contains(f.target)&&l(!1)},t=f=>{f.key==="Escape"&&l(!1)};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[n]);const ke=()=>{A||l(!n)},ye=e=>{var t;e.disabled||((t=e.onClick)==null||t.call(e),l(!1))};return o.jsxs("div",{ref:x,className:i("ux4g-menu",de),...ge,children:[o.jsx("div",{className:i("ux4g-menu-trigger",A&&"ux4g-menu-trigger-disabled"),onClick:ke,children:ce}),n&&o.jsx("div",{role:"menu",className:i("ux4g-menu-dropdown",`ux4g-menu-${re}`),children:se.map(e=>o.jsxs(Ce.Fragment,{children:[o.jsxs("button",{type:"button",role:"menuitem",className:i("ux4g-menu-item",e.disabled&&"ux4g-menu-item-disabled",e.danger&&"ux4g-menu-item-danger"),onClick:()=>ye(e),disabled:e.disabled,children:[e.icon&&o.jsx("span",{className:"ux4g-menu-item-icon","aria-hidden":"true",children:e.icon}),o.jsx("span",{className:"ux4g-menu-item-label",children:e.label})]}),e.divider&&o.jsx("div",{className:"ux4g-menu-divider"})]},e.key))})]})}D.displayName="Menu";D.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},items:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Menu items"},trigger:{required:!0,tsType:{name:"ReactNode"},description:"Trigger element"},placement:{required:!1,tsType:{name:"union",raw:"'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'",elements:[{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"}]},description:`Menu placement
@default 'bottom-start'`,defaultValue:{value:"'bottom-start'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Default open state",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Open state change handler"},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}}}};const Ae={title:"Components/Menu",component:D,tags:["autodocs"]},a={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Actions"}),items:[{key:"edit",label:"Edit",onClick:()=>console.log("Edit")},{key:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate")},{key:"delete",label:"Delete",onClick:()=>console.log("Delete")}]}},s={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-primary",children:"Menu"}),items:[{key:"view",label:"View",icon:"👁️",onClick:()=>console.log("View")},{key:"edit",label:"Edit",icon:"✏️",onClick:()=>console.log("Edit")},{key:"share",label:"Share",icon:"🔗",onClick:()=>console.log("Share")},{key:"download",label:"Download",icon:"⬇️",onClick:()=>console.log("Download")}]}},c={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Application Actions"}),items:[{key:"view",label:"View Details",icon:"👁️",onClick:()=>console.log("View")},{key:"edit",label:"Edit Application",icon:"✏️",onClick:()=>console.log("Edit")},{key:"download",label:"Download PDF",icon:"📄",onClick:()=>console.log("Download"),divider:!0},{key:"cancel",label:"Cancel Application",icon:"✕",danger:!0,onClick:()=>console.log("Cancel")}]}},r={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-ghost",children:"⋮"}),items:[{key:"view",label:"View Document",onClick:()=>console.log("View")},{key:"share",label:"Share",onClick:()=>console.log("Share")},{key:"download",label:"Download",onClick:()=>console.log("Download"),divider:!0},{key:"delete",label:"Delete",danger:!0,onClick:()=>console.log("Delete")}]}},u={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-ghost",children:"👤 Profile"}),items:[{key:"profile",label:"My Profile",icon:"👤",onClick:()=>console.log("Profile")},{key:"applications",label:"My Applications",icon:"📝",onClick:()=>console.log("Applications")},{key:"documents",label:"My Documents",icon:"📄",onClick:()=>console.log("Documents")},{key:"settings",label:"Settings",icon:"⚙️",onClick:()=>console.log("Settings"),divider:!0},{key:"logout",label:"Logout",icon:"🚪",danger:!0,onClick:()=>console.log("Logout")}]}},d={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-primary",children:"Document Options"}),items:[{key:"upload",label:"Upload New Document",icon:"⬆️",onClick:()=>console.log("Upload")},{key:"fetch",label:"Fetch from Issuer",icon:"🔄",onClick:()=>console.log("Fetch")},{key:"share",label:"Share Document",icon:"🔗",onClick:()=>console.log("Share")},{key:"verify",label:"Verify Authenticity",icon:"✓",onClick:()=>console.log("Verify")}]}},g={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"PAN Services"}),items:[{key:"new",label:"Apply for New PAN",onClick:()=>console.log("New PAN")},{key:"correction",label:"Request Correction",onClick:()=>console.log("Correction")},{key:"reprint",label:"Request Reprint",onClick:()=>console.log("Reprint")},{key:"status",label:"Track Application Status",onClick:()=>console.log("Status")}]}},p={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Aadhaar Services"}),items:[{key:"download",label:"Download e-Aadhaar",icon:"⬇️",onClick:()=>console.log("Download")},{key:"update",label:"Update Details",icon:"✏️",onClick:()=>console.log("Update")},{key:"verify",label:"Verify Aadhaar",icon:"✓",onClick:()=>console.log("Verify")},{key:"lock",label:"Lock/Unlock Biometrics",icon:"🔒",onClick:()=>console.log("Lock")}]}},b={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Options"}),items:[{key:"option1",label:"Enabled Option",onClick:()=>console.log("Option 1")},{key:"option2",label:"Disabled Option",disabled:!0,onClick:()=>console.log("Option 2")},{key:"option3",label:"Another Enabled",onClick:()=>console.log("Option 3")}]}},m={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Actions"}),items:[{key:"action1",label:"Action 1",onClick:()=>console.log("Action 1"),divider:!0},{key:"action2",label:"Action 2",onClick:()=>console.log("Action 2"),divider:!0},{key:"danger",label:"Danger Action",danger:!0,onClick:()=>console.log("Danger")}]}},k={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Menu"}),placement:"bottom-end",items:[{key:"option1",label:"Option 1",onClick:()=>console.log("Option 1")},{key:"option2",label:"Option 2",onClick:()=>console.log("Option 2")},{key:"option3",label:"Option 3",onClick:()=>console.log("Option 3")}]}},y={args:{trigger:o.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Disabled Menu"}),disabled:!0,items:[{key:"option1",label:"Option 1",onClick:()=>console.log("Option 1")},{key:"option2",label:"Option 2",onClick:()=>console.log("Option 2")}]}};var N,v,S;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Actions</button>,
    items: [{
      key: 'edit',
      label: 'Edit',
      onClick: () => console.log('Edit')
    }, {
      key: 'duplicate',
      label: 'Duplicate',
      onClick: () => console.log('Duplicate')
    }, {
      key: 'delete',
      label: 'Delete',
      onClick: () => console.log('Delete')
    }]
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var O,E,M;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-primary">Menu</button>,
    items: [{
      key: 'view',
      label: 'View',
      icon: '👁️',
      onClick: () => console.log('View')
    }, {
      key: 'edit',
      label: 'Edit',
      icon: '✏️',
      onClick: () => console.log('Edit')
    }, {
      key: 'share',
      label: 'Share',
      icon: '🔗',
      onClick: () => console.log('Share')
    }, {
      key: 'download',
      label: 'Download',
      icon: '⬇️',
      onClick: () => console.log('Download')
    }]
  }
}`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var V,j,P;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Application Actions</button>,
    items: [{
      key: 'view',
      label: 'View Details',
      icon: '👁️',
      onClick: () => console.log('View')
    }, {
      key: 'edit',
      label: 'Edit Application',
      icon: '✏️',
      onClick: () => console.log('Edit')
    }, {
      key: 'download',
      label: 'Download PDF',
      icon: '📄',
      onClick: () => console.log('Download'),
      divider: true
    }, {
      key: 'cancel',
      label: 'Cancel Application',
      icon: '✕',
      danger: true,
      onClick: () => console.log('Cancel')
    }]
  }
}`,...(P=(j=c.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var R,T,q;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-ghost">⋮</button>,
    items: [{
      key: 'view',
      label: 'View Document',
      onClick: () => console.log('View')
    }, {
      key: 'share',
      label: 'Share',
      onClick: () => console.log('Share')
    }, {
      key: 'download',
      label: 'Download',
      onClick: () => console.log('Download'),
      divider: true
    }, {
      key: 'delete',
      label: 'Delete',
      danger: true,
      onClick: () => console.log('Delete')
    }]
  }
}`,...(q=(T=r.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var L,U,I;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-ghost">
        👤 Profile
      </button>,
    items: [{
      key: 'profile',
      label: 'My Profile',
      icon: '👤',
      onClick: () => console.log('Profile')
    }, {
      key: 'applications',
      label: 'My Applications',
      icon: '📝',
      onClick: () => console.log('Applications')
    }, {
      key: 'documents',
      label: 'My Documents',
      icon: '📄',
      onClick: () => console.log('Documents')
    }, {
      key: 'settings',
      label: 'Settings',
      icon: '⚙️',
      onClick: () => console.log('Settings'),
      divider: true
    }, {
      key: 'logout',
      label: 'Logout',
      icon: '🚪',
      danger: true,
      onClick: () => console.log('Logout')
    }]
  }
}`,...(I=(U=u.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var F,B,W;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-primary">Document Options</button>,
    items: [{
      key: 'upload',
      label: 'Upload New Document',
      icon: '⬆️',
      onClick: () => console.log('Upload')
    }, {
      key: 'fetch',
      label: 'Fetch from Issuer',
      icon: '🔄',
      onClick: () => console.log('Fetch')
    }, {
      key: 'share',
      label: 'Share Document',
      icon: '🔗',
      onClick: () => console.log('Share')
    }, {
      key: 'verify',
      label: 'Verify Authenticity',
      icon: '✓',
      onClick: () => console.log('Verify')
    }]
  }
}`,...(W=(B=d.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var _,$,z;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">PAN Services</button>,
    items: [{
      key: 'new',
      label: 'Apply for New PAN',
      onClick: () => console.log('New PAN')
    }, {
      key: 'correction',
      label: 'Request Correction',
      onClick: () => console.log('Correction')
    }, {
      key: 'reprint',
      label: 'Request Reprint',
      onClick: () => console.log('Reprint')
    }, {
      key: 'status',
      label: 'Track Application Status',
      onClick: () => console.log('Status')
    }]
  }
}`,...(z=($=g.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Aadhaar Services</button>,
    items: [{
      key: 'download',
      label: 'Download e-Aadhaar',
      icon: '⬇️',
      onClick: () => console.log('Download')
    }, {
      key: 'update',
      label: 'Update Details',
      icon: '✏️',
      onClick: () => console.log('Update')
    }, {
      key: 'verify',
      label: 'Verify Aadhaar',
      icon: '✓',
      onClick: () => console.log('Verify')
    }, {
      key: 'lock',
      label: 'Lock/Unlock Biometrics',
      icon: '🔒',
      onClick: () => console.log('Lock')
    }]
  }
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Options</button>,
    items: [{
      key: 'option1',
      label: 'Enabled Option',
      onClick: () => console.log('Option 1')
    }, {
      key: 'option2',
      label: 'Disabled Option',
      disabled: true,
      onClick: () => console.log('Option 2')
    }, {
      key: 'option3',
      label: 'Another Enabled',
      onClick: () => console.log('Option 3')
    }]
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Actions</button>,
    items: [{
      key: 'action1',
      label: 'Action 1',
      onClick: () => console.log('Action 1'),
      divider: true
    }, {
      key: 'action2',
      label: 'Action 2',
      onClick: () => console.log('Action 2'),
      divider: true
    }, {
      key: 'danger',
      label: 'Danger Action',
      danger: true,
      onClick: () => console.log('Danger')
    }]
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,te,ne;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Menu</button>,
    placement: 'bottom-end',
    items: [{
      key: 'option1',
      label: 'Option 1',
      onClick: () => console.log('Option 1')
    }, {
      key: 'option2',
      label: 'Option 2',
      onClick: () => console.log('Option 2')
    }, {
      key: 'option3',
      label: 'Option 3',
      onClick: () => console.log('Option 3')
    }]
  }
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,ie,ae;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Disabled Menu</button>,
    disabled: true,
    items: [{
      key: 'option1',
      label: 'Option 1',
      onClick: () => console.log('Option 1')
    }, {
      key: 'option2',
      label: 'Option 2',
      onClick: () => console.log('Option 2')
    }]
  }
}`,...(ae=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};const Ne=["Basic","WithIcons","ApplicationActions","DocumentActions","UserMenu","DigiLockerMenu","PANCardMenu","AadhaarMenu","WithDisabled","WithDividers","PlacementBottomEnd","Disabled"];export{p as AadhaarMenu,c as ApplicationActions,a as Basic,d as DigiLockerMenu,y as Disabled,r as DocumentActions,g as PANCardMenu,k as PlacementBottomEnd,u as UserMenu,b as WithDisabled,m as WithDividers,s as WithIcons,Ne as __namedExportsOrder,Ae as default};
