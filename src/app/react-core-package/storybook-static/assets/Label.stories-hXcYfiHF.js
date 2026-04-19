import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{L as r}from"./Label-abw_G-cS.js";import{I as a}from"./Input-DjEAYoUx.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BaF2GUMg.js";import"./Field.context-i6-YOkUP.js";const T={title:"Components/Label",component:r,parameters:{layout:"padded",docs:{description:{component:"Label component for form fields with required indicator and disabled state support."}}},tags:["autodocs"],argTypes:{required:{control:"boolean",description:"Show required indicator (*)",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Whether the label is disabled",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},htmlFor:{control:"text",description:"ID of the associated form element",table:{type:{summary:"string"}}}}},i={args:{children:"Email Address",htmlFor:"email-default"},render:d=>e.jsxs("div",{children:[e.jsx(r,{...d}),e.jsx(a,{id:"email-default",type:"email",placeholder:"you@example.com"})]})},s={args:{children:"Full Name",htmlFor:"name-required",required:!0},render:d=>e.jsxs("div",{children:[e.jsx(r,{...d}),e.jsx(a,{id:"name-required",placeholder:"Enter your name",required:!0})]})},l={args:{children:"Application ID",htmlFor:"app-id",disabled:!0},render:d=>e.jsxs("div",{children:[e.jsx(r,{...d}),e.jsx(a,{id:"app-id",value:"APP-2026-001234",disabled:!0})]})},t={args:{children:"Permanent Residential Address as per Aadhaar Card",htmlFor:"address-long",required:!0},render:d=>e.jsxs("div",{className:"max-w-md",children:[e.jsx(r,{...d}),e.jsx(a,{id:"address-long",placeholder:"Enter your address"})]})},o={name:"All Label States",render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(r,{htmlFor:"state-1",children:"Normal Label"}),e.jsx(a,{id:"state-1",placeholder:"Normal input"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"state-2",required:!0,children:"Required Label"}),e.jsx(a,{id:"state-2",placeholder:"Required input",required:!0})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"state-3",disabled:!0,children:"Disabled Label"}),e.jsx(a,{id:"state-3",value:"Disabled input",disabled:!0})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"state-4",required:!0,disabled:!0,children:"Required + Disabled"}),e.jsx(a,{id:"state-4",value:"Value",disabled:!0})]})]})},n={name:"Government Form Labels",render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs("div",{children:[e.jsx(r,{htmlFor:"aadhaar",required:!0,children:"Aadhaar Number"}),e.jsx(a,{id:"aadhaar",placeholder:"1234 5678 9012",maxLength:14,required:!0})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"pan",required:!0,children:"PAN Card Number"}),e.jsx(a,{id:"pan",placeholder:"ABCDE1234F",maxLength:10,required:!0})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"voter",children:"Voter ID (Optional)"}),e.jsx(a,{id:"voter",placeholder:"ABC1234567"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"passport",children:"Passport Number (Optional)"}),e.jsx(a,{id:"passport",placeholder:"A1234567"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"driving",children:"Driving License Number (Optional)"}),e.jsx(a,{id:"driving",placeholder:"DL-1234567890123"})]})]})},m={name:"Multilingual Labels (Hindi)",render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(r,{htmlFor:"name-hi",required:!0,children:"पूरा नाम (Full Name)"}),e.jsx(a,{id:"name-hi",placeholder:"अपना पूरा नाम दर्ज करें",required:!0})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"mobile-hi",required:!0,children:"मोबाइल नंबर (Mobile Number)"}),e.jsx(a,{id:"mobile-hi",type:"tel",placeholder:"9876543210",required:!0})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"address-hi",children:"पता (Address)"}),e.jsx(a,{id:"address-hi",placeholder:"अपना पता दर्ज करें"})]})]})};var u,c,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Email Address',
    htmlFor: 'email-default'
  },
  render: args => <div>
      <Label {...args} />
      <Input id="email-default" type="email" placeholder="you@example.com" />
    </div>
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,b,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Full Name',
    htmlFor: 'name-required',
    required: true
  },
  render: args => <div>
      <Label {...args} />
      <Input id="name-required" placeholder="Enter your name" required />
    </div>
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,L,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Application ID',
    htmlFor: 'app-id',
    disabled: true
  },
  render: args => <div>
      <Label {...args} />
      <Input id="app-id" value="APP-2026-001234" disabled />
    </div>
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var g,q,F;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Permanent Residential Address as per Aadhaar Card',
    htmlFor: 'address-long',
    required: true
  },
  render: args => <div className="max-w-md">
      <Label {...args} />
      <Input id="address-long" placeholder="Enter your address" />
    </div>
}`,...(F=(q=t.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var N,y,A;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'All Label States',
  render: () => <div className="space-y-6">
      <div>
        <Label htmlFor="state-1">Normal Label</Label>
        <Input id="state-1" placeholder="Normal input" />
      </div>

      <div>
        <Label htmlFor="state-2" required>
          Required Label
        </Label>
        <Input id="state-2" placeholder="Required input" required />
      </div>

      <div>
        <Label htmlFor="state-3" disabled>
          Disabled Label
        </Label>
        <Input id="state-3" value="Disabled input" disabled />
      </div>

      <div>
        <Label htmlFor="state-4" required disabled>
          Required + Disabled
        </Label>
        <Input id="state-4" value="Value" disabled />
      </div>
    </div>
}`,...(A=(y=o.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var I,D,f;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Government Form Labels',
  render: () => <div className="space-y-6 max-w-md">
      <div>
        <Label htmlFor="aadhaar" required>
          Aadhaar Number
        </Label>
        <Input id="aadhaar" placeholder="1234 5678 9012" maxLength={14} required />
      </div>

      <div>
        <Label htmlFor="pan" required>
          PAN Card Number
        </Label>
        <Input id="pan" placeholder="ABCDE1234F" maxLength={10} required />
      </div>

      <div>
        <Label htmlFor="voter">Voter ID (Optional)</Label>
        <Input id="voter" placeholder="ABC1234567" />
      </div>

      <div>
        <Label htmlFor="passport">Passport Number (Optional)</Label>
        <Input id="passport" placeholder="A1234567" />
      </div>

      <div>
        <Label htmlFor="driving">Driving License Number (Optional)</Label>
        <Input id="driving" placeholder="DL-1234567890123" />
      </div>
    </div>
}`,...(f=(D=n.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var S,R,E;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Multilingual Labels (Hindi)',
  render: () => <div className="space-y-6">
      <div>
        <Label htmlFor="name-hi" required>
          पूरा नाम (Full Name)
        </Label>
        <Input id="name-hi" placeholder="अपना पूरा नाम दर्ज करें" required />
      </div>

      <div>
        <Label htmlFor="mobile-hi" required>
          मोबाइल नंबर (Mobile Number)
        </Label>
        <Input id="mobile-hi" type="tel" placeholder="9876543210" required />
      </div>

      <div>
        <Label htmlFor="address-hi">
          पता (Address)
        </Label>
        <Input id="address-hi" placeholder="अपना पता दर्ज करें" />
      </div>
    </div>
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const H=["Default","Required","Disabled","LongText","AllStates","GovernmentForm","Multilingual"];export{o as AllStates,i as Default,l as Disabled,n as GovernmentForm,t as LongText,m as Multilingual,s as Required,H as __namedExportsOrder,T as default};
