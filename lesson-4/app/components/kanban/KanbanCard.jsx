import React from 'react'

import KanbanCheckList from './KanbanCheckList.jsx'


export default class KanbanCard extends React.Component {

  constructor() {
    console.log('called constructor')
    super();
    this.state = {
      showDetails: false,
      users: []
    };

    this.addUser = this.addUser.bind(this)
  }

  addUser(name, email) {
    let obj = {
      name,
      email
    }

    let myUsers = this.state.users
    myUsers.push(obj)

    this.setState({users: myUsers})

  }


  componentWillMount() {
    console.log('called componentWillMount')
  }

  componentDidMount() {
    console.log('called componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('called should componnt update')
    return true
  }

  componentWillUpdate() {
    console.log('called componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('called componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('called componentWillUnmount')
  }

  render() {
    console.log('Called render()', this.state.showDetails )
    let cardDetails = false;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card-details">
          {this.props.description}
          <KanbanCheckList
            id={this.props.id}
            tasks={this.props.tasks}
          />
        </div>
      )
    }

    let showUsers;
    if (this.state.users.length) {
      showUsers = '';
      for (let i = 0; i < this.state.length; i++){
        showUsers += ' ' + this.state.users[i];
      }
    }

    return (
      <div
        className="card"
        onClick={() => this.setState({ showDetails: !this.state.showDetails })}
      >
        <div className="card-title">
          {this.props.title}
        </div>
        {cardDetails}
        <div>
          <h4>Bounded users</h4>
          { showUsers }
          <button onClick={() => this.addUser('Lenka', '123.ru')}></button>
        </div>
      </div>
    )
  }
}
