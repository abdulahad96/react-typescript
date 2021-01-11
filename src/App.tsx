import React from 'react';
import Demo from './demoComponent';
import './App.css';
import BackgroundMusicProvider from './context/BackgroundMusic.context';
import { Auth0Provider } from '@auth0/auth0-react';
function App() {

  return (
    <Auth0Provider
    domain="winnerwinner-dev.auth0.com"
    clientId="pN5QOU9yxeNY8XxrKx2lDOTjtNAMBq3Y"
    redirectUri={'https://localhost:3000'}
  >
    <BackgroundMusicProvider>
      <Demo />
    </BackgroundMusicProvider>
    </Auth0Provider>
  );
}

export default App;
