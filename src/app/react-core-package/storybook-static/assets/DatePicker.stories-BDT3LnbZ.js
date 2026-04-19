import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-G8LIXM5I.js";import{c as le}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const n=i.forwardRef(({size:r="md",disabled:t=!1,error:a=!1,readOnly:s=!1,required:o=!1,className:re,onChange:S,...se},ne)=>{const ie=oe=>{S==null||S(oe.target.value)};return e.jsx("input",{ref:ne,type:"date",className:le("ux4g-input","ux4g-datepicker",`ux4g-input-${r}`,a&&"ux4g-input-error",t&&"ux4g-input-disabled",s&&"ux4g-input-readonly",re),disabled:t,readOnly:s,required:o,"aria-invalid":a,"aria-required":o,onChange:ie,...se})});n.displayName="DatePicker";n.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by reference"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by reference"},name:{required:!1,tsType:{name:"string"},description:"Field name for form submission"},id:{required:!1,tsType:{name:"string"},description:"Field ID (links label to input)"},required:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required
@default false`,defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:`Whether the field is read-only
@default false`,defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:`Error state indicator
@default false`,defaultValue:{value:"false",computed:!1}},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"ARIA invalid state"},"aria-required":{required:!1,tsType:{name:"boolean"},description:"ARIA required state"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Input size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Controlled value (ISO date string YYYY-MM-DD)"},min:{required:!1,tsType:{name:"string"},description:"Minimum date (ISO format YYYY-MM-DD)"},max:{required:!1,tsType:{name:"string"},description:"Maximum date (ISO format YYYY-MM-DD)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"}},composes:["Omit"]};const ge={title:"Components/DatePicker",component:n,tags:["autodocs"]},l={args:{}},d={args:{value:"2024-03-15"}},c={args:{placeholder:"Select date of birth",max:new Date().toISOString().split("T")[0]}},u={render:()=>{const[r,t]=i.useState(""),a=new Date().toISOString().split("T")[0];return e.jsxs("div",{children:[e.jsx("label",{className:"ux4g-label",children:"Date of Birth (as per Aadhaar)"}),e.jsx(n,{value:r,onChange:t,max:a,required:!0}),e.jsx("p",{className:"ux4g-hint-text",children:"Enter your date of birth as shown on Aadhaar card"})]})}},m={render:()=>{const[r,t]=i.useState(""),a=new Date().toISOString().split("T")[0],s=new Date;s.setMonth(s.getMonth()+3);const o=s.toISOString().split("T")[0];return e.jsxs("div",{children:[e.jsx("label",{className:"ux4g-label",children:"Preferred Appointment Date"}),e.jsx(n,{value:r,onChange:t,min:a,max:o}),e.jsx("p",{className:"ux4g-hint-text",children:"Select a date within next 3 months"})]})}},p={args:{placeholder:"Application date",value:new Date().toISOString().split("T")[0],readOnly:!0}},g={render:()=>{const[r,t]=i.useState("");return e.jsxs("div",{children:[e.jsx("label",{className:"ux4g-label",children:"Current License Expiry Date"}),e.jsx(n,{value:r,onChange:t}),e.jsx("p",{className:"ux4g-hint-text",children:"Enter expiry date from your current driving license"})]})}},x={args:{min:"2024-01-01",max:"2024-12-31"}},D={args:{value:"2024-03-15",disabled:!0}},h={args:{error:!0}},f={render:()=>{const[r,t]=i.useState(""),a=new Date;a.setFullYear(a.getFullYear()-18);const s=a.toISOString().split("T")[0];return e.jsxs("div",{children:[e.jsx("label",{className:"ux4g-label",children:"Date of Birth"}),e.jsx(n,{value:r,onChange:t,max:s,required:!0}),e.jsx("p",{className:"ux4g-hint-text",children:"You must be at least 18 years old to register as a voter"})]})}},b={render:()=>{const[r,t]=i.useState(""),a=new Date;a.setDate(a.getDate()+1);const s=a.toISOString().split("T")[0];return e.jsxs("div",{children:[e.jsx("label",{className:"ux4g-label",children:"Event Date"}),e.jsx(n,{value:r,onChange:t,min:s}),e.jsx("p",{className:"ux4g-hint-text",children:"Select a future date for the event"})]})}};var v,y,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {}
}`,...(T=(y=l.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var q,A,I;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: '2024-03-15'
  }
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var N,O,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select date of birth',
    max: new Date().toISOString().split('T')[0]
  }
}`,...(w=(O=c.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var j,E,Y;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [dob, setDob] = useState('');
    const maxDate = new Date().toISOString().split('T')[0];
    return <div>
        <label className="ux4g-label">Date of Birth (as per Aadhaar)</label>
        <DatePicker value={dob} onChange={setDob} max={maxDate} required />
        <p className="ux4g-hint-text">Enter your date of birth as shown on Aadhaar card</p>
      </div>;
  }
}`,...(Y=(E=u.parameters)==null?void 0:E.docs)==null?void 0:Y.source}}};var C,P,M;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState('');
    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const max = maxDate.toISOString().split('T')[0];
    return <div>
        <label className="ux4g-label">Preferred Appointment Date</label>
        <DatePicker value={date} onChange={setDate} min={today} max={max} />
        <p className="ux4g-hint-text">Select a date within next 3 months</p>
      </div>;
  }
}`,...(M=(P=m.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var k,R,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Application date',
    value: new Date().toISOString().split('T')[0],
    readOnly: true
  }
}`,...(B=(R=p.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var V,W,F;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [expiry, setExpiry] = useState('');
    return <div>
        <label className="ux4g-label">Current License Expiry Date</label>
        <DatePicker value={expiry} onChange={setExpiry} />
        <p className="ux4g-hint-text">Enter expiry date from your current driving license</p>
      </div>;
  }
}`,...(F=(W=g.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var L,_,z;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    min: '2024-01-01',
    max: '2024-12-31'
  }
}`,...(z=(_=x.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var $,G,H;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: '2024-03-15',
    disabled: true
  }
}`,...(H=(G=D.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [dob, setDob] = useState('');
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18);
    const max = maxDate.toISOString().split('T')[0];
    return <div>
        <label className="ux4g-label">Date of Birth</label>
        <DatePicker value={dob} onChange={setDob} max={max} required />
        <p className="ux4g-hint-text">You must be at least 18 years old to register as a voter</p>
      </div>;
  }
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState('');
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    const min = minDate.toISOString().split('T')[0];
    return <div>
        <label className="ux4g-label">Event Date</label>
        <DatePicker value={date} onChange={setDate} min={min} />
        <p className="ux4g-hint-text">Select a future date for the event</p>
      </div>;
  }
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const xe=["Basic","WithValue","DateOfBirth","AadhaarDOB","PassportApplicationDate","PANApplicationDate","LicenseExpiryDate","WithMinMax","Disabled","WithError","VoterRegistrationDOB","EventRegistration"];export{u as AadhaarDOB,l as Basic,c as DateOfBirth,D as Disabled,b as EventRegistration,g as LicenseExpiryDate,p as PANApplicationDate,m as PassportApplicationDate,f as VoterRegistrationDOB,h as WithError,x as WithMinMax,d as WithValue,xe as __namedExportsOrder,ge as default};
