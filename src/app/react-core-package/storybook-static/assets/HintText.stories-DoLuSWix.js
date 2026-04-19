import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as r,F as a}from"./Field-Bwhfc77g.js";import{L as t}from"./Label-abw_G-cS.js";import{I as i}from"./Input-DjEAYoUx.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BaF2GUMg.js";import"./Field.context-i6-YOkUP.js";const ie={title:"Components/HintText",component:r,parameters:{layout:"padded",docs:{description:{component:"Helper text component for displaying hints and guidance below form fields."}}},tags:["autodocs"],argTypes:{children:{control:"text",description:"Helper text content",table:{type:{summary:"ReactNode"}}}}},l={args:{children:"Enter your email address"}},s={args:{children:"Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character for security"}},n={args:{children:"Optional"}},d={render:()=>e.jsx("div",{className:"max-w-md",children:e.jsxs(a,{children:[e.jsx(t,{htmlFor:"email-hint",children:"Email Address"}),e.jsx(i,{id:"email-hint",type:"email",placeholder:"you@example.com"}),e.jsx(r,{children:"We'll never share your email with third parties"})]})})},o={name:"Format Guidance Examples",render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs(a,{children:[e.jsx(t,{htmlFor:"phone-format",children:"Phone Number"}),e.jsx(i,{id:"phone-format",type:"tel",placeholder:"9876543210"}),e.jsx(r,{children:"10-digit mobile number without spaces or dashes"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"date-format",children:"Date of Birth"}),e.jsx(i,{id:"date-format",type:"date"}),e.jsx(r,{children:"Format: DD/MM/YYYY"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"username-format",children:"Username"}),e.jsx(i,{id:"username-format",placeholder:"johndoe"}),e.jsx(r,{children:"Only letters, numbers, and underscores. 3-20 characters."})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"file-format",children:"Upload Document"}),e.jsx(i,{id:"file-format",type:"file"}),e.jsx(r,{children:"Accepted formats: PDF, JPG, PNG. Max size: 5MB"})]})]})},c={name:"Government ID Hints",render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs(a,{required:!0,children:[e.jsx(t,{htmlFor:"aadhaar-hint",required:!0,children:"Aadhaar Number"}),e.jsx(i,{id:"aadhaar-hint",placeholder:"1234 5678 9012",maxLength:14}),e.jsx(r,{children:"Enter your 12-digit Aadhaar number. Spaces optional."})]}),e.jsxs(a,{required:!0,children:[e.jsx(t,{htmlFor:"pan-hint",required:!0,children:"PAN Card Number"}),e.jsx(i,{id:"pan-hint",placeholder:"ABCDE1234F",maxLength:10}),e.jsx(r,{children:"Format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"voter-hint",children:"Voter ID"}),e.jsx(i,{id:"voter-hint",placeholder:"ABC1234567"}),e.jsx(r,{children:"3 letters followed by 7 digits"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"passport-hint",children:"Passport Number"}),e.jsx(i,{id:"passport-hint",placeholder:"A1234567"}),e.jsx(r,{children:"1 letter followed by 7 digits"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"license-hint",children:"Driving License"}),e.jsx(i,{id:"license-hint",placeholder:"DL-1234567890123"}),e.jsx(r,{children:"State code followed by license number"})]})]})},m={name:"Privacy & Security Hints",render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs(a,{children:[e.jsx(t,{htmlFor:"email-privacy",children:"Email Address"}),e.jsx(i,{id:"email-privacy",type:"email",placeholder:"you@example.com"}),e.jsx(r,{children:"We'll never share your email with anyone else"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"phone-privacy",children:"Mobile Number"}),e.jsx(i,{id:"phone-privacy",type:"tel",placeholder:"9876543210"}),e.jsx(r,{children:"Used only for OTP verification and important updates"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"password-privacy",children:"Password"}),e.jsx(i,{id:"password-privacy",type:"password"}),e.jsx(r,{children:"Your password is encrypted and cannot be seen by anyone"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"aadhaar-privacy",children:"Aadhaar Number"}),e.jsx(i,{id:"aadhaar-privacy",placeholder:"1234 5678 9012"}),e.jsx(r,{children:"Stored securely in compliance with UIDAI regulations"})]})]})},p={name:"Examples & Context",render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs(a,{children:[e.jsx(t,{htmlFor:"name-example",children:"Full Name"}),e.jsx(i,{id:"name-example",placeholder:"Enter your name"}),e.jsx(r,{children:"As it appears on your Aadhaar card"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"address-example",children:"Permanent Address"}),e.jsx(i,{id:"address-example"}),e.jsx(r,{children:"Example: 123 Main Street, Apartment 4B, Mumbai, Maharashtra 400001"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"income-example",children:"Annual Income"}),e.jsx(i,{id:"income-example",type:"number",placeholder:"500000"}),e.jsx(r,{children:"Enter your total annual income in rupees (₹)"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"occupation-example",children:"Occupation"}),e.jsx(i,{id:"occupation-example",placeholder:"Software Engineer"}),e.jsx(r,{children:"Your current job title or profession"})]})]})},h={name:"Optional Field Hints",render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs(a,{children:[e.jsx(t,{htmlFor:"middle-name",children:"Middle Name"}),e.jsx(i,{id:"middle-name"}),e.jsx(r,{children:"Optional - leave blank if you don't have one"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"alternate-phone",children:"Alternate Phone"}),e.jsx(i,{id:"alternate-phone",type:"tel"}),e.jsx(r,{children:"Optional - for backup contact purposes"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"website",children:"Website"}),e.jsx(i,{id:"website",type:"url",placeholder:"https://example.com"}),e.jsx(r,{children:"Optional"})]})]})},x={name:"Multilingual Hints (Hindi)",render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs(a,{children:[e.jsx(t,{htmlFor:"name-hi",children:"पूरा नाम (Full Name)"}),e.jsx(i,{id:"name-hi",placeholder:"अपना पूरा नाम दर्ज करें"}),e.jsx(r,{children:"जैसा कि आपके आधार कार्ड पर दिखाई देता है (As it appears on your Aadhaar card)"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"mobile-hi",required:!0,children:"मोबाइल नंबर (Mobile Number)"}),e.jsx(i,{id:"mobile-hi",type:"tel",placeholder:"9876543210"}),e.jsx(r,{children:"बिना स्थान या डैश के 10 अंक (10 digits without spaces or dashes)"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"email-hi",children:"ईमेल पता (Email Address)"}),e.jsx(i,{id:"email-hi",type:"email",placeholder:"you@example.com"}),e.jsx(r,{children:"हम आपकी ईमेल किसी के साथ साझा नहीं करेंगे (We'll never share your email)"})]})]})},u={name:"Character Count Hints",render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs(a,{children:[e.jsx(t,{htmlFor:"bio",children:"Bio"}),e.jsx(i,{id:"bio",placeholder:"Tell us about yourself"}),e.jsx(r,{children:"Maximum 160 characters"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"description",children:"Description"}),e.jsx(i,{id:"description"}),e.jsx(r,{children:"0 / 500 characters"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"comment",children:"Comment"}),e.jsx(i,{id:"comment"}),e.jsx(r,{children:"Minimum 10 characters required"})]})]})};var F,b,j;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Enter your email address'
  }
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var y,H,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character for security'
  }
}`,...(v=(H=s.parameters)==null?void 0:H.docs)==null?void 0:v.source}}};var L,T,f;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Optional'
  }
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var g,w,A;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <Field>
        <Label htmlFor="email-hint">Email Address</Label>
        <Input id="email-hint" type="email" placeholder="you@example.com" />
        <HintText>We'll never share your email with third parties</HintText>
      </Field>
    </div>
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var I,N,D;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Format Guidance Examples',
  render: () => <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="phone-format">Phone Number</Label>
        <Input id="phone-format" type="tel" placeholder="9876543210" />
        <HintText>10-digit mobile number without spaces or dashes</HintText>
      </Field>

      <Field>
        <Label htmlFor="date-format">Date of Birth</Label>
        <Input id="date-format" type="date" />
        <HintText>Format: DD/MM/YYYY</HintText>
      </Field>

      <Field>
        <Label htmlFor="username-format">Username</Label>
        <Input id="username-format" placeholder="johndoe" />
        <HintText>Only letters, numbers, and underscores. 3-20 characters.</HintText>
      </Field>

      <Field>
        <Label htmlFor="file-format">Upload Document</Label>
        <Input id="file-format" type="file" />
        <HintText>Accepted formats: PDF, JPG, PNG. Max size: 5MB</HintText>
      </Field>
    </div>
}`,...(D=(N=o.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var E,M,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Government ID Hints',
  render: () => <div className="space-y-6 max-w-md">
      <Field required>
        <Label htmlFor="aadhaar-hint" required>
          Aadhaar Number
        </Label>
        <Input id="aadhaar-hint" placeholder="1234 5678 9012" maxLength={14} />
        <HintText>Enter your 12-digit Aadhaar number. Spaces optional.</HintText>
      </Field>

      <Field required>
        <Label htmlFor="pan-hint" required>
          PAN Card Number
        </Label>
        <Input id="pan-hint" placeholder="ABCDE1234F" maxLength={10} />
        <HintText>Format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)</HintText>
      </Field>

      <Field>
        <Label htmlFor="voter-hint">Voter ID</Label>
        <Input id="voter-hint" placeholder="ABC1234567" />
        <HintText>3 letters followed by 7 digits</HintText>
      </Field>

      <Field>
        <Label htmlFor="passport-hint">Passport Number</Label>
        <Input id="passport-hint" placeholder="A1234567" />
        <HintText>1 letter followed by 7 digits</HintText>
      </Field>

      <Field>
        <Label htmlFor="license-hint">Driving License</Label>
        <Input id="license-hint" placeholder="DL-1234567890123" />
        <HintText>State code followed by license number</HintText>
      </Field>
    </div>
}`,...(S=(M=c.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var P,C,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Privacy & Security Hints',
  render: () => <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="email-privacy">Email Address</Label>
        <Input id="email-privacy" type="email" placeholder="you@example.com" />
        <HintText>We'll never share your email with anyone else</HintText>
      </Field>

      <Field>
        <Label htmlFor="phone-privacy">Mobile Number</Label>
        <Input id="phone-privacy" type="tel" placeholder="9876543210" />
        <HintText>Used only for OTP verification and important updates</HintText>
      </Field>

      <Field>
        <Label htmlFor="password-privacy">Password</Label>
        <Input id="password-privacy" type="password" />
        <HintText>Your password is encrypted and cannot be seen by anyone</HintText>
      </Field>

      <Field>
        <Label htmlFor="aadhaar-privacy">Aadhaar Number</Label>
        <Input id="aadhaar-privacy" placeholder="1234 5678 9012" />
        <HintText>Stored securely in compliance with UIDAI regulations</HintText>
      </Field>
    </div>
}`,...(O=(C=m.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var B,Y,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Examples & Context',
  render: () => <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="name-example">Full Name</Label>
        <Input id="name-example" placeholder="Enter your name" />
        <HintText>As it appears on your Aadhaar card</HintText>
      </Field>

      <Field>
        <Label htmlFor="address-example">Permanent Address</Label>
        <Input id="address-example" />
        <HintText>Example: 123 Main Street, Apartment 4B, Mumbai, Maharashtra 400001</HintText>
      </Field>

      <Field>
        <Label htmlFor="income-example">Annual Income</Label>
        <Input id="income-example" type="number" placeholder="500000" />
        <HintText>Enter your total annual income in rupees (₹)</HintText>
      </Field>

      <Field>
        <Label htmlFor="occupation-example">Occupation</Label>
        <Input id="occupation-example" placeholder="Software Engineer" />
        <HintText>Your current job title or profession</HintText>
      </Field>
    </div>
}`,...(q=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var G,W,U;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Optional Field Hints',
  render: () => <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="middle-name">Middle Name</Label>
        <Input id="middle-name" />
        <HintText>Optional - leave blank if you don't have one</HintText>
      </Field>

      <Field>
        <Label htmlFor="alternate-phone">Alternate Phone</Label>
        <Input id="alternate-phone" type="tel" />
        <HintText>Optional - for backup contact purposes</HintText>
      </Field>

      <Field>
        <Label htmlFor="website">Website</Label>
        <Input id="website" type="url" placeholder="https://example.com" />
        <HintText>Optional</HintText>
      </Field>
    </div>
}`,...(U=(W=h.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var k,R,z;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Multilingual Hints (Hindi)',
  render: () => <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="name-hi">पूरा नाम (Full Name)</Label>
        <Input id="name-hi" placeholder="अपना पूरा नाम दर्ज करें" />
        <HintText>जैसा कि आपके आधार कार्ड पर दिखाई देता है (As it appears on your Aadhaar card)</HintText>
      </Field>

      <Field>
        <Label htmlFor="mobile-hi" required>
          मोबाइल नंबर (Mobile Number)
        </Label>
        <Input id="mobile-hi" type="tel" placeholder="9876543210" />
        <HintText>बिना स्थान या डैश के 10 अंक (10 digits without spaces or dashes)</HintText>
      </Field>

      <Field>
        <Label htmlFor="email-hi">ईमेल पता (Email Address)</Label>
        <Input id="email-hi" type="email" placeholder="you@example.com" />
        <HintText>हम आपकी ईमेल किसी के साथ साझा नहीं करेंगे (We'll never share your email)</HintText>
      </Field>
    </div>
}`,...(z=(R=x.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var J,V,_;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Character Count Hints',
  render: () => <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="bio">Bio</Label>
        <Input id="bio" placeholder="Tell us about yourself" />
        <HintText>Maximum 160 characters</HintText>
      </Field>

      <Field>
        <Label htmlFor="description">Description</Label>
        <Input id="description" />
        <HintText>0 / 500 characters</HintText>
      </Field>

      <Field>
        <Label htmlFor="comment">Comment</Label>
        <Input id="comment" />
        <HintText>Minimum 10 characters required</HintText>
      </Field>
    </div>
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const le=["Default","LongHint","ShortHint","WithInput","FormatGuidance","GovernmentIDHints","PrivacyReassurance","ExamplesAndContext","OptionalFields","MultilingualHints","CharacterCounts"];export{u as CharacterCounts,l as Default,p as ExamplesAndContext,o as FormatGuidance,c as GovernmentIDHints,s as LongHint,x as MultilingualHints,h as OptionalFields,m as PrivacyReassurance,n as ShortHint,d as WithInput,le as __namedExportsOrder,ie as default};
