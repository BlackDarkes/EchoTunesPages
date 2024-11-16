/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import EchoTunes from './Pages/EchoTunesPage/EchoTunes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EchoTunes/>
    </BrowserRouter>
  </React.StrictMode>
);
