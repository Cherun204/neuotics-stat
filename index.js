import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './global.css'; // Import the global CSS file
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);