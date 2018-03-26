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



/**
 * [Default layout for most of the routes. Will render navbar and footer (if any).]
 * @param {[Class]} component [Which component will be rendered.]
 * @param {[Props]} rest      [Rest of the props (if any) except component.]
 */
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



/**
 * [Login layout for login page. same as default but without nav and footer (if any)]
 * @param {[Class]} component [Which component will be rendered.]
 * @param {[Props]} rest      [Rest of the props (if any) except component.]
 */
export const LoginLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
        <div className="LoginLayout">
            <Component {...matchProps} />
      </div>
    )} />
  )
};



/**
 * [Login route with check if user exists and credentials are correct. No visual]
 * @param {[Class]} component [Which component will be rendered.]
 * @param {[Props]} rest      [Rest of the props (if any) except component.]
 */
export const LoggingInRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        // TODO: Call loginaction method. return true if good.
        true
        ? <Redirect to ={{
          pathname: '/info'
        }} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: matchProps.location }
          }} />
        // <div>
        //   <Component {...matchProps} />
        // </div>
      )} />
    )
};



/**
 * [Auth route, for all routes where being logged in is required.]
 * @param {[Class]} component [Which component will be rendered.]
 * @param {[Props]} rest      [Rest of the props (if any) except component.]
 */
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
