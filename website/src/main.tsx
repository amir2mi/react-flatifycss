import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastsWrapper } from 'react-flatifycss';
import App from './App';
import 'flatifycss/dist/css/flatify-min.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastsWrapper />
    <App />
  </React.StrictMode>
);
