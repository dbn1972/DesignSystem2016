import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as ur}from"./index-G8LIXM5I.js";import{c as pr}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function mr(v){return v==="danger"?"destructive":v}const r=ur.forwardRef(({children:v,className:Xe,variant:Ye="primary",size:Ze="md",disabled:er=!1,loading:t=!1,loadingText:B="Loading...",fullWidth:rr=!1,iconBefore:S,iconAfter:w,type:tr="button",as:x,"aria-label":ar,...sr},nr)=>{const T=er||t,ir=mr(Ye),or=pr("ux4g-button",`ux4g-button-${ir}`,`ux4g-button-${Ze}`,rr&&"ux4g-w-full",t&&"ux4g-button-loading",Xe),lr=e.jsxs(e.Fragment,{children:[t&&e.jsx("span",{className:"ux4g-spinner ux4g-spinner-sm ux4g-mr-2","aria-hidden":"true"}),!t&&S&&e.jsx("span",{className:"ux4g-button-icon-before ux4g-mr-2","aria-hidden":"true",children:S}),e.jsx("span",{className:"ux4g-button-text",children:t?B:v}),!t&&w&&e.jsx("span",{className:"ux4g-button-icon-after ux4g-ml-2","aria-hidden":"true",children:w})]}),dr=x||"button",cr=!x||x==="button";return e.jsx(dr,{ref:nr,...cr?{type:tr,disabled:T}:{},className:or,"aria-disabled":T,"aria-busy":t||void 0,"aria-label":t?B:ar,...sr,children:lr})});r.displayName="Button";r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the component is disabled
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by reference"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by reference"},loading:{required:!1,tsType:{name:"boolean"},description:`Loading state indicator
@default false`,defaultValue:{value:"false",computed:!1}},loadingText:{required:!1,tsType:{name:"string"},description:"Accessible label for loading state",defaultValue:{value:"'Loading...'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'tertiary'
| 'destructive'
| 'ghost'
| 'success'
| 'danger'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"}]},description:"Button visual variant.\nCanonical names: primary, secondary, tertiary, destructive, ghost, success.\n`danger` is accepted as a legacy alias for `destructive`.\n@default 'primary'",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Button size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Render as full width button
@default false`,defaultValue:{value:"false",computed:!1}},iconBefore:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display before text"},iconAfter:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display after text"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"Button type attribute (ignored when `as` renders a non-button element)\n@default 'button'",defaultValue:{value:"'button'",computed:!1}},as:{required:!1,tsType:{name:"ElementType"},description:"Polymorphic element type.\nPass `\"a\"` to render as a link, or a React Router `Link` component.\n@default 'button'"},href:{required:!1,tsType:{name:"string"},description:'Link href — used when as="a"'},target:{required:!1,tsType:{name:"string"},description:'Link target — used when as="a"'},rel:{required:!1,tsType:{name:"string"},description:'Link rel — used when as="a"'}},composes:["Omit"]};const vr={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost"],description:"Visual style variant",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg"],description:"Button size",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disables the button",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Shows loading state",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Button spans full width of container",table:{defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Click event handler"}},parameters:{docs:{description:{component:`The Button component is the primary interactive element for user actions.
It comes with multiple variants, sizes, and states to suit different use cases.

## When to use
- Triggering form submission
- Opening modals or dialogs
- Confirming or canceling actions
- Primary calls-to-action

## When NOT to use
- For navigation between pages - use Link instead
- For toggling states - use Switch or Checkbox
- For selecting from options - use Radio or Select`}}}},a={args:{variant:"primary",children:"Primary Button"}},s={args:{variant:"secondary",children:"Secondary Button"}},n={args:{variant:"outline",children:"Outline Button"}},i={args:{variant:"ghost",children:"Ghost Button"}},o={args:{size:"sm",children:"Small Button"}},l={args:{size:"md",children:"Medium Button"}},d={args:{size:"lg",children:"Large Button"}},c={args:{disabled:!0,children:"Disabled Button"}},u={args:{loading:!0,loadingText:"Processing...",children:"Submit Application"}},p={args:{fullWidth:!0,children:"Full Width Button"}},m={args:{iconBefore:"✓",children:"Save Changes"}},f={args:{iconAfter:"→",children:"Continue"}},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[e.jsx(r,{variant:"outline",children:"Cancel"}),e.jsx(r,{variant:"primary",type:"submit",children:"Submit Application"})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[e.jsx(r,{variant:"primary",fullWidth:!0,children:"✓ Aadhaar Verified"}),e.jsx(r,{variant:"primary",loading:!0,loadingText:"Verifying PAN...",fullWidth:!0,children:"Verify PAN Card"}),e.jsx(r,{variant:"outline",disabled:!0,fullWidth:!0,children:"Upload Documents (2/5 required)"}),e.jsx(r,{variant:"secondary",fullWidth:!0,children:"Save as Draft"})]})};var W,A,j,V,q;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(j=(A=a.parameters)==null?void 0:A.docs)==null?void 0:j.source},description:{story:`The primary button should be used for the main action on a page or form.
Only use one primary button per section.`,...(q=(V=a.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};var z,C,L,N,P;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(L=(C=s.parameters)==null?void 0:C.docs)==null?void 0:L.source},description:{story:"Secondary buttons are for less prominent actions that support the primary action.",...(P=(N=s.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var k,I,D,R,O;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...(D=(I=n.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"Outline buttons are for tertiary actions or when multiple buttons are placed together.",...(O=(R=n.parameters)==null?void 0:R.docs)==null?void 0:O.description}}};var F,G,E,M,_;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...(E=(G=i.parameters)==null?void 0:G.docs)==null?void 0:E.source},description:{story:"Ghost buttons are the least prominent and used for subtle actions.",...(_=(M=i.parameters)==null?void 0:M.docs)==null?void 0:_.description}}};var U,$,H,J,K;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}`,...(H=($=o.parameters)==null?void 0:$.docs)==null?void 0:H.source},description:{story:"Small buttons are used when space is limited or for less important actions.",...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y,Z,ee;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Medium Button'
  }
}`,...(Y=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Medium is the default size, suitable for most use cases.",...(ee=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var re,te,ae,se,ne;d.parameters={...d.parameters,docs:{...(re=d.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}`,...(ae=(te=d.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:"Large buttons are used for primary actions on landing pages or empty states.",...(ne=(se=d.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};var ie,oe,le,de,ce;c.parameters={...c.parameters,docs:{...(ie=c.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(le=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:le.source},description:{story:"Disabled buttons prevent user interaction and indicate an action is unavailable.",...(ce=(de=c.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};var ue,pe,me,fe,ge;u.parameters={...u.parameters,docs:{...(ue=u.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    loading: true,
    loadingText: 'Processing...',
    children: 'Submit Application'
  }
}`,...(me=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:"Loading state shows async operations in progress. The button is disabled during loading.",...(ge=(fe=u.parameters)==null?void 0:fe.docs)==null?void 0:ge.description}}};var ye,he,be,ve,xe;p.parameters={...p.parameters,docs:{...(ye=p.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...(be=(he=p.parameters)==null?void 0:he.docs)==null?void 0:be.source},description:{story:`Full width buttons span the entire width of their container.
Useful in mobile layouts or narrow containers.`,...(xe=(ve=p.parameters)==null?void 0:ve.docs)==null?void 0:xe.description}}};var Be,Se,we,Te,We;m.parameters={...m.parameters,docs:{...(Be=m.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    iconBefore: '✓',
    children: 'Save Changes'
  }
}`,...(we=(Se=m.parameters)==null?void 0:Se.docs)==null?void 0:we.source},description:{story:"Buttons with icons before the text help clarify the action.",...(We=(Te=m.parameters)==null?void 0:Te.docs)==null?void 0:We.description}}};var Ae,je,Ve,qe,ze;f.parameters={...f.parameters,docs:{...(Ae=f.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    iconAfter: '→',
    children: 'Continue'
  }
}`,...(Ve=(je=f.parameters)==null?void 0:je.docs)==null?void 0:Ve.source},description:{story:"Buttons with icons after the text can indicate direction or state.",...(ze=(qe=f.parameters)==null?void 0:qe.docs)==null?void 0:ze.description}}};var Ce,Le,Ne,Pe,ke;g.parameters={...g.parameters,docs:{...(Ce=g.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
}`,...(Ne=(Le=g.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source},description:{story:"Example of all button variants displayed together for comparison.",...(ke=(Pe=g.parameters)==null?void 0:Pe.docs)==null?void 0:ke.description}}};var Ie,De,Re,Oe,Fe;y.parameters={...y.parameters,docs:{...(Ie=y.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(Re=(De=y.parameters)==null?void 0:De.docs)==null?void 0:Re.source},description:{story:"Example of all button sizes displayed together for comparison.",...(Fe=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:Fe.description}}};var Ge,Ee,Me,_e,Ue;h.parameters={...h.parameters,docs:{...(Ge=h.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end'
  }}>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary" type="submit">
        Submit Application
      </Button>
    </div>
}`,...(Me=(Ee=h.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source},description:{story:"Example usage in a form context with submit and cancel buttons.",...(Ue=(_e=h.parameters)==null?void 0:_e.docs)==null?void 0:Ue.description}}};var $e,He,Je,Ke,Qe;b.parameters={...b.parameters,docs:{...($e=b.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px'
  }}>
      <Button variant="primary" fullWidth>
        ✓ Aadhaar Verified
      </Button>
      <Button variant="primary" loading loadingText="Verifying PAN..." fullWidth>
        Verify PAN Card
      </Button>
      <Button variant="outline" disabled fullWidth>
        Upload Documents (2/5 required)
      </Button>
      <Button variant="secondary" fullWidth>
        Save as Draft
      </Button>
    </div>
}`,...(Je=(He=b.parameters)==null?void 0:He.docs)==null?void 0:Je.source},description:{story:"Example of button group with different states for government application workflow.",...(Qe=(Ke=b.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.description}}};const xr=["Primary","Secondary","Outline","Ghost","Small","Medium","Large","Disabled","Loading","FullWidth","WithIconBefore","WithIconAfter","AllVariants","AllSizes","FormActions","GovernmentWorkflow"];export{y as AllSizes,g as AllVariants,c as Disabled,h as FormActions,p as FullWidth,i as Ghost,b as GovernmentWorkflow,d as Large,u as Loading,l as Medium,n as Outline,a as Primary,s as Secondary,o as Small,f as WithIconAfter,m as WithIconBefore,xr as __namedExportsOrder,vr as default};
