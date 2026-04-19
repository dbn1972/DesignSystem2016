import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-G8LIXM5I.js";import{c as ee}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function r({open:s,onClose:t,title:l,children:Q,footer:b,placement:f="right",size:h="400px",closeOnBackdrop:Y=!0,closeOnEscape:N=!0,showCloseButton:w=!0,contentProps:$,backdropProps:G,className:J,...U}){const y=n.useRef(null);if(n.useEffect(()=>{if(!s)return;const a=o=>{N&&o.key==="Escape"&&t()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[s,N,t]),n.useEffect(()=>{var a;if(s){const o=document.activeElement;return(a=y.current)==null||a.focus(),()=>{o==null||o.focus()}}},[s]),!s)return null;const X=a=>{Y&&a.target===a.currentTarget&&t()},Z=f==="left"||f==="right"?{width:h}:{height:h};return e.jsx("div",{className:"ux4g-drawer-backdrop",onClick:X,...G,children:e.jsxs("div",{ref:y,role:"dialog","aria-modal":"true","aria-labelledby":l?"drawer-title":void 0,className:ee("ux4g-drawer",`ux4g-drawer-${f}`,J),style:Z,tabIndex:-1,...$,...U,children:[(l||w)&&e.jsxs("div",{className:"ux4g-drawer-header",children:[l&&e.jsx("h2",{id:"drawer-title",className:"ux4g-drawer-title",children:l}),w&&e.jsx("button",{type:"button",className:"ux4g-drawer-close",onClick:t,"aria-label":"Close drawer",children:"×"})]}),e.jsx("div",{className:"ux4g-drawer-body",children:Q}),b&&e.jsx("div",{className:"ux4g-drawer-footer",children:b})]})})}r.displayName="Drawer";r.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},open:{required:!0,tsType:{name:"boolean"},description:"Whether drawer is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close handler"},title:{required:!1,tsType:{name:"ReactNode"},description:"Drawer title"},children:{required:!0,tsType:{name:"ReactNode"},description:"Drawer content"},footer:{required:!1,tsType:{name:"ReactNode"},description:"Drawer footer actions"},placement:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:`Drawer placement
@default 'right'`,defaultValue:{value:"'right'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Drawer size (width for left/right, height for top/bottom)
@default '400px'`,defaultValue:{value:"'400px'",computed:!1}},closeOnBackdrop:{required:!1,tsType:{name:"boolean"},description:`Close on backdrop click
@default true`,defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:`Close on escape key
@default true`,defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:`Show close button
@default true`,defaultValue:{value:"true",computed:!1}},contentProps:{required:!1,tsType:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},description:"Additional props for drawer content"},backdropProps:{required:!1,tsType:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},description:"Additional props for backdrop"}}};const oe={title:"Components/Drawer",component:r,tags:["autodocs"]},i={render:()=>{const[s,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"Open Right Drawer"}),e.jsx(r,{open:s,onClose:()=>t(!1),title:"Filter Options",placement:"right",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{className:"ux4g-field",children:[e.jsx("label",{className:"ux4g-label",children:"Status"}),e.jsxs("select",{className:"ux4g-select",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Pending"}),e.jsx("option",{children:"Approved"})]})]}),e.jsxs("div",{className:"ux4g-field",children:[e.jsx("label",{className:"ux4g-label",children:"State"}),e.jsxs("select",{className:"ux4g-select",children:[e.jsx("option",{children:"All States"}),e.jsx("option",{children:"Maharashtra"}),e.jsx("option",{children:"Karnataka"})]})]})]})})]})}},u={render:()=>{const[s,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"Open Left Drawer"}),e.jsx(r,{open:s,onClose:()=>t(!1),title:"Navigation",placement:"left",children:e.jsxs("nav",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("a",{href:"#",className:"ux4g-text-link",children:"Dashboard"}),e.jsx("a",{href:"#",className:"ux4g-text-link",children:"Applications"}),e.jsx("a",{href:"#",className:"ux4g-text-link",children:"Documents"}),e.jsx("a",{href:"#",className:"ux4g-text-link",children:"Settings"})]})})]})}},c={render:()=>{const[s,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(r,{open:s,onClose:()=>t(!1),title:"Application Form",footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx("button",{className:"ux4g-button ux4g-button-outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx("button",{className:"ux4g-button ux4g-button-primary",children:"Submit"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{className:"ux4g-field",children:[e.jsx("label",{className:"ux4g-label",children:"Full Name"}),e.jsx("input",{type:"text",className:"ux4g-input"})]}),e.jsxs("div",{className:"ux4g-field",children:[e.jsx("label",{className:"ux4g-label",children:"Email"}),e.jsx("input",{type:"email",className:"ux4g-input"})]})]})})]})}},p={render:()=>{const[s,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"View Document"}),e.jsx(r,{open:s,onClose:()=>t(!1),title:"Aadhaar Card.pdf",size:"600px",children:e.jsxs("div",{style:{padding:"2rem",background:"#f5f5f5",textAlign:"center"},children:[e.jsx("p",{children:"Document Preview"}),e.jsx("div",{className:"ux4g-badge ux4g-badge-success",children:"✓ Verified"})]})})]})}},d={render:()=>{const[s,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"View Application"}),e.jsx(r,{open:s,onClose:()=>t(!1),title:"PAN Application Details",footer:e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!1),children:"Close"}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Application ID:"})," PAN2024001"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Applicant:"})," Rahul Verma"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Type:"})," New PAN"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Status:"})," ",e.jsx("span",{className:"ux4g-badge ux4g-badge-success",children:"Approved"})]})]})})]})}},m={render:()=>{const[s,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"Open Large Drawer"}),e.jsx(r,{open:s,onClose:()=>t(!1),title:"Application Form",size:"800px",children:e.jsx("p",{children:"Large drawer content with 800px width"})})]})}},x={render:()=>{const[s,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"Open Top Drawer"}),e.jsx(r,{open:s,onClose:()=>t(!1),title:"Notifications",placement:"top",size:"200px",children:e.jsx("p",{children:"You have 3 new notifications"})})]})}},g={render:()=>{const[s,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"ux4g-button ux4g-button-primary",onClick:()=>t(!0),children:"Open Bottom Drawer"}),e.jsx(r,{open:s,onClose:()=>t(!1),title:"Quick Actions",placement:"bottom",size:"200px",children:e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Action 1"}),e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Action 2"})]})})]})}};var j,v,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Right Drawer
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Filter Options" placement="right">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
            <div className="ux4g-field">
              <label className="ux4g-label">Status</label>
              <select className="ux4g-select">
                <option>All</option>
                <option>Pending</option>
                <option>Approved</option>
              </select>
            </div>
            <div className="ux4g-field">
              <label className="ux4g-label">State</label>
              <select className="ux4g-select">
                <option>All States</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
              </select>
            </div>
          </div>
        </Drawer>
      </>;
  }
}`,...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var C,k,O;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Left Drawer
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Navigation" placement="left">
          <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
            <a href="#" className="ux4g-text-link">Dashboard</a>
            <a href="#" className="ux4g-text-link">Applications</a>
            <a href="#" className="ux4g-text-link">Documents</a>
            <a href="#" className="ux4g-text-link">Settings</a>
          </nav>
        </Drawer>
      </>;
  }
}`,...(O=(k=u.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var A,S,T;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Drawer
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Application Form" footer={<div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>
              <button className="ux4g-button ux4g-button-outline" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="ux4g-button ux4g-button-primary">Submit</button>
            </div>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
            <div className="ux4g-field">
              <label className="ux4g-label">Full Name</label>
              <input type="text" className="ux4g-input" />
            </div>
            <div className="ux4g-field">
              <label className="ux4g-label">Email</label>
              <input type="email" className="ux4g-input" />
            </div>
          </div>
        </Drawer>
      </>;
  }
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var L,F,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          View Document
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Aadhaar Card.pdf" size="600px">
          <div style={{
          padding: '2rem',
          background: '#f5f5f5',
          textAlign: 'center'
        }}>
            <p>Document Preview</p>
            <div className="ux4g-badge ux4g-badge-success">✓ Verified</div>
          </div>
        </Drawer>
      </>;
  }
}`,...(q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var E,V,P;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          View Application
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} title="PAN Application Details" footer={<button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(false)}>
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
              <strong>Applicant:</strong> Rahul Verma
            </div>
            <div>
              <strong>Type:</strong> New PAN
            </div>
            <div>
              <strong>Status:</strong>{' '}
              <span className="ux4g-badge ux4g-badge-success">Approved</span>
            </div>
          </div>
        </Drawer>
      </>;
  }
}`,...(P=(V=d.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var R,z,M;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Large Drawer
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Application Form" size="800px">
          <p>Large drawer content with 800px width</p>
        </Drawer>
      </>;
  }
}`,...(M=(z=m.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var H,B,I;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Top Drawer
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Notifications" placement="top" size="200px">
          <p>You have 3 new notifications</p>
        </Drawer>
      </>;
  }
}`,...(I=(B=x.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var _,W,K;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Bottom Drawer
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Quick Actions" placement="bottom" size="200px">
          <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
            <button className="ux4g-button ux4g-button-outline">Action 1</button>
            <button className="ux4g-button ux4g-button-outline">Action 2</button>
          </div>
        </Drawer>
      </>;
  }
}`,...(K=(W=g.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};const le=["Right","Left","WithFooter","DocumentViewer","ApplicationDetails","LargeDrawer","Top","Bottom"];export{d as ApplicationDetails,g as Bottom,p as DocumentViewer,m as LargeDrawer,u as Left,i as Right,x as Top,c as WithFooter,le as __namedExportsOrder,oe as default};
