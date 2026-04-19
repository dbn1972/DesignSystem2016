import React from "react";
import { Link } from "react-router";
import { Calendar, Shield, CheckCircle, AlertCircle, Info, XCircle, ArrowRight, ChevronRight, FileText, Globe, Code, Settings, HelpCircle, Database, Check, X, Clock, MapPin, User, Phone, Mail, RefreshCw, Download, Copy } from "lucide-react";

export default function AppointmentBookingPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center">
                  <Calendar size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Operational Service Pattern</div>
                  <h1 className="text-3xl font-bold text-foreground">Appointment Booking</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Standard pattern for scheduling appointments with government offices, service centers, or officials. 
                Includes slot availability display, date and time selection, confirmation with calendar integration, 
                rescheduling, cancellation flows, and automated reminders.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-011-01</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Version: <span className="font-bold text-foreground">1.0.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Updated: <span className="font-bold text-foreground">April 2026</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 dark:text-green-300 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded text-orange-700 font-bold text-xs text-center uppercase">
                Conformance<br/>Recommended
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "flow", label: "Booking Flow" },
              { id: "screens", label: "Example Screens" },
              { id: "slots", label: "Slot Management" },
              { id: "confirmation", label: "Confirmation" },
              { id: "rescheduling", label: "Reschedule/Cancel" },
              { id: "accessibility", label: "Accessibility" },
              { id: "implementation", label: "Implementation" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-16">
            <OverviewSection />
            <BookingFlow />
            <ExampleScreens />
            <SlotManagement />
            <ConfirmationSection />
            <RescheduleCancel />
            <AccessibilitySection />
            <ImplementationSection />
            <ApptBookingCodeDownloads />
          </div>

          {/* Sidebar - 3 columns */}
          <div className="col-span-3 space-y-6 sticky top-24 self-start">
            <QuickReference />
            <UseCases />
            <RelatedPatterns />
            <Resources />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Appointment Booking Pattern</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== OVERVIEW SECTION ====================

function OverviewSection() {
  return (
    <section id="overview" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Pattern Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Purpose */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Purpose</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Enable citizens to schedule appointments with government offices, service centers, or officials 
              for in-person services, document verification, consultations, or other requirements without 
              physical queuing or uncertainty.
            </p>
            <div className="space-y-2">
              <PurposeItem text="Reduce physical queues and waiting times" />
              <PurposeItem text="Optimize resource utilization for offices" />
              <PurposeItem text="Provide certainty and convenience to citizens" />
              <PurposeItem text="Enable tracking and rescheduling" />
              <PurposeItem text="Send automated reminders" />
            </div>
          </div>
        </div>

        {/* When to Use */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">When to Use</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3 text-sm">
              <UseItem 
                type="yes" 
                text="In-person document verification appointments" 
              />
              <UseItem 
                type="yes" 
                text="Service center visits (passport, licenses, etc.)" 
              />
              <UseItem 
                type="yes" 
                text="Consultations with officials or counselors" 
              />
              <UseItem 
                type="yes" 
                text="Scheduled inspections or assessments" 
              />
              <UseItem 
                type="yes" 
                text="Interview or biometric capture sessions" 
              />
            </div>
          </div>
        </div>

        {/* When NOT to Use */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">When NOT to Use</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3 text-sm">
              <UseItem 
                type="no" 
                text="Emergency services (ambulance, police, fire)" 
              />
              <UseItem 
                type="no" 
                text="Walk-in only services with no scheduling" 
              />
              <UseItem 
                type="no" 
                text="Fully digital services with no in-person component" 
              />
              <UseItem 
                type="no" 
                text="First-come-first-serve token-based queues" 
              />
              <UseItem 
                type="no" 
                text="Services requiring immediate resolution" 
              />
            </div>
          </div>
        </div>

        {/* User Goals */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">User Goals</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3 text-sm">
              <GoalItem 
                icon={<Calendar size={16} />}
                text="See available dates and times clearly" 
              />
              <GoalItem 
                icon={<MapPin size={16} />}
                text="Know exact location and what to bring" 
              />
              <GoalItem 
                icon={<Clock size={16} />}
                text="Receive confirmation and reminders" 
              />
              <GoalItem 
                icon={<RefreshCw size={16} />}
                text="Easily reschedule if plans change" 
              />
              <GoalItem 
                icon={<CheckCircle size={16} />}
                text="Have proof of appointment booking" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PurposeItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

function UseItem({ type, text }: { type: "yes" | "no"; text: string }) {
  return (
    <div className="flex items-start gap-2">
      {type === "yes" ? (
        <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      ) : (
        <X size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
      )}
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function GoalItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-primary mt-0.5">{icon}</div>
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== BOOKING FLOW ====================

function BookingFlow() {
  return (
    <section id="flow" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Appointment Booking Flow</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
        <div className="space-y-4">
          {/* Flow Steps */}
          <FlowStep 
            number="1"
            title="Entry Point"
            description="User initiates appointment booking"
            action="Clicks 'Book Appointment' from service page"
            color="gray"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="2"
            title="Select Service/Location"
            description="Choose service type and office location"
            action="User selects from dropdown or search"
            color="blue"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="3"
            title="View Available Slots"
            description="System shows calendar with available dates"
            action="Display next 30 days, highlight available dates"
            color="blue"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="4"
            title="Select Date & Time"
            description="User chooses preferred date and time slot"
            action="Click on date, then select time slot"
            color="blue"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="5"
            title="Provide Contact Details"
            description="User enters name, mobile, email for confirmation"
            action="Fill required fields (auto-populate if logged in)"
            color="blue"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="6"
            title="Review & Confirm"
            description="User reviews appointment details"
            action="Check date, time, location, contact info"
            color="blue"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="7"
            title="Booking Confirmed"
            description="System confirms appointment and sends notifications"
            action="Show confirmation screen, send SMS/email, add to calendar"
            color="green"
          />
          
          <FlowConnector />
          
          <FlowStep 
            number="8"
            title="Reminders Sent"
            description="Automated reminders before appointment"
            action="Send reminder 24 hours and 2 hours before"
            color="green"
          />
        </div>

        {/* Flow Legend */}
        <div className="mt-8 pt-6 border-t-2 border-border">
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
              <span className="text-muted-foreground">Entry Point</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-sm"></div>
              <span className="text-muted-foreground">User Action</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
              <span className="text-muted-foreground">System Confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowStep({ number, title, description, action, color }: { 
  number: string; 
  title: string; 
  description: string; 
  action: string;
  color: "gray" | "blue" | "green";
}) {
  const bgColor = color === "gray" ? "bg-muted" : color === "blue" ? "bg-blue-50" : "bg-green-50";
  const borderColor = color === "gray" ? "border-border" : color === "blue" ? "border-primary" : "border-green-600";
  const textColor = color === "gray" ? "text-muted-foreground" : color === "blue" ? "text-primary" : "text-green-700";

  return (
    <div className={`${bgColor} border-2 ${borderColor} rounded-lg p-4`}>
      <div className="flex items-start gap-4">
        <div className={`w-8 h-8 rounded-full ${borderColor.replace('border-', 'bg-')} text-white flex items-center justify-center font-bold text-sm flex-shrink-0`}>
          {number}
        </div>
        <div className="flex-1">
          <h3 className={`font-bold ${textColor} mb-1`}>{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <div className="text-xs text-muted-foreground italic">→ {action}</div>
        </div>
      </div>
    </div>
  );
}

function FlowConnector() {
  return (
    <div className="flex items-center justify-center py-2">
      <ArrowRight size={24} className="text-muted-foreground rotate-90" />
    </div>
  );
}

// ==================== EXAMPLE SCREENS ====================

function ExampleScreens() {
  return (
    <section id="screens" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Example Screens</h2>
        <p className="text-muted-foreground mt-2">Representative appointment booking screens</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calendar View */}
        <ExampleScreen
          title="Calendar with Available Slots"
          state="Date selection"
          stateColor="blue"
        >
          <AppointmentScreenExample type="calendar" />
        </ExampleScreen>

        {/* Time Slot Selection */}
        <ExampleScreen
          title="Time Slot Selection"
          state="Choose time"
          stateColor="blue"
        >
          <AppointmentScreenExample type="timeslots" />
        </ExampleScreen>

        {/* Confirmation */}
        <ExampleScreen
          title="Booking Confirmed"
          state="Success"
          stateColor="green"
        >
          <AppointmentScreenExample type="confirmed" />
        </ExampleScreen>

        {/* My Appointments */}
        <ExampleScreen
          title="My Appointments List"
          state="Management view"
          stateColor="gray"
        >
          <AppointmentScreenExample type="list" />
        </ExampleScreen>
      </div>
    </section>
  );
}

function ExampleScreen({ 
  title, 
  state, 
  stateColor, 
  children 
}: { 
  title: string; 
  state: string; 
  stateColor: "gray" | "blue" | "green";
  children: React.ReactNode;
}) {
  const colorMap = {
    gray: "bg-muted text-muted-foreground",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700"
  };

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm mb-1">{title}</h3>
        <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${colorMap[stateColor]}`}>
          {state}
        </div>
      </div>
      <div className="p-6 bg-background">
        {children}
      </div>
    </div>
  );
}

function AppointmentScreenExample({ type }: { type: string }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6 max-w-md mx-auto">
      {type === "calendar" && (
        <>
          <div className="mb-4">
            <h3 className="font-bold text-foreground mb-2">Select Date</h3>
            <p className="text-sm text-muted-foreground">Choose a date for your appointment</p>
          </div>

          {/* Month Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-border">
            <button aria-label="Action" className="p-2 hover:bg-muted rounded"><ChevronRight size={20} className="rotate-180 text-muted-foreground" /></button>
            <h3 className="font-bold text-foreground">April 2026</h3>
            <button aria-label="Action" className="p-2 hover:bg-muted rounded"><ChevronRight size={20} className="text-muted-foreground" /></button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
              <div key={day} className="text-center text-xs font-bold text-muted-foreground py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for alignment */}
            {[1, 2].map(i => (
              <div key={`empty-${i}`} className="aspect-square"></div>
            ))}
            
            {/* Days */}
            {[...Array(28)].map((_, i) => {
              const day = i + 1;
              const isAvailable = [9, 10, 11, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25].includes(day);
              const isSelected = day === 15;
              
              return (
                <button
                  key={day}
                  disabled={!isAvailable}
                  className={`
                    aspect-square rounded text-sm font-medium
                    ${isSelected ? 'bg-primary text-white' : ''}
                    ${isAvailable && !isSelected ? 'bg-green-50 text-foreground hover:bg-green-100' : ''}
                    ${!isAvailable ? 'bg-muted text-muted-foreground cursor-not-allowed' : ''}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded text-xs">
            <div className="flex items-center gap-2 mb-2">
              <Info size={14} className="text-blue-600" />
              <span className="font-bold text-blue-800 dark:text-blue-300">Legend</span>
            </div>
            <div className="space-y-1 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-muted border border-border rounded"></div>
                <span>Fully booked</span>
              </div>
            </div>
          </div>
        </>
      )}

      {type === "timeslots" && (
        <>
          <div className="mb-4">
            <h3 className="font-bold text-foreground mb-1">Select Time Slot</h3>
            <p className="text-sm text-muted-foreground">Wednesday, April 15, 2026</p>
          </div>

          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-bold text-muted-foreground mb-2">Morning</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm font-medium hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20">
                  09:00 AM
                </button>
                <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm font-medium hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20">
                  10:00 AM
                </button>
                <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm font-medium hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20">
                  11:00 AM
                </button>
                <button disabled className="px-4 py-3 border-2 border-border bg-muted rounded text-sm font-medium text-muted-foreground cursor-not-allowed">
                  12:00 PM<br/>
                  <span className="text-xs">Full</span>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-muted-foreground mb-2">Afternoon</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <button className="px-4 py-3 border-2 border-primary bg-blue-50 dark:bg-blue-950/30 rounded text-sm font-medium text-primary">
                  02:00 PM<br/>
                  <span className="text-xs">Selected</span>
                </button>
                <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm font-medium hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20">
                  03:00 PM
                </button>
                <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm font-medium hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20">
                  04:00 PM
                </button>
                <button disabled className="px-4 py-3 border-2 border-border bg-muted rounded text-sm font-medium text-muted-foreground cursor-not-allowed">
                  05:00 PM<br/>
                  <span className="text-xs">Full</span>
                </button>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 px-4 py-3 bg-primary text-white font-bold rounded text-sm">
            Continue
          </button>
        </>
      )}

      {type === "confirmed" && (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h3 className="font-bold text-foreground text-lg mb-2">Appointment Confirmed</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Your appointment has been successfully booked
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 mb-6 text-left">
            <h4 className="font-bold text-foreground text-sm mb-3">Appointment Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Calendar size={16} className="text-blue-600 mt-0.5" />
                <div>
                  <div className="font-bold text-foreground">Wednesday, April 15, 2026</div>
                  <div className="text-muted-foreground">02:00 PM - 03:00 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-600 mt-0.5" />
                <div className="text-muted-foreground">
                  District Collectorate Office<br />
                  Mumbai, Maharashtra
                </div>
              </div>
              <div className="flex items-start gap-2">
                <User size={16} className="text-blue-600 mt-0.5" />
                <div className="text-muted-foreground">
                  Rajesh Kumar<br />
                  +91 98765 43210
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
              <div className="text-xs font-bold text-muted-foreground mb-1">Booking Reference</div>
              <div className="font-mono text-sm font-bold text-foreground">APT-2026-04-15-0234</div>
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded text-sm">
              Add to Calendar
            </button>
            <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm">
              Download Confirmation
            </button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            You will receive SMS and email reminders 24 hours and 2 hours before your appointment
          </p>
        </div>
      )}

      {type === "list" && (
        <>
          <div className="mb-4">
            <h3 className="font-bold text-foreground">My Appointments</h3>
          </div>

          <div className="space-y-3">
            {/* Upcoming Appointment */}
            <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs font-bold text-green-700 dark:text-green-400 mb-1">UPCOMING</div>
                  <div className="font-bold text-foreground">Document Verification</div>
                </div>
                <Calendar size={20} className="text-green-600" />
              </div>
              <div className="text-sm text-muted-foreground space-y-1 mb-3">
                <div className="font-bold">Wed, Apr 15, 2026 • 02:00 PM</div>
                <div>District Collectorate, Mumbai</div>
                <div className="text-xs">Ref: APT-2026-04-15-0234</div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 border-2 border-border bg-card text-muted-foreground font-bold rounded text-xs">
                  Reschedule
                </button>
                <button className="flex-1 px-3 py-2 border-2 border-red-300 bg-card text-red-700 dark:text-red-400 font-bold rounded text-xs">
                  Cancel
                </button>
              </div>
            </div>

            {/* Past Appointment */}
            <div className="bg-muted border-2 border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs font-bold text-muted-foreground mb-1">COMPLETED</div>
                  <div className="font-bold text-muted-foreground">License Renewal</div>
                </div>
                <CheckCircle size={20} className="text-muted-foreground" />
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Mon, Mar 10, 2026 • 11:00 AM</div>
                <div>RTO Office, Andheri</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ==================== SLOT MANAGEMENT ====================

function SlotManagement() {
  return (
    <section id="slots" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Slot Management Guidelines</h2>
        <p className="text-muted-foreground mt-2">Best practices for managing appointment slots</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Slot Configuration</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <SlotItem text="Define standard slot duration (typically 15-60 minutes)" />
            <SlotItem text="Set buffer time between appointments (5-10 minutes)" />
            <SlotItem text="Configure working hours and lunch breaks" />
            <SlotItem text="Block slots for holidays and special events" />
            <SlotItem text="Set maximum appointments per slot" />
            <SlotItem text="Enable overbooking limits if needed" />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Availability Display</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <SlotItem text="Show at least 30 days of future availability" />
            <SlotItem text="Clearly mark fully booked dates" />
            <SlotItem text="Indicate partially available slots" />
            <SlotItem text="Use color coding for quick scanning" />
            <SlotItem text="Show real-time slot availability" />
            <SlotItem text="Display office location and hours" />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden col-span-2">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Booking Rules</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 text-sm">
                <SlotItem text="Minimum advance booking: 1 day (configurable)" />
                <SlotItem text="Maximum advance booking: 30-90 days" />
                <SlotItem text="One active appointment per user per service" />
                <SlotItem text="Prevent duplicate bookings in same time window" />
              </div>
              <div className="space-y-3 text-sm">
                <SlotItem text="Allow rescheduling up to 24 hours before" />
                <SlotItem text="Allow cancellation up to 4 hours before" />
                <SlotItem text="Track no-show rate per user" />
                <SlotItem text="Implement waitlist for fully booked slots" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlotItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== CONFIRMATION SECTION ====================

function ConfirmationSection() {
  return (
    <section id="confirmation" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Confirmation & Reminders</h2>
        <p className="text-muted-foreground mt-2">What to send and when</p>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Confirmation Elements</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <ConfirmationItem
              title="Immediate Confirmation"
              timing="Right after booking"
              channels={["On-screen message", "SMS", "Email"]}
              content="Appointment details, booking reference, date/time, location, contact info"
            />
            <ConfirmationItem
              title="Calendar Integration"
              timing="Immediate"
              channels={["ICS file download", "Google Calendar", "Outlook"]}
              content="Add to calendar button with all appointment details"
            />
            <ConfirmationItem
              title="First Reminder"
              timing="24 hours before"
              channels={["SMS", "Email", "In-app notification"]}
              content="Appointment tomorrow reminder with details and reschedule option"
            />
            <ConfirmationItem
              title="Final Reminder"
              timing="2 hours before"
              channels={["SMS", "Push notification"]}
              content="Your appointment is in 2 hours, location, what to bring"
            />
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Required Information</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-foreground mb-3">Must Include:</h3>
              <div className="space-y-2">
                <InfoItem text="Booking reference number" />
                <InfoItem text="Date and time" />
                <InfoItem text="Office location and address" />
                <InfoItem text="Contact person (if applicable)" />
                <InfoItem text="Documents to bring" />
                <InfoItem text="Estimated duration" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Should Include:</h3>
              <div className="space-y-2">
                <InfoItem text="Google Maps link to location" />
                <InfoItem text="Parking information" />
                <InfoItem text="Public transport directions" />
                <InfoItem text="What to expect during visit" />
                <InfoItem text="Reschedule/cancel links" />
                <InfoItem text="Help desk contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConfirmationItem({ title, timing, channels, content }: {
  title: string;
  timing: string;
  channels: string[];
  content: string;
}) {
  return (
    <div className="bg-background border border-border rounded p-4">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-bold text-foreground">{title}</h3>
        <span className="text-xs font-bold text-muted-foreground bg-card px-2 py-1 rounded border border-border">
          {timing}
        </span>
      </div>
      <div className="mb-2">
        <span className="text-xs font-bold text-muted-foreground">Channels: </span>
        <span className="text-sm text-muted-foreground">{channels.join(", ")}</span>
      </div>
      <p className="text-sm text-muted-foreground">{content}</p>
    </div>
  );
}

function InfoItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== RESCHEDULE/CANCEL ====================

function RescheduleCancel() {
  return (
    <section id="rescheduling" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Reschedule & Cancellation</h2>
        <p className="text-muted-foreground mt-2">Self-service appointment management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Reschedule Flow</h3>
          </div>
          <div className="p-6 space-y-3">
            <RescheduleStep step="1" text="User clicks 'Reschedule' from confirmation email/SMS" />
            <RescheduleStep step="2" text="System shows current appointment details" />
            <RescheduleStep step="3" text="Display available alternative slots" />
            <RescheduleStep step="4" text="User selects new date/time" />
            <RescheduleStep step="5" text="Confirm rescheduling" />
            <RescheduleStep step="6" text="Release old slot, book new slot" />
            <RescheduleStep step="7" text="Send updated confirmation" />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Cancellation Flow</h3>
          </div>
          <div className="p-6 space-y-3">
            <RescheduleStep step="1" text="User clicks 'Cancel' from confirmation email/SMS" />
            <RescheduleStep step="2" text="Show appointment details to confirm" />
            <RescheduleStep step="3" text="Ask for cancellation reason (optional)" />
            <RescheduleStep step="4" text="Confirm cancellation action" />
            <RescheduleStep step="5" text="Release slot for others" />
            <RescheduleStep step="6" text="Send cancellation confirmation" />
            <RescheduleStep step="7" text="Offer to book new appointment" />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden col-span-2">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Business Rules</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-bold text-foreground mb-3">Rescheduling:</h3>
                <div className="space-y-2">
                  <InfoItem text="Allow up to 24 hours before appointment" />
                  <InfoItem text="Maximum 2 reschedules per booking" />
                  <InfoItem text="Must select future date/time" />
                  <InfoItem text="Send updated confirmation immediately" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Cancellation:</h3>
                <div className="space-y-2">
                  <InfoItem text="Allow up to 4 hours before appointment" />
                  <InfoItem text="Track no-show and cancellation patterns" />
                  <InfoItem text="Notify waitlisted users of opening" />
                  <InfoItem text="Retain cancellation record for audit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RescheduleStep({ step, text }: { step: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
        {step}
      </div>
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== ACCESSIBILITY SECTION ====================

function AccessibilitySection() {
  return (
    <section id="accessibility" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Accessibility Requirements</h2>
        <p className="text-muted-foreground mt-2">WCAG 2.1 AA compliance for appointment booking</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Calendar Accessibility</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem text="Keyboard navigation through calendar dates" />
            <AccessibilityItem text="Arrow keys to move between dates" />
            <AccessibilityItem text="Space/Enter to select date" />
            <AccessibilityItem text="Screen reader announces date and availability" />
            <AccessibilityItem text="High contrast mode support" />
            <AccessibilityItem text="Date format respects locale settings" />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Time Slot Selection</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityItem text="Tab through available time slots" />
            <AccessibilityItem text="Clear visual focus indicators" />
            <AccessibilityItem text="Disabled slots properly marked" />
            <AccessibilityItem text="Selected slot clearly differentiated" />
            <AccessibilityItem text="Time format in 12-hour and 24-hour options" />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden col-span-2">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">General Requirements</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 text-sm">
                <AccessibilityItem text="All forms have proper labels" />
                <AccessibilityItem text="Error messages clearly announced" />
                <AccessibilityItem text="Success confirmations announced" />
                <AccessibilityItem text="Loading states communicated" />
              </div>
              <div className="space-y-3 text-sm">
                <AccessibilityItem text="Sufficient color contrast (4.5:1)" />
                <AccessibilityItem text="Touch targets minimum 44x44 pixels" />
                <AccessibilityItem text="Support text resizing up to 200%" />
                <AccessibilityItem text="Provide text alternatives for icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessibilityItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== IMPLEMENTATION SECTION ====================

function ImplementationSection() {
  return (
    <section id="implementation" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Implementation Notes</h2>
        <p className="text-muted-foreground mt-2">Technical guidance for developers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Code size={18} />
              Frontend
            </h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <ImplementationItem text="Use date picker library with accessibility support" />
            <ImplementationItem text="Implement optimistic UI for slot selection" />
            <ImplementationItem text="Cache calendar data for offline viewing" />
            <ImplementationItem text="Debounce slot availability checks" />
            <ImplementationItem text="Show loading skeletons during data fetch" />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Database size={18} />
              Backend
            </h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <ImplementationItem text="Implement slot locking mechanism (2-5 min)" />
            <ImplementationItem text="Use database transactions for bookings" />
            <ImplementationItem text="Queue notification delivery" />
            <ImplementationItem text="Log all booking actions for audit" />
            <ImplementationItem text="Implement rate limiting per user" />
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden col-span-2">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-300 px-6 py-4">
            <h3 className="font-bold text-foreground">Key Considerations</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-bold text-foreground mb-3">Concurrency Handling:</h3>
                <div className="space-y-2">
                  <ImplementationItem text="Handle race conditions when multiple users select same slot" />
                  <ImplementationItem text="Implement slot versioning or row locking" />
                  <ImplementationItem text="Show real-time availability updates" />
                  <ImplementationItem text="Gracefully handle slot unavailability" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Notifications:</h3>
                <div className="space-y-2">
                  <ImplementationItem text="Use reliable message queue for reminders" />
                  <ImplementationItem text="Implement retry logic for failed deliveries" />
                  <ImplementationItem text="Track delivery status per notification" />
                  <ImplementationItem text="Allow users to manage notification preferences" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImplementationItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={14} className="text-primary mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}


// ==================== CODE DOWNLOADS ====================

const APPT_REACT_CODE = `import React, { useState, useMemo } from 'react';

interface TimeSlot { id: string; time: string; available: boolean; }

const MOCK_SLOTS: TimeSlot[] = [
  { id: '1', time: '09:00 AM', available: true }, { id: '2', time: '09:30 AM', available: true },
  { id: '3', time: '10:00 AM', available: false }, { id: '4', time: '10:30 AM', available: true },
  { id: '5', time: '11:00 AM', available: true }, { id: '6', time: '11:30 AM', available: false },
  { id: '7', time: '02:00 PM', available: true }, { id: '8', time: '02:30 PM', available: true },
  { id: '9', time: '03:00 PM', available: true }, { id: '10', time: '03:30 PM', available: false },
];

type Step = 'service' | 'date' | 'slot' | 'details' | 'confirmed';

export function AppointmentBookingPage() {
  const [step, setStep] = useState<Step>('service');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [bookingId, setBookingId] = useState('');

  const services = ['Passport Application', 'Aadhaar Enrollment', 'Driving License', 'Birth Certificate', 'Property Registration'];

  const availableSlots = useMemo(() => MOCK_SLOTS.filter(s => s.available), []);

  const handleConfirm = async () => {
    if (!name.trim() || !mobile.trim()) { setError('Name and mobile are required'); return; }
    if (!/^[6-9]\\d{9}$/.test(mobile)) { setError('Enter valid 10-digit mobile'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/appointments/book', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service, date, slot, name, mobile }),
      });
      if (!res.ok) { setError('Booking failed'); return; }
      setBookingId('BK-' + Date.now().toString(36).toUpperCase());
      setStep('confirmed');
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Book Appointment</h1>
        <p className="text-sm text-muted-foreground mb-6">Schedule a visit to a government service center</p>
        <div className="flex gap-1 mb-6">{['service','date','slot','details','confirmed'].map((s,i) => (<div key={s} className={\`flex-1 h-1.5 rounded \${['service','date','slot','details','confirmed'].indexOf(step) >= i ? 'bg-primary' : 'bg-muted'}\`} />))}</div>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
        {step === 'service' && (<div className="space-y-3">{services.map(s => (<button key={s} onClick={() => { setService(s); setStep('date'); }} className={\`w-full p-4 text-left rounded-xl border-2 transition-colors \${service === s ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}\`}><div className="font-semibold text-sm">{s}</div></button>))}</div>)}
        {step === 'date' && (<div className="space-y-4"><label className="block text-sm font-medium mb-1">Select Date</label><input type="date" value={date} onChange={e => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border border-border rounded-lg" /><div className="flex gap-3"><button onClick={() => setStep('service')} className="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button><button onClick={() => { if (!date) { setError('Select a date'); return; } setError(''); setStep('slot'); }} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Next</button></div></div>)}
        {step === 'slot' && (<div className="space-y-4"><p className="text-sm text-muted-foreground">Available slots for {date}</p><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">{MOCK_SLOTS.map(s => (<button key={s.id} disabled={!s.available} onClick={() => setSlot(s.time)} className={\`p-3 rounded-lg text-sm font-semibold transition-colors \${!s.available ? 'bg-muted text-muted-foreground cursor-not-allowed' : slot === s.time ? 'bg-primary text-primary-foreground' : 'border border-border hover:border-primary'}\`}>{s.time}</button>))}</div><div className="flex gap-3"><button onClick={() => setStep('date')} className="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button><button onClick={() => { if (!slot) { setError('Select a slot'); return; } setError(''); setStep('details'); }} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Next</button></div></div>)}
        {step === 'details' && (<div className="space-y-4"><div><label className="block text-sm font-medium mb-1">Full Name *</label><input value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" /></div><div><label className="block text-sm font-medium mb-1">Mobile *</label><input type="tel" value={mobile} onChange={e => setMobile(e.target.value)} maxLength={10} placeholder="+91" className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" /></div><div className="bg-muted rounded-xl p-4 text-sm space-y-1"><div><span className="text-muted-foreground">Service:</span> <span className="font-semibold">{service}</span></div><div><span className="text-muted-foreground">Date:</span> <span className="font-semibold">{date}</span></div><div><span className="text-muted-foreground">Time:</span> <span className="font-semibold">{slot}</span></div></div><div className="flex gap-3"><button onClick={() => setStep('slot')} className="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button><button onClick={handleConfirm} disabled={loading} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Booking...' : 'Confirm Booking'}</button></div></div>)}
        {step === 'confirmed' && (<div className="text-center py-6 space-y-4"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div><h2 className="text-xl font-bold text-foreground">Appointment Confirmed</h2><p className="text-muted-foreground">Booking ID: <span className="font-bold">{bookingId}</span></p><div className="bg-muted rounded-xl p-4 text-sm text-left space-y-1"><div>{service}</div><div>{date} at {slot}</div></div><p className="text-xs text-muted-foreground">Confirmation SMS sent to +91 {mobile}</p></div>)}
      </div>
    </div>
  );
}`;

const APPT_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ux4g-appointment-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold mb-6">Book Appointment</h1>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400">{{ error }}</div>
        <div *ngIf="step === 'service'" class="space-y-3">
          <button *ngFor="let s of services" (click)="service=s;step='date'" [class]="'w-full p-4 text-left rounded-xl border-2 '+(service===s?'border-primary bg-primary/5':'border-border')">{{ s }}</button>
        </div>
        <div *ngIf="step === 'date'" class="space-y-4">
          <label class="block text-sm font-medium mb-1">Select Date</label>
          <input type="date" [formControl]="dateCtrl" class="w-full px-4 py-3 border border-border rounded-lg" />
          <div class="flex gap-3"><button (click)="step='service'" class="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button><button (click)="toSlot()" class="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Next</button></div>
        </div>
        <div *ngIf="step === 'slot'" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <button *ngFor="let s of slots" [disabled]="!s.available" (click)="selectedSlot=s.time" [class]="'p-3 rounded-lg text-sm font-semibold '+(selectedSlot===s.time?'bg-primary text-primary-foreground':'border border-border')+(s.available?'':' opacity-50 cursor-not-allowed')">{{ s.time }}</button>
          </div>
          <div class="flex gap-3"><button (click)="step='date'" class="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button><button (click)="toDetails()" class="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Next</button></div>
        </div>
        <div *ngIf="step === 'details'" class="space-y-4">
          <div><label class="block text-sm font-medium mb-1">Name *</label><input [formControl]="nameCtrl" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <div><label class="block text-sm font-medium mb-1">Mobile *</label><input [formControl]="mobileCtrl" maxlength="10" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <button (click)="confirm()" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Booking...' : 'Confirm' }}</button>
        </div>
        <div *ngIf="step === 'confirmed'" class="text-center py-8">
          <h2 class="text-xl font-bold mb-2">Appointment Confirmed</h2>
          <p class="text-muted-foreground">Booking ID: {{ bookingId }}</p>
        </div>
      </div>
    </div>
  \`
})
export class AppointmentBookingComponent {
  services = ['Passport Application', 'Aadhaar Enrollment', 'Driving License', 'Birth Certificate'];
  slots = [{time:'09:00 AM',available:true},{time:'09:30 AM',available:true},{time:'10:00 AM',available:false},{time:'10:30 AM',available:true},{time:'11:00 AM',available:true},{time:'02:00 PM',available:true},{time:'03:00 PM',available:true}];
  step = 'service'; service = ''; selectedSlot = ''; bookingId = '';
  dateCtrl = new FormControl('', Validators.required);
  nameCtrl = new FormControl('', Validators.required);
  mobileCtrl = new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\\d{9}$/)]);
  loading = false; error = '';

  toSlot() { if (this.dateCtrl.invalid) { this.error = 'Select date'; return; } this.error = ''; this.step = 'slot'; }
  toDetails() { if (!this.selectedSlot) { this.error = 'Select slot'; return; } this.error = ''; this.step = 'details'; }
  async confirm() {
    if (this.nameCtrl.invalid || this.mobileCtrl.invalid) { this.error = 'Fill fields'; return; }
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/appointments/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ service: this.service, date: this.dateCtrl.value, slot: this.selectedSlot, name: this.nameCtrl.value, mobile: this.mobileCtrl.value }) });
      if (!res.ok) { this.error = 'Failed'; return; }
      this.bookingId = 'BK-' + Date.now().toString(36).toUpperCase();
      this.step = 'confirmed';
    } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }
}`;

const APPT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Appointment Booking — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
    .service-btn { width: 100%; padding: 1rem; text-align: left; border: 2px solid #e5e7eb; border-radius: 0.75rem; background: #fff; cursor: pointer; font-weight: 600; font-size: 0.875rem; margin-bottom: 0.5rem; }
    .service-btn.active { border-color: #005196; background: rgba(0,81,150,0.05); }
    label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem; }
    input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; outline: none; margin-bottom: 1rem; }
    .slots { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin-bottom: 1rem; }
    .slot-btn { padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; background: #fff; cursor: pointer; font-weight: 600; font-size: 0.875rem; }
    .slot-btn.active { background: #005196; color: #fff; border-color: #005196; }
    .slot-btn:disabled { opacity: 0.4; cursor: not-allowed; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn-outline { background: #fff; color: #111; border: 1px solid #d1d5db; }
    .actions { display: flex; gap: 0.75rem; } .actions > * { flex: 1; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .hidden { display: none; }
    .success { text-align: center; padding: 2rem 0; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Book Appointment</h1>
    <div id="error" class="error" role="alert"></div>
    <div id="stepService">
      <button class="service-btn" onclick="pickService('Passport Application',this)">Passport Application</button>
      <button class="service-btn" onclick="pickService('Aadhaar Enrollment',this)">Aadhaar Enrollment</button>
      <button class="service-btn" onclick="pickService('Driving License',this)">Driving License</button>
      <button class="service-btn" onclick="pickService('Birth Certificate',this)">Birth Certificate</button>
    </div>
    <div id="stepDate" class="hidden">
      <label for="date">Select Date</label>
      <input type="date" id="date" />
      <div class="actions"><button class="btn btn-outline" onclick="showStep('stepService')">Back</button><button class="btn" onclick="toSlots()">Next</button></div>
    </div>
    <div id="stepSlot" class="hidden">
      <div class="slots" id="slotsGrid"></div>
      <div class="actions"><button class="btn btn-outline" onclick="showStep('stepDate')">Back</button><button class="btn" onclick="toDetails()">Next</button></div>
    </div>
    <div id="stepDetails" class="hidden">
      <label for="name">Full Name *</label><input id="name" required />
      <label for="mobile">Mobile *</label><input id="mobile" maxlength="10" required />
      <button class="btn" onclick="confirmBooking()">Confirm Booking</button>
    </div>
    <div id="stepDone" class="hidden success">
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">Appointment Confirmed</h2>
      <p style="color:#6b7280" id="bookingInfo"></p>
    </div>
  </div>
  <script>
    let service='',selectedSlot='';
    const slots=[{t:'09:00 AM',a:true},{t:'09:30 AM',a:true},{t:'10:00 AM',a:false},{t:'10:30 AM',a:true},{t:'11:00 AM',a:true},{t:'02:00 PM',a:true},{t:'03:00 PM',a:true}];
    function showStep(id){['stepService','stepDate','stepSlot','stepDetails','stepDone'].forEach(s=>document.getElementById(s).classList.add('hidden'));document.getElementById(id).classList.remove('hidden');}
    function showError(m){const e=document.getElementById('error');e.textContent=m;e.style.display='block';}
    function hideError(){document.getElementById('error').style.display='none';}
    function pickService(s,btn){service=s;document.querySelectorAll('.service-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showStep('stepDate');}
    function toSlots(){hideError();if(!document.getElementById('date').value){showError('Select date');return;}const grid=document.getElementById('slotsGrid');grid.innerHTML='';slots.forEach(s=>{const b=document.createElement('button');b.className='slot-btn';b.textContent=s.t;b.disabled=!s.a;b.onclick=()=>{selectedSlot=s.t;grid.querySelectorAll('.slot-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');};grid.appendChild(b);});showStep('stepSlot');}
    function toDetails(){hideError();if(!selectedSlot){showError('Select slot');return;}showStep('stepDetails');}
    function confirmBooking(){hideError();const n=document.getElementById('name').value,m=document.getElementById('mobile').value;if(!n||!m){showError('Fill fields');return;}const id='BK-'+Date.now().toString(36).toUpperCase();document.getElementById('bookingInfo').textContent='Booking ID: '+id+' | '+service+' | '+document.getElementById('date').value+' at '+selectedSlot;showStep('stepDone');}
  </script>
</body>
</html>`;

function ApptBookingCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Multi-step + Slots', code: APPT_REACT_CODE, filename: 'AppointmentBookingPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: APPT_ANGULAR_CODE, filename: 'appointment-booking.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: APPT_HTML_CODE, filename: 'appointment-booking.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Appointment Booking implementations.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <div key={lane.key} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-1 bg-[#005196]" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="inline-flex rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Framework lane</span>
                  <h3 className="text-lg font-bold text-foreground mt-2">{lane.title}</h3>
                  <p className="text-sm text-muted-foreground">{lane.desc}</p>
                </div>
                <button onClick={() => downloadCode(lane.code, lane.filename)} aria-label={`Download ${lane.title} code`} className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-[#005196] hover:bg-[#005196] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]">
                  <Download size={16} />
                </button>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">{lane.filename}</span>
                  <button onClick={() => copyToClipboard(lane.code, lane.key)} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
                    {copiedId === lane.key ? <Check size={12} /> : <Copy size={12} />}
                    {copiedId === lane.key ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div tabIndex={0} role="region" aria-label={`${lane.title} code preview`} className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
                  <pre className="font-mono leading-5 whitespace-pre-wrap"><code>{lane.code.slice(0, 800)}...</code></pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// ==================== SIDEBAR COMPONENTS ====================

function QuickReference() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-primary text-white px-4 py-3">
        <h3 className="font-bold text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <div>
          <div className="font-bold text-foreground mb-1">Pattern Type</div>
          <div className="text-muted-foreground">Operational Service</div>
        </div>
        <div className="border-t border-border pt-3">
          <div className="font-bold text-foreground mb-1">Complexity</div>
          <div className="text-muted-foreground">Medium</div>
        </div>
        <div className="border-t border-border pt-3">
          <div className="font-bold text-foreground mb-1">Est. Implementation</div>
          <div className="text-muted-foreground">3-4 days</div>
        </div>
        <div className="border-t border-border pt-3">
          <div className="font-bold text-foreground mb-1">Dependencies</div>
          <div className="text-muted-foreground">Calendar integration, SMS/Email service</div>
        </div>
      </div>
    </div>
  );
}

function UseCases() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">Common Use Cases</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <UseCaseItem text="Passport application appointments" />
        <UseCaseItem text="Driving license test scheduling" />
        <UseCaseItem text="Property registration meetings" />
        <UseCaseItem text="Tax office consultations" />
        <UseCaseItem text="Certificate collection slots" />
        <UseCaseItem text="Biometric enrollment sessions" />
      </div>
    </div>
  );
}

function UseCaseItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-muted-foreground">
      <Calendar size={14} className="text-primary mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function RelatedPatterns() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">Related Patterns</h3>
      </div>
      <div className="p-4 space-y-2">
        <Link 
          to="/patterns/payment/fee-payment"
          className="block px-3 py-2 bg-background hover:bg-muted border border-border rounded text-sm text-foreground transition-colors"
        >
          <div className="font-bold">Fee Payment</div>
          <div className="text-xs text-muted-foreground">For paid appointments</div>
        </Link>
        <Link 
          to="/patterns/notifications"
          className="block px-3 py-2 bg-background hover:bg-muted border border-border rounded text-sm text-foreground transition-colors"
        >
          <div className="font-bold">Notification & Reminder</div>
          <div className="text-xs text-muted-foreground">Appointment reminders</div>
        </Link>
        <Link 
          to="/patterns/resilience"
          className="block px-3 py-2 bg-background hover:bg-muted border border-border rounded text-sm text-foreground transition-colors"
        >
          <div className="font-bold">Save & Resume</div>
          <div className="text-xs text-muted-foreground">Incomplete booking recovery</div>
        </Link>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">Resources</h3>
      </div>
      <div className="p-4 space-y-3">
        <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
          <FileText size={16} />
          <span>Figma Component</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
          <Code size={16} />
          <span>Code Snippets</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
          <Calendar size={16} />
          <span>Calendar API Guide</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
          <Globe size={16} />
          <span>SMS Gateway Integration</span>
        </a>
      </div>
    </div>
  );
}