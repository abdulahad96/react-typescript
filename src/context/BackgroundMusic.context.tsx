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
  setIsLobbyMusicPlaying: (isLobbyMusicPlaying: boolean) => void,
  setIsSoundEffectEnabled: (isSoundEffectEnabled: boolean) => void
}

const BackgroundMusicContext = createContext<backgroundMusic | null>(null);


const backgroundMusicProvider = (props:any) => {
  const {children} = props;
  const [musicEnabled, setMusicEnable] = useState(false);
  const [isLobbyMusicPlaying, setIsLobbyMusicPlaying] = useState(false);
  const [isSoundEffectEnabled, setIsSoundEffectEnabled] = useState(false);
  return (
    <BackgroundMusicContext.Provider value={{
      musicEnabled,
      isLobbyMusicPlaying,
      isSoundEffectEnabled,
      setMusicEnable,
      setIsLobbyMusicPlaying,
      setIsSoundEffectEnabled
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