import React from 'react';
import Menu from '../components/Menu.jsx'
import MenuItem from '../components/MenuItem.jsx'

export default class Layout extends React.Component {
  constructor() {
    super(...arguments)
    this.brand = 'ReactJS Blog'
  }

  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return (
      <div>
        <Menu brand={this.brand}>
          <MenuItem href='/' active={this.isActive('/')}>Main</MenuItem>
          <MenuItem href='/users' active={this.isActive('/users')}>Users</MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {this.props.children}
            </div>
          </div>
        </div>
        <footer className='container'>
          <hr/>
          &copy; 2018
        </footer>
      </div>
    )
  }
}
