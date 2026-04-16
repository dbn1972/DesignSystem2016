import { Link } from "react-router";
import { Calendar, Shield, CheckCircle, AlertCircle, Info, XCircle, ArrowRight, ChevronRight, FileText, Globe, Code, Settings, HelpCircle, Database, Check, X, Clock, MapPin, User, Phone, Mail, RefreshCw } from "lucide-react";

export default function AppointmentBookingPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/operational-service-patterns" className="hover:text-primary">
              Operational Service Patterns
            </Link>
            <ChevronRight size={16} />
            <span className="text-foreground font-medium">Appointment Booking</span>
          </div>

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
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
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
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 font-bold text-sm text-center">
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
      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
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
          </div>

          {/* Sidebar - 3 columns */}
          <aside className="col-span-3 space-y-6 sticky top-24 self-start">
            <QuickReference />
            <UseCases />
            <RelatedPatterns />
            <Resources />
          </aside>

        </div>
      </main>

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

      <div className="grid grid-cols-2 gap-6">
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

      <div className="bg-card border-2 border-border rounded-lg p-8">
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
          <h4 className={`font-bold ${textColor} mb-1`}>{title}</h4>
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
      <ArrowRight size={24} className="text-gray-400 rotate-90" />
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

      <div className="grid grid-cols-2 gap-6">
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
            <button className="p-2 hover:bg-muted rounded">
              <ChevronRight size={20} className="rotate-180 text-muted-foreground" />
            </button>
            <h4 className="font-bold text-foreground">April 2026</h4>
            <button className="p-2 hover:bg-muted rounded">
              <ChevronRight size={20} className="text-muted-foreground" />
            </button>
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
                    ${!isAvailable ? 'bg-muted text-gray-400 cursor-not-allowed' : ''}
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
              <span className="font-bold text-blue-800">Legend</span>
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
              <h4 className="text-sm font-bold text-muted-foreground mb-2">Morning</h4>
              <div className="grid grid-cols-2 gap-2">
                <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm font-medium hover:border-primary hover:bg-blue-50">
                  09:00 AM
                </button>
                <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm font-medium hover:border-primary hover:bg-blue-50">
                  10:00 AM
                </button>
                <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm font-medium hover:border-primary hover:bg-blue-50">
                  11:00 AM
                </button>
                <button disabled className="px-4 py-3 border-2 border-border bg-muted rounded text-sm font-medium text-gray-400 cursor-not-allowed">
                  12:00 PM<br/>
                  <span className="text-xs">Full</span>
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-muted-foreground mb-2">Afternoon</h4>
              <div className="grid grid-cols-2 gap-2">
                <button className="px-4 py-3 border-2 border-primary bg-blue-50 dark:bg-blue-950/30 rounded text-sm font-medium text-primary">
                  02:00 PM<br/>
                  <span className="text-xs">Selected</span>
                </button>
                <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm font-medium hover:border-primary hover:bg-blue-50">
                  03:00 PM
                </button>
                <button className="px-4 py-3 border-2 border-border bg-card rounded text-sm font-medium hover:border-primary hover:bg-blue-50">
                  04:00 PM
                </button>
                <button disabled className="px-4 py-3 border-2 border-border bg-muted rounded text-sm font-medium text-gray-400 cursor-not-allowed">
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
          <h4 className="font-bold text-foreground text-lg mb-2">Appointment Confirmed</h4>
          <p className="text-sm text-muted-foreground mb-6">
            Your appointment has been successfully booked
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 mb-6 text-left">
            <h5 className="font-bold text-foreground text-sm mb-3">Appointment Details</h5>
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
                  <div className="text-xs font-bold text-green-700 mb-1">UPCOMING</div>
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
                <button className="flex-1 px-3 py-2 border-2 border-red-300 bg-card text-red-700 font-bold rounded text-xs">
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
                <CheckCircle size={20} className="text-gray-500" />
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

      <div className="grid grid-cols-2 gap-6">
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
            <div className="grid grid-cols-2 gap-6">
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
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-bold text-foreground mb-3">Must Include:</h4>
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
              <h4 className="font-bold text-foreground mb-3">Should Include:</h4>
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
        <h4 className="font-bold text-foreground">{title}</h4>
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

      <div className="grid grid-cols-2 gap-6">
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
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-foreground mb-3">Rescheduling:</h4>
                <div className="space-y-2">
                  <InfoItem text="Allow up to 24 hours before appointment" />
                  <InfoItem text="Maximum 2 reschedules per booking" />
                  <InfoItem text="Must select future date/time" />
                  <InfoItem text="Send updated confirmation immediately" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-3">Cancellation:</h4>
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

      <div className="grid grid-cols-2 gap-6">
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
            <div className="grid grid-cols-2 gap-6">
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

      <div className="grid grid-cols-2 gap-6">
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
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-foreground mb-3">Concurrency Handling:</h4>
                <div className="space-y-2">
                  <ImplementationItem text="Handle race conditions when multiple users select same slot" />
                  <ImplementationItem text="Implement slot versioning or row locking" />
                  <ImplementationItem text="Show real-time availability updates" />
                  <ImplementationItem text="Gracefully handle slot unavailability" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-3">Notifications:</h4>
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