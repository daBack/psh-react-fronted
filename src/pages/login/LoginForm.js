import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

import  { connect } from 'react-redux'
import { addUser } from '../../actions/loginAction'

const p = {
  color: '#e96c56'
}

class Login extends Component {

  constructor(props){
      super(props)
      this.state = {
        username: "",
        password: "",
        submitted: false
      };
  }

  handleChangeUser(event){
    this.setState({username: event.target.value});
  }

  handleChangePass(event){
    this.setState({password: event.target.value});
  }

  submit(){
    if (this.state.username && this.state.password === "") {
      console.log("No account details has been distributed.");
    }
    else {
      this.props.dispatch(addUser(this.state.username, this.state.password))
      this.setState({
        submitted: true
      })
    }
  }

  render() {
    return (
      <div className="login-inner-wrapper">
        <div className="login-title">
          <h1>Välkommen!</h1>
        </div>
        <form className="login-box" onSubmit={this.submit.bind(this)}>
          <input value={this.state.username} onChange={this.handleChangeUser.bind(this)} type="text" className="login-input" placeholder="Användarnamn" required></input>
          <input value={this.state.password} onChange={this.handleChangePass.bind(this)} type="password" className="login-input" placeholder="Lösenord" required></input>
          {this.props.infoM !== null && (
            <p style={p}>{this.props.infoM}</p>
          )}
          <div className="lower">
          <button><p>Logga in</p></button>
            <a href="/">Glömt dina inloggningsuppgifter?</a>
          </div>
          {this.state.submitted === true && (
            <Redirect to={'/loginValidate'}/>
          )}
        </form>
      </div>
    );
  }
}

export default connect((store) => {
  console.log(store.login.infoMessage);
  return {
    userInfo: store.login.loginInfo,
    infoM: store.login.infoMessage,
    foo: 1
  }
})(Login);
