import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
let render = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <App 
          state = {state}
          dispatch = {store.dispatch.bind(store)}
         />
      </BrowserRouter>,
      document.getElementById('root')
    );
  }

render(store.getState());
store.subscribe(() => {
  let state = store.getState();
  render(state)
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
