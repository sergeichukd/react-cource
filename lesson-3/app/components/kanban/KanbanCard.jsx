import React from 'react'

import KanbanCheckList from './KanbanCheckList.jsx'


export default class KanbanCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">
          {this.props.title}
        </div>
        <div className="card-details">
          {this.props.description}
          <KanbanCheckList
            id={this.props.id}
            tasks={this.props.tasks}
          />
        </div>
      </div>
    )
  }
}
