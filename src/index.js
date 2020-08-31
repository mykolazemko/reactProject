import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State'

let postText = [
  {id: 1, text: 'Post_1'},
  {id: 2, text: 'Post_2'},
  {id: 3, text: 'Post_3'},
  {id: 4, text: 'Post_4'},
  {id: 5, text: 'Post_5'}
]  
let messageText = [
  {id: 1, text: 'message1'},
  {id: 2, text: 'message2'},
  {id: 3, text: 'message3'},
  {id: 4, text: 'message4'},
  {id: 5, text: 'message5'}
]
let dialogMembers = [
  {id: 1, name: 'User1'},
  {id: 2, name: 'User2'},
  {id: 3, name: 'User3'},
  {id: 4, name: 'User4'},
  {id: 5, name: 'User5'},
]

ReactDOM.render(
  <React.StrictMode>
    <App state = {state} messageText = {messageText} dialogMembers = {dialogMembers}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
