import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.scss';
import { StateProvider } from './components/store.js';

const app = (
  <StateProvider>
    <App />
  </StateProvider>
)

ReactDOM.render(app, document.getElementById('root'));

