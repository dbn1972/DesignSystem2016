import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import UX4G global styles
import '@ux4g/styles';

// Import custom global styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
