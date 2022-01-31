import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import RouteSwitch from './components/RouteSwitch';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { store } from "../src/state/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <RouteSwitch />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
