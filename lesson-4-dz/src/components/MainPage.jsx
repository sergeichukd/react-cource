import React from 'react'
import Post from './Post.jsx'


export default class MainPage extends React.Component {
  render () {
    console.log(this.props.posts)
    return (
      <div className="container main-page">
        <h1 className='main-page-header font-italic'>My first blog</h1>
        <p className='font-weight-lighter'>I will type here my thougts</p>
        <Post post={this.props.posts[0]}/>
      </div>
  )
  }
}
