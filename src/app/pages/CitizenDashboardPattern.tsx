import { Link } from "react-router";
import { useState } from "react";
import { LayoutDashboard, Bell, CheckSquare, FileText, Clock, TrendingUp, AlertCircle, ArrowRight, ChevronRight, Calendar, MapPin, Download } from "lucide-react";

// Mock user data
const USER = {
  name: "Rajesh Kumar",
  location: "Mumbai, Maharashtra",
  memberId: "MH2026123456"
};

const PENDING_TASKS = [
  { id: 1, title: "Upload Income Certificate", service: "Scholarship Application", deadline: "2 days left", priority: "high", type: "document" },
  { id: 2, title: "Complete Payment", service: "Driving License Renewal", deadline: "5 days left", priority: "medium", amount: "₹500", type: "payment" },
  { id: 3, title: "Verify Mobile Number", service: "Aadhaar Update", deadline: "7 days left", priority: "low", type: "verification" }
];

const ACTIVE_APPLICATIONS = [
  { id: 1, name: "Scholarship Application", status: "Under Review", progress: 75, updated: "2 hours ago", ref: "SCH-2026-45678" },
  { id: 2, name: "Driving License Renewal", status: "Payment Pending", progress: 60, updated: "1 day ago", ref: "DL-2026-89012" },
  { id: 3, name: "Aadhaar Update Request", status: "In Progress", progress: 40, updated: "3 days ago", ref: "AAD-2026-34567" }
];

const NOTIFICATIONS = [
  { id: 1, title: "Application Approved", message: "Your Birth Certificate application has been approved", time: "1 hour ago", unread: true, type: "success" },
  { id: 2, title: "Document Required", message: "Upload address proof for Driving License", time: "3 hours ago", unread: true, type: "action" },
  { id: 3, title: "Payment Successful", message: "Payment of ₹200 received for Passport", time: "Yesterday", unread: false, type: "info" }
];

const QUICK_ACTIONS = [
  { name: "Apply for Service", icon: <FileText size={20} />, link: "/services" },
  { name: "Track Application", icon: <Clock size={20} />, link: "/patterns/dashboard/application-dashboard" },
  { name: "Pay Fees", icon: <TrendingUp size={20} />, link: "/payments" },
  { name: "View Documents", icon: <Download size={20} />, link: "/documents" }
];

const SAVED_SERVICES = [
  { name: "Passport Renewal", category: "Travel" },
  { name: "Property Tax Payment", category: "Revenue" },
  { name: "Water Bill Payment", category: "Utilities" }
];

