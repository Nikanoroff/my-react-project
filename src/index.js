import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


