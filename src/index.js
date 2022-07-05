import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  //</React.StrictMode>
  //* StrictMode doesn't work with React-Router V5 and React V18
);
