import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './theme.css';
import App from './App';
import { defineCustomElements } from 'sapient-ui-core';
import 'sapient-ui-core/dist/build/core.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

defineCustomElements()
