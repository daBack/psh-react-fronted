import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

import { LoginLayout, AuthRoute, AccountLayout } from "./pages/Layout";
import Info from "./pages/Info"
import Login from "./pages/login/Login"
import Account from "./pages/account/Account"
import Accounting from './pages/account/Accounting'
import LoginValidate from './pages/login/LoginValidate'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/info" />
        <AuthRoute path="/info" component={Info} />
        <AccountLayout exact path="/account" component={Account} />
        <LoginLayout path="/Login" component={Login} />
        {/* <LoggingInRoute path="/LoginValidate" component={LoginValidate} /> */}
        <LoginLayout path="/LoginValidate" component={LoginValidate} />
        <AccountLayout path="/account/accounting" component={Accounting} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
