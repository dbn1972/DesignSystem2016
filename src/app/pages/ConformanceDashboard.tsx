import { BarChart3, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, XCircle, Clock, Users, Building2, Package, Code, FileText, Shield, Eye, Activity, AlertCircle, Info, ChevronRight, Download, Filter, Calendar, Target, Layers, GitBranch, MessageSquare, Award, Percent, ThumbsUp, ThumbsDown, Circle, ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

export default function ConformanceDashboard() {
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#000080] via-[#000070] to-[#000050] text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              <Activity size={16} />
              <span>UX4G Governance Portal</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Conformance Reporting & Adoption Dashboards
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Cross-government visibility into UX4G Design System adoption, conformance status, and quality metrics. 
              Track department onboarding, vendor compliance, component usage, and identify areas requiring governance intervention.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm bg-white/10 rounded-full px-4 py-2">
                <Calendar size={16} />
                <span>Last Updated: 8 April 2026, 09:30 IST</span>
              </div>
              <button className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 transition-colors">
                <Download size={16} />
                <span>Export Report</span>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">47</div>
                <div className="text-blue-200 text-sm">Departments Onboarded</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">312</div>
                <div className="text-blue-200 text-sm">Active Services</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">78%</div>
                <div className="text-blue-200 text-sm">Avg Conformance</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">23</div>
                <div className="text-blue-200 text-sm">Open Issues</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b-2 border-border bg-background sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="flex gap-6 overflow-x-auto py-4 text-sm">
            <a href="#overview" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Adoption Overview</a>
            <a href="#departments" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Departments</a>
            <a href="#services" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Active Services</a>
            <a href="#vendors" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Vendor Conformance</a>
            <a href="#component-usage" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Component Usage</a>
            <a href="#framework-usage" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Framework Usage</a>
            <a href="#documentation" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Documentation</a>
            <a href="#accessibility" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Accessibility</a>
            <a href="#releases" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Release Adoption</a>
            <a href="#exceptions" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Exceptions</a>
            <a href="#deprecation" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Deprecation Risk</a>
            <a href="#issues" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Issues</a>
            <a href="#support" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Support Burden</a>
            <a href="#roadmap" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Roadmap</a>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-16">
        <AdoptionOverview />
        <DepartmentsOnboarded />
        <ActiveServices />
        <VendorConformance />
        <ComponentUsageTrends />
        <FrameworkUsageTrends />
        <DocumentationAdoption />
        <AccessibilityReadiness />
        <ReleaseAdoptionStatus />
        <ExceptionsWaivers />
        <DeprecationRisk />
        <NonConformanceLog />
        <SupportBurden />
        <RoadmapPriorities />
      </div>
    </div>
  );
}

// Section Components

