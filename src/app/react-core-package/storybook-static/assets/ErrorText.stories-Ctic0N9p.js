import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{E as e,F as a}from"./Field-Bwhfc77g.js";import{L as s}from"./Label-abw_G-cS.js";import{I as t}from"./Input-DjEAYoUx.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BaF2GUMg.js";import"./Field.context-i6-YOkUP.js";const X={title:"Components/ErrorText",component:e,parameters:{layout:"padded",docs:{description:{component:"Error message component for displaying validation errors in forms. Includes accessibility attributes for screen readers."}}},tags:["autodocs"],argTypes:{children:{control:"text",description:"Error message text",table:{type:{summary:"ReactNode"}}}}},i={args:{children:"This field is required"}},o={args:{children:"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"}},l={args:{children:"Invalid format"}},d={render:()=>r.jsx("div",{className:"max-w-md",children:r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"email-error",children:"Email Address"}),r.jsx(t,{id:"email-error",type:"email",value:"invalid-email",error:!0}),r.jsx(e,{children:"Please enter a valid email address"})]})})},n={name:"Common Validation Errors",render:()=>r.jsxs("div",{className:"space-y-6 max-w-md",children:[r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"required-field",children:"Full Name"}),r.jsx(t,{id:"required-field",error:!0}),r.jsx(e,{children:"This field is required"})]}),r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"email-field",children:"Email"}),r.jsx(t,{id:"email-field",value:"notanemail",error:!0}),r.jsx(e,{children:"Please enter a valid email address"})]}),r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"phone-field",children:"Phone Number"}),r.jsx(t,{id:"phone-field",type:"tel",value:"123",error:!0}),r.jsx(e,{children:"Phone number must be exactly 10 digits"})]}),r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"password-field",children:"Password"}),r.jsx(t,{id:"password-field",type:"password",value:"weak",error:!0}),r.jsx(e,{children:"Password must be at least 8 characters"})]}),r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"number-field",children:"Age"}),r.jsx(t,{id:"number-field",type:"number",value:"150",error:!0}),r.jsx(e,{children:"Age must be between 1 and 120"})]})]})},m={name:"Government ID Validation Errors",render:()=>r.jsxs("div",{className:"space-y-6 max-w-md",children:[r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"aadhaar-error",required:!0,children:"Aadhaar Number"}),r.jsx(t,{id:"aadhaar-error",value:"1234",error:!0}),r.jsx(e,{children:"Aadhaar number must be exactly 12 digits"})]}),r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"pan-error",required:!0,children:"PAN Card Number"}),r.jsx(t,{id:"pan-error",value:"ABC123",error:!0}),r.jsx(e,{children:"PAN must be in format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)"})]}),r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"voter-error",children:"Voter ID"}),r.jsx(t,{id:"voter-error",value:"ABC",error:!0}),r.jsx(e,{children:"Voter ID must be 10 characters (3 letters + 7 digits)"})]}),r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"passport-error",children:"Passport Number"}),r.jsx(t,{id:"passport-error",value:"123",error:!0}),r.jsx(e,{children:"Passport number must start with a letter followed by 7 digits"})]})]})},u={name:"Server-Side Errors",render:()=>r.jsxs("div",{className:"space-y-6 max-w-md",children:[r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"email-taken",children:"Email Address"}),r.jsx(t,{id:"email-taken",value:"existing@example.com",error:!0}),r.jsx(e,{children:"This email address is already registered"})]}),r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"username-taken",children:"Username"}),r.jsx(t,{id:"username-taken",value:"admin",error:!0}),r.jsx(e,{children:"This username is not available"})]}),r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"network-error",children:"Application Number"}),r.jsx(t,{id:"network-error",error:!0}),r.jsx(e,{children:"Unable to verify application number. Please try again."})]}),r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"rate-limit",children:"OTP"}),r.jsx(t,{id:"rate-limit",type:"text",maxLength:6,error:!0}),r.jsx(e,{children:"Too many attempts. Please wait 5 minutes before trying again."})]})]})},c={name:"Multiple Errors on One Field",render:()=>r.jsx("div",{className:"max-w-md",children:r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"multi-error",required:!0,children:"Password"}),r.jsx(t,{id:"multi-error",type:"password",value:"abc",error:!0}),r.jsxs("div",{className:"space-y-1",children:[r.jsx(e,{children:"Password is too short (minimum 8 characters)"}),r.jsx(e,{children:"Password must include at least one number"}),r.jsx(e,{children:"Password must include at least one uppercase letter"})]})]})})},h={name:"Multilingual Errors (Hindi)",render:()=>r.jsxs("div",{className:"space-y-6 max-w-md",children:[r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"name-hi",required:!0,children:"पूरा नाम (Full Name)"}),r.jsx(t,{id:"name-hi",error:!0}),r.jsx(e,{children:"यह फ़ील्ड आवश्यक है (This field is required)"})]}),r.jsxs(a,{error:!0,children:[r.jsx(s,{htmlFor:"mobile-hi",required:!0,children:"मोबाइल नंबर (Mobile Number)"}),r.jsx(t,{id:"mobile-hi",value:"123",error:!0}),r.jsx(e,{children:"मोबाइल नंबर 10 अंकों का होना चाहिए (Mobile number must be 10 digits)"})]})]})};var p,x,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'This field is required'
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,F,E;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character'
  }
}`,...(E=(F=o.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var v,g,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Invalid format'
  }
}`,...(T=(g=l.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var w,f,y;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <Field error>
        <Label htmlFor="email-error">Email Address</Label>
        <Input id="email-error" type="email" value="invalid-email" error />
        <ErrorText>Please enter a valid email address</ErrorText>
      </Field>
    </div>
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var L,P,N;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Common Validation Errors',
  render: () => <div className="space-y-6 max-w-md">
      <Field error>
        <Label htmlFor="required-field">Full Name</Label>
        <Input id="required-field" error />
        <ErrorText>This field is required</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="email-field">Email</Label>
        <Input id="email-field" value="notanemail" error />
        <ErrorText>Please enter a valid email address</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="phone-field">Phone Number</Label>
        <Input id="phone-field" type="tel" value="123" error />
        <ErrorText>Phone number must be exactly 10 digits</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="password-field">Password</Label>
        <Input id="password-field" type="password" value="weak" error />
        <ErrorText>Password must be at least 8 characters</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="number-field">Age</Label>
        <Input id="number-field" type="number" value="150" error />
        <ErrorText>Age must be between 1 and 120</ErrorText>
      </Field>
    </div>
}`,...(N=(P=n.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var I,A,q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Government ID Validation Errors',
  render: () => <div className="space-y-6 max-w-md">
      <Field error>
        <Label htmlFor="aadhaar-error" required>
          Aadhaar Number
        </Label>
        <Input id="aadhaar-error" value="1234" error />
        <ErrorText>Aadhaar number must be exactly 12 digits</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="pan-error" required>
          PAN Card Number
        </Label>
        <Input id="pan-error" value="ABC123" error />
        <ErrorText>PAN must be in format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="voter-error">Voter ID</Label>
        <Input id="voter-error" value="ABC" error />
        <ErrorText>Voter ID must be 10 characters (3 letters + 7 digits)</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="passport-error">Passport Number</Label>
        <Input id="passport-error" value="123" error />
        <ErrorText>Passport number must start with a letter followed by 7 digits</ErrorText>
      </Field>
    </div>
}`,...(q=(A=m.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var S,k,M;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Server-Side Errors',
  render: () => <div className="space-y-6 max-w-md">
      <Field error>
        <Label htmlFor="email-taken">Email Address</Label>
        <Input id="email-taken" value="existing@example.com" error />
        <ErrorText>This email address is already registered</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="username-taken">Username</Label>
        <Input id="username-taken" value="admin" error />
        <ErrorText>This username is not available</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="network-error">Application Number</Label>
        <Input id="network-error" error />
        <ErrorText>Unable to verify application number. Please try again.</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="rate-limit">OTP</Label>
        <Input id="rate-limit" type="text" maxLength={6} error />
        <ErrorText>Too many attempts. Please wait 5 minutes before trying again.</ErrorText>
      </Field>
    </div>
}`,...(M=(k=u.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var D,C,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Multiple Errors on One Field',
  render: () => <div className="max-w-md">
      <Field error>
        <Label htmlFor="multi-error" required>
          Password
        </Label>
        <Input id="multi-error" type="password" value="abc" error />
        <div className="space-y-1">
          <ErrorText>Password is too short (minimum 8 characters)</ErrorText>
          <ErrorText>Password must include at least one number</ErrorText>
          <ErrorText>Password must include at least one uppercase letter</ErrorText>
        </div>
      </Field>
    </div>
}`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var B,O,G;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Multilingual Errors (Hindi)',
  render: () => <div className="space-y-6 max-w-md">
      <Field error>
        <Label htmlFor="name-hi" required>
          पूरा नाम (Full Name)
        </Label>
        <Input id="name-hi" error />
        <ErrorText>यह फ़ील्ड आवश्यक है (This field is required)</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="mobile-hi" required>
          मोबाइल नंबर (Mobile Number)
        </Label>
        <Input id="mobile-hi" value="123" error />
        <ErrorText>मोबाइल नंबर 10 अंकों का होना चाहिए (Mobile number must be 10 digits)</ErrorText>
      </Field>
    </div>
}`,...(G=(O=h.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const Y=["Default","LongMessage","ShortMessage","WithInput","ValidationErrors","GovernmentIDErrors","ServerErrors","MultipleErrors","ErrorsInHindi"];export{i as Default,h as ErrorsInHindi,m as GovernmentIDErrors,o as LongMessage,c as MultipleErrors,u as ServerErrors,l as ShortMessage,n as ValidationErrors,d as WithInput,Y as __namedExportsOrder,X as default};
