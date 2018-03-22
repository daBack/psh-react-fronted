import React, {Component} from 'react';

class Toast extends Component {

  constructor(props){
      super(props)
      this.state = {
          requestFailed : false,
          butt: 3,
          toastMessage: 0,
          class: "toast"
      }
  }

  changeToast(){
      let msg = this.state.butt + " fakturor har uppdaterats.";
      console.log(this.state.butt);
      this.setState({
          toastMessage: msg,
          class: "toast-active",
      })
      setTimeout(() => {
          this.setState({ class: "toast" });
      }, 3100);

  }

  // componentDidMount(){
  //     fetch('http://localhost:5000/api/payments/update', {
  //         method: 'GET',
  //         credentials: 'same-origin',
  //         mode: 'no-cors',
  //         headers: new Headers({
  //             "ClientID": 'admin',
  //             "ClientSecret": 'admin'
  //         })
  //     })
  //     .then(res => {
  //         console.log(res.status);
  //         console.log(res.ok);
  //         console.log(res.statusText);
  //         if (!res.ok) {
  //             throw Error("Something went wrong")
  //         }
  //         else if (res.status == 401) {
  //             console.log("hej");
  //             this.setState({
  //                 butt: "Unauthorized"
  //             })
  //         }
  //         return res
  //     })
  //     .then(res => res.json())
  //     .then(res => {
  //         this.setState({
  //             butt : res
  //         })
  //         }, () => {
  //             this.setState({
  //                 requestFailed: true
  //             })
  //         })
  //     }

  render() {
    return (
      <div className="toast-button">
        <div className={this.state.class}>
            <i className="fas fa-check-circle"></i>
            <div className="toast-message">{this.state.toastMessage}</div>
        </div>

        <button onClick={this.changeToast.bind(this)}>
          <i className="fas fa-caret-right"></i>
          <p>Uppdatera</p>
        </button>
      </div>
    );
  }
}

export default Toast;
