import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-G8LIXM5I.js";import{c as he}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function c({length:t=6,value:s,defaultValue:l="",onChange:a,onComplete:u,type:d="text",autoFocus:V=!0,disabled:S=!1,error:le=!1,className:ue,...ce}){const[me,E]=i.useState(l),m=i.useRef([]),pe=s??me,A=s!==void 0,N=pe.split("").slice(0,t),B=[...N,...Array(t-N.length).fill("")];i.useEffect(()=>{V&&m.current[0]&&m.current[0].focus()},[V]);const de=(n,r)=>{var w;if(S)return;const o=r.slice(-1),p=[...B];p[n]=o;const g=p.join("");A||E(g),a==null||a(g),o&&n<t-1&&((w=m.current[n+1])==null||w.focus()),g.length===t&&(u==null||u(g))},ge=(n,r)=>{var o,p,g;r.key==="Backspace"&&!B[n]&&n>0?(o=m.current[n-1])==null||o.focus():r.key==="ArrowLeft"&&n>0?(p=m.current[n-1])==null||p.focus():r.key==="ArrowRight"&&n<t-1&&((g=m.current[n+1])==null||g.focus())},fe=n=>{var o,p;n.preventDefault();const r=n.clipboardData.getData("text").slice(0,t);A||E(r),a==null||a(r),r.length===t?(u==null||u(r),(o=m.current[t-1])==null||o.focus()):(p=m.current[Math.min(r.length,t-1)])==null||p.focus()};return e.jsx("div",{className:he("ux4g-otp-input",le&&"ux4g-otp-input-error",S&&"ux4g-otp-input-disabled",ue),...ce,children:B.map((n,r)=>e.jsx("input",{ref:o=>m.current[r]=o,type:d,inputMode:d==="number"||d==="tel"?"numeric":"text",value:n,onChange:o=>de(r,o.target.value),onKeyDown:o=>ge(r,o),onPaste:fe,disabled:S,maxLength:1,className:"ux4g-otp-input-box","aria-label":`Digit ${r+1} of ${t}`},r))})}c.displayName="OTPInput";c.__docgenInfo={description:"",methods:[],displayName:"OTPInput",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},length:{required:!1,tsType:{name:"number"},description:`Number of OTP digits
@default 6`,defaultValue:{value:"6",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Complete handler (called when all digits are entered)"},type:{required:!1,tsType:{name:"union",raw:"'text' | 'number' | 'tel'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'number'"},{name:"literal",value:"'tel'"}]},description:`Input type
@default 'text'`,defaultValue:{value:"'text'",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:`Auto focus first input
@default true`,defaultValue:{value:"true",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:`Error state
@default false`,defaultValue:{value:"false",computed:!1}},defaultValue:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const Oe={title:"Components/OTPInput",component:c,tags:["autodocs"]},f={args:{length:6}},h={args:{length:4}},y={render:()=>{const[t,s]=i.useState("");return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Enter Aadhaar OTP"}),e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"An OTP has been sent to your registered mobile number"}),e.jsx(c,{length:6,value:t,onChange:s,onComplete:l=>console.log("OTP Complete:",l)}),t.length===6&&e.jsxs("p",{style:{marginTop:"1rem",color:"green"},children:["OTP Entered: ",t]})]})}},v={render:()=>{const[t,s]=i.useState("");return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Verify Mobile Number"}),e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Enter the 4-digit code sent to +91 98765-43210"}),e.jsx(c,{length:4,value:t,onChange:s,type:"number"}),e.jsx("div",{style:{marginTop:"1rem"},children:e.jsx("button",{className:"ux4g-button ux4g-button-ghost",children:"Resend OTP"})})]})}},x={render:()=>{const[t,s]=i.useState(""),[l,a]=i.useState(!1);return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"PAN Card Verification"}),e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Enter OTP to verify your PAN application"}),e.jsx(c,{length:6,value:t,onChange:s,onComplete:u=>{u==="123456"&&a(!0)}}),l&&e.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",background:"#d4edda",borderRadius:"4px"},children:[e.jsx("span",{className:"ux4g-badge ux4g-badge-success",children:"✓ Verified"}),e.jsx("p",{style:{marginTop:"0.5rem",marginBottom:0},children:"PAN verification successful"})]})]})}},b={render:()=>{const[t,s]=i.useState("");return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"DigiLocker Login"}),e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Enter OTP sent to your Aadhaar-linked mobile"}),e.jsx(c,{length:6,value:t,onChange:s}),e.jsx("button",{className:"ux4g-button ux4g-button-primary",style:{marginTop:"1rem",width:"100%"},disabled:t.length!==6,children:"Verify & Login"})]})}},T={render:()=>{const[t,s]=i.useState(""),[l,a]=i.useState(!1),u=d=>{a(d!=="123456")};return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Enter OTP"}),e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Use 123456 for demo (any other will show error)"}),e.jsx(c,{length:6,value:t,onChange:d=>{s(d),a(!1)},onComplete:u,error:l}),l&&e.jsx("p",{style:{marginTop:"0.5rem",color:"red",fontSize:"14px"},children:"Invalid OTP. Please try again."})]})}},O={args:{length:6,value:"123456",disabled:!0}},P={render:()=>{const[t,s]=i.useState(""),[l,a]=i.useState(60);return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Two-Factor Authentication"}),e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Enter the 6-digit code from your authenticator app"}),e.jsx(c,{length:6,value:t,onChange:s,type:"number"}),e.jsxs("p",{style:{marginTop:"1rem",fontSize:"14px",color:"#666"},children:["Code expires in ",l," seconds"]})]})}},j={render:()=>{const[t,s]=i.useState("");return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Passport Application Verification"}),e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Enter OTP sent to your registered email and mobile"}),e.jsx(c,{length:6,value:t,onChange:s}),e.jsxs("div",{style:{marginTop:"1rem",display:"flex",gap:"0.5rem"},children:[e.jsx("button",{className:"ux4g-button ux4g-button-outline",style:{flex:1},children:"Resend OTP"}),e.jsx("button",{className:"ux4g-button ux4g-button-primary",style:{flex:1},disabled:t.length!==6,children:"Verify"})]})]})}};var C,D,I;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    length: 6
  }
}`,...(I=(D=f.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var L,k,R;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    length: 4
  }
}`,...(R=(k=h.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var q,F,M;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    return <div>
        <h3 style={{
        marginBottom: '0.5rem'
      }}>Enter Aadhaar OTP</h3>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          An OTP has been sent to your registered mobile number
        </p>
        <OTPInput length={6} value={otp} onChange={setOtp} onComplete={value => console.log('OTP Complete:', value)} />
        {otp.length === 6 && <p style={{
        marginTop: '1rem',
        color: 'green'
      }}>
            OTP Entered: {otp}
          </p>}
      </div>;
  }
}`,...(M=(F=y.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var z,_,K;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    return <div>
        <h3 style={{
        marginBottom: '0.5rem'
      }}>Verify Mobile Number</h3>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Enter the 4-digit code sent to +91 98765-43210
        </p>
        <OTPInput length={4} value={otp} onChange={setOtp} type="number" />
        <div style={{
        marginTop: '1rem'
      }}>
          <button className="ux4g-button ux4g-button-ghost">Resend OTP</button>
        </div>
      </div>;
  }
}`,...(K=(_=v.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var U,W,$;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    const [verified, setVerified] = useState(false);
    return <div>
        <h3 style={{
        marginBottom: '0.5rem'
      }}>PAN Card Verification</h3>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Enter OTP to verify your PAN application
        </p>
        <OTPInput length={6} value={otp} onChange={setOtp} onComplete={value => {
        if (value === '123456') {
          setVerified(true);
        }
      }} />
        {verified && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#d4edda',
        borderRadius: '4px'
      }}>
            <span className="ux4g-badge ux4g-badge-success">✓ Verified</span>
            <p style={{
          marginTop: '0.5rem',
          marginBottom: 0
        }}>PAN verification successful</p>
          </div>}
      </div>;
  }
}`,...($=(W=x.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var G,H,J;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    return <div>
        <h3 style={{
        marginBottom: '0.5rem'
      }}>DigiLocker Login</h3>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Enter OTP sent to your Aadhaar-linked mobile
        </p>
        <OTPInput length={6} value={otp} onChange={setOtp} />
        <button className="ux4g-button ux4g-button-primary" style={{
        marginTop: '1rem',
        width: '100%'
      }} disabled={otp.length !== 6}>
          Verify & Login
        </button>
      </div>;
  }
}`,...(J=(H=b.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Y;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(false);
    const handleComplete = (value: string) => {
      if (value !== '123456') {
        setError(true);
      } else {
        setError(false);
      }
    };
    return <div>
        <h3 style={{
        marginBottom: '0.5rem'
      }}>Enter OTP</h3>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Use 123456 for demo (any other will show error)
        </p>
        <OTPInput length={6} value={otp} onChange={value => {
        setOtp(value);
        setError(false);
      }} onComplete={handleComplete} error={error} />
        {error && <p style={{
        marginTop: '0.5rem',
        color: 'red',
        fontSize: '14px'
      }}>
            Invalid OTP. Please try again.
          </p>}
      </div>;
  }
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    length: 6,
    value: '123456',
    disabled: true
  }
}`,...(te=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,se,ne;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    const [timeLeft, setTimeLeft] = useState(60);
    return <div>
        <h3 style={{
        marginBottom: '0.5rem'
      }}>Two-Factor Authentication</h3>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Enter the 6-digit code from your authenticator app
        </p>
        <OTPInput length={6} value={otp} onChange={setOtp} type="number" />
        <p style={{
        marginTop: '1rem',
        fontSize: '14px',
        color: '#666'
      }}>
          Code expires in {timeLeft} seconds
        </p>
      </div>;
  }
}`,...(ne=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,ae,ie;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    return <div>
        <h3 style={{
        marginBottom: '0.5rem'
      }}>Passport Application Verification</h3>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Enter OTP sent to your registered email and mobile
        </p>
        <OTPInput length={6} value={otp} onChange={setOtp} />
        <div style={{
        marginTop: '1rem',
        display: 'flex',
        gap: '0.5rem'
      }}>
          <button className="ux4g-button ux4g-button-outline" style={{
          flex: 1
        }}>
            Resend OTP
          </button>
          <button className="ux4g-button ux4g-button-primary" style={{
          flex: 1
        }} disabled={otp.length !== 6}>
            Verify
          </button>
        </div>
      </div>;
  }
}`,...(ie=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Pe=["Basic","FourDigit","AadhaarOTP","MobileVerification","PANVerification","DigiLockerLogin","WithError","Disabled","TwoFactorAuth","PassportVerification"];export{y as AadhaarOTP,f as Basic,b as DigiLockerLogin,O as Disabled,h as FourDigit,v as MobileVerification,x as PANVerification,j as PassportVerification,P as TwoFactorAuth,T as WithError,Pe as __namedExportsOrder,Oe as default};
