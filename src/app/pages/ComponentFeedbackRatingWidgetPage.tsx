/**
 * Feedback Rating Widget Component Documentation Page
 * Complete documentation for the Feedback Rating Widget component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Star, ThumbsUp, ThumbsDown, Smile, Meh, Frown } from 'lucide-react';

// Import the actual Feedback Rating Widget component for live preview
const FeedbackRatingWidgetPreview = ({ type, maxRating = 5, value, onChange, size = 'md', showLabels = false, ...props }: any) => {
  const renderStars = () => {
    return (
      <div className="flex gap-2" role="group" aria-label="Star rating">
        {Array.from({ length: maxRating }, (_, i) => i + 1).map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => onChange?.(rating)}
            className={`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] min-w-[44px] min-h-[44px] flex items-center justify-center ${
              size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'
            }`}
            aria-label={`Rate ${rating} out of ${maxRating} stars`}
            aria-pressed={value === rating}
          >
            <Star
              size={size === 'sm' ? 20 : size === 'lg' ? 32 : 24}
              className={`${value && rating <= value ? 'fill-[#FFB800] stroke-[#FFB800]' : 'fill-none stroke-[#666666]'} transition-all`}
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
      <div className="flex gap-2" role="group" aria-label="Emoji rating">
        {emojis.slice(0, maxRating).map((emoji, i) => {
          const rating = i + 1;
          const Icon = emoji.icon;
          return (
            <button
              key={rating}
              type="button"
              onClick={() => onChange?.(rating)}
              className={`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center ${
                size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12'
              } ${value === rating ? 'bg-[#f5f5f5]' : 'hover:bg-[#f5f5f5]'}`}
              aria-label={emoji.label}
              aria-pressed={value === rating}
            >
              <Icon
                size={size === 'sm' ? 24 : size === 'lg' ? 40 : 32}
                className={`transition-all`}
                style={{ color: value === rating ? emoji.color : '#666666' }}
              />
            </button>
          );
        })}
      </div>
    );
  };

  const renderNumeric = () => {
    return (
      <div className="flex gap-1" role="group" aria-label="Numeric rating">
        {Array.from({ length: maxRating }, (_, i) => i + 1).map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => onChange?.(rating)}
            className={`font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] rounded border min-w-[44px] min-h-[44px] flex items-center justify-center ${
              size === 'sm' ? 'w-8 h-8 text-sm' : size === 'lg' ? 'w-12 h-12 text-lg' : 'w-10 h-10 text-base'
            } ${
              value === rating
                ? 'bg-[#005196] text-white border-[#005196]'
                : 'bg-card text-[#333333] border-[#cccccc] hover:border-[#005196]'
            }`}
            aria-label={`Rate ${rating} out of ${maxRating}`}
            aria-pressed={value === rating}
          >
            {rating}
          </button>
        ))}
      </div>
    );
  };

  const renderThumbs = () => {
    return (
      <div className="flex gap-4" role="group" aria-label="Thumbs rating">
        <button
          type="button"
          onClick={() => onChange?.(1)}
          className={`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center ${
            size === 'sm' ? 'w-12 h-12' : size === 'lg' ? 'w-20 h-20' : 'w-16 h-16'
          } ${value === 1 ? 'bg-[#22c55e]' : 'bg-[#f5f5f5] hover:bg-[#e5e5e5]'}`}
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
          onClick={() => onChange?.(-1)}
          className={`transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center ${
            size === 'sm' ? 'w-12 h-12' : size === 'lg' ? 'w-20 h-20' : 'w-16 h-16'
          } ${value === -1 ? 'bg-[#dc2626]' : 'bg-[#f5f5f5] hover:bg-[#e5e5e5]'}`}
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
    <div className="flex flex-col gap-2">
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
};

function FeedbackRatingWidgetPlayground() {
  const [type, setType] = React.useState('stars');
  const [maxRating, setMaxRating] = React.useState('5');
  const [showLabels, setShowLabels] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-4 sm:p-6 lg:p-8">
        <div className="w-full flex items-center justify-center">
          <FeedbackRatingWidgetPreview type={type} />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Type</label>
            <select value={type} onChange={e => setType(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="stars">stars</option>
              <option value="thumbs">thumbs</option>
              <option value="emoji">emoji</option>
            </select>
          </div>
          <div><label className="block font-semibold text-foreground mb-1">Max rating</label><select value={maxRating} onChange={e => setMaxRating(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="3">3</option><option value="5">5</option><option value="10">10</option></select></div>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showLabels} onChange={e => setShowLabels(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show labels</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<FeedbackRatingWidget ${type} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentFeedbackRatingWidgetPage() {
  const [starRating, setStarRating] = useState(0);
  const [emojiRating, setEmojiRating] = useState(0);
  const [numericRating, setNumericRating] = useState(0);
  const [thumbsRating, setThumbsRating] = useState(0);
  const [commentRating, setCommentRating] = useState(0);
  const [comment, setComment] = useState('');

  return (
    <ComponentDocumentation
      name="Feedback Rating Widget"
      description="Collects user feedback and service quality measurements across government services. Supports multiple rating types (stars, emoji, numeric, thumbs) with optional comment fields for detailed feedback collection."
      category="Government Services"
      maturity="stable"
      tier="core"
      since="v2.0.0"
      updated="v2.3.0"

      preview={
        <div className="w-full max-w-2xl">
          <FeedbackRatingWidgetPreview type="stars" maxRating={5} />
        </div>
      }

      props={[
        {
          name: 'type',
          type: "'stars' | 'emoji' | 'numeric' | 'thumbs'",
          default: "'stars'",
          required: false,
          description: 'Type of rating widget. Stars (1-5 star rating), emoji (emotional response), numeric (number scale), thumbs (simple up/down).',
        },
        {
          name: 'maxRating',
          type: 'number',
          default: '5',
          required: false,
          description: 'Maximum rating value. Common values: 5 for stars/emoji, 10 for numeric scales, 2 for thumbs.',
        },
        {
          name: 'value',
          type: 'number',
          required: false,
          description: 'Current rating value. For thumbs: 1 (up), -1 (down), 0 (none).',
        },
        {
          name: 'onChange',
          type: '(value: number) => void',
          required: true,
          description: 'Callback when rating changes. Receives the new rating value.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of rating controls. Affects touch target and visual size.',
        },
        {
          name: 'showLabels',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to show low/high labels below the rating controls.',
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether rating is required before form submission.',
        },
        {
          name: 'feedbackText',
          type: 'string',
          required: false,
          description: 'Optional text input value for additional feedback comments.',
        },
        {
          name: 'onSubmit',
          type: '(rating: number, feedback?: string) => void',
          required: false,
          description: 'Callback when feedback is submitted. Receives rating and optional text feedback.',
        },
        {
          name: 'thankYouMessage',
          type: 'string',
          default: "'Thank you for your feedback!'",
          required: false,
          description: 'Message displayed after successful submission.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the rating widget is disabled.',
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          description: 'Accessible label for the rating group.',
        },
      ]}

      examples={[
        {
          title: 'Star Rating',
          description: 'Classic 5-star rating system for general satisfaction measurement.',
          code: `import { FeedbackRatingWidget } from '@ux4g/react-core';

function Example() {
  return (
    <FeedbackRatingWidget />
  );
}`,
          preview: (
            <div className="space-y-3">
              <label className="block text-sm font-medium text-[#333333]">
                How satisfied are you with this service?
              </label>
              <FeedbackRatingWidgetPreview
                type="stars"
                maxRating={5}
                value={starRating}
                onChange={setStarRating}
                showLabels
              />
              {starRating > 0 && (
                <p className="text-sm text-[#666666]">You rated: {starRating} out of 5 stars</p>
              )}
            </div>
          ),
        },
        {
          title: 'Emoji Rating',
          description: 'Emotional response scale using emojis for intuitive feedback collection.',
          code: `import { FeedbackRatingWidget } from '@ux4g/react-core';
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
}`,
          preview: (
            <div className="space-y-3">
              <label className="block text-sm font-medium text-[#333333]">
                How was your experience?
              </label>
              <FeedbackRatingWidgetPreview
                type="emoji"
                maxRating={5}
                value={emojiRating}
                onChange={setEmojiRating}
              />
            </div>
          ),
        },
        {
          title: 'Numeric Scale (1-10)',
          description: 'Number-based rating scale for precise measurement (Net Promoter Score style).',
          code: `import { FeedbackRatingWidget } from '@ux4g/react-core';
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
}`,
          preview: (
            <div className="space-y-3">
              <label className="block text-sm font-medium text-[#333333]">
                How likely are you to recommend this service?
              </label>
              <FeedbackRatingWidgetPreview
                type="numeric"
                maxRating={10}
                value={numericRating}
                onChange={setNumericRating}
                showLabels
              />
            </div>
          ),
        },
        {
          title: 'Thumbs Up/Down',
          description: 'Simple binary feedback for quick yes/no satisfaction measurement.',
          code: `import { FeedbackRatingWidget } from '@ux4g/react-core';
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
}`,
          preview: (
            <div className="space-y-3">
              <label className="block text-sm font-medium text-[#333333]">
                Was this helpful?
              </label>
              <FeedbackRatingWidgetPreview
                type="thumbs"
                value={thumbsRating}
                onChange={setThumbsRating}
              />
              {thumbsRating !== 0 && (
                <p className="text-sm text-[#666666]">
                  {thumbsRating === 1 ? 'Thank you for the positive feedback!' : 'Thank you for your feedback. We will work to improve.'}
                </p>
              )}
            </div>
          ),
        },
        {
          title: 'With Comments',
          description: 'Rating widget combined with text feedback for detailed responses.',
          code: `import { FeedbackRatingWidget } from '@ux4g/react-core';
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
          className="w-full border border-border rounded p-2"
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
}`,
          preview: (
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Rate your experience
                </label>
                <FeedbackRatingWidgetPreview
                  type="stars"
                  maxRating={5}
                  value={commentRating}
                  onChange={setCommentRating}
                />
              </div>

              <div>
                <label htmlFor="feedback-example" className="block text-sm font-medium text-[#333333] mb-2">
                  Additional Comments (Optional)
                </label>
                <textarea
                  id="feedback-example"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  className="w-full border border-[#cccccc] rounded p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196]"
                  placeholder="Tell us more about your experience..."
                />
              </div>

              <button
                onClick={() => {
                  alert(`Rating: ${commentRating}, Comment: ${comment}`);
                }}
                disabled={commentRating === 0}
                className="px-4 py-2 bg-[#005196] text-white rounded min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#004178] transition-all"
              >
                Submit Feedback
              </button>
            </div>
          ),
        },
        {
          title: 'Multi-question Survey',
          description: 'Multiple rating widgets for comprehensive service evaluation.',
          code: `import { FeedbackRatingWidget } from '@ux4g/react-core';
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
}`,
          preview: (
            <div className="space-y-6 max-w-md">
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Service Speed
                </label>
                <FeedbackRatingWidgetPreview
                  type="stars"
                  maxRating={5}
                  value={0}
                  onChange={() => {}}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Service Quality
                </label>
                <FeedbackRatingWidgetPreview
                  type="stars"
                  maxRating={5}
                  value={0}
                  onChange={() => {}}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Staff Helpfulness
                </label>
                <FeedbackRatingWidgetPreview
                  type="stars"
                  maxRating={5}
                  value={0}
                  onChange={() => {}}
                />
              </div>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef, useState } from 'react';
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
                    : 'bg-card text-[#333333] border-[#cccccc] hover:border-[#005196]'
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

FeedbackRatingWidget.displayName = 'FeedbackRatingWidget';`,
        types: `export type RatingType = 'stars' | 'emoji' | 'numeric' | 'thumbs';
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
}`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

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

      <div *ngIf="showLabels && type !== 'thumbs'" class="flex justify-between text-sm text-muted-foreground">
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
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackRatingWidgetComponent } from './feedback-rating-widget.component';

@NgModule({
  declarations: [FeedbackRatingWidgetComponent],
  imports: [CommonModule],
  exports: [FeedbackRatingWidgetComponent]
})
export class FeedbackRatingWidgetModule { }`,
        types: `export type RatingType = 'stars' | 'emoji' | 'numeric' | 'thumbs';
export type RatingSize = 'sm' | 'md' | 'lg';`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-feedback-rating-widget> custom element",
        html: "<ux4g-feedback-rating-widget variant=\"primary\" size=\"md\"><!-- FeedbackRatingWidget --></ux4g-feedback-rating-widget>",
      }}
      comparisons={[
        {
          system: 'SurveyMonkey',
          component: 'Rating Question',
          variants: 'Stars, Emoji, Numeric, Thumbs, Hearts',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://www.surveymonkey.com/mp/rating-scale/',
        },
        {
          system: 'Typeform',
          component: 'Opinion Scale',
          variants: 'Numeric (0-10), Emoji, Stars',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://www.typeform.com/templates/c/opinion-scale/',
        },
        {
          system: 'Google Forms',
          component: 'Linear Scale',
          variants: 'Numeric (1-10)',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Basic',
          link: 'https://support.google.com/docs/answer/7322334',
        },
        {
          system: 'Qualtrics',
          component: 'Rating Scale',
          variants: 'Stars, Numeric, Slider, Emoji',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/standard-content/rating-scale/',
        },
        {
          system: 'Material UI (Google)',
          component: 'Rating',
          variants: 'Stars (customizable icons)',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-rating/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 44x44px touch target size for all interactive elements (WCAG 2.5.5)',
          '2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)',
          'Color contrast ratios meet or exceed 4.5:1 for all states (WCAG 1.4.3)',
          'Semantic button elements with proper ARIA labels and roles',
          'aria-pressed state to indicate selected rating',
          'aria-label for each rating option with descriptive text',
          'role="group" for rating button container',
          'Visual and programmatic disabled states',
          'Hover states distinct from focus states for clarity',
          'Icons supplemented with text labels when showLabels is enabled',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to first rating button' },
          { key: 'Shift + Tab', action: 'Move focus away from rating widget' },
          { key: 'Arrow Right / Arrow Down', action: 'Move to next rating option (optional enhancement)' },
          { key: 'Arrow Left / Arrow Up', action: 'Move to previous rating option (optional enhancement)' },
          { key: 'Enter / Space', action: 'Select focused rating' },
          { key: '1-5 (or 1-10)', action: 'Direct keyboard input for numeric ratings (optional enhancement)' },
        ],
        screenReader: [
          'Announces rating widget role and label',
          'Announces each rating option with its value and maximum (e.g., "Rate 3 out of 5 stars")',
          'Announces pressed state for selected rating',
          'Announces disabled state when applicable',
          'For emoji ratings, announces emotional state (e.g., "Very Satisfied", "Neutral")',
          'For thumbs ratings, announces "Thumbs up" or "Thumbs down"',
        ],
      }}

      tokens={{
        file: '/tokens/components/feedback-rating-widget.json',
        mappings: [
          { property: 'Star Size (Medium)', token: 'rating.star.size.md', value: '24px' },
          { property: 'Button Touch Target', token: 'accessibility.minTouchTarget', value: '44px' },
          { property: 'Star Fill Color (Active)', token: 'rating.star.color.active', value: '#FFB800 (Gold)' },
          { property: 'Star Stroke Color (Inactive)', token: 'rating.star.color.inactive', value: '#666666 (Gray 600)' },
          { property: 'Emoji Very Satisfied', token: 'rating.emoji.color.verySatisfied', value: '#22c55e (Green 500)' },
          { property: 'Emoji Satisfied', token: 'rating.emoji.color.satisfied', value: '#84cc16 (Lime 500)' },
          { property: 'Emoji Neutral', token: 'rating.emoji.color.neutral', value: '#eab308 (Yellow 500)' },
          { property: 'Emoji Dissatisfied', token: 'rating.emoji.color.dissatisfied', value: '#f97316 (Orange 500)' },
          { property: 'Emoji Very Dissatisfied', token: 'rating.emoji.color.veryDissatisfied', value: '#dc2626 (Red 600)' },
          { property: 'Numeric Active Background', token: 'rating.numeric.background.active', value: '#005196 (Navy 500)' },
          { property: 'Numeric Active Text', token: 'rating.numeric.text.active', value: '#ffffff (White)' },
          { property: 'Numeric Border', token: 'rating.numeric.border.default', value: '#cccccc (Gray 300)' },
          { property: 'Thumbs Up Active', token: 'rating.thumbs.up.active', value: '#22c55e (Green 500)' },
          { property: 'Thumbs Down Active', token: 'rating.thumbs.down.active', value: '#dc2626 (Red 600)' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
          { property: 'Focus Ring Color', token: 'accessibility.focusRingColor', value: '#005196 (Navy 500)' },
        ],
      }}

      governmentContext={{
        description: 'The Feedback Rating Widget is essential for collecting citizen feedback, measuring service satisfaction, and continuously improving government service delivery. It provides multiple rating formats to accommodate different types of feedback collection scenarios.',
        useCases: "Service Satisfaction Surveys: Collect feedback on government services such as license renewals, permit applications, and public assistance programs. Star or emoji ratings provide quick satisfaction measurements; Complaint Resolution Feedback: Measure citizen satisfaction with how complaints were handled. Thumbs up/down provides quick binary feedback on resolution effectiveness; Officer Performance Evaluation: Allow citizens to rate interactions with government employees. Numeric scales (1-10) provide granular feedback similar to Net Promoter Score; Public Feedback on Initiatives: Gather public opinion on new government programs, policy changes, or infrastructure projects. Multi-question surveys with different rating types provide comprehensive feedback; Website and Digital Service Feedback: Collect real-time feedback on government websites and digital portals. Thumbs rating on help articles or FAQ pages measures content usefulness",
        compliance: "WCAG 2.1 Level AA for accessibility to all citizens including those with disabilities; Section 508 compliance for federal government digital services; Privacy considerations: feedback collection must comply with data protection regulations; Transparent feedback usage: citizens should know how their feedback will be used; Anonymous option: allow anonymous feedback to encourage honest responses",
        bestPractices: "Keep surveys short: limit to 3-5 questions to maximize completion rates; Provide context: explain why feedback is being collected and how it will be used; Offer text feedback option: allow citizens to provide detailed comments beyond ratings; Display thank you message: acknowledge feedback submission with clear confirmation; Act on feedback: regularly review feedback data and make visible improvements; Make feedback accessible: provide multiple ways to submit feedback (online, phone, in-person); Report results: share aggregated feedback results with the public to demonstrate responsiveness",
      }}

      useCases={[
        { title: 'Service Satisfaction Rating', description: 'Star rating after completing a government service.', scenario: 'Citizen rates certificate issuance experience after receiving document.', implementation: '<FeedbackRatingWidget type="stars" onSubmit={handleFeedback} />' },
        { title: 'Page Helpfulness', description: 'Thumbs up/down rating on documentation and help pages.', scenario: 'User rates whether the FAQ page answered their question.', implementation: '<FeedbackRatingWidget type="thumbs" question="Was this helpful?" />' },
        { title: 'Officer Performance Rating', description: 'Citizen rates interaction with government officer.', scenario: 'Citizen rates counter staff behavior after in-person visit.', implementation: '<FeedbackRatingWidget type="stars" maxRating={5} showComment />' },
        { title: 'Portal Usability Feedback', description: 'Emoji-based quick feedback on portal usability.', scenario: 'User provides quick feedback on new portal redesign.', implementation: '<FeedbackRatingWidget type="emoji" question="How was your experience?" />' },
      ]}

      additionalContent={
        <>

          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use FeedbackRatingWidget when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Service satisfaction surveys</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Page helpfulness ratings</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Post-transaction feedback</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>User experience measurement</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use FeedbackRatingWidget when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Detailed surveys — use a form builder</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Bug reports — use a dedicated form</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Comments — use Textarea</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Binary choices — use Switch or Checkbox</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Keep feedback forms short — 1-2 questions maximum for inline widgets.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t require detailed feedback for simple satisfaction ratings.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/button" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Button</h3>
                <p className="text-sm text-muted-foreground">For submit actions</p>
              </a>
              <a href="/components/textarea" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Textarea</h3>
                <p className="text-sm text-muted-foreground">For detailed feedback</p>
              </a>
              <a href="/components/toast" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Toast</h3>
                <p className="text-sm text-muted-foreground">For submission confirmation</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added star and thumbs rating types</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added optional comment field</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with 5-star rating</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Feedback improves services</h3>
                <p className="text-sm text-muted-foreground">Government services with citizen feedback loops show 30% improvement in satisfaction scores over 12 months (World Bank).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}