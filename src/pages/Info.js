import React, { Component } from 'react'
import Display from "../components/display"
import Toast from "../components/Toast"
import InfoLabel from '../components/InfoLabel'
import Update from '../components/Update'

import  { connect } from 'react-redux'
import { addUser, fetchUser } from '../actions/loginAction'

const dbStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gridColumnStart: '2',
  gridColumnEnd: '4',
  alignItems: 'center',
  color: '#242323',
}

const header = {
  fontSize: '3em',
  textTransform: 'uppercase',
}

class Info extends Component {

  componentWillMount(){
      // this.props.dispatch(addUser("hej", "da"))
      // this.props.dispatch(fetchUser())
}

  render() {
      // if (!this.state.requestFailed) return <p> Failed </p>
      // if (!this.state.butt) return <p>Loading...</p>
      // console.log(this.props);
    return (
      <div className="info-wrapper">
        <InfoLabel title="Lyckade matchingar:" classes="info-box green" icon="fas fa-check-circle" data="34"/>
        <InfoLabel title="Manuella matchingar:" child="info-label 2" classes="info-box warning" icon="fas fa-times-circle" data="3"/>
        <InfoLabel title="Senaste matchingen inträffade:" classes="info-box blue" icon="fas fa-clock" data="21:30 - 4 maj"/>
        <InfoLabel title="Automatisk matchning:" classes="info-box orange" icon="fas fa-calendar-alt" data="Idag, 21:30"/>
        <div style={dbStyle}>
          <h2 style={header}>Dashboard</h2>
          <p>En vy över den mest väsentliga datan. För mer information, ... </p>
        </div>
        <Update/>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    userInfo: store.login.loginInfo,
    foo: 1
  }
})(Info);
