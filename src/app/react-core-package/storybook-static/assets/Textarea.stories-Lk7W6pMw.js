import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as A}from"./index-G8LIXM5I.js";import{c as Ze}from"./cn-BaF2GUMg.js";import{u as er}from"./Field.context-i6-YOkUP.js";import{F as a,H as d,E as D}from"./Field-Bwhfc77g.js";import{L as t}from"./Label-abw_G-cS.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function rr(...s){const o=s.flatMap(i=>i?i.split(" "):[]).filter(Boolean);return o.length>0?Array.from(new Set(o)).join(" "):void 0}const r=A.forwardRef(({id:s,name:o,className:i,placeholder:n,disabled:c,required:z,error:Oe,readOnly:R=!1,size:He="md",fullWidth:Me=!1,resize:Pe=!0,rows:Be=4,"aria-label":$e,"aria-labelledby":Ye,"aria-describedby":Ue,"aria-invalid":Ge,...Je},Ke)=>{const l=er(),Qe=s??(l==null?void 0:l.inputId),V=c??(l==null?void 0:l.disabled)??!1,C=z??(l==null?void 0:l.required)??!1,k=Oe??(l==null?void 0:l.invalid)??!1,Xe=rr(Ue,l==null?void 0:l.describedBy);return e.jsx("textarea",{ref:Ke,id:Qe,name:o,className:Ze("ux4g-textarea",`ux4g-textarea-${He}`,V&&"ux4g-textarea-disabled",k&&"ux4g-textarea-error",R&&"ux4g-textarea-readonly",Me&&"ux4g-textarea-fullwidth",!Pe&&"ux4g-textarea-noresize",i),placeholder:n,disabled:V,required:C,readOnly:R,rows:Be,"aria-label":$e,"aria-labelledby":Ye,"aria-describedby":Xe,"aria-invalid":Ge??k,"aria-required":C,...Je})});r.displayName="Textarea";r.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled
@default false`},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by reference"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by reference"},name:{required:!1,tsType:{name:"string"},description:"Field name for form submission"},id:{required:!1,tsType:{name:"string"},description:"Field ID (links label to input)"},required:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Whether the field is read-only
@default false`,defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:`Error state indicator
@default false`},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"ARIA invalid state"},"aria-required":{required:!1,tsType:{name:"boolean"},description:"ARIA required state"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Textarea size variant",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Whether to show full width
@default false`,defaultValue:{value:"false",computed:!1}},resize:{required:!1,tsType:{name:"boolean"},description:`Whether to allow resizing
@default true`,defaultValue:{value:"true",computed:!1}},rows:{defaultValue:{value:"4",computed:!1},required:!1}},composes:["Omit"]};const cr={title:"Components/Textarea",component:r,parameters:{layout:"padded",docs:{description:{component:"Textarea component for entering multi-line text. Use for longer text inputs like descriptions, comments, or addresses."}}},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text",table:{type:{summary:"string"}}},rows:{control:"number",description:"Number of visible text rows",table:{defaultValue:{summary:"4"},type:{summary:"number"}}},size:{control:"select",options:["sm","md","lg"],description:"Textarea size",table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},disabled:{control:"boolean",description:"Whether the textarea is disabled",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},required:{control:"boolean",description:"Whether the textarea is required",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},error:{control:"boolean",description:"Error state",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},readOnly:{control:"boolean",description:"Whether the textarea is read-only",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},fullWidth:{control:"boolean",description:"Full width textarea",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},resize:{control:"boolean",description:"Allow resizing",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},maxLength:{control:"number",description:"Maximum character length",table:{type:{summary:"number"}}}}},m={args:{id:"default",placeholder:"Enter your text here..."}},u={args:{id:"small",size:"sm",placeholder:"Small textarea",rows:3}},p={args:{id:"medium",size:"md",placeholder:"Medium textarea (default)",rows:4}},h={args:{id:"large",size:"lg",placeholder:"Large textarea",rows:6}},x={args:{id:"disabled",placeholder:"This textarea is disabled",disabled:!0,defaultValue:"Some pre-filled text"}},g={args:{id:"readonly",readOnly:!0,defaultValue:"This text is read-only and cannot be edited."}},b={render:()=>e.jsxs(a,{error:!0,children:[e.jsx(t,{htmlFor:"error-textarea",children:"Comments"}),e.jsx(r,{id:"error-textarea",placeholder:"Enter your comments",error:!0}),e.jsx(D,{children:"Comments are required (minimum 10 characters)"})]})},f={args:{id:"fullwidth",fullWidth:!0,placeholder:"Full width textarea"}},y={args:{id:"noresize",resize:!1,placeholder:"This textarea cannot be resized",rows:4}},F={render:()=>{const[s,o]=A.useState(""),i=200;return e.jsxs(a,{children:[e.jsx(t,{htmlFor:"maxlength",children:"Bio"}),e.jsx(r,{id:"maxlength",value:s,onChange:n=>o(n.target.value),placeholder:"Tell us about yourself...",maxLength:i,rows:4,fullWidth:!0}),e.jsxs(d,{children:[s.length," / ",i," characters"]})]})}},w={render:()=>{const[s,o]=A.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(a,{children:[e.jsx(t,{htmlFor:"controlled",children:"Your Message"}),e.jsx(r,{id:"controlled",value:s,onChange:i=>o(i.target.value),placeholder:"Type your message...",rows:5,fullWidth:!0}),e.jsxs(d,{children:[s.length," characters"]})]}),e.jsx("button",{onClick:()=>o(""),className:"px-4 py-2 bg-primary text-primary-foreground rounded text-sm",children:"Clear"})]})}},v={name:"Address Input",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsxs(a,{required:!0,children:[e.jsx(t,{htmlFor:"address",required:!0,children:"Permanent Address"}),e.jsx(r,{id:"address",placeholder:"Enter your complete address including street, city, state, and PIN code",rows:5,required:!0,fullWidth:!0}),e.jsx(d,{children:"As per your Aadhaar card"})]})})},j={name:"Complaint Description",render:()=>{const[s,o]=A.useState(""),i=50,n=500,c=s.length>=i;return e.jsxs("div",{className:"max-w-2xl space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"File a Complaint"}),e.jsxs(a,{error:!c&&s.length>0,required:!0,children:[e.jsx(t,{htmlFor:"complaint",required:!0,children:"Complaint Description"}),e.jsx(r,{id:"complaint",value:s,onChange:z=>o(z.target.value),placeholder:"Describe your complaint in detail...",rows:8,maxLength:n,required:!0,fullWidth:!0,error:!c&&s.length>0}),!c&&s.length>0?e.jsxs(D,{children:["Description must be at least ",i," characters (current: ",s.length,")"]}):e.jsxs(d,{children:[s.length," / ",n," characters (minimum ",i," required)"]})]}),e.jsx("button",{disabled:!c,className:"px-6 py-2 bg-primary text-primary-foreground rounded disabled:opacity-50 disabled:cursor-not-allowed",children:"Submit Complaint"})]})}},T={name:"Service Feedback",render:()=>e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Service Feedback"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Help us improve our services by sharing your experience"}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"positive",children:"What did you like?"}),e.jsx(r,{id:"positive",placeholder:"Tell us what went well...",rows:3,fullWidth:!0})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"improve",children:"What can we improve?"}),e.jsx(r,{id:"improve",placeholder:"Suggest improvements...",rows:3,fullWidth:!0})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"additional",children:"Additional Comments"}),e.jsx(r,{id:"additional",placeholder:"Any other feedback...",rows:3,fullWidth:!0}),e.jsx(d,{children:"Optional"})]})]})},L={name:"Application Reason",render:()=>e.jsxs("div",{className:"max-w-2xl space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Scholarship Application"}),e.jsxs(a,{required:!0,children:[e.jsx(t,{htmlFor:"reason",required:!0,children:"Why are you applying for this scholarship?"}),e.jsx(r,{id:"reason",placeholder:"Explain your reasons for applying...",rows:6,maxLength:1e3,required:!0,fullWidth:!0}),e.jsx(d,{children:"Maximum 1000 characters. Be specific about your financial need and academic goals."})]}),e.jsxs(a,{required:!0,children:[e.jsx(t,{htmlFor:"goals",required:!0,children:"What are your future goals?"}),e.jsx(r,{id:"goals",placeholder:"Describe your career and educational goals...",rows:6,maxLength:1e3,required:!0,fullWidth:!0}),e.jsx(d,{children:"Maximum 1000 characters"})]})]})},q={name:"Declaration (Read-Only)",render:()=>e.jsxs("div",{className:"max-w-2xl space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Declaration"}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"declaration",children:"Please read and accept the following declaration:"}),e.jsx(r,{id:"declaration",rows:8,readOnly:!0,fullWidth:!0,defaultValue:`I hereby declare that:

1. All the information provided by me in this application is true and correct to the best of my knowledge and belief.

2. I understand that if any information is found to be false or incorrect, my application will be rejected and legal action may be taken against me.

3. I authorize the government department to verify the information provided by me through any means deemed necessary.

4. I will abide by all rules and regulations of the scheme.

Date: ${new Date().toLocaleDateString("en-IN")}
Place: _____________`})]})]})},S={name:"Officer Remarks",render:()=>e.jsxs("div",{className:"max-w-2xl space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Application Review"}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"remarks",children:"Officer Remarks"}),e.jsx(r,{id:"remarks",placeholder:"Enter your observations and recommendations...",rows:6,fullWidth:!0}),e.jsx(d,{children:"Internal notes - not visible to applicant"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"action",children:"Recommended Action"}),e.jsx(r,{id:"action",placeholder:"Specify recommended action...",rows:4,fullWidth:!0})]})]})},N={name:"All Sizes",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(a,{children:[e.jsx(t,{htmlFor:"size-sm",children:"Small"}),e.jsx(r,{id:"size-sm",size:"sm",placeholder:"Small textarea",rows:3})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"size-md",children:"Medium (Default)"}),e.jsx(r,{id:"size-md",size:"md",placeholder:"Medium textarea",rows:4})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"size-lg",children:"Large"}),e.jsx(r,{id:"size-lg",size:"lg",placeholder:"Large textarea",rows:5})]})]})},W={name:"All States",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(a,{children:[e.jsx(t,{htmlFor:"state-normal",children:"Normal"}),e.jsx(r,{id:"state-normal",placeholder:"Normal textarea",rows:3})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"state-required",required:!0,children:"Required"}),e.jsx(r,{id:"state-required",placeholder:"Required textarea",rows:3,required:!0})]}),e.jsxs(a,{error:!0,children:[e.jsx(t,{htmlFor:"state-error",children:"With Error"}),e.jsx(r,{id:"state-error",placeholder:"Error state",rows:3,error:!0}),e.jsx(D,{children:"This field is required"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"state-readonly",children:"Read-Only"}),e.jsx(r,{id:"state-readonly",rows:3,readOnly:!0,defaultValue:"This is read-only text"})]}),e.jsxs(a,{children:[e.jsx(t,{htmlFor:"state-disabled",disabled:!0,children:"Disabled"}),e.jsx(r,{id:"state-disabled",placeholder:"Disabled textarea",rows:3,disabled:!0})]})]})};var E,_,I;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'default',
    placeholder: 'Enter your text here...'
  }
}`,...(I=(_=m.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,H,M;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'small',
    size: 'sm',
    placeholder: 'Small textarea',
    rows: 3
  }
}`,...(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var P,B,$;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'medium',
    size: 'md',
    placeholder: 'Medium textarea (default)',
    rows: 4
  }
}`,...($=(B=p.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var Y,U,G;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    id: 'large',
    size: 'lg',
    placeholder: 'Large textarea',
    rows: 6
  }
}`,...(G=(U=h.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    placeholder: 'This textarea is disabled',
    disabled: true,
    defaultValue: 'Some pre-filled text'
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: 'readonly',
    readOnly: true,
    defaultValue: 'This text is read-only and cannot be edited.'
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <Field error>
      <Label htmlFor="error-textarea">Comments</Label>
      <Textarea id="error-textarea" placeholder="Enter your comments" error />
      <ErrorText>Comments are required (minimum 10 characters)</ErrorText>
    </Field>
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,le,ie;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    id: 'fullwidth',
    fullWidth: true,
    placeholder: 'Full width textarea'
  }
}`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var oe,de,ne;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    id: 'noresize',
    resize: false,
    placeholder: 'This textarea cannot be resized',
    rows: 4
  }
}`,...(ne=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var ce,me,ue;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 200;
    return <Field>
        <Label htmlFor="maxlength">Bio</Label>
        <Textarea id="maxlength" value={value} onChange={e => setValue(e.target.value)} placeholder="Tell us about yourself..." maxLength={maxLength} rows={4} fullWidth />
        <HintText>
          {value.length} / {maxLength} characters
        </HintText>
      </Field>;
  }
}`,...(ue=(me=F.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,he,xe;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="space-y-4">
        <Field>
          <Label htmlFor="controlled">Your Message</Label>
          <Textarea id="controlled" value={value} onChange={e => setValue(e.target.value)} placeholder="Type your message..." rows={5} fullWidth />
          <HintText>{value.length} characters</HintText>
        </Field>

        <button onClick={() => setValue('')} className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm">
          Clear
        </button>
      </div>;
  }
}`,...(xe=(he=w.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ge,be,fe;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Address Input',
  render: () => <div className="max-w-md">
      <Field required>
        <Label htmlFor="address" required>
          Permanent Address
        </Label>
        <Textarea id="address" placeholder="Enter your complete address including street, city, state, and PIN code" rows={5} required fullWidth />
        <HintText>As per your Aadhaar card</HintText>
      </Field>
    </div>
}`,...(fe=(be=v.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ye,Fe,we;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Complaint Description',
  render: () => {
    const [description, setDescription] = useState('');
    const minLength = 50;
    const maxLength = 500;
    const isValid = description.length >= minLength;
    return <div className="max-w-2xl space-y-4">
        <h3 className="text-lg font-medium">File a Complaint</h3>

        <Field error={!isValid && description.length > 0} required>
          <Label htmlFor="complaint" required>
            Complaint Description
          </Label>
          <Textarea id="complaint" value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe your complaint in detail..." rows={8} maxLength={maxLength} required fullWidth error={!isValid && description.length > 0} />
          {!isValid && description.length > 0 ? <ErrorText>
              Description must be at least {minLength} characters (current: {description.length})
            </ErrorText> : <HintText>
              {description.length} / {maxLength} characters (minimum {minLength} required)
            </HintText>}
        </Field>

        <button disabled={!isValid} className="px-6 py-2 bg-primary text-primary-foreground rounded disabled:opacity-50 disabled:cursor-not-allowed">
          Submit Complaint
        </button>
      </div>;
  }
}`,...(we=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:we.source}}};var ve,je,Te;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Service Feedback',
  render: () => <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Service Feedback</h3>
      <p className="text-sm text-gray-600">
        Help us improve our services by sharing your experience
      </p>

      <Field>
        <Label htmlFor="positive">What did you like?</Label>
        <Textarea id="positive" placeholder="Tell us what went well..." rows={3} fullWidth />
      </Field>

      <Field>
        <Label htmlFor="improve">What can we improve?</Label>
        <Textarea id="improve" placeholder="Suggest improvements..." rows={3} fullWidth />
      </Field>

      <Field>
        <Label htmlFor="additional">Additional Comments</Label>
        <Textarea id="additional" placeholder="Any other feedback..." rows={3} fullWidth />
        <HintText>Optional</HintText>
      </Field>
    </div>
}`,...(Te=(je=T.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var Le,qe,Se;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Application Reason',
  render: () => <div className="max-w-2xl space-y-4">
      <h3 className="text-lg font-medium">Scholarship Application</h3>

      <Field required>
        <Label htmlFor="reason" required>
          Why are you applying for this scholarship?
        </Label>
        <Textarea id="reason" placeholder="Explain your reasons for applying..." rows={6} maxLength={1000} required fullWidth />
        <HintText>Maximum 1000 characters. Be specific about your financial need and academic goals.</HintText>
      </Field>

      <Field required>
        <Label htmlFor="goals" required>
          What are your future goals?
        </Label>
        <Textarea id="goals" placeholder="Describe your career and educational goals..." rows={6} maxLength={1000} required fullWidth />
        <HintText>Maximum 1000 characters</HintText>
      </Field>
    </div>
}`,...(Se=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:Se.source}}};var Ne,We,Ae;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Declaration (Read-Only)',
  render: () => <div className="max-w-2xl space-y-4">
      <h3 className="text-lg font-medium">Declaration</h3>

      <Field>
        <Label htmlFor="declaration">Please read and accept the following declaration:</Label>
        <Textarea id="declaration" rows={8} readOnly fullWidth defaultValue={\`I hereby declare that:

1. All the information provided by me in this application is true and correct to the best of my knowledge and belief.

2. I understand that if any information is found to be false or incorrect, my application will be rejected and legal action may be taken against me.

3. I authorize the government department to verify the information provided by me through any means deemed necessary.

4. I will abide by all rules and regulations of the scheme.

Date: \${new Date().toLocaleDateString('en-IN')}
Place: _____________\`} />
      </Field>
    </div>
}`,...(Ae=(We=q.parameters)==null?void 0:We.docs)==null?void 0:Ae.source}}};var ze,De,Re;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Officer Remarks',
  render: () => <div className="max-w-2xl space-y-4">
      <h3 className="text-lg font-medium">Application Review</h3>

      <Field>
        <Label htmlFor="remarks">Officer Remarks</Label>
        <Textarea id="remarks" placeholder="Enter your observations and recommendations..." rows={6} fullWidth />
        <HintText>Internal notes - not visible to applicant</HintText>
      </Field>

      <Field>
        <Label htmlFor="action">Recommended Action</Label>
        <Textarea id="action" placeholder="Specify recommended action..." rows={4} fullWidth />
      </Field>
    </div>
}`,...(Re=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ve,Ce,ke;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div className="space-y-4">
      <Field>
        <Label htmlFor="size-sm">Small</Label>
        <Textarea id="size-sm" size="sm" placeholder="Small textarea" rows={3} />
      </Field>

      <Field>
        <Label htmlFor="size-md">Medium (Default)</Label>
        <Textarea id="size-md" size="md" placeholder="Medium textarea" rows={4} />
      </Field>

      <Field>
        <Label htmlFor="size-lg">Large</Label>
        <Textarea id="size-lg" size="lg" placeholder="Large textarea" rows={5} />
      </Field>
    </div>
}`,...(ke=(Ce=N.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Ee,_e,Ie;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div className="space-y-4">
      <Field>
        <Label htmlFor="state-normal">Normal</Label>
        <Textarea id="state-normal" placeholder="Normal textarea" rows={3} />
      </Field>

      <Field>
        <Label htmlFor="state-required" required>
          Required
        </Label>
        <Textarea id="state-required" placeholder="Required textarea" rows={3} required />
      </Field>

      <Field error>
        <Label htmlFor="state-error">With Error</Label>
        <Textarea id="state-error" placeholder="Error state" rows={3} error />
        <ErrorText>This field is required</ErrorText>
      </Field>

      <Field>
        <Label htmlFor="state-readonly">Read-Only</Label>
        <Textarea id="state-readonly" rows={3} readOnly defaultValue="This is read-only text" />
      </Field>

      <Field>
        <Label htmlFor="state-disabled" disabled>
          Disabled
        </Label>
        <Textarea id="state-disabled" placeholder="Disabled textarea" rows={3} disabled />
      </Field>
    </div>
}`,...(Ie=(_e=W.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};const mr=["Default","Small","Medium","Large","Disabled","ReadOnly","WithError","FullWidth","NoResize","WithMaxLength","Controlled","AddressInput","ComplaintDescription","FeedbackForm","ApplicationReason","DeclarationText","RemarksAndNotes","AllSizes","AllStates"];export{v as AddressInput,N as AllSizes,W as AllStates,L as ApplicationReason,j as ComplaintDescription,w as Controlled,q as DeclarationText,m as Default,x as Disabled,T as FeedbackForm,f as FullWidth,h as Large,p as Medium,y as NoResize,g as ReadOnly,S as RemarksAndNotes,u as Small,b as WithError,F as WithMaxLength,mr as __namedExportsOrder,cr as default};
