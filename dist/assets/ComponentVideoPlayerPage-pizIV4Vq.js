import{j as e,D as i}from"./index-LBJNeHTL.js";import{C as n}from"./ComponentDocumentation-DvEedSJi.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const t=({poster:o,controls:a=!0,className:s,...r})=>e.jsx("div",{className:`relative bg-black rounded overflow-hidden ${s||""}`,children:e.jsxs("video",{className:"w-full h-auto",poster:o,controls:a,...r,children:[e.jsx("source",{src:"https://www.w3.org/2010/05/video/movie_300.mp4",type:"video/mp4"}),e.jsx("track",{kind:"subtitles",src:"/captions/en.vtt",srcLang:"en",label:"English"}),"Your browser does not support the video tag."]})});function m(){return e.jsx(n,{name:"Video Player",description:"Accessible video player for government announcements, tutorials, public hearings, and educational content. Built with comprehensive accessibility features including captions, keyboard controls, and quality selection.",category:"Government Services",maturity:"stable",tier:"composite",since:"v2.0.0",updated:"v2.3.0",props:[{name:"src",type:"string | { quality: string; url: string }[]",required:!0,description:"Video source URL or array of quality options with URLs."},{name:"poster",type:"string",required:!1,description:"URL of poster image displayed before video plays."},{name:"autoPlay",type:"boolean",default:"false",required:!1,description:"Whether video should autoplay. Use cautiously for accessibility."},{name:"loop",type:"boolean",default:"false",required:!1,description:"Whether video should loop continuously."},{name:"muted",type:"boolean",default:"false",required:!1,description:"Whether video is muted by default. Required for autoplay in most browsers."},{name:"controls",type:"boolean",default:"true",required:!1,description:"Whether to show video controls (play, pause, volume, etc.)."},{name:"subtitles",type:"{ lang: string; label: string; src: string; default?: boolean }[]",required:!1,description:"Array of subtitle/caption tracks in different languages."},{name:"quality",type:"'auto' | '240p' | '360p' | '480p' | '720p' | '1080p'",default:"'auto'",required:!1,description:"Video quality setting. Auto adapts based on connection."},{name:"playbackRate",type:"number",default:"1.0",required:!1,description:"Playback speed (0.5x to 2.0x). Useful for tutorials and educational content."},{name:"onPlay",type:"(event: Event) => void",required:!1,description:"Callback fired when video starts playing."},{name:"onPause",type:"(event: Event) => void",required:!1,description:"Callback fired when video is paused."},{name:"onEnded",type:"(event: Event) => void",required:!1,description:"Callback fired when video playback ends."},{name:"downloadable",type:"boolean",default:"false",required:!1,description:"Whether to show download button for offline access."},{name:"captions",type:"boolean",default:"true",required:!1,description:"Whether to enable closed captions. Required for WCAG compliance."}],examples:[{title:"Basic Player",description:"Simple video player with standard controls and poster image.",code:`import { VideoPlayer } from '@ux4g/react-composite';

function Example() {
  return (
    <VideoPlayer
      src="https://example.gov/videos/announcement.mp4"
      poster="https://example.gov/images/poster.jpg"
      controls
    />
  );
}`,preview:e.jsx(t,{poster:"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop",controls:!0})},{title:"With Subtitles (Multiple Languages)",description:"Video player with multiple subtitle tracks for accessibility and multilingual support.",code:`import { VideoPlayer } from '@ux4g/react-composite';

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
}`,preview:e.jsx(t,{poster:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",controls:!0})},{title:"Quality Selector",description:"Player with multiple quality options for different bandwidth scenarios.",code:`import { VideoPlayer } from '@ux4g/react-composite';

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
}`,preview:e.jsx(t,{poster:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",controls:!0})},{title:"Playlist",description:"Video playlist for sequential content like training series or multi-part announcements.",code:`import { VideoPlayer } from '@ux4g/react-composite';
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
                : 'bg-gray-100'
            }\`}
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{poster:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop",controls:!0}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{className:"w-full p-2 rounded bg-[#005196] text-white text-left",children:"Introduction"}),e.jsx("button",{className:"w-full p-2 rounded bg-gray-100 text-left",children:"Getting Started"}),e.jsx("button",{className:"w-full p-2 rounded bg-gray-100 text-left",children:"Advanced Topics"})]})]})},{title:"Live Stream",description:"Live streaming player for real-time government events and press conferences.",code:`import { VideoPlayer } from '@ux4g/react-composite';

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
      <div className="mt-4 p-4 bg-blue-50 rounded">
        <h3 className="font-semibold text-[#005196]">
          City Council Meeting
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Live broadcast from City Hall
        </p>
      </div>
    </div>
  );
}`,preview:e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full animate-pulse"}),e.jsx("span",{className:"text-sm font-semibold text-red-600",children:"LIVE"})]}),e.jsx(t,{poster:"https://images.unsplash.com/photo-1541672107173-1b2e699f4e5a?w=800&h=450&fit=crop",controls:!0}),e.jsxs("div",{className:"mt-4 p-4 bg-blue-50 rounded",children:[e.jsx("h3",{className:"font-semibold text-[#005196]",children:"City Council Meeting"}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Live broadcast from City Hall"})]})]})},{title:"Public Address",description:"Video player for important public addresses with download option and transcript.",code:`import { VideoPlayer } from '@ux4g/react-composite';

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
      <div className="mt-4 p-4 border border-gray-200 rounded">
        <h3 className="font-semibold text-[#005196] mb-2">
          Mayor's Public Address
        </h3>
        <p className="text-sm text-gray-600 mb-3">
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
}`,preview:e.jsxs("div",{children:[e.jsx(t,{poster:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=450&fit=crop",controls:!0}),e.jsxs("div",{className:"mt-4 p-4 border border-gray-200 rounded",children:[e.jsx("h3",{className:"font-semibold text-[#005196] mb-2",children:"Mayor's Public Address"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Important updates on city infrastructure and services"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 text-sm bg-[#005196] text-white rounded hover:bg-[#004178]",children:[e.jsx(i,{size:16}),"Download Video"]}),e.jsx("button",{className:"flex items-center gap-2 px-3 py-2 text-sm border border-[#005196] text-[#005196] rounded hover:bg-[#f5f5f5]",children:"View Transcript"})]})]})]})}],reactCode:{component:`import React, { useRef, useState, useEffect } from 'react';
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

