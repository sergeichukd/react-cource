import React from 'react'
import ReactDOM from 'react-dom'

import Menu from './components/Menu.jsx'


const items = [
  {name: "About us", href: "/about"},
  {name: "Services", href: "/services"},
  {name: "Blog", href: "/blog"},
  {name: "Contacts", href: "/contact"},
]


class App extends React.Component {
  render() {
    return (
      <div onClick={() => alert(1)}>
        <h1>The second react app</h1>
        <Menu
          title='The main menu'
          items={items}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
