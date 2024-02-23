import React from "react";
import HomeView from "./views/Home";
import Navbar from "./components/Navbar";
import LoginView from "./views/Login";
import { Provider } from 'react-redux';
import RegisterView from "./views/Register";
import SettingsView from "./views/Settings";
import ChatView from './views/Chat';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import configureStore from './store';

const store = configureStore();
export default function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div className='content-wrapper'>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/chat/:id">
            <ChatView />
          </Route>
          <Route path="/settings">
            <SettingsView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}
