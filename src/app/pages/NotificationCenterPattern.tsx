import { Link } from "react-router";
import { useState } from "react";
import { Bell, CheckCircle, AlertTriangle, Info, Clock, FileText, CreditCard, Upload, Trash2, Archive, Filter, Search, Check, X } from "lucide-react";

// Mock notifications data
const ALL_NOTIFICATIONS = [
  {
    id: 1,
    type: "action",
    priority: "high",
    title: "Upload Income Certificate Required",
    message: "Upload your income certificate for Scholarship Application (SCH-2026-45678) by April 12, 2026.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    unread: true,
    category: "documents",
    reference: "SCH-2026-45678",
    action: { label: "Upload Now", link: "#" }
  },
  {
    id: 2,
    type: "success",
    priority: "medium",
    title: "Application Approved",
    message: "Your Driving License Renewal application has been approved. Certificate will be dispatched within 2 working days.",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    unread: true,
    category: "status",
    reference: "DL-2026-89012",
    action: { label: "View Details", link: "#" }
  },
  {
    id: 3,
    type: "warning",
    priority: "high",
    title: "Payment Reminder",
    message: "Payment of ₹500 is pending for Driving License application. Please complete payment by tomorrow.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    unread: true,
    category: "payment",
    reference: "DL-2026-89012",
    action: { label: "Pay Now", link: "#" }
  },
  {
    id: 4,
    type: "info",
    priority: "low",
    title: "Document Verification Complete",
    message: "All documents for Passport application have been verified successfully.",
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000),
    unread: false,
    category: "status",
    reference: "PP-2026-12345",
    action: null
  },
  {
    id: 5,
    type: "action",
    priority: "medium",
    title: "Appointment Reminder",
    message: "Your biometric appointment is scheduled for April 15, 2026 at 10:00 AM at Passport Seva Kendra, Mumbai.",
    timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000),
    unread: false,
    category: "appointments",
    reference: "PP-2026-12345",
    action: { label: "View Appointment", link: "#" }
  },
  {
    id: 6,
    type: "info",
    priority: "low",
    title: "New Service Available",
    message: "Birth Certificate online application is now available. Apply from your dashboard.",
    timestamp: new Date(Date.now() - 96 * 60 * 60 * 1000),
    unread: false,
    category: "updates",
    reference: null,
    action: { label: "Learn More", link: "#" }
  },
  {
    id: 7,
    type: "success",
    priority: "medium",
    title: "Payment Successful",
    message: "Payment of ₹200 received successfully for Birth Certificate application.",
    timestamp: new Date(Date.now() - 120 * 60 * 60 * 1000),
    unread: false,
    category: "payment",
    reference: "BC-2026-67890",
    action: { label: "Download Receipt", link: "#" }
  }
];

