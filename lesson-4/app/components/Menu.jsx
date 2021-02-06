import React from 'react'
import MenuItem from './MenuItem.jsx'


export default class Menu extends React.Component {
  render() {
    console.log(this.props);

    const arrayItems = this.props.items.map((item, index) =>
      <MenuItem
        key={index}
        href={item.href}
      >
        {item.name}
      </MenuItem>
    )

    return (
      <>
        <h1>{this.props.title}</h1>
        <ul>
          {arrayItems}
        </ul>
      </>
    )
  }
}
