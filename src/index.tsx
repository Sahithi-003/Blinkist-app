import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const Mydomain= "dev-jbj2cct4.us.auth0.com";
const Myclient="XlkC1j76D7e2KBbdT7x92rPqep6Yc24g";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={Mydomain}
      clientId={Myclient}
      redirectUri={window.location.origin}
      useRefreshTokens
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
reportWebVitals();