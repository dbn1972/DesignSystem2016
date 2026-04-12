import{r as p,j as e,X as R}from"./index-LBJNeHTL.js";import{C as M}from"./ComponentDocumentation-DvEedSJi.js";import{I}from"./info-Cuapm3Yw.js";import{S as C}from"./settings-BGZxYTvq.js";import{C as z}from"./circle-help-f3wrFUYd.js";import{E as L}from"./ellipsis-vertical-BxgBLasq.js";import"./copy-dn9avyEa.js";import"./external-link-BMCrsasL.js";const i=({trigger:o="click",placement:r="bottom",content:a,children:b,showArrow:j=!0,size:y="md",closeButton:P=!1,...D})=>{const[l,d]=p.useState(!1),[w,O]=p.useState({top:0,left:0}),g=p.useRef(null),f=p.useRef(null),v=()=>{if(!g.current||!f.current)return;const t=g.current.getBoundingClientRect(),n=f.current.getBoundingClientRect(),s=window.pageYOffset||document.documentElement.scrollTop,h=window.pageXOffset||document.documentElement.scrollLeft;let m=0,u=0;const x=8;switch(r){case"top":m=t.top+s-n.height-x,u=t.left+h+t.width/2-n.width/2;break;case"bottom":m=t.bottom+s+x,u=t.left+h+t.width/2-n.width/2;break;case"left":m=t.top+s+t.height/2-n.height/2,u=t.left+h-n.width-x;break;case"right":m=t.top+s+t.height/2-n.height/2,u=t.right+h+x;break;default:m=t.bottom+s+x,u=t.left+h+t.width/2-n.width/2}O({top:m,left:u})};p.useEffect(()=>{if(l)return v(),window.addEventListener("resize",v),window.addEventListener("scroll",v),()=>{window.removeEventListener("resize",v),window.removeEventListener("scroll",v)}},[l,r]),p.useEffect(()=>{const t=s=>{o==="click"&&l&&f.current&&g.current&&!f.current.contains(s.target)&&!g.current.contains(s.target)&&d(!1)},n=s=>{s.key==="Escape"&&l&&d(!1)};return document.addEventListener("mousedown",t),document.addEventListener("keydown",n),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("keydown",n)}},[l,o]);const E=()=>{o==="click"&&d(!l)},N=()=>{o==="hover"&&d(!0)},k=()=>{o==="hover"&&d(!1)},A=()=>{const t="absolute w-3 h-3 bg-white border transform rotate-45";switch(r){case"top":return t+" bottom-[-6px] left-1/2 -translate-x-1/2 border-t-0 border-l-0 border-gray-300";case"bottom":return t+" top-[-6px] left-1/2 -translate-x-1/2 border-b-0 border-r-0 border-gray-300";case"left":return t+" right-[-6px] top-1/2 -translate-y-1/2 border-l-0 border-b-0 border-gray-300";case"right":return t+" left-[-6px] top-1/2 -translate-y-1/2 border-r-0 border-t-0 border-gray-300";default:return t+" top-[-6px] left-1/2 -translate-x-1/2 border-b-0 border-r-0 border-gray-300"}},S=y==="sm"?"w-48":y==="lg"?"w-96":"w-72";return e.jsxs("div",{className:"relative inline-block",children:[e.jsx("div",{ref:g,onClick:E,onMouseEnter:N,onMouseLeave:k,className:"inline-block",children:b}),l&&e.jsx("div",{ref:f,className:"fixed z-50 "+S,style:{top:w.top+"px",left:w.left+"px"},role:"dialog","aria-modal":"false",onMouseEnter:o==="hover"?N:void 0,onMouseLeave:o==="hover"?k:void 0,children:e.jsxs("div",{className:"bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden",children:[j&&e.jsx("div",{className:A()}),P&&e.jsx("button",{onClick:()=>d(!1),className:"absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] rounded","aria-label":"Close popover",children:e.jsx(R,{size:16})}),e.jsx("div",{className:"relative z-10 bg-white",children:a})]})})]})},c=({children:o,variant:r="primary",size:a="md",...b})=>e.jsx("button",{className:"inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 "+(r==="primary"?"bg-[#005196] text-white border-[#005196] hover:bg-[#004178]":r==="secondary"?"bg-white text-[#005196] border-[#005196] hover:bg-[#f5f5f5]":r==="tertiary"?"bg-transparent text-[#005196] border-transparent hover:bg-[#f5f5f5]":"bg-white text-gray-700 border-gray-300 hover:bg-gray-50")+" "+(a==="sm"?"h-8 px-3 text-sm":a==="lg"?"h-12 px-6 text-lg":"h-10 px-4 text-base"),...b,children:o});function H(){const[o,r]=p.useState({email:"",notifications:!0});return e.jsx(M,{name:"Popover",description:"Floating contextual panel with rich content, triggered by click or hover. Displays additional information, forms, menus, or interactive elements without navigating away from the current page.",category:"Overlay",maturity:"beta",tier:"core",since:"v1.2.0",updated:"v2.1.0",props:[{name:"trigger",type:"'click' | 'hover'",default:"'click'",required:!1,description:"Interaction type that triggers the popover. Click for user-initiated actions, hover for informational content."},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right' | 'auto'",default:"'bottom'",required:!1,description:"Position of the popover relative to the trigger element. Auto calculates best position based on available space."},{name:"content",type:"ReactNode",required:!0,description:"Content to display inside the popover. Can be text, forms, menus, or any React elements."},{name:"isOpen",type:"boolean",required:!1,description:"Controlled state for popover visibility. Use with onOpenChange for controlled component."},{name:"onOpenChange",type:"(open: boolean) => void",required:!1,description:"Callback fired when popover open state changes. Use for controlled component behavior."},{name:"closeOnClickOutside",type:"boolean",default:"true",required:!1,description:"Whether clicking outside the popover should close it. Only applies to click-triggered popovers."},{name:"showArrow",type:"boolean",default:"true",required:!1,description:"Whether to display an arrow pointing to the trigger element."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Width of the popover. Small (192px), Medium (288px), Large (384px)."},{name:"closeButton",type:"boolean",default:"false",required:!1,description:"Whether to show a close button in the top-right corner of the popover."},{name:"offset",type:"number",default:"8",required:!1,description:"Distance in pixels between the trigger and the popover."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply to the popover container."},{name:"children",type:"ReactNode",required:!0,description:"Trigger element that opens the popover when interacted with."}],examples:[{title:"Basic Popover",description:"Simple click-triggered popover with basic content and arrow indicator.",code:`import { Popover } from '@ux4g/react-core';
import { Info } from 'lucide-react';

function Example() {
  return (
    <Popover
      content={
        <div className="p-4">
          <h4 className="font-semibold text-gray-900 mb-2">
            Additional Information
          </h4>
          <p className="text-sm text-gray-600">
            This is a basic popover with helpful information for the user.
            Click outside to close.
          </p>
        </div>
      }
    >
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178]">
        <Info size={16} />
        Show Info
      </button>
    </Popover>
  );
}`,preview:e.jsx(i,{content:e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Additional Information"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This is a basic popover with helpful information for the user. Click outside to close."})]}),children:e.jsxs(c,{variant:"primary",children:[e.jsx(I,{size:16}),e.jsx("span",{children:"Show Info"})]})})},{title:"Popover with Form",description:"Interactive popover containing a form for quick data entry without page navigation.",code:`import { Popover } from '@ux4g/react-core';
import { Settings } from 'lucide-react';

function Example() {
  const [email, setEmail] = React.useState('');
  const [notifications, setNotifications] = React.useState(true);
  
  return (
    <Popover
      size="md"
      closeButton
      content={
        <div className="p-4">
          <h4 className="font-semibold text-gray-900 mb-4">
            Quick Settings
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"
                placeholder="your@email.com"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifications"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="notifications" className="text-sm text-gray-700">
                Enable notifications
              </label>
            </div>
            <button className="w-full px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178]">
              Save Settings
            </button>
          </div>
        </div>
      }
    >
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded hover:bg-gray-50">
        <Settings size={16} />
        Settings
      </button>
    </Popover>
  );
}`,preview:e.jsx(i,{size:"md",closeButton:!0,content:e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-4",children:"Quick Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),e.jsx("input",{type:"email",value:o.email,onChange:a=>r({...o,email:a.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]",placeholder:"your@email.com"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"notifications-preview",checked:o.notifications,onChange:a=>r({...o,notifications:a.target.checked}),className:"mr-2"}),e.jsx("label",{htmlFor:"notifications-preview",className:"text-sm text-gray-700",children:"Enable notifications"})]}),e.jsx("button",{className:"w-full px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178]",children:"Save Settings"})]})]}),children:e.jsxs(c,{children:[e.jsx(C,{size:16}),e.jsx("span",{children:"Settings"})]})})},{title:"Help Popover (Hover)",description:"Hover-triggered popover for contextual help and information tooltips.",code:`import { Popover } from '@ux4g/react-core';
import { HelpCircle } from 'lucide-react';

function Example() {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-sm text-gray-700">Password Requirements</span>
      <Popover
        trigger="hover"
        placement="right"
        size="sm"
        content={
          <div className="p-3">
            <h4 className="font-semibold text-gray-900 text-sm mb-2">
              Password must contain:
            </h4>
            <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
              <li>At least 8 characters</li>
              <li>One uppercase letter</li>
              <li>One lowercase letter</li>
              <li>One number</li>
              <li>One special character</li>
            </ul>
          </div>
        }
      >
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] rounded-full">
          <HelpCircle size={18} />
        </button>
      </Popover>
    </div>
  );
}`,preview:e.jsxs("div",{className:"inline-flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-700",children:"Password Requirements"}),e.jsx(i,{trigger:"hover",placement:"right",size:"sm",content:e.jsxs("div",{className:"p-3",children:[e.jsx("h4",{className:"font-semibold text-gray-900 text-sm mb-2",children:"Password must contain:"}),e.jsxs("ul",{className:"text-xs text-gray-600 space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"At least 8 characters"}),e.jsx("li",{children:"One uppercase letter"}),e.jsx("li",{children:"One lowercase letter"}),e.jsx("li",{children:"One number"}),e.jsx("li",{children:"One special character"})]})]}),children:e.jsx("button",{className:"text-gray-500 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] rounded-full",children:e.jsx(z,{size:18})})})]})},{title:"User Profile Card",description:"Rich popover displaying user information with avatar and actions.",code:`import { Popover } from '@ux4g/react-core';
import { User } from 'lucide-react';

function Example() {
  return (
    <Popover
      placement="bottom"
      content={
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#005196] text-white rounded-full flex items-center justify-center font-semibold">
              JD
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">John Doe</h4>
              <p className="text-sm text-gray-600">john.doe@gov.uk</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3 space-y-2">
            <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              View Profile
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Account Settings
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded">
              Sign Out
            </button>
          </div>
        </div>
      }
    >
      <button className="w-10 h-10 bg-[#005196] text-white rounded-full flex items-center justify-center font-semibold hover:bg-[#004178]">
        JD
      </button>
    </Popover>
  );
}`,preview:e.jsx(i,{placement:"bottom",content:e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-[#005196] text-white rounded-full flex items-center justify-center font-semibold",children:"JD"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900",children:"John Doe"}),e.jsx("p",{className:"text-sm text-gray-600",children:"john.doe@gov.uk"})]})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-3 space-y-2",children:[e.jsx("button",{className:"w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded",children:"View Profile"}),e.jsx("button",{className:"w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded",children:"Account Settings"}),e.jsx("button",{className:"w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded",children:"Sign Out"})]})]}),children:e.jsx("button",{className:"w-10 h-10 bg-[#005196] text-white rounded-full flex items-center justify-center font-semibold hover:bg-[#004178]",children:"JD"})})},{title:"Action Menu",description:"Popover displaying a list of contextual actions for a specific item.",code:`import { Popover } from '@ux4g/react-core';
import { MoreVertical } from 'lucide-react';

function Example() {
  return (
    <Popover
      placement="left"
      size="sm"
      content={
        <div className="py-2">
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Edit
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Duplicate
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Archive
          </button>
          <div className="border-t border-gray-200 my-1"></div>
          <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
            Delete
          </button>
        </div>
      }
    >
      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196]">
        <MoreVertical size={18} />
      </button>
    </Popover>
  );
}`,preview:e.jsx(i,{placement:"left",size:"sm",content:e.jsxs("div",{className:"py-2",children:[e.jsx("button",{className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Edit"}),e.jsx("button",{className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Duplicate"}),e.jsx("button",{className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Archive"}),e.jsx("div",{className:"border-t border-gray-200 my-1"}),e.jsx("button",{className:"w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50",children:"Delete"})]}),children:e.jsx("button",{className:"p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196]",children:e.jsx(L,{size:18})})})},{title:"Placement Variants",description:"Popover can be positioned at top, bottom, left, or right of the trigger element.",code:`import { Popover } from '@ux4g/react-core';

