import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-G8LIXM5I.js";import{c as R}from"./cn-BaF2GUMg.js";import{u as Ye}from"./Field.context-i6-YOkUP.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function Je(...l){const t=l.flatMap(s=>s?s.split(" "):[]).filter(Boolean);return t.length>0?Array.from(new Set(t)).join(" "):void 0}const d=i.forwardRef(({options:l,value:t,defaultValue:s="",onChange:b,onSelect:M,filterFn:xe,loading:ke=!1,emptyMessage:Ae="No options found",maxOptions:je=10,size:De="md",disabled:Ce,error:Ne,className:we,id:Ie,required:Be,"aria-describedby":Te,"aria-invalid":Me,...Pe},qe)=>{const n=Ye(),[Oe,E]=i.useState(s),[f,p]=i.useState(!1),[c,m]=i.useState(-1),P=i.useRef(null),S=i.useId(),Re=Ie??(n==null?void 0:n.inputId),L=Ce??(n==null?void 0:n.disabled)??!1,H=Ne??(n==null?void 0:n.invalid)??!1,Ee=Be??(n==null?void 0:n.required)??!1,Le=Je(Te,n==null?void 0:n.describedBy),q=t??Oe,F=t!==void 0,He=(e,r)=>(typeof e.label=="string"?e.label:e.value).toLowerCase().includes(r.toLowerCase()),o=l.filter(e=>q?(xe||He)(e,q):!0).slice(0,je);i.useEffect(()=>{const e=r=>{P.current&&!P.current.contains(r.target)&&p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const Fe=e=>{F||E(e),b==null||b(e),p(!0),m(o.length>0?0:-1)},K=e=>{if(e.disabled)return;const r=typeof e.label=="string"?e.label:e.value;F||E(r),b==null||b(r),M==null||M(e),p(!1),m(-1)},Ke=e=>{if(!f){e.key==="ArrowDown"&&(e.preventDefault(),p(!0),m(o.findIndex(r=>!r.disabled)));return}switch(e.key){case"ArrowDown":e.preventDefault(),m(r=>{var v;const u=r<o.length-1?r+1:0;return(v=o[u])!=null&&v.disabled?o.findIndex((y,h)=>h>u&&!y.disabled):u});break;case"ArrowUp":e.preventDefault(),m(r=>{var v,y;const u=r>0?r-1:o.length-1;return(v=o[u])!=null&&v.disabled?((y=[...o].map((h,O)=>({option:h,index:O})).reverse().find(({option:h,index:O})=>O<u&&!h.disabled))==null?void 0:y.index)??-1:u});break;case"Enter":e.preventDefault(),c>=0&&o[c]&&K(o[c]);break;case"Escape":p(!1),m(-1);break;case"Tab":p(!1);break}},Ue=c>=0&&o[c]?`${S}-option-${c}`:void 0;return a.jsxs("div",{ref:P,className:R("ux4g-autocomplete",we),children:[a.jsx("input",{ref:qe,id:Re,type:"text",className:R("ux4g-input",`ux4g-input-${De}`,H&&"ux4g-input-error",L&&"ux4g-input-disabled"),value:q,onChange:e=>Fe(e.target.value),onFocus:()=>p(!0),onKeyDown:Ke,disabled:L,required:Ee,role:"combobox","aria-autocomplete":"list","aria-expanded":f,"aria-controls":S,"aria-activedescendant":f?Ue:void 0,"aria-describedby":Le,"aria-invalid":Me??H,...Pe}),f&&a.jsx("div",{id:S,role:"listbox",className:"ux4g-autocomplete-dropdown",children:ke?a.jsx("div",{className:"ux4g-autocomplete-loading",role:"status","aria-live":"polite",children:"Loading..."}):o.length>0?o.map((e,r)=>a.jsx("div",{id:`${S}-option-${r}`,role:"option","aria-selected":r===c,"aria-disabled":e.disabled||void 0,className:R("ux4g-autocomplete-option",r===c&&"ux4g-autocomplete-option-highlighted",e.disabled&&"ux4g-autocomplete-option-disabled"),onMouseDown:u=>u.preventDefault(),onClick:()=>K(e),onMouseEnter:()=>!e.disabled&&m(r),children:e.label},e.value)):a.jsx("div",{className:"ux4g-autocomplete-empty",role:"status","aria-live":"polite",children:Ae})})]})});d.displayName="Autocomplete";d.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled
@default false`},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by reference"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by reference"},name:{required:!1,tsType:{name:"string"},description:"Field name for form submission"},id:{required:!1,tsType:{name:"string"},description:"Field ID (links label to input)"},required:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Whether the field is read-only
@default false`},error:{required:!1,tsType:{name:"boolean"},description:`Error state indicator
@default false`},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"ARIA invalid state"},"aria-required":{required:!1,tsType:{name:"boolean"},description:"ARIA required state"},options:{required:!0,tsType:{name:"Array",elements:[{name:"AutocompleteOption"}],raw:"AutocompleteOption[]"},description:"Available options"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Input size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOption) => void",signature:{arguments:[{type:{name:"AutocompleteOption"},name:"option"}],return:{name:"void"}}},description:"Select handler"},filterFn:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOption, query: string) => boolean",signature:{arguments:[{type:{name:"AutocompleteOption"},name:"option"},{type:{name:"string"},name:"query"}],return:{name:"boolean"}}},description:"Filter function"},loading:{required:!1,tsType:{name:"boolean"},description:`Loading state
@default false`,defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactNode"},description:"Empty state message",defaultValue:{value:"'No options found'",computed:!1}},maxOptions:{required:!1,tsType:{name:"number"},description:`Maximum options to show
@default 10`,defaultValue:{value:"10",computed:!1}},defaultValue:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const Ze={title:"Components/Autocomplete",component:d,tags:["autodocs"]},g=[{value:"AN",label:"Andaman and Nicobar Islands"},{value:"AP",label:"Andhra Pradesh"},{value:"AR",label:"Arunachal Pradesh"},{value:"AS",label:"Assam"},{value:"BR",label:"Bihar"},{value:"CH",label:"Chandigarh"},{value:"CT",label:"Chhattisgarh"},{value:"DN",label:"Dadra and Nagar Haveli"},{value:"DD",label:"Daman and Diu"},{value:"DL",label:"Delhi"},{value:"GA",label:"Goa"},{value:"GJ",label:"Gujarat"},{value:"HR",label:"Haryana"},{value:"HP",label:"Himachal Pradesh"},{value:"JK",label:"Jammu and Kashmir"},{value:"JH",label:"Jharkhand"},{value:"KA",label:"Karnataka"},{value:"KL",label:"Kerala"},{value:"LA",label:"Ladakh"},{value:"LD",label:"Lakshadweep"},{value:"MP",label:"Madhya Pradesh"},{value:"MH",label:"Maharashtra"},{value:"MN",label:"Manipur"},{value:"ML",label:"Meghalaya"},{value:"MZ",label:"Mizoram"},{value:"NL",label:"Nagaland"},{value:"OR",label:"Odisha"},{value:"PY",label:"Puducherry"},{value:"PB",label:"Punjab"},{value:"RJ",label:"Rajasthan"},{value:"SK",label:"Sikkim"},{value:"TN",label:"Tamil Nadu"},{value:"TG",label:"Telangana"},{value:"TR",label:"Tripura"},{value:"UP",label:"Uttar Pradesh"},{value:"UT",label:"Uttarakhand"},{value:"WB",label:"West Bengal"}],x={args:{options:g,placeholder:"Select state"}},k={render:()=>{const[l,t]=i.useState("");return a.jsxs("div",{children:[a.jsx("label",{className:"ux4g-label",children:"State"}),a.jsx(d,{options:g,value:l,onChange:t,placeholder:"Start typing to search..."}),l&&a.jsxs("p",{className:"ux4g-hint-text",children:["Selected: ",l]})]})}},A={render:()=>{const[l,t]=i.useState(""),s=[{value:"mumbai",label:"Mumbai"},{value:"delhi",label:"Delhi"},{value:"bengaluru",label:"Bengaluru"},{value:"hyderabad",label:"Hyderabad"},{value:"ahmedabad",label:"Ahmedabad"},{value:"chennai",label:"Chennai"},{value:"kolkata",label:"Kolkata"},{value:"pune",label:"Pune"},{value:"jaipur",label:"Jaipur"},{value:"lucknow",label:"Lucknow"}];return a.jsxs("div",{children:[a.jsx("label",{className:"ux4g-label",children:"City"}),a.jsx(d,{options:s,value:l,onChange:t,placeholder:"Search city..."})]})}},j={render:()=>{const[l,t]=i.useState(""),s=[{value:"mumbai-city",label:"Mumbai City"},{value:"mumbai-suburban",label:"Mumbai Suburban"},{value:"thane",label:"Thane"},{value:"pune",label:"Pune"},{value:"nashik",label:"Nashik"},{value:"nagpur",label:"Nagpur"},{value:"ahmednagar",label:"Ahmednagar"},{value:"solapur",label:"Solapur"}];return a.jsxs("div",{children:[a.jsx("label",{className:"ux4g-label",children:"District (Maharashtra)"}),a.jsx(d,{options:s,value:l,onChange:t,placeholder:"Select district..."})]})}},D={render:()=>{const[l,t]=i.useState(""),s=[{value:"sbi",label:"State Bank of India"},{value:"hdfc",label:"HDFC Bank"},{value:"icici",label:"ICICI Bank"},{value:"axis",label:"Axis Bank"},{value:"pnb",label:"Punjab National Bank"},{value:"bob",label:"Bank of Baroda"},{value:"canara",label:"Canara Bank"},{value:"union",label:"Union Bank of India"}];return a.jsxs("div",{children:[a.jsx("label",{className:"ux4g-label",children:"Bank Name"}),a.jsx(d,{options:s,value:l,onChange:t,placeholder:"Search bank..."})]})}},C={render:()=>{const[l,t]=i.useState(""),s=[{value:"income-tax",label:"Income Tax Department"},{value:"passport",label:"Passport Seva"},{value:"uidai",label:"UIDAI (Aadhaar)"},{value:"rto",label:"Regional Transport Office"},{value:"election",label:"Election Commission"},{value:"railways",label:"Indian Railways"},{value:"epfo",label:"EPFO"},{value:"esic",label:"ESIC"}];return a.jsxs("div",{children:[a.jsx("label",{className:"ux4g-label",children:"Government Department"}),a.jsx(d,{options:s,value:l,onChange:t,placeholder:"Search department..."})]})}},N={render:()=>{const[l,t]=i.useState(""),s=[{value:"salaried",label:"Salaried Employee"},{value:"self-employed",label:"Self Employed"},{value:"business",label:"Business Owner"},{value:"professional",label:"Professional"},{value:"farmer",label:"Farmer"},{value:"student",label:"Student"},{value:"retired",label:"Retired"},{value:"homemaker",label:"Homemaker"}];return a.jsxs("div",{children:[a.jsx("label",{className:"ux4g-label",children:"Occupation"}),a.jsx(d,{options:s,value:l,onChange:t,placeholder:"Select occupation..."})]})}},w={render:()=>{const[l,t]=i.useState(""),s=[{value:"pmjdy",label:"Pradhan Mantri Jan Dhan Yojana"},{value:"pmay",label:"Pradhan Mantri Awas Yojana"},{value:"ayushman",label:"Ayushman Bharat"},{value:"ujjwala",label:"Pradhan Mantri Ujjwala Yojana"},{value:"mudra",label:"Pradhan Mantri Mudra Yojana"},{value:"sukanya",label:"Sukanya Samriddhi Yojana"}];return a.jsxs("div",{children:[a.jsx("label",{className:"ux4g-label",children:"Government Scheme"}),a.jsx(d,{options:s,value:l,onChange:t,placeholder:"Search scheme..."})]})}},I={args:{options:g,loading:!0,placeholder:"Loading..."}},B={args:{options:g,error:!0,placeholder:"Select state"}},T={args:{options:g,disabled:!0,value:"Maharashtra"}};var U,Y,J;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options: indianStates,
    placeholder: 'Select state'
  }
}`,...(J=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var G,V,W;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState('');
    return <div>
        <label className="ux4g-label">State</label>
        <Autocomplete options={indianStates} value={state} onChange={setState} placeholder="Start typing to search..." />
        {state && <p className="ux4g-hint-text">Selected: {state}</p>}
      </div>;
  }
}`,...(W=(V=k.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var $,_,z;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [city, setCity] = useState('');
    const cities = [{
      value: 'mumbai',
      label: 'Mumbai'
    }, {
      value: 'delhi',
      label: 'Delhi'
    }, {
      value: 'bengaluru',
      label: 'Bengaluru'
    }, {
      value: 'hyderabad',
      label: 'Hyderabad'
    }, {
      value: 'ahmedabad',
      label: 'Ahmedabad'
    }, {
      value: 'chennai',
      label: 'Chennai'
    }, {
      value: 'kolkata',
      label: 'Kolkata'
    }, {
      value: 'pune',
      label: 'Pune'
    }, {
      value: 'jaipur',
      label: 'Jaipur'
    }, {
      value: 'lucknow',
      label: 'Lucknow'
    }];
    return <div>
        <label className="ux4g-label">City</label>
        <Autocomplete options={cities} value={city} onChange={setCity} placeholder="Search city..." />
      </div>;
  }
}`,...(z=(_=A.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var Z,Q,X;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [district, setDistrict] = useState('');
    const districts = [{
      value: 'mumbai-city',
      label: 'Mumbai City'
    }, {
      value: 'mumbai-suburban',
      label: 'Mumbai Suburban'
    }, {
      value: 'thane',
      label: 'Thane'
    }, {
      value: 'pune',
      label: 'Pune'
    }, {
      value: 'nashik',
      label: 'Nashik'
    }, {
      value: 'nagpur',
      label: 'Nagpur'
    }, {
      value: 'ahmednagar',
      label: 'Ahmednagar'
    }, {
      value: 'solapur',
      label: 'Solapur'
    }];
    return <div>
        <label className="ux4g-label">District (Maharashtra)</label>
        <Autocomplete options={districts} value={district} onChange={setDistrict} placeholder="Select district..." />
      </div>;
  }
}`,...(X=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,ae,le;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [bank, setBank] = useState('');
    const banks = [{
      value: 'sbi',
      label: 'State Bank of India'
    }, {
      value: 'hdfc',
      label: 'HDFC Bank'
    }, {
      value: 'icici',
      label: 'ICICI Bank'
    }, {
      value: 'axis',
      label: 'Axis Bank'
    }, {
      value: 'pnb',
      label: 'Punjab National Bank'
    }, {
      value: 'bob',
      label: 'Bank of Baroda'
    }, {
      value: 'canara',
      label: 'Canara Bank'
    }, {
      value: 'union',
      label: 'Union Bank of India'
    }];
    return <div>
        <label className="ux4g-label">Bank Name</label>
        <Autocomplete options={banks} value={bank} onChange={setBank} placeholder="Search bank..." />
      </div>;
  }
}`,...(le=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var te,re,se;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [dept, setDept] = useState('');
    const departments = [{
      value: 'income-tax',
      label: 'Income Tax Department'
    }, {
      value: 'passport',
      label: 'Passport Seva'
    }, {
      value: 'uidai',
      label: 'UIDAI (Aadhaar)'
    }, {
      value: 'rto',
      label: 'Regional Transport Office'
    }, {
      value: 'election',
      label: 'Election Commission'
    }, {
      value: 'railways',
      label: 'Indian Railways'
    }, {
      value: 'epfo',
      label: 'EPFO'
    }, {
      value: 'esic',
      label: 'ESIC'
    }];
    return <div>
        <label className="ux4g-label">Government Department</label>
        <Autocomplete options={departments} value={dept} onChange={setDept} placeholder="Search department..." />
      </div>;
  }
}`,...(se=(re=C.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,ie,oe;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [occupation, setOccupation] = useState('');
    const occupations = [{
      value: 'salaried',
      label: 'Salaried Employee'
    }, {
      value: 'self-employed',
      label: 'Self Employed'
    }, {
      value: 'business',
      label: 'Business Owner'
    }, {
      value: 'professional',
      label: 'Professional'
    }, {
      value: 'farmer',
      label: 'Farmer'
    }, {
      value: 'student',
      label: 'Student'
    }, {
      value: 'retired',
      label: 'Retired'
    }, {
      value: 'homemaker',
      label: 'Homemaker'
    }];
    return <div>
        <label className="ux4g-label">Occupation</label>
        <Autocomplete options={occupations} value={occupation} onChange={setOccupation} placeholder="Select occupation..." />
      </div>;
  }
}`,...(oe=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ue,de,ce;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [scheme, setScheme] = useState('');
    const schemes = [{
      value: 'pmjdy',
      label: 'Pradhan Mantri Jan Dhan Yojana'
    }, {
      value: 'pmay',
      label: 'Pradhan Mantri Awas Yojana'
    }, {
      value: 'ayushman',
      label: 'Ayushman Bharat'
    }, {
      value: 'ujjwala',
      label: 'Pradhan Mantri Ujjwala Yojana'
    }, {
      value: 'mudra',
      label: 'Pradhan Mantri Mudra Yojana'
    }, {
      value: 'sukanya',
      label: 'Sukanya Samriddhi Yojana'
    }];
    return <div>
        <label className="ux4g-label">Government Scheme</label>
        <Autocomplete options={schemes} value={scheme} onChange={setScheme} placeholder="Search scheme..." />
      </div>;
  }
}`,...(ce=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,be;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    options: indianStates,
    loading: true,
    placeholder: 'Loading...'
  }
}`,...(be=(me=I.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ve,he,ge;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    options: indianStates,
    error: true,
    placeholder: 'Select state'
  }
}`,...(ge=(he=B.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,Se,ye;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    options: indianStates,
    disabled: true,
    value: 'Maharashtra'
  }
}`,...(ye=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};const Qe=["Basic","StateSelection","CitySelection","DistrictSelection","BankSearch","DepartmentSearch","OccupationSearch","SchemeSearch","Loading","WithError","Disabled"];export{D as BankSearch,x as Basic,A as CitySelection,C as DepartmentSearch,T as Disabled,j as DistrictSelection,I as Loading,N as OccupationSearch,w as SchemeSearch,k as StateSelection,B as WithError,Qe as __namedExportsOrder,Ze as default};
