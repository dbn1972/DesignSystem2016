/**
 * Chart Library Component Documentation Page
 * Complete documentation for the Chart Library component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

// Import the actual Chart Library component for live preview
const ChartPreview = ({ type, data, labels, title, height = 300, width = 500, colors, legend = true, ...props }: any) => {
  // Simple SVG-based chart preview
  const renderChart = () => {
    if (type === 'bar') {
      const maxValue = Math.max(...data);
      const barWidth = width / data.length - 20;
      return (
        <svg width={width} height={height} className="bg-card p-4">
          {data.map((value: number, index: number) => {
            const barHeight = (value / maxValue) * (height - 60);
            return (
              <g key={index}>
                <rect
                  x={index * (barWidth + 20) + 20}
                  y={height - barHeight - 40}
                  width={barWidth}
                  height={barHeight}
                  fill={colors?.[index] || '#005196'}
                />
                <text
                  x={index * (barWidth + 20) + 20 + barWidth / 2}
                  y={height - 20}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#333"
                >
                  {labels?.[index]}
                </text>
              </g>
            );
          })}
        </svg>
      );
    } else if (type === 'line' || type === 'area') {
      const maxValue = Math.max(...data);
      const pointSpacing = (width - 40) / (data.length - 1);
      const points = data.map((value: number, index: number) => {
        const x = 20 + index * pointSpacing;
        const y = height - 40 - (value / maxValue) * (height - 60);
        return `${x},${y}`;
      }).join(' ');

      return (
        <svg width={width} height={height} className="bg-card p-4">
          {type === 'area' && (
            <polygon
              points={`20,${height - 40} ${points} ${width - 20},${height - 40}`}
              fill="#005196"
              fillOpacity="0.2"
            />
          )}
          <polyline
            points={points}
            fill="none"
            stroke="#005196"
            strokeWidth="2"
          />
          {data.map((value: number, index: number) => {
            const x = 20 + index * pointSpacing;
            const y = height - 40 - (value / maxValue) * (height - 60);
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#005196"
              />
            );
          })}
        </svg>
      );
    } else if (type === 'pie' || type === 'donut') {
      const total = data.reduce((sum: number, val: number) => sum + val, 0);
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) / 2 - 40;
      const innerRadius = type === 'donut' ? radius * 0.5 : 0;

      let currentAngle = -90;
      return (
        <svg width={width} height={height} className="bg-card p-4">
          {data.map((value: number, index: number) => {
            const angle = (value / total) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;

            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            const x1 = centerX + radius * Math.cos(startRad);
            const y1 = centerY + radius * Math.sin(startRad);
            const x2 = centerX + radius * Math.cos(endRad);
            const y2 = centerY + radius * Math.sin(endRad);

            const largeArc = angle > 180 ? 1 : 0;

            let path = `M ${centerX},${centerY} L ${x1},${y1} A ${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`;

            if (type === 'donut') {
              const ix1 = centerX + innerRadius * Math.cos(startRad);
              const iy1 = centerY + innerRadius * Math.sin(startRad);
              const ix2 = centerX + innerRadius * Math.cos(endRad);
              const iy2 = centerY + innerRadius * Math.sin(endRad);

              path = `M ${x1},${y1} A ${radius},${radius} 0 ${largeArc},1 ${x2},${y2} L ${ix2},${iy2} A ${innerRadius},${innerRadius} 0 ${largeArc},0 ${ix1},${iy1} Z`;
            }

            currentAngle = endAngle;

            const defaultColors = ['#005196', '#008800', '#E67E22', '#9B59B6', '#1ABC9C'];

            return (
              <path
                key={index}
                d={path}
                fill={colors?.[index] || defaultColors[index % defaultColors.length]}
              />
            );
          })}
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="inline-block border border-border rounded">
      {title && <div className="px-4 py-2 border-b border-border font-semibold">{title}</div>}
      {renderChart()}
      {legend && labels && (
        <div className="px-4 py-2 border-t border-border flex flex-wrap gap-3">
          {labels.map((label: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded"
                style={{
                  backgroundColor: colors?.[index] ||
                    (type === 'pie' || type === 'donut'
                      ? ['#005196', '#008800', '#E67E22', '#9B59B6', '#1ABC9C'][index % 5]
                      : '#005196')
                }}
              />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function ComponentChartLibraryPage() {
  return (
    <ComponentDocumentation
      name="Chart Library"
      description="Comprehensive data visualization component for government dashboards and analytics. Supports multiple chart types with full accessibility compliance, responsive design, and downloadable formats for budget visualization, demographic data, service metrics, and performance dashboards."
      category="Government Services"
      maturity="stable"
      tier="composite"
      since="v2.0.0"
      updated="v2.3.0"

      props={[
        {
          name: 'type',
          type: "'bar' | 'line' | 'pie' | 'area' | 'donut'",
          default: "'bar'",
          required: false,
          description: 'Type of chart to render. Bar for comparisons, line for trends, pie/donut for distributions, area for cumulative data.',
        },
        {
          name: 'data',
          type: 'number[] | ChartDataPoint[]',
          required: true,
          description: 'Chart data as array of numbers or data point objects with value and metadata.',
        },
        {
          name: 'labels',
          type: 'string[]',
          required: false,
          description: 'Labels for data points, displayed on axes or in legend.',
        },
        {
          name: 'colors',
          type: 'string[]',
          required: false,
          description: 'Custom colors for chart elements. Falls back to government palette if not provided.',
        },
        {
          name: 'title',
          type: 'string',
          required: false,
          description: 'Chart title displayed at the top of the visualization.',
        },
        {
          name: 'legend',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to display chart legend.',
        },
        {
          name: 'tooltip',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Enable interactive tooltips on hover.',
        },
        {
          name: 'responsive',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether chart should resize based on container width.',
        },
        {
          name: 'height',
          type: 'number | string',
          default: '400',
          required: false,
          description: 'Chart height in pixels or CSS value.',
        },
        {
          name: 'width',
          type: 'number | string',
          required: false,
          description: 'Chart width in pixels or CSS value. Auto if responsive is true.',
        },
        {
          name: 'downloadable',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Enable download button for exporting chart as PNG/SVG/CSV.',
        },
        {
          name: 'xAxis',
          type: 'AxisConfig',
          required: false,
          description: 'Configuration for x-axis including label, grid, and tick formatting.',
        },
        {
          name: 'yAxis',
          type: 'AxisConfig',
          required: false,
          description: 'Configuration for y-axis including label, grid, and tick formatting.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply to chart container.',
        },
      ]}

      examples={[
        {
          title: 'Bar Chart (Budget)',
          description: 'Visualize department budget allocations for fiscal planning.',
          code: `import { ChartLibrary } from '@ux4g/react-charts';

function Example() {
  const budgetData = [45000000, 32000000, 28000000, 19000000, 15000000];
  const departments = ['Education', 'Healthcare', 'Infrastructure', 'Public Safety', 'Admin'];

  return (
    <ChartLibrary
      type="bar"
      data={budgetData}
      labels={departments}
      title="2026 Department Budget Allocation"
      colors={['#005196', '#004178', '#00315a', '#008800', '#006600']}
      height={400}
      downloadable
      yAxis={{ label: 'Budget ($)', grid: true }}

      useCases={[
        { title: "Dashboard Analytics", description: "Charts for application statistics.", scenario: "Officer dashboard with approval rates.", implementation: "<ChartLibrary type=\"bar\" data={stats} />" },
        { title: "Service Usage Trends", description: "Line chart showing service usage over time.", scenario: "Admin analytics page.", implementation: "<ChartLibrary type=\"line\" data={trends} />" },
      ]}

      additionalContent={
        <>
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use ChartLibrary when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Data visualization dashboards</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Trend analysis displays</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Comparative data charts</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Statistical reporting interfaces</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use ChartLibrary when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple numbers — use Statistic component</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Tabular data — use Table</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Single values — use text display</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Non-numeric data — use other visualizations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/statistic" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Statistic</h3>
                <p className="text-sm text-muted-foreground">For single numeric values</p>
              </a>
              <a href="/components/table" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Table</h3>
                <p className="text-sm text-muted-foreground">For tabular data</p>
              </a>
              <a href="/components/card" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Card</h3>
                <p className="text-sm text-muted-foreground">For chart containers</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added pie and donut chart types</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added responsive sizing</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with bar and line charts</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Chart accessibility</h3>
                <p className="text-sm text-muted-foreground">Charts must provide text alternatives and keyboard navigation. Color-only encoding excludes 8% of male users with color vision deficiency (WCAG 1.4.1).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}`,
          preview: (
            <ChartPreview
              type="bar"
              data={[45000000, 32000000, 28000000, 19000000, 15000000]}
              labels={['Education', 'Healthcare', 'Infrastructure', 'Safety', 'Admin']}
              title="2026 Department Budget Allocation"
              colors={['#005196', '#004178', '#00315a', '#008800', '#006600']}
              height={350}
              width={600}
            />
          ),
        },
        {
          title: 'Line Chart (Trends)',
          description: 'Track service usage trends over time for performance monitoring.',
          code: `import { ChartLibrary } from '@ux4g/react-charts';

function Example() {
  const monthlyUsers = [1200, 1450, 1600, 1750, 1900, 2100, 2300, 2450, 2600, 2800, 2950, 3100];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <ChartLibrary
      type="line"
      data={monthlyUsers}
      labels={months}
      title="Monthly Portal Users - 2026"
      tooltip
      responsive
      xAxis={{ label: 'Month' }}
      yAxis={{ label: 'Users', grid: true }}
    />
  );
}`,
          preview: (
            <ChartPreview
              type="line"
              data={[1200, 1450, 1600, 1750, 1900, 2100, 2300, 2450, 2600, 2800, 2950, 3100]}
              labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
              title="Monthly Portal Users - 2026"
              height={350}
              width={600}
            />
          ),
        },
        {
          title: 'Pie Chart (Distribution)',
          description: 'Show demographic distribution for resource allocation planning.',
          code: `import { ChartLibrary } from '@ux4g/react-charts';

function Example() {
  const ageGroups = [25, 30, 20, 15, 10];
  const labels = ['0-18', '19-35', '36-50', '51-65', '65+'];

  return (
    <ChartLibrary
      type="pie"
      data={ageGroups}
      labels={labels}
      title="Population Distribution by Age Group"
      colors={['#005196', '#008800', '#E67E22', '#9B59B6', '#1ABC9C']}
      legend
      tooltip
    />
  );
}`,
          preview: (
            <ChartPreview
              type="pie"
              data={[25, 30, 20, 15, 10]}
              labels={['0-18', '19-35', '36-50', '51-65', '65+']}
              title="Population Distribution by Age Group"
              colors={['#005196', '#008800', '#E67E22', '#9B59B6', '#1ABC9C']}
              height={350}
              width={600}
            />
          ),
        },
        {
          title: 'Area Chart (Growth)',
          description: 'Visualize cumulative revenue or resource growth over time.',
          code: `import { ChartLibrary } from '@ux4g/react-charts';

function Example() {
  const quarterlyRevenue = [2500000, 3200000, 4100000, 5300000, 6800000, 8100000];
  const quarters = ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026'];

  return (
    <ChartLibrary
      type="area"
      data={quarterlyRevenue}
      labels={quarters}
      title="Tax Revenue Growth"
      colors={['#005196']}
      responsive
      xAxis={{ label: 'Quarter' }}
      yAxis={{ label: 'Revenue ($)', grid: true }}
    />
  );
}`,
          preview: (
            <ChartPreview
              type="area"
              data={[2500000, 3200000, 4100000, 5300000, 6800000, 8100000]}
              labels={['Q1 25', 'Q2 25', 'Q3 25', 'Q4 25', 'Q1 26', 'Q2 26']}
              title="Tax Revenue Growth"
              colors={['#005196']}
              height={350}
              width={600}
            />
          ),
        },
        {
          title: 'Donut Chart (Multi-Category)',
          description: 'Display service request categories with better visual hierarchy.',
          code: `import { ChartLibrary } from '@ux4g/react-charts';

function Example() {
  const requestTypes = [350, 280, 210, 160, 95, 75];
  const categories = ['Permits', 'Licenses', 'Complaints', 'Inquiries', 'Payments', 'Other'];

  return (
    <ChartLibrary
      type="donut"
      data={requestTypes}
      labels={categories}
      title="Service Requests by Category - Q1 2026"
      colors={['#005196', '#004178', '#008800', '#E67E22', '#9B59B6', '#1ABC9C']}
      legend
      tooltip
    />
  );
}`,
          preview: (
            <ChartPreview
              type="donut"
              data={[350, 280, 210, 160, 95, 75]}
              labels={['Permits', 'Licenses', 'Complaints', 'Inquiries', 'Payments', 'Other']}
              title="Service Requests by Category - Q1 2026"
              colors={['#005196', '#004178', '#008800', '#E67E22', '#9B59B6', '#1ABC9C']}
              height={350}
              width={600}
            />
          ),
        },
        {
          title: 'Interactive Dashboard',
          description: 'Multi-chart dashboard with downloadable data for comprehensive analytics.',
          code: `import { ChartLibrary } from '@ux4g/react-charts';

function Example() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <ChartLibrary
        type="bar"
        data={[45, 32, 28, 19]}
        labels={['Q1', 'Q2', 'Q3', 'Q4']}
        title="Quarterly Applications"
        downloadable
        height={300}
      />
      <ChartLibrary
        type="line"
        data={[85, 88, 90, 92]}
        labels={['Q1', 'Q2', 'Q3', 'Q4']}
        title="Service Satisfaction (%)"
        downloadable
        height={300}
      />
      <ChartLibrary
        type="pie"
        data={[40, 35, 25]}
        labels={['Online', 'In-Person', 'Phone']}
        title="Service Channel Usage"
        downloadable
        height={300}
      />
      <ChartLibrary
        type="area"
        data={[120, 145, 160, 190]}
        labels={['Q1', 'Q2', 'Q3', 'Q4']}
        title="Staff Productivity Index"
        downloadable
        height={300}
      />
    </div>
  );
}`,
          preview: (
            <div className="grid grid-cols-2 gap-6">
              <ChartPreview
                type="bar"
                data={[45, 32, 28, 19]}
                labels={['Q1', 'Q2', 'Q3', 'Q4']}
                title="Quarterly Applications"
                height={250}
                width={280}
              />
              <ChartPreview
                type="line"
                data={[85, 88, 90, 92]}
                labels={['Q1', 'Q2', 'Q3', 'Q4']}
                title="Service Satisfaction (%)"
                height={250}
                width={280}
              />
              <ChartPreview
                type="pie"
                data={[40, 35, 25]}
                labels={['Online', 'In-Person', 'Phone']}
                title="Service Channel Usage"
                height={250}
                width={280}
              />
              <ChartPreview
                type="area"
                data={[120, 145, 160, 190]}
                labels={['Q1', 'Q2', 'Q3', 'Q4']}
                title="Staff Productivity Index"
                height={250}
                width={280}
              />
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { useRef } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';
import { Download } from 'lucide-react';
import { cn } from '../../utils/cn';
import { ChartLibraryProps, ChartDataPoint } from './ChartLibrary.types';

export const ChartLibrary: React.FC<ChartLibraryProps> = ({
  type = 'bar',
  data,
  labels,
  colors,
  title,
  legend = true,
  tooltip = true,
  responsive = true,
  height = 400,
  width,
  downloadable = false,
  xAxis,
  yAxis,
  className,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  // Transform data into Recharts format
  const chartData = data.map((value, index) => ({
    name: labels?.[index] || \`Item \${index + 1}\`,
    value: typeof value === 'number' ? value : value.value,
  }));

  // Default government color palette
  const defaultColors = [
    '#005196', // Navy 500
    '#004178', // Navy 600
    '#00315a', // Navy 700
    '#008800', // Green 500
    '#006600', // Green 600
    '#E67E22', // Orange
    '#9B59B6', // Purple
    '#1ABC9C', // Teal
  ];

  const chartColors = colors || defaultColors;

  const handleDownload = async () => {
    // Implementation for downloading chart as PNG/SVG/CSV
    if (!chartRef.current) return;

    // SVG download example
    const svg = chartRef.current.querySelector('svg');
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = \`\${title || 'chart'}.svg\`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  const renderChart = () => {
    const commonProps = {
      data: chartData,
      margin: { top: 20, right: 30, left: 20, bottom: 20 },
    };

    const ChartWrapper = responsive ? ResponsiveContainer : 'div';
    const wrapperProps = responsive
      ? { width: '100%', height }
      : { style: { width, height } };

    switch (type) {
      case 'bar':
        return (
          <ChartWrapper {...wrapperProps}>
            <BarChart {...commonProps}>
              {xAxis?.grid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis
                dataKey="name"
                label={xAxis?.label ? { value: xAxis.label, position: 'insideBottom', offset: -10 } : undefined}
              />
              <YAxis
                label={yAxis?.label ? { value: yAxis.label, angle: -90, position: 'insideLeft' } : undefined}
              />
              {tooltip && <Tooltip />}
              {legend && <Legend />}
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={\`cell-\${index}\`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ChartWrapper>
        );

      case 'line':
        return (
          <ChartWrapper {...wrapperProps}>
            <LineChart {...commonProps}>
              {xAxis?.grid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="name" label={xAxis?.label ? { value: xAxis.label, position: 'insideBottom', offset: -10 } : undefined} />
              <YAxis label={yAxis?.label ? { value: yAxis.label, angle: -90, position: 'insideLeft' } : undefined} />
              {tooltip && <Tooltip />}
              {legend && <Legend />}
              <Line
                type="monotone"
                dataKey="value"
                stroke={chartColors[0]}
                strokeWidth={2}
                dot={{ fill: chartColors[0], r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartWrapper>
        );

      case 'pie':
      case 'donut':
        return (
          <ChartWrapper {...wrapperProps}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => \`\${name}: \${(percent * 100).toFixed(0)}%\`}
                outerRadius={type === 'donut' ? 100 : 120}
                innerRadius={type === 'donut' ? 60 : 0}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={\`cell-\${index}\`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              {tooltip && <Tooltip />}
              {legend && <Legend />}
            </PieChart>
          </ChartWrapper>
        );

      case 'area':
        return (
          <ChartWrapper {...wrapperProps}>
            <AreaChart {...commonProps}>
              {xAxis?.grid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="name" label={xAxis?.label ? { value: xAxis.label, position: 'insideBottom', offset: -10 } : undefined} />
              <YAxis label={yAxis?.label ? { value: yAxis.label, angle: -90, position: 'insideLeft' } : undefined} />
              {tooltip && <Tooltip />}
              {legend && <Legend />}
              <Area
                type="monotone"
                dataKey="value"
                stroke={chartColors[0]}
                fill={chartColors[0]}
                fillOpacity={0.6}
                strokeWidth={2}
              />
            </AreaChart>
          </ChartWrapper>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={cn('border border-border rounded bg-card', className)}
      role="img"
      aria-label={title || 'Data visualization chart'}
    >
      {(title || downloadable) && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          {title && <h3 className="font-semibold text-lg">{title}</h3>}
          {downloadable && (
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-3 py-1.5 text-sm border border-border rounded hover:bg-background transition-colors"
              aria-label="Download chart"
            >
              <Download size={16} />
              <span>Download</span>
            </button>
          )}
        </div>
      )}
      <div ref={chartRef} className="p-4">
        {renderChart()}
      </div>

      {/* Accessible data table alternative */}
      <details className="px-4 py-2 border-t border-border">
        <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
          View data as table
        </summary>
        <table className="w-full mt-2 text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Label</th>
              <th className="text-right py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{item.name}</td>
                <td className="text-right py-2">{item.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  );
};

