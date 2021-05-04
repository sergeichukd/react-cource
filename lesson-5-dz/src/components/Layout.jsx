import React from 'react'

import Navbar from './Navbar.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'
import RecipeDetails from './RecipeDetails.jsx'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Navbar />
        {/* <Main /> */}
        <RecipeDetails />
        <Footer data={this.props.footerData}/>
      </div>
    )
  }
}
