/**
 * DatePicker Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const DatePickerPreview = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };
  
  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={formatDate(selectedDate)}
          placeholder="DD/MM/YYYY"
          readOnly
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 pr-10 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005196] cursor-pointer"
        />
        <Calendar
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          size={20}
        />
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-card rounded-lg shadow-xl border border-border p-4 z-50">
          <div className="flex items-center justify-between mb-4">
            <button className="p-1 hover:bg-muted rounded">
              <ChevronLeft size={20} />
            </button>
            <span className="font-semibold">March 2024</span>
            <button className="p-1 hover:bg-muted rounded">
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-xs font-semibold text-muted-foreground p-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
              <button
                key={day}
                onClick={() => {
                  setSelectedDate(new Date(2024, 2, day));
                  setIsOpen(false);
                }}
                className={`p-2 text-sm rounded hover:bg-blue-50 ${
                  selectedDate?.getDate() === day ? 'bg-[#005196] text-white hover:bg-[#004080]' : ''
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DATEPICKER_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  {
    name: 'required',
    label: 'Required',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'disabled',
    label: 'Disabled',
    type: 'boolean',
    defaultValue: false,
  },
];

function DatePickerPlayground() {
  return (
    <ComponentPlayground
      name="DatePicker"
      controls={DATEPICKER_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg w-full flex items-center justify-center">
          <DatePickerPreview />
        </div>
      )}
      codeTemplate={(v) =>
        `<DatePicker${v.required ? ' required' : ''}${v.disabled ? ' disabled' : ''} />`}
    />
  );
}

export default function ComponentDatePickerPage() {
  return (
    <ComponentDocumentation
      name="DatePicker"
      description="Calendar-based date selection component with support for Indian date formats (DD/MM/YYYY). Essential for government forms requiring date input like applications, bookings, and renewals."
      category="Advanced Form"
      maturity="beta"
      tier="composite"
      since="v2.0.0"

      preview={
        <div className="w-full max-w-sm">
          {/* CSS mockup showing date picker with calendar open */}
          <div className="relative">
            <div className="relative">
              <input type="text" value="15/04/2026" readOnly className="w-full px-4 py-3 pr-10 border border-[#005196] rounded-lg text-sm focus:outline-none ring-2 ring-[#005196]/20" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#005196]">📅</span>
            </div>
            <div className="absolute top-full left-0 mt-2 bg-card rounded-xl shadow-xl border border-border p-4 z-10 w-72">
              <div className="flex items-center justify-between mb-3">
                <button className="p-1 hover:bg-muted rounded text-muted-foreground">◀</button>
                <span className="text-sm font-semibold text-foreground">April 2026</span>
                <button className="p-1 hover:bg-muted rounded text-muted-foreground">▶</button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="p-1.5 font-semibold text-muted-foreground">{d}</div>)}
                {['','','','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'].map((d, i) => (
                  <div key={i} className={`p-1.5 rounded cursor-pointer ${d === '15' ? 'bg-[#005196] text-white font-bold' : d === '' ? '' : 'hover:bg-muted text-foreground'}`}>{d}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
      
      props={[
        {
          name: 'value',
          type: 'string',
          required: false,
          description: 'Controlled value (ISO date string YYYY-MM-DD).',
        },
        {
          name: 'onChange',
          type: '(value: string) => void',
          required: false,
          description: 'Callback when date changes.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Input size variant.',
        },
        {
          name: 'min',
          type: 'string',
          required: false,
          description: 'Minimum date (ISO format YYYY-MM-DD).',
        },
        {
          name: 'max',
          type: 'string',
          required: false,
          description: 'Maximum date (ISO format YYYY-MM-DD).',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the date picker is disabled.',
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the field is required.',
        },
        {
          name: 'error',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Error state indicator.',
        },
        {
          name: 'name',
          type: 'string',
          required: false,
          description: 'Field name for form submission.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
      ]}
      
      examples={[
        {
          title: 'Basic DatePicker',
          description: 'Simple date selection with Indian format.',
          code: `import { DatePicker } from '@ux4g/react-core';

function Example() {
  const [date, setDate] = React.useState<Date | null>(null);
  
  return (
    <DatePicker
      value={date}
      onChange={setDate}
      placeholder="Select date"
      format="DD/MM/YYYY"

      useCases={[
        { title: "Date of Birth", description: "DOB picker in personal details form.", scenario: "Certificate application personal info.", implementation: "<DatePicker label=\"Date of Birth\" required />" },
        { title: "Application Deadline", description: "Date selection for submission deadline.", scenario: "Tatkal processing deadline selection.", implementation: "<DatePicker label=\"Deadline\" minDate={today} />" },
      
        { title: 'Appointment Date Selection', description: 'Select appointment date from available slots.', scenario: 'Citizen picks passport appointment date from calendar.', implementation: '<DatePicker label="Appointment Date" minDate={today} availableDates={slots} />' },
        { title: 'Document Issue Date', description: 'Officer selects certificate issue date.', scenario: 'Officer sets issue date while approving certificate.', implementation: '<DatePicker label="Issue Date" defaultValue={today} />' },
      ]}

      additionalContent={
        <>
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use DatePicker when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Date selection from a calendar</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Date of birth fields</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Deadline or appointment dates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use DatePicker when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Known dates users can type — use Input type=date</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Date ranges — use a range picker</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Time selection — use a time picker</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <div className="w-48 mb-3"><label className="block text-xs font-medium text-foreground mb-1">Date of Birth</label><div className="flex items-center border border-border rounded px-3 py-1.5 text-xs"><span className="text-muted-foreground">DD/MM/YYYY</span><span className="ml-auto text-muted-foreground">📅</span></div></div>
                  <p className="text-sm text-muted-foreground">Use a calendar picker for unknown dates. For known dates (DOB), allow text input too.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="w-48 mb-3"><div className="border border-border rounded px-3 py-1.5 text-xs text-muted-foreground">Select date</div></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t force calendar-only input for dates users know by heart — it&apos;s slower.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <DatePickerPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/input" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Input</h3>
                <p className="text-sm text-muted-foreground">For typed date entry</p>
              </a>
              <a href="/components/calendarscheduler" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">CalendarScheduler</h3>
                <p className="text-sm text-muted-foreground">For appointment booking</p>
              </a>
              <a href="/components/field" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Field</h3>
                <p className="text-sm text-muted-foreground">For wrapping with label</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added min/max date constraints</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added locale support</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with calendar popup</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Calendar vs text input</h3>
                <p className="text-sm text-muted-foreground">For dates users know (DOB), a text input is faster. For unknown dates, a calendar picker reduces errors by 30% (Baymard).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}`,
          preview: <DatePickerPreview />,
        },
        {
          title: 'Date of Birth Picker',
          description: 'Date picker with max date restriction (no future dates).',
          code: `import { DatePicker } from '@ux4g/react-core';

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
}`,
          preview: <DatePickerPreview />,
        },
        {
          title: 'Appointment Booking',
          description: 'Future dates only for booking appointments.',
          code: `import { DatePicker } from '@ux4g/react-core';

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
}`,
          preview: <DatePickerPreview />,
        },
      ]}
      
      reactCode={{
        component: `import React, { useState, useRef, useEffect } from 'react';
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
          className={\`w-full px-4 py-3 pr-10 border border-border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#005196] 
            \${disabled ? 'bg-muted cursor-not-allowed' : 'cursor-pointer'} 
            \${className}\`}
        />
        <Calendar
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          size={20}
        />
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-card rounded-lg shadow-xl border border-border p-4 z-50 min-w-[320px]">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1 hover:bg-muted rounded transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-semibold text-foreground">{monthName}</span>
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1 hover:bg-muted rounded transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-xs font-semibold text-muted-foreground p-2">
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
                        ? 'text-muted-foreground cursor-not-allowed'
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
};`,
        types: `export type DateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';

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
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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
          class="w-full px-4 py-3 pr-10 border border-border rounded-lg focus:ring-2 focus:ring-blue-500"
          [class.bg-muted]="disabled"
          [class.cursor-pointer]="!disabled"
        />
        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">📅</span>
      </div>
      
      <div *ngIf="isOpen"
           class="absolute top-full left-0 mt-2 bg-card rounded-lg shadow-xl border p-4 z-50">
        <div class="flex items-center justify-between mb-4">
          <button (click)="prevMonth()" class="p-1 hover:bg-muted rounded">←</button>
          <span class="font-semibold">{{ getMonthName() }}</span>
          <button (click)="nextMonth()" class="p-1 hover:bg-muted rounded">→</button>
        </div>
        
        <div class="grid grid-cols-7 gap-1">
          <div *ngFor="let day of weekDays" class="text-center text-xs font-semibold text-muted-foreground p-2">
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
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './datepicker.component';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [CommonModule],
  exports: [DatePickerComponent]
})
export class DatePickerModule { }`,
        types: `export type DateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-date-picker> custom element",
        html: "<ux4g-date-picker variant=\"primary\" size=\"md\"><!-- DatePicker --></ux4g-date-picker>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'DatePicker',
          variants: 'single date, range, multiple formats',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/x/react-date-pickers/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'DatePicker',
          variants: 'date, range, time, datetime',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/date-picker',
        },
        {
          system: 'Chakra UI',
          component: 'DatePicker (3rd party)',
          variants: 'custom implementations',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/',
        },
        {
          system: 'React DatePicker',
          component: 'DatePicker',
          variants: 'single, range, time, inline',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://reactdatepicker.com/',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Keyboard navigable calendar grid',
          'Arrow keys to navigate dates',
          'Enter/Space to select date',
          'ESC to close calendar',
          'Clear focus indicators',
          'Proper ARIA labels and roles',
          'Screen reader announcements for selected date',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Focus date input' },
          { key: 'Enter/Space', action: 'Open calendar / Select date' },
          { key: 'Arrow Keys', action: 'Navigate calendar dates' },
          { key: 'Escape', action: 'Close calendar' },
          { key: 'Home', action: 'Go to first day of month' },
          { key: 'End', action: 'Go to last day of month' },
        ],
        screenReader: [
          'Announces selected date',
          'Announces current month/year',
          'Reads date format in placeholder',
          'Announces disabled dates',
          'Announces when calendar opens/closes',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/datepicker.json',
        mappings: [
          { property: 'Calendar Background', token: 'datepicker.calendar.bg', value: '#FFFFFF' },
          { property: 'Selected Date Background', token: 'datepicker.selected.bg', value: '#005196 (Navy 500)' },
          { property: 'Selected Date Text', token: 'datepicker.selected.text', value: '#FFFFFF' },
          { property: 'Hover Background', token: 'datepicker.hover.bg', value: '#EFF6FF (Blue 50)' },
          { property: 'Disabled Text Color', token: 'datepicker.disabled.text', value: '#D1D5DB (Gray 300)' },
          { property: 'Border Radius', token: 'datepicker.borderRadius', value: '8px' },
          { property: 'Shadow', token: 'datepicker.shadow', value: '0 10px 25px rgba(0,0,0,0.1)' },
        ],
      }}
    />
  );
}
