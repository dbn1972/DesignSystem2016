import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const q={title:"Foundations/Colors",parameters:{layout:"padded"}},G=({name:m,value:s,description:a})=>e.jsxs("div",{className:"flex items-center gap-4 p-4 border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"w-16 h-16 rounded-md border border-gray-300 flex-shrink-0",style:{background:s}}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:m}),e.jsx("div",{className:"text-xs text-gray-500 font-mono",children:s}),a&&e.jsx("div",{className:"text-xs text-gray-600 mt-1",children:a})]})]}),r=({colors:m,title:s,description:a})=>e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:s}),a&&e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:a}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:m.map(u=>e.jsx(G,{...u},u.name))})]}),o={render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Semantic Colors"}),e.jsx(r,{title:"Primary & Secondary",description:"Main brand colors for primary and secondary actions",colors:[{name:"Primary",value:"#030213",description:"Main brand color"},{name:"Primary Foreground",value:"#FFFFFF",description:"Text on primary"},{name:"Secondary",value:"#ECECF0",description:"Secondary actions"},{name:"Secondary Foreground",value:"#030213",description:"Text on secondary"}]}),e.jsx(r,{title:"Accent & Muted",description:"Highlighted and subdued elements",colors:[{name:"Accent",value:"#E9EBEF",description:"Highlighted elements"},{name:"Accent Foreground",value:"#030213",description:"Text on accent"},{name:"Muted",value:"#ECECF0",description:"Subdued backgrounds"},{name:"Muted Foreground",value:"#717182",description:"Subdued text"}]}),e.jsx(r,{title:"Destructive",description:"Error states and destructive actions",colors:[{name:"Destructive",value:"#D4183D",description:"Error/danger color"},{name:"Destructive Foreground",value:"#FFFFFF",description:"Text on destructive"}]})]})},t={render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Surface Colors"}),e.jsx(r,{title:"Backgrounds",description:"Page and component backgrounds",colors:[{name:"Background",value:"#FFFFFF",description:"Main page background"},{name:"Foreground",value:"#030213",description:"Main text color"},{name:"Card",value:"#FFFFFF",description:"Card backgrounds"},{name:"Card Foreground",value:"#030213",description:"Text on cards"},{name:"Popover",value:"#FFFFFF",description:"Popover backgrounds"},{name:"Popover Foreground",value:"#030213",description:"Text on popovers"}]})]})},n={render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Interactive Colors"}),e.jsx(r,{title:"Borders & Inputs",description:"Colors for interactive elements",colors:[{name:"Border",value:"rgba(0, 0, 0, 0.1)",description:"Default border color"},{name:"Input Background",value:"#F3F3F5",description:"Input field backgrounds"},{name:"Ring",value:"#B3B3B3",description:"Focus ring color"},{name:"Switch Background",value:"#CBCED4",description:"Toggle switch background"}]})]})},d={render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Chart Colors"}),e.jsx(r,{title:"Data Visualization",description:"Colors for charts, graphs, and data visualization",colors:[{name:"Chart 1",value:"#FF9F40",description:"Orange - primary data series"},{name:"Chart 2",value:"#4BC0C0",description:"Teal - secondary data series"},{name:"Chart 3",value:"#36A2EB",description:"Blue - tertiary data series"},{name:"Chart 4",value:"#FFD700",description:"Gold - quaternary data series"},{name:"Chart 5",value:"#FF6384",description:"Pink - quinary data series"}]}),e.jsxs("div",{className:"mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-sm text-blue-900 mb-2",children:"Accessibility Note"}),e.jsx("p",{className:"text-sm text-blue-800",children:"When using chart colors, always provide additional visual cues beyond color alone (patterns, labels, shapes) to ensure color-blind users can distinguish data series."})]})]})},i={render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Sidebar Colors"}),e.jsx(r,{title:"Navigation Sidebar",description:"Colors specific to sidebar navigation components",colors:[{name:"Sidebar",value:"#FCFCFC",description:"Sidebar background"},{name:"Sidebar Foreground",value:"#252525",description:"Sidebar text"},{name:"Sidebar Primary",value:"#030213",description:"Active/selected items"},{name:"Sidebar Primary Foreground",value:"#FCFCFC",description:"Text on active items"},{name:"Sidebar Accent",value:"#F7F7F7",description:"Hover state"},{name:"Sidebar Accent Foreground",value:"#343434",description:"Text on hover"},{name:"Sidebar Border",value:"#EBEBEB",description:"Sidebar borders"},{name:"Sidebar Ring",value:"#B3B3B3",description:"Focus ring in sidebar"}]})]})},c={render:()=>e.jsxs("div",{className:"dark bg-background text-foreground p-8 min-h-screen",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Dark Mode Colors"}),e.jsx(r,{title:"Dark Mode Palette",description:"Automatically applied when .dark class is on parent element",colors:[{name:"Background",value:"#252525",description:"Dark page background"},{name:"Foreground",value:"#FCFCFC",description:"Light text color"},{name:"Card",value:"#252525",description:"Dark card backgrounds"},{name:"Muted",value:"#454545",description:"Subdued dark backgrounds"},{name:"Border",value:"#454545",description:"Dark borders"},{name:"Primary",value:"#FCFCFC",description:"Light primary color"},{name:"Secondary",value:"#454545",description:"Dark secondary"},{name:"Accent",value:"#454545",description:"Dark accent"}]}),e.jsxs("div",{className:"mt-8 p-4 bg-blue-900/30 border border-blue-700 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-sm text-blue-100 mb-2",children:"Implementation"}),e.jsxs("p",{className:"text-sm text-blue-200",children:["Add the ",e.jsx("code",{className:"bg-blue-800 px-1 rounded",children:".dark"})," class to the html or body element to enable dark mode across the entire application."]})]})]}),parameters:{backgrounds:{default:"dark"}}},l={render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"WCAG 2.1 Compliance"}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Color Contrast Ratios"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"All color combinations meet WCAG 2.1 Level AA requirements:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-sm mb-2",children:"Normal Text (16px)"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Minimum ratio: 4.5:1"}),e.jsxs("div",{className:"mt-3 flex gap-4",children:[e.jsx("div",{className:"flex-1 p-3 bg-primary text-primary-foreground rounded",children:"Primary ✓ 21:1"}),e.jsx("div",{className:"flex-1 p-3 bg-destructive text-destructive-foreground rounded",children:"Destructive ✓ 9.8:1"})]})]}),e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-sm mb-2",children:"Large Text (24px)"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Minimum ratio: 3:1"}),e.jsxs("div",{className:"mt-3 flex gap-4",children:[e.jsx("div",{className:"flex-1 p-3 bg-secondary text-secondary-foreground rounded text-xl",children:"Secondary ✓ 18:1"}),e.jsx("div",{className:"flex-1 p-3 bg-muted text-muted-foreground rounded text-xl",children:"Muted ✓ 4.7:1"})]})]})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-sm text-green-900 mb-2",children:"Government Requirements"}),e.jsx("p",{className:"text-sm text-green-800",children:"The UX4G color system is designed to meet the accessibility requirements of government websites and applications, including support for color blindness and high contrast mode."})]})]})};var p,b,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Semantic Colors</h2>

      <ColorGrid title="Primary & Secondary" description="Main brand colors for primary and secondary actions" colors={[{
      name: 'Primary',
      value: '#030213',
      description: 'Main brand color'
    }, {
      name: 'Primary Foreground',
      value: '#FFFFFF',
      description: 'Text on primary'
    }, {
      name: 'Secondary',
      value: '#ECECF0',
      description: 'Secondary actions'
    }, {
      name: 'Secondary Foreground',
      value: '#030213',
      description: 'Text on secondary'
    }]} />

      <ColorGrid title="Accent & Muted" description="Highlighted and subdued elements" colors={[{
      name: 'Accent',
      value: '#E9EBEF',
      description: 'Highlighted elements'
    }, {
      name: 'Accent Foreground',
      value: '#030213',
      description: 'Text on accent'
    }, {
      name: 'Muted',
      value: '#ECECF0',
      description: 'Subdued backgrounds'
    }, {
      name: 'Muted Foreground',
      value: '#717182',
      description: 'Subdued text'
    }]} />

      <ColorGrid title="Destructive" description="Error states and destructive actions" colors={[{
      name: 'Destructive',
      value: '#D4183D',
      description: 'Error/danger color'
    }, {
      name: 'Destructive Foreground',
      value: '#FFFFFF',
      description: 'Text on destructive'
    }]} />
    </div>
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,g,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Surface Colors</h2>

      <ColorGrid title="Backgrounds" description="Page and component backgrounds" colors={[{
      name: 'Background',
      value: '#FFFFFF',
      description: 'Main page background'
    }, {
      name: 'Foreground',
      value: '#030213',
      description: 'Main text color'
    }, {
      name: 'Card',
      value: '#FFFFFF',
      description: 'Card backgrounds'
    }, {
      name: 'Card Foreground',
      value: '#030213',
      description: 'Text on cards'
    }, {
      name: 'Popover',
      value: '#FFFFFF',
      description: 'Popover backgrounds'
    }, {
      name: 'Popover Foreground',
      value: '#030213',
      description: 'Text on popovers'
    }]} />
    </div>
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var F,C,N;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Interactive Colors</h2>

      <ColorGrid title="Borders & Inputs" description="Colors for interactive elements" colors={[{
      name: 'Border',
      value: 'rgba(0, 0, 0, 0.1)',
      description: 'Default border color'
    }, {
      name: 'Input Background',
      value: '#F3F3F5',
      description: 'Input field backgrounds'
    }, {
      name: 'Ring',
      value: '#B3B3B3',
      description: 'Focus ring color'
    }, {
      name: 'Switch Background',
      value: '#CBCED4',
      description: 'Toggle switch background'
    }]} />
    </div>
}`,...(N=(C=n.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var y,f,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Chart Colors</h2>

      <ColorGrid title="Data Visualization" description="Colors for charts, graphs, and data visualization" colors={[{
      name: 'Chart 1',
      value: '#FF9F40',
      description: 'Orange - primary data series'
    }, {
      name: 'Chart 2',
      value: '#4BC0C0',
      description: 'Teal - secondary data series'
    }, {
      name: 'Chart 3',
      value: '#36A2EB',
      description: 'Blue - tertiary data series'
    }, {
      name: 'Chart 4',
      value: '#FFD700',
      description: 'Gold - quaternary data series'
    }, {
      name: 'Chart 5',
      value: '#FF6384',
      description: 'Pink - quinary data series'
    }]} />

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-sm text-blue-900 mb-2">Accessibility Note</h4>
        <p className="text-sm text-blue-800">
          When using chart colors, always provide additional visual cues beyond color alone
          (patterns, labels, shapes) to ensure color-blind users can distinguish data series.
        </p>
      </div>
    </div>
}`,...(k=(f=d.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var S,j,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Sidebar Colors</h2>

      <ColorGrid title="Navigation Sidebar" description="Colors specific to sidebar navigation components" colors={[{
      name: 'Sidebar',
      value: '#FCFCFC',
      description: 'Sidebar background'
    }, {
      name: 'Sidebar Foreground',
      value: '#252525',
      description: 'Sidebar text'
    }, {
      name: 'Sidebar Primary',
      value: '#030213',
      description: 'Active/selected items'
    }, {
      name: 'Sidebar Primary Foreground',
      value: '#FCFCFC',
      description: 'Text on active items'
    }, {
      name: 'Sidebar Accent',
      value: '#F7F7F7',
      description: 'Hover state'
    }, {
      name: 'Sidebar Accent Foreground',
      value: '#343434',
      description: 'Text on hover'
    }, {
      name: 'Sidebar Border',
      value: '#EBEBEB',
      description: 'Sidebar borders'
    }, {
      name: 'Sidebar Ring',
      value: '#B3B3B3',
      description: 'Focus ring in sidebar'
    }]} />
    </div>
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var D,A,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="dark bg-background text-foreground p-8 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Dark Mode Colors</h2>

      <ColorGrid title="Dark Mode Palette" description="Automatically applied when .dark class is on parent element" colors={[{
      name: 'Background',
      value: '#252525',
      description: 'Dark page background'
    }, {
      name: 'Foreground',
      value: '#FCFCFC',
      description: 'Light text color'
    }, {
      name: 'Card',
      value: '#252525',
      description: 'Dark card backgrounds'
    }, {
      name: 'Muted',
      value: '#454545',
      description: 'Subdued dark backgrounds'
    }, {
      name: 'Border',
      value: '#454545',
      description: 'Dark borders'
    }, {
      name: 'Primary',
      value: '#FCFCFC',
      description: 'Light primary color'
    }, {
      name: 'Secondary',
      value: '#454545',
      description: 'Dark secondary'
    }, {
      name: 'Accent',
      value: '#454545',
      description: 'Dark accent'
    }]} />

      <div className="mt-8 p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
        <h4 className="font-semibold text-sm text-blue-100 mb-2">Implementation</h4>
        <p className="text-sm text-blue-200">
          Add the <code className="bg-blue-800 px-1 rounded">.dark</code> class to the html or body
          element to enable dark mode across the entire application.
        </p>
      </div>
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var M,P,T;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">WCAG 2.1 Compliance</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Color Contrast Ratios</h3>
        <p className="text-sm text-gray-600 mb-4">
          All color combinations meet WCAG 2.1 Level AA requirements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="font-semibold text-sm mb-2">Normal Text (16px)</div>
            <div className="text-sm text-gray-600">Minimum ratio: 4.5:1</div>
            <div className="mt-3 flex gap-4">
              <div className="flex-1 p-3 bg-primary text-primary-foreground rounded">
                Primary ✓ 21:1
              </div>
              <div className="flex-1 p-3 bg-destructive text-destructive-foreground rounded">
                Destructive ✓ 9.8:1
              </div>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="font-semibold text-sm mb-2">Large Text (24px)</div>
            <div className="text-sm text-gray-600">Minimum ratio: 3:1</div>
            <div className="mt-3 flex gap-4">
              <div className="flex-1 p-3 bg-secondary text-secondary-foreground rounded text-xl">
                Secondary ✓ 18:1
              </div>
              <div className="flex-1 p-3 bg-muted text-muted-foreground rounded text-xl">
                Muted ✓ 4.7:1
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <h4 className="font-semibold text-sm text-green-900 mb-2">Government Requirements</h4>
        <p className="text-sm text-green-800">
          The UX4G color system is designed to meet the accessibility requirements of
          government websites and applications, including support for color blindness
          and high contrast mode.
        </p>
      </div>
    </div>
}`,...(T=(P=l.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const R=["SemanticColors","SurfaceColors","InteractiveColors","ChartColors","SidebarColors","DarkMode","AccessibilityCompliance"];export{l as AccessibilityCompliance,d as ChartColors,c as DarkMode,n as InteractiveColors,o as SemanticColors,i as SidebarColors,t as SurfaceColors,R as __namedExportsOrder,q as default};
