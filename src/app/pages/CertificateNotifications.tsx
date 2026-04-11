import { Link } from "react-router";
import { Bell, CheckCircle, AlertCircle, Info, Clock, Trash2 } from "lucide-react";
import { useState } from "react";

type NotificationType = 'success' | 'warning' | 'info' | 'pending';

export default function CertificateNotifications() {
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const notifications = [
    {
      id: 1,
      type: 'success' as NotificationType,
      title: "Certificate Issued",
      message: "Your Income Certificate (CERT-2026-MH-876543) has been approved and issued. Download it now from your applications dashboard.",
      date: "April 18, 2026, 10:30 AM",
      read: false,
      link: "/reference-service/certificate/issued"
    },
    {
      id: 2,
      type: 'info' as NotificationType,
      title: "Application Under Review",
      message: "Your application CERT-2026-MH-876543 has been assigned to Officer Suresh Mehta for review.",
      date: "April 11, 2026, 11:30 AM",
      read: true,
      link: "/reference-service/certificate/status-tracker"
    },
    {
      id: 3,
      type: 'success' as NotificationType,
      title: "Payment Confirmed",
      message: "Payment of ₹155 has been successfully received for application CERT-2026-MH-876543. Transaction ID: TXN987654321",
      date: "April 10, 2026, 3:32 PM",
      read: true,
      link: null
    },
    {
      id: 4,
      type: 'success' as NotificationType,
      title: "Application Submitted",
      message: "Your certificate application has been successfully submitted. Reference number: CERT-2026-MH-876543",
      date: "April 10, 2026, 3:30 PM",
      read: true,
      link: "/reference-service/certificate/submission-success"
    },
    {
      id: 5,
      type: 'warning' as NotificationType,
      title: "Clarification Needed",
      message: "Officer has requested additional documents for application CERT-2026-MH-754321. Please upload required documents within 7 days.",
      date: "April 5, 2026, 2:15 PM",
      read: false,
      link: "/reference-service/certificate/correction-request"
    },
    {
      id: 6,
      type: 'info' as NotificationType,
      title: "Reminder: Complete Your Application",
      message: "You have a saved draft for Domicile Certificate. Complete and submit it before it expires.",
      date: "April 3, 2026, 9:00 AM",
      read: true,
      link: "/reference-service/certificate/form/personal"
    }
  ];

  const filteredNotifications = notifications.filter(n => 
    filter === 'all' || !n.read
  );

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-blue-600 rounded flex items-center justify-center relative">
                <Bell size={28} className="text-white" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {unreadCount}
                  </div>
                )}
              </div>
              <div>
                <div className="text-sm text-gray-600">User Dashboard</div>
                <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {unreadCount} unread notification{unreadCount !== 1 && 's'}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        
        {/* Filter Tabs */}
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center border-b-2 border-gray-300">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 px-6 py-4 text-sm font-bold ${
                filter === 'all'
                  ? 'bg-[#000080] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              All Notifications ({notifications.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`flex-1 px-6 py-4 text-sm font-bold ${
                filter === 'unread'
                  ? 'bg-[#000080] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Unread ({unreadCount})
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </div>

        {filteredNotifications.length === 0 && (
          <div className="bg-white border-2 border-gray-300 rounded-lg p-12 text-center">
            <Bell size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">No {filter === 'unread' && 'unread'} notifications</h3>
            <p className="text-sm text-gray-600">
              {filter === 'unread' 
                ? "You're all caught up! Check back later for updates."
                : "You don't have any notifications yet."
              }
            </p>
          </div>
        )}

        {/* Actions */}
        {filteredNotifications.length > 0 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button className="px-6 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50">
              Mark All as Read
            </button>
            <button className="px-6 py-3 border-2 border-red-300 bg-white text-red-700 font-bold rounded text-sm hover:bg-red-50 flex items-center gap-2">
              <Trash2 size={16} />
              Clear All
            </button>
          </div>
        )}

      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>
              <Link to="/reference-service/certificate/my-applications" className="text-[#000080] font-bold hover:underline mr-6">
                My Applications
              </Link>
              Notifications
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NotificationCard({ notification }: any) {
  const typeConfig = {
    success: {
      bg: 'bg-green-50 border-green-300',
      iconBg: 'bg-green-600',
      icon: <CheckCircle size={20} className="text-white" />
    },
    warning: {
      bg: 'bg-orange-50 border-orange-300',
      iconBg: 'bg-orange-600',
      icon: <AlertCircle size={20} className="text-white" />
    },
    info: {
      bg: 'bg-blue-50 border-blue-300',
      iconBg: 'bg-blue-600',
      icon: <Info size={20} className="text-white" />
    },
    pending: {
      bg: 'bg-purple-50 border-purple-300',
      iconBg: 'bg-purple-600',
      icon: <Clock size={20} className="text-white" />
    }
  };

  const config = typeConfig[notification.type];

  return (
    <div className={`bg-white border-2 ${notification.read ? 'border-gray-300' : config.bg.replace('bg-', 'border-')} rounded-lg overflow-hidden`}>
      <div className="p-6">
        <div className="flex items-start gap-4">
          
          {/* Icon */}
          <div className={`w-12 h-12 ${config.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
            {config.icon}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  {notification.title}
                  {!notification.read && (
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  )}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  {notification.message}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Clock size={14} />
                  <span>{notification.date}</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <Trash2 size={18} />
              </button>
            </div>

            {notification.link && (
              <div className="mt-3 pt-3 border-t-2 border-gray-200">
                <Link
                  to={notification.link}
                  className="text-sm text-[#000080] font-bold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
