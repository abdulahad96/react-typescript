import React from 'react';
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
