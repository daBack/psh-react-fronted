import React, {Component} from 'react'
import { Link } from 'react-router-dom'

const serviceProfile = {
    display: 'flex',
    flexDirection: 'column',
    gridColumnStart: '1',
    gridColumnEnd: '5',
    gridRowStart: '3',
    gridRowEnd: '4',
    backgroundColor: '#fcfcfc',
    padding: '5%',
    borderBottom: '5px solid #26B225',
}

class PaymentService extends Component {
    render() {
        return (
          <div style={serviceProfile} className="account-profile">
            <p>halålå</p>
          </div>
        );
    }
}

export default PaymentService;
