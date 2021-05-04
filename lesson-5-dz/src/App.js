import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/Layout.jsx'
import footerData from '../data/footer_data'

import './styles/navbar.css'
import './styles/content.css'
import './styles/footer.css'
import './styles/modal_windows.css'
import './styles/recipe_details.css'


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



// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


// class About extends React.Component{
//   render(){
//       return <h2>О сайте</h2>;
//   }
// }
// class NotFound extends React.Component{
//   render(){
//       return <h2>Ресурс не найден</h2>;
//   }
// }

// class Main extends React.Component{
//   render(){
//       return <h2>Главная</h2>;
//   }
// }






// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           {/* <Route exact path='/' component={<Layout footerData={footerData}/>}/> */}
//           <Route exact path='/' component={Main} />
//           <Route path='/about' component={About} />
//           <Route component={NotFound} />
//         </Switch>
//       </Router>
//     )
//   }
// }



// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route exact path="/" component={Main} />
//       <Route path="/about" component={About} />
//       <Route component={NotFound} />
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// )
