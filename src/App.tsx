import React from 'react';
import logo from './logo.svg';
import Demo from './demoComponent';
import './App.css';
import BackgroundMusicProvider from './context/BackgroundMusic.context';
function App() {

  return (
    <BackgroundMusicProvider>
      <Demo />
    </BackgroundMusicProvider>
  );
}

export default App;
