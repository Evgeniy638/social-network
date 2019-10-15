import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import DialogsContainer from './components/main/Dialogs/DialogsContainer';
import { Route, Redirect } from "react-router-dom";
import SlidebarContainer from './components/Slidebar/SlidebarContainer';
import UsersContainer from './components/main/Users/UsersContainer';
import ProfileContainer from './components/main/Profile/ProfileContainer';
import MyHeaderContainer from './components/Header/MyHeaderContainer';
import LoginContainer from './components/main/Login/LoginContainer';
import RegistrationContainer from './components/main/Registration/RegistrationContainer';
import Loader from './assets/components/Loader/Loader';

function App(props) {
  if (!props.initialized) return <Loader/>
  
  return (
    <>
      {(props.location.pathname === '/' || props.location.pathname === '/profile') 
        ?<Redirect to={`/profile/${props.userId}`} /> 
        :null
      }

      {props.isFetching ?<Loader/> :null}

      <div className="App-wraper">
        <MyHeaderContainer />
        <SlidebarContainer />
        <div className="app-content-wraper">
          <Route path="/profile/:id" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
          <Route path="/registration" render={() => <RegistrationContainer />} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
