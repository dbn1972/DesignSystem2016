import{r as x,j as e,L as c}from"./index-BYMLq1ET.js";function p(){const[t,a]=x.useState(null);x.useEffect(()=>{customElements.get("ux4g-demo-button")},[]);const s=(d,o)=>{navigator.clipboard.writeText(d),a(o),setTimeout(()=>a(null),2e3)},l=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Government Service Form</title>
  
  <!-- UX4G Styles -->
  <link rel="stylesheet" href="https://cdn.ux4g.gov.in/styles/v1.0.0/ux4g.css">
  
  <!-- UX4G Web Components -->
  <script type="module" src="https://cdn.ux4g.gov.in/web-components/v1.0.0/ux4g-web-components.js"><\/script>
</head>
<body>
  <main style="max-width: 600px; margin: 2rem auto; padding: 0 1rem;">
    <h1>Passport Application</h1>
    
    <form id="passportForm">
      <ux4g-input
        label="Full Name"
        name="fullName"
        type="text"
        required
        placeholder="Enter your full name"
        hint="As per your Aadhaar card"
      ></ux4g-input>
      
      <ux4g-input
        label="Email Address"
        name="email"
        type="email"
        required
        placeholder="your.email@example.com"
      ></ux4g-input>
      
      <ux4g-select
        label="Select State"
        name="state"
        required
        options='[
          {"value":"DL","label":"Delhi"},
          {"value":"MH","label":"Maharashtra"},
          {"value":"KA","label":"Karnataka"}
        ]'
      ></ux4g-select>
      
      <fieldset style="border: none; padding: 0; margin: 1rem 0;">
        <legend style="font-weight: 600; margin-bottom: 0.5rem;">Gender</legend>
        <ux4g-radio
          name="gender"
          value="male"
          label="Male"
        ></ux4g-radio>
        <ux4g-radio
          name="gender"
          value="female"
          label="Female"
        ></ux4g-radio>
        <ux4g-radio
          name="gender"
          value="other"
          label="Other"
        ></ux4g-radio>
      </fieldset>
      
      <ux4g-checkbox
        label="I agree to the terms and conditions"
        name="terms"
        required
      ></ux4g-checkbox>
      
      <ux4g-alert variant="info" title="Important">
        Please ensure all information is accurate.
      </ux4g-alert>
      
      <ux4g-button
        variant="primary"
        size="lg"
        type="submit"
        full-width
      >
        Submit Application
      </ux4g-button>
    </form>
  </main>
  
  <script>
    document.getElementById('passportForm').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted!');
    });
  <\/script>
</body>
</html>`,r=`import '@ux4g/web-components';
import '@ux4g/styles';

function PassportForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ux4g-input
        label="Full Name"
        name="fullName"
        required
        placeholder="Enter your full name"
      />
      
      <ux4g-select
        label="Select State"
        name="state"
        required
        options={JSON.stringify([
          { value: 'DL', label: 'Delhi' },
          { value: 'MH', label: 'Maharashtra' },
        ])}
      />
      
      <ux4g-checkbox
        label="I agree to the terms"
        name="terms"
        required
      />
      
      <ux4g-button variant="primary" type="submit" full-width>
        Submit Application
      </ux4g-button>
    </form>
  );
}`,n=`// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import '@ux4g/web-components';
import '@ux4g/styles';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // ...
})
export class AppModule { }

// app.component.html
<form (submit)="handleSubmit($event)">
  <ux4g-input
    label="Full Name"
    name="fullName"
    required
  ></ux4g-input>
  
  <ux4g-select
    label="Select State"
    name="state"
    required
    [attr.options]="stateOptions"
  ></ux4g-select>
  
  <ux4g-button variant="primary" type="submit">
    Submit Application
  </ux4g-button>
</form>`,i=`<template>
  <form @submit.prevent="handleSubmit">
    <ux4g-input
      label="Full Name"
      name="fullName"
      required
    />
    
    <ux4g-select
      label="Select State"
      name="state"
      required
      :options="stateOptions"
    />
    
    <ux4g-button variant="primary" type="submit">
      Submit Application
    </ux4g-button>
  </form>
</template>

