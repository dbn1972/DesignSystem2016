import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as P}from"./index-G8LIXM5I.js";import{I as a}from"./Input-DjEAYoUx.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BaF2GUMg.js";import"./Field.context-i6-YOkUP.js";const Ar={title:"Components/Input",component:a,tags:["autodocs"],argTypes:{label:{control:"text",description:"Input label text"},type:{control:"select",options:["text","email","password","tel","url","search","number"],description:"Input type attribute",table:{defaultValue:{summary:"text"}}},size:{control:"select",options:["sm","md","lg"],description:"Input size",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disables the input"},required:{control:"boolean",description:"Marks field as required"},error:{control:"text",description:"Error message to display"},helperText:{control:"text",description:"Helper text below input"},placeholder:{control:"text",description:"Placeholder text"}},parameters:{docs:{description:{component:`The Input component allows users to enter text data.
It supports various input types, validation states, and accessibility features.

## When to use
- Single-line text entry
- Form fields (email, password, phone, etc.)
- Search inputs
- Number inputs

## When NOT to use
- Multi-line text - use Textarea instead
- Selecting from predefined options - use Select instead
- True/false values - use Checkbox or Switch instead`}}}},i={args:{label:"Full Name",placeholder:"Enter your full name"}},c={args:{type:"email",label:"Email Address",placeholder:"name@example.com",helperText:"We will never share your email"}},p={args:{type:"password",label:"Password",placeholder:"Enter your password",helperText:"Minimum 8 characters"}},d={args:{type:"tel",label:"Mobile Number",placeholder:"+91 98765 43210",helperText:"Enter 10-digit mobile number"}},u={args:{type:"search",label:"Search",placeholder:"Search applications...",iconBefore:"🔍"}},m={args:{label:"Aadhaar Number",required:!0,placeholder:"XXXX XXXX XXXX",helperText:"12-digit Aadhaar number"}},h={args:{label:"PAN Card",value:"ABCD123",error:"Please enter a valid PAN card number (e.g., ABCDE1234F)",placeholder:"ABCDE1234F"}},g={args:{label:"Application ID",value:"APP-2026-12345",disabled:!0,helperText:"Auto-generated ID"}},b={args:{size:"sm",label:"Pin Code",placeholder:"110001"}},x={args:{size:"md",label:"City",placeholder:"New Delhi"}},A={args:{size:"lg",label:"Application Title",placeholder:"Enter title"}},X={args:{label:"Search Applications",iconBefore:"🔍",placeholder:"Search..."}},y={args:{label:"Password",type:"password",iconAfter:"👁️",placeholder:"Enter password"}},v={args:{label:"Address",placeholder:"Enter complete address",fullWidth:!0}},f={render:()=>{const[s,n]=P.useState("");return e.jsxs("div",{children:[e.jsx(a,{label:"Enter your name",value:s,onChange:l=>n(l.target.value),placeholder:"Type something...",helperText:`Character count: ${s.length}`}),e.jsxs("p",{style:{marginTop:"1rem",color:"#6b7280"},children:["Current value: ",e.jsx("strong",{children:s||"(empty)"})]})]})}},E={render:()=>{const[s,n]=P.useState(""),[l,o]=P.useState(""),T=t=>{const r=t.replace(/\s/g,"");if(r.length===0){o("");return}r.length!==12||!/^\d+$/.test(r)?o("Aadhaar number must be 12 digits"):o("")},w=t=>{const r=t.target.value;n(r),T(r)};return e.jsx(a,{label:"Aadhaar Number",value:s,onChange:w,placeholder:"XXXX XXXX XXXX",required:!0,error:l,helperText:"Enter your 12-digit Aadhaar number",maxLength:14})}},C={render:()=>{const[s,n]=P.useState(""),[l,o]=P.useState(""),T=t=>{const r=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;if(t.length===0){o("");return}r.test(t.toUpperCase())?o(""):o("Invalid PAN format (e.g., ABCDE1234F)")},w=t=>{const r=t.target.value.toUpperCase();n(r),T(r)};return e.jsx(a,{label:"PAN Card Number",value:s,onChange:w,placeholder:"ABCDE1234F",required:!0,error:l,helperText:"Permanent Account Number (10 characters)",maxLength:10,style:{textTransform:"uppercase"}})}},S={render:()=>e.jsxs("div",{style:{maxWidth:"600px",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(a,{label:"Full Name",placeholder:"As per Aadhaar",required:!0,helperText:"Enter your complete name"}),e.jsx(a,{type:"email",label:"Email Address",placeholder:"name@example.com",required:!0}),e.jsx(a,{type:"tel",label:"Mobile Number",placeholder:"+91 98765 43210",required:!0,iconBefore:"📱"}),e.jsx(a,{label:"Aadhaar Number",placeholder:"XXXX XXXX XXXX",required:!0,helperText:"12-digit Aadhaar number"}),e.jsx(a,{label:"PAN Card",placeholder:"ABCDE1234F",helperText:"Optional - for income verification",style:{textTransform:"uppercase"}})]})};var N,I,D,B,F;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name'
  }
}`,...(D=(I=i.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"Default text input with label.",...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};var q,W,j,M,z;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'name@example.com',
    helperText: 'We will never share your email'
  }
}`,...(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source},description:{story:"Email input with validation type.",...(z=(M=c.parameters)==null?void 0:M.docs)==null?void 0:z.description}}};var L,R,$,V,G;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Minimum 8 characters'
  }
}`,...($=(R=p.parameters)==null?void 0:R.docs)==null?void 0:$.source},description:{story:"Password input with masked characters.",...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.description}}};var O,U,Z,k,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    label: 'Mobile Number',
    placeholder: '+91 98765 43210',
    helperText: 'Enter 10-digit mobile number'
  }
}`,...(Z=(U=d.parameters)==null?void 0:U.docs)==null?void 0:Z.source},description:{story:"Phone number input.",...(H=(k=d.parameters)==null?void 0:k.docs)==null?void 0:H.description}}};var _,J,K,Q,Y;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'search',
    label: 'Search',
    placeholder: 'Search applications...',
    iconBefore: '🔍'
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Search input for filtering content.",...(Y=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var ee,re,ae,te,se;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Aadhaar Number',
    required: true,
    placeholder: 'XXXX XXXX XXXX',
    helperText: '12-digit Aadhaar number'
  }
}`,...(ae=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ae.source},description:{story:"Required field indicator.",...(se=(te=m.parameters)==null?void 0:te.docs)==null?void 0:se.description}}};var oe,ne,le,ie,ce;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'PAN Card',
    value: 'ABCD123',
    error: 'Please enter a valid PAN card number (e.g., ABCDE1234F)',
    placeholder: 'ABCDE1234F'
  }
}`,...(le=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:le.source},description:{story:"Input with error state and message.",...(ce=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var pe,de,ue,me,he;g.parameters={...g.parameters,docs:{...(pe=g.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    label: 'Application ID',
    value: 'APP-2026-12345',
    disabled: true,
    helperText: 'Auto-generated ID'
  }
}`,...(ue=(de=g.parameters)==null?void 0:de.docs)==null?void 0:ue.source},description:{story:"Disabled input prevents user interaction.",...(he=(me=g.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};var ge,be,xe,Ae,Xe;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Pin Code',
    placeholder: '110001'
  }
}`,...(xe=(be=b.parameters)==null?void 0:be.docs)==null?void 0:xe.source},description:{story:"Small size input for compact layouts.",...(Xe=(Ae=b.parameters)==null?void 0:Ae.docs)==null?void 0:Xe.description}}};var ye,ve,fe,Ee,Ce;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'City',
    placeholder: 'New Delhi'
  }
}`,...(fe=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:"Medium size (default) input.",...(Ce=(Ee=x.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.description}}};var Se,Pe,Te,we,Ne;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Application Title',
    placeholder: 'Enter title'
  }
}`,...(Te=(Pe=A.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source},description:{story:"Large size input for emphasis.",...(Ne=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Ne.description}}};var Ie,De,Be,Fe,qe;X.parameters={...X.parameters,docs:{...(Ie=X.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    label: 'Search Applications',
    iconBefore: '🔍',
    placeholder: 'Search...'
  }
}`,...(Be=(De=X.parameters)==null?void 0:De.docs)==null?void 0:Be.source},description:{story:"Input with icon before text.",...(qe=(Fe=X.parameters)==null?void 0:Fe.docs)==null?void 0:qe.description}}};var We,je,Me,ze,Le;y.parameters={...y.parameters,docs:{...(We=y.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    iconAfter: '👁️',
    placeholder: 'Enter password'
  }
}`,...(Me=(je=y.parameters)==null?void 0:je.docs)==null?void 0:Me.source},description:{story:"Input with icon after text.",...(Le=(ze=y.parameters)==null?void 0:ze.docs)==null?void 0:Le.description}}};var Re,$e,Ve,Ge,Oe;v.parameters={...v.parameters,docs:{...(Re=v.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    label: 'Address',
    placeholder: 'Enter complete address',
    fullWidth: true
  }
}`,...(Ve=($e=v.parameters)==null?void 0:$e.docs)==null?void 0:Ve.source},description:{story:"Full width input spans container width.",...(Oe=(Ge=v.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.description}}};var Ue,Ze,ke,He,_e;f.parameters={...f.parameters,docs:{...(Ue=f.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div>
        <Input label="Enter your name" value={value} onChange={e => setValue(e.target.value)} placeholder="Type something..." helperText={\`Character count: \${value.length}\`} />
        <p style={{
        marginTop: '1rem',
        color: '#6b7280'
      }}>
          Current value: <strong>{value || '(empty)'}</strong>
        </p>
      </div>;
  }
}`,...(ke=(Ze=f.parameters)==null?void 0:Ze.docs)==null?void 0:ke.source},description:{story:"Interactive example showing controlled input with state.",...(_e=(He=f.parameters)==null?void 0:He.docs)==null?void 0:_e.description}}};var Je,Ke,Qe,Ye,er;E.parameters={...E.parameters,docs:{...(Je=E.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => {
    const [aadhaar, setAadhaar] = useState('');
    const [error, setError] = useState('');
    const validateAadhaar = (value: string) => {
      const cleaned = value.replace(/\\s/g, '');
      if (cleaned.length === 0) {
        setError('');
        return;
      }
      if (cleaned.length !== 12 || !/^\\d+$/.test(cleaned)) {
        setError('Aadhaar number must be 12 digits');
      } else {
        setError('');
      }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setAadhaar(value);
      validateAadhaar(value);
    };
    return <Input label="Aadhaar Number" value={aadhaar} onChange={handleChange} placeholder="XXXX XXXX XXXX" required error={error} helperText="Enter your 12-digit Aadhaar number" maxLength={14} // Allow spaces
    />;
  }
}`,...(Qe=(Ke=E.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source},description:{story:"Government form example with Aadhaar input and validation.",...(er=(Ye=E.parameters)==null?void 0:Ye.docs)==null?void 0:er.description}}};var rr,ar,tr,sr,or;C.parameters={...C.parameters,docs:{...(rr=C.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  render: () => {
    const [pan, setPan] = useState('');
    const [error, setError] = useState('');
    const validatePAN = (value: string) => {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (value.length === 0) {
        setError('');
        return;
      }
      if (!panRegex.test(value.toUpperCase())) {
        setError('Invalid PAN format (e.g., ABCDE1234F)');
      } else {
        setError('');
      }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.toUpperCase();
      setPan(value);
      validatePAN(value);
    };
    return <Input label="PAN Card Number" value={pan} onChange={handleChange} placeholder="ABCDE1234F" required error={error} helperText="Permanent Account Number (10 characters)" maxLength={10} style={{
      textTransform: 'uppercase'
    }} />;
  }
}`,...(tr=(ar=C.parameters)==null?void 0:ar.docs)==null?void 0:tr.source},description:{story:"Government form example with PAN card input and validation.",...(or=(sr=C.parameters)==null?void 0:sr.docs)==null?void 0:or.description}}};var nr,lr,ir,cr,pr;S.parameters={...S.parameters,docs:{...(nr=S.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
      <Input label="Full Name" placeholder="As per Aadhaar" required helperText="Enter your complete name" />
      <Input type="email" label="Email Address" placeholder="name@example.com" required />
      <Input type="tel" label="Mobile Number" placeholder="+91 98765 43210" required iconBefore="📱" />
      <Input label="Aadhaar Number" placeholder="XXXX XXXX XXXX" required helperText="12-digit Aadhaar number" />
      <Input label="PAN Card" placeholder="ABCDE1234F" helperText="Optional - for income verification" style={{
      textTransform: 'uppercase'
    }} />
    </div>
}`,...(ir=(lr=S.parameters)==null?void 0:lr.docs)==null?void 0:ir.source},description:{story:"Example of a complete government application form with multiple inputs.",...(pr=(cr=S.parameters)==null?void 0:cr.docs)==null?void 0:pr.description}}};const Xr=["Default","Email","Password","Phone","Search","Required","WithError","Disabled","Small","Medium","Large","WithIconBefore","WithIconAfter","FullWidth","Controlled","AadhaarInput","PANInput","GovernmentForm"];export{E as AadhaarInput,f as Controlled,i as Default,g as Disabled,c as Email,v as FullWidth,S as GovernmentForm,A as Large,x as Medium,C as PANInput,p as Password,d as Phone,m as Required,u as Search,b as Small,h as WithError,y as WithIconAfter,X as WithIconBefore,Xr as __namedExportsOrder,Ar as default};
