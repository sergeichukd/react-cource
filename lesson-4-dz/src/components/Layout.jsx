import React from 'react'

import MainPage from './MainPage.jsx'
import Menu from './Menu.jsx'
import data from '../../data/mainContent'


export default class Layout extends React.Component {
  render() {

    console.log(data)
    return (
      <div className="layout">
        <Menu menuItems={this.props.data.menuItems}/>
        <MainPage
          posts={data.posts}
        />
      </div>
    )
  }
}
