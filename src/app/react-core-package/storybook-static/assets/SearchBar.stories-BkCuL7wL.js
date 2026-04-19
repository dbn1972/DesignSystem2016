import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-G8LIXM5I.js";import{c as Ce}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const t=o.forwardRef(({size:e="md",disabled:r=!1,error:s=!1,showClearButton:T=!0,loading:c=!1,onSearch:n,onClear:x,onChange:D,value:C,defaultValue:ve="",className:ye,...be},qe)=>{const[Ae,E]=o.useState(ve),N=C??Ae,I=C!==void 0,Te=l=>{const Ne=l.target.value;I||E(Ne),D==null||D(l)},xe=l=>{l.key==="Enter"&&(n==null||n(N))},De=()=>{I||E(""),x==null||x()};return a.jsxs("div",{className:Ce("ux4g-search-bar",`ux4g-search-bar-${e}`,s&&"ux4g-search-bar-error",r&&"ux4g-search-bar-disabled",ye),children:[a.jsx("span",{className:"ux4g-search-bar-icon","aria-hidden":"true",children:"🔍"}),a.jsx("input",{ref:qe,type:"search",className:"ux4g-search-bar-input",value:N,onChange:Te,onKeyDown:xe,disabled:r,...be}),c&&a.jsx("span",{className:"ux4g-search-bar-loading","aria-hidden":"true",children:"⏳"}),T&&N&&!c&&a.jsx("button",{type:"button",className:"ux4g-search-bar-clear",onClick:De,"aria-label":"Clear search",children:"×"})]})});t.displayName="SearchBar";t.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by reference"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by reference"},name:{required:!1,tsType:{name:"string"},description:"Field name for form submission"},id:{required:!1,tsType:{name:"string"},description:"Field ID (links label to input)"},required:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Whether the field is read-only
@default false`},error:{required:!1,tsType:{name:"boolean"},description:`Error state indicator
@default false`,defaultValue:{value:"false",computed:!1}},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"ARIA invalid state"},"aria-required":{required:!1,tsType:{name:"boolean"},description:"ARIA required state"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Input size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Search handler"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Clear handler"},showClearButton:{required:!1,tsType:{name:"boolean"},description:`Show clear button
@default true`,defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Loading state
@default false`,defaultValue:{value:"false",computed:!1}},defaultValue:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const Be={title:"Components/SearchBar",component:t,tags:["autodocs"]},i={args:{placeholder:"Search..."}},d={render:()=>{const[e,r]=o.useState("");return a.jsxs("div",{children:[a.jsx(t,{placeholder:"Search applications by ID or name...",value:e,onChange:s=>r(s.target.value),onSearch:s=>console.log("Searching:",s)}),e&&a.jsxs("p",{style:{marginTop:"1rem"},children:["Searching for: ",e]})]})}},u={args:{placeholder:"Search citizens by Aadhaar or name...",onSearch:e=>console.log("Searching:",e)}},p={args:{placeholder:"Search documents in DigiLocker...",onSearch:e=>console.log("Searching:",e)}},m={args:{placeholder:"Enter PAN number (e.g., ABCDE1234F)",onSearch:e=>console.log("Searching PAN:",e)}},h={args:{placeholder:"Enter Aadhaar number (12 digits)",onSearch:e=>console.log("Searching Aadhaar:",e)}},g={args:{placeholder:"Search government schemes...",onSearch:e=>console.log("Searching schemes:",e)}},S={args:{placeholder:"Search government departments...",onSearch:e=>console.log("Searching departments:",e)}},f={args:{placeholder:"Search state government services...",onSearch:e=>console.log("Searching:",e)}},v={render:()=>{const[e,r]=o.useState(!1),[s,T]=o.useState(""),c=n=>{r(!0),setTimeout(()=>{console.log("Search complete:",n),r(!1)},2e3)};return a.jsx(t,{placeholder:"Search...",value:s,onChange:n=>T(n.target.value),onSearch:c,loading:e})}},y={args:{size:"sm",placeholder:"Small search..."}},b={args:{size:"lg",placeholder:"Large search..."}},q={args:{disabled:!0,value:"Disabled search"}},A={args:{error:!0,placeholder:"Search..."}};var L,w,j;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...'
  }
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var B,z,R;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState('');
    return <div>
        <SearchBar placeholder="Search applications by ID or name..." value={query} onChange={e => setQuery(e.target.value)} onSearch={value => console.log('Searching:', value)} />
        {query && <p style={{
        marginTop: '1rem'
      }}>Searching for: {query}</p>}
      </div>;
  }
}`,...(R=(z=d.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var V,P,k;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search citizens by Aadhaar or name...',
    onSearch: value => console.log('Searching:', value)
  }
}`,...(k=(P=u.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var W,Q,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search documents in DigiLocker...',
    onSearch: value => console.log('Searching:', value)
  }
}`,...(F=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:F.source}}};var _,O,K;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter PAN number (e.g., ABCDE1234F)',
    onSearch: value => console.log('Searching PAN:', value)
  }
}`,...(K=(O=m.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var $,G,H;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter Aadhaar number (12 digits)',
    onSearch: value => console.log('Searching Aadhaar:', value)
  }
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,M,U;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search government schemes...',
    onSearch: value => console.log('Searching schemes:', value)
  }
}`,...(U=(M=g.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search government departments...',
    onSearch: value => console.log('Searching departments:', value)
  }
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search state government services...',
    onSearch: value => console.log('Searching:', value)
  }
}`,...(re=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ne,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const handleSearch = (value: string) => {
      setLoading(true);
      setTimeout(() => {
        console.log('Search complete:', value);
        setLoading(false);
      }, 2000);
    };
    return <SearchBar placeholder="Search..." value={query} onChange={e => setQuery(e.target.value)} onSearch={handleSearch} loading={loading} />;
  }
}`,...(oe=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,ce,le;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small search...'
  }
}`,...(le=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ie,de,ue;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large search...'
  }
}`,...(ue=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,he;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled search'
  }
}`,...(he=(me=q.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,Se,fe;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: 'Search...'
  }
}`,...(fe=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};const ze=["Basic","ApplicationSearch","CitizenSearch","DocumentSearch","PANSearch","AadhaarSearch","SchemeSearch","DepartmentSearch","StateServiceSearch","WithLoading","Small","Large","Disabled","WithError"];export{h as AadhaarSearch,d as ApplicationSearch,i as Basic,u as CitizenSearch,S as DepartmentSearch,q as Disabled,p as DocumentSearch,b as Large,m as PANSearch,g as SchemeSearch,y as Small,f as StateServiceSearch,A as WithError,v as WithLoading,ze as __namedExportsOrder,Be as default};
