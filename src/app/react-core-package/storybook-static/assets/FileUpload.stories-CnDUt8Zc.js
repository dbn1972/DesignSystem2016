import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-G8LIXM5I.js";import{c as q}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function U({onChange:r,accept:a,multiple:b=!1,maxSize:d,maxFiles:P,disabled:l=!1,error:ze=!1,children:Pe,showFileList:Ae=!0,validator:N,className:De,...Ce}){const[p,T]=c.useState([]),[E,A]=c.useState(!1),[W,Ue]=c.useState([]),M=c.useRef(null),be=n=>{var o;if(N)return N(n);if(d&&n.size>d)return`File size exceeds ${(d/(1024*1024)).toFixed(1)}MB`;if(a){const i=a.split(",").map(t=>t.trim()),s=`.${(o=n.name.split(".").pop())==null?void 0:o.toLowerCase()}`;if(!i.some(t=>t===s||n.type.match(t)))return`File type not accepted. Allowed: ${a}`}return null},k=n=>{if(!n||l)return;const o=Array.from(n),i=[],s=[];for(const C of o){const I=be(C);I?i.push(`${C.name}: ${I}`):s.push(C)}if(P&&p.length+s.length>P){i.push(`Maximum ${P} files allowed`);return}const t=b?[...p,...s]:s;T(t),Ue(i),r==null||r(t)},D=n=>{n.preventDefault(),n.stopPropagation(),l||(n.type==="dragenter"||n.type==="dragover"?A(!0):n.type==="dragleave"&&A(!1))},Ne=n=>{n.preventDefault(),n.stopPropagation(),A(!1),l||k(n.dataTransfer.files)},Te=n=>{k(n.target.files)},Ee=n=>{const o=p.filter((i,s)=>s!==n);T(o),r==null||r(o)},We=n=>n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/(1024*1024)).toFixed(1)} MB`;return e.jsxs("div",{className:q("ux4g-file-upload",De),...Ce,children:[e.jsxs("div",{className:q("ux4g-file-upload-area",E&&"ux4g-file-upload-drag-active",ze&&"ux4g-file-upload-error",l&&"ux4g-file-upload-disabled"),onDragEnter:D,onDragOver:D,onDragLeave:D,onDrop:Ne,onClick:()=>{var n;return!l&&((n=M.current)==null?void 0:n.click())},children:[e.jsx("input",{ref:M,type:"file",accept:a,multiple:b,onChange:Te,disabled:l,className:"ux4g-file-upload-input","aria-label":"File upload"}),Pe||e.jsxs("div",{className:"ux4g-file-upload-content",children:[e.jsx("div",{className:"ux4g-file-upload-icon",children:"📁"}),e.jsx("p",{className:"ux4g-file-upload-text",children:E?"Drop files here":"Drag and drop files here or click to browse"}),a&&e.jsxs("p",{className:"ux4g-file-upload-hint",children:["Accepted formats: ",a]}),d&&e.jsxs("p",{className:"ux4g-file-upload-hint",children:["Maximum file size: ",(d/(1024*1024)).toFixed(1),"MB"]})]})]}),W.length>0&&e.jsx("div",{className:"ux4g-file-upload-errors",children:W.map((n,o)=>e.jsx("div",{className:"ux4g-file-upload-error-item",children:n},o))}),Ae&&p.length>0&&e.jsx("div",{className:"ux4g-file-upload-list",children:p.map((n,o)=>e.jsxs("div",{className:"ux4g-file-upload-item",children:[e.jsxs("div",{className:"ux4g-file-upload-item-info",children:[e.jsx("span",{className:"ux4g-file-upload-item-name",children:n.name}),e.jsx("span",{className:"ux4g-file-upload-item-size",children:We(n.size)})]}),e.jsx("button",{type:"button",className:"ux4g-file-upload-item-remove",onClick:()=>Ee(o),"aria-label":`Remove ${n.name}`,children:"×"})]},o))})]})}U.displayName="FileUpload";U.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:"Change handler"},accept:{required:!1,tsType:{name:"string"},description:`Accept file types
@example '.pdf,.jpg,.png'`},multiple:{required:!1,tsType:{name:"boolean"},description:`Allow multiple files
@default false`,defaultValue:{value:"false",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"Maximum file size in bytes"},maxFiles:{required:!1,tsType:{name:"number"},description:"Maximum number of files"},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:`Error state
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom upload area content"},showFileList:{required:!1,tsType:{name:"boolean"},description:`Show file list
@default true`,defaultValue:{value:"true",computed:!1}},validator:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => string | null",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}}},description:"File validation function"}}};const Ge={title:"Components/FileUpload",component:U,tags:["autodocs"]},m={args:{onChange:r=>console.log("Files:",r)}},g={args:{multiple:!0,onChange:r=>console.log("Files:",r)}},u={args:{accept:".pdf",onChange:r=>console.log("Files:",r)}},f={args:{accept:".jpg,.jpeg,.png",multiple:!0,onChange:r=>console.log("Files:",r)}},h={args:{accept:".pdf,.jpg,.jpeg,.png",maxSize:5*1024*1024,onChange:r=>console.log("Aadhaar files:",r),children:e.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"📄"}),e.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"Upload Aadhaar Card"}),e.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"PDF, JPG, or PNG (max 5MB)"})]})}},x={args:{accept:".pdf,.jpg,.jpeg,.png",maxSize:2*1024*1024,onChange:r=>console.log("PAN files:",r),children:e.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🪪"}),e.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"Upload PAN Card"}),e.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"PDF or Image (max 2MB)"})]})}},y={args:{accept:".jpg,.jpeg",maxSize:1*1024*1024,onChange:r=>console.log("Photo files:",r),children:e.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"📷"}),e.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"Upload Passport Size Photo"}),e.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"JPG format only (max 1MB)"}),e.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"0.5rem"},children:"Dimensions: 35mm x 45mm, White background"})]})}},v={args:{accept:".pdf,.jpg,.jpeg,.png",multiple:!0,maxSize:5*1024*1024,maxFiles:5,onChange:r=>console.log("DigiLocker files:",r),children:e.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"☁️"}),e.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"Upload Documents to DigiLocker"}),e.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Upload up to 5 documents (max 5MB each)"})]})}},j={args:{accept:".pdf",multiple:!0,maxFiles:3,onChange:r=>console.log("Income proof files:",r),children:e.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"💰"}),e.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"Upload Income Proof Documents"}),e.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Salary slips, ITR, Form 16 (PDF only, up to 3 files)"})]})}},S={args:{accept:".pdf,.jpg,.jpeg,.png",onChange:r=>console.log("Address proof files:",r),children:e.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🏠"}),e.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"Upload Address Proof"}),e.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"Electricity bill, Gas bill, or Bank statement"})]})}},F={args:{accept:".pdf",multiple:!0,maxFiles:5,onChange:r=>console.log("Educational documents:",r),children:e.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🎓"}),e.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"Upload Educational Certificates"}),e.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"10th, 12th, Graduation certificates (PDF, up to 5 files)"})]})}},B={args:{disabled:!0}},z={args:{error:!0}};var w,G,$;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    onChange: files => console.log('Files:', files)
  }
}`,...($=(G=m.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var L,R,O;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    multiple: true,
    onChange: files => console.log('Files:', files)
  }
}`,...(O=(R=g.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var _,J,V;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    accept: '.pdf',
    onChange: files => console.log('Files:', files)
  }
}`,...(V=(J=u.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var K,H,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    accept: '.jpg,.jpeg,.png',
    multiple: true,
    onChange: files => console.log('Files:', files)
  }
}`,...(Q=(H=f.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    accept: '.pdf,.jpg,.jpeg,.png',
    maxSize: 5 * 1024 * 1024,
    onChange: files => console.log('Aadhaar files:', files),
    children: <div style={{
      textAlign: 'center',
      padding: '2rem'
    }}>
        <div style={{
        fontSize: '3rem',
        marginBottom: '1rem'
      }}>📄</div>
        <p style={{
        fontWeight: 'bold',
        marginBottom: '0.5rem'
      }}>
          Upload Aadhaar Card
        </p>
        <p style={{
        fontSize: '14px',
        color: '#666'
      }}>
          PDF, JPG, or PNG (max 5MB)
        </p>
      </div>
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,re;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    accept: '.pdf,.jpg,.jpeg,.png',
    maxSize: 2 * 1024 * 1024,
    onChange: files => console.log('PAN files:', files),
    children: <div style={{
      textAlign: 'center',
      padding: '2rem'
    }}>
        <div style={{
        fontSize: '3rem',
        marginBottom: '1rem'
      }}>🪪</div>
        <p style={{
        fontWeight: 'bold',
        marginBottom: '0.5rem'
      }}>
          Upload PAN Card
        </p>
        <p style={{
        fontSize: '14px',
        color: '#666'
      }}>
          PDF or Image (max 2MB)
        </p>
      </div>
  }
}`,...(re=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,te;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    accept: '.jpg,.jpeg',
    maxSize: 1 * 1024 * 1024,
    onChange: files => console.log('Photo files:', files),
    children: <div style={{
      textAlign: 'center',
      padding: '2rem'
    }}>
        <div style={{
        fontSize: '3rem',
        marginBottom: '1rem'
      }}>📷</div>
        <p style={{
        fontWeight: 'bold',
        marginBottom: '0.5rem'
      }}>
          Upload Passport Size Photo
        </p>
        <p style={{
        fontSize: '14px',
        color: '#666'
      }}>
          JPG format only (max 1MB)
        </p>
        <p style={{
        fontSize: '12px',
        color: '#999',
        marginTop: '0.5rem'
      }}>
          Dimensions: 35mm x 45mm, White background
        </p>
      </div>
  }
}`,...(te=(se=y.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ae,le,ie;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    accept: '.pdf,.jpg,.jpeg,.png',
    multiple: true,
    maxSize: 5 * 1024 * 1024,
    maxFiles: 5,
    onChange: files => console.log('DigiLocker files:', files),
    children: <div style={{
      textAlign: 'center',
      padding: '2rem'
    }}>
        <div style={{
        fontSize: '3rem',
        marginBottom: '1rem'
      }}>☁️</div>
        <p style={{
        fontWeight: 'bold',
        marginBottom: '0.5rem'
      }}>
          Upload Documents to DigiLocker
        </p>
        <p style={{
        fontSize: '14px',
        color: '#666'
      }}>
          Upload up to 5 documents (max 5MB each)
        </p>
      </div>
  }
}`,...(ie=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,pe,ce;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    accept: '.pdf',
    multiple: true,
    maxFiles: 3,
    onChange: files => console.log('Income proof files:', files),
    children: <div style={{
      textAlign: 'center',
      padding: '2rem'
    }}>
        <div style={{
        fontSize: '3rem',
        marginBottom: '1rem'
      }}>💰</div>
        <p style={{
        fontWeight: 'bold',
        marginBottom: '0.5rem'
      }}>
          Upload Income Proof Documents
        </p>
        <p style={{
        fontSize: '14px',
        color: '#666'
      }}>
          Salary slips, ITR, Form 16 (PDF only, up to 3 files)
        </p>
      </div>
  }
}`,...(ce=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var me,ge,ue;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    accept: '.pdf,.jpg,.jpeg,.png',
    onChange: files => console.log('Address proof files:', files),
    children: <div style={{
      textAlign: 'center',
      padding: '2rem'
    }}>
        <div style={{
        fontSize: '3rem',
        marginBottom: '1rem'
      }}>🏠</div>
        <p style={{
        fontWeight: 'bold',
        marginBottom: '0.5rem'
      }}>
          Upload Address Proof
        </p>
        <p style={{
        fontSize: '14px',
        color: '#666'
      }}>
          Electricity bill, Gas bill, or Bank statement
        </p>
      </div>
  }
}`,...(ue=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var fe,he,xe;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    accept: '.pdf',
    multiple: true,
    maxFiles: 5,
    onChange: files => console.log('Educational documents:', files),
    children: <div style={{
      textAlign: 'center',
      padding: '2rem'
    }}>
        <div style={{
        fontSize: '3rem',
        marginBottom: '1rem'
      }}>🎓</div>
        <p style={{
        fontWeight: 'bold',
        marginBottom: '0.5rem'
      }}>
          Upload Educational Certificates
        </p>
        <p style={{
        fontSize: '14px',
        color: '#666'
      }}>
          10th, 12th, Graduation certificates (PDF, up to 5 files)
        </p>
      </div>
  }
}`,...(xe=(he=F.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ye,ve,je;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(je=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:je.source}}};var Se,Fe,Be;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(Be=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};const $e=["Basic","Multiple","PDFOnly","ImagesOnly","AadhaarUpload","PANCardUpload","PassportPhotoUpload","DigiLockerUpload","IncomeProofUpload","AddressProofUpload","EducationalDocuments","Disabled","WithError"];export{h as AadhaarUpload,S as AddressProofUpload,m as Basic,v as DigiLockerUpload,B as Disabled,F as EducationalDocuments,f as ImagesOnly,j as IncomeProofUpload,g as Multiple,x as PANCardUpload,u as PDFOnly,y as PassportPhotoUpload,z as WithError,$e as __namedExportsOrder,Ge as default};
