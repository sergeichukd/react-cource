import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

import MenuItem from './MenuItem.jsx'
import Login from './Login.jsx'


export default class Menu extends React.Component {
  render() {
    let menuItems = this.props.menuItems.map((menuItem, index) => {
      console.log('menuItem', menuItem, 'index', index)
      return <Nav.Link href={menuItem.url} key={index}>{menuItem.name}</Nav.Link>
    })

    return (
      <div className="bg-light">
        <Container className="menu">
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              { menuItems }
            </Nav>
            <Login />
          </Navbar>
        </Container>
      </div>
    )
  }
}
