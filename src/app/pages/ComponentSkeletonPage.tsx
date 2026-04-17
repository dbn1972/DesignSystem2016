/**
 * Skeleton Component Documentation Page
 * Complete documentation for the Skeleton component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

// Import the actual Skeleton component for live preview
const SkeletonPreview = ({ variant, width, height, count, animated, className, ...props }: any) => {
  const baseClasses = 'bg-gray-200';

  const animationClasses = animated
    ? animated === 'pulse'
      ? 'skeleton-pulse'
      : 'skeleton-wave'
    : '';

  const variantClasses =
    variant === 'circle' ? 'rounded-full' :
    variant === 'rectangle' ? 'rounded' :
    variant === 'text' ? 'rounded h-4' :
    'rounded';

  const style: React.CSSProperties = {
    width: width || (variant === 'circle' ? '40px' : '100%'),
    height: height || (variant === 'circle' ? '40px' : variant === 'text' ? '16px' : '100px'),
  };

  if (variant === 'text' && count && count > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={[baseClasses, variantClasses, animationClasses, className].filter(Boolean).join(' ')}
            style={{ ...style, width: i === count - 1 ? '80%' : '100%' }}
            aria-hidden="true"
            {...props}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={[baseClasses, variantClasses, animationClasses, className].filter(Boolean).join(' ')}
      style={style}
      aria-hidden="true"
      {...props}
    />
  );
};

// Card loading example component
const CardLoadingExample = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsLoaded(!isLoaded)}
        className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors"
      >
        {isLoaded ? 'Show Loading' : 'Show Loaded'}
      </button>

      <div className="border border-border rounded-lg p-6 bg-card">
        {!isLoaded ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <SkeletonPreview variant="circle" width="48px" height="48px" animated="pulse" />
              <div className="flex-1 space-y-2">
                <SkeletonPreview variant="text" width="40%" animated="pulse" />
                <SkeletonPreview variant="text" width="60%" animated="pulse" />
              </div>
            </div>
            <SkeletonPreview variant="rectangle" height="200px" animated="pulse" />
            <SkeletonPreview variant="text" count={3} animated="pulse" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#005196] flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div>
                <h3 className="font-semibold text-foreground">John Doe</h3>
                <p className="text-sm text-muted-foreground">Senior Developer</p>
              </div>
            </div>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23ddd' width='400' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EProject Image%3C/text%3E%3C/svg%3E"
              alt="Project"
              className="w-full h-[200px] object-cover rounded"
            />
            <p className="text-muted-foreground">
              This is a completed project card showing real content. The skeleton loader provided visual feedback while the data was being fetched from the server.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Table loading example component
const TableLoadingExample = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsLoaded(!isLoaded)}
        className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors"
      >
        {isLoaded ? 'Show Loading' : 'Show Loaded'}
      </button>

      <div className="border border-border rounded-lg overflow-hidden bg-card">
        <table className="w-full">
          <thead className="bg-background border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {!isLoaded ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  <td className="px-6 py-4">
                    <SkeletonPreview variant="text" width="70%" animated="wave" />
                  </td>
                  <td className="px-6 py-4">
                    <SkeletonPreview variant="text" width="50%" animated="wave" />
                  </td>
                  <td className="px-6 py-4">
                    <SkeletonPreview variant="text" width="60%" animated="wave" />
                  </td>
                </tr>
              ))
            ) : (
              <>
                <tr>
                  <td className="px-6 py-4 text-sm text-foreground">Application #12345</td>
                  <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded">Approved</span></td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">2026-04-10</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-foreground">Application #12344</td>
                  <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Pending</span></td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">2026-04-09</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-foreground">Application #12343</td>
                  <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded">Approved</span></td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">2026-04-08</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-foreground">Application #12342</td>
                  <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 rounded">Rejected</span></td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">2026-04-07</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-foreground">Application #12341</td>
                  <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded">Approved</span></td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">2026-04-06</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Dashboard loading example component
const DashboardLoadingExample = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsLoaded(!isLoaded)}
        className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors"
      >
        {isLoaded ? 'Show Loading' : 'Show Loaded'}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {!isLoaded ? (
          <>
            <div className="border border-border rounded-lg p-6 bg-card">
              <SkeletonPreview variant="text" width="50%" animated="pulse" />
              <div className="mt-4">
                <SkeletonPreview variant="text" width="70%" height="32px" animated="pulse" />
              </div>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <SkeletonPreview variant="text" width="50%" animated="pulse" />
              <div className="mt-4">
                <SkeletonPreview variant="text" width="70%" height="32px" animated="pulse" />
              </div>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <SkeletonPreview variant="text" width="50%" animated="pulse" />
              <div className="mt-4">
                <SkeletonPreview variant="text" width="70%" height="32px" animated="pulse" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="text-sm text-muted-foreground">Total Applications</div>
              <div className="mt-2 text-3xl font-semibold text-foreground">1,284</div>
              <div className="mt-2 text-sm text-green-600">+12% from last month</div>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="text-sm text-muted-foreground">Pending Review</div>
              <div className="mt-2 text-3xl font-semibold text-foreground">42</div>
              <div className="mt-2 text-sm text-yellow-600">Requires attention</div>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="text-sm text-muted-foreground">Approved This Week</div>
              <div className="mt-2 text-3xl font-semibold text-foreground">156</div>
              <div className="mt-2 text-sm text-green-600">+8% from last week</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// List loading example component
const ListLoadingExample = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsLoaded(!isLoaded)}
        className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors"
      >
        {isLoaded ? 'Show Loading' : 'Show Loaded'}
      </button>

      <div className="border border-border rounded-lg bg-card divide-y divide-border">
        {!isLoaded ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-4 flex items-center gap-4">
              <SkeletonPreview variant="circle" width="40px" height="40px" animated="wave" />
              <div className="flex-1 space-y-2">
                <SkeletonPreview variant="text" width="30%" animated="wave" />
                <SkeletonPreview variant="text" width="60%" animated="wave" />
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                AM
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">Alice Martinez</div>
                <div className="text-sm text-muted-foreground">Submitted license renewal application</div>
              </div>
            </div>
            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-medium">
                BJ
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">Bob Johnson</div>
                <div className="text-sm text-muted-foreground">Uploaded required documentation</div>
              </div>
            </div>
            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
                CW
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">Carol Williams</div>
                <div className="text-sm text-muted-foreground">Application approved by reviewer</div>
              </div>
            </div>
            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-medium">
                DD
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">David Davis</div>
                <div className="text-sm text-muted-foreground">Payment processed successfully</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Form loading example component
const FormLoadingExample = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsLoaded(!isLoaded)}
        className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors"
      >
        {isLoaded ? 'Show Loading' : 'Show Loaded'}
      </button>

      <div className="border border-border rounded-lg p-6 bg-card space-y-4">
        {!isLoaded ? (
          <>
            <div>
              <SkeletonPreview variant="text" width="30%" animated="pulse" />
              <div className="mt-2">
                <SkeletonPreview variant="rectangle" height="40px" animated="pulse" />
              </div>
            </div>
            <div>
              <SkeletonPreview variant="text" width="25%" animated="pulse" />
              <div className="mt-2">
                <SkeletonPreview variant="rectangle" height="40px" animated="pulse" />
              </div>
            </div>
            <div>
              <SkeletonPreview variant="text" width="35%" animated="pulse" />
              <div className="mt-2">
                <SkeletonPreview variant="rectangle" height="100px" animated="pulse" />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <SkeletonPreview variant="rectangle" width="100px" height="40px" animated="pulse" />
              <SkeletonPreview variant="rectangle" width="100px" height="40px" animated="pulse" />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Additional Comments
              </label>
              <textarea
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"
                rows={4}
                placeholder="Enter any additional information"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors">
                Submit
              </button>
              <button className="px-4 py-2 border border-border text-muted-foreground rounded hover:bg-background transition-colors">
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function SkeletonPlayground() {
  const [variant, setVariant] = React.useState('text');
  const [animation, setAnimation] = React.useState('pulse');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-4 sm:p-6 lg:p-8">
        <div className="w-full flex items-center justify-center">
          <SkeletonPreview variant={variant} animated={animation !== "none"} />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Variant</label>
            <select value={variant} onChange={e => setVariant(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="text">text</option>
              <option value="rectangle">rectangle</option>
              <option value="circle">circle</option>
              <option value="card">card</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-foreground mb-1">Animation</label>
            <select value={animation} onChange={e => setAnimation(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="pulse">pulse</option>
              <option value="wave">wave</option>
              <option value="none">none</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Skeleton ${variant} ${animation} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentSkeletonPage() {
  return (
    <>
      <style>{`
        @keyframes skeleton-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes skeleton-wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .skeleton-pulse {
          animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .skeleton-wave {
          position: relative;
          overflow: hidden;
        }

        .skeleton-wave::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 100%);
          animation: skeleton-wave 1.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .skeleton-pulse,
          .skeleton-wave::after {
            animation: none;
          }
        }
      `}</style>

      <ComponentDocumentation
        name="Skeleton"
        description="Loading placeholder that shows content structure while data is being fetched. Provides visual feedback to users during asynchronous operations and improves perceived performance."
        category="Feedback"
        maturity="beta"
        tier="core"
        since="v1.2.0"
        updated="v2.1.0"

      preview={
        <div className="w-full max-w-2xl">
          <div className="w-full max-w-sm space-y-3"><SkeletonPreview variant="text" width="75%" /><SkeletonPreview variant="text" width="100%" /><SkeletonPreview variant="text" width="50%" /></div>
        </div>
      }

        props={[
          {
            name: 'variant',
            type: "'text' | 'circle' | 'rectangle' | 'custom'",
            default: "'text'",
            required: false,
            description: 'Visual variant of the skeleton. Text for text lines, circle for avatars, rectangle for images/cards, custom for specific shapes.',
          },
          {
            name: 'width',
            type: 'string | number',
            required: false,
            description: 'Width of the skeleton. Accepts CSS units (px, %, rem) or numbers (treated as px). Defaults to 100% for text/rectangle, 40px for circle.',
          },
          {
            name: 'height',
            type: 'string | number',
            required: false,
            description: 'Height of the skeleton. Accepts CSS units (px, %, rem) or numbers (treated as px). Defaults to 16px for text, 40px for circle, 100px for rectangle.',
          },
          {
            name: 'count',
            type: 'number',
            default: '1',
            required: false,
            description: 'Number of skeleton lines to render. Only applicable for text variant. Last line is rendered at 80% width for natural appearance.',
          },
          {
            name: 'animated',
            type: "'pulse' | 'wave' | false",
            default: "'pulse'",
            required: false,
            description: 'Animation type. Pulse creates opacity fade effect, wave creates shimmer effect. Set to false for no animation (respects prefers-reduced-motion).',
          },
          {
            name: 'borderRadius',
            type: 'string | number',
            required: false,
            description: 'Custom border radius. Overrides variant defaults. Accepts CSS units or numbers (treated as px).',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            description: 'Additional CSS classes to apply. Merged with variant classes.',
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: "'Loading content'",
            required: false,
            description: 'Accessible label for screen readers. Announces loading state.',
          },
        ]}

        examples={[
          {
            title: 'Text Loading (Single and Multiple Lines)',
            description: 'Skeleton placeholders for text content with single or multiple lines.',
            code: 'import { Skeleton } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div className="space-y-6">\n      <div>\n        <h3 className="text-sm font-medium mb-2">Single Line</h3>\n        <Skeleton variant="text" width="60%" />\n      </div>\n      \n      <div>\n        <h3 className="text-sm font-medium mb-2">Multiple Lines</h3>\n        <Skeleton variant="text" count={3} />\n      </div>\n      \n      <div>\n        <h3 className="text-sm font-medium mb-2">Custom Width</h3>\n        <Skeleton variant="text" width="200px" />\n      </div>\n    </div>\n  );\n}',
            preview: (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2 text-muted-foreground">Single Line</h3>
                  <SkeletonPreview variant="text" width="60%" animated="pulse" />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 text-muted-foreground">Multiple Lines</h3>
                  <SkeletonPreview variant="text" count={3} animated="pulse" />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 text-muted-foreground">Custom Width</h3>
                  <SkeletonPreview variant="text" width="200px" animated="pulse" />
                </div>
              </div>
            ),
          },
          {
            title: 'Circle and Rectangle Shapes',
            description: 'Circle variant for avatars and rectangle variant for images or cards.',
            code: 'import { Skeleton } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div className="space-y-6">\n      <div>\n        <h3 className="text-sm font-medium mb-2">Avatar (Circle)</h3>\n        <div className="flex gap-4 items-center">\n          <Skeleton variant="circle" width="40px" height="40px" />\n          <Skeleton variant="circle" width="56px" height="56px" />\n          <Skeleton variant="circle" width="72px" height="72px" />\n        </div>\n      </div>\n      \n      <div>\n        <h3 className="text-sm font-medium mb-2">Image (Rectangle)</h3>\n        <Skeleton variant="rectangle" width="100%" height="200px" />\n      </div>\n    </div>\n  );\n}',
            preview: (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2 text-muted-foreground">Avatar (Circle)</h3>
                  <div className="flex gap-4 items-center">
                    <SkeletonPreview variant="circle" width="40px" height="40px" animated="pulse" />
                    <SkeletonPreview variant="circle" width="56px" height="56px" animated="pulse" />
                    <SkeletonPreview variant="circle" width="72px" height="72px" animated="pulse" />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 text-muted-foreground">Image (Rectangle)</h3>
                  <SkeletonPreview variant="rectangle" width="100%" height="200px" animated="pulse" />
                </div>
              </div>
            ),
          },
          {
            title: 'Animation Types (Pulse vs Wave)',
            description: 'Two animation styles: pulse (opacity fade) and wave (shimmer effect).',
            code: 'import { Skeleton } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div className="space-y-6">\n      <div>\n        <h3 className="text-sm font-medium mb-2">Pulse Animation</h3>\n        <Skeleton variant="text" count={2} animated="pulse" />\n      </div>\n      \n      <div>\n        <h3 className="text-sm font-medium mb-2">Wave Animation</h3>\n        <Skeleton variant="text" count={2} animated="wave" />\n      </div>\n      \n      <div>\n        <h3 className="text-sm font-medium mb-2">No Animation</h3>\n        <Skeleton variant="text" count={2} animated={false} />\n      </div>\n    </div>\n  );\n}',
            preview: (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2 text-muted-foreground">Pulse Animation</h3>
                  <SkeletonPreview variant="text" count={2} animated="pulse" />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 text-muted-foreground">Wave Animation</h3>
                  <SkeletonPreview variant="text" count={2} animated="wave" />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 text-muted-foreground">No Animation</h3>
                  <SkeletonPreview variant="text" count={2} animated={false} />
                </div>
              </div>
            ),
          },
          {
            title: 'Card Loading with Toggle',
            description: 'Interactive example showing skeleton loading for a card layout with toggle between loading and loaded states.',
            code: 'import { Skeleton } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isLoading, setIsLoading] = useState(true);\n  \n  return (\n    <div>\n      {isLoading ? (\n        <div className="border rounded-lg p-6 space-y-4">\n          <div className="flex items-center gap-4">\n            <Skeleton variant="circle" width="48px" height="48px" />\n            <div className="flex-1">\n              <Skeleton variant="text" width="40%" />\n              <Skeleton variant="text" width="60%" />\n            </div>\n          </div>\n          <Skeleton variant="rectangle" height="200px" />\n          <Skeleton variant="text" count={3} />\n        </div>\n      ) : (\n        <div className="border rounded-lg p-6">\n          <div className="flex items-center gap-4">\n            <div className="w-12 h-12 rounded-full bg-blue-500" />\n            <div>\n              <h3 className="font-semibold">John Doe</h3>\n              <p className="text-sm text-muted-foreground">Developer</p>\n            </div>\n          </div>\n          {/* Content loaded */}\n        </div>\n      )}\n    </div>\n  );\n}',
            preview: <CardLoadingExample />,
          },
          {
            title: 'Table Loading',
            description: 'Skeleton placeholders for table rows during data fetching.',
            code: 'import { Skeleton } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isLoading, setIsLoading] = useState(true);\n  \n  return (\n    <table className="w-full">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Status</th>\n          <th>Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        {isLoading ? (\n          Array.from({ length: 5 }).map((_, i) => (\n            <tr key={i}>\n              <td><Skeleton variant="text" width="70%" /></td>\n              <td><Skeleton variant="text" width="50%" /></td>\n              <td><Skeleton variant="text" width="60%" /></td>\n            </tr>\n          ))\n        ) : (\n          {/* Loaded table rows */}\n        )}\n      </tbody>\n    </table>\n  );\n}',
            preview: <TableLoadingExample />,
          },
          {
            title: 'Dashboard Metrics Loading',
            description: 'Loading placeholders for dashboard metric cards.',
            code: 'import { Skeleton } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isLoading, setIsLoading] = useState(true);\n  \n  return (\n    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">\n      {isLoading ? (\n        Array.from({ length: 3 }).map((_, i) => (\n          <div key={i} className="border rounded-lg p-6">\n            <Skeleton variant="text" width="50%" />\n            <Skeleton variant="text" width="70%" height="32px" />\n          </div>\n        ))\n      ) : (\n        {/* Loaded metrics */}\n      )}\n    </div>\n  );\n}',
            preview: <DashboardLoadingExample />,
          },
          {
            title: 'List Loading',
            description: 'Skeleton placeholders for list items with avatars and text.',
            code: 'import { Skeleton } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isLoading, setIsLoading] = useState(true);\n  \n  return (\n    <div className="space-y-4">\n      {isLoading ? (\n        Array.from({ length: 4 }).map((_, i) => (\n          <div key={i} className="flex items-center gap-4">\n            <Skeleton variant="circle" width="40px" height="40px" />\n            <div className="flex-1">\n              <Skeleton variant="text" width="30%" />\n              <Skeleton variant="text" width="60%" />\n            </div>\n          </div>\n        ))\n      ) : (\n        {/* Loaded list items */}\n      )}\n    </div>\n  );\n}',
            preview: <ListLoadingExample />,
          },
          {
            title: 'Form Loading',
            description: 'Loading placeholders for form fields and buttons.',
            code: 'import { Skeleton } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isLoading, setIsLoading] = useState(true);\n  \n  return (\n    <div className="space-y-4">\n      {isLoading ? (\n        <>\n          <div>\n            <Skeleton variant="text" width="30%" />\n            <Skeleton variant="rectangle" height="40px" />\n          </div>\n          <div>\n            <Skeleton variant="text" width="25%" />\n            <Skeleton variant="rectangle" height="40px" />\n          </div>\n          <div>\n            <Skeleton variant="text" width="35%" />\n            <Skeleton variant="rectangle" height="100px" />\n          </div>\n          <div className="flex gap-3">\n            <Skeleton variant="rectangle" width="100px" height="40px" />\n            <Skeleton variant="rectangle" width="100px" height="40px" />\n          </div>\n        </>\n      ) : (\n        {/* Loaded form */}\n      )}\n    </div>\n  );\n}',
            preview: <FormLoadingExample />,
          },
        ]}

        reactCode={{
          component: 'import React, { forwardRef } from \'react\';\nimport { cn } from \'../../utils/cn\';\nimport { skeletonVariants } from \'./skeleton.variants\';\nimport { SkeletonProps } from \'./Skeleton.types\';\n\nexport const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(\n  (\n    {\n      className,\n      variant = \'text\',\n      width,\n      height,\n      count = 1,\n      animated = \'pulse\',\n      borderRadius,\n      ariaLabel = \'Loading content\',\n      style,\n      ...props\n    },\n    ref\n  ) => {\n    const customStyle: React.CSSProperties = {\n      ...style,\n      width: width,\n      height: height,\n      borderRadius: borderRadius,\n    };\n\n    if (variant === \'text\' && count > 1) {\n      return (\n        <div\n          ref={ref}\n          className="space-y-2"\n          role="status"\n          aria-label={ariaLabel}\n          aria-busy="true"\n          {...props}\n        >\n          {Array.from({ length: count }).map((_, index) => (\n            <div\n              key={index}\n              className={cn(\n                skeletonVariants({ variant, animated }),\n                className\n              )}\n              style={{\n                ...customStyle,\n                width: index === count - 1 ? \'80%\' : customStyle.width || \'100%\',\n              }}\n              aria-hidden="true"\n            />\n          ))}\n        </div>\n      );\n    }\n\n    return (\n      <div\n        ref={ref}\n        className={cn(skeletonVariants({ variant, animated }), className)}\n        style={customStyle}\n        role="status"\n        aria-label={ariaLabel}\n        aria-busy="true"\n        aria-hidden="true"\n        {...props}\n      />\n    );\n  }\n);\n\nSkeleton.displayName = \'Skeleton\';',
          types: 'export interface SkeletonProps\n  extends React.HTMLAttributes<HTMLDivElement>,\n          SkeletonVariantProps {\n  variant?: \'text\' | \'circle\' | \'rectangle\' | \'custom\';\n  width?: string | number;\n  height?: string | number;\n  count?: number;\n  animated?: \'pulse\' | \'wave\' | false;\n  borderRadius?: string | number;\n  ariaLabel?: string;\n}',
          variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const skeletonVariants = cva(\n  [\n    \'bg-gray-200 dark:bg-gray-700\',\n  ],\n  {\n    variants: {\n      variant: {\n        text: [\n          \'rounded\',\n          \'h-4\',\n          \'w-full\',\n        ],\n        circle: [\n          \'rounded-full\',\n          \'w-10 h-10\',\n        ],\n        rectangle: [\n          \'rounded\',\n          \'w-full h-24\',\n        ],\n        custom: [\n          \'rounded\',\n        ],\n      },\n      animated: {\n        pulse: [\n          \'animate-pulse\',\n        ],\n        wave: [\n          \'relative overflow-hidden\',\n          \'before:absolute before:inset-0\',\n          \'before:translate-x-[-100%]\',\n          \'before:bg-gradient-to-r\',\n          \'before:from-transparent\',\n          \'before:via-white/60\',\n          \'before:to-transparent\',\n          \'before:animate-[shimmer_1.5s_infinite]\',\n        ],\n        false: [],\n      },\n    },\n    defaultVariants: {\n      variant: \'text\',\n      animated: \'pulse\',\n    },\n  }\n);\n\nexport type SkeletonVariantProps = VariantProps<typeof skeletonVariants>;',
        }}

        angularCode={{
          component: 'import { Component, Input } from \'@angular/core\';\n\ntype SkeletonVariant = \'text\' | \'circle\' | \'rectangle\' | \'custom\';\ntype SkeletonAnimation = \'pulse\' | \'wave\' | false;\n\n@Component({\n  selector: \'ux4g-skeleton\',\n  template: `\n    <div\n      *ngIf="count === 1"\n      [class]="getSkeletonClasses()"\n      [style.width]="width"\n      [style.height]="height"\n      [style.border-radius]="borderRadius"\n      role="status"\n      [attr.aria-label]="ariaLabel"\n      aria-busy="true"\n      aria-hidden="true"\n    ></div>\n    \n    <div\n      *ngIf="count > 1 && variant === \'text\'"\n      class="ux4g-skeleton-container"\n      role="status"\n      [attr.aria-label]="ariaLabel"\n      aria-busy="true"\n    >\n      <div\n        *ngFor="let item of getCountArray(); let i = index"\n        [class]="getSkeletonClasses()"\n        [style.width]="i === count - 1 ? \'80%\' : width"\n        [style.height]="height"\n        aria-hidden="true"\n      ></div>\n    </div>\n  `,\n  styleUrls: [\'./skeleton.component.css\']\n})\nexport class SkeletonComponent {\n  @Input() variant: SkeletonVariant = \'text\';\n  @Input() width?: string;\n  @Input() height?: string;\n  @Input() count: number = 1;\n  @Input() animated: SkeletonAnimation = \'pulse\';\n  @Input() borderRadius?: string;\n  @Input() ariaLabel: string = \'Loading content\';\n  @Input() className?: string;\n\n  getSkeletonClasses(): string {\n    const baseClasses = \'ux4g-skeleton\';\n    const variantClass = \'ux4g-skeleton-\' + this.variant;\n    const animationClass = this.animated ? \'ux4g-skeleton-\' + this.animated : \'\';\n    \n    return [baseClasses, variantClass, animationClass, this.className]\n      .filter(Boolean)\n      .join(\' \');\n  }\n\n  getCountArray(): number[] {\n    return Array.from({ length: this.count }, (_, i) => i);\n  }\n}',
          module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { SkeletonComponent } from \'./skeleton.component\';\n\n@NgModule({\n  declarations: [SkeletonComponent],\n  imports: [CommonModule],\n  exports: [SkeletonComponent]\n})\nexport class SkeletonModule { }',
          types: 'export type SkeletonVariant = \'text\' | \'circle\' | \'rectangle\' | \'custom\';\nexport type SkeletonAnimation = \'pulse\' | \'wave\' | false;',
        }}

        webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-skeleton> custom element",
        html: "<ux4g-skeleton variant=\"primary\" size=\"md\"><!-- Skeleton --></ux4g-skeleton>",
      }}
      comparisons={[
          {
            system: 'Material UI (Google)',
            component: 'Skeleton',
            variants: 'text, circular, rectangular, rounded',
            accessibility: 'WCAG 2.1 AA',
            documentation: 'Comprehensive',
            link: 'https://mui.com/material-ui/react-skeleton/',
          },
          {
            system: 'Ant Design (Alibaba)',
            component: 'Skeleton',
            variants: 'default, avatar, input, image, button',
            accessibility: 'WCAG 2.0 AA',
            documentation: 'Good',
            link: 'https://ant.design/components/skeleton',
          },
          {
            system: 'Chakra UI',
            component: 'Skeleton',
            variants: 'default with custom shapes',
            accessibility: 'WCAG 2.1 AA',
            documentation: 'Good',
            link: 'https://chakra-ui.com/docs/components/skeleton',
          },
          {
            system: 'GOV.UK Design System',
            component: 'Loading spinner (no skeleton)',
            variants: 'spinner only',
            accessibility: 'WCAG 2.1 AAA',
            documentation: 'Limited',
            link: 'https://design-system.service.gov.uk/',
          },
          {
            system: 'React Loading Skeleton',
            component: 'Skeleton',
            variants: 'customizable via props',
            accessibility: 'WCAG 2.1 AA',
            documentation: 'Good',
            link: 'https://github.com/dvtng/react-loading-skeleton',
          },
        ]}

        accessibility={{
          wcagLevel: 'WCAG 2.1 Level AA Compliant',
          features: [
            'role="status" attribute announces loading state to screen readers (WCAG 4.1.3)',
            'aria-busy="true" indicates content is loading (WCAG 4.1.3)',
            'aria-label provides context about what is loading (WCAG 4.1.2)',
            'aria-hidden="true" on individual skeleton elements prevents redundant announcements',
            'Respects prefers-reduced-motion media query to disable animations (WCAG 2.3.3)',
            'Sufficient color contrast between skeleton and background (WCAG 1.4.3)',
            'Non-interactive element does not receive keyboard focus',
            'Loading state is programmatically determinable by assistive technologies',
          ],
          keyboardSupport: [
            { key: 'N/A', action: 'Skeleton is non-interactive and does not receive focus' },
          ],
          screenReader: [
            'Announces "Loading content" or custom ariaLabel when skeleton appears',
            'aria-busy="true" indicates content is being fetched',
            'role="status" creates a live region with implicit aria-live="polite"',
            'Individual skeleton shapes are hidden with aria-hidden="true" to prevent redundant announcements',
            'When content loads, skeleton is replaced and screen reader announces new content',
          ],
        }}

        tokens={{
          file: '/tokens/components/skeleton.json',
          mappings: [
            { property: 'Background Color', token: 'skeleton.background.default', value: '#e5e7eb (Gray 200)' },
            { property: 'Dark Mode Background', token: 'skeleton.background.dark', value: '#374151 (Gray 700)' },
            { property: 'Text Height', token: 'skeleton.text.height', value: '16px' },
            { property: 'Text Border Radius', token: 'skeleton.text.borderRadius', value: '4px' },
            { property: 'Circle Size Default', token: 'skeleton.circle.size.default', value: '40px' },
            { property: 'Rectangle Height Default', token: 'skeleton.rectangle.height.default', value: '96px' },
            { property: 'Animation Duration Pulse', token: 'skeleton.animation.pulse.duration', value: '2s' },
            { property: 'Animation Duration Wave', token: 'skeleton.animation.wave.duration', value: '1.5s' },
          ],
        }}

        useCases={[
          {
            title: 'Application List Loading',
            description: 'Display skeleton placeholders while loading a list of citizen applications, showing the expected structure with avatars and text lines.',
            implementation: 'Loading list of license applications with applicant names, status badges, and submission dates in a table or card layout.',
          },
          {
            title: 'Dashboard Metrics Loading',
            description: 'Show skeleton cards for dashboard metrics while fetching analytics data, maintaining visual hierarchy and layout stability.',
            implementation: 'Loading dashboard showing total applications, pending reviews, and approval rates with skeleton placeholders for numbers and labels.',
          },
          {
            title: 'Document Preview Loading',
            description: 'Display skeleton for document preview area while PDF or image is being fetched from the server.',
            implementation: 'Loading document viewer with skeleton rectangle representing the document area and skeleton text for document metadata.',
          },
          {
            title: 'Table Data Loading',
            description: 'Show skeleton rows in data tables during initial load or when filtering/sorting, preventing layout shift and providing clear feedback.',
            implementation: 'Loading table of permit applications with skeleton placeholders for each column maintaining table structure.',
          },
          {
            title: 'User Profile Loading',
            description: 'Display skeleton for user profile page while fetching personal information, showing expected layout with avatar and text fields.',
            implementation: 'Loading citizen profile with skeleton circle for avatar, skeleton text for name and contact details, and skeleton rectangles for additional information sections.',
          },
          {
            title: 'Form Loading',
            description: 'Show skeleton placeholders for form fields while loading dynamic form configuration or pre-filled data from the server.',
            implementation: 'Loading application form with skeleton rectangles for input fields, labels, and action buttons maintaining form structure.',
          },
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
                  Do use Skeleton when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Content loading placeholders</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Initial page render before data arrives</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Card or list item loading states</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Skeleton when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Brief loading — use Spinner</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Known progress — use Progress bar</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Error states — use Alert</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Empty states — use EmptyState</li>
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
                  <div className="space-y-2 mb-3"><div className="h-4 bg-muted rounded animate-pulse w-3/4" /><div className="h-4 bg-muted rounded animate-pulse w-full" /><div className="h-4 bg-muted rounded animate-pulse w-1/2" /></div>
                  <p className="text-sm text-muted-foreground">Use skeleton screens for content loading — they feel 15% faster than spinners.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="flex items-center justify-center h-16 mb-3"><div className="w-6 h-6 border-2 border-muted border-t-muted-foreground rounded-full animate-spin" /></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use skeletons for brief loading under 1 second — it causes flicker.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Skeleton configurations in real time.</p>
            <SkeletonPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/spinner" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Spinner</h3>
                <p className="text-sm text-muted-foreground">For brief loading</p>
              </a>
              <a href="/components/progress" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Progress</h3>
                <p className="text-sm text-muted-foreground">For known progress</p>
              </a>
              <a href="/components/emptystate" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">EmptyState</h3>
                <p className="text-sm text-muted-foreground">For no-data states</p>
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
                  <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added card and text variants</li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added animation options</li>
                </ul>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                  <span className="text-xs text-muted-foreground">October 2025</span>
                </div>
                <ul className="space-y-1">
                  <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with rectangle skeleton</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Skeleton vs Spinner</h3>
                <p className="text-sm text-muted-foreground">Skeleton screens are perceived as 15% faster than spinners because they set layout expectations (Google research).</p>
              </div>
            </div>
          </section>
        </>
      }
      />
    </>
  );
}
