import React,{useContext,useEffect} from 'react';
import {winnerLogo} from './assets/images';
import './App.css';
import { BackgroundMusicContext } from './context/BackgroundMusic.context';
import { useAuth0 } from '@auth0/auth0-react';

const Demo = (props:any) => {
  const { loginWithRedirect , getAccessTokenSilently} = useAuth0();
const {playBackgroundMusic} = useContext(BackgroundMusicContext)
useEffect(()=>{

  playBackgroundMusic()
},[])
  return (
      <div className="App">
        <header className="App-header">
          <img src={winnerLogo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => loginWithRedirect()}>Log In</button>;
        </header>
      </div>    
  );
}

export default Demo;