<script>
import '@ux4g/web-components';
import '@ux4g/styles';

export default {
  data() {
    return {
      stateOptions: JSON.stringify([
        { value: 'DL', label: 'Delhi' }
      ])
    };
  }
};
<\/script>`;return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx("div",{className:"bg-white border-b border-gray-200",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[e.jsx(c,{to:"/components",className:"text-blue-600 hover:text-blue-800 mb-4 inline-block",children:"← Back to Components"}),e.jsx("h1",{className:"text-4xl font-bold text-gray-900",children:"Web Components Package"}),e.jsx("p",{className:"mt-2 text-xl text-gray-600",children:"Framework-agnostic components that work with any JavaScript framework or plain HTML"})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"📦 @ux4g/web-components"}),e.jsxs("p",{className:"text-lg text-gray-700 mb-6",children:["The ",e.jsx("code",{className:"px-2 py-1 bg-gray-100 rounded",children:"@ux4g/web-components"})," package provides production-ready, standards-based Web Components that work universally across all modern frameworks and vanilla HTML/JavaScript applications."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("div",{className:"text-3xl mb-2",children:"🌐"}),e.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"Universal"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Works with React, Angular, Vue, Svelte, or vanilla HTML"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[e.jsx("div",{className:"text-3xl mb-2",children:"♿"}),e.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"Accessible"}),e.jsx("p",{className:"text-sm text-gray-600",children:"WCAG 2.1 Level AA compliant out of the box"})]}),e.jsxs("div",{className:"p-4 bg-orange-50 rounded-lg",children:[e.jsx("div",{className:"text-3xl mb-2",children:"🎨"}),e.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"Branded"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Indian tricolor theme and government standards"})]})]}),e.jsx("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-4",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("svg",{className:"h-5 w-5 text-yellow-400",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),e.jsx("div",{className:"ml-3",children:e.jsxs("p",{className:"text-sm text-yellow-700",children:[e.jsx("strong",{children:"Status:"})," Production-ready with 69 components (95% complete). Final 4 components coming soon!"]})})]})})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"📥 Installation"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"NPM"}),e.jsxs("div",{className:"relative",children:[e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:e.jsx("code",{children:"npm install @ux4g/web-components @ux4g/styles"})}),e.jsx("button",{onClick:()=>s("npm install @ux4g/web-components @ux4g/styles","npm"),className:"absolute top-2 right-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded",children:t==="npm"?"✓ Copied":"Copy"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"CDN (Vanilla HTML)"}),e.jsx("div",{className:"relative",children:e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:e.jsx("code",{children:`<!-- UX4G Styles -->
<link rel="stylesheet" href="https://cdn.ux4g.gov.in/styles/v1.0.0/ux4g.css">