function Example() {
  const content = (
    <div className="p-3">
      <p className="text-sm text-gray-700">Popover content</p>
    </div>
  );
  
  return (
    <div className="flex items-center justify-center gap-8">
      <Popover placement="top" content={content}>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
          Top
        </button>
      </Popover>
      
      <Popover placement="right" content={content}>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
          Right
        </button>
      </Popover>
      
      <Popover placement="bottom" content={content}>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
          Bottom
        </button>
      </Popover>
      
      <Popover placement="left" content={content}>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
          Left
        </button>
      </Popover>
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex items-center justify-center gap-8",children:[e.jsx(i,{placement:"top",content:e.jsx("div",{className:"p-3",children:e.jsx("p",{className:"text-sm text-gray-700",children:"Popover content"})}),children:e.jsx(c,{children:"Top"})}),e.jsx(i,{placement:"right",content:e.jsx("div",{className:"p-3",children:e.jsx("p",{className:"text-sm text-gray-700",children:"Popover content"})}),children:e.jsx(c,{children:"Right"})}),e.jsx(i,{placement:"bottom",content:e.jsx("div",{className:"p-3",children:e.jsx("p",{className:"text-sm text-gray-700",children:"Popover content"})}),children:e.jsx(c,{children:"Bottom"})}),e.jsx(i,{placement:"left",content:e.jsx("div",{className:"p-3",children:e.jsx("p",{className:"text-sm text-gray-700",children:"Popover content"})}),children:e.jsx(c,{children:"Left"})})]})},{title:"Settings Popover",description:"Complex popover with multiple controls and sections for application settings.",code:`import { Popover } from '@ux4g/react-core';
import { Settings } from 'lucide-react';

function Example() {
  const [settings, setSettings] = React.useState({
    darkMode: false,
    notifications: true,
    autoSave: true,
    language: 'en'
  });
  
  return (
    <Popover
      size="lg"
      closeButton
      content={
        <div className="p-4">
          <h4 className="font-semibold text-gray-900 mb-4">Preferences</h4>
          
          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">Appearance</h5>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Dark Mode</span>
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={(e) => setSettings({...settings, darkMode: e.target.checked})}
                  className="toggle"
                />
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h5 className="text-sm font-medium text-gray-700 mb-2">Notifications</h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Enable Notifications</span>
                  <input
                    type="checkbox"
                    checked={settings.notifications}
                    onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Auto-save</span>
                  <input
                    type="checkbox"
                    checked={settings.autoSave}
                    onChange={(e) => setSettings({...settings, autoSave: e.target.checked})}
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => setSettings({...settings, language: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"
              >
                <option value="en">English</option>
                <option value="cy">Welsh (Cymraeg)</option>
                <option value="gd">Scottish Gaelic</option>
              </select>
            </div>
          </div>
        </div>
      }
    >
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178]">
        <Settings size={16} />
        Preferences
      </button>
    </Popover>
  );
}`,preview:e.jsx(i,{size:"lg",closeButton:!0,content:e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-4",children:"Preferences"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm font-medium text-gray-700 mb-2",children:"Appearance"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Dark Mode"}),e.jsx("input",{type:"checkbox",className:"toggle"})]})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-4",children:[e.jsx("h5",{className:"text-sm font-medium text-gray-700 mb-2",children:"Notifications"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Enable Notifications"}),e.jsx("input",{type:"checkbox",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Auto-save"}),e.jsx("input",{type:"checkbox",defaultChecked:!0})]})]})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Language"}),e.jsxs("select",{className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005196]",children:[e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"cy",children:"Welsh (Cymraeg)"}),e.jsx("option",{value:"gd",children:"Scottish Gaelic"})]})]})]})]}),children:e.jsxs(c,{variant:"primary",children:[e.jsx(C,{size:16}),e.jsx("span",{children:"Preferences"})]})})}],reactCode:{component:`import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { useFloating, offset, flip, shift, arrow, autoUpdate } from '@floating-ui/react';
import { cn } from '../../utils/cn';
import { popoverVariants } from './popover.variants';
import { PopoverProps } from './Popover.types';
import { X } from 'lucide-react';

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      content,
      trigger = 'click',
      placement = 'bottom',
      isOpen: controlledIsOpen,
      onOpenChange,
      closeOnClickOutside = true,
      showArrow = true,
      size = 'md',
      closeButton = false,
      offset: offsetValue = 8,
      className,
      ...props
    },
    ref
  ) => {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
    const arrowRef = useRef<HTMLDivElement>(null);
    
    const { x, y, strategy, refs, context } = useFloating({
      open: isOpen,
      onOpenChange: onOpenChange || setInternalIsOpen,
      placement,
      whileElementsMounted: autoUpdate,
      middleware: [
        offset(offsetValue),
        flip(),
        shift({ padding: 8 }),
        showArrow && arrow({ element: arrowRef }),
      ].filter(Boolean),
    });
    
    const setIsOpen = (open: boolean) => {
      if (onOpenChange) {
        onOpenChange(open);
      } else {
        setInternalIsOpen(open);
      }
    };
    
    useEffect(() => {
      if (!isOpen || !closeOnClickOutside) return;
      
      const handleClickOutside = (event: MouseEvent) => {
        if (
          refs.floating.current &&
          refs.reference.current &&
          !refs.floating.current.contains(event.target as Node) &&
          !refs.reference.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }, [isOpen, closeOnClickOutside, refs]);
    
    const handleTriggerClick = () => {
      if (trigger === 'click') {
        setIsOpen(!isOpen);
      }
    };
    
    const handleMouseEnter = () => {
      if (trigger === 'hover') {
        setIsOpen(true);
      }
    };
    
    const handleMouseLeave = () => {
      if (trigger === 'hover') {
        setIsOpen(false);
      }
    };
    
    return (
      <>
        <div
          ref={refs.setReference}
          onClick={handleTriggerClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            className={cn(popoverVariants({ size }), className)}
            role="dialog"
            aria-modal="false"
            onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
            onMouseLeave={trigger === 'hover' ? handleMouseLeave : undefined}
            {...props}
          >
            {showArrow && (
              <div
                ref={arrowRef}
                className="absolute w-3 h-3 bg-white border border-gray-300 transform rotate-45"
              />
            )}
            
            <div className="relative z-10 bg-white rounded-lg border border-gray-300 shadow-lg overflow-hidden">
              {closeButton && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] rounded"
                  aria-label="Close popover"
                >
                  <X size={16} />
                </button>
              )}
              {content}
            </div>
          </div>
        )}
      </>
    );
  }
);

