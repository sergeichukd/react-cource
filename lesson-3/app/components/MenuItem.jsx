import React from 'react'

export default class MenuItem extends React.Component {
  render() {
    return (
      <li className='menu-item'>
        <a href={this.props.href}>
          {this.props.children}
        </a>
      </li>
    )
  }
}
