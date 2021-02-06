import React from 'react'

import MenuItem from './MenuItem.jsx'


export default class Menu extends React.Component {
  render() {
    let menuItems = this.props.menuItems.map((menuItem, index) => {
      console.log('menuItem', menuItem, 'index', index)
      return (
      <li key={index}>
        <MenuItem
          url={menuItem.url}
        >
          {menuItem.name}
        </MenuItem>
      </li>
      )
    })

    return (
      <div className="menu">
        <ul>
          {menuItems}
        </ul>
      </div>
    )
  }
}
