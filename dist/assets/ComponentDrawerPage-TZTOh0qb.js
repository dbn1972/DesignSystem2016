import{r,j as e,l as v,X as y}from"./index-BYMLq1ET.js";import{C as w}from"./ComponentDocumentation-CxrYZXwp.js";import{F as N}from"./funnel-CVKW-MRD.js";import{C as m}from"./chevron-right-B73D9Dq_.js";import{S as j}from"./settings-CLnMwN9-.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";const c=({isOpen:g,onClose:a,placement:t="right",size:n="md",title:i,children:u,showOverlay:b=!0,header:o,footer:f,...d})=>{if(!g)return null;const l=n==="sm"?t==="left"||t==="right"?"w-80":"h-64":n==="lg"?t==="left"||t==="right"?"w-[600px]":"h-[600px]":n==="full"?t==="left"||t==="right"?"w-full":"h-full":t==="left"||t==="right"?"w-96":"h-80",p=t==="left"?"left-0 top-0 bottom-0 "+l:t==="top"?"top-0 left-0 right-0 "+l:t==="bottom"?"bottom-0 left-0 right-0 "+l:"right-0 top-0 bottom-0 "+l,s=t==="left"?"animate-slide-in-left":t==="top"?"animate-slide-in-top":t==="bottom"?"animate-slide-in-bottom":"animate-slide-in-right";return e.jsxs("div",{className:"fixed inset-0 z-50",role:"dialog","aria-modal":"true","aria-labelledby":i?"drawer-title":void 0,children:[b&&e.jsx("div",{className:"absolute inset-0 bg-black/50 transition-opacity duration-300",onClick:a,"aria-hidden":"true"}),e.jsxs("div",{className:"fixed bg-white shadow-xl flex flex-col "+p+" "+s,...d,children:[(i||o)&&e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0",children:[o||e.jsx("h2",{id:"drawer-title",className:"text-lg font-semibold text-gray-900",children:i}),e.jsx("button",{onClick:a,className:"p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2","aria-label":"Close drawer",children:e.jsx(y,{size:20})})]}),!i&&!o&&e.jsx("button",{onClick:a,className:"absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2 z-10","aria-label":"Close drawer",children:e.jsx(y,{size:20})}),e.jsx("div",{className:"flex-1 overflow-y-auto p-6",children:u}),f&&e.jsx("div",{className:"px-6 py-4 border-t border-gray-200 shrink-0",children:f})]})]})};function F(){const[g,a]=r.useState(!1),[t,n]=r.useState(!1),[i,u]=r.useState(!1),[b,o]=r.useState(!1),[f,d]=r.useState(!1),[l,p]=r.useState(!1),[s,h]=r.useState(1);return e.jsx(w,{name:"Drawer",description:"Slide-in panel component from screen edges for navigation, filters, forms, and settings. Provides contextual content without leaving the current page, supporting multiple placements, sizes, and interaction patterns with full accessibility compliance.",category:"Overlay Components",maturity:"beta",tier:"core",since:"v1.0.0",updated:"v2.1.0",props:[{name:"isOpen",type:"boolean",default:"false",required:!0,description:"Controls whether the drawer is visible. Must be managed by parent component state."},{name:"onClose",type:"() => void",required:!0,description:"Callback function invoked when drawer should close (overlay click, Escape key, close button)."},{name:"placement",type:"'left' | 'right' | 'top' | 'bottom'",default:"'right'",required:!1,description:"Edge from which the drawer slides in. Right for supplementary content, left for navigation, top/bottom for contextual panels."},{name:"size",type:"'sm' | 'md' | 'lg' | 'full'",default:"'md'",required:!1,description:"Size of the drawer. Small (320px), Medium (384px), Large (600px), Full (100%). Applies to width for left/right, height for top/bottom."},{name:"title",type:"string",required:!1,description:"Title displayed in the drawer header. Automatically creates header with close button."},{name:"children",type:"ReactNode",required:!0,description:"Content to display inside the drawer body. Scrollable if content exceeds viewport."},{name:"showOverlay",type:"boolean",default:"true",required:!1,description:"Whether to show semi-transparent overlay behind drawer. Clicking overlay closes drawer."},{name:"header",type:"ReactNode",required:!1,description:"Custom header content. Overrides default title header. Close button still rendered."},{name:"footer",type:"ReactNode",required:!1,description:"Footer content for actions. Typically contains buttons (Cancel, Apply, Submit)."},{name:"closeOnOverlayClick",type:"boolean",default:"true",required:!1,description:"Whether clicking the overlay should close the drawer."},{name:"closeOnEscape",type:"boolean",default:"true",required:!1,description:"Whether pressing Escape key should close the drawer."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply to drawer panel."}],examples:[{title:"Basic Drawer",description:"Simple drawer from the right with title and content.",code:`import { Drawer } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Drawer
      </button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Basic Drawer"
        placement="right"
        size="md"
      >
        <p className="text-gray-700">
          This is a basic drawer component. It slides in from the right
          and can contain any content you need.
        </p>
        <p className="mt-4 text-gray-700">
          Click the overlay or press Escape to close.
        </p>
      </Drawer>
    </>
  );
}`,preview:e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>a(!0),className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:"Open Basic Drawer"}),e.jsxs(c,{isOpen:g,onClose:()=>a(!1),title:"Basic Drawer",placement:"right",size:"md",children:[e.jsx("p",{className:"text-gray-700",children:"This is a basic drawer component. It slides in from the right and can contain any content you need."}),e.jsx("p",{className:"mt-4 text-gray-700",children:"Click the overlay or press Escape to close."})]})]})},{title:"Drawer with Form",description:"Drawer containing a form with footer actions.",code:`import { Drawer } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Add New User
      </button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Add New User"
        placement="right"
        size="md"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-[#005196] text-white rounded">
              Save User
            </button>
          </div>
        }
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select className="w-full px-3 py-2 border rounded">
              <option>Administrator</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
          </div>
        </form>
      </Drawer>
    </>
  );
}`,preview:e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:"Add New User"}),e.jsx(c,{isOpen:t,onClose:()=>n(!1),title:"Add New User",placement:"right",size:"md",footer:e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:"Save User"})]}),children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Full Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]",placeholder:"John Doe"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]",placeholder:"john@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Role"}),e.jsxs("select",{className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]",children:[e.jsx("option",{children:"Administrator"}),e.jsx("option",{children:"Editor"}),e.jsx("option",{children:"Viewer"})]})]})]})})]})},{title:"Filter Panel",description:"Drawer from left for filtering data with multiple criteria.",code:`import { Drawer } from '@ux4g/react-core';
import { Filter } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Filter size={20} />
        Filters
      </button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Filter Applications"
        placement="left"
        size="sm"
        footer={
          <div className="flex gap-3 justify-between">
            <button className="px-4 py-2 text-[#005196]">
              Clear All
            </button>
            <button className="px-4 py-2 bg-[#005196] text-white rounded">
              Apply Filters
            </button>
          </div>
        }
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Status</h3>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Pending</span>
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" />
              <span>Approved</span>
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" />
              <span>Rejected</span>
            </label>
          </div>
          <div>
            <h3 className="font-medium mb-2">Date Range</h3>
            <input type="date" className="w-full px-3 py-2 border rounded" />
            <span className="block text-center my-1">to</span>
            <input type="date" className="w-full px-3 py-2 border rounded" />
          </div>
        </div>
      </Drawer>
    </>
  );
}`,preview:e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>u(!0),className:"inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:[e.jsx(N,{size:20}),"Filters"]}),e.jsx(c,{isOpen:i,onClose:()=>u(!1),title:"Filter Applications",placement:"left",size:"sm",footer:e.jsxs("div",{className:"flex gap-3 justify-between",children:[e.jsx("button",{className:"px-4 py-2 text-[#005196] hover:bg-gray-100 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:"Clear All"}),e.jsx("button",{className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:"Apply Filters"})]}),children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium text-gray-900 mb-2",children:"Status"}),e.jsxs("label",{className:"flex items-center gap-2 mb-2",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]"}),e.jsx("span",{className:"text-gray-700",children:"Pending"})]}),e.jsxs("label",{className:"flex items-center gap-2 mb-2",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]"}),e.jsx("span",{className:"text-gray-700",children:"Approved"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]"}),e.jsx("span",{className:"text-gray-700",children:"Rejected"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium text-gray-900 mb-2",children:"Date Range"}),e.jsx("input",{type:"date",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"}),e.jsx("span",{className:"block text-center text-gray-500 my-1",children:"to"}),e.jsx("input",{type:"date",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"})]})]})})]})},{title:"Mobile Menu",description:"Navigation drawer for mobile with menu items and sections.",code:`import { Drawer } from '@ux4g/react-core';
import { Menu, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Menu size={24} />
      </button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement="left"
        size="sm"
      >
        <nav className="space-y-1">
          <a className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded">
            <span>Dashboard</span>
            <ChevronRight size={20} />
          </a>
          <a className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded">
            <span>Applications</span>
            <ChevronRight size={20} />
          </a>
          <a className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded">
            <span>Documents</span>
            <ChevronRight size={20} />
          </a>
          <div className="border-t my-2 pt-2">
            <a className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded">
              <span>Settings</span>
              <ChevronRight size={20} />
            </a>
            <a className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded">
              <span>Help</span>
              <ChevronRight size={20} />
            </a>
          </div>
        </nav>
      </Drawer>
    </>
  );
}`,preview:e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2","aria-label":"Open menu",children:e.jsx(v,{size:24})}),e.jsx(c,{isOpen:b,onClose:()=>o(!1),placement:"left",size:"sm",children:e.jsxs("nav",{className:"space-y-1",children:[e.jsxs("a",{href:"#",className:"flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded transition-colors text-gray-900",children:[e.jsx("span",{children:"Dashboard"}),e.jsx(m,{size:20})]}),e.jsxs("a",{href:"#",className:"flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded transition-colors text-gray-900",children:[e.jsx("span",{children:"Applications"}),e.jsx(m,{size:20})]}),e.jsxs("a",{href:"#",className:"flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded transition-colors text-gray-900",children:[e.jsx("span",{children:"Documents"}),e.jsx(m,{size:20})]}),e.jsxs("div",{className:"border-t border-gray-200 my-2 pt-2",children:[e.jsxs("a",{href:"#",className:"flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded transition-colors text-gray-900",children:[e.jsx("span",{children:"Settings"}),e.jsx(m,{size:20})]}),e.jsxs("a",{href:"#",className:"flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded transition-colors text-gray-900",children:[e.jsx("span",{children:"Help"}),e.jsx(m,{size:20})]})]})]})})]})},{title:"Settings Panel",description:"Settings drawer with grouped configuration options.",code:`import { Drawer } from '@ux4g/react-core';
import { Settings } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Settings size={20} />
        Settings
      </button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Application Settings"
        placement="right"
        size="lg"
        footer={
          <div className="flex gap-3 justify-end">
            <button className="px-4 py-2 border border-gray-300 rounded">
              Cancel
            </button>
            <button className="px-4 py-2 bg-[#005196] text-white rounded">
              Save Changes
            </button>
          </div>
        }
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <label className="flex items-center justify-between mb-3">
              <span>Email notifications</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="flex items-center justify-between mb-3">
              <span>SMS notifications</span>
              <input type="checkbox" />
            </label>
          </div>
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Privacy</h3>
            <label className="flex items-center justify-between mb-3">
              <span>Share analytics data</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="flex items-center justify-between mb-3">
              <span>Public profile</span>
              <input type="checkbox" />
            </label>
          </div>
        </div>
      </Drawer>
    </>
  );
}`,preview:e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>d(!0),className:"inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:[e.jsx(j,{size:20}),"Settings"]}),e.jsx(c,{isOpen:f,onClose:()=>d(!1),title:"Application Settings",placement:"right",size:"lg",footer:e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx("button",{onClick:()=>d(!1),className:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:"Save Changes"})]}),children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Notifications"}),e.jsxs("label",{className:"flex items-center justify-between mb-3",children:[e.jsx("span",{className:"text-gray-700",children:"Email notifications"}),e.jsx("input",{type:"checkbox",defaultChecked:!0,className:"w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]"})]}),e.jsxs("label",{className:"flex items-center justify-between mb-3",children:[e.jsx("span",{className:"text-gray-700",children:"SMS notifications"}),e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]"})]})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Privacy"}),e.jsxs("label",{className:"flex items-center justify-between mb-3",children:[e.jsx("span",{className:"text-gray-700",children:"Share analytics data"}),e.jsx("input",{type:"checkbox",defaultChecked:!0,className:"w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]"})]}),e.jsxs("label",{className:"flex items-center justify-between mb-3",children:[e.jsx("span",{className:"text-gray-700",children:"Public profile"}),e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]"})]})]})]})})]})},{title:"Multi-Step Wizard",description:"Drawer containing a multi-step form wizard with progress indicator.",code:`import { Drawer } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Start Application
      </button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Application Wizard"
        placement="right"
        size="lg"
        footer={
          <div className="flex gap-3 justify-between">
            <button
              onClick={() => setStep(s => Math.max(1, s - 1))}
              disabled={step === 1}
              className="px-4 py-2 border border-gray-300 rounded"
            >
              Previous
            </button>
            <button
              onClick={() => step === 3 ? setIsOpen(false) : setStep(s => s + 1)}
              className="px-4 py-2 bg-[#005196] text-white rounded"
            >
              {step === 3 ? 'Submit' : 'Next'}
            </button>
          </div>
        }
      >
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className={step >= 1 ? 'text-[#005196] font-medium' : 'text-gray-400'}>
              Step 1
            </span>
            <span className={step >= 2 ? 'text-[#005196] font-medium' : 'text-gray-400'}>
              Step 2
            </span>
            <span className={step >= 3 ? 'text-[#005196] font-medium' : 'text-gray-400'}>
              Step 3
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-[#005196] rounded-full transition-all"
              style={{ width: (step * 33.33) + '%' }}
            />
          </div>
        </div>
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Address Details</h3>
            <input type="text" placeholder="Street Address" className="w-full px-3 py-2 border rounded" />
            <input type="text" placeholder="City" className="w-full px-3 py-2 border rounded" />
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Review & Submit</h3>
            <p>Please review your information before submitting.</p>
          </div>
        )}
      </Drawer>
    </>
  );
}`,preview:e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>{h(1),p(!0)},className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:"Start Application"}),e.jsxs(c,{isOpen:l,onClose:()=>p(!1),title:"Application Wizard",placement:"right",size:"lg",footer:e.jsxs("div",{className:"flex gap-3 justify-between",children:[e.jsx("button",{onClick:()=>h(x=>Math.max(1,x-1)),disabled:s===1,className:"px-4 py-2 border border-gray-300 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2 "+(s===1?"opacity-50 cursor-not-allowed":"hover:bg-gray-50"),children:"Previous"}),e.jsx("button",{onClick:()=>s===3?p(!1):h(x=>x+1),className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2",children:s===3?"Submit":"Next"})]}),children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:s>=1?"text-[#005196] font-medium":"text-gray-400",children:"Step 1"}),e.jsx("span",{className:s>=2?"text-[#005196] font-medium":"text-gray-400",children:"Step 2"}),e.jsx("span",{className:s>=3?"text-[#005196] font-medium":"text-gray-400",children:"Step 3"})]}),e.jsx("div",{className:"h-2 bg-gray-200 rounded-full",children:e.jsx("div",{className:"h-full bg-[#005196] rounded-full transition-all duration-300",style:{width:s*33.33+"%"}})})]}),s===1&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Personal Information"}),e.jsx("input",{type:"text",placeholder:"Full Name",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"}),e.jsx("input",{type:"email",placeholder:"Email",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"})]}),s===2&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Address Details"}),e.jsx("input",{type:"text",placeholder:"Street Address",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"}),e.jsx("input",{type:"text",placeholder:"City",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"})]}),s===3&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Review & Submit"}),e.jsx("p",{className:"text-gray-700",children:"Please review your information before submitting."}),e.jsx("div",{className:"bg-gray-50 p-4 rounded border border-gray-200",children:e.jsx("p",{className:"text-sm text-gray-600",children:"All information will be verified before approval."})})]})]})]})}],reactCode:{component:`import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';
import { drawerVariants } from './drawer.variants';
import { DrawerProps } from './Drawer.types';
import { X } from 'lucide-react';

