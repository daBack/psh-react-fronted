import React, {Component} from 'react'
import  { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser, zeroLoggedIn} from '../../actions/loginAction'

class LoginValidate extends Component {
  constructor(props){
    super(props)
    this.state= {
      accepted: null
    }
  }
  componentWillMount(){
    const test = async () => {
      await this.props.dispatch(loginUser(this.props.userInfo.username, this.props.userInfo.password))
    }
    console.log("först?");
    console.log(this.props.goOn);
    console.log("först?");
    test();
  }

  componentDidMount(){
    console.log("andra?");
    console.log(this.props.goOn);
    console.log("andra?");
  }

  render() {
    if (this.state.accepted === true) {
      return <Redirect to="/info" />
    } else if (this.state.accepted === false) {
      return <Redirect to="/login" />
    }
    if (this.props.goOn === true) {
      this.setState({
        accepted: true
      })
    } else if (this.props.goOn === false) {
      this.setState({
        accepted: false
      })
      {this.props.dispatch(zeroLoggedIn())}
    }
    return (
      <h1>Logging in..</h1>
    );
  }
}

export default connect((store) => {
  console.log(store.login.loggedIn);
  console.log("hej");
  return {
    userInfo: store.login.loginInfo,
    goOn: store.login.loggedIn,
    foo: 1
  }
})(LoginValidate);
