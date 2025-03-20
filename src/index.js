import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import './index.css';
import App from './App';

// Crea un "root" usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro del root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);