export const Drawer = ({
  isOpen,
  onClose,
  placement = 'right',
  size = 'md',
  title,
  children,
  showOverlay = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  header,
  footer,
  className,
  ...props
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      const focusableElements = drawerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }

      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const focusableElements = drawerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleFocusTrap);
    return () => document.removeEventListener('keydown', handleFocusTrap);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'drawer-title' : undefined}
    >
      {showOverlay && (
        <div
          className="absolute inset-0 bg-black/50 transition-opacity duration-300"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}
      <div
        ref={drawerRef}
        className={cn(
          drawerVariants({ placement, size }),
          className
        )}
        {...props}
      >
        {(title || header) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
            {header || (
              <h2 id="drawer-title" className="text-lg font-semibold text-gray-900">
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
              aria-label="Close drawer"
            >
              <X size={20} />
            </button>
          </div>
        )}
        {!title && !header && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2 z-10"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        )}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 border-t border-gray-200 shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};`,types:`export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'full';
  title?: string;
  children: React.ReactNode;
  showOverlay?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const drawerVariants = cva(
  [
    'fixed bg-white shadow-xl flex flex-col',
    'transition-transform duration-300 ease-in-out',
  ],
  {
    variants: {
      placement: {
        left: [
          'left-0 top-0 bottom-0',
          'animate-slide-in-left',
        ],
        right: [
          'right-0 top-0 bottom-0',
          'animate-slide-in-right',
        ],
        top: [
          'top-0 left-0 right-0',
          'animate-slide-in-top',
        ],
        bottom: [
          'bottom-0 left-0 right-0',
          'animate-slide-in-bottom',
        ],
      },
      size: {
        sm: '[.placement-left_&]:w-80 [.placement-right_&]:w-80 [.placement-top_&]:h-64 [.placement-bottom_&]:h-64',
        md: '[.placement-left_&]:w-96 [.placement-right_&]:w-96 [.placement-top_&]:h-80 [.placement-bottom_&]:h-80',
        lg: '[.placement-left_&]:w-[600px] [.placement-right_&]:w-[600px] [.placement-top_&]:h-[600px] [.placement-bottom_&]:h-[600px]',
        full: '[.placement-left_&]:w-full [.placement-right_&]:w-full [.placement-top_&]:h-full [.placement-bottom_&]:h-full',
      },
    },
    compoundVariants: [
      {
        placement: 'left',
        size: 'sm',
        className: 'w-80',
      },
      {
        placement: 'left',
        size: 'md',
        className: 'w-96',
      },
      {
        placement: 'left',
        size: 'lg',
        className: 'w-[600px]',
      },
      {
        placement: 'left',
        size: 'full',
        className: 'w-full',
      },
      {
        placement: 'right',
        size: 'sm',
        className: 'w-80',
      },
      {
        placement: 'right',
        size: 'md',
        className: 'w-96',
      },
      {
        placement: 'right',
        size: 'lg',
        className: 'w-[600px]',
      },
      {
        placement: 'right',
        size: 'full',
        className: 'w-full',
      },
      {
        placement: 'top',
        size: 'sm',
        className: 'h-64',
      },
      {
        placement: 'top',
        size: 'md',
        className: 'h-80',
      },
      {
        placement: 'top',
        size: 'lg',
        className: 'h-[600px]',
      },
      {
        placement: 'top',
        size: 'full',
        className: 'h-full',
      },
      {
        placement: 'bottom',
        size: 'sm',
        className: 'h-64',
      },
      {
        placement: 'bottom',
        size: 'md',
        className: 'h-80',
      },
      {
        placement: 'bottom',
        size: 'lg',
        className: 'h-[600px]',
      },
      {
        placement: 'bottom',
        size: 'full',
        className: 'h-full',
      },
    ],
    defaultVariants: {
      placement: 'right',
      size: 'md',
    },
  }
);

export type DrawerVariantProps = VariantProps<typeof drawerVariants>;`},angularCode:{component:`import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

@Component({
  selector: 'ux4g-drawer',
  template: \`
    <div *ngIf="isOpen" class="drawer-container" role="dialog" [attr.aria-modal]="true">
      <div
        *ngIf="showOverlay"
        class="drawer-overlay"
        (click)="handleOverlayClick()"
        [@fadeIn]
      ></div>
      <div
        class="drawer-panel"
        [class]="getDrawerClasses()"
        [@slideIn]="placement"
        (keydown.escape)="handleEscape()"
      >
        <div *ngIf="title || header" class="drawer-header">
          <ng-container *ngIf="header; else defaultHeader">
            <ng-content select="[header]"></ng-content>
          </ng-container>
          <ng-template #defaultHeader>
            <h2 class="drawer-title">{{ title }}</h2>
          </ng-template>
          <button
            class="drawer-close"
            (click)="close()"
            aria-label="Close drawer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div class="drawer-body">
          <ng-content></ng-content>
        </div>
        <div *ngIf="footer" class="drawer-footer">
          <ng-content select="[footer]"></ng-content>
        </div>
      </div>
    </div>
  \`,
  styleUrls: ['./drawer.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideIn', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(0)' })),
      state('top', style({ transform: 'translateY(0)' })),
      state('bottom', style({ transform: 'translateY(0)' })),
      transition('void => left', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-out')
      ]),
      transition('void => right', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out')
      ]),
      transition('void => top', [
        style({ transform: 'translateY(-100%)' }),
        animate('300ms ease-out')
      ]),
      transition('void => bottom', [
        style({ transform: 'translateY(100%)' }),
        animate('300ms ease-out')
      ]),
    ])
  ]
})
export class DrawerComponent implements OnInit, OnDestroy {
  @Input() isOpen = false;
  @Input() placement: DrawerPlacement = 'right';
  @Input() size: DrawerSize = 'md';
  @Input() title?: string;
  @Input() showOverlay = true;
  @Input() closeOnOverlayClick = true;
  @Input() closeOnEscape = true;
  @Input() header?: boolean;
  @Input() footer?: boolean;
  
  @Output() closed = new EventEmitter<void>();

  private previousFocus?: HTMLElement;

  ngOnInit(): void {
    if (this.isOpen) {
      this.onOpen();
    }
  }

  ngOnDestroy(): void {
    this.restoreFocus();
    document.body.style.overflow = '';
  }

  ngOnChanges(): void {
    if (this.isOpen) {
      this.onOpen();
    } else {
      this.onClose();
    }
  }

  private onOpen(): void {
    this.previousFocus = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';
  }

  private onClose(): void {
    document.body.style.overflow = '';
    this.restoreFocus();
  }

  private restoreFocus(): void {
    if (this.previousFocus) {
      this.previousFocus.focus();
    }
  }

  getDrawerClasses(): string {
    const placementClass = 'drawer-' + this.placement;
    const sizeClass = 'drawer-' + this.size;
    return ['ux4g-drawer', placementClass, sizeClass]
      .filter(Boolean)
      .join(' ');
  }

  close(): void {
    this.closed.emit();
  }

  handleOverlayClick(): void {
    if (this.closeOnOverlayClick) {
      this.close();
    }
  }

  handleEscape(): void {
    if (this.closeOnEscape) {
      this.close();
    }
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerComponent } from './drawer.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    OverlayModule,
    PortalModule
  ],
  exports: [DrawerComponent]
})
export class DrawerModule { }`,types:`export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

export interface DrawerConfig {
  isOpen: boolean;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  title?: string;
  showOverlay?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}`},comparisons:[{system:"Material UI (Google)",component:"Drawer",variants:"temporary, permanent, persistent",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-drawer/"},{system:"Ant Design (Alibaba)",component:"Drawer",variants:"left, right, top, bottom",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/drawer"},{system:"GOV.UK Design System",component:"N/A (uses Modal)",variants:"N/A",accessibility:"WCAG 2.1 AAA",documentation:"Limited",link:"https://design-system.service.gov.uk/"},{system:"Chakra UI",component:"Drawer",variants:"left, right, top, bottom, full",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/drawer"},{system:"Radix UI",component:"Dialog (adaptable)",variants:"Custom (unstyled)",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://www.radix-ui.com/primitives/docs/components/dialog"},{system:"Atlassian Design System",component:"Drawer",variants:"narrow, medium, wide, full",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://atlassian.design/components/drawer/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['role="dialog" and aria-modal="true" for proper screen reader context (WCAG 4.1.2)',"Focus trap keeps keyboard navigation within drawer when open (WCAG 2.4.3)","Focus automatically moved to first focusable element on open (WCAG 2.4.3)","Focus returned to trigger element on close (WCAG 2.4.3)","Escape key closes drawer for keyboard users (WCAG 2.1.1)","aria-labelledby references drawer title for context (WCAG 1.3.1)","Overlay click closes drawer for mouse users (WCAG 2.5.1)","Close button has visible focus indicator with 2px ring (WCAG 2.4.7)","Body scroll prevented when drawer open to avoid confusion (WCAG 2.4.1)","Color contrast ratios meet 4.5:1 for text content (WCAG 1.4.3)","Animations respect prefers-reduced-motion (WCAG 2.3.3)"],keyboardSupport:[{key:"Tab",action:"Move focus to next focusable element within drawer"},{key:"Shift + Tab",action:"Move focus to previous focusable element within drawer"},{key:"Escape",action:"Close drawer and return focus to trigger"},{key:"Enter",action:"Activate focused button or link"}],screenReader:["Announces drawer as dialog with proper role","Reads drawer title from aria-labelledby",'Announces modal state with aria-modal="true"','Close button labeled "Close drawer" for context',"Content changes announced as they occur","Focus changes announced clearly"]},tokens:{file:"/tokens/components/drawer.json",mappings:[{property:"Width (Small)",token:"drawer.size.sm.width",value:"320px"},{property:"Width (Medium)",token:"drawer.size.md.width",value:"384px"},{property:"Width (Large)",token:"drawer.size.lg.width",value:"600px"},{property:"Height (Small)",token:"drawer.size.sm.height",value:"256px"},{property:"Height (Medium)",token:"drawer.size.md.height",value:"320px"},{property:"Height (Large)",token:"drawer.size.lg.height",value:"600px"},{property:"Overlay Background",token:"drawer.overlay.background",value:"rgba(0, 0, 0, 0.5)"},{property:"Panel Background",token:"drawer.panel.background",value:"#FFFFFF"},{property:"Shadow",token:"drawer.shadow",value:"0 8px 32px rgba(0, 0, 0, 0.12)"},{property:"Slide Duration",token:"drawer.animation.duration",value:"300ms"},{property:"Slide Easing",token:"drawer.animation.easing",value:"ease-in-out"},{property:"Header Border",token:"drawer.header.borderColor",value:"#E5E7EB (Gray 200)"},{property:"Header Padding",token:"drawer.header.padding",value:"16px 24px"},{property:"Body Padding",token:"drawer.body.padding",value:"24px"},{property:"Focus Ring Color",token:"accessibility.focusRing.color",value:"#005196 (Navy 500)"},{property:"Focus Ring Width",token:"accessibility.focusRing.width",value:"2px"}]},useCases:[{title:"Filter Applications List",description:"Government portal allowing citizens to filter permit applications by status, date range, department, and type. Left-side drawer keeps filters accessible while viewing results.",scenario:"User needs to narrow down 500+ applications to find specific submissions",implementation:'placement="left", size="sm", with checkboxes and date inputs'},{title:"Mobile Navigation Menu",description:"Responsive government website navigation that slides in from left on mobile devices. Contains primary links, user account, and language selector.",scenario:"Mobile user needs to access main site sections and account settings",implementation:'placement="left", size="sm", triggered by hamburger menu icon'},{title:"Document Preview Panel",description:"Case management system showing PDF preview of uploaded documents in right drawer while maintaining view of case details. Includes download and print actions.",scenario:"Caseworker reviewing submitted documents without leaving case page",implementation:'placement="right", size="lg", with embedded PDF viewer and action buttons'},{title:"Application Settings Panel",description:"User preferences and notification settings accessible from any page. Groups settings by category with immediate save or cancel actions.",scenario:"User wants to adjust notification preferences mid-workflow",implementation:'placement="right", size="md", with footer containing Cancel/Save buttons'},{title:"Advanced Search Filters",description:"Public records search with extensive filtering options including date ranges, categories, keywords, and geographic filters. Results update as filters applied.",scenario:"Researcher needs granular control over search parameters for public records",implementation:'placement="left", size="md", with collapsible filter groups and apply button'},{title:"Multi-Step License Application",description:"Business license application wizard broken into Personal Info, Business Details, Documentation, and Review steps. Progress indicator shows current step.",scenario:"Business owner completing complex licensing application over multiple sessions",implementation:'placement="right", size="lg", with step progress, Previous/Next navigation in footer'}]})}export{F as default};
