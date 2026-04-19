import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as P}from"./index-G8LIXM5I.js";import{c as u}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function j({columns:t,data:o,rowKey:A,striped:Ze=!1,hoverable:ea=!1,bordered:aa=!1,compact:ta=!1,caption:I,captionSide:ra="top",sortState:V,defaultSortState:sa,onSortChange:z,onRowClick:d,emptyState:na,loading:E=!1,loadingRows:oa=5,stickyHeader:ia=!1,maxHeight:K,className:ca,...da}){const[la,ua]=P.useState(sa||{columnKey:null,direction:null}),n=V??la,pa=V!==void 0,ma=e=>{if(!e.sortable)return;const r={columnKey:e.key,direction:n.columnKey===e.key?n.direction==="asc"?"desc":n.direction==="desc"?null:"asc":"asc"};pa||ua(r),z==null||z(r)},R=P.useMemo(()=>{if(!n.columnKey||!n.direction)return o;const e=t.find(s=>s.key===n.columnKey);if(!e)return o;const r=[...o].sort((s,l)=>{if(e.sortFn)return e.sortFn(s,l);const p=e.accessor?typeof e.accessor=="function"?e.accessor(s):s[e.accessor]:s[e.key],m=e.accessor?typeof e.accessor=="function"?e.accessor(l):l[e.accessor]:l[e.key];return p===m?0:p==null?1:m==null?-1:typeof p=="string"&&typeof m=="string"?p.localeCompare(m):p<m?-1:1});return n.direction==="desc"?r.reverse():r},[o,n,t]),ga=(e,r)=>typeof A=="function"?A(e,r):A?e[A]:r,ba=(e,r,s)=>{if(e.render){const l=e.accessor?typeof e.accessor=="function"?e.accessor(r):r[e.accessor]:r[e.key];return e.render(l,r,s)}return e.accessor?typeof e.accessor=="function"?e.accessor(r):r[e.accessor]:r[e.key]},ha=()=>a.jsx("tbody",{children:Array.from({length:oa}).map((e,r)=>a.jsx("tr",{children:t.map(s=>a.jsx("td",{className:"ux4g-table-cell",children:a.jsx("div",{className:"ux4g-skeleton ux4g-skeleton-text"})},s.key))},`skeleton-${r}`))}),ya=()=>a.jsx("tbody",{children:a.jsx("tr",{children:a.jsx("td",{colSpan:t.length,className:"ux4g-table-empty",children:na||"No data available"})})}),fa=K?{maxHeight:K,overflow:"auto"}:void 0,xa=e=>{if(e.sortable)return n.columnKey!==e.key||!n.direction?"none":n.direction==="asc"?"ascending":"descending"};return a.jsx("div",{className:u("ux4g-table-container",ca),style:fa,"aria-busy":E||void 0,...da,children:a.jsxs("table",{className:u("ux4g-table",Ze&&"ux4g-table-striped",ea&&"ux4g-table-hoverable",aa&&"ux4g-table-bordered",ta&&"ux4g-table-compact",ia&&"ux4g-table-sticky-header"),children:[I&&a.jsx("caption",{className:u("ux4g-table-caption",`ux4g-table-caption-${ra}`),children:I}),a.jsx("thead",{className:"ux4g-table-header",children:a.jsx("tr",{children:t.map(e=>a.jsx("th",{scope:"col",className:u("ux4g-table-header-cell",e.sortable&&"ux4g-table-header-sortable",e.align&&`ux4g-text-${e.align}`,n.columnKey===e.key&&"ux4g-table-header-sorted"),style:e.width?{width:e.width}:void 0,"aria-sort":xa(e),...e.headerProps,children:e.sortable?a.jsxs("button",{type:"button",className:"ux4g-table-header-button",onClick:()=>ma(e),children:[a.jsxs("span",{className:"ux4g-table-header-content",children:[e.header,a.jsx("span",{className:"ux4g-table-sort-icon","aria-hidden":"true",children:n.columnKey===e.key?n.direction==="asc"?"↑":n.direction==="desc"?"↓":"↕":"↕"})]}),a.jsx("span",{className:"sr-only",children:n.columnKey===e.key&&n.direction?`Sorted ${n.direction==="asc"?"ascending":"descending"}`:"Not sorted"})]}):a.jsx("div",{className:"ux4g-table-header-content",children:e.header})},e.key))})}),E?ha():R.length===0?ya():a.jsx("tbody",{className:"ux4g-table-body",children:R.map((e,r)=>a.jsx("tr",{className:u("ux4g-table-row",d&&"ux4g-table-row-clickable"),onClick:()=>d==null?void 0:d(e,r),onKeyDown:s=>{d&&(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),d(e,r))},tabIndex:d?0:void 0,children:t.map(s=>a.jsx("td",{className:u("ux4g-table-cell",s.align&&`ux4g-text-${s.align}`),...s.cellProps,children:ba(s,e,r)},s.key))},ga(e,r)))})]})})}j.displayName="Table";j.__docgenInfo={description:"",methods:[],displayName:"Table",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:"Table columns configuration"},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Table data rows"},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T, index: number) => string | number)",elements:[{name:"T"},{name:"unknown"}]},description:"Unique key extractor for rows"},striped:{required:!1,tsType:{name:"boolean"},description:`Enable row striping
@default false`,defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:`Enable hover effect on rows
@default false`,defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:`Make table borders more prominent
@default false`,defaultValue:{value:"false",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:`Compact row spacing
@default false`,defaultValue:{value:"false",computed:!1}},caption:{required:!1,tsType:{name:"ReactNode"},description:"Caption for the table (accessibility)"},captionSide:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:`Hide caption visually but keep for screen readers
@default false`,defaultValue:{value:"'top'",computed:!1}},sortState:{required:!1,tsType:{name:"SortState"},description:"Controlled sort state"},defaultSortState:{required:!1,tsType:{name:"SortState"},description:"Default sort state for uncontrolled mode"},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortState: SortState) => void",signature:{arguments:[{type:{name:"SortState"},name:"sortState"}],return:{name:"void"}}},description:"Sort change handler"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => void",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Row click handler"},emptyState:{required:!1,tsType:{name:"ReactNode"},description:"Empty state content"},loading:{required:!1,tsType:{name:"boolean"},description:`Loading state
@default false`,defaultValue:{value:"false",computed:!1}},loadingRows:{required:!1,tsType:{name:"number"},description:`Number of skeleton rows to show when loading
@default 5`,defaultValue:{value:"5",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:`Sticky header
@default false`,defaultValue:{value:"false",computed:!1}},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height for scrollable table"}}};const Da={title:"Components/Table",component:j,tags:["autodocs"],argTypes:{striped:{control:"boolean",description:"Alternate row background colors"},hoverable:{control:"boolean",description:"Show hover effect on rows"},bordered:{control:"boolean",description:"Show borders around cells"},compact:{control:"boolean",description:"Reduce cell padding"},loading:{control:"boolean",description:"Show loading skeleton"},stickyHeader:{control:"boolean",description:"Keep header visible when scrolling"}},parameters:{docs:{description:{component:`The Table component displays data in a structured, tabular format with support
for sorting, filtering, and custom cell rendering.

