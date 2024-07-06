import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css';
import "primereact/resources/themes/lara-light-green/theme.css";
import 'primeicons/primeicons.css';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>,
)
