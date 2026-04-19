import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as oe}from"./index-G8LIXM5I.js";import{c as pe}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function v({message:b,variant:a="info",title:S,closable:ce=!0,duration:h=5e3,onClose:s,icon:ue,action:y,className:le,...me}){oe.useEffect(()=>{if(h>0&&s){const de=setTimeout(s,h);return()=>clearTimeout(de)}},[h,s]);const w=ue??{info:"ℹ️",success:"✓",warning:"⚠️",error:"✕"}[a];return e.jsxs("div",{role:"alert","aria-live":a==="error"?"assertive":"polite",className:pe("ux4g-toast",`ux4g-toast-${a}`,le),...me,children:[w&&e.jsx("div",{className:"ux4g-toast-icon","aria-hidden":"true",children:w}),e.jsxs("div",{className:"ux4g-toast-content",children:[S&&e.jsx("div",{className:"ux4g-toast-title",children:S}),e.jsx("div",{className:"ux4g-toast-message",children:b})]}),y&&e.jsx("button",{type:"button",className:"ux4g-toast-action",onClick:y.onClick,children:y.label}),ce&&e.jsx("button",{type:"button",className:"ux4g-toast-close",onClick:s,"aria-label":"Close notification",children:"×"})]})}v.displayName="Toast";v.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},message:{required:!0,tsType:{name:"ReactNode"},description:"Toast message"},variant:{required:!1,tsType:{name:"union",raw:`| 'neutral'  // Neutral informational status
| 'info'     // --ux4g-color-info
| 'success'  // --ux4g-color-success
| 'warning'  // --ux4g-color-warning
| 'error'`,elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`Toast variant
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Toast title"},closable:{required:!1,tsType:{name:"boolean"},description:`Show close button
@default true`,defaultValue:{value:"true",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:`Auto close duration in ms (0 to disable)
@default 5000`,defaultValue:{value:"5000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close handler"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Toast icon"},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: ReactNode;
  onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:"Action button"}}};const Se={title:"Components/Toast",component:v,tags:["autodocs"]},r={args:{variant:"info",message:"This is an informational message"}},t={args:{variant:"success",message:"Application submitted successfully"}},n={args:{variant:"warning",message:"Please review your information before submitting"}},i={args:{variant:"error",message:"Failed to submit application. Please try again."}},o={args:{variant:"success",title:"Success",message:"Your PAN application has been submitted"}},c={args:{variant:"success",title:"Aadhaar Verified",message:"Your Aadhaar has been successfully verified"}},u={args:{variant:"success",message:"Document uploaded to DigiLocker successfully"}},l={args:{variant:"success",title:"Application Submitted",message:"Your PAN application (ID: PAN2024001) has been submitted for processing"}},m={args:{variant:"info",title:"OTP Sent",message:"A one-time password has been sent to your registered mobile number"}},d={args:{variant:"warning",title:"Session Expiring",message:"Your session will expire in 5 minutes. Please save your work."}},p={args:{variant:"error",title:"Verification Failed",message:"Unable to verify Aadhaar. Please check the number and try again."}},g={args:{variant:"info",message:"New update available for your application",action:{label:"View",onClick:()=>alert("View clicked")}}},f={render:()=>{const[b,a]=oe.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>a(!0),children:"Show Toast"}),b&&e.jsx("div",{style:{marginTop:"1rem"},children:e.jsx(v,{variant:"success",message:"This is a toast notification",onClose:()=>a(!1)})})]})}};var x,T,A;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: 'This is an informational message'
  }
}`,...(A=(T=r.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var N,P,k;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: 'Application submitted successfully'
  }
}`,...(k=(P=t.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var C,V,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    message: 'Please review your information before submitting'
  }
}`,...(j=(V=n.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,I,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    message: 'Failed to submit application. Please try again.'
  }
}`,...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var D,R,Y;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your PAN application has been submitted'
  }
}`,...(Y=(R=o.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var F,W,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Aadhaar Verified',
    message: 'Your Aadhaar has been successfully verified'
  }
}`,...(O=(W=c.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var U,_,L;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: 'Document uploaded to DigiLocker successfully'
  }
}`,...(L=(_=u.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var $,z,B;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Application Submitted',
    message: 'Your PAN application (ID: PAN2024001) has been submitted for processing'
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'OTP Sent',
    message: 'A one-time password has been sent to your registered mobile number'
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Session Expiring',
    message: 'Your session will expire in 5 minutes. Please save your work.'
  }
}`,...(Q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Z,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Verification Failed',
    message: 'Unable to verify Aadhaar. Please check the number and try again.'
  }
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,se,re;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: 'New update available for your application',
    action: {
      label: 'View',
      onClick: () => alert('View clicked')
    }
  }
}`,...(re=(se=g.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var te,ne,ie;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    return <div>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setShow(true)}>
          Show Toast
        </button>
        {show && <div style={{
        marginTop: '1rem'
      }}>
            <Toast variant="success" message="This is a toast notification" onClose={() => setShow(false)} />
          </div>}
      </div>;
  }
}`,...(ie=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const we=["Info","Success","Warning","Error","WithTitle","AadhaarVerified","DocumentUploaded","PANApplicationSubmitted","OTPSent","SessionExpiring","VerificationFailed","WithAction","Interactive"];export{c as AadhaarVerified,u as DocumentUploaded,i as Error,r as Info,f as Interactive,m as OTPSent,l as PANApplicationSubmitted,d as SessionExpiring,t as Success,p as VerificationFailed,n as Warning,g as WithAction,o as WithTitle,we as __namedExportsOrder,Se as default};