## When to use
- Displaying structured data in rows and columns
- Comparing multiple data points
- Allowing users to sort and filter data
- Presenting government records or citizen information

## When NOT to use
- For simple lists - use a list component
- For single records - use a card or definition list
- For large datasets without pagination - consider virtualization`}}}},i=[{id:1,name:"Rajesh Kumar",aadhaar:"1234-5678-9012",state:"Maharashtra",status:"Verified"},{id:2,name:"Priya Sharma",aadhaar:"2345-6789-0123",state:"Karnataka",status:"Pending"},{id:3,name:"Amit Patel",aadhaar:"3456-7890-1234",state:"Gujarat",status:"Verified"},{id:4,name:"Sneha Reddy",aadhaar:"4567-8901-2345",state:"Telangana",status:"Verified"},{id:5,name:"Vikram Singh",aadhaar:"5678-9012-3456",state:"Punjab",status:"Rejected"}],c=[{key:"name",header:"Name",accessor:"name",sortable:!0},{key:"aadhaar",header:"Aadhaar Number",accessor:"aadhaar"},{key:"state",header:"State",accessor:"state",sortable:!0},{key:"status",header:"Status",accessor:"status"}],g={args:{columns:c,data:i,caption:"Citizen Verification Records"}},b={args:{columns:c,data:i,striped:!0,caption:"Striped Table Example"}},h={args:{columns:c,data:i,hoverable:!0,caption:"Hoverable Table Example"}},y={args:{columns:c,data:i,bordered:!0,caption:"Bordered Table Example"}},f={args:{columns:c,data:i,compact:!0,striped:!0,caption:"Compact Table Example"}},x={args:{columns:c,data:i,striped:!0,hoverable:!0,caption:"Sortable Table - Click headers to sort"}},S={args:{columns:[{key:"name",header:"Applicant Name",accessor:"name",sortable:!0},{key:"aadhaar",header:"Aadhaar",accessor:"aadhaar"},{key:"state",header:"State",accessor:"state",sortable:!0},{key:"status",header:"Verification Status",accessor:"status",render:t=>{const o=t==="Verified"?"ux4g-badge ux4g-badge-success":t==="Pending"?"ux4g-badge ux4g-badge-warning":"ux4g-badge ux4g-badge-error";return a.jsx("span",{className:o,children:t})}}],data:i,striped:!0,hoverable:!0,caption:"Table with Custom Cell Rendering"}},v={args:{columns:[{key:"applicationId",header:"Application ID",accessor:"applicationId"},{key:"name",header:"Applicant Name",accessor:"name",sortable:!0},{key:"type",header:"Application Type",accessor:"type"},{key:"submittedDate",header:"Submitted",accessor:"submittedDate",sortable:!0},{key:"status",header:"Status",accessor:"status",render:t=>{const o=t==="Approved"?"ux4g-badge ux4g-badge-success":t==="Under Review"?"ux4g-badge ux4g-badge-info":"ux4g-badge ux4g-badge-warning";return a.jsx("span",{className:o,children:t})}}],data:[{applicationId:"PAN2024001",name:"Rahul Verma",type:"New PAN",submittedDate:"2024-03-15",status:"Approved"},{applicationId:"PAN2024002",name:"Anita Desai",type:"Correction",submittedDate:"2024-03-16",status:"Under Review"},{applicationId:"PAN2024003",name:"Karan Malhotra",type:"New PAN",submittedDate:"2024-03-17",status:"Submitted"},{applicationId:"PAN2024004",name:"Meera Nair",type:"Reprint",submittedDate:"2024-03-18",status:"Approved"}],striped:!0,hoverable:!0,bordered:!0,caption:"PAN Card Application Tracking"}},k={args:{columns:[{key:"documentName",header:"Document Name",accessor:"documentName",sortable:!0},{key:"issuer",header:"Issued By",accessor:"issuer"},{key:"issueDate",header:"Issue Date",accessor:"issueDate",sortable:!0},{key:"size",header:"Size",accessor:"size",align:"right"},{key:"verified",header:"Verified",accessor:"verified",align:"center",render:t=>a.jsx("span",{className:t?"ux4g-badge ux4g-badge-success":"ux4g-badge ux4g-badge-ghost",children:t?"✓ Verified":"Not Verified"})}],data:[{documentName:"Aadhaar Card",issuer:"UIDAI",issueDate:"2018-05-20",size:"245 KB",verified:!0},{documentName:"PAN Card",issuer:"Income Tax Department",issueDate:"2019-08-15",size:"180 KB",verified:!0},{documentName:"Driving License",issuer:"Ministry of Road Transport",issueDate:"2020-01-10",size:"320 KB",verified:!0},{documentName:"Voter ID",issuer:"Election Commission of India",issueDate:"2017-11-05",size:"210 KB",verified:!1}],striped:!0,hoverable:!0,caption:"DigiLocker Documents"}},N={args:{columns:[{key:"state",header:"State",accessor:"state",sortable:!0,width:"25%"},{key:"population",header:"Population",accessor:"population",sortable:!0,align:"right"},{key:"verified",header:"Verified Citizens",accessor:"verified",sortable:!0,align:"right"},{key:"percentage",header:"Coverage",accessor:"percentage",sortable:!0,align:"right",render:t=>`${t}%`}],data:[{state:"Uttar Pradesh",population:"199,812,341",verified:"175,000,000",percentage:87.6},{state:"Maharashtra",population:"112,374,333",verified:"105,000,000",percentage:93.4},{state:"Bihar",population:"104,099,452",verified:"88,000,000",percentage:84.5},{state:"West Bengal",population:"91,276,115",verified:"85,000,000",percentage:93.1},{state:"Madhya Pradesh",population:"72,626,809",verified:"68,000,000",percentage:93.6}],striped:!0,bordered:!0,caption:"State-wise Aadhaar Coverage Statistics"}},T={args:{columns:c,data:[],emptyState:a.jsxs("div",{className:"ux4g-empty-state",children:[a.jsx("p",{children:"No citizen records found"}),a.jsx("p",{className:"ux4g-text-sm ux4g-text-muted",children:"Try adjusting your search criteria"})]}),caption:"Empty Table Example"}},D={args:{columns:c,data:[],loading:!0,loadingRows:8,caption:"Loading Table Example"}},C={render:()=>{const[t,o]=P.useState({columnKey:"name",direction:"asc"});return a.jsxs("div",{children:[a.jsx("div",{style:{marginBottom:"1rem",padding:"1rem",background:"#f5f5f5",borderRadius:"4px"},children:a.jsxs("p",{style:{margin:0,fontSize:"14px"},children:[a.jsx("strong",{children:"Current Sort:"})," ",t.columnKey||"None"," -"," ",t.direction||"None"]})}),a.jsx(j,{columns:c,data:i,sortState:t,onSortChange:o,striped:!0,hoverable:!0,caption:"Controlled Sorting Example"})]})}},w={args:{columns:c,data:[...i,...i.map((t,o)=>({...t,id:t.id+100+o})),...i.map((t,o)=>({...t,id:t.id+200+o}))],stickyHeader:!0,maxHeight:"400px",striped:!0,hoverable:!0,caption:"Sticky Header Table - Scroll to see header stay in place"}};var B,q,H,L,M;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: citizenData,
    caption: 'Citizen Verification Records'
  }
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:"Basic table with citizen data",...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var U,$,W,F,_;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: citizenData,
    striped: true,
    caption: 'Striped Table Example'
  }
}`,...(W=($=b.parameters)==null?void 0:$.docs)==null?void 0:W.source},description:{story:"Striped table for better readability of long data rows",...(_=(F=b.parameters)==null?void 0:F.docs)==null?void 0:_.description}}};var O,G,J,Q,X;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: citizenData,
    hoverable: true,
    caption: 'Hoverable Table Example'
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"Hoverable table highlights row on hover for better interaction",...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,ae,te;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: citizenData,
    bordered: true,
    caption: 'Bordered Table Example'
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Bordered table with visible cell borders",...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.description}}};var re,se,ne,oe,ie;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: citizenData,
    compact: true,
    striped: true,
    caption: 'Compact Table Example'
  }
}`,...(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source},description:{story:"Compact table with reduced padding for dense data",...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.description}}};var ce,de,le,ue,pe;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: citizenData,
    striped: true,
    hoverable: true,
    caption: 'Sortable Table - Click headers to sort'
  }
}`,...(le=(de=x.parameters)==null?void 0:de.docs)==null?void 0:le.source},description:{story:"Table with sortable columns. Click column headers to sort.",...(pe=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:pe.description}}};var me,ge,be,he,ye;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      header: 'Applicant Name',
      accessor: 'name' as const,
      sortable: true
    }, {
      key: 'aadhaar',
      header: 'Aadhaar',
      accessor: 'aadhaar' as const
    }, {
      key: 'state',
      header: 'State',
      accessor: 'state' as const,
      sortable: true
    }, {
      key: 'status',
      header: 'Verification Status',
      accessor: 'status' as const,
      render: (value: string) => {
        const statusClass = value === 'Verified' ? 'ux4g-badge ux4g-badge-success' : value === 'Pending' ? 'ux4g-badge ux4g-badge-warning' : 'ux4g-badge ux4g-badge-error';
        return <span className={statusClass}>{value}</span>;
      }
    }],
    data: citizenData,
    striped: true,
    hoverable: true,
    caption: 'Table with Custom Cell Rendering'
  }
}`,...(be=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:be.source},description:{story:"Table with custom cell rendering including status badges",...(ye=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ye.description}}};var fe,xe,Se,ve,ke;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'applicationId',
      header: 'Application ID',
      accessor: 'applicationId' as const
    }, {
      key: 'name',
      header: 'Applicant Name',
      accessor: 'name' as const,
      sortable: true
    }, {
      key: 'type',
      header: 'Application Type',
      accessor: 'type' as const
    }, {
      key: 'submittedDate',
      header: 'Submitted',
      accessor: 'submittedDate' as const,
      sortable: true
    }, {
      key: 'status',
      header: 'Status',
      accessor: 'status' as const,
      render: (value: string) => {
        const statusClass = value === 'Approved' ? 'ux4g-badge ux4g-badge-success' : value === 'Under Review' ? 'ux4g-badge ux4g-badge-info' : 'ux4g-badge ux4g-badge-warning';
        return <span className={statusClass}>{value}</span>;
      }
    }],
    data: [{
      applicationId: 'PAN2024001',
      name: 'Rahul Verma',
      type: 'New PAN',
      submittedDate: '2024-03-15',
      status: 'Approved'
    }, {
      applicationId: 'PAN2024002',
      name: 'Anita Desai',
      type: 'Correction',
      submittedDate: '2024-03-16',
      status: 'Under Review'
    }, {
      applicationId: 'PAN2024003',
      name: 'Karan Malhotra',
      type: 'New PAN',
      submittedDate: '2024-03-17',
      status: 'Submitted'
    }, {
      applicationId: 'PAN2024004',
      name: 'Meera Nair',
      type: 'Reprint',
      submittedDate: '2024-03-18',
      status: 'Approved'
    }],
    striped: true,
    hoverable: true,
    bordered: true,
    caption: 'PAN Card Application Tracking'
  }
}`,...(Se=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:Se.source},description:{story:"PAN card application tracking table",...(ke=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:ke.description}}};var Ne,Te,De,Ce,we;k.parameters={...k.parameters,docs:{...(Ne=k.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'documentName',
      header: 'Document Name',
      accessor: 'documentName' as const,
      sortable: true
    }, {
      key: 'issuer',
      header: 'Issued By',
      accessor: 'issuer' as const
    }, {
      key: 'issueDate',
      header: 'Issue Date',
      accessor: 'issueDate' as const,
      sortable: true
    }, {
      key: 'size',
      header: 'Size',
      accessor: 'size' as const,
      align: 'right' as const
    }, {
      key: 'verified',
      header: 'Verified',
      accessor: 'verified' as const,
      align: 'center' as const,
      render: (value: boolean) => <span className={value ? 'ux4g-badge ux4g-badge-success' : 'ux4g-badge ux4g-badge-ghost'}>
            {value ? '✓ Verified' : 'Not Verified'}
          </span>
    }],
    data: [{
      documentName: 'Aadhaar Card',
      issuer: 'UIDAI',
      issueDate: '2018-05-20',
      size: '245 KB',
      verified: true
    }, {
      documentName: 'PAN Card',
      issuer: 'Income Tax Department',
      issueDate: '2019-08-15',
      size: '180 KB',
      verified: true
    }, {
      documentName: 'Driving License',
      issuer: 'Ministry of Road Transport',
      issueDate: '2020-01-10',
      size: '320 KB',
      verified: true
    }, {
      documentName: 'Voter ID',
      issuer: 'Election Commission of India',
      issueDate: '2017-11-05',
      size: '210 KB',
      verified: false
    }],
    striped: true,
    hoverable: true,
    caption: 'DigiLocker Documents'
  }
}`,...(De=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:De.source},description:{story:"DigiLocker document management table",...(we=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:we.description}}};var Ae,je,ze,Pe,Ie;N.parameters={...N.parameters,docs:{...(Ae=N.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'state',
      header: 'State',
      accessor: 'state' as const,
      sortable: true,
      width: '25%'
    }, {
      key: 'population',
      header: 'Population',
      accessor: 'population' as const,
      sortable: true,
      align: 'right' as const
    }, {
      key: 'verified',
      header: 'Verified Citizens',
      accessor: 'verified' as const,
      sortable: true,
      align: 'right' as const
    }, {
      key: 'percentage',
      header: 'Coverage',
      accessor: 'percentage' as const,
      sortable: true,
      align: 'right' as const,
      render: (value: number) => \`\${value}%\`
    }],
    data: [{
      state: 'Uttar Pradesh',
      population: '199,812,341',
      verified: '175,000,000',
      percentage: 87.6
    }, {
      state: 'Maharashtra',
      population: '112,374,333',
      verified: '105,000,000',
      percentage: 93.4
    }, {
      state: 'Bihar',
      population: '104,099,452',
      verified: '88,000,000',
      percentage: 84.5
    }, {
      state: 'West Bengal',
      population: '91,276,115',
      verified: '85,000,000',
      percentage: 93.1
    }, {
      state: 'Madhya Pradesh',
      population: '72,626,809',
      verified: '68,000,000',
      percentage: 93.6
    }],
    striped: true,
    bordered: true,
    caption: 'State-wise Aadhaar Coverage Statistics'
  }
}`,...(ze=(je=N.parameters)==null?void 0:je.docs)==null?void 0:ze.source},description:{story:"State-wise statistics table with custom column widths and alignment",...(Ie=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.description}}};var Ve,Ee,Ke,Re,Be;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: [],
    emptyState: <div className="ux4g-empty-state">
        <p>No citizen records found</p>
        <p className="ux4g-text-sm ux4g-text-muted">Try adjusting your search criteria</p>
      </div>,
    caption: 'Empty Table Example'
  }
}`,...(Ke=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:Ke.source},description:{story:"Empty state when no data is available",...(Be=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:Be.description}}};var qe,He,Le,Me,Ue;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: [],
    loading: true,
    loadingRows: 8,
    caption: 'Loading Table Example'
  }
}`,...(Le=(He=D.parameters)==null?void 0:He.docs)==null?void 0:Le.source},description:{story:"Loading state with skeleton rows",...(Ue=(Me=D.parameters)==null?void 0:Me.docs)==null?void 0:Ue.description}}};var $e,We,Fe,_e,Oe;C.parameters={...C.parameters,docs:{...($e=C.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => {
    const [sortState, setSortState] = useState<SortState>({
      columnKey: 'name',
      direction: 'asc'
    });
    return <div>
        <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <p style={{
          margin: 0,
          fontSize: '14px'
        }}>
            <strong>Current Sort:</strong> {sortState.columnKey || 'None'} -{' '}
            {sortState.direction || 'None'}
          </p>
        </div>
        <Table columns={basicColumns} data={citizenData} sortState={sortState} onSortChange={setSortState} striped hoverable caption="Controlled Sorting Example" />
      </div>;
  }
}`,...(Fe=(We=C.parameters)==null?void 0:We.docs)==null?void 0:Fe.source},description:{story:"Controlled sorting example with external state management",...(Oe=(_e=C.parameters)==null?void 0:_e.docs)==null?void 0:Oe.description}}};var Ge,Je,Qe,Xe,Ye;w.parameters={...w.parameters,docs:{...(Ge=w.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: [...citizenData, ...citizenData.map((item, idx) => ({
      ...item,
      id: item.id + 100 + idx
    })), ...citizenData.map((item, idx) => ({
      ...item,
      id: item.id + 200 + idx
    }))],
    stickyHeader: true,
    maxHeight: '400px',
    striped: true,
    hoverable: true,
    caption: 'Sticky Header Table - Scroll to see header stay in place'
  }
}`,...(Qe=(Je=w.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source},description:{story:"Sticky header table with scrollable content",...(Ye=(Xe=w.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.description}}};const Ca=["Basic","Striped","Hoverable","Bordered","Compact","Sortable","WithCustomRendering","PANApplications","DigiLockerDocuments","StateStatistics","EmptyState","Loading","ControlledSorting","StickyHeader"];export{g as Basic,y as Bordered,f as Compact,C as ControlledSorting,k as DigiLockerDocuments,T as EmptyState,h as Hoverable,D as Loading,v as PANApplications,x as Sortable,N as StateStatistics,w as StickyHeader,b as Striped,S as WithCustomRendering,Ca as __namedExportsOrder,Da as default};
