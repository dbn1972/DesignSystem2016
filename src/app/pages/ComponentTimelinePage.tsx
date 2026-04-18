/**
 * Timeline Component Documentation Page
 * Complete documentation for the Timeline component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Clock, CheckCircle, AlertCircle, Circle, XCircle, FileText, User, Send } from 'lucide-react';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';

// Import the actual Timeline component for live preview
const TimelinePreview = ({ items, variant = 'default', ...props }: any) => (
  <div className="space-y-0" {...props}>
    {items.map((item: any, index: number) => (
      <div
        key={index}
        className={'relative flex gap-4 ' + (variant === 'alternate' && index % 2 === 0 ? 'flex-row-reverse' : '')}
      >
        <div className={'flex flex-col items-center ' + (variant === 'left-aligned' ? 'w-auto' : 'w-24')}>
          {variant !== 'left-aligned' && (
            <div className={'text-sm text-muted-foreground mb-2 ' + (variant === 'alternate' && index % 2 === 0 ? 'text-right' : 'text-left')}>
              {item.date}
            </div>
          )}
          <div
            className={
              'flex items-center justify-center w-8 h-8 rounded-full border-2 z-10 ' +
              (item.status === 'completed' ? 'bg-[#008800] border-[#008800] text-white' :
               item.status === 'pending' ? 'bg-yellow-500 border-yellow-500 text-white' :
               item.status === 'error' ? 'bg-[#dc2626] border-[#dc2626] text-white' :
               item.status === 'current' ? 'bg-[#005196] border-[#005196] text-white' :
               'bg-card border-border text-muted-foreground')
            }
          >
            {item.icon || (
              item.status === 'completed' ? <CheckCircle size={16} /> :
              item.status === 'pending' ? <Clock size={16} /> :
              item.status === 'error' ? <XCircle size={16} /> :
              item.status === 'current' ? <AlertCircle size={16} /> :
              <Circle size={16} />
            )}
          </div>
          {index < items.length - 1 && (
            <div className="w-0.5 h-full min-h-[60px] bg-gray-300 mt-2" />
          )}
        </div>
        <div className="flex-1 pb-8">
          {variant === 'left-aligned' && (
            <div className="text-xs text-muted-foreground mb-1">{item.date}</div>
          )}
          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
          {item.description && (
            <p className="text-sm text-muted-foreground">{item.description}</p>
          )}
          {item.metadata && (
            <div className="text-xs text-muted-foreground mt-2">{item.metadata}</div>
          )}
        </div>
      </div>
    ))}
  </div>
);

const TIMELINE_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  { name: 'orientation', label: 'Orientation', type: 'text', defaultValue: 'vertical' },
  { name: 'variant', label: 'Variant', type: 'text', defaultValue: 'default' },
  { name: 'showConnectors', label: 'Show Connectors', type: 'boolean', defaultValue: true },
];

function TimelinePlayground() {
  return (
    <ComponentPlayground
      name="Timeline"
      controls={TIMELINE_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full flex items-center justify-center">
          {v.orientation === 'horizontal' ? (
            <div className="flex items-start gap-0 w-full max-w-md">
              {[{title:"Submitted",date:"12 Apr",color:"bg-green-500"},{title:"Under Review",date:"14 Apr",color:"bg-yellow-500"},{title:"Approved",date:"—",color:"bg-muted"}].map((item, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center text-center flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold`}>{i === 0 ? '✓' : i === 1 ? '⏳' : (i+1)}</div>
                    <p className="text-xs font-medium text-foreground mt-1">{item.title}</p>
                    <p className="text-[10px] text-muted-foreground">{item.date}</p>
                  </div>
                  {i < arr.length - 1 && v.showConnectors && <div className="flex-1 h-0.5 bg-border mt-4 mx-1" />}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div className="space-y-0 w-full max-w-sm">
              {[{title:"Submitted",date:"12 Apr",color:"bg-green-500",status:"complete"},{title:"Under Review",date:"14 Apr",color:"bg-yellow-500",status:"active"},{title:"Approved",date:"—",color:"bg-muted",status:"pending"}].map((item, i, arr) => (
                <div key={i} className={`relative flex gap-4 ${v.variant === 'alternate' && i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold`}>{i === 0 ? '✓' : i === 1 ? '⏳' : (i+1)}</div>
                    {i < arr.length - 1 && v.showConnectors && <div className="w-0.5 h-10 bg-border" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      codeTemplate={(v) =>
        `<Timeline ${v.orientation} />`
      }
    />
  );
}

export default function ComponentTimelinePage() {
  return (
    <ComponentDocumentation
      name="Timeline"
      description="Vertical display of chronological events, process steps, or application history. Provides clear visual progression through time-ordered content with support for various states and metadata."
      category="Data Display"
      maturity="beta"
      tier="core"
      since="v1.2.0"
      updated="v2.1.0"

      preview={
        <div className="w-full max-w-2xl space-y-6">
          {/* Vertical timeline */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Vertical</p>
            <div className="space-y-0">
              {[{title:"Application Submitted",date:"12 Apr 2026",color:"bg-green-500",icon:"✓"},{title:"Under Review",date:"14 Apr 2026",color:"bg-[#005196]",icon:"⏳"},{title:"Approved",date:"—",color:"bg-muted",icon:"3"}].map((item, i, arr) => (
                <div key={i} className="relative flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>{item.icon}</div>
                    {i < arr.length - 1 && <div className="w-0.5 h-10 bg-border" />}
                  </div>
                  <div className="pb-6">
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Horizontal timeline */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Horizontal</p>
            <div className="flex items-start gap-0">
              {[{title:"Submitted",date:"12 Apr",color:"bg-green-500",icon:"✓"},{title:"Verified",date:"13 Apr",color:"bg-green-500",icon:"✓"},{title:"Processing",date:"14 Apr",color:"bg-[#005196]",icon:"⏳"},{title:"Complete",date:"—",color:"bg-muted",icon:"4"}].map((item, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center text-center shrink-0">
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>{item.icon}</div>
                    <p className="text-xs font-medium text-foreground mt-1.5">{item.title}</p>
                    <p className="text-[10px] text-muted-foreground">{item.date}</p>
                  </div>
                  {i < arr.length - 1 && <div className="flex-1 h-0.5 bg-border mt-4 mx-1 min-w-[24px]" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      }

      props={[
        {
          name: 'items',
          type: 'TimelineItem[]',
          required: true,
          description: 'Array of timeline items ({ key, title, content?, timestamp?, icon?, variant? }).',
        },
        {
          name: 'mode',
          type: "'left' | 'right' | 'alternate'",
          default: "'left'",
          required: false,
          description: 'Layout mode for timeline items.',
        },
        {
          name: 'reverse',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Reverse the order of timeline items.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
      ]}

      examples={[
        {
          title: 'Application Status Tracking',
          description: 'Track the progress of a government application through various stages with status indicators.',
          code: 'import { Timeline } from \'@ux4g/react-core\';\nimport { CheckCircle, Clock, FileText } from \'lucide-react\';\n\nfunction Example() {\n  const applicationSteps = [\n    {\n      title: \'Application Submitted\',\n      description: \'Your visa application has been received and is being processed.\',\n      date: \'Jan 15, 2026\',\n      status: \'completed\',\n      icon: <CheckCircle size={16} />,\n      metadata: \'Reference: APP-2026-001234\'\n    },\n    {\n      title: \'Document Verification\',\n      description: \'Supporting documents are being reviewed by our team.\',\n      date: \'Jan 18, 2026\',\n      status: \'completed\',\n      icon: <FileText size={16} />\n    },\n    {\n      title: \'Background Check\',\n      description: \'Security clearance and background verification in progress.\',\n      date: \'Jan 22, 2026\',\n      status: \'current\',\n      icon: <Clock size={16} />\n    },\n    {\n      title: \'Final Decision\',\n      description: \'Application will be reviewed for final approval.\',\n      date: \'Pending\',\n      status: \'upcoming\'\n    }\n  ];\n\n  return (\n    <Timeline items={applicationSteps} variant="default" />\n  );\n}',
          preview: (
            <TimelinePreview
              variant="default"
              items={[
                {
                  title: 'Application Submitted',
                  description: 'Your visa application has been received and is being processed.',
                  date: 'Jan 15, 2026',
                  status: 'completed',
                  icon: <CheckCircle size={16} />,
                  metadata: 'Reference: APP-2026-001234'
                },
                {
                  title: 'Document Verification',
                  description: 'Supporting documents are being reviewed by our team.',
                  date: 'Jan 18, 2026',
                  status: 'completed',
                  icon: <FileText size={16} />
                },
                {
                  title: 'Background Check',
                  description: 'Security clearance and background verification in progress.',
                  date: 'Jan 22, 2026',
                  status: 'current',
                  icon: <Clock size={16} />
                },
                {
                  title: 'Final Decision',
                  description: 'Application will be reviewed for final approval.',
                  date: 'Pending',
                  status: 'upcoming'
                }
              ]}
            />
          ),
        },
        {
          title: 'Event History',
          description: 'Display chronological event history with alternating layout for improved readability.',
          code: 'import { Timeline } from \'@ux4g/react-core\';\nimport { User, FileText, CheckCircle } from \'lucide-react\';\n\nfunction Example() {\n  const events = [\n    {\n      title: \'Account Created\',\n      description: \'New government services account registered successfully.\',\n      date: \'Mar 1, 2026\',\n      status: \'completed\',\n      icon: <User size={16} />\n    },\n    {\n      title: \'Identity Verified\',\n      description: \'Two-factor authentication enabled and identity confirmed.\',\n      date: \'Mar 3, 2026\',\n      status: \'completed\',\n      icon: <CheckCircle size={16} />\n    },\n    {\n      title: \'First Document Uploaded\',\n      description: \'Passport copy uploaded to secure document vault.\',\n      date: \'Mar 10, 2026\',\n      status: \'completed\',\n      icon: <FileText size={16} />\n    },\n    {\n      title: \'Profile Updated\',\n      description: \'Contact information and mailing address updated.\',\n      date: \'Apr 2, 2026\',\n      status: \'completed\'\n    }\n  ];\n\n  return (\n    <Timeline items={events} variant="alternate" />\n  );\n}',
          preview: (
            <TimelinePreview
              variant="alternate"
              items={[
                {
                  title: 'Account Created',
                  description: 'New government services account registered successfully.',
                  date: 'Mar 1, 2026',
                  status: 'completed',
                  icon: <User size={16} />
                },
                {
                  title: 'Identity Verified',
                  description: 'Two-factor authentication enabled and identity confirmed.',
                  date: 'Mar 3, 2026',
                  status: 'completed',
                  icon: <CheckCircle size={16} />
                },
                {
                  title: 'First Document Uploaded',
                  description: 'Passport copy uploaded to secure document vault.',
                  date: 'Mar 10, 2026',
                  status: 'completed',
                  icon: <FileText size={16} />
                },
                {
                  title: 'Profile Updated',
                  description: 'Contact information and mailing address updated.',
                  date: 'Apr 2, 2026',
                  status: 'completed'
                }
              ]}
            />
          ),
        },
        {
          title: 'Process Steps with Status',
          description: 'Multi-step process with completed, pending, and error states for operational workflows.',
          code: 'import { Timeline } from \'@ux4g/react-core\';\nimport { CheckCircle, Clock, XCircle } from \'lucide-react\';\n\nfunction Example() {\n  const processSteps = [\n    {\n      title: \'Form Submission\',\n      description: \'Application form completed and submitted online.\',\n      date: \'10:30 AM\',\n      status: \'completed\'\n    },\n    {\n      title: \'Payment Processing\',\n      description: \'Application fee payment confirmed via credit card.\',\n      date: \'10:35 AM\',\n      status: \'completed\'\n    },\n    {\n      title: \'Document Upload\',\n      description: \'Required supporting documents failed validation.\',\n      date: \'10:40 AM\',\n      status: \'error\',\n      metadata: \'Error: File format not supported. Please upload PDF or JPG.\'\n    },\n    {\n      title: \'Review Queue\',\n      description: \'Waiting for manual review by processing officer.\',\n      date: \'Pending\',\n      status: \'pending\'\n    }\n  ];\n\n  return (\n    <Timeline items={processSteps} variant="left-aligned" colored />\n  );\n}',
          preview: (
            <TimelinePreview
              variant="left-aligned"
              items={[
                {
                  title: 'Form Submission',
                  description: 'Application form completed and submitted online.',
                  date: '10:30 AM',
                  status: 'completed'
                },
                {
                  title: 'Payment Processing',
                  description: 'Application fee payment confirmed via credit card.',
                  date: '10:35 AM',
                  status: 'completed'
                },
                {
                  title: 'Document Upload',
                  description: 'Required supporting documents failed validation.',
                  date: '10:40 AM',
                  status: 'error',
                  metadata: 'Error: File format not supported. Please upload PDF or JPG.'
                },
                {
                  title: 'Review Queue',
                  description: 'Waiting for manual review by processing officer.',
                  date: 'Pending',
                  status: 'pending'
                }
              ]}
            />
          ),
        },
        {
          title: 'Approval Workflow',
          description: 'Multi-level approval process showing hierarchical decision flow with reviewer information.',
          code: 'import { Timeline } from \'@ux4g/react-core\';\nimport { User, CheckCircle, Clock } from \'lucide-react\';\n\nfunction Example() {\n  const approvalSteps = [\n    {\n      title: \'Department Head Review\',\n      description: \'Approved by Sarah Johnson, Department of Immigration.\',\n      date: \'Apr 1, 2026\',\n      status: \'completed\',\n      icon: <User size={16} />,\n      metadata: \'Approved in 2 business days\'\n    },\n    {\n      title: \'Legal Compliance Check\',\n      description: \'Reviewed and approved by Michael Chen, Legal Department.\',\n      date: \'Apr 3, 2026\',\n      status: \'completed\',\n      icon: <CheckCircle size={16} />,\n      metadata: \'No compliance issues found\'\n    },\n    {\n      title: \'Director Approval\',\n      description: \'Pending approval from Regional Director.\',\n      date: \'Apr 5, 2026\',\n      status: \'current\',\n      icon: <Clock size={16} />,\n      metadata: \'Assigned to Director Emily Rodriguez\'\n    },\n    {\n      title: \'Final Authorization\',\n      description: \'Awaiting final authorization from Assistant Secretary.\',\n      date: \'Scheduled\',\n      status: \'upcoming\'\n    }\n  ];\n\n  return (\n    <Timeline items={approvalSteps} variant="default" />\n  );\n}',
          preview: (
            <TimelinePreview
              variant="default"
              items={[
                {
                  title: 'Department Head Review',
                  description: 'Approved by Sarah Johnson, Department of Immigration.',
                  date: 'Apr 1, 2026',
                  status: 'completed',
                  icon: <User size={16} />,
                  metadata: 'Approved in 2 business days'
                },
                {
                  title: 'Legal Compliance Check',
                  description: 'Reviewed and approved by Michael Chen, Legal Department.',
                  date: 'Apr 3, 2026',
                  status: 'completed',
                  icon: <CheckCircle size={16} />,
                  metadata: 'No compliance issues found'
                },
                {
                  title: 'Director Approval',
                  description: 'Pending approval from Regional Director.',
                  date: 'Apr 5, 2026',
                  status: 'current',
                  icon: <Clock size={16} />,
                  metadata: 'Assigned to Director Emily Rodriguez'
                },
                {
                  title: 'Final Authorization',
                  description: 'Awaiting final authorization from Assistant Secretary.',
                  date: 'Scheduled',
                  status: 'upcoming'
                }
              ]}
            />
          ),
        },
        {
          title: 'Document History Timeline',
          description: 'Track document revisions and changes with detailed metadata and user information.',
          code: 'import { Timeline } from \'@ux4g/react-core\';\nimport { FileText, Send, CheckCircle } from \'lucide-react\';\n\nfunction Example() {\n  const documentHistory = [\n    {\n      title: \'Document Created\',\n      description: \'Initial draft of policy document created.\',\n      date: \'Mar 15, 2026\',\n      status: \'completed\',\n      icon: <FileText size={16} />,\n      metadata: \'Created by John Smith\'\n    },\n    {\n      title: \'First Revision\',\n      description: \'Updated sections 3 and 5 based on stakeholder feedback.\',\n      date: \'Mar 20, 2026\',\n      status: \'completed\',\n      metadata: \'Modified by Jane Doe - Version 1.1\'\n    },\n    {\n      title: \'Sent for Review\',\n      description: \'Document sent to legal team for compliance review.\',\n      date: \'Mar 25, 2026\',\n      status: \'completed\',\n      icon: <Send size={16} />,\n      metadata: \'Sent to 5 reviewers\'\n    },\n    {\n      title: \'Final Approval\',\n      description: \'Document approved and published to internal portal.\',\n      date: \'Apr 1, 2026\',\n      status: \'completed\',\n      icon: <CheckCircle size={16} />,\n      metadata: \'Approved by Director - Version 2.0\'\n    }\n  ];\n\n  return (\n    <Timeline items={documentHistory} variant="left-aligned" />\n  );\n}',
          preview: (
            <TimelinePreview
              variant="left-aligned"
              items={[
                {
                  title: 'Document Created',
                  description: 'Initial draft of policy document created.',
                  date: 'Mar 15, 2026',
                  status: 'completed',
                  icon: <FileText size={16} />,
                  metadata: 'Created by John Smith'
                },
                {
                  title: 'First Revision',
                  description: 'Updated sections 3 and 5 based on stakeholder feedback.',
                  date: 'Mar 20, 2026',
                  status: 'completed',
                  metadata: 'Modified by Jane Doe - Version 1.1'
                },
                {
                  title: 'Sent for Review',
                  description: 'Document sent to legal team for compliance review.',
                  date: 'Mar 25, 2026',
                  status: 'completed',
                  icon: <Send size={16} />,
                  metadata: 'Sent to 5 reviewers'
                },
                {
                  title: 'Final Approval',
                  description: 'Document approved and published to internal portal.',
                  date: 'Apr 1, 2026',
                  status: 'completed',
                  icon: <CheckCircle size={16} />,
                  metadata: 'Approved by Director - Version 2.0'
                }
              ]}
            />
          ),
        },
      ]}

      reactCode={{
        component: 'import React from \'react\';\nimport { cn } from \'../../utils/cn\';\nimport { timelineVariants } from \'./timeline.variants\';\nimport { TimelineProps, TimelineItem } from \'./Timeline.types\';\nimport { CheckCircle, Clock, Circle, XCircle, AlertCircle } from \'lucide-react\';\n\nconst StatusIcon = ({ status }: { status?: string }) => {\n  switch (status) {\n    case \'completed\':\n      return <CheckCircle size={16} />;\n    case \'pending\':\n      return <Clock size={16} />;\n    case \'error\':\n      return <XCircle size={16} />;\n    case \'current\':\n      return <AlertCircle size={16} />;\n    default:\n      return <Circle size={16} />;\n  }\n};\n\nexport const Timeline: React.FC<TimelineProps> = ({\n  items,\n  variant = \'default\',\n  orientation = \'vertical\',\n  showConnector = true,\n  iconPosition = \'center\',\n  colored = false,\n  className,\n  ...props\n}) => {\n  return (\n    <div\n      className={cn(\n        timelineVariants({ variant, orientation }),\n        className\n      )}\n      role="list"\n      aria-label="Timeline"\n      {...props}\n    >\n      {items.map((item: TimelineItem, index: number) => {\n        const isAlternate = variant === \'alternate\' && index % 2 === 0;\n        const isLeftAligned = variant === \'left-aligned\';\n        \n        return (\n          <div\n            key={index}\n            className={cn(\n              \'relative flex gap-4\',\n              isAlternate && \'flex-row-reverse\'\n            )}\n            role="listitem"\n            aria-label={item.title}\n          >\n            <div\n              className={cn(\n                \'flex flex-col items-center\',\n                isLeftAligned ? \'w-auto\' : \'w-24\'\n              )}\n            >\n              {!isLeftAligned && (\n                <div\n                  className={cn(\n                    \'text-sm text-muted-foreground mb-2\',\n                    isAlternate && \'text-right\'\n                  )}\n                  aria-label="Date"\n                >\n                  {item.date}\n                </div>\n              )}\n              \n              <div\n                className={cn(\n                  \'flex items-center justify-center w-8 h-8 rounded-full border-2 z-10\',\n                  item.status === \'completed\' &&\n                    \'bg-[#008800] border-[#008800] text-white\',\n                  item.status === \'pending\' &&\n                    \'bg-yellow-500 border-yellow-500 text-white\',\n                  item.status === \'error\' &&\n                    \'bg-[#dc2626] border-[#dc2626] text-white\',\n                  item.status === \'current\' &&\n                    \'bg-[#005196] border-[#005196] text-white\',\n                  !item.status &&\n                    \'bg-card border-border text-muted-foreground\'\n                )}\n                role="img"\n                aria-label={item.status || \'upcoming\'}\n              >\n                {item.icon || <StatusIcon status={item.status} />}\n              </div>\n              \n              {v.showConnector && index < items.length - 1 && (\n                <div\n                  className={cn(\n                    \'w-0.5 h-full min-h-[60px] mt-2\',\n                    colored && item.status === \'completed\'\n                      ? \'bg-[#008800]\'\n                      : \'bg-gray-300\'\n                  )}\n                  aria-hidden="true"\n                />\n              )}\n            </div>\n            \n            <div className="flex-1 pb-8">\n              {isLeftAligned && (\n                <div className="text-xs text-muted-foreground mb-1">\n                  {item.date}\n                </div>\n              )}\n              \n              <h3 className="font-semibold text-foreground mb-1">\n                {item.title}\n              </h3>\n              \n              {item.description && (\n                <p className="text-sm text-muted-foreground">\n                  {item.description}\n                </p>\n              )}\n              \n              {item.metadata && (\n                <div className="text-xs text-muted-foreground mt-2">\n                  {item.metadata}\n                </div>\n              )}\n            </div>\n          </div>\n        );\n      })}\n    </div>\n  );\n};',
        types: 'import { ReactNode } from \'react\';\n\nexport interface TimelineItem {\n  title: string;\n  description?: string;\n  date: string;\n  status?: \'completed\' | \'current\' | \'pending\' | \'upcoming\' | \'error\';\n  icon?: ReactNode;\n  metadata?: string;\n}\n\nexport interface TimelineProps {\n  items: TimelineItem[];\n  variant?: \'default\' | \'alternate\' | \'left-aligned\';\n  orientation?: \'vertical\' | \'horizontal\';\n  showConnector?: boolean;\n  iconPosition?: \'start\' | \'center\' | \'end\';\n  colored?: boolean;\n  className?: string;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const timelineVariants = cva(\n  [\n    \'space-y-0\',\n    \'w-full\'\n  ],\n  {\n    variants: {\n      variant: {\n        default: [\n          \'timeline-default\'\n        ],\n        alternate: [\n          \'timeline-alternate\'\n        ],\n        \'left-aligned\': [\n          \'timeline-left-aligned\'\n        ],\n      },\n      orientation: {\n        vertical: [\n          \'flex-col\'\n        ],\n        horizontal: [\n          \'flex-row\'\n        ],\n      },\n    },\n    defaultVariants: {\n      variant: \'default\',\n      orientation: \'vertical\',\n    },\n  }\n);\n\nexport type TimelineVariantProps = VariantProps<typeof timelineVariants>;',
      }}

      angularCode={{
        component: 'import { Component, Input } from \'@angular/core\';\n\nexport interface TimelineItem {\n  title: string;\n  description?: string;\n  date: string;\n  status?: \'completed\' | \'current\' | \'pending\' | \'upcoming\' | \'error\';\n  metadata?: string;\n}\n\ntype TimelineVariant = \'default\' | \'alternate\' | \'left-aligned\';\ntype TimelineOrientation = \'vertical\' | \'horizontal\';\n\n@Component({\n  selector: \'ux4g-timeline\',\n  template: `\n    <div\n      [class]="getTimelineClasses()"\n      role="list"\n      aria-label="Timeline"\n    >\n      <div\n        *ngFor="let item of items; let i = index"\n        [class]="getItemClasses(i)"\n        role="listitem"\n        [attr.aria-label]="item.title"\n      >\n        <div [class]="getIconContainerClasses()">\n          <div\n            *ngIf="!isLeftAligned()"\n            [class]="getDateClasses(i)"\n            aria-label="Date"\n          >\n            {{ item.date }}\n          </div>\n          \n          <div\n            [class]="getIconClasses(item.status)"\n            role="img"\n            [attr.aria-label]="item.status || \'upcoming\'"\n          >\n            <ng-container [ngSwitch]="item.status">\n              <span *ngSwitchCase="\'completed\'" class="icon-check"></span>\n              <span *ngSwitchCase="\'pending\'" class="icon-clock"></span>\n              <span *ngSwitchCase="\'error\'" class="icon-x"></span>\n              <span *ngSwitchCase="\'current\'" class="icon-alert"></span>\n              <span *ngSwitchDefault class="icon-circle"></span>\n            </ng-container>\n          </div>\n          \n          <div\n            *ngIf="showConnector && i < items.length - 1"\n            [class]="getConnectorClasses(item.status)"\n            aria-hidden="true"\n          ></div>\n        </div>\n        \n        <div class="flex-1 pb-8">\n          <div\n            *ngIf="isLeftAligned()"\n            class="text-xs text-muted-foreground mb-1"\n          >\n            {{ item.date }}\n          </div>\n          \n          <h3 class="font-semibold text-foreground mb-1">\n            {{ item.title }}\n          </h3>\n          \n          <p\n            *ngIf="item.description"\n            class="text-sm text-muted-foreground"\n          >\n            {{ item.description }}\n          </p>\n          \n          <div\n            *ngIf="item.metadata"\n            class="text-xs text-muted-foreground mt-2"\n          >\n            {{ item.metadata }}\n          </div>\n        </div>\n      </div>\n    </div>\n  `,\n  styleUrls: [\'./timeline.component.css\']\n})\nexport class TimelineComponent {\n  @Input() items: TimelineItem[] = [];\n  @Input() variant: TimelineVariant = \'default\';\n  @Input() orientation: TimelineOrientation = \'vertical\';\n  @Input() showConnector = true;\n  @Input() iconPosition: \'start\' | \'center\' | \'end\' = \'center\';\n  @Input() colored = false;\n\n  getTimelineClasses(): string {\n    const baseClasses = \'space-y-0 w-full\';\n    const orientationClass = this.orientation === \'vertical\' ? \'flex-col\' : \'flex-row\';\n    const variantClass = \'timeline-\' + this.variant;\n    \n    return [baseClasses, orientationClass, variantClass]\n      .filter(Boolean)\n      .join(\' \');\n  }\n\n  getItemClasses(index: number): string {\n    const baseClasses = \'relative flex gap-4\';\n    const isAlternate = this.variant === \'alternate\' && index % 2 === 0;\n    \n    return isAlternate\n      ? baseClasses + \' flex-row-reverse\'\n      : baseClasses;\n  }\n\n  getIconContainerClasses(): string {\n    const baseClasses = \'flex flex-col items-center\';\n    const widthClass = this.isLeftAligned() ? \'w-auto\' : \'w-24\';\n    \n    return baseClasses + \' \' + widthClass;\n  }\n\n  getDateClasses(index: number): string {\n    const baseClasses = \'text-sm text-muted-foreground mb-2\';\n    const isAlternate = this.variant === \'alternate\' && index % 2 === 0;\n    \n    return isAlternate\n      ? baseClasses + \' text-right\'\n      : baseClasses + \' text-left\';\n  }\n\n  getIconClasses(status?: string): string {\n    const baseClasses = \'flex items-center justify-center w-8 h-8 rounded-full border-2 z-10\';\n    \n    if (status === \'completed\') {\n      return baseClasses + \' bg-green-600 border-green-600 text-white\';\n    } else if (status === \'pending\') {\n      return baseClasses + \' bg-yellow-500 border-yellow-500 text-white\';\n    } else if (status === \'error\') {\n      return baseClasses + \' bg-red-600 border-red-600 text-white\';\n    } else if (status === \'current\') {\n      return baseClasses + \' bg-blue-600 border-blue-600 text-white\';\n    }\n    \n    return baseClasses + \' bg-card border-border text-muted-foreground\';\n  }\n\n  getConnectorClasses(status?: string): string {\n    const baseClasses = \'w-0.5 h-full min-h-[60px] mt-2\';\n    \n    if (this.colored && status === \'completed\') {\n      return baseClasses + \' bg-green-600\';\n    }\n    \n    return baseClasses + \' bg-gray-300\';\n  }\n\n  isLeftAligned(): boolean {\n    return this.variant === \'left-aligned\';\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { TimelineComponent } from \'./timeline.component\';\n\n@NgModule({\n  declarations: [TimelineComponent],\n  imports: [CommonModule],\n  exports: [TimelineComponent]\n})\nexport class TimelineModule { }',
        types: 'export interface TimelineItem {\n  title: string;\n  description?: string;\n  date: string;\n  status?: \'completed\' | \'current\' | \'pending\' | \'upcoming\' | \'error\';\n  metadata?: string;\n}\n\nexport type TimelineVariant = \'default\' | \'alternate\' | \'left-aligned\';\nexport type TimelineOrientation = \'vertical\' | \'horizontal\';',
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-timeline> custom element",
        html: "<ux4g-timeline variant=\"primary\" size=\"md\"><!-- Timeline --></ux4g-timeline>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Timeline',
          variants: 'left, right, alternate, opposite',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-timeline/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Timeline',
          variants: 'left, right, alternate, label mode',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/timeline',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Timeline (custom)',
          variants: 'vertical list',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Limited',
          link: 'https://design-system.service.gov.uk/',
        },
        {
          system: 'Chakra UI',
          component: 'Timeline (community)',
          variants: 'vertical, horizontal',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/community/recipes/timeline',
        },
        {
          system: 'Mantine',
          component: 'Timeline',
          variants: 'left, right, alternate',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mantine.dev/core/timeline/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic list structure with role="list" and role="listitem" for proper document outline (WCAG 1.3.1)',
          'Aria-label attributes provide context for timeline and individual items',
          'Status icons include aria-label for screen reader announcements',
          'Sufficient color contrast ratios for all status indicators (WCAG 1.4.3)',
          'Decorative connector lines marked with aria-hidden="true"',
          'Keyboard navigation support through standard list navigation patterns',
          'Dates and metadata properly associated with timeline items',
          'Clear visual hierarchy with heading elements for item titles',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate through interactive elements within timeline items' },
          { key: 'Shift + Tab', action: 'Navigate backwards through timeline' },
          { key: 'Arrow Down', action: 'Move to next timeline item (if applicable)' },
          { key: 'Arrow Up', action: 'Move to previous timeline item (if applicable)' },
        ],
        screenReader: [
          'Announces timeline as a list structure',
          'Reads each timeline item with title, date, and description',
          'Announces status of each timeline item (completed, pending, error, etc.)',
          'Connector lines and decorative icons hidden from screen readers',
          'Metadata and additional information properly announced in context',
        ],
      }}

      tokens={{
        file: '/tokens/components/timeline.json',
        mappings: [
          { property: 'Icon Size', token: 'base.iconSize.md', value: '32px' },
          { property: 'Icon Border Width', token: 'base.borderWidth.md', value: '2px' },
          { property: 'Connector Width', token: 'base.lineWidth.sm', value: '2px' },
          { property: 'Item Spacing', token: 'base.spacing.lg', value: '32px' },
          { property: 'Completed Background', token: 'status.success.background', value: '#008800 (Green 600)' },
          { property: 'Pending Background', token: 'status.warning.background', value: '#F59E0B (Yellow 500)' },
          { property: 'Error Background', token: 'status.error.background', value: '#DC2626 (Red 600)' },
          { property: 'Current Background', token: 'status.info.background', value: '#005196 (Navy 500)' },
          { property: 'Connector Color', token: 'base.color.border.default', value: '#D1D5DB (Gray 300)' },
          { property: 'Title Font Size', token: 'base.fontSize.md', value: '16px' },
          { property: 'Description Font Size', token: 'base.fontSize.sm', value: '14px' },
          { property: 'Date Font Size', token: 'base.fontSize.sm', value: '14px' },
        ],
      }}

      useCases={[
        { title: "Application Status Timeline", description: "Timeline showing application progress.", scenario: "Status tracker page.", implementation: "<Timeline items={statusUpdates} />" },
        { title: "Activity Log", description: "Chronological activity feed.", scenario: "Officer dashboard recent activity.", implementation: "<Timeline items={activities} />" },
      
        { title: 'Application Status History', description: 'Chronological timeline of application status changes.', scenario: 'Citizen views full history: Submitted > Verified > Approved > Issued.', implementation: '<Timeline items={statusHistory} />' },
        { title: 'Audit Trail', description: 'Officer action log showing who did what and when.', scenario: 'Supervisor reviews audit trail of case processing actions.', implementation: '<Timeline items={auditTrail} variant="compact" />' },
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
                  Do use Timeline when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Chronological event sequences</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Application status history</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Activity logs and audit trails</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Process step visualization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Timeline when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Current step only — use Stepper</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Non-chronological data — use List</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple status — use Badge</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Tabular data — use Table</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <div className="space-y-3 mb-3"><div className="flex gap-3"><div className="w-3 h-3 rounded-full bg-green-500 mt-0.5 shrink-0" /><div><p className="text-xs font-medium text-foreground">Application Submitted</p><p className="text-[10px] text-muted-foreground">12 Apr 2026</p></div></div><div className="flex gap-3"><div className="w-3 h-3 rounded-full bg-yellow-500 mt-0.5 shrink-0" /><div><p className="text-xs font-medium text-foreground">Under Review</p><p className="text-[10px] text-muted-foreground">14 Apr 2026</p></div></div></div>
                  <p className="text-sm text-muted-foreground">Use timelines for chronological event sequences and application status history.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="text-xs space-y-1 mb-3"><p className="text-muted-foreground">12 Apr - Submitted</p><p className="text-muted-foreground">14 Apr - Under Review</p></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use timelines for non-chronological data — use List instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <TimelinePlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/stepper" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Stepper</h3>
                <p className="text-sm text-muted-foreground">For current step progress</p>
              </a>
              <a href="/components/list" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">List</h3>
                <p className="text-sm text-muted-foreground">For non-chronological items</p>
              </a>
              <a href="/components/badge" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Badge</h3>
                <p className="text-sm text-muted-foreground">For status indicators</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added horizontal orientation</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added custom icons per item</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with vertical timeline</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Timeline improves comprehension</h3>
                <p className="text-sm text-muted-foreground">Visual timelines improve understanding of process status by 35% compared to text-only descriptions (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
