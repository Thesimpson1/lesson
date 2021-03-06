import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileConteiner from './components/Profile/ProfileConteiner';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props)=> {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <HeaderContainer/>
        <Nav/>
        <div className = "app-wraper-content">

          <Route path = "/dialogs" 
            render = {() => <DialogsContainer/>} />
          <Route path = "/users" 
            render = {() => <UsersContainer/>} />

          <Route path = "/profile/:id?" 
            render = {() => <ProfileConteiner />} />
            
          <Route path = "/news" 
            render = {() => <News/>} />

          <Route path = "/music" 
            render = {() => <Music/>} />

          <Route path = "/settings" 
            render = {() => <Settings/>} />

          <Route path = "/friends" 
            render = {() => <Friends/>} />
          <Route path = "/authUser" 
            render = {() => <Login/>} />
        
          </div>
      </div>
    </BrowserRouter>
  );
}
 


export default App;
