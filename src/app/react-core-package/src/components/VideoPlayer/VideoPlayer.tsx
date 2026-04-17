/**
 * VideoPlayer Component
 * Accessible HTML5 video player wrapper.
 *
 * @example
 * ```tsx
 * <VideoPlayer src="/video.mp4" title="Demo Video" controls />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { VideoPlayerProps } from './VideoPlayer.types';

export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  (
    {
      src,
      poster,
      title,
      autoPlay = false,
      controls = true,
      width,
      height,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('ux4g-video-player', className)}>
        {title && (
          <p className="ux4g-video-player-title text-sm font-medium text-foreground mb-1">
            {title}
          </p>
        )}
        <video
          ref={ref}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          controls={controls}
          width={width}
          height={height}
          aria-label={title || 'Video player'}
          className="ux4g-video-player-element w-full rounded-md"
          {...props}
        >
          Your browser does not support the video element.
        </video>
      </div>
    );
  }
);

VideoPlayer.displayName = 'VideoPlayer';
