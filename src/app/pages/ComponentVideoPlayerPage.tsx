/**
 * Video Player Component Documentation Page
 * Complete documentation for the Video Player component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Play, Pause, Volume2, Settings, Download, Subtitles } from 'lucide-react';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';

// Import the actual VideoPlayer component for live preview
const VideoPlayerPreview = ({ poster, controls = true, className, ...props }: any) => (
  <div className={`relative bg-black rounded overflow-hidden ${className || ''}`}>
    <video
      className="w-full h-auto"
      poster={poster}
      controls={controls}
      {...props}
    >
      <source src="https://www.w3.org/2010/05/video/movie_300.mp4" type="video/mp4" />
      <track
        kind="subtitles"
        src="/captions/en.vtt"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  </div>
);

const VIDEOPLAYER_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  { name: 'showCaptions', label: 'Show Captions', type: 'boolean', defaultValue: false },
  { name: 'autoPlay', label: 'Auto Play', type: 'boolean', defaultValue: false },
];

function VideoPlayerPlayground() {
  return (
    <ComponentPlayground
      name="VideoPlayer"
      controls={VIDEOPLAYER_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full flex items-center justify-center">
          <VideoPlayerPreview controls={v.showCaptions} />
        </div>
      )}
      codeTemplate={(v) =>
        `<VideoPlayer${v.showCaptions ? ' showCaptions' : ''}${v.autoPlay ? ' autoPlay' : ''} />`
      }
    />
  );
}

export default function ComponentVideoPlayerPage() {
  return (
    <ComponentDocumentation
      name="Video Player"
      description="Accessible video player for government announcements, tutorials, public hearings, and educational content. Built with comprehensive accessibility features including captions, keyboard controls, and quality selection."
      category="Government Services"
      maturity="stable"
      tier="composite"
      since="v2.0.0"
      updated="v2.3.0"

      preview={
        <div className="w-full max-w-2xl">
          {/* Realistic video player mockup */}
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628] aspect-video">
            {/* Poster image area with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            {/* Decorative scene elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                {/* Government emblem placeholder */}
                <div className="w-16 h-16 mx-auto rounded-full bg-card/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span className="text-2xl">🏛️</span>
                </div>
                <p className="text-white/60 text-sm font-medium">Digital India Initiative</p>
                <p className="text-white/40 text-xs">Government of India • 2026</p>
              </div>
            </div>
            {/* Big play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-[#005196]/90 hover:bg-[#005196] flex items-center justify-center shadow-2xl transition-all hover:scale-105 backdrop-blur-sm border border-white/20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
              </button>
            </div>
            {/* Top bar — title */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
              <span className="text-white/80 text-sm font-medium">How to Apply for Birth Certificate Online</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white">LIVE</span>
              </div>
            </div>
            {/* Bottom controls bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 space-y-2">
              {/* Progress bar */}
              <div className="w-full h-1 bg-card/20 rounded-full overflow-hidden">
                <div className="h-full bg-[#005196] rounded-full" style={{width: '35%'}} />
              </div>
              {/* Controls */}
              <div className="flex items-center justify-between text-white/80">
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /></svg>
                  <span className="text-xs font-mono">2:15 / 6:30</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-1.5 py-0.5 border border-white/30 rounded">CC</span>
                  <span className="text-xs px-1.5 py-0.5 border border-white/30 rounded">HD</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

            props={[
        {
          name: 'src',
          type: 'string',
          required: true,
          description: 'Video source URL.',
        },
        {
          name: 'poster',
          type: 'string',
          required: false,
          description: 'Poster image URL.',
        },
        {
          name: 'title',
          type: 'string',
          required: false,
          description: 'Accessible title for the video.',
        },
        {
          name: 'autoPlay',
          type: 'boolean',
          required: false,
          description: 'Whether to autoplay.',
        },
        {
          name: 'controls',
          type: 'boolean',
          required: false,
          description: 'Whether to show controls.',
        },
        {
          name: 'width',
          type: 'number | string',
          required: false,
          description: 'Video width.',
        },
        {
          name: 'height',
          type: 'number | string',
          required: false,
          description: 'Video height.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
      ]}

      examples={[
        {
          title: 'Basic Player',
          description: 'Simple video player with standard controls and poster image.',
          code: `import { VideoPlayer } from '@ux4g/react-core';

function Example() {
  return (
    <VideoPlayer />
  );
}`,
          preview: (
            <VideoPlayerPreview
              poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop"
              controls
            />
          ),
        },
        {
          title: 'With Subtitles (Multiple Languages)',
          description: 'Video player with multiple subtitle tracks for accessibility and multilingual support.',
          code: `import { VideoPlayer } from '@ux4g/react-composite';

function Example() {
  return (
    <VideoPlayer
      src="https://example.gov/videos/tutorial.mp4"
      poster="https://example.gov/images/tutorial-poster.jpg"
      subtitles={[
        {
          lang: 'en',
          label: 'English',
          src: '/captions/en.vtt',
          default: true
        },
        {
          lang: 'es',
          label: 'Español',
          src: '/captions/es.vtt'
        },
        {
          lang: 'fr',
          label: 'Français',
          src: '/captions/fr.vtt'
        },
        {
          lang: 'zh',
          label: '中文',
          src: '/captions/zh.vtt'
        }
      ]}
      controls
      captions
    />
  );
}`,
          preview: (
            <VideoPlayerPreview
              poster="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop"
              controls
            />
          ),
        },
        {
          title: 'Quality Selector',
          description: 'Player with multiple quality options for different bandwidth scenarios.',
          code: `import { VideoPlayer } from '@ux4g/react-composite';

function Example() {
  return (
    <VideoPlayer
      src={[
        { quality: '1080p', url: 'https://example.gov/videos/hd.mp4' },
        { quality: '720p', url: 'https://example.gov/videos/sd.mp4' },
        { quality: '480p', url: 'https://example.gov/videos/mobile.mp4' },
        { quality: '360p', url: 'https://example.gov/videos/low.mp4' }
      ]}
      quality="auto"
      poster="https://example.gov/images/poster.jpg"
      controls
    />
  );
}`,
          preview: (
            <VideoPlayerPreview
              poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop"
              controls
            />
          ),
        },
        {
          title: 'Playlist',
          description: 'Video playlist for sequential content like training series or multi-part announcements.',
          code: `import { VideoPlayer } from '@ux4g/react-composite';
import { useState } from 'react';

const playlist = [
  {
    title: 'Introduction',
    src: 'https://example.gov/videos/intro.mp4',
    poster: 'https://example.gov/images/intro.jpg'
  },
  {
    title: 'Getting Started',
    src: 'https://example.gov/videos/getting-started.mp4',
    poster: 'https://example.gov/images/started.jpg'
  },
  {
    title: 'Advanced Topics',
    src: 'https://example.gov/videos/advanced.mp4',
    poster: 'https://example.gov/images/advanced.jpg'
  }
];

function Example() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <VideoPlayer
        src={playlist[currentIndex].src}
        poster={playlist[currentIndex].poster}
        controls
        onEnded={() => {
          if (currentIndex < playlist.length - 1) {
            setCurrentIndex(currentIndex + 1);
          }
        }}
      />
      <div className="mt-4 space-y-2">
        {playlist.map((video, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={\`p-2 rounded \${
              index === currentIndex
                ? 'bg-[#005196] text-white'
                : 'bg-muted'
            }\`}
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
}`,
          preview: (
            <div className="space-y-4">
              <VideoPlayerPreview
                poster="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop"
                controls
              />
              <div className="space-y-2">
                <button className="w-full p-2 rounded bg-[#005196] text-white text-left">
                  Introduction
                </button>
                <button className="w-full p-2 rounded bg-muted text-left">
                  Getting Started
                </button>
                <button className="w-full p-2 rounded bg-muted text-left">
                  Advanced Topics
                </button>
              </div>
            </div>
          ),
        },
        {
          title: 'Live Stream',
          description: 'Live streaming player for real-time government events and press conferences.',
          code: `import { VideoPlayer } from '@ux4g/react-composite';

function Example() {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-sm font-semibold text-red-600">LIVE</span>
      </div>
      <VideoPlayer
        src="https://example.gov/streams/live.m3u8"
        poster="https://example.gov/images/live-poster.jpg"
        controls
        autoPlay
        muted
        subtitles={[
          {
            lang: 'en',
            label: 'English (Live)',
            src: '/captions/live-en.vtt',
            default: true
          }
        ]}
      />
      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded">
        <h3 className="font-semibold text-[#005196]">
          City Council Meeting
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Live broadcast from City Hall
        </p>
      </div>
    </div>
  );
}`,
          preview: (
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-red-600">LIVE</span>
              </div>
              <VideoPlayerPreview
                poster="https://images.unsplash.com/photo-1541672107173-1b2e699f4e5a?w=800&h=450&fit=crop"
                controls
              />
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded">
                <h3 className="font-semibold text-[#005196]">
                  City Council Meeting
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Live broadcast from City Hall
                </p>
              </div>
            </div>
          ),
        },
        {
          title: 'Public Address',
          description: 'Video player for important public addresses with download option and transcript.',
          code: `import { VideoPlayer } from '@ux4g/react-composite';

function Example() {
  return (
    <div>
      <VideoPlayer
        src="https://example.gov/videos/mayor-address.mp4"
        poster="https://example.gov/images/mayor.jpg"
        controls
        downloadable
        subtitles={[
          {
            lang: 'en',
            label: 'English',
            src: '/captions/address-en.vtt',
            default: true
          }
        ]}
        playbackRate={1.0}
      />
      <div className="mt-4 p-4 border border-border rounded">
        <h3 className="font-semibold text-[#005196] mb-2">
          Mayor's Public Address
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          Important updates on city infrastructure and services
        </p>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-sm bg-[#005196] text-white rounded hover:bg-[#004178]">
            <Download size={16} />
            Download Video
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm border border-[#005196] text-[#005196] rounded hover:bg-[#f5f5f5]">
            View Transcript
          </button>
        </div>
      </div>
    </div>
  );
}`,
          preview: (
            <div>
              <VideoPlayerPreview
                poster="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=450&fit=crop"
                controls
              />
              <div className="mt-4 p-4 border border-border rounded">
                <h3 className="font-semibold text-[#005196] mb-2">
                  Mayor's Public Address
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Important updates on city infrastructure and services
                </p>
                <div className="flex flex-wrap gap-2">
                  <button className="flex items-center gap-2 px-3 py-2 text-sm bg-[#005196] text-white rounded hover:bg-[#004178]">
                    <Download size={16} />
                    Download Video
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 text-sm border border-[#005196] text-[#005196] rounded hover:bg-[#f5f5f5]">
                    View Transcript
                  </button>
                </div>
              </div>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { useRef, useState, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { cn } from '../../utils/cn';
import { VideoPlayerProps } from './VideoPlayer.types';

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  subtitles = [],
  quality = 'auto',
  playbackRate = 1.0,
  onPlay,
  onPause,
  onEnded,
  downloadable = false,
  captions = true,
  className,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // Initialize Video.js
    const player = videojs(videoRef.current, {
      controls,
      autoplay: autoPlay,
      loop,
      muted,
      poster,
      playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
      fluid: true,
      responsive: true,
    });

    // Set sources
    if (Array.isArray(src)) {
      player.src(src.map(s => ({
        src: s.url,
        type: 'video/mp4',
        label: s.quality,
      })));
    } else {
      player.src({ src, type: 'video/mp4' });
    }

    // Add subtitle tracks
    if (captions && subtitles.length > 0) {
      subtitles.forEach((subtitle) => {
        player.addRemoteTextTrack({
          kind: 'subtitles',
          src: subtitle.src,
          srclang: subtitle.lang,
          label: subtitle.label,
          default: subtitle.default,
        }, false);
      });
    }

    // Set playback rate
    player.playbackRate(playbackRate);

    // Event listeners
    player.on('play', (e) => onPlay?.(e));
    player.on('pause', (e) => onPause?.(e));
    player.on('ended', (e) => onEnded?.(e));

    playerRef.current = player;

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [src, poster, autoPlay, loop, muted, controls, subtitles, quality, playbackRate, captions]);

  return (
    <div className={cn('ux4g-video-player', className)}>
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered"
          {...props}
        />
      </div>
      {downloadable && (
        <div className="mt-2 flex justify-end">
          <a
            href={Array.isArray(src) ? src[0].url : src}
            download
            className="inline-flex items-center gap-2 px-3 py-2 text-sm text-[#005196] hover:underline"
            aria-label="Download video"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Video
          </a>
        </div>
      )}
    </div>
  );
};

VideoPlayer.displayName = 'VideoPlayer';`,
        types: `export interface Subtitle {
  lang: string;
  label: string;
  src: string;
  default?: boolean;
}

export interface QualityOption {
  quality: string;
  url: string;
}

export interface VideoPlayerProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string | QualityOption[];
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  subtitles?: Subtitle[];
  quality?: 'auto' | '240p' | '360p' | '480p' | '720p' | '1080p';
  playbackRate?: number;
  onPlay?: (event: Event) => void;
  onPause?: (event: Event) => void;
  onEnded?: (event: Event) => void;
  downloadable?: boolean;
  captions?: boolean;
  className?: string;
}`,
        variants: `// Video.js configuration and theming
export const videoPlayerTheme = {
  // Primary color (government blue)
  primary: '#005196',

  // Control bar
  controlBar: {
    background: 'rgba(0, 0, 0, 0.7)',
    height: '3em',
  },

  // Big play button
  bigPlayButton: {
    background: 'rgba(0, 81, 150, 0.8)',
    border: '2px solid #fff',
    borderRadius: '50%',
    width: '3em',
    height: '3em',
  },

  // Progress bar
  progressBar: {
    background: '#005196',
  },

  // Volume slider
  volumeSlider: {
    background: '#005196',
  },
};`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import videojs from 'video.js';

interface Subtitle {
  lang: string;
  label: string;
  src: string;
  default?: boolean;
}

interface QualityOption {
  quality: string;
  url: string;
}

@Component({
  selector: 'ux4g-video-player',
  template: \`
    <div class="ux4g-video-player" [class]="className">
      <div data-vjs-player>
        <video
          #videoElement
          class="video-js vjs-big-play-centered"
        ></video>
      </div>
      <div *ngIf="downloadable" class="mt-2 flex justify-end">
        <a
          [href]="getDownloadUrl()"
          download
          class="inline-flex items-center gap-2 px-3 py-2 text-sm text-[#005196] hover:underline"
          aria-label="Download video"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Video
        </a>
      </div>
    </div>
  \`,
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  @Input() src!: string | QualityOption[];
  @Input() poster?: string;
  @Input() autoPlay = false;
  @Input() loop = false;
  @Input() muted = false;
  @Input() controls = true;
  @Input() subtitles: Subtitle[] = [];
  @Input() quality: 'auto' | '240p' | '360p' | '480p' | '720p' | '1080p' = 'auto';
  @Input() playbackRate = 1.0;
  @Input() downloadable = false;
  @Input() captions = true;
  @Input() className?: string;

  @Output() play = new EventEmitter<Event>();
  @Output() pause = new EventEmitter<Event>();
  @Output() ended = new EventEmitter<Event>();

  private player?: any;

  ngAfterViewInit(): void {
    this.initializePlayer();
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }

  private initializePlayer(): void {
    const options = {
      controls: this.controls,
      autoplay: this.autoPlay,
      loop: this.loop,
      muted: this.muted,
      poster: this.poster,
      playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
      fluid: true,
      responsive: true,
    };

    this.player = videojs(this.videoElement.nativeElement, options);

    // Set sources
    if (Array.isArray(this.src)) {
      this.player.src(this.src.map(s => ({
        src: s.url,
        type: 'video/mp4',
        label: s.quality,
      })));
    } else {
      this.player.src({ src: this.src, type: 'video/mp4' });
    }

    // Add subtitle tracks
    if (this.captions && this.subtitles.length > 0) {
      this.subtitles.forEach((subtitle) => {
        this.player.addRemoteTextTrack({
          kind: 'subtitles',
          src: subtitle.src,
          srclang: subtitle.lang,
          label: subtitle.label,
          default: subtitle.default,
        }, false);
      });
    }

    // Set playback rate
    this.player.playbackRate(this.playbackRate);

    // Event listeners
    this.player.on('play', (e: Event) => this.play.emit(e));
    this.player.on('pause', (e: Event) => this.pause.emit(e));
    this.player.on('ended', (e: Event) => this.ended.emit(e));
  }

  getDownloadUrl(): string {
    return Array.isArray(this.src) ? this.src[0].url : this.src;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player.component';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [CommonModule],
  exports: [VideoPlayerComponent]
})
export class VideoPlayerModule { }`,
        types: `export interface Subtitle {
  lang: string;
  label: string;
  src: string;
  default?: boolean;
}

export interface QualityOption {
  quality: string;
  url: string;
}

export type VideoQuality = 'auto' | '240p' | '360p' | '480p' | '720p' | '1080p';`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-video-player> custom element",
        html: "<ux4g-video-player variant=\"primary\" size=\"md\"><!-- VideoPlayer --></ux4g-video-player>",
      }}
      comparisons={[
        {
          system: 'Video.js',
          component: 'Video.js Player',
          variants: 'Default player with plugins',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://videojs.com/',
        },
        {
          system: 'Plyr',
          component: 'Plyr',
          variants: 'HTML5, YouTube, Vimeo',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://plyr.io/',
        },
        {
          system: 'JW Player',
          component: 'JW Player',
          variants: 'Commercial player with analytics',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://www.jwplayer.com/',
        },
        {
          system: 'YouTube Embed',
          component: 'YouTube IFrame API',
          variants: 'Embedded YouTube player',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://developers.google.com/youtube/iframe_api_reference',
        },
        {
          system: 'HTML5 Video',
          component: 'Native <video>',
          variants: 'Browser default controls',
          accessibility: 'Varies by browser',
          documentation: 'MDN Documentation',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Closed captions and subtitles support (WCAG 1.2.2)',
          'Audio descriptions available for complex visual content (WCAG 1.2.5)',
          'Full keyboard navigation support (WCAG 2.1.1)',
          'Clear focus indicators on all controls (WCAG 2.4.7)',
          'Pause, stop, and hide controls for moving content (WCAG 2.2.2)',
          'No autoplay with audio (WCAG 1.4.2)',
          'Transcript availability for all video content',
          'Time-based media alternative (WCAG 1.2.8)',
          'Customizable playback speed for accessibility needs',
          'High contrast mode support',
          'Screen reader announcements for player state changes',
          'ARIA labels and roles for all interactive elements',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate between controls' },
          { key: 'Space / K', action: 'Play/Pause video' },
          { key: 'Enter', action: 'Activate focused control' },
          { key: 'Left Arrow / J', action: 'Rewind 10 seconds' },
          { key: 'Right Arrow / L', action: 'Forward 10 seconds' },
          { key: 'Up Arrow', action: 'Increase volume' },
          { key: 'Down Arrow', action: 'Decrease volume' },
          { key: 'M', action: 'Toggle mute' },
          { key: 'F', action: 'Toggle fullscreen' },
          { key: 'C', action: 'Toggle captions' },
          { key: '0-9', action: 'Jump to percentage of video' },
          { key: 'Home', action: 'Jump to beginning' },
          { key: 'End', action: 'Jump to end' },
        ],
        screenReader: [
          'Announces video title and duration',
          'Announces current playback time and remaining time',
          'Announces play/pause state changes',
          'Announces volume level changes',
          'Announces when entering/exiting fullscreen',
          'Announces caption track changes',
          'Announces buffering and loading states',
          'Provides accessible labels for all controls',
        ],
      }}

      tokens={{
        file: '/tokens/components/video-player.json',
        mappings: [
          { property: 'Player Background', token: 'component.videoPlayer.background', value: '#000000' },
          { property: 'Control Bar Background', token: 'component.videoPlayer.controlBar.background', value: 'rgba(0, 0, 0, 0.7)' },
          { property: 'Control Bar Height', token: 'component.videoPlayer.controlBar.height', value: '48px' },
          { property: 'Primary Accent', token: 'component.videoPlayer.accent.primary', value: '#005196 (Navy 500)' },
          { property: 'Progress Bar Fill', token: 'component.videoPlayer.progressBar.fill', value: '#005196 (Navy 500)' },
          { property: 'Big Play Button Size', token: 'component.videoPlayer.bigPlayButton.size', value: '80px' },
          { property: 'Big Play Button Background', token: 'component.videoPlayer.bigPlayButton.background', value: 'rgba(0, 81, 150, 0.8)' },
          { property: 'Control Icon Size', token: 'component.videoPlayer.icon.size', value: '24px' },
          { property: 'Caption Font Size', token: 'component.videoPlayer.caption.fontSize', value: '16px' },
          { property: 'Caption Background', token: 'component.videoPlayer.caption.background', value: 'rgba(0, 0, 0, 0.8)' },
          { property: 'Focus Ring Color', token: 'accessibility.focusRing.color', value: '#005196' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRing.width', value: '2px' },
        ],
      }}

      useCases={[
        {
          title: 'Training & Tutorial Videos',
          description: 'Embedded how-to videos for government service applications like passport, Aadhaar, and certificate processes.',
          scenario: 'Citizen watches a step-by-step video guide on how to apply for a birth certificate online.',
          implementation: '<VideoPlayer src="/videos/certificate-guide.mp4" captions="/captions/certificate-guide.vtt" poster="/images/certificate-poster.jpg" />',
        },
        {
          title: 'Government Announcements',
          description: 'Official video addresses and policy announcements from ministers and department heads.',
          scenario: 'Home page features a video message from the Minister about a new digital initiative.',
          implementation: '<VideoPlayer src={announcementUrl} poster={posterUrl} controls />',
        },
        {
          title: 'Accessibility Compliance Videos',
          description: 'Videos with mandatory captions and audio descriptions for WCAG compliance.',
          scenario: 'All government portal videos include Hindi and English captions for hearing-impaired users.',
          implementation: '<VideoPlayer src={videoUrl} captions={[{src: "/hi.vtt", label: "Hindi"}, {src: "/en.vtt", label: "English"}]} />',
        },
        {
          title: 'Service Demo Walkthroughs',
          description: 'Interactive demo videos showing how to use government digital services.',
          scenario: 'Officer training portal shows video walkthroughs of the case management system.',
          implementation: '<VideoPlayer src="/videos/officer-training.mp4" controls playbackSpeed />',
        },
      
        { title: 'Scheme Awareness Video', description: 'Video explaining welfare scheme benefits and enrollment.', scenario: 'PM-KISAN page shows explainer video about scheme benefits.', implementation: '<VideoPlayer src="/videos/pm-kisan-explainer.mp4" captions poster />' },
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
                  Do use VideoPlayer when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Embedded video playback</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Training and tutorial videos</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Government announcement videos</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Accessible video with captions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use VideoPlayer when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Audio-only content — use an audio player</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Image galleries — use a gallery component</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Live streaming — use a streaming service</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Background video — use CSS video background</li>
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
                  <p className="text-sm text-muted-foreground">Always include captions — 80% of users watch video with captions on.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t auto-play videos — it violates WCAG 1.4.2 and annoys users.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/aspectratio" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">AspectRatio</h3>
                <p className="text-sm text-muted-foreground">For responsive video sizing</p>
              </a>
              <a href="/components/card" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Card</h3>
                <p className="text-sm text-muted-foreground">For video card containers</p>
              </a>
              <a href="/components/modal" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Modal</h3>
                <p className="text-sm text-muted-foreground">For video lightbox</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added caption/subtitle support</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added playback speed control</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with basic video controls</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Captions are essential</h3>
                <p className="text-sm text-muted-foreground">WCAG 1.2.2 requires captions for all video content. 80% of users watch video with captions on, not just those with hearing impairments (Verizon Media study).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}