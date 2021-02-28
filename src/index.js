import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dataBase from './components/dataBase/dataBase.json';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <App initialValue={dataBase} />
  </React.StrictMode>,
  document.getElementById('root'),
);
