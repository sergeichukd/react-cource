import React from 'react';
import axios from 'axios'
import User from './User.jsx'

export default class UsersList extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      users: []
    };
    console.log('UsersList constructor')
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      console.log(response);
      let { data } = response;
      console.log(data);
      this.setState({
        users: data
      })
      console.log('State below')
      console.log(this.state.users)
      console.log(this.state.users.length)
      console.log(!this.state.users.length)
    })
  }

  render() {
    if (!this.state.users.length) {
      return null
    }
    let users = this.state.users.map((user, index) => <User key={index} {...user}/>)
    console.log(users)
    return (
      <div>
        <h1>Users</h1>
        {users}
      </div>
    )
  }
}
