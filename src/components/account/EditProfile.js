import React, {Component} from 'react'
import { Link } from 'react-router-dom'

const accountProfile = {
    display: 'flex',
    flexDirection: 'column',
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '3',
    backgroundColor: '#fcfcfc',
    padding: '10%',
    borderBottom: '5px solid #26B225',
}

const title = {
  color: '#4e4e4e',
  fontSize: '1em',
}

const p = {
  color: '#242323',
}

const h2 = {
  textTransform: 'uppercase',
  fontSize: '1em',
  color: '#26B225',
  marginBottom: '5%',
}

const aI = {
  borderBottom: '1px solid #e2e2e2',
  padding: '3% 0'
}

class EditProfile extends Component {
    render() {
        return (
          <div style={accountProfile} className="account-profile">
            <h2 style={h2}>Profil översikt</h2>
            <div style={aI} className="account-item">
                <p style={title} >Mail</p>
                <p style={p} >test@kappa.com</p>
            </div>
            <div style={aI} className="account-item">
                <p style={title}>Kontot skapades</p>
                <p style={p}>2018-01-05</p>
            </div>
            <div className="link-wrapper">
              <Link className="account-link-style" to="/account/edit">Ändra uppgifter</Link>
            </div>
          </div>
        );
    }
}

export default EditProfile;
