import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as T}from"./index-G8LIXM5I.js";import{c as He}from"./cn-BaF2GUMg.js";import{u as ze}from"./Field.context-i6-YOkUP.js";import{F as o,E as Oe,H as c}from"./Field-Bwhfc77g.js";import{L as i}from"./Label-abw_G-cS.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function Re(...t){const n=t.flatMap(r=>r?r.split(" "):[]).filter(Boolean);return n.length>0?Array.from(new Set(n)).join(" "):void 0}const a=T.forwardRef(({id:t,name:n,children:r,className:d,placeholder:p,disabled:u,required:s,error:Ne,size:Te="md",fullWidth:Ce=!1,"aria-label":De,"aria-labelledby":Le,"aria-describedby":Me,"aria-invalid":Ae,...we},Pe)=>{const l=ze(),Ie=t??(l==null?void 0:l.inputId),C=u??(l==null?void 0:l.disabled)??!1,D=s??(l==null?void 0:l.required)??!1,L=Ne??(l==null?void 0:l.invalid)??!1,We=Re(Me,l==null?void 0:l.describedBy);return e.jsxs("select",{ref:Pe,id:Ie,name:n,className:He("ux4g-select",`ux4g-select-${Te}`,C&&"ux4g-select-disabled",L&&"ux4g-select-error",Ce&&"ux4g-select-fullwidth",d),disabled:C,required:D,"aria-label":De,"aria-labelledby":Le,"aria-describedby":We,"aria-invalid":Ae??L,"aria-required":D,...we,children:[p&&e.jsx("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:p}),r]})});a.displayName="Select";a.__docgenInfo={description:"",methods:[],displayName:"Select",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled
@default false`},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by reference"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by reference"},name:{required:!1,tsType:{name:"string"},description:"Field name for form submission"},id:{required:!1,tsType:{name:"string"},description:"Field ID (links label to input)"},required:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Whether the field is read-only
@default false`},error:{required:!1,tsType:{name:"boolean"},description:`Error state indicator
@default false`},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"ARIA invalid state"},"aria-required":{required:!1,tsType:{name:"boolean"},description:"ARIA required state"},children:{required:!1,tsType:{name:"ReactNode"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no option is selected"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Select size variant",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Whether to show full width
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const _e={title:"Components/Select",component:a,parameters:{layout:"padded",docs:{description:{component:"Select component for choosing a single option from a dropdown list. Use for medium to large lists of options (5+ items)."}}},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text",table:{type:{summary:"string"}}},size:{control:"select",options:["sm","md","lg"],description:"Select size",table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},disabled:{control:"boolean",description:"Whether the select is disabled",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},required:{control:"boolean",description:"Whether the select is required",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},error:{control:"boolean",description:"Error state",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},fullWidth:{control:"boolean",description:"Full width select",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},h={args:{id:"default",placeholder:"Select an option",children:e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"option1",children:"Option 1"}),e.jsx("option",{value:"option2",children:"Option 2"}),e.jsx("option",{value:"option3",children:"Option 3"})]})}},m={args:{id:"small",size:"sm",placeholder:"Small select",children:e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})}},v={args:{id:"medium",size:"md",placeholder:"Medium select (default)",children:e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})}},x={args:{id:"large",size:"lg",placeholder:"Large select",children:e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})}},j={args:{id:"disabled",disabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"",children:"Select an option"}),e.jsx("option",{value:"1",children:"Option 1"})]})}},S={render:()=>e.jsxs(o,{error:!0,children:[e.jsx(i,{htmlFor:"error-select",children:"Country"}),e.jsxs(a,{id:"error-select",placeholder:"Select a country",error:!0,children:[e.jsx("option",{value:"india",children:"India"}),e.jsx("option",{value:"usa",children:"United States"})]}),e.jsx(Oe,{children:"Please select a country"})]})},g={args:{id:"fullwidth",fullWidth:!0,placeholder:"Full width select",children:e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})}},b={render:()=>{const[t,n]=T.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(o,{children:[e.jsx(i,{htmlFor:"controlled-select",children:"Select a fruit"}),e.jsxs(a,{id:"controlled-select",value:t,onChange:r=>n(r.target.value),placeholder:"Choose a fruit",children:[e.jsx("option",{value:"apple",children:"Apple"}),e.jsx("option",{value:"banana",children:"Banana"}),e.jsx("option",{value:"orange",children:"Orange"}),e.jsx("option",{value:"mango",children:"Mango"})]}),e.jsx(c,{children:"Your favorite fruit"})]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Selected: ",t||"None"]}),e.jsx("button",{onClick:()=>n("mango"),className:"px-4 py-2 bg-primary text-primary-foreground rounded text-sm",children:"Select Mango"})]})}},f={name:"Indian State Selection",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsxs(o,{required:!0,children:[e.jsx(i,{htmlFor:"state",required:!0,children:"State / राज्य"}),e.jsxs(a,{id:"state",placeholder:"Select your state",required:!0,fullWidth:!0,children:[e.jsx("option",{value:"AN",children:"Andaman and Nicobar Islands"}),e.jsx("option",{value:"AP",children:"Andhra Pradesh"}),e.jsx("option",{value:"AR",children:"Arunachal Pradesh"}),e.jsx("option",{value:"AS",children:"Assam"}),e.jsx("option",{value:"BR",children:"Bihar"}),e.jsx("option",{value:"CH",children:"Chandigarh"}),e.jsx("option",{value:"CT",children:"Chhattisgarh"}),e.jsx("option",{value:"DN",children:"Dadra and Nagar Haveli"}),e.jsx("option",{value:"DD",children:"Daman and Diu"}),e.jsx("option",{value:"DL",children:"Delhi"}),e.jsx("option",{value:"GA",children:"Goa"}),e.jsx("option",{value:"GJ",children:"Gujarat"}),e.jsx("option",{value:"HR",children:"Haryana"}),e.jsx("option",{value:"HP",children:"Himachal Pradesh"}),e.jsx("option",{value:"JK",children:"Jammu and Kashmir"}),e.jsx("option",{value:"JH",children:"Jharkhand"}),e.jsx("option",{value:"KA",children:"Karnataka"}),e.jsx("option",{value:"KL",children:"Kerala"}),e.jsx("option",{value:"LA",children:"Ladakh"}),e.jsx("option",{value:"LD",children:"Lakshadweep"}),e.jsx("option",{value:"MP",children:"Madhya Pradesh"}),e.jsx("option",{value:"MH",children:"Maharashtra"}),e.jsx("option",{value:"MN",children:"Manipur"}),e.jsx("option",{value:"ML",children:"Meghalaya"}),e.jsx("option",{value:"MZ",children:"Mizoram"}),e.jsx("option",{value:"NL",children:"Nagaland"}),e.jsx("option",{value:"OR",children:"Odisha"}),e.jsx("option",{value:"PY",children:"Puducherry"}),e.jsx("option",{value:"PB",children:"Punjab"}),e.jsx("option",{value:"RJ",children:"Rajasthan"}),e.jsx("option",{value:"SK",children:"Sikkim"}),e.jsx("option",{value:"TN",children:"Tamil Nadu"}),e.jsx("option",{value:"TG",children:"Telangana"}),e.jsx("option",{value:"TR",children:"Tripura"}),e.jsx("option",{value:"UP",children:"Uttar Pradesh"}),e.jsx("option",{value:"UT",children:"Uttarakhand"}),e.jsx("option",{value:"WB",children:"West Bengal"})]}),e.jsx(c,{children:"Select your current state of residence"})]})})},y={name:"Caste Category",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsxs(o,{required:!0,children:[e.jsx(i,{htmlFor:"category",required:!0,children:"Caste Category"}),e.jsxs(a,{id:"category",placeholder:"Select category",required:!0,fullWidth:!0,children:[e.jsx("option",{value:"general",children:"General"}),e.jsx("option",{value:"obc",children:"OBC (Other Backward Classes)"}),e.jsx("option",{value:"sc",children:"SC (Scheduled Caste)"}),e.jsx("option",{value:"st",children:"ST (Scheduled Tribe)"}),e.jsx("option",{value:"ews",children:"EWS (Economically Weaker Section)"})]}),e.jsx(c,{children:"As per your caste certificate"})]})})},k={name:"Educational Qualification",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsxs(o,{required:!0,children:[e.jsx(i,{htmlFor:"education",required:!0,children:"Highest Educational Qualification"}),e.jsxs(a,{id:"education",placeholder:"Select qualification",required:!0,fullWidth:!0,children:[e.jsxs("optgroup",{label:"Below 10th",children:[e.jsx("option",{value:"below-10",children:"Below 10th Standard"}),e.jsx("option",{value:"10th",children:"10th Standard"})]}),e.jsxs("optgroup",{label:"Higher Secondary",children:[e.jsx("option",{value:"12th",children:"12th Standard / Intermediate"}),e.jsx("option",{value:"diploma",children:"Diploma"})]}),e.jsxs("optgroup",{label:"Graduate",children:[e.jsx("option",{value:"bachelor",children:"Bachelor's Degree"}),e.jsx("option",{value:"master",children:"Master's Degree"})]}),e.jsx("optgroup",{label:"Doctorate",children:e.jsx("option",{value:"phd",children:"PhD / Doctorate"})}),e.jsx("optgroup",{label:"Professional",children:e.jsx("option",{value:"professional",children:"Professional Degree (CA, CS, etc.)"})})]}),e.jsx(c,{children:"Select your highest completed qualification"})]})})},q={name:"Bank Selection",render:()=>e.jsx("div",{className:"max-w-md space-y-4",children:e.jsxs(o,{required:!0,children:[e.jsx(i,{htmlFor:"bank",required:!0,children:"Bank Name"}),e.jsxs(a,{id:"bank",placeholder:"Select your bank",required:!0,fullWidth:!0,children:[e.jsx("option",{value:"sbi",children:"State Bank of India"}),e.jsx("option",{value:"pnb",children:"Punjab National Bank"}),e.jsx("option",{value:"bob",children:"Bank of Baroda"}),e.jsx("option",{value:"canara",children:"Canara Bank"}),e.jsx("option",{value:"union",children:"Union Bank of India"}),e.jsx("option",{value:"boi",children:"Bank of India"}),e.jsx("option",{value:"indian",children:"Indian Bank"}),e.jsx("option",{value:"central",children:"Central Bank of India"}),e.jsx("option",{value:"iob",children:"Indian Overseas Bank"}),e.jsx("option",{value:"uco",children:"UCO Bank"}),e.jsx("option",{value:"bom",children:"Bank of Maharashtra"}),e.jsx("option",{value:"punjabsind",children:"Punjab & Sind Bank"}),e.jsx("option",{value:"icici",children:"ICICI Bank"}),e.jsx("option",{value:"hdfc",children:"HDFC Bank"}),e.jsx("option",{value:"axis",children:"Axis Bank"}),e.jsx("option",{value:"kotak",children:"Kotak Mahindra Bank"}),e.jsx("option",{value:"indusind",children:"IndusInd Bank"}),e.jsx("option",{value:"yes",children:"Yes Bank"})]}),e.jsx(c,{children:"Select the bank where you have an account"})]})})},F={name:"Month and Year Selection",render:()=>{const t=new Date().getFullYear(),n=Array.from({length:100},(r,d)=>t-d);return e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Date of Birth"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs(o,{required:!0,children:[e.jsx(i,{htmlFor:"birth-month",required:!0,children:"Month"}),e.jsxs(a,{id:"birth-month",placeholder:"Month",required:!0,fullWidth:!0,children:[e.jsx("option",{value:"01",children:"January"}),e.jsx("option",{value:"02",children:"February"}),e.jsx("option",{value:"03",children:"March"}),e.jsx("option",{value:"04",children:"April"}),e.jsx("option",{value:"05",children:"May"}),e.jsx("option",{value:"06",children:"June"}),e.jsx("option",{value:"07",children:"July"}),e.jsx("option",{value:"08",children:"August"}),e.jsx("option",{value:"09",children:"September"}),e.jsx("option",{value:"10",children:"October"}),e.jsx("option",{value:"11",children:"November"}),e.jsx("option",{value:"12",children:"December"})]})]}),e.jsxs(o,{required:!0,children:[e.jsx(i,{htmlFor:"birth-year",required:!0,children:"Year"}),e.jsx(a,{id:"birth-year",placeholder:"Year",required:!0,fullWidth:!0,children:n.map(r=>e.jsx("option",{value:r,children:r},r))})]})]})]})}},B={name:"Dependent Dropdowns (State → District)",render:()=>{var u;const[t,n]=T.useState(""),[r,d]=T.useState(""),p={maharashtra:["Mumbai","Pune","Nagpur","Nashik","Aurangabad"],karnataka:["Bengaluru","Mysuru","Hubballi","Mangaluru","Belagavi"],"tamil-nadu":["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem"],kerala:["Thiruvananthapuram","Kochi","Kozhikode","Thrissur","Kollam"]};return e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsxs(o,{required:!0,children:[e.jsx(i,{htmlFor:"dep-state",required:!0,children:"State"}),e.jsxs(a,{id:"dep-state",value:t,onChange:s=>{n(s.target.value),d("")},placeholder:"Select state",required:!0,fullWidth:!0,children:[e.jsx("option",{value:"maharashtra",children:"Maharashtra"}),e.jsx("option",{value:"karnataka",children:"Karnataka"}),e.jsx("option",{value:"tamil-nadu",children:"Tamil Nadu"}),e.jsx("option",{value:"kerala",children:"Kerala"})]})]}),e.jsxs(o,{required:!0,children:[e.jsx(i,{htmlFor:"dep-district",required:!0,children:"District"}),e.jsx(a,{id:"dep-district",value:r,onChange:s=>d(s.target.value),placeholder:t?"Select district":"Select state first",disabled:!t,required:!0,fullWidth:!0,children:t&&((u=p[t])==null?void 0:u.map(s=>e.jsx("option",{value:s.toLowerCase(),children:s},s)))}),e.jsxs(c,{children:[!t&&"Please select a state first",t&&"Select your district"]})]}),t&&r&&e.jsxs("p",{className:"text-sm text-gray-600",children:["Selected: ",t," → ",r]})]})}},O={name:"All Sizes",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(o,{children:[e.jsx(i,{htmlFor:"size-sm",children:"Small"}),e.jsxs(a,{id:"size-sm",size:"sm",placeholder:"Small select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]}),e.jsxs(o,{children:[e.jsx(i,{htmlFor:"size-md",children:"Medium (Default)"}),e.jsxs(a,{id:"size-md",size:"md",placeholder:"Medium select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]}),e.jsxs(o,{children:[e.jsx(i,{htmlFor:"size-lg",children:"Large"}),e.jsxs(a,{id:"size-lg",size:"lg",placeholder:"Large select",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]})]})},N={name:"All States",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(o,{children:[e.jsx(i,{htmlFor:"state-normal",children:"Normal"}),e.jsxs(a,{id:"state-normal",placeholder:"Select an option",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]}),e.jsxs(o,{children:[e.jsx(i,{htmlFor:"state-required",required:!0,children:"Required"}),e.jsxs(a,{id:"state-required",placeholder:"Select an option",required:!0,children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]}),e.jsxs(o,{error:!0,children:[e.jsx(i,{htmlFor:"state-error",children:"With Error"}),e.jsxs(a,{id:"state-error",placeholder:"Select an option",error:!0,children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsx(Oe,{children:"This field is required"})]}),e.jsxs(o,{children:[e.jsx(i,{htmlFor:"state-disabled",disabled:!0,children:"Disabled"}),e.jsxs(a,{id:"state-disabled",placeholder:"Select an option",disabled:!0,children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]})]})};var M,A,w;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: 'default',
    placeholder: 'Select an option',
    children: <>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
  }
}`,...(w=(A=h.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var P,I,W;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'small',
    size: 'sm',
    placeholder: 'Small select',
    children: <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
  }
}`,...(W=(I=m.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var H,z,R;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    id: 'medium',
    size: 'md',
    placeholder: 'Medium select (default)',
    children: <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
  }
}`,...(R=(z=v.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var E,K,Y;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'large',
    size: 'lg',
    placeholder: 'Large select',
    children: <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
  }
}`,...(Y=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var J,U,G;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    disabled: true,
    children: <>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
      </>
  }
}`,...(G=(U=j.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var V,Q,_;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Field error>
      <Label htmlFor="error-select">Country</Label>
      <Select id="error-select" placeholder="Select a country" error>
        <option value="india">India</option>
        <option value="usa">United States</option>
      </Select>
      <ErrorText>Please select a country</ErrorText>
    </Field>
}`,...(_=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var Z,$,X;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    id: 'fullwidth',
    fullWidth: true,
    placeholder: 'Full width select',
    children: <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
  }
}`,...(X=($=g.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var ee,ae,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="space-y-4">
        <Field>
          <Label htmlFor="controlled-select">Select a fruit</Label>
          <Select id="controlled-select" value={value} onChange={e => setValue(e.target.value)} placeholder="Choose a fruit">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="mango">Mango</option>
          </Select>
          <HintText>Your favorite fruit</HintText>
        </Field>

        <p className="text-sm text-gray-600">Selected: {value || 'None'}</p>

        <button onClick={() => setValue('mango')} className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm">
          Select Mango
        </button>
      </div>;
  }
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ie,re;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Indian State Selection',
  render: () => <div className="max-w-md">
      <Field required>
        <Label htmlFor="state" required>
          State / राज्य
        </Label>
        <Select id="state" placeholder="Select your state" required fullWidth>
          <option value="AN">Andaman and Nicobar Islands</option>
          <option value="AP">Andhra Pradesh</option>
          <option value="AR">Arunachal Pradesh</option>
          <option value="AS">Assam</option>
          <option value="BR">Bihar</option>
          <option value="CH">Chandigarh</option>
          <option value="CT">Chhattisgarh</option>
          <option value="DN">Dadra and Nagar Haveli</option>
          <option value="DD">Daman and Diu</option>
          <option value="DL">Delhi</option>
          <option value="GA">Goa</option>
          <option value="GJ">Gujarat</option>
          <option value="HR">Haryana</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="JK">Jammu and Kashmir</option>
          <option value="JH">Jharkhand</option>
          <option value="KA">Karnataka</option>
          <option value="KL">Kerala</option>
          <option value="LA">Ladakh</option>
          <option value="LD">Lakshadweep</option>
          <option value="MP">Madhya Pradesh</option>
          <option value="MH">Maharashtra</option>
          <option value="MN">Manipur</option>
          <option value="ML">Meghalaya</option>
          <option value="MZ">Mizoram</option>
          <option value="NL">Nagaland</option>
          <option value="OR">Odisha</option>
          <option value="PY">Puducherry</option>
          <option value="PB">Punjab</option>
          <option value="RJ">Rajasthan</option>
          <option value="SK">Sikkim</option>
          <option value="TN">Tamil Nadu</option>
          <option value="TG">Telangana</option>
          <option value="TR">Tripura</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="UT">Uttarakhand</option>
          <option value="WB">West Bengal</option>
        </Select>
        <HintText>Select your current state of residence</HintText>
      </Field>
    </div>
}`,...(re=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var le,ne,se;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Caste Category',
  render: () => <div className="max-w-md">
      <Field required>
        <Label htmlFor="category" required>
          Caste Category
        </Label>
        <Select id="category" placeholder="Select category" required fullWidth>
          <option value="general">General</option>
          <option value="obc">OBC (Other Backward Classes)</option>
          <option value="sc">SC (Scheduled Caste)</option>
          <option value="st">ST (Scheduled Tribe)</option>
          <option value="ews">EWS (Economically Weaker Section)</option>
        </Select>
        <HintText>As per your caste certificate</HintText>
      </Field>
    </div>
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var de,ce,pe;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Educational Qualification',
  render: () => <div className="max-w-md">
      <Field required>
        <Label htmlFor="education" required>
          Highest Educational Qualification
        </Label>
        <Select id="education" placeholder="Select qualification" required fullWidth>
          <optgroup label="Below 10th">
            <option value="below-10">Below 10th Standard</option>
            <option value="10th">10th Standard</option>
          </optgroup>
          <optgroup label="Higher Secondary">
            <option value="12th">12th Standard / Intermediate</option>
            <option value="diploma">Diploma</option>
          </optgroup>
          <optgroup label="Graduate">
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
          </optgroup>
          <optgroup label="Doctorate">
            <option value="phd">PhD / Doctorate</option>
          </optgroup>
          <optgroup label="Professional">
            <option value="professional">Professional Degree (CA, CS, etc.)</option>
          </optgroup>
        </Select>
        <HintText>Select your highest completed qualification</HintText>
      </Field>
    </div>
}`,...(pe=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,he,me;q.parameters={...q.parameters,docs:{...(ue=q.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Bank Selection',
  render: () => <div className="max-w-md space-y-4">
      <Field required>
        <Label htmlFor="bank" required>
          Bank Name
        </Label>
        <Select id="bank" placeholder="Select your bank" required fullWidth>
          <option value="sbi">State Bank of India</option>
          <option value="pnb">Punjab National Bank</option>
          <option value="bob">Bank of Baroda</option>
          <option value="canara">Canara Bank</option>
          <option value="union">Union Bank of India</option>
          <option value="boi">Bank of India</option>
          <option value="indian">Indian Bank</option>
          <option value="central">Central Bank of India</option>
          <option value="iob">Indian Overseas Bank</option>
          <option value="uco">UCO Bank</option>
          <option value="bom">Bank of Maharashtra</option>
          <option value="punjabsind">Punjab & Sind Bank</option>
          <option value="icici">ICICI Bank</option>
          <option value="hdfc">HDFC Bank</option>
          <option value="axis">Axis Bank</option>
          <option value="kotak">Kotak Mahindra Bank</option>
          <option value="indusind">IndusInd Bank</option>
          <option value="yes">Yes Bank</option>
        </Select>
        <HintText>Select the bank where you have an account</HintText>
      </Field>
    </div>
}`,...(me=(he=q.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var ve,xe,je;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Month and Year Selection',
  render: () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({
      length: 100
    }, (_, i) => currentYear - i);
    return <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Date of Birth</h3>

        <div className="grid grid-cols-2 gap-4">
          <Field required>
            <Label htmlFor="birth-month" required>
              Month
            </Label>
            <Select id="birth-month" placeholder="Month" required fullWidth>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Select>
          </Field>

          <Field required>
            <Label htmlFor="birth-year" required>
              Year
            </Label>
            <Select id="birth-year" placeholder="Year" required fullWidth>
              {years.map(year => <option key={year} value={year}>
                  {year}
                </option>)}
            </Select>
          </Field>
        </div>
      </div>;
  }
}`,...(je=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Se,ge,be;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Dependent Dropdowns (State → District)',
  render: () => {
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const districts: Record<string, string[]> = {
      maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
      karnataka: ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru', 'Belagavi'],
      'tamil-nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
      kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam']
    };
    return <div className="max-w-md space-y-4">
        <Field required>
          <Label htmlFor="dep-state" required>
            State
          </Label>
          <Select id="dep-state" value={state} onChange={e => {
          setState(e.target.value);
          setDistrict(''); // Reset district when state changes
        }} placeholder="Select state" required fullWidth>
            <option value="maharashtra">Maharashtra</option>
            <option value="karnataka">Karnataka</option>
            <option value="tamil-nadu">Tamil Nadu</option>
            <option value="kerala">Kerala</option>
          </Select>
        </Field>

        <Field required>
          <Label htmlFor="dep-district" required>
            District
          </Label>
          <Select id="dep-district" value={district} onChange={e => setDistrict(e.target.value)} placeholder={state ? 'Select district' : 'Select state first'} disabled={!state} required fullWidth>
            {state && districts[state]?.map(dist => <option key={dist} value={dist.toLowerCase()}>
                  {dist}
                </option>)}
          </Select>
          <HintText>
            {!state && 'Please select a state first'}
            {state && 'Select your district'}
          </HintText>
        </Field>

        {state && district && <p className="text-sm text-gray-600">
            Selected: {state} → {district}
          </p>}
      </div>;
  }
}`,...(be=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,ye,ke;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div className="space-y-4">
      <Field>
        <Label htmlFor="size-sm">Small</Label>
        <Select id="size-sm" size="sm" placeholder="Small select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="size-md">Medium (Default)</Label>
        <Select id="size-md" size="md" placeholder="Medium select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="size-lg">Large</Label>
        <Select id="size-lg" size="lg" placeholder="Large select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>
    </div>
}`,...(ke=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var qe,Fe,Be;N.parameters={...N.parameters,docs:{...(qe=N.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div className="space-y-4">
      <Field>
        <Label htmlFor="state-normal">Normal</Label>
        <Select id="state-normal" placeholder="Select an option">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="state-required" required>
          Required
        </Label>
        <Select id="state-required" placeholder="Select an option" required>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field error>
        <Label htmlFor="state-error">With Error</Label>
        <Select id="state-error" placeholder="Select an option" error>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
        <ErrorText>This field is required</ErrorText>
      </Field>

      <Field>
        <Label htmlFor="state-disabled" disabled>
          Disabled
        </Label>
        <Select id="state-disabled" placeholder="Select an option" disabled>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>
    </div>
}`,...(Be=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};const Ze=["Default","Small","Medium","Large","Disabled","WithError","FullWidth","Controlled","StateSelection","CategorySelection","EducationQualification","BankSelection","MonthYearSelection","DependentSelects","AllSizes","AllStates"];export{O as AllSizes,N as AllStates,q as BankSelection,y as CategorySelection,b as Controlled,h as Default,B as DependentSelects,j as Disabled,k as EducationQualification,g as FullWidth,x as Large,v as Medium,F as MonthYearSelection,m as Small,f as StateSelection,S as WithError,Ze as __namedExportsOrder,_e as default};
