import React from 'react';
import { Link } from 'react-router'

export default class Blog extends React.Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor impedit officiis odit fuga itaque laboriosam esse ab voluptatem voluptatibus rem cumque doloremque aut assumenda necessitatibus aliquid, beatae modi dicta sequi?</p>
        <Link to='/PageNotFoundaaaaaaa'> Page not found</Link>
      </div>
    )
  }
}
