import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as R}from"./index-G8LIXM5I.js";import{c as C}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function y({value:e,defaultValue:t=0,max:S=5,allowHalf:pe=!1,readOnly:T=!1,disabled:x=!1,size:ge="md",onChange:w,onHover:r,icon:fe="★",showLabel:be=!1,labelFormatter:ve=V=>`${V} / ${S}`,className:he,...ye}){const[V,Se]=R.useState(t),[q,$]=R.useState(null),xe=e??V,we=e!==void 0,l=!T&&!x,Ve=s=>{l&&(we||Se(s),w==null||w(s))},Le=s=>{l&&($(s),r==null||r(s))},Re=()=>{l&&($(null),r==null||r(null))},L=q!==null?q:xe,Te=Array.from({length:S},(s,F)=>{const n=F+1,qe=n<=L,$e=pe&&n-.5===L;return a.jsx("button",{type:"button",className:C("ux4g-rating-star",qe&&"ux4g-rating-star-filled",$e&&"ux4g-rating-star-half",l&&"ux4g-rating-star-interactive"),onClick:()=>Ve(n),onMouseEnter:()=>Le(n),disabled:x,"aria-label":`Rate ${n} out of ${S}`,children:fe},F)});return a.jsxs("div",{className:C("ux4g-rating",`ux4g-rating-${ge}`,T&&"ux4g-rating-readonly",x&&"ux4g-rating-disabled",he),onMouseLeave:Re,role:"radiogroup","aria-label":"Rating",...ye,children:[a.jsx("div",{className:"ux4g-rating-stars",children:Te}),be&&a.jsx("div",{className:"ux4g-rating-label",children:ve(L)})]})}y.displayName="Rating";y.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},max:{required:!1,tsType:{name:"number"},description:`Maximum rating value
@default 5`,defaultValue:{value:"5",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:`Allow half stars
@default false`,defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:`Read-only mode
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Rating size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Change handler"},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | null) => void",signature:{arguments:[{type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Hover handler"},icon:{required:!1,tsType:{name:"string"},description:"Custom icon",defaultValue:{value:"'★'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Show label
@default false`,defaultValue:{value:"false",computed:!1}},labelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Custom label formatter",defaultValue:{value:"(val) => `${val} / ${max}`",computed:!1}},defaultValue:{defaultValue:{value:"0",computed:!1},required:!1}},composes:["Omit"]};const Ae={title:"Components/Rating",component:y,tags:["autodocs"]},o={args:{defaultValue:3}},u={args:{defaultValue:4,showLabel:!0}},i={args:{value:4.5,readOnly:!0,allowHalf:!0,showLabel:!0}},c={args:{value:3,disabled:!0}},d={args:{defaultValue:0,showLabel:!0,labelFormatter:e=>{const t=["Poor","Fair","Good","Very Good","Excellent"];return e>0?t[Math.ceil(e)-1]:"Not rated"}}},m={args:{defaultValue:4,showLabel:!0,labelFormatter:e=>`${e} out of 5 stars`}},p={args:{defaultValue:0,showLabel:!0,labelFormatter:e=>`Rate your DigiLocker experience: ${e}/5`}},g={args:{value:4,readOnly:!0,showLabel:!0,labelFormatter:e=>`Application process rated ${e}/5`}},f={args:{defaultValue:3,size:"sm"}},b={args:{defaultValue:4,size:"lg",showLabel:!0}},v={args:{defaultValue:7,max:10,showLabel:!0}},h={render:()=>{const[e,t]=R.useState(0);return a.jsxs("div",{children:[a.jsx(y,{value:e,onChange:t,showLabel:!0}),a.jsxs("p",{style:{marginTop:"1rem"},children:["Selected rating: ",e]})]})}};var z,N,j;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    defaultValue: 3
  }
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var A,E,M;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultValue: 4,
    showLabel: true
  }
}`,...(M=(E=u.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var k,D,O;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: 4.5,
    readOnly: true,
    allowHalf: true,
    showLabel: true
  }
}`,...(O=(D=i.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var I,P,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var G,B,W;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    showLabel: true,
    labelFormatter: val => {
      const labels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
      return val > 0 ? labels[Math.ceil(val) - 1] : 'Not rated';
    }
  }
}`,...(W=(B=d.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    defaultValue: 4,
    showLabel: true,
    labelFormatter: val => \`\${val} out of 5 stars\`
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    showLabel: true,
    labelFormatter: val => \`Rate your DigiLocker experience: \${val}/5\`
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,H,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    value: 4,
    readOnly: true,
    showLabel: true,
    labelFormatter: val => \`Application process rated \${val}/5\`
  }
}`,...(ee=(H=g.parameters)==null?void 0:H.docs)==null?void 0:ee.source}}};var ae,re,se;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    size: 'sm'
  }
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ne,le;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    defaultValue: 4,
    size: 'lg',
    showLabel: true
  }
}`,...(le=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var oe,ue,ie;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    defaultValue: 7,
    max: 10,
    showLabel: true
  }
}`,...(ie=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var ce,de,me;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [rating, setRating] = useState(0);
    return <div>
        <Rating value={rating} onChange={setRating} showLabel />
        <p style={{
        marginTop: '1rem'
      }}>Selected rating: {rating}</p>
      </div>;
  }
}`,...(me=(de=h.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const Ee=["Basic","WithLabel","ReadOnly","Disabled","ServiceRating","AadhaarCenterRating","DigiLockerExperience","ApplicationProcessRating","SmallSize","LargeSize","Max10","Interactive"];export{m as AadhaarCenterRating,g as ApplicationProcessRating,o as Basic,p as DigiLockerExperience,c as Disabled,h as Interactive,b as LargeSize,v as Max10,i as ReadOnly,d as ServiceRating,f as SmallSize,u as WithLabel,Ee as __namedExportsOrder,Ae as default};
