import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as te}from"./index-G8LIXM5I.js";import{c as y}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function g({items:L,allowMultiple:W=!1,value:v,defaultValue:J=[],onChange:m,collapsible:_=!0,className:$,...K}){const[Q,X]=te.useState(J),r=v??Q,Z=v!==void 0,ee=n=>{const t=r.includes(n);let i;W?i=t?r.filter(ne=>ne!==n):[...r,n]:i=t&&_?[]:[n],Z||X(i),m==null||m(i)};return e.jsx("div",{className:y("ux4g-accordion",$),...K,children:L.map(n=>{const t=r.includes(n.key),i=n.disabled;return e.jsxs("div",{className:y("ux4g-accordion-item",t&&"ux4g-accordion-item-open",i&&"ux4g-accordion-item-disabled"),children:[e.jsxs("button",{type:"button",className:"ux4g-accordion-header",onClick:()=>!i&&ee(n.key),disabled:i,"aria-expanded":t,"aria-controls":`accordion-content-${n.key}`,id:`accordion-header-${n.key}`,children:[n.icon&&e.jsx("span",{className:"ux4g-accordion-icon","aria-hidden":"true",children:n.icon}),e.jsx("span",{className:"ux4g-accordion-title",children:n.title}),e.jsx("span",{className:"ux4g-accordion-chevron","aria-hidden":"true",children:t?"−":"+"})]}),e.jsx("div",{id:`accordion-content-${n.key}`,role:"region","aria-labelledby":`accordion-header-${n.key}`,className:y("ux4g-accordion-content",t&&"ux4g-accordion-content-open"),hidden:!t,children:e.jsx("div",{className:"ux4g-accordion-body",children:n.content})})]},n.key)})})}g.displayName="Accordion";g.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:"Accordion items"},allowMultiple:{required:!1,tsType:{name:"boolean"},description:`Allow multiple items to be open
@default false`,defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Controlled open items (keys)"},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default open items for uncontrolled mode",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(openItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"openItems"}],return:{name:"void"}}},description:"Change handler"},collapsible:{required:!1,tsType:{name:"boolean"},description:`Allow all items to be collapsed
@default true`,defaultValue:{value:"true",computed:!1}}}};const le={title:"Components/Accordion",component:g,tags:["autodocs"]},a={args:{items:[{key:"1",title:"Section 1",content:e.jsx("div",{children:"This is the content of section 1"})},{key:"2",title:"Section 2",content:e.jsx("div",{children:"This is the content of section 2"})},{key:"3",title:"Section 3",content:e.jsx("div",{children:"This is the content of section 3"})}]}},o={args:{allowMultiple:!0,items:[{key:"1",title:"Personal Information",content:e.jsx("div",{children:"Enter your personal details here"})},{key:"2",title:"Contact Information",content:e.jsx("div",{children:"Enter your contact details here"})},{key:"3",title:"Address Information",content:e.jsx("div",{children:"Enter your address details here"})}]}},s={args:{defaultValue:["1"],items:[{key:"1",title:"Getting Started",content:e.jsx("div",{children:"This section is open by default"})},{key:"2",title:"Advanced Options",content:e.jsx("div",{children:"This section is collapsed by default"})}]}},l={args:{items:[{key:"what-is-aadhaar",title:"What is Aadhaar?",content:e.jsx("div",{children:e.jsx("p",{children:"Aadhaar is a 12-digit unique identification number issued by the Unique Identification Authority of India (UIDAI) to all Indian residents."})})},{key:"how-to-apply",title:"How do I apply for Aadhaar?",content:e.jsx("div",{children:e.jsx("p",{children:"You can apply for Aadhaar by visiting your nearest Aadhaar enrollment center with required documents."})})},{key:"documents-required",title:"What documents are required?",content:e.jsx("div",{children:e.jsxs("ul",{children:[e.jsx("li",{children:"Proof of Identity (POI)"}),e.jsx("li",{children:"Proof of Address (POA)"}),e.jsx("li",{children:"Date of Birth proof"})]})})},{key:"how-to-update",title:"How can I update my Aadhaar details?",content:e.jsx("div",{children:e.jsx("p",{children:"You can update your Aadhaar details online through the UIDAI website or by visiting an Aadhaar enrollment center."})})}]}},c={args:{items:[{key:"new-pan",title:"Apply for New PAN Card",icon:"📝",content:e.jsxs("div",{children:[e.jsx("p",{children:"Follow these steps to apply for a new PAN card:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Fill the online application form"}),e.jsx("li",{children:"Upload required documents"}),e.jsx("li",{children:"Pay the application fee"}),e.jsx("li",{children:"Submit and note your acknowledgment number"})]})]})},{key:"correction",title:"Request PAN Card Correction",icon:"✏️",content:e.jsx("div",{children:e.jsx("p",{children:"To make corrections to your PAN card, submit a correction request through the Income Tax Department portal with supporting documents."})})},{key:"reprint",title:"Request PAN Card Reprint",icon:"🖨️",content:e.jsx("div",{children:e.jsx("p",{children:"If you have lost your PAN card, you can request a reprint by providing your PAN number and paying the reprint fee."})})}]}},d={args:{allowMultiple:!0,defaultValue:["setup"],items:[{key:"setup",title:"Setting up DigiLocker",content:e.jsxs("div",{children:[e.jsx("p",{children:"To set up your DigiLocker account:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Visit the DigiLocker website"}),e.jsx("li",{children:"Register with your Aadhaar number"}),e.jsx("li",{children:"Verify your mobile number"}),e.jsx("li",{children:"Set up your account credentials"})]})]})},{key:"upload",title:"Uploading Documents",content:e.jsx("div",{children:e.jsx("p",{children:"You can upload documents in PDF, JPG, or PNG format. Maximum file size is 5MB per document."})})},{key:"share",title:"Sharing Documents",content:e.jsx("div",{children:e.jsx("p",{children:"Generate a secure share link to share your documents with government departments or other organizations."})})}]}},p={args:{items:[{key:"pmjdy",title:"Pradhan Mantri Jan Dhan Yojana (PMJDY)",content:e.jsxs("div",{children:[e.jsx("p",{children:"Financial inclusion program providing bank accounts with zero balance, RuPay debit card, and accident insurance."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Eligibility:"})," All Indian citizens"]})]})},{key:"pmay",title:"Pradhan Mantri Awas Yojana (PMAY)",content:e.jsxs("div",{children:[e.jsx("p",{children:"Housing scheme providing affordable housing to urban and rural poor."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Eligibility:"})," Families without pucca house"]})]})},{key:"ayushman",title:"Ayushman Bharat",content:e.jsxs("div",{children:[e.jsx("p",{children:"Health insurance scheme providing coverage up to Rs. 5 lakhs per family."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Eligibility:"})," Based on SECC 2011 database"]})]})}]}},u={args:{items:[{key:"1",title:"Available Section",content:e.jsx("div",{children:"This section is available"})},{key:"2",title:"Disabled Section",content:e.jsx("div",{children:"This content is not accessible"}),disabled:!0},{key:"3",title:"Another Available Section",content:e.jsx("div",{children:"This section is also available"})}]}},h={args:{items:[{key:"mh",title:"Maharashtra",content:e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Capital:"})," Mumbai"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Population:"})," 112 million"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Area:"})," 307,713 km²"]})]})},{key:"ka",title:"Karnataka",content:e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Capital:"})," Bengaluru"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Population:"})," 61 million"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Area:"})," 191,791 km²"]})]})},{key:"gj",title:"Gujarat",content:e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Capital:"})," Gandhinagar"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Population:"})," 60 million"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Area:"})," 196,244 km²"]})]})}]}};var f,x,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Section 1',
      content: <div>This is the content of section 1</div>
    }, {
      key: '2',
      title: 'Section 2',
      content: <div>This is the content of section 2</div>
    }, {
      key: '3',
      title: 'Section 3',
      content: <div>This is the content of section 3</div>
    }]
  }
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var k,A,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    allowMultiple: true,
    items: [{
      key: '1',
      title: 'Personal Information',
      content: <div>Enter your personal details here</div>
    }, {
      key: '2',
      title: 'Contact Information',
      content: <div>Enter your contact details here</div>
    }, {
      key: '3',
      title: 'Address Information',
      content: <div>Enter your address details here</div>
    }]
  }
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var w,P,I;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    defaultValue: ['1'],
    items: [{
      key: '1',
      title: 'Getting Started',
      content: <div>This section is open by default</div>
    }, {
      key: '2',
      title: 'Advanced Options',
      content: <div>This section is collapsed by default</div>
    }]
  }
}`,...(I=(P=s.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var S,D,N;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'what-is-aadhaar',
      title: 'What is Aadhaar?',
      content: <div>
            <p>Aadhaar is a 12-digit unique identification number issued by the Unique Identification Authority of India (UIDAI) to all Indian residents.</p>
          </div>
    }, {
      key: 'how-to-apply',
      title: 'How do I apply for Aadhaar?',
      content: <div>
            <p>You can apply for Aadhaar by visiting your nearest Aadhaar enrollment center with required documents.</p>
          </div>
    }, {
      key: 'documents-required',
      title: 'What documents are required?',
      content: <div>
            <ul>
              <li>Proof of Identity (POI)</li>
              <li>Proof of Address (POA)</li>
              <li>Date of Birth proof</li>
            </ul>
          </div>
    }, {
      key: 'how-to-update',
      title: 'How can I update my Aadhaar details?',
      content: <div>
            <p>You can update your Aadhaar details online through the UIDAI website or by visiting an Aadhaar enrollment center.</p>
          </div>
    }]
  }
}`,...(N=(D=l.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var T,q,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'new-pan',
      title: 'Apply for New PAN Card',
      icon: '📝',
      content: <div>
            <p>Follow these steps to apply for a new PAN card:</p>
            <ol>
              <li>Fill the online application form</li>
              <li>Upload required documents</li>
              <li>Pay the application fee</li>
              <li>Submit and note your acknowledgment number</li>
            </ol>
          </div>
    }, {
      key: 'correction',
      title: 'Request PAN Card Correction',
      icon: '✏️',
      content: <div>
            <p>To make corrections to your PAN card, submit a correction request through the Income Tax Department portal with supporting documents.</p>
          </div>
    }, {
      key: 'reprint',
      title: 'Request PAN Card Reprint',
      icon: '🖨️',
      content: <div>
            <p>If you have lost your PAN card, you can request a reprint by providing your PAN number and paying the reprint fee.</p>
          </div>
    }]
  }
}`,...(C=(q=c.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var M,E,G;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    allowMultiple: true,
    defaultValue: ['setup'],
    items: [{
      key: 'setup',
      title: 'Setting up DigiLocker',
      content: <div>
            <p>To set up your DigiLocker account:</p>
            <ol>
              <li>Visit the DigiLocker website</li>
              <li>Register with your Aadhaar number</li>
              <li>Verify your mobile number</li>
              <li>Set up your account credentials</li>
            </ol>
          </div>
    }, {
      key: 'upload',
      title: 'Uploading Documents',
      content: <div>
            <p>You can upload documents in PDF, JPG, or PNG format. Maximum file size is 5MB per document.</p>
          </div>
    }, {
      key: 'share',
      title: 'Sharing Documents',
      content: <div>
            <p>Generate a secure share link to share your documents with government departments or other organizations.</p>
          </div>
    }]
  }
}`,...(G=(E=d.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var R,V,Y;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'pmjdy',
      title: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
      content: <div>
            <p>Financial inclusion program providing bank accounts with zero balance, RuPay debit card, and accident insurance.</p>
            <p><strong>Eligibility:</strong> All Indian citizens</p>
          </div>
    }, {
      key: 'pmay',
      title: 'Pradhan Mantri Awas Yojana (PMAY)',
      content: <div>
            <p>Housing scheme providing affordable housing to urban and rural poor.</p>
            <p><strong>Eligibility:</strong> Families without pucca house</p>
          </div>
    }, {
      key: 'ayushman',
      title: 'Ayushman Bharat',
      content: <div>
            <p>Health insurance scheme providing coverage up to Rs. 5 lakhs per family.</p>
            <p><strong>Eligibility:</strong> Based on SECC 2011 database</p>
          </div>
    }]
  }
}`,...(Y=(V=p.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var B,F,O;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      title: 'Available Section',
      content: <div>This section is available</div>
    }, {
      key: '2',
      title: 'Disabled Section',
      content: <div>This content is not accessible</div>,
      disabled: true
    }, {
      key: '3',
      title: 'Another Available Section',
      content: <div>This section is also available</div>
    }]
  }
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var U,z,H;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'mh',
      title: 'Maharashtra',
      content: <div>
            <p><strong>Capital:</strong> Mumbai</p>
            <p><strong>Population:</strong> 112 million</p>
            <p><strong>Area:</strong> 307,713 km²</p>
          </div>
    }, {
      key: 'ka',
      title: 'Karnataka',
      content: <div>
            <p><strong>Capital:</strong> Bengaluru</p>
            <p><strong>Population:</strong> 61 million</p>
            <p><strong>Area:</strong> 191,791 km²</p>
          </div>
    }, {
      key: 'gj',
      title: 'Gujarat',
      content: <div>
            <p><strong>Capital:</strong> Gandhinagar</p>
            <p><strong>Population:</strong> 60 million</p>
            <p><strong>Area:</strong> 196,244 km²</p>
          </div>
    }]
  }
}`,...(H=(z=h.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const ce=["Basic","AllowMultiple","WithDefaultOpen","AadhaarFAQ","PANCardInfo","DigiLockerGuide","GovernmentSchemes","WithDisabledItem","StateInformation"];export{l as AadhaarFAQ,o as AllowMultiple,a as Basic,d as DigiLockerGuide,p as GovernmentSchemes,c as PANCardInfo,h as StateInformation,s as WithDefaultOpen,u as WithDisabledItem,ce as __namedExportsOrder,le as default};
