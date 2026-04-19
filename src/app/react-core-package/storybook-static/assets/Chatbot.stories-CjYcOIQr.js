import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-G8LIXM5I.js";import{c as h}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const u=r.forwardRef(({title:t="Help",messages:M=[],onSend:a,open:m=!1,onToggle:P,placeholder:D="Type a message…",className:E,...H},O)=>{const[d,g]=r.useState(""),c=r.useCallback(()=>{const e=d.trim();e&&(a==null||a(e),g(""))},[d,a]),R=r.useCallback(e=>{e.key==="Enter"&&(e.preventDefault(),c())},[c]);return s.jsxs("div",{ref:O,className:h("ux4g-chatbot",E),...H,children:[s.jsx("button",{type:"button",className:"ux4g-chatbot-toggle rounded-full w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground shadow-lg","aria-label":m?`Close ${t}`:`Open ${t}`,onClick:P,children:"💬"}),m&&s.jsxs("div",{className:"ux4g-chatbot-panel border rounded-lg shadow-xl mt-2 w-80 flex flex-col bg-background",role:"log","aria-label":t,children:[s.jsx("div",{className:"ux4g-chatbot-header font-semibold px-4 py-2 border-b",children:t}),s.jsx("div",{className:"ux4g-chatbot-messages flex-1 overflow-y-auto px-4 py-2 space-y-2 max-h-60",children:M.map(e=>s.jsx("div",{className:h("ux4g-chatbot-message text-sm px-3 py-1 rounded-lg max-w-[80%]",e.sender==="user"?"ml-auto bg-primary text-primary-foreground":"mr-auto bg-muted"),children:e.text},e.id))}),s.jsxs("div",{className:"ux4g-chatbot-input flex border-t px-2 py-2 gap-2",children:[s.jsx("input",{type:"text",value:d,onChange:e=>g(e.target.value),onKeyDown:R,placeholder:D,"aria-label":"Message input",className:"flex-1 px-2 py-1 border rounded text-sm"}),s.jsx("button",{type:"button",onClick:c,className:"ux4g-chatbot-send px-3 py-1 bg-primary text-primary-foreground rounded text-sm",children:"Send"})]})]})]})});u.displayName="Chatbot";u.__docgenInfo={description:"",methods:[],displayName:"Chatbot",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},title:{required:!1,tsType:{name:"string"},description:"Title displayed in the chat header",defaultValue:{value:"'Help'",computed:!1}},messages:{required:!1,tsType:{name:"Array",elements:[{name:"ChatMessage"}],raw:"ChatMessage[]"},description:"Array of chat messages",defaultValue:{value:"[]",computed:!1}},onSend:{required:!1,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:"Called when the user sends a message"},open:{required:!1,tsType:{name:"boolean"},description:"Whether the chat panel is open",defaultValue:{value:"false",computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the toggle button is clicked"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the message input",defaultValue:{value:"'Type a message…'",computed:!1}}}};const $={title:"Components/Chatbot",component:u,tags:["autodocs"]},o={args:{open:!1}},n={args:{open:!0,title:"Support"}},l={args:{open:!0,messages:[{id:"1",text:"How can I help?",sender:"bot"},{id:"2",text:"I need assistance",sender:"user"}]}},i={args:{open:!0,placeholder:"Ask a question…"}},p={args:{open:!0,title:"Live Chat"}};var x,f,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,C,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Support'
  }
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var w,T,N;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    open: true,
    messages: [{
      id: '1',
      text: 'How can I help?',
      sender: 'bot'
    }, {
      id: '2',
      text: 'I need assistance',
      sender: 'user'
    }]
  }
}`,...(N=(T=l.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var j,S,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    open: true,
    placeholder: 'Ask a question…'
  }
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var q,I,A;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Live Chat'
  }
}`,...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const z=["Closed","Open","WithMessages","CustomPlaceholder","CustomTitle"];export{o as Closed,i as CustomPlaceholder,p as CustomTitle,n as Open,l as WithMessages,z as __namedExportsOrder,$ as default};
