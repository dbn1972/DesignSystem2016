import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-G8LIXM5I.js";import{c as de}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const E=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function a({open:n,onClose:t,title:i,description:u,children:C,footer:N,size:ne="md",closeOnBackdrop:se=!0,closeOnEscape:oe=!0,showCloseButton:D=!0,contentProps:ae,backdropProps:le,className:re,...ie}){const y=o.useRef(null),O=o.useRef(null),k=o.useId(),v=o.useId(),ue=o.useId();if(o.useEffect(()=>{if(!n)return;const c=document.body.style.overflow;O.current=document.activeElement,document.body.style.overflow="hidden",(()=>{const s=y.current;if(!s)return;(s.querySelectorAll(E)[0]??s).focus()})();const A=s=>{if(oe&&s.key==="Escape"){s.preventDefault(),t();return}if(s.key!=="Tab")return;const l=y.current;if(!l)return;const r=Array.from(l.querySelectorAll(E)).filter(w=>!w.hasAttribute("disabled")&&!w.getAttribute("aria-hidden"));if(r.length===0){s.preventDefault(),l.focus();return}const S=r[0],T=r[r.length-1],j=document.activeElement;s.shiftKey?(j===S||j===l)&&(s.preventDefault(),T.focus()):j===T&&(s.preventDefault(),S.focus())};return document.addEventListener("keydown",A),()=>{var s;document.body.style.overflow=c,document.removeEventListener("keydown",A),(s=O.current)==null||s.focus()}},[n]),!n)return null;const ce=c=>{se&&c.target===c.currentTarget&&t()};return e.jsx("div",{className:"ux4g-dialog-backdrop",onClick:ce,...le,children:e.jsxs("div",{ref:y,role:"dialog","aria-modal":"true","aria-labelledby":i?k:void 0,"aria-describedby":u||C?v:void 0,className:de("ux4g-dialog",`ux4g-dialog-${ne}`,re),tabIndex:-1,...ae,...ie,children:[(i||D)&&e.jsxs("div",{className:"ux4g-dialog-header",children:[i&&e.jsx("h2",{id:k,className:"ux4g-dialog-title",children:i}),D&&e.jsx("button",{type:"button",className:"ux4g-dialog-close",onClick:t,"aria-label":"Close dialog",children:"×"})]}),u?e.jsx("div",{id:v,className:"ux4g-dialog-description",children:u}):null,e.jsx("div",{id:u?ue:v,className:"ux4g-dialog-body",children:C}),N&&e.jsx("div",{className:"ux4g-dialog-footer",children:N})]})})}a.displayName="Dialog";a.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},open:{required:!0,tsType:{name:"boolean"},description:"Whether dialog is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close handler"},title:{required:!1,tsType:{name:"ReactNode"},description:"Dialog title"},children:{required:!0,tsType:{name:"ReactNode"},description:"Dialog content"},description:{required:!1,tsType:{name:"ReactNode"},description:"Optional description announced by assistive technology."},footer:{required:!1,tsType:{name:"ReactNode"},description:"Dialog footer actions"},size:{required:!1,tsType:{name:"union",raw:"ComponentSize | 'xl' | 'full'",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:`Dialog size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},closeOnBackdrop:{required:!1,tsType:{name:"boolean"},description:`Close on backdrop click
@default true`,defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:`Close on escape key
@default true`,defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:`Show close button
@default true`,defaultValue:{value:"true",computed:!1}},contentProps:{required:!1,tsType:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},description:"Additional props for dialog content"},backdropProps:{required:!1,tsType:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},description:"Additional props for backdrop"}}};const he={title:"Components/Dialog",component:a,tags:["autodocs"]},d={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"Open Dialog"}),e.jsx(a,{open:n,onClose:()=>t(!1),title:"Basic Dialog",children:e.jsx("p",{children:"This is a basic dialog with a title and content."})})]})}},p={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"Open Dialog"}),e.jsx(a,{open:n,onClose:()=>t(!1),title:"Confirm Action",footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx("button",{className:"ux4g-button ux4g-button-outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!1),children:"Confirm"})]}),children:e.jsx("p",{children:"Are you sure you want to proceed with this action?"})})]})}},m={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"Verify Aadhaar"}),e.jsx(a,{open:n,onClose:()=>t(!1),title:"Aadhaar Verification",footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx("button",{className:"ux4g-button ux4g-button-outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx("button",{className:"ux4g-button ux4g-button-primary",children:"Send OTP"})]}),children:e.jsxs("div",{className:"ux4g-field",children:[e.jsx("label",{className:"ux4g-label",children:"Aadhaar Number"}),e.jsx("input",{type:"text",className:"ux4g-input",placeholder:"1234 5678 9012"})]})})]})}},g={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-destructive",onClick:()=>t(!0),children:"Delete Application"}),e.jsx(a,{open:n,onClose:()=>t(!1),title:"Delete Application",size:"sm",footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx("button",{className:"ux4g-button ux4g-button-outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx("button",{className:"ux4g-button ux4g-button-destructive",onClick:()=>t(!1),children:"Delete"})]}),children:e.jsx("p",{children:"Are you sure you want to delete this application? This action cannot be undone."})})]})}},x={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"Upload Documents"}),e.jsx(a,{open:n,onClose:()=>t(!1),title:"Upload Required Documents",size:"lg",footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx("button",{className:"ux4g-button ux4g-button-outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx("button",{className:"ux4g-button ux4g-button-primary",children:"Upload"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{className:"ux4g-field",children:[e.jsx("label",{className:"ux4g-label",children:"Aadhaar Card"}),e.jsx("input",{type:"file",accept:".pdf,.jpg,.png"})]}),e.jsxs("div",{className:"ux4g-field",children:[e.jsx("label",{className:"ux4g-label",children:"PAN Card"}),e.jsx("input",{type:"file",accept:".pdf,.jpg,.png"})]}),e.jsxs("div",{className:"ux4g-field",children:[e.jsx("label",{className:"ux4g-label",children:"Photograph"}),e.jsx("input",{type:"file",accept:".jpg,.png"})]})]})})]})}},f={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"View Status"}),e.jsx(a,{open:n,onClose:()=>t(!1),title:"Application Status",footer:e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!1),children:"Close"}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Application ID:"})," PAN2024001"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Status:"})," ",e.jsx("span",{className:"ux4g-badge ux4g-badge-success",children:"Approved"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Submitted:"})," March 15, 2024"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Processed:"})," March 20, 2024"]})]})})]})}},b={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"View Terms"}),e.jsx(a,{open:n,onClose:()=>t(!1),title:"Terms and Conditions",size:"xl",footer:e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!1),children:"Accept"}),children:e.jsxs("div",{style:{maxHeight:"400px",overflow:"auto"},children:[e.jsx("h3",{children:"Government of India - Service Terms"}),e.jsx("p",{children:"These terms and conditions outline the rules and regulations for the use of Government of India services..."}),e.jsx("p",{children:"By accessing this service, we assume you accept these terms and conditions. Do not continue to use the service if you do not agree to all of the terms and conditions stated on this page."}),e.jsx("h4",{children:"Privacy Policy"}),e.jsx("p",{children:"Your privacy is important to us. All personal information collected..."}),e.jsx("h4",{children:"Data Protection"}),e.jsx("p",{children:"We implement appropriate security measures to protect your data..."})]})})]})}},h={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"Open Dialog"}),e.jsx(a,{open:n,onClose:()=>t(!1),title:"Required Action",showCloseButton:!1,closeOnBackdrop:!1,closeOnEscape:!1,footer:e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!1),children:"I Understand"}),children:e.jsx("p",{children:"You must acknowledge this message to continue."})})]})}};var q,I,P;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Dialog
        </button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Basic Dialog">
          <p>This is a basic dialog with a title and content.</p>
        </Dialog>
      </>;
  }
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var R,B,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Dialog
        </button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Confirm Action" footer={<div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>
              <button className="ux4g-button ux4g-button-outline" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(false)}>
                Confirm
              </button>
            </div>}>
          <p>Are you sure you want to proceed with this action?</p>
        </Dialog>
      </>;
  }
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var V,M,F;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Verify Aadhaar
        </button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Aadhaar Verification" footer={<div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>
              <button className="ux4g-button ux4g-button-outline" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="ux4g-button ux4g-button-primary">Send OTP</button>
            </div>}>
          <div className="ux4g-field">
            <label className="ux4g-label">Aadhaar Number</label>
            <input type="text" className="ux4g-input" placeholder="1234 5678 9012" />
          </div>
        </Dialog>
      </>;
  }
}`,...(F=(M=m.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var U,H,z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-destructive" onClick={() => setOpen(true)}>
          Delete Application
        </button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Delete Application" size="sm" footer={<div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>
              <button className="ux4g-button ux4g-button-outline" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="ux4g-button ux4g-button-destructive" onClick={() => setOpen(false)}>
                Delete
              </button>
            </div>}>
          <p>Are you sure you want to delete this application? This action cannot be undone.</p>
        </Dialog>
      </>;
  }
}`,...(z=(H=g.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var W,_,G;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Upload Documents
        </button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Upload Required Documents" size="lg" footer={<div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>
              <button className="ux4g-button ux4g-button-outline" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="ux4g-button ux4g-button-primary">Upload</button>
            </div>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
            <div className="ux4g-field">
              <label className="ux4g-label">Aadhaar Card</label>
              <input type="file" accept=".pdf,.jpg,.png" />
            </div>
            <div className="ux4g-field">
              <label className="ux4g-label">PAN Card</label>
              <input type="file" accept=".pdf,.jpg,.png" />
            </div>
            <div className="ux4g-field">
              <label className="ux4g-label">Photograph</label>
              <input type="file" accept=".jpg,.png" />
            </div>
          </div>
        </Dialog>
      </>;
  }
}`,...(G=(_=x.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var Y,K,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          View Status
        </button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Application Status" footer={<button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(false)}>
              Close
            </button>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
            <div>
              <strong>Application ID:</strong> PAN2024001
            </div>
            <div>
              <strong>Status:</strong>{' '}
              <span className="ux4g-badge ux4g-badge-success">Approved</span>
            </div>
            <div>
              <strong>Submitted:</strong> March 15, 2024
            </div>
            <div>
              <strong>Processed:</strong> March 20, 2024
            </div>
          </div>
        </Dialog>
      </>;
  }
}`,...($=(K=f.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          View Terms
        </button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Terms and Conditions" size="xl" footer={<button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(false)}>
              Accept
            </button>}>
          <div style={{
          maxHeight: '400px',
          overflow: 'auto'
        }}>
            <h3>Government of India - Service Terms</h3>
            <p>
              These terms and conditions outline the rules and regulations for the use of
              Government of India services...
            </p>
            <p>
              By accessing this service, we assume you accept these terms and conditions. Do not
              continue to use the service if you do not agree to all of the terms and conditions
              stated on this page.
            </p>
            <h4>Privacy Policy</h4>
            <p>Your privacy is important to us. All personal information collected...</p>
            <h4>Data Protection</h4>
            <p>We implement appropriate security measures to protect your data...</p>
          </div>
        </Dialog>
      </>;
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Dialog
        </button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Required Action" showCloseButton={false} closeOnBackdrop={false} closeOnEscape={false} footer={<button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(false)}>
              I Understand
            </button>}>
          <p>You must acknowledge this message to continue.</p>
        </Dialog>
      </>;
  }
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const ye=["Basic","WithFooter","AadhaarVerification","DeleteConfirmation","DocumentUpload","ApplicationStatus","LargeContent","NoCloseButton"];export{m as AadhaarVerification,f as ApplicationStatus,d as Basic,g as DeleteConfirmation,x as DocumentUpload,b as LargeContent,h as NoCloseButton,p as WithFooter,ye as __namedExportsOrder,he as default};
