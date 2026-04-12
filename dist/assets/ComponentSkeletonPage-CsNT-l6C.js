import{j as e,r as s}from"./index-BYMLq1ET.js";import{C as u}from"./ComponentDocumentation-CxrYZXwp.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";const t=({variant:a,width:n,height:r,count:i,animated:o,className:l,...d})=>{const c="bg-gray-200",m=o?o==="pulse"?"skeleton-pulse":"skeleton-wave":"",p=a==="circle"?"rounded-full":a==="rectangle"?"rounded":a==="text"?"rounded h-4":"rounded",x={width:n||(a==="circle"?"40px":"100%"),height:r||(a==="circle"?"40px":a==="text"?"16px":"100px")};return a==="text"&&i&&i>1?e.jsx("div",{className:"space-y-2",children:Array.from({length:i}).map((w,h)=>e.jsx("div",{className:[c,p,m,l].filter(Boolean).join(" "),style:{...x,width:h===i-1?"80%":"100%"},"aria-hidden":"true",...d},h))}):e.jsx("div",{className:[c,p,m,l].filter(Boolean).join(" "),style:x,"aria-hidden":"true",...d})},g=()=>{const[a,n]=s.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:()=>n(!a),className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors",children:a?"Show Loading":"Show Loaded"}),e.jsx("div",{className:"border border-gray-200 rounded-lg p-6 bg-white",children:a?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-[#005196] flex items-center justify-center text-white font-semibold",children:"JD"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:"John Doe"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Senior Developer"})]})]}),e.jsx("img",{src:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23ddd' width='400' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EProject Image%3C/text%3E%3C/svg%3E",alt:"Project",className:"w-full h-[200px] object-cover rounded"}),e.jsx("p",{className:"text-gray-700",children:"This is a completed project card showing real content. The skeleton loader provided visual feedback while the data was being fetched from the server."})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{variant:"circle",width:"48px",height:"48px",animated:"pulse"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(t,{variant:"text",width:"40%",animated:"pulse"}),e.jsx(t,{variant:"text",width:"60%",animated:"pulse"})]})]}),e.jsx(t,{variant:"rectangle",height:"200px",animated:"pulse"}),e.jsx(t,{variant:"text",count:3,animated:"pulse"})]})})]})},v=()=>{const[a,n]=s.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:()=>n(!a),className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors",children:a?"Show Loading":"Show Loaded"}),e.jsx("div",{className:"border border-gray-200 rounded-lg overflow-hidden bg-white",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50 border-b border-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:a?e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm text-gray-900",children:"Application #12345"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded",children:"Approved"})}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"2026-04-10"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm text-gray-900",children:"Application #12344"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsx("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-800 rounded",children:"Pending"})}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"2026-04-09"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm text-gray-900",children:"Application #12343"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded",children:"Approved"})}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"2026-04-08"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm text-gray-900",children:"Application #12342"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsx("span",{className:"px-2 py-1 bg-red-100 text-red-800 rounded",children:"Rejected"})}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"2026-04-07"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm text-gray-900",children:"Application #12341"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded",children:"Approved"})}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"2026-04-06"})]})]}):Array.from({length:5}).map((r,i)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4",children:e.jsx(t,{variant:"text",width:"70%",animated:"wave"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx(t,{variant:"text",width:"50%",animated:"wave"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx(t,{variant:"text",width:"60%",animated:"wave"})})]},i))})]})})]})},f=()=>{const[a,n]=s.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:()=>n(!a),className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors",children:a?"Show Loading":"Show Loaded"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:a?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6 bg-white",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"Total Applications"}),e.jsx("div",{className:"mt-2 text-3xl font-semibold text-gray-900",children:"1,284"}),e.jsx("div",{className:"mt-2 text-sm text-green-600",children:"+12% from last month"})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6 bg-white",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"Pending Review"}),e.jsx("div",{className:"mt-2 text-3xl font-semibold text-gray-900",children:"42"}),e.jsx("div",{className:"mt-2 text-sm text-yellow-600",children:"Requires attention"})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6 bg-white",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"Approved This Week"}),e.jsx("div",{className:"mt-2 text-3xl font-semibold text-gray-900",children:"156"}),e.jsx("div",{className:"mt-2 text-sm text-green-600",children:"+8% from last week"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6 bg-white",children:[e.jsx(t,{variant:"text",width:"50%",animated:"pulse"}),e.jsx("div",{className:"mt-4",children:e.jsx(t,{variant:"text",width:"70%",height:"32px",animated:"pulse"})})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6 bg-white",children:[e.jsx(t,{variant:"text",width:"50%",animated:"pulse"}),e.jsx("div",{className:"mt-4",children:e.jsx(t,{variant:"text",width:"70%",height:"32px",animated:"pulse"})})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6 bg-white",children:[e.jsx(t,{variant:"text",width:"50%",animated:"pulse"}),e.jsx("div",{className:"mt-4",children:e.jsx(t,{variant:"text",width:"70%",height:"32px",animated:"pulse"})})]})]})})]})},y=()=>{const[a,n]=s.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:()=>n(!a),className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors",children:a?"Show Loading":"Show Loaded"}),e.jsx("div",{className:"border border-gray-200 rounded-lg bg-white divide-y divide-gray-200",children:a?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"p-4 flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium",children:"AM"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-gray-900",children:"Alice Martinez"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Submitted license renewal application"})]})]}),e.jsxs("div",{className:"p-4 flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-medium",children:"BJ"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-gray-900",children:"Bob Johnson"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Uploaded required documentation"})]})]}),e.jsxs("div",{className:"p-4 flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium",children:"CW"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-gray-900",children:"Carol Williams"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Application approved by reviewer"})]})]}),e.jsxs("div",{className:"p-4 flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-medium",children:"DD"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-gray-900",children:"David Davis"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Payment processed successfully"})]})]})]}):Array.from({length:4}).map((r,i)=>e.jsxs("div",{className:"p-4 flex items-center gap-4",children:[e.jsx(t,{variant:"circle",width:"40px",height:"40px",animated:"wave"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(t,{variant:"text",width:"30%",animated:"wave"}),e.jsx(t,{variant:"text",width:"60%",animated:"wave"})]})]},i))})]})},b=()=>{const[a,n]=s.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:()=>n(!a),className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors",children:a?"Show Loading":"Show Loaded"}),e.jsx("div",{className:"border border-gray-200 rounded-lg p-6 bg-white space-y-4",children:a?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]",placeholder:"Enter your name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]",placeholder:"Enter your email"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Additional Comments"}),e.jsx("textarea",{className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]",rows:4,placeholder:"Enter any additional information"})]}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx("button",{className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors",children:"Submit"}),e.jsx("button",{className:"px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors",children:"Cancel"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(t,{variant:"text",width:"30%",animated:"pulse"}),e.jsx("div",{className:"mt-2",children:e.jsx(t,{variant:"rectangle",height:"40px",animated:"pulse"})})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text",width:"25%",animated:"pulse"}),e.jsx("div",{className:"mt-2",children:e.jsx(t,{variant:"rectangle",height:"40px",animated:"pulse"})})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text",width:"35%",animated:"pulse"}),e.jsx("div",{className:"mt-2",children:e.jsx(t,{variant:"rectangle",height:"100px",animated:"pulse"})})]}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx(t,{variant:"rectangle",width:"100px",height:"40px",animated:"pulse"}),e.jsx(t,{variant:"rectangle",width:"100px",height:"40px",animated:"pulse"})]})]})})]})};function A(){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes skeleton-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes skeleton-wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .skeleton-pulse {
          animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .skeleton-wave {
          position: relative;
          overflow: hidden;
        }

        .skeleton-wave::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 100%);
          animation: skeleton-wave 1.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .skeleton-pulse,
          .skeleton-wave::after {
            animation: none;
          }
        }
      `}),e.jsx(u,{name:"Skeleton",description:"Loading placeholder that shows content structure while data is being fetched. Provides visual feedback to users during asynchronous operations and improves perceived performance.",category:"Feedback",maturity:"beta",tier:"core",since:"v1.2.0",updated:"v2.1.0",props:[{name:"variant",type:"'text' | 'circle' | 'rectangle' | 'custom'",default:"'text'",required:!1,description:"Visual variant of the skeleton. Text for text lines, circle for avatars, rectangle for images/cards, custom for specific shapes."},{name:"width",type:"string | number",required:!1,description:"Width of the skeleton. Accepts CSS units (px, %, rem) or numbers (treated as px). Defaults to 100% for text/rectangle, 40px for circle."},{name:"height",type:"string | number",required:!1,description:"Height of the skeleton. Accepts CSS units (px, %, rem) or numbers (treated as px). Defaults to 16px for text, 40px for circle, 100px for rectangle."},{name:"count",type:"number",default:"1",required:!1,description:"Number of skeleton lines to render. Only applicable for text variant. Last line is rendered at 80% width for natural appearance."},{name:"animated",type:"'pulse' | 'wave' | false",default:"'pulse'",required:!1,description:"Animation type. Pulse creates opacity fade effect, wave creates shimmer effect. Set to false for no animation (respects prefers-reduced-motion)."},{name:"borderRadius",type:"string | number",required:!1,description:"Custom border radius. Overrides variant defaults. Accepts CSS units or numbers (treated as px)."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with variant classes."},{name:"ariaLabel",type:"string",default:"'Loading content'",required:!1,description:"Accessible label for screen readers. Announces loading state."}],examples:[{title:"Text Loading (Single and Multiple Lines)",description:"Skeleton placeholders for text content with single or multiple lines.",code:`import { Skeleton } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Single Line</h3>
        <Skeleton variant="text" width="60%" />
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Multiple Lines</h3>
        <Skeleton variant="text" count={3} />
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Custom Width</h3>
        <Skeleton variant="text" width="200px" />
      </div>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2 text-gray-700",children:"Single Line"}),e.jsx(t,{variant:"text",width:"60%",animated:"pulse"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2 text-gray-700",children:"Multiple Lines"}),e.jsx(t,{variant:"text",count:3,animated:"pulse"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2 text-gray-700",children:"Custom Width"}),e.jsx(t,{variant:"text",width:"200px",animated:"pulse"})]})]})},{title:"Circle and Rectangle Shapes",description:"Circle variant for avatars and rectangle variant for images or cards.",code:`import { Skeleton } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Avatar (Circle)</h3>
        <div className="flex gap-4 items-center">
          <Skeleton variant="circle" width="40px" height="40px" />
          <Skeleton variant="circle" width="56px" height="56px" />
          <Skeleton variant="circle" width="72px" height="72px" />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Image (Rectangle)</h3>
        <Skeleton variant="rectangle" width="100%" height="200px" />
      </div>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2 text-gray-700",children:"Avatar (Circle)"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(t,{variant:"circle",width:"40px",height:"40px",animated:"pulse"}),e.jsx(t,{variant:"circle",width:"56px",height:"56px",animated:"pulse"}),e.jsx(t,{variant:"circle",width:"72px",height:"72px",animated:"pulse"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2 text-gray-700",children:"Image (Rectangle)"}),e.jsx(t,{variant:"rectangle",width:"100%",height:"200px",animated:"pulse"})]})]})},{title:"Animation Types (Pulse vs Wave)",description:"Two animation styles: pulse (opacity fade) and wave (shimmer effect).",code:`import { Skeleton } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Pulse Animation</h3>
        <Skeleton variant="text" count={2} animated="pulse" />
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Wave Animation</h3>
        <Skeleton variant="text" count={2} animated="wave" />
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">No Animation</h3>
        <Skeleton variant="text" count={2} animated={false} />
      </div>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2 text-gray-700",children:"Pulse Animation"}),e.jsx(t,{variant:"text",count:2,animated:"pulse"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2 text-gray-700",children:"Wave Animation"}),e.jsx(t,{variant:"text",count:2,animated:"wave"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2 text-gray-700",children:"No Animation"}),e.jsx(t,{variant:"text",count:2,animated:!1})]})]})},{title:"Card Loading with Toggle",description:"Interactive example showing skeleton loading for a card layout with toggle between loading and loaded states.",code:`import { Skeleton } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div>
      {isLoading ? (
        <div className="border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-4">
            <Skeleton variant="circle" width="48px" height="48px" />
            <div className="flex-1">
              <Skeleton variant="text" width="40%" />
              <Skeleton variant="text" width="60%" />
            </div>
          </div>
          <Skeleton variant="rectangle" height="200px" />
          <Skeleton variant="text" count={3} />
        </div>
      ) : (
        <div className="border rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500" />
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">Developer</p>
            </div>
          </div>
          {/* Content loaded */}
        </div>
      )}
    </div>
  );
}`,preview:e.jsx(g,{})},{title:"Table Loading",description:"Skeleton placeholders for table rows during data fetching.",code:`import { Skeleton } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <tr key={i}>
              <td><Skeleton variant="text" width="70%" /></td>
              <td><Skeleton variant="text" width="50%" /></td>
              <td><Skeleton variant="text" width="60%" /></td>
            </tr>
          ))
        ) : (
          {/* Loaded table rows */}
        )}
      </tbody>
    </table>
  );
}`,preview:e.jsx(v,{})},{title:"Dashboard Metrics Loading",description:"Loading placeholders for dashboard metric cards.",code:`import { Skeleton } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {isLoading ? (
        Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-6">
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="70%" height="32px" />
          </div>
        ))
      ) : (
        {/* Loaded metrics */}
      )}
    </div>
  );
}`,preview:e.jsx(f,{})},{title:"List Loading",description:"Skeleton placeholders for list items with avatars and text.",code:`import { Skeleton } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="space-y-4">
      {isLoading ? (
        Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton variant="circle" width="40px" height="40px" />
            <div className="flex-1">
              <Skeleton variant="text" width="30%" />
              <Skeleton variant="text" width="60%" />
            </div>
          </div>
        ))
      ) : (
        {/* Loaded list items */}
      )}
    </div>
  );
}`,preview:e.jsx(y,{})},{title:"Form Loading",description:"Loading placeholders for form fields and buttons.",code:`import { Skeleton } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="space-y-4">
      {isLoading ? (
        <>
          <div>
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="rectangle" height="40px" />
          </div>
          <div>
            <Skeleton variant="text" width="25%" />
            <Skeleton variant="rectangle" height="40px" />
          </div>
          <div>
            <Skeleton variant="text" width="35%" />
            <Skeleton variant="rectangle" height="100px" />
          </div>
          <div className="flex gap-3">
            <Skeleton variant="rectangle" width="100px" height="40px" />
            <Skeleton variant="rectangle" width="100px" height="40px" />
          </div>
        </>
      ) : (
        {/* Loaded form */}
      )}
    </div>
  );
}`,preview:e.jsx(b,{})}],reactCode:{component:`import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { skeletonVariants } from './skeleton.variants';
import { SkeletonProps } from './Skeleton.types';

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = 'text',
      width,
      height,
      count = 1,
      animated = 'pulse',
      borderRadius,
      ariaLabel = 'Loading content',
      style,
      ...props
    },
    ref
  ) => {
    const customStyle: React.CSSProperties = {
      ...style,
      width: width,
      height: height,
      borderRadius: borderRadius,
    };

    if (variant === 'text' && count > 1) {
      return (
        <div
          ref={ref}
          className="space-y-2"
          role="status"
          aria-label={ariaLabel}
          aria-busy="true"
          {...props}
        >
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={cn(
                skeletonVariants({ variant, animated }),
                className
              )}
              style={{
                ...customStyle,
                width: index === count - 1 ? '80%' : customStyle.width || '100%',
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, animated }), className)}
        style={customStyle}
        role="status"
        aria-label={ariaLabel}
        aria-busy="true"
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';`,types:`export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
          SkeletonVariantProps {
  variant?: 'text' | 'circle' | 'rectangle' | 'custom';
  width?: string | number;
  height?: string | number;
  count?: number;
  animated?: 'pulse' | 'wave' | false;
  borderRadius?: string | number;
  ariaLabel?: string;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const skeletonVariants = cva(
  [
    'bg-gray-200 dark:bg-gray-700',
  ],
  {
    variants: {
      variant: {
        text: [
          'rounded',
          'h-4',
          'w-full',
        ],
        circle: [
          'rounded-full',
          'w-10 h-10',
        ],
        rectangle: [
          'rounded',
          'w-full h-24',
        ],
        custom: [
          'rounded',
        ],
      },
      animated: {
        pulse: [
          'animate-pulse',
        ],
        wave: [
          'relative overflow-hidden',
          'before:absolute before:inset-0',
          'before:translate-x-[-100%]',
          'before:bg-gradient-to-r',
          'before:from-transparent',
          'before:via-white/60',
          'before:to-transparent',
          'before:animate-[shimmer_1.5s_infinite]',
        ],
        false: [],
      },
    },
    defaultVariants: {
      variant: 'text',
      animated: 'pulse',
    },
  }
);

export type SkeletonVariantProps = VariantProps<typeof skeletonVariants>;`,styles:`/* skeleton.css */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-pulse {
    animation: none;
  }
  
  [class*="animate-shimmer"] {
    animation: none;
  }
}`},angularCode:{component:`import { Component, Input } from '@angular/core';

type SkeletonVariant = 'text' | 'circle' | 'rectangle' | 'custom';
type SkeletonAnimation = 'pulse' | 'wave' | false;

@Component({
  selector: 'ux4g-skeleton',
  template: \`
    <div
      *ngIf="count === 1"
      [class]="getSkeletonClasses()"
      [style.width]="width"
      [style.height]="height"
      [style.border-radius]="borderRadius"
      role="status"
      [attr.aria-label]="ariaLabel"
      aria-busy="true"
      aria-hidden="true"
    ></div>
    
    <div
      *ngIf="count > 1 && variant === 'text'"
      class="ux4g-skeleton-container"
      role="status"
      [attr.aria-label]="ariaLabel"
      aria-busy="true"
    >
      <div
        *ngFor="let item of getCountArray(); let i = index"
        [class]="getSkeletonClasses()"
        [style.width]="i === count - 1 ? '80%' : width"
        [style.height]="height"
        aria-hidden="true"
      ></div>
    </div>
  \`,
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent {
  @Input() variant: SkeletonVariant = 'text';
  @Input() width?: string;
  @Input() height?: string;
  @Input() count: number = 1;
  @Input() animated: SkeletonAnimation = 'pulse';
  @Input() borderRadius?: string;
  @Input() ariaLabel: string = 'Loading content';
  @Input() className?: string;

  getSkeletonClasses(): string {
    const baseClasses = 'ux4g-skeleton';
    const variantClass = 'ux4g-skeleton-' + this.variant;
    const animationClass = this.animated ? 'ux4g-skeleton-' + this.animated : '';
    
    return [baseClasses, variantClass, animationClass, this.className]
      .filter(Boolean)
      .join(' ');
  }

  getCountArray(): number[] {
    return Array.from({ length: this.count }, (_, i) => i);
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';

@NgModule({
  declarations: [SkeletonComponent],
  imports: [CommonModule],
  exports: [SkeletonComponent]
})
export class SkeletonModule { }`,types:`export type SkeletonVariant = 'text' | 'circle' | 'rectangle' | 'custom';
export type SkeletonAnimation = 'pulse' | 'wave' | false;`,styles:`/* skeleton.component.css */
.ux4g-skeleton {
  background-color: #e5e7eb;
  display: block;
}

.ux4g-skeleton-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ux4g-skeleton-text {
  border-radius: 0.25rem;
  height: 1rem;
  width: 100%;
}

.ux4g-skeleton-circle {
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
}

.ux4g-skeleton-rectangle {
  border-radius: 0.25rem;
  width: 100%;
  height: 6rem;
}

.ux4g-skeleton-custom {
  border-radius: 0.25rem;
}

.ux4g-skeleton-pulse {
  animation: ux4g-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.ux4g-skeleton-wave {
  position: relative;
  overflow: hidden;
}

.ux4g-skeleton-wave::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 100%);
  animation: ux4g-shimmer 1.5s ease-in-out infinite;
}

@keyframes ux4g-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes ux4g-shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ux4g-skeleton-pulse {
    animation: none;
  }
  
  .ux4g-skeleton-wave::after {
    animation: none;
  }
}`},comparisons:[{system:"Material UI (Google)",component:"Skeleton",variants:"text, circular, rectangular, rounded",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-skeleton/"},{system:"Ant Design (Alibaba)",component:"Skeleton",variants:"default, avatar, input, image, button",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/skeleton"},{system:"Chakra UI",component:"Skeleton",variants:"default with custom shapes",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/docs/components/skeleton"},{system:"GOV.UK Design System",component:"Loading spinner (no skeleton)",variants:"spinner only",accessibility:"WCAG 2.1 AAA",documentation:"Limited",link:"https://design-system.service.gov.uk/"},{system:"React Loading Skeleton",component:"Skeleton",variants:"customizable via props",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://github.com/dvtng/react-loading-skeleton"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['role="status" attribute announces loading state to screen readers (WCAG 4.1.3)','aria-busy="true" indicates content is loading (WCAG 4.1.3)',"aria-label provides context about what is loading (WCAG 4.1.2)",'aria-hidden="true" on individual skeleton elements prevents redundant announcements',"Respects prefers-reduced-motion media query to disable animations (WCAG 2.3.3)","Sufficient color contrast between skeleton and background (WCAG 1.4.3)","Non-interactive element does not receive keyboard focus","Loading state is programmatically determinable by assistive technologies"],keyboardSupport:[{key:"N/A",action:"Skeleton is non-interactive and does not receive focus"}],screenReader:['Announces "Loading content" or custom ariaLabel when skeleton appears','aria-busy="true" indicates content is being fetched','role="status" creates a live region with implicit aria-live="polite"','Individual skeleton shapes are hidden with aria-hidden="true" to prevent redundant announcements',"When content loads, skeleton is replaced and screen reader announces new content"]},tokens:{file:"/tokens/components/skeleton.json",mappings:[{property:"Background Color",token:"skeleton.background.default",value:"#e5e7eb (Gray 200)"},{property:"Dark Mode Background",token:"skeleton.background.dark",value:"#374151 (Gray 700)"},{property:"Text Height",token:"skeleton.text.height",value:"16px"},{property:"Text Border Radius",token:"skeleton.text.borderRadius",value:"4px"},{property:"Circle Size Default",token:"skeleton.circle.size.default",value:"40px"},{property:"Rectangle Height Default",token:"skeleton.rectangle.height.default",value:"96px"},{property:"Animation Duration Pulse",token:"skeleton.animation.pulse.duration",value:"2s"},{property:"Animation Duration Wave",token:"skeleton.animation.wave.duration",value:"1.5s"}]},useCases:[{title:"Application List Loading",description:"Display skeleton placeholders while loading a list of citizen applications, showing the expected structure with avatars and text lines.",example:"Loading list of license applications with applicant names, status badges, and submission dates in a table or card layout."},{title:"Dashboard Metrics Loading",description:"Show skeleton cards for dashboard metrics while fetching analytics data, maintaining visual hierarchy and layout stability.",example:"Loading dashboard showing total applications, pending reviews, and approval rates with skeleton placeholders for numbers and labels."},{title:"Document Preview Loading",description:"Display skeleton for document preview area while PDF or image is being fetched from the server.",example:"Loading document viewer with skeleton rectangle representing the document area and skeleton text for document metadata."},{title:"Table Data Loading",description:"Show skeleton rows in data tables during initial load or when filtering/sorting, preventing layout shift and providing clear feedback.",example:"Loading table of permit applications with skeleton placeholders for each column maintaining table structure."},{title:"User Profile Loading",description:"Display skeleton for user profile page while fetching personal information, showing expected layout with avatar and text fields.",example:"Loading citizen profile with skeleton circle for avatar, skeleton text for name and contact details, and skeleton rectangles for additional information sections."},{title:"Form Loading",description:"Show skeleton placeholders for form fields while loading dynamic form configuration or pre-filled data from the server.",example:"Loading application form with skeleton rectangles for input fields, labels, and action buttons maintaining form structure."}]})]})}export{A as default};
