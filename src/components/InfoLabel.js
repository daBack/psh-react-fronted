import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';

class InfoLabel extends Component {
    render() {
        return (
            <div className={this.props.classes}>
              <i className={this.props.icon}></i>
              <div className="info-updated data">
                <p className="data-row">{this.props.title}</p>
                <p>{this.props.data}</p>
              </div>
            </div>
        );
    }
}

export default InfoLabel;
