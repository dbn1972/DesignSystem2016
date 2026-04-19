import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-CxbY7dAs.js";import{M as t}from"./index-taMXck3r.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BpacN0XC.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(i){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"ux4g-design-system",children:"UX4G Design System"}),`
`,n.jsxs(e.p,{children:["Welcome to the ",n.jsx(e.strong,{children:"UX4G Design System"})," - A comprehensive component library for Indian Government applications."]}),`
`,n.jsx(e.h2,{id:"about-ux4g",children:"About UX4G"}),`
`,n.jsx(e.p,{children:"UX4G (User Experience for Government) is a modern, accessible, and production-ready design system built specifically for Indian government digital services. It provides a consistent user experience across all government applications while meeting WCAG 2.1 AA accessibility standards."}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.strong,{children:"73 Production-Ready Components"})," - Comprehensive component library",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Dual Framework Support"})," - React & Angular implementations",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Accessibility First"})," - WCAG 2.1 Level AA compliant",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Government-Specific"})," - Aadhaar, PAN, DigiLocker integration patterns",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Design Tokens"})," - Systematic design language with tokens",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"TypeScript"})," - Full type safety",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Responsive"})," - Mobile-first design approach",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Multi-language"})," - Hindi, English, and regional language support"]}),`
`,n.jsx(e.h2,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.h3,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @ux4g/react-core @ux4g/tokens @ux4g/styles
`})}),`
`,n.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, Input, Card } from '@ux4g/react-core';
import '@ux4g/styles';

function App() {
  return (
    <Card>
      <Input label="Email" type="email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"component-categories",children:"Component Categories"}),`
`,n.jsx(e.h3,{id:"form-components",children:"Form Components"}),`
`,n.jsx(e.p,{children:"Essential form elements with validation and accessibility built-in."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Button, Input, Checkbox, Radio, Select, Textarea, Switch, OTP Input, and more"}),`
`]}),`
`,n.jsx(e.h3,{id:"feedback-components",children:"Feedback Components"}),`
`,n.jsx(e.p,{children:"User feedback and status indicators."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Alert, Badge, Toast, Progress, Spinner, Status Tag"}),`
`]}),`
`,n.jsx(e.h3,{id:"navigation-components",children:"Navigation Components"}),`
`,n.jsx(e.p,{children:"Navigation and wayfinding components."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Breadcrumb, Pagination, Tabs, Menu, Drawer, Stepper"}),`
`]}),`
`,n.jsx(e.h3,{id:"data-display",children:"Data Display"}),`
`,n.jsx(e.p,{children:"Components for displaying information and data."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Avatar, Tag, Statistic, Timeline, Card, Table"}),`
`]}),`
`,n.jsx(e.h3,{id:"layout-components",children:"Layout Components"}),`
`,n.jsx(e.p,{children:"Layout and structure components."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Container, Stack, Grid, Divider, Skeleton"}),`
`]}),`
`,n.jsx(e.h3,{id:"overlay-components",children:"Overlay Components"}),`
`,n.jsx(e.p,{children:"Modal and overlay components."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Dialog, Tooltip"}),`
`]}),`
`,n.jsx(e.h2,{id:"design-principles",children:"Design Principles"}),`
`,n.jsx(e.h3,{id:"1-accessibility-first",children:"1. Accessibility First"}),`
`,n.jsx(e.p,{children:"Every component is built with accessibility in mind:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"WCAG 2.1 AA compliance"}),`
`,n.jsx(e.li,{children:"Keyboard navigation"}),`
`,n.jsx(e.li,{children:"Screen reader support"}),`
`,n.jsx(e.li,{children:"Proper ARIA attributes"}),`
`,n.jsx(e.li,{children:"Focus management"}),`
`]}),`
`,n.jsx(e.h3,{id:"2-government-context",children:"2. Government Context"}),`
`,n.jsx(e.p,{children:"Designed specifically for Indian government services:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Aadhaar integration patterns"}),`
`,n.jsx(e.li,{children:"PAN card validation"}),`
`,n.jsx(e.li,{children:"DigiLocker connectivity"}),`
`,n.jsx(e.li,{children:"Multi-language support"}),`
`,n.jsx(e.li,{children:"GIGW compliance"}),`
`]}),`
`,n.jsx(e.h3,{id:"3-developer-experience",children:"3. Developer Experience"}),`
`,n.jsx(e.p,{children:"Modern tooling and great DX:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"TypeScript support"}),`
`,n.jsx(e.li,{children:"Comprehensive documentation"}),`
`,n.jsx(e.li,{children:"Interactive examples"}),`
`,n.jsx(e.li,{children:"Code snippets"}),`
`,n.jsx(e.li,{children:"Auto-complete in IDEs"}),`
`]}),`
`,n.jsx(e.h3,{id:"4-performance",children:"4. Performance"}),`
`,n.jsx(e.p,{children:"Optimized for production:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tree-shakeable"}),`
`,n.jsx(e.li,{children:"Minimal bundle size"}),`
`,n.jsx(e.li,{children:"Lazy loading support"}),`
`,n.jsx(e.li,{children:"No runtime dependencies"}),`
`]}),`
`,n.jsx(e.h2,{id:"browser-support",children:"Browser Support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Chrome 90+"}),`
`,n.jsx(e.li,{children:"Firefox 88+"}),`
`,n.jsx(e.li,{children:"Safari 14+"}),`
`,n.jsx(e.li,{children:"Edge 90+"}),`
`,n.jsx(e.li,{children:"Mobile browsers (iOS Safari, Chrome Mobile)"}),`
`]}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/ux4g/react-core",rel:"nofollow",children:"GitHub Repository"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.npmjs.com/package/@ux4g/react-core",rel:"nofollow",children:"NPM Package"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/ux4g/tokens",rel:"nofollow",children:"Design Tokens"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/ux4g/react-core/blob/main/CONTRIBUTING.md",rel:"nofollow",children:"Contribution Guide"})}),`
`]}),`
`,n.jsx(e.h2,{id:"support",children:"Support"}),`
`,n.jsx(e.p,{children:"For questions, issues, or contributions:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"📧 Email: support@ux4g.gov.in"}),`
`,n.jsxs(e.li,{children:["🐛 Issues: ",n.jsx(e.a,{href:"https://github.com/ux4g/react-core/issues",rel:"nofollow",children:"GitHub Issues"})]}),`
`,n.jsxs(e.li,{children:["💬 Discussions: ",n.jsx(e.a,{href:"https://github.com/ux4g/react-core/discussions",rel:"nofollow",children:"GitHub Discussions"})]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Version:"})," 1.0.0",n.jsx(e.br,{}),`
`,n.jsx(e.strong,{children:"License:"})," MIT",n.jsx(e.br,{}),`
`,n.jsx(e.strong,{children:"Maintained by:"})," UX4G Team"]})]})}function m(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{m as default};
