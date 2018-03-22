import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import Nav from '../components/nav'

import { connect } from 'react-redux'

export const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
        <div className="DefaultLayout">
            <Nav />
            <Component {...matchProps} />
      </div>
    )} />
  )
};

export const LoginLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
        <div className="LoginLayout">
            <Component {...matchProps} />
      </div>
    )} />
  )
};

export const LoggingInRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        // TODO: Call LOGIN ROUTE, if good do, login.
        // true
        // ? <Redirect to ={{
        //   pathname: '/info'
        // }} />
        // : <Redirect to={{
        //     pathname: '/login',
        //     state: { from: matchProps.location }
        //   }} />
        <div>
          <Component {...matchProps} />
        </div>
      )} />
    )
};

export const AuthRoute = ({ component: Component, ...rest }) => {
  return (
  <Route {...rest} render={(matchProps) => (
    // TODO: Call method to check if user is logged in or not
    true
      ? <div><Nav/><Component {...matchProps} /></div>
      : <Redirect to={{
          pathname: '/login',
          state: { from: matchProps.location }
        }} />
  )} />
  )
};
