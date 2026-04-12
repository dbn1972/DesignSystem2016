import{j as e,r as o,X as F,S as D,i as B,h as T}from"./index-LBJNeHTL.js";import{C as q}from"./ComponentDocumentation-DvEedSJi.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const I=[{id:"1",name:"Mumbai",state:"Maharashtra"},{id:"2",name:"Delhi",state:"Delhi"},{id:"3",name:"Bangalore",state:"Karnataka"},{id:"4",name:"Hyderabad",state:"Telangana"},{id:"5",name:"Ahmedabad",state:"Gujarat"},{id:"6",name:"Chennai",state:"Tamil Nadu"},{id:"7",name:"Kolkata",state:"West Bengal"},{id:"8",name:"Pune",state:"Maharashtra"},{id:"9",name:"Jaipur",state:"Rajasthan"},{id:"10",name:"Surat",state:"Gujarat"},{id:"11",name:"Lucknow",state:"Uttar Pradesh"},{id:"12",name:"Kanpur",state:"Uttar Pradesh"},{id:"13",name:"Nagpur",state:"Maharashtra"},{id:"14",name:"Indore",state:"Madhya Pradesh"},{id:"15",name:"Thane",state:"Maharashtra"},{id:"16",name:"Bhopal",state:"Madhya Pradesh"},{id:"17",name:"Visakhapatnam",state:"Andhra Pradesh"},{id:"18",name:"Pimpri-Chinchwad",state:"Maharashtra"},{id:"19",name:"Patna",state:"Bihar"},{id:"20",name:"Vadodara",state:"Gujarat"},{id:"21",name:"Ghaziabad",state:"Uttar Pradesh"},{id:"22",name:"Ludhiana",state:"Punjab"},{id:"23",name:"Agra",state:"Uttar Pradesh"},{id:"24",name:"Nashik",state:"Maharashtra"},{id:"25",name:"Faridabad",state:"Haryana"},{id:"26",name:"Meerut",state:"Uttar Pradesh"},{id:"27",name:"Rajkot",state:"Gujarat"},{id:"28",name:"Kalyan-Dombivli",state:"Maharashtra"},{id:"29",name:"Vasai-Virar",state:"Maharashtra"},{id:"30",name:"Varanasi",state:"Uttar Pradesh"}],G=[{id:"d1",name:"Ministry of Home Affairs",code:"MHA"},{id:"d2",name:"Ministry of Finance",code:"MOF"},{id:"d3",name:"Ministry of Defence",code:"MOD"},{id:"d4",name:"Ministry of External Affairs",code:"MEA"},{id:"d5",name:"Ministry of Health and Family Welfare",code:"MOHFW"},{id:"d6",name:"Ministry of Education",code:"MOE"},{id:"d7",name:"Ministry of Rural Development",code:"MRD"},{id:"d8",name:"Ministry of Agriculture and Farmers Welfare",code:"MOAFW"},{id:"d9",name:"Ministry of Railways",code:"MOR"},{id:"d10",name:"Ministry of Road Transport and Highways",code:"MORTH"},{id:"d11",name:"Ministry of Electronics and Information Technology",code:"MEITY"},{id:"d12",name:"Ministry of Labour and Employment",code:"MOLE"}],U=[{id:"s1",name:"Pradhan Mantri Jan Dhan Yojana",category:"Financial Inclusion"},{id:"s2",name:"Pradhan Mantri Awas Yojana",category:"Housing"},{id:"s3",name:"Ayushman Bharat",category:"Healthcare"},{id:"s4",name:"PM-KISAN",category:"Agriculture"},{id:"s5",name:"Swachh Bharat Mission",category:"Sanitation"},{id:"s6",name:"Digital India",category:"Technology"},{id:"s7",name:"Make in India",category:"Manufacturing"},{id:"s8",name:"Skill India",category:"Education"},{id:"s9",name:"Beti Bachao Beti Padhao",category:"Women Empowerment"},{id:"s10",name:"Pradhan Mantri Ujjwala Yojana",category:"Energy"}],K=[{id:"sv1",name:"Passport Application",icon:"🛂"},{id:"sv2",name:"PAN Card",icon:"💳"},{id:"sv3",name:"Aadhaar Card",icon:"🆔"},{id:"sv4",name:"Driving License",icon:"🚗"},{id:"sv5",name:"Voter ID Card",icon:"🗳️"},{id:"sv6",name:"Ration Card",icon:"🌾"},{id:"sv7",name:"Birth Certificate",icon:"👶"},{id:"sv8",name:"Death Certificate",icon:"📄"},{id:"sv9",name:"Marriage Certificate",icon:"💍"},{id:"sv10",name:"Income Certificate",icon:"💰"}],Q=[{group:"Maharashtra",items:[{id:"mh1",name:"Mumbai"},{id:"mh2",name:"Pune"},{id:"mh3",name:"Nagpur"},{id:"mh4",name:"Thane"},{id:"mh5",name:"Nashik"}]},{group:"Karnataka",items:[{id:"ka1",name:"Bangalore"},{id:"ka2",name:"Mysore"},{id:"ka3",name:"Mangalore"},{id:"ka4",name:"Hubli"}]},{group:"Tamil Nadu",items:[{id:"tn1",name:"Chennai"},{id:"tn2",name:"Coimbatore"},{id:"tn3",name:"Madurai"},{id:"tn4",name:"Tiruchirappalli"}]},{group:"Gujarat",items:[{id:"gj1",name:"Ahmedabad"},{id:"gj2",name:"Surat"},{id:"gj3",name:"Vadodara"},{id:"gj4",name:"Rajkot"}]}],b=({options:l,placeholder:f="Search...",size:x="md",multiple:m=!1,disabled:p=!1,renderOption:S,groupBy:w})=>{const[h,u]=o.useState(!1),[A,O]=o.useState(""),[a,C]=o.useState(m?[]:null),[c,y]=o.useState(-1),M=o.useRef(null),i=o.useRef(null),s=o.useRef(null),g=A?l.filter(t=>(t.name||t).toLowerCase().includes(A.toLowerCase())):l,v=w?Q:null;o.useEffect(()=>{const t=r=>{s.current&&!s.current.contains(r.target)&&u(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]),o.useEffect(()=>{if(h&&c>=0&&i.current){const t=i.current.children[c];t&&t.scrollIntoView({block:"nearest"})}},[c,h]);const R=t=>{if(p)return;const r=v?v.reduce((n,d)=>n+d.items.length,0):g.length;switch(t.key){case"ArrowDown":t.preventDefault(),u(!0),y(n=>n<r-1?n+1:n);break;case"ArrowUp":t.preventDefault(),y(n=>n>0?n-1:0);break;case"Enter":if(t.preventDefault(),h&&c>=0){const n=v?v.flatMap(d=>d.items):g;j(n[c])}break;case"Escape":t.preventDefault(),u(!1),y(-1);break;case"Tab":u(!1);break}},j=t=>{var r;if(m){const n=a.some(d=>(d.id||d)===(t.id||t));C(n?a.filter(d=>(d.id||d)!==(t.id||t)):[...a,t]),O(""),(r=M.current)==null||r.focus()}else C(t),O(t.name||t),u(!1);y(-1)},V=t=>{C(a.filter(r=>(r.id||r)!==(t.id||t)))},L={sm:"h-8 px-2 text-sm",md:"h-10 px-3 text-base",lg:"h-12 px-4 text-lg"},H=()=>m&&a.length>0?"":A;return e.jsx("div",{className:"relative w-full max-w-md",ref:s,children:e.jsxs("div",{className:"relative flex flex-col gap-2 "+(m?"min-h-[44px]":""),children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-gray-300 bg-white "+(p?"opacity-60 cursor-not-allowed bg-gray-50":"cursor-text"),children:[m&&a.length>0&&e.jsx("div",{className:"flex flex-wrap gap-1 p-1",children:a.map((t,r)=>e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded",children:[t.name||t,e.jsx("button",{type:"button",onClick:n=>{n.stopPropagation(),V(t)},className:"inline-flex items-center hover:bg-blue-200 rounded",disabled:p,children:e.jsx(F,{size:14})})]},t.id||t))}),e.jsxs("div",{className:"flex-1 flex items-center",children:[e.jsx(D,{size:16,className:"text-gray-400 ml-2"}),e.jsx("input",{ref:M,type:"text",className:"flex-1 outline-none bg-transparent "+L[x],placeholder:f,value:H(),onChange:t=>{O(t.target.value),u(!0),y(-1)},onFocus:()=>!p&&u(!0),onKeyDown:R,disabled:p,role:"combobox","aria-expanded":h,"aria-autocomplete":"list","aria-controls":"autocomplete-listbox","aria-activedescendant":c>=0?"option-"+String(c):void 0})]}),e.jsx("button",{type:"button",className:"px-2 text-gray-400 hover:text-gray-600",onClick:()=>!p&&u(!h),disabled:p,children:e.jsx(B,{size:16,className:"transition-transform "+(h?"rotate-180":"")})})]}),h&&!p&&e.jsx("div",{ref:i,className:"absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto z-50",role:"listbox",id:"autocomplete-listbox",children:v?v.map((t,r)=>e.jsxs("div",{children:[e.jsx("div",{className:"px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b",children:t.group}),t.items.map((n,d)=>{const k=v.slice(0,r).reduce((N,P)=>N+P.items.length,0)+d,E=m?a.some(N=>(N.id||N)===(n.id||n)):((a==null?void 0:a.id)||a)===(n.id||n),z=k===c;return e.jsxs("div",{id:"option-"+String(k),role:"option","aria-selected":E,className:"px-3 py-2 cursor-pointer flex items-center justify-between "+(z?"bg-blue-50":E?"bg-blue-100":"hover:bg-gray-50"),onClick:()=>j(n),onMouseEnter:()=>y(k),children:[S?S(n):e.jsx("span",{children:n.name||n}),E&&e.jsx(T,{size:16,className:"text-blue-600"})]},n.id||n)})]},r)):g.length>0?g.map((t,r)=>{const n=m?a.some(k=>(k.id||k)===(t.id||t)):((a==null?void 0:a.id)||a)===(t.id||t),d=r===c;return e.jsxs("div",{id:"option-"+String(r),role:"option","aria-selected":n,className:"px-3 py-2 cursor-pointer flex items-center justify-between "+(d?"bg-blue-50":n?"bg-blue-100":"hover:bg-gray-50"),onClick:()=>j(t),onMouseEnter:()=>y(r),children:[S?S(t):e.jsx("span",{children:t.name||t}),n&&e.jsx(T,{size:16,className:"text-blue-600"})]},t.id||t)}):e.jsx("div",{className:"px-3 py-2 text-gray-500 text-sm",children:"No results found"})})]})})},W=()=>{const[l,f]=o.useState(!1),[x,m]=o.useState(""),[p,S]=o.useState(null),[w,h]=o.useState([]),[u,A]=o.useState(!1),[O,a]=o.useState(-1),C=o.useRef(null),c=o.useRef(null);o.useEffect(()=>{const i=s=>{c.current&&!c.current.contains(s.target)&&f(!1)};return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[]),o.useEffect(()=>{if(x.length>=2){A(!0);const i=setTimeout(()=>{const s=I.filter(g=>g.name.toLowerCase().includes(x.toLowerCase()));h(s),A(!1)},500);return()=>clearTimeout(i)}else h([])},[x]);const y=i=>{switch(i.key){case"ArrowDown":i.preventDefault(),f(!0),a(s=>s<w.length-1?s+1:s);break;case"ArrowUp":i.preventDefault(),a(s=>s>0?s-1:0);break;case"Enter":i.preventDefault(),l&&O>=0&&M(w[O]);break;case"Escape":i.preventDefault(),f(!1),a(-1);break;case"Tab":f(!1);break}},M=i=>{S(i),m(i.name),f(!1),a(-1)};return e.jsx("div",{className:"relative w-full max-w-md",ref:c,children:e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-gray-300 bg-white",children:[e.jsx(D,{size:16,className:"text-gray-400 ml-3"}),e.jsx("input",{ref:C,type:"text",className:"flex-1 h-10 px-3 py-2 outline-none bg-transparent text-base",placeholder:"Type to search cities...",value:x,onChange:i=>{m(i.target.value),f(!0),a(-1)},onFocus:()=>f(!0),onKeyDown:y,role:"combobox","aria-expanded":l,"aria-autocomplete":"list","aria-controls":"async-autocomplete-listbox"}),u&&e.jsx("div",{className:"px-3",children:e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"})})]}),l&&e.jsx("div",{className:"absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto z-50",role:"listbox",id:"async-autocomplete-listbox",children:u?e.jsx("div",{className:"px-3 py-2 text-gray-500 text-sm",children:"Loading..."}):w.length>0?w.map((i,s)=>{const g=(p==null?void 0:p.id)===i.id,v=s===O;return e.jsxs("div",{role:"option","aria-selected":g,className:"px-3 py-2 cursor-pointer flex items-center justify-between "+(v?"bg-blue-50":g?"bg-blue-100":"hover:bg-gray-50"),onClick:()=>M(i),onMouseEnter:()=>a(s),children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:i.name}),e.jsx("div",{className:"text-xs text-gray-500",children:i.state})]}),g&&e.jsx(T,{size:16,className:"text-blue-600"})]},i.id)}):x.length>=2?e.jsx("div",{className:"px-3 py-2 text-gray-500 text-sm",children:"No cities found"}):e.jsx("div",{className:"px-3 py-2 text-gray-500 text-sm",children:"Type at least 2 characters to search"})})]})})};function Z(){return e.jsx(q,{name:"Autocomplete",description:"Searchable dropdown and combobox component for selecting from large datasets. Supports single and multi-select modes, async data loading, custom rendering, keyboard navigation, and grouped options with full accessibility compliance.",category:"Form Elements",maturity:"beta",tier:"core",since:"v1.2.0",updated:"v2.1.0",props:[{name:"options",type:"Array<any>",required:!0,description:"Array of options to display in the dropdown. Can be primitive values or objects with id and name properties."},{name:"value",type:"any | Array<any>",required:!1,description:"Selected value(s). Single value for single-select mode, array for multi-select mode."},{name:"onChange",type:"(value: any | Array<any>) => void",required:!0,description:"Callback fired when selection changes. Receives the new selected value(s)."},{name:"onSearch",type:"(query: string) => void | Promise<void>",required:!1,description:"Callback fired when search query changes. Used for async data fetching or custom filtering."},{name:"placeholder",type:"string",default:"'Search...'",required:!1,description:"Placeholder text displayed in the search input."},{name:"multiple",type:"boolean",default:"false",required:!1,description:"Enable multi-select mode. Allows selecting multiple options with tag display."},{name:"loading",type:"boolean",default:"false",required:!1,description:"Loading state for async operations. Shows loading spinner and prevents interaction."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Disable the autocomplete. Prevents interaction and applies disabled styling."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Size of the autocomplete input. Small (32px), Medium (40px), Large (48px)."},{name:"renderOption",type:"(option: any) => ReactNode",required:!1,description:"Custom render function for options. Allows displaying additional information or custom layouts."},{name:"groupBy",type:"(option: any) => string",required:!1,description:"Function to group options by category. Returns the group label for each option."},{name:"filterOptions",type:"(options: Array<any>, query: string) => Array<any>",required:!1,description:"Custom filter function. Defaults to case-insensitive substring matching."},{name:"noOptionsText",type:"string",default:"'No results found'",required:!1,description:"Text displayed when no options match the search query."},{name:"loadingText",type:"string",default:"'Loading...'",required:!1,description:"Text displayed during async loading."},{name:"clearable",type:"boolean",default:"true",required:!1,description:"Show clear button to reset selection."},{name:"autoFocus",type:"boolean",default:"false",required:!1,description:"Automatically focus the input on mount."}],examples:[{title:"City Selector - Single Select",description:"Basic autocomplete for selecting a city. Searchable dropdown with Indian cities.",code:`import { Autocomplete } from '@ux4g/react-core';

const cities = [
  { id: '1', name: 'Mumbai', state: 'Maharashtra' },
  { id: '2', name: 'Delhi', state: 'Delhi' },
  { id: '3', name: 'Bangalore', state: 'Karnataka' },
  { id: '4', name: 'Hyderabad', state: 'Telangana' },
  { id: '5', name: 'Chennai', state: 'Tamil Nadu' },
];

function Example() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <Autocomplete
      options={cities}
      value={selectedCity}
      onChange={setSelectedCity}
      placeholder="Select your city"
      renderOption={(option) => option.name}
    />
  );
}`,preview:e.jsx(b,{options:I.slice(0,10),placeholder:"Select your city"})},{title:"Department Search",description:"Search government departments with code display.",code:`import { Autocomplete } from '@ux4g/react-core';

const departments = [
  { id: 'd1', name: 'Ministry of Home Affairs', code: 'MHA' },
  { id: 'd2', name: 'Ministry of Finance', code: 'MOF' },
  { id: 'd3', name: 'Ministry of Defence', code: 'MOD' },
  { id: 'd4', name: 'Ministry of Health', code: 'MOHFW' },
];

function Example() {
  const [department, setDepartment] = useState(null);

  return (
    <Autocomplete
      options={departments}
      value={department}
      onChange={setDepartment}
      placeholder="Search department"
      renderOption={(option) => (
        <div>
          <div className="font-medium">{option.name}</div>
          <div className="text-xs text-gray-500">{option.code}</div>
        </div>
      )}
    />
  );
}`,preview:e.jsx(b,{options:G,placeholder:"Search department",renderOption:l=>e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:l.name}),e.jsx("div",{className:"text-xs text-gray-500",children:l.code})]})})},{title:"Government Scheme Finder",description:"Find government schemes with category information.",code:`import { Autocomplete } from '@ux4g/react-core';

const schemes = [
  { id: 's1', name: 'Pradhan Mantri Jan Dhan Yojana', category: 'Financial Inclusion' },
  { id: 's2', name: 'Pradhan Mantri Awas Yojana', category: 'Housing' },
  { id: 's3', name: 'Ayushman Bharat', category: 'Healthcare' },
  { id: 's4', name: 'PM-KISAN', category: 'Agriculture' },
];

function Example() {
  const [scheme, setScheme] = useState(null);

  return (
    <Autocomplete
      options={schemes}
      value={scheme}
      onChange={setScheme}
      placeholder="Find a scheme"
      renderOption={(option) => (
        <div>
          <div className="font-medium">{option.name}</div>
          <div className="text-xs text-gray-500">{option.category}</div>
        </div>
      )}
    />
  );
}`,preview:e.jsx(b,{options:U,placeholder:"Find a scheme",renderOption:l=>e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:l.name}),e.jsx("div",{className:"text-xs text-gray-500",children:l.category})]})})},{title:"Multi-Select Services",description:"Select multiple government services with tag display.",code:`import { Autocomplete } from '@ux4g/react-core';

const services = [
  { id: 'sv1', name: 'Passport Application', icon: '🛂' },
  { id: 'sv2', name: 'PAN Card', icon: '💳' },
  { id: 'sv3', name: 'Aadhaar Card', icon: '🆔' },
  { id: 'sv4', name: 'Driving License', icon: '🚗' },
];

function Example() {
  const [selectedServices, setSelectedServices] = useState([]);

  return (
    <Autocomplete
      options={services}
      value={selectedServices}
      onChange={setSelectedServices}
      placeholder="Select services"
      multiple
      renderOption={(option) => (
        <span>{option.icon} {option.name}</span>
      )}
    />
  );
}`,preview:e.jsx(b,{options:K,placeholder:"Select services",multiple:!0,renderOption:l=>e.jsxs("span",{children:[l.icon," ",l.name]})})},{title:"Async Search with Loading",description:"Asynchronous city search with loading state and debouncing.",code:`import { Autocomplete } from '@ux4g/react-core';
import { useState, useEffect } from 'react';

function Example() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length >= 2) {
      setLoading(true);
      const timer = setTimeout(async () => {
        const response = await fetch(
          '/api/cities?q=' + encodeURIComponent(query)
        );
        const data = await response.json();
        setCities(data);
        setLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [query]);

  return (
    <Autocomplete
      options={cities}
      onSearch={setQuery}
      loading={loading}
      placeholder="Type to search cities..."
      renderOption={(option) => (
        <div>
          <div className="font-medium">{option.name}</div>
          <div className="text-xs text-gray-500">{option.state}</div>
        </div>
      )}
    />
  );
}`,preview:e.jsx(W,{})},{title:"Grouped Options - States and Cities",description:"Options grouped by state with visual separators.",code:`import { Autocomplete } from '@ux4g/react-core';

const locations = [
  {
    group: 'Maharashtra',
    items: [
      { id: 'mh1', name: 'Mumbai' },
      { id: 'mh2', name: 'Pune' },
      { id: 'mh3', name: 'Nagpur' },
    ],
  },
  {
    group: 'Karnataka',
    items: [
      { id: 'ka1', name: 'Bangalore' },
      { id: 'ka2', name: 'Mysore' },
    ],
  },
];

function Example() {
  const [city, setCity] = useState(null);

  return (
    <Autocomplete
      options={locations}
      value={city}
      onChange={setCity}
      placeholder="Select city"
      groupBy={(option) => option.state}
    />
  );
}`,preview:e.jsx(b,{options:[],placeholder:"Select city",groupBy:!0})},{title:"Different Sizes",description:"Autocomplete in small, medium, and large sizes.",code:`import { Autocomplete } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex flex-col gap-4">
      <Autocomplete
        options={cities}
        placeholder="Small size"
        size="sm"
      />
      <Autocomplete
        options={cities}
        placeholder="Medium size"
        size="md"
      />
      <Autocomplete
        options={cities}
        placeholder="Large size"
        size="lg"
      />
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(b,{options:I.slice(0,5),placeholder:"Small size",size:"sm"}),e.jsx(b,{options:I.slice(0,5),placeholder:"Medium size",size:"md"}),e.jsx(b,{options:I.slice(0,5),placeholder:"Large size",size:"lg"})]})},{title:"Disabled State",description:"Autocomplete in disabled state prevents interaction.",code:`import { Autocomplete } from '@ux4g/react-core';

function Example() {
  return (
    <Autocomplete
      options={cities}
      placeholder="Disabled autocomplete"
      disabled
    />
  );
}`,preview:e.jsx(b,{options:I.slice(0,5),placeholder:"Disabled autocomplete",disabled:!0})}],reactCode:{component:`import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { autocompleteVariants } from './autocomplete.variants';
import { AutocompleteProps } from './Autocomplete.types';
import { Search, ChevronDown, X, Check } from 'lucide-react';

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options = [],
      value,
      onChange,
      onSearch,
      placeholder = 'Search...',
      multiple = false,
      loading = false,
      disabled = false,
      size = 'md',
      renderOption,
      groupBy,
      filterOptions,
      noOptionsText = 'No results found',
      loadingText = 'Loading...',
      clearable = true,
      autoFocus = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const defaultFilterOptions = (opts: any[], query: string) => {
      if (!query) return opts;
      return opts.filter((option) =>
        String(option.name || option)
          .toLowerCase()
          .includes(query.toLowerCase())
      );
    };

    const filteredOptions = filterOptions
      ? filterOptions(options, searchQuery)
      : defaultFilterOptions(options, searchQuery);

    const groupedOptions = groupBy
      ? filteredOptions.reduce((groups: any, option: any) => {
          const group = groupBy(option);
          if (!groups[group]) {
            groups[group] = [];
          }
          groups[group].push(option);
          return groups;
        }, {})
      : null;

    useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [autoFocus]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
      if (onSearch) {
        onSearch(searchQuery);
      }
    }, [searchQuery, onSearch]);

    useEffect(() => {
      if (isOpen && highlightedIndex >= 0 && listRef.current) {
        const items = listRef.current.querySelectorAll('[role="option"]');
        const highlightedElement = items[highlightedIndex] as HTMLElement;
        if (highlightedElement) {
          highlightedElement.scrollIntoView({ block: 'nearest' });
        }
      }
    }, [highlightedIndex, isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      const itemCount = filteredOptions.length;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setIsOpen(true);
          setHighlightedIndex((prev) =>
            prev < itemCount - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (isOpen && highlightedIndex >= 0) {
            handleSelect(filteredOptions[highlightedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
        case 'Tab':
          setIsOpen(false);
          break;
      }
    };

    const handleSelect = (option: any) => {
      if (multiple) {
        const currentValue = Array.isArray(value) ? value : [];
        const isSelected = currentValue.some(
          (v: any) => (v.id || v) === (option.id || option)
        );
        if (isSelected) {
          onChange(currentValue.filter(
            (v: any) => (v.id || v) !== (option.id || option)
          ));
        } else {
          onChange([...currentValue, option]);
        }
        setSearchQuery('');
        inputRef.current?.focus();
      } else {
        onChange(option);
        setSearchQuery(option.name || String(option));
        setIsOpen(false);
      }
      setHighlightedIndex(-1);
    };

    const handleRemoveTag = (optionToRemove: any) => {
      const currentValue = Array.isArray(value) ? value : [];
      onChange(currentValue.filter(
        (v: any) => (v.id || v) !== (optionToRemove.id || optionToRemove)
      ));
    };

    const handleClear = () => {
      onChange(multiple ? [] : null);
      setSearchQuery('');
      inputRef.current?.focus();
    };

    const isSelected = (option: any) => {
      if (multiple) {
        const currentValue = Array.isArray(value) ? value : [];
        return currentValue.some(
          (v: any) => (v.id || v) === (option.id || option)
        );
      }
      return (value?.id || value) === (option.id || option);
    };

    return (
      <div
        ref={wrapperRef}
        className={cn('relative w-full', className)}
      >
        <div className={cn(autocompleteVariants({ size, disabled }))}>
          {multiple && Array.isArray(value) && value.length > 0 && (
            <div className="flex flex-wrap gap-1 p-1">
              {value.map((option: any) => (
                <span
                  key={option.id || option}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                >
                  {option.name || String(option)}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveTag(option);
                    }}
                    className="inline-flex items-center hover:bg-blue-200 rounded"
                    disabled={disabled}
                    aria-label="Remove"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}
          <div className="flex-1 flex items-center">
            <Search size={16} className="text-gray-400 ml-2" aria-hidden="true" />
            <input
              ref={inputRef}
              type="text"
              className="flex-1 outline-none bg-transparent px-3 py-2"
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsOpen(true);
                setHighlightedIndex(-1);
              }}
              onFocus={() => !disabled && setIsOpen(true)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              role="combobox"
              aria-expanded={isOpen}
              aria-autocomplete="list"
              aria-controls="autocomplete-listbox"
              aria-activedescendant={
                highlightedIndex >= 0
                  ? 'option-' + String(highlightedIndex)
                  : undefined
              }
              {...props}
            />
          </div>
          {loading && (
            <div className="px-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent" />
            </div>
          )}
          {clearable && (value || searchQuery) && !disabled && !loading && (
            <button
              type="button"
              className="px-2 text-gray-400 hover:text-gray-600"
              onClick={handleClear}
              aria-label="Clear"
            >
              <X size={16} />
            </button>
          )}
          <button
            type="button"
            className="px-2 text-gray-400 hover:text-gray-600"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled}
            aria-label="Toggle dropdown"
          >
            <ChevronDown
              size={16}
              className={cn(
                'transition-transform',
                isOpen && 'rotate-180'
              )}
            />
          </button>
        </div>

        {isOpen && !disabled && (
          <div
            ref={listRef}
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto z-50"
            role="listbox"
            id="autocomplete-listbox"
          >
            {loading ? (
              <div className="px-3 py-2 text-gray-500 text-sm">
                {loadingText}
              </div>
            ) : groupedOptions ? (
              Object.entries(groupedOptions).map(([group, items]: [string, any]) => (
                <div key={group}>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b">
                    {group}
                  </div>
                  {items.map((option: any, index: number) => (
                    <div
                      key={option.id || option}
                      role="option"
                      aria-selected={isSelected(option)}
                      className={cn(
                        'px-3 py-2 cursor-pointer flex items-center justify-between',
                        highlightedIndex === index && 'bg-blue-50',
                        isSelected(option) && 'bg-blue-100',
                        !isSelected(option) && highlightedIndex !== index && 'hover:bg-gray-50'
                      )}
                      onClick={() => handleSelect(option)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                    >
                      {renderOption ? renderOption(option) : (
                        <span>{option.name || String(option)}</span>
                      )}
                      {isSelected(option) && <Check size={16} className="text-blue-600" />}
                    </div>
                  ))}
                </div>
              ))
            ) : filteredOptions.length > 0 ? (
              filteredOptions.map((option: any, index: number) => (
                <div
                  key={option.id || option}
                  id={'option-' + String(index)}
                  role="option"
                  aria-selected={isSelected(option)}
                  className={cn(
                    'px-3 py-2 cursor-pointer flex items-center justify-between',
                    highlightedIndex === index && 'bg-blue-50',
                    isSelected(option) && 'bg-blue-100',
                    !isSelected(option) && highlightedIndex !== index && 'hover:bg-gray-50'
                  )}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {renderOption ? renderOption(option) : (
                    <span>{option.name || String(option)}</span>
                  )}
                  {isSelected(option) && <Check size={16} className="text-blue-600" />}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-500 text-sm">
                {noOptionsText}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';`,types:`export interface AutocompleteProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'size'>,
          AutocompleteVariantProps {
  options: Array<any>;
  value?: any | Array<any>;
  onChange: (value: any | Array<any>) => void;
  onSearch?: (query: string) => void | Promise<void>;
  placeholder?: string;
  multiple?: boolean;
  loading?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  renderOption?: (option: any) => React.ReactNode;
  groupBy?: (option: any) => string;
  filterOptions?: (options: Array<any>, query: string) => Array<any>;
  noOptionsText?: string;
  loadingText?: string;
  clearable?: boolean;
  autoFocus?: boolean;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const autocompleteVariants = cva(
  [
    'flex items-center gap-2',
    'rounded border border-gray-300 bg-white',
    'transition-all duration-150 ease-in-out',
    'focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2',
    'min-h-[44px]',
  ],
  {
    variants: {
      size: {
        sm: ['text-sm'],
        md: ['text-base'],
        lg: ['text-lg'],
      },
      disabled: {
        true: ['opacity-60', 'cursor-not-allowed', 'bg-gray-50'],
        false: ['cursor-text'],
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);

export type AutocompleteVariantProps = VariantProps<typeof autocompleteVariants>;`},angularCode:{component:`import { Component, Input, Output, EventEmitter, forwardRef, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

type AutocompleteSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ux4g-autocomplete',
  template: \`
    <div class="autocomplete-wrapper" #wrapper>
      <div [class]="getContainerClasses()">
        <div *ngIf="multiple && selectedValues.length > 0" class="tags-container">
          <span
            *ngFor="let option of selectedValues"
            class="tag"
          >
            {{ getOptionLabel(option) }}
            <button
              type="button"
              (click)="removeTag(option)"
              [disabled]="disabled"
              class="tag-remove"
            >
              <span class="icon-x">✕</span>
            </button>
          </span>
        </div>
        <div class="input-container">
          <span class="icon-search">🔍</span>
          <input
            #input
            type="text"
            [placeholder]="placeholder"
            [(ngModel)]="searchQuery"
            (ngModelChange)="onSearchChange($event)"
            (focus)="onFocus()"
            (blur)="onBlur()"
            (keydown)="onKeyDown($event)"
            [disabled]="disabled"
            role="combobox"
            [attr.aria-expanded]="isOpen"
            aria-autocomplete="list"
            class="autocomplete-input"
          />
        </div>
        <div *ngIf="loading" class="loading-spinner"></div>
        <button
          *ngIf="clearable && (hasValue() || searchQuery)"
          type="button"
          (click)="clear()"
          [disabled]="disabled"
          class="clear-button"
        >
          <span class="icon-x">✕</span>
        </button>
        <button
          type="button"
          (click)="toggle()"
          [disabled]="disabled"
          class="toggle-button"
        >
          <span [class.rotated]="isOpen" class="icon-chevron">⌄</span>
        </button>
      </div>

      <div
        *ngIf="isOpen && !disabled"
        class="options-list"
        role="listbox"
      >
        <div *ngIf="loading" class="option-item disabled">
          {{ loadingText }}
        </div>
        <ng-container *ngIf="!loading">
          <ng-container *ngIf="groupBy; else flatList">
            <div *ngFor="let group of getGroupedOptions()" class="option-group">
              <div class="group-label">{{ group.label }}</div>
              <div
                *ngFor="let option of group.options; let i = index"
                class="option-item"
                [class.highlighted]="isHighlighted(option)
                [class.selected]="isSelected(option)"
                (click)="selectOption(option)"
                (mouseenter)="highlightOption(option)"
                role="option"
                [attr.aria-selected]="isSelected(option)"
              >
                <ng-container *ngIf="optionTemplate; else defaultOption">
                  <ng-container *ngTemplateOutlet="optionTemplate; context: { $implicit: option }"></ng-container>
                </ng-container>
                <ng-template #defaultOption>
                  <span>{{ getOptionLabel(option) }}</span>
                </ng-template>
                <span *ngIf="isSelected(option)" class="icon-check">✓</span>
              </div>
            </div>
          </ng-container>
          <ng-template #flatList>
            <div
              *ngFor="let option of filteredOptions"
              class="option-item"
              [class.highlighted]="isHighlighted(option)"
              [class.selected]="isSelected(option)"
              (click)="selectOption(option)"
              (mouseenter)="highlightOption(option)"
              role="option"
              [attr.aria-selected]="isSelected(option)"
            >
              <ng-container *ngIf="optionTemplate; else defaultOption">
                <ng-container *ngTemplateOutlet="optionTemplate; context: { $implicit: option }"></ng-container>
              </ng-container>
              <ng-template #defaultOption>
                <span>{{ getOptionLabel(option) }}</span>
              </ng-template>
              <span *ngIf="isSelected(option)" class="icon-check">✓</span>
            </div>
          </ng-template>
          <div *ngIf="filteredOptions.length === 0" class="option-item disabled">
            {{ noOptionsText }}
          </div>
        </ng-container>
      </div>
    </div>
  \`,
  styleUrls: ['./autocomplete.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ]
})
export class AutocompleteComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() options: any[] = [];
  @Input() placeholder = 'Search...';
  @Input() multiple = false;
  @Input() loading = false;
  @Input() disabled = false;
  @Input() size: AutocompleteSize = 'md';
  @Input() groupBy?: (option: any) => string;
  @Input() filterOptions?: (options: any[], query: string) => any[];
  @Input() noOptionsText = 'No results found';
  @Input() loadingText = 'Loading...';
  @Input() clearable = true;
  @Input() autoFocus = false;
  @Input() optionTemplate?: any;
  
  @Output() searchChange = new EventEmitter<string>();
  @Output() selectionChange = new EventEmitter<any>();

  isOpen = false;
  searchQuery = '';
  selectedValues: any[] = [];
  highlightedOption: any = null;
  filteredOptions: any[] = [];
  
  private searchSubject = new Subject<string>();
  private onChange: any = () => {};
  private onTouched: any = () => {};

  ngOnInit() {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(query => {
        this.searchChange.emit(query);
        this.filterOptionsInternal();
      });

    this.filterOptionsInternal();
  }

  ngOnDestroy() {
    this.searchSubject.complete();
  }

  writeValue(value: any): void {
    if (this.multiple) {
      this.selectedValues = Array.isArray(value) ? value : [];
    } else {
      this.selectedValues = value ? [value] : [];
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSearchChange(query: string): void {
    this.searchSubject.next(query);
  }

  filterOptionsInternal(): void {
    if (this.filterOptions) {
      this.filteredOptions = this.filterOptions(this.options, this.searchQuery);
    } else {
      this.filteredOptions = this.options.filter(option =>
        this.getOptionLabel(option)
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      );
    }
  }

  getOptionLabel(option: any): string {
    return option?.name || String(option);
  }

  selectOption(option: any): void {
    if (this.multiple) {
      const index = this.selectedValues.findIndex(
        v => this.getOptionId(v) === this.getOptionId(option)
      );
      if (index >= 0) {
        this.selectedValues.splice(index, 1);
      } else {
        this.selectedValues.push(option);
      }
      this.onChange(this.selectedValues);
      this.searchQuery = '';
    } else {
      this.selectedValues = [option];
      this.onChange(option);
      this.searchQuery = this.getOptionLabel(option);
      this.isOpen = false;
    }
    this.selectionChange.emit(this.multiple ? this.selectedValues : option);
  }

  removeTag(option: any): void {
    this.selectedValues = this.selectedValues.filter(
      v => this.getOptionId(v) !== this.getOptionId(option)
    );
    this.onChange(this.selectedValues);
    this.selectionChange.emit(this.selectedValues);
  }

  clear(): void {
    this.selectedValues = [];
    this.searchQuery = '';
    this.onChange(this.multiple ? [] : null);
    this.selectionChange.emit(this.multiple ? [] : null);
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  onFocus(): void {
    this.isOpen = true;
  }

  onBlur(): void {
    setTimeout(() => {
      this.isOpen = false;
      this.onTouched();
    }, 200);
  }

  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.highlightNext();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.highlightPrevious();
        break;
      case 'Enter':
        event.preventDefault();
        if (this.highlightedOption) {
          this.selectOption(this.highlightedOption);
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.isOpen = false;
        break;
    }
  }

  highlightNext(): void {
    const index = this.filteredOptions.indexOf(this.highlightedOption);
    if (index < this.filteredOptions.length - 1) {
      this.highlightedOption = this.filteredOptions[index + 1];
    }
  }

  highlightPrevious(): void {
    const index = this.filteredOptions.indexOf(this.highlightedOption);
    if (index > 0) {
      this.highlightedOption = this.filteredOptions[index - 1];
    }
  }

  highlightOption(option: any): void {
    this.highlightedOption = option;
  }

  isHighlighted(option: any): boolean {
    return this.getOptionId(this.highlightedOption) === this.getOptionId(option);
  }

  isSelected(option: any): boolean {
    return this.selectedValues.some(
      v => this.getOptionId(v) === this.getOptionId(option)
    );
  }

  hasValue(): boolean {
    return this.selectedValues.length > 0;
  }

  getOptionId(option: any): any {
    return option?.id || option;
  }

  getContainerClasses(): string {
    const classes = ['autocomplete-container'];
    classes.push('autocomplete-' + this.size);
    if (this.disabled) classes.push('autocomplete-disabled');
    if (this.isOpen) classes.push('autocomplete-open');
    return classes.join(' ');
  }

  getGroupedOptions(): Array<{ label: string; options: any[] }> {
    if (!this.groupBy) return [];
    
    const groups: { [key: string]: any[] } = {};
    this.filteredOptions.forEach(option => {
      const label = this.groupBy!(option);
      if (!groups[label]) {
        groups[label] = [];
      }
      groups[label].push(option);
    });
    
    return Object.entries(groups).map(([label, options]) => ({
      label,
      options
    }));
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from './autocomplete.component';

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [CommonModule, FormsModule],
  exports: [AutocompleteComponent]
})
export class AutocompleteModule { }`,types:`export type AutocompleteSize = 'sm' | 'md' | 'lg';

export interface AutocompleteOption {
  id: any;
  name: string;
  [key: string]: any;
}

export interface AutocompleteGroupedOption {
  label: string;
  options: AutocompleteOption[];
}`},comparisons:[{system:"Material UI (Google)",component:"Autocomplete",variants:"single, multi-select, grouped, free solo",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-autocomplete/"},{system:"Ant Design (Alibaba)",component:"AutoComplete",variants:"default, custom options, search",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/auto-complete"},{system:"Chakra UI",component:"AutoComplete (via Combobox)",variants:"single, multi-select, custom rendering",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/docs/components/combobox"},{system:"Radix UI",component:"Combobox (headless)",variants:"Unstyled primitive",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://www.radix-ui.com/primitives/docs/components/combobox"},{system:"Headless UI",component:"Combobox",variants:"Unstyled, fully accessible",accessibility:"WCAG 2.1 AAA",documentation:"Good",link:"https://headlessui.com/react/combobox"},{system:"GOV.UK Design System",component:"Accessible Autocomplete",variants:"default, enhanced",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://github.com/alphagov/accessible-autocomplete"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 44x44px touch target size for interactive elements (WCAG 2.5.5)",'role="combobox" on input for proper assistive technology support',"aria-expanded attribute to announce dropdown state",'aria-autocomplete="list" to indicate autocomplete behavior',"aria-controls to link input with listbox","aria-activedescendant for announcing highlighted option",'role="listbox" and role="option" for proper list semantics',"aria-selected to indicate selected options","Keyboard navigation with Arrow keys, Enter, Escape, and Tab (WCAG 2.1.1)","Focus ring with 2px width and offset for keyboard navigation (WCAG 2.4.7)","Color contrast ratios meet or exceed 4.5:1 for text (WCAG 1.4.3)","Screen reader announcements for loading, selected, and no results states","Icons properly hidden from screen readers with aria-hidden","Clear button with descriptive aria-label"],keyboardSupport:[{key:"Tab",action:"Move focus to/from autocomplete"},{key:"Shift + Tab",action:"Move focus away from autocomplete"},{key:"ArrowDown",action:"Highlight next option, open dropdown"},{key:"ArrowUp",action:"Highlight previous option"},{key:"Enter",action:"Select highlighted option"},{key:"Escape",action:"Close dropdown and clear highlight"},{key:"Type characters",action:"Filter options based on search query"}],screenReader:["Announces combobox role and current state (expanded/collapsed)","Announces the number of available options","Announces highlighted option as user navigates with arrow keys","Announces selected state when option is chosen","Announces loading state with custom loadingText","Announces no results state when filter returns empty",'Icons and decorative elements hidden with aria-hidden="true"',"Multi-select tags announced with option to remove"]},tokens:{file:"/tokens/components/autocomplete.json",mappings:[{property:"Height (Medium)",token:"base.height.md",value:"40px"},{property:"Height (Small)",token:"base.height.sm",value:"32px"},{property:"Height (Large)",token:"base.height.lg",value:"48px"},{property:"Padding Horizontal",token:"base.padding.horizontal.md",value:"12px"},{property:"Border Radius",token:"base.borderRadius",value:"4px"},{property:"Border Color",token:"base.border.color",value:"#d1d5db (Gray 300)"},{property:"Focus Ring Color",token:"base.focusRing.color",value:"#3b82f6 (Blue 500)"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"},{property:"Focus Ring Offset",token:"accessibility.focusRingOffset",value:"2px"},{property:"Highlight Background",token:"variant.highlight.background",value:"#eff6ff (Blue 50)"},{property:"Selected Background",token:"variant.selected.background",value:"#dbeafe (Blue 100)"},{property:"Selected Icon Color",token:"variant.selected.icon",value:"#2563eb (Blue 600)"},{property:"Tag Background",token:"variant.tag.background",value:"#dbeafe (Blue 100)"},{property:"Tag Text Color",token:"variant.tag.text",value:"#1e40af (Blue 800)"},{property:"Disabled Opacity",token:"base.opacity.disabled",value:"0.6"},{property:"Min Touch Target",token:"accessibility.minTouchTarget",value:"44px"},{property:"Max Dropdown Height",token:"base.dropdown.maxHeight",value:"240px"}]}})}export{Z as default};
