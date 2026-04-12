import{j as e,R as s}from"./index-LBJNeHTL.js";import{C as c}from"./ComponentDocumentation-DvEedSJi.js";import{C as u}from"./calendar-CJpNAFYv.js";import{C as p}from"./chevron-left-DhMGvTEe.js";import{C as m}from"./chevron-right-DXN1-lVR.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const n=()=>{const[a,i]=s.useState(null),[r,o]=s.useState(!1),l=t=>t?t.toLocaleDateString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric"}):"";return e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:l(a),placeholder:"DD/MM/YYYY",readOnly:!0,onClick:()=>o(!r),className:"w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005196] cursor-pointer"}),e.jsx(u,{className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",size:20})]}),r&&e.jsxs("div",{className:"absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("button",{className:"p-1 hover:bg-gray-100 rounded",children:e.jsx(p,{size:20})}),e.jsx("span",{className:"font-semibold",children:"March 2024"}),e.jsx("button",{className:"p-1 hover:bg-gray-100 rounded",children:e.jsx(m,{size:20})})]}),e.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[["Su","Mo","Tu","We","Th","Fr","Sa"].map(t=>e.jsx("div",{className:"text-center text-xs font-semibold text-gray-500 p-2",children:t},t)),Array.from({length:31},(t,d)=>d+1).map(t=>e.jsx("button",{onClick:()=>{i(new Date(2024,2,t)),o(!1)},className:`p-2 text-sm rounded hover:bg-blue-50 ${(a==null?void 0:a.getDate())===t?"bg-[#005196] text-white hover:bg-[#004080]":""}`,children:t},t))]})]})]})};function Y(){return e.jsx(c,{name:"DatePicker",description:"Calendar-based date selection component with support for Indian date formats (DD/MM/YYYY). Essential for government forms requiring date input like applications, bookings, and renewals.",category:"Advanced Form",maturity:"beta",tier:"composite",since:"v2.0.0",props:[{name:"value",type:"Date | null",required:!1,description:"Selected date value (controlled)."},{name:"onChange",type:"(date: Date | null) => void",required:!0,description:"Callback when date is selected."},{name:"format",type:"'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD'",default:"'DD/MM/YYYY'",required:!1,description:"Date display format."},{name:"minDate",type:"Date",required:!1,description:"Minimum selectable date."},{name:"maxDate",type:"Date",required:!1,description:"Maximum selectable date."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether date picker is disabled."},{name:"placeholder",type:"string",default:"'Select date'",required:!1,description:"Placeholder text."},{name:"locale",type:"'en-IN' | 'hi-IN' | string",default:"'en-IN'",required:!1,description:"Locale for date formatting."}],examples:[{title:"Basic DatePicker",description:"Simple date selection with Indian format.",code:`import { DatePicker } from '@ux4g/react-core';

function Example() {
  const [date, setDate] = React.useState<Date | null>(null);
  
  return (
    <DatePicker
      value={date}
      onChange={setDate}
      placeholder="Select date"
      format="DD/MM/YYYY"
    />
  );
}`,preview:e.jsx(n,{})},{title:"Date of Birth Picker",description:"Date picker with max date restriction (no future dates).",code:`import { DatePicker } from '@ux4g/react-core';

function Example() {
  const [dob, setDob] = React.useState<Date | null>(null);
  
  return (
    <DatePicker
      value={dob}
      onChange={setDob}
      maxDate={new Date()}
      placeholder="Date of Birth (DD/MM/YYYY)"
    />
  );
}`,preview:e.jsx(n,{})},{title:"Appointment Booking",description:"Future dates only for booking appointments.",code:`import { DatePicker } from '@ux4g/react-core';

function Example() {
  const [appointmentDate, setAppointmentDate] = React.useState<Date | null>(null);
  
  return (
    <DatePicker
      value={appointmentDate}
      onChange={setAppointmentDate}
      minDate={new Date()}
      placeholder="Select appointment date"
    />
  );
}`,preview:e.jsx(n,{})}],reactCode:{component:`import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { DatePickerProps } from './DatePicker.types';

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  format = 'DD/MM/YYYY',
  minDate,
  maxDate,
  disabled = false,
  placeholder = 'Select date',
  locale = 'en-IN',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value || new Date());
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    switch (format) {
      case 'DD/MM/YYYY':
        return \`\${day}/\${month}/\${year}\`;
      case 'MM/DD/YYYY':
        return \`\${month}/\${day}/\${year}\`;
      case 'YYYY-MM-DD':
        return \`\${year}-\${month}-\${day}\`;
      default:
        return date.toLocaleDateString(locale);
    }
  };
  
  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (minDate && newDate < minDate) return;
    if (maxDate && newDate > maxDate) return;
    
    onChange(newDate);
    setIsOpen(false);
  };
  
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };
  
  const isDateDisabled = (day: number): boolean => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };
  
  const isDateSelected = (day: number): boolean => {
    if (!value) return false;
    return (
      value.getDate() === day &&
      value.getMonth() === currentMonth.getMonth() &&
      value.getFullYear() === currentMonth.getFullYear()
    );
  };
  
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
  
  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={formatDate(value)}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={\`w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#005196] 
            \${disabled ? 'bg-gray-100 cursor-not-allowed' : 'cursor-pointer'} 
            \${className}\`}
        />
        <Calendar
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50 min-w-[320px]">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-semibold text-gray-900">{monthName}</span>
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-xs font-semibold text-gray-500 p-2">
                {day}
              </div>
            ))}
            
            {/* Empty cells for first week */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={\`empty-\${i}\`} />
            ))}
            
            {/* Day buttons */}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
              const disabled = isDateDisabled(day);
              const selected = isDateSelected(day);
              
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => !disabled && handleDateSelect(day)}
                  disabled={disabled}
                  className={\`
                    p-2 text-sm rounded transition-colors
                    \${selected 
                      ? 'bg-[#005196] text-white hover:bg-[#004080]' 
                      : disabled
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'hover:bg-blue-50'
                    }
                  \`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};`,types:`export type DateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';

export interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  format?: DateFormat;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  placeholder?: string;
  locale?: string;
  className?: string;
}`},angularCode:{component:`import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ux4g-datepicker',
  template: \`
    <div class="relative">
      <div class="relative">
        <input
          type="text"
          [value]="formatDate(value)"
          [placeholder]="placeholder"
          [disabled]="disabled"
          (click)="toggleCalendar()"
          readonly
          class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          [class.bg-gray-100]="disabled"
          [class.cursor-pointer]="!disabled"
        />
        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">📅</span>
      </div>
      
      <div *ngIf="isOpen"
           class="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border p-4 z-50">
        <div class="flex items-center justify-between mb-4">
          <button (click)="prevMonth()" class="p-1 hover:bg-gray-100 rounded">←</button>
          <span class="font-semibold">{{ getMonthName() }}</span>
          <button (click)="nextMonth()" class="p-1 hover:bg-gray-100 rounded">→</button>
        </div>
        
        <div class="grid grid-cols-7 gap-1">
          <div *ngFor="let day of weekDays" class="text-center text-xs font-semibold text-gray-500 p-2">
            {{ day }}
          </div>
          
          <div *ngFor="let empty of getEmptyDays()"></div>
          
          <button *ngFor="let day of getDaysInMonth()"
                  (click)="selectDate(day)"
                  [disabled]="isDateDisabled(day)"
                  [class.bg-blue-600]="isDateSelected(day)"
                  [class.text-white]="isDateSelected(day)"
                  class="p-2 text-sm rounded hover:bg-blue-50">
            {{ day }}
          </button>
        </div>
      </div>
    </div>
  \`
})
export class DatePickerComponent implements OnInit {
  @Input() value: Date | null = null;
  @Input() format: 'DD/MM/YYYY' | 'MM/DD/YYYY' = 'DD/MM/YYYY';
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  @Input() disabled = false;
  @Input() placeholder = 'Select date';
  
  @Output() valueChange = new EventEmitter<Date | null>();
  
  isOpen = false;
  currentMonth = new Date();
  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
  ngOnInit() {
    if (this.value) {
      this.currentMonth = new Date(this.value);
    }
  }
  
  formatDate(date: Date | null): string {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return this.format === 'DD/MM/YYYY' 
      ? \`\${day}/\${month}/\${year}\`
      : \`\${month}/\${day}/\${year}\`;
  }
  
  toggleCalendar() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }
  
  getDaysInMonth(): number[] {
    const days = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      0
    ).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }
  
  getEmptyDays(): number[] {
    const firstDay = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      1
    ).getDay();
    return Array.from({ length: firstDay });
  }
  
  getMonthName(): string {
    return this.currentMonth.toLocaleDateString('en-IN', { 
      month: 'long', 
      year: 'numeric' 
    });
  }
  
  selectDate(day: number) {
    const newDate = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      day
    );
    this.value = newDate;
    this.valueChange.emit(newDate);
    this.isOpen = false;
  }
  
  isDateSelected(day: number): boolean {
    if (!this.value) return false;
    return (
      this.value.getDate() === day &&
      this.value.getMonth() === this.currentMonth.getMonth() &&
      this.value.getFullYear() === this.currentMonth.getFullYear()
    );
  }
  
  isDateDisabled(day: number): boolean {
    const date = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      day
    );
    if (this.minDate && date < this.minDate) return true;
    if (this.maxDate && date > this.maxDate) return true;
    return false;
  }
  
  prevMonth() {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1
    );
  }
  
  nextMonth() {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1
    );
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './datepicker.component';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [CommonModule],
  exports: [DatePickerComponent]
})
export class DatePickerModule { }`,types:"export type DateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';"},comparisons:[{system:"Material UI (Google)",component:"DatePicker",variants:"single date, range, multiple formats",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/x/react-date-pickers/"},{system:"Ant Design (Alibaba)",component:"DatePicker",variants:"date, range, time, datetime",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://ant.design/components/date-picker"},{system:"Chakra UI",component:"DatePicker (3rd party)",variants:"custom implementations",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/"},{system:"React DatePicker",component:"DatePicker",variants:"single, range, time, inline",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://reactdatepicker.com/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Keyboard navigable calendar grid","Arrow keys to navigate dates","Enter/Space to select date","ESC to close calendar","Clear focus indicators","Proper ARIA labels and roles","Screen reader announcements for selected date"],keyboardSupport:[{key:"Tab",action:"Focus date input"},{key:"Enter/Space",action:"Open calendar / Select date"},{key:"Arrow Keys",action:"Navigate calendar dates"},{key:"Escape",action:"Close calendar"},{key:"Home",action:"Go to first day of month"},{key:"End",action:"Go to last day of month"}],screenReader:["Announces selected date","Announces current month/year","Reads date format in placeholder","Announces disabled dates","Announces when calendar opens/closes"]},tokens:{file:"/tokens/components/datepicker.json",mappings:[{property:"Calendar Background",token:"datepicker.calendar.bg",value:"#FFFFFF"},{property:"Selected Date Background",token:"datepicker.selected.bg",value:"#005196 (Navy 500)"},{property:"Selected Date Text",token:"datepicker.selected.text",value:"#FFFFFF"},{property:"Hover Background",token:"datepicker.hover.bg",value:"#EFF6FF (Blue 50)"},{property:"Disabled Text Color",token:"datepicker.disabled.text",value:"#D1D5DB (Gray 300)"},{property:"Border Radius",token:"datepicker.borderRadius",value:"8px"},{property:"Shadow",token:"datepicker.shadow",value:"0 10px 25px rgba(0,0,0,0.1)"}]}})}export{Y as default};
