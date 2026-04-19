import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as y}from"./index-G8LIXM5I.js";import{c as j}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function w({items:n,value:c,defaultValue:A,onChange:T,variant:qe="default",orientation:S="horizontal",centered:Fe=!1,fullWidth:Me=!1,tabListProps:Ve,tabPanelProps:Ee,lazy:We=!1,keepMounted:D=!1,className:Oe,...Ue}){var I;const[Ge,Be]=y.useState(A||((I=n[0])==null?void 0:I.value)||""),k=y.useRef(null),[C,He]=y.useState(new Set(A?[A]:n[0]?[n[0].value]:[])),l=c??Ge,$e=c!==void 0;y.useEffect(()=>{C.has(l)||He(a=>new Set([...a,l]))},[l,C]);const R=(a,r)=>{r||($e||Be(a),T==null||T(a))},Ke=(a,r)=>{var L;const s=n.filter(o=>!o.disabled),t=s.findIndex(o=>o.value===l);let i=t;if(S==="horizontal"?a.key==="ArrowRight"?i=(t+1)%s.length:a.key==="ArrowLeft"&&(i=(t-1+s.length)%s.length):a.key==="ArrowDown"?i=(t+1)%s.length:a.key==="ArrowUp"&&(i=(t-1+s.length)%s.length),a.key==="Home"?i=0:a.key==="End"&&(i=s.length-1),i!==t){a.preventDefault();const o=s[i];R(o.value,o.disabled);const Qe=(L=k.current)==null?void 0:L.querySelectorAll('[role="tab"]'),P=Array.from(Qe||[]).find(Je=>Je.getAttribute("data-value")===o.value);P==null||P.focus()}},_e=a=>!!(a===l||D&&C.has(a)||!We&&!D);return e.jsxs("div",{className:j("ux4g-tabs",`ux4g-tabs-${qe}`,`ux4g-tabs-${S}`,Oe),...Ue,children:[e.jsx("div",{ref:k,className:j("ux4g-tabs-list",Fe&&"ux4g-tabs-list-centered",Me&&"ux4g-tabs-list-fullwidth"),role:"tablist","aria-orientation":S,...Ve,children:n.map((a,r)=>{const s=a.value===l,t=a.disabled;return e.jsxs("button",{type:"button",role:"tab","data-value":a.value,className:j("ux4g-tab",s&&"ux4g-tab-active",t&&"ux4g-tab-disabled"),"aria-selected":s,"aria-disabled":t,"aria-controls":`panel-${a.value}`,id:`tab-${a.value}`,tabIndex:s?0:-1,onClick:()=>R(a.value,a.disabled),onKeyDown:i=>Ke(i),disabled:t,children:[a.icon&&e.jsx("span",{className:"ux4g-tab-icon","aria-hidden":"true",children:a.icon}),e.jsx("span",{className:"ux4g-tab-label",children:a.label}),a.badge&&e.jsx("span",{className:"ux4g-tab-badge","aria-hidden":"true",children:a.badge})]},a.value)})}),n.map(a=>{const r=a.value===l,s=_e(a.value);return e.jsx("div",{role:"tabpanel",id:`panel-${a.value}`,"aria-labelledby":`tab-${a.value}`,className:j("ux4g-tab-panel",r&&"ux4g-tab-panel-active",!r&&"ux4g-tab-panel-hidden"),hidden:!r,tabIndex:0,...Ee,children:s&&a.content},a.value)})]})}w.displayName="Tabs";w.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Tab items"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'pills' | 'underline'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pills'"},{name:"literal",value:"'underline'"}]},description:`Visual variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Tab orientation
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:`Center align tabs
@default false`,defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Full width tabs
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},tabListProps:{required:!1,tsType:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},description:"Additional props for tab list container"},tabPanelProps:{required:!1,tsType:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},description:"Additional props for tab panel container"},lazy:{required:!1,tsType:{name:"boolean"},description:`Lazy load tab content (only render active tab)
@default false`,defaultValue:{value:"false",computed:!1}},keepMounted:{required:!1,tsType:{name:"boolean"},description:`Keep mounted (don't unmount inactive tabs)
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const sa={title:"Components/Tabs",component:w,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","pills","underline"],description:"Visual style variant"},orientation:{control:"select",options:["horizontal","vertical"],description:"Tab orientation"},centered:{control:"boolean",description:"Center align tabs"},fullWidth:{control:"boolean",description:"Make tabs span full width"}},parameters:{docs:{description:{component:`The Tabs component organizes content into separate views where only one view
is visible at a time. It includes keyboard navigation support for accessibility.

## When to use
- Organizing related content into logical sections
- Reducing vertical scrolling on long pages
- Allowing users to switch between different views
- Multi-step forms or wizards

## When NOT to use
- For site navigation - use navigation menus
- For filtering data - use filter controls
- When users need to see multiple sections simultaneously`}}}},d={args:{items:[{value:"personal",label:"Personal Details",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Personal Information"}),e.jsx("p",{children:"Enter your personal details including name, date of birth, and address."})]})},{value:"documents",label:"Documents",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Upload Documents"}),e.jsx("p",{children:"Upload required documents like Aadhaar, PAN card, and photographs."})]})},{value:"review",label:"Review",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Review & Submit"}),e.jsx("p",{children:"Review all information before final submission."})]})}],defaultValue:"personal"}},u={args:{variant:"pills",items:[{value:"overview",label:"Overview",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Application Overview"}),e.jsx("p",{children:"Total applications: 1,234"}),e.jsx("p",{children:"Pending: 456"}),e.jsx("p",{children:"Approved: 778"})]})},{value:"pending",label:"Pending",badge:e.jsx("span",{className:"ux4g-badge ux4g-badge-warning",children:"456"}),content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Pending Applications"}),e.jsx("p",{children:"Applications awaiting review and approval."})]})},{value:"approved",label:"Approved",badge:e.jsx("span",{className:"ux4g-badge ux4g-badge-success",children:"778"}),content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Approved Applications"}),e.jsx("p",{children:"Successfully processed and approved applications."})]})}]}},p={args:{variant:"underline",items:[{value:"aadhaar",label:"Aadhaar",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Aadhaar Services"}),e.jsx("p",{children:"Update Aadhaar details, download e-Aadhaar, and verify authenticity."})]})},{value:"pan",label:"PAN Card",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"PAN Card Services"}),e.jsx("p",{children:"Apply for new PAN, make corrections, or track application status."})]})},{value:"passport",label:"Passport",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Passport Services"}),e.jsx("p",{children:"New passport application, renewal, and appointment booking."})]})}]}},m={args:{orientation:"vertical",items:[{value:"profile",label:"Profile Settings",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Profile Settings"}),e.jsx("p",{children:"Manage your profile information and preferences."})]})},{value:"security",label:"Security",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Security Settings"}),e.jsx("p",{children:"Update password, enable two-factor authentication."})]})},{value:"notifications",label:"Notifications",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Notification Preferences"}),e.jsx("p",{children:"Configure email and SMS notification settings."})]})},{value:"privacy",label:"Privacy",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Privacy Settings"}),e.jsx("p",{children:"Manage data sharing and privacy preferences."})]})}]}},g={args:{centered:!0,items:[{value:"about",label:"About",content:e.jsx("div",{className:"ux4g-p-4",children:"About this service"})},{value:"features",label:"Features",content:e.jsx("div",{className:"ux4g-p-4",children:"Key features and benefits"})},{value:"faq",label:"FAQ",content:e.jsx("div",{className:"ux4g-p-4",children:"Frequently asked questions"})}]}},v={args:{fullWidth:!0,items:[{value:"step1",label:"Step 1",content:e.jsx("div",{className:"ux4g-p-4",children:"Complete step 1"})},{value:"step2",label:"Step 2",content:e.jsx("div",{className:"ux4g-p-4",children:"Complete step 2"})},{value:"step3",label:"Step 3",content:e.jsx("div",{className:"ux4g-p-4",children:"Complete step 3"})}]}},b={args:{variant:"pills",items:[{value:"dashboard",label:"Dashboard",icon:"📊",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Dashboard"}),e.jsx("p",{children:"View your application statistics and recent activity."})]})},{value:"applications",label:"Applications",icon:"📝",badge:e.jsx("span",{className:"ux4g-badge ux4g-badge-info",children:"12"}),content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"My Applications"}),e.jsx("p",{children:"Track and manage your government service applications."})]})},{value:"documents",label:"Documents",icon:"📄",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"My Documents"}),e.jsx("p",{children:"Access and download your DigiLocker documents."})]})},{value:"settings",label:"Settings",icon:"⚙️",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Settings"}),e.jsx("p",{children:"Configure your account preferences and privacy settings."})]})}]}},x={args:{variant:"underline",items:[{value:"identity",label:"Identity Proofs",badge:e.jsx("span",{className:"ux4g-badge ux4g-badge-ghost",children:"3"}),content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Identity Proof Documents"}),e.jsxs("ul",{className:"ux4g-list",children:[e.jsx("li",{children:"Aadhaar Card"}),e.jsx("li",{children:"PAN Card"}),e.jsx("li",{children:"Voter ID Card"})]})]})},{value:"educational",label:"Educational",badge:e.jsx("span",{className:"ux4g-badge ux4g-badge-ghost",children:"5"}),content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Educational Documents"}),e.jsxs("ul",{className:"ux4g-list",children:[e.jsx("li",{children:"10th Certificate"}),e.jsx("li",{children:"12th Certificate"}),e.jsx("li",{children:"Graduation Certificate"}),e.jsx("li",{children:"Post Graduation Certificate"}),e.jsx("li",{children:"Professional Degrees"})]})]})},{value:"address",label:"Address Proofs",badge:e.jsx("span",{className:"ux4g-badge ux4g-badge-ghost",children:"2"}),content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Address Proof Documents"}),e.jsxs("ul",{className:"ux4g-list",children:[e.jsx("li",{children:"Electricity Bill"}),e.jsx("li",{children:"Gas Connection Bill"})]})]})},{value:"others",label:"Other Documents",badge:e.jsx("span",{className:"ux4g-badge ux4g-badge-ghost",children:"4"}),content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Other Documents"}),e.jsxs("ul",{className:"ux4g-list",children:[e.jsx("li",{children:"Driving License"}),e.jsx("li",{children:"Vehicle Registration"}),e.jsx("li",{children:"Insurance Documents"}),e.jsx("li",{children:"Tax Returns"})]})]})}]}},h={args:{items:[{value:"completed",label:"Completed",content:e.jsx("div",{className:"ux4g-p-4",children:"This section is complete"})},{value:"in-progress",label:"In Progress",content:e.jsx("div",{className:"ux4g-p-4",children:"Currently working on this section"})},{value:"locked",label:"Locked",disabled:!0,content:e.jsx("div",{className:"ux4g-p-4",children:"Complete previous steps to unlock"})}],defaultValue:"completed"}},f={render:()=>{const[n,c]=y.useState("form");return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"1rem",padding:"1rem",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsxs("p",{style:{margin:0,fontSize:"14px"},children:[e.jsx("strong",{children:"Active Tab:"})," ",n]}),e.jsxs("div",{style:{marginTop:"0.5rem"},children:[e.jsx("button",{className:"ux4g-button ux4g-button-sm ux4g-button-outline",onClick:()=>c("form"),style:{marginRight:"0.5rem"},children:"Go to Form"}),e.jsx("button",{className:"ux4g-button ux4g-button-sm ux4g-button-outline",onClick:()=>c("preview"),children:"Go to Preview"})]})]}),e.jsx(w,{value:n,onChange:c,items:[{value:"form",label:"Application Form",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Fill Application Form"}),e.jsx("p",{children:"Enter required information in the application form."})]})},{value:"preview",label:"Preview",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Preview Application"}),e.jsx("p",{children:"Review your application before submission."})]})},{value:"submit",label:"Submit",content:e.jsxs("div",{className:"ux4g-p-4",children:[e.jsx("h3",{className:"ux4g-mb-2",children:"Submit Application"}),e.jsx("p",{children:"Final submission of your application."})]})}]})]})}},N={args:{lazy:!0,items:[{value:"tab1",label:"Tab 1",content:e.jsx("div",{className:"ux4g-p-4",children:e.jsx("p",{children:"Content 1 - Rendered only when active (lazy mode)"})})},{value:"tab2",label:"Tab 2",content:e.jsx("div",{className:"ux4g-p-4",children:e.jsx("p",{children:"Content 2 - Rendered only when active (lazy mode)"})})},{value:"tab3",label:"Tab 3",content:e.jsx("div",{className:"ux4g-p-4",children:e.jsx("p",{children:"Content 3 - Rendered only when active (lazy mode)"})})}]}};var z,q,F,M,V;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: [{
      value: 'personal',
      label: 'Personal Details',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Personal Information</h3>
            <p>Enter your personal details including name, date of birth, and address.</p>
          </div>
    }, {
      value: 'documents',
      label: 'Documents',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Upload Documents</h3>
            <p>Upload required documents like Aadhaar, PAN card, and photographs.</p>
          </div>
    }, {
      value: 'review',
      label: 'Review',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Review & Submit</h3>
            <p>Review all information before final submission.</p>
          </div>
    }],
    defaultValue: 'personal'
  }
}`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:"Basic tabs with default styling",...(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.description}}};var E,W,O,U,G;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'pills',
    items: [{
      value: 'overview',
      label: 'Overview',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Application Overview</h3>
            <p>Total applications: 1,234</p>
            <p>Pending: 456</p>
            <p>Approved: 778</p>
          </div>
    }, {
      value: 'pending',
      label: 'Pending',
      badge: <span className="ux4g-badge ux4g-badge-warning">456</span>,
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Pending Applications</h3>
            <p>Applications awaiting review and approval.</p>
          </div>
    }, {
      value: 'approved',
      label: 'Approved',
      badge: <span className="ux4g-badge ux4g-badge-success">778</span>,
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Approved Applications</h3>
            <p>Successfully processed and approved applications.</p>
          </div>
    }]
  }
}`,...(O=(W=u.parameters)==null?void 0:W.docs)==null?void 0:O.source},description:{story:"Pills variant with rounded tab buttons",...(G=(U=u.parameters)==null?void 0:U.docs)==null?void 0:G.description}}};var B,H,$,K,_;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    items: [{
      value: 'aadhaar',
      label: 'Aadhaar',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Aadhaar Services</h3>
            <p>Update Aadhaar details, download e-Aadhaar, and verify authenticity.</p>
          </div>
    }, {
      value: 'pan',
      label: 'PAN Card',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">PAN Card Services</h3>
            <p>Apply for new PAN, make corrections, or track application status.</p>
          </div>
    }, {
      value: 'passport',
      label: 'Passport',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Passport Services</h3>
            <p>New passport application, renewal, and appointment booking.</p>
          </div>
    }]
  }
}`,...($=(H=p.parameters)==null?void 0:H.docs)==null?void 0:$.source},description:{story:"Underline variant with subtle bottom border",...(_=(K=p.parameters)==null?void 0:K.docs)==null?void 0:_.description}}};var Q,J,X,Y,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    items: [{
      value: 'profile',
      label: 'Profile Settings',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Profile Settings</h3>
            <p>Manage your profile information and preferences.</p>
          </div>
    }, {
      value: 'security',
      label: 'Security',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Security Settings</h3>
            <p>Update password, enable two-factor authentication.</p>
          </div>
    }, {
      value: 'notifications',
      label: 'Notifications',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Notification Preferences</h3>
            <p>Configure email and SMS notification settings.</p>
          </div>
    }, {
      value: 'privacy',
      label: 'Privacy',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Privacy Settings</h3>
            <p>Manage data sharing and privacy preferences.</p>
          </div>
    }]
  }
}`,...(X=(J=m.parameters)==null?void 0:J.docs)==null?void 0:X.source},description:{story:"Vertical tabs layout",...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,ae,se,te,ie;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    centered: true,
    items: [{
      value: 'about',
      label: 'About',
      content: <div className="ux4g-p-4">About this service</div>
    }, {
      value: 'features',
      label: 'Features',
      content: <div className="ux4g-p-4">Key features and benefits</div>
    }, {
      value: 'faq',
      label: 'FAQ',
      content: <div className="ux4g-p-4">Frequently asked questions</div>
    }]
  }
}`,...(se=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"Centered tabs",...(ie=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ie.description}}};var ne,le,re,oe,ce;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    items: [{
      value: 'step1',
      label: 'Step 1',
      content: <div className="ux4g-p-4">Complete step 1</div>
    }, {
      value: 'step2',
      label: 'Step 2',
      content: <div className="ux4g-p-4">Complete step 2</div>
    }, {
      value: 'step3',
      label: 'Step 3',
      content: <div className="ux4g-p-4">Complete step 3</div>
    }]
  }
}`,...(re=(le=v.parameters)==null?void 0:le.docs)==null?void 0:re.source},description:{story:"Full width tabs",...(ce=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ce.description}}};var de,ue,pe,me,ge;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    variant: 'pills',
    items: [{
      value: 'dashboard',
      label: 'Dashboard',
      icon: '📊',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Dashboard</h3>
            <p>View your application statistics and recent activity.</p>
          </div>
    }, {
      value: 'applications',
      label: 'Applications',
      icon: '📝',
      badge: <span className="ux4g-badge ux4g-badge-info">12</span>,
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">My Applications</h3>
            <p>Track and manage your government service applications.</p>
          </div>
    }, {
      value: 'documents',
      label: 'Documents',
      icon: '📄',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">My Documents</h3>
            <p>Access and download your DigiLocker documents.</p>
          </div>
    }, {
      value: 'settings',
      label: 'Settings',
      icon: '⚙️',
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Settings</h3>
            <p>Configure your account preferences and privacy settings.</p>
          </div>
    }]
  }
}`,...(pe=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:pe.source},description:{story:"Tabs with icons",...(ge=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ge.description}}};var ve,be,xe,he,fe;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    items: [{
      value: 'identity',
      label: 'Identity Proofs',
      badge: <span className="ux4g-badge ux4g-badge-ghost">3</span>,
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Identity Proof Documents</h3>
            <ul className="ux4g-list">
              <li>Aadhaar Card</li>
              <li>PAN Card</li>
              <li>Voter ID Card</li>
            </ul>
          </div>
    }, {
      value: 'educational',
      label: 'Educational',
      badge: <span className="ux4g-badge ux4g-badge-ghost">5</span>,
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Educational Documents</h3>
            <ul className="ux4g-list">
              <li>10th Certificate</li>
              <li>12th Certificate</li>
              <li>Graduation Certificate</li>
              <li>Post Graduation Certificate</li>
              <li>Professional Degrees</li>
            </ul>
          </div>
    }, {
      value: 'address',
      label: 'Address Proofs',
      badge: <span className="ux4g-badge ux4g-badge-ghost">2</span>,
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Address Proof Documents</h3>
            <ul className="ux4g-list">
              <li>Electricity Bill</li>
              <li>Gas Connection Bill</li>
            </ul>
          </div>
    }, {
      value: 'others',
      label: 'Other Documents',
      badge: <span className="ux4g-badge ux4g-badge-ghost">4</span>,
      content: <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Other Documents</h3>
            <ul className="ux4g-list">
              <li>Driving License</li>
              <li>Vehicle Registration</li>
              <li>Insurance Documents</li>
              <li>Tax Returns</li>
            </ul>
          </div>
    }]
  }
}`,...(xe=(be=x.parameters)==null?void 0:be.docs)==null?void 0:xe.source},description:{story:"DigiLocker document categories",...(fe=(he=x.parameters)==null?void 0:he.docs)==null?void 0:fe.description}}};var Ne,ye,je,we,Ae;h.parameters={...h.parameters,docs:{...(Ne=h.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    items: [{
      value: 'completed',
      label: 'Completed',
      content: <div className="ux4g-p-4">This section is complete</div>
    }, {
      value: 'in-progress',
      label: 'In Progress',
      content: <div className="ux4g-p-4">Currently working on this section</div>
    }, {
      value: 'locked',
      label: 'Locked',
      disabled: true,
      content: <div className="ux4g-p-4">Complete previous steps to unlock</div>
    }],
    defaultValue: 'completed'
  }
}`,...(je=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:je.source},description:{story:"Tabs with disabled state",...(Ae=(we=h.parameters)==null?void 0:we.docs)==null?void 0:Ae.description}}};var Te,Se,Ce,Pe,De;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('form');
    return <div>
        <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <p style={{
          margin: 0,
          fontSize: '14px'
        }}>
            <strong>Active Tab:</strong> {activeTab}
          </p>
          <div style={{
          marginTop: '0.5rem'
        }}>
            <button className="ux4g-button ux4g-button-sm ux4g-button-outline" onClick={() => setActiveTab('form')} style={{
            marginRight: '0.5rem'
          }}>
              Go to Form
            </button>
            <button className="ux4g-button ux4g-button-sm ux4g-button-outline" onClick={() => setActiveTab('preview')}>
              Go to Preview
            </button>
          </div>
        </div>
        <Tabs value={activeTab} onChange={setActiveTab} items={[{
        value: 'form',
        label: 'Application Form',
        content: <div className="ux4g-p-4">
                  <h3 className="ux4g-mb-2">Fill Application Form</h3>
                  <p>Enter required information in the application form.</p>
                </div>
      }, {
        value: 'preview',
        label: 'Preview',
        content: <div className="ux4g-p-4">
                  <h3 className="ux4g-mb-2">Preview Application</h3>
                  <p>Review your application before submission.</p>
                </div>
      }, {
        value: 'submit',
        label: 'Submit',
        content: <div className="ux4g-p-4">
                  <h3 className="ux4g-mb-2">Submit Application</h3>
                  <p>Final submission of your application.</p>
                </div>
      }]} />
      </div>;
  }
}`,...(Ce=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source},description:{story:"Controlled tabs with external state",...(De=(Pe=f.parameters)==null?void 0:Pe.docs)==null?void 0:De.description}}};var ke,Re,Ie,Le,ze;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    lazy: true,
    items: [{
      value: 'tab1',
      label: 'Tab 1',
      content: <div className="ux4g-p-4">
            <p>Content 1 - Rendered only when active (lazy mode)</p>
          </div>
    }, {
      value: 'tab2',
      label: 'Tab 2',
      content: <div className="ux4g-p-4">
            <p>Content 2 - Rendered only when active (lazy mode)</p>
          </div>
    }, {
      value: 'tab3',
      label: 'Tab 3',
      content: <div className="ux4g-p-4">
            <p>Content 3 - Rendered only when active (lazy mode)</p>
          </div>
    }]
  }
}`,...(Ie=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source},description:{story:"Lazy loading tabs (content only renders when tab is active)",...(ze=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:ze.description}}};const ta=["Basic","Pills","Underline","Vertical","Centered","FullWidth","WithIcons","DigiLockerCategories","WithDisabledTab","Controlled","LazyLoading"];export{d as Basic,g as Centered,f as Controlled,x as DigiLockerCategories,v as FullWidth,N as LazyLoading,u as Pills,p as Underline,m as Vertical,h as WithDisabledTab,b as WithIcons,ta as __namedExportsOrder,sa as default};
