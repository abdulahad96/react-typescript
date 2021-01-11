/* eslint-disable react-hooks/rules-of-hooks */
/* istanbul ignore file */
import React, { createContext, useContext, useState } from 'react';

import { playSound, SOUNDS, pauseSound } from '../soundUtils';
import { APP_STATE, ANALYTICS_EVENTS, LOCAL_STORAGE_NAME } from '../constants';




export interface backgroundMusic {
  musicEnabled: Boolean,
  isLobbyMusicPlaying: Boolean,
  isSoundEffectEnabled: Boolean,
  setMusicEnable: (musicEnable: boolean) => void,
  playBackgroundMusic: () => void,
  setIsSoundEffectEnabled: (isSoundEffectEnabled:boolean) => void,
  pauseBackgroundMusic:()=>void,
  playMusic: (music:any)=>void,
  playSoundEffect: (soundEffect: any)=>void
}
export const musicContextDefaultValue: backgroundMusic = {
  musicEnabled: true,
  isLobbyMusicPlaying: true,
  isSoundEffectEnabled: true,
  setMusicEnable: (musicEnable: boolean) => {},
  playBackgroundMusic: ()  => {},
  setIsSoundEffectEnabled: (isSoundEffectEnabled:boolean) => {},
  pauseBackgroundMusic:()=>{},
  playMusic: (music:any)=>{},
  playSoundEffect: (soundEffect: any)=>{}
}

export const BackgroundMusicContext = createContext<backgroundMusic>(musicContextDefaultValue);


const backgroundMusicProvider = (props:any) => {
  const {children} = props;
  const [musicEnabled, setMusicEnable] = useState<boolean>(true);
  const [isLobbyMusicPlaying, setIsLobbyMusicPlaying] = useState<boolean>(false);
  const [isSoundEffectEnabled, setSoundEffectEnabled] = useState<boolean>(true);

 const playBackgroundMusic = (callback = () => {}) => {
     if (musicEnabled && !isLobbyMusicPlaying) {
      playSound(SOUNDS.LOBBY_BACKGROUND_MUSIC, callback);
    setIsLobbyMusicPlaying(true)
    }
  };

  const playMusic = (music:any) => {
    if (musicEnabled) {
      playSound(music);
    }
  };

  const pauseBackgroundMusic = (callback = () => {}) => {
    if (isLobbyMusicPlaying) {
      pauseSound(SOUNDS.LOBBY_BACKGROUND_MUSIC, callback);
      setIsLobbyMusicPlaying(false)
    }
  };

 const setMusicEnabled = (isMusicEnabled: any) => {
 
    
      if (isMusicEnabled) {
        playBackgroundMusic();
      } else {
        pauseBackgroundMusic();
      }
 
  };

 const  setIsSoundEffectEnabled = (isSoundEffectEnabled: any) => {
    
  setSoundEffectEnabled(true);
  };

 const playSoundEffect = (soundEffect: any) => {
    if (isSoundEffectEnabled) {
      playSound(soundEffect);
    }
  };


  return (
    <BackgroundMusicContext.Provider value={{
      musicEnabled,
      isLobbyMusicPlaying,
      isSoundEffectEnabled,
      setMusicEnable: setMusicEnabled,
      playBackgroundMusic: playBackgroundMusic,
      pauseBackgroundMusic: pauseBackgroundMusic,
      setIsSoundEffectEnabled: setIsSoundEffectEnabled,
      playMusic: playMusic,
      playSoundEffect: playSoundEffect
    }}>
      {children}
    </BackgroundMusicContext.Provider>
  )
}

export default backgroundMusicProvider;





export const withBackgroundMusic = (Wrapped:any) => (props:any) => (
  <BackgroundMusicContext.Consumer>
    {value => <Wrapped {...props} backgroundMusicContextValue={value} />}
  </BackgroundMusicContext.Consumer>
);