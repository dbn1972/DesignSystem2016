import { Link } from "react-router";
import { Briefcase, Search, Filter, Eye, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

type CaseStatus = 'pending' | 'under-review' | 'clarification-needed' | 'verified';

export default function CertificateOfficerCases() {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState("");

  const cases = [
    {
      refNumber: "CERT-2026-MH-876543",
      applicantName: "Priya Sharma",
      certificateType: "Income Certificate",
      submittedDate: "April 10, 2026",
      status: 'pending' as CaseStatus,
      priority: 'normal',
      daysWaiting: 1
    },
    {
      refNumber: "CERT-2026-MH-875421",
      applicantName: "Rajesh Kumar",
      certificateType: "Domicile Certificate",
      submittedDate: "April 9, 2026",
      status: 'under-review' as CaseStatus,
      priority: 'normal',
      daysWaiting: 2
    },
    {
      refNumber: "CERT-2026-MH-874112",
      applicantName: "Anita Desai",
      certificateType: "Caste Certificate",
      submittedDate: "April 8, 2026",
      status: 'clarification-needed' as CaseStatus,
      priority: 'high',
      daysWaiting: 3
    },
    {
      refNumber: "CERT-2026-MH-873098",
      applicantName: "Vikram Singh",
      certificateType: "Birth Certificate",
      submittedDate: "April 7, 2026",
      status: 'verified' as CaseStatus,
      priority: 'normal',
      daysWaiting: 4
    },
    {
      refNumber: "CERT-2026-MH-872567",
      applicantName: "Meera Patel",
      certificateType: "Income Certificate",
      submittedDate: "April 6, 2026",
      status: 'pending' as CaseStatus,
      priority: 'urgent',
      daysWaiting: 5
    }
  ];

  const filteredCases = cases.filter(c => {
    const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
    const matchesSearch = searchQuery === '' || 
      c.refNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.applicantName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: cases.length,
    pending: cases.filter(c => c.status === 'pending').length,
    underReview: cases.filter(c => c.status === 'under-review').length,
    clarificationNeeded: cases.filter(c => c.status === 'clarification-needed').length,
    verified: cases.filter(c => c.status === 'verified').length
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-indigo-600 rounded flex items-center justify-center">
                <Briefcase size={28} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Officer Dashboard</div>
                <h1 className="text-2xl font-bold text-foreground">Application Case Queue</h1>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Logged in as</div>
              <div className="font-bold text-foreground">Officer Suresh Mehta</div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="bg-muted border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <StatCard label="Total Cases" value={stats.total} color="bg-blue-100 border-blue-300 text-blue-900" />
            <StatCard label="Pending Review" value={stats.pending} color="bg-orange-100 border-orange-300 text-orange-900" />
            <StatCard label="Under Review" value={stats.underReview} color="bg-purple-100 border-purple-300 text-purple-900" />
            <StatCard label="Clarification Needed" value={stats.clarificationNeeded} color="bg-red-100 border-red-300 text-red-900" />
            <StatCard label="Verified" value={stats.verified} color="bg-green-100 border-green-300 text-green-900" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        
        {/* Filters */}
        <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
          <div className="grid grid-cols-12 gap-4">
            
            {/* Search */}
            <div className="col-span-6 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by reference number or applicant name..."
                className="w-full pl-12 pr-4 py-3 border-2 border-border rounded text-sm focus:outline-none focus:border-primary"
              />
            </div>

            {/* Status Filter */}
            <div className="col-span-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-border rounded text-sm focus:outline-none focus:border-primary"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending Review</option>
                <option value="under-review">Under Review</option>
                <option value="clarification-needed">Clarification Needed</option>
                <option value="verified">Verified</option>
              </select>
            </div>

            {/* More Filters Button */}
            <div className="col-span-2">
              <button className="w-full px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background flex items-center justify-center gap-2">
                <Filter size={18} />
                More Filters
              </button>
            </div>

          </div>
        </div>

        {/* Cases Table */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted border-b-2 border-border">
                  <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase">Reference</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase">Applicant</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase">Certificate Type</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase">Submitted</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase">Priority</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map((caseItem, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-mono text-sm font-bold text-foreground">{caseItem.refNumber}</div>
                      <div className="text-xs text-muted-foreground">{caseItem.daysWaiting} days ago</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-foreground">{caseItem.applicantName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-muted-foreground">{caseItem.certificateType}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-muted-foreground">{caseItem.submittedDate}</div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={caseItem.status} />
                    </td>
                    <td className="px-6 py-4">
                      <PriorityBadge priority={caseItem.priority} />
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to="/reference-service/certificate/officer/review"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded text-xs hover:opacity-90"
                      >
                        <Eye size={14} />
                        Review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No cases found</p>
              <p className="text-sm text-gray-500 mt-2">Try adjusting your filters</p>
            </div>
          )}
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Certificate Application Service • Officer Dashboard</div>
            <div>Government of India</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className={`border-2 rounded-lg p-4 ${color}`}>
      <div className="text-xs font-bold mb-1">{label}</div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
}

function StatusBadge({ status }: { status: CaseStatus }) {
  const styles = {
    'pending': 'bg-orange-100 border-orange-300 text-orange-900',
    'under-review': 'bg-purple-100 border-purple-300 text-purple-900',
    'clarification-needed': 'bg-red-100 border-red-300 text-red-900',
    'verified': 'bg-green-100 border-green-300 text-green-900'
  };

  const labels = {
    'pending': 'Pending Review',
    'under-review': 'Under Review',
    'clarification-needed': 'Clarification Needed',
    'verified': 'Verified'
  };

  return (
    <span className={`inline-block px-3 py-1 border-2 rounded text-xs font-bold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles = {
    'urgent': 'bg-red-100 border-red-300 text-red-900',
    'high': 'bg-orange-100 border-orange-300 text-orange-900',
    'normal': 'bg-muted border-border text-muted-foreground'
  };

  return (
    <span className={`inline-block px-3 py-1 border-2 rounded text-xs font-bold uppercase ${styles[priority as keyof typeof styles]}`}>
      {priority}
    </span>
  );
}
