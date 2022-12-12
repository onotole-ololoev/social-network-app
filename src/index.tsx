import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from "./state/state";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);
