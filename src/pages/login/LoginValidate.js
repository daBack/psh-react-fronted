import React, {Component} from 'react';
import  { connect } from 'react-redux'
import { addUser, fetchUser, loginUser } from '../../actions/loginAction'
import { addAuth } from '../../actions/authAction'
import { Redirect } from 'react-router-dom'

class LoginValidate extends Component {
  constructor(props){
    super(props)
    this.state= {
      accepted: null
    }
  }
  componentWillMount(){
    // TODO: If returned right, return true and set clientid and ClientSecret
    // if not right, set infomessage to wrong pass and redirect to start..
    // also show message there.
    console.log(this.props.userInfo);
    const res = this.props.dispatch(loginUser(this.props.userInfo.username, this.props.userInfo.password))
    if (res) {
      if (res.code == 200) {
        let uID = res.data.clientID;
        let uSecret = res.data.clientSecret;
        this.props.dispatch(addAuth(uID, uSecret))
        this.setState({
          accepted: true
        })
      } else {
        this.setState({
          accepted: false
        })
      }
    } else {
      console.log("Attans då");
    }
  }

  render() {
    if (!this.state.accepted) {
      return '<p>Loading</p>';
    } else if (this.state.accepted == true) {
      return true;
    } else if (this.state.accepted == false) {
      return false;
    }
    return (
      <h1>Logging in..</h1>
    );
  }
}

export default connect((store) => {
  return {
    userInfo: store.login.loginInfo,
    foo: 1
  }
})(LoginValidate);
