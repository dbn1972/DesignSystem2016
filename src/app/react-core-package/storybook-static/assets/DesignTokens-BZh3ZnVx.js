import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as t}from"./index-CxbY7dAs.js";import{M as a,C as i,a as s,T as c}from"./index-taMXck3r.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BpacN0XC.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Foundations/Design Tokens"}),`
`,n.jsx(e.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,n.jsx(e.p,{children:"UX4G uses a comprehensive design token system to ensure consistency across all components and applications. These tokens are CSS custom properties that can be used throughout your application."}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @ux4g/styles @ux4g/tokens
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"Import the styles in your application entry point:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import '@ux4g/styles';
`})}),`
`,n.jsx(e.h2,{id:"color-tokens",children:"Color Tokens"}),`
`,n.jsx(e.h3,{id:"semantic-colors",children:"Semantic Colors"}),`
`,n.jsxs(i,{children:[n.jsx(s,{title:"Primary",subtitle:"Main brand color for primary actions",colors:{Primary:"#030213","Primary Foreground":"#FFFFFF"}}),n.jsx(s,{title:"Secondary",subtitle:"Secondary actions and emphasis",colors:{Secondary:"#ECECF0","Secondary Foreground":"#030213"}}),n.jsx(s,{title:"Accent",subtitle:"Highlighted elements",colors:{Accent:"#E9EBEF","Accent Foreground":"#030213"}}),n.jsx(s,{title:"Destructive",subtitle:"Error states and destructive actions",colors:{Destructive:"#D4183D","Destructive Foreground":"#FFFFFF"}})]}),`
`,n.jsx(e.h3,{id:"surface-colors",children:"Surface Colors"}),`
`,n.jsxs(i,{children:[n.jsx(s,{title:"Background",subtitle:"Page background",colors:{Background:"#FFFFFF",Foreground:"#030213"}}),n.jsx(s,{title:"Card",subtitle:"Card backgrounds",colors:{Card:"#FFFFFF","Card Foreground":"#030213"}}),n.jsx(s,{title:"Muted",subtitle:"Subdued backgrounds",colors:{Muted:"#ECECF0","Muted Foreground":"#717182"}})]}),`
`,n.jsx(e.h3,{id:"border--input-colors",children:"Border & Input Colors"}),`
`,n.jsx(i,{children:n.jsx(s,{title:"Interactive",subtitle:"Borders, inputs, and focus rings",colors:{Border:"rgba(0, 0, 0, 0.1)","Input Background":"#F3F3F5",Ring:"#B3B3B3"}})}),`
`,n.jsx(e.h3,{id:"chart-colors",children:"Chart Colors"}),`
`,n.jsx(i,{children:n.jsx(s,{title:"Data Visualization",subtitle:"Colors for charts and graphs",colors:{"Chart 1":"#FF9F40","Chart 2":"#4BC0C0","Chart 3":"#36A2EB","Chart 4":"#FFD700","Chart 5":"#FF6384"}})}),`
`,n.jsx(e.h2,{id:"typography",children:"Typography"}),`
`,n.jsx(e.h3,{id:"font-sizes",children:"Font Sizes"}),`
`,n.jsx(c,{fontSizes:["0.75rem","0.875rem","1rem","1.125rem","1.25rem","1.5rem","1.875rem","2.25rem"],fontWeight:400,sampleText:"The quick brown fox jumps over the lazy dog"}),`
`,n.jsx(e.h3,{id:"font-weights",children:"Font Weights"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Normal"}),": 400 - Body text"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Medium"}),": 500 - Headings, labels, buttons"]}),`
`]}),`
`,n.jsx(e.h3,{id:"type-scale",children:"Type Scale"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* Headings */
h1 { font-size: var(--text-2xl); font-weight: var(--font-weight-medium); }
h2 { font-size: var(--text-xl); font-weight: var(--font-weight-medium); }
h3 { font-size: var(--text-lg); font-weight: var(--font-weight-medium); }
h4 { font-size: var(--text-base); font-weight: var(--font-weight-medium); }

/* Body */
p { font-size: var(--text-base); font-weight: var(--font-weight-normal); }

/* Small text */
small { font-size: var(--text-sm); }
`})}),`
`,n.jsx(e.h2,{id:"spacing-scale",children:"Spacing Scale"}),`
`,n.jsx(e.p,{children:"UX4G uses a consistent 4px base spacing scale:"}),`
`,n.jsxs(e.p,{children:[`| Token | Value | Usage |
|-------|-------|-------|
| `,n.jsx(e.code,{children:"--ux4g-spacing-1"}),` | 0.25rem (4px) | Tight spacing |
| `,n.jsx(e.code,{children:"--ux4g-spacing-2"}),` | 0.5rem (8px) | Small gaps |
| `,n.jsx(e.code,{children:"--ux4g-spacing-3"}),` | 0.75rem (12px) | Input padding (vertical) |
| `,n.jsx(e.code,{children:"--ux4g-spacing-4"}),` | 1rem (16px) | Input padding (horizontal) |
| `,n.jsx(e.code,{children:"--ux4g-spacing-5"}),` | 1.25rem (20px) | Medium spacing |
| `,n.jsx(e.code,{children:"--ux4g-spacing-6"}),` | 1.5rem (24px) | Card padding |
| `,n.jsx(e.code,{children:"--ux4g-spacing-8"}),` | 2rem (32px) | Section spacing |
| `,n.jsx(e.code,{children:"--ux4g-spacing-10"}),` | 2.5rem (40px) | Large spacing |
| `,n.jsx(e.code,{children:"--ux4g-spacing-12"})," | 3rem (48px) | Extra large spacing |"]}),`
`,n.jsx(e.h2,{id:"border-radius",children:"Border Radius"}),`
`,n.jsx(e.p,{children:"Consistent corner rounding for components:"}),`
`,n.jsxs(e.p,{children:[`| Token | Value | Usage |
|-------|-------|-------|
| `,n.jsx(e.code,{children:"--radius-sm"}),` | 0.225rem | Small elements |
| `,n.jsx(e.code,{children:"--radius-md"}),` | 0.425rem | Most components |
| `,n.jsx(e.code,{children:"--radius-lg"}),` | 0.625rem | Cards, dialogs |
| `,n.jsx(e.code,{children:"--radius-xl"})," | 1.025rem | Large surfaces |"]}),`
`,n.jsx(e.h2,{id:"shadows",children:"Shadows"}),`
`,n.jsx(e.p,{children:"Elevation system for depth:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`--ux4g-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--ux4g-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--ux4g-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--ux4g-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`})}),`
`,n.jsx(e.h2,{id:"transitions",children:"Transitions"}),`
`,n.jsx(e.p,{children:"Consistent animation timing:"}),`
`,n.jsxs(e.p,{children:[`| Token | Value | Usage |
|-------|-------|-------|
| `,n.jsx(e.code,{children:"--ux4g-transition-fast"}),` | 150ms ease | Quick interactions |
| `,n.jsx(e.code,{children:"--ux4g-transition-base"}),` | 200ms ease | Standard transitions |
| `,n.jsx(e.code,{children:"--ux4g-transition-slow"})," | 300ms ease | Deliberate animations |"]}),`
`,n.jsx(e.h2,{id:"focus-ring",children:"Focus Ring"}),`
`,n.jsx(e.p,{children:"Consistent focus indicator for accessibility:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`--ux4g-focus-ring-width: 2px;
--ux4g-focus-ring-offset: 2px;
--ux4g-focus-ring-color: #005A9C;
`})}),`
`,n.jsx(e.h2,{id:"component-tokens",children:"Component Tokens"}),`
`,n.jsx(e.h3,{id:"input-controls",children:"Input Controls"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`--ux4g-input-padding-y: 0.75rem;
--ux4g-input-padding-x: 1rem;
--ux4g-input-border-width: 1px;
--ux4g-input-border-color: #D1D5DB;
--ux4g-input-border-radius: 0.375rem;
--ux4g-input-bg: #FFFFFF;
--ux4g-input-color: #1C1C1C;
`})}),`
`,n.jsx(e.h3,{id:"cards",children:"Cards"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`--ux4g-card-padding: 1.5rem;
--ux4g-card-border-radius: 0.375rem;
--ux4g-card-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`})}),`
`,n.jsx(e.h3,{id:"interactive-states",children:"Interactive States"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`--ux4g-hover-opacity: 0.8;
--ux4g-disabled-opacity: 0.6;
`})}),`
`,n.jsx(e.h2,{id:"dark-mode",children:"Dark Mode"}),`
`,n.jsxs(e.p,{children:["All color tokens automatically adapt to dark mode when the ",n.jsx(e.code,{children:".dark"})," class is applied to a parent element:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<html class="dark">
  <!-- All components will use dark mode colors -->
</html>
`})}),`
`,n.jsx(e.p,{children:"Dark mode colors:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Background: ",n.jsx(e.code,{children:"#252525"})]}),`
`,n.jsxs(e.li,{children:["Foreground: ",n.jsx(e.code,{children:"#FCFCFC"})]}),`
`,n.jsxs(e.li,{children:["Card: ",n.jsx(e.code,{children:"#252525"})]}),`
`,n.jsxs(e.li,{children:["Muted: ",n.jsx(e.code,{children:"#454545"})]}),`
`,n.jsxs(e.li,{children:["Border: ",n.jsx(e.code,{children:"#454545"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,n.jsx(e.h3,{id:"using-tokens-in-css",children:"Using Tokens in CSS"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.my-component {
  padding: var(--ux4g-spacing-4);
  background: var(--color-card);
  color: var(--color-card-foreground);
  border-radius: var(--radius-md);
  box-shadow: var(--ux4g-shadow-sm);
  transition: all var(--ux4g-transition-base);
}

.my-component:hover {
  opacity: var(--ux4g-hover-opacity);
}

.my-component:focus {
  outline: var(--ux4g-focus-ring-width) solid var(--ux4g-focus-ring-color);
  outline-offset: var(--ux4g-focus-ring-offset);
}
`})}),`
`,n.jsx(e.h3,{id:"using-tokens-with-tailwind",children:"Using Tokens with Tailwind"}),`
`,n.jsx(e.p,{children:"All tokens are available as Tailwind utilities:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div className="p-4 bg-card text-card-foreground rounded-md shadow-sm">
  Content
</div>
`})}),`
`,n.jsx(e.h2,{id:"government-specific-considerations",children:"Government-Specific Considerations"}),`
`,n.jsx(e.h3,{id:"high-contrast",children:"High Contrast"}),`
`,n.jsx(e.p,{children:"All color combinations meet WCAG 2.1 Level AA contrast requirements (4.5:1 for normal text, 3:1 for large text)."}),`
`,n.jsx(e.h3,{id:"color-blindness",children:"Color Blindness"}),`
`,n.jsx(e.p,{children:"The design system uses patterns, icons, and text labels in addition to color to convey information."}),`
`,n.jsx(e.h3,{id:"regional-variations",children:"Regional Variations"}),`
`,n.jsx(e.p,{children:"Color meanings can vary by culture. The UX4G system uses internationally recognized color conventions:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Red/Destructive: Errors, warnings"}),`
`,n.jsx(e.li,{children:"Green/Success: Confirmations, success states"}),`
`,n.jsx(e.li,{children:"Blue/Primary: Primary actions, links"}),`
`,n.jsx(e.li,{children:"Yellow/Warning: Caution, important notices"}),`
`]}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS Custom Properties (MDN)"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",rel:"nofollow",children:"WCAG 2.1 Color Contrast"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.w3.org/community/design-tokens/",rel:"nofollow",children:"Design Tokens Community Group"})}),`
`]})]})}function C(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{C as default};
