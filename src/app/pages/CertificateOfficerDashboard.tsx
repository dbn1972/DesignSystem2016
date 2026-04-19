import { Link } from "react-router";
import { LayoutDashboard, Briefcase, Users, CheckCircle, Clock, AlertCircle, TrendingUp, Calendar } from "lucide-react";

export default function CertificateOfficerDashboard() {
  const stats = {
    totalCases: 47,
    pendingReview: 12,
    underReview: 8,
    clarificationNeeded: 5,
    completedToday: 6,
    avgProcessingTime: "4.2 days",
    approvalRate: "87%"
  };

  const recentActivity = [
    {
      action: "Application Approved",
      refNumber: "CERT-2026-MH-876543",
      applicant: "Priya Sharma",
      time: "15 minutes ago",
      type: "success"
    },
    {
      action: "Clarification Requested",
      refNumber: "CERT-2026-MH-875421",
      applicant: "Rajesh Kumar",
      time: "1 hour ago",
      type: "warning"
    },
    {
      action: "New Application Assigned",
      refNumber: "CERT-2026-MH-874112",
      applicant: "Anita Desai",
      time: "2 hours ago",
      type: "info"
    },
    {
      action: "Application Approved",
      refNumber: "CERT-2026-MH-873098",
      applicant: "Vikram Singh",
      time: "3 hours ago",
      type: "success"
    }
  ];

  const urgentCases = [
    {
      refNumber: "CERT-2026-MH-872567",
      applicant: "Meera Patel",
      certificateType: "Income Certificate",
      daysWaiting: 8,
      priority: "Urgent"
    },
    {
      refNumber: "CERT-2026-MH-871234",
      applicant: "Arjun Reddy",
      certificateType: "Domicile Certificate",
      daysWaiting: 7,
      priority: "High"
    },
    {
      refNumber: "CERT-2026-MH-870987",
      applicant: "Kavita Joshi",
      certificateType: "Caste Certificate",
      daysWaiting: 6,
      priority: "High"
    }
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
                <div className="text-sm text-muted-foreground">Officer Portal</div>
                <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Logged in as</div>
              <div className="font-bold text-foreground">Officer Suresh Mehta</div>
              <div className="text-xs text-muted-foreground">District Office, Mumbai</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Briefcase size={28} />}
            label="Total Cases"
            value={stats.totalCases}
            color="blue"
            trend="+3 from yesterday"
          />
          <StatCard
            icon={<Clock size={28} />}
            label="Pending Review"
            value={stats.pendingReview}
            color="orange"
            trend="Needs attention"
          />
          <StatCard
            icon={<CheckCircle size={28} />}
            label="Completed Today"
            value={stats.completedToday}
            color="green"
            trend="Great progress!"
          />
          <StatCard
            icon={<AlertCircle size={28} />}
            label="Clarification Needed"
            value={stats.clarificationNeeded}
            color="red"
            trend="Follow up required"
          />
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            icon={<TrendingUp size={24} />}
            label="Approval Rate"
            value={stats.approvalRate}
            subtext="Based on last 30 days"
            color="green"
          />
          <MetricCard
            icon={<Clock size={24} />}
            label="Avg. Processing Time"
            value={stats.avgProcessingTime}
            subtext="Target: 5 days or less"
            color="blue"
          />
          <MetricCard
            icon={<Calendar size={24} />}
            label="Cases Under Review"
            value={stats.underReview.toString()}
            subtext="Currently being processed"
            color="purple"
          />
        </div>

        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 8 columns */}
          <div className="col-span-8 space-y-6">
            
            {/* Quick Actions */}
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              <div className="bg-muted border-b-2 border-border px-8 py-4">
                <h2 className="font-bold text-foreground">Quick Actions</h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    to="/reference-service/certificate/officer/cases"
                    className="flex items-center gap-3 p-4 border-2 border-border rounded hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-all"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Briefcase size={24} className="text-blue-700" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">View Case Queue</div>
                      <div className="text-xs text-muted-foreground">{stats.totalCases} total cases</div>
                    </div>
                  </Link>

                  <Link
                    to="/reference-service/certificate/officer/cases"
                    className="flex items-center gap-3 p-4 border-2 border-border rounded hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-all"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Clock size={24} className="text-orange-700" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Pending Applications</div>
                      <div className="text-xs text-muted-foreground">{stats.pendingReview} awaiting review</div>
                    </div>
                  </Link>

                  <Link
                    to="/reference-service/certificate/officer/cases"
                    className="flex items-center gap-3 p-4 border-2 border-border rounded hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-all"
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertCircle size={24} className="text-red-700 dark:text-red-400" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Clarifications</div>
                      <div className="text-xs text-muted-foreground">{stats.clarificationNeeded} responses received</div>
                    </div>
                  </Link>

                  <Link
                    to="/reference-service/certificate/officer/cases"
                    className="flex items-center gap-3 p-4 border-2 border-border rounded hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-all"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle size={24} className="text-green-700 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Completed Cases</div>
                      <div className="text-xs text-muted-foreground">{stats.completedToday} today</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              <div className="bg-muted border-b-2 border-border px-8 py-4">
                <h2 className="font-bold text-foreground">Recent Activity</h2>
              </div>
              <div className="divide-y-2 divide-border">
                {recentActivity.map((activity, idx) => (
                  <ActivityItem key={idx} activity={activity} />
                ))}
              </div>
              <div className="p-4 text-center border-t-2 border-border">
                <Link to="/reference-service/certificate/officer/cases" className="text-sm text-primary font-bold hover:underline">
                  View All Activity →
                </Link>
              </div>
            </div>

          </div>

          {/* Sidebar - 4 columns */}
          <div className="col-span-4 space-y-6">
            
            {/* Urgent Cases */}
            <div className="bg-card border-2 border-red-300 rounded-lg overflow-hidden">
              <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-300 px-6 py-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <AlertCircle size={18} className="text-red-600" />
                  Urgent Cases
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {urgentCases.map((caseItem, idx) => (
                  <UrgentCaseCard key={idx} caseItem={caseItem} />
                ))}
                <Link
                  to="/reference-service/certificate/officer/cases"
                  className="block w-full px-4 py-3 bg-red-600 text-white font-bold rounded text-center text-sm hover:bg-red-700"
                >
                  Review Urgent Cases
                </Link>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              <div className="bg-muted border-b-2 border-border px-6 py-4">
                <h3 className="font-bold text-foreground">Today's Goals</h3>
              </div>
              <div className="p-6 space-y-3">
                <GoalItem label="Review pending applications" current={8} target={12} />
                <GoalItem label="Process clarifications" current={3} target={5} />
                <GoalItem label="Approve/reject cases" current={6} target={10} />
              </div>
            </div>

          </div>
        </div>

      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Certificate Application Service • Officer Portal</div>
            <div>Dashboard</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ icon, label, value, color, trend }: any) {
  const colors = {
    blue: 'bg-blue-100 border-blue-300 text-blue-700',
    orange: 'bg-orange-100 border-orange-300 text-orange-700',
    green: 'bg-green-100 border-green-300 text-green-700',
    red: 'bg-red-100 border-red-300 text-red-700'
  };

  return (
    <div className={`border-2 rounded-lg p-6 ${colors[color]}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">{value}</div>
      <div className="text-sm font-bold mb-2">{label}</div>
      <div className="text-xs opacity-75">{trend}</div>
    </div>
  );
}

function MetricCard({ icon, label, value, subtext, color }: any) {
  const colors = {
    green: 'bg-green-50 dark:bg-green-950/30 border-green-300',
    blue: 'bg-blue-50 dark:bg-blue-950/30 border-blue-300',
    purple: 'bg-purple-50 dark:bg-purple-950/30 border-purple-300'
  };

  return (
    <div className={`border-2 rounded-lg p-6 ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-sm font-bold text-muted-foreground">{label}</span>
      </div>
      <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-xs text-muted-foreground">{subtext}</div>
    </div>
  );
}

function ActivityItem({ activity }: any) {
  const typeColors = {
    success: 'bg-green-600',
    warning: 'bg-orange-600',
    info: 'bg-blue-600'
  };

  return (
    <div className="p-6 hover:bg-background transition-colors">
      <div className="flex items-start gap-4">
        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${typeColors[activity.type as keyof typeof typeColors]}`}></div>
        <div className="flex-1">
          <div className="font-bold text-foreground mb-1">{activity.action}</div>
          <div className="text-sm text-muted-foreground mb-1">
            {activity.applicant} • {activity.refNumber}
          </div>
          <div className="text-xs text-muted-foreground">{activity.time}</div>
        </div>
      </div>
    </div>
  );
}

function UrgentCaseCard({ caseItem }: any) {
  return (
    <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="font-bold text-foreground text-sm">{caseItem.applicant}</div>
        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded font-bold">
          {caseItem.daysWaiting}d
        </span>
      </div>
      <div className="text-xs text-muted-foreground mb-2">{caseItem.certificateType}</div>
      <div className="text-xs font-mono text-muted-foreground">{caseItem.refNumber}</div>
    </div>
  );
}

function GoalItem({ label, current, target }: any) {
  const percentage = (current / target) * 100;

  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-bold text-foreground">{current}/{target}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
