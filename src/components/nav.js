import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (<nav className="menu">
            <div className="seg segment-1">
                <h2>Payment Solution Hub</h2>
            </div>

            <div className="seg segment-2">
                <NavLink to="/info" activeClassName="active-nav" className="inner-seg-link">
                    <i className="fas fa-archive"></i>
                    {/* <h4>Fakturor</h4> */}
                </NavLink>

                <NavLink to="/test" activeClassName="active-nav" className="inner-seg-link">
                    <i className="fas fa-file"></i>
                    {/* <h4>Logg</h4> */}
                </NavLink>

                <NavLink to="/account" activeClassName="active-nav" className="inner-seg-link">
                    <i className="fas fa-user"></i>
                    {/* <h4>Konto</h4> */}
                </NavLink>
            </div>
        </nav>);
    }
}

export default Nav;
