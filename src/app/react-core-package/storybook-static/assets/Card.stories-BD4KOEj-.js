import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as ee}from"./index-G8LIXM5I.js";import{c as ae}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=ee.forwardRef(({children:K,className:Y,variant:$="elevated",clickable:p=!1,padding:J="md",onClick:Q,...X},Z)=>e.jsx("div",{ref:Z,className:ae("ux4g-card",`ux4g-card-${$}`,`ux4g-card-padding-${J}`,p&&"ux4g-card-clickable",Y),onClick:Q,role:p?"button":void 0,tabIndex:p?0:void 0,...X,children:K}));a.displayName="Card";a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},children:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'elevated' | 'outlined' | 'filled'",elements:[{name:"literal",value:"'elevated'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"}]},description:`Card variant
@default 'elevated'`,defaultValue:{value:"'elevated'",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:`Whether the card is clickable/interactive
@default false`,defaultValue:{value:"false",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Padding size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}}},composes:["HTMLAttributes"]};const de={title:"Components/Card",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["elevated","outlined","filled"],description:"Card visual style",table:{defaultValue:{summary:"elevated"}}},clickable:{control:"boolean",description:"Whether the card is interactive",table:{defaultValue:{summary:"false"}}},padding:{control:"select",options:["none","sm","md","lg"],description:"Internal padding size",table:{defaultValue:{summary:"md"}}}}},s={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Card Title"}),e.jsx("p",{className:"text-gray-600",children:"This is a basic card with default styling."})]})}},t={args:{variant:"elevated",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Elevated Card"}),e.jsx("p",{className:"text-gray-600",children:"Card with shadow elevation."})]})}},r={args:{variant:"outlined",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Outlined Card"}),e.jsx("p",{className:"text-gray-600",children:"Card with border outline."})]})}},l={args:{variant:"filled",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Filled Card"}),e.jsx("p",{className:"text-gray-600",children:"Card with background fill."})]})}},i={args:{clickable:!0,onClick:()=>alert("Card clicked!"),children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Clickable Card"}),e.jsx("p",{className:"text-gray-600",children:"Click this card to trigger an action."})]})}},d={args:{padding:"none",children:e.jsxs("div",{children:[e.jsx("img",{src:"https://via.placeholder.com/400x200",alt:"Placeholder",className:"w-full"}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Card with Image"}),e.jsx("p",{className:"text-gray-600",children:"No padding on card container, padding on content."})]})]})}},n={name:"Government Service Card",render:()=>e.jsx(a,{variant:"outlined",className:"max-w-sm",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0",children:e.jsx("svg",{className:"w-6 h-6 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-lg font-medium mb-1",children:"Birth Certificate"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Apply for birth certificate online"}),e.jsx("button",{className:"text-sm text-blue-600 font-medium",children:"Apply Now →"})]})]})})},c={name:"Application Status Card",render:()=>e.jsxs(a,{className:"max-w-md",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium",children:"Certificate of Residence"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Application ID: CR-2026-001234"})]}),e.jsx("span",{className:"px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full",children:"Pending"})]}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"Submitted:"}),e.jsx("span",{className:"font-medium",children:"April 10, 2026"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"Expected By:"}),e.jsx("span",{className:"font-medium",children:"April 25, 2026"})]})]})]})},m={name:"Document Card (DigiLocker)",render:()=>e.jsx(a,{variant:"outlined",clickable:!0,className:"max-w-xs",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-red-600 font-bold text-xs",children:"PDF"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h4",{className:"font-medium text-sm truncate",children:"Aadhaar_Card.pdf"}),e.jsx("p",{className:"text-xs text-gray-500",children:"245 KB • Uploaded Apr 10, 2026"})]}),e.jsx("button",{className:"text-gray-400 hover:text-gray-600",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"})})})]})})},o={name:"Statistics Card",render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsx(a,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-3xl font-bold text-blue-600",children:"1,234"}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Applications Submitted"})]})}),e.jsx(a,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-3xl font-bold text-green-600",children:"856"}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Approved"})]})}),e.jsx(a,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-3xl font-bold text-yellow-600",children:"378"}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Pending Review"})]})})]})},x={name:"Notification Card",render:()=>e.jsx(a,{variant:"filled",className:"max-w-md border-l-4 border-blue-600",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})})})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-medium text-sm mb-1",children:"Application Update"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Your PAN card application has been approved and will be delivered within 7 days."}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"2 hours ago"})]})]})})};var u,h,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-lg font-medium mb-2">Card Title</h3>
        <p className="text-gray-600">This is a basic card with default styling.</p>
      </div>
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,f,N;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: <div>
        <h3 className="text-lg font-medium mb-2">Elevated Card</h3>
        <p className="text-gray-600">Card with shadow elevation.</p>
      </div>
  }
}`,...(N=(f=t.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var b,j,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: <div>
        <h3 className="text-lg font-medium mb-2">Outlined Card</h3>
        <p className="text-gray-600">Card with border outline.</p>
      </div>
  }
}`,...(y=(j=r.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var C,w,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    children: <div>
        <h3 className="text-lg font-medium mb-2">Filled Card</h3>
        <p className="text-gray-600">Card with background fill.</p>
      </div>
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,A,M;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    clickable: true,
    onClick: () => alert('Card clicked!'),
    children: <div>
        <h3 className="text-lg font-medium mb-2">Clickable Card</h3>
        <p className="text-gray-600">Click this card to trigger an action.</p>
      </div>
  }
}`,...(M=(A=i.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var P,z,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    padding: 'none',
    children: <div>
        <img src="https://via.placeholder.com/400x200" alt="Placeholder" className="w-full" />
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Card with Image</h3>
          <p className="text-gray-600">No padding on card container, padding on content.</p>
        </div>
      </div>
  }
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var D,L,B;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Government Service Card',
  render: () => <Card variant="outlined" className="max-w-sm">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-1">Birth Certificate</h3>
          <p className="text-sm text-gray-600 mb-3">Apply for birth certificate online</p>
          <button className="text-sm text-blue-600 font-medium">Apply Now →</button>
        </div>
      </div>
    </Card>
}`,...(B=(L=n.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var V,R,E;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Application Status Card',
  render: () => <Card className="max-w-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium">Certificate of Residence</h3>
          <p className="text-sm text-gray-500">Application ID: CR-2026-001234</p>
        </div>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
          Pending
        </span>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Submitted:</span>
          <span className="font-medium">April 10, 2026</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Expected By:</span>
          <span className="font-medium">April 25, 2026</span>
        </div>
      </div>
    </Card>
}`,...(E=(R=c.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var I,q,F;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Document Card (DigiLocker)',
  render: () => <Card variant="outlined" clickable className="max-w-xs">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
          <span className="text-red-600 font-bold text-xs">PDF</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm truncate">Aadhaar_Card.pdf</h4>
          <p className="text-xs text-gray-500">245 KB • Uploaded Apr 10, 2026</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </Card>
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var W,_,O;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Statistics Card',
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-600">1,234</p>
          <p className="text-sm text-gray-600 mt-1">Applications Submitted</p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <p className="text-3xl font-bold text-green-600">856</p>
          <p className="text-sm text-gray-600 mt-1">Approved</p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <p className="text-3xl font-bold text-yellow-600">378</p>
          <p className="text-sm text-gray-600 mt-1">Pending Review</p>
        </div>
      </Card>
    </div>
}`,...(O=(_=o.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var U,H,G;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Notification Card',
  render: () => <Card variant="filled" className="max-w-md border-l-4 border-blue-600">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm mb-1">Application Update</h4>
          <p className="text-sm text-gray-600">
            Your PAN card application has been approved and will be delivered within 7 days.
          </p>
          <p className="text-xs text-gray-500 mt-2">2 hours ago</p>
        </div>
      </div>
    </Card>
}`,...(G=(H=x.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};const ne=["Default","Elevated","Outlined","Filled","Clickable","NoPadding","ServiceCard","ApplicationStatusCard","DocumentCard","StatisticsCard","NotificationCard"];export{c as ApplicationStatusCard,i as Clickable,s as Default,m as DocumentCard,t as Elevated,l as Filled,d as NoPadding,x as NotificationCard,r as Outlined,n as ServiceCard,o as StatisticsCard,ne as __namedExportsOrder,de as default};
