import React from 'react'
import StoreIcon from '@material-ui/icons/Store'
import LoginModalWindow from './LoginModalWindow.jsx'
import SigninModalWindow from './SigninModalWindow.jsx'

export default class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div className="navbar-container">
          <div id="navbar-header">
            <StoreIcon style={{ color: 'white' }}/>
            <span>
              Plan Eat
            </span>
          </div>
          <div id="personalization">
            <SigninModalWindow />
            <LoginModalWindow />
          </div>
        </div>
      </div>
    )
  }
}
