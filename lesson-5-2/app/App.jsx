import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, browserHistory} from 'react-router'

import Layout from './layouts/Layout.jsx'
import Main from './pages/Main.jsx'
import Users from './pages/Users.jsx'
import PageNotFound from './pages/PageNotFound.jsx'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Main} />
      <Route path='users' component={Users} />
      <Route path='*' component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
)
