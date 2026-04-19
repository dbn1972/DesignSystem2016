import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-G8LIXM5I.js";import{c as D}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=d.forwardRef(({id:r,name:t,value:s,label:l,children:S,className:i,disabled:T=!1,required:P=!1,error:R=!1,checked:Ce,defaultChecked:Se,onChange:Te,"aria-label":Re,"aria-labelledby":Pe,"aria-describedby":De,"aria-invalid":we,...qe},Ae)=>{const n=l||S;return e.jsxs("div",{className:D("ux4g-radio-wrapper",T&&"ux4g-radio-wrapper-disabled",R&&"ux4g-radio-wrapper-error",i),children:[e.jsx("input",{ref:Ae,type:"radio",id:r,name:t,value:s,className:"ux4g-radio",disabled:T,required:P,checked:Ce,defaultChecked:Se,onChange:Te,"aria-label":Re||(typeof n=="string"?n:void 0),"aria-labelledby":Pe,"aria-describedby":De,"aria-invalid":we||R,"aria-required":P,...qe}),n&&e.jsx("label",{htmlFor:r,className:D("ux4g-radio-label",T&&"ux4g-radio-label-disabled",R&&"ux4g-radio-label-error"),children:n})]})});a.displayName="Radio";a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by reference"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by reference"},name:{required:!1,tsType:{name:"string"},description:"Field name for form submission"},id:{required:!1,tsType:{name:"string"},description:"Field ID (links label to input)"},required:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required
@default false`,defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:`Whether the field is read-only
@default false`},error:{required:!1,tsType:{name:"boolean"},description:`Error state indicator
@default false`,defaultValue:{value:"false",computed:!1}},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"ARIA invalid state"},"aria-required":{required:!1,tsType:{name:"boolean"},description:"ARIA required state"},children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:"Radio label text"},value:{required:!0,tsType:{name:"string"},description:"Radio value"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the radio is checked"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state for uncontrolled component"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Change handler"}},composes:["Omit"]};const ze={title:"Components/Radio",component:a,parameters:{layout:"padded",docs:{description:{component:"Radio component for selecting a single option from multiple choices. Use radio buttons when users must select exactly one option from a list."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Radio label text",table:{type:{summary:"string"}}},value:{control:"text",description:"Radio value",table:{type:{summary:"string"}}},name:{control:"text",description:"Radio group name (links related radios)",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"Controlled checked state",table:{type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Whether the radio is disabled",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},required:{control:"boolean",description:"Whether the radio group is required",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},error:{control:"boolean",description:"Error state",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},o={args:{id:"default",name:"default",value:"option1",label:"Option 1"}},c={args:{id:"checked",name:"checked",value:"option1",label:"This radio is checked",defaultChecked:!0}},m={args:{id:"disabled",name:"disabled",value:"option1",label:"This radio is disabled",disabled:!0}},u={args:{id:"disabled-checked",name:"disabled-checked",value:"option1",label:"Disabled and checked",disabled:!0,defaultChecked:!0}},p={args:{id:"error",name:"error",value:"option1",label:"This radio has an error",error:!0}},y={name:"Basic Radio Group",render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{id:"size-1",name:"size",value:"small",label:"Small"}),e.jsx(a,{id:"size-2",name:"size",value:"medium",label:"Medium",defaultChecked:!0}),e.jsx(a,{id:"size-3",name:"size",value:"large",label:"Large"})]})},h={render:()=>{const[r,t]=d.useState("option2");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{id:"controlled-1",name:"controlled",value:"option1",label:"Option 1",checked:r==="option1",onChange:s=>t(s.target.value)}),e.jsx(a,{id:"controlled-2",name:"controlled",value:"option2",label:"Option 2",checked:r==="option2",onChange:s=>t(s.target.value)}),e.jsx(a,{id:"controlled-3",name:"controlled",value:"option3",label:"Option 3",checked:r==="option3",onChange:s=>t(s.target.value)})]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Selected: ",r]}),e.jsx("button",{onClick:()=>t("option1"),className:"px-4 py-2 bg-primary text-primary-foreground rounded text-sm",children:"Reset to Option 1"})]})}},g={name:"All States",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Normal States"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{id:"state-1",name:"state-normal",value:"1",label:"Unchecked"}),e.jsx(a,{id:"state-2",name:"state-normal",value:"2",label:"Checked",defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Disabled States"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{id:"state-3",name:"state-disabled",value:"3",label:"Disabled Unchecked",disabled:!0}),e.jsx(a,{id:"state-4",name:"state-disabled",value:"4",label:"Disabled Checked",disabled:!0,defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Error State"}),e.jsx("div",{className:"space-y-2",children:e.jsx(a,{id:"state-5",name:"state-error",value:"5",label:"Error State",error:!0})})]})]})},v={name:"Gender Selection",render:()=>e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Gender"}),e.jsx("p",{className:"text-sm text-gray-600",children:"As per Aadhaar card"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{id:"gender-male",name:"gender",value:"male",label:"Male",required:!0}),e.jsx(a,{id:"gender-female",name:"gender",value:"female",label:"Female",required:!0}),e.jsx(a,{id:"gender-other",name:"gender",value:"other",label:"Other",required:!0})]})]})},x={name:"Marital Status",render:()=>e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Marital Status"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{id:"marital-single",name:"marital",value:"single",label:"Single / Unmarried"}),e.jsx(a,{id:"marital-married",name:"marital",value:"married",label:"Married"}),e.jsx(a,{id:"marital-divorced",name:"marital",value:"divorced",label:"Divorced"}),e.jsx(a,{id:"marital-widowed",name:"marital",value:"widowed",label:"Widowed"})]})]})},b={name:"Income Category",render:()=>e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Annual Household Income"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Select your annual household income range"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{id:"income-1",name:"income",value:"below-2.5",label:"Below ₹2,50,000"}),e.jsx(a,{id:"income-2",name:"income",value:"2.5-5",label:"₹2,50,000 - ₹5,00,000"}),e.jsx(a,{id:"income-3",name:"income",value:"5-10",label:"₹5,00,000 - ₹10,00,000"}),e.jsx(a,{id:"income-4",name:"income",value:"above-10",label:"Above ₹10,00,000"})]})]})},f={name:"Identity Document Type",render:()=>{const[r,t]=d.useState("");return e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Select Identity Document"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Choose the document you want to upload for verification"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{id:"doc-aadhaar",name:"docType",value:"aadhaar",label:"Aadhaar Card",checked:r==="aadhaar",onChange:s=>t(s.target.value),required:!0}),e.jsx(a,{id:"doc-pan",name:"docType",value:"pan",label:"PAN Card",checked:r==="pan",onChange:s=>t(s.target.value),required:!0}),e.jsx(a,{id:"doc-voter",name:"docType",value:"voter",label:"Voter ID",checked:r==="voter",onChange:s=>t(s.target.value),required:!0}),e.jsx(a,{id:"doc-passport",name:"docType",value:"passport",label:"Passport",checked:r==="passport",onChange:s=>t(s.target.value),required:!0}),e.jsx(a,{id:"doc-license",name:"docType",value:"license",label:"Driving License",checked:r==="license",onChange:s=>t(s.target.value),required:!0})]}),r&&e.jsx("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded",children:e.jsxs("p",{className:"text-sm text-blue-900",children:[r==="aadhaar"&&"Please ensure your Aadhaar card front and back are clearly visible",r==="pan"&&"PAN card must be valid and clearly legible",r==="voter"&&"Voter ID must show your name and photo clearly",r==="passport"&&"Upload the page with your photo and details",r==="license"&&"Driving license must be valid and not expired"]})})]})}},N={name:"Payment Method",render:()=>{const[r,t]=d.useState("");return e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Select Payment Method"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"border border-gray-200 rounded p-4",children:[e.jsx(a,{id:"payment-upi",name:"payment",value:"upi",label:"UPI",checked:r==="upi",onChange:s=>t(s.target.value)}),e.jsx("p",{className:"text-xs text-gray-500 ml-6 mt-1",children:"Google Pay, PhonePe, Paytm, etc."})]}),e.jsxs("div",{className:"border border-gray-200 rounded p-4",children:[e.jsx(a,{id:"payment-netbanking",name:"payment",value:"netbanking",label:"Net Banking",checked:r==="netbanking",onChange:s=>t(s.target.value)}),e.jsx("p",{className:"text-xs text-gray-500 ml-6 mt-1",children:"Pay using your bank account"})]}),e.jsxs("div",{className:"border border-gray-200 rounded p-4",children:[e.jsx(a,{id:"payment-card",name:"payment",value:"card",label:"Credit/Debit Card",checked:r==="card",onChange:s=>t(s.target.value)}),e.jsx("p",{className:"text-xs text-gray-500 ml-6 mt-1",children:"Visa, Mastercard, RuPay"})]}),e.jsxs("div",{className:"border border-gray-200 rounded p-4",children:[e.jsx(a,{id:"payment-wallet",name:"payment",value:"wallet",label:"Digital Wallet",checked:r==="wallet",onChange:s=>t(s.target.value)}),e.jsx("p",{className:"text-xs text-gray-500 ml-6 mt-1",children:"Paytm Wallet, Amazon Pay, etc."})]})]})]})}},j={name:"Service Delivery Option",render:()=>{const[r,t]=d.useState(""),[s,l]=d.useState(!1),S=()=>{r?(l(!1),alert(`Selected: ${r}`)):l(!0)};return e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Certificate Delivery Preference"}),e.jsx("p",{className:"text-sm text-gray-600",children:"How would you like to receive your certificate?"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{id:"delivery-digital",name:"delivery",value:"digital",label:"Digital Certificate (DigiLocker)",checked:r==="digital",onChange:i=>{t(i.target.value),l(!1)},error:s,required:!0}),e.jsx("p",{className:"text-xs text-gray-500 ml-6",children:"Instant delivery to your DigiLocker account"}),e.jsx(a,{id:"delivery-email",name:"delivery",value:"email",label:"Email PDF",checked:r==="email",onChange:i=>{t(i.target.value),l(!1)},error:s,required:!0}),e.jsx("p",{className:"text-xs text-gray-500 ml-6",children:"PDF sent to your registered email within 24 hours"}),e.jsx(a,{id:"delivery-physical",name:"delivery",value:"physical",label:"Physical Certificate (Speed Post)",checked:r==="physical",onChange:i=>{t(i.target.value),l(!1)},error:s,required:!0}),e.jsx("p",{className:"text-xs text-gray-500 ml-6",children:"Delivered to your registered address in 7-10 business days"})]}),s&&e.jsx("p",{className:"text-sm text-destructive",children:"Please select a delivery option"}),e.jsx("button",{onClick:S,className:"w-full px-4 py-2 bg-primary text-primary-foreground rounded",children:"Continue"})]})}},k={name:"Language Preference",render:()=>e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Preferred Language / पसंदीदा भाषा"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Select your preferred language for communication"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{id:"lang-en",name:"language",value:"english",label:"English"}),e.jsx(a,{id:"lang-hi",name:"language",value:"hindi",label:"हिन्दी (Hindi)"}),e.jsx(a,{id:"lang-ta",name:"language",value:"tamil",label:"தமிழ் (Tamil)"}),e.jsx(a,{id:"lang-te",name:"language",value:"telugu",label:"తెలుగు (Telugu)"}),e.jsx(a,{id:"lang-bn",name:"language",value:"bengali",label:"বাংলা (Bengali)"}),e.jsx(a,{id:"lang-mr",name:"language",value:"marathi",label:"मराठी (Marathi)"})]})]})},C={name:"Application Priority (with fees)",render:()=>{const[r,t]=d.useState("normal"),s={normal:100,fast:500,express:1e3};return e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Application Processing Type"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"border-2 border-primary rounded p-4",children:[e.jsx(a,{id:"priority-normal",name:"priority",value:"normal",label:"Normal Processing",checked:r==="normal",onChange:l=>t(l.target.value)}),e.jsxs("div",{className:"ml-6 mt-2 space-y-1",children:[e.jsxs("p",{className:"text-sm font-medium",children:["₹",s.normal]}),e.jsx("p",{className:"text-xs text-gray-600",children:"15-20 business days"})]})]}),e.jsxs("div",{className:"border-2 border-gray-200 rounded p-4",children:[e.jsx(a,{id:"priority-fast",name:"priority",value:"fast",label:"Fast Track Processing",checked:r==="fast",onChange:l=>t(l.target.value)}),e.jsxs("div",{className:"ml-6 mt-2 space-y-1",children:[e.jsxs("p",{className:"text-sm font-medium",children:["₹",s.fast]}),e.jsx("p",{className:"text-xs text-gray-600",children:"7-10 business days"})]})]}),e.jsxs("div",{className:"border-2 border-gray-200 rounded p-4",children:[e.jsx(a,{id:"priority-express",name:"priority",value:"express",label:"Express Processing",checked:r==="express",onChange:l=>t(l.target.value)}),e.jsxs("div",{className:"ml-6 mt-2 space-y-1",children:[e.jsxs("p",{className:"text-sm font-medium",children:["₹",s.express]}),e.jsx("p",{className:"text-xs text-gray-600",children:"2-3 business days"})]})]})]}),e.jsx("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded",children:e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Total Fee:"}),e.jsxs("span",{className:"font-medium",children:["₹",s[r]]})]})})]})}};var w,q,A;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'default',
    name: 'default',
    value: 'option1',
    label: 'Option 1'
  }
}`,...(A=(q=o.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var M,E,I;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: 'checked',
    name: 'checked',
    value: 'option1',
    label: 'This radio is checked',
    defaultChecked: true
  }
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var O,L,z;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    name: 'disabled',
    value: 'option1',
    label: 'This radio is disabled',
    disabled: true
  }
}`,...(z=(L=m.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var W,F,G;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: 'disabled-checked',
    name: 'disabled-checked',
    value: 'option1',
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true
  }
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var V,U,B;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: 'error',
    name: 'error',
    value: 'option1',
    label: 'This radio has an error',
    error: true
  }
}`,...(B=(U=p.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var H,_,$;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Basic Radio Group',
  render: () => <div className="space-y-3">
      <Radio id="size-1" name="size" value="small" label="Small" />
      <Radio id="size-2" name="size" value="medium" label="Medium" defaultChecked />
      <Radio id="size-3" name="size" value="large" label="Large" />
    </div>
}`,...($=(_=y.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option2');
    return <div className="space-y-4">
        <div className="space-y-3">
          <Radio id="controlled-1" name="controlled" value="option1" label="Option 1" checked={selected === 'option1'} onChange={e => setSelected(e.target.value)} />
          <Radio id="controlled-2" name="controlled" value="option2" label="Option 2" checked={selected === 'option2'} onChange={e => setSelected(e.target.value)} />
          <Radio id="controlled-3" name="controlled" value="option3" label="Option 3" checked={selected === 'option3'} onChange={e => setSelected(e.target.value)} />
        </div>

        <p className="text-sm text-gray-600">Selected: {selected}</p>

        <button onClick={() => setSelected('option1')} className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm">
          Reset to Option 1
        </button>
      </div>;
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Normal States</h3>
        <div className="space-y-2">
          <Radio id="state-1" name="state-normal" value="1" label="Unchecked" />
          <Radio id="state-2" name="state-normal" value="2" label="Checked" defaultChecked />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Disabled States</h3>
        <div className="space-y-2">
          <Radio id="state-3" name="state-disabled" value="3" label="Disabled Unchecked" disabled />
          <Radio id="state-4" name="state-disabled" value="4" label="Disabled Checked" disabled defaultChecked />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Error State</h3>
        <div className="space-y-2">
          <Radio id="state-5" name="state-error" value="5" label="Error State" error />
        </div>
      </div>
    </div>
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Gender Selection',
  render: () => <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Gender</h3>
      <p className="text-sm text-gray-600">As per Aadhaar card</p>

      <div className="space-y-3">
        <Radio id="gender-male" name="gender" value="male" label="Male" required />
        <Radio id="gender-female" name="gender" value="female" label="Female" required />
        <Radio id="gender-other" name="gender" value="other" label="Other" required />
      </div>
    </div>
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,te,le;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Marital Status',
  render: () => <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Marital Status</h3>

      <div className="space-y-3">
        <Radio id="marital-single" name="marital" value="single" label="Single / Unmarried" />
        <Radio id="marital-married" name="marital" value="married" label="Married" />
        <Radio id="marital-divorced" name="marital" value="divorced" label="Divorced" />
        <Radio id="marital-widowed" name="marital" value="widowed" label="Widowed" />
      </div>
    </div>
}`,...(le=(te=x.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ie,de,ne;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Income Category',
  render: () => <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Annual Household Income</h3>
      <p className="text-sm text-gray-600">Select your annual household income range</p>

      <div className="space-y-3">
        <Radio id="income-1" name="income" value="below-2.5" label="Below ₹2,50,000" />
        <Radio id="income-2" name="income" value="2.5-5" label="₹2,50,000 - ₹5,00,000" />
        <Radio id="income-3" name="income" value="5-10" label="₹5,00,000 - ₹10,00,000" />
        <Radio id="income-4" name="income" value="above-10" label="Above ₹10,00,000" />
      </div>
    </div>
}`,...(ne=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var oe,ce,me;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Identity Document Type',
  render: () => {
    const [docType, setDocType] = useState('');
    return <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Select Identity Document</h3>
        <p className="text-sm text-gray-600">Choose the document you want to upload for verification</p>

        <div className="space-y-3">
          <Radio id="doc-aadhaar" name="docType" value="aadhaar" label="Aadhaar Card" checked={docType === 'aadhaar'} onChange={e => setDocType(e.target.value)} required />
          <Radio id="doc-pan" name="docType" value="pan" label="PAN Card" checked={docType === 'pan'} onChange={e => setDocType(e.target.value)} required />
          <Radio id="doc-voter" name="docType" value="voter" label="Voter ID" checked={docType === 'voter'} onChange={e => setDocType(e.target.value)} required />
          <Radio id="doc-passport" name="docType" value="passport" label="Passport" checked={docType === 'passport'} onChange={e => setDocType(e.target.value)} required />
          <Radio id="doc-license" name="docType" value="license" label="Driving License" checked={docType === 'license'} onChange={e => setDocType(e.target.value)} required />
        </div>

        {docType && <div className="p-4 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm text-blue-900">
              {docType === 'aadhaar' && 'Please ensure your Aadhaar card front and back are clearly visible'}
              {docType === 'pan' && 'PAN card must be valid and clearly legible'}
              {docType === 'voter' && 'Voter ID must show your name and photo clearly'}
              {docType === 'passport' && 'Upload the page with your photo and details'}
              {docType === 'license' && 'Driving license must be valid and not expired'}
            </p>
          </div>}
      </div>;
  }
}`,...(me=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,pe,ye;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Payment Method',
  render: () => {
    const [method, setMethod] = useState('');
    return <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Select Payment Method</h3>

        <div className="space-y-3">
          <div className="border border-gray-200 rounded p-4">
            <Radio id="payment-upi" name="payment" value="upi" label="UPI" checked={method === 'upi'} onChange={e => setMethod(e.target.value)} />
            <p className="text-xs text-gray-500 ml-6 mt-1">Google Pay, PhonePe, Paytm, etc.</p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <Radio id="payment-netbanking" name="payment" value="netbanking" label="Net Banking" checked={method === 'netbanking'} onChange={e => setMethod(e.target.value)} />
            <p className="text-xs text-gray-500 ml-6 mt-1">Pay using your bank account</p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <Radio id="payment-card" name="payment" value="card" label="Credit/Debit Card" checked={method === 'card'} onChange={e => setMethod(e.target.value)} />
            <p className="text-xs text-gray-500 ml-6 mt-1">Visa, Mastercard, RuPay</p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <Radio id="payment-wallet" name="payment" value="wallet" label="Digital Wallet" checked={method === 'wallet'} onChange={e => setMethod(e.target.value)} />
            <p className="text-xs text-gray-500 ml-6 mt-1">Paytm Wallet, Amazon Pay, etc.</p>
          </div>
        </div>
      </div>;
  }
}`,...(ye=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var he,ge,ve;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Service Delivery Option',
  render: () => {
    const [delivery, setDelivery] = useState('');
    const [error, setError] = useState(false);
    const handleSubmit = () => {
      if (!delivery) {
        setError(true);
      } else {
        setError(false);
        alert(\`Selected: \${delivery}\`);
      }
    };
    return <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Certificate Delivery Preference</h3>
        <p className="text-sm text-gray-600">How would you like to receive your certificate?</p>

        <div className="space-y-3">
          <Radio id="delivery-digital" name="delivery" value="digital" label="Digital Certificate (DigiLocker)" checked={delivery === 'digital'} onChange={e => {
          setDelivery(e.target.value);
          setError(false);
        }} error={error} required />
          <p className="text-xs text-gray-500 ml-6">
            Instant delivery to your DigiLocker account
          </p>

          <Radio id="delivery-email" name="delivery" value="email" label="Email PDF" checked={delivery === 'email'} onChange={e => {
          setDelivery(e.target.value);
          setError(false);
        }} error={error} required />
          <p className="text-xs text-gray-500 ml-6">
            PDF sent to your registered email within 24 hours
          </p>

          <Radio id="delivery-physical" name="delivery" value="physical" label="Physical Certificate (Speed Post)" checked={delivery === 'physical'} onChange={e => {
          setDelivery(e.target.value);
          setError(false);
        }} error={error} required />
          <p className="text-xs text-gray-500 ml-6">
            Delivered to your registered address in 7-10 business days
          </p>
        </div>

        {error && <p className="text-sm text-destructive">Please select a delivery option</p>}

        <button onClick={handleSubmit} className="w-full px-4 py-2 bg-primary text-primary-foreground rounded">
          Continue
        </button>
      </div>;
  }
}`,...(ve=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var xe,be,fe;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Language Preference',
  render: () => <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Preferred Language / पसंदीदा भाषा</h3>
      <p className="text-sm text-gray-600">
        Select your preferred language for communication
      </p>

      <div className="space-y-3">
        <Radio id="lang-en" name="language" value="english" label="English" />
        <Radio id="lang-hi" name="language" value="hindi" label="हिन्दी (Hindi)" />
        <Radio id="lang-ta" name="language" value="tamil" label="தமிழ் (Tamil)" />
        <Radio id="lang-te" name="language" value="telugu" label="తెలుగు (Telugu)" />
        <Radio id="lang-bn" name="language" value="bengali" label="বাংলা (Bengali)" />
        <Radio id="lang-mr" name="language" value="marathi" label="मराठी (Marathi)" />
      </div>
    </div>
}`,...(fe=(be=k.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ne,je,ke;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Application Priority (with fees)',
  render: () => {
    const [priority, setPriority] = useState('normal');
    const fees = {
      normal: 100,
      fast: 500,
      express: 1000
    };
    return <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Application Processing Type</h3>

        <div className="space-y-3">
          <div className="border-2 border-primary rounded p-4">
            <Radio id="priority-normal" name="priority" value="normal" label="Normal Processing" checked={priority === 'normal'} onChange={e => setPriority(e.target.value)} />
            <div className="ml-6 mt-2 space-y-1">
              <p className="text-sm font-medium">₹{fees.normal}</p>
              <p className="text-xs text-gray-600">15-20 business days</p>
            </div>
          </div>

          <div className="border-2 border-gray-200 rounded p-4">
            <Radio id="priority-fast" name="priority" value="fast" label="Fast Track Processing" checked={priority === 'fast'} onChange={e => setPriority(e.target.value)} />
            <div className="ml-6 mt-2 space-y-1">
              <p className="text-sm font-medium">₹{fees.fast}</p>
              <p className="text-xs text-gray-600">7-10 business days</p>
            </div>
          </div>

          <div className="border-2 border-gray-200 rounded p-4">
            <Radio id="priority-express" name="priority" value="express" label="Express Processing" checked={priority === 'express'} onChange={e => setPriority(e.target.value)} />
            <div className="ml-6 mt-2 space-y-1">
              <p className="text-sm font-medium">₹{fees.express}</p>
              <p className="text-xs text-gray-600">2-3 business days</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border border-gray-200 rounded">
          <div className="flex justify-between text-sm">
            <span>Total Fee:</span>
            <span className="font-medium">₹{fees[priority as keyof typeof fees]}</span>
          </div>
        </div>
      </div>;
  }
}`,...(ke=(je=C.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};const We=["Default","Checked","Disabled","DisabledChecked","WithError","BasicRadioGroup","Controlled","AllStates","GenderSelection","MaritalStatus","IncomeCategory","DocumentType","PaymentMethod","ServiceDeliveryOption","LanguagePreference","ApplicationPriority"];export{g as AllStates,C as ApplicationPriority,y as BasicRadioGroup,c as Checked,h as Controlled,o as Default,m as Disabled,u as DisabledChecked,f as DocumentType,v as GenderSelection,b as IncomeCategory,k as LanguagePreference,x as MaritalStatus,N as PaymentMethod,j as ServiceDeliveryOption,p as WithError,We as __namedExportsOrder,ze as default};
