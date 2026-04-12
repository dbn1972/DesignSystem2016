import{j as e,X as a,b as s,d as i}from"./index-wYwTiNL-.js";import{C as l}from"./ComponentDocumentation-DKnXH-Pi.js";import{I as c}from"./info-DKzCpq0n.js";import"./copy-DRmj_ACu.js";import"./external-link-CusCIMwZ.js";const t=({variant:o="info",children:n})=>{const r={success:{bg:"bg-green-50",border:"border-green-200",icon:e.jsx(i,{className:"text-[#138808]",size:20})},info:{bg:"bg-blue-50",border:"border-blue-200",icon:e.jsx(c,{className:"text-[#005196]",size:20})},warning:{bg:"bg-yellow-50",border:"border-yellow-200",icon:e.jsx(s,{className:"text-yellow-600",size:20})},error:{bg:"bg-red-50",border:"border-red-200",icon:e.jsx(s,{className:"text-red-600",size:20})}}[o];return e.jsxs("div",{className:`${r.bg} ${r.border} border rounded-lg p-4 flex items-start gap-3`,children:[r.icon,e.jsx("div",{className:"flex-1",children:n}),e.jsx("button",{className:"text-gray-400 hover:text-gray-600",children:e.jsx(a,{size:20})})]})};function f(){return e.jsx(l,{name:"Alert",description:"Feedback component to display important messages, notifications, and system status to users. Supports multiple severity levels with appropriate visual styling.",category:"Feedback",maturity:"stable",tier:"core",since:"v1.0.0",props:[{name:"variant",type:"'success' | 'info' | 'warning' | 'error'",default:"'info'",required:!1,description:"Visual variant indicating message severity."},{name:"title",type:"string",required:!1,description:"Alert title/heading."},{name:"children",type:"ReactNode",required:!0,description:"Alert message content."},{name:"closable",type:"boolean",default:"false",required:!1,description:"Whether the alert can be dismissed."},{name:"onClose",type:"() => void",required:!1,description:"Callback when alert is closed."},{name:"icon",type:"ReactNode",required:!1,description:"Custom icon element."}],examples:[{title:"Alert Variants",description:"Four severity levels for different message types.",code:`import { Alert } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <Alert variant="success" title="Success">
        Your application has been submitted successfully.
      </Alert>
      
      <Alert variant="info" title="Information">
        Please complete your profile to continue.
      </Alert>
      
      <Alert variant="warning" title="Warning">
        Your session will expire in 5 minutes.
      </Alert>
      
      <Alert variant="error" title="Error">
        Unable to process your request. Please try again.
      </Alert>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs(t,{variant:"success",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"Success"}),e.jsx("p",{className:"text-gray-700",children:"Your application has been submitted successfully."})]}),e.jsxs(t,{variant:"info",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"Information"}),e.jsx("p",{className:"text-gray-700",children:"Please complete your profile to continue."})]}),e.jsxs(t,{variant:"warning",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"Warning"}),e.jsx("p",{className:"text-gray-700",children:"Your session will expire in 5 minutes."})]}),e.jsxs(t,{variant:"error",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"Error"}),e.jsx("p",{className:"text-gray-700",children:"Unable to process your request. Please try again."})]})]})}],reactCode:{component:`import React from 'react';
import { CheckCircle, Info, AlertCircle, X } from 'lucide-react';
import { AlertProps } from './Alert.types';

const iconMap = {
  success: CheckCircle,
  info: Info,
  warning: AlertCircle,
  error: AlertCircle,
};

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  closable = false,
  onClose,
  icon,
  className = '',
}) => {
  const [isVisible, setIsVisible] = React.useState(true);
  
  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };
  
  if (!isVisible) return null;
  
  const Icon = icon || iconMap[variant];
  
  return (
    <div className={\`alert alert-\${variant} \${className}\`} role="alert">
      {Icon && <Icon size={20} />}
      <div className="flex-1">
        {title && <h3>{title}</h3>}
        <div>{children}</div>
      </div>
      {closable && (
        <button onClick={handleClose} aria-label="Close alert">
          <X size={20} />
        </button>
      )}
    </div>
  );
};`,types:`export type AlertVariant = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
  className?: string;
}`},angularCode:{component:`import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux4g-alert',
  template: \`
    <div *ngIf="isVisible"
         [class]="getAlertClasses()"
         role="alert">
      <div class="flex-1">
        <h3 *ngIf="title">{{ title }}</h3>
        <ng-content></ng-content>
      </div>
      <button *ngIf="closable"
              (click)="handleClose()"
              aria-label="Close alert">
        ×
      </button>
    </div>
  \`
})
export class AlertComponent {
  @Input() variant: 'success' | 'info' | 'warning' | 'error' = 'info';
  @Input() title?: string;
  @Input() closable = false;
  @Output() closed = new EventEmitter<void>();
  
  isVisible = true;
  
  getAlertClasses(): string {
    return \`alert alert-\${this.variant}\`;
  }
  
  handleClose(): void {
    this.isVisible = false;
    this.closed.emit();
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule],
  exports: [AlertComponent]
})
export class AlertModule { }`,types:"export type AlertVariant = 'success' | 'info' | 'warning' | 'error';"},comparisons:[{system:"Material UI (Google)",component:"Alert",variants:"success, info, warning, error, filled, outlined",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-alert/"},{system:"Ant Design (Alibaba)",component:"Alert",variants:"success, info, warning, error, banner",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://ant.design/components/alert"},{system:"GOV.UK Design System",component:"Warning text / Error message",variants:"warning, error",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['role="alert" for important messages',"Color not sole indicator (icons used)","Sufficient color contrast","Keyboard accessible close button","Clear visual hierarchy"],keyboardSupport:[{key:"Tab",action:"Focus close button if closable"},{key:"Enter/Space",action:"Close alert"}],screenReader:["Announces alert role","Reads alert content","Announces when alert appears"]},tokens:{file:"/tokens/components/alert.json",mappings:[{property:"Success Background",token:"alert.success.bg",value:"#F0FDF4"},{property:"Info Background",token:"alert.info.bg",value:"#EFF6FF"},{property:"Warning Background",token:"alert.warning.bg",value:"#FFFBEB"},{property:"Error Background",token:"alert.error.bg",value:"#FEF2F2"}]}})}export{f as default};