<!-- UX4G Web Components -->
<script type="module" src="https://cdn.ux4g.gov.in/web-components/v1.0.0/ux4g-web-components.js"><\/script>`})})})]})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"🎨 Available Components (46/73)"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Component"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Description"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"})]})}),e.jsxs("tbody",{className:"bg-white divide-y divide-gray-200",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-button>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Primary interactive element for user actions"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800",children:"✅ Stable"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-input>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Text input field for form data entry"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800",children:"✅ Stable"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-checkbox>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Checkbox for boolean selections"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800",children:"✅ Stable"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-radio>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Radio button for single selection from group"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800",children:"✅ Stable"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-select>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Dropdown selection component"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800",children:"✅ Stable"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-switch>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Toggle switch for on/off states"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-textarea>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Multi-line text input field"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-alert>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Alert notifications and messages"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800",children:"✅ Stable"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-badge>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Status badges and labels"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-progress>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Progress bar for showing completion"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-spinner>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Loading spinner indicator"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-card>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Container for content with header/footer"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-tooltip>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Contextual help tooltips"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-avatar>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"User avatar with initials fallback"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-tabs>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Tabbed navigation interface"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-accordion>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Collapsible content sections"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-toast>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Toast notifications with auto-dismiss"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-modal>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Modal dialog overlay"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-drawer>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Slide-out drawer panel"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-pagination>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Page navigation for data lists"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-breadcrumb>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Navigation breadcrumb trail"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-tag>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Dismissible tags and chips"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-dropdown>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Dropdown menu with items"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-timeline>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Timeline with events and dates"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-skeleton>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Loading skeleton placeholder"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900",children:"<ux4g-divider>"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Content divider/separator"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800",children:"🔄 Beta"})})]})]})]})}),e.jsx("div",{className:"mt-4 p-4 bg-blue-50 rounded-lg",children:e.jsxs("p",{className:"text-sm text-blue-800",children:[e.jsx("strong",{children:"Coming Soon:"})," 57 additional components including Dialog, Drawer, Toast, Modal, Table, and many more advanced components!"]})})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"🚀 Framework Examples"}),e.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[e.jsxs("div",{className:"bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4",children:[e.jsx("h3",{className:"text-xl font-bold text-white",children:"Vanilla HTML"}),e.jsx("p",{className:"text-orange-100 text-sm",children:"Pure HTML/CSS/JavaScript - No framework required"})]}),e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"relative",children:[e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm max-h-96 overflow-y-auto",children:e.jsx("code",{children:l})}),e.jsx("button",{onClick:()=>s(l,"html"),className:"absolute top-2 right-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded",children:t==="html"?"✓ Copied":"Copy"})]})})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4",children:[e.jsx("h3",{className:"text-xl font-bold text-white",children:"React"}),e.jsx("p",{className:"text-blue-100 text-sm",children:"Works seamlessly with React 16.8+"})]}),e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"relative",children:[e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:e.jsx("code",{children:r})}),e.jsx("button",{onClick:()=>s(r,"react"),className:"absolute top-2 right-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded",children:t==="react"?"✓ Copied":"Copy"})]})})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[e.jsxs("div",{className:"bg-gradient-to-r from-red-500 to-red-600 px-6 py-4",children:[e.jsx("h3",{className:"text-xl font-bold text-white",children:"Angular"}),e.jsx("p",{className:"text-red-100 text-sm",children:"Compatible with Angular 12+"})]}),e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"relative",children:[e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:e.jsx("code",{children:n})}),e.jsx("button",{onClick:()=>s(n,"angular"),className:"absolute top-2 right-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded",children:t==="angular"?"✓ Copied":"Copy"})]})})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[e.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-green-600 px-6 py-4",children:[e.jsx("h3",{className:"text-xl font-bold text-white",children:"Vue"}),e.jsx("p",{className:"text-green-100 text-sm",children:"Works with Vue 3"})]}),e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"relative",children:[e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:e.jsx("code",{children:i})}),e.jsx("button",{onClick:()=>s(i,"vue"),className:"absolute top-2 right-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded",children:t==="vue"?"✓ Copied":"Copy"})]})})]})]}),e.jsxs("div",{className:"mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"✨ Key Features"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-2xl",children:"🌐"})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Framework Agnostic"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Use the same components across React, Angular, Vue, Svelte, or vanilla HTML"})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white text-2xl",children:"♿"})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Accessibility First"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"WCAG 2.1 Level AA compliant with full keyboard navigation and screen reader support"})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white text-2xl",children:"📦"})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Zero Dependencies"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Built on native Web Components APIs with no external dependencies"})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white text-2xl",children:"🎨"})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Government Branded"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Indian tricolor theme and compliance with government design standards"})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white text-2xl",children:"📝"})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Form Integration"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Native form participation with FormData API support"})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white text-2xl",children:"⚡"})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"CDN Ready"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Drop-in via CDN for quick prototyping or legacy applications"})]})]})]})]}),e.jsxs("div",{className:"mt-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🚀 Next Steps"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"h-6 w-6 mr-3 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsx("span",{children:"Complete remaining 68 components (Radio, Textarea, Dialog, Tabs, etc.)"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"h-6 w-6 mr-3 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsx("span",{children:"Build and publish to npm registry"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"h-6 w-6 mr-3 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsx("span",{children:"Deploy to CDN (cdn.ux4g.gov.in)"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"h-6 w-6 mr-3 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsx("span",{children:"Create interactive Storybook documentation"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"h-6 w-6 mr-3 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e.jsx("span",{children:"Add automated accessibility testing suite"})]})]})]})]})]})}export{p as default};
