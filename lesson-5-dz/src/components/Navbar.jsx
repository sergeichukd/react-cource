import React from 'react'
import StoreIcon from '@material-ui/icons/Store'
import Button from '@material-ui/core/Button';

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
            <Button id='log-in' variant="outlined" color="white" color='disabled' size='small'>
              Вход
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
