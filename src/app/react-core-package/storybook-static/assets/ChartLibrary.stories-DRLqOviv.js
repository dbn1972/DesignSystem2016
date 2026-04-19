import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as E}from"./index-G8LIXM5I.js";import{c as M}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const P=["#3b82f6","#ef4444","#22c55e","#f59e0b","#8b5cf6","#ec4899"],h=E.forwardRef(({type:r="bar",data:t,title:d,height:y=300,colors:u=P,className:A,...$},_)=>{const C=Math.max(...t.map(e=>e.value),1),v=400,s=y-40,n=t.length>0?(v-40)/t.length:0,a=20,x=()=>t.map((e,i)=>{const l=e.value/C*(s-a*2),f=a+i*n+n*.1,b=s-a-l,B=n*.8;return o.jsx("rect",{x:f,y:b,width:B,height:l,fill:u[i%u.length],"aria-label":`${e.label}: ${e.value}`},e.label)}),k=()=>{const e=t.map((i,l)=>{const f=a+l*n+n/2,b=s-a-i.value/C*(s-a*2);return`${f},${b}`});return o.jsx("polyline",{points:e.join(" "),fill:"none",stroke:u[0],strokeWidth:2,"aria-label":"Line chart"})};return o.jsxs("div",{ref:_,className:M("ux4g-chart-library",A),...$,children:[d&&o.jsx("p",{className:"ux4g-chart-library-title text-sm font-medium text-foreground mb-2",children:d}),o.jsxs("svg",{width:"100%",height:y,viewBox:`0 0 ${v} ${s+a}`,role:"img","aria-label":d||"Chart",className:"ux4g-chart-library-svg",children:[(r==="bar"||r==="area")&&x(),(r==="line"||r==="area")&&k(),r==="pie"&&x()]})]})});h.displayName="ChartLibrary";h.__docgenInfo={description:"",methods:[],displayName:"ChartLibrary",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},type:{required:!1,tsType:{name:"union",raw:"'bar' | 'line' | 'pie' | 'area'",elements:[{name:"literal",value:"'bar'"},{name:"literal",value:"'line'"},{name:"literal",value:"'pie'"},{name:"literal",value:"'area'"}]},description:"Chart type",defaultValue:{value:"'bar'",computed:!1}},data:{required:!0,tsType:{name:"Array",elements:[{name:"ChartDataPoint"}],raw:"ChartDataPoint[]"},description:"Data points to render"},title:{required:!1,tsType:{name:"string"},description:"Chart title"},height:{required:!1,tsType:{name:"number"},description:"Chart height in pixels",defaultValue:{value:"300",computed:!1}},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Array of color strings for data points",defaultValue:{value:"['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6', '#ec4899']",computed:!1}}}};const H={title:"Components/ChartLibrary",component:h,tags:["autodocs"]},g=[{label:"Jan",value:30},{label:"Feb",value:50},{label:"Mar",value:20},{label:"Apr",value:45}],c={args:{type:"bar",data:g,title:"Monthly Revenue"}},m={args:{type:"line",data:g,title:"Trend Line"}},p={args:{type:"bar",data:g,title:"Custom Colors",colors:["#ff6384","#36a2eb","#ffce56","#4bc0c0"]}};var L,T,w;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: sampleData,
    title: 'Monthly Revenue'
  }
}`,...(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var S,D,j;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'line',
    data: sampleData,
    title: 'Trend Line'
  }
}`,...(j=(D=m.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var q,N,R;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: sampleData,
    title: 'Custom Colors',
    colors: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
  }
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const J=["BarChart","LineChart","CustomColors"];export{c as BarChart,p as CustomColors,m as LineChart,J as __namedExportsOrder,H as default};
