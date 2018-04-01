import React from "react"
import {Route, Redirect} from 'react-router-dom'
import Nav from '../components/nav'
import Sidemenu from '../components/Sidemenu'

/*
 * [Default layout for most of the routes. Will render navbar and footer (if any).]
 * @param {[Class]} component [Which component will be rendered.]
 * @param {[Props]} rest      [Rest of the props (if any) except component.]
 */
export const DefaultLayout = ({
  component: Component,
  ...rest
}) => {
  return (<Route {...rest} render={matchProps => (<div className="DefaultLayout">
      <Nav/>
      <Component {...matchProps}/>
    </div>)}/>)
};

/*
 * [Login layout for login page. same as default but without nav and footer (if any)]
 * @param {[Class]} component [Which component will be rendered.]
 * @param {[Props]} rest      [Rest of the props (if any) except component.]
 */
export const LoginLayout = ({
  component: Component,
  ...rest
}) => {
  return (<Route {...rest} render={matchProps => (<div className="LoginLayout">
      <Component {...matchProps}/>
    </div>)}/>)
};

/*
 * [Auth route, for all routes where being logged in is required.]
 * @param {[Class]} component [Which component will be rendered.]
 * @param {[Props]} rest      [Rest of the props (if any) except component.]
 */
export const AuthRoute = ({
  component: Component,
  ...rest
}) => {
  return (<Route {...rest} render={(matchProps) => (
      // TODO: Call method to check if user is logged in or not
      true
      ? <div><Nav/><Component {...matchProps}/></div>
      : <Redirect to={{
          pathname: '/login',
          state: {
            from: matchProps.location
          }
        }}/>)}/>)
};

/*
 * [ACCOUNT layout for the account routes. Will render navbar and footer (if any). Also sidebar.]
 * @param {[Class]} component [Which component will be rendered.]
 * @param {[Props]} rest      [Rest of the props (if any) except component.]
 */
export const AccountLayout = ({
  component: Component,
  ...rest
}) => {
  return (<Route {...rest} render={matchProps => (<div className="account-layout">
      <Nav/>
      <div className="account-overview">
        <Sidemenu/>
        <Component {...matchProps}/>
      </div>
    </div>)}/>)
};
