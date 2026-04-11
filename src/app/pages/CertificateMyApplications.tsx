import { Link } from "react-router";
import { FolderOpen, Eye, Download, Plus, Filter, Search } from "lucide-react";
import { useState } from "react";

export default function CertificateMyApplications() {
  const [statusFilter, setStatusFilter] = useState('all');

  const applications = [
    {
      refNumber: "CERT-2026-MH-876543",
      certificateType: "Income Certificate",
      submittedDate: "April 10, 2026",
      status: "under-review",
      statusLabel: "Under Review",
      canDownload: false
    },
    {
      refNumber: "CERT-2026-MH-754321",
      certificateType: "Domicile Certificate",
      submittedDate: "March 15, 2026",
      status: "approved",
      statusLabel: "Approved",
      canDownload: true
    },
    {
      refNumber: "CERT-2026-MH-632109",
      certificateType: "Caste Certificate",
      submittedDate: "February 28, 2026",
      status: "pending",
      statusLabel: "Pending Documents",
      canDownload: false
    },
    {
      refNumber: "CERT-2025-MH-512876",
      certificateType: "Birth Certificate",
      submittedDate: "December 5, 2025",
      status: "issued",
      statusLabel: "Certificate Issued",
      canDownload: true
    }
  ];

  const filteredApplications = applications.filter(app => 
    statusFilter === 'all' || app.status === statusFilter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-purple-600 rounded flex items-center justify-center">
                <FolderOpen size={28} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">User Dashboard</div>
                <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
              </div>
            </div>
            <Link
              to="/reference-service/demo"
              className="flex items-center gap-2 px-6 py-3 bg-[#138808] text-white font-bold rounded text-sm hover:bg-green-700"
            >
              <Plus size={18} />
              New Application
            </Link>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="bg-gray-100 border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="grid grid-cols-4 gap-6">
            <StatCard label="Total Applications" value={applications.length} color="bg-blue-100 border-blue-300 text-blue-900" />
            <StatCard label="Under Review" value={applications.filter(a => a.status === 'under-review').length} color="bg-purple-100 border-purple-300 text-purple-900" />
            <StatCard label="Approved" value={applications.filter(a => a.status === 'approved' || a.status === 'issued').length} color="bg-green-100 border-green-300 text-green-900" />
            <StatCard label="Pending Action" value={applications.filter(a => a.status === 'pending').length} color="bg-orange-100 border-orange-300 text-orange-900" />
          </div>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        
        {/* Filters */}
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                placeholder="Search by reference number or certificate type..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
              />
            </div>
            <div className="col-span-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="under-review">Under Review</option>
                <option value="approved">Approved</option>
                <option value="issued">Issued</option>
              </select>
            </div>
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.map((app, idx) => (
            <ApplicationCard key={idx} application={app} />
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <div className="bg-white border-2 border-gray-300 rounded-lg p-12 text-center">
            <FolderOpen size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">No applications found</h3>
            <p className="text-sm text-gray-600 mb-6">
              {statusFilter === 'all' 
                ? "You haven't submitted any applications yet"
                : `No applications with status: ${statusFilter}`
              }
            </p>
            <Link
              to="/reference-service/demo"
              className="inline-block px-6 py-3 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900"
            >
              Start Your First Application
            </Link>
          </div>
        )}

      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>
              <Link to="/reference-service/demo" className="text-[#000080] font-bold hover:underline mr-6">
                Service Home
              </Link>
              My Applications
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ label, value, color }: any) {
  return (
    <div className={`border-2 rounded-lg p-4 ${color}`}>
      <div className="text-xs font-bold mb-1">{label}</div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
}

function ApplicationCard({ application }: any) {
  const statusColors = {
    'pending': 'bg-orange-100 border-orange-300 text-orange-900',
    'under-review': 'bg-purple-100 border-purple-300 text-purple-900',
    'approved': 'bg-green-100 border-green-300 text-green-900',
    'issued': 'bg-green-100 border-green-300 text-green-900'
  };

  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden hover:border-[#000080] transition-colors">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-bold text-gray-900">{application.certificateType}</h3>
              <span className={`px-3 py-1 border-2 rounded text-xs font-bold ${statusColors[application.status as keyof typeof statusColors]}`}>
                {application.statusLabel}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-xs text-gray-600">Reference Number</div>
                <div className="font-bold text-gray-900 font-mono">{application.refNumber}</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">Submitted On</div>
                <div className="font-bold text-gray-900">{application.submittedDate}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/reference-service/certificate/status-tracker"
            className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50"
          >
            <Eye size={16} />
            Track Status
          </Link>
          {application.canDownload && (
            <Link
              to="/reference-service/certificate/issued"
              className="flex items-center gap-2 px-4 py-2 bg-[#138808] text-white font-bold rounded text-sm hover:bg-green-700"
            >
              <Download size={16} />
              Download Certificate
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
