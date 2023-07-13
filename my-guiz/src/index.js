import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { AuthProvider } from './component/AuthProvider'; 
import App from './App';
/** Redux Store */
import store from './component/store';
import { Provider } from 'react-redux';
import axios from 'axios'

axios.defaults.withCredentials = true


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <Provider store={store}>
    <App />
  </Provider>
  </AuthProvider>
);



