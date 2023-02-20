import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { App } from './App';
import GlobalContextProvider from './context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './globalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer autoClose={8000} newestOnTop={true} closeOnClick draggable pauseOnHover theme="colored" />
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
);
