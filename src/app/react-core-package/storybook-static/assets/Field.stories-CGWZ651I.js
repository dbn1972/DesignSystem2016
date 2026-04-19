import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as r,H as a,E as R}from"./Field-Bwhfc77g.js";import{L as i}from"./Label-abw_G-cS.js";import{I as d}from"./Input-DjEAYoUx.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BaF2GUMg.js";import"./Field.context-i6-YOkUP.js";const K={title:"Components/Field",component:r,parameters:{layout:"padded",docs:{description:{component:"Field component for composing form fields with labels, inputs, and helper/error text."}}},tags:["autodocs"],argTypes:{error:{control:"boolean",description:"Whether the field is in an error state",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},required:{control:"boolean",description:"Whether the field is required",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Whether the field is disabled",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},l={render:()=>e.jsxs(r,{children:[e.jsx(i,{htmlFor:"name",children:"Full Name"}),e.jsx(d,{id:"name",placeholder:"Enter your full name"}),e.jsx(a,{children:"As it appears on your official documents"})]})},t={render:()=>e.jsxs(r,{required:!0,children:[e.jsx(i,{htmlFor:"email",required:!0,children:"Email Address"}),e.jsx(d,{id:"email",type:"email",placeholder:"you@example.com",required:!0}),e.jsx(a,{children:"We'll never share your email with third parties"})]})},s={render:()=>e.jsxs(r,{error:!0,children:[e.jsx(i,{htmlFor:"phone",children:"Phone Number"}),e.jsx(d,{id:"phone",type:"tel",value:"123",error:!0}),e.jsx(R,{children:"Phone number must be 10 digits"})]})},o={render:()=>e.jsxs(r,{disabled:!0,children:[e.jsx(i,{htmlFor:"id",disabled:!0,children:"Application ID"}),e.jsx(d,{id:"id",value:"APP-2026-001234",disabled:!0}),e.jsx(a,{children:"Auto-generated and cannot be changed"})]})},n={name:"Aadhaar Number Field",render:()=>e.jsxs(r,{required:!0,children:[e.jsx(i,{htmlFor:"aadhaar",required:!0,children:"Aadhaar Number"}),e.jsx(d,{id:"aadhaar",type:"text",placeholder:"1234 5678 9012",maxLength:14,required:!0}),e.jsx(a,{children:"Enter your 12-digit Aadhaar number"})]})},m={name:"PAN Card Field",render:()=>e.jsxs(r,{required:!0,children:[e.jsx(i,{htmlFor:"pan",required:!0,children:"PAN Card Number"}),e.jsx(d,{id:"pan",type:"text",placeholder:"ABCDE1234F",maxLength:10,style:{textTransform:"uppercase"},required:!0}),e.jsx(a,{children:"Format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)"})]})},u={name:"Complete Form",render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Citizen Registration Form"}),e.jsxs(r,{required:!0,children:[e.jsx(i,{htmlFor:"fullname",required:!0,children:"Full Name"}),e.jsx(d,{id:"fullname",placeholder:"Enter your full name",required:!0}),e.jsx(a,{children:"As per Aadhaar card"})]}),e.jsxs(r,{required:!0,children:[e.jsx(i,{htmlFor:"email-form",required:!0,children:"Email Address"}),e.jsx(d,{id:"email-form",type:"email",placeholder:"you@example.com",required:!0}),e.jsx(a,{children:"For official communications"})]}),e.jsxs(r,{required:!0,children:[e.jsx(i,{htmlFor:"phone-form",required:!0,children:"Mobile Number"}),e.jsx(d,{id:"phone-form",type:"tel",placeholder:"9876543210",maxLength:10,required:!0}),e.jsx(a,{children:"10-digit mobile number"})]}),e.jsxs(r,{children:[e.jsx(i,{htmlFor:"address",children:"Address"}),e.jsx(d,{id:"address",placeholder:"Enter your address"}),e.jsx(a,{children:"Optional"})]})]})},c={name:"All Validation States",render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs(r,{children:[e.jsx(i,{htmlFor:"valid",children:"Valid Field"}),e.jsx(d,{id:"valid",value:"Valid input"}),e.jsx(a,{children:"This field is filled correctly"})]}),e.jsxs(r,{error:!0,children:[e.jsx(i,{htmlFor:"error-field",children:"Field with Error"}),e.jsx(d,{id:"error-field",value:"Invalid",error:!0}),e.jsx(R,{children:"This value is not acceptable"})]}),e.jsxs(r,{required:!0,children:[e.jsx(i,{htmlFor:"required-field",required:!0,children:"Required Field"}),e.jsx(d,{id:"required-field",placeholder:"This field is required",required:!0}),e.jsx(a,{children:"Please provide a value"})]}),e.jsxs(r,{disabled:!0,children:[e.jsx(i,{htmlFor:"disabled-field",disabled:!0,children:"Disabled Field"}),e.jsx(d,{id:"disabled-field",value:"Cannot edit",disabled:!0}),e.jsx(a,{children:"This field cannot be modified"})]})]})};var h,p,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Field>
      <Label htmlFor="name">Full Name</Label>
      <Input id="name" placeholder="Enter your full name" />
      <HintText>As it appears on your official documents</HintText>
    </Field>
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var F,b,f;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Field required>
      <Label htmlFor="email" required>
        Email Address
      </Label>
      <Input id="email" type="email" placeholder="you@example.com" required />
      <HintText>We'll never share your email with third parties</HintText>
    </Field>
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,q,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Field error>
      <Label htmlFor="phone">Phone Number</Label>
      <Input id="phone" type="tel" value="123" error />
      <ErrorText>Phone number must be 10 digits</ErrorText>
    </Field>
}`,...(y=(q=s.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var T,A,L;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Field disabled>
      <Label htmlFor="id" disabled>
        Application ID
      </Label>
      <Input id="id" value="APP-2026-001234" disabled />
      <HintText>Auto-generated and cannot be changed</HintText>
    </Field>
}`,...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var g,v,E;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Aadhaar Number Field',
  render: () => <Field required>
      <Label htmlFor="aadhaar" required>
        Aadhaar Number
      </Label>
      <Input id="aadhaar" type="text" placeholder="1234 5678 9012" maxLength={14} required />
      <HintText>Enter your 12-digit Aadhaar number</HintText>
    </Field>
}`,...(E=(v=n.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var H,N,I;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'PAN Card Field',
  render: () => <Field required>
      <Label htmlFor="pan" required>
        PAN Card Number
      </Label>
      <Input id="pan" type="text" placeholder="ABCDE1234F" maxLength={10} style={{
      textTransform: 'uppercase'
    }} required />
      <HintText>Format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)</HintText>
    </Field>
}`,...(I=(N=m.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var P,C,D;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Complete Form',
  render: () => <div className="space-y-6 max-w-md">
      <h3 className="text-lg font-medium">Citizen Registration Form</h3>

      <Field required>
        <Label htmlFor="fullname" required>
          Full Name
        </Label>
        <Input id="fullname" placeholder="Enter your full name" required />
        <HintText>As per Aadhaar card</HintText>
      </Field>

      <Field required>
        <Label htmlFor="email-form" required>
          Email Address
        </Label>
        <Input id="email-form" type="email" placeholder="you@example.com" required />
        <HintText>For official communications</HintText>
      </Field>

      <Field required>
        <Label htmlFor="phone-form" required>
          Mobile Number
        </Label>
        <Input id="phone-form" type="tel" placeholder="9876543210" maxLength={10} required />
        <HintText>10-digit mobile number</HintText>
      </Field>

      <Field>
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="Enter your address" />
        <HintText>Optional</HintText>
      </Field>
    </div>
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,V,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'All Validation States',
  render: () => <div className="space-y-6">
      <Field>
        <Label htmlFor="valid">Valid Field</Label>
        <Input id="valid" value="Valid input" />
        <HintText>This field is filled correctly</HintText>
      </Field>

      <Field error>
        <Label htmlFor="error-field">Field with Error</Label>
        <Input id="error-field" value="Invalid" error />
        <ErrorText>This value is not acceptable</ErrorText>
      </Field>

      <Field required>
        <Label htmlFor="required-field" required>
          Required Field
        </Label>
        <Input id="required-field" placeholder="This field is required" required />
        <HintText>Please provide a value</HintText>
      </Field>

      <Field disabled>
        <Label htmlFor="disabled-field" disabled>
          Disabled Field
        </Label>
        <Input id="disabled-field" value="Cannot edit" disabled />
        <HintText>This field cannot be modified</HintText>
      </Field>
    </div>
}`,...(w=(V=c.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const Q=["Default","Required","WithError","Disabled","AadhaarField","PANField","FormExample","ValidationStates"];export{n as AadhaarField,l as Default,o as Disabled,u as FormExample,m as PANField,t as Required,c as ValidationStates,s as WithError,Q as __namedExportsOrder,K as default};