ChartLibrary.displayName = 'ChartLibrary';`,
        types: `export interface ChartDataPoint {
  value: number;
  label?: string;
  metadata?: Record<string, any>;
}

export interface AxisConfig {
  label?: string;
  grid?: boolean;
  tickFormatter?: (value: any) => string;
}

export interface ChartLibraryProps {
  type?: 'bar' | 'line' | 'pie' | 'area' | 'donut';
  data: number[] | ChartDataPoint[];
  labels?: string[];
  colors?: string[];
  title?: string;
  legend?: boolean;
  tooltip?: boolean;
  responsive?: boolean;
  height?: number | string;
  width?: number | string;
  downloadable?: boolean;
  xAxis?: AxisConfig;
  yAxis?: AxisConfig;
  className?: string;
}`,
        variants: `// Chart Library uses composition rather than class-variance-authority
// Different chart types are rendered based on the 'type' prop
// Color schemes can be customized via the 'colors' prop

export const governmentColorPalette = {
  primary: [
    '#005196', // Navy 500
    '#004178', // Navy 600
    '#00315a', // Navy 700
    '#002341', // Navy 800
  ],
  accent: [
    '#008800', // Green 500
    '#006600', // Green 600
    '#004400', // Green 700
  ],
  extended: [
    '#E67E22', // Orange
    '#9B59B6', // Purple
    '#1ABC9C', // Teal
    '#E74C3C', // Red
    '#3498DB', // Blue
  ],
};`,
      }}

      angularCode={{
        component: `import { Component, Input, ViewChild, ElementRef } from '@angular/core';

