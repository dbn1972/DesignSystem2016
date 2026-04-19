import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as T}from"./index-G8LIXM5I.js";import{c as b}from"./cn-BaF2GUMg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=T.forwardRef(({src:f,poster:y,title:s,autoPlay:h=!1,controls:x=!0,width:P,height:V,className:v,...w},S)=>o.jsxs("div",{className:b("ux4g-video-player",v),children:[s&&o.jsx("p",{className:"ux4g-video-player-title text-sm font-medium text-foreground mb-1",children:s}),o.jsx("video",{ref:S,src:f,poster:y,autoPlay:h,controls:x,width:P,height:V,"aria-label":s||"Video player",className:"ux4g-video-player-element w-full rounded-md",...w,children:"Your browser does not support the video element."})]}));a.displayName="VideoPlayer";a.__docgenInfo={description:"",methods:[],displayName:"VideoPlayer",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles (use sparingly, prefer className with tokens)"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks"},src:{required:!0,tsType:{name:"string"},description:"Video source URL"},poster:{required:!1,tsType:{name:"string"},description:"Poster image URL"},title:{required:!1,tsType:{name:"string"},description:"Accessible title for the video"},autoPlay:{required:!1,tsType:{name:"boolean"},description:"Whether to autoplay",defaultValue:{value:"false",computed:!1}},controls:{required:!1,tsType:{name:"boolean"},description:"Whether to show controls",defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Video width"},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Video height"}},composes:["Omit"]};const C={title:"Components/VideoPlayer",component:a,tags:["autodocs"]},e={args:{src:"https://example.com/video.mp4",title:"Sample Video"}},t={args:{src:"https://example.com/video.mp4",title:"Video with Poster",poster:"https://example.com/poster.jpg"}},r={args:{src:"https://example.com/video.mp4",title:"Auto-playing Video",autoPlay:!0}};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    src: 'https://example.com/video.mp4',
    title: 'Sample Video'
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var m,l,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: 'https://example.com/video.mp4',
    title: 'Video with Poster',
    poster: 'https://example.com/poster.jpg'
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: 'https://example.com/video.mp4',
    title: 'Auto-playing Video',
    autoPlay: true
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const W=["Default","WithPoster","AutoPlay"];export{r as AutoPlay,e as Default,t as WithPoster,W as __namedExportsOrder,C as default};