export default function NotificationCenterPattern() {
  const [notifications, setNotifications] = useState(ALL_NOTIFICATIONS);
  const [filter, setFilter] = useState<'all' | 'unread' | 'action' | 'status' | 'payment'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const filteredNotifications = notifications.filter(notif => {
    // Filter by type/category
    const typeMatch = 
      filter === 'all' ? true :
      filter === 'unread' ? notif.unread :
      filter === 'action' ? notif.type === 'action' || notif.type === 'warning' :
      filter === 'status' ? notif.category === 'status' :
      filter === 'payment' ? notif.category === 'payment' :
      true;

    // Filter by search
    const searchMatch = searchQuery === '' || 
      notif.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notif.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (notif.reference && notif.reference.toLowerCase().includes(searchQuery.toLowerCase()));

    return typeMatch && searchMatch;
  });

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    setSelectedIds(prev => prev.filter(i => i !== id));
  };

  const toggleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedIds(filteredNotifications.map(n => n.id));
  };

  const deselectAll = () => {
    setSelectedIds([]);
  };

  const bulkDelete = () => {
    setNotifications(prev => prev.filter(n => !selectedIds.includes(n.id)));
    setSelectedIds([]);
  };

  const bulkMarkRead = () => {
    setNotifications(prev => prev.map(n => 
      selectedIds.includes(n.id) ? { ...n, unread: false } : n
    ));
    setSelectedIds([]);
  };

  const getTimeAgo = (timestamp: Date) => {
    const hours = Math.floor((Date.now() - timestamp.getTime()) / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    const days = Math.floor(hours / 24);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/notifications" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-bold text-foreground">Notification Center</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Notifications</h1>
            <p className="text-muted-foreground">
              {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount === 1 ? '' : 's'}` : 'All caught up!'}
            </p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 text-sm text-primary hover:underline flex items-center gap-2"
            >
              <Check size={16} />
              <span>Mark all as read</span>
            </button>
          )}
        </div>

        {/* Filters and Search */}
        <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-muted-foreground" />
                <span className="text-sm font-bold text-foreground">Filter:</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  All ({notifications.length})
                </button>
                <button
                  onClick={() => setFilter('unread')}
                  className={`px-4 py-2 rounded font-bold text-sm relative ${
                    filter === 'unread'
                      ? 'bg-blue-500 text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  Unread ({unreadCount})
                </button>
                <button
                  onClick={() => setFilter('action')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'action'
                      ? 'bg-orange-500 text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  Action Required
                </button>
                <button
                  onClick={() => setFilter('status')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'status'
                      ? 'bg-green-500 text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  Status Updates
                </button>
                <button
                  onClick={() => setFilter('payment')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'payment'
                      ? 'bg-purple-500 text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  Payments
                </button>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedIds.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-bold text-foreground">{selectedIds.length} selected</span>
              <button
                onClick={deselectAll}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Clear selection
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={bulkMarkRead}
                className="px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90 flex items-center gap-2 text-sm"
              >
                <Check size={16} />
                <span>Mark as Read</span>
              </button>
              <button
                onClick={bulkDelete}
                className="px-4 py-2 bg-red-500 text-white rounded font-bold hover:bg-red-600 flex items-center gap-2 text-sm"
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        )}

        {/* Select All */}
        {filteredNotifications.length > 0 && selectedIds.length === 0 && (
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={selectAll}
              className="text-sm text-primary hover:underline"
            >
              Select all
            </button>
          </div>
        )}

        {/* Notifications List */}
        {filteredNotifications.length > 0 ? (
          <div className="space-y-3">
            {filteredNotifications.map((notif) => (
              <NotificationCard
                key={notif.id}
                notification={notif}
                isSelected={selectedIds.includes(notif.id)}
                onToggleSelect={() => toggleSelect(notif.id)}
                onMarkAsRead={() => markAsRead(notif.id)}
                onDelete={() => deleteNotification(notif.id)}
                getTimeAgo={getTimeAgo}
              />
            ))}
          </div>
        ) : (
          <div className="bg-card border-2 border-border rounded-lg p-12 text-center">
            <Bell size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">No notifications found</h3>
            <p className="text-muted-foreground">
              {searchQuery ? 'Try a different search term' : 'Try changing the filter'}
            </p>
          </div>
        )}

        {/* Pattern Info */}
        <div className="mt-12 bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Pattern Features Demonstrated</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-muted-foreground mb-2">Filtering</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• All notifications</li>
                <li>• Unread only</li>
                <li>• By category</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Search</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Full-text search</li>
                <li>• Reference number</li>
                <li>• Real-time filter</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Bulk Actions</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Multi-select</li>
                <li>• Mark as read</li>
                <li>• Bulk delete</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Management</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Read/unread status</li>
                <li>• Individual delete</li>
                <li>• Quick actions</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

// ==================== COMPONENTS ====================

function NotificationCard({ notification, isSelected, onToggleSelect, onMarkAsRead, onDelete, getTimeAgo }: {
  notification: typeof ALL_NOTIFICATIONS[0];
  isSelected: boolean;
  onToggleSelect: () => void;
  onMarkAsRead: () => void;
  onDelete: () => void;
  getTimeAgo: (timestamp: Date) => string;
}) {
  const typeConfig = {
    action: { icon: <AlertTriangle size={20} />, color: 'orange', bg: 'bg-orange-50', border: 'border-orange-300' },
    warning: { icon: <AlertTriangle size={20} />, color: 'orange', bg: 'bg-orange-50', border: 'border-orange-300' },
    success: { icon: <CheckCircle size={20} />, color: 'green', bg: 'bg-green-50', border: 'border-green-300' },
    info: { icon: <Info size={20} />, color: 'blue', bg: 'bg-blue-50', border: 'border-blue-300' }
  };

  const config = typeConfig[notification.type as keyof typeof typeConfig];

  return (
    <div className={`bg-card border-2 ${
      isSelected ? 'border-blue-500 shadow-lg' :
      notification.unread ? 'border-blue-300' : 'border-border'
    } rounded-lg p-6 transition-all ${notification.unread ? 'bg-blue-50' : ''}`}>
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggleSelect}
          className="mt-1 w-4 h-4 cursor-pointer"
        />

        {/* Icon */}
        <div className={`p-3 ${config.bg} border-2 ${config.border} rounded-lg text-${config.color}-600 flex-shrink-0`}>
          {config.icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-foreground">{notification.title}</h3>
                {notification.unread && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                )}
                {notification.priority === 'high' && (
                  <span className="px-2 py-0.5 bg-red-100 text-red-800 text-xs font-bold rounded">
                    URGENT
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{getTimeAgo(notification.timestamp)}</span>
                </div>
                {notification.reference && (
                  <div className="flex items-center gap-1">
                    <FileText size={14} />
                    <span className="font-mono text-xs">{notification.reference}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 mt-4">
            {notification.action && (
              <a
                href={notification.action.link}
                className="px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90 text-sm"
              >
                {notification.action.label}
              </a>
            )}
            {notification.unread && (
              <button
                onClick={onMarkAsRead}
                className="px-4 py-2 border-2 border-border rounded font-bold hover:border-gray-400 text-sm flex items-center gap-2"
              >
                <Check size={16} />
                <span>Mark as Read</span>
              </button>
            )}
            <button
              onClick={onDelete}
              className="ml-auto p-2 text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:bg-red-950/30 rounded transition-colors"
              aria-label="Delete notification"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
