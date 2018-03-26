import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { DefaultLayout, LoginLayout, AuthRoute, LoggingInRoute } from "./pages/Layout";
import Info from "./pages/Info"
import Login from "./pages/login/Login"
import Account from "./pages/account/Account"
import LoginValidate from './pages/login/LoginValidate'

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Switch>
                <AuthRoute path="/info" component={Info} />
                <DefaultLayout path="/account" component={Account} />
                <LoginLayout path="/Login" component={Login} />
                {/* <LoggingInRoute path="/LoginValidate" component={LoginValidate} /> */}
                <LoginLayout path="/LoginValidate" component={LoginValidate} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
