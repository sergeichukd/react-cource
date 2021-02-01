import React from 'react'

import KanbanList from './KanbanList.jsx'


export default class KanbanBoard extends React.Component {
  render() {
    return (
      <div className='app'>
        <KanbanList
          id = 'todo'
          title='to do'
          cards={this.props.cards.filter(card => card.status === 'TODO')}
        />
        <KanbanList
          id = 'in-progress'
          title='in progress'
          cards={this.props.cards.filter(card => card.status === 'IN_PROGRESS')}
        />
        <KanbanList
          id = 'done'
          title='done'
          cards={this.props.cards.filter(card => card.status === 'DONE')}
        />
      </div>
    )
  }
}
