import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'flatifycss/dist/css/flatify-min.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
