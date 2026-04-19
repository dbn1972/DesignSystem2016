import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as X}from"./index-G8LIXM5I.js";import{c as h}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function i({steps:n,current:t,orientation:a="horizontal",clickable:Y=!1,onStepClick:f,className:Z,...ee}){const ne=r=>{const s=n[r];return s.status?s.status:r<t?"finish":r===t?"process":"waiting"};return e.jsx("div",{className:h("ux4g-stepper",`ux4g-stepper-${a}`,Z),...ee,children:n.map((r,s)=>{const S=ne(s),o=Y&&s!==t;return e.jsxs("div",{className:h("ux4g-step",`ux4g-step-${S}`,o&&"ux4g-step-clickable"),children:[e.jsxs("div",{className:"ux4g-step-indicator",onClick:()=>o&&(f==null?void 0:f(s)),role:o?"button":void 0,tabIndex:o?0:void 0,"aria-current":s===t?"step":void 0,children:[e.jsx("div",{className:"ux4g-step-icon",children:r.icon||e.jsx("span",{className:"ux4g-step-number",children:S==="finish"?"✓":s+1})}),s<n.length-1&&e.jsx("div",{className:"ux4g-step-connector","aria-hidden":"true"})]}),e.jsxs("div",{className:"ux4g-step-content",children:[e.jsx("div",{className:"ux4g-step-label",children:r.label}),r.description&&e.jsx("div",{className:"ux4g-step-description",children:r.description})]})]},r.key)})})}i.displayName="Stepper";i.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:"Stepper steps"},current:{required:!0,tsType:{name:"number"},description:"Current step index"},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Stepper orientation
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:`Allow clicking on steps
@default false`,defaultValue:{value:"false",computed:!1}},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Step click handler"}}};const le={title:"Components/Stepper",component:i,tags:["autodocs"]},te=[{key:"1",label:"Step 1"},{key:"2",label:"Step 2"},{key:"3",label:"Step 3"}],l={args:{steps:te,current:1}},c={args:{steps:[{key:"1",label:"Personal Info",description:"Enter your details"},{key:"2",label:"Documents",description:"Upload documents"},{key:"3",label:"Review",description:"Review and submit"}],current:1}},p={args:{steps:[{key:"personal",label:"Personal Details",description:"Name, DOB, Address"},{key:"documents",label:"Upload Documents",description:"Identity and Address Proof"},{key:"payment",label:"Payment",description:"Application Fee"},{key:"review",label:"Review & Submit",description:"Final Verification"}],current:2}},d={args:{steps:[{key:"verify",label:"Mobile Verification",description:"Verify mobile number"},{key:"documents",label:"Document Upload",description:"Upload supporting documents"},{key:"biometric",label:"Biometric",description:"Capture fingerprints"},{key:"photo",label:"Photograph",description:"Capture photo"},{key:"submit",label:"Submit",description:"Complete enrollment"}],current:2}},u={args:{steps:[{key:"1",label:"Registration",description:"Create account"},{key:"2",label:"Fill Form",description:"Complete application form"},{key:"3",label:"Fee Payment",description:"Pay application fee"},{key:"4",label:"Appointment",description:"Book PSK appointment"},{key:"5",label:"Document Verification",description:"Visit PSK"}],current:3}},m={args:{steps:[{key:"1",label:"Login",description:"Login with credentials"},{key:"2",label:"Medical Certificate",description:"Upload medical certificate"},{key:"3",label:"Payment",description:"Pay renewal fee"},{key:"4",label:"Confirmation",description:"Download acknowledgment"}],current:1}},b={args:{orientation:"vertical",steps:[{key:"1",label:"Personal Details",description:"Complete"},{key:"2",label:"Contact Info",description:"In Progress"},{key:"3",label:"Address",description:"Pending"},{key:"4",label:"Submit",description:"Pending"}],current:1}},y={args:{steps:[{key:"1",label:"Step 1",status:"finish"},{key:"2",label:"Step 2",status:"error"},{key:"3",label:"Step 3",status:"waiting"}],current:1}},k={render:()=>{const[n,t]=X.useState(0),a=[{key:"1",label:"Personal Info"},{key:"2",label:"Documents"},{key:"3",label:"Review"},{key:"4",label:"Submit"}];return e.jsxs("div",{children:[e.jsx(i,{steps:a,current:n}),e.jsxs("div",{style:{marginTop:"2rem",display:"flex",gap:"0.5rem"},children:[e.jsx("button",{className:"ux4g-button ux4g-button-outline",onClick:()=>t(Math.max(0,n-1)),disabled:n===0,children:"Previous"}),e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(Math.min(a.length-1,n+1)),disabled:n===a.length-1,children:"Next"})]})]})}},g={render:()=>{const[n,t]=X.useState(1),a=[{key:"1",label:"Step 1"},{key:"2",label:"Step 2"},{key:"3",label:"Step 3"},{key:"4",label:"Step 4"}];return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem"},children:"Click on steps to navigate"}),e.jsx(i,{steps:a,current:n,clickable:!0,onStepClick:t})]})}};var v,x,P;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1
  }
}`,...(P=(x=l.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var C,w,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    steps: [{
      key: '1',
      label: 'Personal Info',
      description: 'Enter your details'
    }, {
      key: '2',
      label: 'Documents',
      description: 'Upload documents'
    }, {
      key: '3',
      label: 'Review',
      description: 'Review and submit'
    }],
    current: 1
  }
}`,...(N=(w=c.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var A,D,j;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    steps: [{
      key: 'personal',
      label: 'Personal Details',
      description: 'Name, DOB, Address'
    }, {
      key: 'documents',
      label: 'Upload Documents',
      description: 'Identity and Address Proof'
    }, {
      key: 'payment',
      label: 'Payment',
      description: 'Application Fee'
    }, {
      key: 'review',
      label: 'Review & Submit',
      description: 'Final Verification'
    }],
    current: 2
  }
}`,...(j=(D=p.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var I,R,V;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    steps: [{
      key: 'verify',
      label: 'Mobile Verification',
      description: 'Verify mobile number'
    }, {
      key: 'documents',
      label: 'Document Upload',
      description: 'Upload supporting documents'
    }, {
      key: 'biometric',
      label: 'Biometric',
      description: 'Capture fingerprints'
    }, {
      key: 'photo',
      label: 'Photograph',
      description: 'Capture photo'
    }, {
      key: 'submit',
      label: 'Submit',
      description: 'Complete enrollment'
    }],
    current: 2
  }
}`,...(V=(R=d.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var T,B,F;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    steps: [{
      key: '1',
      label: 'Registration',
      description: 'Create account'
    }, {
      key: '2',
      label: 'Fill Form',
      description: 'Complete application form'
    }, {
      key: '3',
      label: 'Fee Payment',
      description: 'Pay application fee'
    }, {
      key: '4',
      label: 'Appointment',
      description: 'Book PSK appointment'
    }, {
      key: '5',
      label: 'Document Verification',
      description: 'Visit PSK'
    }],
    current: 3
  }
}`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var U,E,q;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    steps: [{
      key: '1',
      label: 'Login',
      description: 'Login with credentials'
    }, {
      key: '2',
      label: 'Medical Certificate',
      description: 'Upload medical certificate'
    }, {
      key: '3',
      label: 'Payment',
      description: 'Pay renewal fee'
    }, {
      key: '4',
      label: 'Confirmation',
      description: 'Download acknowledgment'
    }],
    current: 1
  }
}`,...(q=(E=m.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var M,L,z;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    steps: [{
      key: '1',
      label: 'Personal Details',
      description: 'Complete'
    }, {
      key: '2',
      label: 'Contact Info',
      description: 'In Progress'
    }, {
      key: '3',
      label: 'Address',
      description: 'Pending'
    }, {
      key: '4',
      label: 'Submit',
      description: 'Pending'
    }],
    current: 1
  }
}`,...(z=(L=b.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var K,W,_;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    steps: [{
      key: '1',
      label: 'Step 1',
      status: 'finish'
    }, {
      key: '2',
      label: 'Step 2',
      status: 'error'
    }, {
      key: '3',
      label: 'Step 3',
      status: 'waiting'
    }],
    current: 1
  }
}`,...(_=(W=y.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var O,$,G;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(0);
    const steps = [{
      key: '1',
      label: 'Personal Info'
    }, {
      key: '2',
      label: 'Documents'
    }, {
      key: '3',
      label: 'Review'
    }, {
      key: '4',
      label: 'Submit'
    }];
    return <div>
        <Stepper steps={steps} current={current} />
        <div style={{
        marginTop: '2rem',
        display: 'flex',
        gap: '0.5rem'
      }}>
          <button className="ux4g-button ux4g-button-outline" onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>
            Previous
          </button>
          <button className="ux4g-button ux4g-button-primary" onClick={() => setCurrent(Math.min(steps.length - 1, current + 1))} disabled={current === steps.length - 1}>
            Next
          </button>
        </div>
      </div>;
  }
}`,...(G=($=k.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var H,J,Q;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(1);
    const steps = [{
      key: '1',
      label: 'Step 1'
    }, {
      key: '2',
      label: 'Step 2'
    }, {
      key: '3',
      label: 'Step 3'
    }, {
      key: '4',
      label: 'Step 4'
    }];
    return <div>
        <p style={{
        marginBottom: '1rem'
      }}>Click on steps to navigate</p>
        <Stepper steps={steps} current={current} clickable onStepClick={setCurrent} />
      </div>;
  }
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ce=["Basic","WithDescriptions","PANApplication","AadhaarEnrollment","PassportApplication","LicenseRenewal","Vertical","WithError","Interactive","Clickable"];export{d as AadhaarEnrollment,l as Basic,g as Clickable,k as Interactive,m as LicenseRenewal,p as PANApplication,u as PassportApplication,b as Vertical,c as WithDescriptions,y as WithError,ce as __namedExportsOrder,le as default};
