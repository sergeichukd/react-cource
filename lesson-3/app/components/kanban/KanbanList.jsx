import React from 'react'

import KanbanCard from './KanbanCard.jsx'


export default class KanbanList extends React.Component {
  render() {
    let cards = this.props.cards.map((card, index) => {
      return <KanbanCard
        id = {card.id}
        title = {card.title}
        description = {card.description}
        status = {card.status}
        tasks = {card.tasks}
        key = {index}
      />
    })
    return (
      <div className='canban-list'>
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    )
  }
}
