import React from 'react'

import MainPage from './MainPage.jsx'
import Login from './Login.jsx'
import Menu from './Menu.jsx'


export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Login />
        <Menu menuItems={this.props.data.menuItems}/>
        <MainPage> {this.props.data.content} </MainPage>
      </div>
    )
  }
}
