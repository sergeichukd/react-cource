import React from 'react'


export default class MainPage extends React.Component {
  render () {
    return (
    <div className="main-page">
      <p>
        {this.props.children}
      </p>
    </div>
  )
  }
}
