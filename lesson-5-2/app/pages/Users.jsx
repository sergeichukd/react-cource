import React from 'react';
import UsersList from '../components/UsersList.jsx'

export default class Users extends React.Component {
  render() {
    console.log('Hello!')
    return (
      <div>
        <UsersList/>
      </div>
    )
  }
}
