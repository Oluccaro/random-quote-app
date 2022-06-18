import React from 'react';
import { createRoot } from 'react-dom/client';
import {App} from './App.js';
import './App.css'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div id='root'>
    <div id='wrapper'> <App/> </div>
    <div id="signature">
      <p id="sig">Designed and coded by <a href="https://www.freecodecamp.org/lucoder" title="freeCodeCamp profile" target="_blank"> Lucas Fracaro</a> </p>
    </div>
  </div>
  </React.StrictMode>
);
