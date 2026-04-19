import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{c as g}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";function p({items:u,mode:G="left",reverse:y=!1,className:H,...$}){const v=y?[...u].reverse():u;return t.jsx("div",{className:g("ux4g-timeline",`ux4g-timeline-${G}`,y&&"ux4g-timeline-reverse",H),...$,children:v.map((e,z)=>t.jsxs("div",{className:g("ux4g-timeline-item",e.variant&&`ux4g-timeline-item-${e.variant}`),children:[t.jsxs("div",{className:"ux4g-timeline-marker",children:[e.icon?t.jsx("div",{className:"ux4g-timeline-icon",children:e.icon}):t.jsx("div",{className:"ux4g-timeline-dot"}),z<v.length-1&&t.jsx("div",{className:"ux4g-timeline-line"})]}),t.jsxs("div",{className:"ux4g-timeline-content",children:[t.jsx("div",{className:"ux4g-timeline-title",children:e.title}),e.timestamp&&t.jsx("div",{className:"ux4g-timeline-timestamp",children:e.timestamp}),e.content&&t.jsx("div",{className:"ux4g-timeline-description",children:e.content})]})]},e.key))})}p.displayName="Timeline";p.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},items:{required:!0,tsType:{name:"Array",elements:[{name:"TimelineItem"}],raw:"TimelineItem[]"},description:"Timeline items"},mode:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'alternate'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'alternate'"}]},description:`Timeline mode
@default 'left'`,defaultValue:{value:"'left'",computed:!1}},reverse:{required:!1,tsType:{name:"boolean"},description:`Reverse order
@default false`,defaultValue:{value:"false",computed:!1}}}};const ee={title:"Components/Timeline",component:p,tags:["autodocs"]},n={args:{items:[{key:"1",title:"Event 1",timestamp:"2024-03-15"},{key:"2",title:"Event 2",timestamp:"2024-03-16"},{key:"3",title:"Event 3",timestamp:"2024-03-17"}]}},a={args:{items:[{key:"1",title:"Application Submitted",content:"Your application has been received",timestamp:"2024-03-15 10:30 AM"},{key:"2",title:"Under Review",content:"Application is being reviewed by the department",timestamp:"2024-03-16 02:15 PM"},{key:"3",title:"Approved",content:"Your application has been approved",timestamp:"2024-03-20 11:00 AM"}]}},i={args:{items:[{key:"1",title:"Application Submitted",content:"PAN application PAN2024001 submitted successfully",timestamp:"March 15, 2024 at 10:30 AM",variant:"success",icon:"✓"},{key:"2",title:"Documents Verified",content:"All submitted documents have been verified",timestamp:"March 16, 2024 at 02:00 PM",variant:"success",icon:"✓"},{key:"3",title:"Under Processing",content:"Your PAN card is being generated",timestamp:"March 18, 2024 at 09:00 AM",variant:"info",icon:"⏳"},{key:"4",title:"Dispatched",content:"PAN card dispatched to your address",timestamp:"March 20, 2024 at 11:00 AM",variant:"success",icon:"📦"}]}},s={args:{items:[{key:"1",title:"Address Updated",content:"Residential address changed to Mumbai, Maharashtra",timestamp:"January 10, 2024",variant:"success"},{key:"2",title:"Mobile Number Updated",content:"Mobile number linked with Aadhaar",timestamp:"November 5, 2023",variant:"success"},{key:"3",title:"Aadhaar Generated",content:"Aadhaar card generated and sent to registered address",timestamp:"June 15, 2018",variant:"success"}]}},r={args:{items:[{key:"1",title:"Application Registered",content:"File Number: AB1234567890",timestamp:"March 1, 2024",variant:"success"},{key:"2",title:"Fee Payment Received",content:"Payment of Rs. 1500 received",timestamp:"March 1, 2024",variant:"success"},{key:"3",title:"Appointment Scheduled",content:"PSK Visit: March 10, 2024 at 10:00 AM",timestamp:"March 2, 2024",variant:"info"},{key:"4",title:"Documents Verified",content:"All documents verified at PSK",timestamp:"March 10, 2024",variant:"success"},{key:"5",title:"Police Verification",content:"Pending police verification",timestamp:"March 12, 2024",variant:"warning"}]}},c={args:{items:[{key:"1",title:"Document Uploaded",content:"10th Certificate uploaded successfully",timestamp:"2 hours ago",icon:"📄"},{key:"2",title:"Document Shared",content:"Aadhaar card shared with ABC University",timestamp:"1 day ago",icon:"🔗"},{key:"3",title:"Document Verified",content:"PAN card verified by issuer",timestamp:"3 days ago",icon:"✓"},{key:"4",title:"Account Created",content:"DigiLocker account activated",timestamp:"30 days ago",icon:"🎉"}]}},o={args:{items:[{key:"1",title:"Application Submitted",content:"Driving License renewal application submitted",timestamp:"Today at 09:00 AM",variant:"success"},{key:"2",title:"Fee Payment",content:"Payment of Rs. 200 completed",timestamp:"Today at 09:05 AM",variant:"success"},{key:"3",title:"Under Verification",content:"Documents under verification",timestamp:"Today at 10:00 AM",variant:"info"}]}},m={args:{items:[{key:"1",title:"Form Submitted",content:"Ration card application form submitted online",timestamp:"February 1, 2024",variant:"success"},{key:"2",title:"Documents Uploaded",content:"All required documents uploaded",timestamp:"February 1, 2024",variant:"success"},{key:"3",title:"Field Verification",content:"Officer visited for address verification",timestamp:"February 10, 2024",variant:"success"},{key:"4",title:"Approved",content:"Ration card approved by Food & Civil Supplies Dept",timestamp:"February 20, 2024",variant:"success"}]}},d={args:{items:[{key:"1",title:"Started",icon:"🚀",timestamp:"Day 1"},{key:"2",title:"In Progress",icon:"⏳",timestamp:"Day 2"},{key:"3",title:"Completed",icon:"✓",timestamp:"Day 3"}]}},l={args:{items:[{key:"1",title:"Event 1",timestamp:"2024-03-15"},{key:"2",title:"Event 2",timestamp:"2024-03-16"},{key:"3",title:"Event 3",timestamp:"2024-03-17"}],reverse:!0}};var k,A,h;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Event 1',
      timestamp: '2024-03-15'
    }, {
      key: '2',
      title: 'Event 2',
      timestamp: '2024-03-16'
    }, {
      key: '3',
      title: 'Event 3',
      timestamp: '2024-03-17'
    }]
  }
}`,...(h=(A=n.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var f,b,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Application Submitted',
      content: 'Your application has been received',
      timestamp: '2024-03-15 10:30 AM'
    }, {
      key: '2',
      title: 'Under Review',
      content: 'Application is being reviewed by the department',
      timestamp: '2024-03-16 02:15 PM'
    }, {
      key: '3',
      title: 'Approved',
      content: 'Your application has been approved',
      timestamp: '2024-03-20 11:00 AM'
    }]
  }
}`,...(M=(b=a.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var P,S,N;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Application Submitted',
      content: 'PAN application PAN2024001 submitted successfully',
      timestamp: 'March 15, 2024 at 10:30 AM',
      variant: 'success' as const,
      icon: '✓'
    }, {
      key: '2',
      title: 'Documents Verified',
      content: 'All submitted documents have been verified',
      timestamp: 'March 16, 2024 at 02:00 PM',
      variant: 'success' as const,
      icon: '✓'
    }, {
      key: '3',
      title: 'Under Processing',
      content: 'Your PAN card is being generated',
      timestamp: 'March 18, 2024 at 09:00 AM',
      variant: 'info' as const,
      icon: '⏳'
    }, {
      key: '4',
      title: 'Dispatched',
      content: 'PAN card dispatched to your address',
      timestamp: 'March 20, 2024 at 11:00 AM',
      variant: 'success' as const,
      icon: '📦'
    }]
  }
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var D,x,R;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Address Updated',
      content: 'Residential address changed to Mumbai, Maharashtra',
      timestamp: 'January 10, 2024',
      variant: 'success' as const
    }, {
      key: '2',
      title: 'Mobile Number Updated',
      content: 'Mobile number linked with Aadhaar',
      timestamp: 'November 5, 2023',
      variant: 'success' as const
    }, {
      key: '3',
      title: 'Aadhaar Generated',
      content: 'Aadhaar card generated and sent to registered address',
      timestamp: 'June 15, 2018',
      variant: 'success' as const
    }]
  }
}`,...(R=(x=s.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var T,F,w;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Application Registered',
      content: 'File Number: AB1234567890',
      timestamp: 'March 1, 2024',
      variant: 'success' as const
    }, {
      key: '2',
      title: 'Fee Payment Received',
      content: 'Payment of Rs. 1500 received',
      timestamp: 'March 1, 2024',
      variant: 'success' as const
    }, {
      key: '3',
      title: 'Appointment Scheduled',
      content: 'PSK Visit: March 10, 2024 at 10:00 AM',
      timestamp: 'March 2, 2024',
      variant: 'info' as const
    }, {
      key: '4',
      title: 'Documents Verified',
      content: 'All documents verified at PSK',
      timestamp: 'March 10, 2024',
      variant: 'success' as const
    }, {
      key: '5',
      title: 'Police Verification',
      content: 'Pending police verification',
      timestamp: 'March 12, 2024',
      variant: 'warning' as const
    }]
  }
}`,...(w=(F=r.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var C,U,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Document Uploaded',
      content: '10th Certificate uploaded successfully',
      timestamp: '2 hours ago',
      icon: '📄'
    }, {
      key: '2',
      title: 'Document Shared',
      content: 'Aadhaar card shared with ABC University',
      timestamp: '1 day ago',
      icon: '🔗'
    }, {
      key: '3',
      title: 'Document Verified',
      content: 'PAN card verified by issuer',
      timestamp: '3 days ago',
      icon: '✓'
    }, {
      key: '4',
      title: 'Account Created',
      content: 'DigiLocker account activated',
      timestamp: '30 days ago',
      icon: '🎉'
    }]
  }
}`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var E,j,I;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Application Submitted',
      content: 'Driving License renewal application submitted',
      timestamp: 'Today at 09:00 AM',
      variant: 'success' as const
    }, {
      key: '2',
      title: 'Fee Payment',
      content: 'Payment of Rs. 200 completed',
      timestamp: 'Today at 09:05 AM',
      variant: 'success' as const
    }, {
      key: '3',
      title: 'Under Verification',
      content: 'Documents under verification',
      timestamp: 'Today at 10:00 AM',
      variant: 'info' as const
    }]
  }
}`,...(I=(j=o.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var q,L,B;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Form Submitted',
      content: 'Ration card application form submitted online',
      timestamp: 'February 1, 2024',
      variant: 'success' as const
    }, {
      key: '2',
      title: 'Documents Uploaded',
      content: 'All required documents uploaded',
      timestamp: 'February 1, 2024',
      variant: 'success' as const
    }, {
      key: '3',
      title: 'Field Verification',
      content: 'Officer visited for address verification',
      timestamp: 'February 10, 2024',
      variant: 'success' as const
    }, {
      key: '4',
      title: 'Approved',
      content: 'Ration card approved by Food & Civil Supplies Dept',
      timestamp: 'February 20, 2024',
      variant: 'success' as const
    }]
  }
}`,...(B=(L=m.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var Y,J,K;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Started',
      icon: '🚀',
      timestamp: 'Day 1'
    }, {
      key: '2',
      title: 'In Progress',
      icon: '⏳',
      timestamp: 'Day 2'
    }, {
      key: '3',
      title: 'Completed',
      icon: '✓',
      timestamp: 'Day 3'
    }]
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var W,_,O;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Event 1',
      timestamp: '2024-03-15'
    }, {
      key: '2',
      title: 'Event 2',
      timestamp: '2024-03-16'
    }, {
      key: '3',
      title: 'Event 3',
      timestamp: '2024-03-17'
    }],
    reverse: true
  }
}`,...(O=(_=l.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const te=["Basic","WithContent","PANApplicationTracking","AadhaarUpdateHistory","PassportApplicationStatus","DigiLockerActivity","LicenseRenewalProgress","RationCardApplication","WithIcons","Reverse"];export{s as AadhaarUpdateHistory,n as Basic,c as DigiLockerActivity,o as LicenseRenewalProgress,i as PANApplicationTracking,r as PassportApplicationStatus,m as RationCardApplication,l as Reverse,a as WithContent,d as WithIcons,te as __namedExportsOrder,ee as default};
