import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Music from './Components/Music/Music';
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';
import News from './Components/News/News'
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header className='header' />
        <Sidebar className='header' />
        <div>
          <Route path="/profile" component = {Profile} />
          <Route path="/messages" component = {Messages} />
          <Route path="/music" component = {Music} />
          <Route path="/news" component = {News} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
