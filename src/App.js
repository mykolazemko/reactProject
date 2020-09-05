import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Music from './Components/Music/Music';
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';
import News from './Components/News/News';
import Friends from './Components/Friends/Friends';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';



function App(props) {
  const profile = () => <Profile
    state = {props.state}
    addPost = {props.addPost}
    updateNewPostText = {props.updateNewPostText}/>
  const messages = () => <Messages 
    state = {props.state}
    updateMessageText = {props.updateMessageText}
    sendMessage = {props.sendMessage}/>;
  const music = () => <Music/>;
  const news = () => <News/>;
  const friends = () => <Friends state = {props.state}/>;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header className='header' />
        <Sidebar className='header' />
        <div>
          <Route path="/profile" render = {profile}/>
          <Route path="/messages" render = {messages}/>
          <Route path="/music" render = {music}/>
          <Route path="/news" render = {news}/>
          <Route path="/friends" render = {friends}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