VideoPlayer.displayName = 'VideoPlayer';`,types:`export interface Subtitle {
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
}`,variants:`// Video.js configuration and theming
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
};`},angularCode:{component:`import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player.component';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [CommonModule],
  exports: [VideoPlayerComponent]
})
export class VideoPlayerModule { }`,types:`export interface Subtitle {
  lang: string;
  label: string;
  src: string;
  default?: boolean;
}

export interface QualityOption {
  quality: string;
  url: string;
}

export type VideoQuality = 'auto' | '240p' | '360p' | '480p' | '720p' | '1080p';`},comparisons:[{system:"Video.js",component:"Video.js Player",variants:"Default player with plugins",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://videojs.com/"},{system:"Plyr",component:"Plyr",variants:"HTML5, YouTube, Vimeo",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://plyr.io/"},{system:"JW Player",component:"JW Player",variants:"Commercial player with analytics",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://www.jwplayer.com/"},{system:"YouTube Embed",component:"YouTube IFrame API",variants:"Embedded YouTube player",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://developers.google.com/youtube/iframe_api_reference"},{system:"HTML5 Video",component:"Native <video>",variants:"Browser default controls",accessibility:"Varies by browser",documentation:"MDN Documentation",link:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Closed captions and subtitles support (WCAG 1.2.2)","Audio descriptions available for complex visual content (WCAG 1.2.5)","Full keyboard navigation support (WCAG 2.1.1)","Clear focus indicators on all controls (WCAG 2.4.7)","Pause, stop, and hide controls for moving content (WCAG 2.2.2)","No autoplay with audio (WCAG 1.4.2)","Transcript availability for all video content","Time-based media alternative (WCAG 1.2.8)","Customizable playback speed for accessibility needs","High contrast mode support","Screen reader announcements for player state changes","ARIA labels and roles for all interactive elements"],keyboardSupport:[{key:"Tab",action:"Navigate between controls"},{key:"Space / K",action:"Play/Pause video"},{key:"Enter",action:"Activate focused control"},{key:"Left Arrow / J",action:"Rewind 10 seconds"},{key:"Right Arrow / L",action:"Forward 10 seconds"},{key:"Up Arrow",action:"Increase volume"},{key:"Down Arrow",action:"Decrease volume"},{key:"M",action:"Toggle mute"},{key:"F",action:"Toggle fullscreen"},{key:"C",action:"Toggle captions"},{key:"0-9",action:"Jump to percentage of video"},{key:"Home",action:"Jump to beginning"},{key:"End",action:"Jump to end"}],screenReader:["Announces video title and duration","Announces current playback time and remaining time","Announces play/pause state changes","Announces volume level changes","Announces when entering/exiting fullscreen","Announces caption track changes","Announces buffering and loading states","Provides accessible labels for all controls"]},tokens:{file:"/tokens/components/video-player.json",mappings:[{property:"Player Background",token:"component.videoPlayer.background",value:"#000000"},{property:"Control Bar Background",token:"component.videoPlayer.controlBar.background",value:"rgba(0, 0, 0, 0.7)"},{property:"Control Bar Height",token:"component.videoPlayer.controlBar.height",value:"48px"},{property:"Primary Accent",token:"component.videoPlayer.accent.primary",value:"#005196 (Navy 500)"},{property:"Progress Bar Fill",token:"component.videoPlayer.progressBar.fill",value:"#005196 (Navy 500)"},{property:"Big Play Button Size",token:"component.videoPlayer.bigPlayButton.size",value:"80px"},{property:"Big Play Button Background",token:"component.videoPlayer.bigPlayButton.background",value:"rgba(0, 81, 150, 0.8)"},{property:"Control Icon Size",token:"component.videoPlayer.icon.size",value:"24px"},{property:"Caption Font Size",token:"component.videoPlayer.caption.fontSize",value:"16px"},{property:"Caption Background",token:"component.videoPlayer.caption.background",value:"rgba(0, 0, 0, 0.8)"},{property:"Focus Ring Color",token:"accessibility.focusRing.color",value:"#005196"},{property:"Focus Ring Width",token:"accessibility.focusRing.width",value:"2px"}]}})}export{m as default};
