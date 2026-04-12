import { useMemo, useState } from "react";
import { Link } from "react-router";
import { Bell } from "lucide-react";
import {
  getCertificateNotifications,
  markAllNotificationsRead,
  markNotificationAsRead,
} from "../services/certificateFlow";

export default function CertificateNotifications() {
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [refreshTick, setRefreshTick] = useState(0);

  const notifications = useMemo(() => getCertificateNotifications(), [refreshTick]);
  const unreadCount = notifications.filter((n) => !n.read).length;
  const shown = notifications.filter((n) => (filter === "all" ? true : !n.read));

  const markAllRead = () => {
    markAllNotificationsRead();
    setRefreshTick((x) => x + 1);
  };

  const markRead = (id: string) => {
    markNotificationAsRead(id);
    setRefreshTick((x) => x + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1000px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
              <Bell size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Notifications</p>
              <h1 className="text-xl font-bold text-gray-900">{unreadCount} unread</h1>
            </div>
          </div>
          <button onClick={markAllRead} className="text-sm text-[#000080] font-bold hover:underline">Mark all as read</button>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-6 py-8 space-y-4">
        <div className="flex gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded font-bold text-sm ${filter === "all" ? "bg-[#000080] text-white" : "bg-white border-2 border-gray-300 text-gray-700"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("unread")}
            className={`px-4 py-2 rounded font-bold text-sm ${filter === "unread" ? "bg-[#000080] text-white" : "bg-white border-2 border-gray-300 text-gray-700"}`}
          >
            Unread
          </button>
        </div>

        {shown.length === 0 ? (
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-sm text-gray-700">No notifications to show.</div>
        ) : (
          shown.map((item) => (
            <article key={item.id} className="bg-white border-2 border-gray-300 rounded-lg p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-bold text-gray-900">{item.title}</h2>
                  <p className="text-sm text-gray-700 mt-1">{item.message}</p>
                  <p className="text-xs text-gray-600 mt-2">{item.date}</p>
                  {item.link ? (
                    <Link to={item.link} className="text-sm text-[#000080] font-bold hover:underline mt-2 inline-block">
                      View details
                    </Link>
                  ) : null}
                </div>
                {!item.read ? (
                  <button onClick={() => markRead(item.id)} className="text-xs text-[#000080] font-bold hover:underline">
                    Mark read
                  </button>
                ) : null}
              </div>
            </article>
          ))
        )}
      </main>
    </div>
  );
}
