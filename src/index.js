import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import RouteSwitch from './components/RouteSwitch';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
