import React from 'react'
import {Container, Navbar, Button} from 'react-bootstrap';


export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">
            <Button variant="outline-primary">Login</Button>
          </Navbar.Brand>
        </Navbar>
      </Container>
    )
  }
}
