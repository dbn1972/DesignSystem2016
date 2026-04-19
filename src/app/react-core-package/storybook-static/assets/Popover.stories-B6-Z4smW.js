import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-G8LIXM5I.js";import{c as y}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function P({content:ne,children:ie,placement:le="bottom",trigger:t="click",open:N,defaultOpen:ce=!1,onOpenChange:v,showArrow:ue=!0,title:j,className:de,...pe}){const[me,he]=f.useState(ce),b=f.useRef(null),o=N??me,ge=N!==void 0,r=a=>{ge||he(a),v==null||v(a)};f.useEffect(()=>{if(t!=="click")return;const a=Ne=>{b.current&&!b.current.contains(Ne.target)&&r(!1)};if(o)return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[o,t]);const xe=()=>{t==="click"&&r(!o)},ve=()=>{t==="hover"&&r(!0)},be=()=>{t==="hover"&&r(!1)},fe=()=>{t==="focus"&&r(!0)},Pe=()=>{t==="focus"&&r(!1)};return e.jsxs("div",{ref:b,className:y("ux4g-popover-wrapper",de),...pe,children:[e.jsx("div",{className:"ux4g-popover-trigger",onClick:xe,onMouseEnter:ve,onMouseLeave:be,onFocus:fe,onBlur:Pe,children:ie}),o&&e.jsxs("div",{role:"dialog",className:y("ux4g-popover",`ux4g-popover-${le}`,ue&&"ux4g-popover-arrow"),children:[j&&e.jsx("div",{className:"ux4g-popover-title",children:j}),e.jsx("div",{className:"ux4g-popover-content",children:ne})]})]})}P.displayName="Popover";P.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},content:{required:!0,tsType:{name:"ReactNode"},description:"Popover content"},children:{required:!0,tsType:{name:"ReactNode"},description:"Element that triggers the popover"},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-start'
| 'top-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'right'
| 'right-start'
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:`Popover placement
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},trigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover' | 'focus'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"}]},description:`Trigger type
@default 'click'`,defaultValue:{value:"'click'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Default open state",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Open state change handler"},showArrow:{required:!1,tsType:{name:"boolean"},description:`Show arrow
@default true`,defaultValue:{value:"true",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Popover title"}}};const ke={title:"Components/Popover",component:P,tags:["autodocs"]},s={args:{content:e.jsx("div",{children:"This is a popover content"}),children:e.jsx("button",{className:"ux4g-button ux4g-button-primary",children:"Click me"})}},n={args:{title:"Popover Title",content:e.jsx("div",{children:"This popover has a title"}),children:e.jsx("button",{className:"ux4g-button ux4g-button-primary",children:"Open"})}},i={args:{trigger:"hover",content:e.jsx("div",{children:"Hover to see this content"}),children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Hover me"})}},l={args:{title:"Aadhaar Information",content:e.jsxs("div",{style:{maxWidth:"200px"},children:[e.jsx("p",{children:"Aadhaar is a 12-digit unique identification number."}),e.jsx("p",{children:"Format: 1234 5678 9012"})]}),children:e.jsx("span",{className:"ux4g-text-link",children:"What is Aadhaar?"})}},c={args:{title:"PAN Card Format",content:e.jsxs("div",{style:{maxWidth:"250px"},children:[e.jsx("p",{children:"PAN format: ABCDE1234F"}),e.jsxs("ul",{children:[e.jsx("li",{children:"First 5 characters: Letters"}),e.jsx("li",{children:"Next 4 characters: Numbers"}),e.jsx("li",{children:"Last character: Letter"})]})]}),children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"PAN Format ℹ️"})}},u={args:{title:"Document Requirements",content:e.jsxs("div",{style:{maxWidth:"300px"},children:[e.jsx("p",{children:e.jsx("strong",{children:"Required Documents:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Aadhaar Card (PDF/JPG)"}),e.jsx("li",{children:"PAN Card (PDF/JPG)"}),e.jsx("li",{children:"Passport Photo (JPG/PNG)"})]}),e.jsx("p",{children:"Maximum file size: 5MB each"})]}),children:e.jsx("button",{className:"ux4g-button ux4g-button-primary",children:"View Requirements"})}},d={args:{title:"Application Status",content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Status:"})," ",e.jsx("span",{className:"ux4g-badge ux4g-badge-success",children:"Approved"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Date:"})," March 20, 2024"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Reference:"})," PAN2024001"]})]}),children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Check Status"})}},p={args:{trigger:"hover",title:"Maharashtra",content:e.jsxs("div",{style:{maxWidth:"200px"},children:[e.jsx("p",{children:"Capital: Mumbai"}),e.jsx("p",{children:"Population: 112 million"}),e.jsx("p",{children:"Area: 307,713 km²"})]}),children:e.jsx("span",{className:"ux4g-text-link",children:"Maharashtra ℹ️"})}},m={args:{placement:"bottom",content:e.jsx("div",{children:"Popover at bottom"}),children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Bottom"})}},h={args:{placement:"top",content:e.jsx("div",{children:"Popover at top"}),children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Top"})}},g={args:{placement:"left",content:e.jsx("div",{children:"Popover at left"}),children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Left"})}},x={args:{placement:"right",content:e.jsx("div",{children:"Popover at right"}),children:e.jsx("button",{className:"ux4g-button ux4g-button-outline",children:"Right"})}};var A,T,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    content: <div>This is a popover content</div>,
    children: <button className="ux4g-button ux4g-button-primary">Click me</button>
  }
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var k,q,R;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Popover Title',
    content: <div>This popover has a title</div>,
    children: <button className="ux4g-button ux4g-button-primary">Open</button>
  }
}`,...(R=(q=n.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var C,D,F;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    trigger: 'hover',
    content: <div>Hover to see this content</div>,
    children: <button className="ux4g-button ux4g-button-outline">Hover me</button>
  }
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var w,M,L;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Aadhaar Information',
    content: <div style={{
      maxWidth: '200px'
    }}>
        <p>Aadhaar is a 12-digit unique identification number.</p>
        <p>Format: 1234 5678 9012</p>
      </div>,
    children: <span className="ux4g-text-link">What is Aadhaar?</span>
  }
}`,...(L=(M=l.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var B,W,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'PAN Card Format',
    content: <div style={{
      maxWidth: '250px'
    }}>
        <p>PAN format: ABCDE1234F</p>
        <ul>
          <li>First 5 characters: Letters</li>
          <li>Next 4 characters: Numbers</li>
          <li>Last character: Letter</li>
        </ul>
      </div>,
    children: <button className="ux4g-button ux4g-button-outline">PAN Format ℹ️</button>
  }
}`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var I,G,H;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Document Requirements',
    content: <div style={{
      maxWidth: '300px'
    }}>
        <p><strong>Required Documents:</strong></p>
        <ul>
          <li>Aadhaar Card (PDF/JPG)</li>
          <li>PAN Card (PDF/JPG)</li>
          <li>Passport Photo (JPG/PNG)</li>
        </ul>
        <p>Maximum file size: 5MB each</p>
      </div>,
    children: <button className="ux4g-button ux4g-button-primary">View Requirements</button>
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,O,V;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: 'Application Status',
    content: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <div>
          <strong>Status:</strong> <span className="ux4g-badge ux4g-badge-success">Approved</span>
        </div>
        <div>
          <strong>Date:</strong> March 20, 2024
        </div>
        <div>
          <strong>Reference:</strong> PAN2024001
        </div>
      </div>,
    children: <button className="ux4g-button ux4g-button-outline">Check Status</button>
  }
}`,...(V=(O=d.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,z,$;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    trigger: 'hover',
    title: 'Maharashtra',
    content: <div style={{
      maxWidth: '200px'
    }}>
        <p>Capital: Mumbai</p>
        <p>Population: 112 million</p>
        <p>Area: 307,713 km²</p>
      </div>,
    children: <span className="ux4g-text-link">Maharashtra ℹ️</span>
  }
}`,...($=(z=p.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var K,Q,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    content: <div>Popover at bottom</div>,
    children: <button className="ux4g-button ux4g-button-outline">Bottom</button>
  }
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    content: <div>Popover at top</div>,
    children: <button className="ux4g-button ux4g-button-outline">Top</button>
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    content: <div>Popover at left</div>,
    children: <button className="ux4g-button ux4g-button-outline">Left</button>
  }
}`,...(re=(te=g.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,oe,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    content: <div>Popover at right</div>,
    children: <button className="ux4g-button ux4g-button-outline">Right</button>
  }
}`,...(se=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const qe=["Basic","WithTitle","HoverTrigger","AadhaarInfo","PANFormat","DocumentRequirements","ApplicationStatus","StateInfo","BottomPlacement","TopPlacement","LeftPlacement","RightPlacement"];export{l as AadhaarInfo,d as ApplicationStatus,s as Basic,m as BottomPlacement,u as DocumentRequirements,i as HoverTrigger,g as LeftPlacement,c as PANFormat,x as RightPlacement,p as StateInfo,h as TopPlacement,n as WithTitle,qe as __namedExportsOrder,ke as default};
