import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-G8LIXM5I.js";import{c as R}from"./cn-BaF2GUMg.js";import{u as ze}from"./Field.context-i6-YOkUP.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function Ue(...a){const s=a.flatMap(t=>t?t.split(" "):[]).filter(Boolean);return s.length>0?Array.from(new Set(s)).join(" "):void 0}const r=d.forwardRef(({id:a,name:s,label:t,children:n,className:o,disabled:i=!1,required:we,error:D,checked:Ie,defaultChecked:De,indeterminate:T=!1,onChange:Te,"aria-label":Ae,"aria-labelledby":Ee,"aria-describedby":Pe,"aria-invalid":Oe,...Re},l)=>{const c=ze(),w=d.useRef(null),A=a??(c==null?void 0:c.inputId),E=i||(c==null?void 0:c.disabled)||!1,P=we??(c==null?void 0:c.required)??!1,O=D??(c==null?void 0:c.invalid)??!1,Be=Ue(Pe,c==null?void 0:c.describedBy);d.useEffect(()=>{w.current&&(w.current.indeterminate=T)},[T]);const Me=I=>{w.current=I,typeof l=="function"?l(I):l&&(l.current=I)},m=t||n;return e.jsxs("div",{className:R("ux4g-checkbox-wrapper",i&&"ux4g-checkbox-wrapper-disabled",D&&"ux4g-checkbox-wrapper-error",o),children:[e.jsx("input",{ref:Me,type:"checkbox",id:A,name:s,className:"ux4g-checkbox",disabled:E,required:P,checked:Ie,defaultChecked:De,onChange:Te,"aria-label":Ae||(typeof m=="string"?m:void 0),"aria-labelledby":Ee,"aria-describedby":Be,"aria-invalid":Oe??O,"aria-required":P,...Re}),m&&e.jsx("label",{htmlFor:A,className:R("ux4g-checkbox-label",E&&"ux4g-checkbox-label-disabled",O&&"ux4g-checkbox-label-error"),children:m})]})});r.displayName="Checkbox";r.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by reference"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by reference"},name:{required:!1,tsType:{name:"string"},description:"Field name for form submission"},id:{required:!1,tsType:{name:"string"},description:"Field ID (links label to input)"},required:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Whether the field is read-only
@default false`},error:{required:!1,tsType:{name:"boolean"},description:`Error state indicator
@default false`},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"ARIA invalid state"},"aria-required":{required:!1,tsType:{name:"boolean"},description:"ARIA required state"},children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:"Checkbox label text"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is checked"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state for uncontrolled component"},indeterminate:{required:!1,tsType:{name:"boolean"},description:`Indeterminate state (for "select all" scenarios)
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Change handler"}},composes:["Omit"]};const _e={title:"Components/Checkbox",component:r,parameters:{layout:"padded",docs:{description:{component:"Checkbox component for selecting one or more options from a list. Supports controlled and uncontrolled modes, indeterminate state, and full accessibility."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Checkbox label text",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"Controlled checked state",table:{type:{summary:"boolean"}}},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled)",table:{type:{summary:"boolean"}}},indeterminate:{control:"boolean",description:'Indeterminate state (for "select all" scenarios)',table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Whether the checkbox is disabled",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},required:{control:"boolean",description:"Whether the checkbox is required",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},error:{control:"boolean",description:"Error state",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},h={args:{id:"default",label:"I agree to the terms and conditions"}},u={args:{id:"checked",label:"This checkbox is checked",defaultChecked:!0}},p={args:{id:"disabled",label:"This checkbox is disabled",disabled:!0}},b={args:{id:"disabled-checked",label:"Disabled and checked",disabled:!0,defaultChecked:!0}},x={args:{id:"required",label:"This checkbox is required",required:!0}},f={args:{id:"error",label:"This checkbox has an error",error:!0}},y={args:{id:"indeterminate",label:"Select all items",indeterminate:!0}},g={render:()=>{const[a,s]=d.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{id:"controlled",label:"Controlled checkbox",checked:a,onChange:t=>s(t.target.checked)}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Current state: ",a?"Checked":"Unchecked"]}),e.jsx("button",{onClick:()=>s(!a),className:"px-4 py-2 bg-primary text-primary-foreground rounded",children:"Toggle"})]})}},k={name:"Multiple Checkboxes",render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(r,{id:"option1",label:"Option 1"}),e.jsx(r,{id:"option2",label:"Option 2",defaultChecked:!0}),e.jsx(r,{id:"option3",label:"Option 3"}),e.jsx(r,{id:"option4",label:"Option 4"})]})},v={name:"All States",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Normal States"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{id:"state-1",label:"Unchecked"}),e.jsx(r,{id:"state-2",label:"Checked",defaultChecked:!0}),e.jsx(r,{id:"state-3",label:"Indeterminate",indeterminate:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Disabled States"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{id:"state-4",label:"Disabled Unchecked",disabled:!0}),e.jsx(r,{id:"state-5",label:"Disabled Checked",disabled:!0,defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Error State"}),e.jsx("div",{className:"space-y-2",children:e.jsx(r,{id:"state-6",label:"Error State",error:!0})})]})]})},C={name:"Government Consent Form",render:()=>e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Aadhaar Authentication Consent"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Please review and accept the following terms to proceed with Aadhaar authentication."}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(r,{id:"consent-1",label:"I authorize the use of my Aadhaar for authentication purposes",required:!0}),e.jsx(r,{id:"consent-2",label:"I have read and understood the privacy policy",required:!0}),e.jsx(r,{id:"consent-3",label:"I consent to the collection and processing of my personal data as per UIDAI guidelines",required:!0}),e.jsx(r,{id:"consent-4",label:"Send me updates via SMS (Optional)"})]})]})},N={name:"Document Verification Checklist",render:()=>{const[a,s]=d.useState({aadhaar:!1,pan:!1,address:!1,photo:!1}),t=Object.values(a).every(Boolean),n=Object.values(a).some(Boolean)&&!t;return e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Upload Required Documents"}),e.jsx(r,{id:"select-all",label:"Select All Documents",checked:t,indeterminate:n,onChange:o=>{const i=o.target.checked;s({aadhaar:i,pan:i,address:i,photo:i})}}),e.jsx("hr",{className:"border-gray-200"}),e.jsxs("div",{className:"space-y-3 pl-6",children:[e.jsx(r,{id:"doc-aadhaar",label:"Aadhaar Card (Front and Back)",checked:a.aadhaar,onChange:o=>s({...a,aadhaar:o.target.checked}),required:!0}),e.jsx(r,{id:"doc-pan",label:"PAN Card",checked:a.pan,onChange:o=>s({...a,pan:o.target.checked}),required:!0}),e.jsx(r,{id:"doc-address",label:"Address Proof (Electricity Bill, etc.)",checked:a.address,onChange:o=>s({...a,address:o.target.checked}),required:!0}),e.jsx(r,{id:"doc-photo",label:"Passport Size Photograph",checked:a.photo,onChange:o=>s({...a,photo:o.target.checked}),required:!0})]}),e.jsxs("p",{className:"text-sm text-gray-600 mt-4",children:[Object.values(a).filter(Boolean).length," of 4 documents selected"]})]})}},j={name:"Service Preferences",render:()=>e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Communication Preferences"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Select how you would like to receive updates from government services."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Notification Channels"}),e.jsxs("div",{className:"space-y-2 pl-4",children:[e.jsx(r,{id:"pref-sms",label:"SMS to registered mobile number"}),e.jsx(r,{id:"pref-email",label:"Email notifications"}),e.jsx(r,{id:"pref-app",label:"In-app notifications"}),e.jsx(r,{id:"pref-whatsapp",label:"WhatsApp updates"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Update Types"}),e.jsxs("div",{className:"space-y-2 pl-4",children:[e.jsx(r,{id:"type-status",label:"Application status updates",defaultChecked:!0}),e.jsx(r,{id:"type-deadline",label:"Deadline reminders",defaultChecked:!0}),e.jsx(r,{id:"type-news",label:"New service announcements"}),e.jsx(r,{id:"type-survey",label:"Feedback surveys"})]})]})]})]})},S={name:"Eligibility Criteria Check",render:()=>{const[a,s]=d.useState({citizen:!1,age:!1,income:!1,residence:!1}),[t,n]=d.useState(!1),o=()=>{const i=Object.values(a).every(Boolean);n(!i)};return e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Scholarship Eligibility"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Please confirm you meet all eligibility criteria:"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(r,{id:"crit-citizen",label:"I am an Indian citizen",checked:a.citizen,onChange:i=>s({...a,citizen:i.target.checked}),error:t&&!a.citizen,required:!0}),e.jsx(r,{id:"crit-age",label:"I am between 18-25 years of age",checked:a.age,onChange:i=>s({...a,age:i.target.checked}),error:t&&!a.age,required:!0}),e.jsx(r,{id:"crit-income",label:"My annual family income is below ₹5,00,000",checked:a.income,onChange:i=>s({...a,income:i.target.checked}),error:t&&!a.income,required:!0}),e.jsx(r,{id:"crit-residence",label:"I am a resident of the state for at least 5 years",checked:a.residence,onChange:i=>s({...a,residence:i.target.checked}),error:t&&!a.residence,required:!0})]}),t&&e.jsx("p",{className:"text-sm text-destructive",children:"Please confirm all eligibility criteria to proceed"}),e.jsx("button",{onClick:o,className:"w-full px-4 py-2 bg-primary text-primary-foreground rounded",children:"Check Eligibility"})]})}},q={name:"Terms and Conditions",render:()=>{const[a,s]=d.useState(!1);return e.jsxs("div",{className:"max-w-2xl space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Terms of Service - Digital Locker"}),e.jsxs("div",{className:"border border-gray-200 rounded p-4 max-h-64 overflow-y-auto bg-gray-50",children:[e.jsx("h4",{className:"font-medium mb-2",children:"1. Introduction"}),e.jsx("p",{className:"text-sm text-gray-700 mb-4",children:"These Terms of Service govern your use of the Digital Locker service provided by the Government of India. By accessing this service, you agree to be bound by these terms."}),e.jsx("h4",{className:"font-medium mb-2",children:"2. Data Privacy"}),e.jsx("p",{className:"text-sm text-gray-700 mb-4",children:"Your personal documents and information stored in Digital Locker are encrypted and secured in accordance with Information Technology Act, 2000 and UIDAI regulations."}),e.jsx("h4",{className:"font-medium mb-2",children:"3. User Responsibilities"}),e.jsx("p",{className:"text-sm text-gray-700 mb-4",children:"You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account."}),e.jsx("h4",{className:"font-medium mb-2",children:"4. Service Availability"}),e.jsx("p",{className:"text-sm text-gray-700",children:"While we strive for maximum uptime, the service may be temporarily unavailable due to maintenance or technical issues."})]}),e.jsx(r,{id:"terms-accept",checked:a,onChange:t=>s(t.target.checked),required:!0,children:e.jsxs("span",{className:"text-sm",children:["I have read and agree to the"," ",e.jsx("a",{href:"#",className:"text-blue-600 underline",children:"Terms of Service"})," ","and"," ",e.jsx("a",{href:"#",className:"text-blue-600 underline",children:"Privacy Policy"})]})}),e.jsx("button",{disabled:!a,className:"w-full px-4 py-2 bg-primary text-primary-foreground rounded disabled:opacity-50 disabled:cursor-not-allowed",children:"Proceed to Digital Locker"})]})}};var B,M,z;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: 'default',
    label: 'I agree to the terms and conditions'
  }
}`,...(z=(M=h.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var U,W,L;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    id: 'checked',
    label: 'This checkbox is checked',
    defaultChecked: true
  }
}`,...(L=(W=u.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var F,V,G;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    label: 'This checkbox is disabled',
    disabled: true
  }
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var Y,_,H;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    id: 'disabled-checked',
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true
  }
}`,...(H=(_=b.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    id: 'required',
    label: 'This checkbox is required',
    required: true
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: 'error',
    label: 'This checkbox has an error',
    error: true
  }
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    id: 'indeterminate',
    label: 'Select all items',
    indeterminate: true
  }
}`,...(re=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,te,ie;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="space-y-4">
        <Checkbox id="controlled" label="Controlled checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
        <p className="text-sm text-gray-600">
          Current state: {checked ? 'Checked' : 'Unchecked'}
        </p>
        <button onClick={() => setChecked(!checked)} className="px-4 py-2 bg-primary text-primary-foreground rounded">
          Toggle
        </button>
      </div>;
  }
}`,...(ie=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ce,oe,de;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Multiple Checkboxes',
  render: () => <div className="space-y-3">
      <Checkbox id="option1" label="Option 1" />
      <Checkbox id="option2" label="Option 2" defaultChecked />
      <Checkbox id="option3" label="Option 3" />
      <Checkbox id="option4" label="Option 4" />
    </div>
}`,...(de=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ne,le,me;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Normal States</h3>
        <div className="space-y-2">
          <Checkbox id="state-1" label="Unchecked" />
          <Checkbox id="state-2" label="Checked" defaultChecked />
          <Checkbox id="state-3" label="Indeterminate" indeterminate />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Disabled States</h3>
        <div className="space-y-2">
          <Checkbox id="state-4" label="Disabled Unchecked" disabled />
          <Checkbox id="state-5" label="Disabled Checked" disabled defaultChecked />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Error State</h3>
        <div className="space-y-2">
          <Checkbox id="state-6" label="Error State" error />
        </div>
      </div>
    </div>
}`,...(me=(le=v.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var he,ue,pe;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Government Consent Form',
  render: () => <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Aadhaar Authentication Consent</h3>
      <p className="text-sm text-gray-600">
        Please review and accept the following terms to proceed with Aadhaar authentication.
      </p>

      <div className="space-y-3">
        <Checkbox id="consent-1" label="I authorize the use of my Aadhaar for authentication purposes" required />
        <Checkbox id="consent-2" label="I have read and understood the privacy policy" required />
        <Checkbox id="consent-3" label="I consent to the collection and processing of my personal data as per UIDAI guidelines" required />
        <Checkbox id="consent-4" label="Send me updates via SMS (Optional)" />
      </div>
    </div>
}`,...(pe=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var be,xe,fe;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Document Verification Checklist',
  render: () => {
    const [docs, setDocs] = useState({
      aadhaar: false,
      pan: false,
      address: false,
      photo: false
    });
    const allChecked = Object.values(docs).every(Boolean);
    const someChecked = Object.values(docs).some(Boolean) && !allChecked;
    return <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Upload Required Documents</h3>

        <Checkbox id="select-all" label="Select All Documents" checked={allChecked} indeterminate={someChecked} onChange={e => {
        const newState = e.target.checked;
        setDocs({
          aadhaar: newState,
          pan: newState,
          address: newState,
          photo: newState
        });
      }} />

        <hr className="border-gray-200" />

        <div className="space-y-3 pl-6">
          <Checkbox id="doc-aadhaar" label="Aadhaar Card (Front and Back)" checked={docs.aadhaar} onChange={e => setDocs({
          ...docs,
          aadhaar: e.target.checked
        })} required />
          <Checkbox id="doc-pan" label="PAN Card" checked={docs.pan} onChange={e => setDocs({
          ...docs,
          pan: e.target.checked
        })} required />
          <Checkbox id="doc-address" label="Address Proof (Electricity Bill, etc.)" checked={docs.address} onChange={e => setDocs({
          ...docs,
          address: e.target.checked
        })} required />
          <Checkbox id="doc-photo" label="Passport Size Photograph" checked={docs.photo} onChange={e => setDocs({
          ...docs,
          photo: e.target.checked
        })} required />
        </div>

        <p className="text-sm text-gray-600 mt-4">
          {Object.values(docs).filter(Boolean).length} of 4 documents selected
        </p>
      </div>;
  }
}`,...(fe=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ye,ge,ke;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Service Preferences',
  render: () => <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Communication Preferences</h3>
      <p className="text-sm text-gray-600">
        Select how you would like to receive updates from government services.
      </p>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-2">Notification Channels</h4>
          <div className="space-y-2 pl-4">
            <Checkbox id="pref-sms" label="SMS to registered mobile number" />
            <Checkbox id="pref-email" label="Email notifications" />
            <Checkbox id="pref-app" label="In-app notifications" />
            <Checkbox id="pref-whatsapp" label="WhatsApp updates" />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Update Types</h4>
          <div className="space-y-2 pl-4">
            <Checkbox id="type-status" label="Application status updates" defaultChecked />
            <Checkbox id="type-deadline" label="Deadline reminders" defaultChecked />
            <Checkbox id="type-news" label="New service announcements" />
            <Checkbox id="type-survey" label="Feedback surveys" />
          </div>
        </div>
      </div>
    </div>
}`,...(ke=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:ke.source}}};var ve,Ce,Ne;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Eligibility Criteria Check',
  render: () => {
    const [criteria, setCriteria] = useState({
      citizen: false,
      age: false,
      income: false,
      residence: false
    });
    const [error, setError] = useState(false);
    const handleSubmit = () => {
      const allMet = Object.values(criteria).every(Boolean);
      setError(!allMet);
    };
    return <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Scholarship Eligibility</h3>
        <p className="text-sm text-gray-600">
          Please confirm you meet all eligibility criteria:
        </p>

        <div className="space-y-3">
          <Checkbox id="crit-citizen" label="I am an Indian citizen" checked={criteria.citizen} onChange={e => setCriteria({
          ...criteria,
          citizen: e.target.checked
        })} error={error && !criteria.citizen} required />
          <Checkbox id="crit-age" label="I am between 18-25 years of age" checked={criteria.age} onChange={e => setCriteria({
          ...criteria,
          age: e.target.checked
        })} error={error && !criteria.age} required />
          <Checkbox id="crit-income" label="My annual family income is below ₹5,00,000" checked={criteria.income} onChange={e => setCriteria({
          ...criteria,
          income: e.target.checked
        })} error={error && !criteria.income} required />
          <Checkbox id="crit-residence" label="I am a resident of the state for at least 5 years" checked={criteria.residence} onChange={e => setCriteria({
          ...criteria,
          residence: e.target.checked
        })} error={error && !criteria.residence} required />
        </div>

        {error && <p className="text-sm text-destructive">
            Please confirm all eligibility criteria to proceed
          </p>}

        <button onClick={handleSubmit} className="w-full px-4 py-2 bg-primary text-primary-foreground rounded">
          Check Eligibility
        </button>
      </div>;
  }
}`,...(Ne=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var je,Se,qe;q.parameters={...q.parameters,docs:{...(je=q.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Terms and Conditions',
  render: () => {
    const [accepted, setAccepted] = useState(false);
    return <div className="max-w-2xl space-y-4">
        <h3 className="text-lg font-medium">Terms of Service - Digital Locker</h3>

        <div className="border border-gray-200 rounded p-4 max-h-64 overflow-y-auto bg-gray-50">
          <h4 className="font-medium mb-2">1. Introduction</h4>
          <p className="text-sm text-gray-700 mb-4">
            These Terms of Service govern your use of the Digital Locker service provided
            by the Government of India. By accessing this service, you agree to be bound
            by these terms.
          </p>

          <h4 className="font-medium mb-2">2. Data Privacy</h4>
          <p className="text-sm text-gray-700 mb-4">
            Your personal documents and information stored in Digital Locker are encrypted
            and secured in accordance with Information Technology Act, 2000 and UIDAI
            regulations.
          </p>

          <h4 className="font-medium mb-2">3. User Responsibilities</h4>
          <p className="text-sm text-gray-700 mb-4">
            You are responsible for maintaining the confidentiality of your account
            credentials and for all activities under your account.
          </p>

          <h4 className="font-medium mb-2">4. Service Availability</h4>
          <p className="text-sm text-gray-700">
            While we strive for maximum uptime, the service may be temporarily unavailable
            due to maintenance or technical issues.
          </p>
        </div>

        <Checkbox id="terms-accept" checked={accepted} onChange={e => setAccepted(e.target.checked)} required>
          <span className="text-sm">
            I have read and agree to the{' '}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
          </span>
        </Checkbox>

        <button disabled={!accepted} className="w-full px-4 py-2 bg-primary text-primary-foreground rounded disabled:opacity-50 disabled:cursor-not-allowed">
          Proceed to Digital Locker
        </button>
      </div>;
  }
}`,...(qe=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};const He=["Default","Checked","Disabled","DisabledChecked","Required","WithError","Indeterminate","Controlled","MultipleCheckboxes","AllStates","GovernmentConsent","DocumentVerification","ServicePreferences","EligibilityCriteria","TermsAndConditions"];export{v as AllStates,u as Checked,g as Controlled,h as Default,p as Disabled,b as DisabledChecked,N as DocumentVerification,S as EligibilityCriteria,C as GovernmentConsent,y as Indeterminate,k as MultipleCheckboxes,x as Required,j as ServicePreferences,q as TermsAndConditions,f as WithError,He as __namedExportsOrder,_e as default};