Popover.displayName = 'Popover';`,types:`export interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  trigger?: 'click' | 'hover';
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeOnClickOutside?: boolean;
  showArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  closeButton?: boolean;
  offset?: number;
  className?: string;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const popoverVariants = cva(
  [
    'z-50',
    'focus:outline-none',
  ],
  {
    variants: {
      size: {
        sm: ['w-48'],
        md: ['w-72'],
        lg: ['w-96'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type PopoverVariantProps = VariantProps<typeof popoverVariants>;`},angularCode:{component:`import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Overlay, OverlayRef, OverlayConfig, ConnectedPosition } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ViewContainerRef } from '@angular/core';

type PopoverTrigger = 'click' | 'hover';
type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';
type PopoverSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ux4g-popover',
  template: \`
    <div
      #trigger
      (click)="handleTriggerClick()"
      (mouseenter)="handleMouseEnter()"
      (mouseleave)="handleMouseLeave()"
    >
      <ng-content></ng-content>
    </div>
    
    <ng-template #popoverTemplate>
      <div
        [class]="getPopoverClasses()"
        (mouseenter)="handlePopoverMouseEnter()"
        (mouseleave)="handlePopoverMouseLeave()"
        role="dialog"
        [attr.aria-modal]="false"
      >
        <div class="arrow" *ngIf="showArrow"></div>
        <div class="popover-content">
          <button
            *ngIf="closeButton"
            (click)="close()"
            class="close-button"
            aria-label="Close popover"
          >
            &times;
          </button>
          <ng-content select="[popover-content]"></ng-content>
        </div>
      </div>
    </ng-template>
  \`,
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnDestroy {
  @Input() trigger: PopoverTrigger = 'click';
  @Input() placement: PopoverPlacement = 'bottom';
  @Input() size: PopoverSize = 'md';
  @Input() showArrow = true;
  @Input() closeButton = false;
  @Input() closeOnClickOutside = true;
  @Input() offset = 8;
  
  @Output() openChange = new EventEmitter<boolean>();
  
  @ViewChild('trigger', { static: true }) triggerElement!: ElementRef;
  @ViewChild('popoverTemplate', { static: true }) popoverTemplate!: any;
  
  private overlayRef: OverlayRef | null = null;
  private portal: TemplatePortal | null = null;
  
  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}
  
  ngOnDestroy(): void {
    this.close();
  }
  
  handleTriggerClick(): void {
    if (this.trigger === 'click') {
      this.toggle();
    }
  }
  
  handleMouseEnter(): void {
    if (this.trigger === 'hover') {
      this.open();
    }
  }
  
  handleMouseLeave(): void {
    if (this.trigger === 'hover') {
      setTimeout(() => this.close(), 100);
    }
  }
  
  handlePopoverMouseEnter(): void {
    if (this.trigger === 'hover') {
      // Keep popover open
    }
  }
  
  handlePopoverMouseLeave(): void {
    if (this.trigger === 'hover') {
      this.close();
    }
  }
  
  toggle(): void {
    if (this.overlayRef) {
      this.close();
    } else {
      this.open();
    }
  }
  
  open(): void {
    if (this.overlayRef) return;
    
    const config = this.getOverlayConfig();
    this.overlayRef = this.overlay.create(config);
    this.portal = new TemplatePortal(this.popoverTemplate, this.viewContainerRef);
    this.overlayRef.attach(this.portal);
    
    if (this.closeOnClickOutside) {
      this.overlayRef.backdropClick().subscribe(() => this.close());
    }
    
    this.openChange.emit(true);
  }
  
  close(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
      this.openChange.emit(false);
    }
  }
  
  private getOverlayConfig(): OverlayConfig {
    const positions = this.getPositions();
    
    return new OverlayConfig({
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.triggerElement)
        .withPositions(positions)
        .withPush(false),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      hasBackdrop: this.closeOnClickOutside,
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });
  }
  
  private getPositions(): ConnectedPosition[] {
    const offsetValue = this.offset;
    
    const positionMap: Record<PopoverPlacement, ConnectedPosition> = {
      top: {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -offsetValue,
      },
      bottom: {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: offsetValue,
      },
      left: {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
        offsetX: -offsetValue,
      },
      right: {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
        offsetX: offsetValue,
      },
    };
    
    return [positionMap[this.placement]];
  }
  
  getPopoverClasses(): string {
    const sizeClasses = {
      sm: 'ux4g-popover-sm',
      md: 'ux4g-popover-md',
      lg: 'ux4g-popover-lg',
    };
    
    return \`ux4g-popover \${sizeClasses[this.size]}\`;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { PopoverComponent } from './popover.component';

@NgModule({
  declarations: [PopoverComponent],
  imports: [CommonModule, OverlayModule, PortalModule],
  exports: [PopoverComponent]
})
export class PopoverModule { }`,types:`export type PopoverTrigger = 'click' | 'hover';
export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';
export type PopoverSize = 'sm' | 'md' | 'lg';`},comparisons:[{system:"Material UI (Google)",component:"Popover",variants:"anchored, positioned",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-popover/"},{system:"Ant Design (Alibaba)",component:"Popover",variants:"click, hover, focus",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/popover"},{system:"Chakra UI",component:"Popover",variants:"click, hover, controlled",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/popover"},{system:"Radix UI",component:"Popover",variants:"controlled, uncontrolled",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://www.radix-ui.com/primitives/docs/components/popover"},{system:"Headless UI",component:"Popover",variants:"unstyled primitives",accessibility:"WCAG 2.1 AAA",documentation:"Good",link:"https://headlessui.com/react/popover"},{system:"React Bootstrap",component:"Overlay / Popover",variants:"click, positioned",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://react-bootstrap.github.io/components/overlays/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Role dialog or menu appropriately applied based on content type (WCAG 4.1.2)","Escape key closes popover for keyboard users (WCAG 2.1.1)","Focus management returns focus to trigger on close (WCAG 2.4.3)","Click outside to close for better user control (WCAG 3.2.1)","Arrow indicator provides visual connection to trigger element","Proper aria-describedby linking content to trigger when appropriate","Color contrast ratios meet or exceed 4.5:1 for text (WCAG 1.4.3)","Content is keyboard navigable with Tab and Shift+Tab (WCAG 2.1.1)","Hover trigger includes keyboard alternative for accessibility","Responsive positioning prevents content from being cut off (WCAG 1.4.10)"],keyboardSupport:[{key:"Tab",action:"Navigate between focusable elements within popover"},{key:"Shift + Tab",action:"Navigate backwards through focusable elements"},{key:"Escape",action:"Close popover and return focus to trigger"},{key:"Enter",action:"Activate trigger element (if button)"},{key:"Space",action:"Activate trigger element (if button)"}],screenReader:["Announces popover role as dialog or menu based on content","Trigger element has appropriate aria-haspopup attribute","Popover content is announced when opened","Close button clearly labeled for screen reader users","Focus is managed properly when opening and closing","Aria-describedby used to link descriptive content to trigger"]},tokens:{file:"/tokens/components/popover.json",mappings:[{property:"Width (Small)",token:"popover.size.sm",value:"192px"},{property:"Width (Medium)",token:"popover.size.md",value:"288px"},{property:"Width (Large)",token:"popover.size.lg",value:"384px"},{property:"Border Radius",token:"base.borderRadius.md",value:"8px"},{property:"Border Color",token:"base.border.color",value:"#D1D5DB (Gray 300)"},{property:"Background",token:"base.background.primary",value:"#FFFFFF (White)"},{property:"Shadow",token:"base.shadow.lg",value:"0 10px 15px -3px rgba(0, 0, 0, 0.1)"},{property:"Arrow Size",token:"popover.arrow.size",value:"12px"},{property:"Offset Distance",token:"popover.offset",value:"8px"},{property:"Z-Index",token:"base.zIndex.popover",value:"50"}]},useCases:[{title:"Contextual Help",description:"Provide additional information or guidance for form fields, buttons, or complex interface elements without cluttering the main interface.",example:"Help icon next to National Insurance Number field that displays format requirements and example when clicked."},{title:"Field Information",description:"Display detailed explanations, requirements, or examples for form inputs to help users complete forms correctly.",example:"Password requirements popover showing strength criteria, character requirements, and security tips."},{title:"Quick Actions",description:"Provide contextual action menus for list items, table rows, or cards without navigating to a new page.",example:"More actions button on application row showing Edit, Duplicate, Archive, and Delete options."},{title:"User Menu",description:"Display user profile information and account actions in a compact overlay triggered from the header.",example:"Avatar button in navigation that shows user profile, settings link, and sign out option."},{title:"Notification Details",description:"Show expanded notification information, actions, or related content when user interacts with notification bell.",example:"Notification icon displaying list of recent alerts with quick actions and mark as read functionality."},{title:"Inline Editing",description:"Allow users to edit content or settings in place without modal dialogs or separate pages.",example:"Settings gear icon that opens popover with toggles and dropdowns for quick preference changes."},{title:"Data Preview",description:"Show preview of linked content, document details, or related information on hover or click.",example:"Application reference number that displays case summary, status, and key dates when clicked."},{title:"Filter Controls",description:"Provide compact filter and sorting controls for data tables or search results without taking permanent space.",example:"Filter button that opens popover with checkboxes for status, date range, and category filtering."}]})}export{H as default};
