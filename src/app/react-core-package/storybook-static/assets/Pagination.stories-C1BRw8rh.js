import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as j}from"./index-G8LIXM5I.js";import{c as N}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function P({totalPages:e,value:s,defaultValue:se=1,onChange:y,siblingCount:i=1,showFirstLast:C=!0,showPrevNext:q=!0,variant:re="default",disabled:l=!1,showPageInfo:oe=!1,labels:ie={},className:le,...ue}){const[ce,pe]=j.useState(se),n=s??ce,ge=s!==void 0,{first:de="First",previous:me="Previous",next:fe="Next",last:he="Last",pageInfo:xe=(t,S)=>`Page ${t} of ${S}`}=ie,u=t=>{t<1||t>e||t===n||l||(ge||pe(t),y==null||y(t))},be=j.useMemo(()=>{const t=(o,I)=>{const ve=I-o+1;return Array.from({length:ve},(ye,Pe)=>o+Pe)},r=i*2+3+2;if(e<=r)return t(1,e);const c=Math.max(n-i,1),k=Math.min(n+i,e),w=c>2,V=k<e-1;if(!w&&V){const o=3+2*i;return[...t(1,o),"ellipsis-right",e]}if(w&&!V){const o=3+2*i;return[1,"ellipsis-left",...t(e-o+1,e)]}return w&&V?[1,"ellipsis-left",...t(c,k),"ellipsis-right",e]:t(1,e)},[n,e,i]);return a.jsxs("nav",{className:N("ux4g-pagination",`ux4g-pagination-${re}`,le),"aria-label":"Pagination",...ue,children:[a.jsxs("ul",{className:"ux4g-pagination-list",children:[C&&a.jsx("li",{children:a.jsx("button",{type:"button",className:"ux4g-pagination-button ux4g-pagination-first",onClick:()=>u(1),disabled:l||n===1,"aria-label":"Go to first page",children:de})}),q&&a.jsx("li",{children:a.jsx("button",{type:"button",className:"ux4g-pagination-button ux4g-pagination-prev",onClick:()=>u(n-1),disabled:l||n===1,"aria-label":"Go to previous page",children:me})}),be.map((t,S)=>{if(typeof t=="string"&&t.startsWith("ellipsis"))return a.jsx("li",{children:a.jsx("span",{className:"ux4g-pagination-ellipsis","aria-hidden":"true",children:"..."})},t);const r=t,c=r===n;return a.jsx("li",{children:a.jsx("button",{type:"button",className:N("ux4g-pagination-button","ux4g-pagination-page",c&&"ux4g-pagination-page-active"),onClick:()=>u(r),disabled:l,"aria-label":`Go to page ${r}`,"aria-current":c?"page":void 0,children:r})},r)}),q&&a.jsx("li",{children:a.jsx("button",{type:"button",className:"ux4g-pagination-button ux4g-pagination-next",onClick:()=>u(n+1),disabled:l||n===e,"aria-label":"Go to next page",children:fe})}),C&&a.jsx("li",{children:a.jsx("button",{type:"button",className:"ux4g-pagination-button ux4g-pagination-last",onClick:()=>u(e),disabled:l||n===e,"aria-label":"Go to last page",children:he})})]}),oe&&a.jsx("div",{className:"ux4g-pagination-info","aria-live":"polite",children:xe(n,e)})]})}P.displayName="Pagination";P.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},totalPages:{required:!0,tsType:{name:"number"},description:"Total number of pages"},siblingCount:{required:!1,tsType:{name:"number"},description:`Number of page buttons to show
@default 7`,defaultValue:{value:"1",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:`Show first/last buttons
@default true`,defaultValue:{value:"true",computed:!1}},showPrevNext:{required:!1,tsType:{name:"boolean"},description:`Show previous/next buttons
@default true`,defaultValue:{value:"true",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:`Visual variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Page change handler"},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},showPageInfo:{required:!1,tsType:{name:"boolean"},description:`Show page info text (e.g., "Page 1 of 10")
@default false`,defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  first?: string;
  previous?: string;
  next?: string;
  last?: string;
  pageInfo?: (current: number, total: number) => string;
}`,signature:{properties:[{key:"first",value:{name:"string",required:!1}},{key:"previous",value:{name:"string",required:!1}},{key:"next",value:{name:"string",required:!1}},{key:"last",value:{name:"string",required:!1}},{key:"pageInfo",value:{name:"signature",type:"function",raw:"(current: number, total: number) => string",signature:{arguments:[{type:{name:"number"},name:"current"},{type:{name:"number"},name:"total"}],return:{name:"string"}},required:!1}}]}},description:"Custom labels",defaultValue:{value:"{}",computed:!1}},defaultValue:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["Omit"]};const Ce={title:"Components/Pagination",component:P,tags:["autodocs"]},p={args:{totalPages:10,defaultValue:1}},g={args:{totalPages:50,defaultValue:25}},d={args:{totalPages:10,variant:"compact",showFirstLast:!1}},m={args:{totalPages:20,defaultValue:5,showPageInfo:!0}},f={args:{totalPages:100,defaultValue:1,showPageInfo:!0,labels:{pageInfo:(e,s)=>`Showing page ${e} of ${s} citizen records`}}},h={args:{totalPages:15,defaultValue:1,siblingCount:2}},x={args:{totalPages:5,showFirstLast:!1,defaultValue:1}},b={render:()=>{const[e,s]=j.useState(1);return a.jsxs("div",{children:[a.jsx("div",{style:{marginBottom:"1rem",padding:"1rem",background:"#f5f5f5"},children:a.jsxs("p",{children:["Current Page: ",e]})}),a.jsx(P,{totalPages:10,value:e,onChange:s})]})}},v={args:{totalPages:8,defaultValue:1,showPageInfo:!0,labels:{pageInfo:(e,s)=>`Documents: Page ${e} of ${s}`}}};var T,R,$;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    defaultValue: 1
  }
}`,...($=(R=p.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var D,L,M;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    totalPages: 50,
    defaultValue: 25
  }
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var _,B,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    variant: 'compact',
    showFirstLast: false
  }
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,G,z;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    totalPages: 20,
    defaultValue: 5,
    showPageInfo: true
  }
}`,...(z=(G=m.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var A,W,O;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    totalPages: 100,
    defaultValue: 1,
    showPageInfo: true,
    labels: {
      pageInfo: (current, total) => \`Showing page \${current} of \${total} citizen records\`
    }
  }
}`,...(O=(W=f.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var H,J,K;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    totalPages: 15,
    defaultValue: 1,
    siblingCount: 2
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    totalPages: 5,
    showFirstLast: false,
    defaultValue: 1
  }
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div>
        <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        background: '#f5f5f5'
      }}>
          <p>Current Page: {page}</p>
        </div>
        <Pagination totalPages={10} value={page} onChange={setPage} />
      </div>;
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    totalPages: 8,
    defaultValue: 1,
    showPageInfo: true,
    labels: {
      pageInfo: (current, total) => \`Documents: Page \${current} of \${total}\`
    }
  }
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const qe=["Basic","ManyPages","Compact","WithPageInfo","CitizenRecordsPagination","ApplicationsPagination","MinimalPagination","Controlled","DigiLockerDocuments"];export{h as ApplicationsPagination,p as Basic,f as CitizenRecordsPagination,d as Compact,b as Controlled,v as DigiLockerDocuments,g as ManyPages,x as MinimalPagination,m as WithPageInfo,qe as __namedExportsOrder,Ce as default};
