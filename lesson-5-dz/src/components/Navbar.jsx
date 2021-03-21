import React from 'react'
import StoreIcon from '@material-ui/icons/Store'
import Container from '@material-ui/core/Container'

export default class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <Container>
          <span>
            <StoreIcon style={{ color: 'white' }}/>
          </span>
          <span className='navbar-header'>
            Sergeichuk Store
          </span>
        </Container>
      </div>
    )
  }
}
