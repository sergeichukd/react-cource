import React from 'react'
import GoodCard from './GoodCard.jsx'

export default class Main extends React.Component {
  render() {
    const goodCards = [...Array(10).keys()].map((value, index) => <GoodCard key={index}/>)
    return <div className="good-cards">
      {goodCards}
    </div>
  }
}
