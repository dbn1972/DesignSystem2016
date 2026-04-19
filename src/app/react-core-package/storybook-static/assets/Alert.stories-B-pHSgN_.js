import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as _e}from"./index-G8LIXM5I.js";import{c as He}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const Be={info:"ℹ",success:"✓",warning:"⚠",error:"✕"},r=_e.forwardRef(({children:Ye,className:Ve,variant:h="info",title:v,description:b,icon:Me,showIcon:Fe=!0,onClose:y,closeLabel:Oe="Close alert",...Ue},Ge)=>{const x=Me??Be[h];return e.jsxs("div",{ref:Ge,role:"alert",className:He("ux4g-alert",`ux4g-alert-${h}`,Ve),...Ue,children:[Fe&&x&&e.jsx("div",{className:"ux4g-alert-icon","aria-hidden":"true",children:x}),e.jsxs("div",{className:"ux4g-alert-content",children:[v&&e.jsx("div",{className:"ux4g-alert-title",children:v}),b&&e.jsx("div",{className:"ux4g-alert-description",children:b}),Ye]}),y&&e.jsx("button",{type:"button",className:"ux4g-alert-close",onClick:y,"aria-label":Oe,children:"×"})]})});r.displayName="Alert";r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},children:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'neutral'  // Neutral informational status
| 'info'     // --ux4g-color-info
| 'success'  // --ux4g-color-success
| 'warning'  // --ux4g-color-warning
| 'error'`,elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`Alert status variant
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Alert title"},description:{required:!1,tsType:{name:"ReactNode"},description:"Alert description/message"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon (overrides default status icon)"},showIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show icon
@default true`,defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close button handler (shows close button if provided)"},closeLabel:{required:!1,tsType:{name:"string"},description:`Close button accessible label
@default 'Close alert'`,defaultValue:{value:"'Close alert'",computed:!1}}},composes:["Omit"]};const Xe={title:"Components/Alert",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:"Alert status variant",table:{defaultValue:{summary:"info"}}},title:{control:"text",description:"Alert title"},description:{control:"text",description:"Alert description/message"},showIcon:{control:"boolean",description:"Whether to show status icon",table:{defaultValue:{summary:"true"}}},onClose:{action:"close clicked",description:"Close button handler (shows close button if provided)"}},parameters:{docs:{description:{component:`The Alert component displays important messages to users.
It supports different status variants and can be dismissible.

## When to use
- System-wide messages
- Form validation feedback
- Success/error confirmations
- Important warnings
- Informational notices

