import React, { useEffect } from 'react';
import HomeView from "./views/Home";
import Navbar from "./components/Navbar";
import { Provider } from 'react-redux';
import WelcomeView from './views/Welcome';
import SettingsView from "./views/Settings";
import ChatView from './views/Chat';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import configureStore from './store';
import { listenToAuthChanges } from './actions/auth';
const store = configureStore();
export default function App() {
  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, [])

  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div className='content-wrapper'>
        <Switch>
          <Route path="/" exact>
          <WelcomeView />
            </Route>
            <Route path="/home">
            <HomeView />
          </Route>
          <Route path="/chat/:id">
            <ChatView />
          </Route>
          <Route path="/settings">
            <SettingsView />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}
