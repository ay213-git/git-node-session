import React from 'react';
import {BrowserRouter }  from 'react-router-dom';
import { PrimeReactProvider } from "primereact/api";
// import "primereact/resources/themes/lara-light-teal/theme.css";


import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

import './index.css';
import './flags.css';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode >

);

