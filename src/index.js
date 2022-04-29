import React from 'react';
import ReactDOM from 'react-dom';

import { StateProvider } from './StateProvider';
import reducer, { inicialState } from './reducer';

import App from './App';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





ReactDOM.render(
  <React.StrictMode>
    <StateProvider inicialState={inicialState} reducer={reducer}>
      <App />
    </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


