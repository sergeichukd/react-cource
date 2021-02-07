import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/Layout.jsx'
import data from '../data/mainContent.js'
import './styles/menu.css'


class App extends React.Component {
  componentDidMount() {
    setTimeout(() => alert("Hello!"), 500)
  }
  render() {
    return <Layout data={data}/>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