function AdoptionOverview() {
  return (
    <section id="overview">
      <SectionHeader
        title="Adoption Overview"
        icon={<BarChart3 size={24} />}
        description="High-level view of UX4G Design System adoption across government"
      />

      <div className="mt-8 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-6">
          <KPICard
            label="Total Departments"
            value="47"
            subtitle="out of 89 ministries/depts"
            trend={{ direction: 'up', value: '+3 this quarter' }}
            status="good"
          />
          <KPICard
            label="Production Services"
            value="312"
            subtitle="live citizen-facing services"
            trend={{ direction: 'up', value: '+18 this month' }}
            status="good"
          />
          <KPICard
            label="Avg Conformance Score"
            value="78%"
            subtitle="across all implementations"
            trend={{ direction: 'down', value: '-2% from last quarter' }}
            status="warning"
          />
          <KPICard
            label="Vendor Partners"
            value="34"
            subtitle="certified implementation vendors"
            trend={{ direction: 'neutral', value: 'No change' }}
            status="neutral"
          />
        </div>

        {/* Adoption Trend Chart */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Quarterly Adoption Trend</h3>
          </div>
          <div className="p-8 bg-card">
            <AdoptionTrendVisualization />
          </div>
        </div>

        {/* Maturity Distribution */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="font-bold text-foreground">Adoption Maturity Distribution</h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-4">
                <MaturityBar label="Exemplar (90-100%)" count={12} total={47} color="green" />
                <MaturityBar label="Conformant (70-89%)" count={23} total={47} color="blue" />
                <MaturityBar label="Developing (50-69%)" count={8} total={47} color="yellow" />
                <MaturityBar label="Non-Conformant (<50%)" count={4} total={47} color="red" />
              </div>
            </div>
          </div>

          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="font-bold text-foreground">Top Performing Sectors</h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-3">
                <SectorPerformanceRow sector="Digital Services" score={94} services={48} />
                <SectorPerformanceRow sector="Revenue & Taxation" score={89} services={37} />
                <SectorPerformanceRow sector="Social Welfare" score={82} services={56} />
                <SectorPerformanceRow sector="Healthcare" score={79} services={41} />
                <SectorPerformanceRow sector="Education" score={76} services={33} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DepartmentsOnboarded() {
  return (
    <section id="departments">
      <SectionHeader
        title="Departments Onboarded"
        icon={<Building2 size={24} />}
        description="Ministry and department-level adoption tracking"
      />

      <div className="mt-8 space-y-6">
        {/* Department Comparison Matrix */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border flex items-center justify-between">
            <h3 className="font-bold text-foreground">Department Conformance Matrix</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              <Filter size={14} />
              Filter by Sector
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted border-b-2 border-border">
                <tr>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Department</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Services</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Conformance</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Accessibility</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Version</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Status</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Last Audit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <DepartmentRow
                  name="Ministry of Electronics & IT"
                  code="MeitY"
                  services={28}
                  conformance={96}
                  accessibility={98}
                  version="v3.2.1"
                  status="exemplar"
                  lastAudit="12 Mar 2026"
                />
                <DepartmentRow
                  name="Income Tax Department"
                  code="ITD"
                  services={18}
                  conformance={92}
                  accessibility={94}
                  version="v3.2.0"
                  status="exemplar"
                  lastAudit="5 Apr 2026"
                />
                <DepartmentRow
                  name="Passport Seva"
                  code="MEA-PSP"
                  services={12}
                  conformance={88}
                  accessibility={91}
                  version="v3.1.5"
                  status="conformant"
                  lastAudit="22 Feb 2026"
                />
                <DepartmentRow
                  name="National Scholarship Portal"
                  code="MoSJE-NSP"
                  services={15}
                  conformance={84}
                  accessibility={87}
                  version="v3.2.1"
                  status="conformant"
                  lastAudit="1 Apr 2026"
                />
                <DepartmentRow
                  name="EPFO (Employee Provident Fund)"
                  code="MoL-EPFO"
                  services={22}
                  conformance={79}
                  accessibility={82}
                  version="v3.0.8"
                  status="conformant"
                  lastAudit="18 Mar 2026"
                />
                <DepartmentRow
                  name="State Services Portal (UP)"
                  code="UP-SSP"
                  services={34}
                  conformance={67}
                  accessibility={71}
                  version="v2.8.4"
                  status="developing"
                  lastAudit="15 Jan 2026"
                />
                <DepartmentRow
                  name="Railway Reservation System"
                  code="MoR-RRS"
                  services={8}
                  conformance={62}
                  accessibility={68}
                  version="v3.1.0"
                  status="developing"
                  lastAudit="8 Feb 2026"
                />
                <DepartmentRow
                  name="Municipal Corporation Portal (Delhi)"
                  code="GNCTD-MCD"
                  services={19}
                  conformance={43}
                  accessibility={52}
                  version="v2.5.1"
                  status="non-conformant"
                  lastAudit="3 Dec 2025"
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Heat Map */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Conformance Heat Map by Ministry</h3>
          </div>
          <div className="p-8 bg-card">
            <ConformanceHeatMap />
          </div>
        </div>
      </div>
    </section>
  );
}

function ActiveServices() {
  return (
    <section id="services">
      <SectionHeader
        title="Active Service Implementations"
        icon={<Activity size={24} />}
        description="Live production services using UX4G Design System"
      />

      <div className="mt-8 space-y-6">
        {/* Service Stats */}
        <div className="grid grid-cols-3 gap-6">
          <StatCard
            label="Total Production Services"
            value="312"
            detail="Serving 450M+ citizens monthly"
            icon={<Activity className="text-blue-600" size={20} />}
          />
          <StatCard
            label="High-Traffic Services"
            value="47"
            detail=">1M monthly users"
            icon={<TrendingUp className="text-green-600" size={20} />}
          />
          <StatCard
            label="Recently Launched"
            value="18"
            detail="In last 30 days"
            icon={<Calendar className="text-purple-600" size={20} />}
          />
        </div>

        {/* Service Categories */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Services by Category</h3>
          </div>
          <div className="p-6 bg-card">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <ServiceCategoryBar category="Taxation & Revenue" count={52} conformance={87} />
                <ServiceCategoryBar category="Social Welfare & Benefits" count={48} conformance={82} />
                <ServiceCategoryBar category="Licensing & Permits" count={41} conformance={79} />
                <ServiceCategoryBar category="Identity & Verification" count={38} conformance={94} />
                <ServiceCategoryBar category="Healthcare Services" count={34} conformance={76} />
              </div>
              <div className="space-y-3">
                <ServiceCategoryBar category="Education & Scholarship" count={29} conformance={81} />
                <ServiceCategoryBar category="Transportation" count={24} conformance={68} />
                <ServiceCategoryBar category="Grievance & Complaints" count={19} conformance={73} />
                <ServiceCategoryBar category="Employment Services" count={16} conformance={85} />
                <ServiceCategoryBar category="Other Services" count={11} conformance={71} />
              </div>
            </div>
          </div>
        </div>

        {/* Action Required */}
        <ActionRequiredPanel
          title="Services Requiring Attention"
          items={[
            { service: 'Municipal Tax Portal (Bangalore)', issue: 'Using deprecated components (v2.x)', severity: 'high', deadline: '30 Apr 2026' },
            { service: 'State Employment Exchange (Bihar)', issue: 'Accessibility score below 70%', severity: 'high', deadline: '15 May 2026' },
            { service: 'Vehicle Registration Portal (Maharashtra)', issue: 'Non-conformant form patterns', severity: 'medium', deadline: '30 Jun 2026' },
            { service: 'Ration Card Services (Kerala)', issue: 'Using custom components instead of UX4G', severity: 'medium', deadline: '31 Jul 2026' }
          ]}
        />
      </div>
    </section>
  );
}

function VendorConformance() {
  return (
    <section id="vendors">
      <SectionHeader
        title="Vendor Conformance Status"
        icon={<Award size={24} />}
        description="Implementation partner compliance and certification tracking"
      />

      <div className="mt-8 space-y-6">
        {/* Vendor Stats */}
        <div className="grid grid-cols-4 gap-6">
          <KPICard
            label="Certified Vendors"
            value="34"
            subtitle="out of 52 active vendors"
            status="good"
          />
          <KPICard
            label="Avg Vendor Score"
            value="82%"
            subtitle="certification compliance"
            status="good"
          />
          <KPICard
            label="Certification Expiring"
            value="7"
            subtitle="in next 60 days"
            status="warning"
          />
          <KPICard
            label="Non-Compliant"
            value="3"
            subtitle="requires intervention"
            status="critical"
          />
        </div>

        {/* Vendor Compliance Cards */}
        <div className="grid grid-cols-2 gap-6">
          <VendorComplianceCard
            name="TCS (Tata Consultancy Services)"
            certification="UX4G Certified - Level 3"
            projects={28}
            conformanceScore={94}
            lastAudit="15 Mar 2026"
            expiryDate="15 Sep 2026"
            status="excellent"
          />
          <VendorComplianceCard
            name="Infosys Limited"
            certification="UX4G Certified - Level 3"
            projects={22}
            conformanceScore={91}
            lastAudit="8 Apr 2026"
            expiryDate="8 Oct 2026"
            status="excellent"
          />
          <VendorComplianceCard
            name="Wipro Digital"
            certification="UX4G Certified - Level 2"
            projects={18}
            conformanceScore={87}
            lastAudit="22 Feb 2026"
            expiryDate="22 Aug 2026"
            status="good"
          />
          <VendorComplianceCard
            name="NIC (National Informatics Centre)"
            certification="UX4G Certified - Level 3"
            projects={45}
            conformanceScore={96}
            lastAudit="1 Apr 2026"
            expiryDate="1 Oct 2026"
            status="excellent"
          />
          <VendorComplianceCard
            name="Tech Mahindra"
            certification="UX4G Certified - Level 2"
            projects={15}
            conformanceScore={79}
            lastAudit="12 Jan 2026"
            expiryDate="12 May 2026"
            status="warning"
          />
          <VendorComplianceCard
            name="Persistent Systems"
            certification="UX4G Certified - Level 1"
            projects={9}
            conformanceScore={68}
            lastAudit="5 Dec 2025"
            expiryDate="5 Apr 2026"
            status="expiring"
          />
        </div>

        {/* Certification Levels */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Vendor Certification Levels</h3>
          </div>
          <div className="p-6 bg-card">
            <div className="grid grid-cols-3 gap-6">
              <CertificationLevelCard
                level="Level 3 - Exemplar"
                vendors={8}
                requirements={['95%+ conformance', 'Accessibility expert', '20+ projects', 'Training capability']}
                color="green"
              />
              <CertificationLevelCard
                level="Level 2 - Proficient"
                vendors={16}
                requirements={['80%+ conformance', 'Accessibility compliant', '10+ projects', 'Documentation complete']}
                color="blue"
              />
              <CertificationLevelCard
                level="Level 1 - Certified"
                vendors={10}
                requirements={['70%+ conformance', 'Basic accessibility', '5+ projects', 'Training completed']}
                color="yellow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComponentUsageTrends() {
  return (
    <section id="component-usage">
      <SectionHeader
        title="Component Usage Trends"
        icon={<Package size={24} />}
        description="UX4G component library adoption and usage patterns"
      />

      <div className="mt-8 space-y-6">
        {/* Top Components */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Most Used Components</h3>
          </div>
          <div className="p-6 bg-card">
            <div className="space-y-3">
              <ComponentUsageBar component="Button" usage={312} implementations={98} trend="stable" />
              <ComponentUsageBar component="Form Input" usage={298} implementations={95} trend="up" />
              <ComponentUsageBar component="Alert Banner" usage={287} implementations={92} trend="up" />
              <ComponentUsageBar component="Card" usage={256} implementations={82} trend="stable" />
              <ComponentUsageBar component="Navigation Header" usage={234} implementations={75} trend="stable" />
              <ComponentUsageBar component="Table" usage={221} implementations={71} trend="up" />
              <ComponentUsageBar component="Modal" usage={198} implementations={63} trend="up" />
              <ComponentUsageBar component="Stepper" usage={187} implementations={60} trend="stable" />
              <ComponentUsageBar component="Date Picker" usage={176} implementations={56} trend="up" />
              <ComponentUsageBar component="Badge" usage={165} implementations={53} trend="stable" />
            </div>
          </div>
        </div>

        {/* Underutilized Components */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-orange-200 rounded-lg overflow-hidden">
            <div className="bg-orange-50 p-6 border-b-2 border-orange-200">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <AlertTriangle className="text-orange-600" size={20} />
                Underutilized Components
              </h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-2 text-sm">
                <UnderutilizedComponentRow component="Timeline" usage={23} potential="High for status tracking" />
                <UnderutilizedComponentRow component="Accordion" usage={34} potential="Good for FAQs" />
                <UnderutilizedComponentRow component="Breadcrumb" usage={41} potential="Improves navigation" />
                <UnderutilizedComponentRow component="Tooltip" usage={52} potential="Enhances UX" />
                <UnderutilizedComponentRow component="Progress Bar" usage={67} potential="Good for multi-step" />
              </div>
            </div>
          </div>

          <div className="border-2 border-purple-200 rounded-lg overflow-hidden">
            <div className="bg-purple-50 p-6 border-b-2 border-purple-200">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="text-purple-600" size={20} />
                Growing Adoption
              </h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-2 text-sm">
                <GrowingComponentRow component="File Upload" growth="+45%" quarter="Q4 2025" />
                <GrowingComponentRow component="Search Autocomplete" growth="+38%" quarter="Q4 2025" />
                <GrowingComponentRow component="OTP Input" growth="+32%" quarter="Q4 2025" />
                <GrowingComponentRow component="Status Timeline" growth="+28%" quarter="Q4 2025" />
                <GrowingComponentRow component="Feedback Widget" growth="+24%" quarter="Q4 2025" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FrameworkUsageTrends() {
  return (
    <section id="framework-usage">
      <SectionHeader
        title="Framework Usage Trends"
        icon={<Code size={24} />}
        description="Technology stack and framework adoption across implementations"
      />

      <div className="mt-8 space-y-6">
        {/* Framework Distribution */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="font-bold text-foreground">Framework Distribution</h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-4">
                <FrameworkBar framework="React" services={178} percentage={57} version="18.x" />
                <FrameworkBar framework="Angular" services={89} percentage={29} version="16.x / 17.x" />
                <FrameworkBar framework="Vue.js" services={31} percentage={10} version="3.x" />
                <FrameworkBar framework="Other/Custom" services={14} percentage={4} version="Mixed" />
              </div>
            </div>
          </div>

          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="font-bold text-foreground">Package Distribution Method</h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-4">
                <PackageMethodBar method="NPM Package" services={234} percentage={75} status="recommended" />
                <PackageMethodBar method="CDN (Hosted)" services={52} percentage={17} status="acceptable" />
                <PackageMethodBar method="Manual Integration" services={19} percentage={6} status="discouraged" />
                <PackageMethodBar method="Custom Build" services={7} percentage={2} status="non-conformant" />
              </div>
            </div>
          </div>
        </div>

        {/* Version Adoption */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">UX4G Version Adoption</h3>
          </div>
          <div className="p-6 bg-card">
            <div className="space-y-3">
              <VersionAdoptionRow version="v3.2.x (Latest)" services={142} percentage={46} status="current" />
              <VersionAdoptionRow version="v3.1.x" services={98} percentage={31} status="supported" />
              <VersionAdoptionRow version="v3.0.x" services={47} percentage={15} status="supported" />
              <VersionAdoptionRow version="v2.x (Legacy)" services={21} percentage={7} status="deprecated" />
              <VersionAdoptionRow version="v1.x (Legacy)" services={4} percentage={1} status="unsupported" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocumentationAdoption() {
  return (
    <section id="documentation">
      <SectionHeader
        title="Documentation Adoption Signals"
        icon={<FileText size={24} />}
        description="How teams are engaging with UX4G documentation and resources"
      />

      <div className="mt-8 space-y-6">
        {/* Documentation Engagement */}
        <div className="grid grid-cols-3 gap-6">
          <StatCard
            label="Monthly Active Users"
            value="1,247"
            detail="Team members accessing docs"
            icon={<Users className="text-blue-600" size={20} />}
          />
          <StatCard
            label="Avg Session Duration"
            value="12m 34s"
            detail="Time spent on documentation"
            icon={<Clock className="text-green-600" size={20} />}
          />
          <StatCard
            label="Support Ticket Reduction"
            value="-23%"
            detail="Since docs improvements"
            icon={<TrendingDown className="text-green-600" size={20} />}
          />
        </div>

        {/* Popular Pages */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Most Visited Documentation Pages</h3>
          </div>
          <div className="p-6 bg-card">
            <div className="space-y-3">
              <DocPageRow page="Component Documentation" visits={8432} avgTime="8m 12s" bounce="18%" />
              <DocPageRow page="Getting Started Guide" visits={6789} avgTime="6m 45s" bounce="24%" />
              <DocPageRow page="Accessibility Guidelines" visits={5234} avgTime="11m 23s" bounce="15%" />
              <DocPageRow page="Design Tokens Reference" visits={4567} avgTime="5m 34s" bounce="28%" />
              <DocPageRow page="Form Patterns Library" visits={3891} avgTime="9m 18s" bounce="19%" />
              <DocPageRow page="Installation & Setup" visits={3456} avgTime="7m 56s" bounce="31%" />
            </div>
          </div>
        </div>

        {/* Resource Downloads */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="font-bold text-foreground">Resource Downloads</h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-2 text-sm">
                <ResourceDownloadRow resource="Figma UI Kit" downloads={487} />
                <ResourceDownloadRow resource="Component Storybook" downloads={423} />
                <ResourceDownloadRow resource="Design Guidelines PDF" downloads={389} />
                <ResourceDownloadRow resource="Code Examples Repository" downloads={356} />
                <ResourceDownloadRow resource="Accessibility Checklist" downloads={298} />
              </div>
            </div>
          </div>

          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="font-bold text-foreground">Documentation Gaps</h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-2 text-sm">
                <DocGapRow gap="Angular migration guide" tickets={34} priority="high" />
                <DocGapRow gap="Server-side rendering examples" tickets={28} priority="high" />
                <DocGapRow gap="Offline-first patterns" tickets={19} priority="medium" />
                <DocGapRow gap="Multilingual implementation guide" tickets={15} priority="medium" />
                <DocGapRow gap="Performance optimization guide" tickets={12} priority="low" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessibilityReadiness() {
  return (
    <section id="accessibility">
      <SectionHeader
        title="Accessibility Readiness Summary"
        icon={<Eye size={24} />}
        description="WCAG 2.1 AA compliance status across implementations"
      />

      <div className="mt-8 space-y-6">
        {/* Accessibility KPIs */}
        <div className="grid grid-cols-4 gap-6">
          <KPICard
            label="WCAG AA Compliant"
            value="267"
            subtitle="out of 312 services (86%)"
            status="good"
          />
          <KPICard
            label="Avg Accessibility Score"
            value="84%"
            subtitle="automated testing average"
            status="good"
          />
          <KPICard
            label="Critical Issues"
            value="12"
            subtitle="requiring immediate fix"
            status="critical"
          />
          <KPICard
            label="Manual Audits Pending"
            value="23"
            subtitle="services awaiting audit"
            status="warning"
          />
        </div>

        {/* Accessibility Heat Map */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Accessibility Compliance by WCAG Criteria</h3>
          </div>
          <div className="p-6 bg-card">
            <div className="space-y-3">
              <WCAGCriteriaRow criteria="1.1 Text Alternatives" compliant={298} total={312} percentage={96} />
              <WCAGCriteriaRow criteria="1.3 Adaptable Content" compliant={287} total={312} percentage={92} />
              <WCAGCriteriaRow criteria="1.4 Distinguishable" compliant={276} total={312} percentage={88} />
              <WCAGCriteriaRow criteria="2.1 Keyboard Accessible" compliant={289} total={312} percentage={93} />
              <WCAGCriteriaRow criteria="2.4 Navigable" compliant={281} total={312} percentage={90} />
              <WCAGCriteriaRow criteria="3.1 Readable" compliant={294} total={312} percentage={94} />
              <WCAGCriteriaRow criteria="3.2 Predictable" compliant={302} total={312} percentage={97} />
              <WCAGCriteriaRow criteria="4.1 Compatible" compliant={291} total={312} percentage={93} />
            </div>
          </div>
        </div>

        {/* Critical Accessibility Issues */}
        <ActionRequiredPanel
          title="Critical Accessibility Issues"
          items={[
            { service: 'Tax Filing Portal (West Bengal)', issue: 'Missing form labels (WCAG 1.3.1)', severity: 'critical', deadline: '15 Apr 2026' },
            { service: 'License Application (Haryana)', issue: 'Insufficient color contrast (WCAG 1.4.3)', severity: 'critical', deadline: '20 Apr 2026' },
            { service: 'Healthcare Registration (Assam)', issue: 'Keyboard navigation broken (WCAG 2.1.1)', severity: 'critical', deadline: '25 Apr 2026' },
          ]}
        />
      </div>
    </section>
  );
}

function ReleaseAdoptionStatus() {
  return (
    <section id="releases">
      <SectionHeader
        title="Release Adoption Status"
        icon={<GitBranch size={24} />}
        description="Version migration and update adoption tracking"
      />

      <div className="mt-8 space-y-6">
        {/* Release Timeline */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Recent Releases & Adoption Rate</h3>
          </div>
          <div className="p-6 bg-card">
            <div className="space-y-4">
              <ReleaseAdoptionRow
                version="v3.2.1"
                releaseDate="1 Mar 2026"
                adopted={142}
                total={312}
                daysLive={38}
                status="current"
              />
              <ReleaseAdoptionRow
                version="v3.2.0"
                releaseDate="15 Jan 2026"
                adopted={98}
                total={312}
                daysLive={84}
                status="current"
              />
              <ReleaseAdoptionRow
                version="v3.1.5"
                releaseDate="1 Nov 2025"
                adopted={47}
                total={312}
                daysLive={159}
                status="maintenance"
              />
              <ReleaseAdoptionRow
                version="v3.0.8"
                releaseDate="15 Aug 2025"
                adopted={21}
                total={312}
                daysLive={237}
                status="deprecated"
              />
            </div>
          </div>
        </div>

        {/* Migration Status */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="font-bold text-foreground">Migration to v3.2.x Progress</h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-4">
                <MigrationStatusBar status="Completed" count={142} percentage={46} color="green" />
                <MigrationStatusBar status="In Progress" count={89} percentage={29} color="blue" />
                <MigrationStatusBar status="Planned (Q2 2026)" count={56} percentage={18} color="yellow" />
                <MigrationStatusBar status="Not Planned" count={25} percentage={7} color="red" />
              </div>
            </div>
          </div>

          <div className="border-2 border-orange-200 rounded-lg overflow-hidden">
            <div className="bg-orange-50 p-6 border-b-2 border-orange-200">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <AlertTriangle className="text-orange-600" size={20} />
                Services on Deprecated Versions
              </h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-2 text-sm">
                <DeprecatedServiceRow service="Municipal Portal (Bangalore)" version="v2.8.4" endOfLife="30 Jun 2026" />
                <DeprecatedServiceRow service="Ration Card (Uttar Pradesh)" version="v2.7.2" endOfLife="30 Jun 2026" />
                <DeprecatedServiceRow service="Property Tax (Delhi MCD)" version="v2.5.1" endOfLife="30 Jun 2026" />
                <DeprecatedServiceRow service="Birth Certificate (Maharashtra)" version="v1.9.8" endOfLife="31 Mar 2026" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExceptionsWaivers() {
  return (
    <section id="exceptions">
      <SectionHeader
        title="Exceptions and Waivers"
        icon={<Shield size={24} />}
        description="Approved deviations from UX4G standards and their governance"
      />

      <div className="mt-8 space-y-6">
        {/* Exception Stats */}
        <div className="grid grid-cols-4 gap-6">
          <StatCard
            label="Active Exceptions"
            value="18"
            detail="Approved by governance board"
            icon={<Shield className="text-blue-600" size={20} />}
          />
          <StatCard
            label="Pending Review"
            value="7"
            detail="Awaiting board decision"
            icon={<Clock className="text-yellow-600" size={20} />}
          />
          <StatCard
            label="Expiring Soon"
            value="4"
            detail="Within 60 days"
            icon={<AlertTriangle className="text-orange-600" size={20} />}
          />
          <StatCard
            label="Rejected"
            value="12"
            detail="In last 6 months"
            icon={<XCircle className="text-red-600" size={20} />}
          />
        </div>

        {/* Exceptions Table */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Active Exceptions Registry</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted border-b-2 border-border">
                <tr>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Service</th>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Exception Type</th>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Justification</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Approved</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Expires</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <ExceptionRow
                  service="Income Tax E-Filing"
                  type="Custom Authentication Flow"
                  justification="Integration with existing tax database security"
                  approved="12 Jan 2026"
                  expires="12 Jan 2027"
                  status="active"
                />
                <ExceptionRow
                  service="Railway Reservation"
                  type="Legacy Browser Support (IE11)"
                  justification="Counter systems using old hardware"
                  approved="5 Nov 2025"
                  expires="5 May 2026"
                  status="expiring"
                />
                <ExceptionRow
                  service="Defense Portal"
                  type="Custom Security Components"
                  justification="National security requirements"
                  approved="22 Aug 2025"
                  expires="22 Aug 2027"
                  status="active"
                />
                <ExceptionRow
                  service="Election Commission Portal"
                  type="Offline-First Architecture"
                  justification="Remote area connectivity issues"
                  approved="3 Feb 2026"
                  expires="3 Feb 2027"
                  status="active"
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending Exceptions */}
        <div className="border-2 border-yellow-200 rounded-lg overflow-hidden">
          <div className="bg-yellow-50 p-6 border-b-2 border-yellow-200">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Clock className="text-yellow-600" size={20} />
              Exceptions Pending Governance Review
            </h3>
          </div>
          <div className="p-6 bg-card">
            <div className="space-y-3">
              <PendingExceptionRow
                service="State GST Portal (Tamil Nadu)"
                request="Custom data table for complex tax forms"
                requestedDate="28 Mar 2026"
                reviewDate="18 Apr 2026"
              />
              <PendingExceptionRow
                service="Scholarship Portal Enhancement"
                request="Third-party PDF viewer integration"
                requestedDate="2 Apr 2026"
                reviewDate="22 Apr 2026"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeprecationRisk() {
  return (
    <section id="deprecation">
      <SectionHeader
        title="Deprecation Risk Tracking"
        icon={<AlertCircle size={24} />}
        description="Services using deprecated features and migration urgency"
      />

      <div className="mt-8 space-y-6">
        {/* Risk Summary */}
        <div className="grid grid-cols-3 gap-6">
          <RiskSummaryCard
            level="Critical"
            count={4}
            description="On unsupported versions (v1.x)"
            deadline="Immediate migration required"
            color="red"
          />
          <RiskSummaryCard
            level="High"
            count={21}
            description="On deprecated versions (v2.x)"
            deadline="Migrate by 30 Jun 2026"
            color="orange"
          />
          <RiskSummaryCard
            level="Medium"
            count={47}
            description="On maintenance versions (v3.0.x)"
            deadline="Migrate by 31 Dec 2026"
            color="yellow"
          />
        </div>

        {/* Deprecated Features */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Deprecated Features Still in Use</h3>
          </div>
          <div className="p-6 bg-card">
            <div className="space-y-4">
              <DeprecatedFeatureRow
                feature="Legacy Modal Component (v2.x)"
                affectedServices={23}
                deprecatedDate="1 Jan 2026"
                endOfLife="30 Jun 2026"
                replacement="Modal v3.x with improved accessibility"
                risk="high"
              />
              <DeprecatedFeatureRow
                feature="Old Form Validation Pattern"
                affectedServices={18}
                deprecatedDate="15 Feb 2026"
                endOfLife="15 Aug 2026"
                replacement="Schema-based validation with better error handling"
                risk="high"
              />
              <DeprecatedFeatureRow
                feature="Classic Stepper Component"
                affectedServices={34}
                deprecatedDate="1 Mar 2026"
                endOfLife="1 Sep 2026"
                replacement="Enhanced Stepper with save/resume support"
                risk="medium"
              />
              <DeprecatedFeatureRow
                feature="Legacy Color Tokens"
                affectedServices={41}
                deprecatedDate="15 Nov 2025"
                endOfLife="15 May 2026"
                replacement="Semantic color tokens with theme support"
                risk="high"
              />
            </div>
          </div>
        </div>

        {/* Lifecycle Warnings */}
        <div className="border-2 border-red-200 rounded-lg overflow-hidden">
          <div className="bg-red-50 p-6 border-b-2 border-red-200">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <AlertCircle className="text-red-600" size={20} />
              Urgent Lifecycle Warnings
            </h3>
          </div>
          <div className="p-6 bg-card">
            <div className="space-y-3">
              <LifecycleWarningRow
                service="Property Tax Portal (MCD Delhi)"
                version="v1.9.8"
                warning="Version 1.x unsupported since 1 Jan 2026"
                action="Immediate upgrade required"
                severity="critical"
              />
              <LifecycleWarningRow
                service="Municipal Services (Bangalore)"
                version="v2.8.4"
                warning="End of life: 30 Jun 2026 (83 days)"
                action="Migration plan due 30 Apr 2026"
                severity="high"
              />
              <LifecycleWarningRow
                service="Ration Card Services (UP)"
                version="v2.7.2"
                warning="Using 12 deprecated components"
                action="Component audit and replacement"
                severity="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NonConformanceLog() {
  return (
    <section id="issues">
      <SectionHeader
        title="Non-Conformance Issue Log"
        icon={<AlertTriangle size={24} />}
        description="Documented quality issues and resolution tracking"
      />

      <div className="mt-8 space-y-6">
        {/* Issue Stats */}
        <div className="grid grid-cols-4 gap-6">
          <KPICard
            label="Open Issues"
            value="23"
            subtitle="Across all services"
            status="warning"
          />
          <KPICard
            label="Critical Priority"
            value="5"
            subtitle="Require immediate action"
            status="critical"
          />
          <KPICard
            label="Avg Resolution Time"
            value="12 days"
            subtitle="For non-critical issues"
            status="neutral"
          />
          <KPICard
            label="Resolved (30d)"
            value="34"
            subtitle="Issues closed this month"
            status="good"
          />
        </div>

        {/* Issues Table */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border flex items-center justify-between">
            <h3 className="font-bold text-foreground">Active Non-Conformance Issues</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              <Filter size={14} />
              Filter by Severity
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted border-b-2 border-border">
                <tr>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Issue ID</th>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Service</th>
                  <th className="text-left p-4 text-sm font-bold text-foreground">Issue Description</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Severity</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Reported</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Assignee</th>
                  <th className="text-center p-4 text-sm font-bold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <IssueRow
                  id="NC-2026-089"
                  service="Vehicle Registration (MH)"
                  description="Custom form components not using UX4G library"
                  severity="high"
                  reported="2 Apr 2026"
                  assignee="Vendor: Tech Solutions Ltd"
                  status="in-progress"
                />
                <IssueRow
                  id="NC-2026-087"
                  service="Employment Portal (Bihar)"
                  description="Accessibility: Missing ARIA labels on form fields"
                  severity="critical"
                  reported="28 Mar 2026"
                  assignee="Vendor: Infosys"
                  status="in-progress"
                />
                <IssueRow
                  id="NC-2026-084"
                  service="Tax Portal (West Bengal)"
                  description="Using deprecated color tokens from v2.x"
                  severity="medium"
                  reported="22 Mar 2026"
                  assignee="Dept: IT Cell WB"
                  status="open"
                />
                <IssueRow
                  id="NC-2026-081"
                  service="Scholarship Portal (National)"
                  description="Inconsistent button styles across pages"
                  severity="low"
                  reported="18 Mar 2026"
                  assignee="Vendor: TCS"
                  status="open"
                />
                <IssueRow
                  id="NC-2026-076"
                  service="Healthcare Registration (Assam)"
                  description="Broken keyboard navigation on multi-step form"
                  severity="critical"
                  reported="12 Mar 2026"
                  assignee="Vendor: NIC"
                  status="testing"
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Issue Trends */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="font-bold text-foreground">Issues by Category</h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-3">
                <IssueCategoryBar category="Accessibility" count={8} percentage={35} />
                <IssueCategoryBar category="Component Usage" count={6} percentage={26} />
                <IssueCategoryBar category="Design Tokens" count={4} percentage={17} />
                <IssueCategoryBar category="Deprecated Features" count={3} percentage={13} />
                <IssueCategoryBar category="Documentation" count={2} percentage={9} />
              </div>
            </div>
          </div>

          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="font-bold text-foreground">Resolution Performance</h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-4">
                <ResolutionMetricRow metric="Within SLA" count={28} total={34} percentage={82} />
                <ResolutionMetricRow metric="Beyond SLA" count={6} total={34} percentage={18} />
                <div className="pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground mb-2">Avg Resolution Time by Severity</div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span>Critical:</span><span className="font-bold">3.2 days</span></div>
                    <div className="flex justify-between"><span>High:</span><span className="font-bold">8.5 days</span></div>
                    <div className="flex justify-between"><span>Medium:</span><span className="font-bold">14.7 days</span></div>
                    <div className="flex justify-between"><span>Low:</span><span className="font-bold">21.3 days</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportBurden() {
  return (
    <section id="support">
      <SectionHeader
        title="Support Burden Trends"
        icon={<MessageSquare size={24} />}
        description="Platform support requests and resource allocation analysis"
      />

      <div className="mt-8 space-y-6">
        {/* Support Stats */}
        <div className="grid grid-cols-4 gap-6">
          <StatCard
            label="Support Tickets (30d)"
            value="287"
            detail="-12% from last month"
            icon={<MessageSquare className="text-blue-600" size={20} />}
          />
          <StatCard
            label="Avg Response Time"
            value="4.2 hrs"
            detail="First response SLA: <8hrs"
            icon={<Clock className="text-green-600" size={20} />}
          />
          <StatCard
            label="Self-Service Rate"
            value="64%"
            detail="Resolved via documentation"
            icon={<FileText className="text-purple-600" size={20} />}
          />
          <StatCard
            label="Escalations"
            value="12"
            detail="Requiring core team involvement"
            icon={<AlertTriangle className="text-orange-600" size={20} />}
          />
        </div>

        {/* Support by Department */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Support Volume by Department</h3>
          </div>
          <div className="p-6 bg-card">
            <div className="space-y-3">
              <SupportVolumeBar department="State Services Portal (UP)" tickets={34} avgTime="6.2 hrs" satisfaction={4.1} />
              <SupportVolumeBar department="Municipal Corporation (Bangalore)" tickets={28} avgTime="5.8 hrs" satisfaction={3.9} />
              <SupportVolumeBar department="Employment Services (Bihar)" tickets={23} avgTime="7.1 hrs" satisfaction={3.7} />
              <SupportVolumeBar department="Scholarship Portal" tickets={19} avgTime="4.5 hrs" satisfaction={4.5} />
              <SupportVolumeBar department="Healthcare Registration (Assam)" tickets={17} avgTime="8.3 hrs" satisfaction={3.4} />
            </div>
          </div>
        </div>

        {/* Common Support Topics */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="font-bold text-foreground">Top Support Topics</h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-2 text-sm">
                <SupportTopicRow topic="Component implementation guidance" tickets={78} trend="stable" />
                <SupportTopicRow topic="Accessibility compliance questions" tickets={56} trend="up" />
                <SupportTopicRow topic="Version migration assistance" tickets={43} trend="down" />
                <SupportTopicRow topic="Design token usage" tickets={38} trend="stable" />
                <SupportTopicRow topic="Framework integration issues" tickets={29} trend="up" />
                <SupportTopicRow topic="Documentation clarifications" tickets={24} trend="down" />
              </div>
            </div>
          </div>

          <div className="border-2 border-green-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 p-6 border-b-2 border-green-200">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <TrendingDown className="text-green-600" size={20} />
                Support Reduction Initiatives
              </h3>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-3 text-sm">
                <InitiativeRow
                  initiative="Enhanced code examples in docs"
                  impact="-23% tickets on implementation"
                  status="completed"
                />
                <InitiativeRow
                  initiative="Migration wizard tool"
                  impact="-18% version upgrade tickets"
                  status="completed"
                />
                <InitiativeRow
                  initiative="Interactive component playground"
                  impact="-15% component usage questions"
                  status="in-progress"
                />
                <InitiativeRow
                  initiative="Video tutorial series"
                  impact="Target: -20% beginner questions"
                  status="planned"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapPriorities() {
  return (
    <section id="roadmap">
      <SectionHeader
        title="Roadmap and Improvement Priorities"
        icon={<Target size={24} />}
        description="Strategic priorities based on adoption data and governance needs"
      />

      <div className="mt-8 space-y-6">
        {/* Current Quarter Priorities */}
        <div className="border-2 border-blue-200 rounded-lg overflow-hidden">
          <div className="bg-blue-50 p-6 border-b-2 border-blue-200">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-foreground">Q2 2026 Priorities (Apr-Jun)</h3>
              <span className="text-sm text-blue-700 font-medium">Based on conformance data</span>
            </div>
          </div>
          <div className="p-6 bg-card">
            <div className="space-y-4">
              <PriorityCard
                priority={1}
                title="Legacy Version Migration Support"
                rationale="25 services still on v2.x (8% of total) with June 2026 end-of-life"
                impact="High - Reduces technical debt and security risk"
                effort="Medium - Migration tooling and documentation"
                owner="Platform Core Team"
                timeline="Apr-May 2026"
              />
              <PriorityCard
                priority={2}
                title="Accessibility Compliance Remediation"
                rationale="12 services with critical accessibility issues affecting WCAG AA compliance"
                impact="Critical - Legal and inclusion requirements"
                effort="High - Requires vendor coordination and testing"
                owner="Accessibility Working Group"
                timeline="Apr-Jun 2026"
              />
              <PriorityCard
                priority={3}
                title="Angular Framework Support Enhancement"
                rationale="29% of services use Angular but documentation gaps identified"
                impact="Medium - Improves adoption in Angular ecosystem"
                effort="Medium - Documentation and examples"
                owner="Documentation Team"
                timeline="May-Jun 2026"
              />
            </div>
          </div>
        </div>

        {/* Next Quarter Preview */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Q3 2026 Planning (Jul-Sep)</h3>
          </div>
          <div className="p-6 bg-card">
            <div className="grid grid-cols-2 gap-4">
              <UpcomingPriorityCard
                title="Offline-First Patterns"
                drivers={['3 exception requests', 'Rural connectivity gaps']}
                status="research"
              />
              <UpcomingPriorityCard
                title="Component Performance Optimization"
                drivers={['Support tickets on load times', 'Mobile usage growth']}
                status="scoping"
              />
              <UpcomingPriorityCard
                title="Multi-Language Support Expansion"
                drivers={['Regional language services growing', '8+ languages requested']}
                status="planned"
              />
              <UpcomingPriorityCard
                title="Vendor Certification Program v2"
                drivers={['Level system refinement needed', 'Demand for advanced training']}
                status="planned"
              />
            </div>
          </div>
        </div>

        {/* Data-Driven Insights */}
        <div className="border-2 border-purple-200 rounded-lg overflow-hidden">
          <div className="bg-purple-50 p-6 border-b-2 border-purple-200">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <BarChart3 className="text-purple-600" size={20} />
              Key Insights from Conformance Data
            </h3>
          </div>
          <div className="p-6 bg-card">
            <div className="grid grid-cols-2 gap-6">
              <InsightCard
                insight="Services using NPM packages have 23% higher conformance scores than manual integration"
                recommendation="Promote NPM distribution method, deprecate manual installation guidance"
                impact="High"
              />
              <InsightCard
                insight="Departments with dedicated UX4G champions show 31% faster version adoption"
                recommendation="Expand champion program to all ministries"
                impact="High"
              />
              <InsightCard
                insight="Timeline and Accordion components underutilized despite high applicability"
                recommendation="Create sector-specific implementation guides for these components"
                impact="Medium"
              />
              <InsightCard
                insight="Support ticket volume correlates with documentation gaps (r=0.78)"
                recommendation="Prioritize doc improvements in high-ticket areas"
                impact="Medium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Components

function SectionHeader({ title, icon, description }: any) {
  return (
    <div className="border-b-2 border-border pb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-primary">{icon}</div>
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      </div>
      <p className="text-muted-foreground ml-11">{description}</p>
    </div>
  );
}

function KPICard({ label, value, subtitle, trend, status }: any) {
  const statusColors: any = {
    good: 'border-green-200 bg-green-50',
    warning: 'border-yellow-200 bg-yellow-50',
    critical: 'border-red-200 bg-red-50',
    neutral: 'border-border bg-background'
  };

  const trendIcons: any = {
    up: <ArrowUpRight className="text-green-600" size={16} />,
    down: <ArrowDownRight className="text-red-600" size={16} />,
    neutral: <Minus className="text-muted-foreground" size={16} />
  };

  return (
    <div className={`border-2 rounded-lg p-5 ${statusColors[status]}`}>
      <div className="text-sm text-muted-foreground mb-1">{label}</div>
      <div className="text-3xl font-bold text-foreground mb-2">{value}</div>
      <div className="text-xs text-muted-foreground mb-2">{subtitle}</div>
      {trend && (
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          {trendIcons[trend.direction]}
          <span>{trend.value}</span>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, detail, icon }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-5 bg-card">
      <div className="flex items-start justify-between mb-3">
        <div className="text-sm text-muted-foreground">{label}</div>
        {icon}
      </div>
      <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-xs text-muted-foreground">{detail}</div>
    </div>
  );
}

function AdoptionTrendVisualization() {
  const quarters = [
    { label: 'Q1 2025', departments: 32, services: 178 },
    { label: 'Q2 2025', departments: 36, services: 214 },
    { label: 'Q3 2025', departments: 41, services: 256 },
    { label: 'Q4 2025', departments: 44, services: 289 },
    { label: 'Q1 2026', departments: 47, services: 312 }
  ];

  return (
    <div className="flex items-end justify-between gap-4 h-64">
      {quarters.map((q, idx) => (
        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full flex gap-2">
            <div className="flex-1 bg-blue-600 rounded-t" style={{ height: `${(q.departments / 50) * 200}px` }}></div>
            <div className="flex-1 bg-green-600 rounded-t" style={{ height: `${(q.services / 350) * 200}px` }}></div>
          </div>
          <div className="text-xs text-muted-foreground font-medium">{q.label}</div>
          <div className="text-xs text-gray-500">
            <div className="text-blue-600">{q.departments} depts</div>
            <div className="text-green-600">{q.services} svcs</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MaturityBar({ label, count, total, color }: any) {
  const percentage = Math.round((count / total) * 100);
  const colorClasses: any = {
    green: 'bg-green-600',
    blue: 'bg-blue-600',
    yellow: 'bg-yellow-600',
    red: 'bg-red-600'
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-muted-foreground font-medium">{label}</span>
        <span className="text-foreground font-bold">{count} ({percentage}%)</span>
      </div>
      <div className="h-8 bg-muted rounded-lg overflow-hidden">
        <div className={`h-full ${colorClasses[color]} flex items-center justify-end px-3 text-white text-xs font-bold`} style={{ width: `${percentage}%` }}>
          {percentage > 10 && `${percentage}%`}
        </div>
      </div>
    </div>
  );
}

function SectorPerformanceRow({ sector, score, services }: any) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <div>
        <div className="font-medium text-foreground text-sm">{sector}</div>
        <div className="text-xs text-gray-500">{services} services</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold text-foreground">{score}%</div>
        <CheckCircle className="text-green-600" size={20} />
      </div>
    </div>
  );
}

function DepartmentRow({ name, code, services, conformance, accessibility, version, status, lastAudit }: any) {
  const statusConfig: any = {
    exemplar: { bg: 'bg-green-100', text: 'text-green-700', label: 'Exemplar' },
    conformant: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Conformant' },
    developing: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Developing' },
    'non-conformant': { bg: 'bg-red-100', text: 'text-red-700', label: 'Non-Conformant' }
  };

  return (
    <tr className="hover:bg-background">
      <td className="p-4">
        <div className="font-medium text-foreground text-sm">{name}</div>
        <div className="text-xs text-gray-500">{code}</div>
      </td>
      <td className="p-4 text-center text-sm text-foreground">{services}</td>
      <td className="p-4 text-center">
        <span className="text-sm font-bold text-foreground">{conformance}%</span>
      </td>
      <td className="p-4 text-center">
        <span className="text-sm font-bold text-foreground">{accessibility}%</span>
      </td>
      <td className="p-4 text-center">
        <code className="text-xs bg-muted px-2 py-1 rounded">{version}</code>
      </td>
      <td className="p-4 text-center">
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusConfig[status].bg} ${statusConfig[status].text}`}>
          {statusConfig[status].label}
        </span>
      </td>
      <td className="p-4 text-center text-xs text-muted-foreground">{lastAudit}</td>
    </tr>
  );
}

function ConformanceHeatMap() {
  const ministries = [
    { name: 'Electronics & IT', score: 96 },
    { name: 'Finance & Revenue', score: 91 },
    { name: 'Social Justice', score: 84 },
    { name: 'External Affairs', score: 88 },
    { name: 'Labour & Employment', score: 79 },
    { name: 'Health & Welfare', score: 81 },
    { name: 'Education', score: 76 },
    { name: 'Railways', score: 62 },
    { name: 'Urban Development', score: 58 },
    { name: 'Agriculture', score: 71 }
  ];

  const getColor = (score: number) => {
    if (score >= 90) return 'bg-green-600';
    if (score >= 70) return 'bg-blue-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="grid grid-cols-5 gap-3">
      {ministries.map((m, idx) => (
        <div key={idx} className={`${getColor(m.score)} text-white rounded-lg p-4 flex flex-col items-center justify-center text-center`}>
          <div className="text-2xl font-bold mb-1">{m.score}%</div>
          <div className="text-xs opacity-90">{m.name}</div>
        </div>
      ))}
    </div>
  );
}

function ServiceCategoryBar({ category, count, conformance }: any) {
  const getColor = (score: number) => {
    if (score >= 85) return 'bg-green-600';
    if (score >= 70) return 'bg-blue-600';
    return 'bg-yellow-600';
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-muted-foreground font-medium">{category}</span>
          <span className="text-muted-foreground">{count} services</span>
        </div>
        <div className="h-6 bg-muted rounded overflow-hidden">
          <div className={`h-full ${getColor(conformance)} flex items-center justify-end px-2 text-white text-xs font-bold`} style={{ width: `${conformance}%` }}>
            {conformance}%
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionRequiredPanel({ title, items }: any) {
  const severityConfig: any = {
    critical: { bg: 'bg-red-100', text: 'text-red-700', icon: <AlertCircle size={16} /> },
    high: { bg: 'bg-orange-100', text: 'text-orange-700', icon: <AlertTriangle size={16} /> },
    medium: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: <Info size={16} /> }
  };

  return (
    <div className="border-2 border-red-200 rounded-lg overflow-hidden">
      <div className="bg-red-50 p-6 border-b-2 border-red-200">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <AlertCircle className="text-red-600" size={20} />
          {title}
        </h3>
      </div>
      <div className="p-6 bg-card">
        <div className="space-y-3">
          {items.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-background rounded-lg border-l-4 border-red-600">
              <div className={`flex-shrink-0 w-8 h-8 ${severityConfig[item.severity].bg} rounded-full flex items-center justify-center ${severityConfig[item.severity].text}`}>
                {severityConfig[item.severity].icon}
              </div>
              <div className="flex-1">
                <div className="font-bold text-foreground text-sm mb-1">{item.service}</div>
                <div className="text-sm text-muted-foreground mb-2">{item.issue}</div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    Deadline: {item.deadline}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VendorComplianceCard({ name, certification, projects, conformanceScore, lastAudit, expiryDate, status }: any) {
  const statusConfig: any = {
    excellent: { border: 'border-green-200', bg: 'bg-green-50', badge: 'bg-green-600', text: 'text-green-600' },
    good: { border: 'border-blue-200', bg: 'bg-blue-50', badge: 'bg-blue-600', text: 'text-blue-600' },
    warning: { border: 'border-yellow-200', bg: 'bg-yellow-50', badge: 'bg-yellow-600', text: 'text-yellow-600' },
    expiring: { border: 'border-orange-200', bg: 'bg-orange-50', badge: 'bg-orange-600', text: 'text-orange-600' }
  };

  return (
    <div className={`border-2 ${statusConfig[status].border} ${statusConfig[status].bg} rounded-lg p-5`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-bold text-foreground text-lg mb-1">{name}</h4>
          <div className="text-sm text-muted-foreground">{certification}</div>
        </div>
        <div className={`${statusConfig[status].badge} text-white text-xs px-3 py-1 rounded-full font-bold`}>
          {conformanceScore}%
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 text-sm">
        <div>
          <div className="text-xs text-gray-500">Projects</div>
          <div className="font-bold text-foreground">{projects}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Last Audit</div>
          <div className="font-bold text-foreground text-xs">{lastAudit}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Expires</div>
          <div className="font-bold text-foreground text-xs">{expiryDate}</div>
        </div>
      </div>
    </div>
  );
}

function CertificationLevelCard({ level, vendors, requirements, color }: any) {
  const colorClasses: any = {
    green: 'border-green-200 bg-green-50',
    blue: 'border-blue-200 bg-blue-50',
    yellow: 'border-yellow-200 bg-yellow-50'
  };

  return (
    <div className={`border-2 ${colorClasses[color]} rounded-lg p-5`}>
      <h4 className="font-bold text-foreground mb-1">{level}</h4>
      <div className="text-2xl font-bold text-foreground mb-4">{vendors} vendors</div>
      <div className="text-xs text-muted-foreground">
        <div className="font-medium mb-2">Requirements:</div>
        <ul className="space-y-1">
          {requirements.map((req: string, idx: number) => (
            <li key={idx} className="flex items-start gap-1">
              <CheckCircle size={12} className="mt-0.5 flex-shrink-0" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ComponentUsageBar({ component, usage, implementations, trend }: any) {
  const trendIcons: any = {
    up: <TrendingUp className="text-green-600" size={14} />,
    down: <TrendingDown className="text-red-600" size={14} />,
    stable: <Minus className="text-muted-foreground" size={14} />
  };

  const percentage = Math.round((implementations / 312) * 100);

  return (
    <div className="flex items-center gap-4">
      <div className="w-40 text-sm font-medium text-foreground">{component}</div>
      <div className="flex-1">
        <div className="h-6 bg-muted rounded overflow-hidden">
          <div className="h-full bg-blue-600 flex items-center justify-end px-2 text-white text-xs font-bold" style={{ width: `${percentage}%` }}>
            {percentage > 15 && `${percentage}%`}
          </div>
        </div>
      </div>
      <div className="w-32 text-sm text-muted-foreground">{implementations} services</div>
      <div className="w-16 flex justify-center">{trendIcons[trend]}</div>
    </div>
  );
}

function UnderutilizedComponentRow({ component, usage, potential }: any) {
  return (
    <div className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
      <div className="flex-1">
        <div className="font-medium text-foreground">{component}</div>
        <div className="text-xs text-muted-foreground">{potential}</div>
      </div>
      <div className="text-sm text-orange-600 font-bold">{usage} uses</div>
    </div>
  );
}

function GrowingComponentRow({ component, growth, quarter }: any) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <div className="font-medium text-foreground">{component}</div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">{quarter}</span>
        <span className="text-sm text-green-600 font-bold flex items-center gap-1">
          <TrendingUp size={14} />
          {growth}
        </span>
      </div>
    </div>
  );
}

function FrameworkBar({ framework, services, percentage, version }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-muted-foreground font-medium">{framework}</span>
        <span className="text-muted-foreground">{services} services ({percentage}%)</span>
      </div>
      <div className="h-8 bg-muted rounded overflow-hidden mb-1">
        <div className="h-full bg-blue-600 flex items-center px-3 text-white text-xs font-bold" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
      <div className="text-xs text-gray-500">Versions: {version}</div>
    </div>
  );
}

function PackageMethodBar({ method, services, percentage, status }: any) {
  const statusConfig: any = {
    recommended: { color: 'bg-green-600', badge: 'bg-green-100 text-green-700' },
    acceptable: { color: 'bg-blue-600', badge: 'bg-blue-100 text-blue-700' },
    discouraged: { color: 'bg-yellow-600', badge: 'bg-yellow-100 text-yellow-700' },
    'non-conformant': { color: 'bg-red-600', badge: 'bg-red-100 text-red-700' }
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-muted-foreground font-medium">{method}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[status].badge}`}>
          {status}
        </span>
      </div>
      <div className="h-8 bg-muted rounded overflow-hidden">
        <div className={`h-full ${statusConfig[status].color} flex items-center justify-between px-3 text-white text-xs font-bold`} style={{ width: `${percentage}%` }}>
          <span>{percentage}%</span>
          <span>{services}</span>
        </div>
      </div>
    </div>
  );
}

function VersionAdoptionRow({ version, services, percentage, status }: any) {
  const statusConfig: any = {
    current: { color: 'bg-green-600', badge: 'bg-green-100 text-green-700', label: 'Current' },
    supported: { color: 'bg-blue-600', badge: 'bg-blue-100 text-blue-700', label: 'Supported' },
    deprecated: { color: 'bg-orange-600', badge: 'bg-orange-100 text-orange-700', label: 'Deprecated' },
    unsupported: { color: 'bg-red-600', badge: 'bg-red-100 text-red-700', label: 'Unsupported' }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-32">
        <code className="text-sm font-mono font-bold text-foreground">{version}</code>
      </div>
      <div className="flex-1">
        <div className="h-6 bg-muted rounded overflow-hidden">
          <div className={`h-full ${statusConfig[status].color} flex items-center justify-end px-2 text-white text-xs font-bold`} style={{ width: `${percentage}%` }}>
            {percentage > 10 && `${percentage}%`}
          </div>
        </div>
      </div>
      <div className="w-24 text-sm text-muted-foreground">{services} svcs</div>
      <div className="w-28">
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusConfig[status].badge}`}>
          {statusConfig[status].label}
        </span>
      </div>
    </div>
  );
}

function DocPageRow({ page, visits, avgTime, bounce }: any) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex-1 font-medium text-foreground text-sm">{page}</div>
      <div className="flex items-center gap-6 text-sm">
        <div className="text-muted-foreground">{visits} visits</div>
        <div className="text-muted-foreground">{avgTime}</div>
        <div className="text-muted-foreground">{bounce} bounce</div>
      </div>
    </div>
  );
}

function ResourceDownloadRow({ resource, downloads }: any) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-muted-foreground">{resource}</span>
      <span className="font-bold text-foreground">{downloads}</span>
    </div>
  );
}

function DocGapRow({ gap, tickets, priority }: any) {
  const priorityConfig: any = {
    high: 'text-red-600',
    medium: 'text-yellow-600',
    low: 'text-blue-600'
  };

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-muted-foreground">{gap}</span>
      <div className="flex items-center gap-2">
        <span className="text-foreground font-bold">{tickets}</span>
        <span className={`text-xs font-medium ${priorityConfig[priority]}`}>({priority})</span>
      </div>
    </div>
  );
}

function WCAGCriteriaRow({ criteria, compliant, total, percentage }: any) {
  const getColor = (pct: number) => {
    if (pct >= 90) return 'bg-green-600';
    if (pct >= 75) return 'bg-blue-600';
    if (pct >= 60) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-48 text-sm font-medium text-foreground">{criteria}</div>
      <div className="flex-1">
        <div className="h-6 bg-muted rounded overflow-hidden">
          <div className={`h-full ${getColor(percentage)} flex items-center justify-end px-2 text-white text-xs font-bold`} style={{ width: `${percentage}%` }}>
            {percentage}%
          </div>
        </div>
      </div>
      <div className="w-32 text-sm text-muted-foreground">{compliant}/{total} services</div>
    </div>
  );
}

function ReleaseAdoptionRow({ version, releaseDate, adopted, total, daysLive, status }: any) {
  const percentage = Math.round((adopted / total) * 100);
  const statusConfig: any = {
    current: { color: 'bg-green-600', badge: 'bg-green-100 text-green-700' },
    maintenance: { color: 'bg-blue-600', badge: 'bg-blue-100 text-blue-700' },
    deprecated: { color: 'bg-orange-600', badge: 'bg-orange-100 text-orange-700' }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-24">
        <code className="text-sm font-mono font-bold text-foreground">{version}</code>
      </div>
      <div className="w-28 text-sm text-muted-foreground">{releaseDate}</div>
      <div className="flex-1">
        <div className="h-8 bg-muted rounded overflow-hidden">
          <div className={`h-full ${statusConfig[status].color} flex items-center justify-between px-3 text-white text-xs font-bold`} style={{ width: `${percentage}%` }}>
            <span>{percentage}%</span>
            <span>{adopted}/{total}</span>
          </div>
        </div>
      </div>
      <div className="w-24 text-sm text-muted-foreground">{daysLive} days</div>
      <div className="w-28">
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusConfig[status].badge}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

function MigrationStatusBar({ status, count, percentage, color }: any) {
  const colorClasses: any = {
    green: 'bg-green-600',
    blue: 'bg-blue-600',
    yellow: 'bg-yellow-600',
    red: 'bg-red-600'
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-muted-foreground font-medium">{status}</span>
        <span className="text-foreground font-bold">{count} services ({percentage}%)</span>
      </div>
      <div className="h-6 bg-muted rounded overflow-hidden">
        <div className={`h-full ${colorClasses[color]} flex items-center justify-end px-2 text-white text-xs font-bold`} style={{ width: `${percentage}%` }}>
          {percentage > 10 && `${percentage}%`}
        </div>
      </div>
    </div>
  );
}

function DeprecatedServiceRow({ service, version, endOfLife }: any) {
  return (
    <div className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
      <div className="flex-1">
        <div className="font-medium text-foreground">{service}</div>
        <code className="text-xs text-muted-foreground">{version}</code>
      </div>
      <div className="text-xs text-orange-600 font-bold">EOL: {endOfLife}</div>
    </div>
  );
}

function ExceptionRow({ service, type, justification, approved, expires, status }: any) {
  const statusConfig: any = {
    active: { badge: 'bg-blue-100 text-blue-700', label: 'Active' },
    expiring: { badge: 'bg-orange-100 text-orange-700', label: 'Expiring Soon' }
  };

  return (
    <tr className="hover:bg-background">
      <td className="p-4 text-sm text-foreground">{service}</td>
      <td className="p-4 text-sm text-muted-foreground">{type}</td>
      <td className="p-4 text-sm text-muted-foreground">{justification}</td>
      <td className="p-4 text-center text-xs text-muted-foreground">{approved}</td>
      <td className="p-4 text-center text-xs text-muted-foreground">{expires}</td>
      <td className="p-4 text-center">
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusConfig[status].badge}`}>
          {statusConfig[status].label}
        </span>
      </td>
    </tr>
  );
}

function PendingExceptionRow({ service, request, requestedDate, reviewDate }: any) {
  return (
    <div className="bg-card border border-yellow-200 rounded-lg p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="font-bold text-foreground text-sm">{service}</div>
        <Clock className="text-yellow-600" size={16} />
      </div>
      <div className="text-sm text-muted-foreground mb-2">{request}</div>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span>Requested: {requestedDate}</span>
        <span>•</span>
        <span>Review: {reviewDate}</span>
      </div>
    </div>
  );
}

function RiskSummaryCard({ level, count, description, deadline, color }: any) {
  const colorClasses: any = {
    red: 'border-red-200 bg-red-50 text-red-700',
    orange: 'border-orange-200 bg-orange-50 text-orange-700',
    yellow: 'border-yellow-200 bg-yellow-50 text-yellow-700'
  };

  return (
    <div className={`border-2 rounded-lg p-5 ${colorClasses[color]}`}>
      <div className="text-sm font-medium mb-1">{level} Risk</div>
      <div className="text-3xl font-bold mb-3">{count}</div>
      <div className="text-sm mb-2">{description}</div>
      <div className="text-xs font-medium">{deadline}</div>
    </div>
  );
}

function DeprecatedFeatureRow({ feature, affectedServices, deprecatedDate, endOfLife, replacement, risk }: any) {
  const riskConfig: any = {
    high: { bg: 'bg-red-100', text: 'text-red-700' },
    medium: { bg: 'bg-yellow-100', text: 'text-yellow-700' }
  };

  return (
    <div className="border-l-4 border-orange-600 bg-orange-50 rounded-r-lg p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="font-bold text-foreground">{feature}</div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${riskConfig[risk].bg} ${riskConfig[risk].text}`}>
          {risk} risk
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm mb-2">
        <div>
          <span className="text-muted-foreground">Affected Services:</span>
          <span className="font-bold text-foreground ml-2">{affectedServices}</span>
        </div>
        <div>
          <span className="text-muted-foreground">End of Life:</span>
          <span className="font-bold text-orange-600 ml-2">{endOfLife}</span>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">
        <span className="font-medium">Replacement:</span> {replacement}
      </div>
    </div>
  );
}

function LifecycleWarningRow({ service, version, warning, action, severity }: any) {
  const severityConfig: any = {
    critical: { icon: <AlertCircle className="text-red-600" size={16} />, bg: 'bg-red-50', border: 'border-red-200' },
    high: { icon: <AlertTriangle className="text-orange-600" size={16} />, bg: 'bg-orange-50', border: 'border-orange-200' }
  };

  return (
    <div className={`flex items-start gap-3 p-3 ${severityConfig[severity].bg} border ${severityConfig[severity].border} rounded-lg`}>
      <div className="flex-shrink-0 mt-1">{severityConfig[severity].icon}</div>
      <div className="flex-1">
        <div className="font-bold text-foreground text-sm mb-1">{service}</div>
        <div className="text-sm text-muted-foreground mb-1">{warning}</div>
        <div className="text-xs text-foreground font-medium">Action: {action}</div>
      </div>
      <code className="text-xs bg-card px-2 py-1 rounded">{version}</code>
    </div>
  );
}

function IssueRow({ id, service, description, severity, reported, assignee, status }: any) {
  const severityConfig: any = {
    critical: { badge: 'bg-red-100 text-red-700' },
    high: { badge: 'bg-orange-100 text-orange-700' },
    medium: { badge: 'bg-yellow-100 text-yellow-700' },
    low: { badge: 'bg-blue-100 text-blue-700' }
  };

  const statusConfig: any = {
    open: { badge: 'bg-muted text-muted-foreground' },
    'in-progress': { badge: 'bg-blue-100 text-blue-700' },
    testing: { badge: 'bg-purple-100 text-purple-700' }
  };

  return (
    <tr className="hover:bg-background">
      <td className="p-4">
        <code className="text-xs font-mono text-foreground">{id}</code>
      </td>
      <td className="p-4 text-sm text-foreground">{service}</td>
      <td className="p-4 text-sm text-muted-foreground">{description}</td>
      <td className="p-4 text-center">
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${severityConfig[severity].badge}`}>
          {severity}
        </span>
      </td>
      <td className="p-4 text-center text-xs text-muted-foreground">{reported}</td>
      <td className="p-4 text-xs text-muted-foreground">{assignee}</td>
      <td className="p-4 text-center">
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusConfig[status].badge}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}

function IssueCategoryBar({ category, count, percentage }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-32 text-sm text-muted-foreground">{category}</div>
      <div className="flex-1">
        <div className="h-6 bg-muted rounded overflow-hidden">
          <div className="h-full bg-orange-600 flex items-center justify-end px-2 text-white text-xs font-bold" style={{ width: `${percentage}%` }}>
            {count}
          </div>
        </div>
      </div>
      <div className="w-12 text-sm text-muted-foreground">{percentage}%</div>
    </div>
  );
}

function ResolutionMetricRow({ metric, count, total, percentage }: any) {
  const color = metric.includes('Within') ? 'bg-green-600' : 'bg-red-600';

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-muted-foreground">{metric}</span>
        <span className="text-foreground font-bold">{count}/{total}</span>
      </div>
      <div className="h-6 bg-muted rounded overflow-hidden">
        <div className={`h-full ${color} flex items-center justify-end px-2 text-white text-xs font-bold`} style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
}

function SupportVolumeBar({ department, tickets, avgTime, satisfaction }: any) {
  return (
    <div className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-0">
      <div className="flex-1 text-sm text-foreground">{department}</div>
      <div className="w-20 text-sm font-bold text-foreground">{tickets} tickets</div>
      <div className="w-20 text-sm text-muted-foreground">{avgTime}</div>
      <div className="w-16 flex items-center gap-1 text-sm">
        <span className="text-foreground font-bold">{satisfaction}</span>
        <span className="text-xs text-gray-500">/5</span>
      </div>
    </div>
  );
}

function SupportTopicRow({ topic, tickets, trend }: any) {
  const trendIcons: any = {
    up: <TrendingUp className="text-red-600" size={14} />,
    down: <TrendingDown className="text-green-600" size={14} />,
    stable: <Minus className="text-muted-foreground" size={14} />
  };

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-muted-foreground flex-1">{topic}</span>
      <div className="flex items-center gap-2">
        <span className="font-bold text-foreground">{tickets}</span>
        {trendIcons[trend]}
      </div>
    </div>
  );
}

function InitiativeRow({ initiative, impact, status }: any) {
  const statusConfig: any = {
    completed: { badge: 'bg-green-100 text-green-700', icon: <CheckCircle size={14} /> },
    'in-progress': { badge: 'bg-blue-100 text-blue-700', icon: <Clock size={14} /> },
    planned: { badge: 'bg-muted text-muted-foreground', icon: <Calendar size={14} /> }
  };

  return (
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="text-foreground font-medium mb-1">{initiative}</div>
        <div className="text-xs text-muted-foreground">{impact}</div>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1 ${statusConfig[status].badge}`}>
        {statusConfig[status].icon}
        {status}
      </span>
    </div>
  );
}

function PriorityCard({ priority, title, rationale, impact, effort, owner, timeline }: any) {
  return (
    <div className="border-2 border-blue-200 rounded-lg p-5 bg-card">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
          {priority}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-foreground text-lg mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground mb-3">{rationale}</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-muted-foreground">Impact:</span>
              <span className="font-medium text-foreground ml-2">{impact}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Effort:</span>
              <span className="font-medium text-foreground ml-2">{effort}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Owner:</span>
              <span className="font-medium text-foreground ml-2">{owner}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Timeline:</span>
              <span className="font-medium text-foreground ml-2">{timeline}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UpcomingPriorityCard({ title, drivers, status }: any) {
  const statusConfig: any = {
    research: { badge: 'bg-purple-100 text-purple-700' },
    scoping: { badge: 'bg-blue-100 text-blue-700' },
    planned: { badge: 'bg-muted text-muted-foreground' }
  };

  return (
    <div className="border border-border rounded-lg p-4 bg-card">
      <div className="flex items-start justify-between mb-3">
        <h5 className="font-bold text-foreground text-sm">{title}</h5>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusConfig[status].badge}`}>
          {status}
        </span>
      </div>
      <div className="text-xs text-muted-foreground">
        <div className="font-medium mb-1">Drivers:</div>
        <ul className="space-y-1">
          {drivers.map((driver: string, idx: number) => (
            <li key={idx} className="flex items-start gap-1">
              <Circle size={6} className="mt-1.5 flex-shrink-0 fill-current" />
              <span>{driver}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function InsightCard({ insight, recommendation, impact }: any) {
  const impactConfig: any = {
    High: 'bg-green-100 text-green-700',
    Medium: 'bg-blue-100 text-blue-700'
  };

  return (
    <div className="border border-purple-200 rounded-lg p-4 bg-card">
      <div className="flex items-start gap-2 mb-3">
        <BarChart3 className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
        <p className="text-sm text-foreground font-medium">{insight}</p>
      </div>
      <div className="bg-purple-50 rounded p-3 mb-3">
        <div className="text-xs text-muted-foreground font-medium mb-1">Recommendation:</div>
        <p className="text-sm text-foreground">{recommendation}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Impact:</span>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${impactConfig[impact]}`}>
          {impact}
        </span>
      </div>
    </div>
  );
}
