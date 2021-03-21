import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/Layout.jsx'
import footerData from '../data/footer_data'

import './styles/navbar.css'
import './styles/content.css'
import './styles/footer.css'


class App extends React.Component {
  render() {
    console.dir(footerData)
    return <Layout footerData={footerData}/>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
