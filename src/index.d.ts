import { YoutubePlayerBase } from './youtubeplayer.common';
export declare class YoutubePlayer extends YoutubePlayerBase {
  play(): void;
  stop(): void;
  destroy(): void;
  pause(): void;
  isPlaying(): boolean;
  toggleFullscreen(): void;
  options: any;
  readonly isFullScreen: boolean;
}

export { 
  FULLSCREEN_EVENT,
  PLAYING_EVENT,
  PAUSED_EVENT,
  STOPPED_EVENT,
  BUFFERING_EVENT,
  LOADING_EVENT,
  ADSTARTED_EVENT,
  STARTED_EVENT,
  ENDED_EVENT,
  VIDEO_LOADED_EVENT,
  ERROR_EVENT,
  SEEK_EVENT,
  INITIALIZED_EVENT
} from "./youtubeplayer.common";