import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import H1Counter from './H1Counter';
import H2CounterList from './H2CounterList';
import H3CounterSum from './H3CounterSum';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <H1Counter />
    <H2CounterList />
    <H3CounterSum />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
