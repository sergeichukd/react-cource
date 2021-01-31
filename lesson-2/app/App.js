import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return <h1>Our the first App on React</h1>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