## When NOT to use
- Inline form field errors - use Input error prop instead
- Transient notifications - use Toast instead
- Blocking confirmations - use Dialog instead`}}}},i={args:{variant:"info",title:"Information",description:"Your application has been received and is being processed."}},s={args:{variant:"success",title:"Success",description:"Your document has been uploaded successfully."}},t={args:{variant:"warning",title:"Warning",description:"Your session will expire in 5 minutes. Please save your work."}},n={args:{variant:"error",title:"Error",description:"Unable to verify Aadhaar. Please check the number and try again."}},a={args:{variant:"info",description:"This is a simple alert message without a title."}},o={args:{variant:"success",title:"Document uploaded successfully"}},l={args:{variant:"info",title:"Simple Message",description:"This alert does not display an icon.",showIcon:!1}},c={args:{variant:"info",title:"Dismissible Alert",description:"Click the close button to dismiss this alert.",onClose:()=>console.log("Alert dismissed")}},d={args:{variant:"info",title:"Custom Icon",description:"This alert uses a custom icon instead of the default.",icon:"📢"}},p={args:{variant:"warning",title:"Complex Content",children:e.jsxs("div",{children:[e.jsx("p",{children:"This alert contains custom content:"}),e.jsxs("ul",{style:{marginTop:"0.5rem",paddingLeft:"1.5rem"},children:[e.jsx("li",{children:"Custom HTML elements"}),e.jsx("li",{children:"Lists and formatting"}),e.jsx("li",{children:"Links and buttons"})]})]})}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{variant:"info",title:"Information",description:"General information message"}),e.jsx(r,{variant:"success",title:"Success",description:"Successful operation message"}),e.jsx(r,{variant:"warning",title:"Warning",description:"Warning message requiring attention"}),e.jsx(r,{variant:"error",title:"Error",description:"Error message indicating a problem"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{variant:"success",title:"Aadhaar Verified",description:"Your Aadhaar has been successfully verified. You can proceed with the application."}),e.jsx(r,{variant:"info",title:"DigiLocker Access Required",description:"Connect your DigiLocker account to auto-fill document details."}),e.jsx(r,{variant:"warning",title:"Incomplete Application",description:"Please upload all required documents before submitting your application.",onClose:()=>console.log("Alert dismissed")}),e.jsx(r,{variant:"error",title:"PAN Verification Failed",description:"The PAN card number does not match our records. Please verify and try again."}),e.jsx(r,{variant:"success",title:"Application Submitted",description:"Your application (ID: APP-2026-12345) has been submitted. You will receive updates via SMS and email."})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs(r,{variant:"info",title:"Update Available",children:[e.jsx("p",{children:"A new version of the application is available."}),e.jsxs("div",{style:{marginTop:"0.75rem",display:"flex",gap:"0.5rem"},children:[e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.375rem",cursor:"pointer"},children:"Update Now"}),e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"transparent",border:"1px solid #d1d5db",borderRadius:"0.375rem",cursor:"pointer"},children:"Later"})]})]}),e.jsxs(r,{variant:"warning",title:"Session Expiring",children:[e.jsx("p",{children:"Your session will expire in 5 minutes due to inactivity."}),e.jsx("button",{style:{marginTop:"0.75rem",padding:"0.5rem 1rem",backgroundColor:"#f59e0b",color:"white",border:"none",borderRadius:"0.375rem",cursor:"pointer"},children:"Extend Session"})]})]})},f={render:()=>e.jsxs(r,{variant:"error",title:"Form Validation Errors",children:[e.jsx("p",{children:"Please correct the following errors:"}),e.jsxs("ul",{style:{marginTop:"0.5rem",paddingLeft:"1.5rem"},children:[e.jsx("li",{children:"Email address is required"}),e.jsx("li",{children:"Mobile number must be 10 digits"}),e.jsx("li",{children:"Aadhaar number format is invalid"}),e.jsx("li",{children:"PAN card is required for this application"})]})]})};var A,w,S,j,C;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    description: 'Your application has been received and is being processed.'
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:"Info alerts provide general information to users.",...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.description}}};var T,I,N,k,D;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    description: 'Your document has been uploaded successfully.'
  }
}`,...(N=(I=s.parameters)==null?void 0:I.docs)==null?void 0:N.source},description:{story:"Success alerts confirm successful actions.",...(D=(k=s.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};var E,P,q,L,W;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'Your session will expire in 5 minutes. Please save your work.'
  }
}`,...(q=(P=t.parameters)==null?void 0:P.docs)==null?void 0:q.source},description:{story:"Warning alerts indicate potential issues.",...(W=(L=t.parameters)==null?void 0:L.docs)==null?void 0:W.description}}};var R,Y,V,M,F;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    description: 'Unable to verify Aadhaar. Please check the number and try again.'
  }
}`,...(V=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:V.source},description:{story:"Error alerts indicate problems that need attention.",...(F=(M=n.parameters)==null?void 0:M.docs)==null?void 0:F.description}}};var O,U,G,_,H;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    description: 'This is a simple alert message without a title.'
  }
}`,...(G=(U=a.parameters)==null?void 0:U.docs)==null?void 0:G.source},description:{story:"Alert with only description (no title).",...(H=(_=a.parameters)==null?void 0:_.docs)==null?void 0:H.description}}};var B,$,z,J,K;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Document uploaded successfully'
  }
}`,...(z=($=o.parameters)==null?void 0:$.docs)==null?void 0:z.source},description:{story:"Alert with only title (no description).",...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Z,ee,re;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Simple Message',
    description: 'This alert does not display an icon.',
    showIcon: false
  }
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Alert without icon.",...(re=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var ie,se,te,ne,ae;c.parameters={...c.parameters,docs:{...(ie=c.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    description: 'Click the close button to dismiss this alert.',
    onClose: () => console.log('Alert dismissed')
  }
}`,...(te=(se=c.parameters)==null?void 0:se.docs)==null?void 0:te.source},description:{story:"Dismissible alert with close button.",...(ae=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var oe,le,ce,de,pe;d.parameters={...d.parameters,docs:{...(oe=d.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Custom Icon',
    description: 'This alert uses a custom icon instead of the default.',
    icon: '📢'
  }
}`,...(ce=(le=d.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:"Alert with custom icon.",...(pe=(de=d.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var ue,me,ge,fe,he;p.parameters={...p.parameters,docs:{...(ue=p.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Complex Content',
    children: <div>
        <p>This alert contains custom content:</p>
        <ul style={{
        marginTop: '0.5rem',
        paddingLeft: '1.5rem'
      }}>
          <li>Custom HTML elements</li>
          <li>Lists and formatting</li>
          <li>Links and buttons</li>
        </ul>
      </div>
  }
}`,...(ge=(me=p.parameters)==null?void 0:me.docs)==null?void 0:ge.source},description:{story:"Alert using children instead of description prop.",...(he=(fe=p.parameters)==null?void 0:fe.docs)==null?void 0:he.description}}};var ve,be,ye,xe,Ae;u.parameters={...u.parameters,docs:{...(ve=u.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Alert variant="info" title="Information" description="General information message" />
      <Alert variant="success" title="Success" description="Successful operation message" />
      <Alert variant="warning" title="Warning" description="Warning message requiring attention" />
      <Alert variant="error" title="Error" description="Error message indicating a problem" />
    </div>
}`,...(ye=(be=u.parameters)==null?void 0:be.docs)==null?void 0:ye.source},description:{story:"All alert variants displayed together for comparison.",...(Ae=(xe=u.parameters)==null?void 0:xe.docs)==null?void 0:Ae.description}}};var we,Se,je,Ce,Te;m.parameters={...m.parameters,docs:{...(we=m.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Alert variant="success" title="Aadhaar Verified" description="Your Aadhaar has been successfully verified. You can proceed with the application." />

      <Alert variant="info" title="DigiLocker Access Required" description="Connect your DigiLocker account to auto-fill document details." />

      <Alert variant="warning" title="Incomplete Application" description="Please upload all required documents before submitting your application." onClose={() => console.log('Alert dismissed')} />

      <Alert variant="error" title="PAN Verification Failed" description="The PAN card number does not match our records. Please verify and try again." />

      <Alert variant="success" title="Application Submitted" description="Your application (ID: APP-2026-12345) has been submitted. You will receive updates via SMS and email." />
    </div>
}`,...(je=(Se=m.parameters)==null?void 0:Se.docs)==null?void 0:je.source},description:{story:"Government application examples showing different alert scenarios.",...(Te=(Ce=m.parameters)==null?void 0:Ce.docs)==null?void 0:Te.description}}};var Ie,Ne,ke,De,Ee;g.parameters={...g.parameters,docs:{...(Ie=g.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Alert variant="info" title="Update Available">
        <p>A new version of the application is available.</p>
        <div style={{
        marginTop: '0.75rem',
        display: 'flex',
        gap: '0.5rem'
      }}>
          <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer'
        }}>
            Update Now
          </button>
          <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'transparent',
          border: '1px solid #d1d5db',
          borderRadius: '0.375rem',
          cursor: 'pointer'
        }}>
            Later
          </button>
        </div>
      </Alert>

      <Alert variant="warning" title="Session Expiring">
        <p>Your session will expire in 5 minutes due to inactivity.</p>
        <button style={{
        marginTop: '0.75rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#f59e0b',
        color: 'white',
        border: 'none',
        borderRadius: '0.375rem',
        cursor: 'pointer'
      }}>
          Extend Session
        </button>
      </Alert>
    </div>
}`,...(ke=(Ne=g.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source},description:{story:"Example showing alerts with action buttons.",...(Ee=(De=g.parameters)==null?void 0:De.docs)==null?void 0:Ee.description}}};var Pe,qe,Le,We,Re;f.parameters={...f.parameters,docs:{...(Pe=f.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <Alert variant="error" title="Form Validation Errors">
      <p>Please correct the following errors:</p>
      <ul style={{
      marginTop: '0.5rem',
      paddingLeft: '1.5rem'
    }}>
        <li>Email address is required</li>
        <li>Mobile number must be 10 digits</li>
        <li>Aadhaar number format is invalid</li>
        <li>PAN card is required for this application</li>
      </ul>
    </Alert>
}`,...(Le=(qe=f.parameters)==null?void 0:qe.docs)==null?void 0:Le.source},description:{story:"Example of a form validation summary using alerts.",...(Re=(We=f.parameters)==null?void 0:We.docs)==null?void 0:Re.description}}};const Ze=["Info","Success","Warning","Error","DescriptionOnly","TitleOnly","NoIcon","Dismissible","CustomIcon","WithChildren","AllVariants","GovernmentScenarios","WithActions","FormValidation"];export{u as AllVariants,d as CustomIcon,a as DescriptionOnly,c as Dismissible,n as Error,f as FormValidation,m as GovernmentScenarios,i as Info,l as NoIcon,s as Success,o as TitleOnly,t as Warning,g as WithActions,p as WithChildren,Ze as __namedExportsOrder,Xe as default};
