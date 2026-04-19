import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as M}from"./index-G8LIXM5I.js";import{c as j}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const s=M.forwardRef(({latitude:f=0,longitude:x=0,onChange:q,zoom:b=10,height:h=300,label:o,className:y,...k},v)=>e.jsxs("div",{ref:v,className:j("ux4g-map-location-picker",y),...k,children:[o&&e.jsx("p",{className:"ux4g-map-location-picker-label text-sm font-medium text-foreground mb-2",children:o}),e.jsx("div",{className:"ux4g-map-location-picker-map flex flex-col items-center justify-center border rounded-md bg-muted",style:{height:h},role:"application","aria-label":o||"Map location picker",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:"📍 Map Placeholder"}),e.jsxs("p",{className:"ux4g-map-location-picker-coords text-xs font-mono text-foreground",children:["Lat: ",f.toFixed(4),", Lng: ",x.toFixed(4)]}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:["Zoom: ",b]})]})})]}));s.displayName="MapLocationPicker";s.__docgenInfo={description:"",methods:[],displayName:"MapLocationPicker",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},latitude:{required:!1,tsType:{name:"number"},description:"Latitude coordinate",defaultValue:{value:"0",computed:!1}},longitude:{required:!1,tsType:{name:"number"},description:"Longitude coordinate",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(coords: { latitude: number; longitude: number }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ latitude: number; longitude: number }",signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}}]}},name:"coords"}],return:{name:"void"}}},description:"Called when location changes"},zoom:{required:!1,tsType:{name:"number"},description:"Map zoom level",defaultValue:{value:"10",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Map container height",defaultValue:{value:"300",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text"}}};const w={title:"Components/MapLocationPicker",component:s,tags:["autodocs"]},t={args:{latitude:28.6139,longitude:77.209,label:"Select Location"}},a={args:{latitude:19.076,longitude:72.8777,label:"Mumbai Office",zoom:12}},r={args:{latitude:12.9716,longitude:77.5946,label:"Bengaluru",height:400}};var n,i,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    latitude: 28.6139,
    longitude: 77.209,
    label: 'Select Location'
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,d,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    latitude: 19.076,
    longitude: 72.8777,
    label: 'Mumbai Office',
    zoom: 12
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    latitude: 12.9716,
    longitude: 77.5946,
    label: 'Bengaluru',
    height: 400
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const P=["Default","Mumbai","CustomHeight"];export{r as CustomHeight,t as Default,a as Mumbai,P as __namedExportsOrder,w as default};
