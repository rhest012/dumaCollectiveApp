import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/Theme'
import { HelmetProvider } from 'react-helmet-async';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        <App /> 
      </HelmetProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