export default function CitizenDashboardPattern() {
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'applications'>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/dashboard" className="text-sm text-gray-600 hover:text-[#000080]">
                ← Back to Patterns
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-sm font-bold text-gray-900">Citizen Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded">
                <Bell size={20} className="text-gray-700" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#000080] rounded-full flex items-center justify-center text-white font-bold">
                  RK
                </div>
                <span className="text-sm font-bold text-gray-900">{USER.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <div className="max-w-[1400px] mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {USER.name.split(' ')[0]}!</h1>
              <div className="flex items-center gap-4 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{USER.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90 mb-1">Member ID</div>
              <div className="font-mono font-bold text-lg">{USER.memberId}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-bold border-b-4 transition-colors ${
                activeTab === 'overview'
                  ? 'border-[#000080] text-[#000080]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-6 py-3 font-bold border-b-4 transition-colors relative ${
                activeTab === 'tasks'
                  ? 'border-[#000080] text-[#000080]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Pending Tasks
              <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">{PENDING_TASKS.length}</span>
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-6 py-3 font-bold border-b-4 transition-colors ${
                activeTab === 'applications'
                  ? 'border-[#000080] text-[#000080]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              My Applications
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-8">
        
        {activeTab === 'overview' && (
          <div className="grid grid-cols-12 gap-6">
            
            {/* Main Column */}
            <div className="col-span-8 space-y-6">
              
              {/* Pending Tasks Summary */}
              {PENDING_TASKS.length > 0 && (
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle size={24} className="text-yellow-600" />
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">Action Required</h2>
                        <p className="text-sm text-gray-600">You have {PENDING_TASKS.length} pending tasks that need your attention</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab('tasks')}
                      className="px-4 py-2 bg-[#000080] text-white rounded font-bold hover:bg-[#000060]"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-2">
                    {PENDING_TASKS.slice(0, 2).map(task => (
                      <div key={task.id} className="bg-white border-2 border-gray-300 rounded p-4 flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-bold text-gray-900">{task.title}</div>
                          <div className="text-sm text-gray-600">{task.service}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className={`text-sm font-bold ${
                            task.priority === 'high' ? 'text-red-600' :
                            task.priority === 'medium' ? 'text-orange-600' :
                            'text-gray-600'
                          }`}>
                            {task.deadline}
                          </div>
                          <ArrowRight size={20} className="text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Active Applications */}
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Active Applications</h2>
                  <button
                    onClick={() => setActiveTab('applications')}
                    className="text-[#000080] hover:underline text-sm font-medium flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
                <div className="space-y-4">
                  {ACTIVE_APPLICATIONS.map(app => (
                    <div key={app.id} className="border-2 border-gray-300 rounded-lg p-4 hover:border-[#000080] transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{app.name}</h3>
                          <div className="text-sm text-gray-600">Ref: {app.ref}</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-bold px-3 py-1 rounded ${
                            app.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                            app.status === 'Payment Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {app.status}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{app.updated}</div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-bold text-gray-900">{app.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#138808] transition-all"
                            style={{ width: `${app.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 border-2 border-gray-300 rounded font-bold hover:border-gray-400 text-sm">
                          View Details
                        </button>
                        <button className="px-4 py-2 bg-[#000080] text-white rounded font-bold hover:bg-[#000060] text-sm">
                          Continue
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-4 gap-4">
                  {QUICK_ACTIONS.map((action, i) => (
                    <Link
                      key={i}
                      to={action.link}
                      className="p-4 border-2 border-gray-300 rounded-lg hover:border-[#000080] hover:bg-blue-50 transition-all text-center group"
                    >
                      <div className="inline-block p-3 bg-gray-100 rounded-lg mb-2 group-hover:bg-[#000080] transition-colors">
                        <div className="text-gray-700 group-hover:text-white transition-colors">
                          {action.icon}
                        </div>
                      </div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#000080]">
                        {action.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="col-span-4 space-y-6">
              
              {/* Notifications */}
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Recent Notifications</h3>
                  <Link to="/patterns/dashboard/notifications" className="text-xs text-[#000080] hover:underline">
                    View All
                  </Link>
                </div>
                <div className="space-y-3">
                  {NOTIFICATIONS.slice(0, 3).map(notif => (
                    <div key={notif.id} className={`p-3 rounded ${notif.unread ? 'bg-blue-50 border-l-4 border-[#000080]' : 'bg-gray-50'}`}>
                      <div className="flex items-start justify-between mb-1">
                        <div className="text-sm font-bold text-gray-900">{notif.title}</div>
                        {notif.unread && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
                      </div>
                      <div className="text-xs text-gray-600 mb-1">{notif.message}</div>
                      <div className="text-xs text-gray-500">{notif.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saved Services */}
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Saved Services</h3>
                  <Link to="/patterns/dashboard/saved-services" className="text-xs text-[#000080] hover:underline">
                    Manage
                  </Link>
                </div>
                <div className="space-y-2">
                  {SAVED_SERVICES.map((service, i) => (
                    <Link
                      key={i}
                      to="#"
                      className="block p-3 border-2 border-gray-300 rounded hover:border-[#000080] hover:bg-blue-50 transition-all"
                    >
                      <div className="text-sm font-bold text-gray-900">{service.name}</div>
                      <div className="text-xs text-gray-600">{service.category}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Help & Support */}
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Contact our support team for assistance with your applications.
                </p>
                <Link
                  to="/patterns/contact-support"
                  className="block text-center px-4 py-2 bg-[#000080] text-white rounded font-bold hover:bg-[#000060]"
                >
                  Get Support
                </Link>
              </div>

            </aside>

          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pending Tasks</h2>
            <div className="space-y-4">
              {PENDING_TASKS.map(task => (
                <div key={task.id} className="bg-white border-2 border-gray-300 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-gray-900">{task.title}</h3>
                        <span className={`px-2 py-1 text-xs font-bold rounded ${
                          task.priority === 'high' ? 'bg-red-100 text-red-800' :
                          task.priority === 'medium' ? 'bg-orange-100 text-orange-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {task.priority.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">{task.service}</div>
                      <div className="text-sm text-gray-600">
                        <Clock size={14} className="inline mr-1" />
                        Deadline: {task.deadline}
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-[#000080] text-white rounded font-bold hover:bg-[#000060]">
                      Complete Task
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Applications</h2>
            <div className="space-y-4">
              {ACTIVE_APPLICATIONS.map(app => (
                <div key={app.id} className="bg-white border-2 border-gray-300 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{app.name}</h3>
                      <div className="text-sm text-gray-600">Reference: {app.ref}</div>
                    </div>
                    <div className={`text-sm font-bold px-4 py-2 rounded ${
                      app.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                      app.status === 'Payment Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {app.status}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Completion Progress</span>
                      <span className="font-bold text-gray-900">{app.progress}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#138808]"
                        style={{ width: `${app.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 border-2 border-gray-300 rounded font-bold hover:border-gray-400">
                      View Details
                    </button>
                    <button className="flex-1 px-4 py-2 bg-[#000080] text-white rounded font-bold hover:bg-[#000060]">
                      Continue Application
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pattern Info */}
        <div className="mt-12 bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Pattern Features Demonstrated</h3>
          <div className="grid grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-gray-700 mb-2">Personalization</div>
              <ul className="space-y-1 text-gray-600">
                <li>• User greeting</li>
                <li>• Location display</li>
                <li>• Tailored content</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-gray-700 mb-2">Task Management</div>
              <ul className="space-y-1 text-gray-600">
                <li>• Pending tasks</li>
                <li>• Priority indicators</li>
                <li>• Deadline tracking</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-gray-700 mb-2">Application Status</div>
              <ul className="space-y-1 text-gray-600">
                <li>• Progress bars</li>
                <li>• Status badges</li>
                <li>• Quick actions</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-gray-700 mb-2">Navigation</div>
              <ul className="space-y-1 text-gray-600">
                <li>• Tab interface</li>
                <li>• Quick links</li>
                <li>• Notifications</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
