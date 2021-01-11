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
  LOBBY_BACKGROUND_MUSIC: new UIfx(lobbyBackgroundMusic,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  BLUE_BUTTON: new UIfx(blueButtonAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  COUNT_DOWN: new UIfx(countDownAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  DOWN_BUTTON: new UIfx(downButtonAudio,
    {
      volume: 0.4, // number between 0.0 ~ 1.0
      throttleMs: 100
    }),
  GAME_LOST: new UIfx(gameLostAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  GAME_PLAY_MUSIC: new UIfx(gamePlayMusic,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  GAME_WON: new UIfx(gameWonAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  GREEN_BUTTON: new UIfx(greenButtonAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  LEFT_BUTTON: new UIfx(leftButtonAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  MINOR_BUTTON: new UIfx(minorButtonAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  NEGATIVE_POPUP: new UIfx(negativePopupSound,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  PLAY_GRAB_BUTTON: new UIfx(playGrabButtonAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  POSITIVE_POPUP: new UIfx(positivePopupSound,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  PURCHASE_TOKENS: new UIfx(purchaseTokensSound,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  RIGHT_BUTTON: new UIfx(rightButtonAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }),
  UP_BUTTON: new UIfx(upButtonAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  })
};

export const playSound = (sound:any, successCallback = () => {}) => {
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  // if (sound.isLoaded()) {
    // sound.setCategory(SOUND_CATEGORY.AMBIENT);
    // sound.setSpeakerphoneOn(true);
    sound.play(1.0)
    //   () => {
    //   sound.reset();
    //   successCallback();
    // });
  // }
};

export const pauseSound = (sound:any, callback = () => {}) => {
  if (sound.isPlaying()) {
    sound.setCategory(SOUND_CATEGORY.AMBIENT);
    sound.setSpeakerphoneOn(true);
    sound.pause(callback);
  }
};
