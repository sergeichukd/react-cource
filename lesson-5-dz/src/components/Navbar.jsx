import React from 'react'
import StoreIcon from '@material-ui/icons/Store'
import LoginModalWindow from './LoginModalWindow.jsx'

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
            <span id="sign-in">
              <a href="#">Зарегистрироваться</a>
            </span>
            <LoginModalWindow />
          </div>
        </div>
      </div>
    )
  }
}
