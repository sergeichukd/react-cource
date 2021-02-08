import React from 'react';
import {Link} from 'react-router'

export default class Layout extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className="col-md-12">
            <ul>
              <li><Link to="/"></Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
