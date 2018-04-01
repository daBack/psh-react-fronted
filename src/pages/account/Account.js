import React, {Component} from 'react';
import EditProfile from '../../components/account/EditProfile'
import PaymentService from '../../components/account/PaymentService'

const accountWrapper = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridColumnGap: '20px',
  gridRowGap: '20px',
  gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
  // width: '60%',
  padding: '5%',
  backgroundColor: '#ececec',
}

class Account extends Component {

  render() {
    return (
      <div style={accountWrapper} className="account-wrapper">
        <EditProfile/>
        <PaymentService/>
      </div>
    );
  }
}

export default Account;
