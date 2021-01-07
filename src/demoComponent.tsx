import React,{useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { BackgroundMusicContext } from './context/BackgroundMusic.context';
const Demo = (props:any) => {
const {musicEnabled,isLobbyMusicPlaying} = useContext(BackgroundMusicContext)
console.log(musicEnabled)
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>    
  );
}

export default Demo;
