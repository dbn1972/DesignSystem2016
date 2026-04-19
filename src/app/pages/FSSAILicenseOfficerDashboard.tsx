import { LayoutDashboard, Briefcase, CheckCircle, Clock, AlertCircle, TrendingUp, Calendar } from "lucide-react";

export default function FSSAILicenseOfficerDashboard() {
  const stats = {
    totalCases: 42,
    pendingReview: 11,
    underReview: 8,
    clarificationNeeded: 5,
    completedToday: 7,
    avgProcessingTime: "18.3 days",
    approvalRate: "78%",
  };

  const recentActivity = [
    { action: "License Issued", refNumber: "FSSAI-2026-LIC-876543", applicant: "Anita Desai", time: "15 minutes ago", type: "success" as const },
    { action: "Inspection Scheduled", refNumber: "FSSAI-2026-LIC-875421", applicant: "Ramesh Gupta", time: "1 hour ago", type: "warning" as const },
    { action: "New Application Assigned", refNumber: "FSSAI-2026-LIC-874112", applicant: "Priya Sharma", time: "2 hours ago", type: "info" as const },
    { action: "Documents Verified", refNumber: "FSSAI-2026-LIC-873098", applicant: "Sunil Patel", time: "3 hours ago", type: "success" as const },
  ];

  const urgentCases = [
    { refNumber: "FSSAI-2026-LIC-872567", applicant: "Meera Joshi", licenseType: "Central License", daysWaiting: 45 },
    { refNumber: "FSSAI-2026-LIC-871234", applicant: "Arjun Reddy", licenseType: "State License", daysWaiting: 28 },
    { refNumber: "FSSAI-2026-LIC-870987", applicant: "Kavita Singh", licenseType: "State License", daysWaiting: 22 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-indigo-600 rounded flex items-center justify-center">
                <LayoutDashboard size={28} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Food Safety Officer Portal</div>
                <h1 className="text-2xl font-bold text-foreground">FSSAI License Dashboard</h1>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Logged in as</div>
              <div className="font-bold text-foreground">FSO Rekha Nair</div>
              <div className="text-xs text-muted-foreground">FSSAI Regional Office, Mumbai</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<Briefcase size={28} />} label="Total Cases" value={stats.totalCases} color="blue" trend="+3 from yesterday" />
          <StatCard icon={<Clock size={28} />} label="Pending Review" value={stats.pendingReview} color="orange" trend="Needs attention" />
          <StatCard icon={<CheckCircle size={28} />} label="Completed Today" value={stats.completedToday} color="green" trend="Great progress!" />
          <StatCard icon={<AlertCircle size={28} />} label="Clarification Needed" value={stats.clarificationNeeded} color="red" trend="Follow up required" />
        </div>

        {/* Performance */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <MetricCard icon={<TrendingUp size={24} />} label="Approval Rate" value={stats.approvalRate} subtext="Last 30 days" color="green" />
          <MetricCard icon={<Clock size={24} />} label="Avg. Processing" value={stats.avgProcessingTime} subtext="Target: 30 days" color="blue" />
          <MetricCard icon={<Calendar size={24} />} label="Under Review" value={stats.underReview.toString()} subtext="Currently processing" color="purple" />
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 space-y-6">
            {/* Recent Activity */}
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              <div className="bg-muted border-b-2 border-border px-8 py-4">
                <h2 className="font-bold text-foreground">Recent Activity</h2>
              </div>
              <div className="divide-y-2 divide-border">
                {recentActivity.map((a, i) => {
                  const dot = a.type === "success" ? "bg-green-600" : a.type === "warning" ? "bg-orange-600" : "bg-blue-600";
                  return (
                    <div key={i} className="p-6 hover:bg-background transition-colors">
                      <div className="flex items-start gap-4">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${dot}`} />
                        <div>
                          <div className="font-bold text-foreground mb-1">{a.action}</div>
                          <div className="text-sm text-muted-foreground">{a.applicant} • {a.refNumber}</div>
                          <div className="text-xs text-muted-foreground">{a.time}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-span-4 space-y-6">
            {/* Urgent */}
            <div className="bg-card border-2 border-red-300 rounded-lg overflow-hidden">
              <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-300 px-6 py-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <AlertCircle size={18} className="text-red-600" /> Urgent Cases
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {urgentCases.map((c, i) => (
                  <div key={i} className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-bold text-foreground text-sm">{c.applicant}</div>
                      <span className="text-xs bg-red-600 text-white px-2 py-1 rounded font-bold">{c.daysWaiting}d</span>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">{c.licenseType}</div>
                    <div className="text-xs font-mono text-muted-foreground">{c.refNumber}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>FSSAI Food License Service • Food Safety Officer Portal</div>
            <div>Dashboard</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ icon, label, value, color, trend }: any) {
  const colors: Record<string, string> = {
    blue: "bg-blue-100 border-blue-300 text-blue-700",
    orange: "bg-orange-100 border-orange-300 text-orange-700",
    green: "bg-green-100 border-green-300 text-green-700",
    red: "bg-red-100 border-red-300 text-red-700",
  };
  return (
    <div className={`border-2 rounded-lg p-6 ${colors[color]}`}>
      <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center mb-4">{icon}</div>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">{value}</div>
      <div className="text-sm font-bold mb-2">{label}</div>
      <div className="text-xs opacity-75">{trend}</div>
    </div>
  );
}

function MetricCard({ icon, label, value, subtext, color }: any) {
  const colors: Record<string, string> = {
    green: "bg-green-50 dark:bg-green-950/30 border-green-300",
    blue: "bg-blue-50 dark:bg-blue-950/30 border-blue-300",
    purple: "bg-purple-50 dark:bg-purple-950/30 border-purple-300",
  };
  return (
    <div className={`border-2 rounded-lg p-6 ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-3">{icon}<span className="text-sm font-bold text-muted-foreground">{label}</span></div>
      <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-xs text-muted-foreground">{subtext}</div>
    </div>
  );
}
