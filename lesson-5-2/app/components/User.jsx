import React from 'react';

export default class User extends React.Component {
  render() {
    return (
      <div className="pannel pannel-default">
        <div className="pannel-heading">
          <h3>{this.props.username}</h3>
        </div>
        <div className='pannel-body'>
          <p>{this.props.name}</p>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.website}</p>
        </div>
      </div>
    )
  }
}
