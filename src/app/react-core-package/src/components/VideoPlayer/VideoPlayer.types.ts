import { VideoHTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface VideoPlayerProps
  extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'width' | 'height'>,
    BaseComponentProps {
  /** Video source URL */
  src: string;

  /** Poster image URL */
  poster?: string;

  /** Accessible title for the video */
  title?: string;

  /** Whether to autoplay */
  autoPlay?: boolean;

  /** Whether to show controls */
  controls?: boolean;

  /** Video width */
  width?: number | string;

  /** Video height */
  height?: number | string;
}
