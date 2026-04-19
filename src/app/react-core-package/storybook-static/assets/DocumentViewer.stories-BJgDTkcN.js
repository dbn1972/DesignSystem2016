import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as N}from"./index-G8LIXM5I.js";import{c as j}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const d=N.forwardRef(({src:o,title:t,type:x="pdf",height:n=500,downloadable:y=!1,onDownload:v,className:b,...D},h)=>{const T=()=>{switch(x){case"image":return e.jsx("img",{src:o,alt:t||"Document",className:"ux4g-document-viewer-image max-w-full",style:{maxHeight:n}});case"text":return e.jsx("div",{className:"ux4g-document-viewer-text p-4 border rounded-md overflow-auto bg-muted",style:{height:n},role:"document","aria-label":t||"Text document",children:e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Text document: ",o]})});case"pdf":default:return e.jsx("iframe",{src:o,title:t||"Document viewer",className:"ux4g-document-viewer-iframe w-full border rounded-md",style:{height:n}})}};return e.jsxs("div",{ref:h,className:j("ux4g-document-viewer",b),...D,children:[t&&e.jsxs("div",{className:"ux4g-document-viewer-header flex items-center justify-between mb-2",children:[e.jsx("p",{className:"ux4g-document-viewer-title text-sm font-medium text-foreground",children:t}),y&&e.jsx("button",{type:"button",onClick:v,className:"ux4g-document-viewer-download text-sm text-primary underline","aria-label":`Download ${t}`,children:"Download"})]}),T()]})});d.displayName="DocumentViewer";d.__docgenInfo={description:"",methods:[],displayName:"DocumentViewer",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},src:{required:!0,tsType:{name:"string"},description:"Document source URL"},title:{required:!1,tsType:{name:"string"},description:"Document title"},type:{required:!1,tsType:{name:"union",raw:"'pdf' | 'image' | 'text'",elements:[{name:"literal",value:"'pdf'"},{name:"literal",value:"'image'"},{name:"literal",value:"'text'"}]},description:"Type of document to display",defaultValue:{value:"'pdf'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Viewer height",defaultValue:{value:"500",computed:!1}},downloadable:{required:!1,tsType:{name:"boolean"},description:"Whether the document can be downloaded",defaultValue:{value:"false",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when download button is clicked"}}};const R={title:"Components/DocumentViewer",component:d,tags:["autodocs"]},r={args:{src:"/sample.pdf",title:"Sample PDF",type:"pdf"}},a={args:{src:"/photo.png",title:"Photo Preview",type:"image"}},s={args:{src:"/report.pdf",title:"Downloadable Report",type:"pdf",downloadable:!0}};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    src: '/sample.pdf',
    title: 'Sample PDF',
    type: 'pdf'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: '/photo.png',
    title: 'Photo Preview',
    type: 'image'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,g,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    src: '/report.pdf',
    title: 'Downloadable Report',
    type: 'pdf',
    downloadable: true
  }
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const I=["PDF","Image","Downloadable"];export{s as Downloadable,a as Image,r as PDF,I as __namedExportsOrder,R as default};
