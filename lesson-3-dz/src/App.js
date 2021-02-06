import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Layout from './components/Layout.jsx'
import data from '../data/mainContent.js'


class App extends React.Component {
  render() {
    return <Layout data={data}/>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
