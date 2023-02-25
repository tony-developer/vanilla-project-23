import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {splitInWords} from "./01-hello-tests/01";
import {StudentType} from "./02/02";

const sentence = "Hello my friend!";

const result = splitInWords(sentence)
console.log(result[0] === 'hello')
console.log(result[1] === 'my')
console.log(result[2] === 'friend!')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
