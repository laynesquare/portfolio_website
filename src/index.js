import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { mainTheme } from './themes/mainTheme.js';
import { ThemeProvider, CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
