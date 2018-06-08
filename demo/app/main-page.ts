import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';
import { INITIALIZED_EVENT, VIDEO_LOADED_EVENT, ENDED_EVENT, YoutubePlayer } from "nativescript-youtube-player";
import { isAndroid, isIOS } from "tns-core-modules/platform";
declare const com;

export function onPlayerUILoaded({object : playerRef}) {
    const youtubePlayer = (playerRef as YoutubePlayer);

    console.log('isIOS::onPlayerUILoaded', youtubePlayer.nativeView);
    if (isIOS) {
        playerRef.on(VIDEO_LOADED_EVENT, () => {
            setTimeout(youtubePlayer.play.bind(youtubePlayer), 0);
        });
    }
    playerRef.on(INITIALIZED_EVENT, () => {
        if(isAndroid) {
            const YouTubePlayer = com.google.android.youtube.player.YouTubePlayer;
            const nativePlayer = youtubePlayer['player'];
            // nativePlayer.addFullscreenControlFlag(YouTubePlayer.FULLSCREEN_FLAG_CONTROL_SYSTEM_UI);
            nativePlayer.setFullscreenControlFlags(YouTubePlayer.FULLSCREEN_FLAG_CONTROL_SYSTEM_UI)
            // nativePlayer.setPlayerStyle(YouTubePlayer.PlayerStyle.CHROMELESS);
            youtubePlayer.play();
            if (!youtubePlayer.isFullScreen) {
                youtubePlayer.toggleFullscreen();
            }
        } else if (isIOS) {
        }
    });
}