import React from 'react'


export default class MenuItem extends React.Component {
  render() {
    return (
    <a
      className="menu-item"
      href={this.props.url}
    >
      {this.props.children}
    </a>
  )
  }
}
