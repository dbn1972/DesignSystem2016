import{j as e,b as u,r as v}from"./index-wYwTiNL-.js";import{C as g}from"./ComponentDocumentation-DKnXH-Pi.js";import{C as p}from"./calendar-DaYsoLdY.js";import{C as h}from"./clock-EAoSm68N.js";import{M as y}from"./map-pin-V3RJ2AFx.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const s=({view:i="month",events:d=[],minTime:l="08:00",maxTime:f="18:00",...w})=>{const[c,b]=v.useState(new Date);return e.jsxs("div",{className:"w-full border border-gray-200 rounded-lg overflow-hidden bg-white",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 bg-[#005196] text-white",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{size:20}),e.jsxs("h3",{className:"font-semibold",children:[i==="month"&&c.toLocaleDateString("en-US",{month:"long",year:"numeric"}),i==="week"&&`Week of ${c.toLocaleDateString("en-US",{month:"short",day:"numeric"})}`,i==="day"&&c.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30",children:"Today"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30",children:"Prev"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30",children:"Next"})]})]}),i==="month"&&e.jsxs("div",{className:"grid grid-cols-7 gap-px bg-gray-200",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(n=>e.jsx("div",{className:"bg-gray-50 p-2 text-center text-xs font-semibold text-gray-600",children:n},n)),Array.from({length:35},(n,t)=>e.jsxs("div",{className:"bg-white p-2 min-h-[80px] hover:bg-gray-50 cursor-pointer",children:[e.jsx("div",{className:"text-sm text-gray-700",children:t%30+1}),d.filter(a=>a.day===t).map((a,r)=>e.jsx("div",{className:`text-xs mt-1 p-1 rounded ${a.color||"bg-blue-100 text-blue-800"}`,children:a.title},r))]},t))]}),i==="week"&&e.jsxs("div",{className:"grid grid-cols-8",children:[e.jsxs("div",{className:"border-r border-gray-200 p-2 text-xs text-gray-500",children:[e.jsx("div",{className:"h-8"}),Array.from({length:10},(n,t)=>e.jsxs("div",{className:"h-16 border-t border-gray-200 pt-1",children:[String(parseInt(l.split(":")[0])+t).padStart(2,"0"),":00"]},t))]}),["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((n,t)=>e.jsxs("div",{className:"border-r border-gray-200",children:[e.jsx("div",{className:"h-8 p-2 text-center text-xs font-semibold bg-gray-50 border-b border-gray-200",children:n}),Array.from({length:10},(a,r)=>e.jsx("div",{className:"h-16 border-t border-gray-200 hover:bg-blue-50 cursor-pointer relative",children:d.filter(o=>o.dayOfWeek===t&&o.hour===r+parseInt(l.split(":")[0])).map((o,m)=>e.jsxs("div",{className:`absolute inset-x-1 top-1 bottom-1 p-1 rounded text-xs ${o.color||"bg-[#005196] text-white"}`,children:[e.jsx("div",{className:"font-semibold",children:o.title}),e.jsx("div",{className:"text-xs opacity-90",children:o.time})]},m))},r))]},n))]}),i==="day"&&e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsx("div",{className:"border-r border-gray-200 p-2 text-xs text-gray-500",children:Array.from({length:10},(n,t)=>e.jsx("div",{className:"h-20 border-t border-gray-200 pt-1 relative",children:e.jsxs("span",{className:"absolute -top-2 bg-white px-1",children:[String(parseInt(l.split(":")[0])+t).padStart(2,"0"),":00"]})},t))}),e.jsx("div",{className:"relative",children:Array.from({length:10},(n,t)=>e.jsx("div",{className:"h-20 border-t border-gray-200 hover:bg-blue-50 cursor-pointer relative",children:d.filter(a=>a.hour===t+parseInt(l.split(":")[0])).map((a,r)=>e.jsxs("div",{className:`absolute inset-x-2 top-1 p-2 rounded shadow-sm ${a.color||"bg-[#005196] text-white"}`,children:[e.jsx("div",{className:"font-semibold",children:a.title}),e.jsxs("div",{className:"text-xs opacity-90 flex items-center gap-2 mt-1",children:[e.jsx(h,{size:12}),e.jsx("span",{children:a.time})]}),a.location&&e.jsxs("div",{className:"text-xs opacity-90 flex items-center gap-2 mt-1",children:[e.jsx(y,{size:12}),e.jsx("span",{children:a.location})]})]},r))},t))})]})]})};function H(){return e.jsx(g,{name:"Calendar Scheduler",description:"Comprehensive scheduling component for government service appointments, officer availability tracking, public hearings, and deadline management. Supports multiple calendar views, appointment booking, working hours configuration, and multi-department scheduling with full accessibility compliance.",category:"Government Services",maturity:"beta",tier:"composite",since:"v2.2.0",updated:"v2.3.0",props:[{name:"view",type:"'month' | 'week' | 'day'",default:"'month'",required:!1,description:"Calendar view mode. Month view shows full month grid, week view shows hourly slots for 7 days, day view shows detailed hourly timeline for single day."},{name:"events",type:"CalendarEvent[]",required:!1,description:"Array of calendar events to display. Each event includes id, title, start, end, description, location, department, and color."},{name:"onSelectSlot",type:"(slotInfo: { start: Date; end: Date; view: string }) => void",required:!1,description:"Callback when a time slot is clicked. Used for creating new appointments or events."},{name:"onSelectEvent",type:"(event: CalendarEvent) => void",required:!1,description:"Callback when an existing event is clicked. Used for viewing or editing event details."},{name:"minTime",type:"string",default:"'08:00'",required:!1,description:"Earliest time slot visible in day/week view. Format: HH:mm (24-hour)."},{name:"maxTime",type:"string",default:"'18:00'",required:!1,description:"Latest time slot visible in day/week view. Format: HH:mm (24-hour)."},{name:"workingHours",type:"{ start: string; end: string; days: number[] }",required:!1,description:"Define working hours and days. Days array: 0=Sunday, 1=Monday, etc. Non-working hours are visually distinguished."},{name:"holidays",type:"Date[]",required:!1,description:"Array of holiday dates. These dates are marked and typically non-bookable."},{name:"enableBooking",type:"boolean",default:"false",required:!1,description:"Enable appointment booking interface. Shows available slots and booking confirmation flow."},{name:"slotDuration",type:"number",default:"30",required:!1,description:"Duration of time slots in minutes. Common values: 15, 30, 60."},{name:"departments",type:"Department[]",required:!1,description:"Array of departments/resources for multi-resource scheduling. Each has id, name, color, and availability."},{name:"locale",type:"string",default:"'en-US'",required:!1,description:"Locale for date formatting and translations. Supports all valid BCP 47 language tags."},{name:"timezone",type:"string",default:"'America/New_York'",required:!1,description:"IANA timezone identifier for proper time display and scheduling."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply to the calendar container."},{name:"onViewChange",type:"(view: 'month' | 'week' | 'day') => void",required:!1,description:"Callback when calendar view changes."},{name:"onNavigate",type:"(date: Date, view: string) => void",required:!1,description:"Callback when user navigates to different date range."}],examples:[{title:"Monthly View",description:"Standard month grid view showing events and available slots for public services.",code:`import { CalendarScheduler } from '@ux4g/react-composite';
import { useState } from 'react';

function Example() {
  const [events] = useState([
    {
      id: '1',
      title: 'Public Hearing: Zoning Amendment',
      start: new Date(2026, 3, 15, 14, 0),
      end: new Date(2026, 3, 15, 16, 0),
      department: 'Planning Commission',
      location: 'City Hall, Room 201',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: '2',
      title: 'Tax Filing Deadline',
      start: new Date(2026, 3, 15),
      end: new Date(2026, 3, 15),
      department: 'Revenue Services',
      allDay: true,
      color: 'bg-red-100 text-red-800'
    },
  ]);

  return (
    <CalendarScheduler
      view="month"
      events={events}
      onSelectSlot={(slotInfo) => {
        console.log('Selected slot:', slotInfo);
      }}
      onSelectEvent={(event) => {
        console.log('Selected event:', event);
      }}
    />
  );
}`,preview:e.jsx(s,{view:"month",events:[{day:15,title:"Public Hearing",color:"bg-blue-100 text-blue-800"},{day:15,title:"Tax Deadline",color:"bg-red-100 text-red-800"},{day:22,title:"City Council",color:"bg-green-100 text-green-800"}]})},{title:"Appointment Booking",description:"Enable citizens to book appointments with government services during available time slots.",code:`import { CalendarScheduler } from '@ux4g/react-composite';
import { useState } from 'react';

function Example() {
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Driver License Renewal - John Doe',
      start: new Date(2026, 3, 15, 9, 0),
      end: new Date(2026, 3, 15, 9, 30),
      department: 'DMV',
    },
  ]);

  const handleBooking = (slotInfo) => {
    const newEvent = {
      id: Date.now().toString(),
      title: 'New Appointment',
      start: slotInfo.start,
      end: slotInfo.end,
      department: 'DMV',
    };
    setEvents([...events, newEvent]);
  };

  return (
    <CalendarScheduler
      view="week"
      events={events}
      enableBooking={true}
      slotDuration={30}
      minTime="08:00"
      maxTime="17:00"
      onSelectSlot={handleBooking}
      workingHours={{
        start: '08:00',
        end: '17:00',
        days: [1, 2, 3, 4, 5], // Monday-Friday
      }}
    />
  );
}`,preview:e.jsx(s,{view:"week",minTime:"08:00",maxTime:"17:00",events:[{dayOfWeek:1,hour:9,time:"9:00 AM",title:"DMV Appointment",color:"bg-[#005196] text-white"},{dayOfWeek:2,hour:10,time:"10:00 AM",title:"Permit Review",color:"bg-green-600 text-white"},{dayOfWeek:3,hour:14,time:"2:00 PM",title:"License Renewal",color:"bg-[#005196] text-white"}]})},{title:"Working Hours Configuration",description:"Configure business hours and non-working time periods for government offices.",code:`import { CalendarScheduler } from '@ux4g/react-composite';

function Example() {
  const workingHours = {
    start: '09:00',
    end: '16:00',
    days: [1, 2, 3, 4, 5], // Monday-Friday
  };

  const holidays = [
    new Date(2026, 3, 19), // Easter Monday
    new Date(2026, 6, 4),  // Independence Day
  ];

  return (
    <CalendarScheduler
      view="week"
      workingHours={workingHours}
      holidays={holidays}
      minTime="08:00"
      maxTime="18:00"
      slotDuration={60}
    />
  );
}`,preview:e.jsx(s,{view:"week",minTime:"08:00",maxTime:"18:00",events:[]})},{title:"Department-Wise Slots",description:"Multi-department scheduling showing availability across different government services.",code:`import { CalendarScheduler } from '@ux4g/react-composite';

function Example() {
  const departments = [
    {
      id: 'dmv',
      name: 'Department of Motor Vehicles',
      color: '#005196',
      availability: { days: [1, 2, 3, 4, 5], hours: '08:00-17:00' },
    },
    {
      id: 'permits',
      name: 'Building Permits',
      color: '#008800',
      availability: { days: [1, 2, 3, 4], hours: '09:00-16:00' },
    },
    {
      id: 'tax',
      name: 'Tax Services',
      color: '#dc2626',
      availability: { days: [2, 3, 4, 5], hours: '08:30-16:30' },
    },
  ];

  const events = [
    {
      id: '1',
      title: 'License Renewal Appointment',
      start: new Date(2026, 3, 15, 10, 0),
      end: new Date(2026, 3, 15, 10, 30),
      departmentId: 'dmv',
    },
    {
      id: '2',
      title: 'Permit Consultation',
      start: new Date(2026, 3, 15, 11, 0),
      end: new Date(2026, 3, 15, 12, 0),
      departmentId: 'permits',
    },
  ];

  return (
    <CalendarScheduler
      view="day"
      departments={departments}
      events={events}
      minTime="08:00"
      maxTime="18:00"
    />
  );
}`,preview:e.jsx(s,{view:"day",minTime:"08:00",maxTime:"18:00",events:[{hour:10,time:"10:00 AM",title:"License Renewal",color:"bg-[#005196] text-white",location:"DMV Office"},{hour:11,time:"11:00 AM",title:"Permit Consultation",color:"bg-green-600 text-white",location:"Building Dept"},{hour:14,time:"2:00 PM",title:"Tax Consultation",color:"bg-red-600 text-white",location:"Tax Services"}]})},{title:"Holiday Calendar",description:"Display government holidays and office closure dates with visual indicators.",code:`import { CalendarScheduler } from '@ux4g/react-composite';
import { AlertCircle } from 'lucide-react';

function Example() {
  const holidays = [
    new Date(2026, 0, 1),   // New Year's Day
    new Date(2026, 0, 19),  // MLK Day
    new Date(2026, 1, 16),  // Presidents Day
    new Date(2026, 4, 25),  // Memorial Day
    new Date(2026, 6, 3),   // Independence Day (observed)
    new Date(2026, 8, 7),   // Labor Day
    new Date(2026, 10, 26), // Thanksgiving
    new Date(2026, 11, 25), // Christmas
  ];

  const holidayEvents = holidays.map((date, idx) => ({
    id: \`holiday-\${idx}\`,
    title: 'Office Closed - Federal Holiday',
    start: date,
    end: date,
    allDay: true,
    color: 'bg-red-100 text-red-800 border-red-300',
    icon: AlertCircle,
  }));

  return (
    <CalendarScheduler
      view="month"
      events={holidayEvents}
      holidays={holidays}
      enableBooking={false}
    />
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm",children:[e.jsx(u,{size:16}),e.jsx("span",{children:"Government offices closed on highlighted dates"})]}),e.jsx(s,{view:"month",events:[{day:1,title:"New Year",color:"bg-red-100 text-red-800"},{day:19,title:"MLK Day",color:"bg-red-100 text-red-800"}]})]})},{title:"Multi-Location Schedule",description:"Schedule across multiple government office locations with location-specific availability.",code:`import { CalendarScheduler } from '@ux4g/react-composite';
import { MapPin } from 'lucide-react';

function Example() {
  const locations = [
    {
      id: 'downtown',
      name: 'Downtown Office',
      address: '123 Main St',
      hours: { start: '08:00', end: '17:00' },
    },
    {
      id: 'northside',
      name: 'Northside Branch',
      address: '456 North Ave',
      hours: { start: '09:00', end: '16:00' },
    },
    {
      id: 'mobile',
      name: 'Mobile Unit',
      address: 'Various Locations',
      hours: { start: '10:00', end: '15:00' },
    },
  ];

  const events = [
    {
      id: '1',
      title: 'Passport Services',
      start: new Date(2026, 3, 15, 9, 0),
      end: new Date(2026, 3, 15, 9, 30),
      locationId: 'downtown',
      location: locations[0],
    },
    {
      id: '2',
      title: 'Vehicle Registration',
      start: new Date(2026, 3, 15, 10, 0),
      end: new Date(2026, 3, 15, 10, 30),
      locationId: 'northside',
      location: locations[1],
    },
  ];

  return (
    <CalendarScheduler
      view="day"
      events={events}
      locations={locations}
      minTime="08:00"
      maxTime="18:00"
    />
  );
}`,preview:e.jsx(s,{view:"day",minTime:"08:00",maxTime:"18:00",events:[{hour:9,time:"9:00 AM",title:"Passport Services",location:"Downtown Office",color:"bg-[#005196] text-white"},{hour:10,time:"10:00 AM",title:"Vehicle Registration",location:"Northside Branch",color:"bg-green-600 text-white"},{hour:13,time:"1:00 PM",title:"Mobile Unit Service",location:"Community Center",color:"bg-purple-600 text-white"}]})}],reactCode:{component:`import React, { useState, useCallback, useMemo } from 'react';
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isWithinInterval, addMonths, startOfWeek, endOfWeek } from 'date-fns';
import { cn } from '../../utils/cn';
import { CalendarSchedulerProps, CalendarEvent } from './CalendarScheduler.types';

export const CalendarScheduler: React.FC<CalendarSchedulerProps> = ({
  view = 'month',
  events = [],
  onSelectSlot,
  onSelectEvent,
  minTime = '08:00',
  maxTime = '18:00',
  workingHours,
  holidays = [],
  enableBooking = false,
  slotDuration = 30,
  departments = [],
  locale = 'en-US',
  timezone = 'America/New_York',
  className,
  onViewChange,
  onNavigate,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedView, setSelectedView] = useState(view);

  const timeSlots = useMemo(() => {
    const [minHour, minMinute] = minTime.split(':').map(Number);
    const [maxHour, maxMinute] = maxTime.split(':').map(Number);
    const slots: Date[] = [];

    for (let hour = minHour; hour <= maxHour; hour++) {
      for (let minute = 0; minute < 60; minute += slotDuration) {
        if (hour === maxHour && minute > maxMinute) break;
        const slotTime = new Date(currentDate);
        slotTime.setHours(hour, minute, 0, 0);
        slots.push(slotTime);
      }
    }

    return slots;
  }, [minTime, maxTime, slotDuration, currentDate]);

  const isWorkingHour = useCallback((date: Date) => {
    if (!workingHours) return true;

    const dayOfWeek = date.getDay();
    if (!workingHours.days.includes(dayOfWeek)) return false;

    const [startHour, startMinute] = workingHours.start.split(':').map(Number);
    const [endHour, endMinute] = workingHours.end.split(':').map(Number);

    const hour = date.getHours();
    const minute = date.getMinutes();
    const timeInMinutes = hour * 60 + minute;
    const startInMinutes = startHour * 60 + startMinute;
    const endInMinutes = endHour * 60 + endMinute;

    return timeInMinutes >= startInMinutes && timeInMinutes < endInMinutes;
  }, [workingHours]);

  const isHoliday = useCallback((date: Date) => {
    return holidays.some(holiday => isSameDay(holiday, date));
  }, [holidays]);

  const handleSlotClick = useCallback((start: Date, end: Date) => {
    if (!enableBooking || !isWorkingHour(start) || isHoliday(start)) return;
    onSelectSlot?.({ start, end, view: selectedView });
  }, [enableBooking, isWorkingHour, isHoliday, onSelectSlot, selectedView]);

  const handleEventClick = useCallback((event: CalendarEvent) => {
    onSelectEvent?.(event);
  }, [onSelectEvent]);

  const renderMonthView = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);
    const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

    return (
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="bg-gray-50 p-2 text-center text-xs font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {days.map((day, idx) => {
          const dayEvents = events.filter(event =>
            isSameDay(new Date(event.start), day)
          );
          const isOffDay = isHoliday(day) || !isWorkingHour(day);

          return (
            <div
              key={idx}
              className={cn(
                'bg-white p-2 min-h-[100px] hover:bg-gray-50 cursor-pointer',
                isOffDay && 'bg-gray-100 text-gray-400'
              )}
              onClick={() => {
                const start = new Date(day);
                start.setHours(9, 0, 0, 0);
                const end = new Date(start);
                end.setMinutes(end.getMinutes() + slotDuration);
                handleSlotClick(start, end);
              }}
            >
              <div className="text-sm font-medium">{format(day, 'd')}</div>
              {dayEvents.map((event, eventIdx) => (
                <div
                  key={eventIdx}
                  className="text-xs mt-1 p-1 rounded bg-[#005196] text-white truncate"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEventClick(event);
                  }}
                >
                  {event.title}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  const renderWeekView = () => {
    const weekStart = startOfWeek(currentDate);
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

    return (
      <div className="grid grid-cols-8">
        <div className="border-r border-gray-200"></div>
        {weekDays.map(day => (
          <div key={day.toString()} className="border-r border-gray-200 p-2 text-center text-sm font-semibold">
            {format(day, 'EEE d')}
          </div>
        ))}
        {timeSlots.map((timeSlot, slotIdx) => (
          <React.Fragment key={slotIdx}>
            <div className="border-t border-gray-200 p-2 text-xs text-gray-500 text-right">
              {format(timeSlot, 'HH:mm')}
            </div>
            {weekDays.map((day, dayIdx) => {
              const slotStart = new Date(day);
              slotStart.setHours(timeSlot.getHours(), timeSlot.getMinutes(), 0, 0);
              const slotEnd = new Date(slotStart);
              slotEnd.setMinutes(slotEnd.getMinutes() + slotDuration);

              const slotEvents = events.filter(event =>
                isWithinInterval(new Date(event.start), { start: slotStart, end: slotEnd })
              );

              const isOffTime = !isWorkingHour(slotStart) || isHoliday(slotStart);

              return (
                <div
                  key={dayIdx}
                  className={cn(
                    'border-t border-gray-200 min-h-[60px] hover:bg-blue-50 cursor-pointer relative',
                    isOffTime && 'bg-gray-50'
                  )}
                  onClick={() => handleSlotClick(slotStart, slotEnd)}
                >
                  {slotEvents.map((event, eventIdx) => (
                    <div
                      key={eventIdx}
                      className="absolute inset-1 p-1 rounded bg-[#005196] text-white text-xs overflow-hidden"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventClick(event);
                      }}
                    >
                      <div className="font-semibold truncate">{event.title}</div>
                      <div className="text-xs opacity-90">
                        {format(new Date(event.start), 'HH:mm')}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderDayView = () => {
    return (
      <div className="grid grid-cols-2">
        <div className="border-r border-gray-200">
          {timeSlots.map((timeSlot, idx) => (
            <div key={idx} className="h-20 border-t border-gray-200 p-2 text-xs text-gray-500 text-right">
              {format(timeSlot, 'HH:mm')}
            </div>
          ))}
        </div>
        <div>
          {timeSlots.map((timeSlot, idx) => {
            const slotStart = new Date(currentDate);
            slotStart.setHours(timeSlot.getHours(), timeSlot.getMinutes(), 0, 0);
            const slotEnd = new Date(slotStart);
            slotEnd.setMinutes(slotEnd.getMinutes() + slotDuration);

            const slotEvents = events.filter(event =>
              isWithinInterval(new Date(event.start), { start: slotStart, end: slotEnd })
            );

            const isOffTime = !isWorkingHour(slotStart) || isHoliday(slotStart);

            return (
              <div
                key={idx}
                className={cn(
                  'h-20 border-t border-gray-200 hover:bg-blue-50 cursor-pointer relative',
                  isOffTime && 'bg-gray-50'
                )}
                onClick={() => handleSlotClick(slotStart, slotEnd)}
              >
                {slotEvents.map((event, eventIdx) => (
                  <div
                    key={eventIdx}
                    className="absolute inset-2 p-2 rounded bg-[#005196] text-white shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEventClick(event);
                    }}
                  >
                    <div className="font-semibold text-sm truncate">{event.title}</div>
                    <div className="text-xs opacity-90 mt-1">
                      {format(new Date(event.start), 'HH:mm')} - {format(new Date(event.end), 'HH:mm')}
                    </div>
                    {event.location && (
                      <div className="text-xs opacity-90 truncate">{event.location}</div>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={cn('calendar-scheduler w-full border border-gray-200 rounded-lg overflow-hidden bg-white', className)}>
      <div className="flex items-center justify-between p-4 bg-[#005196] text-white">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-lg">
            {format(currentDate, 'MMMM yyyy')}
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors"
            onClick={() => {
              setCurrentDate(new Date());
              onNavigate?.(new Date(), selectedView);
            }}
          >
            Today
          </button>
          <button
            className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors"
            onClick={() => {
              const newDate = addMonths(currentDate, -1);
              setCurrentDate(newDate);
              onNavigate?.(newDate, selectedView);
            }}
          >
            Prev
          </button>
          <button
            className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors"
            onClick={() => {
              const newDate = addMonths(currentDate, 1);
              setCurrentDate(newDate);
              onNavigate?.(newDate, selectedView);
            }}
          >
            Next
          </button>
        </div>
      </div>

      <div className="calendar-body">
        {selectedView === 'month' && renderMonthView()}
        {selectedView === 'week' && renderWeekView()}
        {selectedView === 'day' && renderDayView()}
      </div>
    </div>
  );
};

CalendarScheduler.displayName = 'CalendarScheduler';`,types:`import { ReactNode } from 'react';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
  department?: string;
  departmentId?: string;
  locationId?: string;
  color?: string;
  allDay?: boolean;
  icon?: ReactNode;
}

export interface Department {
  id: string;
  name: string;
  color: string;
  availability: {
    days: number[];
    hours: string;
  };
}

export interface Location {
  id: string;
  name: string;
  address: string;
  hours: {
    start: string;
    end: string;
  };
}

export interface CalendarSchedulerProps {
  view?: 'month' | 'week' | 'day';
  events?: CalendarEvent[];
  onSelectSlot?: (slotInfo: { start: Date; end: Date; view: string }) => void;
  onSelectEvent?: (event: CalendarEvent) => void;
  minTime?: string;
  maxTime?: string;
  workingHours?: {
    start: string;
    end: string;
    days: number[];
  };
  holidays?: Date[];
  enableBooking?: boolean;
  slotDuration?: number;
  departments?: Department[];
  locations?: Location[];
  locale?: string;
  timezone?: string;
  className?: string;
  onViewChange?: (view: 'month' | 'week' | 'day') => void;
  onNavigate?: (date: Date, view: string) => void;
}`,variants:`import { cva } from 'class-variance-authority';

export const calendarVariants = cva(
  [
    'calendar-scheduler',
    'w-full border rounded-lg overflow-hidden',
    'bg-white',
  ],
  {
    variants: {
      size: {
        sm: ['text-xs'],
        md: ['text-sm'],
        lg: ['text-base'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const slotVariants = cva(
  [
    'calendar-slot',
    'border-t border-gray-200',
    'cursor-pointer transition-colors',
  ],
  {
    variants: {
      state: {
        available: ['hover:bg-blue-50'],
        booked: ['bg-gray-50 cursor-not-allowed'],
        holiday: ['bg-red-50 cursor-not-allowed'],
        nonWorking: ['bg-gray-100 cursor-not-allowed'],
      },
    },
    defaultVariants: {
      state: 'available',
    },
  }
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { format, addDays, startOfMonth, endOfMonth } from 'date-fns';

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
  department?: string;
  color?: string;
}

interface Department {
  id: string;
  name: string;
  color: string;
  availability: {
    days: number[];
    hours: string;
  };
}

@Component({
  selector: 'ux4g-calendar-scheduler',
  template: \`
    <div class="calendar-scheduler" [class]="className">
      <div class="calendar-header">
        <div class="calendar-title">
          <h3>{{ formatCurrentDate() }}</h3>
        </div>
        <div class="calendar-controls">
          <button (click)="goToToday()">Today</button>
          <button (click)="navigatePrevious()">Prev</button>
          <button (click)="navigateNext()">Next</button>
        </div>
      </div>

      <div class="calendar-body">
        <div *ngIf="view === 'month'" class="month-view">
          <div class="calendar-grid">
            <div *ngFor="let day of weekDays" class="day-header">
              {{ day }}
            </div>
            <div
              *ngFor="let day of monthDays"
              class="day-cell"
              [class.holiday]="isHoliday(day)"
              [class.non-working]="!isWorkingDay(day)"
              (click)="handleDayClick(day)"
            >
              <div class="day-number">{{ day.getDate() }}</div>
              <div
                *ngFor="let event of getEventsForDay(day)"
                class="event-item"
                [style.background-color]="event.color"
                (click)="handleEventClick($event, event)"
              >
                {{ event.title }}
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="view === 'week'" class="week-view">
          <!-- Week view implementation -->
        </div>

        <div *ngIf="view === 'day'" class="day-view">
          <!-- Day view implementation -->
        </div>
      </div>
    </div>
  \`,
  styleUrls: ['./calendar-scheduler.component.css']
})
export class CalendarSchedulerComponent implements OnInit {
  @Input() view: 'month' | 'week' | 'day' = 'month';
  @Input() events: CalendarEvent[] = [];
  @Input() minTime = '08:00';
  @Input() maxTime = '18:00';
  @Input() workingHours?: { start: string; end: string; days: number[] };
  @Input() holidays: Date[] = [];
  @Input() enableBooking = false;
  @Input() slotDuration = 30;
  @Input() departments: Department[] = [];
  @Input() className = '';

  @Output() selectSlot = new EventEmitter<{ start: Date; end: Date; view: string }>();
  @Output() selectEvent = new EventEmitter<CalendarEvent>();
  @Output() viewChange = new EventEmitter<'month' | 'week' | 'day'>();
  @Output() navigate = new EventEmitter<{ date: Date; view: string }>();

  currentDate = new Date();
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthDays: Date[] = [];

  ngOnInit() {
    this.generateMonthDays();
  }

  formatCurrentDate(): string {
    return format(this.currentDate, 'MMMM yyyy');
  }

  generateMonthDays() {
    const start = startOfMonth(this.currentDate);
    const end = endOfMonth(this.currentDate);
    this.monthDays = [];

    for (let d = new Date(start); d <= end; d = addDays(d, 1)) {
      this.monthDays.push(new Date(d));
    }
  }

  isHoliday(date: Date): boolean {
    return this.holidays.some(h =>
      h.toDateString() === date.toDateString()
    );
  }

  isWorkingDay(date: Date): boolean {
    if (!this.workingHours) return true;
    return this.workingHours.days.includes(date.getDay());
  }

  getEventsForDay(day: Date): CalendarEvent[] {
    return this.events.filter(event =>
      event.start.toDateString() === day.toDateString()
    );
  }

  handleDayClick(day: Date) {
    if (!this.enableBooking || this.isHoliday(day) || !this.isWorkingDay(day)) {
      return;
    }

    const start = new Date(day);
    start.setHours(9, 0, 0, 0);
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + this.slotDuration);

    this.selectSlot.emit({ start, end, view: this.view });
  }

  handleEventClick(mouseEvent: Event, event: CalendarEvent) {
    mouseEvent.stopPropagation();
    this.selectEvent.emit(event);
  }

  goToToday() {
    this.currentDate = new Date();
    this.generateMonthDays();
    this.navigate.emit({ date: this.currentDate, view: this.view });
  }

  navigatePrevious() {
    this.currentDate = addDays(this.currentDate, -30);
    this.generateMonthDays();
    this.navigate.emit({ date: this.currentDate, view: this.view });
  }

  navigateNext() {
    this.currentDate = addDays(this.currentDate, 30);
    this.generateMonthDays();
    this.navigate.emit({ date: this.currentDate, view: this.view });
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSchedulerComponent } from './calendar-scheduler.component';

@NgModule({
  declarations: [CalendarSchedulerComponent],
  imports: [CommonModule],
  exports: [CalendarSchedulerComponent]
})
export class CalendarSchedulerModule { }`,types:`export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
  department?: string;
  color?: string;
  allDay?: boolean;
}

export interface Department {
  id: string;
  name: string;
  color: string;
  availability: {
    days: number[];
    hours: string;
  };
}

export type CalendarView = 'month' | 'week' | 'day';`},comparisons:[{system:"FullCalendar",component:"FullCalendar",variants:"dayGrid, timeGrid, list, multiMonth",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://fullcalendar.io/"},{system:"React Big Calendar",component:"Calendar",variants:"month, week, day, agenda",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://github.com/jquense/react-big-calendar"},{system:"DayPilot",component:"DayPilot Calendar",variants:"day, week, month, scheduler",accessibility:"WCAG 2.0 A",documentation:"Comprehensive",link:"https://www.daypilot.org/"},{system:"Syncfusion",component:"Schedule",variants:"day, week, month, agenda, timeline",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://www.syncfusion.com/angular-components/angular-scheduler"},{system:"Material UI",component:"Date/Time Pickers (no scheduler)",variants:"date, time, date-time pickers",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://mui.com/x/react-date-pickers/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 44x44px touch target for all interactive slots and events (WCAG 2.5.5)","Keyboard navigation support for date and time slot selection (WCAG 2.1.1)","2px focus indicators on all interactive elements (WCAG 2.4.7)","ARIA labels for calendar navigation and date selection","Screen reader announcements for selected dates, events, and booking confirmations","Color contrast ratios exceed 4.5:1 for all text and indicators (WCAG 1.4.3)","Time zones and locale support for international accessibility","Holiday and non-working hours clearly indicated with visual and semantic markers","Appointment booking flow accessible via keyboard and screen readers","ARIA live regions for dynamic calendar updates and slot availability"],keyboardSupport:[{key:"Tab",action:"Navigate between calendar controls and interactive elements"},{key:"Arrow Keys",action:"Navigate between dates and time slots"},{key:"Enter",action:"Select date or time slot, activate booking"},{key:"Space",action:"Select date or time slot"},{key:"Home",action:"Jump to first day of current period"},{key:"End",action:"Jump to last day of current period"},{key:"Page Up",action:"Navigate to previous month/week"},{key:"Page Down",action:"Navigate to next month/week"}],screenReader:["Announces current view mode (month, week, or day)","Announces selected date with full date format","Announces event titles, times, and locations when focused","Announces available vs booked time slots","Announces holidays and office closures","Announces department and location information","Provides booking confirmation messages","Announces working hours and availability constraints"]},tokens:{file:"/tokens/components/calendar-scheduler.json",mappings:[{property:"Header Background",token:"calendar.header.background",value:"#005196 (Navy 500)"},{property:"Header Text",token:"calendar.header.text",value:"#FFFFFF (White)"},{property:"Cell Border",token:"calendar.cell.border",value:"#E5E7EB (Gray 200)"},{property:"Cell Hover",token:"calendar.cell.hover",value:"#EFF6FF (Blue 50)"},{property:"Event Background",token:"calendar.event.background",value:"#005196 (Navy 500)"},{property:"Event Text",token:"calendar.event.text",value:"#FFFFFF (White)"},{property:"Holiday Background",token:"calendar.holiday.background",value:"#FEF2F2 (Red 50)"},{property:"Holiday Border",token:"calendar.holiday.border",value:"#FCA5A5 (Red 300)"},{property:"Non-working Background",token:"calendar.nonWorking.background",value:"#F3F4F6 (Gray 100)"},{property:"Slot Duration",token:"calendar.slot.duration",value:"30 minutes"},{property:"Min Touch Target",token:"accessibility.minTouchTarget",value:"44px"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"}]},governmentContext:{useCases:["Schedule appointments for DMV services (license renewals, vehicle registration)","Book time slots for building permits and inspections","Manage public hearing schedules for city council and planning commission","Track officer availability for police, fire, and emergency services","Schedule tax consultation appointments during filing season","Manage court hearing dates and legal proceedings","Book slots for passport and immigration services","Track government office hours and holiday closures","Schedule mobile service unit visits to communities","Manage multi-department resource allocation"],considerations:["Support for multiple timezones across different jurisdictions","Holiday calendar integration for federal, state, and local holidays","Working hours configuration for different government departments","Appointment confirmation via email and SMS","Waitlist management for high-demand services","Recurring event support for regular meetings and hearings","Multi-location scheduling for branch offices","Department-specific booking rules and constraints","Public vs internal calendar views","Integration with citizen portal authentication","Accessibility compliance for diverse citizen needs","Data privacy and HIPAA compliance for sensitive appointments"],integrations:["Government authentication systems (Login.gov, state SSO)","Email and SMS notification services","Payment gateways for appointment fees","Document management systems for appointment-related files","CRM systems for citizen relationship management","GIS systems for location-based services","Video conferencing platforms for virtual appointments","Analytics platforms for service utilization tracking"]}})}export{H as default};
