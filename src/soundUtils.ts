/* istanbul ignore file */
import UIfx from 'uifx';
import {
  blueButtonAudio,
  countDownAudio,
  downButtonAudio,
  gameLostAudio,
  gamePlayMusic,
  gameWonAudio,
  greenButtonAudio,
  leftButtonAudio,
  lobbyBackgroundMusic,
  minorButtonAudio,
  negativePopupSound,
  playGrabButtonAudio,
  positivePopupSound,
  purchaseTokensSound,
  rightButtonAudio,
  upButtonAudio
} from './assets/sounds';
import { SOUND_CATEGORY } from './constants';

export const SOUNDS = {
  // ensure lobby background music is the first sound loaded
  LOBBY_BACKGROUND_MUSIC: new UIfx(lobbyBackgroundMusic),
  BLUE_BUTTON: new UIfx(blueButtonAudio),
  COUNT_DOWN: new UIfx(countDownAudio),
  DOWN_BUTTON: new UIfx(downButtonAudio),
  GAME_LOST: new UIfx(gameLostAudio),
  GAME_PLAY_MUSIC: new UIfx(gamePlayMusic),
  GAME_WON: new UIfx(gameWonAudio),
  GREEN_BUTTON: new UIfx(greenButtonAudio),
  LEFT_BUTTON: new UIfx(leftButtonAudio),
  MINOR_BUTTON: new UIfx(minorButtonAudio),
  NEGATIVE_POPUP: new UIfx(negativePopupSound),
  PLAY_GRAB_BUTTON: new UIfx(playGrabButtonAudio),
  POSITIVE_POPUP: new UIfx(positivePopupSound),
  PURCHASE_TOKENS: new UIfx(purchaseTokensSound),
  RIGHT_BUTTON: new UIfx(rightButtonAudio),
  UP_BUTTON: new UIfx(upButtonAudio)
};

export const playSound = (sound:any, successCallback = () => {}) => {
  if (sound.isLoaded()) {
    sound.setCategory(SOUND_CATEGORY.AMBIENT);
    sound.setSpeakerphoneOn(true);
    sound.play(() => {
      sound.reset();
      successCallback();
    });
  }
};

export const pauseSound = (sound:any, callback = () => {}) => {
  if (sound.isPlaying()) {
    sound.setCategory(SOUND_CATEGORY.AMBIENT);
    sound.setSpeakerphoneOn(true);
    sound.pause(callback);
  }
};
