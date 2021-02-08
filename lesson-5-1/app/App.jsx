import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Layout from './layouts/Layout.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Blog from './components/Blog.jsx'
import Contacts from './components/Contacts.jsx'
import NotFound from './components/NotFound.jsx'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Main}/>
      <Route path='about' component={About}/>
      <Route path='blog' component={Blog}/>
      <Route path='contacts' component={Contacts}/>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
