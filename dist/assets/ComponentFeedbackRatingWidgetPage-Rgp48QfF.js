import{e as y,r as c,j as e}from"./index-BYMLq1ET.js";import{C as w}from"./ComponentDocumentation-CxrYZXwp.js";import{S as R}from"./star-C544nZpH.js";import{M as j}from"./meh-CwjxwvrB.js";import{T as S}from"./thumbs-up-BhMZRvdd.js";import{T as C}from"./thumbs-down-YGZ9epX0.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],h=y("frown",N);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],v=y("smile",A),o=({type:n,maxRating:l=5,value:s,onChange:a,size:t="md",showLabels:b=!1,...m})=>{const p=()=>e.jsx("div",{className:"flex gap-2",role:"group","aria-label":"Star rating",children:Array.from({length:l},(i,r)=>r+1).map(i=>e.jsx("button",{type:"button",onClick:()=>a==null?void 0:a(i),className:`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] min-w-[44px] min-h-[44px] flex items-center justify-center ${t==="sm"?"w-8 h-8":t==="lg"?"w-12 h-12":"w-10 h-10"}`,"aria-label":`Rate ${i} out of ${l} stars`,"aria-pressed":s===i,children:e.jsx(R,{size:t==="sm"?20:t==="lg"?32:24,className:`${s&&i<=s?"fill-[#FFB800] stroke-[#FFB800]":"fill-none stroke-[#666666]"} transition-all`})},i))}),u=()=>{const i=[{icon:h,label:"Very Dissatisfied",color:"#dc2626"},{icon:h,label:"Dissatisfied",color:"#f97316"},{icon:j,label:"Neutral",color:"#eab308"},{icon:v,label:"Satisfied",color:"#84cc16"},{icon:v,label:"Very Satisfied",color:"#22c55e"}];return e.jsx("div",{className:"flex gap-2",role:"group","aria-label":"Emoji rating",children:i.slice(0,l).map((r,x)=>{const d=x+1,k=r.icon;return e.jsx("button",{type:"button",onClick:()=>a==null?void 0:a(d),className:`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center ${t==="sm"?"w-10 h-10":t==="lg"?"w-16 h-16":"w-12 h-12"} ${s===d?"bg-[#f5f5f5]":"hover:bg-[#f5f5f5]"}`,"aria-label":r.label,"aria-pressed":s===d,children:e.jsx(k,{size:t==="sm"?24:t==="lg"?40:32,className:"transition-all",style:{color:s===d?r.color:"#666666"}})},d)})})},f=()=>e.jsx("div",{className:"flex gap-1",role:"group","aria-label":"Numeric rating",children:Array.from({length:l},(i,r)=>r+1).map(i=>e.jsx("button",{type:"button",onClick:()=>a==null?void 0:a(i),className:`font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] rounded border min-w-[44px] min-h-[44px] flex items-center justify-center ${t==="sm"?"w-8 h-8 text-sm":t==="lg"?"w-12 h-12 text-lg":"w-10 h-10 text-base"} ${s===i?"bg-[#005196] text-white border-[#005196]":"bg-white text-[#333333] border-[#cccccc] hover:border-[#005196]"}`,"aria-label":`Rate ${i} out of ${l}`,"aria-pressed":s===i,children:i},i))}),g=()=>e.jsxs("div",{className:"flex gap-4",role:"group","aria-label":"Thumbs rating",children:[e.jsx("button",{type:"button",onClick:()=>a==null?void 0:a(1),className:`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center ${t==="sm"?"w-12 h-12":t==="lg"?"w-20 h-20":"w-16 h-16"} ${s===1?"bg-[#22c55e]":"bg-[#f5f5f5] hover:bg-[#e5e5e5]"}`,"aria-label":"Thumbs up","aria-pressed":s===1,children:e.jsx(S,{size:t==="sm"?24:t==="lg"?40:32,className:s===1?"stroke-white":"stroke-[#666666]"})}),e.jsx("button",{type:"button",onClick:()=>a==null?void 0:a(-1),className:`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center ${t==="sm"?"w-12 h-12":t==="lg"?"w-20 h-20":"w-16 h-16"} ${s===-1?"bg-[#dc2626]":"bg-[#f5f5f5] hover:bg-[#e5e5e5]"}`,"aria-label":"Thumbs down","aria-pressed":s===-1,children:e.jsx(C,{size:t==="sm"?24:t==="lg"?40:32,className:s===-1?"stroke-white":"stroke-[#666666]"})})]});return e.jsxs("div",{className:"flex flex-col gap-2",children:[n==="stars"&&p(),n==="emoji"&&u(),n==="numeric"&&f(),n==="thumbs"&&g(),b&&n!=="thumbs"&&e.jsxs("div",{className:"flex justify-between text-sm text-[#666666]",children:[e.jsx("span",{children:"Low"}),e.jsx("span",{children:"High"})]})]})};function H(){const[n,l]=c.useState(0),[s,a]=c.useState(0),[t,b]=c.useState(0),[m,p]=c.useState(0),[u,f]=c.useState(0),[g,i]=c.useState("");return e.jsx(w,{name:"Feedback Rating Widget",description:"Collects user feedback and service quality measurements across government services. Supports multiple rating types (stars, emoji, numeric, thumbs) with optional comment fields for detailed feedback collection.",category:"Government Services",maturity:"stable",tier:"core",since:"v2.0.0",updated:"v2.3.0",props:[{name:"type",type:"'stars' | 'emoji' | 'numeric' | 'thumbs'",default:"'stars'",required:!1,description:"Type of rating widget. Stars (1-5 star rating), emoji (emotional response), numeric (number scale), thumbs (simple up/down)."},{name:"maxRating",type:"number",default:"5",required:!1,description:"Maximum rating value. Common values: 5 for stars/emoji, 10 for numeric scales, 2 for thumbs."},{name:"value",type:"number",required:!1,description:"Current rating value. For thumbs: 1 (up), -1 (down), 0 (none)."},{name:"onChange",type:"(value: number) => void",required:!0,description:"Callback when rating changes. Receives the new rating value."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Size of rating controls. Affects touch target and visual size."},{name:"showLabels",type:"boolean",default:"false",required:!1,description:"Whether to show low/high labels below the rating controls."},{name:"required",type:"boolean",default:"false",required:!1,description:"Whether rating is required before form submission."},{name:"feedbackText",type:"string",required:!1,description:"Optional text input value for additional feedback comments."},{name:"onSubmit",type:"(rating: number, feedback?: string) => void",required:!1,description:"Callback when feedback is submitted. Receives rating and optional text feedback."},{name:"thankYouMessage",type:"string",default:"'Thank you for your feedback!'",required:!1,description:"Message displayed after successful submission."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the rating widget is disabled."},{name:"label",type:"string",required:!1,description:"Accessible label for the rating group."}],examples:[{title:"Star Rating",description:"Classic 5-star rating system for general satisfaction measurement.",code:`import { FeedbackRatingWidget } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [rating, setRating] = useState(0);

  return (
    <FeedbackRatingWidget
      type="stars"
      maxRating={5}
      value={rating}
      onChange={setRating}
      showLabels
      label="How satisfied are you with this service?"
    />
  );
}`,preview:e.jsxs("div",{className:"space-y-3",children:[e.jsx("label",{className:"block text-sm font-medium text-[#333333]",children:"How satisfied are you with this service?"}),e.jsx(o,{type:"stars",maxRating:5,value:n,onChange:l,showLabels:!0}),n>0&&e.jsxs("p",{className:"text-sm text-[#666666]",children:["You rated: ",n," out of 5 stars"]})]})},{title:"Emoji Rating",description:"Emotional response scale using emojis for intuitive feedback collection.",code:`import { FeedbackRatingWidget } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [rating, setRating] = useState(0);

  return (
    <FeedbackRatingWidget
      type="emoji"
      maxRating={5}
      value={rating}
      onChange={setRating}
      label="How was your experience?"
    />
  );
}`,preview:e.jsxs("div",{className:"space-y-3",children:[e.jsx("label",{className:"block text-sm font-medium text-[#333333]",children:"How was your experience?"}),e.jsx(o,{type:"emoji",maxRating:5,value:s,onChange:a})]})},{title:"Numeric Scale (1-10)",description:"Number-based rating scale for precise measurement (Net Promoter Score style).",code:`import { FeedbackRatingWidget } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [rating, setRating] = useState(0);

  return (
    <FeedbackRatingWidget
      type="numeric"
      maxRating={10}
      value={rating}
      onChange={setRating}
      showLabels
      label="How likely are you to recommend this service?"
    />
  );
}`,preview:e.jsxs("div",{className:"space-y-3",children:[e.jsx("label",{className:"block text-sm font-medium text-[#333333]",children:"How likely are you to recommend this service?"}),e.jsx(o,{type:"numeric",maxRating:10,value:t,onChange:b,showLabels:!0})]})},{title:"Thumbs Up/Down",description:"Simple binary feedback for quick yes/no satisfaction measurement.",code:`import { FeedbackRatingWidget } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [rating, setRating] = useState(0);

  return (
    <FeedbackRatingWidget
      type="thumbs"
      value={rating}
      onChange={setRating}
      label="Was this helpful?"
    />
  );
}`,preview:e.jsxs("div",{className:"space-y-3",children:[e.jsx("label",{className:"block text-sm font-medium text-[#333333]",children:"Was this helpful?"}),e.jsx(o,{type:"thumbs",value:m,onChange:p}),m!==0&&e.jsx("p",{className:"text-sm text-[#666666]",children:m===1?"Thank you for the positive feedback!":"Thank you for your feedback. We will work to improve."})]})},{title:"With Comments",description:"Rating widget combined with text feedback for detailed responses.",code:`import { FeedbackRatingWidget } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    console.log('Rating:', rating, 'Feedback:', feedback);
    // Submit to backend
  };

  return (
    <div className="space-y-4">
      <FeedbackRatingWidget
        type="stars"
        maxRating={5}
        value={rating}
        onChange={setRating}
        label="Rate your experience"
      />

      <div>
        <label htmlFor="feedback" className="block text-sm font-medium mb-2">
          Additional Comments (Optional)
        </label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded p-2"
          placeholder="Tell us more about your experience..."
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={rating === 0}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        Submit Feedback
      </button>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-[#333333] mb-2",children:"Rate your experience"}),e.jsx(o,{type:"stars",maxRating:5,value:u,onChange:f})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"feedback-example",className:"block text-sm font-medium text-[#333333] mb-2",children:"Additional Comments (Optional)"}),e.jsx("textarea",{id:"feedback-example",value:g,onChange:r=>i(r.target.value),rows:4,className:"w-full border border-[#cccccc] rounded p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196]",placeholder:"Tell us more about your experience..."})]}),e.jsx("button",{onClick:()=>{alert(`Rating: ${u}, Comment: ${g}`)},disabled:u===0,className:"px-4 py-2 bg-[#005196] text-white rounded min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#004178] transition-all",children:"Submit Feedback"})]})},{title:"Multi-question Survey",description:"Multiple rating widgets for comprehensive service evaluation.",code:`import { FeedbackRatingWidget } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [ratings, setRatings] = useState({
    speed: 0,
    quality: 0,
    staff: 0
  });

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Service Speed
        </label>
        <FeedbackRatingWidget
          type="stars"
          maxRating={5}
          value={ratings.speed}
          onChange={(val) => setRatings({...ratings, speed: val})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Service Quality
        </label>
        <FeedbackRatingWidget
          type="stars"
          maxRating={5}
          value={ratings.quality}
          onChange={(val) => setRatings({...ratings, quality: val})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Staff Helpfulness
        </label>
        <FeedbackRatingWidget
          type="stars"
          maxRating={5}
          value={ratings.staff}
          onChange={(val) => setRatings({...ratings, staff: val})}
        />
      </div>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-[#333333] mb-2",children:"Service Speed"}),e.jsx(o,{type:"stars",maxRating:5,value:0,onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-[#333333] mb-2",children:"Service Quality"}),e.jsx(o,{type:"stars",maxRating:5,value:0,onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-[#333333] mb-2",children:"Staff Helpfulness"}),e.jsx(o,{type:"stars",maxRating:5,value:0,onChange:()=>{}})]})]})}],reactCode:{component:`import React, { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { Star, ThumbsUp, ThumbsDown, Smile, Meh, Frown } from 'lucide-react';
import { FeedbackRatingWidgetProps } from './FeedbackRatingWidget.types';

export const FeedbackRatingWidget = forwardRef<HTMLDivElement, FeedbackRatingWidgetProps>(
  (
    {
      type = 'stars',
      maxRating = 5,
      value,
      onChange,
      size = 'md',
      showLabels = false,
      required = false,
      disabled = false,
      label,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const [hoveredRating, setHoveredRating] = useState<number | null>(null);

    const handleRatingClick = (rating: number) => {
      if (!disabled && onChange) {
        onChange(rating);
      }
    };

    const renderStars = () => {
      return (
        <div className="flex gap-2" role="group" aria-label={ariaLabel || label}>
          {Array.from({ length: maxRating }, (_, i) => i + 1).map((rating) => (
            <button
              key={rating}
              type="button"
              onClick={() => handleRatingClick(rating)}
              onMouseEnter={() => setHoveredRating(rating)}
              onMouseLeave={() => setHoveredRating(null)}
              disabled={disabled}
              className={cn(
                'transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                'focus-visible:ring-[#005196] min-w-[44px] min-h-[44px] flex items-center justify-center',
                'disabled:cursor-not-allowed disabled:opacity-50',
                size === 'sm' && 'w-8 h-8',
                size === 'md' && 'w-10 h-10',
                size === 'lg' && 'w-12 h-12'
              )}
              aria-label={\`Rate \${rating} out of \${maxRating} stars\`}
              aria-pressed={value === rating}
            >
              <Star
                size={size === 'sm' ? 20 : size === 'lg' ? 32 : 24}
                className={cn(
                  'transition-all',
                  (hoveredRating !== null ? rating <= hoveredRating : value && rating <= value)
                    ? 'fill-[#FFB800] stroke-[#FFB800]'
                    : 'fill-none stroke-[#666666]'
                )}
              />
            </button>
          ))}
        </div>
      );
    };

    const renderEmojis = () => {
      const emojis = [
        { icon: Frown, label: 'Very Dissatisfied', color: '#dc2626' },
        { icon: Frown, label: 'Dissatisfied', color: '#f97316' },
        { icon: Meh, label: 'Neutral', color: '#eab308' },
        { icon: Smile, label: 'Satisfied', color: '#84cc16' },
        { icon: Smile, label: 'Very Satisfied', color: '#22c55e' },
      ];

      return (
        <div className="flex gap-2" role="group" aria-label={ariaLabel || label}>
          {emojis.slice(0, maxRating).map((emoji, i) => {
            const rating = i + 1;
            const Icon = emoji.icon;
            const isActive = value === rating || hoveredRating === rating;

            return (
              <button
                key={rating}
                type="button"
                onClick={() => handleRatingClick(rating)}
                onMouseEnter={() => setHoveredRating(rating)}
                onMouseLeave={() => setHoveredRating(null)}
                disabled={disabled}
                className={cn(
                  'transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                  'focus-visible:ring-[#005196] rounded-full min-w-[44px] min-h-[44px]',
                  'flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50',
                  size === 'sm' && 'w-10 h-10',
                  size === 'md' && 'w-12 h-12',
                  size === 'lg' && 'w-16 h-16',
                  isActive ? 'bg-[#f5f5f5]' : 'hover:bg-[#f5f5f5]'
                )}
                aria-label={emoji.label}
                aria-pressed={value === rating}
              >
                <Icon
                  size={size === 'sm' ? 24 : size === 'lg' ? 40 : 32}
                  style={{ color: isActive ? emoji.color : '#666666' }}
                  className="transition-all"
                />
              </button>
            );
          })}
        </div>
      );
    };

    const renderNumeric = () => {
      return (
        <div className="flex gap-1" role="group" aria-label={ariaLabel || label}>
          {Array.from({ length: maxRating }, (_, i) => i + 1).map((rating) => {
            const isActive = value === rating || hoveredRating === rating;

            return (
              <button
                key={rating}
                type="button"
                onClick={() => handleRatingClick(rating)}
                onMouseEnter={() => setHoveredRating(rating)}
                onMouseLeave={() => setHoveredRating(null)}
                disabled={disabled}
                className={cn(
                  'font-medium transition-all focus:outline-none focus-visible:ring-2',
                  'focus-visible:ring-offset-2 focus-visible:ring-[#005196] rounded border',
                  'min-w-[44px] min-h-[44px] flex items-center justify-center',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  size === 'sm' && 'w-8 h-8 text-sm',
                  size === 'md' && 'w-10 h-10 text-base',
                  size === 'lg' && 'w-12 h-12 text-lg',
                  isActive
                    ? 'bg-[#005196] text-white border-[#005196]'
                    : 'bg-white text-[#333333] border-[#cccccc] hover:border-[#005196]'
                )}
                aria-label={\`Rate \${rating} out of \${maxRating}\`}
                aria-pressed={value === rating}
              >
                {rating}
              </button>
            );
          })}
        </div>
      );
    };

    const renderThumbs = () => {
      return (
        <div className="flex gap-4" role="group" aria-label={ariaLabel || label}>
          <button
            type="button"
            onClick={() => handleRatingClick(1)}
            disabled={disabled}
            className={cn(
              'transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              'focus-visible:ring-[#005196] rounded-full min-w-[44px] min-h-[44px]',
              'flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50',
              size === 'sm' && 'w-12 h-12',
              size === 'md' && 'w-16 h-16',
              size === 'lg' && 'w-20 h-20',
              value === 1 ? 'bg-[#22c55e]' : 'bg-[#f5f5f5] hover:bg-[#e5e5e5]'
            )}
            aria-label="Thumbs up"
            aria-pressed={value === 1}
          >
            <ThumbsUp
              size={size === 'sm' ? 24 : size === 'lg' ? 40 : 32}
              className={value === 1 ? 'stroke-white' : 'stroke-[#666666]'}
            />
          </button>
          <button
            type="button"
            onClick={() => handleRatingClick(-1)}
            disabled={disabled}
            className={cn(
              'transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              'focus-visible:ring-[#005196] rounded-full min-w-[44px] min-h-[44px]',
              'flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50',
              size === 'sm' && 'w-12 h-12',
              size === 'md' && 'w-16 h-16',
              size === 'lg' && 'w-20 h-20',
              value === -1 ? 'bg-[#dc2626]' : 'bg-[#f5f5f5] hover:bg-[#e5e5e5]'
            )}
            aria-label="Thumbs down"
            aria-pressed={value === -1}
          >
            <ThumbsDown
              size={size === 'sm' ? 24 : size === 'lg' ? 40 : 32}
              className={value === -1 ? 'stroke-white' : 'stroke-[#666666]'}
            />
          </button>
        </div>
      );
    };

    return (
      <div ref={ref} className={cn('flex flex-col gap-2', className)} {...props}>
        {type === 'stars' && renderStars()}
        {type === 'emoji' && renderEmojis()}
        {type === 'numeric' && renderNumeric()}
        {type === 'thumbs' && renderThumbs()}
        {showLabels && type !== 'thumbs' && (
          <div className="flex justify-between text-sm text-[#666666]">
            <span>Low</span>
            <span>High</span>
          </div>
        )}
      </div>
    );
  }
);

FeedbackRatingWidget.displayName = 'FeedbackRatingWidget';`,types:`export type RatingType = 'stars' | 'emoji' | 'numeric' | 'thumbs';
export type RatingSize = 'sm' | 'md' | 'lg';

export interface FeedbackRatingWidgetProps {
  type?: RatingType;
  maxRating?: number;
  value?: number;
  onChange?: (value: number) => void;
  size?: RatingSize;
  showLabels?: boolean;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  feedbackText?: string;
  onSubmit?: (rating: number, feedback?: string) => void;
  thankYouMessage?: string;
  className?: string;
  'aria-label'?: string;
}`,usage:`import { FeedbackRatingWidget } from '@ux4g/react-core';
import { useState } from 'react';

function ServiceFeedbackForm() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    // Submit to backend API
    await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ rating, feedback }),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return <div>Thank you for your feedback!</div>;
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <FeedbackRatingWidget
        type="stars"
        maxRating={5}
        value={rating}
        onChange={setRating}
        required
        label="Rate our service"
      />
      <button type="submit" disabled={rating === 0}>
        Submit
      </button>
    </form>
  );
}`},angularCode:{component:`import { Component, Input, Output, EventEmitter } from '@angular/core';

type RatingType = 'stars' | 'emoji' | 'numeric' | 'thumbs';
type RatingSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ux4g-feedback-rating-widget',
  template: \`
    <div class="feedback-rating-widget" [class]="getContainerClasses()">
      <div [ngSwitch]="type" role="group" [attr.aria-label]="label">
        <div *ngSwitchCase="'stars'" class="flex gap-2">
          <button
            *ngFor="let rating of ratingArray"
            type="button"
            [disabled]="disabled"
            (click)="handleRatingClick(rating)"
            (mouseenter)="hoveredRating = rating"
            (mouseleave)="hoveredRating = null"
            [class]="getButtonClasses(rating)"
            [attr.aria-label]="'Rate ' + rating + ' out of ' + maxRating + ' stars'"
            [attr.aria-pressed]="value === rating"
          >
            <svg class="star-icon" [class.filled]="isRatingActive(rating)">
              <use xlink:href="#icon-star"></use>
            </svg>
          </button>
        </div>

        <div *ngSwitchCase="'emoji'" class="flex gap-2">
          <button
            *ngFor="let emoji of emojiArray; let i = index"
            type="button"
            [disabled]="disabled"
            (click)="handleRatingClick(i + 1)"
            (mouseenter)="hoveredRating = i + 1"
            (mouseleave)="hoveredRating = null"
            [class]="getEmojiButtonClasses(i + 1)"
            [attr.aria-label]="emoji.label"
            [attr.aria-pressed]="value === i + 1"
          >
            <svg [style.color]="getEmojiColor(i + 1, emoji.color)">
              <use [attr.xlink:href]="'#icon-' + emoji.icon"></use>
            </svg>
          </button>
        </div>

        <div *ngSwitchCase="'numeric'" class="flex gap-1">
          <button
            *ngFor="let rating of ratingArray"
            type="button"
            [disabled]="disabled"
            (click)="handleRatingClick(rating)"
            (mouseenter)="hoveredRating = rating"
            (mouseleave)="hoveredRating = null"
            [class]="getNumericButtonClasses(rating)"
            [attr.aria-label]="'Rate ' + rating + ' out of ' + maxRating"
            [attr.aria-pressed]="value === rating"
          >
            {{ rating }}
          </button>
        </div>

        <div *ngSwitchCase="'thumbs'" class="flex gap-4">
          <button
            type="button"
            [disabled]="disabled"
            (click)="handleRatingClick(1)"
            [class]="getThumbsButtonClasses(1)"
            aria-label="Thumbs up"
            [attr.aria-pressed]="value === 1"
          >
            <svg><use xlink:href="#icon-thumbs-up"></use></svg>
          </button>
          <button
            type="button"
            [disabled]="disabled"
            (click)="handleRatingClick(-1)"
            [class]="getThumbsButtonClasses(-1)"
            aria-label="Thumbs down"
            [attr.aria-pressed]="value === -1"
          >
            <svg><use xlink:href="#icon-thumbs-down"></use></svg>
          </button>
        </div>
      </div>

      <div *ngIf="showLabels && type !== 'thumbs'" class="flex justify-between text-sm text-gray-600">
        <span>Low</span>
        <span>High</span>
      </div>
    </div>
  \`,
  styleUrls: ['./feedback-rating-widget.component.css']
})
export class FeedbackRatingWidgetComponent {
  @Input() type: RatingType = 'stars';
  @Input() maxRating = 5;
  @Input() value?: number;
  @Input() size: RatingSize = 'md';
  @Input() showLabels = false;
  @Input() required = false;
  @Input() disabled = false;
  @Input() label?: string;

  @Output() valueChange = new EventEmitter<number>();

  hoveredRating: number | null = null;

  emojiArray = [
    { icon: 'frown', label: 'Very Dissatisfied', color: '#dc2626' },
    { icon: 'frown', label: 'Dissatisfied', color: '#f97316' },
    { icon: 'meh', label: 'Neutral', color: '#eab308' },
    { icon: 'smile', label: 'Satisfied', color: '#84cc16' },
    { icon: 'smile', label: 'Very Satisfied', color: '#22c55e' },
  ];

  get ratingArray(): number[] {
    return Array.from({ length: this.maxRating }, (_, i) => i + 1);
  }

  handleRatingClick(rating: number): void {
    if (!this.disabled) {
      this.valueChange.emit(rating);
    }
  }

  isRatingActive(rating: number): boolean {
    return this.hoveredRating !== null
      ? rating <= this.hoveredRating
      : this.value !== undefined && rating <= this.value;
  }

  getEmojiColor(rating: number, defaultColor: string): string {
    const isActive = this.value === rating || this.hoveredRating === rating;
    return isActive ? defaultColor : '#666666';
  }

  getContainerClasses(): string {
    return 'flex flex-col gap-2';
  }

  getButtonClasses(rating: number): string {
    return \`rating-button size-\${this.size} \${this.disabled ? 'disabled' : ''}\`;
  }

  getEmojiButtonClasses(rating: number): string {
    const isActive = this.value === rating || this.hoveredRating === rating;
    return \`emoji-button size-\${this.size} \${isActive ? 'active' : ''} \${this.disabled ? 'disabled' : ''}\`;
  }

  getNumericButtonClasses(rating: number): string {
    const isActive = this.value === rating || this.hoveredRating === rating;
    return \`numeric-button size-\${this.size} \${isActive ? 'active' : ''} \${this.disabled ? 'disabled' : ''}\`;
  }

  getThumbsButtonClasses(value: number): string {
    const isActive = this.value === value;
    return \`thumbs-button size-\${this.size} \${isActive ? (value === 1 ? 'thumbs-up-active' : 'thumbs-down-active') : ''} \${this.disabled ? 'disabled' : ''}\`;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackRatingWidgetComponent } from './feedback-rating-widget.component';

@NgModule({
  declarations: [FeedbackRatingWidgetComponent],
  imports: [CommonModule],
  exports: [FeedbackRatingWidgetComponent]
})
export class FeedbackRatingWidgetModule { }`,types:`export type RatingType = 'stars' | 'emoji' | 'numeric' | 'thumbs';
export type RatingSize = 'sm' | 'md' | 'lg';`},comparisons:[{system:"SurveyMonkey",component:"Rating Question",variants:"Stars, Emoji, Numeric, Thumbs, Hearts",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://www.surveymonkey.com/mp/rating-scale/"},{system:"Typeform",component:"Opinion Scale",variants:"Numeric (0-10), Emoji, Stars",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://www.typeform.com/templates/c/opinion-scale/"},{system:"Google Forms",component:"Linear Scale",variants:"Numeric (1-10)",accessibility:"WCAG 2.0 AA",documentation:"Basic",link:"https://support.google.com/docs/answer/7322334"},{system:"Qualtrics",component:"Rating Scale",variants:"Stars, Numeric, Slider, Emoji",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/standard-content/rating-scale/"},{system:"Material UI (Google)",component:"Rating",variants:"Stars (customizable icons)",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-rating/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 44x44px touch target size for all interactive elements (WCAG 2.5.5)","2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)","Color contrast ratios meet or exceed 4.5:1 for all states (WCAG 1.4.3)","Semantic button elements with proper ARIA labels and roles","aria-pressed state to indicate selected rating","aria-label for each rating option with descriptive text",'role="group" for rating button container',"Visual and programmatic disabled states","Hover states distinct from focus states for clarity","Icons supplemented with text labels when showLabels is enabled"],keyboardSupport:[{key:"Tab",action:"Move focus to first rating button"},{key:"Shift + Tab",action:"Move focus away from rating widget"},{key:"Arrow Right / Arrow Down",action:"Move to next rating option (optional enhancement)"},{key:"Arrow Left / Arrow Up",action:"Move to previous rating option (optional enhancement)"},{key:"Enter / Space",action:"Select focused rating"},{key:"1-5 (or 1-10)",action:"Direct keyboard input for numeric ratings (optional enhancement)"}],screenReader:["Announces rating widget role and label",'Announces each rating option with its value and maximum (e.g., "Rate 3 out of 5 stars")',"Announces pressed state for selected rating","Announces disabled state when applicable",'For emoji ratings, announces emotional state (e.g., "Very Satisfied", "Neutral")','For thumbs ratings, announces "Thumbs up" or "Thumbs down"']},tokens:{file:"/tokens/components/feedback-rating-widget.json",mappings:[{property:"Star Size (Medium)",token:"rating.star.size.md",value:"24px"},{property:"Button Touch Target",token:"accessibility.minTouchTarget",value:"44px"},{property:"Star Fill Color (Active)",token:"rating.star.color.active",value:"#FFB800 (Gold)"},{property:"Star Stroke Color (Inactive)",token:"rating.star.color.inactive",value:"#666666 (Gray 600)"},{property:"Emoji Very Satisfied",token:"rating.emoji.color.verySatisfied",value:"#22c55e (Green 500)"},{property:"Emoji Satisfied",token:"rating.emoji.color.satisfied",value:"#84cc16 (Lime 500)"},{property:"Emoji Neutral",token:"rating.emoji.color.neutral",value:"#eab308 (Yellow 500)"},{property:"Emoji Dissatisfied",token:"rating.emoji.color.dissatisfied",value:"#f97316 (Orange 500)"},{property:"Emoji Very Dissatisfied",token:"rating.emoji.color.veryDissatisfied",value:"#dc2626 (Red 600)"},{property:"Numeric Active Background",token:"rating.numeric.background.active",value:"#005196 (Navy 500)"},{property:"Numeric Active Text",token:"rating.numeric.text.active",value:"#ffffff (White)"},{property:"Numeric Border",token:"rating.numeric.border.default",value:"#cccccc (Gray 300)"},{property:"Thumbs Up Active",token:"rating.thumbs.up.active",value:"#22c55e (Green 500)"},{property:"Thumbs Down Active",token:"rating.thumbs.down.active",value:"#dc2626 (Red 600)"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"},{property:"Focus Ring Color",token:"accessibility.focusRingColor",value:"#005196 (Navy 500)"}]},governmentContext:{description:"The Feedback Rating Widget is essential for collecting citizen feedback, measuring service satisfaction, and continuously improving government service delivery. It provides multiple rating formats to accommodate different types of feedback collection scenarios.",useCases:[{title:"Service Satisfaction Surveys",description:"Collect feedback on government services such as license renewals, permit applications, and public assistance programs. Star or emoji ratings provide quick satisfaction measurements.",example:`"How satisfied are you with your driver's license renewal experience?" with 5-star rating.`},{title:"Complaint Resolution Feedback",description:"Measure citizen satisfaction with how complaints were handled. Thumbs up/down provides quick binary feedback on resolution effectiveness.",example:'"Was your complaint resolved satisfactorily?" with thumbs up/down rating.'},{title:"Officer Performance Evaluation",description:"Allow citizens to rate interactions with government employees. Numeric scales (1-10) provide granular feedback similar to Net Promoter Score.",example:'"How likely are you to recommend this service to others?" with 1-10 numeric scale.'},{title:"Public Feedback on Initiatives",description:"Gather public opinion on new government programs, policy changes, or infrastructure projects. Multi-question surveys with different rating types provide comprehensive feedback.",example:"Survey with multiple questions rating service speed, quality, and staff helpfulness using star ratings."},{title:"Website and Digital Service Feedback",description:"Collect real-time feedback on government websites and digital portals. Thumbs rating on help articles or FAQ pages measures content usefulness.",example:'"Was this information helpful?" with thumbs up/down at the bottom of help articles.'}],compliance:["WCAG 2.1 Level AA for accessibility to all citizens including those with disabilities","Section 508 compliance for federal government digital services","Privacy considerations: feedback collection must comply with data protection regulations","Transparent feedback usage: citizens should know how their feedback will be used","Anonymous option: allow anonymous feedback to encourage honest responses"],bestPractices:["Keep surveys short: limit to 3-5 questions to maximize completion rates","Provide context: explain why feedback is being collected and how it will be used","Offer text feedback option: allow citizens to provide detailed comments beyond ratings","Display thank you message: acknowledge feedback submission with clear confirmation","Act on feedback: regularly review feedback data and make visible improvements","Make feedback accessible: provide multiple ways to submit feedback (online, phone, in-person)","Report results: share aggregated feedback results with the public to demonstrate responsiveness"]}})}export{H as default};
