import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as U}from"./index-G8LIXM5I.js";import{c as g}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const y=U.forwardRef(({columns:n,data:h,rowKey:G,onSort:x,sortKey:m,sortDirection:r,loading:R=!1,emptyMessage:E="No data available",striped:L=!1,hoverable:V=!0,caption:u,className:_,...M},W)=>{const B=e=>{if(!e.sortable||!x)return;const i=m===e.key?r==="asc"?"desc":r==="desc"?null:"asc":"asc";x(e.key,i)},O=e=>m!==e.key||!r?"":r==="asc"?" ▲":" ▼";return a.jsx("div",{className:g("ux4g-datagrid overflow-auto",_),role:"region","aria-label":u||"Data table",tabIndex:0,...M,children:a.jsxs("table",{ref:W,className:"ux4g-datagrid-table w-full border-collapse text-sm",children:[u&&a.jsx("caption",{className:"sr-only",children:u}),a.jsx("thead",{children:a.jsx("tr",{className:"border-b-2 border-border bg-muted/50",children:n.map(e=>a.jsxs("th",{scope:"col",style:{width:e.width,textAlign:e.align||"left"},className:g("ux4g-datagrid-th px-4 py-3 font-semibold text-foreground",e.sortable&&"cursor-pointer select-none hover:bg-muted"),onClick:()=>B(e),"aria-sort":m===e.key&&r?r==="asc"?"ascending":"descending":void 0,children:[e.header,O(e)]},e.key))})}),a.jsx("tbody",{children:R?a.jsx("tr",{children:a.jsx("td",{colSpan:n.length,className:"px-4 py-12 text-center text-muted-foreground",children:"Loading..."})}):h.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:n.length,className:"px-4 py-12 text-center text-muted-foreground",children:E})}):h.map((e,i)=>a.jsx("tr",{className:g("border-b border-border",L&&i%2===1&&"bg-muted/30",V&&"hover:bg-muted/50 transition-colors"),children:n.map(t=>a.jsx("td",{style:{textAlign:t.align||"left"},className:"ux4g-datagrid-td px-4 py-3 text-foreground",children:t.render?t.render(e[t.key],e,i):String(e[t.key]??"")},t.key))},String(e[G])))})]})})});y.displayName="DataGrid";y.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:"Column definitions"},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Row data"},rowKey:{required:!0,tsType:{name:"string"},description:"Unique key field in data"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: SortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:"'asc' | 'desc' | null",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"null"}]},name:"direction"}],return:{name:"void"}}},description:"Called when sort changes"},sortKey:{required:!1,tsType:{name:"string"},description:"Current sort column"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | null",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"null"}]},description:"Current sort direction"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No data available'",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"Whether rows are striped",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether rows are hoverable",defaultValue:{value:"true",computed:!1}},caption:{required:!1,tsType:{name:"string"},description:"Caption for accessibility"}}};const s=[{key:"appId",header:"Application ID",sortable:!0,width:"150px"},{key:"name",header:"Applicant",sortable:!0},{key:"service",header:"Service"},{key:"status",header:"Status"},{key:"date",header:"Date",sortable:!0}],f=[{id:"1",appId:"APP-001",name:"Rahul Kumar",service:"Birth Certificate",status:"Approved",date:"2026-04-10"},{id:"2",appId:"APP-002",name:"Priya Singh",service:"Passport",status:"Pending",date:"2026-04-12"},{id:"3",appId:"APP-003",name:"Amit Patel",service:"Driving License",status:"Rejected",date:"2026-04-14"}],X={title:"Components/DataGrid",component:y,tags:["autodocs"]},d={args:{columns:s,data:f,rowKey:"id",caption:"Applications"}},o={args:{columns:s,data:f,rowKey:"id",striped:!0}},l={args:{columns:s,data:[],rowKey:"id",loading:!0}},c={args:{columns:s,data:[],rowKey:"id",emptyMessage:"No applications found"}},p={args:{columns:s,data:f,rowKey:"id",sortKey:"name",sortDirection:"asc"}};var b,w,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKey: 'id',
    caption: 'Applications'
  }
}`,...(v=(w=d.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,T,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKey: 'id',
    striped: true
  }
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var N,j,q;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    rowKey: 'id',
    loading: true
  }
}`,...(q=(j=l.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var A,C,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    rowKey: 'id',
    emptyMessage: 'No applications found'
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var K,P,I;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    rowKey: 'id',
    sortKey: 'name',
    sortDirection: 'asc'
  }
}`,...(I=(P=p.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const Y=["Default","Striped","Loading","Empty","Sorted"];export{d as Default,c as Empty,l as Loading,p as Sorted,o as Striped,Y as __namedExportsOrder,X as default};