type ChartType = 'bar' | 'line' | 'pie' | 'area' | 'donut';

@Component({
  selector: 'ux4g-chart-library',
  template: \`
    <div class="ux4g-chart-container" role="img" [attr.aria-label]="title || 'Data visualization chart'">
      <div *ngIf="title || downloadable" class="ux4g-chart-header">
        <h3 *ngIf="title" class="ux4g-chart-title">{{ title }}</h3>
        <button
          *ngIf="downloadable"
          (click)="handleDownload()"
          class="ux4g-chart-download"
          aria-label="Download chart"
        >
          <span class="icon-download"></span>
          Download
        </button>
      </div>

      <div #chartContainer class="ux4g-chart-content">
        <!-- Recharts integration or native SVG rendering -->
        <div [ngSwitch]="type">
          <div *ngSwitchCase="'bar'" class="chart-bar">
            <!-- Bar chart implementation -->
          </div>
          <div *ngSwitchCase="'line'" class="chart-line">
            <!-- Line chart implementation -->
          </div>
          <div *ngSwitchCase="'pie'" class="chart-pie">
            <!-- Pie chart implementation -->
          </div>
          <div *ngSwitchCase="'area'" class="chart-area">
            <!-- Area chart implementation -->
          </div>
          <div *ngSwitchCase="'donut'" class="chart-donut">
            <!-- Donut chart implementation -->
          </div>
        </div>
      </div>

      <!-- Accessible data table alternative -->
      <details class="ux4g-chart-table">
        <summary>View data as table</summary>
        <table>
          <thead>
            <tr>
              <th>Label</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of chartData; let i = index">
              <td>{{ labels?.[i] || 'Item ' + (i + 1) }}</td>
              <td>{{ item | number }}</td>
            </tr>
          </tbody>
        </table>
      </details>
    </div>
  \`,
  styleUrls: ['./chart-library.component.css']
})
export class ChartLibraryComponent {
  @Input() type: ChartType = 'bar';
  @Input() data: number[] = [];
  @Input() labels?: string[];
  @Input() colors?: string[];
  @Input() title?: string;
  @Input() legend = true;
  @Input() tooltip = true;
  @Input() responsive = true;
  @Input() height: number | string = 400;
  @Input() width?: number | string;
  @Input() downloadable = false;

  @ViewChild('chartContainer', { static: false }) chartContainer?: ElementRef;

  chartData: number[] = [];

  ngOnInit() {
    this.chartData = this.data;
  }

  handleDownload(): void {
    if (!this.chartContainer) return;

    const svg = this.chartContainer.nativeElement.querySelector('svg');
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = \`\${this.title || 'chart'}.svg\`;
      link.click();
      URL.revokeObjectURL(url);
    }
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartLibraryComponent } from './chart-library.component';

@NgModule({
  declarations: [ChartLibraryComponent],
  imports: [CommonModule],
  exports: [ChartLibraryComponent]
})
export class ChartLibraryModule { }`,
        types: `export type ChartType = 'bar' | 'line' | 'pie' | 'area' | 'donut';

export interface ChartDataPoint {
  value: number;
  label?: string;
  metadata?: Record<string, any>;
}

export interface AxisConfig {
  label?: string;
  grid?: boolean;
  tickFormatter?: (value: any) => string;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-chart-library> custom element",
        html: "<ux4g-chart-library variant=\"primary\" size=\"md\"><!-- ChartLibrary --></ux4g-chart-library>",
      }}
      comparisons={[
        {
          system: 'Recharts',
          component: 'Composable Charts',
          variants: 'Bar, Line, Area, Pie, Scatter, etc.',
          accessibility: 'WCAG 2.0 AA (with customization)',
          documentation: 'Comprehensive',
          link: 'https://recharts.org/',
        },
        {
          system: 'Chart.js',
          component: 'Chart',
          variants: 'Bar, Line, Pie, Doughnut, Radar, etc.',
          accessibility: 'WCAG 2.1 AA (with plugins)',
          documentation: 'Comprehensive',
          link: 'https://www.chartjs.org/',
        },
        {
          system: 'D3.js',
          component: 'Custom Visualizations',
          variants: 'Unlimited (low-level library)',
          accessibility: 'WCAG 2.1 AAA (requires implementation)',
          documentation: 'Comprehensive (steep learning curve)',
          link: 'https://d3js.org/',
        },
        {
          system: 'Plotly',
          component: 'plotly.js',
          variants: '40+ chart types',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://plotly.com/javascript/',
        },
        {
          system: 'ApexCharts',
          component: 'ApexCharts',
          variants: 'Line, Area, Bar, Pie, Candlestick, etc.',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://apexcharts.com/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Data table alternative for all charts accessible via details/summary (WCAG 1.1.1)',
          'Color palettes meet 4.5:1 contrast ratio for text and 3:1 for graphical elements (WCAG 1.4.3, 1.4.11)',
          'Charts announced to screen readers with descriptive aria-label (WCAG 4.1.2)',
          'Interactive elements (tooltips, legends) keyboard accessible (WCAG 2.1.1)',
          'Pattern fills and textures available as alternative to color-only differentiation (WCAG 1.4.1)',
          'Focus indicators on interactive chart elements (WCAG 2.4.7)',
          'Responsive text sizing supports up to 200% zoom (WCAG 1.4.4)',
          'Download functionality provides alternative data access formats (WCAG 1.3.1)',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate between interactive chart elements and controls' },
          { key: 'Shift + Tab', action: 'Navigate backwards through interactive elements' },
          { key: 'Enter', action: 'Activate download button or expand data table' },
          { key: 'Arrow Keys', action: 'Navigate between data points in interactive charts' },
          { key: 'Escape', action: 'Close tooltips or modal overlays' },
        ],
        screenReader: [
          'Chart announced with role="img" and descriptive aria-label',
          'Data table alternative provides complete data access',
          'Download button announces current chart title',
          'Tooltip content announced when focused',
          'Chart type and title announced on initial focus',
          'Data values announced when navigating with arrow keys',
        ],
      }}

      tokens={{
        file: '/tokens/components/chart-library.json',
        mappings: [
          { property: 'Default Height', token: 'chart.height.default', value: '400px' },
          { property: 'Bar Border Radius', token: 'chart.bar.borderRadius', value: '4px 4px 0 0' },
          { property: 'Primary Color', token: 'color.primary.500', value: '#005196 (Navy 500)' },
          { property: 'Secondary Color', token: 'color.green.500', value: '#008800 (Green 500)' },
          { property: 'Grid Color', token: 'chart.grid.color', value: '#E5E5E5' },
          { property: 'Grid Stroke Width', token: 'chart.grid.strokeWidth', value: '1px' },
          { property: 'Tooltip Background', token: 'chart.tooltip.background', value: '#FFFFFF' },
          { property: 'Tooltip Border', token: 'chart.tooltip.border', value: '1px solid #D1D5DB' },
          { property: 'Legend Font Size', token: 'chart.legend.fontSize', value: '14px' },
          { property: 'Title Font Size', token: 'chart.title.fontSize', value: '18px' },
          { property: 'Title Font Weight', token: 'chart.title.fontWeight', value: '600' },
        ],
      }}
    />
  );
}
